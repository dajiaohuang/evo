import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-core-batch5-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-core-batch5-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DOSSIER_INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = '3af7f2d7e606637d3087ea98de94d3766a7431aa339bac33de287062839d0f19'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function readAcceptedRecord(manifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (manifest.search.routes[route] ?? []).flatMap(path => readRegistryRows(path)).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 search row for ${dossier.colId}`)
  const row = matches[0]
  assert.equal(row.scientificName, dossier.scientificName, `COL name mismatch for ${dossier.colId}`)
  assert.equal(row.authorship, dossier.authorship, `COL authorship mismatch for ${dossier.colId}`)
  assert.equal(row.rank, dossier.rank, `COL rank mismatch for ${dossier.colId}`)
  assert.equal(row.status, 'accepted', `COL status mismatch for ${dossier.colId}`)
  assert.equal(String(row.sourceDatasetId), String(dossier.sourceDatasetId), `COL sourceDatasetId mismatch for ${dossier.colId}`)

  const hierarchy = []
  let currentId = dossier.colId
  while (currentId) {
    const prefix = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
    const files = manifest.hierarchy.nodes.routes[prefix] ?? []
    let current
    for (const path of files) {
      current = readRegistryRows(path).find(node => node.id === currentId)
      if (current) break
    }
    assert.ok(current, `Missing pinned hierarchy node ${currentId}`)
    assert.equal(current.status, 'accepted', `Unaccepted parent ${currentId}`)
    hierarchy.push(current)
    currentId = current.parentId
  }
  hierarchy.reverse()
  const expectedPath = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, expectedPath, `Full accepted hierarchy mismatch for ${dossier.colId}`)
  assert.ok(expectedPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'), `${dossier.colId} is not below Primates`)
  assert.equal(expectedPath.at(-1).id, dossier.colId)
}

function validateDossier(dossier) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, 'Duplicate source ids')
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status), `Invalid facet status: ${facet}`)
    if (assessment.status === 'not-assessed') assert.ok(Array.isArray(assessment.gaps) && assessment.gaps.length, `Unassessed facet needs explicit gap: ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope/locator missing: ${facet}`)
      assert.equal(claim.translationStatus, 'untranslated')
      assert.ok(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0 && claim.sourceIds.every(id => sourceIds.has(id)), `Claim source missing: ${facet}`)
      for (const id of claim.sourceIds) {
        const source = dossier.sources.find(item => item.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified')
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Source missing ${key}: ${id}`)
        assert.match(source.licenseUrl ?? '', /^https:\/\//u)
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
  assert.deepEqual(dossier.identity.sourceIds, ['col'])
  const col = dossier.sources.find(source => source.id === 'col')
  assert.equal(col.licenseAssessment, 'identity-only')
}

