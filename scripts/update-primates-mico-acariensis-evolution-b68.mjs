import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-mico-acariensis-evolution-b68-2026-09-28.json')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const QUEUE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'species-evidence-queue', 'manifest.json')
const PREVIEW_PATH = join(ROOT, 'data', 'pages-preview.json')
const REGISTRY_MANIFEST_PATH = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry', 'manifest.json')
const BATCH_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primate-evidence-2026-09-28-h.batch-manifest.json')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'primates-mico-acariensis-evolution-b68-2026-09-28.update-manifest.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = 'cc95020c37d860aa870dc2d73743aa8364a511e4ebee9f78347ff8a7297c51f5'
const sha256 = value => createHash('sha256').update(value).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const serialize = value => Buffer.from(JSON.stringify(value, null, 2) + '\n', 'utf8')
const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B68 evidence input changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-mico-acariensis-evolution-b68-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.target.colId, '42MHS')
assert.equal(source.sourceReuse.licenseAssessment, 'item-level-verified')
assert.equal(source.sourceReuse.licenseVersion, 'CC BY 4.0')
assert.equal(source.claim.sourceIds.length, 1)
assert.deepEqual(source.claim.sourceIds, [source.sourceReuse.id])
const batchManifestBytesBefore = readFileSync(BATCH_MANIFEST_PATH)
const batchManifest = JSON.parse(batchManifestBytesBefore.toString('utf8'))
assert.equal(batchManifest.batchId, 'primate-evidence-batch-2026-09-28-h')
const applied = (batchManifest.supplementalUpdates ?? []).find(item => item.batchId === source.batchId)

const indexBytesBefore = readFileSync(INDEX_PATH)
const dossierIndex = JSON.parse(indexBytesBefore.toString('utf8'))
assert.equal(dossierIndex.recordCount, source.audit.dossierIndexRecordCount)
assert.equal(sha256(indexBytesBefore), applied?.dossierIndexSha256 ?? source.audit.dossierIndexSha256, 'Dossier index changed since B68 audit or application')
const matchingShards = dossierIndex.shards.filter(item => item.path === source.audit.targetShardPath)
assert.equal(matchingShards.length, 1, 'Target shard must occur exactly once in the dossier index')
const targetShard = matchingShards[0]
const compressedBefore = readFileSync(join(ROOT, targetShard.path))
assert.equal(sha256(compressedBefore), applied?.compressedSha256 ?? source.audit.targetShardCompressedSha256)
const rawBefore = brotliDecompressSync(compressedBefore)
assert.equal(sha256(rawBefore), applied?.rawSha256 ?? source.audit.targetShardDecodedSha256)
assert.equal(sha256(rawBefore), applied?.rawSha256 ?? source.audit.targetRawSha256)
const rawPath = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primate-evidence-batch-2026-09-28-h.jsonl')
assert.deepEqual(readFileSync(rawPath), rawBefore, 'Raw batch JSONL must match the indexed shard')
const originalLines = rawBefore.toString('utf8').trimEnd().split('\n')
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const targetRows = originalRows.filter(item => item.colId === source.target.colId)
assert.equal(targetRows.length, source.audit.targetRecordCount)
const dossier = targetRows[0]
assert.equal(dossier.scientificName, source.target.scientificName)
assert.equal(dossier.classificationPath.at(-1)?.authorship, source.target.authorship)
assert.equal(dossier.rank, source.target.rank)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
const existingEvolutionClaims = dossier.facets.evolution.claims ?? []
if (applied) {
  assert.equal(dossier.facets.evolution.status, 'partially-supported')
  assert.equal(existingEvolutionClaims.filter(item => item.text === source.claim.text).length, 1)
  assert.equal(existingEvolutionClaims.length, applied.claimCountForTarget)
  assert.equal(dossier.facets.distribution.gaps.includes('Morphology, life history, ecology, evolution, fossils, conservation status, systematic evidence search, and external expert review remain unassessed.'), false)
} else {
  assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.targetRecordSha256)
  assert.equal(dossier.facets.evolution.status, 'not-assessed')
  assert.equal(existingEvolutionClaims.length, source.audit.evolutionClaimCount)
  assert.ok(!existingEvolutionClaims.some(item => item.text === source.claim.text), 'B68 claim already exists')
  assert.equal(dossier.facets.distribution.gaps.includes('Morphology, life history, ecology, evolution, fossils, conservation status, systematic evidence search, and external expert review remain unassessed.'), true)
}
const existingSource = dossier.sources.find(item => item.id === source.sourceReuse.id)
assert.ok(existingSource, 'Referenced publisher article must already exist in the target dossier')
assert.equal(existingSource.stableId, source.sourceReuse.stableId)
assert.equal(existingSource.url, source.sourceReuse.url)
assert.equal(existingSource.licenseAssessment, source.sourceReuse.licenseAssessment)
assert.equal(existingSource.licenseVersion, source.sourceReuse.licenseVersion)
assert.equal(existingSource.licenseEvidenceLocator, source.sourceReuse.licenseEvidenceLocator)

