import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-papio-anubis-evolution-b66-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-dossiers-batch-3.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-3.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-batch-3.metadata.json')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-papio-anubis-evolution-b66-2026-09-28.update-manifest.json')
const REGISTRY_MANIFEST_PATH = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry', 'manifest.json')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'manifest.json')
const PAGES_PREVIEW_PATH = join(ROOT, 'data', 'pages-preview.json')
const EXPECTED_SOURCE_SHA256 = '54692bf55260738507ccac37331b4215b0e282a2bc42d0781e16a04d0c0b7050'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B66 evidence input changed')
const source = JSON.parse(sourceBytes.toString('utf8'))

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

const indexBytesBefore = readFileSync(INDEX_PATH)
const dossierIndex = JSON.parse(indexBytesBefore.toString('utf8'))
const indexed = readIndexedRecords(dossierIndex)
const targetShard = dossierIndex.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(targetShard, 'Audited target shard is not in the dossier index')
assert.equal(targetShard.path, relative(SHARD_PATH))
const originalCompressed = readFileSync(SHARD_PATH)
const originalDecoded = brotliDecompressSync(originalCompressed)
const rawBytesBefore = readFileSync(RAW_PATH)
const metadata = JSON.parse(readFileSync(METADATA_PATH, 'utf8'))
const dossier = indexed.recordsById.get(source.target.colId)
assert.ok(dossier, 'Target COL usage is missing from the dossier index')

