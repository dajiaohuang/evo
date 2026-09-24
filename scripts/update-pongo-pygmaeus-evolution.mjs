import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-pongo-pygmaeus-evolution-2026-09-24.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-core-batch5-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.jsonl.br')
const BATCH_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-core-batch5-2026-09-24.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DOSSIER_INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = '7ddb348c3326f9979a969e04454bcb9b1bfebe922ea57703365b6bd5b42daa08'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registryManifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const matches = (registryManifest.search.routes[route] ?? []).flatMap(path => readRegistryRows(path)).filter(row => row.id === dossier.colId)
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

function validateDossier(dossier) {
  assert.equal(dossier.colId, '4LTT2')
  assert.equal(dossier.scientificName, 'Pongo pygmaeus (Linnaeus, 1760)')
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
      assert.ok(['translated', 'untranslated'].includes(claim.translationStatus), `Invalid translation status: ${facet}`)
      if (claim.translationStatus === 'translated') assert.ok(claim.textZh, `Translated claim needs Chinese text: ${facet}`)
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
  assert.equal(dossier.sources.find(source => source.id === 'col')?.licenseAssessment, 'identity-only')
  assert.equal(dossier.facets.evolution.status, 'partially-supported')
  assert.ok(dossier.facets.evolution.claims.some(claim => claim.sourceIds.includes('banes2016') && claim.text.includes('Camp Leakey') && claim.text.includes('11 mtDNA profiles representing founder lineages') && claim.textZh.includes('Camp Leakey')))
}

function readIndexedRecords(index) {
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
      assert.ok(!recordsById.has(row.colId), `Duplicate indexed COL id: ${row.colId}`)
      recordsById.set(row.colId, row)
    }
  }
  assert.equal(count, index.recordCount, 'Existing index record count mismatch')
  return { recordsById, count }
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
assert.equal(source.duplicateAudit.sourceOccurrencesBeforeUpdate, 0)
assert.equal(source.updateAudit.baseHead, source.duplicateAudit.baseHead)
assert.equal(source.updateAudit.indexedRecordCountAtAudit, source.duplicateAudit.indexedRecordCount)
assert.equal(source.updateAudit.targetColId, '4LTT2')
assert.equal(source.updateAudit.targetScientificName, 'Pongo pygmaeus (Linnaeus, 1760)')
assert.equal(source.updateAudit.mode, 'in-place-enrichment-of-existing-record')
assert.equal(source.source.stableId, source.duplicateAudit.sourceStableId)
assert.equal(source.source.licenseAssessment, 'item-level-verified')
assert.equal(source.source.licenseVersion, 'CC BY 4.0')
assert.equal(source.claim.sourceIds[0], source.source.id)
assert.equal(source.claim.translationStatus, 'translated')

const dossierIndex = JSON.parse(readFileSync(DOSSIER_INDEX_PATH, 'utf8'))
const indexed = readIndexedRecords(dossierIndex)
assert.equal(indexed.count, source.updateAudit.indexedRecordCountAtAudit, 'Index count differs from the update audit')
const targetMatches = [...indexed.recordsById.values()].filter(record => record.colId === source.updateAudit.targetColId)
assert.equal(targetMatches.length, source.updateAudit.targetRecordCountBeforeUpdate, 'In-place target must already exist exactly once')
const targetShard = dossierIndex.shards.find(shard => shard.path === relative(SHARD_PATH))
assert.ok(targetShard, 'The existing target shard must stay in the dossier index')

