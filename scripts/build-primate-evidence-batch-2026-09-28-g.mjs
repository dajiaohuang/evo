import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  brotliCompressSync,
  brotliDecompressSync,
  constants as zlibConstants,
  gunzipSync,
} from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT_PATH = 'data/sources/primate-evidence-batch-2026-09-28-g.json'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const QUEUE_MANIFEST_PATH = 'data/knowledge/species-evidence-queue/manifest.json'
const PREVIEW_PATH = 'data/pages-preview.json'
const RAW_PATH = 'data/knowledge/raw-dossiers/primate-evidence-batch-2026-09-28-g.jsonl'
const SHARD_PATH = 'data/knowledge/catalogue-dossiers-primate-evidence-2026-09-28-g.jsonl.br'
const BATCH_MANIFEST_PATH = 'data/knowledge/catalogue-dossiers-primate-evidence-2026-09-28-g.batch-manifest.json'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_TRANSLATION = {
  '3WWNS': { translationStatus: 'untranslated', originalLanguage: 'en' },
  '47NQQ': { translationStatus: 'untranslated', originalLanguage: 'en' },
  '485JL': { translationStatus: 'untranslated', originalLanguage: 'en' },
}
const checkMode = process.argv.includes('--check')
const sha256 = value => createHash('sha256').update(value).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const inputBytes = readFileSync(join(ROOT, INPUT_PATH))
const input = JSON.parse(inputBytes.toString('utf8'))

assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.batchId, 'primate-evidence-batch-2026-09-28-g')
assert.equal(input.species.length, 3)
assert.ok(new Set(input.species.map(item => item.target.colId)).size === input.species.length, 'Duplicate target COL IDs')

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), input.audit.registryManifestSha256, 'Pinned COL26.8 registry changed; re-audit before updating')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, 'COL26.8')
assert.equal(registryManifest.releaseDate, '2026-08-20')
assert.equal(registryManifest.checklistBankDatasetKey, 316115)

const registryCache = new Map()
function registryRows(path) {
  if (!registryCache.has(path)) {
    const decoded = gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8')
    registryCache.set(path, decoded.split(/\r?\n/u).filter(Boolean).map(JSON.parse))
  }
  return registryCache.get(path)
}

function readAcceptedRecord(target) {
  const route = normalize(target.scientificName).slice(0, 2)
  const usageRows = (registryManifest.search.routes[route] ?? []).flatMap(registryRows).filter(row => row.id === target.colId)
  assert.equal(usageRows.length, 1, `Expected one exact COL26.8 usage for ${target.colId}`)
  const usage = usageRows[0]
  assert.equal(usage.scientificName, target.scientificName, `Scientific-name mismatch for ${target.colId}`)
  assert.equal(usage.authorship, target.authorship, `Authorship mismatch for ${target.colId}`)
  assert.equal(usage.rank, target.rank, `Rank mismatch for ${target.colId}`)
  assert.equal(usage.status, 'accepted', `Usage is not accepted: ${target.colId}`)
  assert.equal(String(usage.sourceDatasetId), target.sourceDatasetId, `sourceDatasetId mismatch for ${target.colId}`)

  const classificationPath = []
  let parentId = usage.id
  while (parentId) {
    const routeId = sha256(Buffer.from(parentId, 'utf8')).slice(0, 2)
    const nodes = (registryManifest.hierarchy.nodes.routes[routeId] ?? []).flatMap(registryRows)
    const node = nodes.find(row => row.id === parentId)
    assert.ok(node, `Missing pinned COL hierarchy node ${parentId}`)
    assert.equal(node.status, 'accepted', `Unaccepted hierarchy node ${parentId}`)
    classificationPath.unshift({
      id: node.id,
      scientificName: node.scientificName,
      authorship: node.authorship ?? null,
      rank: node.rank,
      status: node.status,
      sourceDatasetId: node.sourceDatasetId == null ? null : String(node.sourceDatasetId),
    })
    parentId = node.parentId
  }
  assert.deepEqual(classificationPath.map(node => node.id), input.species.find(item => item.target.colId === target.colId).audit.classificationPathIds)
  assert.equal(classificationPath.at(-1).id, target.colId)
  return { usage, classificationPath }
}