const allDossiers = new Map()
const sourceOccurrences = []
let indexedCount = 0
for (const entry of dossierIndex.shards) {
  const compressed = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(compressed), entry.compressedSha256, 'Indexed compressed hash mismatch: ' + entry.path)
  const decoded = entry.path === targetShard.path ? rawBefore : brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), entry.decodedSha256, 'Indexed decoded hash mismatch: ' + entry.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, entry.recordCount, 'Indexed row count mismatch: ' + entry.path)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!allDossiers.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
    allDossiers.set(row.colId, row)
    for (const item of row.sources ?? []) {
      if (item.stableId === source.sourceReuse.stableId) sourceOccurrences.push(row.colId)
    }
  }
}
assert.equal(indexedCount, dossierIndex.recordCount)
assert.deepEqual(sourceOccurrences, [source.target.colId], 'Publisher DOI must occur in exactly one dossier')
assert.equal(sourceOccurrences.length, source.audit.sourceOccurrenceCount)

const previewBytes = readFileSync(PREVIEW_PATH)
const registryBytes = readFileSync(REGISTRY_MANIFEST_PATH)
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages selection changed since B68 audit')
assert.equal(sha256(registryBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed; re-audit before updating')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.ok(preview.packageIds.includes('primates'), 'Primates must remain in the shared App/Pages core')
assert.ok(preview.taxonIds.includes('primates'), 'Primates must remain in the shared App/Pages core')

const queueManifestBytesBefore = readFileSync(QUEUE_MANIFEST_PATH)
const queueManifestBefore = JSON.parse(queueManifestBytesBefore.toString('utf8'))

function readTargetQueueRow(queueManifest) {
  assert.equal(queueManifest.inputs.dossierIndexSha256, sha256(readFileSync(INDEX_PATH)), 'Rebuild the species evidence queue after applying B68')
  assert.equal(queueManifest.notIncludedInRuntime, true, 'The full species evidence queue must stay outside runtime packages')
  const entries = queueManifest.shards.filter(item => item.path === source.audit.queueShardPath)
  assert.equal(entries.length, 1, 'Target queue shard must occur exactly once')
  const entry = entries[0]
  const compressed = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(compressed), entry.compressedSha256, 'Queue shard checksum mismatch')
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), entry.decodedSha256, 'Queue shard decoded checksum mismatch')
  const matches = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)).filter(item => item.colId === source.target.colId)
  assert.equal(matches.length, 1, 'Target species must occur exactly once in its queue shard')
  return { entry, row: matches[0], compressed, decoded }
}

