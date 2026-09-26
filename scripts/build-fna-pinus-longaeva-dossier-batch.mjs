import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/fna-pinus-longaeva-dossier-batch-2026-09-27.json'
const OUTPUT = 'data/knowledge/fna-pinus-longaeva-dossier-batch-2026-09-27.batch-manifest.json'
const NEW_RAW = 'data/knowledge/raw-dossiers/fna-pinus-longaeva-dossier-batch-2026-09-27.jsonl'
const NEW_SHARD = 'data/knowledge/catalogue-dossiers-fna-pinus-longaeva-dossier-batch-2026-09-27.jsonl.br'
const FNA_DATA = 'data/sources/fna-descriptions.jsonl.br'
const FNA_DATA_SHA256 = 'f6000a5956207c9e300d1009c791951b83e865661e9edeba4aba4c66ff3dcbf1'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const EXPECTED_INPUT_SHA256 = '00e68131fdeac87cb6704f5296c1516bdecd086811011ced2948c51fd57f9273'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const registryJsonl = path => gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)

function acceptedClassification(registry, record) {
  const route = normalize(record.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryJsonl).filter(row => row.id === record.colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 usage for ${record.colId}`)
  const usage = matches[0]
  for (const key of ['scientificName', 'authorship', 'rank', 'sourceDatasetId']) assert.equal(String(usage[key]), String(record[key]), `Pinned COL usage ${key} mismatch for ${record.colId}`)
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

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned FNA batch input SHA-256 mismatch')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'fna-pinus-longaeva-dossier-batch-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.deepEqual(input.baseAudit.openPullRequests, [])
assert.equal(input.newRecords.length, 1)

const registryBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
const registryManifestSha256 = sha256(registryBytes)
assert.equal(registryManifestSha256, input.baseAudit.registryManifestSha256)
const registry = JSON.parse(registryBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.checklistBankDatasetKey, 316115)

const indexPath = join(ROOT, 'data/knowledge/catalogue-dossier-shards.json')
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.releaseAlias, input.releaseAlias)
const existingShard = index.shards.find(shard => shard.path === NEW_SHARD)
assert.equal(index.shards.length, input.baseAudit.indexedShardCount + Number(Boolean(existingShard)), 'Unexpected dossier shard base count')
assert.equal(index.recordCount, input.baseAudit.indexedRecordCount + Number(Boolean(existingShard)), 'Unexpected dossier index base count')
const dossiers = readCatalogueDossiers()
assert.equal(dossiers.records.length, index.recordCount)
const indexedById = new Map(dossiers.records.map(record => [record.colId, record]))
const indexedNames = new Set(dossiers.records.map(record => normalize(record.scientificName)))

const item = input.newRecords[0]
assert.equal(item.colId, '77L64')
assert.equal(item.scientificName, 'Pinus longaeva D.K.Bailey')
assert.equal(item.sourceDatasetId, '2004')
assert.equal(item.rank, 'species')
assert.ok(FACETS.includes(item.facet))
const source = item.source
for (const key of ['id', 'title', 'url', 'stableId', 'version', 'publishedAt', 'license', 'rightsHolder', 'licenseEvidenceUrl', 'licenseEvidenceLocator', 'licenseAppliesTo', 'attribution', 'licenseVersion', 'licenseUrl', 'licenseAssessment', 'scope']) assert.ok(source[key], `Missing item-level source metadata ${key}`)
assert.equal(source.licenseAssessment, 'item-level-verified')
assert.equal(source.licenseVersion, 'CC BY 4.0')
assert.equal(item.claim.locator.includes('row 9926'), true)
assert.ok(item.claim.text && item.claim.textZh && item.claim.placeTimeScope && item.claim.lifeStatus)
assert.deepEqual(Object.keys(item.unassessedFacetGaps).sort(), FACETS.filter(facet => facet !== item.facet).sort())

const fnaCompressed = readFileSync(join(ROOT, FNA_DATA))
assert.equal(sha256(fnaCompressed), FNA_DATA_SHA256, 'Pinned FNA archive import changed')
const fnaRows = brotliDecompressSync(fnaCompressed).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
const fnaRecord = fnaRows.find(record => record.colId === item.colId)
assert.ok(fnaRecord, `FNA archive has no exact COL ID ${item.colId}`)
assert.equal(fnaRecord.wfoId, source.wfoId)
const fnaDescription = fnaRecord.descriptions.find(description => description.rowNumber === source.fnaRowNumber && description.sourceId === source.fnaSourceId)
assert.ok(fnaDescription, 'Pinned FNA source row is absent')
assert.equal(fnaDescription.license, source.itemDeclaredLicenseUrl)
assert.equal(fnaDescription.rightsHolder, source.rightsHolder)
assert.equal(fnaDescription.citations[0], source.sourceCitation)
for (const sourceText of ['Trees to 16m', 'trunk to 2m diam.', 'mostly 5 per fascicle', '1.5--3.5cm', '6--9.5cm']) assert.ok(fnaDescription.text.includes(sourceText), `FNA source excerpt no longer supports ${sourceText}`)

const colSource = {
  id: 'col',
  title: `Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset ${item.sourceDatasetId}`,
  url: `https://www.checklistbank.org/dataset/316115/taxon/${item.colId}`,
  version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
  stableId: `col:${item.colId}@COL26.8`,
  publishedAt: '2026-08-20',
  accessedAt: input.checkedAt,
  locator: `Accepted species usage ${item.colId}; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.`,
  license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
  licenseAssessment: 'identity-only',
  scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
  rightsHolder: 'Catalogue of Life Foundation',
  licenseVersion: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
  attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${item.colId}. https://doi.org/10.48580/dgywk.`,
}
const evidenceSource = { ...source, accessedAt: input.checkedAt }
const claim = {
  text: item.claim.text,
  textZh: item.claim.textZh,
  translationStatus: 'translated',
  originalLanguage: 'en',
  sourceIds: [source.id],
  locator: item.claim.locator,
  placeTimeScope: item.claim.placeTimeScope,
  lifeStatus: item.claim.lifeStatus,
}
const facets = Object.fromEntries(FACETS.map(facet => [facet, facet === item.facet
  ? { status: 'partially-supported', claims: [claim], gaps: [item.facetGap] }
  : { status: 'not-assessed', claims: [], gaps: [item.unassessedFacetGaps[facet]] }]))
const dossier = {
  colId: item.colId,
  scientificName: item.scientificName,
  authorship: item.authorship,
  rank: item.rank,
  sourceDatasetId: item.sourceDatasetId,
  checkedAt: input.checkedAt,
  classificationPath: [],
  identity: {
    method: 'Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.',
    scope: item.identityScope,
    sourceIds: ['col'],
  },
  lifeStatusScope: item.lifeStatusScope,
  sources: [colSource, evidenceSource],
  systematicSearch: { ...item.search, date: input.checkedAt, searcher: 'Evo source audit' },
  facets,
  completeness: {
    status: 'incomplete',
    reasons: [
      'One regional flora account supports a bounded claim in morphology only.',
      'The other six scientific facets remain explicitly not assessed.',
      'No independent external expert review has been completed.',
    ],
  },
  expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
}
acceptedClassification(registry, dossier)
assert.equal(dossier.classificationPath.at(-1).id, item.colId)
assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.facets.morphology.claims[0].sourceIds[0], source.id)

