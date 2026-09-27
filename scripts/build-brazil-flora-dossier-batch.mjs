import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = 'data/sources/brazil-flora-descriptions.jsonl.br'
const LEDGER_PATH = 'data/sources/brazil-flora-descriptions-import-ledger.json'
const CROSSWALK_PATH = 'data/sources/wfo-plant-crosswalk-col26.8.json.br'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const REGISTRY_MANIFEST_PATH = `${REGISTRY_ROOT}/manifest.json`
const BASE_PATH = 'data/knowledge/catalogue-dossiers.json'
const INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const SHARD_PATH = 'data/knowledge/catalogue-dossiers-brazil-flora-batch-2026-09-27.jsonl.br'
const MANIFEST_PATH = 'data/knowledge/brazil-flora-dossiers-batch-2026-09-27.batch-manifest.json'
const SOURCE_SHA256 = '87c4eb263ae64e21b1c7f009276eb941c6c51a892fe79ec3e46c5779200b879d'
const SOURCE_DECODED_SHA256 = '7fbccc2e345c3d8d35af8299d8e25a95a39677e76bf221d7e3fc5bd57bcbc470'
const CROSSWALK_DECODED_SHA256 = '980144add135db3fa709392552534e19e33bc45605a97f5bafeb4d239d1621af'
const EXPECTED_DUPLICATE_GROUPS = 273
const EXPECTED_DUPLICATE_SPECIES = 1048
const EXPECTED_CANDIDATE_DUPLICATE_GROUPS = 177
const EXPECTED_CANDIDATE_DUPLICATE_SPECIES = 595
const CHECKED_AT = '2026-09-27'

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const jsonBytes = value => Buffer.from(`${JSON.stringify(value, null, 2)}\n`)
const nonEmpty = value => typeof value === 'string' && value.trim().length > 0
const normalizedNameRoute = scientificName => scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim().slice(0, 2)
const UNKNOWN_HABITAT = new Set(['desconhecido', 'desconocido', 'unknown', 'not known', 'nao informado', 'não informado', 'indeterminado', 'n/a'])

if (process.argv.slice(2).some(argument => argument !== '--check')) throw new Error('Usage: node scripts/build-brazil-flora-dossier-batch.mjs [--check]')
const checkMode = process.argv.includes('--check')

function loadSource() {
  const compressed = readFileSync(join(ROOT, SOURCE_PATH))
  assert.equal(sha256(compressed), SOURCE_SHA256, 'Pinned Brazilian Flora source pack changed')
  const ledgerBytes = readFileSync(join(ROOT, LEDGER_PATH))
  const ledger = JSON.parse(ledgerBytes.toString('utf8'))
  assert.equal(ledger.outputSha256, SOURCE_SHA256)
  assert.equal(ledger.archiveSha256, '79455efc837678d0812c4f83247c9f024ab4d8dae43fe72f5c40b2302d50c923')
  assert.equal(ledger.sourceVersion, 'WFO Brazilian Flora 2020 archive; embedded EML v393.147')
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), SOURCE_DECODED_SHA256)
  assert.equal(sha256(decoded), ledger.decodedSha256)
  const rows = decoded.toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
  assert.equal(rows.length, ledger.species)
  assert.equal(rows.length, 28_896)
  return { compressed, decoded, rows, ledger, ledgerBytes }
}

function loadCrosswalk() {
  const compressed = readFileSync(join(ROOT, CROSSWALK_PATH))
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), CROSSWALK_DECODED_SHA256, 'Pinned WFO/COL crosswalk changed')
  const crosswalk = JSON.parse(decoded.toString('utf8'))
  const byWfoId = new Map()
  for (const record of crosswalk.colRecords) {
    if (!record.wfoId) continue
    if (!byWfoId.has(record.wfoId)) byWfoId.set(record.wfoId, [])
    byWfoId.get(record.wfoId).push(record)
  }
  return { compressed, decoded, crosswalk, byWfoId }
}

function loadRegistry(records) {
  const manifestBytes = readFileSync(join(ROOT, REGISTRY_MANIFEST_PATH))
  const manifest = JSON.parse(manifestBytes.toString('utf8'))
  assert.equal(manifest.releaseAlias, 'COL26.8')
  assert.equal(manifest.checklistBankDatasetKey, 316115)
  const recordsByRoute = new Map()
  for (const record of records) {
    const route = normalizedNameRoute(record.scientificName)
    if (!recordsByRoute.has(route)) recordsByRoute.set(route, new Map())
    recordsByRoute.get(route).set(record.colId, null)
  }
  return { manifestBytes, manifest, recordsByRoute, usageCache: new Map(), nodeCache: new Map() }
}

