import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/species-evidence-facet-progress-batch33-2026-09-25.json'
const OUTPUT = 'data/knowledge/species-evidence-facet-progress-batch33-2026-09-25.batch-manifest.json'
const NEW_RAW = 'data/knowledge/raw-dossiers/species-evidence-facet-progress-batch33-2026-09-25.jsonl'
const NEW_SHARD = 'data/knowledge/catalogue-dossiers-species-evidence-facet-progress-batch33-2026-09-25.jsonl.br'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const EXPECTED_INPUT_SHA256 = '8f985bd9673f249bfa0a9b97447c51ff4d8c79cf91d60334ab52bf4dc3956083'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const registryJsonl = path => gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)

function acceptedClassification(registry, record) {
  const route = normalize(record.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryJsonl).filter(row => row.id === record.colId)
  assert.equal(matches.length, 1, 'Expected one pinned COL26.8 usage for ' + record.colId)
  const usage = matches[0]
  for (const key of ['scientificName', 'authorship', 'rank', 'sourceDatasetId']) {
    assert.equal(String(usage[key]), String(record[key]), 'Pinned COL usage ' + key + ' mismatch for ' + record.colId)
  }
  assert.equal(usage.status, 'accepted', 'COL usage is not accepted for ' + record.colId)

  const chain = []
  let id = record.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
      node = registryJsonl(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, 'Missing accepted parent node ' + id)
    assert.equal(node.status, 'accepted', 'Unaccepted parent node ' + id)
    chain.unshift(node)
    id = node.parentId
  }
  record.classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
}

function claimFor(input, sourceId) {
  return {
    text: input.text,
    ...(input.textZh ? { textZh: input.textZh } : {}),
    translationStatus: input.textZh ? 'translated' : 'untranslated',
    originalLanguage: 'en',
    sourceIds: [sourceId],
    locator: input.locator,
    placeTimeScope: input.placeTimeScope,
    lifeStatus: input.lifeStatus,
  }
}

function sourceEntry(source, checkedAt) {
  for (const key of ['id', 'title', 'url', 'stableId', 'version', 'publishedAt', 'license', 'rightsHolder', 'licenseEvidenceUrl', 'licenseEvidenceLocator', 'licenseAppliesTo', 'attribution', 'licenseVersion', 'licenseUrl', 'licenseAssessment', 'scope']) {
    assert.ok(source[key], 'Missing item-level source metadata ' + key + ' for ' + source.id)
  }
  assert.equal(source.licenseAssessment, 'item-level-verified')
  return {
    ...source,
    accessedAt: checkedAt,
    licenseAssessment: 'item-level-verified',
  }
}

function addUpdate(dossier, update, checkedAt) {
  const source = sourceEntry(update.source, checkedAt)
  const sources = new Map(dossier.sources.map(item => [item.id, item]))
  const claims = update.claims.map(claim => claimFor(claim, source.id))
  const already = sources.has(source.id)
  if (already) {
    assert.deepEqual(sources.get(source.id), source, 'Existing supplemental source differs from pinned input for ' + dossier.colId)
    const existingClaims = dossier.facets[update.facet]?.claims?.filter(item => item.sourceIds?.includes(source.id)) ?? []
    assert.deepEqual(existingClaims, claims, 'Existing supplemental claims differ from pinned input for ' + dossier.colId)
    assert.equal(dossier.facets[update.facet].status, 'partially-supported')
    return false
  }

  assert.equal(dossier.facets[update.facet]?.status, 'not-assessed', 'Target facet changed before this update for ' + dossier.colId)
  assert.equal(dossier.facets[update.facet]?.claims?.length ?? 0, 0, 'Target facet unexpectedly has claims for ' + dossier.colId)
  dossier.sources.push(source)
  dossier.facets[update.facet] = { status: 'partially-supported', claims, gaps: [update.facetGap] }
  dossier.checkedAt = checkedAt
  dossier.completeness.status = 'incomplete'
  dossier.completeness.reasons = [...new Set([...(dossier.completeness.reasons ?? []), 'The ' + update.facet + ' facet now has one source-bounded supplemental claim; other facets and independent expert review remain incomplete.'])]
  return true
}