const alreadyApplied = (metadata.supplementalUpdates ?? []).find(item => item.batchId === source.batchId)
if (alreadyApplied) {
  assert.equal(alreadyApplied.sourceSha256, EXPECTED_SOURCE_SHA256, 'B66 input digest differs from prior application')
  assert.equal(sha256(rawBytesBefore), metadata.rawSha256, 'B66 raw JSONL digest differs after prior application')
  assert.equal(sha256(originalDecoded), targetShard.decodedSha256)
  assert.equal(sha256(originalCompressed), targetShard.compressedSha256)
  assert.ok(dossier.sources.some(item => item.stableId === source.source.stableId))
  assert.equal(dossier.facets.evolution?.claims?.some(item => item.sourceIds?.includes(source.source.id)), true)
  const queueManifestBytes = readFileSync(QUEUE_MANIFEST_PATH)
  const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
  const currentDossierIndexSha256 = sha256(indexBytesBefore)
  assert.equal(queueManifest.inputs.dossierIndexSha256, currentDossierIndexSha256, 'Rebuild the species evidence queue after updating the dossier index')
  const queueMatches = []
  for (const candidate of queueManifest.shards) {
    const candidateBytes = readFileSync(join(ROOT, candidate.path))
    assert.equal(sha256(candidateBytes), candidate.compressedSha256, 'Species queue shard checksum mismatch: ' + candidate.path)
    const candidateDecoded = brotliDecompressSync(candidateBytes)
    assert.equal(sha256(candidateDecoded), candidate.decodedSha256, 'Species queue decoded checksum mismatch: ' + candidate.path)
    const row = candidateDecoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)).find(item => item.colId === source.target.colId)
    if (row) queueMatches.push({ shard: candidate, row })
  }
  assert.equal(queueMatches.length, 1, 'Target species must occur in exactly one queue shard')
  const { shard: queueShard, row: queueTargetRow } = queueMatches[0]
  assert.deepEqual(queueTargetRow.dossier.facetStatuses, Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])))
  const updateManifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  updateManifest.queueProjection = {
    inputManifestSha256: source.audit.queueManifestSha256,
    outputManifestPath: relative(QUEUE_MANIFEST_PATH),
    outputManifestSha256: sha256(queueManifestBytes),
    inputDossierIndexSha256: currentDossierIndexSha256,
    generatedBy: queueManifest.generatedBy,
    notIncludedInRuntime: queueManifest.notIncludedInRuntime,
    affectedShard: {
      prefix: queueShard.prefix,
      path: queueShard.path,
      recordCount: queueShard.recordCount,
      compressedSha256: queueShard.compressedSha256,
      decodedSha256: queueShard.decodedSha256,
    },
  }
  writeFileSync(MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: source.target.colId, alreadyApplied: true, queueProjectionRecorded: true }, null, 2))
} else {
  assert.equal(indexed.count, source.audit.indexedRecordCount, 'B66 dossier index count changed since audit')
  assert.equal(sha256(indexBytesBefore), source.audit.dossierIndexSha256, 'B66 dossier index changed since audit')
  assert.equal(sha256(readFileSync(REGISTRY_MANIFEST_PATH)), source.registry.manifestSha256, 'Pinned COL26.8 registry manifest mismatch')
  assert.equal(sha256(readFileSync(QUEUE_MANIFEST_PATH)), source.audit.queueManifestSha256, 'Species evidence queue manifest changed since audit')
  assert.equal(sha256(readFileSync(PAGES_PREVIEW_PATH)), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages selection changed since audit')
  assert.equal(indexed.recordsById.get(source.target.colId).scientificName, source.target.scientificName)
  assert.equal(indexed.recordsById.get(source.target.colId).rank, source.target.rank)
  assert.equal(indexed.recordsById.get(source.target.colId).sourceDatasetId, source.target.sourceDatasetId)
  assert.equal([...indexed.recordsById.values()].filter(row => row.colId === source.target.colId).length, source.audit.targetRecordCount)
  assert.equal(sha256(originalCompressed), source.audit.previousShardCompressedSha256, 'Target shard changed since audit')
  assert.equal(sha256(originalDecoded), source.audit.previousShardDecodedSha256, 'Decoded shard changed since audit')
  assert.deepEqual(originalDecoded, rawBytesBefore, 'Raw dossier JSONL does not match the indexed shard')
  assert.equal(sha256(rawBytesBefore), source.audit.previousRawSha256, 'Raw dossier JSONL changed since audit')
  assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.previousTargetRecordSha256, 'Target dossier changed since audit')
  const originalLines = rawBytesBefore.toString('utf8').trimEnd().split('\n')
  const originalRows = originalLines.map(line => JSON.parse(line))
  assert.equal(originalRows.length, targetShard.recordCount)
  assert.deepEqual(originalRows.map(row => row.colId).filter(id => id !== source.target.colId).sort(), [...source.audit.siblingColIds].sort(), 'B66 sibling set changed since audit')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  assert.equal(dossier.facets.evolution.status, 'not-assessed')
  assert.ok(!dossier.sources.some(item => item.id === source.source.id || item.stableId === source.source.stableId), 'B66 source already occurs on target')

  const sourceOccurrences = [...indexed.recordsById.values()].flatMap(row => (row.sources ?? []).map(item => ({ colId: row.colId, source: item })))
  assert.equal(sourceOccurrences.filter(item => item.source.id === source.source.id || item.source.stableId === source.source.stableId).length, source.audit.sourceOccurrenceCountBeforeUpdate, 'B66 source occurrence count changed since audit')
  assert.equal(source.audit.sourceOccurrenceCountBeforeUpdate, 0)
  assert.equal(source.source.licenseAssessment, 'item-level-verified')
  for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution', 'scope', 'rightsEvidenceUrl', 'rightsEvidenceLocator']) assert.ok(source.source[key], 'B66 source missing ' + key)
  assert.equal(source.claim.translationStatus, 'translated')
  assert.equal(source.claim.originalLanguage, 'en')
  assert.ok(source.claim.sourceIds.includes(source.source.id))
  for (const key of ['text', 'textZh', 'locator', 'placeTimeScope', 'lifeStatus']) assert.ok(source.claim[key], 'B66 claim missing ' + key)

  const updatedDossier = structuredClone(dossier)
  updatedDossier.checkedAt = source.checkedAt
  updatedDossier.sources.push(structuredClone(source.source))
  updatedDossier.facets.evolution = {
    status: 'partially-supported',
    claims: [structuredClone(source.claim)],
    gaps: structuredClone(source.gaps),
  }
  updatedDossier.identity.scope += ' A separate comparative genomic study analyzed two sampled individuals from each of the six extant Papio species; its P. anubis marker count is panel-relative.'
  updatedDossier.lifeStatusScope.wild += ' The comparative genome study used 12 sampled baboons, with two individuals per species, but its cited sample description does not classify the samples as wild or captive.'
  updatedDossier.completeness = {
    status: 'incomplete',
    reasons: [
      'The dossier contains bounded evidence on captive-cohort morphometry and growth, site-specific density and reproductive/social correlates, and one Alu insertion marker analysis of a 12-genome Papio panel; each finding is limited to its sampled animals, place, or comparative panel.',
      'Evolutionary evidence is partial: the panel-relative P. anubis marker count does not cover range-wide genomic variation or resolve all reticulate relationships. Distribution, fossil evidence, current formal conservation status, and full coverage of the accepted species concept remain incomplete.',
      'Independent external expert review has not been completed.',
    ],
  }

  const rawLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === updatedDossier.colId) return JSON.stringify(updatedDossier)
    assert.deepEqual(indexed.recordsById.get(row.colId), row, 'B66 sibling changed: ' + row.colId)
    return line
  })
  const rawBytes = Buffer.from(rawLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawBytes.includes(0x0d), 'B66 raw JSONL must use LF line endings')
  const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  const roundTrip = brotliDecompressSync(compressedBytes)
  assert.deepEqual(roundTrip, rawBytes, 'B66 Brotli round trip must preserve exact raw bytes')
  assert.deepEqual(roundTrip.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), originalRows.map(row => row.colId === updatedDossier.colId ? updatedDossier : row))

  targetShard.decodedSha256 = sha256(roundTrip)
  targetShard.compressedSha256 = sha256(compressedBytes)
  const previousUpdateAudit = metadata.updateAudit ?? null
  const updateAudit = {
    batchId: source.batchId,
    baseHead: source.audit.baseHead,
    indexedRecordCountAtAudit: indexed.count,
    targetColId: updatedDossier.colId,
    targetScientificName: updatedDossier.scientificName,
    targetRecordCountBeforeUpdate: 1,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: source.audit.previousRawSha256,
    previousDecodedSha256: source.audit.previousShardDecodedSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    previousTargetRecordSha256: source.audit.previousTargetRecordSha256,
    sourceStableId: source.source.stableId,
    sourceOccurrenceCountBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
    openPullRequestSearch: source.audit.openPullRequestSearch,
    openIssueSearch: source.audit.openIssueSearch,
    mode: 'in-place-add-panel-limited-alu-evolution-evidence-to-existing-papio-anubis-record',
    indexedRecordCountAfterUpdate: indexed.count,
    outputRawSha256: sha256(rawBytes),
    outputDecodedSha256: sha256(roundTrip),
    outputCompressedSha256: sha256(compressedBytes),
  }
  const supplementalUpdate = {
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primates-papio-anubis-evolution-b66.mjs')),
    baseHead: source.audit.baseHead,
    indexedRecordCountAtAudit: indexed.count,
    targetColIds: [updatedDossier.colId],
    previousDecodedSha256: source.audit.previousShardDecodedSha256,
    previousCompressedSha256: source.audit.previousShardCompressedSha256,
    decodedSha256: sha256(roundTrip),
    compressedSha256: sha256(compressedBytes),
    mode: updateAudit.mode,
  }

  metadata.supplementalUpdates ??= []
  assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === source.batchId), 'B66 metadata audit already exists')
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
      sourceStableIds: [source.source.stableId],
      sourceOccurrencesBeforeUpdate: source.audit.sourceOccurrenceCountBeforeUpdate,
      matchedColIds: [updatedDossier.colId],
      matchedNames: [updatedDossier.scientificName],
      repositoryMatches: source.audit.repositorySearch.matches,
      openPullRequests: source.audit.openPullRequestSearch,
      openIssues: source.audit.openIssueSearch,
    },
    previousUpdateAudit,
    updateAudit,
    sources: [{ id: source.source.id, stableId: source.source.stableId, licenseAssessment: source.source.licenseAssessment, licenseVersion: source.source.licenseVersion, rightsHolder: source.source.rightsHolder }],
    raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: originalRows.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
    shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: originalRows.length, decodedBytes: roundTrip.length, decodedSha256: sha256(roundTrip), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
    registry: source.registry,
    preservedSiblingColIds: source.audit.siblingColIds,
    generator: relative(join(ROOT, 'scripts', 'update-primates-papio-anubis-evolution-b66.mjs')),
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
    targetColId: updatedDossier.colId,
    targetName: updatedDossier.scientificName,
    statuses: Object.fromEntries(FACETS.map(key => [key, updatedDossier.facets[key].status])),
    indexedRecordCount: indexed.count,
    appAndPagesPreviewManifestChanged: false,
    shardBytesBefore: originalCompressed.length,
    shardBytesAfter: compressedBytes.length,
  }, null, 2))
}
