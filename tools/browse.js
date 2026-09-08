// Robust CDP viewer: navigate, wait for load, dump text + screenshot.
const CDP = require('chrome-remote-interface');
const url = process.argv[2], out = process.argv[3];
(async () => {
  const target = await CDP.New({ port: 9223 });
  const client = await CDP({ port: 9223, target });
  const { Page, Runtime } = client;
  await Page.enable();
  await Page.navigate({ url });
  await Promise.race([Page.loadEventFired(), new Promise(r => setTimeout(r, 25000))]);
  await new Promise(r => setTimeout(r, 6000));
  const text = await Runtime.evaluate({
    expression: 'document.title + "\\n===TEXT===\\n" + document.body.innerText.slice(0, 6000)',
    returnByValue: true,
  });
  console.log(text.result.value);
  const shot = await Page.captureScreenshot({ format: 'png' });
  require('fs').writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log('SCREENSHOT OK');
  await client.close();
  await CDP.Close({ port: 9223, id: target.id });
  process.exit(0);
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
