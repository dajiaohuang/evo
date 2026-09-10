import { defineConfig, devices } from '@playwright/test'

const port = Number(process.env.PAGES_PORT ?? 4180)
export default defineConfig({
  testDir: './tests/pages',
  outputDir: './test-results/pages',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  use: { baseURL: `http://127.0.0.1:${port}/evo/`, javaScriptEnabled: false, trace: 'retain-on-failure' },
  projects: [
    { name: 'pages-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'pages-firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'pages-webkit-mobile', use: { ...devices['iPhone 13'] } },
  ],
  webServer: { command: 'node scripts/serve-static-pages.mjs', url: `http://127.0.0.1:${port}/evo/`, reuseExistingServer: false },
})
