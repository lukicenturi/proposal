// General screenshot tool: node shot.js <url> <out.png> [width] [height] [dpr] [mobile01]
const CDP = require('chrome-remote-interface');
const url = process.argv[2], out = process.argv[3];
const width = parseInt(process.argv[4] || '1200', 10);
const height = parseInt(process.argv[5] || '630', 10);
const dpr = parseFloat(process.argv[6] || '1');
const mobile = process.argv[7] === '1';
(async () => {
  const target = await CDP.New({ port: 9223 });
  const client = await CDP({ port: 9223, target });
  const { Page, Emulation, Runtime } = client;
  await Page.enable();
  await Emulation.setDeviceMetricsOverride({ width, height, deviceScaleFactor: dpr, mobile });
  await Page.navigate({ url });
  await Promise.race([Page.loadEventFired(), new Promise(r => setTimeout(r, 25000))]);
  await new Promise(r => setTimeout(r, 6000));
  // Hide the demo watermark badge in mockup shots only; the live pages keep it.
  await Runtime.evaluate({ expression: 'document.querySelectorAll(".demo-badge").forEach(el => el.remove())' });
  const shot = await Page.captureScreenshot({ format: 'png' });
  require('fs').writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log('OK');
  await client.close();
  await CDP.Close({ port: 9223, id: target.id });
  process.exit(0);
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
