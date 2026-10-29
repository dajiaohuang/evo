import { defineConfig, devices } from '@playwright/test'
export default defineConfig({
  testDir: './tests/e2e', testMatch: 'wikipedia-tree.spec.ts', timeout: 60000,
  expect: { timeout: 15000 }, workers: 1,
  use: { baseURL: 'http://127.0.0.1:4317/evo/', ...devices['Desktop Chrome'], serviceWorkers: 'block' },
  webServer: { command: 'rtk proxy node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4317 --strictPort', url: 'http://127.0.0.1:4317/evo/', reuseExistingServer: false },
})
