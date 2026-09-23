import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'crustacea-daphnia-magna-batch-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'crustacea-daphnia-magna-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-crustacea-daphnia-magna-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-crustacea-daphnia-magna-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

function readAcceptedRecord(manifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const files = manifest.search.routes[route] ?? []
  assert.ok(files.length, `No pinned registry search route for ${dossier.scientificName}`)
  const matches = []
  for (const relativePath of files) {
    const bytes = gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath)))
    for (const line of bytes.toString('utf8').split('\n')) {
      if (!line) continue
      const record = JSON.parse(line)
      if (record.id === dossier.colId) matches.push(record)
    }
  }
  assert.equal(matches.length, 1, `Expected one COL26.8 row for ${dossier.colId}`)
  const record = matches[0]
  assert.equal(record.scientificName, dossier.scientificName, 'COL scientific name mismatch')
  assert.equal(record.authorship, dossier.authorship, 'COL authorship mismatch')
  assert.equal(record.rank, dossier.rank, 'COL rank mismatch')
  assert.equal(record.status, 'accepted', 'COL status is not accepted')
  assert.equal(String(record.sourceDatasetId), String(dossier.sourceDatasetId), 'COL sourceDatasetId mismatch')
  assert.ok(record.classification?.includes('Arthropoda') && record.classification.includes('Branchiopoda'), 'COL record is outside Crustacea scope')
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const ids = new Set(dossier.sources.map(source => source.id))
  assert.equal(ids.size, dossier.sources.length, 'Duplicate source ids')
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status: ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope/locator missing: ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0 && claim.sourceIds.every(id => ids.has(id)), `Claim source missing: ${facet}`)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Source missing ${key}: ${id}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.ok(source.publishedAt === 'undated' || /^\d{4}-\d{2}-\d{2}$/u.test(source.publishedAt ?? ''))
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
}

const source = JSON.parse(readFileSync(SOURCE_PATH, 'utf8'))
const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.equal(source.records.length, 1, 'This focused batch contains exactly one dossier')
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length, 'Duplicate COL usage ids in batch')
for (const dossier of records) {
  readAcceptedRecord(registryManifest, dossier)
  validateDossier(dossier)
}

const rawBytes = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.ok(roundTripBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.equal(sha256(roundTripBytes), sha256(rawBytes), 'Brotli round-trip SHA-256 mismatch')
const decodedRecords = roundTripBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.deepEqual(decodedRecords, records, 'Decoded shard records differ from sorted source records')

mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE_PATH.slice(ROOT.length + 1).replaceAll('\\', '/'), sha256: sha256(readFileSync(SOURCE_PATH)) },
  duplicateCheck: {
    baseHead: source.duplicateAudit.baseHead,
    prNumber: source.duplicateAudit.prNumber,
    prHead: source.duplicateAudit.prHead,
    indexedRecordCount: source.duplicateAudit.checkedIndexRecords,
    matchedColIds: source.duplicateAudit.matchedColIds,
    matchedNames: source.duplicateAudit.matchedNames,
  },
  raw: { path: RAW_PATH.slice(ROOT.length + 1).replaceAll('\\', '/'), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: {
    path: SHARD_PATH.slice(ROOT.length + 1).replaceAll('\\', '/'),
    encoding: 'brotli-jsonl',
    recordCount: decodedRecords.length,
    decodedBytes: roundTripBytes.length,
    decodedSha256: sha256(roundTripBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { releaseDate: registryManifest.releaseDate, checklistBankDatasetKey: registryManifest.checklistBankDatasetKey, manifestSha256: sha256(registryManifestBytes) },
  generator: 'scripts/build-crustacea-daphnia-magna-batch.mjs',
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ count: records.length, colIds: records.map(record => record.colId), rawBytes: rawBytes.length, compressedBytes: compressedBytes.length, rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), roundTrip: 'exact-byte-match' }, null, 2))
