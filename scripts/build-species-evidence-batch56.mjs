import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/species-evidence-batch56-2026-09-27.json'
const OUTPUT = 'data/knowledge/species-evidence-batch56-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/species-evidence-batch56-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-species-evidence-batch56-2026-09-27.jsonl.br'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const EXPECTED_INPUT_SHA256 = 'e4d837ece522cbf633991da58bf7e9a48c07cea8df0b1fde4c2f06e07ed9be09'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const FACET_STATUSES = ['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed']

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const registryJsonl = path => gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)

function acceptedClassification(registry, record) {
  const route = normalize(record.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryJsonl).filter(row => row.id === record.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 usage for ${record.colId}`)
  const usage = matches[0]
  for (const key of ['scientificName', 'authorship', 'rank', 'sourceDatasetId']) {
    assert.equal(String(usage[key]), String(record[key]), `Pinned COL usage ${key} mismatch for ${record.colId}`)
  }
  assert.equal(usage.status, 'accepted', `COL usage is not accepted for ${record.colId}`)

  const chain = []
  let id = record.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[routeKey] ?? []) {
      node = registryJsonl(path).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing accepted parent node ${id}`)
    assert.equal(node.status, 'accepted', `Unaccepted parent node ${id}`)
    chain.unshift(node)
    id = node.parentId
  }
  record.classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
}

function sourceEntry(source, checkedAt) {
  for (const key of ['id', 'title', 'url', 'stableId', 'version', 'publishedAt', 'license', 'rightsHolder', 'licenseEvidenceUrl', 'licenseEvidenceLocator', 'licenseAppliesTo', 'attribution', 'licenseVersion', 'licenseUrl', 'licenseAssessment', 'scope']) {
    assert.ok(source[key], `Missing item-level source metadata ${key} for ${source.id}`)
  }
  assert.equal(source.licenseAssessment, 'item-level-verified')
  return { ...source, accessedAt: checkedAt, licenseAssessment: 'item-level-verified' }
}

function claimFor(claim) {
  return {
    text: claim.text,
    ...(claim.textZh ? { textZh: claim.textZh } : {}),
    translationStatus: claim.textZh ? 'translated' : 'untranslated',
    originalLanguage: 'en',
    sourceIds: claim.sourceIds,
    locator: claim.locator,
    placeTimeScope: claim.placeTimeScope,
    lifeStatus: claim.lifeStatus,
  }
}

