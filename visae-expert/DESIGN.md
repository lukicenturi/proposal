---
name: VISAE XPERT
description: A passport filling up with stamps, the trip already won, one WhatsApp tap away.
colors:
  cover-violet: "#241a4f"
  cover-violet-raised: "#2e2260"
  page-cream: "#f5f1e4"
  paper-raised: "#fbf8ef"
  ink-violet: "#2b2344"
  ink-soft: "#575072"
  foil-cyan: "#4fd2de"
  stamp-rose: "#c14a68"
  stamp-violet: "#6455c4"
typography:
  display:
    fontFamily: "Forum, serif"
    fontSize: "2.25rem / 3rem / 3.4rem (mobile / sm / lg)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "normal"
  headline:
    fontFamily: "Forum, serif"
    fontSize: "1.875rem / 2.25rem (mobile / sm)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Forum, serif"
    fontSize: "1.25rem / 1.5rem (mobile / sm)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Share Tech Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.26em"
  mrz:
    fontFamily: "Share Tech Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.14em"
rounded:
  stamp: "4px"
  card: "2px"
  chip: "6px"
  button: "8px"
  sheet: "16px"
  full: "9999px"
spacing:
  gutter: "16px (sm: 24px)"
  section-y: "64px (sm: 96px)"
  card-pad: "24px"
components:
  button-stamp:
    backgroundColor: "{colors.cover-violet}"
    textColor: "{colors.page-cream}"
    rounded: "{rounded.stamp}"
    padding: "14px 24px"
  button-outline:
    textColor: "{colors.ink-violet}"
    rounded: "{rounded.button}"
    padding: "14px 20px"
  button-pill-wa:
    backgroundColor: "{colors.foil-cyan}"
    textColor: "{colors.cover-violet}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  chip-tag:
    textColor: "{colors.page-cream}"
    rounded: "{rounded.chip}"
    padding: "8px 16px"
  card-review:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink-violet}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
---

# Design System: VISAE XPERT

## Overview

**Creative North Star: "The Approved Passport"**

The whole page is one diegetic object: an opened passport whose pages are already filling with arrival stamps. Every surface is either the deep violet cover of the booklet or a cream security-paper page, and every proof point (services, the 5,0 Google rating, deadlines) is rendered as a wet rubber-stamp impression: rotated, ink-bled, struck over its neighbors. The visitor is the passport holder; the design's promise is that the trip is already won. The world explicitly refuses the trust-blue visa-agency grid with traveler stock photos: there is not a single photograph on the page, only ink, paper, and machine text.

Density is generous and paper-like: wide cream pages, dashed rule lines like perforations, fine guilloche line-work under everything the way real security paper carries it. Text carries the atmosphere in three voices: an engraved-caps serif for what is printed on the passport, MRZ-style mono for what the machine reads, and a humanist sans for what a person actually says to you.

**Key Characteristics:**
- Every section is a numbered passport page ("Halaman 01"..."Halaman 06"); scroll is turning pages of one booklet
- Stamps are the only decoration: rotated, feTurbulence-displaced, multiply-blended ink impressions
- Two grounds only: cover violet (with foil cyan accents) and page cream (with stamp inks), both always under guilloche
- Zero photography; the client logo is the only raster image
- One orchestrated motion moment: stamps thudding onto the hero page in sequence

## Colors

A two-material palette: the booklet's violet cover against cream security paper, inked in cyan foil, rose, and violet stamp ink.

### Primary
- **Foil Cyan** (`foil-cyan`): the brand accent, lifted from the VX logo gradient. It plays hot-foil stamping on the violet cover: header WA pill, MRZ-colored micro-labels, focus rings, scrollbar thumb, cyan icon inside the stamp CTA, process-step rings. It reads as the cover's metallic deboss, so it appears only against cover violet, never directly on cream paper.

### Secondary
- **Stamp Rose** (`stamp-rose`): the wet red rubber-stamp ink. Rating stars, express/service tags, the final "APPROVED" ring, urgent overlapping stamps. Always applied as a border-and-text impression, never as a fill.
- **Stamp Violet** (`stamp-violet`): the second immigration-ink color for round stamps, service-row icon stamps, the review-section rating stamp, guilloche line-work on cream, and text links on paper. Also border-and-text, never a fill.

### Neutral
- **Cover Violet** (`cover-violet`): the passport cover; page body background, dark section grounds, header, and the fill of the stamp CTA button.
- **Cover Violet Raised** (`cover-violet-raised`): the slightly lifted cover tone for the passport's cover strip and the "Alur" section ground.
- **Page Cream** (`page-cream`): the security-paper page; every light section, the passport spread, and light text on violet grounds (often at /70 and /40 opacities for secondary and ghost text).
- **Paper Raised** (`paper-raised`): a half-step brighter sheet for review cards sitting on the cream page.
- **Ink Violet** (`ink-violet`): primary printed text on cream; also the shadow tint and dashed hairlines at /15 to /25 opacity.
- **Ink Soft** (`ink-soft`): secondary body text and mono labels on cream.

