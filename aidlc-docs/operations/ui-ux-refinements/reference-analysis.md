# Reference Analysis — Hero Section Revamp

Source: text spec pasted by user (full text logged in `aidlc-docs/audit.md`,
"UI/UX Refinements — Kickoff" entry), not a screenshot. Decisions recorded
here one at a time as they're confirmed.

## Decision 1: Overall Direction
**Question**: How much of the dark/bold creative-agency shift to take on, vs. current light editorial system?
**Answer**: Full switch to dark/bold — new site-wide direction (light theme/warm palette replaced), not just the homepage hero.
**Implication**: Design system tokens (`tokens.css`) get overhauled site-wide, not just `home.css`. Dark mode toggle likely becomes unnecessary (or repurposed) since dark becomes the only/default theme — flag as its own decision later.

## Decision 2: Hero Background
**Question**: Video crossfade (as in reference) vs. animated graphic vs. static image vs. none?
**Answer**: Keep video — user will supply/get their own footage (not the reference's CloudFront URLs, which are someone else's assets). Build the crossfading video-switcher structure so it's ready to receive real video URLs once sourced.
**Implication**: Mockup will use placeholder video slots (either muted-color placeholder blocks or temporary stock clips) with the real CloudFront/asset URLs swapped in at implementation once the user provides them. Switcher labels need their own content decision (see later "video-switcher labels" decision) since "WATER WAVE / GRIDWAVE / LIGHT TUNNEL" are specific to the reference's footage.

## Decision 3: Accent Color
**Question**: Pink (as in reference) vs. evolved maroon vs. something else vs. monochrome-only?
**Answer**: Gold/amber — warm, premium, editorial; closest in spirit to the existing maroon/warm palette while still popping on black.
**Implication**: New accent family replaces `--color-accent` (#7a1f2b → gold/amber, exact hex TBD in design-system.md). Keeps a thread of continuity with the old brand rather than a hard reset to pink.

## Decision 4: Typography
**Question**: Switch to Figtree (single family, as in reference) vs. keep Archivo/Fraunces/Inter restyled vs. hybrid?
**Answer**: Switch to Figtree, single family, everywhere.
**Implication**: `--font-display`, `--font-accent`, `--font-body` all collapse to Figtree (weights 400/500/600, matching reference). Fraunces serif accent is dropped site-wide — full commitment to the clean/modern geometric-sans direction, consistent with Decision 1 (full dark/bold switch).

## Decision 5: Name Treatment
**Question**: "ZION." (first name + accent period, mirrors reference) vs. "ZION KIDD." (full name) vs. full name without the period gimmick?
**Answer**: "ZION." — first name only, uppercase, giant, gold/amber accent period. Direct mirror of the reference's treatment.
**Implication**: Full "Kidd" surname doesn't appear in the giant wordmark — should still appear somewhere nearby/accessible (e.g. nav brand mark, footer, page `<title>`, meta) for clarity/SEO. Sizing (~200px desktop, scaling down per reference's tablet/mobile clamps) can be adopted close to as-is since "ZION." is a similar length to "VIKTOR.".

## Decision 6: Nav Structure
**Question**: Reference nav (Works/Services/About/Contact) is freelancer-shaped. What should the 4 numbered items map to given the real site (case studies, Blog, no About page yet, resume/contact)?
**Answer**: 01 Work, 02 Blog, 03 About, 04 Contact.
**Implication**: "Work" → scrolls to / links to the project grid (existing case studies). "Blog" → existing `/blog` route, now promoted into primary nav. "About" has no existing page/section — needs one built (likely a short about block, either its own route or an anchor/scroll target on Home) as part of this refinement. "Contact" → email + resume (mailto/anchor, or a dedicated contact block) since `site.contactEmail`/`resumeHref` are still placeholders — real values needed before this fully works.

