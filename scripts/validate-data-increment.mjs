import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { createBrotliDecompress, createGunzip } from 'node:zlib'

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

  const fileBytes = statSync(absolutePath).size
  verifiedBytes += fileBytes
  const expected = checksums[relativePath]
  if (typeof expected !== 'string') {
    failures.push(`${relativePath}: added or changed file is missing from manifest checksums`)
  } else {
    const actual = await hashFile(absolutePath)
    if (actual !== expected) failures.push(`${relativePath}: manifest checksum is stale`)
  }

  const jsonLinesEncoding = relativePath.endsWith('.jsonl.br') ? 'br'
    : relativePath.endsWith('.jsonl.gz') ? 'gzip'
      : relativePath.endsWith('.jsonl') ? 'identity' : null
  if (jsonLinesEncoding) {
    try {
      await parseJsonLinesFile(absolutePath, jsonLinesEncoding)
      parsedFiles++
    } catch (error) {
      failures.push(`${relativePath}: ${error instanceof Error ? error.message : String(error)}`)
    }
  } else if (fileBytes > 16 * 1024 * 1024) {
    hashOnlyFiles++
  } else if (relativePath.endsWith('.json')) {
    try {
      JSON.parse(readFileSync(absolutePath, 'utf8'))
      parsedFiles++
    } catch (error) {
      failures.push(`${relativePath}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}

if (failures.length > 0) {
  console.error(`Incremental data validation failed for ${failures.length} issue(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Incremental data validation passed: ${changedDataPaths.length} changed data file(s), ${parsedFiles} parsed, ${hashOnlyFiles} large file(s) checksum-only, ${verifiedBytes.toLocaleString()} changed bytes.`)
}

async function hashFile(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function parseJsonLinesFile(path, encoding) {
  const input = createReadStream(path)
  const decoded = encoding === 'br' ? input.pipe(createBrotliDecompress())
    : encoding === 'gzip' ? input.pipe(createGunzip()) : input
  const lines = createInterface({ input: decoded, crlfDelay: Infinity })
  let index = 0
  for await (const line of lines) {
    index++
    if (!line.trim()) continue
    try {
      JSON.parse(line)
    } catch (error) {
      throw new Error(`invalid JSONL at line ${index}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
