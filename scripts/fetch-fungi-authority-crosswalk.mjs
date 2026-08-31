import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  CATALOGUE_RELEASE,
  CATALOGUE_RELEASE_DATE,
  CHECKLISTBANK_DATASET_KEY,
  SOURCE_DATASETS,
  matchFungiAuthority,
  readFungiSpecies,
  readMicrosporidiaPages,
  readSpeciesFungorumArchive,
  sha256,
} from './fungi-authority-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_PACKAGE_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'fungi')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-crosswalk-col26.8.json.gz')
const DEFAULT_LEDGER = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-import-ledger.json')
const SPECIES_FUNGORUM_EXPORT_URL = 'https://api.checklistbank.org/dataset/2073/export.zip?format=DWCA'
const DATASET_METADATA_URL = 'https://api.checklistbank.org/dataset/{datasetId}'
const MICROSPORIDIA_PAGE_URL = 'https://api.checklistbank.org/dataset/1148/nameusage?limit=1000&offset={offset}'
const COL_SOURCE_URL = `https://api.checklistbank.org/dataset/${CHECKLISTBANK_DATASET_KEY}/nameusage/{colId}/source`

function parseArgs(argv) {
  const options = {
    packageRoot: DEFAULT_PACKAGE_ROOT,
    output: DEFAULT_OUTPUT,
    ledger: DEFAULT_LEDGER,
    retrievedAt: null,
    archive: null,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--package-root') options.packageRoot = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--ledger') options.ledger = resolve(argv[++index])
    else if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--archive') options.archive = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-fungi-authority-crosswalk.mjs --retrieved-at YYYY-MM-DD [options]',
    '',
    'Refreshes the release-pinned Species Fungorum / Index Fungorum identifier crosswalk.',
    'Only strict source-dataset + verbatim-label matches and exact ChecklistBank source records are used.',
    'Normal builds are offline; --archive may supply an already downloaded dataset-2073 DwCA for reproduction.',
  ].join('\n')
}

function delay(milliseconds) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))
}

async function fetchBytes(url, retries = 5) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { accept: '*/*' } })
      const bytes = Buffer.from(await response.arrayBuffer())
      if (!response.ok) {
        if ((response.status === 429 || response.status >= 500) && attempt < retries) {
          await delay(Math.min(10000, 500 * (2 ** attempt)))
          continue
        }
        throw new Error(`${url}: HTTP ${response.status}`)
      }
      return {
        requestUrl: url,
        responseUrl: response.url,
        responseDate: response.headers.get('date'),
        etag: response.headers.get('etag'),
        lastModified: response.headers.get('last-modified'),
        bytes,
        byteCount: bytes.byteLength,
        sha256: sha256(bytes),
      }
    } catch (error) {
      if (attempt >= retries) throw error
      await delay(Math.min(10000, 500 * (2 ** attempt)))
    }
  }
  throw new Error(`${url}: retry loop ended unexpectedly`)
}

async function fetchMicrosporidiaPages() {
  const pages = []
  let offset = 0
  let total = null
  while (total === null || offset < total) {
    const page = await fetchBytes(MICROSPORIDIA_PAGE_URL.replace('{offset}', String(offset)))
    const payload = JSON.parse(page.bytes.toString('utf8'))
    total = payload.total
    pages.push(page)
    offset += payload.result.length
    if (!payload.result.length && offset < total) throw new Error(`Microsporidia pagination stopped at ${offset}/${total}`)
  }
  return pages
}

async function fetchDirectSourceLinks(records, concurrency = 8) {
  const links = new Map()
  const requests = new Array(records.length)
  let nextIndex = 0
  async function worker() {
    while (nextIndex < records.length) {
      const index = nextIndex
      nextIndex += 1
      const record = records[index]
      const response = await fetchBytes(COL_SOURCE_URL.replace('{colId}', encodeURIComponent(record.colId)))
      const source = JSON.parse(response.bytes.toString('utf8'))
      links.set(record.colId, source)
      requests[index] = {
        colId: record.colId,
        requestUrl: response.requestUrl,
        responseDate: response.responseDate,
        bytes: response.byteCount,
        sha256: response.sha256,
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, records.length) }, () => worker()))
  return { links, requests }
}

