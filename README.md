# Zion Kidd — Portfolio

Personal portfolio site: case studies for shipped projects (Vine to Wine, My Fitness App), a
"coming soon" placeholder for a wine society logo rebrand, a small blog, and a dark-mode-aware
editorial design system.

Live at: https://zrkidd-pixel.github.io/zionkidd.portfolio/

## Stack

- React + TypeScript + Vite
- React Router (`HashRouter` — deliberate, see below)
- Plain CSS with custom-property design tokens (no framework)
- Vitest + React Testing Library
- Deployed to GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm test          # run the test suite
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## One-time repo setting required for deployment

This repo's `.github/workflows/deploy.yml` deploys via GitHub Actions, which requires the
repository's **Settings → Pages → Source** to be set to **"GitHub Actions"** (not "Deploy from a
branch"). This is a one-time manual step in the GitHub UI — it isn't something a workflow file or
git push can set on its own.

## Project Structure

```
src/
├── components/         # Shared UI: Header, Footer, ProjectCard, CaseStudyLayout, etc.
├── content/            # All editable content lives here — see below
│   ├── site.ts         # Name/bio/contact/resume — the placeholders to fill in post-MVP
│   ├── types.ts         # Shared CaseStudy shape
│   ├── case-studies/    # One file per full case study
│   ├── comingSoon.ts    # The "Coming Soon" project card + teaser page content
│   └── posts.ts         # Blog posts
├── hooks/useTheme.ts    # Dark/light mode (system-default, manual override persisted)
├── lib/analytics.ts     # Pageview tracking (GoatCounter — add your site code to activate)
├── pages/               # Route-level components
└── styles/              # tokens.css (design system) + global.css + per-area stylesheets
```

## Adding a new case study later

1. Add a new file under `src/content/case-studies/` implementing the `CaseStudy` interface from
   `src/content/types.ts`. Any bonus section (`distribution`, `feedback`, `impact`, `quotes`) you
   don't have real content for yet — wrap it in `placeholder('...')` rather than omitting it, so
   the site shows a clearly-marked "coming soon" note instead of silently leaving it out.
2. Add it to the `caseStudies` array in `src/content/case-studies/index.ts`.
3. Done — it renders through the same `CaseStudyLayout` template as every other project, at
   `/#/<slug>`, and shows up on the home page grid automatically.

To turn the wine society "Coming Soon" card into a real case study once it's ready: do the above
with `slug: 'wine-society-rebrand'`, then remove the special-cased `comingSoonProject` card in
`src/pages/Home.tsx` (the route itself doesn't need to change — no broken links).

## Filling in the placeholders

Everything marked `// TODO: revisit after MVP` lives in `src/content/site.ts` (name, title, bio,
contact email, social links, resume file). Edit that one file and every page that uses it (header,
footer, home hero) updates together. To add a resume, drop the PDF into `public/` and point
`site.resumeHref` at it.

## Why HashRouter

GitHub Pages has no server-side rewrites, so a plain client-side router (`BrowserRouter`) breaks
on any direct link or page refresh to a route like `/vine-to-wine` (GitHub Pages just 404s — there's
no server to fall back to `index.html`). `HashRouter` (`/#/vine-to-wine`) sidesteps that entirely
since the hash portion never reaches the server, at the cost of a `#` in the URL. Given this site's
whole point is being shared as direct links (recruiters, social reposts), reliability won out over
prettier URLs.
