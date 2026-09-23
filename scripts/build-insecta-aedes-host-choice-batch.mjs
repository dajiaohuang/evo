import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, constants as zlibConstants } from 'node:zlib'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const inputPath = resolve(repositoryRoot, 'data/knowledge/raw-dossiers/insecta-aedes-host-choice-2026-09-24.jsonl')
const shardPath = resolve(repositoryRoot, 'data/knowledge/catalogue-dossiers-insecta-aedes-host-choice-2026-09-24.jsonl.br')
const manifestPath = resolve(repositoryRoot, 'data/knowledge/catalogue-dossiers-insecta-aedes-host-choice-2026-09-24.batch-manifest.json')
const relative = path => path.slice(repositoryRoot.length + 1).replaceAll('\\', '/')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const expectedIds = new Set(['89W72', '89W76'])
const facets = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const decoded = readFileSync(inputPath)
if (decoded.length === 0 || decoded.at(-1) !== 0x0a) throw new Error('Input must be non-empty UTF-8 JSONL ending with a newline')
const records = decoded.toString('utf8').trimEnd().split(/\r?\n/).map((line, index) => {
  try {
    return JSON.parse(line)
  } catch (error) {
    throw new Error(`Invalid JSON on input line ${index + 1}: ${error.message}`)
  }
})
const seenIds = new Set()
for (const record of records) {
  if (!expectedIds.has(record.colId) || seenIds.has(record.colId)) throw new Error(`Unexpected or duplicate COL ID: ${record.colId}`)
  if (record.rank !== 'species' || record.sourceDatasetId !== '1101' || record.completeness?.status !== 'incomplete') {
    throw new Error(`Unexpected identity or completeness state for ${record.colId}`)
  }
  if (Object.keys(record.facets ?? {}).sort().join('|') !== [...facets].sort().join('|')) {
    throw new Error(`The seven required facets are missing or unexpected for ${record.colId}`)
  }
  if (record.sources?.find(source => source.id === 'hostchoice')?.licenseAssessment !== 'item-level-verified') {
    throw new Error(`Article-level rights record is missing for ${record.colId}`)
  }
  seenIds.add(record.colId)
}
if (records.length !== expectedIds.size || [...expectedIds].some(id => !seenIds.has(id))) {
  throw new Error('Input does not contain exactly the two reviewed COL usages')
}

const compressed = brotliCompressSync(decoded, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
const manifest = {
  schemaVersion: 1,
  batchId: 'insecta-aedes-host-choice-2026-09-24',
  releaseAlias: 'COL26.8',
  input: {
    path: relative(inputPath),
    bytes: decoded.byteLength,
    sha256: sha256(decoded),
  },
  shard: {
    path: relative(shardPath),
    encoding: 'brotli-jsonl',
    recordCount: records.length,
    decodedBytes: decoded.byteLength,
    decodedSha256: sha256(decoded),
    compressedBytes: compressed.byteLength,
    compressedSha256: sha256(compressed),
    brotliParameters: { mode: 'text', quality: 11 },
  },
  generator: relative(fileURLToPath(import.meta.url)),
}

mkdirSync(dirname(shardPath), { recursive: true })
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ recordCount: records.length, shardSha256: manifest.shard.compressedSha256, manifest: relative(manifestPath) })}\n`)
