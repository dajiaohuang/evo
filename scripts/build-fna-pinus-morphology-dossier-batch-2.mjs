import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/fna-pinus-morphology-dossier-batch-2-2026-09-27.json'
const OUTPUT = 'data/knowledge/fna-pinus-morphology-dossier-batch-2-2026-09-27.batch-manifest.json'
const NEW_RAW = 'data/knowledge/raw-dossiers/fna-pinus-morphology-dossier-batch-2-2026-09-27.jsonl'
const NEW_SHARD = 'data/knowledge/catalogue-dossiers-fna-pinus-morphology-dossier-batch-2-2026-09-27.jsonl.br'
const FNA_DATA = 'data/sources/fna-descriptions.jsonl.br'
const FNA_DATA_SHA256 = 'f6000a5956207c9e300d1009c791951b83e865661e9edeba4aba4c66ff3dcbf1'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const EXPECTED_INPUT_SHA256 = 'b0bc3d1ec67a3e073f064c92657be17033d34436655a614b298f2f00cdb3e3d6'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const registryRowsCache = new Map()
const registryJsonl = path => {
  if (!registryRowsCache.has(path)) registryRowsCache.set(path, gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
  return registryRowsCache.get(path)
}

function acceptedClassification(registry, record) {
  const route = normalize(record.scientificName).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryJsonl).filter(row => row.id === record.colId)
  assert.equal(matches.length, 1, 'Expected one pinned COL26.8 usage for ' + record.colId)
  const usage = matches[0]
  for (const key of ['scientificName', 'authorship', 'rank', 'sourceDatasetId']) assert.equal(String(usage[key]), String(record[key]), 'Pinned COL usage ' + key + ' mismatch for ' + record.colId)
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
  record.classificationPath = chain.map(({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }))
}

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned FNA batch input SHA-256 mismatch')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'fna-pinus-morphology-dossier-batch-2-2026-09-27')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.newRecords.length, 18)
assert.deepEqual(input.baseAudit.openPullRequests, [])

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
assert.equal(index.recordCount, input.baseAudit.indexedRecordCount + (existingShard?.recordCount ?? 0), 'Unexpected dossier index base count')
const dossiers = readCatalogueDossiers()
assert.equal(dossiers.records.length, index.recordCount)
const indexedById = new Map(dossiers.records.map(record => [record.colId, record]))
const indexedNames = new Set(dossiers.records.map(record => normalize(record.scientificName)))

const fnaCompressed = readFileSync(join(ROOT, FNA_DATA))
assert.equal(sha256(fnaCompressed), FNA_DATA_SHA256, 'Pinned FNA archive import changed')
const fnaRows = brotliDecompressSync(fnaCompressed).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
const dossiersToWrite = []

