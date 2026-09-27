import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'primates-microcebus-ravelobensis-ecology-morphology-b60-2026-09-28.json')
const RAW_PATH = join(ROOT, 'data', 'knowledge', 'raw-dossiers', 'primates-microcebus-ravelobensis-b60-2026-09-28.jsonl')
const SHARD_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-microcebus-ravelobensis-b60-2026-09-28.jsonl.br')
const INDEX_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossier-shards.json')
const MANIFEST_PATH = join(ROOT, 'data', 'knowledge', 'catalogue-dossiers-primates-microcebus-ravelobensis-b60-2026-09-28.batch-manifest.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const QUEUE_ROOT = join(ROOT, 'data', 'knowledge', 'species-evidence-queue')
const PREVIEW_PATH = join(ROOT, 'data', 'pages-preview.json')
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_SOURCE_SHA256 = '3b2070740aff3f13dc378767d670356a77e39d4d567b2bab84fea6c21927709d'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))

const sourceBytes = readFileSync(SOURCE_PATH)
assert.equal(sha256(sourceBytes), EXPECTED_SOURCE_SHA256, 'Frozen B60 evidence source changed')
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.batchId, 'primates-microcebus-ravelobensis-ecology-morphology-b60-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.audit.target, {
  colId: '42SBZ',
  scientificName: 'Microcebus ravelobensis Zimmerman, Ehresmann, Zeitemann, Radespiel, Randrianambinina & Rakotoarison, 1997',
  authorship: 'Zimmerman, Ehresmann, Zeitemann, Radespiel, Randrianambinina & Rakotoarison, 1997',
  rank: 'species',
  sourceDatasetId: '2144',
})
assert.equal(source.preparedAgainst.head, '8bbe4a94e427cd4ef8e074c66ba331749af8c594')
assert.equal(source.audit.openPullRequests.length, 0)

const registryManifestBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), source.registry.manifestSha256, 'Pinned COL26.8 registry changed')
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, source.releaseAlias)
assert.equal(registryManifest.releaseDate, source.registry.releaseDate)
assert.equal(registryManifest.checklistBankDatasetKey, source.registry.checklistBankDatasetKey)

function readRegistryRows(relativePath) {
  return gunzipSync(readFileSync(join(REGISTRY_ROOT, relativePath))).toString('utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function verifyAcceptedIdentity() {
  const target = source.audit.target
  const route = normalize(target.scientificName).slice(0, 2)
  const searchRows = (registryManifest.search.routes[route] ?? []).flatMap(readRegistryRows).filter(row => row.id === target.colId)
  assert.equal(searchRows.length, 1, 'Expected exactly one pinned COL26.8 search row')
  assert.deepEqual(
    ['scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'].map(key => searchRows[0][key]),
    [target.scientificName, target.authorship, 'species', 'accepted', target.sourceDatasetId],
  )

  const chain = []
  let currentId = target.colId
  while (currentId) {
    const routeKey = sha256(Buffer.from(currentId, 'utf8')).slice(0, 2)
    const files = registryManifest.hierarchy.nodes.routes[routeKey] ?? []
    let node
    for (const path of files) {
      node = readRegistryRows(path).find(entry => entry.id === currentId)
      if (node) break
    }
    assert.ok(node, 'Missing pinned COL26.8 hierarchy node: ' + currentId)
    assert.equal(node.status, 'accepted', 'COL26.8 parent is not accepted: ' + currentId)
    chain.unshift(node)
    currentId = node.parentId
  }
  const classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.equal(classificationPath.at(-1).id, target.colId)
  assert.ok(classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
  assert.ok(classificationPath.some(node => node.id === '4FM' && node.rank === 'suborder' && node.scientificName.startsWith('Strepsirrhini ')))
  assert.equal(classificationPath.at(-2).id, '63B2M')
  return classificationPath
}

const classificationPath = verifyAcceptedIdentity()
const index = readJson(INDEX_PATH)
assert.equal(index.releaseAlias, source.releaseAlias)
assert.equal(index.encoding, 'brotli-jsonl')
assert.equal(index.recordCount, source.audit.indexedRecordCount, 'Dossier index changed after B60 identity audit')
const indexedById = new Map()
const stableIdOccurrences = []
const normalizedNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(ROOT, shard.path))
  assert.equal(sha256(compressed), shard.compressedSha256, 'Indexed compressed checksum mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), shard.decodedSha256, 'Indexed decoded checksum mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(rows.length, shard.recordCount, 'Indexed shard record count mismatch: ' + shard.path)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!indexedById.has(row.colId), 'Duplicate indexed COL id: ' + row.colId)
    indexedById.set(row.colId, row)
    normalizedNames.add(normalize(row.scientificName))
    for (const item of row.sources ?? []) if (item.stableId === source.source.stableId) stableIdOccurrences.push({ colId: row.colId, id: item.id })
  }
}
assert.equal(indexedCount, index.recordCount, 'Dossier index count mismatch')
assert.equal(indexedById.has(source.audit.target.colId), false, 'Target species already has an indexed dossier')
assert.equal(normalizedNames.has(normalize(source.audit.target.scientificName)), false, 'Target scientific name already has an indexed dossier')
assert.equal(stableIdOccurrences.length, source.audit.sourceStableIdOccurrencesBeforeUpdate, 'Article DOI already occurs in indexed dossiers')