function readQueueRow(item, queueManifest) {
  const shard = queueManifest.shards.find(entry => entry.path === item.audit.queueShardPath)
  assert.ok(shard, `Missing audited queue shard for ${item.target.colId}`)
  const compressed = readFileSync(join(ROOT, item.audit.queueShardPath))
  const decoded = brotliDecompressSync(compressed)
  if (!checkMode) {
    assert.equal(sha256(compressed), item.audit.queueShardCompressedSha256, `Queue shard changed for ${item.target.colId}`)
    assert.equal(sha256(decoded), item.audit.queueShardDecodedSha256, `Queue shard content changed for ${item.target.colId}`)
    assert.equal(shard.compressedSha256, item.audit.queueShardCompressedSha256)
    assert.equal(shard.decodedSha256, item.audit.queueShardDecodedSha256)
  }
  const matches = decoded.toString('utf8').split(/\r?\n/u).filter(Boolean).filter(line => JSON.parse(line).colId === item.target.colId)
  assert.equal(matches.length, 1, `Expected exactly one evidence queue row for ${item.target.colId}`)
  const rowBytes = Buffer.from(matches[0], 'utf8')
  if (!checkMode) {
    assert.equal(sha256(rowBytes), item.audit.queueRowSha256, `Queue-row audit hash changed for ${item.target.colId}`)
  }
  const row = JSON.parse(matches[0])
  assert.equal(row.scientificName, item.target.scientificName)
  assert.equal(String(row.sourceDatasetId), item.target.sourceDatasetId)
  if (checkMode) {
    const expectedClaimCount = Object.values(item.facets).flatMap(facet => facet.claims ?? []).length
    assert.equal(row.dossier.status, 'incomplete')
    assert.equal(row.dossier.claimCount, expectedClaimCount)
    assert.equal(row.dossier.rightsStatus, 'item-level-verified')
    for (const facet of FACETS) assert.equal(row.dossier.facetStatuses[facet], item.facets[facet].status)
  } else {
    assert.equal(row.dossier.status, 'missing')
    assert.equal(row.dossier.claimCount, 0)
    assert.equal(row.dossier.expertReviewStatus, 'no-dossier')
    assert.ok(Object.values(row.dossier.facetStatuses).every(status => status === 'not-assessed'))
  }
  return { row, lineSha256: sha256(rowBytes), shard }
}

function buildColSource(target, classificationPath) {
  return {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${target.colId}`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    stableId: `col:${target.colId}@COL26.8`,
    publishedAt: '2026-08-20',
    accessedAt: input.checkedAt,
    locator: `Accepted species usage ${target.colId}; exact accepted name, authorship, species rank, sourceDatasetId ${target.sourceDatasetId}, and accepted parent chain verified in the pinned hierarchy.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 accepted-name identity and classification metadata only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${target.colId}. https://doi.org/10.48580/dgywk`,
  }
}