## Decision 7: Availability Indicator + Live Clock
**Question**: Keep the pulsing "Available for work" dot + live clock as-is (freelance framing), reword, or drop?
**Answer**: Keep the pulsing dot mechanic but reword label to "Open to opportunities" (job-seeker/product-builder framing, not freelance-client framing). Keep the live clock.
**Implication**: Dot/pulse animation, glow, and color-per-slide behavior carry over unchanged from the reference — only the string changes.
**Follow-up — clock city/timezone**: "NYC HH:MM:SS", America/New_York, 24h format via `Intl.DateTimeFormat`, updating every second — matches reference's live-clock mechanic exactly, just with a real timezone driving it.

## Decision 8: Video-Switcher Content
**Question**: Generic mood labels vs. tie each of the 3 slides to a real case study vs. drop the switcher for one looping video?
**Answer**: Tie each video to a case study — switcher becomes a Work/project preview mechanism, not a pure mood switcher.
**Implication**: 3 slides = 3 projects: Vine to Wine, My Fitness App, and the "coming soon" teaser project (matches `src/content/case-studies/*` + `comingSoon.ts`). Labels become "01 / VINE TO WINE", "02 / FITNESS APP", "03 / [NEXT PROJECT]" (exact copy TBD from `site` content). Each slide's background video should ideally relate to that project (product demo clip/screen capture/brand footage) rather than abstract nature textures — real videos to be supplied by user per project. Accent dot color could also vary by slide as in reference, using the new gold/amber accent instead of pink/white.

**Follow-up — slide-to-case-study linking**: Confirmed yes, clicking a slide navigates to that case study page.
**Interaction design call (implementation detail, decided directly rather than re-asked)**: To preserve the ability to preview all 3 slides without immediately navigating away, hovering (desktop) crossfades the preview; clicking navigates through to the case study. On touch, tapping an inactive slide selects/crossfades it and reveals a small "view project →" sub-label; tapping the already-active slide (or that sub-label) navigates.

## Decision 9: CTA Wording
**Question**: "start a project" (freelance framing) vs. "view resume" vs. "get in touch" vs. other?
**Answer**: "let's talk" → links to email/contact.
**Implication**: Fill-up hover treatment (gold/amber background sliding up, text turns black on hover) carries over from reference unchanged — only label/destination change. Needs `site.contactEmail` filled in (currently placeholder) to fully wire up; resume stays available via existing header download link/Contact section, just not as the hero's primary CTA.

## Decision 10: About Section
**Question**: New dedicated `/about` page vs. scroll-to section on Home?
**Answer**: Scroll-to section on the Home page — matches the reference's single-page feel.
**Implication**: A new About block gets added further down Home.tsx (bio + maybe photo), and the nav's "03 / About" numbered link becomes an anchor scroll rather than a route change. Needs real bio copy (currently placeholder in `site.ts`) to be meaningful.

## Decision 11: Theme Toggle Fate
**Question**: Remove the light/dark toggle now that dark/bold is the one direction, or keep it as an escape hatch?
**Answer**: Keep it — dark is the default, but the light theme stays available and gets restyled to match the new gold/amber-on-warm system (not the old maroon).
**Implication**: `useTheme.ts` / `ThemeToggle.tsx` stay in place. `tokens.css` gets both a dark block (new default, black bg / white text / gold accent) and an updated light block (existing warm cream bg, but accent swapped from maroon to gold/amber for consistency). Figtree replaces Archivo/Fraunces/Inter in both themes (Decision 4 applies regardless of theme).

## Summary — All Decisions Locked
1. Full site-wide switch to dark/bold (not homepage-only)
2. Video hero background kept, user supplies real footage; placeholder slots in mockup/implementation until then
3. Accent color: gold/amber (replaces maroon)
4. Typography: Figtree everywhere (Archivo/Fraunces/Inter dropped)
5. Name treatment: "ZION." — giant, uppercase, gold/amber accent period
6. Nav: 01 Work / 02 Blog / 03 About / 04 Contact
7. Availability dot kept, relabeled "Open to opportunities"; live clock kept
8. Clock: "NYC HH:MM:SS", America/New_York, 24h, live
9. Video switcher repurposed as case-study preview (Vine to Wine / Fitness App / next project); hover previews, click navigates to case study
10. CTA: "let's talk" → email/contact
11. About: scroll-to section on Home (no new route)
12. Theme toggle: kept, light theme restyled with gold accent instead of maroon; dark is now default