function buildNewDossier(input, checkedAt) {
  const colSource = {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset ' + input.sourceDatasetId,
    url: 'https://www.checklistbank.org/dataset/316115/taxon/' + input.colId,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    stableId: 'col:' + input.colId + '@COL26.8',
    publishedAt: '2026-08-20',
    accessedAt: checkedAt,
    locator: 'Accepted species usage ' + input.colId + '; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.',
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ' + input.colId + '. https://doi.org/10.48580/dgywk.',
  }
  const article = sourceEntry(input.source, checkedAt)
  const facets = Object.fromEntries(FACETS.map(facet => [facet, facet === input.facet
    ? { status: 'partially-supported', claims: [claimFor(input.claim, article.id)], gaps: [input.facetGap] }
    : { status: 'not-assessed', claims: [], gaps: [input.unassessedFacetGaps[facet]] }]))
  return {
    colId: input.colId,
    scientificName: input.scientificName,
    authorship: input.authorship,
    rank: input.rank,
    sourceDatasetId: input.sourceDatasetId,
    checkedAt,
    classificationPath: input.classificationPath,
    identity: {
      method: 'Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.',
      scope: input.identityScope,
      sourceIds: ['col'],
    },
    lifeStatusScope: input.lifeStatusScope,
    sources: [colSource, article],
    systematicSearch: { ...input.search, date: checkedAt, searcher: 'Evo source audit' },
    facets,
    completeness: {
      status: 'incomplete',
      reasons: [
        'One focused primary source supports a bounded claim in ' + input.facet + ' only.',
        'The other six scientific facets remain explicitly not assessed.',
        'No independent external expert review has been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
}

function validateDossier(dossier, itemLevelVerifiedSourceIds = [], requireExplicitGaps = true) {
  assert.equal(dossier.rank, 'species')
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sources = new Map(dossier.sources.map(item => [item.id, item]))
  assert.equal(sources.size, dossier.sources.length, 'Duplicate source IDs for ' + dossier.colId)
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    if (requireExplicitGaps && assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, 'Missing explicit facet gap ' + facet)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, 'Claim missing scope or locator in ' + facet)
      assert.ok(claim.sourceIds?.length && claim.sourceIds.every(id => sources.has(id)), 'Claim has unknown source ID in ' + facet)
      for (const id of claim.sourceIds) {
        if (itemLevelVerifiedSourceIds.includes(id)) assert.equal(sources.get(id).licenseAssessment, 'item-level-verified')
      }
    }
  }
}

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned batch input SHA-256 mismatch')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'species-evidence-facet-progress-batch33-2026-09-25')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.baseAudit.indexedRecordCount, 6950)
assert.equal(input.baseAudit.indexedShardCount, 56)
assert.deepEqual(input.baseAudit.openPullRequests, [])

const registryBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), REGISTRY_SHA256)
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(input.baseAudit.registryManifestSha256, REGISTRY_SHA256)

const indexPath = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.releaseAlias, input.releaseAlias)
const indexedRows = new Map()
const indexedNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, 'Existing shard compressed checksum mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, 'Existing shard decoded checksum mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, 'Existing shard record count mismatch: ' + shard.path)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), 'Duplicate indexed COL ID: ' + row.colId)
    const name = normalize(row.scientificName)
    assert.ok(!indexedNames.has(name), 'Duplicate indexed scientific name: ' + row.scientificName)
    indexedNames.add(name)
    indexedRows.set(row.colId, { row, shardPath: shard.path })
  }
}
assert.equal(indexedCount, index.recordCount)

