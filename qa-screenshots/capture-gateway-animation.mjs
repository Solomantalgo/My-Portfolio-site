import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'qa-screenshots', 'gateway-final');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'http://127.0.0.1:5181/';
const FIRST_LINE = 'I build, explore and connect.';
const FINAL_LINE = 'Choose your path.';
fs.mkdirSync(output, { recursive: true });

const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'gateway-chrome-'));
const chrome = spawn(chromePath, [
  '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-extensions', '--no-first-run',
  '--disable-background-networking', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore', windowsHide: true });

let browser;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function waitForPortFile() {
  const file = path.join(profile, 'DevToolsActivePort');
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (fs.existsSync(file)) {
      const [port, socketPath] = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/);
      return { port, socketPath };
    }
    if (chrome.exitCode !== null) throw new Error(`Chrome exited with ${chrome.exitCode}`);
    await wait(100);
  }
  throw new Error('Chrome DevTools endpoint did not start');
}

function connect(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  const listeners = new Map();
  let sequence = 0;
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
    } else if (message.method && listeners.has(message.method)) {
      for (const listener of listeners.get(message.method)) listener(message.params);
    }
  });
  socket.addEventListener('close', () => {
    for (const { reject } of pending.values()) reject(new Error(`Chrome DevTools socket closed: ${url}`));
    pending.clear();
  });
  socket.addEventListener('error', () => {
    for (const { reject } of pending.values()) reject(new Error(`Chrome DevTools socket failed: ${url}`));
    pending.clear();
  });
  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
  return {
    socket,
    ready,
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = ++sequence;
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    on(method, listener) {
      listeners.set(method, [...(listeners.get(method) || []), listener]);
    },
    close() { socket.close(); },
  };
}

async function createPage(browserConnection) {
  const { targetId } = await browserConnection.send('Target.createTarget', { url: 'about:blank' });
  const targets = await (await fetch(`http://127.0.0.1:${browserPort}/json/list`)).json();
  const target = targets.find((entry) => entry.id === targetId);
  if (!target) throw new Error(`Could not find Chrome target ${targetId}`);
  const page = connect(target.webSocketDebuggerUrl);
  await page.ready;
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  return { targetId, page };
}

async function evaluate(page, expression, awaitPromise = false) {
  const result = await page.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Browser evaluation failed');
  return result.result?.value;
}

async function waitFor(page, expression, timeout = 12000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await evaluate(page, expression)) return;
    await wait(40);
  }
  const detail = await evaluate(page, `JSON.stringify({url:location.href,title:document.title,body:document.body?.innerText?.slice(0,300),classes:document.querySelector('.gateway-option2')?.className})`).catch(() => 'no page state');
  throw new Error(`Timed out waiting for ${expression}; page=${detail}`);
}

async function screenshot(page, name) {
  const shot = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true });
  fs.writeFileSync(path.join(output, name), Buffer.from(shot.data, 'base64'));
}

