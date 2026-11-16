---
name: Xanadu
description: Enterprise AI that sticks, for the Gulf's enterprises and government. Light, exact, operational.
colors:
  morning-haze: "oklch(97.7% 0.002 165)"
  plain-white: "oklch(100% 0 0)"
  mist: "oklch(96.5% 0.003 175)"
  pale-stone: "oklch(94.2% 0.006 183)"
  harbour-ink: "oklch(18.9% 0.011 217)"
  slate: "oklch(49.6% 0.020 220)"
  hairline: "oklch(18.9% 0.011 217 / 0.09)"
  hairline-strong: "oklch(18.9% 0.011 217 / 0.16)"
  xanadu-teal: "oklch(65.4% 0.112 208)"
  deep-lagoon: "oklch(53.6% 0.092 208)"
  night-lagoon: "oklch(27.9% 0.040 208)"
  shallow-water: "oklch(95.7% 0.019 205)"
  sea-glass: "oklch(90.5% 0.046 205)"
  signal-orange: "oklch(70.3% 0.198 43)"
  signal-orange-hover: "oklch(73.3% 0.176 46)"
  ember: "oklch(61.3% 0.182 42)"
  kiln: "oklch(56.4% 0.168 43)"
  char: "oklch(16.4% 0.039 58)"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.875rem, 6.6vw, 5.5rem)"
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\" 1"
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "20px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
  "10": "128px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(56px, 7vw, 96px)"
  wrap: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.char}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.harbour-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "48px"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.plain-white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "48px"
  choice:
    backgroundColor: "{colors.plain-white}"
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  choice-selected:
    backgroundColor: "{colors.harbour-ink}"
    textColor: "{colors.plain-white}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.harbour-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  card:
    backgroundColor: "{colors.plain-white}"
    textColor: "{colors.harbour-ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 3vw, 40px)"
  console:
    backgroundColor: "{colors.plain-white}"
    textColor: "{colors.harbour-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
  nav:
    backgroundColor: "{colors.morning-haze}"
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
    height: "68px"
  client-strip:
    backgroundColor: "{colors.plain-white}"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    height: "44px"
  partner-badges:
    height: "56px"
  band-close:
    backgroundColor: "{colors.night-lagoon}"
    textColor: "{colors.plain-white}"
    padding: "clamp(72px, 9vw, 120px) 0"
---

<!-- Source of truth: this file. Implemented by styles.css and the v2 pages (index.html, ai-transformation/, about/). Change this file first, then the CSS. -->

# Design System: Xanadu

## Overview

**Creative North Star: "The Control Room in Daylight"**

Xanadu sells AI that actually runs the business, to people who are accountable for it. The system looks like a well-run operations room seen at ten in the morning: bright, quiet and exact, with every instrument readable and nothing decorative competing for attention. Confidence comes from restraint and precision, not from effects. The visitor should feel they're looking at people who have shipped this before.

The page is light, near-white haze with plain white surfaces. Two brand colours do all the signalling: **Xanadu Teal** for structure and calm emphasis, **Signal Orange** for the one action that matters. Type is one family, Geist, set large and tight for statements and plain for reading, with Geist Mono kept for small labels and machine output. Density is generous: one idea per section, short copy, wide margins.

Confirmed rejections: dark or black page grounds, glow and spotlight effects, stock "AI" imagery, the old xanadu.co petrol teal, amber and serif look, and text-heavy heroes.

**Key Characteristics:**
- Light-first: Morning Haze ground, Plain White surfaces, Harbour Ink text; one deep Night Lagoon band closes each page.
- Two accents only, each with one job: teal structures, orange acts.
- One typeface family, with weight and size doing the hierarchy.
- Hairline borders and soft, offset shadows; nothing glows.
- Short copy: a headline, one or two sentences, one action.

## Colors

A near-neutral daylight palette, faintly cooled toward the teal, with two saturated brand accents used sparingly.

