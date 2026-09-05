import { defineConfig } from '@playwright/test'
import config from './playwright.config'

// Web-only maintenance keeps native suites available in the original config.
export default defineConfig({
  ...config,
  projects: config.projects?.filter(project => project.name !== 'native-data-browser'),
  webServer: Array.isArray(config.webServer) ? config.webServer.slice(0, 1) : config.webServer,
})