function buildDossier(input, checkedAt) {
  acceptedClassification(registry, input)
  const colSource = {
    id: 'col',
    title: `Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset ${input.sourceDatasetId}`,
    url: `https://www.checklistbank.org/dataset/316115/taxon/${input.colId}`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    stableId: `col:${input.colId}@COL26.8`,
    publishedAt: '2026-08-20',
    accessedAt: checkedAt,
    locator: `Accepted species usage ${input.colId}; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${input.colId}. https://doi.org/10.48580/dgywk.`,
  }
  const sources = [colSource, ...input.sources.map(source => sourceEntry(source, checkedAt))]
  const sourceIds = new Set(sources.map(source => source.id))
  assert.equal(sourceIds.size, sources.length, `Duplicate source IDs for ${input.colId}`)
  assert.ok(input.sources.length > 0)
  const facets = Object.fromEntries(FACETS.map(facet => {
    const item = input.facets[facet]
    assert.ok(item, `Missing facet ${facet} for ${input.colId}`)
    assert.ok(FACET_STATUSES.includes(item.status), `Invalid facet status ${facet} for ${input.colId}`)
    assert.ok(Array.isArray(item.gaps) && item.gaps.length > 0, `Every facet needs explicit remaining scope for ${input.colId}:${facet}`)
    const claims = (item.claims ?? []).map(claimFor)
    for (const claim of claims) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope or locator missing for ${input.colId}:${facet}`)
      assert.ok(claim.sourceIds.length > 0 && claim.sourceIds.every(id => sourceIds.has(id)), `Unknown or missing claim source for ${input.colId}:${facet}`)
      for (const id of claim.sourceIds) assert.equal(sources.find(source => source.id === id).licenseAssessment, 'item-level-verified')
    }
    if (item.status === 'not-assessed') assert.equal(claims.length, 0, `Not-assessed facet contains claims for ${input.colId}:${facet}`)
    if (item.status === 'partially-supported') assert.ok(claims.length > 0, `Partial facet has no sourced claim for ${input.colId}:${facet}`)
    return [facet, { status: item.status, claims, gaps: item.gaps }]
  }))
  assert.deepEqual(Object.keys(input.facets).sort(), [...FACETS].sort())
  const partialFacets = FACETS.filter(facet => facets[facet].status === 'partially-supported')
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
    sources,
    systematicSearch: { ...input.search, date: checkedAt, searcher: 'Evo source audit' },
    facets,
    completeness: {
      status: 'incomplete',
      reasons: [
        `${partialFacets.length} of seven facets have only partial, source-bounded coverage; remaining facets or subtopics are not assessed.`,
        'The source search was focused and is not an exhaustive species-wide literature review.',
        'No independent external expert review has been completed.',
      ],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
}

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned batch input SHA-256 mismatch')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'species-evidence-batch56-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.baseAudit.registryManifestSha256, REGISTRY_SHA256)
assert.deepEqual(input.baseAudit.openPullRequests, [])
assert.equal(input.records.length, 3)

const registryBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), REGISTRY_SHA256, 'Pinned COL26.8 registry changed')
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.checklistBankDatasetKey, 316115)

const indexPath = 'data/knowledge/catalogue-dossier-shards.json'
const index = readJson(indexPath)
assert.equal(index.releaseAlias, input.releaseAlias)
assert.ok(index.recordCount === input.baseAudit.indexedRecordCount || index.recordCount === input.baseAudit.indexedRecordCount + input.records.length)
assert.ok(index.shards.length === input.baseAudit.indexedShardCount || index.shards.length === input.baseAudit.indexedShardCount + 1)
const indexedRows = new Map()
const indexedNames = new Set()
for (const entry of index.shards) {
  const bytes = readFileSync(join(ROOT, entry.path))
  assert.equal(sha256(bytes), entry.compressedSha256, `Indexed compressed shard checksum mismatch: ${entry.path}`)
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha256(decoded), entry.decodedSha256, `Indexed decoded shard checksum mismatch: ${entry.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, entry.recordCount, `Indexed record count mismatch: ${entry.path}`)
  for (const row of rows) {
    assert.ok(!indexedRows.has(row.colId), `Duplicate indexed dossier COL ID: ${row.colId}`)
    indexedRows.set(row.colId, row)
    indexedNames.add(normalize(row.scientificName))
  }
}
assert.equal(indexedRows.size, index.recordCount)

const batchAlreadyIndexed = index.shards.some(entry => entry.path === SHARD)
if (!batchAlreadyIndexed) {
  assert.equal(index.recordCount, input.baseAudit.indexedRecordCount)
  assert.equal(index.shards.length, input.baseAudit.indexedShardCount)
  const queueManifest = readJson('data/knowledge/species-evidence-queue/manifest.json')
  for (const record of input.records) {
    const baseline = input.baseAudit.queueRows[record.colId]
    assert.ok(baseline, `Missing exact queue baseline for ${record.colId}`)
    const queueShard = readFileSync(join(ROOT, baseline.path))
    const queueShardManifest = queueManifest.shards.find(shard => shard.path === baseline.path)
    assert.ok(queueShardManifest, `Queue manifest does not list ${baseline.path}`)
    const decodedQueueShard = brotliDecompressSync(queueShard)
    assert.equal(sha256(decodedQueueShard), baseline.shardDecodedSha256, `Queue shard changed since candidate audit for ${record.colId}`)
    assert.equal(sha256(decodedQueueShard), queueShardManifest.decodedSha256, `Queue shard manifest mismatch for ${record.colId}`)
    assert.equal(sha256(queueShard), queueShardManifest.compressedSha256, `Queue compressed shard manifest mismatch for ${record.colId}`)
    const row = decodedQueueShard.toString('utf8').split('\n').filter(Boolean).map(JSON.parse).find(item => item.colId === record.colId)
    assert.ok(row, `Queue row missing for ${record.colId}`)
    assert.equal(sha256(Buffer.from(JSON.stringify(row))), baseline.rowSha256, `Queue row changed since candidate audit for ${record.colId}`)
    assert.equal(row.dossier.status, 'missing')
    assert.equal(row.dossier.claimCount, 0)
    assert.equal(row.scientificName, record.scientificName)
    assert.equal(row.authorship, record.authorship)
    assert.equal(String(row.sourceDatasetId), String(record.sourceDatasetId))
    assert.ok(!indexedRows.has(record.colId), `Dossier already indexed for ${record.colId}`)
    assert.ok(!indexedNames.has(normalize(record.scientificName)), `Scientific name already indexed for ${record.scientificName}`)
  }
} else {
  assert.equal(index.recordCount, input.baseAudit.indexedRecordCount + input.records.length)
  assert.equal(index.shards.length, input.baseAudit.indexedShardCount + 1)
}

const built = input.records.map(record => buildDossier(record, input.checkedAt))
const raw = Buffer.from(`${built.map(record => JSON.stringify(record)).join('\n')}\n`, 'utf8')
assert.ok(!raw.includes(0x0d), 'Raw JSONL must use LF only')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(raw), 'New dossier shard Brotli round-trip mismatch')

if (batchAlreadyIndexed) {
  const entry = index.shards.find(shard => shard.path === SHARD)
  const existingCompressed = readFileSync(join(ROOT, SHARD))
  const existingRaw = brotliDecompressSync(existingCompressed)
  const existingRows = existingRaw.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(existingRows.length, built.length, 'Existing batch shard row count changed')
  assert.deepEqual(existingRows.map(row => row.colId), built.map(row => row.colId), 'Existing batch shard identities changed')
  assert.equal(sha256(existingCompressed), entry.compressedSha256)
  assert.equal(sha256(existingRaw), entry.decodedSha256)
  if (existingRaw.equals(raw)) {
    assert.equal(entry.recordCount, built.length)
  } else {
    writeFileSync(join(ROOT, RAW), raw)
    writeFileSync(join(ROOT, SHARD), compressed)
    entry.recordCount = built.length
    entry.decodedSha256 = sha256(raw)
    entry.compressedSha256 = sha256(compressed)
    writeFileSync(join(ROOT, indexPath), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
  }
} else {
  mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
  writeFileSync(join(ROOT, RAW), raw)
  writeFileSync(join(ROOT, SHARD), compressed)
  index.shards.push({ path: SHARD, recordCount: built.length, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) })
  index.recordCount += built.length
  writeFileSync(join(ROOT, indexPath), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
}

const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  baseAudit: input.baseAudit,
  newRecords: built.map(({ colId, scientificName, facets }) => ({
    colId,
    scientificName,
    partialFacets: FACETS.filter(facet => facets[facet].status === 'partially-supported'),
    claimCount: FACETS.reduce((sum, facet) => sum + facets[facet].claims.length, 0),
  })),
  indexedRecordCount: index.recordCount,
  newShard: {
    path: SHARD,
    rawPath: RAW,
    encoding: 'brotli-jsonl',
    recordCount: built.length,
    decodedBytes: raw.length,
    decodedSha256: sha256(raw),
    compressedBytes: compressed.length,
    compressedSha256: sha256(compressed),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: `${REGISTRY_ROOT}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryBytes) },
  appBoundary: 'Species evidence queue and dossier shards remain audit-only; this batch does not alter native-core or GitHub Pages preview selection.',
  generator: 'scripts/build-species-evidence-batch56.mjs',
}
writeFileSync(join(ROOT, OUTPUT), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ newRecords: built.map(({ colId, scientificName }) => ({ colId, scientificName })), indexedRecordsAfter: index.recordCount, claimCount: built.reduce((sum, row) => sum + FACETS.reduce((n, facet) => n + row.facets[facet].claims.length, 0), 0), newRawSha256: sha256(raw), newCompressedSha256: sha256(compressed), rebuild: batchAlreadyIndexed ? 'verified-idempotent-rebuild' : 'applied-species-evidence-batch' }, null, 2))