const queuePrefix = sha256(Buffer.from(source.audit.target.colId, 'utf8'))[0]
const queuePath = join(QUEUE_ROOT, queuePrefix + '.jsonl.br')
assert.equal(relative(queuePath), source.audit.queueShardPath)
const queueBytes = brotliDecompressSync(readFileSync(queuePath))
const queueLine = queueBytes.toString('utf8').split('\n').find(line => line && JSON.parse(line).colId === source.audit.target.colId)
assert.ok(queueLine, 'Target species queue row is missing')
assert.equal(sha256(Buffer.from(queueLine, 'utf8')), source.audit.queueRowSha256BeforeUpdate, 'Target queue row changed after source audit')
const queueRecord = JSON.parse(queueLine)
assert.equal(queueRecord.dossier.status, 'missing')
assert.equal(queueRecord.dossier.facetStatuses.morphology, 'not-assessed')
assert.equal(queueRecord.dossier.facetStatuses.ecology, 'not-assessed')

const previewBytesBefore = readFileSync(PREVIEW_PATH)
assert.equal(sha256(previewBytesBefore), source.audit.pagesPreviewManifestSha256, 'Shared App/Pages core manifest changed during this audit')

const target = source.audit.target
const colSource = {
  id: 'col',
  title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144',
  url: 'https://www.checklistbank.org/dataset/316115/taxon/' + target.colId,
  stableId: 'col:' + target.colId + '@COL26.8',
  version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
  publishedAt: '2026-08-20',
  accessedAt: source.checkedAt,
  locator: 'Accepted species usage 42SBZ; exact name, authorship, species rank, accepted status, sourceDatasetId 2144, and complete accepted parent chain resolved to root.',
  license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused',
  licenseAssessment: 'identity-only',
  scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
  rightsHolder: 'Catalogue of Life Foundation',
  licenseVersion: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
  attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 42SBZ. https://doi.org/10.48580/dgywk',
}
const articleSource = { ...source.source }
const record = {
  colId: target.colId,
  scientificName: target.scientificName,
  authorship: target.authorship,
  rank: target.rank,
  sourceDatasetId: target.sourceDatasetId,
  checkedAt: source.checkedAt,
  identity: {
    method: 'Exact pinned COL26.8 accepted usage 42SBZ verified for verbatim name, authorship, species rank, accepted status, and sourceDatasetId 2144; each accepted parent node was followed by ID through pinned hierarchy shards to the root.',
    scope: source.identityScope,
    sourceIds: ['col'],
  },
  classificationPath,
  lifeStatusScope: {
    wild: source.wildScope,
    domesticated: 'Domesticated populations were not assessed.',
    captive: 'No captive population was included in the cited field study.',
    fossil: 'No fossil population or paleontological evidence was assessed.',
  },
  sources: [colSource, articleSource],
  systematicSearch: {
    date: source.checkedAt,
    scope: 'Exact COL26.8 accepted identity and complete parent chain; one publisher-hosted primary field study with local ecology and adult body-mass results. This is not a comprehensive review across all seven facets.',
    method: 'Resolved the COL identity and every accepted parent by stable ID in the release-pinned search and hierarchy shards. Read the publisher version of record, methods, results, discussion, and article license. No image or separately credited third-party material was reused.',
    queryOrPath: 'Pinned COL26.8 dataset 316115 usage 42SBZ; Andriatsitohaina et al. 2020, DOI 10.1186/s12898-020-00337-z.',
    inclusionCriteria: 'Exact accepted COL species usage and an item-level licensed primary field study with explicit sample, site, dates, capture method, and reported outcomes.',
    exclusionCriteria: 'Name-only matches, secondary statements about broad range or conservation status, extrapolation beyond Mariarano, causal interpretation of observed correlations, and unassessed facets.',
    searcher: 'Evo source audit',
  },
  facets: {
    morphology: {
      status: 'partially-supported',
      claims: [structuredClone(source.claims.morphology)],
      gaps: structuredClone(source.facetGaps.morphology),
    },
    lifeHistory: { status: 'not-assessed', claims: [], gaps: ['No life-history search was performed; reproduction, development, survival, and behavior remain unassessed.'] },
    ecology: {
      status: 'partially-supported',
      claims: [structuredClone(source.claims.ecology)],
      gaps: structuredClone(source.facetGaps.ecology),
    },
    evolution: { status: 'not-assessed', claims: [], gaps: ['No phylogenetic or comparative evolutionary search was performed.'] },
    distribution: { status: 'not-assessed', claims: [], gaps: ['The study locality is not treated as a species range; no distribution search was performed.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil or paleontological search was performed; no fossil presence or absence is claimed.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['The article title uses “vulnerable,” but no current formal conservation assessment was verified; no current threat category is asserted.'] },
  },
  completeness: { status: 'incomplete', reasons: structuredClone(source.completenessReasons) },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}

assert.deepEqual(Object.keys(record.facets).sort(), [...FACETS].sort())
assert.equal(record.sources.filter(item => item.stableId === source.source.stableId).length, 1)
assert.equal(articleSource.licenseAssessment, 'item-level-verified')
assert.equal(articleSource.licenseVersion, 'CC BY 4.0')
assert.equal(record.completeness.status, 'incomplete')
assert.equal(record.expertReview.status, 'not-reviewed')
for (const facet of FACETS) {
  for (const claim of record.facets[facet].claims) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, 'Unbounded claim in ' + facet)
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => record.sources.some(item => item.id === id)), 'Missing source link in ' + facet)
  }
}

