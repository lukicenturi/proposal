---
name: LuxVanilla
description: Black and gold Indonesian vanilla and cocoa exporter site, the category standard played straight.
colors:
  black: "#0b0a08"
  charcoal: "#171511"
  ivory: "#f6f2ea"
  cream: "#fbf9f4"
  ink: "#1d1a16"
  prose: "#3d372f"
  muted: "#6b6257"
  sand: "#cdbfa6"
  parchment: "#f4efe6"
  hero-sub: "#ece5d8"
  gold: "#b08040"
  gold-light: "#d2ac5c"
  gold-ink: "#8a6332"
  line: "#e3dccd"
  line-dark: "rgba(255, 255, 255, 0.14)"
  field-border: "#d8cfbd"
  field-border-hover: "#bfb29b"
  alert: "#a3261b"
typography:
  display:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.2vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.004em"
  headline:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 1.45rem + 2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.004em"
  title:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(1.4rem, 1.2rem + 0.7vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
  lede:
    fontFamily: "Source Sans 3, Source Sans Pro, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.1rem, 1.02rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Source Sans 3, Source Sans Pro, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3, Source Sans Pro, Helvetica Neue, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
  figure:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  hairline: "3px"
  sm: "4px"
  card: "6px"
spacing:
  gutter: "clamp(20px, 4vw, 40px)"
  field-gap: "22px"
  row: "20px"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
  sec-head: "clamp(2.2rem, 4.5vw, 3.4rem)"
  header-h: "68px"
  header-h-lg: "80px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    rounded: "{rounded.hairline}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.hairline}"
    padding: "0 26px"
    height: "52px"
  button-ghost-hover:
    textColor: "{colors.gold-light}"
  button-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0 26px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
  button-small:
    padding: "0 18px"
    height: "44px"
  form-card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "clamp(22px, 3.4vw, 40px)"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
  entry-card:
    backgroundColor: "rgba(255, 255, 255, 0.035)"
    textColor: "{colors.parchment}"
    rounded: "{rounded.sm}"
    padding: "16px"
  figures-cell:
    backgroundColor: "{colors.cream}"
    padding: "20px 22px"
  proof-cell:
    backgroundColor: "rgba(11, 10, 8, 0.72)"
    textColor: "{colors.sand}"
    padding: "clamp(26px, 3vw, 36px)"
  nav-link:
    textColor: "{colors.ink}"
    padding: "8px 0"
---

# Design System: LuxVanilla

## Overview

**Creative North Star: "The Exporter's Catalogue"**

LuxVanilla is the premium Indonesian exporter site a sourcing manager expects, executed at full craft rather than reinvented. The world is lifted from the gold serif logo: near-black grounds carry the hero, the product list, the quality band and the footer; warm ivory carries about, process and contact; a single logo gold is spent on key phrases, hairline rules, icons, figures and the primary button. Photography is the material. Every dark section sits on a full-bleed photograph pulled down by layered black gradients, and every light section is paced by a product or process photo in a 4px-cornered frame.

Density is editorial and unhurried. Sections breathe with a fluid 4.5rem to 7.5rem block of padding, text columns are capped between 54ch and 66ch, and lists are divided by one-pixel rules instead of boxed into cards. The page alternates ivory and charcoal from top to bottom so the eye always knows where a section starts. Decoration is limited to a thin gold botanical line drawing at low opacity in the corners of dark bands.

The site was built after the user rejected a concept layout (the Certificate of Analysis idea) as AI-ish and chose the category standard, modelled on derfish.com. The system therefore has no monospace, no concept framing, no ornamental grids and no offset or coloured shadows. Its only signature motion is a staggered fade-and-rise reveal on scroll.

**Key Characteristics:**
- Logo-derived black and gold with ivory light sections; one accent hue in three tints (gold, gold-light on dark, gold-ink for small gold text on light).
- Italic EB Garamond headlines, with the key phrase set in gold, over Source Sans 3 body.
- Letterspaced uppercase sans labels with a 26px gold dash introducing every section.
- Full-bleed photo bands with dual black gradients; the header floats over the home hero and solidifies on scroll.
- Hairline-ruled lists and spec tables, not card grids; 3px to 6px corners everywhere.
- Shadows are soft, long and only under photographs on light grounds; dark grounds are flat.

