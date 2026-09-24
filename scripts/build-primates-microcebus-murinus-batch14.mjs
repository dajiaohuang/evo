import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/primates-microcebus-murinus-batch14-2026-09-24.json')
const rawPath = join(root, 'data/knowledge/raw-dossiers/primates-microcebus-murinus-batch14-2026-09-24.jsonl')
const shardPath = join(root, 'data/knowledge/catalogue-dossiers-primates-microcebus-murinus-batch14-2026-09-24.jsonl.br')
const manifestPath = join(root, 'data/knowledge/catalogue-dossiers-primates-microcebus-murinus-batch14-2026-09-24.batch-manifest.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = '257659827012804c8d7d01b8af04c1088cf3cba885774b9a4616eb5ba9ddd92b'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = s => s.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const jsonl = p => gunzipSync(readFileSync(join(registryRoot, p))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const rel = p => p.slice(root.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(sourcePath)
assert.equal(sha(sourceBytes), EXPECTED_SOURCE_SHA256, 'Source dossier JSON SHA-256 mismatch')
const source = JSON.parse(sourceBytes)
const t = source.record
assert.equal(source.batchId, 'primates-microcebus-murinus-batch14-2026-09-24')
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(t.colId, '42SBX')
assert.equal(t.scientificName, 'Microcebus murinus (J. F. Miller, 1777)')
assert.equal(t.sourceDatasetId, '2144')
const registryBytes = readFileSync(join(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
assert.equal(sha(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL registry hash mismatch')
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(t.registry.manifestSha256, sha(registryBytes))
assert.equal(t.duplicateAudit.baseHead, 'e0f5dee96fe4652c1af9dd854b8fe92c62f4379a')

const routeKey = normalize(t.scientificName).slice(0, 2)
const usages = (registry.search.routes[routeKey] ?? []).flatMap(jsonl).filter(row => row.id === t.colId)
assert.equal(usages.length, 1, 'Expected exactly one accepted COL search record')
assert.deepEqual(['scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'].map(k => usages[0][k]), [t.scientificName, t.authorship, 'species', 'accepted', t.sourceDatasetId])

const chain = []
let id = t.colId
while (id) {
  const route = sha(Buffer.from(id)).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(jsonl).filter(node => node.id === id)
  assert.equal(nodes.length, 1, `Expected exactly one pinned hierarchy node: ${id}`)
  assert.equal(nodes[0].status, 'accepted', `Parent is not accepted: ${id}`)
  chain.unshift(nodes[0])
  id = nodes[0].parentId
}
const classificationPath = chain.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.equal(classificationPath.at(-1).id, t.colId)
assert.ok(classificationPath.some(n => n.id === '3W7' && n.rank === 'order' && n.scientificName === 'Primates Linnaeus, 1758'))

const index = JSON.parse(readFileSync(join(root, 'data/knowledge/catalogue-dossier-shards.json')))
const seenIds = new Set(), seenNames = new Set()
let count = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(root, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, `Compressed shard checksum mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, `Decoded shard checksum mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, `Shard count mismatch: ${shard.path}`)
  count += rows.length
  for (const row of rows) {
    seenIds.add(row.colId)
    seenNames.add(normalize(row.scientificName))
  }
}
assert.equal(count, index.recordCount)
assert.equal(count, t.duplicateAudit.checkedIndexRecords)
assert.equal(count, 6922)
assert.ok(!seenIds.has(t.colId), `COL ID already indexed: ${t.colId}`)
assert.ok(!seenNames.has(normalize(t.scientificName)), 'Scientific name already indexed')
assert.deepEqual(t.duplicateAudit.matchedColIds, [])
assert.deepEqual(t.duplicateAudit.matchedNames, [])

const evidence = t.evidence
assert.equal(evidence.license, 'Creative Commons Attribution 4.0 International (CC BY 4.0)')
assert.equal(evidence.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
const sources = [
  {
    id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${t.colId}`, stableId: `col:${t.colId}@COL26.8`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115', publishedAt: '2026-08-20', accessedAt: source.checkedAt,
    locator: `Accepted species usage ${t.colId}; exact name, authorship, species rank, accepted status, sourceDatasetId 2144; complete accepted parent chain resolved to root.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused', licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.', rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${t.colId}. https://doi.org/10.48580/dgywk`,
  },
  {
    id: 'royo2019', title: evidence.title, url: evidence.url, stableId: `doi:${evidence.doi}`,
    version: 'Frontiers in Neuroanatomy 13:87, published 2019-09-24', publishedAt: evidence.publishedAt,
    accessedAt: evidence.accessedAt, locator: t.claim.locator,
    license: evidence.license, licenseVersion: 'CC BY 4.0', licenseUrl: evidence.licenseUrl,
    rightsHolder: evidence.rightsHolder, licenseAssessment: 'item-level-verified',
    licenseAppliesTo: evidence.licenseAppliesTo,
    attribution: 'Royo J, Aujard F, Pifferi F (2019). Front. Neuroanat. 13:87. doi:10.3389/fnana.2019.00087.',
    scope: 'Original research article on laboratory EEG observations in six captive male Microcebus murinus: four animals remained at 24–26°C and two were exposed to 10°C; the low-temperature findings apply to the n=2 subset. Third-party content is excluded.',
  },
]
const record = {
  colId: t.colId, scientificName: t.scientificName, authorship: t.authorship,
  rank: 'species', sourceDatasetId: t.sourceDatasetId, checkedAt: source.checkedAt,
  identity: {
    method: 'Exact pinned COL26.8 accepted usage 42SBX verified for verbatim name, authorship, species rank, accepted status, and sourceDatasetId 2144; each accepted parent node was followed by ID through the pinned hierarchy registry to the root.',
    scope: 'COL26.8 accepted nomenclatural usage; biological evidence concerns the captive study sample and protocol stated in each claim.',
    sourceIds: ['col'],
  },
  classificationPath,
  lifeStatusScope: {
    wild: 'Wild populations were not assessed by the cited experiment; no wild behavioral conclusion is drawn.',
    domesticated: 'Domesticated populations were not assessed.',
    captive: 'The cited biological evidence concerns six captive laboratory-born and laboratory-raised males: n=4 maintained at 24–26°C and n=2 exposed to 10°C; low-temperature sleep and <21°C EEG-isoelectric findings apply only to the n=2 subset.',
    fossil: 'No fossil occurrence claims were assessed.',
  },
  sources,
  systematicSearch: {
    date: source.checkedAt, scope: 'Exact COL26.8 accepted usage and complete accepted parent chain; one primary laboratory sleep and torpor study.',
    method: 'Resolved the COL identity and each parent by stable ID in release-pinned search and hierarchy shards. Read the primary study methods, abstract, results, limitations, and article license. No broad or multi-facet literature search was performed.',
    queryOrPath: 'Pinned COL26.8 dataset 316115 usage 42SBX; Royo et al. 2019, DOI 10.3389/fnana.2019.00087.',
    inclusionCriteria: 'Exact accepted COL identity and a primary item-level licensed study with explicit experimental sample, conditions, and species-specific reported outcomes.',
    exclusionCriteria: 'Name-only matches, inference from genus-level summaries, generalization from captive outcomes to wild populations, and unassessed facets.',
    searcher: 'Evo source audit',
  },
  facets: {
    morphology: { status: 'not-assessed', claims: [], gaps: ['No taxon-specific morphology or diagnosis was assessed.'] },
    lifeHistory: {
      status: 'partially-supported',
      claims: [{ text: t.claim.text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds: ['royo2019'], locator: t.claim.locator, placeTimeScope: t.claim.scope, lifeStatus: t.claim.lifeStatus }],
      gaps: ['Evidence comes from a small captive male sample under a specific laboratory photoperiod and temperature protocol; other life-history and behavioral facets were not assessed.'],
    },
    ecology: { status: 'not-assessed', claims: [], gaps: ['No systematic wild habitat, diet, or species-interaction evidence was assessed.'] },
    evolution: { status: 'not-assessed', claims: [], gaps: ['No phylogenetic or comparative evolutionary evidence was assessed.'] },
    distribution: { status: 'not-assessed', claims: [], gaps: ['No distribution search was performed; no range or locality claim is asserted.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil or paleontological search was performed; no fossil presence or absence is claimed.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current formal conservation assessment was verified; no current threat category is asserted.'] },
  },
  completeness: {
    status: 'incomplete',
    reasons: ['One primary laboratory study supports only a narrowly scoped sleep and torpor claim.', 'Six facets remain not assessed and life-history evidence is limited to six captive males under a specific protocol.', 'Independent expert review and comprehensive multi-source review are incomplete.'],
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}
assert.ok(record.facets.lifeHistory.claims[0].sourceIds.every(sourceId => sources.find(s => s.id === sourceId)?.licenseAssessment === 'item-level-verified'))

const raw = Buffer.from(JSON.stringify(record) + '\n', 'utf8')
assert.ok(!raw.includes(13))
const compressed = brotliCompressSync(raw, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.ok(decoded.equals(raw), 'Brotli round-trip must be byte-exact')
assert.deepEqual(JSON.parse(decoded.toString('utf8')), record)
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, raw)
writeFileSync(shardPath, compressed)
const manifest = {
  schemaVersion: 1, batchId: source.batchId, releaseAlias: source.releaseAlias,
  input: { path: rel(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: t.duplicateAudit.baseHead, indexedRecordCount: count, matchedColIds: [], matchedNames: [] },
  raw: { path: rel(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: raw.length, sha256: sha(raw) },
  shard: {
    path: rel(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decoded.length,
    decodedSha256: sha(decoded), compressedBytes: compressed.length, compressedSha256: sha(compressed),
    brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match',
  },
  registry: { ...t.registry },
  generator: 'scripts/build-primates-microcebus-murinus-batch14.mjs',
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify({ colId: t.colId, scientificName: t.scientificName, indexedCount: count, classificationPath, rawSha256: sha(raw), compressedSha256: sha(compressed), roundTrip: 'exact-byte-match' }, null, 2))
