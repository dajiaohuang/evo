import { spawnSync } from 'node:child_process'
import { mkdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { rootDir } from './data-lib.mjs'

const startedAt = Date.now()
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const npmCli = process.env.npm_execpath

function run(args) {
  const command = npmCli ? process.execPath : npmCommand
  const commandArgs = npmCli ? [npmCli, ...args] : args
  const result = spawnSync(command, commandArgs, { cwd: rootDir, stdio: 'inherit' })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run(['run', 'release:metadata'])
run(['run', 'data:stage'])
run(['run', 'typecheck'])
run(['exec', '--', 'vite', 'build'])

const elapsedMs = Date.now() - startedAt
const metrics = {
  schemaVersion: 1,
  buildDurationMs: elapsedMs,
  buildDurationLimitMs: 7 * 60 * 1000,
  completedWithinBudget: elapsedMs <= 7 * 60 * 1000,
  indexHtmlBytes: statSync(join(rootDir, 'dist/index.html')).size,
}
mkdirSync(join(rootDir, 'dist/data'), { recursive: true })
writeFileSync(join(rootDir, 'dist/data/build-metrics.json'), `${JSON.stringify(metrics, null, 2)}\n`, 'utf8')
console.log(`Site build completed in ${(elapsedMs / 1000).toFixed(2)}s.`)