const appliedUpdates = []
const changedShards = new Map()
for (const update of input.updates) {
  const found = indexedRows.get(update.colId)
  assert.ok(found, 'Existing dossier not found for update ' + update.colId)
  assert.equal(found.shardPath, update.targetShardPath)
  assert.equal(found.row.scientificName, update.scientificName)
  assert.equal(String(found.row.sourceDatasetId), update.sourceDatasetId)
  const metaPath = join(ROOT, update.metadataPath)
  const meta = JSON.parse(readFileSync(metaPath, 'utf8'))
  const previousUpdate = (meta.supplementalUpdates ?? []).find(item => item.batchId === input.batchId)
  const alreadyApplied = Boolean(previousUpdate)
  const rawBytes = readFileSync(join(ROOT, update.rawPath))
  const compressedBytes = readFileSync(join(ROOT, update.targetShardPath))
  const currentRows = rawBytes.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  const row = currentRows.find(item => item.colId === update.colId)
  assert.ok(row)
  if (!alreadyApplied) {
    assert.equal(sha256(rawBytes), update.baseline.rawSha256, 'Pinned raw shard baseline changed for ' + update.colId)
    assert.equal(sha256(compressedBytes), update.baseline.compressedSha256, 'Pinned compressed shard baseline changed for ' + update.colId)
    assert.equal(sha256(Buffer.from(JSON.stringify(row))), update.baseline.targetRecordSha256, 'Pinned target record changed for ' + update.colId)
  } else {
    assert.equal(previousUpdate.sourceSha256, sha256(inputBytes), 'Prior update was generated from another input')
    assert.equal(sha256(rawBytes), previousUpdate.decodedSha256)
    assert.equal(sha256(compressedBytes), previousUpdate.compressedSha256)
  }
  const changed = JSON.parse(JSON.stringify(currentRows))
  const target = changed.find(item => item.colId === update.colId)
  const didChange = addUpdate(target, update, input.checkedAt)
  if (alreadyApplied) assert.equal(didChange, false)
  else assert.equal(didChange, true)
  validateDossier(target, [update.source.id], false)
  for (let i = 0; i < currentRows.length; i++) {
    if (currentRows[i].colId !== update.colId) assert.deepEqual(changed[i], currentRows[i], 'Untargeted sibling dossier changed in ' + update.targetShardPath)
  }
  if (changedShards.has(update.targetShardPath)) assert.deepEqual(changedShards.get(update.targetShardPath).rows, changed, 'Multiple updates to one shard must be grouped before writing')
  else changedShards.set(update.targetShardPath, { rows: changed, rawPath: update.rawPath, metadataPath: update.metadataPath, previousRows: currentRows })
  appliedUpdates.push({ colId: update.colId, facet: update.facet, sourceId: update.source.id, alreadyApplied })
}

for (const newInput of input.newRecords) {
  assert.equal(newInput.rank, 'species')
  assert.ok(FACETS.includes(newInput.facet))
  const built = buildNewDossier(newInput, input.checkedAt)
  acceptedClassification(registry, built)
  validateDossier(built, [newInput.source.id])
  if (newInput.classificationPath) assert.deepEqual(built.classificationPath, newInput.classificationPath, 'Supplied classification path differs from pinned registry')
  const existing = indexedRows.get(newInput.colId)
  if (existing) assert.deepEqual(existing.row, built, 'Existing new-record shard differs from deterministic batch output')
  else assert.ok(!indexedNames.has(normalize(newInput.scientificName)), 'New scientific name already indexed: ' + newInput.scientificName)
  newInput._built = built
}

for (const [targetShard, bundle] of changedShards) {
  const entry = index.shards.find(shard => shard.path === targetShard)
  assert.ok(entry, 'Missing target shard index entry: ' + targetShard)
  const alreadyApplied = bundle.rows.every(row => {
    const target = input.updates.find(item => item.colId === row.colId && item.targetShardPath === targetShard)
    return !target || appliedUpdates.find(item => item.colId === target.colId)?.alreadyApplied
  })
  if (!alreadyApplied) {
    const raw = Buffer.from(bundle.rows.map(row => JSON.stringify(row)).join('\n') + '\n', 'utf8')
    assert.ok(!raw.includes(0x0d), 'Raw JSONL must use LF only')
    const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
    assert.ok(brotliDecompressSync(compressed).equals(raw), 'Updated existing shard Brotli round-trip mismatch')
    for (const update of input.updates.filter(item => item.targetShardPath === targetShard)) {
      const meta = JSON.parse(readFileSync(join(ROOT, update.metadataPath), 'utf8'))
      const previousUpdate = (meta.supplementalUpdates ?? []).find(item => item.batchId === input.batchId)
      assert.ok(!previousUpdate, 'Mixed prior state across updates in one shard is not supported')
    }
    writeFileSync(join(ROOT, bundle.rawPath), raw)
    writeFileSync(join(ROOT, targetShard), compressed)
    entry.decodedSha256 = sha256(raw)
    entry.compressedSha256 = sha256(compressed)
    entry.recordCount = bundle.rows.length
    for (const update of input.updates.filter(item => item.targetShardPath === targetShard)) {
      const metaPath = join(ROOT, update.metadataPath)
      const meta = JSON.parse(readFileSync(metaPath, 'utf8'))
      const supplement = {
        batchId: input.batchId,
        sourcePath: INPUT,
        sourceSha256: sha256(inputBytes),
        generator: 'scripts/build-species-evidence-facet-progress-batch33.mjs',
        baseHead: input.baseAudit.baseHead,
        indexedRecordCountAtAudit: input.baseAudit.indexedRecordCount,
        targetColIds: [update.colId],
        previousDecodedSha256: update.baseline.rawSha256,
        previousCompressedSha256: update.baseline.compressedSha256,
        previousTargetRecordSha256: update.baseline.targetRecordSha256,
        decodedSha256: sha256(raw),
        compressedSha256: sha256(compressed),
        mode: 'in-place-add-one-source-bounded-' + update.facet + '-claim',
      }
      meta.supplementalUpdates = [...(meta.supplementalUpdates ?? []).filter(item => item.batchId !== input.batchId), supplement]
      if (Array.isArray(meta.shards)) {
        const metaShard = meta.shards.find(item => item.path === targetShard)
        assert.ok(metaShard, 'Metadata shard entry missing for ' + targetShard)
        metaShard.decodedSha256 = sha256(raw)
        metaShard.compressedSha256 = sha256(compressed)
        metaShard.decodedBytes = raw.length
        metaShard.compressedBytes = compressed.length
      } else {
        meta.rawSha256 = sha256(raw)
        meta.decodedSha256 = sha256(raw)
        meta.compressedSha256 = sha256(compressed)
        meta.decodedBytes = raw.length
        meta.compressedBytes = compressed.length
        meta.updatedIds = [...new Set([...(meta.updatedIds ?? []), update.colId])]
        meta.updatedRecordCount = meta.updatedIds.length
      }
      meta.checkedAt = input.checkedAt
      writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8')
    }
  }
}

