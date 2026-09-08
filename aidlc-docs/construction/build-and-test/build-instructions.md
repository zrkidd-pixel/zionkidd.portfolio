# Build Instructions

## Prerequisites
- **Build Tool**: Vite 8 (via npm scripts), TypeScript 6 (project references, `tsc -b`)
- **Runtime**: Node.js 18+ (verified locally on Node 22.22.2)
- **Dependencies**: See `package.json` — React 19, React Router 7, Vitest 3, React Testing Library
- **Environment Variables**: None required to build. `src/lib/analytics.ts` has one optional constant (`GOATCOUNTER_SITE`) to fill in later — no env var needed, it's a plain code edit.
- **System Requirements**: No special requirements — this is a static site build, runs on any machine with Node.

## Build Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
No configuration needed for a local build. For deployment, the one manual step is repo **Settings → Pages → Source = "GitHub Actions"** (one-time, in the GitHub UI — see README.md).

### 3. Build
```bash
npm run build
```
Runs `tsc -b` (typecheck, no emit) then `vite build` (produces `dist/`).

### 4. Verify Build Success
- **Expected Output**: `tsc -b` prints nothing on success; `vite build` reports transformed module count and lists `dist/index.html`, a CSS bundle, and a JS bundle with gzip sizes.
- **Build Artifacts**: `dist/index.html`, `dist/assets/*.css`, `dist/assets/*.js` (~247 KB JS / ~79 KB gzipped at last build).
- **Common Warnings**: None currently. If Vite/vitest package versions are bumped independently in the future, watch for a `vite.config.ts`/`vitest.config.ts` type mismatch (see Troubleshooting).

## Troubleshooting

### Build fails with a TypeScript syntax error in a content file
- **Cause**: A case-study or content data file (`src/content/**`) has an unescaped apostrophe inside a single-quoted string (hit once during initial generation — `Vivino's` inside `'...'`).
- **Solution**: Use double-quoted strings for any prose containing an apostrophe, or escape it (`\'`).

### `tsc -b` reports a Plugin-type mismatch involving `vite.config.ts`
- **Cause**: `vitest`'s bundled internal `vite` version can differ from the project's own `vite` version, and importing `defineConfig` from `vitest/config` inside `vite.config.ts` (to merge in a `test` block) surfaces that mismatch as an incompatible `Plugin[]` type.
- **Solution**: Keep `vite.config.ts` and `vitest.config.ts` as two separate files (already done) — `vite.config.ts` uses plain `vite`'s `defineConfig` and owns the React plugin; `vitest.config.ts` uses `vitest/config`'s `defineConfig` and owns only the `test` block, with no plugins (Vitest's default esbuild transform handles `.tsx` fine without `@vitejs/plugin-react`).
