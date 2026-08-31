import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  CATALOGUE_RELEASE,
  CATALOGUE_RELEASE_DATE,
  CHECKLISTBANK_DATASET_KEY,
  EXPECTED_ACCEPTED_SPECIES,
  ROOT_USAGE_ID,
  SOURCE_DATASET_DOI,
  SOURCE_DATASET_KEY,
  SOURCE_DATASET_VERSION,
  SOURCE_DATASET_VERSION_DOI,
  canonicalJsonBytes,
  colLineageContainsRoot,
  compareStableIds,
  sha256,
  sourceRecordProjection,
} from './foraminifera-authority-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'foraminifera-wfd-col26.8-crosswalk.json.gz')
const DEFAULT_LEDGER = join(REPOSITORY_ROOT, 'data', 'sources', 'foraminifera-wfd-import-ledger.json')
const DATASET_URL = `https://api.checklistbank.org/dataset/${SOURCE_DATASET_KEY}`
const NAMEUSAGE_URL = `${DATASET_URL}/nameusage`
const COL_SOURCE_URL = `https://api.checklistbank.org/dataset/${CHECKLISTBANK_DATASET_KEY}/nameusage/{colId}/source`
const PAGE_LIMIT = 1000
const REQUEST_CONCURRENCY = 64

function parseArgs(argv) {
  const options = { registryRoot: DEFAULT_REGISTRY_ROOT, output: DEFAULT_OUTPUT, ledger: DEFAULT_LEDGER }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--ledger') options.ledger = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-foraminifera-authority-sidecar.mjs --retrieved-at YYYY-MM-DD [options]',
    '',
    'Fetches the pinned ChecklistBank/WFD metadata and complete nameusage page set,',
    'then resolves every strict COL26.8 Foraminifera usage through the official',
    'ChecklistBank source-record endpoint. No fuzzy matching or raw response bodies are retained.',
  ].join('\n')
}

async function delay(milliseconds) {
  await new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))
}

async function fetchBytes(url, retries = 5) {
  let lastError
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { accept: 'application/json', 'user-agent': 'Evo-Atlas-Foraminifera-Authority/1.0 (+https://github.com/dajiaohuang/evo)' } })
      const bytes = Buffer.from(await response.arrayBuffer())
      if (!response.ok) {
        if ((response.status === 429 || response.status >= 500) && attempt < retries) {
          await delay(Math.min(15000, 500 * (2 ** attempt)))
          continue
        }
        throw new Error(`${url}: HTTP ${response.status} ${bytes.toString('utf8').slice(0, 300)}`)
      }
      return { requestUrl: url, responseUrl: response.url, responseDate: response.headers.get('date'), etag: response.headers.get('etag'), lastModified: response.headers.get('last-modified'), bytes, byteCount: bytes.byteLength, sha256: sha256(bytes) }
    } catch (error) {
      lastError = error
      if (attempt < retries) await delay(Math.min(15000, 500 * (2 ** attempt)))
    }
  }
  throw lastError
}

function repoPath(path) {
  return path.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/')
}

function loadColSpecies(registryRoot) {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes.toString('utf8'))
  const nodes = new Map()
  const paths = manifest.hierarchy.nodes.files.map((file) => join(registryRoot, ...file.path.split('/')))
  for (const path of paths) {
    for (const line of gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean)) {
      const record = JSON.parse(line)
      if (record.rank !== 'species') nodes.set(record.id, record)
    }
  }
  const species = []
  for (const path of paths) {
    for (const line of gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean)) {
      const record = JSON.parse(line)
      if (record.rank !== 'species' || record.status !== 'accepted' || String(record.sourceDatasetId) !== String(SOURCE_DATASET_KEY)) continue
      if (colLineageContainsRoot(record, nodes)) species.push(record)
    }
  }
  species.sort((left, right) => compareStableIds(left.id, right.id))
  if (species.length !== EXPECTED_ACCEPTED_SPECIES) throw new Error(`COL Foraminifera membership changed: ${species.length}/${EXPECTED_ACCEPTED_SPECIES}`)
  return { species, manifestPath, manifestBytes }
}

