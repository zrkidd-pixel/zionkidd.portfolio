# Integration Test Instructions

## Applicability: N/A for this project

This is a single-unit static site with no backend services, no microservices, and no
inter-service data flow (per `aidlc-docs/inception/plans/execution-plan.md` — Units Generation was
skipped because the whole site is one simple unit). There is nothing for a traditional
service-to-service integration test to exercise.

The closest equivalent — verifying that routing, content data, and shared components correctly
compose together (e.g. a case-study route resolving the right data file through the shared
`CaseStudyLayout` template) — is already covered by the routing smoke tests in
`src/App.test.tsx` (see `unit-test-instructions.md`), since React Testing Library renders the real
component tree rather than mocking it. No separate integration-test suite or tooling is warranted
at this scale.

If a real backend is ever added (e.g. the analytics proxy hinted at in `src/lib/analytics.ts`
grows into something server-side, or the blog gains a CMS), this file should be revisited.
