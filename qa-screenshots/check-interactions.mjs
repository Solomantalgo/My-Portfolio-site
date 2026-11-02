const base = "http://127.0.0.1:5179";
const version = await (await fetch("http://127.0.0.1:9230/json/version")).json();
const browser = new WebSocket(version.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
browser.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
});
await new Promise((resolve) => browser.addEventListener("open", resolve, { once: true }));
const send = (method, params = {}) => new Promise((resolve) => {
  const command = ++id; pending.set(command, resolve); browser.send(JSON.stringify({ id: command, method, params }));
});
async function open(path) {
  const { targetId } = await send("Target.createTarget", { url: `${base}${path}` });
  const list = await (await fetch("http://127.0.0.1:9230/json/list")).json();
  const ws = new WebSocket(list.find((x) => x.id === targetId).webSocketDebuggerUrl);
  let pageId = 0; const pagePending = new Map();
  ws.addEventListener("message", (event) => { const msg = JSON.parse(event.data); if (msg.id && pagePending.has(msg.id)) { pagePending.get(msg.id)(msg.result); pagePending.delete(msg.id); } });
  await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));
  const call = (method, params = {}) => new Promise((resolve) => { const command = ++pageId; pagePending.set(command, resolve); ws.send(JSON.stringify({ id: command, method, params })); });
  await call("Page.enable"); await call("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  for (let n = 0; n < 30; n++) { const res = await call("Runtime.evaluate", { expression: `Boolean(document.querySelector('h1'))`, returnByValue: true }); if (res.result.value) break; await new Promise((resolve) => setTimeout(resolve, 150)); }
  return { targetId, ws, call };
}
async function evaluate(page, expression) { return (await page.call("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result.value; }

const gateway = await open("/");
const cards = await evaluate(gateway, `JSON.stringify([...document.querySelectorAll('.studio-destination')].map(a=>a.getAttribute('href')))`);
await gateway.call("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
const focus = await evaluate(gateway, `JSON.stringify({tag:document.activeElement.tagName,outline:getComputedStyle(document.activeElement).outlineStyle,alt:document.activeElement.querySelector('img')?.alt})`);
await evaluate(gateway, `document.querySelector('.studio-destination[href="/developer"]').click()`);
await new Promise((resolve) => setTimeout(resolve, 350));
const clickedRoute = await evaluate(gateway, "location.pathname");
console.log(`gateway links=${cards} keyboard-focus=${focus} clicked=${clickedRoute}`);
gateway.ws.close(); await send("Target.closeTarget", { targetId: gateway.targetId });

const business = await open("/business");
console.log(`business CTA=${await evaluate(business, `JSON.stringify([...document.querySelectorAll('.business-hero-actions a')].map(a=>a.getAttribute('href')))`)} real-work=${await evaluate(business, `document.querySelectorAll('.real-work-section img').length`)}`);
await evaluate(business, `[...document.images].forEach(x=>x.loading='eager')`);
await new Promise((resolve) => setTimeout(resolve, 500));
console.log(`business image status=${await evaluate(business, `JSON.stringify([...document.images].map(x=>({alt:x.alt,src:x.currentSrc,loaded:x.complete&&x.naturalWidth>0})))`)}`);
console.log(`business hero background=${await evaluate(business, `JSON.stringify((()=>{const x=getComputedStyle(document.querySelector('.business-hero'),'::before');return {position:x.position,width:x.width,height:x.height,right:x.right,top:x.top,radius:x.borderRadius,image:x.backgroundImage}})())`)}`);
business.ws.close(); await send("Target.closeTarget", { targetId: business.targetId });

const developer = await open("/developer");
const cv = await evaluate(developer, `(async()=>{const a=document.querySelector('a[download]');return JSON.stringify({href:a?.getAttribute('href'),status:await (await fetch(a.href,{method:'HEAD'})).status,projects:document.querySelector('.dev-hero .actions a.outline')?.getAttribute('href')})})()`);
console.log(`developer CV=${cv}`);
console.log(`developer image status=${await evaluate(developer, `JSON.stringify([...document.images].map(x=>({alt:x.alt,loaded:x.complete&&x.naturalWidth>0})))`)}`);
developer.ws.close(); await send("Target.closeTarget", { targetId: developer.targetId });

const connect = await open("/connect");
console.log(`connect actions=${await evaluate(connect, `JSON.stringify([...document.querySelectorAll('.connect-actions a,.connect-footer a')].map(a=>({href:a.getAttribute('href'),height:Math.round(a.getBoundingClientRect().height)})))`)}`);
console.log(`connect image status=${await evaluate(connect, `JSON.stringify([...document.images].map(x=>({alt:x.alt,loaded:x.complete&&x.naturalWidth>0})))`)}`);
connect.ws.close(); await send("Target.closeTarget", { targetId: connect.targetId });

const links = await open("/links");
const accordion = await evaluate(links, `(async()=>{const b=document.querySelector('.links-accordion>button');const initial=b?.getAttribute('aria-expanded');const openCount=document.querySelectorAll('.link-card').length;b?.click();await new Promise(r=>setTimeout(r,50));return JSON.stringify({initial,openCount,after:b?.getAttribute('aria-expanded'),closedCount:document.querySelectorAll('.link-card').length})})()`);
console.log(`links accordion=${accordion}`);
links.ws.close(); await send("Target.closeTarget", { targetId: links.targetId }); browser.close();
