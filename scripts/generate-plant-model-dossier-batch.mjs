import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const root = process.cwd()
const sourcePath = resolve(root, 'data/knowledge/plant-model-dossier-batch-1.json')
const rawRelativePath = 'data/knowledge/catalogue-dossiers-plants-models-batch-1.jsonl'
const compressedRelativePath = 'data/knowledge/catalogue-dossiers-plants-models-batch-1.jsonl.br'
const manifestRelativePath = 'data/knowledge/catalogue-dossiers-plants-models-batch-1.manifest.json'
const rawPath = resolve(root, rawRelativePath)
const compressedPath = resolve(root, compressedRelativePath)
const manifestPath = resolve(root, manifestRelativePath)
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry/search')
const requiredIdentities = new Map([
  ['G26R', { file: 'name-ar.jsonl.gz', scientificName: 'Arabidopsis thaliana (L.) Heynh.', authorship: '(L.) Heynh.', sourceDatasetId: '1141' }],
  ['6SZF3', { file: 'name-or.jsonl.gz', scientificName: 'Oryza sativa L.', authorship: 'L.', sourceDatasetId: '2232' }],
])

const fail = message => {
  console.error(`plant dossier batch: ${message}`)
  process.exitCode = 1
}

function assertFacet(record, name) {
  const facet = record.facets?.[name]
  if (!facet || !['partially-supported', 'not-assessed'].includes(facet.status)) throw new Error(`${record.colId}: invalid ${name} status`)
  if (facet.status === 'not-assessed' && ('claims' in facet || 'gaps' in facet)) throw new Error(`${record.colId}: not-assessed ${name} facet must not contain inferred claims`)
  if (facet.status === 'partially-supported') {
    if (!Array.isArray(facet.claims) || facet.claims.length === 0 || !Array.isArray(facet.gaps) || facet.gaps.length === 0) throw new Error(`${record.colId}: supported ${name} facet requires claims and explicit gaps`)
    for (const claim of facet.claims) {
      if (!claim.text || !claim.textZh || !claim.locator || !claim.placeTimeScope || !claim.lifeStatus || !Array.isArray(claim.sourceIds) || claim.sourceIds.length === 0) throw new Error(`${record.colId}: ${name} claim is missing bilingual text, source, locator, or scope`)
      for (const sourceId of claim.sourceIds) if (!record.sources.some(source => source.id === sourceId)) throw new Error(`${record.colId}: ${name} claim references unknown source ${sourceId}`)
    }
  }
}

try {
  const batch = JSON.parse(readFileSync(sourcePath, 'utf8'))
  if (batch.schemaVersion !== 1 || batch.releaseAlias !== 'COL26.8' || !Array.isArray(batch.records)) throw new Error('source must declare schemaVersion 1 and COL26.8')
  if (batch.records.length !== requiredIdentities.size) throw new Error(`expected exactly ${requiredIdentities.size} records, found ${batch.records.length}`)

  const seen = new Set()
  for (const record of batch.records) {
    const expected = requiredIdentities.get(record.colId)
    if (!expected) throw new Error(`unexpected COL ID ${record.colId}`)
    if (seen.has(record.colId)) throw new Error(`duplicate COL ID ${record.colId}`)
    seen.add(record.colId)
    const path = resolve(registryRoot, expected.file)
    const lines = gunzipSync(readFileSync(path)).toString('utf8').split(/\r?\n/).filter(Boolean)
    const usages = lines.map(line => JSON.parse(line)).filter(usage => usage.id === record.colId)
    if (usages.length !== 1) throw new Error(`${record.colId}: expected one pinned COL usage, found ${usages.length}`)
    const usage = usages[0]
    if (usage.scientificName !== expected.scientificName || usage.authorship !== expected.authorship || usage.rank !== 'species' || usage.status !== 'accepted' || usage.sourceDatasetId !== expected.sourceDatasetId) {
      throw new Error(`${record.colId}: pinned COL26.8 name/authorship/rank/status/sourceDatasetId mismatch`)
    }
    if (record.scientificName !== usage.scientificName || record.rank !== usage.rank || record.sourceDatasetId !== usage.sourceDatasetId) throw new Error(`${record.colId}: dossier identity does not preserve pinned COL fields`)
    if (record.completeness?.status !== 'incomplete' || record.expertReview?.status !== 'not-reviewed') throw new Error(`${record.colId}: batch dossiers must remain incomplete and unreviewed`)
    for (const facet of ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']) assertFacet(record, facet)
    const sourceIds = new Set()
    for (const source of record.sources ?? []) {
      if (!source.id || sourceIds.has(source.id) || !source.url?.startsWith('https://') || !source.version || !source.locator || !source.license || !source.scope) throw new Error(`${record.colId}: source metadata is incomplete`)
      sourceIds.add(source.id)
    }
  }

  const raw = Buffer.from(`${batch.records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
  const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTripped = brotliDecompressSync(compressed)
  if (!roundTripped.equals(raw)) throw new Error('Brotli output does not round-trip to the exact raw JSONL bytes')

  const rawSha256 = createHash('sha256').update(raw).digest('hex')
  const compressedSha256 = createHash('sha256').update(compressed).digest('hex')
  writeFileSync(rawPath, raw)
  writeFileSync(compressedPath, compressed)
  const manifest = {
    schemaVersion: 1,
    releaseAlias: 'COL26.8',
    encoding: 'brotli-jsonl',
    recordCount: batch.records.length,
    shards: [{
      path: compressedRelativePath,
      decodedPath: rawRelativePath,
      recordCount: batch.records.length,
      decodedBytes: raw.byteLength,
      compressedBytes: compressed.byteLength,
      decodedSha256: rawSha256,
      compressedSha256,
    }],
  }
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  console.log(JSON.stringify({
    rawOutput: rawRelativePath,
    compressedOutput: compressedRelativePath,
    manifestOutput: manifestRelativePath,
    recordCount: batch.records.length,
    decodedBytes: raw.byteLength,
    compressedBytes: compressed.byteLength,
    decodedSha256: rawSha256,
    compressedSha256,
    roundTrip: roundTripped.equals(raw),
  }, null, 2))
} catch (error) {
  fail(error instanceof Error ? error.message : String(error))
}
