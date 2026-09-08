const CDP = require('chrome-remote-interface');
(async () => {
  const target = await CDP.New({ port: 9223 });
  const client = await CDP({ port: 9223, target });
  const { Page, Emulation } = client;
  await Page.enable();
  await Emulation.setDeviceMetricsOverride({ width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await Page.navigate({ url: process.argv[2] });
  await Promise.race([Page.loadEventFired(), new Promise(r => setTimeout(r, 20000))]);
  await new Promise(r => setTimeout(r, 6000));
  const shot = await Page.captureScreenshot({ format: 'png' });
  require('fs').writeFileSync(process.argv[3], Buffer.from(shot.data, 'base64'));
  console.log('OK');
  await client.close();
  await CDP.Close({ port: 9223, id: target.id });
  process.exit(0);
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
