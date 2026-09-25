import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-pongo-abelii-population-trend-b43-2026-09-25.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-batch-2.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-2.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-2.metadata.json')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-pongo-abelii-population-trend-b43-2026-09-25.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const EXPECTED_SOURCE_SHA256 = '8663ebd553671f7d1d17ea1d60f1069d1f1799ee859799b2874fcff72ef45f63'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B43 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-pongo-abelii-population-trend-batch43-2026-09-25')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.equal(source.registry.manifestSha256, '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151')
assert.deepEqual(source.target, {
  colId: '4LTSY',
  scientificName: 'Pongo abelii Lesson, 1827',
  rank: 'species',
  sourceDatasetId: '2144',
})

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registryManifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const searchMatches = (registryManifest.search.routes[route] ?? [])
    .flatMap(path => readRegistryRows(path))
    .filter(row => row.id === dossier.colId)
  assert.equal(searchMatches.length, 1, 'Expected one pinned COL26.8 search row for ' + dossier.colId)
  const row = searchMatches[0]
  assert.equal(row.scientificName, dossier.scientificName)
  assert.equal(row.rank, 'species')
  assert.equal(row.status, 'accepted')
  assert.equal(String(row.sourceDatasetId), String(dossier.sourceDatasetId))

  const nodeCache = new Map()
  function getNode(id) {
    const prefix = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    for (const path of registryManifest.hierarchy.nodes.routes[prefix] ?? []) {
      if (!nodeCache.has(path)) nodeCache.set(path, readRegistryRows(path))
      const node = nodeCache.get(path).find(item => item.id === id)
      if (node) return node
    }
    return undefined
  }
  const targetNode = getNode(dossier.colId)
  assert.ok(targetNode, 'Missing pinned hierarchy node ' + dossier.colId)
  assert.equal(targetNode.scientificName, dossier.scientificName)
  assert.equal(targetNode.status, 'accepted')
  assert.equal(String(targetNode.sourceDatasetId), String(dossier.sourceDatasetId))
  assert.equal(targetNode.parentId, dossier.identity.parentChain[0]?.id)
  for (const expected of dossier.identity.parentChain) {
    const node = getNode(expected.id)
    assert.ok(node, 'Missing pinned hierarchy ancestor ' + expected.id)
    for (const key of ['id', 'scientificName', 'authorship', 'rank', 'status']) {
      const expectedValue = key === 'scientificName' ? expected.name + ' ' + expected.authorship : expected[key]
      assert.equal(node[key], expectedValue, 'COL26.8 hierarchy mismatch for ' + expected.id + '.' + key)
    }
    assert.equal(node.status, 'accepted')
  }
}

