import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/primates-nasalis-larvatus-batch17-2026-09-24.json')
const rawPath = join(root, 'data/knowledge/raw-dossiers/primates-nasalis-larvatus-batch17-2026-09-24.jsonl')
const shardPath = join(root, 'data/knowledge/catalogue-dossiers-primates-nasalis-larvatus-batch17-2026-09-24.jsonl.br')
const manifestPath = join(root, 'data/knowledge/catalogue-dossiers-primates-nasalis-larvatus-batch17-2026-09-24.batch-manifest.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = 'e2fe87a79977ce8a91be04e6f05b6678a191370ca11125dd36eea35666495358'
const sha = b => createHash('sha256').update(b).digest('hex')
const normalize = s => s.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const jsonl = p => gunzipSync(readFileSync(join(registryRoot, p))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)

const sourceBytes = readFileSync(sourcePath)
assert.equal(sha(sourceBytes), EXPECTED_SOURCE_SHA256, 'Source dossier JSON SHA-256 mismatch')
const source = JSON.parse(sourceBytes)
const registryBytes = readFileSync(join(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
assert.equal(sha(registryBytes), source.registry.manifestSha256)
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(source.duplicateAudit.baseHead, 'e9f817251cf9aa50716b033df79531dc08df3274')

const t = source.record
assert.equal(t.colId, '45QBH')
assert.equal(t.scientificName, 'Nasalis larvatus (van Wurmb, 1787)')
const key = normalize(t.scientificName).slice(0, 2)
const usage = (registry.search.routes[key] ?? []).flatMap(jsonl).filter(row => row.id === t.colId)
assert.equal(usage.length, 1)
assert.deepEqual(['scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'].map(k => usage[0][k]), [t.scientificName, t.authorship, 'species', 'accepted', t.sourceDatasetId])

const chain = []
let id = t.colId
while (id) {
  const route = sha(Buffer.from(id)).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(jsonl).filter(node => node.id === id)
  assert.equal(nodes.length, 1, 'Expected exactly one hierarchy node: ' + id)
  assert.equal(nodes[0].status, 'accepted', 'Parent is not accepted: ' + id)
  chain.unshift(nodes[0])
  id = nodes[0].parentId
}
const classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.equal(classificationPath.at(-1).id, t.colId)
assert.ok(classificationPath.some(n => n.id === '3W7' && n.rank === 'order' && n.scientificName === 'Primates Linnaeus, 1758'))

const index = JSON.parse(readFileSync(join(root, 'data/knowledge/catalogue-dossier-shards.json')))
const seenIds = new Set(), seenNames = new Set()
let count = 0
for (const s of index.shards) {
  const compressed = readFileSync(join(root, s.path))
  assert.equal(sha(compressed), s.compressedSha256)
  const bytes = brotliDecompressSync(compressed)
  assert.equal(sha(bytes), s.decodedSha256)
  const rows = bytes.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, s.recordCount)
  count += rows.length
  for (const row of rows) { seenIds.add(row.colId); seenNames.add(normalize(row.scientificName)) }
}
assert.equal(count, index.recordCount)
assert.equal(count, source.duplicateAudit.checkedIndexRecords)
assert.ok(!seenIds.has(t.colId), 'COL ID already indexed: ' + t.colId)
assert.ok(!seenNames.has(normalize(t.scientificName)), 'Scientific name already indexed')
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])

