# UI/UX Refinements Plan — Hero Section Revamp

## Reference Source
User supplied a text spec (not a screenshot) describing a full-screen, black-background
video hero for a creative-agency-style portfolio: three crossfading looping video
backgrounds, numbered nav, live clock + email, video-switcher + "available for work"
indicator, giant name treatment with an accent-colored period, bio + CTA button,
Figtree font, Tailwind CSS, spring-eased reveal animations. Full spec logged in
`aidlc-docs/audit.md` (UI/UX Refinements — Kickoff entry).

## Current State (baseline)
- Design direction: "editorial agency-poster" — warm cream/parchment light theme,
  dark-mode toggle, maroon accent `#7a1f2b`, fonts Archivo/Fraunces/Inter
  (see `src/styles/tokens.css`)
- Stack: Vite + React 19 + TypeScript + React Router, hand-written CSS with a
  custom-property token system — **no Tailwind, no lucide-react**
- Current hero (`src/pages/Home.tsx` + `src/styles/home.css`): simple eyebrow +
  h1 + bio paragraph, no video, no big name treatment
- Header (`src/components/layout/Header.tsx`): brand name, Blog link, theme
  toggle, resume download — not a numbered/creative-agency nav
- Content (`src/content/site.ts`): name is real ("Zion Kidd"), bio/title/contact/
  resume are still placeholders pending real copy
- Positioning: product builder / software engineer with shipped case studies,
  not a freelance visual/motion creative — this matters for tone (e.g.
  "available for work" vs "open to opportunities", "start a project" vs
  "let's talk")

## Approach
Going decision-by-decision through the reference spec (per user request and
`aidlc-docs/preferences.md` question-flow preference: one question at a time,
inline, wait for each answer) rather than a screenshot walkthrough. Each
decision below gets adapted to fit Zion's brand/content/stack before being
folded into the design system and mockup.

## Refinement Stages
- [ ] Reference Collection — N/A (text spec already supplied, decisions extracted below)
- [ ] Design Decisions (one at a time, recorded in `reference-analysis.md`)
  - [ ] Overall direction/fit (full black video-hero vs adapted lighter/no-video version)
  - [ ] Background treatment (video vs static/motion alternative vs none)
  - [ ] Color system (pink accent vs existing maroon vs new)
  - [ ] Typography (Figtree vs existing Archivo/Fraunces/Inter)
  - [ ] Name treatment (giant wordmark, accent period)
  - [ ] Nav content & structure (numbered items, mapped to real site sections)
  - [ ] Availability indicator + live clock (keep/adapt/drop, tone fit)
  - [ ] Video-switcher equivalent (repurpose as case-study/project switcher, or drop)
  - [ ] CTA wording + hover treatment
  - [ ] Responsive behavior (tablet/mobile) — largely adopt as-is, confirm breakpoints
  - [ ] Motion/reduced-motion behavior — adopt as-is (matches accessibility best practice)
- [ ] Design System Definition (`design-system.md`)
- [ ] HTML Mockup (`mockups/hero-mockup.html`) — built in current stack's visual
      language (plain CSS / tokens), not Tailwind, so it previews accurately
- [ ] Mockup Approval
- [ ] Implementation Plan
- [ ] Implementation (Header/Hero components + tokens.css + home.css)
- [ ] Consistency Verification across other pages (CaseStudy, Blog, teaser)
- [ ] Completion & Approval
- [ ] Commit & Push
