# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML + Tailwind CDN (inline `tailwind.config`) + Google Fonts, no build step. Fixed by repo convention (CLAUDE.md); deploys to Vercel on push to `main`.

## Users

Two layers. (1) Prospective clients: local business owners around Gading Serpong / BSD / Tangerang found via Instagram and Google Maps, who receive a demo link in an IG DM and open it on their phone. (2) Each demo's real audience: that client's own customers, who must feel "this is for me" on first scroll.

## Product Purpose

A gallery of one-per-client demo landing pages (proposal.lukicenturi.com/<slug>) used as free samples to win web work. Success: the business owner opens the demo on their phone, recognizes their own brand elevated, and replies on WhatsApp/IG.

## Positioning

Every demo is built from the client's real identity and real data (logo, IG feed, Maps rating, verbatim Google reviews, real phone numbers), so it feels like their site, not a template pitch. Brand isolation is absolute: no shared palettes, fonts, or visual tokens between client folders.

## Operating Context

Owner dumps links in `<slug>/reference.txt` and raw assets in `<slug>/assets-suggestions/`. Research runs through a CDP-driven Chrome (tools/browse.js) for Maps and Instagram. Used assets are optimized into `<slug>/assets/`. Demo is sent with a mobile screenshot (tools/mobshot.js) plus a templated Indonesian DM.

## Capabilities and Constraints

- One self-contained index.html per client; only brand-neutral infra is shared (`assets/demo-badge.js` watermark, injected on every demo).
- Every page: noindex meta, demo badge script, mobile-first, WhatsApp as primary conversion.
- Real data only where it exists; invented content uses obvious placeholders; never invent testimonials.
- No em dashes anywhere. Page language follows the client's IG bio unless the user decides otherwise per client.
- Root index.html is a private gallery; each new demo gets a card in its own display font.

## Brand Commitments

Per client, the client's own brand is binding (logo, IG feed colors, tone). For visae-expert: the supplied logo (violet-to-cyan gradient, white serif V/X monogram) is the brand anchor; page language is Bahasa Indonesia (user decision, overriding the English bio); offer scope is visa lead plus full range (travel booking, tax, documents).

For vanili (LuxVanilla, real client site): the user chose the category standard played straight, modelled on derfish.com and scutogadingserpong.com (the reference bar): dark full-bleed photo hero with a serif headline and gold accent, conventional section flow (hero, about, product list, process, quality, contact), classic serif plus clean sans typography, no monospace, no concept layouts. The supplied gold serif logo (black and gold) is the brand anchor. Recorded 2026-10-27 after the Certificate of Analysis concept was rejected as "AI-ish".

## Evidence on Hand

- `visae-expert/assets-suggestions/logo.png` (gradient VX logo).
- Google Maps: VISAE XPERT PT. Pramulia Xpert Solutions, 5,0 (30 ulasan), Konsultan, women-owned, Ruko Tabe Spot, Jl. BSD Raya Pusat No.2 Blok G7, Lengkong Kulon, Pagedangan, Kab. Tangerang, Banten 15339. Phone 0822-4421-8083.
- IG @visae.xpert (1,008 followers, bio EN): "VISA XPERT SERVICES / PT. Pramulia Xpert Solution / Since 2021 | 24/7 / By Appointment only / Whatsapp +62 82244218083 / Call Office Hours only (021) 38929204", links: linktr.ee/Visaeexpert + Google Maps.
- Linktree: "Expat Legal Services | Visa & Passport Assistance | Travel Smoothly!".
- Verbatim Google reviews (Indonesian) covering express visa, interview coaching, Brazil tickets, family trip logistics, vehicle tax under 5 days, tax filing. No pricing evidence: prices must be placeholders or omitted.

## Product Principles

- Real proof beats invented polish: rating, reviews, phone, address are the conversion engine.
- The client must recognize themselves: derive every visual choice from their brand world.
- One page, one action: WhatsApp contact is the goal; everything funnels there.
- Phone first: the deciding view is a 390px screen opened from a DM.