### Named Rules
**The Two Grounds Rule.** Every surface is either cover violet or page cream, and both always carry their guilloche pattern (cyan line-work at 10% on violet, violet line-work at 13% on cream). No third ground, no white, no gradient panels; depth comes from soft blurred color orbs behind the paper, not new surface colors.

**The Foil Stays On The Cover Rule.** Foil cyan only ever touches cover-violet ground (including the violet fill of the stamp CTA). On cream pages the accents are the stamp inks, rose and violet.

**The Ink Is Never A Fill Rule.** Stamp rose and stamp violet render as `currentColor` borders and text with the ink filter; they never fill a solid block.

## Typography

**Display Font:** Forum (with serif fallback)
**Body Font:** Hanken Grotesk (weights 400/600/700/800, with sans-serif fallback)
**Label/Mono Font:** Share Tech Mono (with monospace fallback)

**Character:** Forum is the engraved-caps voice of what's printed on the passport: single weight (400), set large with tight 1.08 leading and wide tracking when uppercase inside stamps. Share Tech Mono is the machine-readable layer (MRZ strips, page labels, stamp captions), always uppercase and heavily tracked. Hanken Grotesk is the calm human voice in between.

### Hierarchy
- **Display** (400, 2.25rem to 3.4rem, leading 1.08): the hero headline only, printed on the left passport page.
- **Headline** (400, 1.875rem to 2.25rem): section titles, one per passport page.
- **Title** (400, 1.25rem to 1.5rem): service names, process steps, card titles; also uppercase with 0.18-0.2em tracking inside stamps.
- **Body** (400, 1rem, leading-relaxed): descriptions and review quotes, max-width constrained (`max-w-md` to `max-w-2xl`). Bold emphasis uses Hanken 700-800 in ink violet.
- **Label** (400, 9-11px, 0.14-0.28em tracking, always uppercase, always mono): page numbers, stamp captions, tags, attributions, badges.
- **MRZ** (400, 10-11px, 0.14em tracking, leading 1.75): machine-readable strips built from `<` fillers, at hero-page foot and footer, always `aria-hidden`.

### Named Rules
**The Diegetic Label Rule.** Every mono label is a passport artifact, not a generic eyebrow: section labels are page numbers ("Halaman 04 · Alur Pengurusan"), captions are stamp text ("Imigrasi · Visae Xpert"), strips are MRZ lines. If a label can't be phrased as something a passport would actually carry, it doesn't get the mono treatment.

**The One Weight Of Engraving Rule.** Forum ships and is used at 400 only; hierarchy in the display voice comes from size, case, and tracking, never weight.

## Layout

Single column of full-width alternating-ground sections, content constrained to `max-w-6xl` (1152px) with 16px gutters (24px from sm). Section rhythm is `py-16 sm:py-24` (64/96px). The hero passport spread is a two-column grid from md (left text page, right stamp field) that collapses to one page on mobile, with cover strip above and MRZ strip below spanning both. Section intros sit on a dashed top rule with `pt-5`, mono page label, then headline, mirroring a form's rule lines. Services are a dashed-divided list (`divide-dashed`), not cards; process steps are a 1/2/4-column grid whose dashed connector flips from left border (mobile) to top border (lg). Reviews use CSS masonry columns (1/2/3 at base/md/xl). Grounds alternate strictly down the page: violet, cream, violet, cream, violet.

## Elevation & Depth

Depth is physical, not UI-elevational: the passport spread casts a stacked-sheet shadow that draws the booklet's other pages as hard 1px cream ledges beneath it, plus one soft drop. Page gutters get inner gradient shading toward the spine. Stamps create depth through `mix-blend-multiply` ink overlap rather than shadows. The only ambient effects are two large blurred color orbs (stamp violet and foil cyan at 20-30%) behind the hero paper, and a cyan glow under the WA button on hover.

### Shadow Vocabulary
- **Page stack** (`0 1px 0 #e9e3d0, 0 3px 0 #efe9d8, 0 5px 0 #e6dfc9, 0 7px 0 #ece5d2, 0 22px 34px -18px rgba(12,8,40,.55)`): the hero passport spread only; the layered hard edges are the closed pages under the open one.
- **Review card** (`0 10px 24px -14px rgba(43,35,68,.4)`): a slight paper lift for review sheets, tinted with ink violet, never neutral black.
- **WA hover glow** (`0 10px 24px -8px rgba(79,210,222,.5)`): foil-cyan glow on WhatsApp CTAs at hover only.

### Named Rules
**The Ink Over Shadow Rule.** Anything stamp-like gets `mix-blend-multiply` and zero shadow; overlapping impressions darken like real ink. Shadows belong only to sheets of paper (the spread, review cards) and the hover glow.

## Shapes

