# Design System — Zion Kidd Portfolio (Dark/Bold Revamp)

Derived from `reference-analysis.md` Decisions 1-11. Dark is now the default
theme site-wide; light theme is retained as a toggle-able escape hatch,
restyled to match (gold accent instead of the old maroon).

## Color Palette

### Dark (default)
- Background: `#050505` (near-black, not pure `#000` so video/media has room to breathe)
- Surface: `#121212` (cards, nav-panel-on-mobile background)
- Border: `#2a2a2a`
- Text Primary: `#f5f5f0` (soft white, matches reference)
- Text Secondary: `#b5b3ad`
- Text Faint: `#78766f`
- Accent (gold/amber): `#E3A857`
- Accent Hover/Active: `#EDBB74`
- Accent Ink (text/icons on top of accent fill): `#111111`
- Accent Soft (subtle backgrounds, e.g. availability dot glow at low opacity): `#E3A857` at 22% opacity

### Light (toggle escape hatch)
- Background: `#f5f1e8` (existing warm cream, unchanged)
- Background Alt: `#ece4d3` (unchanged)
- Surface: `#ffffff` (unchanged)
- Border: `#ddd1bb` (unchanged)
- Text Primary: `#1a1614` (unchanged)
- Text Secondary: `#554d47` (unchanged)
- Text Faint: `#8a8078` (unchanged)
- Accent: `#B8791F` (gold/amber, deepened for 4.5:1+ contrast on cream — replaces old maroon `#7a1f2b`)
- Accent Hover/Active: `#9C6519`
- Accent Ink: `#ffffff`

## Typography
- Family: **Figtree** (400, 500, 600) — Google Fonts, replaces Archivo/Fraunces/Inter everywhere
- `--font-display`, `--font-accent`, `--font-body` all set to `'Figtree', system-ui, sans-serif`

### Scale (desktop)
- Hero name ("ZION."): `200px` / `81%` line-height / `-6px` tracking / weight 500 / uppercase
- H1 (page headings elsewhere): `3.5rem` / weight 600
- H2: `2.5rem` / weight 600
- Nav index numbers ("01/02/03/04"): `8px` / weight 500 / uppercase / `-0.08px` tracking
- Nav labels: `12px` / weight 500 / uppercase / `-0.12px` tracking
- Body: `1rem` / weight 400
- Small/caption: `0.75rem` / weight 500

### Scale (tablet, 810-1199px)
- Hero name: `129.6px` / `113.4px` line-height / `-7.7px` tracking

### Scale (mobile, <810px)
- Hero name: `clamp(68px, 21vw, 80px)` / `96px` line-height / `-4.8px` tracking
- Mobile nav links (in expanded menu): `28px` / `32px` line-height / `-0.84px` tracking

## Spacing
- Base unit: `8px`
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 150 (150px reserved for the hero's section gap, matching reference)

## Border Radius
- Small: `6px` (pills, tags)
- Medium: `12px` (cards)
- Full: `9999px` (dot, avatar, pill buttons)

## Motion
- `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`
- Video crossfade: `1200ms ease-in-out` opacity transition
- Reveal-up (name): `translateY(80px) → 0`, `900ms`, spring ease
- Reveal-right (bio/CTA): `translateX(100px) → 0`, `900ms`, spring ease, CTA delayed `80ms`
- Dot pulse: `scale(1→1.45)`, `opacity(1→0.45)`, `1.6s` infinite
- Mobile nav panel: CSS Grid `grid-rows-[0fr]/[1fr]`, `420ms`, spring ease
- All animation disabled under `prefers-reduced-motion: reduce`

## Components

### Buttons
- Primary CTA ("let's talk"): transparent bg, `1px` solid white/text-primary border, lowercase label. Hover: `::before` gold/amber fill slides up from `translateY(101%)` to `0`, text flips to accent-ink (near-black), border flips to accent color.
- Ghost (nav pill, e.g. existing "Blog"/resume-placeholder pattern): unchanged structural pattern, recolored to new tokens.

### Nav
- Numbered items: `01 / WORK`, `02 / BLOG`, `03 / ABOUT`, `04 / CONTACT`, underline slides in from right on hover (`scaleX` transform)
- Right side: email + live "NYC HH:MM:SS" clock (24h, updates every second)
- Mobile: hamburger toggle, CSS Grid expand/collapse panel, large nav links

### Availability Indicator
- 7px pulsing dot, gold/amber (`#E3A857`) with matching glow shadow, infinite pulse
- Label: "Open to opportunities"

### Hero Video Switcher
- 3 slides, each tied to a project: Vine to Wine / My Fitness App / next project (coming-soon teaser)
- Desktop: hover crossfades preview, click navigates to that case study
- Touch: tap selects/crossfades + reveals "view project →", second tap navigates
- Active slide: full opacity; inactive: `opacity-55`, `hover:opacity-75`
- Dot/accent color per active slide uses gold/amber (not per-slide color variation like the reference's pink/white split, since there's one accent now)

### Hero Name
- "ZION." — giant, uppercase, accent-colored period in gold/amber
- Reveal-up animation on mount (IntersectionObserver, 0.35 threshold, once)

### CTA Block
- Bio paragraph (real copy pending — currently placeholder in `site.ts`)
- "let's talk" button linking to contact (mailto once `site.contactEmail` is real, or a Contact section anchor)

## Accessibility
- Minimum contrast 4.5:1 body text / 3:1 large text — verified for accent-on-black (`#E3A857` on `#050505`) and accent-ink-on-accent (`#111111` on `#E3A857`)
- Focus states visible on all interactive elements (nav links, switcher buttons, CTA)
- Touch targets ≥44px on switcher buttons and nav toggle
- `prefers-reduced-motion: reduce` disables all animation
- Semantic landmarks (`header`, `main`, `nav`, `section`), ARIA labels on nav/status regions, videos `aria-hidden="true"`
