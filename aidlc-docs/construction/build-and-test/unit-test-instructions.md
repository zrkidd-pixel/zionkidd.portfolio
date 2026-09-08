# Unit Test Execution

## Run Unit Tests

### 1. Execute All Unit Tests
```bash
npm test
```
(equivalent to `vitest run`)

### 2. Review Test Results
- **Expected**: 15 tests pass, 0 failures, across 4 test files
- **Test Coverage**: No formal coverage threshold set (not required by requirements.md — Property-Based Testing extension is disabled for this project). Coverage can be added later with `vitest run --coverage` if desired.
- **Test Report Location**: Console output only (no HTML/JSON report configured, appropriate for this project's size)

### Test Files
| File | Tests | Covers |
|---|---|---|
| `src/components/ProjectCard.test.tsx` | 2 | Finished-project rendering; Coming Soon variant is visually distinct and routes correctly (US-2, US-12) |
| `src/components/CaseStudyLayout.test.tsx` | 4 | All 6 core sections always render (US-5); missing/placeholder bonus sections render `PlaceholderNote`, never silently omitted (US-6); real bonus content renders normally; "Try it" CTA only appears when a live link exists (US-11) |
| `src/hooks/useTheme.test.tsx` | 2 | Defaults to system color-scheme preference; manual toggle persists across a simulated reload (US-13) |
| `src/App.test.tsx` | 7 | Routing smoke tests — home, both real case-study routes, the Coming Soon teaser route (direct-linkable, US-10), blog list, a blog post, and unknown-slug fallback to home |

### 3. Fix Failing Tests
If tests fail:
1. Run `npx vitest run <path-to-test-file>` to isolate the failure
2. Check for React Testing Library DOM leakage between tests first — this project's `src/test/setup.ts` registers `afterEach(() => cleanup())`; if a new test file is added without going through this shared setup (e.g. a custom Vitest project config), stale DOM nodes from a prior test will cause "multiple elements found" errors that look like real bugs but aren't
3. Fix the underlying code or test expectation
4. Rerun until green
