const targets = await (await fetch("http://127.0.0.1:9230/json/list")).json();
const tab = targets.find((target) => target.type === "page" && target.url.includes(":5179/"));
const socket = new WebSocket(tab.webSocketDebuggerUrl);
let next = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (pending.has(message.id)) pending.get(message.id)(message.result);
});
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
const send = (method, params = {}) => new Promise((resolve) => { const id = ++next; pending.set(id, resolve); socket.send(JSON.stringify({ id, method, params })); });
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://127.0.0.1:5179/connect" });
await new Promise((resolve) => setTimeout(resolve, 1200));
const result = await send("Runtime.evaluate", { expression: `JSON.stringify({url:location.href,title:document.title,styles:[".connect-page",".connect-header img",".connect-photo",".connect-layout",".connect-copy h1"].map(selector=>{const e=document.querySelector(selector),s=e&&getComputedStyle(e),r=e&&e.getBoundingClientRect();return {selector,found:!!e,display:s?.display,width:r?.width,height:r?.height,font:s?.fontFamily,background:s?.backgroundImage,position:s?.position}})})`, returnByValue: true });
console.log(result.result.value);
socket.close();
