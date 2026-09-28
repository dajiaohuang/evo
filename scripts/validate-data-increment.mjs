import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliDecompressSync, gunzipSync } from 'node:zlib'

const [base, head = 'HEAD'] = process.argv.slice(2)
if (!base || !head) throw new Error('Usage: node scripts/validate-data-increment.mjs <base-sha> <head-sha>')

const changedOutput = /^0+$/.test(base)
  ? execFileSync('git', ['diff-tree', '--root', '--no-commit-id', '--name-only', '-r', head], { encoding: 'utf8' })
  : execFileSync('git', ['diff', '--name-only', base, head], { encoding: 'utf8' })
const changedPaths = new Set(changedOutput.split(/\r?\n/).filter(Boolean))
const changedDataPaths = [...changedPaths]
  .filter((path) => path.startsWith('data/') && path !== 'data/manifest.json')
  .sort()
const manifestChanged = changedPaths.has('data/manifest.json')

if (changedDataPaths.length === 0 && !manifestChanged) {
  console.log('No data files changed; skipped data validation.')
  process.exit(0)
}

const manifestPath = resolve('data/manifest.json')
if (!existsSync(manifestPath)) throw new Error('Changed data has no current data/manifest.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const checksums = manifest.checksums
if (!checksums || typeof checksums !== 'object' || Array.isArray(checksums)) {
  throw new Error('Current data manifest has no checksum map')
}

const failures = []
let verifiedBytes = 0
let parsedFiles = manifestChanged ? 1 : 0
let hashOnlyFiles = 0

for (const relativePath of changedDataPaths) {
  const absolutePath = resolve(relativePath)
  if (!existsSync(absolutePath)) {
    if (Object.hasOwn(checksums, relativePath)) failures.push(`${relativePath}: deleted file remains in manifest checksums`)
    continue
  }

  const bytes = readFileSync(absolutePath)
  verifiedBytes += bytes.length
  const expected = checksums[relativePath]
  if (typeof expected !== 'string') {
    failures.push(`${relativePath}: added or changed file is missing from manifest checksums`)
  } else {
    const actual = createHash('sha256').update(bytes).digest('hex')
    if (actual !== expected) failures.push(`${relativePath}: manifest checksum is stale`)
  }

  if (bytes.length > 16 * 1024 * 1024) {
    hashOnlyFiles++
    continue
  }

  try {
    if (relativePath.endsWith('.json')) {
      JSON.parse(bytes.toString('utf8'))
      parsedFiles++
    } else if (relativePath.endsWith('.jsonl')) {
      parseJsonLines(bytes.toString('utf8'))
      parsedFiles++
    } else if (relativePath.endsWith('.jsonl.br')) {
      parseJsonLines(brotliDecompressSync(bytes).toString('utf8'))
      parsedFiles++
    } else if (relativePath.endsWith('.jsonl.gz')) {
      parseJsonLines(gunzipSync(bytes).toString('utf8'))
      parsedFiles++
    }
  } catch (error) {
    failures.push(`${relativePath}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

if (failures.length > 0) {
  console.error(`Incremental data validation failed for ${failures.length} issue(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Incremental data validation passed: ${changedDataPaths.length} changed data file(s), ${parsedFiles} parsed, ${hashOnlyFiles} large file(s) checksum-only, ${verifiedBytes.toLocaleString()} changed bytes.`)
}

function parseJsonLines(text) {
  const lines = text.split(/\r?\n/)
  for (let index = 0; index < lines.length; index++) {
    if (!lines[index].trim()) continue
    try {
      JSON.parse(lines[index])
    } catch (error) {
      throw new Error(`invalid JSONL at line ${index + 1}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