if (applied) {
  assert.equal(applied.sourceSha256, EXPECTED_SOURCE_SHA256, 'B68 source digest differs from prior application')
  assert.equal(sha256(rawBefore), applied.rawSha256, 'Updated raw JSONL changed after B68 application')
  assert.equal(sha256(compressedBefore), applied.compressedSha256, 'Updated compressed shard changed after B68 application')
  assert.equal(sha256(indexBytesBefore), applied.dossierIndexSha256, 'Updated dossier index changed after B68 application')
  assert.equal(dossier.facets.evolution.status, 'partially-supported')
  assert.equal((dossier.facets.evolution.claims ?? []).filter(item => item.text === source.claim.text).length, 1)
  const { entry, row, compressed, decoded } = readTargetQueueRow(queueManifestBefore)
  assert.equal(row.dossier.status, 'incomplete')
  assert.equal(row.dossier.claimCount, 2)
  assert.equal(row.dossier.rightsStatus, 'item-level-verified')
  assert.deepEqual(row.dossier.facetStatuses, Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])))
  const projection = {
    outputManifestPath: relative(QUEUE_MANIFEST_PATH),
    outputManifestSha256: sha256(queueManifestBytesBefore),
    inputDossierIndexSha256: sha256(indexBytesBefore),
    notIncludedInRuntime: queueManifestBefore.notIncludedInRuntime,
    affectedShard: {
      prefix: entry.prefix,
      path: entry.path,
      recordCount: entry.recordCount,
      compressedSha256: sha256(compressed),
      decodedSha256: sha256(decoded),
    },
    projectedTargetRow: {
      colId: row.colId,
      dossierStatus: row.dossier.status,
      claimCount: row.dossier.claimCount,
      rightsStatus: row.dossier.rightsStatus,
      facetStatuses: row.dossier.facetStatuses,
    },
  }
  const updateManifest = readJson(UPDATE_MANIFEST_PATH)
  updateManifest.queueProjection = projection
  applied.queueProjection = projection
  const nextBatchManifestBytes = serialize(batchManifest)
  updateManifest.output.batchManifest.sha256 = sha256(nextBatchManifestBytes)
  writeFileSync(BATCH_MANIFEST_PATH, nextBatchManifestBytes)
  writeFileSync(UPDATE_MANIFEST_PATH, serialize(updateManifest))
  console.log(JSON.stringify({ batchId: source.batchId, targetColId: source.target.colId, alreadyApplied: true, queueProjectionRecorded: true, claimCount: row.dossier.claimCount }, null, 2))
} else {
  assert.equal(sha256(batchManifestBytesBefore), source.audit.batchManifestSha256, 'Target batch manifest changed since B68 audit')
  assert.equal(sha256(queueManifestBytesBefore), source.audit.queueManifestSha256, 'Species evidence queue changed since B68 audit')
  assert.equal(queueManifestBefore.inputs.dossierIndexSha256, sha256(indexBytesBefore))
  const { entry: queueEntry, row: queueRow, compressed: queueCompressed, decoded: queueDecoded } = readTargetQueueRow(queueManifestBefore)
  assert.equal(sha256(queueCompressed), source.audit.queueShardCompressedSha256)
  assert.equal(sha256(queueDecoded), source.audit.queueShardDecodedSha256)
  assert.equal(sha256(Buffer.from(JSON.stringify(queueRow), 'utf8')), source.audit.queueRowSha256)
  assert.equal(queueRow.dossier.status, 'incomplete')
  assert.equal(queueRow.dossier.claimCount, 1)
  assert.equal(queueRow.dossier.facetStatuses.evolution, 'not-assessed')
  assert.equal(queueEntry.path, source.audit.queueShardPath)

  const updatedDossier = structuredClone(dossier)
  updatedDossier.checkedAt = source.checkedAt
  updatedDossier.facets.evolution = {
    status: 'partially-supported',
    claims: [structuredClone(source.claim)],
  }
  updatedDossier.facets.distribution.gaps = updatedDossier.facets.distribution.gaps.map(gap => gap === 'Morphology, life history, ecology, evolution, fossils, conservation status, systematic evidence search, and external expert review remain unassessed.'
    ? 'Morphology, life history, fossils, conservation status, systematic evidence search, and external expert review remain unassessed.'
    : gap)
  updatedDossier.completeness.reasons = structuredClone(source.completenessReasons)
  const updatedLines = originalLines.map(line => {
    const row = JSON.parse(line)
    if (row.colId === updatedDossier.colId) return JSON.stringify(updatedDossier)
    assert.deepEqual(allDossiers.get(row.colId), row, 'Sibling dossier changed: ' + row.colId)
    return line
  })
  const rawAfter = Buffer.from(updatedLines.join('\n') + '\n', 'utf8')
  assert.ok(!rawAfter.includes(0x0d), 'Updated raw JSONL must use LF line endings')
  const compressedAfter = brotliCompressSync(rawAfter, {
    params: {
      [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
      [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
    },
  })
  assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, 'B68 Brotli round trip must preserve exact raw bytes')
  targetShard.decodedSha256 = sha256(rawAfter)
  targetShard.compressedSha256 = sha256(compressedAfter)
  const indexBytesAfter = serialize(dossierIndex)
  const rawEntry = {
    path: relative(rawPath),
    encoding: 'utf-8-jsonl-lf',
    recordCount: originalRows.length,
    bytes: rawAfter.length,
    sha256: sha256(rawAfter),
  }
  const shardEntry = {
    path: relative(join(ROOT, targetShard.path)),
    encoding: 'brotli-jsonl',
    recordCount: originalRows.length,
    decodedBytes: rawAfter.length,
    decodedSha256: sha256(rawAfter),
    compressedBytes: compressedAfter.length,
    compressedSha256: sha256(compressedAfter),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  }
  batchManifest.raw = rawEntry
  batchManifest.shard = shardEntry
  batchManifest.finalDossierIndexSha256 = sha256(indexBytesAfter)
  batchManifest.supplementalUpdates ??= []
  batchManifest.supplementalUpdates.push({
    batchId: source.batchId,
    sourcePath: relative(SOURCE_PATH),
    sourceSha256: EXPECTED_SOURCE_SHA256,
    generator: relative(join(ROOT, 'scripts', 'update-primates-mico-acariensis-evolution-b68.mjs')),
    targetColIds: [source.target.colId],
    sourceStableIdReused: source.sourceReuse.stableId,
    sourceReuse: true,
    previousRawSha256: sha256(rawBefore),
    previousCompressedSha256: sha256(compressedBefore),
    rawSha256: sha256(rawAfter),
    compressedSha256: sha256(compressedAfter),
    dossierIndexSha256: sha256(indexBytesAfter),
    claimCountForTarget: updatedDossier.facets.evolution.claims.length,
    appAndPagesPreviewManifestChanged: false,
  })
  const batchManifestBytesAfter = serialize(batchManifest)
  const updateManifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: EXPECTED_SOURCE_SHA256 },
    target: {
      colId: source.target.colId,
      scientificName: source.target.scientificName,
      sourceDatasetId: source.target.sourceDatasetId,
      targetShardPath: targetShard.path,
      sourceStableIdReused: source.sourceReuse.stableId,
      sourceOccurrenceCountBeforeUpdate: sourceOccurrences.length,
      evolutionClaimCountBeforeUpdate: existingEvolutionClaims.length,
      evolutionClaimCountAfterUpdate: updatedDossier.facets.evolution.claims.length,
    },
    audit: source.audit,
    output: {
      raw: rawEntry,
      shard: shardEntry,
      dossierIndex: { path: relative(INDEX_PATH), recordCount: dossierIndex.recordCount, sha256: sha256(indexBytesAfter) },
      batchManifest: { path: relative(BATCH_MANIFEST_PATH), sha256: sha256(batchManifestBytesAfter) },
    },
    appAndPagesPreviewManifestChanged: false,
    notIncludedInRuntime: true,
    queueProjection: null,
  }
  writeFileSync(rawPath, rawAfter)
  writeFileSync(join(ROOT, targetShard.path), compressedAfter)
  writeFileSync(INDEX_PATH, indexBytesAfter)
  writeFileSync(BATCH_MANIFEST_PATH, batchManifestBytesAfter)
  writeFileSync(UPDATE_MANIFEST_PATH, serialize(updateManifest))
  console.log(JSON.stringify({
    batchId: source.batchId,
    targetColId: source.target.colId,
    targetName: source.target.scientificName,
    evolutionClaimCount: updatedDossier.facets.evolution.claims.length,
    dossierRecordCount: dossierIndex.recordCount,
    appAndPagesPreviewManifestChanged: false,
    shardBytesBefore: compressedBefore.length,
    shardBytesAfter: compressedAfter.length,
  }, null, 2))
}
