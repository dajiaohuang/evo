import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'amphibia-axolotl-ecology-b49-2026-09-26.json')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-amphibia-batch-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'amphibia-axolotl-ecology-b49-2026-09-26.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const EXPECTED_SOURCE_SHA256 = 'eb70f8f5aac2e6db100511fd97bc6426206d7503796d674eeef8931018443b50'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B49 source input changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'amphibia-axolotl-ecology-batch49-2026-09-26')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, {
  colId: 'CQ4M',
  scientificName: 'Ambystoma mexicanum (Shaw & Nodder, 1798)',
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
  assert.ok(row.classification?.includes('Amphibia'), 'Target must remain inside the Amphibia classification')
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

function validateClaim(dossier) {
  assert.equal(dossier.colId, source.target.colId)
  assert.equal(dossier.scientificName, source.target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const claim = source.claims.ecology
  assert.ok(claim.text && claim.textZh && claim.locator && claim.placeTimeScope && claim.lifeStatus)
  assert.equal(claim.translationStatus, 'translated')
  assert.equal(claim.originalLanguage, 'en')
  assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => dossier.sources.some(item => item.id === id)))
  for (const item of source.sources) {
    assert.equal(item.licenseAssessment, 'item-level-verified')
    for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution', 'scope']) {
      assert.ok(item[key], 'B49 source missing ' + key)
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
assert.equal(dossierIndex.shards.length, source.audit.indexedShardCount, 'Indexed shard count changed since B49 identity audit')
assert.equal(indexed.count, source.audit.indexedRecordCount, 'Indexed record count changed since B49 identity audit')
const targetMatches = [...indexed.recordsById.values()].filter(row => row.colId === source.target.colId)
assert.equal(targetMatches.length, source.audit.targetRecordCount, 'B49 target must occur exactly once')
const targetShard = dossierIndex.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited axolotl shard is not in the index')
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
assert.equal(sha256(originalCompressed), targetShard.compressedSha256)
assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
const originalLines = originalDecoded.toString('utf8').trimEnd().split('\n')
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const baseline = originalRows.find(row => row.colId === source.target.colId)
assert.ok(baseline, 'Audited axolotl dossier is missing from its shard')
assert.equal(baseline.scientificName, source.target.scientificName)
assert.deepEqual(originalRows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), source.audit.siblingColIds)
for (const row of originalRows.filter(item => item.colId !== source.target.colId)) {
  assert.deepEqual(indexed.recordsById.get(row.colId), row, 'Indexed sibling changed: ' + row.colId)
}

