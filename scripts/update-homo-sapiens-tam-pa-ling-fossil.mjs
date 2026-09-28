import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'homo-sapiens-tam-pa-ling-fossil-evidence-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl.br')
const BATCH_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.batch-manifest.json')
const DOSSIER_INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const UPDATE_MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'homo-sapiens-tam-pa-ling-fossil-evidence-2026-09-28.update-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const EXPECTED_SOURCE_SHA256 = 'ba1da928db0f251acc1095330ba612c1964fe4b4f78da1172a5eed4a10e2f305'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const checkMode = process.argv.includes('--check')

function readRegistryRows(path) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, path))).toString('utf8').split(/\r?\n/u).filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity(registryManifest, dossier) {
  const route = normalize(dossier.scientificName).slice(0, 2)
  const rows = (registryManifest.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === dossier.colId)
  assert.equal(rows.length, 1, `Expected exactly one pinned COL26.8 usage for ${dossier.colId}`)
  const usage = rows[0]
  for (const key of ['scientificName', 'rank']) assert.equal(usage[key], dossier[key], `COL26.8 ${key} mismatch`)
  if (dossier.authorship !== undefined) assert.equal(usage.authorship, dossier.authorship, 'COL26.8 authorship mismatch')
  assert.equal(usage.status, 'accepted')
  assert.equal(String(usage.sourceDatasetId), String(dossier.sourceDatasetId))

  const hierarchy = []
  let currentId = dossier.colId
  while (currentId) {
    const prefix = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
    let current
    for (const path of registryManifest.hierarchy.nodes.routes[prefix] ?? []) {
      current = readRegistryRows(path).find(node => node.id === currentId)
      if (current) break
    }
    assert.ok(current, `Missing pinned hierarchy node ${currentId}`)
    assert.equal(current.status, 'accepted')
    hierarchy.push(current)
    currentId = current.parentId
  }
  const expected = hierarchy.reverse().map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  if (Array.isArray(dossier.classificationPath)) {
    assert.deepEqual(dossier.classificationPath, expected, 'Stored hierarchy differs from pinned COL26.8')
  } else if (Array.isArray(dossier.identity?.parentChain)) {
    const storedParents = [...dossier.identity.parentChain].reverse().map(({ id, name, rank, status }) => ({ id, name, rank, status }))
    const registryParents = expected.slice(0, -1)
    let previousPosition = -1
    for (const stored of storedParents) {
      const position = registryParents.findIndex(parent => parent.id === stored.id)
      assert.ok(position > previousPosition, `Stored parent chain is out of order at ${stored.id}`)
      const parent = registryParents[position]
      const plainName = parent.authorship ? parent.scientificName.slice(0, -parent.authorship.length).trim().replace(/\($/u, '').trim() : parent.scientificName
      assert.deepEqual(stored, { id: parent.id, name: plainName, rank: parent.rank, status: parent.status })
      previousPosition = position
    }
  } else {
    assert.match(dossier.identity?.method ?? '', /COL26\.8 accepted species usage 6MB3T/u, 'Dossier lacks an auditable pinned identity method')
  }
  assert.ok(expected.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
  assert.equal(expected.at(-1).id, dossier.colId)
}

function validateDossier(dossier, source) {
  assert.equal(dossier.colId, source.target.colId)
  assert.equal(dossier.scientificName, source.target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
  assert.equal(dossier.completeness?.status, 'incomplete')
  assert.equal(dossier.expertReview?.status, 'not-reviewed')
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  const sourceIds = new Set(dossier.sources.map(item => item.id))
  assert.equal(sourceIds.size, dossier.sources.length, 'Dossier source IDs must remain unique')
  for (const facet of FACETS) {
    const assessment = dossier.facets[facet]
    assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(assessment.status))
    if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, `Missing explicit gap for ${facet}`)
    for (const claim of assessment.claims ?? []) {
      assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete claim scope for ${facet}`)
      assert.ok(claim.sourceIds?.length && claim.sourceIds.every(id => sourceIds.has(id)), `Unresolved source for ${facet}`)
      if (claim.translationStatus === 'translated') assert.ok(claim.textZh, `Missing Chinese translation for ${facet}`)
    }
  }
  for (const facet of ['morphology', 'fossil']) {
    const claim = dossier.facets[facet].claims.find(item => item.sourceIds.includes(source.source.id))
    assert.ok(claim, `Expected the new source to support ${facet}`)
    assert.equal(dossier.facets[facet].status, 'partially-supported')
    assert.ok(dossier.facets[facet].gaps?.length, `Partial ${facet} assessment needs a remaining gap`)
  }
  const biologicalSource = dossier.sources.find(item => item.id === source.source.id)
  assert.deepEqual(biologicalSource, source.source)
  assert.equal(biologicalSource.licenseAssessment, 'item-level-verified')
  assert.equal(biologicalSource.licenseVersion, 'CC BY 4.0')
}

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Evidence source file changed after its audit')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.target.colId, '6MB3T')
assert.equal(source.target.scientificName, 'Homo sapiens Linnaeus, 1758')
assert.equal(source.source.stableId, 'doi:10.1038/s41467-023-38715-y')
assert.equal(source.source.licenseAssessment, 'item-level-verified')

const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL26.8 registry changed')
const registry = JSON.parse(registryBytes.toString('utf8'))
const previewBytes = readFileSync(join(ROOT, 'data', 'pages-preview.json'))
assert.equal(sha256(previewBytes), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed')

const indexBytesBefore = readFileSync(DOSSIER_INDEX_PATH)
const index = JSON.parse(indexBytesBefore.toString('utf8'))
assert.equal(index.releaseAlias, 'COL26.8')
assert.equal(index.recordCount, source.audit.dossierIndexRecordCount)
const indexEntry = index.shards.find(item => item.path === source.audit.targetShardPath)
assert.ok(indexEntry, 'Target dossier shard is not present in the index')
const rawBefore = readFileSync(RAW_PATH)
const compressedBefore = readFileSync(SHARD_PATH)
assert.equal(sha256(rawBefore), indexEntry.decodedSha256, 'Raw dossier does not match indexed decoded shard')
assert.equal(sha256(compressedBefore), indexEntry.compressedSha256, 'Compressed dossier does not match index')
const rawLines = rawBefore.toString('utf8').split(/\r?\n/u)
assert.equal(rawLines.at(-1), '', 'Raw dossier JSONL must end with a newline')
if (rawLines.at(-2) === '') rawLines.splice(-2, 1)
assert.ok(rawLines.slice(0, -1).every(line => line.length > 0), 'Raw dossier JSONL contains an unexpected blank record')
assert.ok(!rawBefore.includes(0x0d), 'Raw dossier JSONL must use LF line endings')
const originalRows = rawLines.slice(0, -1).map(line => JSON.parse(line))
const targetRows = originalRows.filter(record => record.colId === source.target.colId)
assert.equal(targetRows.length, 1, 'The target dossier must occur exactly once in the raw shard')
let dossier = targetRows[0]
verifyAcceptedIdentity(registry, dossier)

const allDossiers = readCatalogueDossiers()
const duplicateStableIdOwners = allDossiers.records
  .filter(record => record.colId !== source.target.colId)
  .flatMap(record => (record.sources ?? []).filter(item => item.stableId === source.source.stableId).map(() => record.colId))
assert.deepEqual(duplicateStableIdOwners, [], 'Article DOI already occurs in another accepted-species dossier')

const priorSource = dossier.sources.find(item => item.id === source.source.id)
const priorClaims = Object.fromEntries(['morphology', 'fossil'].map(facet => [facet,
  dossier.facets[facet].claims?.find(claim => claim.sourceIds?.includes(source.source.id))]))
const alreadyApplied = Boolean(priorSource && priorClaims.morphology && priorClaims.fossil)
if (alreadyApplied) {
  assert.deepEqual(priorSource, source.source)
  assert.deepEqual(priorClaims.morphology, source.claims.morphology)
  assert.deepEqual(priorClaims.fossil, source.claims.fossil)
} else {
  assert.equal(sha256(rawBefore), source.audit.previousRawSha256, 'Raw dossier baseline changed')
  assert.equal(sha256(compressedBefore), source.audit.previousShardCompressedSha256, 'Compressed dossier baseline changed')
  assert.equal(sha256(brotliDecompressSync(compressedBefore)), source.audit.previousShardDecodedSha256, 'Decoded dossier baseline changed')
  assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.previousTargetRecordSha256, 'Target dossier differs from the audited baseline')
  assert.equal(sha256(indexBytesBefore), source.audit.previousDossierIndexSha256, 'Dossier index differs from the audited baseline')
  assert.equal(dossier.facets.morphology.status, 'not-assessed')
  assert.equal(dossier.facets.fossil.status, 'not-assessed')
  assert.ok(!dossier.sources.some(item => item.id === source.source.id))
  dossier = structuredClone(dossier)
  dossier.checkedAt = source.checkedAt
  dossier.identity.scope = source.identityScope
  dossier.lifeStatusScope.fossil = source.fossilLifeStatusScope
  dossier.sources.push(source.source)
  for (const facet of ['morphology', 'fossil']) {
    dossier.facets[facet] = {
      status: 'partially-supported',
      claims: [...(dossier.facets[facet].claims ?? []), source.claims[facet]],
      gaps: source.gaps[facet],
    }
  }
  dossier.completeness = { status: 'incomplete', reasons: source.completenessReasons }
  validateDossier(dossier, source)
  verifyAcceptedIdentity(registry, dossier)
}

const newLines = originalRows.map(record => record.colId === dossier.colId ? JSON.stringify(dossier) : JSON.stringify(record))
for (let i = 0; i < originalRows.length; i++) {
  if (originalRows[i].colId !== dossier.colId) assert.equal(newLines[i], rawLines[i], `Untargeted sibling changed: ${originalRows[i].colId}`)
}
const rawAfter = Buffer.from(`${newLines.join('\n')}\n`, 'utf8')
const compressedAfter = brotliCompressSync(rawAfter, { params: {
  [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
  [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
} })
assert.ok(brotliDecompressSync(compressedAfter).equals(rawAfter), 'Brotli round trip must be byte-exact')
const updatedRows = brotliDecompressSync(compressedAfter).toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
assert.equal(updatedRows.length, originalRows.length, 'Dossier row count must not change')
validateDossier(updatedRows.find(record => record.colId === source.target.colId), source)

indexEntry.decodedSha256 = sha256(rawAfter)
indexEntry.compressedSha256 = sha256(compressedAfter)
const indexBytesAfter = Buffer.from(`${JSON.stringify(index, null, 2)}\n`, 'utf8')
const batchManifest = JSON.parse(readFileSync(BATCH_MANIFEST_PATH, 'utf8'))
batchManifest.input = { path: relative(RAW_PATH), bytes: rawAfter.length, sha256: sha256(rawAfter) }
batchManifest.shard = {
  path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: updatedRows.length,
  decodedBytes: rawAfter.length, decodedSha256: sha256(rawAfter),
  compressedBytes: compressedAfter.length, compressedSha256: sha256(compressedAfter),
  brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match',
}
batchManifest.lastIncrementalUpdate = {
  batchId: source.batchId,
  sourceStableId: source.source.stableId,
  targetColId: source.target.colId,
  targetRecordSha256: sha256(Buffer.from(JSON.stringify(dossier), 'utf8')),
  appAndPagesPreviewManifestChanged: false,
  rawNormalization: source.audit.rawNormalization,
}
const batchManifestBytes = Buffer.from(`${JSON.stringify(batchManifest, null, 2)}\n`, 'utf8')
const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  checkedAt: source.checkedAt,
  input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
  target: source.target,
  duplicateAudit: source.audit.duplicateAudit,
  registry: { path: relative(join(REGISTRY_ROOT, 'manifest.json')), manifestSha256: EXPECTED_REGISTRY_SHA256 },
  baseline: {
    rawSha256: source.audit.previousRawSha256,
    targetRecordSha256: source.audit.previousTargetRecordSha256,
    shardDecodedSha256: source.audit.previousShardDecodedSha256,
    shardCompressedSha256: source.audit.previousShardCompressedSha256,
    dossierIndexRecordCount: source.audit.dossierIndexRecordCount,
    dossierIndexSha256: source.audit.previousDossierIndexSha256,
  },
  coverage: {
    morphology: 'partially-supported', fossil: 'partially-supported',
    lifeHistory: 'not-assessed', ecology: 'not-assessed', evolution: 'partially-supported',
    distribution: 'partially-supported', conservation: 'not-assessed',
    completeDossiersAdded: 0, externallyReviewedDossiersAdded: 0,
  },
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
  raw: { path: relative(RAW_PATH), bytes: rawAfter.length, sha256: sha256(rawAfter) },
  rawNormalization: source.audit.rawNormalization,
  shard: { path: relative(SHARD_PATH), decodedSha256: sha256(rawAfter), compressedSha256: sha256(compressedAfter), recordCount: updatedRows.length },
  dossierIndex: { path: relative(DOSSIER_INDEX_PATH), beforeSha256: source.audit.previousDossierIndexSha256, afterSha256: sha256(indexBytesAfter), recordCount: index.recordCount },
  generator: 'scripts/update-homo-sapiens-tam-pa-ling-fossil.mjs',
  updateMode: 'append-two-source-bounded-claims-to-existing-dossier',
}
const updateManifestBytes = Buffer.from(`${JSON.stringify(updateManifest, null, 2)}\n`, 'utf8')

if (checkMode) {
  assert.ok(alreadyApplied, 'The audited fossil update has not been applied')
  assert.ok(rawBefore.equals(rawAfter), 'Current raw dossier differs from deterministic output')
  assert.ok(compressedBefore.equals(compressedAfter), 'Current shard differs from deterministic output')
  assert.ok(indexBytesBefore.equals(indexBytesAfter), 'Current dossier index differs from deterministic output')
  assert.ok(readFileSync(BATCH_MANIFEST_PATH).equals(batchManifestBytes), 'Current shard batch manifest differs from deterministic output')
  assert.ok(existsSync(UPDATE_MANIFEST_PATH) && readFileSync(UPDATE_MANIFEST_PATH).equals(updateManifestBytes), 'Incremental update manifest is stale')
} else {
  writeFileSync(RAW_PATH, rawAfter)
  writeFileSync(SHARD_PATH, compressedAfter)
  writeFileSync(DOSSIER_INDEX_PATH, indexBytesAfter)
  writeFileSync(BATCH_MANIFEST_PATH, batchManifestBytes)
  writeFileSync(UPDATE_MANIFEST_PATH, updateManifestBytes)
}

console.log(JSON.stringify({
  batchId: source.batchId,
  mode: checkMode ? 'check' : (alreadyApplied ? 'already-current' : 'updated'),
  targetColId: dossier.colId,
  targetName: dossier.scientificName,
  facetsAdded: ['morphology', 'fossil'],
  dossierIndexRecordCount: index.recordCount,
  appAndPagesPreviewUnchanged: sha256(previewBytes) === source.audit.pagesPreviewManifestSha256,
  rawSha256: sha256(rawAfter),
  compressedSha256: sha256(compressedAfter),
  byteExactBrotliRoundTrip: brotliDecompressSync(compressedAfter).equals(rawAfter),
}, null, 2))