function readIndexedRecords(index) {
  const recordsById = new Map()
  let count = 0
  for (const shard of index.shards) {
    const compressed = readFileSync(join(ROOT, shard.path))
    assert.equal(sha256(compressed), shard.compressedSha256, 'Indexed compressed hash mismatch: ' + shard.path)
    const decoded = brotliDecompressSync(compressed)
    assert.equal(sha256(decoded), shard.decodedSha256, 'Indexed decoded hash mismatch: ' + shard.path)
    const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
    assert.equal(rows.length, shard.recordCount, 'Indexed row count mismatch: ' + shard.path)
    count += rows.length
    for (const row of rows) {
      assert.ok(!recordsById.has(row.colId), 'Duplicate indexed COL id: ' + row.colId)
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount, 'Dossier index record count mismatch')
  return { recordsById, count }
}

function validateSourceClaim(dossier) {
  assert.equal(dossier.colId, source.target.colId)
  assert.equal(dossier.scientificName, source.target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const claim = source.claims.conservation
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.equal(claim.translationStatus, 'translated')
  assert.equal(claim.originalLanguage, 'en')
  assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
  for (const item of source.sources) {
    assert.equal(item.licenseAssessment, 'item-level-verified')
    for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution', 'scope']) {
      assert.ok(item[key], 'B43 source missing ' + key)
    }
    assert.match(item.licenseUrl ?? '', /^https:\/\//u)
    assert.match(item.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
  }
}

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 registry manifest mismatch')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)

const dossierIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
const indexed = readIndexedRecords(dossierIndex)
assert.equal(indexed.count, source.audit.indexedRecordCount, 'Indexed record count changed since B43 identity audit')
const targetMatches = [...indexed.recordsById.values()].filter(row => row.colId === source.target.colId)
assert.equal(targetMatches.length, source.audit.targetRecordCount, 'B43 target must occur exactly once')
const targetShard = dossierIndex.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited target shard is not in the index')
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
assert.equal(sha256(originalCompressed), targetShard.compressedSha256)
assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
const originalRaw = readFileSync(RAW_PATH)
assert.deepEqual(originalDecoded, originalRaw, 'Raw dossier JSONL does not match its indexed Brotli shard')
const originalLines = originalRaw.toString('utf8').trimEnd().split('\n')
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const baseline = originalRows.find(row => row.colId === source.target.colId)
assert.ok(baseline, 'Audited target is missing from its raw dossier file')
assert.equal(baseline.scientificName, source.target.scientificName)
assert.deepEqual(originalRows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), source.audit.siblingColIds)
for (const row of originalRows.filter(item => item.colId !== source.target.colId)) {
  assert.deepEqual(indexed.recordsById.get(row.colId), row, 'Indexed sibling changed: ' + row.colId)
}

const priorMetadata = JSON.parse(readFileSync(METADATA_PATH, 'utf8'))
assert.equal(priorMetadata.path, source.audit.targetShardPath)
assert.equal(priorMetadata.rawPath, relative(RAW_PATH))
const metadata = structuredClone(priorMetadata)
const priorManifestBytes = (() => {
  try { return readFileSync(MANIFEST_PATH) } catch { return undefined }
})()
const alreadyApplied = source.sources.every(item => baseline.sources.some(existing => existing.id === item.id && existing.stableId === item.stableId))
if (alreadyApplied) {
  const priorManifest = JSON.parse(priorManifestBytes?.toString('utf8') ?? '{}')
  assert.equal(priorManifest.input?.sha256, EXPECTED_SOURCE_SHA256, 'B43 was applied from a different input')
  assert.ok(baseline.facets.conservation.claims.some(claim => JSON.stringify(claim) === JSON.stringify(source.claims.conservation)))
  verifyAcceptedIdentity(registryManifest, baseline)
  validateSourceClaim(baseline)
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: baseline.colId, status: 'already-applied-and-verified', indexedRecordCount: indexed.count }, null, 2))
} else {
  assert.equal(sha256(originalRaw), source.audit.previousRawSha256, 'Raw target shard differs from the audited baseline')
  assert.equal(sha256(originalDecoded), source.audit.previousShardDecodedSha256, 'Decoded target shard differs from the audited baseline')
  assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256, 'Compressed target shard differs from the audited baseline')
  assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.audit.previousTargetRecordSha256, 'Target dossier differs from audited baseline')
  assert.ok(!source.sources.some(item => baseline.sources.some(existing => existing.id === item.id)), 'B43 source id already occurs on target')
  const allOccurrences = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item })))
  for (const item of source.sources) {
    assert.equal(allOccurrences.filter(entry => entry.source.stableId === item.stableId).length, 0, 'B43 DOI is already indexed: ' + item.stableId)
  }

  const dossier = structuredClone(baseline)
  dossier.checkedAt = source.checkedAt
  dossier.sources.push(...structuredClone(source.sources))
  dossier.facets.conservation = {
    status: 'partially-supported',
    claims: [...(baseline.facets.conservation.claims ?? []), structuredClone(source.claims.conservation)],
    gaps: [...(baseline.facets.conservation.gaps ?? []), ...structuredClone(source.gaps.conservation)],
  }
  dossier.identity.scope = 'COL26.8 usage 4LTSY only. Existing ecology and life-history observations concern one mother–dependent-offspring dyad at Ketambe. The conservation evidence added here is a model-based 2021–2023 range assessment for wild Sumatran orangutans and a separate matched-distribution comparison with 2011; it does not establish a current census or demographic result for every local population.'
  dossier.lifeStatusScope.wild = 'Ecology and life-history observations are from a free-ranging Sumatran orangutan mother–dependent-offspring dyad at Ketambe. The conservation estimate concerns wild Pongo abelii in northern Sumatra and is modeled from line-transect nest surveys; it is not a direct individual count. Tripa was not directly surveyed and its estimate is extrapolated. No captive or fossil observations are included.'
  dossier.completeness = {
    status: 'incomplete',
    reasons: [
      'The record includes one small behavioral observation set and a 2021–2023 model-based population assessment; morphology, evolution, distribution, fossil evidence, and wider conservation monitoring remain unassessed or incomplete.',
      'The population estimate and matched-range trend depend on spatial boundaries and survey coverage; systematic source coverage across the accepted species concept remains incomplete.',
      'Independent external expert review has not been completed.',
    ],
  }
  verifyAcceptedIdentity(registryManifest, dossier)
  validateSourceClaim(dossier)

  const records = originalRows.map(row => row.colId === dossier.colId ? dossier : row)
  const rawLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === dossier.colId) return JSON.stringify(dossier)
    assert.deepEqual(indexed.recordsById.get(row.colId), row, 'Indexed sibling changed: ' + row.colId)
    return line
  })
  const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'B43 raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTrip = brotliDecompressSync(compressedBytes)
  assert.deepEqual(roundTrip, rawBytes, 'B43 Brotli round trip must preserve exact raw bytes')
  assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)

  targetShard.recordCount = records.length
  targetShard.decodedSha256 = sha256(roundTrip)
  targetShard.compressedSha256 = sha256(compressedBytes)
  assert.equal(dossierIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0), dossierIndex.recordCount)

  const updateAudit = {
    baseHead: source.audit.baseHead,
    indexedRecordCountAtAudit: indexed.count,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: 1,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: source.audit.previousRawSha256,
    previousDecodedSha256: source.audit.previousShardDecodedSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    openPullRequests: [],
    openPullRequestSearch: { query: '4LTSY', checkedAt: source.checkedAt, returned: 0 },
    mode: 'in-place-add-one-sourced-population-trend-to-existing-record',
    indexedRecordCountAfterUpdate: indexed.count,
    outputRawSha256: sha256(rawBytes),
    outputDecodedSha256: sha256(roundTrip),
    outputCompressedSha256: sha256(compressedBytes),
  }
  const supplementalUpdate = {
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primates-pongo-abelii-population-trend-b43.mjs')),
    baseHead: source.audit.baseHead,
    indexedRecordCountAtAudit: indexed.count,
    targetColIds: [dossier.colId],
    previousDecodedSha256: source.audit.previousShardDecodedSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    decodedSha256: sha256(roundTrip),
    compressedSha256: sha256(compressedBytes),
    mode: updateAudit.mode,
  }
  metadata.supplementalUpdates ??= []
  assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === source.batchId), 'B43 metadata audit already exists')
  metadata.supplementalUpdates.push(supplementalUpdate)
  metadata.checkedAt = source.checkedAt
  metadata.rawSha256 = sha256(rawBytes)
  metadata.decodedSha256 = sha256(roundTrip)
  metadata.compressedSha256 = sha256(compressedBytes)
  metadata.decodedBytes = rawBytes.length
  metadata.compressedBytes = compressedBytes.length
  metadata.updateAudit = updateAudit

  const batchManifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
    duplicateCheck: {
      mode: 'in-place-update',
      indexedRecordCount: indexed.count,
      sourceStableIds: source.sources.map(item => item.stableId),
      sourceOccurrencesBeforeUpdate: 0,
      matchedColIds: [dossier.colId],
      matchedNames: [normalize(dossier.scientificName)],
      openPullRequests: [],
    },
    previousUpdateAudit: priorMetadata.updateAudit,
    updateAudit,
    sources: source.sources.map(({ id, stableId, licenseAssessment, licenseVersion, rightsHolder }) => ({ id, stableId, licenseAssessment, licenseVersion, rightsHolder })),
    raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
    shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
    registry: source.registry,
    preservedSiblingColIds: source.audit.siblingColIds,
    generator: relative(join(ROOT, 'scripts', 'update-primates-pongo-abelii-population-trend-b43.mjs')),
    updateMode: 'in-place-enrichment-of-one-existing-record',
    appAndPagesPreviewManifestChanged: false,
  }

  writeFileSync(RAW_PATH, rawBytes)
  writeFileSync(SHARD_PATH, compressedBytes)
  writeFileSync(INDEX_PATH, JSON.stringify(dossierIndex, null, 2) + '\n', 'utf8')
  writeFileSync(METADATA_PATH, JSON.stringify(metadata, null, 2) + '\n', 'utf8')
  writeFileSync(MANIFEST_PATH, JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({
    batchId: source.batchId,
    targetColId: dossier.colId,
    targetName: dossier.scientificName,
    statuses: Object.fromEntries(FACETS.map(key => [key, dossier.facets[key].status])),
    indexedRecordCount: indexed.count,
    preservedSiblingColIds: source.audit.siblingColIds,
    rawSha256: sha256(rawBytes),
    compressedSha256: sha256(compressedBytes),
    byteRoundTrip: roundTrip.equals(rawBytes),
    appAndPagesPreviewManifestChanged: false,
    updateMode: batchManifest.updateMode,
  }, null, 2))
}