function readGzipJsonl(registry, relativePath) {
  const bytes = gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, relativePath)))
  return bytes.toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
}

function loadRegistryUsages(registry) {
  for (const [route, wantedById] of registry.recordsByRoute) {
    const files = registry.manifest.search.routes[route] ?? []
    assert.ok(files.length > 0, `No pinned COL26.8 search route for ${route}`)
    for (const file of files) {
      for (const usage of readGzipJsonl(registry, file)) {
        if (wantedById.has(usage.id)) {
          assert.equal(wantedById.get(usage.id), null, `Duplicate pinned COL26.8 registry usage ${usage.id}`)
          wantedById.set(usage.id, usage)
        }
      }
    }
    for (const [id, usage] of wantedById) assert.ok(usage, `Expected one pinned COL26.8 registry usage ${id}`)
  }
  registry.usageCache = new Map([...registry.recordsByRoute.values()].flatMap(byId => [...byId.entries()]))
}

function registryUsage(registry, record) {
  const usage = registry.usageCache.get(record.colId)
  assert.ok(usage, `Pinned COL26.8 registry usage missing: ${record.colId}`)
  assert.equal(usage.rank, 'species', `COL usage is not species rank: ${record.colId}`)
  assert.equal(usage.status, 'accepted', `COL usage is not accepted: ${record.colId}`)
  assert.equal(usage.scientificName, record.scientificName, `Accepted name/authorship mismatch: ${record.colId}`)
  return usage
}

function preloadAncestorNodes(registry, usages) {
  let frontier = new Set(usages.map(usage => usage.parentId).filter(Boolean))
  const seen = new Set(usages.map(usage => usage.id))
  while (frontier.size) {
    const byRoute = new Map()
    for (const id of frontier) {
      if (seen.has(id)) continue
      const route = sha256(Buffer.from(id)).slice(0, 2)
      if (!byRoute.has(route)) byRoute.set(route, new Set())
      byRoute.get(route).add(id)
    }
    const next = new Set()
    for (const [route, wanted] of byRoute) {
      const files = registry.manifest.hierarchy.nodes.routes[route]
      assert.ok(Array.isArray(files) && files.length > 0, `No pinned hierarchy route for ${route}`)
      for (const file of files) {
        for (const node of readGzipJsonl(registry, file)) {
          if (wanted.has(node.id)) {
            registry.nodeCache.set(node.id, node)
            wanted.delete(node.id)
            if (node.parentId) next.add(node.parentId)
          }
        }
      }
      assert.equal(wanted.size, 0, `Pinned COL hierarchy nodes missing: ${[...wanted].slice(0, 10).join(', ')}`)
    }
    for (const id of frontier) seen.add(id)
    frontier = new Set([...next].filter(id => !seen.has(id)))
  }
}

function classificationPath(registry, usage) {
  const path = [{ id: usage.id, scientificName: usage.scientificName, rank: usage.rank, status: usage.status }]
  const seen = new Set([usage.id])
  let id = usage.parentId
  while (id) {
    assert.ok(!seen.has(id), `COL parent cycle at ${id}`)
    seen.add(id)
    const node = registry.nodeCache.get(id)
    assert.ok(node, `Pinned COL parent node missing: ${id}`)
    path.push({ id: node.id, scientificName: node.scientificName, rank: node.rank, status: node.status })
    id = node.parentId
    assert.ok(path.length <= 64, `COL parent chain unexpectedly deep for ${usage.id}`)
  }
  assert.ok(path.length > 1, `COL species has no parent chain: ${usage.id}`)
  return path
}

function verifyCrosswalk(record, crosswalk) {
  assert.ok(nonEmpty(record.colId) && nonEmpty(record.wfoId) && nonEmpty(record.scientificName), 'Source species identity is incomplete')
  const matches = crosswalk.byWfoId.get(record.wfoId) ?? []
  assert.equal(matches.length, 1, `Expected exactly one WFO crosswalk mapping for ${record.wfoId}`)
  const mapped = matches[0]
  assert.equal(mapped.status, 'accepted', `WFO crosswalk mapping is not accepted: ${record.colId}`)
  assert.equal(mapped.mappingBasis, 'exact-wfo-accepted-name-and-authorship', `Unexpected WFO crosswalk basis: ${record.colId}`)
  assert.equal(mapped.colId, record.colId, `COL ID mismatch: ${record.colId}`)
  assert.equal(mapped.colScientificName, record.scientificName, `COL accepted name mismatch: ${record.colId}`)
}

