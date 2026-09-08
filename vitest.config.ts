import { defineConfig } from 'vitest/config'

// Kept separate from vite.config.ts: bundling the React vite plugin here
// triggers a Plugin-type mismatch between the root `vite` version and the
// (older) `vite` version vitest bundles internally. Vitest's default esbuild
// JSX transform handles .tsx test files fine without the plugin.
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
