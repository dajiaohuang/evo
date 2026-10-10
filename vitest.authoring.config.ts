import { defineConfig } from 'vitest/config'
import config, { coreScriptTests } from './vitest.config.ts'

export default defineConfig({
  ...config,
  test: {
    ...config.test,
    include: ['scripts/**/*.test.mjs'],
    exclude: [...(config.test?.exclude ?? []), ...coreScriptTests],
  },
})