const newBuilt = input.newRecords.map(item => item._built)
const newAlreadyExists = index.shards.some(shard => shard.path === NEW_SHARD)
if (newAlreadyExists) {
  const entry = index.shards.find(shard => shard.path === NEW_SHARD)
  const compressed = readFileSync(join(ROOT, NEW_SHARD))
  assert.equal(entry.recordCount, newBuilt.length)
  assert.equal(sha256(compressed), entry.compressedSha256)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), entry.decodedSha256)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.deepEqual(rows, newBuilt, 'Existing new-record shard differs from pinned batch input')
  assert.equal(rows.length, entry.recordCount)
} else {
  for (const item of newBuilt) {
    assert.ok(!indexedRows.has(item.colId), 'New COL ID already indexed: ' + item.colId)
    assert.ok(!indexedNames.has(normalize(item.scientificName)), 'New scientific name already indexed: ' + item.scientificName)
  }
  assert.equal(indexedCount, input.baseAudit.indexedRecordCount, 'Unexpected dossier index base count')
  const raw = Buffer.from(newBuilt.map(item => JSON.stringify(item)).join('\n') + '\n', 'utf8')
  assert.ok(!raw.includes(0x0d), 'New raw JSONL must use LF only')
  const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  assert.ok(brotliDecompressSync(compressed).equals(raw), 'New shard Brotli round-trip mismatch')
  mkdirSync(dirname(join(ROOT, NEW_RAW)), { recursive: true })
  writeFileSync(join(ROOT, NEW_RAW), raw)
  writeFileSync(join(ROOT, NEW_SHARD), compressed)
  index.shards.push({ path: NEW_SHARD, recordCount: newBuilt.length, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) })
  index.recordCount = indexedCount + newBuilt.length
}

assert.equal(index.recordCount, input.baseAudit.indexedRecordCount + newBuilt.length)
writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')
const newRawBytes = readFileSync(join(ROOT, NEW_RAW))
const newCompressedBytes = readFileSync(join(ROOT, NEW_SHARD))
const newManifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  baseAudit: input.baseAudit,
  updatedRecords: appliedUpdates.map(({ colId, facet, sourceId }) => ({ colId, facet, sourceId })),
  newRecords: newBuilt.map(({ colId, scientificName }) => ({ colId, scientificName })),
  indexedRecordCount: index.recordCount,
  newShard: {
    path: NEW_SHARD,
    rawPath: NEW_RAW,
    encoding: 'brotli-jsonl',
    recordCount: newBuilt.length,
    decodedBytes: newRawBytes.length,
    decodedSha256: sha256(newRawBytes),
    compressedBytes: newCompressedBytes.length,
    compressedSha256: sha256(newCompressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: REGISTRY_ROOT + '/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  generator: 'scripts/build-species-evidence-facet-progress-batch33.mjs',
}
writeFileSync(join(ROOT, OUTPUT), JSON.stringify(newManifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ updates: appliedUpdates, newRecords: newBuilt.map(({ colId, scientificName }) => ({ colId, scientificName })), indexedRecordsAfter: index.recordCount, newRawSha256: sha256(newRawBytes), newCompressedSha256: sha256(newCompressedBytes), rebuild: newAlreadyExists && appliedUpdates.every(item => item.alreadyApplied) ? 'verified-idempotent-rebuild' : 'applied-facet-progress-batch' }, null, 2))
