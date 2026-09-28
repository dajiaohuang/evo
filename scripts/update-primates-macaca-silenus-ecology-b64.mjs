import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/primates-macaca-silenus-ecology-b64-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl')
const SHARD_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br')
const INDEX_PATH = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const METADATA_PATH = join(ROOT, 'data/knowledge/catalogue-dossiers-primates-batch-3.metadata.json')
const MANIFEST_PATH = join(ROOT, 'data/knowledge/primates-macaca-silenus-ecology-b64-2026-09-28.update-manifest.json')
const REGISTRY_MANIFEST_PATH = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
const BATCH_ID = 'primates-macaca-silenus-ecology-batch64-2026-09-28'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))

const sourceBytes = readFileSync(SOURCE_PATH)
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, BATCH_ID)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.appAndPagesPreviewManifestChanged, false)
assert.deepEqual(source.target, { colId: '3WWP6', scientificName: 'Macaca silenus (Linnaeus, 1758)', rank: 'species', sourceDatasetId: '2144' })
assert.equal(source.sourceRef.id, 'bindu2024preprint')
assert.equal(source.sourceRef.stableId, 'doi:10.1101/2024.12.09.627456')
assert.equal(source.sourceRef.licenseAssessment, 'item-level-verified')
assert.equal(source.sourceRef.licenseVersion, 'CC BY 4.0')
assert.equal(source.sourceRef.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.ok(source.sourceRef.rightsEvidenceUrl.startsWith('https://'))
assert.ok(source.sourceRef.licenseEvidenceUrl.startsWith('https://'))
assert.deepEqual(source.claim.sourceIds, ['bindu2024preprint'])

const existingManifest = existsSync(MANIFEST_PATH) ? readJson(MANIFEST_PATH) : undefined
if (existingManifest?.batchId === BATCH_ID) {
  assert.equal(sha256(sourceBytes), existingManifest.input.sha256, 'Applied batch source changed; reapply from its pinned baseline')
  const raw = readFileSync(RAW_PATH)
  const compressed = readFileSync(SHARD_PATH)
  const metadata = readJson(METADATA_PATH)
  assert.equal(sha256(raw), existingManifest.raw.sha256)
  assert.equal(sha256(compressed), existingManifest.shard.compressedSha256)
  assert.ok(metadata.supplementalUpdates.some(item => item.batchId === BATCH_ID))
  console.log(JSON.stringify({ batchId: BATCH_ID, status: 'already-applied' }, null, 2))
  process.exit(0)
}

assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim(), source.audit.baseHead, 'B64 base changed; re-audit before updating')
const registryBytes = readFileSync(REGISTRY_MANIFEST_PATH)
assert.equal(sha256(registryBytes), source.audit.registryManifestSha256, 'Pinned COL26.8 registry changed')
const previewBytes = readFileSync(join(ROOT, 'data/pages-preview.json'))
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.ok(preview.packageIds.includes('primates'))
assert.ok(preview.taxonIds.includes('macaca_silenus'))