function publicResponse(response) {
  return {
    requestUrl: response.requestUrl,
    responseUrl: response.responseUrl,
    responseDate: response.responseDate,
    etag: response.etag,
    lastModified: response.lastModified,
    bytes: response.byteCount,
    sha256: response.sha256,
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(options.retrievedAt ?? '')) {
    throw new Error('--retrieved-at must be an explicit YYYY-MM-DD date')
  }

  const { records: colRecords } = readFungiSpecies(options.packageRoot)
  const metadataResponses = await Promise.all([...SOURCE_DATASETS.keys()].map((datasetId) => fetchBytes(
    DATASET_METADATA_URL.replace('{datasetId}', datasetId),
  )))
  for (const response of metadataResponses) {
    const metadata = JSON.parse(response.bytes.toString('utf8'))
    const expected = SOURCE_DATASETS.get(String(metadata.key))
    if (!expected || metadata.title !== expected.title || metadata.version !== expected.version
      || metadata.issued !== expected.issued || metadata.license !== 'cc by') {
      throw new Error(`Source dataset metadata changed unexpectedly: ${metadata.key ?? 'unknown'}`)
    }
  }

  const archiveResponse = options.archive
    ? {
      requestUrl: SPECIES_FUNGORUM_EXPORT_URL,
      responseUrl: null,
      responseDate: null,
      etag: null,
      lastModified: null,
      bytes: readFileSync(options.archive),
    }
    : await fetchBytes(SPECIES_FUNGORUM_EXPORT_URL)
  archiveResponse.byteCount ??= archiveResponse.bytes.byteLength
  archiveResponse.sha256 ??= sha256(archiveResponse.bytes)
  const speciesFungorum = readSpeciesFungorumArchive(archiveResponse.bytes)
  const microsporidiaResponses = await fetchMicrosporidiaPages()
  const microsporidia = readMicrosporidiaPages(microsporidiaResponses)
  const sourceRecordsByDataset = new Map([
    ['2073', speciesFungorum.records],
    ['1148', microsporidia.records],
  ])

  const strictResult = matchFungiAuthority({ colRecords, sourceRecordsByDataset })
  const recordsNeedingDirectSource = strictResult.records.filter((record) => !['accepted', 'redirect'].includes(record.outcome))
  const direct = await fetchDirectSourceLinks(recordsNeedingDirectSource)
  const result = matchFungiAuthority({ colRecords, sourceRecordsByDataset, sourceLinksByColId: direct.links })
  if (result.counts.accepted !== colRecords.length || result.counts.redirect || result.counts.ambiguous
    || result.counts.unmatched || result.counts.withheld) {
    throw new Error(`Fungi authority coverage is incomplete: ${JSON.stringify(result.counts)}`)
  }

  const metadataByDataset = new Map(metadataResponses.map((response) => {
    const metadata = JSON.parse(response.bytes.toString('utf8'))
    return [String(metadata.key), { response, metadata }]
  }))
  const sourceDatasets = [...SOURCE_DATASETS].map(([datasetId, expected]) => {
    const { response, metadata } = metadataByDataset.get(datasetId)
    const pageEvidence = datasetId === '1148'
      ? microsporidiaResponses.map(publicResponse)
      : []
    return {
      datasetId,
      ...expected,
      checklistBankDatasetUrl: DATASET_METADATA_URL.replace('{datasetId}', datasetId),
      informationUrl: metadata.url,
      license: 'CC-BY-4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      citation: datasetId === '2073'
        ? 'Kirk, P. M. (2024). Species Fungorum Plus (Apr 2024). Royal Botanic Gardens, Kew. https://doi.org/10.48580/d4hj'
        : 'Kirk, P. (2015). Unicellular spore-forming protozoan parasites (Nov 2015). https://doi.org/10.48580/d3dm',
      metadataResponse: publicResponse(response),
      ...(datasetId === '2073' ? {
        officialExport: {
          ...publicResponse(archiveResponse),
          dataMember: speciesFungorum.dataMember,
          metadataMember: speciesFungorum.metadataMember,
          recordCount: speciesFungorum.records.length,
        },
      } : {
        officialApiPages: pageEvidence,
        recordCount: microsporidia.records.length,
      }),
    }
  })

  const directRequestByColId = new Map(direct.requests.map((request) => [request.colId, request]))
  const records = result.records.map((record) => ({
    colId: record.colId,
    sourceDatasetId: record.sourceDatasetId,
    scientificName: record.scientificName,
    indexFungorumId: record.authorityId,
    indexFungorumUrl: record.authorityUrl,
    mappingBasis: record.mappingBasis,
    status: record.outcome,
    ...(directRequestByColId.has(record.colId)
      ? { sourceResponseSha256: directRequestByColId.get(record.colId).sha256 }
      : {}),
  }))
  const requestLedgerBytes = Buffer.from(`${direct.requests.map((request) => JSON.stringify({
    colId: request.colId,
    requestUrl: request.requestUrl,
    responseSha256: request.sha256,
  })).join('\n')}\n`, 'utf8')
  const recordLedgerBytes = Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
  const snapshot = {
    schemaVersion: 1,
    crosswalkType: 'release-pinned-fungal-authority-identifier-crosswalk',
    source: {
      provider: 'Species Fungorum / Index Fungorum through ChecklistBank',
      catalogueRelease: CATALOGUE_RELEASE,
      catalogueReleaseDate: CATALOGUE_RELEASE_DATE,
      checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
      retrievedAt: options.retrievedAt,
      sourceDatasets,
      directSourceEndpointTemplate: COL_SOURCE_URL,
      indexFungorumUrlTemplate: 'https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID={id}',
      rightsBoundary: 'Only the two release-pinned ChecklistBank source datasets declared CC BY 4.0 are used. No live Index Fungorum page content, bibliographic detail, hosts, substrates, localities, descriptions, media, or complete live database is copied.',
    },
    matching: {
      eligiblePredicate: 'rank=species AND status=accepted in the COL26.8 Fungi resource pack AND sourceDatasetId in {2073,1148}',
      strictPrimaryBasis: 'Unique byte-for-byte combined scientific-name + authorship label inside the declared sourceDatasetId.',
      directResolutionBasis: `For the ${direct.requests.length} zero-or-multiple strict label matches only, use the exact pinned ChecklistBank usage /source record and verify its source ID in the pinned source snapshot.`,
      prohibitedMethods: ['fuzzy-name-match', 'case-folded-name-match', 'authorship-normalization', 'edit-distance', 'cross-dataset-name-match', 'guessed-identifier'],
    },
    integrity: {
      algorithm: 'sha256',
      directSourceRequestCount: direct.requests.length,
      directSourceRequestLedgerSha256: sha256(requestLedgerBytes),
      recordLedgerSha256: sha256(recordLedgerBytes),
    },
    counts: result.counts,
    sourceComposition: Object.fromEntries([...SOURCE_DATASETS.keys()].map((datasetId) => [
      datasetId,
      colRecords.filter((record) => String(record.sourceDatasetId) === datasetId).length,
    ])),
    records,
    upstreamOnlyRecords: result.upstreamOnlyRecords,
  }
  const snapshotBytes = Buffer.from(`${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  const compressed = Buffer.from(deterministicGzip(snapshotBytes, { level: 9 }))
  mkdirSync(dirname(options.output), { recursive: true })
  writeFileSync(options.output, compressed)

  const ledger = {
    schemaVersion: 1,
    importType: 'fungal-authority-crosswalk-import-ledger',
    retrievedAt: options.retrievedAt,
    generator: {
      path: 'scripts/fetch-fungi-authority-crosswalk.mjs',
      sha256: createHash('sha256').update(readFileSync(SCRIPT_PATH)).digest('hex'),
    },
    sourceDatasets,
    directSourceRequests: direct.requests,
    output: {
      path: options.output.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/'),
      bytes: compressed.byteLength,
      sha256: sha256(compressed),
      sourceBytes: snapshotBytes.byteLength,
      sourceSha256: sha256(snapshotBytes),
      counts: result.counts,
    },
    limitations: [
      'This is a release-scoped identifier crosswalk, not a claim that described fungal diversity is complete.',
      'Species Fungorum and Index Fungorum are continuously curated; later taxonomic opinions and identifiers may differ.',
      'Upstream-only means accepted species in the two pinned source snapshots that are not used by the COL26.8 Fungi accepted-species pack.',
      'The minimal sidecar does not copy the live Index Fungorum database or independently validate nomenclatural acts.',
    ],
  }
  mkdirSync(dirname(options.ledger), { recursive: true })
  writeFileSync(options.ledger, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8')
  console.log(JSON.stringify({ output: ledger.output, sourceComposition: snapshot.sourceComposition }, null, 2))
}

await main()
