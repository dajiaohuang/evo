import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'crustacea-gammarus-pulex-batch-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'crustacea-gammarus-pulex-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-crustacea-gammarus-pulex-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-crustacea-gammarus-pulex-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

function readAcceptedRecord(registryManifest, dossier) {
  const routeKey = normalize(dossier.scientificName).slice(0, 2)
  const routes = registryManifest.search.routes[routeKey] ?? []
  assert.ok(routes.length, `No pinned COL26.8 search route for ${dossier.scientificName}`)
  const matches = []
  for (const relativePath of routes) {
    const content = gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8')
    for (const line of content.split('\n')) {
      if (!line) continue
      const row = JSON.parse(line)
      if (row.id === dossier.colId) matches.push(row)
    }
  }
  assert.equal(matches.length, 1, `Expected exactly one pinned COL26.8 row for ${dossier.colId}`)
  const row = matches[0]
  assert.equal(row.scientificName, dossier.scientificName, `COL scientificName mismatch: ${dossier.colId}`)
  assert.equal(row.authorship, dossier.authorship, `COL authorship mismatch: ${dossier.colId}`)
  assert.equal(row.rank, dossier.rank, `COL rank mismatch: ${dossier.colId}`)
  assert.equal(row.status, 'accepted', `COL status mismatch: ${dossier.colId}`)
  assert.equal(String(row.sourceDatasetId), String(dossier.sourceDatasetId), `COL sourceDatasetId mismatch: ${dossier.colId}`)
  assert.ok(row.classification?.includes('Arthropoda') && row.classification.includes('Malacostraca'), `COL usage is outside Crustacea scope: ${dossier.colId}`)
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, `Duplicate source IDs: ${dossier.colId}`)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid status: ${dossier.colId}/${facet}`)
    if (assessment.status === 'not-assessed') assert.equal((assessment.claims ?? []).length, 0, `Not-assessed facet has claims: ${dossier.colId}/${facet}`)
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet lacks evidence/gaps: ${dossier.colId}/${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim is missing scope or locator: ${dossier.colId}/${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(claim.sourceIds?.length && claim.sourceIds.every(id => sourceIds.has(id)), `Claim source is missing: ${dossier.colId}/${facet}`)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Claim source missing ${key}: ${id}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
}

const sourceBytes = readFileSync(SOURCE_PATH)
const input = JSON.parse(sourceBytes.toString('utf8'))
const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.batchId, 'crustacea-gammarus-pulex-2026-09-24')
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.ok(input.records.length > 0 && input.records.length <= 2, 'Batch must contain one or two dossiers')
const records = [...input.records].sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
assert.equal(new Set(records.map(record => record.colId)).size, records.length, 'Duplicate COL IDs in batch')

const shardIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(shardIndex.releaseAlias, 'COL26.8')
const priorIds = new Set()
for (const shard of shardIndex.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Indexed shard digest mismatch: ${shard.path}`)
  for (const line of decoded.toString('utf8').split('\n')) {
    if (!line) continue
    const existing = JSON.parse(line)
    assert.ok(!priorIds.has(existing.colId), `Duplicate COL ID in current index: ${existing.colId}`)
    priorIds.add(existing.colId)
  }
}
assert.equal(priorIds.size, shardIndex.recordCount, 'Current shard index record count mismatch')

for (const dossier of records) {
  assert.ok(!priorIds.has(dossier.colId), `Dossier already exists in current indexed shards: ${dossier.colId}`)
  readAcceptedRecord(registryManifest, dossier)
  validateDossier(dossier)
}

const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.ok(decodedBytes.equals(rawBytes), 'Brotli decode must exactly reproduce canonical raw JSONL bytes')
assert.equal(sha256(decodedBytes), sha256(rawBytes), 'Brotli round-trip SHA-256 mismatch')
assert.deepEqual(decodedBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records, 'Decoded records differ from canonical source records')

mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
assert.ok(readFileSync(RAW_PATH).equals(rawBytes), 'Written raw JSONL bytes differ from canonical bytes')
assert.ok(brotliDecompressSync(readFileSync(SHARD_PATH)).equals(readFileSync(RAW_PATH)), 'Written Brotli shard does not round-trip to the written raw JSONL')

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  recordCount: records.length,
  colIds: records.map(record => record.colId),
  duplicateAudit: input.duplicateAudit,
  files: {
    source: { path: 'data/sources/crustacea-gammarus-pulex-batch-2026-09-24.json', sha256: sha256(sourceBytes) },
    rawJsonl: { path: 'data/knowledge/raw-dossiers/crustacea-gammarus-pulex-2026-09-24.jsonl', encoding: 'utf-8-jsonl-lf', sha256: sha256(rawBytes), bytes: rawBytes.length },
    shard: { path: 'data/knowledge/catalogue-dossiers-crustacea-gammarus-pulex-2026-09-24.jsonl.br', encoding: 'brotli-jsonl', decodedSha256: sha256(decodedBytes), compressedSha256: sha256(compressedBytes), decodedBytes: decodedBytes.length, compressedBytes: compressedBytes.length, roundTrip: 'exact-byte-match' },
    registryManifestSha256: sha256(registryManifestBytes),
  },
  generator: 'scripts/build-crustacea-gammarus-pulex-batch.mjs',
}
assert.equal(manifest.files.source.sha256, sha256(readFileSync(SOURCE_PATH)), 'Manifest source digest must match exact source bytes')
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: manifest.recordCount, colIds: manifest.colIds, currentIndexedRecords: priorIds.size, sourceSha256: manifest.files.source.sha256, rawSha256: manifest.files.rawJsonl.sha256, decodedSha256: manifest.files.shard.decodedSha256, compressedSha256: manifest.files.shard.compressedSha256, roundTrip: 'exact-byte-match' }, null, 2))