function textIsUnknown(text) {
  const key = text.trim().normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('pt-BR')
  return UNKNOWN_HABITAT.has(key)
}

function sourceFields(rows) {
  const sourceByColId = new Map()
  const morphologyRows = []
  const habitatRows = []
  for (const species of rows) {
    assert.ok(!sourceByColId.has(species.colId), `Duplicate Brazilian Flora COL ID ${species.colId}`)
    sourceByColId.set(species.colId, species)
    assert.ok(Array.isArray(species.descriptions), `Missing descriptions for ${species.colId}`)
    for (const field of species.descriptions) {
      assert.ok(['morphology', 'habit', 'habitat'].includes(field.type), `Unreviewed Brazilian Flora field type ${field.type}`)
      assert.ok(['pt', 'es', 'en'].includes(field.language), `Unreviewed Brazilian Flora language ${field.language}`)
      assert.ok(Number.isInteger(field.rowNumber) && field.rowNumber > 0, `Missing physical source row for ${species.colId}`)
      assert.ok(field.sourceExcerpt === true && nonEmpty(field.text), `Missing verbatim source excerpt at row ${field.rowNumber}`)
      assert.ok(nonEmpty(field.license) && field.license.includes('creativecommons.org/licenses/by/4.0'), `Missing declared CC BY dataset license at row ${field.rowNumber}`)
      if (field.type === 'morphology' && field.language === 'pt') {
        assert.ok(nonEmpty(field.sourceId) && field.citationScope === 'description-source', `Morphology row lacks its description source at ${field.rowNumber}`)
        assert.equal(field.citations?.length, 1, `Morphology row must retain one source-reported citation at ${field.rowNumber}`)
        assert.equal(field.referenceRowNumbers?.length, 1, `Morphology row must retain one reference row at ${field.rowNumber}`)
        morphologyRows.push({ ...field, colId: species.colId, wfoId: species.wfoId, scientificName: species.scientificName })
      }
      if (field.type === 'habitat' && field.language === 'pt') {
        assert.equal(field.sourceId, '', `Habitat row unexpectedly has an item source identifier at ${field.rowNumber}`)
        assert.equal(field.citationScope, 'dataset', `Habitat row has unexpected citation scope at ${field.rowNumber}`)
        assert.equal(field.citations?.length, 0, `Habitat row unexpectedly has item citations at ${field.rowNumber}`)
        assert.equal(field.referenceRowNumbers?.length, 0, `Habitat row unexpectedly has item reference rows at ${field.rowNumber}`)
        habitatRows.push({ ...field, colId: species.colId, wfoId: species.wfoId, scientificName: species.scientificName })
      }
    }
  }
  return { sourceByColId, morphologyRows, habitatRows }
}

function duplicateTextGroups(rows, candidateIds = null) {
  const byText = new Map()
  for (const row of rows) {
    if (candidateIds && !candidateIds.has(row.colId)) continue
    if (!byText.has(row.text)) byText.set(row.text, [])
    byText.get(row.text).push(row)
  }
  return [...byText.entries()]
    .filter(([, group]) => new Set(group.map(row => row.colId)).size > 1)
    .map(([text, group]) => ({
      textSha256: sha256(Buffer.from(text)),
      rows: group.map(row => ({ colId: row.colId, rowNumber: row.rowNumber })).sort((a, b) => a.colId.localeCompare(b.colId, 'en')),
      colIds: [...new Set(group.map(row => row.colId))].sort((a, b) => a.localeCompare(b, 'en')),
    }))
    .sort((a, b) => a.textSha256.localeCompare(b.textSha256, 'en'))
}

