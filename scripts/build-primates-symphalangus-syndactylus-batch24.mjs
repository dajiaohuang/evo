import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/primates-symphalangus-syndactylus-batch24-2026-09-24.json')
const rawPath = join(root, 'data/knowledge/raw-dossiers/primates-symphalangus-syndactylus-batch24-2026-09-24.jsonl')
const shardPath = join(root, 'data/knowledge/catalogue-dossiers-primates-symphalangus-syndactylus-batch24-2026-09-24.jsonl.br')
const batchManifestPath = join(root, 'data/knowledge/catalogue-dossiers-primates-symphalangus-syndactylus-batch24-2026-09-24.batch-manifest.json')
const indexPath = join(root, 'data/knowledge/catalogue-dossier-shards.json')
const relative = absolutePath => absolutePath.slice(root.length + 1).replaceAll('\\', '/')
const shardRelativePath = relative(shardPath)
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const EXPECTED_SOURCE_SHA256 = '1082678887201da5aca0110b59ad516e520bc17c5b89f4bd7e7ac1d4f363d0b0'
const EXPECTED_REGISTRY_SHA256 = '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151'
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const jsonl = relativePath => gunzipSync(readFileSync(join(registryRoot, relativePath))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)

const sourceBytes = readFileSync(sourcePath)
assert.equal(sha(sourceBytes), EXPECTED_SOURCE_SHA256, 'Pinned source JSON SHA-256 mismatch')
const source = JSON.parse(sourceBytes)
const registryBytes = readFileSync(join(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
assert.equal(sha(registryBytes), EXPECTED_REGISTRY_SHA256, 'Pinned COL26.8 manifest SHA-256 mismatch')
assert.equal(source.registry.manifestSha256, sha(registryBytes))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(source.duplicateAudit.baseHead, 'edbc14fb9bf7f763e0234687229075017366aef5')

const target = source.record
assert.equal(target.colId, '7B78J')
assert.equal(target.scientificName, 'Symphalangus syndactylus (Raffles, 1821)')
const usageRoute = normalize(target.scientificName).slice(0, 2)
const usages = (registry.search.routes[usageRoute] ?? []).flatMap(jsonl).filter(row => row.id === target.colId)
assert.equal(usages.length, 1, 'Expected exactly one pinned COL usage')
assert.deepEqual(
  ['scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'].map(key => usages[0][key]),
  [target.scientificName, target.authorship, 'species', 'accepted', target.sourceDatasetId],
)

const hierarchy = []
let currentId = target.colId
while (currentId) {
  const route = sha(Buffer.from(currentId)).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(jsonl).filter(node => node.id === currentId)
  assert.equal(nodes.length, 1, 'Expected exactly one hierarchy node: ' + currentId)
  assert.equal(nodes[0].status, 'accepted', 'Hierarchy contains an unaccepted parent')
  hierarchy.unshift(nodes[0])
  currentId = nodes[0].parentId
}
const classificationPath = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.equal(classificationPath.at(-1).id, target.colId)
assert.ok(classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))

const index = JSON.parse(readFileSync(indexPath))
assert.equal(index.releaseAlias, 'COL26.8')
const existingOwnShards = index.shards.filter(shard => shard.path === shardRelativePath)
assert.ok(existingOwnShards.length <= 1, 'Own shard path is indexed more than once')
if (existingOwnShards.length === 1) {
  const existing = existingOwnShards[0]
  const compressed = readFileSync(join(root, existing.path))
  assert.equal(sha(compressed), existing.compressedSha256, 'Existing own shard compressed hash mismatch')
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), existing.decodedSha256, 'Existing own shard decoded hash mismatch')
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, 1, 'Existing own shard must contain exactly one record')
  assert.equal(rows[0].colId, target.colId, 'Existing own shard has a different COL usage')
  assert.equal(normalize(rows[0].scientificName), normalize(target.scientificName), 'Existing own shard has a different scientific name')
  index.shards = index.shards.filter(shard => shard.path !== shardRelativePath)
  index.recordCount -= rows.length
}
const indexedIds = new Set()
const indexedNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(join(root, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, 'Existing shard compressed hash mismatch: ' + shard.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, 'Existing shard decoded hash mismatch: ' + shard.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, shard.recordCount, 'Existing shard row count mismatch: ' + shard.path)
  indexedCount += rows.length
  for (const row of rows) {
    indexedIds.add(row.colId)
    indexedNames.add(normalize(row.scientificName))
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)
assert.ok(!indexedIds.has(target.colId), 'COL usage is already indexed')
assert.ok(!indexedNames.has(normalize(target.scientificName)), 'Scientific name is already indexed')
assert.deepEqual(source.duplicateAudit.matchedColIds, [])
assert.deepEqual(source.duplicateAudit.matchedNames, [])

const evidence = target.evidence
assert.equal(evidence.license, 'Creative Commons Attribution 4.0 International (CC BY 4.0)')
assert.equal(evidence.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
const sources = [
  {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144',
    url: 'https://www.checklistbank.org/dataset/316115/taxon/' + target.colId,
    stableId: 'col:' + target.colId + '@COL26.8',
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    publishedAt: '2026-08-20',
    accessedAt: target.checkedAt,
    locator: 'Accepted species usage ' + target.colId + '; exact name, authorship, species rank, accepted status, sourceDatasetId 2144; complete accepted parent chain resolved to the root.',
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 7B78J. https://doi.org/10.48580/dgywk',
  },
  {
    id: 'sariyati2024siamangmtDNA',
    title: evidence.title,
    url: evidence.url,
    stableId: 'doi:' + evidence.doi,
    version: 'Biodiversity Data Journal 12:e120314, published 2024-04-25',
    publishedAt: evidence.publishedAt,
    accessedAt: evidence.accessedAt,
    locator: target.claim.locator,
    license: evidence.license,
    licenseVersion: 'CC BY 4.0',
    licenseUrl: evidence.licenseUrl,
    rightsHolder: evidence.rightsHolder,
    licenseAssessment: 'item-level-verified',
    rightsEvidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11069032/',
    rightsEvidenceLocator: 'The article record states that the open-access article is distributed under the Creative Commons Attribution License (CC BY 4.0).',
    licenseAppliesTo: evidence.licenseAppliesTo,
    attribution: evidence.attribution,
    scope: 'Single-marker mitochondrial phylogeny using newly collected Peninsular Malaysian siamang faecal samples and published GenBank sequences. Claims are paraphrased; no figures, tables, images, or sequence data are reproduced.',
  },
]

const claim = {
  text: target.claim.text,
  originalLanguage: 'en',
  translationStatus: 'untranslated',
  sourceIds: ['sariyati2024siamangmtDNA'],
  locator: target.claim.locator,
  placeTimeScope: target.claim.scope,
  lifeStatus: target.claim.lifeStatus,
}
const record = {
  colId: target.colId,
  scientificName: target.scientificName,
  authorship: target.authorship,
  rank: 'species',
  sourceDatasetId: target.sourceDatasetId,
  checkedAt: target.checkedAt,
  identity: {
    method: 'Exact pinned COL26.8 accepted usage 7B78J verified for verbatim name, authorship, species rank, accepted status and sourceDatasetId 2144; every accepted parent node was followed in the pinned hierarchy registry to the root.',
    scope: 'COL26.8 accepted species usage 7B78J only. The biological evidence concerns one mitochondrial-marker study and its sampled sequences; it does not validate the article authors’ subspecies classification as a complete taxonomic consensus.',
    sourceIds: ['col'],
  },
  classificationPath,
  lifeStatusScope: {
    wild: 'The article describes collection from Peninsular Malaysian populations but also acknowledges institutional sample contributions; specimen-by-specimen captive or wild provenance is not fully resolved here.',
    domesticated: 'Domestication was not examined.',
    fossil: 'Fossil evidence was not examined.',
  },
  sources,
  systematicSearch: {
    date: target.checkedAt,
    scope: 'Exact COL26.8 accepted usage, complete accepted parent chain, current indexed dossier shards and one molecular-phylogeny primary article.',
    method: 'Resolved the taxon by stable ID in the pinned COL26.8 search and hierarchy shards. Audited all current compressed dossier shards and their hashes for duplicate IDs and normalized names. Reviewed the article abstract, sample methods, data resources, regional clade results, conclusions, and item-level license. No comprehensive search across other biological facets was performed.',
    queryOrPath: 'Pinned COL26.8 dataset 316115 usage 7B78J; Sariyati et al. 2024, DOI 10.3897/BDJ.12.e120314.',
    inclusionCriteria: 'Exact accepted COL identity and primary article results directly concerning Symphalangus syndactylus.',
    exclusionCriteria: 'Name-only matches, unsupported range-wide or genome-wide generalization, converting one mitochondrial genealogy into a species-level taxonomic revision, and unassessed morphology, life history, ecology, fossils, or current conservation status.',
    searcher: 'Evo source audit',
  },
  facets: {
    morphology: { status: 'not-assessed', claims: [], gaps: ['No taxon-specific morphology or diagnosis was assessed.'] },
    lifeHistory: { status: 'not-assessed', claims: [], gaps: ['No reproductive, developmental, lifespan, or behavioral evidence was assessed.'] },
    ecology: { status: 'not-assessed', claims: [], gaps: ['No systematic habitat, diet, or species-interaction evidence was assessed.'] },
    evolution: {
      status: 'partially-supported',
      claims: [claim],
      gaps: ['The evidence is a single mitochondrial D-loop marker study with limited regional sampling; nuclear-genome evidence, broader population coverage, and independent taxonomic review remain unassessed.'],
    },
    distribution: { status: 'not-assessed', claims: [], gaps: ['The sequence study does not establish a complete modern distribution or current site occupancy.'] },
    fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil or paleontological search was performed; no fossil presence or absence is claimed.'] },
    conservation: { status: 'not-assessed', claims: [], gaps: ['No current formal conservation assessment, population trend, or threat category was verified.'] },
  },
  completeness: {
    status: 'incomplete',
    reasons: [
      'One regional mitochondrial-marker study supports only a bounded evolutionary claim.',
      'Six facets remain not assessed; the evolutionary claim is not genome-wide, range-wide, or independently reviewed.',
      'A systematic multi-source search and expert review are incomplete.',
    ],
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}
assert.ok(record.facets.evolution.claims[0].sourceIds.every(sourceId => sources.find(item => item.id === sourceId)?.licenseAssessment === 'item-level-verified'))

const rawBytes = Buffer.from(JSON.stringify(record) + '\n', 'utf8')
assert.ok(!rawBytes.includes(13), 'Raw dossier JSONL must use LF line endings')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.ok(decoded.equals(rawBytes), 'Brotli round-trip must be byte-exact')
assert.deepEqual(JSON.parse(decoded.toString('utf8')), record)
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)

const batchManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, matchedColIds: [], matchedNames: [] },
  raw: { path: relative(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha(rawBytes) },
  shard: { path: relative(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decoded.length, decodedSha256: sha(decoded), compressedBytes: compressed.length, compressedSha256: sha(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: source.registry.path, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  generator: 'scripts/build-primates-symphalangus-syndactylus-batch24.mjs',
}
writeFileSync(batchManifestPath, JSON.stringify(batchManifest, null, 2) + '\n')

assert.ok(!index.shards.some(shard => shard.path === relative(shardPath)), 'New shard path already exists')
index.shards.push({ path: relative(shardPath), recordCount: 1, decodedSha256: sha(decoded), compressedSha256: sha(compressed) })
index.recordCount = indexedCount + 1
writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n')
console.log(JSON.stringify({
  colId: target.colId,
  scientificName: target.scientificName,
  previousIndexedRecords: indexedCount,
  updatedIndexedRecords: index.recordCount,
  parentChain: classificationPath.map(node => ({ id: node.id, scientificName: node.scientificName, rank: node.rank })),
  rawSha256: sha(rawBytes),
  compressedSha256: sha(compressed),
  roundTrip: 'exact-byte-match',
}, null, 2))
