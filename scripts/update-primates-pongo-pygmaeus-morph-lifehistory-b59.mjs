import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-pongo-pygmaeus-morph-lifehistory-b59-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-core-batch5-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const BASE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.batch-manifest.json')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-pongo-pygmaeus-morph-lifehistory-b59-2026-09-28.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = 'b5e04d655b408788fc06b1b92efeb87fe54cf1dbc2ce73d1188c3eded64969ea'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B59 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-pongo-pygmaeus-morph-lifehistory-b59-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.audit.target, {
  colId: '4LTT2', scientificName: 'Pongo pygmaeus (Linnaeus, 1760)', authorship: '(Linnaeus, 1760)', rank: 'species', sourceDatasetId: '2144',
})
assert.equal(source.audit.queueRowSha256BeforeUpdate, 'd7cc78bb68f8e4189091825c1c7525bea92993ee492a8c6296c65041b7cf21da')

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registryManifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registryManifest.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 search row for ${dossier.colId}`)
  const row = matches[0]
  assert.equal(row.scientificName, dossier.scientificName)
  assert.equal(row.authorship, dossier.authorship)
  assert.equal(row.rank, 'species')
  assert.equal(row.status, 'accepted')
  assert.equal(String(row.sourceDatasetId), String(dossier.sourceDatasetId))

  const hierarchy = []
  let currentId = dossier.colId
  while (currentId) {
    const prefix = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
    const files = registryManifest.hierarchy.nodes.routes[prefix] ?? []
    let current
    for (const path of files) {
      current = readRegistryRows(path).find(node => node.id === currentId)
      if (current) break
    }
    assert.ok(current, `Missing pinned hierarchy node ${currentId}`)
    assert.equal(current.status, 'accepted')
    hierarchy.push(current)
    currentId = current.parentId
  }
  hierarchy.reverse()
  const expectedPath = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.deepEqual(dossier.classificationPath, expectedPath, `Full accepted hierarchy mismatch for ${dossier.colId}`)
  assert.ok(expectedPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
  assert.equal(expectedPath.at(-1).id, dossier.colId)
}

function readIndexedRecords(index) {
  const recordsById = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, `Indexed compressed hash mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, `Indexed decoded hash mismatch: ${shard.path}`)
    const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(rows.length, shard.recordCount, `Indexed row count mismatch: ${shard.path}`)
    count += rows.length
    for (const row of rows) {
      assert.ok(!recordsById.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount, 'Dossier index record count mismatch')
  return { recordsById, count }
}

