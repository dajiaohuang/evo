import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { Transform } from 'node:stream'
import { createBrotliDecompress, createGunzip } from 'node:zlib'

const MAX_DECODED_JSONL_BYTES = 16 * 1024 * 1024
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
let domainIndexCache = null
let sidecarCandidatesCache = null

for (const relativePath of changedDataPaths) {
  const absolutePath = resolve(relativePath)
  const domainDescriptor = expectedDomainDescriptor(relativePath)
  if (!existsSync(absolutePath)) {
    if (Object.hasOwn(checksums, relativePath) || domainDescriptor || isDomainManifest(relativePath)) {
      failures.push(`${relativePath}: deleted file remains in a current data manifest`)
    }
    continue
  }

  const fileBytes = statSync(absolutePath).size
  verifiedBytes += fileBytes
  const expectedSha256 = checksums[relativePath] ?? domainDescriptor?.sha256
  if (typeof expectedSha256 !== 'string') {
    if (!isDomainManifest(relativePath)) {
      failures.push(`${relativePath}: changed file is missing from its release manifest or batch metadata`)
    }
  } else {
    const actualSha256 = await hashFile(absolutePath)
    if (actualSha256 !== expectedSha256) failures.push(`${relativePath}: release checksum is stale`)
  }

  const encoding = jsonLinesEncoding(relativePath)
  if (encoding) {
    const advertisedDecodedBytes = domainDescriptor?.decodedBytes
    if (fileBytes > MAX_DECODED_JSONL_BYTES || (Number.isSafeInteger(advertisedDecodedBytes) && advertisedDecodedBytes > MAX_DECODED_JSONL_BYTES)) {
      hashOnlyFiles++
      continue
    }
    try {
      const result = await parseJsonLinesFile(absolutePath, encoding)
      parsedFiles++
      if (Number.isSafeInteger(domainDescriptor?.recordCount) && result.recordCount !== domainDescriptor.recordCount) {
        failures.push(`${relativePath}: row count ${result.recordCount} differs from its manifest count ${domainDescriptor.recordCount}`)
      }
      if (typeof domainDescriptor?.decodedSha256 === 'string' && result.decodedSha256 !== domainDescriptor.decodedSha256) {
        failures.push(`${relativePath}: decoded checksum differs from its manifest`)
      }
      if (Number.isSafeInteger(domainDescriptor?.decodedBytes) && result.decodedBytes !== domainDescriptor.decodedBytes) {
        failures.push(`${relativePath}: decoded byte count differs from its manifest`)
      }
    } catch (error) {
      failures.push(`${relativePath}: ${error instanceof Error ? error.message : String(error)}`)
    }
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
  console.log(`Incremental data validation passed: ${changedDataPaths.length} changed data file(s), ${parsedFiles} parsed, ${hashOnlyFiles} large JSONL file(s) checksum-only, ${verifiedBytes.toLocaleString()} changed bytes.`)
}

function jsonLinesEncoding(path) {
  if (path.endsWith('.jsonl.br')) return 'br'
  if (path.endsWith('.jsonl.gz')) return 'gzip'
  if (path.endsWith('.jsonl')) return 'identity'
  return null
}

function isDomainManifest(path) {
  return path === 'data/knowledge/catalogue-dossier-shards.json'
    || path.endsWith('/manifest.json')
    || /\.(?:metadata|batch-manifest|update-manifest)\.json$/.test(path)
}

function expectedDomainDescriptor(path) {
  if (path.startsWith('data/knowledge/species-evidence-queue/')) {
    const index = readJsonCached('data/knowledge/species-evidence-queue/manifest.json')
    const descriptor = index.shards?.find((shard) => shard.path === path)
    return descriptor ? { ...descriptor, sha256: descriptor.compressedSha256 } : null
  }
  if (path.startsWith('data/knowledge/catalogue-dossiers-') && path.endsWith('.jsonl.br')) {
    const index = readJsonCached('data/knowledge/species-evidence-queue/manifest.json')
    const descriptor = index.inputs?.dossierShards?.find((shard) => shard.path === path)
      ?? readJsonCached('data/knowledge/catalogue-dossier-shards.json').shards?.find((shard) => shard.path === path)
    return descriptor ? { ...descriptor, sha256: descriptor.compressedSha256 } : null
  }
  if (path.startsWith('data/knowledge/raw-dossiers/')) {
    if (!sidecarCandidatesCache) {
      sidecarCandidatesCache = readdirSync(resolve('data/knowledge'), { withFileTypes: true })
        .filter((entry) => entry.isFile() && /\.(?:metadata|batch-manifest)\.json$/.test(entry.name))
        .map((entry) => `data/knowledge/${entry.name}`)
    }
    for (const sidecarPath of sidecarCandidatesCache) {
      const descriptor = findPathDescriptor(readJsonCached(sidecarPath), path)
      if (descriptor) return descriptor
    }
  }
  return null
}

function readJsonCached(path) {
  if (!domainIndexCache) domainIndexCache = new Map()
  if (!domainIndexCache.has(path)) {
    const absolutePath = resolve(path)
    if (!existsSync(absolutePath)) throw new Error(`Missing incremental data manifest: ${path}`)
    domainIndexCache.set(path, JSON.parse(readFileSync(absolutePath, 'utf8')))
  }
  return domainIndexCache.get(path)
}

function findPathDescriptor(value, targetPath) {
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findPathDescriptor(item, targetPath)
      if (found) return found
    }
    return null
  }
  if (!value || typeof value !== 'object') return null

  const matchesPath = value.path === targetPath || value.rawPath === targetPath
    || value.input?.path === targetPath || value.output?.path === targetPath
    || value.shard?.path === targetPath
  if (matchesPath) {
    const compressedSha256 = value.compressedSha256 ?? value.shard?.compressedSha256
    const sha256 = targetPath.endsWith('.br')
      ? compressedSha256 ?? value.sha256
      : value.sha256 ?? value.rawSha256 ?? value.input?.sha256 ?? value.output?.sha256
        ?? value.decodedSha256 ?? value.shard?.decodedSha256
    return {
      compressedSha256,
      sha256,
      decodedSha256: value.decodedSha256 ?? value.shard?.decodedSha256,
      decodedBytes: value.decodedBytes ?? value.shard?.decodedBytes,
      recordCount: value.recordCount ?? value.shard?.recordCount,
    }
  }
  for (const nested of Object.values(value)) {
    const found = findPathDescriptor(nested, targetPath)
    if (found) return found
  }
  return null
}

async function hashFile(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function parseJsonLinesFile(path, encoding) {
  const source = createReadStream(path)
  const decoded = encoding === 'br' ? source.pipe(createBrotliDecompress())
    : encoding === 'gzip' ? source.pipe(createGunzip()) : source
  const hash = createHash('sha256')
  let decodedBytes = 0
  const meter = new Transform({
    transform(chunk, _encoding, callback) {
      decodedBytes += chunk.length
      hash.update(chunk)
      callback(null, chunk)
    },
  })
  const measured = decoded.pipe(meter)
  const lines = createInterface({ input: measured, crlfDelay: Infinity })
  let recordCount = 0
  for await (const line of lines) {
    if (!line.trim()) continue
    recordCount++
    try {
      JSON.parse(line)
    } catch (error) {
      throw new Error(`invalid JSONL at line ${recordCount}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
  return { recordCount, decodedBytes, decodedSha256: hash.digest('hex') }
}