## Colors

A two-ground palette (ivory and near-black) tied together by a single logo gold that changes tint with the ground it sits on.

### Primary
- **Logo Gold** (`{colors.gold}`): the only accent. Primary button fill, section label dashes, list icons on light grounds, large figures, focus rings, caret and selection tint. On light grounds gold text is restricted to display sizes (h-display em, figures); small gold text on ivory switches to Gold Ink.
- **Gold Light** (`{colors.gold-light}`): gold for dark grounds. Headline key phrases, labels, icons, nav underline and hover colour on charcoal, black and photo bands; also the primary button's hover fill.
- **Gold Ink** (`{colors.gold-ink}`): deeper gold (4.8:1 on ivory) for small gold text on light grounds: text-link hover, stage numbers in the process strip, next-step numerals, option-tile icons.

### Neutral
- **Black** (`{colors.black}`): footer, mobile menu panel, hero base, scrolled overlay header (at 90%), and the colour of all photo gradient overlays.
- **Charcoal** (`{colors.charcoal}`): dark section ground for the product list and feature lists (the `.on-dark` ground).
- **Ivory** (`{colors.ivory}`): default page and light section ground; header ground at 88% to 96% with blur.
- **Cream** (`{colors.cream}`): one step lighter than ivory for the form card, figures cells, products subnav and the sticky stage strip.
- **Ink** (`{colors.ink}`): headings and primary text on light; also the ink button's border and hover fill.
- **Prose Brown** (`{colors.prose}`): long-form paragraph colour on light grounds (prose body, product descriptions, point copy). Softer than ink, darker than muted.
- **Muted** (`{colors.muted}`): secondary text on light: section labels, captions, spec keys, hints, notes.
- **Parchment** (`{colors.parchment}`): default text on charcoal and black grounds; footer links, entry card text, mobile menu rows.
- **Sand** (`{colors.sand}`): secondary text on dark: footer body, latin names, stat captions, feature copy.
- **Hero Sub** (`{colors.hero-sub}`): hero and band sub-paragraphs, a step brighter than sand so the lede reads over a photo.
- **Line** (`{colors.line}`): every rule, border and divider on light grounds, including the header's bottom border.
- **Line Dark** (`{colors.line-dark}`): the same role on dark grounds: entry borders, feature-list rules, footer and menu dividers.
- **Field Border** (`{colors.field-border}`) and **Field Border Hover** (`{colors.field-border-hover}`): input and option-tile strokes at rest and on hover.
- **Alert** (`{colors.alert}`): validation only: invalid field borders, field errors, failed form status.

### Named Rules
**The Ground Decides the Gold Rule.** Gold is one hue in three tints chosen by the ground, never by taste: Logo Gold on light grounds at display size, Gold Ink for small gold text on light, Gold Light for anything on charcoal, black or a photo band.

**The One Phrase Rule.** A headline carries at most one gold phrase (an `em`), and it is the phrase with the claim: "graded with rigor", "lot by lot", "slowly cured". Never two gold runs in one heading, never gold on a whole heading.

**The Alternating Ground Rule.** Sections alternate ivory and charcoal or black down the page; two light sections only meet when one is cream, and dark bands carry a full-bleed photo under a black gradient.

## Typography

**Display Font:** EB Garamond (with Garamond, Georgia, serif)
**Body Font:** Source Sans 3 (with Source Sans Pro, Helvetica Neue, sans-serif)
**Label Font:** Source Sans 3, semibold, letterspaced uppercase (no monospace in this world)

**Character:** A print-classic pairing. The serif is set italic at medium weight for every headline, warm and slightly tightened, with its key phrase in gold; the sans does all the reading work at 17px and turns into small tracked capitals for labels, buttons and spec keys. Lining tabular figures are enabled on stats, specs and tables.