const originalCompressedBytes = readFileSync(SHARD_PATH)
const originalRawBytes = brotliDecompressSync(originalCompressedBytes)
assert.equal(sha256(originalCompressedBytes), targetShard.compressedSha256)
assert.equal(sha256(originalRawBytes), targetShard.decodedSha256)
assert.deepEqual(originalRawBytes, readFileSync(RAW_PATH), 'Existing raw batch must match its decompressed shard')
const originalRawLines = originalRawBytes.toString('utf8').trimEnd().split('\n')
const originalRows = originalRawLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, targetShard.recordCount)
const baseline = originalRows.find(record => record.colId === source.updateAudit.targetColId)
assert.ok(baseline, 'Audited target must exist in the current shard')
assert.equal(baseline.scientificName, source.updateAudit.targetScientificName)
assert.equal(indexed.recordsById.get(baseline.colId)?.scientificName, baseline.scientificName)
assert.deepEqual(source.duplicateAudit.openPullRequests, source.updateAudit.openPullRequests)
const sourceOccurrences = [...indexed.recordsById.values()].flatMap(record => (record.sources ?? []).map(item => ({ colId: record.colId, source: item }))).filter(item => item.source.stableId === source.source.stableId)
const alreadyApplied = baseline.sources.some(item => item.id === source.source.id && item.stableId === source.source.stableId)
let dossier
if (alreadyApplied) {
  assert.equal(sourceOccurrences.length, 1, 'Previously applied source must occur exactly once')
  assert.equal(sourceOccurrences[0].colId, baseline.colId, 'Previously applied source is attached to a different species')
  assert.deepEqual(baseline.sources.find(item => item.id === source.source.id), source.source)
  assert.equal(baseline.facets.evolution.status, 'partially-supported')
  assert.ok(baseline.facets.evolution.claims.some(claim => JSON.stringify(claim) === JSON.stringify(source.claim)))
  assert.deepEqual(baseline.facets.evolution.gaps, source.evolutionGaps)
  assert.deepEqual(baseline.completeness.reasons, source.completenessReasons)
  dossier = structuredClone(baseline)
} else {
  assert.equal(sourceOccurrences.length, source.duplicateAudit.sourceOccurrencesBeforeUpdate, 'Source DOI already occurs in the indexed dossier store')
  assert.equal(sha256(Buffer.from(JSON.stringify(baseline), 'utf8')), source.updateAudit.previousParsedTargetSha256, 'Existing target differs from the audited baseline')
  assert.ok(!baseline.sources.some(item => item.id === source.source.id), 'Target already contains the proposed source id')
  assert.equal(baseline.facets.evolution.status, 'not-assessed', 'Evolution facet changed since the target audit')
  dossier = structuredClone(baseline)
  dossier.sources.push(source.source)
  dossier.facets.evolution = { status: 'partially-supported', claims: [source.claim], gaps: source.evolutionGaps }
  dossier.completeness = { status: 'incomplete', reasons: source.completenessReasons }
}
verifyAcceptedIdentity(registryManifest, dossier)
validateDossier(dossier)
assert.ok(originalRows.some(record => record.colId === 'J8P6'), 'The Ateles sibling dossier must be preserved')

const records = originalRows.map(record => record.colId === dossier.colId ? dossier : record).sort((a, b) => a.colId.localeCompare(b.colId))
const originalLinesById = new Map(originalRawLines.map(line => [JSON.parse(line).colId, line]))
const rawLines = records.map(record => {
  if (record.colId === dossier.colId) return JSON.stringify(record)
  const existingLine = originalLinesById.get(record.colId)
  assert.ok(existingLine, `Missing original raw line for sibling ${record.colId}`)
  assert.deepEqual(JSON.parse(existingLine), record, `Non-target dossier changed: ${record.colId}`)
  return existingLine
})
const rawBytes = Buffer.from(`${rawLines.join('\n')}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const roundTripBytes = brotliDecompressSync(compressedBytes)
assert.ok(roundTripBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.deepEqual(roundTripBytes.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line)), records)
assert.ok(sha256(originalCompressedBytes) === source.updateAudit.previousShardSha256 || originalCompressedBytes.equals(compressedBytes), 'Target shard differs from its audited baseline or generated output')

targetShard.recordCount = records.length
targetShard.decodedSha256 = sha256(roundTripBytes)
targetShard.compressedSha256 = sha256(compressedBytes)
assert.equal(dossierIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0), dossierIndex.recordCount)

const priorManifest = JSON.parse(readFileSync(BATCH_MANIFEST_PATH, 'utf8'))
const updateAudit = { ...source.updateAudit, sourceStableId: source.source.stableId, indexedRecordCountAfterUpdate: indexed.count }
const manifest = {
  schemaVersion: 1,
  batchId: priorManifest.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  duplicateCheck: { ...source.duplicateAudit, mode: 'in-place-update', matchedColIds: [dossier.colId], matchedNames: [normalize(dossier.scientificName)] },
  initialDuplicateAudit: priorManifest.initialDuplicateAudit,
  previousUpdateAudit: priorManifest.input?.path === relative(SOURCE_PATH) ? priorManifest.previousUpdateAudit : priorManifest.updateAudit,
  updateAudit,
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: records.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: records.length, decodedBytes: roundTripBytes.length, decodedSha256: sha256(roundTripBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registryManifest.releaseDate, checklistBankDatasetKey: registryManifest.checklistBankDatasetKey, manifestSha256: EXPECTED_REGISTRY_SHA256 },
  generator: 'scripts/update-pongo-pygmaeus-evolution.mjs',
  updateMode: 'rebuild-one-existing-record-in-place',
}

writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(DOSSIER_INDEX_PATH, `${JSON.stringify(dossierIndex, null, 2)}\n`, 'utf8')
writeFileSync(BATCH_MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ recordCount: dossierIndex.recordCount, targetColId: dossier.colId, targetName: dossier.scientificName, sourceId: source.source.id, evolutionStatus: dossier.facets.evolution.status, siblingRecordCount: records.length - 1, sourceSha256: sha256(sourceBytes), rawSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes), byteRoundTrip: roundTripBytes.equals(rawBytes), updateMode: manifest.updateMode }, null, 2))