function readExistingDossierIds(index) {
  const ids = new Set()
  const recordsById = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Existing shard compressed hash mismatch: ${shard.path}`)
    const bytes = brotliDecompressSync(compressed)
    assert.equal(sha256(bytes), shard.decodedSha256, `Existing shard decoded hash mismatch: ${shard.path}`)
    const rows = bytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(rows.length, shard.recordCount, `Existing shard record count mismatch: ${shard.path}`)
    count += rows.length
    for (const row of rows) {
      assert.ok(!recordsById.has(row.colId), `Duplicate indexed COL ID: ${row.colId}`)
      ids.add(row.colId)
      ids.add(normalize(row.scientificName))
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount, 'Existing index record count mismatch')
  return { ids, count, recordsById }
}

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Source JSON SHA-256 is not pinned in the generator')
const source = JSON.parse(sourceBytes.toString('utf8'))
const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL registry manifest SHA-256 mismatch')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)
assert.deepEqual(source.registry, { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: '2026-08-20', checklistBankDatasetKey: 316115, manifestSha256: EXPECTED_REGISTRY_SHA256 })
assert.ok(source.records.length >= 1 && source.records.length <= 2, 'Batch must contain one or two records')
const records = [...source.records].sort((a, b) => a.colId.localeCompare(b.colId))
assert.equal(new Set(records.map(record => record.colId)).size, records.length, 'Duplicate COL ids in batch')
const dossierIndex = JSON.parse(readFileSync(DOSSIER_INDEX_PATH, 'utf8'))
const indexed = readExistingDossierIds(dossierIndex)
assert.equal(source.updateAudit?.baseHead, 'c6933e86d7ab9c1b913856210ca736dc2d176049')
assert.equal(source.updateAudit?.indexedRecordCountAtAudit, 6933)
assert.equal(source.updateAudit?.targetColId, 'J8P6')
assert.equal(source.updateAudit?.targetScientificName, 'Ateles geoffroyi Kuhl, 1820')
assert.equal(source.updateAudit?.targetRecordCountBeforeUpdate, 1)
assert.equal(source.updateAudit?.previousParsedTargetSha256, '3b34b18397d5415fba3e0588f91227c047f235c4a4b55ccf930e86de47bfa3f2')
assert.equal(source.updateAudit?.previousShardSha256, 'ad8e7fe58f864ce4cdd9710604658fbee35b1c4f4438164908f81c33f8031d0c')
assert.equal(source.updateAudit?.mode, 'in-place-enrichment-of-existing-record')
assert.equal(indexed.count, source.updateAudit.indexedRecordCountAtAudit, 'Index count differs from the in-place update audit')
assert.equal(records.length, 2, 'The original two-record shard must be preserved')
const dossier = records.find(record => record.colId === source.updateAudit.targetColId)
assert.ok(dossier, 'The audited target must be present in the source batch')
assert.equal(dossier.scientificName, source.updateAudit.targetScientificName)
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
const targetMatches = [...indexed.recordsById.values()].filter(record => record.colId === dossier.colId)
assert.equal(targetMatches.length, source.updateAudit.targetRecordCountBeforeUpdate, 'In-place target must already exist exactly once')
assert.equal(indexed.recordsById.get(dossier.colId)?.scientificName, dossier.scientificName)
const targetShard = dossierIndex.shards.find(shard => shard.path === relative(SHARD_PATH))
assert.ok(targetShard, 'The existing target shard must stay in the dossier index')
const originalCompressedBytes = readFileSync(SHARD_PATH)
const originalRawBytes = brotliDecompressSync(originalCompressedBytes)
assert.equal(sha256(originalCompressedBytes), targetShard.compressedSha256, 'Existing target shard compressed hash mismatch')
assert.equal(sha256(originalRawBytes), targetShard.decodedSha256, 'Existing target shard decoded hash mismatch')
const originalRawFileBytes = readFileSync(RAW_PATH)
assert.ok(originalRawBytes.equals(originalRawFileBytes), 'Existing raw batch must match its decompressed shard before update')
const originalRawLines = originalRawFileBytes.toString('utf8').trimEnd().split('\n')
const originalRows = originalRawLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount, 'Existing target shard record count mismatch')
const originalTargetRows = originalRows.filter(record => record.colId === dossier.colId)
assert.equal(originalTargetRows.length, 1, 'The audited target must occur exactly once in its original shard')
assert.ok(sha256(Buffer.from(JSON.stringify(originalTargetRows[0]), 'utf8')) === source.updateAudit.previousParsedTargetSha256 || JSON.stringify(originalTargetRows[0]) === JSON.stringify(dossier), 'Existing target record differs from the audited baseline and rebuilt record')
assert.equal(indexed.recordsById.get(dossier.colId)?.scientificName, dossier.scientificName)
const sourceSiblingRecords = records.filter(record => record.colId !== dossier.colId)
const originalSiblingRecords = originalRows.filter(record => record.colId !== dossier.colId)
assert.deepEqual(sourceSiblingRecords.map(record => record.colId), originalSiblingRecords.map(record => record.colId), 'Sibling records in the batch must be preserved')
assert.deepEqual(sourceSiblingRecords, originalSiblingRecords, 'The non-target dossier must remain byte-equivalent as structured data')
const originalLinesById = new Map(originalRawLines.map(line => [JSON.parse(line).colId, line]))
for (const dossier of records) {
  if (dossier.colId !== source.updateAudit.targetColId) {
    assert.deepEqual(indexed.recordsById.get(dossier.colId), dossier, `Non-target record changed during update: ${dossier.colId}`)
  }
  readAcceptedRecord(registryManifest, dossier)
  validateDossier(dossier)
}
assert.deepEqual(dossier.sources.map(item => item.id), ['col', 'whitworth2019', 'melin2022', 'mclean2016'])
assert.equal(dossier.facets.morphology.status, 'partially-supported')
assert.ok(dossier.facets.morphology.claims.some(claim => claim.text.includes('15 Ateles geoffroyi specimens') && claim.sourceIds.includes('melin2022')))
assert.ok(dossier.facets.ecology.claims.some(claim => claim.sourceIds.includes('melin2022') && claim.text.includes('trichromatic individuals') && claim.text.includes('Isla Agaltepec') && claim.locator.includes('Fig. 3a') && claim.placeTimeScope.includes('Santa Rosa') && claim.placeTimeScope.includes('Isla Agaltepec')))
assert.ok(dossier.facets.ecology.claims.some(claim => claim.sourceIds.includes('mclean2016') && claim.text.includes('one subadult female')))
assert.equal(dossier.facets.lifeHistory.status, 'not-assessed')
assert.equal(dossier.facets.evolution.status, 'not-assessed')
assert.equal(dossier.facets.distribution.status, 'not-assessed')
assert.equal(dossier.facets.fossil.status, 'not-assessed')
assert.equal(dossier.facets.conservation.status, 'not-assessed')

const rawLines = records.map(record => {
  if (record.colId === dossier.colId) return JSON.stringify(record)
  const existingLine = originalLinesById.get(record.colId)
  assert.ok(existingLine, `Missing original raw line for non-target record ${record.colId}`)
  assert.deepEqual(JSON.parse(existingLine), record, `Non-target source record differs from its existing raw line: ${record.colId}`)
  return existingLine
})
const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.ok(roundTripBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.equal(sha256(roundTripBytes), sha256(rawBytes), 'Brotli round-trip SHA-256 mismatch')
const decodedRecords = roundTripBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.deepEqual(decodedRecords, records, 'Decoded shard records differ from sorted source records')
assert.deepEqual(decodedRecords.filter(record => record.colId !== dossier.colId), originalRows.filter(record => record.colId !== dossier.colId), 'Brotli output must preserve non-target records')
for (const sibling of sourceSiblingRecords) assert.equal(rawLines[records.findIndex(record => record.colId === sibling.colId)], originalLinesById.get(sibling.colId), `Non-target raw JSONL line changed: ${sibling.colId}`)
assert.ok(sha256(originalCompressedBytes) === source.updateAudit.previousShardSha256 || originalCompressedBytes.equals(compressedBytes), 'Existing target shard differs from audited baseline and rebuilt output')
assert.ok(sha256(Buffer.from(JSON.stringify(originalTargetRows[0]), 'utf8')) === source.updateAudit.previousParsedTargetSha256 || JSON.stringify(originalTargetRows[0]) === JSON.stringify(dossier), 'Existing target record differs from audited baseline and rebuilt output')

mkdirSync(dirname(RAW_PATH), { recursive: true })
writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
targetShard.recordCount = decodedRecords.length
targetShard.decodedSha256 = sha256(roundTripBytes)
targetShard.compressedSha256 = sha256(compressedBytes)
writeFileSync(DOSSIER_INDEX_PATH, `${JSON.stringify(dossierIndex, null, 2)}\n`, 'utf8')
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: { mode: 'in-place-update', baseHead: source.updateAudit.baseHead, openPullRequests: source.updateAudit.openPullRequests, indexedRecordCount: indexed.count, colId: dossier.colId, scientificName: dossier.scientificName, existingRecordCount: targetMatches.length, matchedColIds: [dossier.colId], matchedNames: [normalize(dossier.scientificName)] },
  initialDuplicateAudit: source.duplicateAudit,
  updateAudit: { ...source.updateAudit, indexedRecordCountAfterUpdate: indexed.count },
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: decodedRecords.length, decodedBytes: roundTripBytes.length, decodedSha256: sha256(roundTripBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registryManifest.releaseDate, checklistBankDatasetKey: registryManifest.checklistBankDatasetKey, manifestSha256: sha256(registryManifestBytes) },
  generator: 'scripts/build-primates-core-batch5.mjs',
  updateMode: 'rebuild-one-existing-record-in-place',
}
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: dossierIndex.recordCount, targetRecordCount: 1, siblingRecordCount: sourceSiblingRecords.length, colId: dossier.colId, name: dossier.scientificName, indexedCount: indexed.count, sourceSha256: sha256(sourceBytes), registryManifestSha256: sha256(registryManifestBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), byteRoundTrip: roundTripBytes.equals(rawBytes), updateMode: manifest.updateMode }, null, 2))