### Hierarchy
- **Display** (500 italic, clamp(2.5rem, 1.6rem + 3.2vw, 4rem), 1.06): page h1 in the home hero and sub-page bands; max 17ch to 20ch wide, balanced wrapping.
- **Headline** (500 italic, clamp(2rem, 1.45rem + 2vw, 3rem), 1.1): section h2, balanced, with its key phrase in gold. Product family h3 uses the same register at clamp(2rem, 1.6rem + 1.6vw, 2.75rem).
- **Title** (600 upright, clamp(1.4rem, 1.2rem + 0.7vw, 1.75rem), 1.2): sub-section h2 and h3 in forms and lists; product h3 at clamp(1.6rem, 1.35rem + 1vw, 2.1rem); list item h3 at 1.4rem to 1.6rem; entry names at 1.45rem.
- **Figure** (600, 2.75rem, 1, gold): large numerals in the about figures; stage numbers go to clamp(3.25rem, 2.6rem + 2.4vw, 4.75rem) at 500, family counts 2.6rem, leg and step numbers 1.6rem.
- **Lede** (400, clamp(1.1rem, 1.02rem + 0.35vw, 1.25rem), 1.55): hero sub and section intro paragraphs; section-head intros sit at 1.1rem in muted.
- **Body** (400, 17px, 1.6): all running text; prose blocks capped at 66ch, descriptions at 54ch to 60ch. Secondary lines step down to 15px to 15.5px.
- **Label** (600, 12.5px, 0.14em, uppercase): section labels (with a 26px gold dash before them), footer column labels, banner captions, spec keys (0.1em), form field labels (13px, 0.1em). Buttons use the same register at 700, 13.5px, 0.1em; subnav and station captions at 700, 13px, 0.12em.
- **Latin / form line** (EB Garamond 400 italic, 1.15rem to 1.25rem, sand or muted): species names and product form lines directly under a product title.

### Named Rules
**The Italic Headline Rule.** Every h1 and h2 is EB Garamond medium italic with letter-spacing tightened to -0.004em and `text-wrap: balance`. Upright serif is reserved for titles, figures and entry names.

**The Tracked Capitals Rule.** Anything that names a thing rather than says a thing (section labels, spec keys, form labels, button text, captions on photos, column heads) is Source Sans 3 semibold or bold, uppercase, tracked 0.1em to 0.14em, at 12px to 13.5px. There is no third face.

## Layout

The page is a single centred column: `.wrap` is `min(1200px, 100% - 2 * gutter)` with a fluid gutter of clamp(20px, 4vw, 40px). Sections pad clamp(4.5rem, 9vw, 7.5rem) top and bottom; a section head (label, headline, intro) is capped at 62ch and followed by clamp(2.2rem, 4.5vw, 3.4rem) of space. Sub-page bands pad clamp(4rem, 10vw, 7rem); the home hero fills `min(100svh, 960px)` and pins its content to the bottom edge.

Grids are asymmetric two-column splits that collapse to one column below 900px: product rows at 5fr/7fr (channel rows 4fr/8fr), process stages at 7fr/5fr (flipped on alternate stages), stage photos as one big 4:3 plus a pair of 4:3 smalls. The home process stations run 2 columns on mobile and 3 at 1024px. Product entries go 1 to 2 columns at 900px; specs, form fields and option grids go to 2 columns at 640px. Figures and proof cells are 1px-gap grids on a line-coloured background so the dividers draw themselves.

The header is a sticky 68px bar (80px at 1024px) with the logo left, text nav right and a small gold button; below 1024px the nav collapses to a 46px outlined menu button and a full-screen black menu panel with 1.75rem serif rows. On the home page the header is transparent over the hero and switches to 90% black with blur once scrolled past 24px. The products page adds a cream subnav; the process page adds a sticky cream stage strip under the header.

Vertical rhythm inside lists is rule-to-rule: list items pad 10px to 20px block and are separated by 1px lines, with the first item carrying a top rule. Mobile-first throughout; breakpoints in use are 640, 768, 900 and 1024px.

## Elevation & Depth

Depth comes from ground changes and photography, not from shadow. Dark sections are flat: entry cards, proof cells and feature lists use a 3.5% to 6% white wash and a 14% white hairline, never a shadow (`.on-dark .photo` explicitly removes it). Light sections give photographs a long, soft, low-opacity ink shadow that reads as a print lying on paper. The scrolled overlay header and the floating logo over the hero carry the only shadows on dark.

