# End-to-End / Manual QA Checklist

## Purpose
Automated tests (`unit-test-instructions.md`) verify component logic and routing in isolation via
jsdom. This checklist verifies the real, rendered experience in an actual browser — the thing a
recruiter or visitor actually sees — which is where visual/UX requirements like "both themes must
look equally polished" (US-13) actually get proven or disproven.

## How to Run
```bash
npm run dev
```
Then open the printed local URL (includes the `/zionkidd.portfolio/` base path) in a browser.

## Checklist

### Home page (US-1, US-2)
- [ ] Name, title, and bio are visible without scrolling on a standard desktop viewport
- [ ] All three project cards render: Vine to Wine, My Fitness App (both with tech-stack chips), and Wine Society Rebrand (visually muted/dashed, labeled "Coming Soon")
- [ ] Grid collapses to a single column on a mobile viewport (~390px wide) without overflow

### Case study pages (US-3, US-5, US-6, US-7, US-11)
- [ ] Opening a project card navigates to `/#/<slug>` and renders all 6 core sections
- [ ] Bonus sections (Distribution, Feedback, Impact, Quotes) show the dashed placeholder treatment, clearly distinguishable from real content
- [ ] My Fitness App shows a "Try My Fitness App" button linking to the live Netlify deployment; Vine to Wine shows no such button (no live link exists yet) — confirms no dead links are ever shown
- [ ] Tech-stack chips match each project's real stack

### Coming Soon / direct links (US-10, US-12)
- [ ] Clicking the Coming Soon card navigates to a real teaser page (not a dead click or modal)
- [ ] Pasting a case-study or teaser URL directly into a fresh browser tab (simulating a shared social link) still shows the header with a working "home" link — confirms a Direct-Link Visitor isn't stranded

### Dark mode (US-13)
- [ ] Toggling dark mode updates every visible page (home, a case study, the teaser page) — no unstyled or mismatched-theme flashes
- [ ] Reloading the page after toggling keeps the manually chosen theme (does not revert to system preference)
- [ ] With no manual choice made yet, changing the OS-level color scheme preference and opening the site in a fresh browser profile shows the matching theme by default

### Resume & extras (US-4, US-9)
- [ ] "Resume coming soon" button appears (disabled state) since `site.resumeHref` is still empty — never a broken link
- [ ] Blog section is reachable from the header nav and shows the placeholder first post
- [ ] Footer shows only links with real URLs (currently just GitHub) — empty placeholder links don't render as dead links

## Result of Last Manual Pass
Performed via Playwright-driven screenshots against the local dev server during Code Generation
(see `aidlc-docs/construction/portfolio-site/code/summary.md`) — home (light + dark), a case-study
page, the teaser page, and a mobile viewport were all visually reviewed and matched the design
system intent. Full click-through interaction testing (as opposed to direct-URL navigation) has
not yet been performed by a human in a live browser — recommended before considering this
production-ready for real visitors.
