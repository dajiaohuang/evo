import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT_PATH = join(ROOT, 'data', 'sources', 'aves-model-conservation-dossier-batch-2026-09-24.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const REGISTRY_MANIFEST_PATH = join(REGISTRY_ROOT, 'manifest.json')
const SHARD_INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const DOSSIER_INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers.json')
const OUTPUT_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-aves-model-conservation-batch-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-aves-model-conservation-batch-2026-09-24.batch-manifest.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED = new Map([
  ['3HSM2', { scientificName: 'Gymnogyps californianus (Shaw, 1797)', facet: 'conservation' }],
  ['54HRJ', { scientificName: 'Taeniopygia guttata (Vieillot, 1817)', facet: 'evolution' }],
])
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

function readAcceptedRegistryRow(manifest, dossier) {
  const routeKey = normalize(dossier.scientificName).slice(0, 2)
  const routeFiles = manifest.search.routes[routeKey] ?? []
  assert.ok(routeFiles.length > 0, `No pinned COL26.8 search route for ${dossier.scientificName}`)
  const matches = []
  for (const relativePath of routeFiles) {
    const rows = gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n')
    for (const line of rows) {
      if (!line) continue
      const record = JSON.parse(line)
      if (record.id === dossier.colId) matches.push(record)
    }
  }
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 row for ${dossier.colId}`)
  const record = matches[0]
  assert.equal(record.scientificName, dossier.scientificName, `Exact name/authorship mismatch: ${dossier.colId}`)
  assert.equal(record.rank, dossier.rank, `Rank mismatch: ${dossier.colId}`)
  assert.equal(record.status, 'accepted', `COL26.8 usage is not accepted: ${dossier.colId}`)
  assert.equal(String(record.sourceDatasetId), String(dossier.sourceDatasetId), `Source dataset mismatch: ${dossier.colId}`)
  assert.ok(record.classification?.includes('Aves'), `COL26.8 row is not classified under Aves: ${dossier.colId}`)
  return record
}

function allIndexedIds() {
  const indexed = JSON.parse(readFileSync(DOSSIER_INDEX_PATH, 'utf8'))
  const ids = new Set((indexed.records ?? []).map(record => record.colId))
  const shardIndex = JSON.parse(readFileSync(SHARD_INDEX_PATH, 'utf8'))
  for (const shard of shardIndex.shards ?? []) {
    const bytes = readFileSync(join(ROOT, shard.path))
    const decoded = shard.path.endsWith('.gz')
      ? gunzipSync(bytes)
      : shard.path.endsWith('.br')
        ? brotliDecompressSync(bytes)
        : bytes
    for (const line of decoded.toString('utf8').split('\n')) {
      if (!line) continue
      const record = JSON.parse(line)
      if (record.colId) ids.add(record.colId)
    }
  }
  return ids
}

const inputBytes = readFileSync(INPUT_PATH)
const input = JSON.parse(inputBytes.toString('utf8'))
const registryManifestBytes = readFileSync(REGISTRY_MANIFEST_PATH)
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.ok(Array.isArray(input.records) && input.records.length === EXPECTED.size, 'Expected exactly two Aves dossier records')

const records = [...input.records].sort((left, right) => left.colId.localeCompare(right.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length, 'Duplicate COL usage IDs in batch')
const existingIds = allIndexedIds()
for (const record of records) {
  const expected = EXPECTED.get(record.colId)
  assert.ok(expected, `Unexpected COL usage ID ${record.colId}`)
  assert.equal(record.scientificName, expected.scientificName, `Unexpected name/authorship for ${record.colId}`)
  assert.equal(record.rank, 'species', `Non-species record ${record.colId}`)
  assert.equal(String(record.sourceDatasetId), '2144', `Unexpected sourceDatasetId for ${record.colId}`)
  assert.ok(!existingIds.has(record.colId), `Dossier already exists in current index/shards: ${record.colId}`)
  readAcceptedRegistryRow(registryManifest, record)
  assert.equal(record.completeness?.status, 'incomplete', `Dossier must remain incomplete: ${record.colId}`)
  assert.equal(record.expertReview?.status, 'not-reviewed', `Dossier must remain unreviewed: ${record.colId}`)
  assert.ok(record.identity?.method && record.identity?.scope, `Identity evidence required: ${record.colId}`)
  assert.ok(record.identity.sourceIds.length > 0, `Identity source required: ${record.colId}`)
  assert.ok(record.lifeStatusScope?.wild && record.lifeStatusScope?.domesticated && record.lifeStatusScope?.fossil, `Life-status scope required: ${record.colId}`)
  assert.deepEqual(Object.keys(record.facets).sort(), [...FACETS].sort(), `All seven facets required: ${record.colId}`)
  const sources = new Map(record.sources.map(source => [source.id, source]))
  assert.equal(sources.size, record.sources.length, `Duplicate source IDs: ${record.colId}`)
  for (const source of sources.values()) {
    for (const field of ['title', 'url', 'stableId', 'version', 'publishedAt', 'accessedAt', 'locator', 'license', 'licenseVersion', 'licenseUrl', 'rightsHolder', 'licenseAppliesTo', 'attribution', 'licenseAssessment', 'scope']) {
      assert.ok(source[field], `Source missing ${field}: ${record.colId}/${source.id}`)
    }
    assert.match(source.url, /^https:\/\//u, `HTTPS source URL required: ${record.colId}/${source.id}`)
  }
  for (const sourceId of record.identity.sourceIds) assert.ok(sources.has(sourceId), `Unknown identity source ${record.colId}/${sourceId}`)
  for (const facet of FACETS) {
    const assessment = record.facets[facet]
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status: ${record.colId}/${facet}`)
    if (facet !== expected.facet) {
      assert.equal(assessment.status, 'not-assessed', `Unsupported facet must remain not-assessed: ${record.colId}/${facet}`)
      assert.equal((assessment.claims ?? []).length, 0, `Not-assessed facet cannot contain claims: ${record.colId}/${facet}`)
    } else {
      assert.equal(assessment.status, 'partially-supported', `Directly evidenced facet must remain partial: ${record.colId}/${facet}`)
      assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet needs claim and gap: ${record.colId}/${facet}`)
    }
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.originalLanguage && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim locator/scope missing: ${record.colId}/${facet}`)
      assert.equal(claim.translationStatus, 'untranslated', `This batch contains no reviewed translations: ${record.colId}/${facet}`)
      assert.ok(claim.sourceIds.length > 0 && claim.sourceIds.every(sourceId => sources.has(sourceId)), `Claim source missing: ${record.colId}/${facet}`)
      for (const sourceId of claim.sourceIds) assert.equal(sources.get(sourceId).licenseAssessment, 'item-level-verified', `Claim source rights are not item-verified: ${record.colId}/${sourceId}`)
    }
  }
}

const decodedBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compressedBytes = brotliCompressSync(decodedBytes, {
  params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 },
})
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.deepEqual(roundTripBytes, decodedBytes, 'Brotli shard must decompress byte-for-byte to the source JSONL serialization')
writeFileSync(OUTPUT_PATH, compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: 'COL26.8',
  releaseDate: '2026-08-20',
  checklistBankDatasetKey: 316115,
  sourceDatasetId: '2144',
  scope: input.scope,
  generator: 'scripts/build-aves-model-conservation-dossier-batch.mjs',
  registryManifestSha256: sha256(registryManifestBytes),
  sourceSha256: sha256(inputBytes),
  validation: {
    brotliRoundTrip: 'passed',
    roundTripDecodedByteLength: roundTripBytes.length,
    roundTripDecodedSha256: sha256(roundTripBytes),
    byteForByteMatchesSourceJsonl: true,
  },
  output: {
    path: 'data/knowledge/catalogue-dossiers-aves-model-conservation-batch-2026-09-24.jsonl.br',
    encoding: 'brotli-jsonl',
    recordCount: records.length,
    decodedSha256: sha256(decodedBytes),
    compressedSha256: sha256(compressedBytes),
  },
  records: records.map(record => ({ colId: record.colId, scientificName: record.scientificName, rank: record.rank, sourceDatasetId: record.sourceDatasetId })),
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify({ output: manifest.output.path, manifest: 'data/knowledge/catalogue-dossiers-aves-model-conservation-batch-2026-09-24.batch-manifest.json', count: records.length, colIds: records.map(record => record.colId), roundTrip: manifest.validation, decodedSha256: manifest.output.decodedSha256, compressedSha256: manifest.output.compressedSha256 }, null, 2))