### Shadow Vocabulary
- **Photo on paper** (`box-shadow: 0 22px 46px -28px rgba(29, 26, 22, .55)`): framed photos and stage photos on ivory. Variants on the same curve: product photo `0 20px 44px -26px rgba(29,26,22,.5)`, station thumbnail `0 14px 30px -18px rgba(29,26,22,.45)`, about main photo `0 28px 56px -24px rgba(29,26,22,.45)`, about inset `0 18px 40px -16px rgba(29,26,22,.45)`.
- **Scrolled overlay header** (`box-shadow: 0 12px 32px rgba(0, 0, 0, .25)`): only on the home header once it turns solid over the page.
- **Focus glow** (`box-shadow: 0 0 0 3px rgba(176, 128, 64, .22)`): inputs on focus, paired with a gold border. Selected option tiles use a 1px gold spread instead.
- **Logo lift** (`filter: drop-shadow(0 1px 8px rgba(0, 0, 0, .45))`): the gold logo while the header is transparent over the hero photo.

### Named Rules
**The Paper Shadow Rule.** Shadows are ink-tinted, large-blur, negative-spread, and only under photographs on light grounds. Nothing on a dark ground casts a shadow, and no shadow is ever hard, offset or coloured.

**The Gradient Veil Rule.** Every photo band is veiled by two stacked black gradients (left-to-right 78% to 25%, and top-to-bottom 55%, 0% at 28%, 82% at the foot); heavy bands use a single 90% to 82% wash. Text sits only where the veil is darkest.

## Shapes

Corners are barely there: 3px on buttons and entry thumbnails, 4px on photos, inputs, menu button and entry cards, 6px on the form card, 8px only on the scrollbar thumb. The only circles are the radio ring and the 52px gold success mark. Borders are one-pixel hairlines in Line or Line Dark; inputs and option tiles use a 1px field-border stroke, the about inset photo wears a 6px ivory frame. Photographs are rectangles with fixed aspect ratios (4:3 for product and process, 1:1 for entry thumbnails, 3:2 for channel photos) clipped by overflow, never masked or cut diagonally. The one recurring decorative silhouette is the botanical line drawing (orchid, vine, pods) in 1.1px gold-light strokes at 18% to 30% opacity, anchored bottom-right or bottom-left of dark bands.

## Components

### Buttons
Confident, quiet, uppercase. All variants share one chassis: inline-flex, 52px tall, 0 26px padding, 3px corners, 1px border, Source Sans 3 bold 13.5px tracked 0.1em uppercase, 10px gap to an 18px stroke icon, 250ms eased colour transitions.
- **Shape:** near-square corners (3px).
- **Gold (primary):** gold fill, black text; hover lifts to gold-light. One per view: hero first action, quality band, form submit, header quick link.
- **Ghost:** transparent with a 55% white border and white text, for dark grounds only; hover turns border and text gold-light.
- **Ink:** transparent with an ink border and ink text, for light grounds only; hover fills ink with ivory text.
- **Small:** 44px tall, 0 18px, 12.5px for the header and the "write another" actions.
- **Disabled / busy:** 65% opacity, progress cursor. Focus-visible everywhere is a 2px gold outline offset 3px (gold-light on dark).

### Text link
Semibold ink text with a 1.5px gold underline offset 5px and a trailing arrow icon that slides 3px right on hover; hover colour is gold-ink (white with gold-light underline on dark).

### Cards / Containers
The system prefers rules to cards. Where a container exists:
- **Form card:** cream, 1px line border, 6px corners, clamp(22px, 3.4vw, 40px) padding.
- **Entry (product row) on dark:** 96px/128px square thumbnail plus text, 14px to 16px padding, 4px corners, 3.5% white wash, line-dark border; hover raises the wash to 6% and the border to 60% gold-light. Name in upright serif 1.45rem, latin italic sand, spec line tabular 15px, a tracked "specs" link in gold-light.
- **Figures and proof cells:** 1px-gap grids where the gap colour is the border: cream cells on light with a 2.75rem gold figure, 72% black cells on photo bands with a 34px gold-light icon, serif title and sand copy.
- **Photo frame:** 4px corners, overflow hidden, paper shadow on light, no shadow on dark, optional 14.5px muted caption 10px below.

