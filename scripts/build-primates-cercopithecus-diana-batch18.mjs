import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/primates-cercopithecus-diana-batch18-2026-09-24.json')
const rawPath = join(root, 'data/knowledge/raw-dossiers/primates-cercopithecus-diana-batch18-2026-09-24.jsonl')
const shardPath = join(root, 'data/knowledge/catalogue-dossiers-primates-cercopithecus-diana-batch18-2026-09-24.jsonl.br')
const manifestPath = join(root, 'data/knowledge/catalogue-dossiers-primates-cercopithecus-diana-batch18-2026-09-24.batch-manifest.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = 'e269f9da011d6e0a351e92e57752a929af7e94dfa4ff20db5d6ae8afbbecc0e7'
const EXPECTED_BASE_HEAD = '6a854e5cb8684d538f4ada02ac5eba97d48ba1c9'
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const jsonl = path => gunzipSync(readFileSync(join(registryRoot, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()

const sourceBytes = readFileSync(sourcePath)
assert.equal(sha(sourceBytes), EXPECTED_SOURCE_SHA256, 'Pinned source JSON changed; review its provenance before updating the digest')
const source = JSON.parse(sourceBytes)
assert.equal(source.registry.manifestSha256, sha(readFileSync(join(root, source.registry.path))))
assert.equal(source.duplicateAudit.baseHead, EXPECTED_BASE_HEAD)
const registry = JSON.parse(readFileSync(join(registryRoot, 'manifest.json')))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)

const t = source.record
assert.deepEqual([t.colId, t.scientificName, t.authorship, t.rank, t.sourceDatasetId], ['5XKC5', 'Cercopithecus diana (Linnaeus, 1758)', '(Linnaeus, 1758)', 'species', '2144'])
const usageKey = normalize(t.scientificName).slice(0, 2)
const usages = (registry.search.routes[usageKey] ?? []).flatMap(jsonl).filter(row => row.id === t.colId)
assert.equal(usages.length, 1, 'Expected exactly one pinned COL usage')
assert.deepEqual(['scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'].map(key => usages[0][key]), [t.scientificName, t.authorship, 'species', 'accepted', t.sourceDatasetId])

const classificationPath = []
let currentId = t.colId
while (currentId) {
  const route = sha(Buffer.from(currentId)).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(jsonl).filter(node => node.id === currentId)
  assert.equal(nodes.length, 1, `Expected exactly one hierarchy node ${currentId}`)
  assert.equal(nodes[0].status, 'accepted', `Hierarchy node ${currentId} is not accepted`)
  const { id, scientificName, authorship, rank, status, sourceDatasetId } = nodes[0]
  classificationPath.unshift({ id, scientificName, authorship, rank, status, sourceDatasetId })
  currentId = nodes[0].parentId
}
assert.equal(classificationPath[0].id, 'CS5HF')
assert.ok(classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
assert.equal(classificationPath.at(-1).id, t.colId)

const index = JSON.parse(readFileSync(join(root, 'data/knowledge/catalogue-dossier-shards.json')))
const seenIds = new Set(), seenNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(root, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, `Compressed hash mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, `Decoded hash mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, `Record count mismatch: ${shard.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    assert.ok(!seenIds.has(row.colId), `Existing dossier index contains duplicate COL ID ${row.colId}`)
    seenIds.add(row.colId)
    seenNames.add(normalize(row.scientificName))
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])
assert.ok(!seenIds.has(t.colId), `COL ID already indexed: ${t.colId}`)
assert.ok(!seenNames.has(normalize(t.scientificName)), 'Scientific name already indexed')

const e = t.evidence
assert.equal(e.licenseVersion, 'CC BY 4.0')
assert.equal(e.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
const sources = [
  {
    id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${t.colId}`, stableId: `col:${t.colId}@COL26.8`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115', publishedAt: '2026-08-20', accessedAt: t.checkedAt,
    locator: `Accepted usage ${t.colId}: verbatim name, authorship, species rank, accepted status and sourceDatasetId 2144; full accepted parent path resolved to registry root.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist text reused', licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.', rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5XKC5. https://doi.org/10.48580/dgywk',
  },
  {
    id: 'stephan2016', title: e.title, url: e.url, stableId: `doi:${e.doi}`,
    version: 'Royal Society Open Science 3(2):150639; version of record published 2016-02-24',
    publishedAt: e.publishedAt, accessedAt: e.accessedAt,
    locator: 'Abstract; Material and methods > Subjects and playback stimuli, paragraph beginning “We tested different groups of Diana monkeys”; Results > Call-related parameters, paragraph beginning “To eagle alarm calls, responses showed frequency transitions”; Discussion.',
    license: `${e.license} (${e.licenseVersion})`, licenseVersion: e.licenseVersion, licenseUrl: e.licenseUrl,
    rightsHolder: e.rightsHolder, licenseAssessment: 'item-level-verified', licenseAppliesTo: e.licenseAppliesTo,
    attribution: e.attribution, scope: 'Primary playback study of wild Diana monkey alarm-call responses at two West African populations. Claims are paraphrased; no figures, recordings, or third-party material are reused.',
    rightsEvidenceUrl: e.xmlUrl,
  },
]

const makeClaim = (claim, id) => ({ text: claim.text, sourceIds: [id], locator: claim.locator, placeTimeScope: claim.placeTimeScope, lifeStatus: claim.lifeStatus, translationStatus: 'untranslated', originalLanguage: 'en' })
const record = {
  colId: t.colId, scientificName: t.scientificName, authorship: t.authorship, rank: t.rank,
  sourceDatasetId: t.sourceDatasetId, checkedAt: t.checkedAt,
  identity: {
    method: 'Exact COL26.8 accepted usage 5XKC5 was verified in the release-pinned search registry for scientific name, authorship, species rank, accepted status, and sourceDatasetId 2144; every accepted parent node was followed through the release-pinned hierarchy registry to its root.',
    scope: 'The accepted COL26.8 nomenclatural usage is Cercopithecus diana (Linnaeus, 1758). The biological article studies the Diana monkey subspecies C. d. diana and its sampled wild populations; it is not used to establish COL identity or full species-concept circumscription.',
    sourceIds: ['col'],
  },
  classificationPath,
  lifeStatusScope: {
    wild: 'Biological observations refer to wild adult male Diana monkeys at Taï Forest, Côte d’Ivoire, and Tiwai Island, Sierra Leone.',
    domesticated: 'Domesticated or captive populations were not studied or inferred.',
    fossil: 'Fossil occurrence and geological age were not assessed.',
  },
  sources,
  systematicSearch: {
    date: t.checkedAt,
    scope: 'Exact COL26.8 identity and full parent chain; targeted review of one primary playback study with item-level license evidence.',
    method: 'Resolved the COL usage and each parent by stable ID in the release-pinned search and hierarchy registry. Reviewed the article abstract, methods, results, discussion, item-level XML license notice, and associated metadata. This is not a systematic search across the biological literature or facet-specific databases.',
    queryOrPath: 'Pinned COL26.8 dataset 316115 usage 5XKC5; Europe PMC PMCID PMC4785987; DOI 10.1098/rsos.150639.',
    inclusionCriteria: 'Exact accepted COL identity and statements explicitly reported for Diana monkey callers, receivers, study sites, and playback conditions in the cited primary paper.',
    exclusionCriteria: 'Name-only joins; claims about other species; range-wide extrapolation from two study populations; claims about unstudied behaviors or conditions; unassessed morphology, reproduction, phylogeny, fossil record, distribution, and conservation facets.',
    searcher: 'Evo source audit',
  },
  facets: {
    morphology: { status: 'not-assessed', claims: [], gaps: ['The selected playback study does not assess anatomical morphology or diagnostic characters.'] },
    lifeHistory: { status: 'partially-supported', claims: [makeClaim(t.claims.behavior, 'stephan2016')], gaps: ['The study addresses one adult social vocal behavior; development, reproduction, survival, and lifespan were not assessed.'] },
    ecology: { status: 'partially-supported', claims: [makeClaim(t.claims.interactions, 'stephan2016')], gaps: ['Two experimental study populations and selected leopard/eagle playback stimuli do not establish a complete interaction network, natural predation rates, range-wide ecology, or seasonality.'] },
    evolution: { status: 'not-assessed', claims: [], gaps: ['No phylogenetic placement, trait evolution, or divergence-time evidence was assessed.'] },
    distribution: { status: 'not-assessed', claims: [], gaps: ['Two study locations are not a range-wide inventory and do not establish native-range boundaries or change through time.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil or paleontological search was performed; no fossil-presence or fossil-absence conclusion is made.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current formal conservation assessment, status, trend, or population-risk analysis was reviewed.'] },
  },
  completeness: {
    status: 'incomplete',
    reasons: ['Only bounded behavioral and social-signaling findings from one two-population playback study were assessed; five facets remain not-assessed and the two assessed facets are partial.', 'The study concerns C. diana diana and does not by itself establish full biological circumscription for the COL accepted species usage.', 'No comprehensive multi-source search or independent expert review has been completed.'],
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}
assert.ok(record.facets.lifeHistory.claims[0].sourceIds.every(id => sources.find(item => item.id === id)?.licenseAssessment === 'item-level-verified'))
assert.ok(record.facets.ecology.claims[0].sourceIds.every(id => sources.find(item => item.id === id)?.licenseAssessment === 'item-level-verified'))

const raw = Buffer.from(JSON.stringify(record) + '\n', 'utf8')
assert.ok(!raw.includes(13))
const compressed = brotliCompressSync(raw, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.ok(decoded.equals(raw), 'Brotli round-trip must be byte-exact')
assert.deepEqual(JSON.parse(decoded.toString('utf8')), record)
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, raw)
writeFileSync(shardPath, compressed)
const rel = path => path.slice(root.length + 1).replaceAll('\\', '/')
const manifest = {
  schemaVersion: 1, batchId: source.batchId, releaseAlias: source.releaseAlias,
  input: { path: rel(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, matchedColIds: [], matchedNames: [] },
  raw: { path: rel(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: raw.length, sha256: sha(raw) },
  shard: { path: rel(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decoded.length, decodedSha256: sha(decoded), compressedBytes: compressed.length, compressedSha256: sha(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: source.registry.manifestSha256 },
  generator: 'scripts/build-primates-cercopithecus-diana-batch18.mjs',
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify({ colId: t.colId, scientificName: t.scientificName, indexedCount, parentChain: classificationPath.map(node => ({ id: node.id, scientificName: node.scientificName, rank: node.rank })), rawSha256: sha(raw), compressedSha256: sha(compressed), roundTrip: 'exact-byte-match' }, null, 2))