for (const item of input.newRecords) {
  const fnaRecord = fnaRows.find(record => record.colId === item.colId)
  assert.ok(fnaRecord, 'FNA archive has no exact COL ID ' + item.colId)
  assert.equal(fnaRecord.wfoId, item.wfoId, 'FNA row does not match the pinned WFO ID for ' + item.colId)
  const route = normalize(fnaRecord.scientificName).slice(0, 2)
  const registryMatches = (registry.search.routes[route] ?? []).flatMap(registryJsonl).filter(row => row.id === item.colId)
  assert.equal(registryMatches.length, 1, 'Expected one COL usage for ' + item.colId)
  const usage = registryMatches[0]
  assert.equal(usage.status, 'accepted')
  assert.equal(usage.rank, 'species')
  assert.equal(usage.sourceDatasetId, '2004')
  const fnaDescription = fnaRecord.descriptions.find(description => description.rowNumber === item.rowNumber && description.sourceId === item.sourceId)
  assert.ok(fnaDescription, 'Expected exact FNA row/sourceId for ' + item.colId)
  assert.equal(fnaDescription.type, 'general')
  assert.equal(fnaDescription.language, 'en')
  assert.equal(fnaDescription.sourceExcerpt, true)
  assert.equal(fnaDescription.sourceEndUnclosed, false)
  assert.equal(fnaDescription.rightsHolder, 'Flora of North America Association')
  assert.equal(fnaDescription.license, 'http://creativecommons.org/licenses/by/4.0')
  assert.equal(fnaDescription.citations.length, 1)
  const binomial = fnaRecord.scientificName.split(' ').slice(0, 2).join(' ')
  assert.ok(fnaDescription.citations[0].includes(binomial), 'FNA citation does not name the expected taxon')
  for (const fragment of item.requiredSourceText) assert.ok(fnaDescription.text.includes(fragment), 'Source row no longer supports ' + item.colId + ': ' + fragment)

  const dossier = {
    colId: item.colId,
    scientificName: usage.scientificName,
    authorship: usage.authorship,
    rank: usage.rank,
    sourceDatasetId: usage.sourceDatasetId,
    checkedAt: input.checkedAt,
    classificationPath: [],
    identity: {
      method: 'Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry. The FNA row is joined by its retained COL ID, WFO ID, exact row number, source identifier, and taxon-specific citation; shared nomenclature does not itself prove identical taxonomic circumscription across releases.',
      scope: 'COL26.8 accepted identity ' + item.colId + ' linked to a taxon-specific 2003 Flora of North America account. This regional nomenclatural link is not a claim of full concept equivalence across checklist versions.',
      sourceIds: ['col', 'fna_' + item.sourceId.toLowerCase().replaceAll('-', '_')],
    },
    lifeStatusScope: {
      wild: 'The FNA taxonomic account describes the species but does not identify the provenance of sampled plants; no population-level wild status is inferred.',
      domesticated: 'Cultivation, domestication, and horticultural history have not been assessed.',
      fossil: 'Fossil occurrence and geological age have not been assessed.',
    },
    sources: [],
    systematicSearch: {
      scope: 'Exact accepted COL26.8 identity check and focused review of one cited Flora of North America species-account morphology paragraph; not a systematic seven-facet literature review.',
      method: 'Matched the retained FNA COL ID and WFO-linked source row to the pinned accepted COL26.8 usage; checked the exact row number, source identifier, species citation, item-level CC BY 4.0 declaration, and archive license metadata.',
      queryOrPath: 'COL26.8 ChecklistBank dataset 316115 usage ' + item.colId + '; FNA imported description row ' + item.rowNumber + '; sourceId ' + item.sourceId + '.',
      inclusionCriteria: 'Exact accepted COL26.8 ID and species-cited FNA description row; row declares CC BY 4.0 and directly supports the bounded morphology statement.',
      exclusionCriteria: 'No population mean, full life cycle, habitat, environmental interaction, evolutionary result, global/current distribution, fossil occurrence, conservation status, domestication, or broad serotiny/fire ecology is inferred from the selected cone morphology.',
      date: input.checkedAt,
      searcher: 'Evo source audit',
    },
    facets: {},
    completeness: {
      status: 'incomplete',
      reasons: ['One regional flora account supports a bounded partial morphology claim only.', 'The other six scientific facets remain explicitly not assessed.', 'No independent external expert review has been completed.'],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }

  acceptedClassification(registry, dossier)
  assert.equal(dossier.classificationPath.at(-1).id, item.colId)

  const sourceId = 'fna_' + item.sourceId.toLowerCase().replaceAll('-', '_')
  const citation = fnaDescription.citations[0]
  const name = usage.scientificName
  const colSource = {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2004',
    url: 'https://www.checklistbank.org/dataset/316115/taxon/' + item.colId,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    stableId: 'col:' + item.colId + '@COL26.8',
    publishedAt: '2026-08-20',
    accessedAt: input.checkedAt,
    locator: 'Accepted species usage ' + item.colId + '; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.',
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ' + item.colId + '. https://doi.org/10.48580/dgywk.',
  }
  const fnaSource = {
    id: sourceId,
    title: name + ', Flora of North America @ eFloras; account cited as 2003',
    url: 'https://efloras.org/flora_page.aspx?flora_id=1',
    stableId: 'FNA-sourceId:' + item.sourceId,
    version: 'FNA species account cited as 2003; archive retrieved 2026-09-06',
    publishedAt: '2003',
    accessedAt: input.checkedAt,
    locator: 'FNA imported general-description row ' + item.rowNumber + '; source identifier ' + item.sourceId + '; species account description paragraph.',
    sourceCitation: citation,
    itemDeclaredLicenseUrl: fnaDescription.license,
    license: 'The imported item declares CC BY 4.0; FNA archive metadata licenses text and images CC BY 4.0 unless otherwise noted.',
    rightsHolder: fnaDescription.rightsHolder,
    licenseEvidenceUrl: 'https://worldfloraonline.org/resource/33517',
    licenseEvidenceLocator: 'FNA archive resource metadata licenses text and images CC BY 4.0 unless otherwise noted; this imported item independently declares CC BY 4.0 and names Flora of North America Association as rights holder.',
    licenseAppliesTo: 'The FNA species-account text in imported description row ' + item.rowNumber + '; no third-party figure, image, or table is reused.',
    attribution: citation + ' Flora of North America Association; account text paraphrased.',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAssessment: 'item-level-verified',
    scope: 'North American flora taxonomic description. Claim is account-level morphology, not a population-sampled estimate, a current/global range statement, or proof of cross-release taxonomic-concept equivalence.',
  }
  dossier.sources = [colSource, fnaSource]
  const claim = {
    text: item.claim,
    translationStatus: 'untranslated',
    originalLanguage: 'en',
    sourceIds: [sourceId],
    locator: 'FNA species account description paragraph; imported general-description row ' + item.rowNumber + ', source identifier ' + item.sourceId + '; citation: ' + citation,
    placeTimeScope: 'North American Flora of North America account cited as 2003; no dated population sampling frame, named sampling locality, or frequency estimate is supplied for this structural description. ' + item.caveat,
    lifeStatus: 'The account describes taxonomic structures but does not identify a sampled population or state whether the described material was wild or cultivated; neither status is inferred.',
  }
  const unassessedGaps = {
    lifeHistory: 'Seed maturation, release, germination, recruitment, growth, survival, and the full reproductive cycle have not been assessed from this morphology claim.',
    ecology: 'Habitat, environmental tolerances, and ecological interactions have not been assessed.',
    evolution: 'No species-specific phylogenetic, population-genetic, or evolutionary analysis was assessed.',
    distribution: 'This regional flora account is not a current range map or global distribution assessment.',
    fossil: 'No fossil occurrences or bounded species-level fossil search were assessed.',
    conservation: 'No current conservation assessment, population trend, or threat analysis was reviewed.',
  }
  dossier.facets = Object.fromEntries(FACETS.map(facet => [facet, facet === 'morphology'
    ? { status: 'partially-supported', claims: [claim], gaps: ['One regional account supports selected seed-cone morphology only; developmental stages, within-species variation, measurement protocols, vegetative and reproductive character coverage, and representation across the complete COL26.8 concept remain incomplete.'] }
    : { status: 'not-assessed', claims: [], gaps: [unassessedGaps[facet]] }]))
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
  for (const facet of FACETS.filter(value => value !== 'morphology')) assert.equal(dossier.facets[facet].status, 'not-assessed')
  const prior = indexedById.get(item.colId)
  assert.equal(Boolean(prior), Boolean(existingShard), 'Target dossier ID exists outside the new batch shard or is absent from that shard')
  assert.ok(existingShard || !indexedNames.has(normalize(dossier.scientificName)), 'Scientific name already indexed: ' + dossier.scientificName)
  dossiersToWrite.push(dossier)
}

assert.equal(new Set(dossiersToWrite.map(record => record.colId)).size, input.newRecords.length, 'Duplicate COL ID in batch')
const raw = Buffer.from(dossiersToWrite.map(JSON.stringify).join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(raw), 'Brotli round-trip mismatch')

let rebuildDisposition = existingShard ? 'verified-idempotent-rebuild' : 'applied'
if (existingShard) {
  assert.equal(existingShard.recordCount, input.newRecords.length, 'Refusing to rewrite a dossier shard with a different record count')
  const existingRaw = readFileSync(join(ROOT, NEW_RAW))
  const existingCompressed = readFileSync(join(ROOT, NEW_SHARD))
  assert.equal(sha256(existingRaw), existingShard.decodedSha256)
  assert.equal(sha256(existingCompressed), existingShard.compressedSha256)
  if (!existingRaw.equals(raw) || !brotliDecompressSync(existingCompressed).equals(raw)) {
    writeFileSync(join(ROOT, NEW_RAW), raw)
    writeFileSync(join(ROOT, NEW_SHARD), compressed)
    existingShard.decodedSha256 = sha256(raw)
    existingShard.compressedSha256 = sha256(compressed)
    writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')
    rebuildDisposition = 'updated-existing-shard'
  }
} else {
  mkdirSync(dirname(join(ROOT, NEW_RAW)), { recursive: true })
  writeFileSync(join(ROOT, NEW_RAW), raw)
  writeFileSync(join(ROOT, NEW_SHARD), compressed)
  index.shards.push({ path: NEW_SHARD, recordCount: dossiersToWrite.length, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) })
  index.recordCount += dossiersToWrite.length
  writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n', 'utf8')
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
  newRecords: dossiersToWrite.map(record => ({ colId: record.colId, scientificName: record.scientificName })),
  indexedRecordCount: input.baseAudit.indexedRecordCount + dossiersToWrite.length,
  newShard: {
    path: NEW_SHARD,
    rawPath: NEW_RAW,
    encoding: 'brotli-jsonl',
    recordCount: dossiersToWrite.length,
    decodedBytes: storedRaw.length,
    decodedSha256: sha256(storedRaw),
    compressedBytes: storedCompressed.length,
    compressedSha256: sha256(storedCompressed),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: REGISTRY_ROOT + '/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: registryManifestSha256 },
  sourceArchive: { path: FNA_DATA, sha256: FNA_DATA_SHA256, archiveLicenseLedger: 'data/sources/fna-descriptions-import-ledger.json' },
  generator: 'scripts/build-fna-pinus-morphology-dossier-batch-2.mjs',
}
writeFileSync(join(ROOT, OUTPUT), JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({ batchId: input.batchId, records: dossiersToWrite.length, indexedRecordsAfter: index.recordCount, compressedBytes: storedCompressed.length, rebuild: rebuildDisposition, inputSha256: sha256(inputBytes), rawSha256: sha256(storedRaw), compressedSha256: sha256(storedCompressed) }, null, 2))
