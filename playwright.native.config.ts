import { defineConfig } from '@playwright/test'
import config from './playwright.config'

export default defineConfig({
  ...config,
  workers: process.env.CI ? 2 : 4,
  projects: config.projects?.filter(project => project.name === 'native-data-browser'),
  webServer: Array.isArray(config.webServer) ? config.webServer.slice(1) : config.webServer,
})
