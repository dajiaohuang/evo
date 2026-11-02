import { defineConfig } from 'vitest/config'
import config, { coreScriptTests } from './vitest.config.ts'
import { readdirSync, readFileSync } from 'node:fs'

const nodeTests = readdirSync('scripts').filter(name => name.endsWith('.test.mjs'))
  .map(name => `scripts/${name}`).filter(path => readFileSync(path, 'utf8').includes('node:test'))

export default defineConfig({
  ...config,
  test: {
    ...config.test,
    include: ['scripts/**/*.test.mjs'],
    exclude: [...(config.test?.exclude ?? []), ...coreScriptTests, ...nodeTests],
  },
})
