import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.geojson'],
  test: {
    // Archive replay tests spawn Python and reread the full taxonomy snapshot.
    // Bound concurrent workers to the configuration used for full local runs.
    maxWorkers: 2,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
  },
})