function validateDossier(dossier) {
  assert.equal(dossier.colId, source.audit.target.colId)
  assert.equal(dossier.scientificName, source.audit.target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sourceIds = new Set(dossier.sources.map(item => item.id))
  assert.equal(sourceIds.size, dossier.sources.length, 'Duplicate source ids')
  assert.equal(dossier.sources.filter(item => item.stableId === source.source.stableId).length, 1, 'New source must occur exactly once')
  for (const facet of ['morphology', 'lifeHistory']) {
    const claim = source.claims[facet]
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Missing bounded ${facet} claim`)
    assert.deepEqual(claim.sourceIds, [source.source.id])
    assert.equal(claim.translationStatus, 'untranslated')
    assert.equal(claim.originalLanguage, 'en')
    assert.equal(dossier.facets[facet].status, 'partially-supported')
    assert.deepEqual(dossier.facets[facet].claims, [claim])
    assert.deepEqual(dossier.facets[facet].gaps, source.facetGaps[facet])
  }
  for (const facet of FACETS) {
    for (const claim of dossier.facets[facet].claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete claim: ${facet}`)
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), `Missing claim source: ${facet}`)
    }
  }
  assert.equal(source.source.licenseAssessment, 'item-level-verified')
  assert.equal(source.source.licenseVersion, 'CC BY 4.0')
  for (const key of ['stableId', 'rightsHolder', 'licenseAppliesTo', 'attribution', 'scope']) assert.ok(source.source[key], `Source missing ${key}`)
  assert.match(source.source.licenseUrl, /^https:\/\//u)
}

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 registry manifest mismatch')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const indexed = readIndexedRecords(index)
assert.equal(indexed.count, source.audit.indexedRecordCount, 'Index count changed since the evidence audit')
const targetShard = index.shards.find(shard => shard.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited target shard is missing from index')
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
assert.deepEqual(originalDecoded, readFileSync(RAW_PATH), 'Raw dossier source does not match indexed Brotli shard')
assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
assert.equal(sha256(originalCompressed), targetShard.compressedSha256)

const originalRawLines = originalDecoded.toString('utf8').trimEnd().split('\n')
const originalRows = originalRawLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const baseline = originalRows.find(record => record.colId === source.audit.target.colId)
assert.ok(baseline, 'Audited target is missing from raw source')
const sourceOccurrences = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item }))).filter(item => item.source.stableId === source.source.stableId)
const alreadyApplied = baseline.sources.some(item => item.id === source.source.id && item.stableId === source.source.stableId)
if (alreadyApplied) {
  assert.equal(sourceOccurrences.length, 1, 'Previously applied article must occur exactly once')
  assert.equal(sourceOccurrences[0].colId, baseline.colId, 'Previously applied article is linked to another species')
  assert.deepEqual(baseline.sources.find(item => item.id === source.source.id), source.source)
  for (const facet of ['morphology', 'lifeHistory']) {
    assert.deepEqual(baseline.facets[facet].claims, [source.claims[facet]])
    assert.deepEqual(baseline.facets[facet].gaps, source.facetGaps[facet])
  }
  assert.equal(baseline.identity.scope, source.identityScope)
  assert.equal(baseline.lifeStatusScope.wild, source.wildScope)
  assert.deepEqual(baseline.completeness.reasons, source.completenessReasons)
} else {
  assert.equal(sha256(originalDecoded), source.audit.previousRawSha256, 'Audited baseline raw dossier changed')
  assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256, 'Audited baseline compressed shard changed')
  assert.equal(sha256(Buffer.from(JSON.stringify(baseline))), source.audit.previousTargetRecordSha256, 'Audited target record changed')
  assert.equal(sourceOccurrences.length, source.audit.sourceStableIdOccurrencesBeforeUpdate, 'New article already occurs in indexed dossiers')
  assert.equal(baseline.sources.some(item => item.id === source.source.id || item.stableId === source.source.stableId), false)
  assert.equal(baseline.facets.morphology.status, 'not-assessed')
  assert.equal(baseline.facets.lifeHistory.status, 'not-assessed')
}

const queueBytes = brotliDecompressSync(readFileSync(join(ROOT, source.audit.queueShardPath)))
const queueLine = queueBytes.toString('utf8').split('\n').find(line => line && JSON.parse(line).colId === source.audit.target.colId)
assert.ok(queueLine, 'Audited species evidence queue row is missing')
const queueRecord = JSON.parse(queueLine)
assert.equal(queueRecord.dossier.status, 'incomplete')
if (alreadyApplied && queueRecord.dossier.sourceIds.includes(source.source.id)) {
  assert.equal(queueRecord.dossier.facetStatuses.morphology, 'partially-supported')
  assert.equal(queueRecord.dossier.facetStatuses.lifeHistory, 'partially-supported')
} else {
  assert.equal(sha256(Buffer.from(queueLine)), source.audit.queueRowSha256BeforeUpdate, 'Queue row changed after source identity audit')
  assert.equal(queueRecord.dossier.facetStatuses.morphology, 'not-assessed')
  assert.equal(queueRecord.dossier.facetStatuses.lifeHistory, 'not-assessed')
}