### Primary
- **Xanadu Teal** (oklch(65.4% 0.112 208), hex #00A3B4): the brand's structural colour. Use it for the logo ring, progress fills, chart bars, selected-state fills, the logo ring (including on the dark closing band), and display-size type. It reaches only 3.0:1 on white, so never use it for text under 24px (or under 19px bold).
- **Deep Lagoon** (oklch(53.6% 0.092 208), hex #007C89): teal for text and small marks on light grounds. Use it for links, small labels, ticks, icons in facts lists and inner-page credential lines (4.6:1 on Morning Haze, 5.0:1 on white).

### Secondary
- **Signal Orange** (oklch(70.3% 0.198 43), hex #FF6B1A): the action colour. Use it for primary buttons, the logo's X, the active or current marker, and one highlighted figure. Text on orange is always Char, never white.
- **Signal Orange Hover** (oklch(73.3% 0.176 46), hex #FF7F38): primary button hover only.
- **Ember** (oklch(61.3% 0.182 42), hex #D9530B): orange for large text (24px and up), such as a highlighted statistic (4.0:1 on white).
- **Kiln** (oklch(56.4% 0.168 43), hex #C24A00): orange for small text, such as a "Free" tag or a status word (4.6:1 on Morning Haze).

### Neutral
- **Morning Haze** (oklch(97.7% 0.002 165), hex #F6F8F7): the page ground, the nav, and sector-card fills inside white sections.
- **Plain White** (oklch(100% 0 0), hex #FFFFFF): raised surfaces (cards, the console, the result panel, quiz fields) and alternate sections.
- **Mist** (oklch(96.5% 0.003 175), hex #F1F4F3): a quiet alternate surface where two white planes would merge.
- **Pale Stone** (oklch(94.2% 0.006 183), hex #E8EDEC): tracks, meters, dial backgrounds and inset wells.
- **Harbour Ink** (oklch(18.9% 0.011 217), hex #0E1517): all primary text, selected choice pills, numbered step dots. It is a text colour, never a page ground.
- **Slate** (oklch(49.6% 0.020 220), hex #56656A): secondary text, ledes, captions and nav links (5.7:1 on Morning Haze).
- **Hairline** (Harbour Ink at 9%) and **Hairline Strong** (Harbour Ink at 16%): every divider, card border and ghost-button outline.
- **Night Lagoon** (oklch(27.9% 0.040 208), hex #0B2E33): the closing band ground, the one dark surface in the system. Plain White text on it reaches 13:1; Sea Glass copy reads comfortably.
- **Shallow Water** (oklch(95.7% 0.019 205), hex #E3F5F7): hover fill for rows and choices.
- **Sea Glass** (oklch(90.5% 0.046 205), hex #BDE9EE): text selection.
- **Char** (oklch(16.4% 0.039 58), hex #1A0900): text on Signal Orange (6.8:1).

### Named Rules
**The Two Jobs Rule.** Teal structures, orange acts. If an element isn't the primary action, the current position, or the logo's X, it isn't orange.

**The One Shout Rule.** Signal Orange covers no more than about 5% of any screen: one primary button, one marker, at most one highlighted figure.

**The Daylight Rule.** No page or section ground darker than Pale Stone, with one exception: the single Night Lagoon closing band. Harbour Ink appears as text, small fills (choice pills, step dots) and nothing larger.

**The Two Teals Rule.** Xanadu Teal for fills and display type; Deep Lagoon for anything a person has to read at body size.

**The No-Grey-Middle Rule.** Every gradient interpolates in OKLCH: `linear-gradient(90deg in oklch, <teal>, <orange>)`. Plain sRGB blending turns teal to orange through grey; OKLCH keeps the midpoint saturated (it passes through green and gold).

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A single engineered sans carries everything, from tight, heavy statements to plain reading text. Mono appears only where a machine would speak: labels, the example console, measurements.

### Hierarchy
- **Display** (650, 46px to 88px fluid, line-height 0.92, -0.04em): the hero headline, and the closing statement on the closing band. One per screen.
- **Headline** (600, 30px to 48px, 1.05, -0.03em): section headings. A second sentence may follow in Slate as a quieter continuation, as long as it stands as its own sentence.
- **Statement** (600, 28px to 42px, 1.05, -0.03em): point-of-view lines and manifesto items.
- **Title** (600, 24px to 32px, 1.05, -0.03em): card and panel titles.
- **Title Small** (600, 24px, 1.1, -0.02em): step names and short item headings.
- **Figure** (500, 40px to 76px, 1, -0.04em, tabular numerals): statistics and scores, always with a plain-language label and a source line.
- **Lede** (400, 17px to 19px, 1.55): the one or two sentences under a headline, in Slate, max 34em.
- **Body** (400, 17px, 1.55): running text, max 65ch.
- **Body Small** (400, 15px, 1.5): card copy, nav links and choices.
- **Caption** (400, 13px, 1.5): footnotes, sources and helper text. Never below 13px.
- **Label** (Geist Mono, 500, 12px, uppercase, 0.12em): inner-page credential lines, data labels and console text. Never below 11px.

### Named Rules
**The Short Copy Rule.** A section is a headline, at most two sentences and one action. If a hero needs a third sentence, the headline isn't finished.

**The No-Kicker Rule.** Headings stand alone. A mono label may carry an inner page's credential line, or label data, but never sits above a section heading as an eyebrow, and never carries a number like "01 —".

**The Tight Display Rule.** Display and headline tracking stays between -0.04em and -0.03em, and line-height never drops below 0.92. Tighter than that and Geist's counters close.

**The One Gradient Rule.** The hero headline may carry a single accent word in a left-to-right Xanadu Teal to Signal Orange gradient, interpolated in OKLCH ("sticks."). It appears once on the site and nowhere else: no other gradient text, ever.

### Arabic accents (dormant)
Arabic is **off** until a native speaker has checked the copy (PRODUCT.md). When it is switched on, these rules apply:
- **Face:** Noto Kufi Arabic (500 to 600) for accent lines, and Noto Sans Arabic (400) for any longer phrase. Both sit comfortably beside Geist's construction. No Arabic fallback through the Latin stack.
- **Amount:** at most one Arabic line per screen and two per page. Allowed places are the hero (one line under the headline), the teal closing band, and the footer address block. Never in buttons, nav, form choices or body paragraphs.
- **Size:** set Arabic at 1.1 times the size of the Latin text it accompanies, because Arabic x-heights run small. Line-height is at least 1.5, letter-spacing is always 0, and there is no uppercase-style tracking or italic.
- **Colour:** Slate or Deep Lagoon. Never Signal Orange, never gradient.
- **Markup:** every Arabic run carries `lang="ar" dir="rtl"`. The layout never mirrors; the site stays left-to-right.
- **Content:** an Arabic line is a faithful rendering of English beside it, approved by a native speaker. No machine translation ships, and no Arabic is used as texture.

## Layout

A centred column of 1200px with a fluid side gutter (16px to 40px). Sections stack vertically with firm, even padding (56px to 96px top and bottom; heading to content 28px to 44px), alternating Morning Haze and Plain White grounds to separate them without heavy rules. One Night Lagoon band, the close, ends the page.

The spacing rhythm is a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Use 8 to 16 inside components, 24 to 48 between related blocks, and the section value between sections. Always leave more space above a heading than below it.

Grids are simple: two columns for split content (hero copy and console; the two platform layers), three for parallel items (sectors, proof points), four or five for figures and steps. Below 1000px, split layouts stack copy first; below 820px every grid becomes one column and the nav folds into a menu. Step tracks turn from horizontal to vertical.

**The One Idea Rule.** Each section carries one idea at one scale. A dense section, such as the assessment, is followed by a quiet one.

**The Close Rhythm Rule.** Sections sit close enough that the next heading is in reach. If a gap between sections looks like the page has ended, it is too big.

## Elevation & Depth

Mostly flat, with tonal layering. White surfaces sit on Morning Haze, separated by Hairline borders. Shadows are soft, offset downward and low in opacity. They appear on two things: the floating example console, and cards that lift on hover. Nothing glows, and no shadow has zero offset.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 20px 40px -30px oklch(18.9% 0.011 217 / 0.25)`): cards on hover, together with a 2px upward move.
- **Float** (`box-shadow: 0 1px 0 oklch(18.9% 0.011 217 / 0.04), 0 30px 60px -34px oklch(18.9% 0.011 217 / 0.28)`): the example console and the result panel at rest.

### Named Rules
**The No-Glow Rule.** No radial spotlights, blurred colour blobs or neon edges. Depth comes from a border, a soft offset shadow, or a change of ground.

## Shapes

Gently rounded, never bubbly. There are four radii:
- **Small (6px):** tags and small index marks.
- **Medium (14px):** fields, inset wells and mini panels.
- **Large (20px):** cards, the console and the result panel.
- **Pill (999px):** every button, chip and choice.

Borders are 1px Hairline, or Hairline Strong for interactive outlines. A coloured top rule of 2px may mark a card's subject: Signal Orange for the AI layer, Xanadu Teal for the creative layer. Never a coloured side stripe.

### Pattern accents
The system has exactly two pattern devices. Both are optional, and both are quiet.

- **The X mark.** The logo's ring-and-X keeps its original shapes. Allowed colours: ring in Xanadu Teal with the X in Signal Orange, on light grounds and on the dark closing band alike. Beyond the logo, the mark may appear once per screen as a graphic: whole at small size (48px to 84px, as on the closing band), or large and cropped by a container edge (no more than half of it cut away). It is never tiled, rotated, outlined, distorted or animated in a loop.
- **The field grid.** A 64px square grid of Hairline lines, faded out with a radial mask so it covers no more than about 60% of its area. Allowed behind the hero and the closing band only, never behind body text, and at most 9% line opacity (white at 7% on the closing band).

**The One Mark Rule.** One X graphic per screen, besides the logo. Its power is its rarity.

**The Quiet Pattern Rule.** If a pattern is the first thing you notice, it's too strong. Patterns sit behind content, never between the reader and the words.

## Components

### Buttons
Confident and simple: pills that answer the pointer.
- **Shape:** pill (999px), 48px tall (42px in the nav), padding 14px 22px, label in Button type.
- **Primary:** Signal Orange with Char text. One per screen, for the main action: start the assessment, or book a conversation.
- **Hover / Focus:** buttons never move. On hover and keyboard focus the primary button crossfades (350ms) from Signal Orange to the "sticks." gradient, `linear-gradient(90deg in oklch, Xanadu Teal, Signal Orange)`; Char text stays readable across it (6:1 or better). A trailing arrow may slide 3px. Focus also shows a 2px Signal Orange ring, offset 3px.
- **Ghost:** transparent with a Hairline Strong outline and Harbour Ink text. The outline fades to Harbour Ink on hover, with no movement. Use it for secondary actions.
- **On the closing band:** the primary button keeps Signal Orange and its gradient hover; the ghost button turns Plain White text with a white 35% outline that fills to white on hover.

### Chips
- **Style:** transparent, Hairline outline, Harbour Ink text, pill, 7px 12px. Use them for secondary lists such as sectors.
- **State:** chips are labels, not controls; there is no selected state.

### Choice pills (assessment)
- **Style:** Plain White, Hairline Strong outline, Slate text, pill, 9px 14px, inside a Plain White field with a Large radius.
- **Hover:** the outline and text go to Harbour Ink.
- **Selected:** Harbour Ink fill with Plain White text. A completed field's border tints Xanadu Teal.
- **Focus:** a 2px Signal Orange ring around the pill. The real radio input stays in the DOM.

### Cards / Containers
- **Corner Style:** Large (20px).
- **Background:** Plain White on Morning Haze, or Morning Haze on Plain White sections.
- **Shadow Strategy:** flat at rest, Lift on hover for linked cards only.
- **Border:** 1px Hairline, plus an optional 2px top rule in an accent.
- **Internal Padding:** 24px to 40px fluid.
- Never nest a card inside a card.

### Navigation
- **Style:** a sticky bar, 68px tall, on Morning Haze at 85% with a light backdrop blur, and a Hairline bottom border.
- **Links:** Body Small in Slate, turning Harbour Ink on hover.
- **Action:** one primary button on the right.
- **Mobile:** below 820px, links fold into a full-width panel behind a 44px menu button that reports its open state. The primary action must stay reachable in the open menu.

### Client logo strip
A white strip directly under the hero. "Clients include" in Label type on the left, then the client logos in a slow, continuous loop (about 36s per set). The logos are greyscale at 72% opacity and turn full colour on hover, 44px tall (36px on phones), with soft fades at both edges.
- **Control:** the strip pauses on hover. There is no pause button (the owner's decision, 2026-11-16).
- **Reduced motion:** no loop. The logos sit in a static, wrapping row.
- **Content:** real client logos only, supplied by the client. Duplicate sets used for the loop are hidden from assistive technology.

**The Pause Rule.** Anything that loops stops on hover and rests completely under reduced motion. Only the client logo strip may loop continuously.

### Example console (signature)
A white Float panel that plays an illustrative deployment, step by step, in Label type. Its header always says "example". Values in it are illustrative, never presented as a client result. It cycles at a calm pace, rests under reduced motion, and never starts with content hidden.

### Readiness result
A Plain White panel with a Pale Stone dial ring filling in Signal Orange, a Figure score, a Deep Lagoon tier line, and one primary button. It stays sticky beside the questions on desktop, and sits inline on mobile.

### Closing band
Full-width Night Lagoon, 72px to 120px padding, the full-colour X mark (teal ring, orange X) at 84px above a centred Plain White Display headline, one line of Sea Glass copy, a primary button and a light ghost button. One per page, always last before the footer.

### Partner badges
The official partner badges, as issued by each programme, sit in a row under the hero buttons: the Claude Partner Network "Certified Services Partner" badge at 56px tall, and the round Canva "Certified Reseller Partner" badge at 76px. Never redrawn, recoloured or cropped. They replace any text credential line on Home.

## Do's and Don'ts

### Do:
- **Do** keep every page ground Morning Haze or Plain White; the only exception is one Night Lagoon closing band.
- **Do** give each screen one Signal Orange primary action, with Char text.
- **Do** use Deep Lagoon (#007C89) for teal text at body size, and Kiln (#C24A00) for small orange text.
- **Do** keep sections to a headline, at most two sentences and one action.
- **Do** attribute every statistic in a Caption source line, and label every demonstration as an example.
- **Do** let motion start from content that is already visible: transform-based entrances, and no fade from zero opacity.
- **Do** respect `prefers-reduced-motion`: loops stop and content stays put.
- **Do** write every gradient as `linear-gradient(<angle> in oklch, …)`.

### Don't:
- **Don't** use dark or black page backgrounds (beyond the one Night Lagoon close), glows, radial spotlights or neon edges.
- **Don't** move buttons on hover; colour does the work.
- **Don't** use the original xanadu.co petrol teal or amber, or the muted teals of the rejected v2 directions.
- **Don't** set body text in Xanadu Teal or Signal Orange; they fail contrast on white.
- **Don't** stack section labels above headings, or number them "01 —".
- **Don't** use gradient text anywhere except the single hero accent word.
- **Don't** tile, rotate or animate the X mark, or show it more than once per screen beyond the logo.
- **Don't** ship Arabic before a native speaker has approved it; when it ships, never more than one line per screen.
- **Don't** use stock AI imagery (brains, circuits, robots, glowing orbs).
- **Don't** add continuous motion anywhere except the client logo strip.
