// Shared demo watermark badge, injected into every client demo page.
// Update CONFIG once and all demos change together.
(function () {
  var CONFIG = {
    label: 'DEMO PREVIEW',
    note: 'Desain proposal, bukan situs resmi',
    ctaText: 'Tertarik? Hubungi saya',
    // TODO: replace with your WhatsApp link, e.g. https://wa.me/628123456789
    ctaHref: 'mailto:lukicenturi@gmail.com',
  };

  var style = document.createElement('style');
  style.textContent =
    '.demo-badge{position:fixed;right:16px;bottom:16px;z-index:99999;' +
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
    'background:rgba(17,17,17,.92);color:#fff;border-radius:12px;' +
    'box-shadow:0 8px 24px rgba(0,0,0,.35);padding:10px 14px;max-width:240px;' +
    'font-size:12px;line-height:1.45;backdrop-filter:blur(6px)}' +
    '.demo-badge b{display:inline-flex;align-items:center;gap:6px;' +
    'font-size:11px;letter-spacing:.12em;color:#fbbf24}' +
    '.demo-badge b::before{content:"";width:7px;height:7px;border-radius:50%;' +
    'background:#fbbf24;animation:demo-badge-pulse 1.6s ease-in-out infinite}' +
    '.demo-badge p{margin:4px 0 6px;color:rgba(255,255,255,.75)}' +
    '.demo-badge a{color:#fff;font-weight:600;text-decoration:underline;' +
    'text-underline-offset:3px}' +
    '@keyframes demo-badge-pulse{50%{opacity:.35}}' +
    '@media print{.demo-badge{display:block}}';
  document.head.appendChild(style);

  var badge = document.createElement('div');
  badge.className = 'demo-badge';
  badge.innerHTML =
    '<b>' + CONFIG.label + '</b>' +
    '<p>' + CONFIG.note + '</p>' +
    '<a href="' + CONFIG.ctaHref + '">' + CONFIG.ctaText + ' →</a>';
  document.body.appendChild(badge);
})();