const e = t.evidence
assert.equal(e.license, 'Creative Commons Attribution License (CC BY 4.0)')
assert.equal(e.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
const sources = [
  { id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144',
    url: 'https://www.checklistbank.org/dataset/316115/taxon/' + t.colId, stableId: 'col:' + t.colId + '@COL26.8',
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115', publishedAt: '2026-08-20', accessedAt: t.checkedAt,
    locator: 'Accepted species usage 45QBH; verbatim scientific name and authorship, species rank, accepted status, sourceDatasetId 2144, and complete accepted parent chain resolved to root.',
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused', licenseAssessment: 'identity-only', scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.', attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 45QBH. https://doi.org/10.48580/dgywk' },
  { id: 'thiry2025', title: e.title, url: e.url, stableId: 'doi:' + e.doi, version: 'PLOS ONE 20(1):e0316752; version of record published 2025-01-03',
    publishedAt: e.publishedAt, accessedAt: e.accessedAt, locator: t.claim.locator, license: e.license, licenseVersion: 'CC BY 4.0',
    licenseUrl: e.licenseUrl, rightsHolder: e.rightsHolder, licenseAssessment: 'item-level-verified', licenseAppliesTo: e.licenseAppliesTo,
    attribution: e.attribution, scope: 'Primary dietary ecology study combining direct feeding observations and fecal DNA metabarcoding for multiple free-ranging proboscis monkey groups in the Lower Kinabatangan Wildlife Sanctuary, Sabah. Claim is paraphrased; figures and third-party materials are excluded.' },
]
const record = {
  colId: t.colId, scientificName: t.scientificName, authorship: t.authorship, rank: 'species', sourceDatasetId: t.sourceDatasetId, checkedAt: t.checkedAt,
  identity: { method: 'Exact pinned COL26.8 accepted usage 45QBH verified for verbatim name, authorship, species rank, accepted status, and sourceDatasetId 2144; every accepted parent node was followed in the pinned hierarchy registry to the root.',
    scope: 'COL26.8 accepted usage; the biological claim is limited to sampled wild groups and sites in Lower Kinabatangan Wildlife Sanctuary, Sabah.', sourceIds: ['col'] },
  classificationPath,
  lifeStatusScope: { wild: 'The primary study concerns free-ranging proboscis monkeys in riverine forests at Lower Kinabatangan Wildlife Sanctuary, Sabah.', domesticated: 'Domesticated populations were not assessed.', fossil: 'Fossil occurrence and geological age were not assessed.' },
  sources,
  systematicSearch: { date: t.checkedAt, scope: 'Exact COL26.8 accepted usage and parent chain; one primary dietary ecology study.',
    method: 'Resolved the COL identity and every parent by stable ID in the release-pinned search and hierarchy shards. Reviewed the cited article abstract, methods, results, limitations, and item-level license. No comprehensive search across other biological facets was performed.',
    queryOrPath: 'Pinned COL26.8 dataset 316115 usage 45QBH; Thiry et al. 2025, DOI 10.1371/journal.pone.0316752.',
    inclusionCriteria: 'Exact accepted COL identity and explicitly reported diet observations or metabarcoding results for Nasalis larvatus.',
    exclusionCriteria: 'Name-only joins, unbounded extrapolation beyond sampled groups and sites, and unassessed morphology, life history, evolution, distribution, fossils, or conservation status.',
    searcher: 'Evo source audit' },
  facets: {
    morphology: { status: 'not-assessed', claims: [], gaps: ['No taxon-specific morphology or diagnosis was assessed.'] },
    lifeHistory: { status: 'not-assessed', claims: [], gaps: ['No reproduction, development, lifespan, or demographic evidence was assessed.'] },
    ecology: { status: 'partially-supported', claims: [{ text: t.claim.text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['thiry2025'], locator: t.claim.locator, placeTimeScope: t.claim.scope, lifeStatus: t.claim.lifeStatus }],
      gaps: ['The article documents sampled diet composition and method-specific limits, not the species-wide diet, complete ecological interactions, or broad seasonal coverage.'] },
    evolution: { status: 'not-assessed', claims: [], gaps: ['No phylogenetic or comparative evolutionary evidence was assessed.'] },
    distribution: { status: 'not-assessed', claims: [], gaps: ['Study locations do not establish a complete current or historical species range.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil or paleontological search was performed; no fossil presence or absence is claimed.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current formal conservation assessment, trend, or threat status was reviewed.'] },
  },
  completeness: { status: 'incomplete', reasons: ['One bounded dietary ecology study was assessed; six facets remain not-assessed.', 'The findings concern sampled groups and sites in one sanctuary, with direct observation and metabarcoding limitations.', 'No independent expert review or comprehensive multi-source review has been completed.'] },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}
assert.equal(record.facets.ecology.claims[0].sourceIds.every(sourceId => sources.find(s => s.id === sourceId)?.licenseAssessment === 'item-level-verified'), true)

const raw = Buffer.from(JSON.stringify(record) + '\n', 'utf8')
assert.ok(!raw.includes(13))
const compressed = brotliCompressSync(raw, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.ok(decoded.equals(raw), 'Brotli round-trip must be byte-exact')
assert.deepEqual(JSON.parse(decoded.toString('utf8')), record)
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, raw)
writeFileSync(shardPath, compressed)
const rel = p => p.slice(root.length + 1).replaceAll('\\', '/')
const manifest = {
  schemaVersion: 1, batchId: source.batchId, releaseAlias: source.releaseAlias,
  input: { path: rel(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: count, matchedColIds: [], matchedNames: [] },
  raw: { path: rel(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: raw.length, sha256: sha(raw) },
  shard: { path: rel(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decoded.length, decodedSha256: sha(decoded), compressedBytes: compressed.length, compressedSha256: sha(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  generator: 'scripts/build-primates-nasalis-larvatus-batch17.mjs',
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify({ colId: t.colId, scientificName: t.scientificName, indexedCount: count, parentChain: classificationPath.map(n => ({ id: n.id, scientificName: n.scientificName, rank: n.rank })), rawSha256: sha(raw), compressedSha256: sha(compressed), roundTrip: 'exact-byte-match' }, null, 2))