### Inputs / Fields
- **Style:** white field, 1px field-border stroke, 4px corners, 50px min height, 12px 14px padding, 17px body text; placeholder in a warm grey; label above in 13px tracked uppercase ink with a gold asterisk for required; hint and error at 14.5px.
- **Hover / Focus:** border darkens to field-border-hover on hover; focus sets a gold border and the 3px gold glow, outline removed.
- **Error:** alert border, alert error text with an 18px icon on the status line.
- **Choice controls:** 22px square checkbox (4px corners) or round radio, field-border stroke; checked fills gold with a black check or a 5px white inset ring. Request-type radios render as two white bordered tiles that gain a gold border plus 1px gold spread when selected.
- **Select:** native appearance removed, 18px muted chevron inset 12px from the right.

### Navigation
- **Desktop:** 15.5px semibold ink links with 8px vertical padding; a 1.5px gold underline grows from the left on hover and stays for the current page. Over the home hero the links are white, gold-light on hover, with a gold-light underline.
- **Mobile:** 46px square outlined menu button; the panel is black, full-screen under the header, with 1.75rem serif rows divided by line-dark, gold-light chevrons, and the current page in gold-light. Body scroll locks.
- **Sub-navigation:** cream strip with 48px to 56px tall tracked-uppercase links carrying a gold icon; hover and current state draw a 2px inset gold bottom rule. The process stage strip is the same device with a serif gold-ink stage number.

### Section head (signature)
Every section opens with the same three-line head: a label in tracked capitals preceded by a 26px gold hairline, an italic serif headline with one gold phrase, then an optional muted intro at 1.1rem capped at 60ch. On dark grounds the label, dash and phrase move to gold-light and the intro to sand.

### Photo band (signature)
A full-bleed photograph behind a black gradient veil, containing a section head, white or hero-sub copy, and gold or ghost buttons. Used for the home hero (bottom-aligned, min 100svh), sub-page heroes (clamp(4rem, 10vw, 7rem) padding) and the quality band (heavy veil with proof cells).

### Reveal on scroll (signature motion)
Elements marked for reveal start at opacity 0 and 16px down and settle over 500ms ease-out as they enter the viewport; inside a group they stagger 80ms apart, capped at the seventh item. Photos inside stations and family banners scale 1.03 to 1.04 on hover over 600ms to 1.2s. All of it is disabled under reduced motion, and a 3s fallback shows everything if the observer never runs.

## Do's and Don'ts

### Do:
- **Do** open every section with the label-dash, italic headline, gold phrase trio, and keep the headline's gold to one phrase.
- **Do** alternate ivory and charcoal or black sections, and put a full-bleed photo under a black gradient veil behind every dark band.
- **Do** build lists with 1px rules in Line or Line Dark and a top rule on the first item; use 1px-gap grids for figures and proof cells.
- **Do** keep corners at 3px to 6px and give photographs on light grounds the paper shadow (`0 22px 46px -28px rgba(29,26,22,.55)`).
- **Do** switch to Gold Light on any dark ground and to Gold Ink for small gold text on ivory; keep Logo Gold for fills, rules, icons and display-size text.
- **Do** colour icons with currentColor from the 20px stroke sprite (1.75 stroke, round caps) and pair every button and contact row with one.

### Don't:
- **Don't** introduce a third typeface or any monospace; the world is EB Garamond plus Source Sans 3 only.
- **Don't** set a headline upright or in regular weight; headlines are medium italic, and never fully gold.
- **Don't** cast a shadow on a dark ground, or use hard, offset or coloured shadows anywhere.
- **Don't** box content into equal card grids on light grounds; the system paces with rules, photos and asymmetric 5/7 or 7/5 splits.
- **Don't** use gold for running text or for more than one phrase per heading, and never use the pale gold-light on ivory.
- **Don't** add diagonal cuts, masked photos, rounded pills or large radii; photographs stay rectangular at fixed aspect ratios.