function makeSourceRecords(species, usage, morphology, habitats, source) {
  const morphologyLocator = morphology
    ? `Brazilian Flora 2020 v393.147, morphology row ${morphology.rowNumber}; WFO ${species.wfoId}; source identifier ${morphology.sourceId}; reference row ${morphology.referenceRowNumbers[0]}; source-reported citation: ${morphology.citations[0]}`
    : null
  const habitatLocator = habitats.map(field => `habitat row ${field.rowNumber}`).join('; ')
  const locator = [morphologyLocator, habitatLocator].filter(Boolean).join('; ')
  const colSourceId = usage.sourceDatasetId
  const colSource = {
    id: 'col26',
    title: 'Catalogue of Life COL26.8, ChecklistBank dataset 316115',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${species.colId}`,
    stableId: `COL26.8:${species.colId}`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    publishedAt: '2026-08-20',
    accessedAt: CHECKED_AT,
    locator: `Accepted species usage ${species.colId}; source dataset ${colSourceId}`,
    license: 'Not assessed for biological reuse; cited for identity only',
    licenseVersion: 'unknown',
    licenseUrl: 'https://www.checklistbank.org/dataset/316115',
    rightsHolder: 'Catalogue of Life and source dataset providers',
    licenseAppliesTo: 'Nomenclatural identity record only; no biological text reused',
    attribution: `Catalogue of Life COL26.8; underlying dataset ${colSourceId}`,
    licenseAssessment: 'identity-only',
    scope: 'Accepted name, authorship, rank, COL ID, parent chain and source dataset identity only.',
  }
  const wfoSource = {
    id: 'wfo2026',
    title: 'World Flora Online Plant List 2026-06, pinned exact COL-to-WFO crosswalk',
    url: `https://list.worldfloraonline.org/${species.wfoId}-2026-06`,
    stableId: `wfo:${species.wfoId}-2026-06`,
    version: 'WFO Plant List 2026-06, issued 2026-06-21; crosswalk sidecar pinned in this repository',
    publishedAt: '2026-06-21',
    accessedAt: CHECKED_AT,
    locator: `Accepted species record ${species.wfoId}; exact accepted-name/authorship mapping to COL ${species.colId}`,
    license: 'CC0 1.0',
    licenseVersion: '1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    rightsHolder: 'World Flora Online',
    licenseAppliesTo: 'WFO nomenclatural data',
    attribution: 'World Flora Online Plant List 2026-06',
    licenseAssessment: 'identity-only',
    scope: 'Exact accepted-name and authorship species crosswalk; nomenclatural identity only.',
  }
  const floraSource = {
    id: 'brazilFlora2020',
    title: 'Brazilian Flora 2020 project - Projeto Flora do Brasil 2020',
    url: source.ledger.sourceUrl,
    stableId: `doi:10.15468/1mtkaw; archive sha256 ${source.ledger.archiveSha256}; WFO ${species.wfoId}`,
    version: source.ledger.sourceVersion,
    publishedAt: 'undated',
    accessedAt: source.ledger.retrievedAt,
    locator,
    license: 'CC BY 4.0 as declared in the dataset-level EML; underlying cited publications are not item-level verified',
    licenseVersion: '4.0',
    licenseUrl: source.ledger.licenseUrl,
    rightsHolder: source.ledger.provider,
    licenseAppliesTo: 'Brazilian Flora 2020 archived dataset fields; not inferred for linked publications, images or PDFs',
    attribution: 'Group Brazil Flora, REFLORA Program (2014): Brazilian Flora 2020, v393.147, doi:10.15468/1mtkaw',
    licenseAssessment: 'aggregate-declaration-only',
    scope: 'Regional source fields are retained verbatim with physical archive row locators. A morphology citation is the reference reported by the dataset; rights for the referenced publication are not independently verified. Habitat rows have dataset-level attribution only.',
  }
  return { sources: [colSource, wfoSource, floraSource], colSourceId }
}

function claimForMorphology(row) {
  return {
    text: row.text,
    originalLanguage: 'pt',
    translationStatus: 'untranslated',
    sourceIds: ['brazilFlora2020'],
    locator: `Brazilian Flora 2020 v393.147, morphology description row ${row.rowNumber}; WFO ${row.wfoId}; source identifier ${row.sourceId}; reference row ${row.referenceRowNumbers[0]}; dataset-reported citation: ${row.citations[0]}`,
    placeTimeScope: 'Verbatim morphology field in the Brazilian Flora 2020 regional dataset. The field does not establish a global description, sampling coverage, population variation, sex or life stage unless stated in its text.',
    lifeStatus: 'The field does not state whether observations concern wild, cultivated, managed or fossil material; none is inferred.',
  }
}

function claimForHabitat(row) {
  return {
    text: row.text,
    originalLanguage: 'pt',
    translationStatus: 'untranslated',
    sourceIds: ['brazilFlora2020'],
    locator: `Brazilian Flora 2020 v393.147, habitat field row ${row.rowNumber}; dataset DOI 10.15468/1mtkaw; WFO ${row.wfoId}`,
    placeTimeScope: 'Habitat or substrate category exactly as recorded in this Brazilian Flora dataset row; no collection locality, survey date, global range or sampling completeness is supplied by the field.',
    lifeStatus: 'Wild, cultivated, managed and fossil applicability are not specified by this field.',
  }
}

