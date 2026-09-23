import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/fungi-model-yeasts-dossier-batch-2026-09-24.json'
const RAW = 'data/knowledge/raw-dossiers/fungi-model-yeasts-dossier-batch-2026-09-24.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-fungi-model-yeasts-dossier-batch-2026-09-24.jsonl.br'
const MANIFEST = 'data/knowledge/catalogue-dossiers-fungi-model-yeasts-dossier-batch-2026-09-24.batch-manifest.json'
const REGISTRY = 'data/catalogue-of-life/releases/2026-08-20/registry'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const inputBytes = readFileSync(join(ROOT, INPUT))
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.batchId, 'fungi-model-yeasts-2026-09-24')
assert.equal(input.records.length, 2)
assert.deepEqual(input.duplicateAudit.candidateIdsChecked, ['4TWCR', '4VCRL'])
assert.equal(input.duplicateAudit.openPullRequest, 356)
assert.equal(input.duplicateAudit.openPullRequestHead, '9f52939690ebb480603f5e0de6c3b76004728359')
assert.equal(input.duplicateAudit.result, 'Neither candidate COL ID occurred under data/knowledge or data/sources on main or PR #356.')

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.equal(registryManifest.releaseDate, '2026-08-20')
const shardIndex = readJson('data/knowledge/catalogue-dossier-shards.json')
const records = [...input.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length)

const priorIds = new Set()
for (const shard of shardIndex.shards) {
  const bytes = readFileSync(join(ROOT, shard.path))
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha256(decoded), shard.decodedSha256, `Existing shard digest mismatch: ${shard.path}`)
  for (const line of decoded.toString('utf8').split('\n')) {
    if (!line) continue
    const colId = JSON.parse(line).colId
    assert.ok(!priorIds.has(colId), `Duplicate COL ID already indexed in main: ${colId}`)
    priorIds.add(colId)
  }
}

for (const dossier of records) {
  assert.ok(!priorIds.has(dossier.colId), `Duplicate existing dossier: ${dossier.colId}`)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.sourceDatasetId, '2073')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const routeKey = dossier.scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').slice(0, 2)
  const routes = registryManifest.search.routes[routeKey] ?? []
  const accepted = []
  for (const route of routes) {
    const lines = gunzipSync(readFileSync(join(ROOT, REGISTRY, route))).toString('utf8').split('\n')
    for (const line of lines) {
      if (!line) continue
      const row = JSON.parse(line)
      if (row.id === dossier.colId) accepted.push(row)
    }
  }
  assert.equal(accepted.length, 1, `Expected one registry usage for ${dossier.colId}`)
  assert.equal(accepted[0].scientificName, dossier.scientificName)
  assert.equal(accepted[0].rank, 'species')
  assert.equal(accepted[0].status, 'accepted')
  assert.equal(String(accepted[0].sourceDatasetId), dossier.sourceDatasetId)
  assert.ok(accepted[0].classification.includes('Fungi'), `Expected Fungi classification for ${dossier.colId}`)

  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status: ${facet}`)
    if (assessment.status === 'not-assessed') assert.equal((assessment.claims ?? []).length, 0)
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.locator && claim.text && claim.placeTimeScope && claim.lifeStatus, `Incomplete claim in ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        assert.ok(source.license && source.licenseVersion && source.licenseAppliesTo && source.attribution)
      }
    }
  }
}

const decoded = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.equal(decoded.includes(Buffer.from('\r')), false, 'Canonical JSONL must use LF bytes only')
assert.equal(decoded[decoded.length - 1], 0x0a, 'Canonical JSONL must end with LF')
writeFileSync(join(ROOT, RAW), decoded)
const rawBytes = readFileSync(join(ROOT, RAW))
assert.deepEqual(rawBytes, decoded, 'Raw JSONL bytes differ from canonical serialization')
const compressed = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressed), rawBytes, 'Brotli round-trip must be byte-for-byte exact')
writeFileSync(join(ROOT, SHARD), compressed)

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: 'COL26.8',
  recordCount: records.length,
  colIds: records.map(record => record.colId),
  duplicateAudit: input.duplicateAudit,
  files: {
    source: { path: INPUT, sha256: sha256(inputBytes) },
    rawJsonl: { path: RAW, sha256: sha256(rawBytes), bytes: rawBytes.length, lineEnding: 'LF' },
    shard: { path: SHARD, decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressed), decodedBytes: rawBytes.length, compressedBytes: compressed.length },
    registryManifestSha256: sha256(registryManifestBytes)
  }
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify(manifest, null, 2))