const rawBytes = Buffer.from(JSON.stringify(record) + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'Raw JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
const decodedBytes = brotliDecompressSync(compressedBytes)
assert.ok(decodedBytes.equals(rawBytes), 'Brotli decompression must exactly reproduce raw JSONL bytes')
assert.deepEqual(JSON.parse(decodedBytes.toString('utf8')), record)

const alreadyApplied = indexedById.has(target.colId)
if (alreadyApplied) {
  assert.deepEqual(indexedById.get(target.colId), record, 'Existing B60 dossier differs from its frozen source')
  assert.equal(index.recordCount, source.audit.indexedRecordCount + 1)
  assert.equal(stableIdOccurrences.length, 1)
  assert.equal(stableIdOccurrences[0].colId, target.colId)
  assert.ok(existsSync(RAW_PATH) && existsSync(SHARD_PATH) && existsSync(MANIFEST_PATH), 'B60 dossier artifacts are incomplete')
  assert.deepEqual(readFileSync(RAW_PATH), rawBytes)
  assert.deepEqual(readFileSync(SHARD_PATH), compressedBytes)
} else {
  assert.equal(indexedCount, source.audit.indexedRecordCount)
  assert.equal(stableIdOccurrences.length, source.audit.sourceStableIdOccurrencesBeforeUpdate)
  const updatedIndex = structuredClone(index)
  updatedIndex.recordCount += 1
  updatedIndex.shards.push({ path: relative(SHARD_PATH), recordCount: 1, decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes) })
  updatedIndex.shards.sort((a, b) => a.path.localeCompare(b.path))
  const manifest = {
    schemaVersion: 1,
    batchId: source.batchId,
    releaseAlias: source.releaseAlias,
    input: { path: relative(SOURCE_PATH), sha256: sha256(sourceBytes) },
    preparedAgainst: source.preparedAgainst,
    duplicateCheck: {
      indexedRecordCount: indexedCount,
      queueShardPath: source.audit.queueShardPath,
      queueRowSha256BeforeUpdate: source.audit.queueRowSha256BeforeUpdate,
      sourceStableId: articleSource.stableId,
      sourceStableIdOccurrencesBeforeUpdate: stableIdOccurrences.length,
      targetRecordCountBeforeUpdate: 0,
      matchedColIds: [],
      matchedNames: [],
      openPullRequests: source.audit.openPullRequests,
    },
    registry: source.registry,
    classificationPath: classificationPath.map(node => node.id),
    raw: { path: relative(RAW_PATH), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha256(rawBytes) },
    shard: {
      path: relative(SHARD_PATH), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decodedBytes.length,
      decodedSha256: sha256(decodedBytes), compressedBytes: compressedBytes.length, compressedSha256: sha256(compressedBytes),
      brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match',
    },
    previousDossierIndexSha256: sha256(readFileSync(INDEX_PATH)),
    dossierIndexRecordCountAfterUpdate: updatedIndex.recordCount,
    dossierIndexShardCountAfterUpdate: updatedIndex.shards.length,
    sources: [{ id: articleSource.id, stableId: articleSource.stableId, licenseAssessment: articleSource.licenseAssessment, licenseVersion: articleSource.licenseVersion, rightsHolder: articleSource.rightsHolder }],
    appAndPagesPreviewManifestChanged: false,
    appAndPagesPreviewManifestSha256: sha256(previewBytesBefore),
    appAndPagesPreviewRuntimePolicy: 'Selected core scope only; the full species-evidence queue and dossier archive are not included in native-core or github-pages-preview builds.',
    generator: 'scripts/build-primates-microcebus-ravelobensis-b60.mjs',
  }
  writeFileSync(RAW_PATH, rawBytes)
  writeFileSync(SHARD_PATH, compressedBytes)
  writeFileSync(INDEX_PATH, JSON.stringify(updatedIndex, null, 2) + '\n', 'utf8')
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
}
assert.equal(sha256(readFileSync(PREVIEW_PATH)), source.audit.pagesPreviewManifestSha256, 'B60 must not change the shared App/Pages core scope')
console.log(JSON.stringify({
  batchId: source.batchId,
  colId: record.colId,
  scientificName: record.scientificName,
  status: record.completeness.status,
  facetStatuses: Object.fromEntries(FACETS.map(facet => [facet, record.facets[facet].status])),
  indexedRecordCountBeforeUpdate: source.audit.indexedRecordCount,
  indexedRecordCountAfterUpdate: alreadyApplied ? index.recordCount : index.recordCount + 1,
  sourceSha256: sha256(sourceBytes),
  rawSha256: sha256(rawBytes),
  compressedSha256: sha256(compressedBytes),
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