const index = readJson(INDEX_PATH)
assert.equal(index.recordCount, source.audit.indexedRecordCount)
const indexed = new Map()
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, `Compressed checksum mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, `Decoded checksum mismatch: ${shard.path}`)
  const lines = decoded.toString('utf8').split(/\r?\n/u).filter(Boolean)
  assert.equal(lines.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
  for (const line of lines) {
    const row = JSON.parse(line)
    assert.ok(!indexed.has(row.colId), `Duplicate dossier COL ID: ${row.colId}`)
    indexed.set(row.colId, row)
  }
}
assert.equal(indexed.size, index.recordCount)
const sourceOccurrences = [...indexed.values()].filter(row => row.sources?.some(item => item.stableId === source.sourceRef.stableId))
assert.equal(sourceOccurrences.length, source.audit.sourceOccurrenceCountBeforeUpdate, 'Source occurrence count changed; re-audit before updating')
assert.deepEqual(sourceOccurrences.map(row => row.colId), [])

const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(sha256(rawBefore), source.audit.previousRawSha256)
assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256)
assert.deepEqual(brotliDecompressSync(compressedBefore), rawBefore)
const originalLines = rawBefore.toString('utf8').trimEnd().split(/\r?\n/u)
const originalRows = originalLines.map(line => JSON.parse(line))
assert.equal(originalRows.length, 3)
assert.deepEqual(originalRows.filter(row => row.colId !== source.target.colId).map(row => row.colId).sort(), [...source.audit.siblingColIds].sort())
const baseline = originalRows.find(row => row.colId === source.target.colId)
assert.ok(baseline)
assert.equal(sha256(Buffer.from(JSON.stringify(baseline))), source.audit.targetRecordSha256BeforeUpdate)
assert.deepEqual([baseline.scientificName, baseline.rank, baseline.sourceDatasetId], [source.target.scientificName, 'species', '2144'])
assert.equal(indexed.get(source.target.colId)?.scientificName, baseline.scientificName)
assert.equal(indexed.get(source.target.colId)?.facets.ecology.status, 'partially-supported')
const existingSource = baseline.sources.find(item => item.id === source.sourceRef.id)
assert.equal(existingSource, undefined)


const existingEcologyClaims = baseline.facets.ecology.claims.filter(claim => claim.sourceIds.includes(source.sourceRef.id))
assert.equal(existingEcologyClaims.length, source.audit.existingEcologyClaimCountFromSource)
assert.equal(existingEcologyClaims.length, 0)
assert.ok(!baseline.facets.ecology.claims.some(claim => claim.text === source.claim.text))

const dossier = structuredClone(baseline)
const sourceRecord = structuredClone(source.sourceRef)
dossier.sources.push(sourceRecord)
dossier.identity.scope = 'COL26.8 usage 3WWP6 only. Existing mitochondrial evidence is regional to sampled Western Ghats populations. Dhawale et al. (2020) concerns one free-ranging troop at Puthuthottam in February–May 2016. Bindu et al. (2024) is a separate bioRxiv v1 study of four troop groups at Puduthottam during four months of one dry season; its field year is not reported and it was not certified by peer review.'
dossier.lifeStatusScope.wild = 'Ram et al. (2015) sampled wild Western Ghats populations. Dhawale et al. (2020) followed one free-ranging Puthuthottam troop in February–May 2016. Bindu et al. (2024) reports 375.9 focal-watch hours across four wild troop groups at Puduthottam during four months of one dry season; the preprint gives no calendar year and was not certified by peer review. These are bounded field samples, not captive, domesticated, or fossil records.'
dossier.completeness.reasons = [
  'Evidence remains geographically and methodologically bounded: regional mitochondrial samples, a one-troop habitat study by Dhawale et al. (2020), and a separate four-troop study at one fragment in a single dry season reported in a bioRxiv v1 preprint not certified by peer review. Broader ecology and population coverage remain incomplete.',
  'Morphology, life history, and fossil evidence remain unassessed; independent expert review has not been completed.',
]
dossier.checkedAt = source.checkedAt
dossier.facets.ecology.claims.push(structuredClone(source.claim))
dossier.facets.ecology.gaps = structuredClone(source.gaps.ecology)
assert.equal(dossier.sources.length, baseline.sources.length + 1)
assert.equal(dossier.facets.ecology.claims.length, baseline.facets.ecology.claims.length + 1)
assert.equal(dossier.facets.ecology.claims.at(-1).sourceIds[0], source.sourceRef.id)

const outputLines = originalLines.map(line => {
  const row = JSON.parse(line)
  return row.colId === dossier.colId ? JSON.stringify(dossier) : line
})
const raw = Buffer.from(outputLines.join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressed), raw)
const shard = index.shards.find(item => item.path === source.audit.previousShardPath)
assert.ok(shard)
shard.decodedSha256 = sha256(raw)
shard.compressedSha256 = sha256(compressed)

const metadata = readJson(METADATA_PATH)
metadata.supplementalUpdates ??= []
assert.ok(!metadata.supplementalUpdates.some(item => item.batchId === BATCH_ID))
const sourceSha256 = sha256(sourceBytes)
const updateAudit = {
  batchId: BATCH_ID,
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: indexed.size,
  targetColId: dossier.colId,
  targetScientificName: dossier.scientificName,
  targetRecordCountBeforeUpdate: 1,
  targetShardPath: relative(SHARD_PATH),
  previousRawSha256: sha256(rawBefore),
  previousDecodedSha256: sha256(brotliDecompressSync(compressedBefore)),
  previousCompressedSha256: sha256(compressedBefore),
  previousTargetRecordSha256: source.audit.targetRecordSha256BeforeUpdate,
  sourceStableId: source.sourceRef.stableId,
  sourceOccurrenceCountBeforeUpdate: sourceOccurrences.length,
  existingEcologyClaimCountFromSource: existingEcologyClaims.length,
  openPullRequests: source.audit.openPullRequests,
  openIssues: source.audit.openIssues,
  mode: 'in-place-add-age-sex-seed-dispersal-evidence-to-existing-core-primate-dossier',
  indexedRecordCountAfterUpdate: indexed.size,
  outputRawSha256: sha256(raw),
  outputDecodedSha256: sha256(raw),
  outputCompressedSha256: sha256(compressed),
}
metadata.supplementalUpdates.push({
  batchId: BATCH_ID,
  sourcePath: relative(SOURCE_PATH),
  sourceSha256,
  generator: relative(join(ROOT, 'scripts/update-primates-macaca-silenus-ecology-b64.mjs')),
  baseHead: source.audit.baseHead,
  indexedRecordCountAtAudit: indexed.size,
  targetColIds: [dossier.colId],
  previousDecodedSha256: updateAudit.previousDecodedSha256,
  previousCompressedSha256: updateAudit.previousCompressedSha256,
  decodedSha256: sha256(raw),
  compressedSha256: sha256(compressed),
  mode: updateAudit.mode,
})
metadata.checkedAt = source.checkedAt
metadata.rawSha256 = sha256(raw)
metadata.decodedSha256 = sha256(raw)
metadata.compressedSha256 = sha256(compressed)
metadata.decodedBytes = raw.length
metadata.compressedBytes = compressed.length
metadata.updateAudit = updateAudit

const updateManifest = {
  schemaVersion: 1,
  batchId: BATCH_ID,
  releaseAlias: source.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sourceSha256 },
  duplicateCheck: {
    mode: 'in-place-additional-claim',
    indexedRecordCount: indexed.size,
    sourceStableIds: [source.sourceRef.stableId],
    sourceOccurrencesBeforeUpdate: sourceOccurrences.length,
    matchedColIds: [dossier.colId],
    matchedNames: [dossier.scientificName],
    existingClaimsFromSource: existingEcologyClaims.length,
    openPullRequests: source.audit.openPullRequests,
    openIssues: source.audit.openIssues,
  },
  updateAudit,
  sources: [{ id: source.sourceRef.id, stableId: source.sourceRef.stableId, licenseAssessment: source.sourceRef.licenseAssessment, licenseVersion: 'CC BY 4.0', rightsHolder: 'The authors/funder, as identified by the preprint copyright notice.' }],
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: originalRows.length, bytes: raw.length, sha256: sha256(raw) },
  shard: { path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: originalRows.length, decodedBytes: raw.length, decodedSha256: sha256(raw), compressedBytes: compressed.length, compressedSha256: sha256(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { releaseDate: '2026-08-20', checklistBankDatasetKey: 316115, manifestSha256: source.audit.registryManifestSha256 },
  preservedSiblingColIds: source.audit.siblingColIds,
  generator: relative(join(ROOT, 'scripts/update-primates-macaca-silenus-ecology-b64.mjs')),
  updateMode: 'in-place-enrichment-of-one-existing-dossier-record',
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, raw)
writeFileSync(SHARD_PATH, compressed)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n')
writeFileSync(METADATA_PATH, JSON.stringify(metadata, null, 2) + '\n')
writeFileSync(MANIFEST_PATH, JSON.stringify(updateManifest, null, 2) + '\n')
console.log(JSON.stringify({ batchId: BATCH_ID, targetColId: dossier.colId, ecologyClaimCount: dossier.facets.ecology.claims.length, indexedRecordCount: indexed.size, preservedSiblingColIds: source.audit.siblingColIds, rawSha256: sha256(raw), compressedSha256: sha256(compressed), byteRoundTrip: brotliDecompressSync(compressed).equals(raw), appAndPagesPreviewManifestChanged: false }, null, 2))
