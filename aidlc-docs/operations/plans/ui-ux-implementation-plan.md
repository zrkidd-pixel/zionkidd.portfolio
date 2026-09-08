# UI/UX Implementation Plan — Hero Section Revamp

Executing after mockup approval. Source of truth: `reference-analysis.md` (11
decisions) and `design-system.md`.

## Approved Mockups
- [x] Hero (`mockups/hero-mockup.html`) — approved 2026-09-08

## Priority Order
1. Design System Foundation — tokens.css, index.html fonts, useTheme default
2. Shared Components — Navbar (replaces Header), theme toggle unchanged
3. Home page — Hero rebuild, Work/About/Contact sections
4. Consistency pass — case-study pages, blog pages (token-driven, should
   inherit automatically — verify, don't re-author)
5. Tests — update tests whose expectations changed with the new default
   theme / component structure; add coverage for new Navbar/Hero behavior

## Implementation Checklist

### Design System Foundation
- [ ] `src/styles/tokens.css` — dark becomes default palette (gold/amber
      accent `#E3A857`), light palette restyled with gold accent
      (`#B8791F`) instead of maroon; Figtree replaces Archivo/Fraunces/Inter
      in all three font vars; add `--ease-spring`, extended spacing (96,
      150), hero type-scale vars
- [ ] `index.html` — swap Google Fonts link to Figtree 400/500/600; update
      pre-paint script to default to `dark` instead of system preference
      when nothing is stored
- [ ] `src/hooks/useTheme.ts` — default theme becomes `'dark'` (not system
      preference) when nothing is stored in localStorage; toggle/persist
      logic unchanged
- [ ] `src/hooks/useTheme.test.tsx` — update to assert the new dark-default
      behavior (system preference no longer decides the default)

### Shared Components
- [ ] `src/components/layout/Header.tsx` → rebuilt as the numbered Navbar:
      01 Work / 02 Blog / 03 About / 04 Contact, email + live NYC clock,
      mobile hamburger + expanding panel. Keeps existing `data-testid`s
      where the same functional element still exists (home link, blog
      link, resume link/placeholder) so existing tests keep passing;
      Navbar stays sticky + opaque site-wide (see note below)
- [ ] `src/styles/layout.css` — new Navbar styles (numbered items,
      underline-on-hover, clock, mobile panel grid-transition)
- [ ] Small clock utility (`NavClock` component or inline) — `Intl.DateTimeFormat`
      driven, `America/New_York`, updates every second, cleans up its
      interval on unmount

### Home Page — Hero Rebuild
- [ ] `src/pages/Home.tsx` — replace the simple eyebrow/h1/bio hero with:
      video-placeholder crossfade background (3 layers, animated gradients
      standing in for real footage — swappable to `<video>` tags once the
      user supplies clips), switcher tied to the 3 real projects (Vine to
      Wine / My Fitness App / Wine Society Rebrand teaser) with hover
      preview + click-through to that case study, "Open to opportunities"
      pulsing dot, giant "Zion." name with accent period, bio + "let's
      talk" CTA, reveal-on-mount animation
- [ ] Add `id="work"` on the existing project grid section (nav target)
- [ ] Add a short About section (`id="about"`) using `site.bio`
- [ ] Add a Contact section/anchor (`id="contact"`) — mailto CTA using
      `site.contactEmail` when present, otherwise the same disabled
      "coming soon" placeholder pattern already used for the resume link
- [ ] `src/styles/home.css` — new Hero styles matching `design-system.md`
      (desktop/tablet/mobile breakpoints, `prefers-reduced-motion`)

### Consistency Pass
- [ ] Verify case-study pages (`case-study.css`) and blog pages
      (`blog.css`) render correctly under the new dark-default tokens —
      both already reference only CSS custom properties, no hardcoded
      colors/fonts, so this should be inheritance, not rework
- [ ] Spot-check `CaseStudyLayout`, `ProjectCard`, `StatBlock`,
      `PlaceholderNote` against the new palette for contrast

### Tests & Verification
- [ ] `npm run lint`
- [ ] `npm run test`
- [ ] `npm run build`
- [ ] Manual check: dev server, resize through desktop/tablet/mobile,
      toggle theme, click through nav + switcher

## Known Adaptation From Mockup
The isolated mockup showed the Navbar absolutely overlaid, transparent,
directly on the hero video. Since the same Navbar renders on every route
(case-study pages, blog — which have no hero video behind them), it ships
as a normal sticky, opaque (dark-surface) header site-wide instead of a
transparent overlay — the Home hero still gets its full video-crossfade
treatment directly below it. Flagging this as a deliberate integration
call, not a silent deviation.
