import fs from "node:fs";

const base = "http://127.0.0.1:5179";
const version = await (await fetch("http://127.0.0.1:9230/json/version")).json();
const browser = new WebSocket(version.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
browser.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const resolve = pending.get(message.id);
    pending.delete(message.id);
    resolve(message.error ? { error: message.error } : message.result);
  }
});
await new Promise((resolve) => browser.addEventListener("open", resolve, { once: true }));
const browserSend = (method, params = {}) => new Promise((resolve) => {
  const commandId = ++id;
  pending.set(commandId, resolve);
  browser.send(JSON.stringify({ id: commandId, method, params }));
});

const sizes = [[1366,768,false],[1440,900,false],[1920,1080,false],[320,568,true],[375,667,true],[390,844,true]];
const pages = ["gateway","connect","developer"].flatMap((route)=>sizes.map(([width,height,mobile])=>[route,route==="gateway"?"/":`/${route}`,width,height,mobile]));
fs.writeFileSync("qa-screenshots/exact-viewport-metrics.txt", "");
for (const [route, path, width, height, mobile] of pages) {
  const created = await browserSend("Target.createTarget", { url: "about:blank" });
  if (!created?.targetId) throw new Error(`Target.createTarget failed: ${JSON.stringify(created)}`);
  const list = await (await fetch("http://127.0.0.1:9230/json/list")).json();
  const target = list.find((item) => item.id === created.targetId);
  const page = new WebSocket(target.webSocketDebuggerUrl);
  let pageId = 0;
  const failedRequests = [];
  const pagePending = new Map();
  page.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.method === "Network.loadingFailed") failedRequests.push(message.params);
    if (message.id && pagePending.has(message.id)) {
      const resolve = pagePending.get(message.id);
      pagePending.delete(message.id);
      resolve(message.result);
    }
  });
  await new Promise((resolve) => page.addEventListener("open", resolve, { once: true }));
  const send = (method, params = {}) => new Promise((resolve) => {
    const commandId = ++pageId;
    pagePending.set(commandId, resolve);
    page.send(JSON.stringify({ id: commandId, method, params }));
  });
  await send("Page.enable");
  await send("Network.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height });
  await send("Page.navigate", { url: `${base}${path}` });
  for (let attempt = 0; attempt < 30; attempt++) {
    const ready = await send("Runtime.evaluate", { expression: `Boolean(document.querySelector("h1"))`, returnByValue: true });
    if (ready.result.value) break;
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  await new Promise((resolve) => setTimeout(resolve, 250));
  const meta = await send("Runtime.evaluate", { expression: `JSON.stringify({url:location.href,viewport:[innerWidth,innerHeight],client:[document.documentElement.clientWidth,document.documentElement.clientHeight],scroll:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],images:[...document.images].map(i=>({src:i.currentSrc,complete:i.complete,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight})),overflow:[...document.querySelectorAll("body,main,.studio-gateway,.studio-destinations,.connect-page,.connect-photo,.connect-copy,.connect-identity,.connect-identity img,.developer,.dev-hero,.dev-hero h1,.actions,#projects,.featured-engineering-project")].map(e=>({el:e.tagName.toLowerCase()+(e.className&&typeof e.className==="string"?"."+e.className.trim().replaceAll(" ","."):""),rect:[Math.round(e.getBoundingClientRect().left),Math.round(e.getBoundingClientRect().right),Math.round(e.getBoundingClientRect().top),Math.round(e.getBoundingClientRect().bottom)],scroll:[e.scrollWidth,e.clientWidth],overflow:getComputedStyle(e).overflowX})),extenders:[...document.querySelectorAll("body *")].filter(e=>{const r=e.getBoundingClientRect();return r.left < -1 || r.right > innerWidth+1 || e.scrollWidth > e.clientWidth+1}).slice(0,30).map(e=>{const r=e.getBoundingClientRect();return [e.tagName.toLowerCase(),typeof e.className==="string"?e.className:"",Math.round(r.left),Math.round(r.right),e.scrollWidth,e.clientWidth,getComputedStyle(e).overflowX]}),gatewayGrid:document.querySelector(".studio-gateway")?getComputedStyle(document.querySelector(".studio-gateway")).gridTemplateRows:null})`, returnByValue: true });
  const viewport = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
  const suffix = width >= 1200 ? `desktop-${width}x${height}` : `mobile-${width}x${height}`;
  fs.writeFileSync(`qa-screenshots/viewport-${route}-${suffix}.png`, Buffer.from(viewport.data, "base64"));
  fs.appendFileSync("qa-screenshots/exact-viewport-metrics.txt", `${route} ${suffix} ${meta.result.value} failedRequests=${JSON.stringify(failedRequests)}\n`);
  page.close();
  await browserSend("Target.closeTarget", { targetId: created.targetId });
}
browser.close();