const prior = indexedById.get(item.colId)
assert.equal(Boolean(prior), Boolean(existingShard), 'Target dossier ID exists outside the batch shard or is absent from its shard')
assert.ok(existingShard || !indexedNames.has(normalize(item.scientificName)), `Scientific name already indexed: ${item.scientificName}`)
if (prior) assert.deepEqual(prior, dossier, 'Existing FNA dossier differs from deterministic batch output')

const raw = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(raw), 'Brotli round-trip mismatch')
if (existingShard) {
  const storedCompressed = readFileSync(join(ROOT, NEW_SHARD))
  assert.equal(sha256(storedCompressed), existingShard.compressedSha256)
  assert.ok(brotliDecompressSync(storedCompressed).equals(raw), 'Existing FNA dossier shard differs from deterministic batch output')
} else {
  mkdirSync(dirname(join(ROOT, NEW_RAW)), { recursive: true })
  writeFileSync(join(ROOT, NEW_RAW), raw)
  writeFileSync(join(ROOT, NEW_SHARD), compressed)
  index.shards.push({ path: NEW_SHARD, recordCount: 1, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) })
  index.recordCount += 1
  writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8')
}

const storedRaw = readFileSync(join(ROOT, NEW_RAW))
const storedCompressed = readFileSync(join(ROOT, NEW_SHARD))
const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  baseAudit: input.baseAudit,
  updatedRecords: [],
  newRecords: [{ colId: dossier.colId, scientificName: dossier.scientificName }],
  indexedRecordCount: input.baseAudit.indexedRecordCount + 1,
  newShard: {
    path: NEW_SHARD,
    rawPath: NEW_RAW,
    encoding: 'brotli-jsonl',
    recordCount: 1,
    decodedBytes: storedRaw.length,
    decodedSha256: sha256(storedRaw),
    compressedBytes: storedCompressed.length,
    compressedSha256: sha256(storedCompressed),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: `${REGISTRY_ROOT}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: registryManifestSha256 },
  generator: 'scripts/build-fna-pinus-longaeva-dossier-batch.mjs',
}
writeFileSync(join(ROOT, OUTPUT), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ batchId: input.batchId, colId: dossier.colId, scientificName: dossier.scientificName, indexedRecordsAfter: index.recordCount, facets: Object.fromEntries(FACETS.map(facet => [facet, dossier.facets[facet].status])), inputSha256: sha256(inputBytes), rawSha256: sha256(storedRaw), compressedSha256: sha256(storedCompressed), rebuild: existingShard ? 'verified-idempotent-rebuild' : 'applied' }, null, 2))