const alreadyApplied = source.sources.every(item => baseline.sources.some(existing => existing.id === item.id && existing.stableId === item.stableId))
if (alreadyApplied) {
  const priorManifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  assert.equal(priorManifest.input?.sha256, EXPECTED_SOURCE_SHA256, 'B49 was applied from a different input')
  assert.ok(baseline.facets.ecology.claims.some(claim => JSON.stringify(claim) === JSON.stringify(source.claims.ecology)))
  verifyAcceptedIdentity(registryManifest, baseline)
  validateClaim(baseline)
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: baseline.colId, status: 'already-applied-and-verified', indexedRecordCount: indexed.count }, null, 2))
} else {
  assert.equal(sha256(originalDecoded), source.audit.previousRawSha256, 'Axolotl shard differs from the audited baseline')
  assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256, 'Compressed axolotl shard differs from the audited baseline')
  assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.audit.previousTargetRecordSha256, 'Axolotl dossier differs from the audited baseline')
  assert.ok(!source.sources.some(item => baseline.sources.some(existing => existing.id === item.id)), 'B49 source id already occurs on target')
  const allOccurrences = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item })))
  for (const item of source.sources) {
    assert.equal(allOccurrences.filter(entry => entry.source.stableId === item.stableId).length, 0, 'B49 DOI already occurs in the indexed dossiers: ' + item.stableId)
  }

  const dossier = structuredClone(baseline)
  assert.equal(baseline.facets.ecology.status, 'not-assessed', 'B49 expects an existing ecology gap')
  dossier.checkedAt = source.checkedAt
  dossier.sources.push(...structuredClone(source.sources))
  dossier.identity.scope = 'COL26.8 usage CQ4M only. The evolutionary evidence is a single laboratory genome and its associated experiments; the ecology evidence is a short VHF post-release study of 18 captive-bred axolotls at two aquatic sites in southern Mexico City. These observations do not constitute a species-wide or range-wide synthesis.'
  dossier.lifeStatusScope.wild = 'The ecology study released captive-bred animals and followed them for short periods at an artificial wetland and a restored chinampa in southern Mexico City. Those post-release observations are not treated as wild-born population traits or evidence of long-term establishment. The genomic source used laboratory material.'
  dossier.facets.ecology = {
    status: 'partially-supported',
    claims: [...(baseline.facets.ecology.claims ?? []), structuredClone(source.claims.ecology)],
    gaps: structuredClone(source.gaps.ecology),
  }
  dossier.completeness = {
    status: 'incomplete',
    reasons: [
      'The record combines a single-individual laboratory-genomics study and short-term post-release ecology from two captive-bred samples; morphology, life history, distribution, fossil evidence and conservation remain unassessed.',
      'Systematic literature coverage, wild-born ecology, long-term population outcomes and variation across the accepted species concept remain incomplete.',
      'Independent external expert review has not been completed.',
    ],
  }
  verifyAcceptedIdentity(registryManifest, dossier)
  validateClaim(dossier)

  const rawLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === dossier.colId) return JSON.stringify(dossier)
    assert.deepEqual(indexed.recordsById.get(row.colId), row, 'Indexed sibling changed: ' + row.colId)
    return line
  })
  const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'B49 raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTrip = brotliDecompressSync(compressedBytes)
  assert.deepEqual(roundTrip, rawBytes, 'B49 Brotli round trip must preserve exact raw bytes')
  const outputRows = roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(outputRows.length, source.audit.siblingColIds.length + 1)
  assert.equal(outputRows.filter(row => row.colId === dossier.colId).length, 1)
  for (const row of outputRows.filter(item => item.colId !== dossier.colId)) {
    assert.deepEqual(indexed.recordsById.get(row.colId), row, 'B49 changed sibling: ' + row.colId)
  }

  targetShard.recordCount = outputRows.length
  targetShard.decodedSha256 = sha256(roundTrip)
  targetShard.compressedSha256 = sha256(compressedBytes)
  assert.equal(dossierIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0), dossierIndex.recordCount)

  const updateAudit = {
    baseHead: source.audit.baseHead,
    indexedShardCountAtAudit: dossierIndex.shards.length,
    indexedRecordCountAtAudit: indexed.count,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: 1,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: source.audit.previousRawSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    sourceOccurrencesBeforeUpdate: 0,
    openPullRequests: [],
    openPullRequestSearch: { queries: source.audit.openPullRequestSearch.queries, checkedAt: source.checkedAt, returned: 0 },
    mode: 'in-place-add-two-site-bounded-ecology-source-to-existing-record',
    indexedRecordCountAfterUpdate: indexed.count,
    outputRawSha256: sha256(roundTrip),
    outputCompressedSha256: sha256(compressedBytes),
  }
  const batchManifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
    duplicateCheck: {
      mode: 'in-place-update',
      indexedShardCount: dossierIndex.shards.length,
      indexedRecordCount: indexed.count,
      sourceStableIds: source.sources.map(item => item.stableId),
      sourceOccurrencesBeforeUpdate: 0,
      matchedColIds: [dossier.colId],
      matchedNames: [normalize(dossier.scientificName)],
      openPullRequests: [],
    },
    updateAudit,
    sources: source.sources.map(({ id, stableId, licenseAssessment, licenseVersion, rightsHolder }) => ({ id, stableId, licenseAssessment, licenseVersion, rightsHolder })),
    shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: outputRows.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { quality: 11 }, roundTrip: 'exact-byte-match' },
    registry: source.registry,
    preservedSiblingColIds: source.audit.siblingColIds,
    generator: relative(join(ROOT, 'scripts', 'update-amphibia-axolotl-ecology-batch49.mjs')),
    updateMode: 'in-place-enrichment-of-one-existing-record',
    appAndPagesPreviewManifestChanged: false,
  }

  writeFileSync(SHARD_PATH, compressedBytes)
  writeFileSync(INDEX_PATH, JSON.stringify(dossierIndex, null, 2) + '\n', 'utf8')
  writeFileSync(MANIFEST_PATH, JSON.stringify(batchManifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({
    batchId: source.batchId,
    targetColId: dossier.colId,
    targetName: dossier.scientificName,
    statuses: Object.fromEntries(FACETS.map(key => [key, dossier.facets[key].status])),
    indexedShardCount: dossierIndex.shards.length,
    indexedRecordCount: indexed.count,
    preservedSiblingColIds: source.audit.siblingColIds,
    outputRawSha256: sha256(rawBytes),
    outputCompressedSha256: sha256(compressedBytes),
    byteRoundTrip: roundTrip.equals(rawBytes),
    appAndPagesPreviewManifestChanged: false,
    updateMode: batchManifest.updateMode,
  }, null, 2))
}
