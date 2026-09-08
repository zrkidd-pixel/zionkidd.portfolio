# Code Generation Plan — portfolio-site (single unit)

**Unit**: The entire site (Units Generation was skipped per the approved execution plan — this is one simple static-site unit, not decomposed).

**Stories implemented**: US-1 through US-13 (all stories in `aidlc-docs/inception/user-stories/stories.md`).

**Source material for content**: `zrkidd-pixel/Vine_to_Wine` and `zrkidd-pixel/my-fitness-app` (read-only, cloned locally) — no real product screenshots exist in either repo yet (both READMEs have a "TODO: add screenshot" placeholder), so case studies launch as text/data-driven with illustrative design-system visuals (color blocks, icons) rather than fake product screenshots.

**Workspace root**: `/home/user/zionkidd.portfolio` (repo `zrkidd-pixel/zionkidd.portfolio`)

## Implementation Decisions (low-risk, made directly here per execution-plan.md's NFR-skip rationale)
- **Routing**: React Router with `HashRouter`. Chosen over `BrowserRouter` + the GH-Pages 404.html-redirect trick because it makes every deep link (case-study pages, the teaser page) work reliably on GitHub Pages with zero extra deployment configuration or fragile redirect scripts — directly serves US-10 (Direct-Link Visitor) and US-12 (Coming Soon teaser page) without a class of "works locally, breaks on GH Pages" bugs. Trade-off (a `#` in the URL) is worth it for reliability at this stage.
- **Styling**: Plain CSS with CSS custom properties (design tokens) — no Tailwind/CSS-in-JS dependency needed for a site this size, keeps the design system tokens (colors, type scale, spacing) in one readable `tokens.css`.
- **Dark mode persistence**: `localStorage` + `prefers-color-scheme` media query fallback, toggled via a `data-theme` attribute on `<html>` (matches US-13).
- **Analytics**: A tiny, provider-agnostic `analytics.ts` module with a single `trackPageview()` call wired into route changes, backed by a privacy-friendly script tag (GoatCounter — free, no cookie banner required) gated behind a `data-goatcounter` site config left as an easy placeholder to fill in once the GitHub Pages URL is live (satisfies the analytics extra without requiring a live account today).
- **Blog**: A minimal file-based post list (array of post metadata + Markdown-free plain content for v1) rendered through one `BlogList` + `BlogPost` pair — intentionally lightweight since Question 11 asked for the section to exist, not a full CMS.
- **Content data model**: One TypeScript interface (`CaseStudy`) shared by both real case studies, each as its own data file, so `CaseStudyLayout` renders any of them identically (US-8).

## Step-by-Step Plan