const dossier = structuredClone(baseline)
if (!alreadyApplied) {
  dossier.checkedAt = source.checkedAt
  dossier.identity.scope = source.identityScope
  dossier.lifeStatusScope.wild = source.wildScope
  dossier.sources.push(structuredClone(source.source))
  dossier.facets.morphology = { status: 'partially-supported', claims: [structuredClone(source.claims.morphology)], gaps: structuredClone(source.facetGaps.morphology) }
  dossier.facets.lifeHistory = { status: 'partially-supported', claims: [structuredClone(source.claims.lifeHistory)], gaps: structuredClone(source.facetGaps.lifeHistory) }
  dossier.completeness = { status: 'incomplete', reasons: structuredClone(source.completenessReasons) }
}
verifyAcceptedIdentity(registryManifest, dossier)
validateDossier(dossier)
for (const siblingId of source.audit.preservedSiblingColIds) assert.ok(originalRows.some(record => record.colId === siblingId), `Expected sibling ${siblingId} to remain in shard`)

const records = originalRows.map(record => record.colId === dossier.colId ? dossier : record).sort((a, b) => a.colId.localeCompare(b.colId))
const originalLinesById = new Map(originalRawLines.map(line => [JSON.parse(line).colId, line]))
const rawLines = records.map(record => {
  if (record.colId === dossier.colId) return JSON.stringify(record)
  const originalLine = originalLinesById.get(record.colId)
  assert.ok(originalLine, `Missing raw sibling ${record.colId}`)
  assert.deepEqual(JSON.parse(originalLine), record, `Non-target sibling changed: ${record.colId}`)
  return originalLine
})
const rawBytes = Buffer.from(`${rawLines.join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTrip = brotliDecompressSync(compressedBytes)
assert.ok(roundTrip.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)

targetShard.recordCount = records.length
targetShard.decodedSha256 = sha256(roundTrip)
targetShard.compressedSha256 = sha256(compressedBytes)
assert.equal(index.shards.reduce((sum, shard) => sum + shard.recordCount, 0), index.recordCount)

const baseManifestBytes = readFileSync(BASE_MANIFEST_PATH)
const baseManifest = JSON.parse(baseManifestBytes.toString('utf8'))
const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  preparedAgainst: source.preparedAgainst,
  duplicateCheck: {
    indexedRecordCount: indexed.count,
    queueShardPath: source.audit.queueShardPath,
    queueRowSha256BeforeUpdate: source.audit.queueRowSha256BeforeUpdate,
    sourceStableId: source.source.stableId,
    sourceStableIdOccurrencesBeforeUpdate: source.audit.sourceStableIdOccurrencesBeforeUpdate,
    targetRecordCountBeforeUpdate: 1,
    matchedColIds: [dossier.colId],
    matchedNames: [normalize(dossier.scientificName)],
    openPullRequests: source.audit.openPullRequests,
  },
  previousDossierBatchManifest: { path: relative(BASE_MANIFEST_PATH), sha256: sha256(baseManifestBytes), batchId: baseManifest.batchId },
  updateAudit: {
    baseHead: source.preparedAgainst.head,
    indexedRecordCountAtAudit: indexed.count,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: 1,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: source.audit.previousRawSha256,
    previousShardDecodedSha256: source.audit.previousShardDecodedSha256,
    previousShardCompressedSha256: source.audit.previousShardCompressedSha256,
    previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    indexedRecordCountAfterUpdate: indexed.count,
    outputRawSha256: sha256(rawBytes),
    outputDecodedSha256: sha256(roundTrip),
    outputCompressedSha256: sha256(compressedBytes),
    mode: 'in-place-add-morphology-and-life-history-to-existing-record',
  },
  sources: [{ id: source.source.id, stableId: source.source.stableId, licenseAssessment: source.source.licenseAssessment, licenseVersion: source.source.licenseVersion, rightsHolder: source.source.rightsHolder }],
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: source.registry,
  preservedSiblingColIds: source.audit.preservedSiblingColIds,
  generator: 'scripts/update-primates-pongo-pygmaeus-morph-lifehistory-b59.mjs',
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ batchId: source.batchId, targetColId: dossier.colId, targetName: dossier.scientificName, status: dossier.completeness.status, facets: Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])), indexedRecordCount: indexed.count, preservedSiblingColIds: source.audit.preservedSiblingColIds, sourceSha256: sha256(sourceBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), byteRoundTrip: roundTrip.equals(rawBytes), appAndPagesPreviewManifestChanged: false }, null, 2))