async function captureSequence(browserConnection, { label, width, height, mobile }) {
  const { targetId: pageTargetId, page } = await createPage(browserConnection);
  const { targetId: recorderTargetId, page: recorder } = await createPage(browserConnection);
  const runtimeErrors = [];
  page.on('Runtime.exceptionThrown', (event) => runtimeErrors.push(event.exceptionDetails?.text || 'Runtime exception'));
  page.on('Network.loadingFailed', (event) => runtimeErrors.push(`Request failed: ${event.errorText}`));
  await page.send('Network.enable');
  await page.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height });
  await browserConnection.send('Target.activateTarget', { targetId: pageTargetId });
  await page.send('Page.setWebLifecycleState', { state: 'active' });
  await page.send('Page.navigate', { url: baseUrl });
  await waitFor(page, `Boolean(document.querySelector('.gateway-option2'))`);

  const recorderSetup = `(() => {
    const canvas = document.createElement('canvas'); canvas.width = ${width}; canvas.height = ${height};
    canvas.style.cssText = 'position:fixed;left:-12000px;top:0;width:${width}px;height:${height}px'; document.body.appendChild(canvas);
    const context = canvas.getContext('2d'); const stream = canvas.captureStream(0); const track = stream.getVideoTracks()[0];
    const chunks = []; const recorder = new MediaRecorder(stream, {mimeType:'video/webm;codecs=vp8', videoBitsPerSecond:900000});
    recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); }; recorder.start(250);
    window.__gatewayDrawFrame = data => new Promise(resolve => { const image = new Image(); image.onload = () => { context.drawImage(image,0,0,canvas.width,canvas.height); track.requestFrame(); resolve(true); }; image.onerror = () => resolve(false); image.src = 'data:image/jpeg;base64,' + data; });
    window.__gatewayStopRecording = () => new Promise(resolve => { recorder.onstop = async () => { const blob = new Blob(chunks,{type:'video/webm'}); const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.readAsDataURL(blob); }; recorder.stop(); });
    return true;
  })()`;
  if (!await evaluate(recorder, recorderSetup)) throw new Error(`Could not initialize ${label} video recorder`);

  await browserConnection.send('Target.activateTarget', { targetId: pageTargetId });
  await page.send('Page.setWebLifecycleState', { state: 'active' });
  await page.send('Page.startScreencast', { format: 'jpeg', quality: 64, maxWidth: width, maxHeight: height, everyNthFrame: 2 });
  let frameQueue = Promise.resolve();
  let lastRecordedFrame = 0;
  let frameCount = 0;
  let recording = true;
  page.on('Page.screencastFrame', ({ sessionId, data }) => {
    const now = Date.now();
    if (recording && now - lastRecordedFrame >= 95) {
      lastRecordedFrame = now;
      frameCount += 1;
      frameQueue = frameQueue.then(() => evaluate(recorder, `window.__gatewayDrawFrame(${JSON.stringify(data)})`, true)).catch((error) => console.error(error));
    }
    page.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
  });

  await wait(120);
  const reloadStart = Date.now();
  await page.send('Page.reload', { ignoreCache: true });
  await waitFor(page, `Boolean(document.querySelector('.gateway-option2') && document.querySelector('.gateway-intro h1'))`);
  const taken = new Set();
  let sequenceCompletedMs = null;
  const timedCapture = async (key, file) => {
    if (taken.has(key)) return;
    taken.add(key);
    await screenshot(page, file);
  };
  await waitFor(page, `document.querySelector('.gateway-subtitle-text') && document.querySelector('.gateway-subtitle-text').textContent.length === 0`);
  await timedCapture('start', `${label}-01-reload-start.png`);

  const endAt = reloadStart + 10000;
  while (Date.now() < endAt) {
    const state = await evaluate(page, `JSON.stringify({text:document.querySelector('.gateway-subtitle-text')?.textContent||'',entering:document.querySelector('.gateway-option2')?.classList.contains('is-card-entering'),done:!document.querySelector('.gateway-option2')?.classList.contains('is-sequencing')})`);
    const { text: current, entering, done } = JSON.parse(state);
    if (current.startsWith('I build') && current.length >= 8 && current.length < 20) await timedCapture('first-mid', `${label}-02-first-subtitle-typing.png`);
    if (current === FIRST_LINE) await timedCapture('first-complete', `${label}-03-first-sentence-complete.png`);
    if (current.startsWith('I build') && current.length >= 16 && current.length < FIRST_LINE.length) await timedCapture('deleting', `${label}-04-first-sentence-deleting.png`);
    if (current.startsWith('Choose') && current.length < FINAL_LINE.length) await timedCapture('replacement', `${label}-05-final-sentence-typing.png`);
    if (entering) await timedCapture('cards', `${label}-06-cards-entering.png`);
    if (done) { sequenceCompletedMs = Date.now() - reloadStart; break; }
    await wait(45);
  }
  await wait(650);
  await screenshot(page, `${label}-07-final.png`);
  recording = false;
  await page.send('Page.stopScreencast');
  await frameQueue;
  const videoData = await evaluate(recorder, 'window.__gatewayStopRecording()', true);
  fs.writeFileSync(path.join(output, `${label}-hard-reload.webm`), Buffer.from(videoData.split(',')[1], 'base64'));

  const checks = mobile
    ? [[320, 568, true], [375, 667, true], [390, 844, true]]
    : [[1366, 768, false], [1440, 900, false], [1920, 1080, false]];
  const viewportMetrics = [];
  for (const [checkWidth, checkHeight, checkMobile] of checks) {
    await page.send('Emulation.setDeviceMetricsOverride', { width: checkWidth, height: checkHeight, deviceScaleFactor: 1, mobile: checkMobile, screenWidth: checkWidth, screenHeight: checkHeight });
    await wait(80);
    await screenshot(page, `${label}-viewport-${checkWidth}x${checkHeight}.png`);
    viewportMetrics.push(JSON.parse(await evaluate(page, `JSON.stringify({viewport:[innerWidth,innerHeight],client:[document.documentElement.clientWidth,document.documentElement.clientHeight],scroll:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],cards:[...document.querySelectorAll('.gateway-destination')].map(a=>({href:a.getAttribute('href'),rect:Object.values(a.getBoundingClientRect().toJSON()).slice(0,4)}))})`)));
  }
  const { targetId: reducedTargetId, page: reducedPage } = await createPage(browserConnection);
  const reducedErrors = [];
  reducedPage.on('Runtime.exceptionThrown', (event) => reducedErrors.push(event.exceptionDetails?.text || 'Runtime exception'));
  await reducedPage.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height });
  await reducedPage.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await browserConnection.send('Target.activateTarget', { targetId: reducedTargetId });
  await reducedPage.send('Page.setWebLifecycleState', { state: 'active' });
  const reducedMotionStart = Date.now();
  await reducedPage.send('Page.navigate', { url: baseUrl });
  await waitFor(reducedPage, `document.querySelector('.gateway-option2:not(.is-sequencing)') && document.querySelector('.gateway-subtitle-text')?.textContent === ${JSON.stringify(FINAL_LINE)}`, 2500);
  const reducedMotionMs = Date.now() - reducedMotionStart;
  await wait(100);
  await screenshot(reducedPage, `${label}-reduced-motion-final.png`);
  const reducedMotion = JSON.parse(await evaluate(reducedPage, `JSON.stringify({subtitle:document.querySelector('.gateway-subtitle-text')?.textContent,cards:[...document.querySelectorAll('.gateway-destination')].map(a=>getComputedStyle(a).opacity),sequence:document.querySelector('.gateway-option2')?.classList.contains('is-sequencing')})`));
  await reducedPage.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  await reducedPage.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  const keyboard = JSON.parse(await evaluate(reducedPage, `JSON.stringify({href:document.activeElement?.getAttribute('href'),outline:getComputedStyle(document.activeElement).outlineStyle})`));
  const routeStatus = await evaluate(reducedPage, `Promise.all(['/business','/developer','/connect'].map(async href=>[href,(await fetch(href)).status]))`, true);
  const metrics = await evaluate(page, `JSON.stringify({viewport:[innerWidth,innerHeight],client:[document.documentElement.clientWidth,document.documentElement.clientHeight],scroll:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],headline:document.querySelector('.gateway-intro h1')?.innerText,subtitle:document.querySelector('.gateway-subtitle-text')?.textContent,links:[...document.querySelectorAll('.gateway-destination')].map(a=>a.getAttribute('href')),image:[...document.images].map(i=>({src:i.currentSrc,complete:i.complete,size:[i.naturalWidth,i.naturalHeight]})),bounds:[...document.querySelectorAll('.gateway-option2,.gateway-header,.gateway-header img,.gateway-stage,.gateway-intro,.gateway-photo,.gateway-destinations,.gateway-destination,.gateway-footer')].map(e=>({class:e.className,rect:Object.values(e.getBoundingClientRect().toJSON()).slice(0,4),padding:getComputedStyle(e).padding,margin:getComputedStyle(e).margin})),frames:${frameCount}})`);
  fs.writeFileSync(path.join(output, `${label}-metrics.json`), `${JSON.stringify({ ...JSON.parse(metrics), sequenceCompletedMs, viewportChecks: viewportMetrics, reducedMotion: { ...reducedMotion, readyMs: reducedMotionMs }, keyboard, routeStatus, runtimeErrors: [...runtimeErrors, ...reducedErrors] }, null, 2)}\n`);
  reducedPage.close();
  page.close(); recorder.close();
  await browserConnection.send('Target.closeTarget', { targetId: pageTargetId });
  await browserConnection.send('Target.closeTarget', { targetId: recorderTargetId });
  await browserConnection.send('Target.closeTarget', { targetId: reducedTargetId });
}

const { port: browserPortValue, socketPath } = await waitForPortFile();
const browserPort = browserPortValue;
browser = connect(`ws://127.0.0.1:${browserPort}${socketPath}`);
await browser.ready;
try {
  console.log(`Writing gateway capture artifacts to ${output}`);
  const captures = process.argv.includes('--mobile-only')
    ? [{ label: 'mobile-390x844', width: 390, height: 844, mobile: true }]
    : [
      { label: 'mobile-390x844', width: 390, height: 844, mobile: true },
      { label: 'desktop-1440x900', width: 1440, height: 900, mobile: false },
    ];
  for (const capture of captures) await captureSequence(browser, capture);
  fs.writeFileSync(path.join(output, 'capture-summary.txt'), 'Gateway animation captures: mobile and desktop use Chrome headless CDP Page.reload(ignoreCache=true). Videos contain the hard-reload animation from start through card entry.\n');
} catch (error) {
  console.error('Gateway capture failed:', error);
  throw error;
} finally {
  browser.close();
  chrome.kill();
  await Promise.race([new Promise((resolve) => chrome.once('exit', resolve)), wait(5000)]);
  await wait(500);
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
}