function facet(status, claims, gaps) {
  return claims.length ? { status, claims, gaps } : { status, gaps }
}

function dossierFor(species, identity, morphology, habitats, duplicateGroup, source) {
  const { sources, colSourceId } = makeSourceRecords(species, identity.usage, morphology, habitats, source)
  const morphologyClaims = morphology ? [claimForMorphology(morphology)] : []
  const ecologyClaims = habitats.map(claimForHabitat)
  const morphologyGap = morphology
    ? ['Only one source-labelled morphology field is included; its completeness, variation and diagnostic scope have not been assessed.']
    : [duplicateGroup
      ? 'The Portuguese morphology field is exact-text duplicated across accepted COL IDs and is quarantined from species-specific claims pending source review.'
      : 'No eligible, distinct Portuguese morphology field was carried into this dossier.']
  const ecologyGap = ecologyClaims.length
    ? ['Only source-labelled habitat field(s) are included; interactions, variation, locality and sampling coverage have not been assessed.']
    : ['No concrete habitat field is available; an explicit unknown source value is not converted into a biological fact.']
  return {
    colId: species.colId,
    scientificName: species.scientificName,
    rank: 'species',
    sourceDatasetId: colSourceId,
    checkedAt: CHECKED_AT,
    identity: {
      method: `COL26.8 accepted species ID ${species.colId} and exact name/authorship map through exactly one accepted WFO usage ${species.wfoId}; the Brazilian Flora source record carries the same WFO ID.`,
      scope: 'COL26.8 accepted species concept. Brazilian Flora fields remain regional dataset records; no global, current, complete-range or taxonomic-equivalence claim is made.',
      sourceIds: ['col26', 'wfo2026', 'brazilFlora2020'],
      classificationPath: identity.classificationPath,
    },
    lifeStatusScope: {
      wild: 'Wild status is not specified in these source fields.',
      domesticated: 'Cultivated or managed status is not specified; none is inferred.',
      fossil: 'Fossil applicability is not assessed from this extant-flora source.',
    },
    sources,
    facets: {
      morphology: facet(morphologyClaims.length ? 'partially-supported' : 'not-assessed', morphologyClaims, morphologyGap),
      lifeHistory: facet('not-assessed', [], ['The source habit field is not treated as life-history evidence; life cycle and reproduction were not assessed.']),
      ecology: facet(ecologyClaims.length ? 'partially-supported' : 'not-assessed', ecologyClaims, ecologyGap),
      evolution: facet('not-assessed', [], ['No species-level phylogenetic or comparative evidence was assessed.']),
      distribution: facet('not-assessed', [], ['No locality or range evidence was assessed; the regional flora dataset does not establish a complete distribution.']),
      fossil: facet('not-assessed', [], ['No fossil search or species-level fossil evidence was assessed.']),
      conservation: facet('not-assessed', [], ['No qualifying conservation assessment was reviewed.']),
    },
    completeness: {
      status: 'incomplete',
      reasons: [
        'Only source-labelled morphology and/or habitat fields are included; six-facet coverage and required within-facet evidence checks remain incomplete.',
        'No verified Chinese translation, systematic cross-source review or independent expert review has been completed.',
        'The dataset license is aggregate-declaration-only for dossier purposes; underlying cited publication rights were not item-level verified.',
      ],
    },
    expertReview: { status: 'not-reviewed' },
  }
}

function loadCurrentIndex() {
  const indexBytes = readFileSync(join(ROOT, INDEX_PATH))
  const index = JSON.parse(indexBytes.toString('utf8'))
  assert.equal(index.releaseAlias, 'COL26.8')
  assert.equal(index.encoding, 'brotli-jsonl')
  assert.ok(Array.isArray(index.shards))
  return { indexBytes, index }
}

function currentGeneratedIds(index) {
  const matches = index.shards.filter(shard => shard.path === SHARD_PATH)
  assert.ok(matches.length <= 1, `Duplicate Brazilian Flora dossier shard entries in ${INDEX_PATH}`)
  if (!matches.length) return { shard: null, ids: new Set() }
  const bytes = readFileSync(join(ROOT, SHARD_PATH))
  assert.equal(sha256(bytes), matches[0].compressedSha256, 'Brazilian Flora dossier shard checksum differs from index')
  const decoded = brotliDecompressSync(bytes)
  assert.equal(sha256(decoded), matches[0].decodedSha256)
  const records = decoded.toString('utf8').trimEnd().split(/\r?\n/).map(JSON.parse)
  assert.equal(records.length, matches[0].recordCount)
  return { shard: matches[0], ids: new Set(records.map(record => record.colId)) }
}