The form language is stamped and perforated. Stamps are sharp or barely-rounded rectangles (0-4px), double-ring circles (`border: 3px double currentColor; border-radius: 9999px`), or 2px dashed "ticket" rectangles, all borders 2-3px in `currentColor`. Paper sheets are the soft counterpoint: the passport spread and final CTA panel at 16px radius, review cards at a crisp 2px. Dashed lines are the connective tissue everywhere: section top rules, list dividers, MRZ separator (`border-t-2 border-dashed`), underlines (`decoration-dashed`), and process connectors. Nothing is a plain solid-border box: every border is either a stamp impression, a dashed perforation, or a low-opacity hairline.

**The Nothing Sits Straight Rule.** Every stamp, tag, and review card carries a rotation via `transform: rotate(var(--rot))`: stamps at 2-8deg in alternating directions, review cards at subtle 0.5-0.8deg, the stamp CTA at a fixed -1.5deg. Perfectly level stamp elements are off-world.

## Components

### Buttons
- **Stamp CTA (primary WA action):** the button is itself a boarding-stamp impression. Cover-violet pad on a `::before` layer with 3px border, 4px radius, and the ink-bleed filter, rotated -1.5deg; crisp bold cream text with foil-cyan WA glyph above it. Padding ~14px 24px. Hover lifts -2px keeping the rotation and adds the cyan glow; active presses down (`translateY(1px) scale(.98)`).
- **Outline (secondary):** 8px radius, `border-ink/25` hairline, semibold ink text, border darkens to /60 on hover. Calm and un-stamped by design; it must not compete with the stamp CTA.
- **WA pill (header):** compact foil-cyan pill (`rounded-full`), bold cover-violet text with WA glyph; same lift-and-glow hover.
- Every button pairs text with an inline sprite icon (`<use href="#icon-...">`); no bare-text actions.

### Chips
- **Service tags:** mono uppercase 11px, 2px `currentColor` border in stamp rose, ink filter, alternating small rotation; read as small stamps struck beside each service.
- **Tag links (contact):** 6px radius, `border-page/30` outline on violet ground, foil icon + semibold text; hover tilts -1.5deg and tints `bg-page/10`.

### Cards / Containers
- **Review cards:** paper-raised background, 2px radius, `border-ink/15` hairline, ink-tinted lift shadow, 24px padding, sub-degree rotation. Structure: rose star row, quote in ink, dashed-rule footer with mono attribution "name · Ulasan Google".
- **Passport spread (hero):** 16px radius, guilloche cream pages, page-stack shadow, spine gutter gradients, cover strip header and MRZ footer.

### Navigation
- Sticky header as the passport's cover strip: `bg-cover/95` with backdrop blur, dark guilloche, `border-foil/25` bottom hairline. Logo in a foil-ringed circle, Forum wordmark tracked 0.18em over a foil mono sub-line, WA pill on the right (label collapses to "Chat" on mobile).

### Stamps (signature component)
The system's identity. Three species, all `currentColor`-inked, ink-filtered, rotated via `--rot`, and multiply-blended so overlaps darken:
- **Round immigration stamp:** double-ring circle, stacked mono caption / Forum uppercase word ("APPROVED") / icon / mono footer.
- **Rectangular stamp:** 2-3px solid border, Forum uppercase headline over a mono caption; struck overlapping its neighbors in the hero stamp field.
- **Ticket stamp:** 2px dashed border with a leading icon (plane, check).
Hero stamps enter with the `stamp-in` thud (scale 1.7 to 0.93 to 1.03 to 1, 0.55s `cubic-bezier(.16,1,.3,1)`), staggered 0.15s-1.5s; `prefers-reduced-motion` disables all entrances.

**The One Thud Rule.** The staggered stamp entrance is the page's single orchestrated moment and lives only in the first viewport. Everything below the fold is static or uses at most the simple `rise-in`; micro-interactions are limited to 0.18s hover lifts and tilts.

## Do's and Don'ts

### Do:
- **Do** phrase every new section as a numbered passport page: dashed top rule, mono "Halaman NN · Title" label, Forum headline.
- **Do** render every proof point (ratings, deadlines, guarantees) as a stamp: `currentColor` border, ink filter, `mix-blend-multiply`, rotation from the 2-8deg range with alternating sign.
- **Do** keep guilloche under every surface: `.guilloche` on cream, `.guilloche-dark` on violet.
- **Do** use dashed borders for structural lines (rules, dividers, underlines) and reserve solid borders for stamp impressions and low-opacity hairlines.
- **Do** honor `prefers-reduced-motion` for any new animation, as the existing keyframes do.

### Don't:
- **Don't** put foil cyan on cream paper or fill any block with stamp rose/violet; inks are borders and text only.
- **Don't** introduce photography or stock imagery; this world is ink and paper, and the logo is the only raster.
- **Don't** add a third ground color, a white panel, or gradient section backgrounds; only cover violet and page cream exist.
- **Don't** use Forum above weight 400 or swap the mono for labels; the three-voice split (engraved serif / MRZ mono / humanist sans) is fixed.
- **Don't** add a second orchestrated animation; the hero stamp thud is the one moment (The One Thud Rule).
