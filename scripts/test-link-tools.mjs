import { readdirSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const tests = readdirSync('scripts').filter(name => /^(?:wikipedia|gbif-identity-match).*\.test\.mjs$/.test(name))
  .map(name => `scripts/${name}`).filter(path => readFileSync(path, 'utf8').includes('node:test'))
const result = spawnSync(process.execPath, ['--test', ...tests], { stdio: 'inherit' })
if (result.error) throw result.error
process.exitCode = result.status ?? 1
