import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'fungi-saccharomyces-cerevisiae-morphology-batch53-2026-09-27.json')
const EXPECTED_SOURCE_SHA256 = '4ea0d7046525c4ea0a4a79d39c7192f18b92f2ff2f7d062eb975bea3098438f3'
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'fungi-model-yeasts-dossier-batch-2026-09-24.jsonl')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-fungi-model-yeasts-dossier-batch-2026-09-24.jsonl.br')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'fungi-saccharomyces-cerevisiae-morphology-batch53-2026-09-27.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha(sourceBytes), EXPECTED_SOURCE_SHA256, 'Reviewed source input changed')
const input = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(input.batchId, 'fungi-saccharomyces-cerevisiae-morphology-batch53-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.target.colId, '4TWCR')
assert.equal(input.audit.sourceStableId, input.source.stableId)
assert.equal(input.appAndPagesPreviewManifestChanged, false)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha(registryManifestBytes), input.registry.manifestSha256)
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, input.releaseAlias)
assert.equal(registry.releaseDate, input.registry.releaseDate)
assert.equal(registry.checklistBankDatasetKey, input.registry.checklistBankDatasetKey)
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const route = normalize(input.target.scientificName).slice(0, 2)
const registryRows = (registry.search.routes[route] ?? []).flatMap(path => gunzipSync(readFileSync(join(REGISTRY_ROOT, path)))
  .toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
const acceptedRows = registryRows.filter(row => row.id === input.target.colId)
assert.equal(acceptedRows.length, 1, 'Expected exactly one accepted-usage row for the COL26.8 target')
const accepted = acceptedRows[0]
for (const key of ['scientificName', 'rank', 'status', 'sourceDatasetId']) assert.equal(String(accepted[key]), String(input.target[key]))
assert.deepEqual(accepted.classification, input.target.classification)

const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))
assert.equal(index.shards.length, input.audit.indexedShardCount)
assert.equal(index.recordCount, input.audit.indexedRecordCount)
const indexedRows = new Map()
const sourceMatches = []
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, 'Compressed hash mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, 'Decoded hash mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount)
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL usage ' + row.colId)
    indexedRows.set(row.colId, row)
    for (const existingSource of row.sources ?? []) {
      if (existingSource.stableId === input.source.stableId) sourceMatches.push({ colId: row.colId, scientificName: row.scientificName })
    }
  }
}
assert.equal(indexedRows.size, index.recordCount)
assert.equal(sourceMatches.length, input.audit.sourceOccurrencesBeforeUpdate)
assert.deepEqual(sourceMatches, [])

const shardEntry = index.shards.find(item => item.path === relative(SHARD_PATH))
assert.ok(shardEntry, 'Target dossier shard is absent from the index')
const previousCompressed = readFileSync(SHARD_PATH)
const previousRaw = brotliDecompressSync(previousCompressed)
assert.equal(sha(previousRaw), input.audit.previousRawSha256)
assert.equal(sha(previousCompressed), input.audit.previousCompressedSha256)
assert.deepEqual(readFileSync(RAW_PATH), previousRaw, 'Existing canonical raw JSONL differs from its indexed shard')
const rows = previousRaw.toString('utf8').trimEnd().split('\n').map(JSON.parse)
const targetRows = rows.filter(row => row.colId === input.target.colId)
assert.equal(targetRows.length, input.audit.targetRecordCountBeforeUpdate)
const target = targetRows[0]
for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(String(target[key]), String(input.target[key]))
assert.equal(sha(Buffer.from(JSON.stringify(target))), input.audit.previousTargetRecordSha256)
assert.deepEqual(rows.filter(row => row.colId !== target.colId).map(row => row.colId).sort(), input.audit.siblingColIds)
assert.equal(target.facets.morphology.status, 'not-assessed')
assert.equal((target.facets.morphology.claims ?? []).length, 0)
assert.ok(!target.sources.some(existingSource => existingSource.stableId === input.source.stableId))

const source = input.source
assert.equal(source.licenseAssessment, 'item-level-verified')
assert.equal(source.licenseVersion, 'CC BY 4.0')
for (const key of ['rightsHolder', 'licenseAppliesTo', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'attribution', 'stableId', 'publishedAt', 'accessedAt']) {
  assert.ok(source[key], 'Missing source rights or provenance field ' + key)
}
assert.equal(input.claim.translationStatus, 'untranslated')
assert.deepEqual(input.claim.sourceIds, [source.id])
assert.ok(input.claim.locator && input.claim.placeTimeScope && input.claim.lifeStatus)

