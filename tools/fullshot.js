// Full-page screenshot: node fullshot.js <url> <out.png> [width] [dpr] [mobile01]
// Captures in segments (Chrome caps a capture at 16384 device px) and stitches with Pillow.
const CDP = require('chrome-remote-interface');
const fs = require('fs');
const { execFileSync } = require('child_process');
const url = process.argv[2], out = process.argv[3];
const width = parseInt(process.argv[4] || '1440', 10);
const dpr = parseFloat(process.argv[5] || '1');
const mobile = process.argv[6] === '1';
(async () => {
  const target = await CDP.New({ port: 9223 });
  const client = await CDP({ port: 9223, target });
  const { Page, Emulation, Runtime } = client;
  await Page.enable();
  await Emulation.setDeviceMetricsOverride({ width, height: 900, deviceScaleFactor: dpr, mobile });
  await Page.navigate({ url });
  await Promise.race([Page.loadEventFired(), new Promise(r => setTimeout(r, 25000))]);
  await new Promise(r => setTimeout(r, 4000));
  await Runtime.evaluate({ expression: `(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); document.querySelectorAll('.demo-badge').forEach(el => el.remove()); })()`, awaitPromise: true });
  await new Promise(r => setTimeout(r, 1500));
  const measure = async () => (await Runtime.evaluate({ expression: 'document.documentElement.scrollHeight' })).result.value;
  let height = await measure();
  const seg = Math.floor(15000 / dpr);
  const parts = [];
  await Emulation.setDeviceMetricsOverride({ width, height, deviceScaleFactor: dpr, mobile });
  // A taller viewport can grow vh-based sections (e.g. a hero capped at 960px), so re-measure and resize (max twice).
  for (let i = 0; i < 2; i++) {
    await new Promise(r => setTimeout(r, 600));
    const next = await measure();
    if (next <= height) break;
    height = next;
    await Emulation.setDeviceMetricsOverride({ width, height, deviceScaleFactor: dpr, mobile });
  }
  await Runtime.evaluate({ expression: 'window.scrollTo(0, 0)' });
  await new Promise(r => setTimeout(r, 1200));
  for (let y = 0; y < height; y += seg) {
    const h = Math.min(seg, height - y);
    const shot = await Page.captureScreenshot({ format: 'png', captureBeyondViewport: true, clip: { x: 0, y, width, height: h, scale: 1 } });
    const p = `${out}.part${parts.length}.png`;
    fs.writeFileSync(p, Buffer.from(shot.data, 'base64'));
    parts.push(p);
  }
  if (parts.length === 1) fs.renameSync(parts[0], out);
  else {
    execFileSync('python3', ['-c', `
from PIL import Image; import sys
parts=sys.argv[2:]; ims=[Image.open(p) for p in parts]
w=ims[0].width; H=sum(i.height for i in ims); out=Image.new('RGB',(w,H),'white'); y=0
for i in ims: out.paste(i,(0,y)); y+=i.height
out.save(sys.argv[1])`, out, ...parts]);
    parts.forEach(p => fs.unlinkSync(p));
  }
  console.log('OK', width + 'x' + height, parts.length + ' segment(s)');
  await client.close();
  await CDP.Close({ port: 9223, id: target.id });
  process.exit(0);
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
