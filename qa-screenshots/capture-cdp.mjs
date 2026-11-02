import fs from "node:fs";

const targets = await (await fetch("http://127.0.0.1:9230/json/list")).json();
const tab = targets.find((target) => target.type === "page" && target.url.includes(":5179/"));
const socket = new WebSocket(tab.webSocketDebuggerUrl);
let sequence = 0;
const pending = new Map();
const events = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(message.error) : resolve(message.result);
  } else if (message.method && events.has(message.method)) {
    for (const resolve of events.get(message.method)) resolve(message.params);
    events.delete(message.method);
  }
});
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});
const event = (name) => new Promise((resolve) => {
  events.set(name, [...(events.get(name) || []), resolve]);
});
await send("Page.enable");
const pages = [
  ["gateway", "/", 1440, 900, false],
  ["gateway", "/", 320, 568, true],
  ["gateway", "/", 375, 667, true],
  ["gateway", "/", 390, 844, true],
  ["business", "/business", 1440, 900, false],
  ["business", "/business", 390, 844, true],
  ["developer", "/developer", 1440, 900, false],
  ["developer", "/developer", 390, 844, true],
  ["connect", "/connect", 1440, 900, false],
  ["connect", "/connect", 390, 844, true],
  ["links", "/links", 1440, 900, false],
  ["links", "/links", 390, 844, true],
];
for (const [route, path, width, height, mobile] of pages) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height });
  const loaded = event("Page.loadEventFired");
  await send("Page.navigate", { url: `http://127.0.0.1:5179${path}` });
  await loaded;
  for (let attempt = 0; attempt < 20; attempt++) {
    const location = await send("Runtime.evaluate", { expression: "location.pathname", returnByValue: true });
    if (location.result.value === path || (path === "/" && location.result.value === "/")) break;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  const report = await send("Runtime.evaluate", { expression: `JSON.stringify({url:location.href,title:document.title,h1:document.querySelector("h1")?.innerText,width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight})`, returnByValue: true });
  const viewport = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
  const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, fromSurface: true });
  const suffix = width === 1440 ? "desktop" : `mobile-${width}`;
  fs.writeFileSync(`qa-screenshots/viewport-${route}-${suffix}.png`, Buffer.from(viewport.data, "base64"));
  fs.writeFileSync(`qa-screenshots/after-${route}-${suffix}.png`, Buffer.from(screenshot.data, "base64"));
  fs.appendFileSync("qa-screenshots/viewport-metrics.txt", `${route} ${suffix} ${report.result.value}\n`);
}
socket.close();