async function fetchAllSourcePages() {
  const metadata = await fetchBytes(DATASET_URL)
  const info = JSON.parse(metadata.bytes.toString('utf8'))
  if (info.key !== SOURCE_DATASET_KEY || info.title !== 'World Foraminifera Database' || info.version !== SOURCE_DATASET_VERSION || info.versionDoi !== SOURCE_DATASET_VERSION_DOI || info.doi !== SOURCE_DATASET_DOI || info.license !== 'cc by') {
    throw new Error('ChecklistBank WFD metadata does not match the pinned COL26.8 source contract')
  }
  const first = await fetchBytes(`${NAMEUSAGE_URL}?limit=${PAGE_LIMIT}&offset=0`)
  const firstPage = JSON.parse(first.bytes.toString('utf8'))
  if (!Number.isInteger(firstPage.total) || !Array.isArray(firstPage.result) || firstPage.offset !== 0) throw new Error('Invalid first WFD nameusage page')
  const offsets = []
  for (let offset = PAGE_LIMIT; offset < firstPage.total; offset += PAGE_LIMIT) offsets.push(offset)
  const pages = [{ response: first, page: firstPage }]
  let nextIndex = 0
  async function worker() {
    while (nextIndex < offsets.length) {
      const index = nextIndex
      nextIndex += 1
      const offset = offsets[index]
      const response = await fetchBytes(`${NAMEUSAGE_URL}?limit=${PAGE_LIMIT}&offset=${offset}`)
      const page = JSON.parse(response.bytes.toString('utf8'))
      if (page.offset !== offset || page.limit !== PAGE_LIMIT || page.total !== firstPage.total || !Array.isArray(page.result) || page.result.length > PAGE_LIMIT) throw new Error(`Invalid WFD page at offset ${offset}`)
      pages.push({ response, page })
    }
  }
  await Promise.all(Array.from({ length: Math.min(REQUEST_CONCURRENCY, offsets.length) }, () => worker()))
  pages.sort((left, right) => left.page.offset - right.page.offset)
  const sourceRecords = pages.flatMap(({ page }) => page.result)
  if (sourceRecords.length !== firstPage.total) throw new Error(`WFD pages contain ${sourceRecords.length}/${firstPage.total} records`)
  const byId = new Map(sourceRecords.map((record) => [String(record.id), record]))
  return { metadata, info, pages, total: firstPage.total, sourceRecords, byId }
}

async function fetchDirectSourceLinks(species) {
  const links = new Map()
  const requests = new Array(species.length)
  let nextIndex = 0
  async function worker() {
    while (nextIndex < species.length) {
      const index = nextIndex
      nextIndex += 1
      const col = species[index]
      const url = COL_SOURCE_URL.replace('{colId}', encodeURIComponent(col.id))
      const response = await fetchBytes(url)
      const source = JSON.parse(response.bytes.toString('utf8'))
      if (source.datasetKey !== CHECKLISTBANK_DATASET_KEY || source.sourceDatasetKey !== SOURCE_DATASET_KEY || source.sourceEntity !== 'name usage' || !source.sourceId) throw new Error(`COL source relation is not a WFD name usage for ${col.id}`)
      links.set(col.id, source)
      requests[index] = { colId: col.id, requestUrl: url, responseDate: response.responseDate, bytes: response.byteCount, sha256: response.sha256 }
      if ((index + 1) % 1000 === 0) console.log(`ChecklistBank source relations ${index + 1}/${species.length}`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(REQUEST_CONCURRENCY, species.length) }, () => worker()))
  return { links, requests }
}