### Project Structure Setup
- [x] Step 1: Scaffold Vite + React + TypeScript project at workspace root (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`), configured for GitHub Pages base path (`/zionkidd.portfolio/`)
- [x] Step 2: Add React Router (`HashRouter`) and base route structure in `src/App.tsx`
- [x] Step 3: Create design token stylesheet `src/styles/tokens.css` (cream/ink/burgundy palette, light + dark variants, type scale, spacing scale) per requirements.md FR-5
- [x] Step 4: Create global base styles `src/styles/global.css` (resets, typography defaults, pill-button/tag-chip/rule-divider utility classes)

### Shared Layout & Components
- [x] Step 5: `src/components/layout/Header.tsx` — site name/logo (links home per US-10), nav, dark-mode toggle, resume download button (US-4, US-10, US-13)
- [x] Step 6: `src/components/layout/Footer.tsx` — secondary links, resume download fallback location
- [x] Step 7: `src/components/ThemeToggle.tsx` + `src/hooks/useTheme.ts` — system-preference default, manual override persisted to localStorage (US-13)
- [x] Step 8: `src/lib/analytics.ts` — provider-agnostic pageview tracker wired to route changes
- [x] Step 9: `src/components/ProjectCard.tsx` — one-line summary, tech chips, distinct muted styling for the "Coming Soon" state (US-2)
- [x] Step 10: `src/components/StatBlock.tsx` — big bold numeral stat callout, reused by the Impact bonus section (FR-5)
- [x] Step 11: `src/components/PlaceholderNote.tsx` — clearly-marked placeholder treatment for missing bonus content / blank bio fields (US-6, FR-4)

### Frontend Components: Home Page
- [x] Step 12: `src/content/site.ts` — centralized editable content: author name (Zion Kidd), placeholder title/bio/contact/links/resume path, each field commented `// TODO: revisit after MVP` (US-9, FR-4)
- [x] Step 13: `src/pages/Home.tsx` — hero/intro section (US-1) + project grid (US-2) rendering `ProjectCard` for Vine to Wine, my-fitness-app, and the logo-rebrand Coming Soon card (clickable → teaser route, US-12)

### Case Study Content Data
- [x] Step 14: `src/content/types.ts` — shared `CaseStudy` TypeScript interface (summary, problem, targetUser, competitors, insight, solution, distribution?, feedback?, impact?, quotes?, techStack, links, each optional bonus field flaggable as placeholder)
- [x] Step 15: `src/content/case-studies/vine-to-wine.ts` — populated from `Vine_to_Wine`'s README + `aidlc-docs/inception/requirements/requirements.md` (real features, tech stack, wine-club GTM context for target user/distribution); insight and real user quotes marked as placeholders
- [x] Step 16: `src/content/case-studies/my-fitness-app.ts` — populated from `my-fitness-app`'s README + its own requirements.md (real features, tech stack, local-first/privacy positioning, portfolio-project context for target user); insight and real user quotes marked as placeholders

### Frontend Components: Case Study & Teaser Pages
- [x] Step 17: `src/components/CaseStudyLayout.tsx` — the reusable template (US-5, US-8): renders all 6 core sections always, renders bonus sections via `PlaceholderNote` when absent (US-6), tech-stack chips + links (US-7), a "Try it" CTA distinct from the resume CTA when a live link exists (US-11), and standalone header context for direct-link arrivals (US-10)
- [x] Step 18: `src/pages/CaseStudy.tsx` — route wrapper resolving `:slug` to a case-study data file and rendering it through `CaseStudyLayout`
- [x] Step 19: `src/pages/LogoRebrandTeaser.tsx` — minimal standalone teaser page (US-12): one-line project description + "case study launching soon" messaging, same header/nav context as real case studies (US-10)

### Frontend Components: Blog & Extras
- [x] Step 20: `src/content/posts.ts` + `src/pages/BlogList.tsx` + `src/pages/BlogPost.tsx` — minimal blog section (launches with zero or one placeholder post)

### Frontend Components Unit Testing
- [x] Step 21: `vitest` + React Testing Library setup (`vitest.config.ts`, `src/test/setup.ts`)
- [x] Step 22: Tests for `ProjectCard` (renders summary; Coming Soon variant is visually/functionally distinct and links to the teaser route)
- [x] Step 23: Tests for `CaseStudyLayout` (all 6 core sections always render; missing bonus sections render a placeholder, not nothing; "Try it" CTA only renders when a live link exists — covers US-5/US-6/US-11)
- [x] Step 24: Tests for `useTheme`/`ThemeToggle` (defaults to system preference; manual toggle persists across a simulated reload — covers US-13)
- [x] Step 25: Routing smoke test (home, both case-study routes, teaser route, blog routes all resolve under `HashRouter` — covers US-10/US-12)

### Frontend Components Summary
- [x] Step 26: `aidlc-docs/construction/portfolio-site/code/summary.md` — markdown summary of what was generated, file map, and story traceability table (which files satisfy which US-#)

### Deployment Artifacts Generation
- [x] Step 27: `.github/workflows/deploy.yml` — GitHub Actions workflow: build on push to the default branch, deploy to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`
- [x] Step 28: Root `README.md` for the repo — setup/dev instructions, how to add a new case study later (US-8), how to fill in placeholder content (US-9), and a note that the repo's Settings → Pages source must be set to "GitHub Actions" (one-time manual step in the GitHub UI, outside what git/API access here can set)

## Story Traceability
| Story | Covered by Steps |
|---|---|
| US-1 | 5, 12, 13 |
| US-2 | 9, 13 |
| US-3 | 17, 18 |
| US-4 | 5, 6, 12 |
| US-5 | 17, 23 |
| US-6 | 11, 17, 23 |
| US-7 | 15, 16, 17 |
| US-8 | 14, 17, 26 |
| US-9 | 12, 26 |
| US-10 | 5, 17, 19, 25 |
| US-11 | 17, 23 |
| US-12 | 9, 13, 19, 25 |
| US-13 | 3, 7, 8, 24 |
