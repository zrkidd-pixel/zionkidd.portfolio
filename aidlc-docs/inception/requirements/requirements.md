# Requirements — Zion Kidd Personal Portfolio Site

## Intent Analysis Summary

- **User Request**: Build a personal portfolio site to showcase projects (Vine to Wine app, my-fitness-app, and later a wine society logo rebrand/design project), following a specific project-narrative framework (one-line summary, problem, target user, competitors, insight, solution, plus bonus distribution/feedback/impact/quotes sections), styled after a reference portfolio site.
- **Request Type**: New Project (Greenfield)
- **Scope Estimate**: Single small web application — one static site, three project case studies (two full, one placeholder)
- **Complexity Estimate**: Simple-to-Moderate — no backend, no auth, no dynamic data; complexity is mostly in content/design quality and reusable case-study layout, not engineering
- **Requirements Depth**: Standard

## Project Context

- **Purpose**: Personal/recruiting portfolio — first thing a recruiter or hiring manager sees; needs to convey real product thinking in under 5 seconds per project, not just a feature list.
- **Repository**: `zrkidd-pixel/zionkidd.portfolio` (new, dedicated repo — created because a portfolio's repo name/URL is itself part of what gets shared with recruiters). Session's original repo (`ai-dlc-template`) is not used for the build; work here supersedes the initial requirements-gathering that started there.
- **Hosting**: GitHub Pages, default URL (`zrkidd-pixel.github.io/zionkidd.portfolio`), no custom domain for now.
- **Source material**: Two of the three featured projects are real, existing repos the author built:
  - `zrkidd-pixel/Vine_to_Wine` — read-only access, used as the factual source for that case study (features, tech stack, roadmap, and the real product-requirements narrative in its own `aidlc-docs/inception/requirements/requirements.md`, e.g. the wine-club GTM strategy for its accounts/leaderboards feature).
  - `zrkidd-pixel/my-fitness-app` — read-only access, same treatment (features, tech stack, local-first/privacy positioning, its own requirements narrative).
  - The wine society logo rebrand has no existing repo/source material — it launches as a "coming soon" placeholder only (see FR-3).

## Functional Requirements

### FR-1: Site Structure (Hybrid)
- A home/landing page presenting the author (name, title, short bio — placeholder for now) and a grid of project cards.
- Each fully-built project (Vine to Wine, my-fitness-app) links to its own dedicated case-study page/route (not an in-page anchor) — supports deep-linking and keeps each case study long-form without bloating the home page.
- Client-side routing (single-page app with routes), consistent with the React/Vite + GitHub Pages hosting decision (FR-6).

### FR-2: Case Study Content Framework
Each full case study follows this structure, per the author's specified framework:

**Core sections (always present):**
1. One-line summary
2. The problem
3. Target user
4. Competitors (including manual workarounds)
5. Insight (what was tried first that didn't work; the moment it clicked)
6. The solution (what was built, tradeoffs made, what was deliberately NOT built and why)

**Bonus sections (present when content exists, otherwise omitted or shown as a lightweight placeholder rather than a broken-looking gap):**
7. Distribution (channels, view counts, etc.)
8. What changed based on feedback
9. Impact (users, WAU, etc.)
10. Real user quotes

Each case study also includes: a tech stack chip list, and relevant links (repo, live demo/store listing, etc.) where available.

**Content authorship model**: Sections 1-6 (and available parts of 7-9) are drafted by AI DIRECTLY from the real project repos (`Vine_to_Wine`, `my-fitness-app`) — their READMEs, feature lists, tech stack, and their own `requirements.md` product narratives — so the content is factually grounded, not invented. Personal/subjective sections that cannot be derived from code — the **insight** story (section 5) and **real user quotes** (section 10), and any hard numbers for **distribution/impact** (sections 7/9) — are drafted as clearly-marked placeholder callouts (e.g. "🚧 Add your own story here") for the author to fill in post-MVP, rather than fabricated.

### FR-3: Wine Society Logo Rebrand — Placeholder Card
- Shown on the home page as a project card marked "Coming Soon" (no dedicated case-study page yet, no click-through, or a click-through to a minimal "in progress" page — implementation detail for Code Generation).

### FR-4: About / Contact
- Author name (Zion Kidd) is set now.
- Title/tagline, bio, contact email, and social/resume links are all placeholders at launch, each clearly marked for the author to revisit after MVP (per FR-8's resume item and Question 5 answer). Implementation should make these trivially editable (e.g. a single content/config file), not hardcoded across multiple components.

### FR-5: Design System — "Editorial Agency-Poster" Direction
Derived from two reference images the author supplied (a warm-neutral agency portfolio hero and a red/black/cream halftone poster), which the author confirmed captures the desired look:
- **Palette**: warm off-white/cream background, near-black ink for text/UI, one bold accent — **deep burgundy/wine red** (thematically ties to Vine to Wine, more intentional than a generic red).
- **Typography**: bold condensed sans-serif for display headlines, paired with an elegant italic serif for emphasis words/phrases; small-caps treatment for eyebrow labels/nav.
- **UI details**: black/ink pill-shaped buttons and tag chips; thin 1px horizontal rule dividers between sections; large bold numeral stat callouts (reused for the "Impact" bonus section — e.g. users/WAU as big stat blocks).
- **Imagery**: rounded/organic-crop treatment for photos; a subtle halftone/grain texture used sparingly at section breaks for visual punch, not overused.
- This design system is authored as reusable tokens (colors, type scale, spacing, component styles) rather than one-off page styles, so it applies consistently across home and all case-study pages.
- Pixel-level refinement against the author's taste continues later in the Operations → UI/UX Refinements stage; the initial Construction pass should already read as intentional and on-brand, not a generic placeholder theme.

### FR-6: Tech Stack & Hosting
- **React + Vite**, static build, deployed to **GitHub Pages** (chosen over Next.js: GH Pages hosting gives up nearly all of Next's server-side advantages anyway, while Vite+React avoids static-export configuration friction and keeps the build simple).
- Client-side routing via React Router, configured for GitHub Pages' subpath hosting (`/zionkidd.portfolio/`) and direct-link/deep-link refresh support (GH Pages has no server-side rewrites, so this needs the standard 404.html redirect trick or hash routing — a Construction-stage implementation decision).
- Deployment via GitHub Actions to GitHub Pages (standard, low-maintenance path) — confirmed at Infrastructure/Code Generation stage.

### FR-7: Extras (all requested)
- **Resume/CV download button** — links to a placeholder PDF path until the author supplies a real resume.
- **Blog/writing section** — a simple list of posts; can launch with zero or one placeholder post, structured so adding posts later doesn't require re-architecting.
- **Analytics** — lightweight pageview tracking (e.g. a privacy-respecting, no-cookie-banner-required option such as GoatCounter/Plausible-style script, or GitHub Pages-compatible alternative) — exact provider selected at NFR Requirements/Code Generation.
- **Dark mode toggle** — respects system preference by default, with a manual override control, consistent with the design system's palette (dark variant of the cream/ink/burgundy scheme).

## Non-Functional Requirements

### NFR-1: Performance
- Static site, no heavy client-side data fetching — should load fast by default given the stack choice. No specific performance budget beyond "feels instant," appropriate for a portfolio's low technical complexity.

### NFR-2: Accessibility
- Standard baseline (semantic HTML, sufficient color contrast — verify the cream/ink/burgundy palette meets WCAG AA text contrast, keyboard-navigable nav and dark-mode toggle, alt text on images). No formal accessibility audit required.

### NFR-3: Responsiveness
- Must work well on both desktop (primary use case — recruiters browsing on a laptop) and mobile (secondary but expected).

### NFR-4: Maintainability / Content Editability
- Adding a new project case study later (e.g. the logo rebrand, once ready) should not require re-architecting — the case-study page should be a reusable template driven by per-project content data, not a bespoke one-off page per project.

## Extension Configuration

| Extension | Enabled | Rationale |
|---|---|---|
| Security Baseline | No | Static content site, no backend, no user data collection, no credentials/secrets |
| Resiliency Baseline | No | No production infrastructure/uptime requirements — GitHub Pages static hosting |
| Property-Based Testing | No | No significant business logic, data transformations, or stateful algorithms — content/presentation site |

## User Scenarios

1. **Recruiter discovery**: Visitor lands on the home page, immediately understands who Zion is (once bio is filled in) and sees 2-3 project cards with one-line hooks; clicks into a case study.
2. **Case study read-through**: Visitor reads a case study top to bottom — summary, problem, target user, competitors, insight, solution — and comes away understanding the author's product thinking, not just what was built.
3. **Coming soon click**: Visitor sees the logo rebrand card marked "Coming Soon" and understands more work is in progress rather than assuming the site is broken/incomplete.
4. **Dark mode**: Visitor toggles dark mode; the editorial design system holds up in both themes.
5. **Resume download**: Visitor clicks "Download Resume" — works once the author supplies a real file; until then, a graceful placeholder (not a broken link).

## Explicitly Out of Scope (for this iteration)

- Full case study for the wine society logo rebrand (placeholder card only — FR-3).
- Real personal branding content (bio, contact links, headshot, resume file) — placeholders only, explicitly deferred by the author to "after MVP" (Question 5 answer).
- User accounts, comments, or any backend/dynamic data — pure static content site.
- Custom domain — default GitHub Pages URL only (Question 4 answer).
- CMS or admin UI for editing content — content lives in code/data files, edited via normal development workflow.

## Summary

A React + Vite static portfolio site, deployed to GitHub Pages, with a home page (author intro + project cards) and dedicated case-study pages for two real projects — Vine to Wine and my-fitness-app — whose factual content (problem, target user, competitors, solution, tech stack) is drawn directly from those projects' own repos and requirements docs, with personal/subjective sections (insight story, user quotes, impact numbers) left as clearly-marked placeholders for the author. A third project (wine society logo rebrand) appears as a "Coming Soon" card only. Visual direction is a distinctive "editorial agency-poster" design system (cream/ink/burgundy palette, bold condensed type + italic serif accents, pill buttons, big stat numerals) derived from two reference images the author supplied, implemented as reusable design tokens. Ships with resume download, a lightweight blog section, pageview analytics, and a dark mode toggle. No backend, no auth, no extensions enabled — this is a content/presentation site, not a data system.
