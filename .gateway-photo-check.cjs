const fs = require('fs');
const http = require('http');
const viewports = [
  ['desktop-1440x900', 1440, 900, false],
  ['desktop-1366x768', 1366, 768, false],
  ['mobile-320x568', 320, 568, true],
  ['mobile-360x640', 360, 640, true],
  ['mobile-375x667', 375, 667, true],
  ['mobile-375x812', 375, 812, true],
  ['mobile-390x844', 390, 844, true],
  ['mobile-393x873', 393, 873, true],
  ['mobile-412x915', 412, 915, true],
  ['mobile-430x932', 430, 932, true],
];

http.get('http://127.0.0.1:9236/json', (response) => {
  let data = '';
  response.on('data', (chunk) => { data += chunk; });
  response.on('end', async () => {
    const page = JSON.parse(data).find((entry) => entry.type === 'page');
    const socket = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
    let nextId = 0;
    const pending = new Map();
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        pending.get(message.id)(message);
        pending.delete(message.id);
      }
    };
    const call = (method, params = {}) => new Promise((resolve) => {
      const id = ++nextId;
      pending.set(id, resolve);
      socket.send(JSON.stringify({ id, method, params }));
    });

    await call('Page.navigate', { url: 'http://127.0.0.1:5173/' });
    await new Promise((resolve) => setTimeout(resolve, 600));
    for (const [name, width, height, mobile] of viewports) {
      await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height });
      await call('Emulation.setTouchEmulationEnabled', { enabled: mobile });
      await new Promise((resolve) => setTimeout(resolve, 150));
      const result = await call('Runtime.evaluate', {
        expression: `JSON.stringify({viewport:[innerWidth,innerHeight],document:[document.documentElement.clientWidth,document.documentElement.clientHeight,document.documentElement.scrollWidth,document.documentElement.scrollHeight],body:[document.body.clientWidth,document.body.clientHeight,document.body.scrollWidth,document.body.scrollHeight],cards:[...document.querySelectorAll('.gateway-card')].map(x=>({route:x.getAttribute('href'),bounds:[Math.round(x.getBoundingClientRect().top),Math.round(x.getBoundingClientRect().bottom),Math.round(x.getBoundingClientRect().height)],photo:getComputedStyle(x,'::before').backgroundImage})),background:getComputedStyle(document.querySelector('.gateway-page'),'::before').backgroundImage,images:performance.getEntriesByType('resource').filter(x=>x.name.includes('/images/gateway/')).map(x=>x.name.split('/').pop())})`,
        returnByValue: true,
      });
      const metrics = JSON.parse(result.result.result.value);
      const screenshot = await call('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`.gateway-photographic-${name}.png`, Buffer.from(screenshot.result.data, 'base64'));
      console.log(`${name} ${JSON.stringify(metrics)}`);
    }

    for (const route of ['/business', '/developer', '/connect']) {
      await call('Page.navigate', { url: `http://127.0.0.1:5173${route}` });
      await new Promise((resolve) => setTimeout(resolve, 500));
      const routeResult = await call('Runtime.evaluate', { expression: `JSON.stringify({path:location.pathname,heading:document.querySelector('h1')?.innerText||document.querySelector('h2')?.innerText})`, returnByValue: true });
      console.log(`route ${route} ${routeResult.result.result.value}`);
    }
    socket.close();
  });
});