function buildDossier(item) {
  const { target, classificationPath } = item
  const sources = [buildColSource(target, classificationPath), ...item.sources]
  const dossier = {
    colId: target.colId,
    scientificName: target.scientificName,
    rank: target.rank,
    sourceDatasetId: target.sourceDatasetId,
    checkedAt: input.checkedAt,
    identity: {
      method: 'Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.',
      scope: item.scope,
      sourceIds: ['col'],
    },
    classificationPath,
    lifeStatusScope: item.lifeStatusScope,
    sources,
    facets: item.facets,
    completeness: {
      status: 'incomplete',
      reasons: item.completenessReasons,
    },
    expertReview: { status: 'not-reviewed', reviewers: [] },
  }
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort(), `Missing facets for ${target.colId}`)
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  const sourceIds = new Set(sources.map(source => source.id))
  assert.equal(sourceIds.size, sources.length, `Duplicate source IDs for ${target.colId}`)
  for (const [facetName, facet] of Object.entries(dossier.facets)) {
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(facet.status))
    if (facet.status === 'partially-supported') assert.ok(facet.claims?.length && facet.gaps?.length, `Partial facet lacks a claim or gap: ${target.colId}/${facetName}`)
    if (facet.status === 'not-assessed') assert.equal((facet.claims ?? []).length, 0, `Unassessed facet contains a claim: ${target.colId}/${facetName}`)
    for (const claim of facet.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope or locator missing: ${target.colId}/${facetName}`)
      assert.equal(claim.translationStatus, EXPECTED_TRANSLATION[target.colId].translationStatus)
      assert.equal(claim.originalLanguage, EXPECTED_TRANSLATION[target.colId].originalLanguage)
      assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), `Claim source missing: ${target.colId}/${facetName}`)
      for (const id of claim.sourceIds) {
        const source = sources.find(entry => entry.id === id)
        assert.equal(source.licenseAssessment, 'item-level-verified', `Claim source rights are not item-level verified: ${target.colId}/${id}`)
        for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(source[key], `Claim source missing ${key}: ${target.colId}/${id}`)
        assert.ok(['CC BY 4.0', 'CC0 1.0'].includes(source.licenseVersion), `Unexpected claim source license: ${target.colId}/${id}`)
        assert.equal(source.licenseUrl, source.licenseVersion === 'CC0 1.0' ? 'https://creativecommons.org/publicdomain/zero/1.0/' : 'https://creativecommons.org/licenses/by/4.0/')
        assert.match(source.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
      }
    }
  }
  return dossier
}

const targetIds = new Set(input.species.map(item => item.target.colId))
const candidateNames = new Set(input.species.map(item => normalize(item.target.scientificName)))
const candidateStableIds = new Set(input.species.flatMap(item => item.sources.map(source => source.stableId)))
assert.equal(candidateStableIds.size, input.species.flatMap(item => item.sources).length, 'Duplicate source DOI within batch')

const currentIndex = readJson(INDEX_PATH)
const currentIndexBytes = readFileSync(join(ROOT, INDEX_PATH))
const indexEntries = readCatalogueDossiers().records
const newShardMatches = currentIndex.shards.filter(shard => shard.path === SHARD_PATH)
let baseIndex
if (checkMode) {
  assert.equal(newShardMatches.length, 1, 'Built shard is missing from dossier index')
  baseIndex = {
    ...structuredClone(currentIndex),
    recordCount: currentIndex.recordCount - input.species.length,
    shards: currentIndex.shards.filter(shard => shard.path !== SHARD_PATH),
  }
} else {
  assert.equal(sha256(currentIndexBytes), input.audit.dossierIndexSha256, 'Dossier index changed since duplicate audit; re-audit before updating')
  assert.equal(newShardMatches.length, 0, `Output shard already exists: ${SHARD_PATH}`)
  baseIndex = structuredClone(currentIndex)
}
const baseIndexBytes = Buffer.from(`${JSON.stringify(baseIndex, null, 2)}\n`, 'utf8')
assert.equal(sha256(baseIndexBytes), input.audit.dossierIndexSha256, 'Base dossier index checksum mismatch')
assert.equal(baseIndex.recordCount, input.audit.dossierIndexRecordCount)
const expectedCurrentCount = input.audit.dossierIndexRecordCount + (checkMode ? input.species.length : 0)
assert.equal(indexEntries.length, expectedCurrentCount, 'Dossier archive count changed since the batch audit')

const baseRecords = indexEntries.filter(record => !targetIds.has(record.colId))
assert.equal(baseRecords.length, input.audit.dossierIndexRecordCount)
for (const item of input.species) {
  assert.equal(baseRecords.some(record => record.colId === item.target.colId), false, `COL ID already has a dossier: ${item.target.colId}`)
  assert.equal(baseRecords.some(record => normalize(record.scientificName) === normalize(item.target.scientificName)), false, `Species name already has a dossier: ${item.target.scientificName}`)
  for (const stableId of item.sources.map(source => source.stableId)) {
    assert.equal(baseRecords.some(record => record.sources?.some(source => source.stableId === stableId)), false, `Source already occurs in a dossier: ${stableId}`)
  }
}

const queueManifestBytes = readFileSync(join(ROOT, QUEUE_MANIFEST_PATH))
if (!checkMode) assert.equal(sha256(queueManifestBytes), input.audit.queueManifestSha256, 'Species evidence queue changed since the audit')
const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
const queueAudits = new Map()
for (const item of input.species) queueAudits.set(item.target.colId, readQueueRow(item, queueManifest))

const previewBytes = readFileSync(join(ROOT, PREVIEW_PATH))
assert.equal(sha256(previewBytes), input.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed since the audit')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.ok(preview.packageIds.includes('primates'), 'Selected Primates core package is missing')
assert.ok(preview.taxonIds.includes('primates'), 'Selected Primates core taxon is missing')

const dossiers = input.species.map(item => {
  const identity = readAcceptedRecord(item.target)
  return { ...item, ...identity, dossier: buildDossier({ ...item, ...identity }) }
}).sort((left, right) => left.target.colId.localeCompare(right.target.colId, 'en'))

if (checkMode) {
  for (const item of dossiers) {
    const existing = indexEntries.find(record => record.colId === item.target.colId)
    assert.deepEqual(existing, item.dossier, `Indexed dossier differs from deterministic output for ${item.target.colId}`)
  }
}

const rawBytes = Buffer.from(`${dossiers.map(item => JSON.stringify(item.dossier)).join('\n')}\n`, 'utf8')
const compressedBytes = brotliCompressSync(rawBytes, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.ok(brotliDecompressSync(compressedBytes).equals(rawBytes), 'Dossier shard Brotli round trip must be byte-exact')
const nextIndex = structuredClone(baseIndex)
nextIndex.shards.push({
  path: SHARD_PATH,
  recordCount: dossiers.length,
  decodedSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
})
nextIndex.recordCount += dossiers.length
const nextIndexBytes = Buffer.from(`${JSON.stringify(nextIndex, null, 2)}\n`, 'utf8')

const partialFacets = Object.fromEntries(FACETS.map(facet => [
  facet,
  dossiers.flatMap(item => item.dossier.facets[facet].status === 'partially-supported' ? [item.target.colId] : []),
]))
const batchManifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  checkedAt: input.checkedAt,
  baseHead: input.audit.baseHead,
  input: { path: INPUT_PATH, sha256: sha256(inputBytes) },
  duplicateAudit: input.audit.duplicateAudit,
  identities: dossiers.map(item => ({
    colId: item.target.colId,
    scientificName: item.target.scientificName,
    sourceDatasetId: item.target.sourceDatasetId,
    classificationPathIds: item.classificationPath.map(node => node.id),
    classificationPathRanks: item.classificationPath.map(node => node.rank),
  })),
  sources: dossiers.map(item => ({
    colId: item.target.colId,
    sources: item.sources.map(source => ({ stableId: source.stableId, licenseAssessment: source.licenseAssessment, licenseVersion: source.licenseVersion })),
  })),
  coverage: {
    dossiersAdded: dossiers.length,
    partialFacets,
    notAssessedFacets: dossiers.map(item => ({
      colId: item.target.colId,
      facets: FACETS.filter(facet => item.dossier.facets[facet].status === 'not-assessed'),
    })),
    completeDossiersAdded: 0,
    externallyReviewedDossiersAdded: 0,
  },
  queueAudit: {
    queueManifestSha256Before: input.audit.queueManifestSha256,
    rowsBefore: dossiers.map(item => ({
      colId: item.target.colId,
      shardPath: item.audit.queueShardPath,
      rowSha256: item.audit.queueRowSha256,
      status: 'missing',
    })),
  },
  appAndPagesPreviewManifestSha256: sha256(previewBytes),
  appAndPagesPreviewManifestChanged: false,
  baseDossierIndexSha256: sha256(baseIndexBytes),
  finalDossierIndexSha256: sha256(nextIndexBytes),
  raw: { path: RAW_PATH, encoding: 'utf-8-jsonl-lf', recordCount: dossiers.length, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: {
    path: SHARD_PATH,
    encoding: 'brotli-jsonl',
    recordCount: dossiers.length,
    decodedBytes: rawBytes.length,
    decodedSha256: sha256(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  dossierCountBefore: baseIndex.recordCount,
  dossierCountAfter: nextIndex.recordCount,
  generator: 'scripts/build-primate-evidence-batch-2026-09-28-g.mjs',
  fullDossierCountAdded: 0,
  expertReviewedDossierCountAdded: 0,
}
const batchManifestBytes = Buffer.from(`${JSON.stringify(batchManifest, null, 2)}\n`, 'utf8')

if (checkMode) {
  assert.equal(sha256(currentIndexBytes), sha256(nextIndexBytes), 'Dossier index differs from deterministic output')
  assert.ok(readFileSync(join(ROOT, RAW_PATH)).equals(rawBytes), 'Raw dossier JSONL differs from deterministic output')
  assert.ok(readFileSync(join(ROOT, SHARD_PATH)).equals(compressedBytes), 'Compressed dossier shard differs from deterministic output')
  assert.ok(readFileSync(join(ROOT, BATCH_MANIFEST_PATH)).equals(batchManifestBytes), 'Batch manifest differs from deterministic output')
} else {
  for (const path of [RAW_PATH, SHARD_PATH, BATCH_MANIFEST_PATH]) assert.equal(existsSync(join(ROOT, path)), false, `Output already exists: ${path}`)
  mkdirSync(dirname(join(ROOT, RAW_PATH)), { recursive: true })
  writeFileSync(join(ROOT, RAW_PATH), rawBytes)
  writeFileSync(join(ROOT, SHARD_PATH), compressedBytes)
  writeFileSync(join(ROOT, INDEX_PATH), nextIndexBytes)
  writeFileSync(join(ROOT, BATCH_MANIFEST_PATH), batchManifestBytes)
}

console.log(JSON.stringify({
  batchId: input.batchId,
  mode: checkMode ? 'check' : 'write',
  species: dossiers.map(item => ({
    colId: item.target.colId,
    scientificName: item.target.scientificName,
    classificationPathIds: item.classificationPath.map(node => node.id),
    partialFacets: FACETS.filter(facet => item.dossier.facets[facet].status === 'partially-supported'),
    claimCount: FACETS.reduce((count, facet) => count + (item.dossier.facets[facet].claims?.length ?? 0), 0),
  })),
  dossierCountBefore: baseIndex.recordCount,
  dossierCountAfter: nextIndex.recordCount,
  appAndPagesPreviewUnchanged: sha256(previewBytes) === input.audit.pagesPreviewManifestSha256,
  exactBrotliRoundTrip: true,
  compressedDossierBytes: compressedBytes.length,
}, null, 2))
