import { defineConfig, devices } from '@playwright/test'

const e2ePort = Number(process.env.E2E_PORT ?? '4173')
const e2eBaseUrl = `http://127.0.0.1:${e2ePort}/evo/`
const nativeBaseUrl = `http://127.0.0.1:${e2ePort + 1}/evo/`

export default defineConfig({
  testDir: './tests/e2e',
  outputDir: process.env.PLAYWRIGHT_OUTPUT_DIR ?? './test-results',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: e2eBaseUrl,
    trace: 'retain-on-failure',
    locale: 'en-US',
  },
  projects: [
    {
      name: 'chromium',
      testIgnore: /native-runtime\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox-smoke',
      testIgnore: /native-runtime\.spec\.ts/,
      grep: /@cross-browser/,
      use: { ...devices['Desktop Firefox'], serviceWorkers: 'block' },
    },
    {
      name: 'webkit-smoke',
      testIgnore: /native-runtime\.spec\.ts/,
      grep: /@cross-browser/,
      use: { ...devices['Desktop Safari'], serviceWorkers: 'block' },
    },
    {
      name: 'native-data-browser',
      testMatch: /native-runtime\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], baseURL: nativeBaseUrl, serviceWorkers: 'block' },
    },
  ],
  webServer: [{
    command: `npm run preview -- --host 127.0.0.1 --port ${e2ePort}`,
    url: e2eBaseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  }, {
    command: `npm run preview -- --outDir dist-mobile --host 127.0.0.1 --port ${e2ePort + 1}`,
    url: nativeBaseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  }],
})
