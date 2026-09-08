// Shared demo watermark badge, injected into every client demo page.
// Update CONFIG once and all demos change together.
(function () {
  var ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.53 14.9L2 22l5.25-1.47A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.11.87.86-3.04-.2-.31a8.2 8.2 0 1 1 6.89 3.8zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.66.3-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  };

  var CONFIG = {
    label: 'DEMO PREVIEW',
    note: 'Desain proposal, bukan situs resmi',
    ctaText: 'Tertarik? Hubungi saya:',
    contacts: [
      { icon: 'whatsapp', text: 'WhatsApp', href: 'https://wa.me/6285856680484' },
      { icon: 'instagram', text: 'Instagram', href: 'https://instagram.com/lukicenturi' },
      { icon: 'email', text: 'Email', href: 'mailto:lukicenturi@gmail.com' },
    ],
  };

  var style = document.createElement('style');
  style.textContent =
    '.demo-badge{position:fixed;right:16px;bottom:16px;z-index:99999;' +
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
    'background:rgba(17,17,17,.92);color:#fff;border-radius:12px;' +
    'box-shadow:0 8px 24px rgba(0,0,0,.35);padding:10px 14px 12px;max-width:240px;' +
    'font-size:12px;line-height:1.45;backdrop-filter:blur(6px)}' +
    '.demo-badge b{display:inline-flex;align-items:center;gap:6px;' +
    'font-size:11px;letter-spacing:.12em;color:#fbbf24}' +
    '.demo-badge b::before{content:"";width:7px;height:7px;border-radius:50%;' +
    'background:#fbbf24;animation:demo-badge-pulse 1.6s ease-in-out infinite}' +
    '.demo-badge p{margin:4px 0 8px;color:rgba(255,255,255,.75)}' +
    '.demo-badge .demo-badge-cta{margin:0 0 6px;color:#fff;font-weight:600}' +
    '.demo-badge-contacts{display:flex;flex-wrap:wrap;gap:6px}' +
    '.demo-badge-contacts a{display:inline-flex;align-items:center;gap:5px;' +
    'color:#fff;font-weight:600;text-decoration:none;font-size:11px;' +
    'background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);' +
    'border-radius:999px;padding:4px 9px}' +
    '.demo-badge-contacts a:hover{background:rgba(255,255,255,.22)}' +
    '.demo-badge-contacts svg{width:13px;height:13px;flex:none}' +
    '@keyframes demo-badge-pulse{50%{opacity:.35}}' +
    '@media print{.demo-badge{display:block}}';
  document.head.appendChild(style);

  var links = CONFIG.contacts
    .map(function (c) {
      return (
        '<a href="' + c.href + '" target="_blank" rel="noopener">' +
        ICONS[c.icon] + c.text + '</a>'
      );
    })
    .join('');

  var badge = document.createElement('div');
  badge.className = 'demo-badge';
  badge.innerHTML =
    '<b>' + CONFIG.label + '</b>' +
    '<p>' + CONFIG.note + '</p>' +
    '<p class="demo-badge-cta">' + CONFIG.ctaText + '</p>' +
    '<div class="demo-badge-contacts">' + links + '</div>';
  document.body.appendChild(badge);
})();
