import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export const coreScriptTests = [
  'scripts/application-data.test.mjs',
  'scripts/archive-determinism.test.mjs',
  'scripts/artifact-budget.test.mjs',
  'scripts/bundle-task-metrics.test.mjs',
  'scripts/build-content-projections.test.mjs',
  'scripts/content-references.test.mjs',
  'scripts/data-checksum.test.mjs',
  'scripts/mobile-descriptor-pins.test.mjs',
  'scripts/reference-date-status.test.mjs',
  'scripts/tree-path-content.test.mjs',
]

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.geojson'],
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}', ...coreScriptTests],
    // Archive replay tests spawn Python and reread the full taxonomy snapshot.
    // Bound concurrent workers to the configuration used for full local runs.
    maxWorkers: 2,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    exclude: ['tests/e2e/**', 'tests/pages/**', 'node_modules/**', 'dist/**'],
  },
})