function publicResponse(response) {
  return { requestUrl: response.requestUrl, responseUrl: response.responseUrl, responseDate: response.responseDate, etag: response.etag, lastModified: response.lastModified, bytes: response.byteCount, sha256: response.sha256 }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) return console.log(usage())
  if (!/^\d{4}-\d{2}-\d{2}$/.test(options.retrievedAt ?? '')) throw new Error('--retrieved-at must be an explicit YYYY-MM-DD date')
  const { species, manifestPath, manifestBytes } = loadColSpecies(options.registryRoot)
  const source = await fetchAllSourcePages()
  const direct = await fetchDirectSourceLinks(species)
  const requestByColId = new Map(direct.requests.map((request) => [request.colId, request]))
  const consumed = new Set()
  const records = species.map((col) => {
    const relation = direct.links.get(col.id)
    const sourceRecord = source.byId.get(String(relation.sourceId))
    if (!sourceRecord) throw new Error(`WFD source record ${relation.sourceId} for ${col.id} is absent from complete nameusage pages`)
    consumed.add(String(sourceRecord.id))
    const projection = sourceRecordProjection(sourceRecord)
    return {
      colId: String(col.id),
      sourceDatasetId: String(SOURCE_DATASET_KEY),
      colScientificName: String(col.scientificName),
      colAuthorship: col.authorship ?? null,
      mappingBasis: 'checklistbank-source-record',
      sourceResponseSha256: requestByColId.get(col.id).sha256,
      ...projection,
    }
  }).sort((left, right) => compareStableIds(left.colId, right.colId))
  const acceptedSpecies = source.sourceRecords
    .filter((record) => String(record.rank ?? record.name?.rank) === 'species' && String(record.status) === 'accepted')
    .map(sourceRecordProjection)
    .sort((left, right) => compareStableIds(left.sourceId, right.sourceId))
  const sourceRecordsDigest = sha256(canonicalJsonBytes(acceptedSpecies.map((record) => ({ sourceId: record.sourceId, scientificName: record.scientificName, status: record.status }))))
  const directLedgerBytes = Buffer.from(`${direct.requests.map((request) => JSON.stringify({ colId: request.colId, requestUrl: request.requestUrl, sha256: request.sha256 })).join('\n')}\n`, 'utf8')
  const unmatchedAccepted = acceptedSpecies.filter((record) => !consumed.has(record.sourceId))
  const snapshot = {
    schemaVersion: 1,
    crosswalkType: 'release-pinned-foraminifera-authority-identifier-crosswalk',
    source: {
      provider: 'World Foraminifera Database through ChecklistBank',
      catalogueRelease: CATALOGUE_RELEASE,
      catalogueReleaseDate: CATALOGUE_RELEASE_DATE,
      checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
      sourceDatasetKey: SOURCE_DATASET_KEY,
      sourceDatasetTitle: source.info.title,
      sourceDatasetVersion: source.info.version,
      sourceDatasetVersionDoi: source.info.versionDoi,
      sourceDatasetDoi: source.info.doi,
      sourceDatasetLicense: 'CC-BY-4.0',
      sourceDatasetLicenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      informationUrl: 'https://www.marinespecies.org/foraminifera',
      retrievedAt: options.retrievedAt,
      metadataResponse: publicResponse(source.metadata),
      nameusageEndpoint: NAMEUSAGE_URL,
      nameusagePageLimit: PAGE_LIMIT,
      nameusageTotal: source.total,
      nameusagePages: source.pages.map(({ response, page }) => ({ offset: page.offset, limit: page.limit, records: page.result.length, ...publicResponse(response) })),
    },
    colInput: {
      releaseAlias: CATALOGUE_RELEASE,
      releaseDate: CATALOGUE_RELEASE_DATE,
      checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
      registryManifestPath: repoPath(manifestPath),
      registryManifestSha256: sha256(manifestBytes),
      rootUsageId: ROOT_USAGE_ID,
      strictPredicate: 'rank=species AND status=accepted',
      sourceDatasetKey: SOURCE_DATASET_KEY,
      acceptedSpecies: species.length,
    },
    matchingContract: {
      basis: 'ChecklistBank exact source-record relation for each accepted COL usage; sourceDatasetKey=1157 and sourceEntity=name usage are required.',
      forbidden: 'No fuzzy matching, name normalization, authority-only matching, or inferred source IDs is permitted.',
    },
    counts: {
      acceptedSpecies: species.length,
      sourceRecords: source.total,
      sourceAcceptedSpecies: acceptedSpecies.length,
      linkedSourceRecords: records.length,
      accepted: records.filter((record) => record.status === 'accepted').length,
      redirects: records.filter((record) => record.status !== 'accepted').length,
    },
    upstreamOnly: {
      status: 'not-asserted',
      reason: 'ChecklistBank exposes a complete date-pinned nameusage page set, but no immutable downloadable WFD archive was available. The accepted-species inventory digest is retained for audit; this release does not redistribute or claim a complete upstream-only set.',
      acceptedSpeciesInventoryCount: acceptedSpecies.length,
      acceptedSpeciesInventorySha256: sourceRecordsDigest,
      observedUnlinkedAcceptedSpeciesCount: unmatchedAccepted.length,
    },
    records,
    integrity: {
      directSourceRequestCount: direct.requests.length,
      directSourceRequestLedgerSha256: sha256(directLedgerBytes),
      directSourceRequests: direct.requests,
      acceptedSpeciesInventorySha256: sourceRecordsDigest,
    },
  }
  const sourceBytes = canonicalJsonBytes(snapshot)
  const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-WoRMS-Foraminifera-exact-source-record-crosswalk',
    generatedFrom: { sourcePath: repoPath(options.output), sourceSha256: sha256(compressed), colRegistryManifestPath: repoPath(manifestPath), colRegistryManifestSha256: sha256(manifestBytes), retrievalDate: options.retrievedAt },
    scope: 'COL26.8 strict accepted species descending from root usage C (Chromista) whose sourceDatasetId is 1157 (World Foraminifera Database).',
    totals: snapshot.counts,
    upstreamOnly: snapshot.upstreamOnly,
    output: { path: repoPath(options.output), bytes: compressed.byteLength, sha256: sha256(compressed), sourceBytes: sourceBytes.byteLength, sourceSha256: sha256(sourceBytes), encoding: 'gzip', mediaType: 'application/json' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: sha256(readFileSync(SCRIPT_PATH)), deterministic: 'Pinned COL registry bytes, explicit retrieval date, complete source pages, exact relation URLs and response digests, stable record ordering and deterministic gzip.' },
  }
  mkdirSync(dirname(options.output), { recursive: true })
  mkdirSync(dirname(options.ledger), { recursive: true })
  writeFileSync(options.output, compressed)
  writeFileSync(options.ledger, canonicalJsonBytes(ledger))
  console.log(JSON.stringify({ output: ledger.output, counts: snapshot.counts, upstreamOnly: snapshot.upstreamOnly }, null, 2))
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
