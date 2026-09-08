# Landing Page Proposals

Demo landing pages pitched to prospective clients (local businesses found on Instagram / Google Maps). The whole repo deploys **once** as a static site; every client demo lives at its own URL path and is sent to that client as a preview link.

- **Repo:** https://github.com/lukicenturi/proposal
- **Deploy:** Vercel, connected to the repo. Push to `main` and every demo (new folders included) goes live automatically. No config needed: it's plain static files, no build step.

## Structure

```
/
├── index.html                  # Private gallery of all demos (noindex)
├── assets/
│   └── demo-badge.js           # Shared watermark badge, injected into every demo
└── <client-slug>/
    ├── index.html              # One self-contained demo per client
    ├── assets/                 # Only assets the page actually uses, web-optimized
    └── assets-suggestions/     # Raw asset dump from the user (client footage, photos, logos)
```

### Asset workflow

The user dumps any assets they think are good enough into `<client-slug>/assets-suggestions/` (often mid-session; re-check the folder before building). For each suggestion: review it, and if used, copy it out into `<client-slug>/assets/` (compress/resize/strip audio for web first). Never reference `assets-suggestions/` from a page, never delete anything in it, and leave unused suggestions where they are. Real client assets always beat stock placeholders.

- One folder per client, kebab-case slug (e.g. `denting-rumah-musik/`). Everything for a demo lives in that folder (plus optional `img/` subfolder for logos/photos).
- No build step. Plain HTML + Tailwind via CDN (`https://cdn.tailwindcss.com` with inline `tailwind.config`) + Google Fonts.

## Brand isolation (the reason for this structure)

The repo is shared **only for deployment convenience**; each client's brand identity must stay fully isolated:

- Every demo is one self-contained `index.html`: its own `tailwind.config` color tokens, its own Google Fonts, its own copy and imagery. Nothing visual is imported from outside the client's folder.
- **Never** create shared stylesheets, theme files, or design tokens across clients. Don't reuse another demo's palette/fonts by copy-paste habit either; start each theme from the client's actual brand (logo, Instagram feed, Maps photos).
- What MAY be shared is brand-neutral infrastructure only: `assets/demo-badge.js` (the watermark, deliberately styled in neutral dark/white so it never clashes with any theme) and, if ever needed, other non-visual utilities under `assets/`.
- Structural patterns (section order, checklist, responsive approach) are fine to reuse: the *skeleton* repeats, the *skin* never does.

## Design brief: anti-generic guardrails

Act as an elite front-end developer and designer. Every demo must be a unique, highly distinctive page for that client's audience, aimed at one primary conversion goal (usually a WhatsApp contact).

- **Banned defaults**: no overused generic fonts (Inter, Roboto, Arial, system sans-serif); no cliché 3-column card grids; no generic purple gradient backgrounds.
- **Typography**: distinctive, high-personality font pairings (e.g., a sharp editorial serif combined with a stark monospace label).
- **Color & theme**: commit to a bold, cohesive palette. Dominant, intentional tones with a single sharp accent color, inspired by the client's brand world (not a template default).
- **Atmosphere**: create depth with layered CSS gradients, subtle geometric grids, or high-impact asymmetry, not flat, boring solid blocks.
- **Hero**: give it a unique layout (e.g., massive asymmetric typography on one side, a single high-contrast visual anchor on the other) instead of a centered generic stock-image hero.
- **Core content**: choose the exact sections the client's story needs; favor a unique narrative flow over repetitive card layouts.
- **Motion & interaction**: smooth, CSS-only staggered entrance reveals on page load. Prioritize one well-orchestrated moment of visual delight over scattered, distracting micro-animations.
- **Imagery**: be experimental with images; never rely on text-only layouts. Use the client's own photos/logo when available (the user can supply them on request). Otherwise source fitting stock photos yourself via web search (e.g. Unsplash/Pexels) as placeholders, verify they actually match the subject, and store them in `<client-slug>/img/` so demos don't depend on hotlinks. Treat images as design material: collage, overlap, masking, duotone brand tints, not just rectangles in a row.

These guardrails work *with* brand isolation: distinctiveness comes from the client's identity, so two demos should never feel like the same designer's template.

## Rules for every demo page

1. **Watermark is mandatory**: include `<script src="/assets/demo-badge.js" defer></script>` before `</body>`. It injects a fixed corner badge marking the page as a demo, with my contact CTA. Config (contact link, label) lives in that one file so all demos update at once.
2. **`<meta name="robots" content="noindex, nofollow">`** on every page. These must never rank against the client's real presence.
3. **Language: Bahasa Indonesia** (target clients and their customers are local).
4. **Match the client's brand identity**: pull vibe, colors, and tone from their Instagram bio/feed, logo, and Google Maps photos before designing. Font + palette should feel like *their* brand, not a generic template.
5. **Real data only where we have it** (name, address, services from bio/Maps). Anything invented (phone numbers, prices, testimonials, opening hours) uses obvious placeholders. WhatsApp links use `https://wa.me/62XXXXXXXXXX` until the client's real number is known.
6. Mobile-first responsive; the client will almost certainly open the link on their phone from Instagram DM/WhatsApp.
7. **Never use em dashes (—)** anywhere: page copy, code comments, docs, commit messages. Use commas, colons, periods, or parentheses instead.
8. Add a card for the new demo to the root `index.html` gallery.

## Adding a new client: checklist

1. Research: Instagram bio + recent posts, Google Maps listing (address, category, reviews, photos).
2. Create `<client-slug>/index.html` following the rules above.
3. Add the demo to the root gallery with client name, category, and date.
4. Deploy (static: the host picks up the new folder automatically on push/upload).

## Clients

| Slug | Client | Type | Status |
|------|--------|------|--------|
| `denting-rumah-musik` | Denting Rumah Musik | Music school (kids, incl. special needs), Medang, Pagedangan, Kab. Tangerang | Demo built |