function build() {
  const source = loadSource()
  const crosswalk = loadCrosswalk()
  const registry = loadRegistry(source.rows)
  loadRegistryUsages(registry)
  const { sourceByColId, morphologyRows, habitatRows } = sourceFields(source.rows)
  const allHabitatIds = new Set(habitatRows.map(row => row.colId))
  const duplicateGroups = duplicateTextGroups(morphologyRows)
  const candidateDuplicateGroups = duplicateTextGroups(morphologyRows, allHabitatIds)
  const duplicateByColId = new Map()
  for (const group of duplicateGroups) for (const colId of group.colIds) duplicateByColId.set(colId, group)
  assert.equal(duplicateGroups.length, EXPECTED_DUPLICATE_GROUPS, 'Portuguese morphology exact-text duplicate group count changed')
  assert.equal(duplicateByColId.size, EXPECTED_DUPLICATE_SPECIES, 'Portuguese morphology exact-text duplicate species count changed')
  assert.equal(candidateDuplicateGroups.length, EXPECTED_CANDIDATE_DUPLICATE_GROUPS, 'Morphology/habitat candidate duplicate group count changed')
  assert.equal(new Set(candidateDuplicateGroups.flatMap(group => group.colIds)).size, EXPECTED_CANDIDATE_DUPLICATE_SPECIES, 'Morphology/habitat candidate duplicate species count changed')

  const morphologyByColId = new Map()
  for (const row of morphologyRows) {
    assert.ok(!morphologyByColId.has(row.colId), `Expected at most one Portuguese morphology field for ${row.colId}`)
    if (!duplicateByColId.has(row.colId)) morphologyByColId.set(row.colId, row)
  }
  const concreteHabitatByColId = new Map()
  const unknownHabitatRows = []
  for (const row of habitatRows) {
    if (textIsUnknown(row.text)) {
      unknownHabitatRows.push({ colId: row.colId, rowNumber: row.rowNumber, valueSha256: sha256(Buffer.from(row.text)) })
      continue
    }
    if (!concreteHabitatByColId.has(row.colId)) concreteHabitatByColId.set(row.colId, [])
    concreteHabitatByColId.get(row.colId).push(row)
  }
  assert.equal(unknownHabitatRows.length, 91, 'Brazilian Flora unknown habitat row count changed')

  const current = loadCurrentIndex()
  const currentShard = currentGeneratedIds(current.index)
  const currentShardIndex = current.index.shards.findIndex(shard => shard.path === SHARD_PATH)
  const currentBatchManifest = currentShard.shard ? readJson(MANIFEST_PATH) : null
  if (currentBatchManifest) {
    assert.match(currentBatchManifest.baseIndexSha256, /^[a-f0-9]{64}$/, 'Brazilian Flora batch manifest has an invalid base index digest')
    assert.match(currentBatchManifest.finalIndexSha256, /^[a-f0-9]{64}$/, 'Brazilian Flora batch manifest has an invalid final index digest')
  }
  const currentRecords = readCatalogueDossiers().records
  const priorIds = new Set(currentRecords.filter(record => !currentShard.ids.has(record.colId)).map(record => record.colId))
  const baseIndex = { ...current.index, shards: current.index.shards.filter(shard => shard.path !== SHARD_PATH), recordCount: current.index.recordCount - (currentShard.shard?.recordCount ?? 0) }
  assert.equal(baseIndex.recordCount, priorIds.size, 'Dossier index count differs from pre-batch catalogue dossier records')
  const baseIndexBytes = jsonBytes(baseIndex)
  const candidateIds = new Set([...morphologyByColId.keys(), ...concreteHabitatByColId.keys()])
  const skippedExistingIds = [...candidateIds].filter(id => priorIds.has(id)).sort((a, b) => a.localeCompare(b, 'en'))
  const newIds = [...candidateIds].filter(id => !priorIds.has(id)).sort((a, b) => a.localeCompare(b, 'en'))
  assert.equal(morphologyRows.length, 22_191)
  assert.equal(habitatRows.length, 26_990)
  assert.equal(morphologyByColId.size, 21_143)
  assert.equal(concreteHabitatByColId.size, 24_332)
  assert.equal(candidateIds.size, 28_398)
  assert.equal(skippedExistingIds.length, 805)
  assert.equal(newIds.length, 27_593)
  for (const record of source.rows) verifyCrosswalk(record, crosswalk)
  const newUsages = newIds.map(colId => registryUsage(registry, sourceByColId.get(colId)))
  preloadAncestorNodes(registry, newUsages)
  const records = []
  let morphologyClaimDossiers = 0
  let ecologyClaimDossiers = 0
  let ecologyClaimRows = 0
  let bothFacetDossiers = 0
  for (const colId of newIds) {
    const species = sourceByColId.get(colId)
    assert.ok(species, `Dossier candidate is missing from the pinned Brazilian Flora source: ${colId}`)
    const usage = registryUsage(registry, species)
    const identity = { usage, classificationPath: classificationPath(registry, usage) }
    const morphology = morphologyByColId.get(colId) ?? null
    const habitats = concreteHabitatByColId.get(colId) ?? []
    const duplicateGroup = duplicateByColId.get(colId) ?? null
    if (morphology) morphologyClaimDossiers++
    if (habitats.length) {
      ecologyClaimDossiers++
      ecologyClaimRows += habitats.length
    }
    if (morphology && habitats.length) bothFacetDossiers++
    records.push(dossierFor(species, identity, morphology, habitats, duplicateGroup, source))
  }
  assert.equal(new Set(records.map(record => record.colId)).size, records.length)
  assert.equal(records.length, newIds.length)

  const decoded = Buffer.from(`${records.map(record => JSON.stringify(record)).join('\n')}\n`)
  const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
  const shardMetadata = {
    path: SHARD_PATH,
    recordCount: records.length,
    decodedSha256: sha256(decoded),
    compressedSha256: sha256(compressed),
  }
  const nextShards = [...baseIndex.shards]
  nextShards.splice(currentShardIndex < 0 ? nextShards.length : currentShardIndex, 0, shardMetadata)
  const nextIndex = { ...baseIndex, shards: nextShards, recordCount: baseIndex.recordCount + records.length }
  const nextIndexBytes = jsonBytes(nextIndex)
  const duplicateQuarantine = duplicateGroups.map(group => ({ textSha256: group.textSha256, rows: group.rows }))
  const manifest = {
    schemaVersion: 1,
    batchId: 'brazil-flora-dossier-batch-2026-09-27',
    releaseAlias: 'COL26.8',
    generator: 'scripts/build-brazil-flora-dossier-batch.mjs',
    selection: {
      sourceAssociatedSpecies: source.rows.length,
      sourceMorphologyPortugueseRows: morphologyRows.length,
      sourceHabitatPortugueseRows: habitatRows.length,
      morphologyDuplicateTextGroupsQuarantined: duplicateGroups.length,
      morphologyDuplicateSpeciesQuarantined: duplicateByColId.size,
      morphologyHabitatIntersectionDuplicateGroups: candidateDuplicateGroups.length,
      morphologyHabitatIntersectionDuplicateSpecies: EXPECTED_CANDIDATE_DUPLICATE_SPECIES,
      exactTextDuplicateRule: 'For the selected Portuguese morphology field, any exact full-text value present for more than one COL ID is quarantined for manual source review; raw source rows remain unchanged.',
      unknownHabitatRowsExcluded: unknownHabitatRows.length,
      unknownHabitatRows,
      habitFieldsUsedAsClaims: 0,
      excludedBecauseNoEligibleClaim: source.rows.length - candidateIds.size,
      eligibleSpeciesAlreadyHadDossiers: skippedExistingIds.length,
      newDossiers: records.length,
      newMorphologyClaimDossiers: morphologyClaimDossiers,
      newEcologyClaimDossiers: ecologyClaimDossiers,
      newEcologyClaimRows: ecologyClaimRows,
      newDossiersWithBothMorphologyAndEcology: bothFacetDossiers,
      completeDossiersAdded: 0,
      externallyReviewedDossiersAdded: 0,
      skippedExistingColIds: skippedExistingIds,
    },
    semanticAudit: {
      method: 'Deterministic stratified sample of 100 of 17,769 exact morphology+habitat COL IDs; language strata en=34, pt=33, es=33; sampled morphology rows were source-cited and row-located; habitat rows were dataset-scoped, with unknowns and multiple values retained as such.',
      sampleManifestSha256: '8ac68980aded372c09bf8fe22af0c1810fadc741c403b88baae1418c2cb4c037',
      allSampleIdsExactAccepted: 100,
      morphologyRowsWithDescriptionSourceCitation: 100,
      sampleHabitatRows: 108,
      sampleUnknownHabitatRows: 2,
      sampleSpeciesWithMultipleHabitatRows: 8,
      exclusion: 'No duplicate-text morphology row is asserted per species in this batch; exact-text duplicate groups are separately hashed and listed below. Explicit unknown habitat values are not claims.',
    },
    duplicateTextQuarantine: duplicateQuarantine,
    source: {
      path: SOURCE_PATH,
      compressedSha256: sha256(source.compressed),
      decodedSha256: sha256(source.decoded),
      ledgerPath: LEDGER_PATH,
      ledgerSha256: sha256(source.ledgerBytes),
      archiveSha256: source.ledger.archiveSha256,
      sourceVersion: source.ledger.sourceVersion,
      retrievedAt: source.ledger.retrievedAt,
      datasetDoi: '10.15468/1mtkaw',
      declaredLicense: source.ledger.license,
      licenseAssessment: 'aggregate-declaration-only',
    },
    identity: {
      crosswalkPath: CROSSWALK_PATH,
      crosswalkDecodedSha256: sha256(crosswalk.decoded),
      registryManifestPath: REGISTRY_MANIFEST_PATH,
      registryManifestSha256: sha256(registry.manifestBytes),
      acceptedSpeciesMappingsVerified: records.length,
      parentChainsFrozenFromPinnedRegistry: records.length,
    },
    // Keep historical index digests stable when later dossier batches append shards.
    baseIndexSha256: currentBatchManifest?.baseIndexSha256 ?? sha256(baseIndexBytes),
    finalIndexSha256: currentBatchManifest?.finalIndexSha256 ?? sha256(nextIndexBytes),
    dossierShard: {
      ...shardMetadata,
      decodedBytes: decoded.length,
      compressedBytes: compressed.length,
      encoding: 'brotli-jsonl',
      brotliQuality: 11,
    },
  }
  const manifestBytes = jsonBytes(manifest)

  if (checkMode) {
    assert.ok(currentShard.shard, `Missing generated shard: ${SHARD_PATH}`)
    assert.deepEqual(currentShard.shard, shardMetadata, 'Brazilian Flora dossier shard metadata differs from deterministic output')
    assert.deepEqual(current.index, nextIndex, 'Catalogue dossier index is stale')
    const shardBytes = readFileSync(join(ROOT, SHARD_PATH))
    assert.deepEqual(shardBytes, compressed, 'Brazilian Flora dossier shard is not reproducible')
    assert.deepEqual(readFileSync(join(ROOT, MANIFEST_PATH)), manifestBytes, 'Brazilian Flora batch manifest is stale')
    console.log(`Brazilian Flora dossier batch verified: ${records.length.toLocaleString()} dossiers; ${compressed.length.toLocaleString()} compressed bytes.`)
    return
  }

  if (currentShard.shard) {
    assert.deepEqual(currentShard.shard, shardMetadata, 'Generated shard exists but differs; inspect before replacement')
    assert.deepEqual(current.index, nextIndex, 'Generated index exists but differs; inspect before replacement')
    assert.deepEqual(readFileSync(join(ROOT, SHARD_PATH)), compressed, 'Generated shard bytes differ; inspect before replacement')
    assert.deepEqual(readFileSync(join(ROOT, MANIFEST_PATH)), manifestBytes, 'Generated manifest differs; inspect before replacement')
    console.log(`Brazilian Flora dossier batch already current: ${records.length.toLocaleString()} dossiers.`)
    return
  }
  assert.ok(!existsSync(join(ROOT, SHARD_PATH)) && !existsSync(join(ROOT, MANIFEST_PATH)), 'Generated output path already exists without matching dossier index; inspect before replacement')
  mkdirSync(dirname(join(ROOT, SHARD_PATH)), { recursive: true })
  writeFileSync(join(ROOT, SHARD_PATH), compressed)
  writeFileSync(join(ROOT, INDEX_PATH), nextIndexBytes)
  writeFileSync(join(ROOT, MANIFEST_PATH), manifestBytes)
  const rebuilt = readCatalogueDossiers()
  assert.equal(rebuilt.records.length, nextIndex.recordCount)
  assert.equal(rebuilt.records.filter(record => newIds.includes(record.colId)).length, records.length)
  console.log(`Brazilian Flora dossier batch built: ${records.length.toLocaleString()} dossiers; ${morphologyClaimDossiers.toLocaleString()} with morphology; ${ecologyClaimDossiers.toLocaleString()} with ecology; ${compressed.length.toLocaleString()} compressed bytes.`)
}

build()
