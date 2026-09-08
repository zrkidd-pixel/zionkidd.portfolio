---
inclusion: fileMatch
fileMatchPattern: "**/*.tsx,**/*.jsx,**/components/**,**/pages/**,**/app/**,**/views/**,**/ui/**"
---

# Frontend Standards

<!--
  INCLUSION: fileMatch — only loads when frontend files are open.
  Adjust fileMatchPattern to match your project's directory structure.
  Delete this file entirely if your project has no frontend.
-->

## Framework and Libraries

<!-- Define your approved frontend stack. Examples:
  - UI framework: React / Vue / Svelte / Angular
  - Routing: Next.js App Router / React Router / etc.
  - State management: Zustand / Redux / Pinia / Context API
  - Component library: Material UI / shadcn/ui / Tailwind / custom
  - HTTP client: fetch / axios / react-query / tRPC
  Explain why these were chosen and when to deviate (with approval).
-->

## Component Architecture

<!-- Define how components should be structured. Examples:
  - Atomic design: atoms → molecules → organisms → templates → pages
  - File colocation: component + styles + tests in same directory
  - Smart vs dumb components: keep business logic out of presentational components
  - Maximum component size (lines, responsibilities) before splitting
  - Props interface conventions (TypeScript required? Prop types?)
-->

## Styling

<!-- Define your styling approach. Examples:
  - CSS-in-JS / CSS Modules / Tailwind / global stylesheets
  - Design token usage (colors, spacing, typography)
  - Responsive design approach: mobile-first vs desktop-first
  - Breakpoint definitions
  - No magic numbers — always reference tokens or variables
-->

## Accessibility (a11y)

<!-- Define your accessibility requirements. Examples:
  - Target compliance level: WCAG 2.1 AA
  - All interactive elements must be keyboard navigable
  - All images require meaningful alt text (or aria-hidden for decorative)
  - Color contrast minimums
  - Screen reader testing requirements
  - Automated a11y linting (axe, eslint-plugin-jsx-a11y)
-->

## Performance

<!-- Define frontend performance standards. Examples:
  - Target Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
  - Image optimization requirements (format, lazy loading, sizing)
  - Bundle size budgets
  - Core Web Vitals targets (LCP, FID/INP, CLS)
  - When to use code splitting / dynamic imports
-->

## State Management Rules

<!-- Define when to use which state mechanism. Examples:
  - Local UI state: useState / component state
  - Shared UI state: context / Zustand store
  - Server state: react-query / SWR (not Redux)
  - URL state: use the URL for shareable state (filters, pagination, tabs)
  - No business logic in UI state — derive from server state where possible
-->