const dossier = structuredClone(target)
dossier.checkedAt = input.checkedAt
dossier.sources.push(source)
dossier.identity.scope = 'Nominal species usage 4TWCR in COL26.8. The biological evidence below is limited to the explicitly sampled strains and assays in Diezmann and Dietrich (2009) and Kato et al. (2021), not all strains or the full accepted species concept.'
dossier.lifeStatusScope.wild = 'The 2009 paper includes wild-environment isolates identified by source as soil, fruit, and insect-gut material; the 2021 morphology study used laboratory strains. Neither study is a representative survey of wild populations.'
dossier.lifeStatusScope.domesticated = 'The 2009 paper includes vineyard, brewery, and commercial Saccharomyces boulardii preparation strains; the 2021 morphology study used laboratory strains. Neither establishes species-wide domestication status.'
dossier.facets.morphology = {
  status: 'partially-supported',
  claims: [...(target.facets.morphology.claims ?? []), input.claim],
  gaps: [...new Set([...(target.facets.morphology.gaps ?? []), ...input.gaps])],
}
const priorSearch = target.systematicSearch
dossier.systematicSearch = {
  date: input.systematicSearch.date,
  scope: priorSearch.scope + ' ' + input.systematicSearch.scope,
  method: priorSearch.method + ' ' + input.systematicSearch.method,
  queryOrPath: priorSearch.queryOrPath + '; ' + input.systematicSearch.queryOrPath,
  inclusionCriteria: priorSearch.inclusionCriteria + ' ' + input.systematicSearch.inclusionCriteria,
  exclusionCriteria: priorSearch.exclusionCriteria + ' ' + input.systematicSearch.exclusionCriteria,
  searcher: priorSearch.searcher,
}
dossier.completeness = {
  status: 'incomplete',
  reasons: [
    'Morphology now includes only a bounded cell-area result from two laboratory strains; baseline morphology, life history, distribution, fossil evidence, and conservation remain not-assessed.',
    'Ecology and evolution remain limited to a selected 2009 strain panel and five-locus analysis; those results do not establish complete species-wide accounts.',
    'No systematic literature review or complete comparison with the COL26.8 species concept has been completed.',
    'Independent external expert review has not been completed.',
  ],
}
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.morphology.status, 'partially-supported')
assert.equal(dossier.facets.morphology.claims.length, 1)
assert.ok(dossier.facets.morphology.claims.every(claim => claim.sourceIds?.every(id => dossier.sources.some(item => item.id === id))))

const rawBytes = Buffer.from(rows.map(row => JSON.stringify(row.colId === dossier.colId ? dossier : row)).join('\n') + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Updated shard JSONL must use LF only')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'Brotli round-trip must be byte-for-byte exact')
const outputRows = rawBytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
assert.equal(outputRows.length, shardEntry.recordCount)
assert.deepEqual(outputRows.filter(row => row.colId !== dossier.colId).map(row => row.colId).sort(), input.audit.siblingColIds)
shardEntry.decodedSha256 = sha(rawBytes)
shardEntry.compressedSha256 = sha(compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: relative(SOURCE_PATH), sha256: sha(sourceBytes) },
  duplicateCheck: {
    mode: 'in-place-update',
    indexedShardCount: index.shards.length,
    indexedRecordCount: index.recordCount,
    sourceStableIds: [source.stableId],
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    matchedColIds: [dossier.colId],
    matchedNames: [dossier.scientificName.toLocaleLowerCase('en-US')],
    openPullRequests: [],
    openPullRequestSearch: input.audit.openPullRequestSearch,
  },
  updateAudit: {
    baseHead: input.audit.baseHead,
    indexedShardCountAtAudit: input.audit.indexedShardCount,
    indexedRecordCountAtAudit: input.audit.indexedRecordCount,
    targetColId: dossier.colId,
    targetScientificName: dossier.scientificName,
    targetRecordCountBeforeUpdate: targetRows.length,
    targetShardPath: relative(SHARD_PATH),
    previousRawSha256: sha(previousRaw),
    previousCompressedSha256: sha(previousCompressed),
    previousTargetRecordSha256: input.audit.previousTargetRecordSha256,
    sourceOccurrencesBeforeUpdate: sourceMatches.length,
    openPullRequestSearch: input.audit.openPullRequestSearch,
    mode: 'in-place-add-one-two-strain-bounded-cell-area-morphology-claim',
    indexedRecordCountAfterUpdate: index.recordCount,
    outputRawSha256: sha(rawBytes),
    outputCompressedSha256: sha(compressedBytes),
  },
  sources: [{ id: source.id, stableId: source.stableId, licenseAssessment: source.licenseAssessment, licenseVersion: source.licenseVersion, rightsHolder: source.rightsHolder }],
  raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: outputRows.length, bytes: rawBytes.length, sha256: sha(rawBytes) },
  shard: {
    path: relative(SHARD_PATH),
    encoding: 'brotli-jsonl',
    recordCount: outputRows.length,
    decodedBytes: rawBytes.length,
    decodedSha256: sha(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha(compressedBytes),
    brotliParameters: { quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: input.registry,
  preservedSiblingColIds: input.audit.siblingColIds,
  generator: 'scripts/update-fungi-saccharomyces-morphology-batch53.mjs',
  updateMode: 'in-place-enrichment-of-one-existing-record',
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(RAW_PATH, rawBytes)
writeFileSync(SHARD_PATH, compressedBytes)
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + '\n', 'utf8')
writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  batchId: input.batchId,
  targetColId: dossier.colId,
  morphologyClaims: dossier.facets.morphology.claims.length,
  statuses: Object.fromEntries(FACETS.map(key => [key, dossier.facets[key].status])),
  indexedRecordCount: index.recordCount,
  preservedSiblingColIds: input.audit.siblingColIds,
  sourceOccurrencesBeforeUpdate: sourceMatches.length,
  outputRawSha256: sha(rawBytes),
  outputCompressedSha256: sha(compressedBytes),
  exactRoundTrip: brotliDecompressSync(compressedBytes).equals(rawBytes),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
