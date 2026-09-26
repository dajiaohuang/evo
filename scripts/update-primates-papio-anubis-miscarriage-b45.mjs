import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-papio-anubis-miscarriage-b45-2026-09-26.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-dossiers-batch-3.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-3.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-3.metadata.json')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-papio-anubis-miscarriage-b45-2026-09-26.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const EXPECTED_SOURCE_SHA256 = '18e671a0c49ba28791d83271d2e6c25e984ccdcb9f4944ad13fba7f34da11c37'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const TARGET_FACETS = ['lifeHistory', 'ecology']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B45 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-papio-anubis-miscarriage-batch45-2026-09-26')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, {
  colId: '6TM9B',
  scientificName: 'Papio anubis (Lesson, 1827)',
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
      const expectedValue = key === 'scientificName' ? (expected.authorship ? expected.name + ' ' + expected.authorship : expected.name) : expected[key]
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

function validateEvidence(dossier) {
  assert.equal(dossier.colId, source.target.colId)
  assert.equal(dossier.scientificName, source.target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  for (const facet of TARGET_FACETS) {
    const claim = source.claims[facet]
    assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
    assert.equal(claim.translationStatus, 'translated')
    assert.equal(claim.originalLanguage, 'en')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
    assert.ok(source.gaps[facet]?.length)
  }
  for (const item of source.sources) {
    assert.equal(item.licenseAssessment, 'item-level-verified')
    for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution', 'scope']) {
      assert.ok(item[key], 'B45 source missing ' + key)
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
assert.equal(indexed.count, source.audit.indexedRecordCount, 'B45 dossier index count changed since identity audit')
const targetMatches = [...indexed.recordsById.values()].filter(row => row.colId === source.target.colId)
assert.equal(targetMatches.length, source.audit.targetRecordCount, 'B45 target must occur exactly once')
const targetShard = dossierIndex.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited target shard is not in the index')
assert.equal(targetShard.path, relative(SHARD_PATH))

const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
const rawBytesBefore = readFileSync(RAW_PATH)
const metadata = JSON.parse(readFileSync(METADATA_PATH, 'utf8'))
const alreadyApplied = (metadata.supplementalUpdates ?? []).find(item => item.batchId === source.batchId)
if (alreadyApplied) {
  assert.equal(alreadyApplied.sourceSha256, EXPECTED_SOURCE_SHA256, 'B45 source digest differs from prior application')
  assert.equal(sha256(rawBytesBefore), metadata.rawSha256, 'B45 raw JSONL digest differs after prior application')
  assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
  assert.equal(sha256(originalCompressed), targetShard.compressedSha256)
  assert.ok(indexed.recordsById.get(source.target.colId).sources.some(item => item.stableId === source.sources[0].stableId))
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: source.target.colId, alreadyApplied: true }, null, 2))
} else {
  assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256, 'Target shard differs from audited baseline')
  assert.equal(sha256(originalDecoded), source.audit.previousShardDecodedSha256, 'Decoded shard differs from audited baseline')
  assert.deepEqual(originalDecoded, rawBytesBefore, 'Raw dossier JSONL does not match the indexed Brotli shard')
  assert.equal(sha256(rawBytesBefore), source.audit.previousRawSha256, 'Raw dossier JSONL differs from audited baseline')

  const originalLines = rawBytesBefore.toString('utf8').trimEnd().split('\n')
  const originalRows = originalLines.map(line => JSON.parse(line))
  assert.equal(originalRows.length, targetShard.recordCount)
  assert.deepEqual(originalRows.map(row => row.colId).filter(id => id !== source.target.colId).sort(), [...source.audit.siblingColIds].sort(), 'B45 sibling list differs from audited shard')
  const baseline = originalRows.find(row => row.colId === source.target.colId)
  assert.ok(baseline, 'Missing B45 target in audited raw shard')
  assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.audit.previousTargetRecordSha256, 'B45 target record differs from audited baseline')
  assert.equal(sha256(Buffer.from(JSON.stringify(indexed.recordsById.get(source.target.colId)), 'utf8')), source.audit.previousTargetRecordSha256)
  assert.ok(!baseline.sources.some(item => item.id === source.sources[0].id), 'B45 source id already occurs on target')
  assert.ok(!baseline.sources.some(item => item.stableId === source.sources[0].stableId), 'B45 stable source ID already occurs on target')

  const allOccurrences = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item })))
  assert.equal(allOccurrences.filter(entry => entry.source.stableId === source.sources[0].stableId).length, source.audit.sourceOccurrenceCountBeforeUpdate, 'B45 DOI occurrence count changed')
  assert.equal(allOccurrences.filter(entry => entry.source.id === source.sources[0].id).length, 0, 'B45 source id is already indexed')

  const dossier = structuredClone(baseline)
  dossier.checkedAt = source.checkedAt
  dossier.sources.push(...structuredClone(source.sources))
  for (const facet of TARGET_FACETS) {
    dossier.facets[facet] = {
      status: 'partially-supported',
      claims: [...(baseline.facets[facet].claims ?? []), structuredClone(source.claims[facet])],
      gaps: structuredClone(source.gaps[facet]),
    }
  }
  dossier.identity.scope = 'COL26.8 usage 6TM9B only. Evidence spans a wild population at Lake Manyara National Park, Tanzania (2011–2019), a wild Gombe National Park population in Tanzania (reproductive records 1972–2002), and a captive cohort at the CNRS Primatology Station, Rousset-sur-Arc, France. These separate study scopes do not support species-wide generalization.'
  dossier.lifeStatusScope.wild = 'Wild ecology evidence comes from one Lake Manyara National Park population monitored 2011–2019. Wild reproductive evidence comes from Gombe National Park, where miscarriage records span 1972–2002. Captive morphology and growth evidence concerns 14 female and 16 male baboons followed from infancy to adulthood over seven years at the CNRS Primatology Station, Rousset-sur-Arc, France. These samples are distinct and do not represent every population.'
  dossier.completeness = {
    status: 'incomplete',
    reasons: [
      'The dossier contains bounded evidence on captive-cohort morphometry, growth, site-specific abundance estimation, and Gombe reproductive and social correlates; each finding is limited to its stated sample and place.',
      'Evolution, species-wide distribution, fossil evidence, conservation status, and systematic coverage of the accepted species concept remain incomplete or unassessed.',
      'Independent external expert review has not been completed.',
    ],
  }
  verifyAcceptedIdentity(registryManifest, dossier)
  validateEvidence(dossier)

  const rawLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === dossier.colId) return JSON.stringify(dossier)
    assert.deepEqual(indexed.recordsById.get(row.colId), row, 'B45 sibling changed: ' + row.colId)
    return line
  })
  const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'B45 raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTrip = brotliDecompressSync(compressedBytes)
  assert.deepEqual(roundTrip, rawBytes, 'B45 Brotli round trip must preserve exact raw bytes')
  assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), originalRows.map(row => row.colId === dossier.colId ? dossier : row))

  targetShard.recordCount = originalRows.length
  targetShard.decodedSha256 = sha256(roundTrip)
  targetShard.compressedSha256 = sha256(compressedBytes)
  assert.equal(dossierIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0), dossierIndex.recordCount)

  const updateAudit = {
    batchId: source.batchId,
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
    openPullRequestSearch: source.audit.openPullRequestSearch,
    sourceStableId: source.sources[0].stableId,
    sourceOccurrenceCountBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
    mode: 'in-place-add-wild-reproductive-and-social-ecology-evidence-to-existing-record',
    indexedRecordCountAfterUpdate: indexed.count,
    outputRawSha256: sha256(rawBytes),
    outputDecodedSha256: sha256(roundTrip),
    outputCompressedSha256: sha256(compressedBytes),
  }
  const supplementalUpdate = {
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primates-papio-anubis-miscarriage-b45.mjs')),
    baseHead: source.audit.baseHead,
    indexedRecordCountAtAudit: indexed.count,
    targetColIds: [dossier.colId],
    previousDecodedSha256: source.audit.previousShardDecodedSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    decodedSha256: sha256(roundTrip),
    compressedSha256: sha256(compressedBytes),
    mode: updateAudit.mode,
  }
  const previousUpdateAudit = metadata.updateAudit ?? null

  metadata.supplementalUpdates ??= []
  assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === source.batchId), 'B45 metadata audit already exists')
  metadata.supplementalUpdates.push(supplementalUpdate)
  metadata.checkedAt = source.checkedAt
  metadata.rawSha256 = sha256(rawBytes)
  metadata.decodedSha256 = sha256(roundTrip)
  metadata.compressedSha256 = sha256(compressedBytes)
  metadata.decodedBytes = rawBytes.length
  metadata.compressedBytes = compressedBytes.length
  metadata.updateAudit = updateAudit

  const updateManifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
    duplicateCheck: {
      mode: 'in-place-update',
      indexedRecordCount: indexed.count,
      sourceStableIds: source.sources.map(item => item.stableId),
      sourceOccurrencesBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
      matchedColIds: [dossier.colId],
      matchedNames: [normalize(dossier.scientificName)],
      openPullRequests: [],
    },
    previousUpdateAudit,
    updateAudit,
    sources: source.sources.map(({ id, stableId, licenseAssessment, licenseVersion, rightsHolder }) => ({ id, stableId, licenseAssessment, licenseVersion, rightsHolder })),
    raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: originalRows.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
    shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: originalRows.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
    registry: source.registry,
    preservedSiblingColIds: source.audit.siblingColIds,
    generator: relative(join(ROOT, 'scripts', 'update-primates-papio-anubis-miscarriage-b45.mjs')),
    updateMode: 'in-place-enrichment-of-one-existing-record',
    appAndPagesPreviewManifestChanged: false,
  }

  writeFileSync(RAW_PATH, rawBytes)
  writeFileSync(SHARD_PATH, compressedBytes)
  writeFileSync(INDEX_PATH, JSON.stringify(dossierIndex, null, 2) + '\n', 'utf8')
  writeFileSync(METADATA_PATH, JSON.stringify(metadata, null, 2) + '\n', 'utf8')
  writeFileSync(MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n', 'utf8')
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
    updateMode: updateManifest.updateMode,
  }, null, 2))
}
