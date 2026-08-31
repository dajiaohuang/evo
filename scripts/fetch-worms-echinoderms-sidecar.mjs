import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { fileURLToPath } from 'node:url'
import { createGunzip, gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  colExactMatchName,
  matchColSpecies,
  sortCrosswalkRecords,
} from './worms-echinoderms-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const DEFAULT_SOURCE_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'worms-echinoderms-2026-08-31.json')
const DEFAULT_LEDGER_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'worms-echinoderms-import-ledger.json')
const DEFAULT_SIDECAR_OUTPUT = join(REPOSITORY_ROOT, 'data', 'packages', 'invertebrata', 'echinoderms', 'nomenclature', 'worms-aphiaid-sidecar.json.gz')
const APHIA_ENDPOINT = 'https://www.marinespecies.org/rest/AphiaRecordsByNames'
const EXPECTED_SPECIES = 11_891
const ECHINODERM_ROOT_ID = 'CHN'
const MAX_NAMES_PER_REQUEST = 500
const MAX_REQUEST_URL_LENGTH = 7_500
const REQUEST_DELAY_MS = 250
const LICENSE_SCOPE = 'WoRMS explicitly licenses its page text under CC BY 4.0, asks data users to cite WoRMS, encourages use of its webservice, and separately prohibits redistribution of the entire database without prior written agreement. The pinned COL26.8 source ledger identifies all five contributing WoRMS echinoderm component checklists as CC BY 4.0. This import redistributes only a minimal derived identifier/status crosswalk for a pre-existing list of 11,891 COL26.8 usages; it excludes distributions, traits, notes, images, literature, classifications beyond the Echinodermata filter, and raw response bodies.'
const EXPECTED_SOURCE_COUNTS = {
  '1059': 2500,
  '1095': 2563,
  '1106': 4235,
  '1107': 1869,
  '2300': 724,
}
const STATUS_KEYS = {
  accepted: 'accepted',
  'accepted-name-redirect': 'acceptedNameRedirect',
  ambiguous: 'ambiguous',
  unmatched: 'unmatched',
  withheld: 'withheld',
}

function parseArgs(argv) {
  const options = {
    registryRoot: DEFAULT_REGISTRY_ROOT,
    ownershipPath: DEFAULT_OWNERSHIP_PATH,
    sourceOutput: DEFAULT_SOURCE_OUTPUT,
    ledgerOutput: DEFAULT_LEDGER_OUTPUT,
    sidecarOutput: DEFAULT_SIDECAR_OUTPUT,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--source-output') options.sourceOutput = resolve(argv[++index])
    else if (value === '--ledger-output') options.ledgerOutput = resolve(argv[++index])
    else if (value === '--sidecar-output') options.sidecarOutput = resolve(argv[++index])
    else if (value === '--refresh-local') options.refreshLocal = true
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-worms-echinoderms-sidecar.mjs --retrieved-at <RFC3339 instant> [options]',
    '',
    'Fetches only exact WoRMS AphiaRecordsByNames results for the pinned COL26.8',
    'echinoderm species list. It never calls the fuzzy match endpoint and does',
    'not retain raw API responses after recording their SHA-256 checksums.',
    '',
    '--refresh-local reuses the checked-in response ledger and sidecar only when',
    'the pinned COL registry manifest and exact 11,891-member set are unchanged.',
  ].join('\n')
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

function jsonBytes(value) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function repoPath(path) {
  return path.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/')
}

async function forEachGzipJsonLine(path, visit) {
  const input = createReadStream(path).pipe(createGunzip())
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) {
    if (line) visit(JSON.parse(line))
  }
}

function registryFiles(registryRoot, manifest) {
  return manifest.hierarchy.nodes.files
    .map((file) => join(registryRoot, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
}

async function loadColEchinodermSpecies(registryRoot, manifest) {
  const nodes = new Map()
  for (const path of registryFiles(registryRoot, manifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species') nodes.set(record.id, { parentId: record.parentId })
    })
  }
  const records = []
  for (const path of registryFiles(registryRoot, manifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species' || record.status !== 'accepted') return
      let ancestorId = record.parentId
      while (ancestorId && ancestorId !== ECHINODERM_ROOT_ID) {
        const node = nodes.get(ancestorId)
        if (!node) throw new Error(`COL lineage is broken for ${record.id} at ${ancestorId}`)
        ancestorId = node.parentId
      }
      if (ancestorId === ECHINODERM_ROOT_ID) records.push(record)
    })
  }
  records.sort((left, right) => left.id.localeCompare(right.id))
  return records
}

function requestUrl(names) {
  const url = new URL(APHIA_ENDPOINT)
  for (const name of names) url.searchParams.append('scientificnames[]', name)
  url.searchParams.set('like', 'false')
  url.searchParams.set('marine_only', 'false')
  url.searchParams.set('extant_only', 'false')
  return url.toString()
}

function buildRequestBatches(records) {
  const batches = []
  let current = []
  for (const record of records) {
    const name = colExactMatchName(record).exactMatchName
    const candidate = [...current, { record, name }]
    if (current.length && (
      candidate.length > MAX_NAMES_PER_REQUEST
      || requestUrl(candidate.map((entry) => entry.name)).length > MAX_REQUEST_URL_LENGTH
    )) {
      batches.push(current)
      current = []
    }
    current.push({ record, name })
  }
  if (current.length) batches.push(current)
  return batches
}

function delay(milliseconds) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))
}

async function fetchBatch(url, expectedResults) {
  let lastError
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          'user-agent': 'Evo-Atlas-WoRMS-exact-crosswalk/1.0 (+https://github.com/dajiaohuang/evo)',
        },
      })
      const bytes = Buffer.from(await response.arrayBuffer())
      if (response.status === 204) {
        return {
          bytes,
          records: Array.from({ length: expectedResults }, () => []),
          responseDate: response.headers.get('date'),
        }
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${bytes.toString('utf8').slice(0, 300)}`)
      const records = JSON.parse(bytes.toString('utf8'))
      if (!Array.isArray(records) || records.length !== expectedResults) {
        throw new Error(`WoRMS returned ${records?.length ?? 'non-array'} result groups for ${expectedResults} names`)
      }
      return { bytes, records, responseDate: response.headers.get('date') }
    } catch (error) {
      lastError = error
      if (attempt < 3) await delay(500 * attempt)
    }
  }
  throw lastError
}

function emptyGroups() {
  return {
    accepted: [],
    acceptedNameRedirect: [],
    ambiguous: [],
    unmatched: [],
    withheld: [],
  }
}

function countsFor(groups) {
  return {
    total: Object.values(groups).reduce((sum, records) => sum + records.length, 0),
    accepted: groups.accepted.length,
    acceptedNameRedirect: groups.acceptedNameRedirect.length,
    ambiguous: groups.ambiguous.length,
    unmatched: groups.unmatched.length,
    withheld: groups.withheld.length,
  }
}

function removeNonNomenclaturalFields(value) {
  if (Array.isArray(value)) {
    for (const entry of value) removeNonNomenclaturalFields(entry)
    return
  }
  if (!value || typeof value !== 'object') return
  delete value.isExtinct
  for (const entry of Object.values(value)) removeNonNomenclaturalFields(entry)
}

async function refreshLocalOutputs({
  options,
  manifestPath,
  manifestBytes,
  ownershipBytes,
  sourceCounts,
  colRecords,
}) {
  const source = JSON.parse(readFileSync(options.sourceOutput, 'utf8'))
  const currentManifestSha256 = sha256(manifestBytes)
  if (source.colInput?.registryManifestSha256 !== currentManifestSha256
    || source.colInput?.acceptedSpecies !== EXPECTED_SPECIES
    || JSON.stringify(source.colInput?.sourceDatasetCounts) !== JSON.stringify(sourceCounts)) {
    throw new Error('Local refresh requires the exact pinned COL registry manifest, membership count and source composition')
  }
  source.colInput.ownershipSha256 = sha256(ownershipBytes)
  source.license.scope = LICENSE_SCOPE
  const previousSidecarBytes = readFileSync(options.sidecarOutput)
  const sidecar = JSON.parse(gunzipSync(previousSidecarBytes).toString('utf8'))
  removeNonNomenclaturalFields(sidecar)
  const sidecarRecords = Object.values(sidecar.records ?? {}).flat()
  const colIds = new Set(colRecords.map((record) => String(record.id)))
  const sidecarIds = new Set(sidecarRecords.map((record) => String(record.colUsageId)))
  if (sidecarRecords.length !== EXPECTED_SPECIES
    || sidecarIds.size !== EXPECTED_SPECIES
    || colIds.size !== EXPECTED_SPECIES
    || [...colIds].some((id) => !sidecarIds.has(id))) {
    throw new Error('Local refresh requires the exact checked-in 11,891-member sidecar')
  }

  const sourceBytes = jsonBytes(source)
  const sourceSha256 = sha256(sourceBytes)
  sidecar.sources.col.registryManifestPath = repoPath(manifestPath)
  sidecar.sources.worms.sourceLedgerPath = repoPath(options.sourceOutput)
  sidecar.sources.worms.sourceLedgerSha256 = sourceSha256
  sidecar.exactMatching = source.matchingContract
  const sidecarSourceBytes = jsonBytes(sidecar)
  const sidecarBytes = Buffer.from(deterministicGzip(sidecarSourceBytes, { level: 9 }))

  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-WoRMS-exact-echinoderm-nomenclatural-sidecar',
    generatedFrom: {
      sourcePath: repoPath(options.sourceOutput),
      sourceSha256,
      colRegistryManifestPath: repoPath(manifestPath),
      colRegistryManifestSha256: currentManifestSha256,
      colOwnershipPath: repoPath(options.ownershipPath),
      colOwnershipSha256: sha256(ownershipBytes),
    },
    matchingContract: source.matchingContract,
    totals: sidecar.counts,
    output: {
      packageId: 'echinoderms',
      path: repoPath(options.sidecarOutput),
      records: sidecar.counts.total,
      bytes: sidecarBytes.byteLength,
      sha256: sha256(sidecarBytes),
      sourceBytes: sidecarSourceBytes.byteLength,
      sourceSha256: sha256(sidecarSourceBytes),
      encoding: 'gzip',
      mediaType: 'application/json',
    },
    generatedBy: {
      scriptPath: repoPath(SCRIPT_PATH),
      scriptSha256: await sha256File(SCRIPT_PATH),
      deterministic: 'Explicit retrieval instant, pinned COL inputs, exact request URLs, response checksums, exact normalization, stable record sorting and deterministic gzip metadata.',
    },
  }
  writeFileSync(options.sourceOutput, sourceBytes)
  writeFileSync(options.sidecarOutput, sidecarBytes)
  writeFileSync(options.ledgerOutput, jsonBytes(ledger))
  console.log(JSON.stringify({ refreshedLocalInputs: true, source: repoPath(options.sourceOutput), sidecar: ledger.output, totals: ledger.totals }, null, 2))
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!options.refreshLocal && (!options.retrievedAt || Number.isNaN(Date.parse(options.retrievedAt)))) {
    throw new Error('--retrieved-at must be an explicit RFC3339 instant')
  }
  const retrievedAt = options.refreshLocal ? null : new Date(options.retrievedAt).toISOString()
  const retrievedOn = retrievedAt?.slice(0, 10) ?? null
  if (!options.refreshLocal && retrievedOn !== '2026-08-31') throw new Error('This source snapshot is pinned to 2026-08-31')

  const manifestPath = join(options.registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes.toString('utf8'))
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  if (ownership.source?.releaseAlias !== 'COL26.8'
    || ownership.packageCounts?.echinoderms !== EXPECTED_SPECIES) {
    throw new Error('COL ownership projection is not the pinned 11,891-species echinoderms scope')
  }

  const colRecords = await loadColEchinodermSpecies(options.registryRoot, manifest)
  if (colRecords.length !== EXPECTED_SPECIES) {
    throw new Error(`COL echinoderm species count changed: ${colRecords.length}`)
  }
  const sourceCounts = Object.fromEntries(Object.keys(EXPECTED_SOURCE_COUNTS).map((id) => [id, 0]))
  for (const record of colRecords) {
    const sourceId = String(record.sourceDatasetId)
    if (!(sourceId in sourceCounts)) throw new Error(`Unexpected COL source dataset for ${record.id}: ${sourceId}`)
    sourceCounts[sourceId] += 1
  }
  if (JSON.stringify(sourceCounts) !== JSON.stringify(EXPECTED_SOURCE_COUNTS)) {
    throw new Error(`COL source composition changed: ${JSON.stringify(sourceCounts)}`)
  }

  if (options.refreshLocal) {
    await refreshLocalOutputs({
      options,
      manifestPath,
      manifestBytes,
      ownershipBytes,
      sourceCounts,
      colRecords,
    })
    return
  }

  const groups = emptyGroups()
  const matchable = []
  for (const record of colRecords) {
    if (colExactMatchName(record).matchable) matchable.push(record)
    else {
      const result = matchColSpecies(record, [], null)
      groups[STATUS_KEYS[result.status]].push(result.record)
    }
  }
  const locallyWithheldNames = groups.withheld.length

  const batches = buildRequestBatches(matchable)
  const requests = []
  for (const [batchOffset, batch] of batches.entries()) {
    const batchNumber = batchOffset + 1
    const url = requestUrl(batch.map((entry) => entry.name))
    const response = await fetchBatch(url, batch.length)
    requests.push({
      batch: batchNumber,
      method: 'GET',
      url,
      names: batch.length,
      responseDate: response.responseDate,
      responseBytes: response.bytes.byteLength,
      responseSha256: sha256(response.bytes),
    })
    for (const [index, entry] of batch.entries()) {
      const result = matchColSpecies(entry.record, response.records[index], batchNumber)
      groups[STATUS_KEYS[result.status]].push(result.record)
    }
    if (batchNumber < batches.length) await delay(REQUEST_DELAY_MS)
    console.log(`WoRMS exact batch ${batchNumber}/${batches.length}: ${batch.length} names`)
  }
  for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
  const counts = countsFor(groups)
  if (counts.total !== EXPECTED_SPECIES) throw new Error(`Sidecar membership changed: ${counts.total}`)

  const source = {
    schemaVersion: 1,
    datasetId: 'worms-echinoderms-2026-08-31',
    title: 'WoRMS Aphia exact-name responses for COL26.8 Echinodermata',
    publisher: 'World Register of Marine Species (WoRMS), hosted by the Flanders Marine Institute (VLIZ)',
    releaseBoundary: {
      type: 'date-pinned-continuously-updated-service',
      retrievedAt,
      statement: 'WoRMS is continuously updated and does not expose a semantic or immutable release version through this REST endpoint. This snapshot is bounded by the recorded retrieval instant and raw response checksums.',
    },
    license: {
      spdx: 'CC-BY-4.0',
      label: 'Creative Commons Attribution 4.0, subject to WoRMS terms of use',
      url: 'https://creativecommons.org/licenses/by/4.0/',
      officialTermsUrl: 'https://www.marinespecies.org/about.php',
      officialCitationUrl: 'https://www.marinespecies.org/about.php',
      scope: LICENSE_SCOPE,
    },
    citation: {
      doi: '10.14284/170',
      text: `WoRMS Editorial Board (2026). World Register of Marine Species. Available from https://www.marinespecies.org at VLIZ. Accessed ${retrievedOn}. https://doi.org/10.14284/170`,
    },
    api: {
      documentationUrl: 'https://www.marinespecies.org/rest/',
      openApiUrl: 'https://www.marinespecies.org/rest/api-docs/openapi.yaml',
      serviceVersion: '1.0.0',
      endpoint: APHIA_ENDPOINT,
      query: {
        like: false,
        marine_only: false,
        extant_only: false,
      },
      officialLimit: 'AphiaRecordsByNames accepts at most 500 names per request.',
      harvestingBoundary: 'The official webservice page forbids using the service to harvest WoRMS completely. These requests resolve only the pinned COL26.8 Echinodermata species list.',
    },
    acquisition: {
      retrievedAt,
      requestCount: requests.length,
      requestedNames: matchable.length,
      locallyWithheldNames,
      responseWithheldNames: groups.withheld.length - locallyWithheldNames,
      requests,
      rawResponsesCommitted: false,
      recovery: 'Re-run scripts/fetch-worms-echinoderms-sidecar.mjs with the recorded retrieval instant only when reconstructing this acquisition. Compare every raw response SHA-256 before accepting equivalence; a later WoRMS response is a new dated snapshot even when the request URL is unchanged.',
    },
    colInput: {
      releaseAlias: 'COL26.8',
      releaseDate: '2026-08-20',
      checklistBankDatasetKey: 316115,
      registryManifestPath: repoPath(manifestPath),
      registryManifestSha256: sha256(manifestBytes),
      ownershipPath: repoPath(options.ownershipPath),
      ownershipSha256: sha256(ownershipBytes),
      rootUsageId: ECHINODERM_ROOT_ID,
      strictPredicate: 'rank=species AND status=accepted',
      acceptedSpecies: EXPECTED_SPECIES,
      sourceDatasetCounts: sourceCounts,
    },
    matchingContract: {
      normalization: [
        'Remove the exact trailing COL authorship field only when that exact suffix is present.',
        'Normalize Unicode to NFC, replace underscores with spaces, collapse Unicode whitespace and trim.',
        'Preserve case, diacritics, punctuation, subgenus tokens and all other name tokens.',
      ],
      accepted: 'Exactly one WoRMS Echinodermata species target is returned with match_type=exact, and an accepted record directly equals the normalized COL query name.',
      acceptedNameRedirect: 'Exact WoRMS name evidence resolves to one explicit valid_AphiaID/current valid_name but the matching record is not itself the accepted record.',
      ambiguous: 'Exact WoRMS Echinodermata name evidence resolves to more than one valid_AphiaID.',
      unmatched: 'No Species-rank, Echinodermata, match_type=exact record equals the normalized COL query name.',
      withheld: 'The COL authorship boundary is unsafe or an exact WoRMS record lacks fields required to preserve its explicit accepted target.',
      forbidden: 'No fuzzy endpoint, like query, edit distance, phonetic, case-folded, diacritic-stripped, token-reordered, genus-substitution, authority-only or higher-rank match is permitted.',
    },
    limitations: [
      'This is a date-pinned nomenclatural crosswalk, not a frozen WoRMS release, a phylogeny, a species dossier, or a final classification authority.',
      'COL and WoRMS can differ in species concepts, status, authorship and update timing. Unmatched, ambiguous and withheld rows remain explicit.',
      'The raw API response bodies are not redistributed. Exact request URLs and response checksums preserve acquisition provenance without creating a WoRMS database mirror.',
    ],
  }
  mkdirSync(dirname(options.sourceOutput), { recursive: true })
  const sourceBytes = jsonBytes(source)
  writeFileSync(options.sourceOutput, sourceBytes)
  const sourceSha256 = sha256(sourceBytes)

  const sidecar = {
    schemaVersion: 1,
    sidecarType: 'date-pinned-exact-nomenclatural-crosswalk',
    packageId: 'echinoderms',
    sources: {
      col: {
        releaseAlias: 'COL26.8',
        releaseDate: '2026-08-20',
        registryManifestPath: repoPath(manifestPath),
      },
      worms: {
        datasetId: source.datasetId,
        retrievedAt,
        sourceLedgerPath: repoPath(options.sourceOutput),
        sourceLedgerSha256: sourceSha256,
        license: source.license.spdx,
        citationDoi: source.citation.doi,
      },
    },
    evidenceBoundary: {
      en: 'This CC BY WoRMS sidecar supplies date-pinned AphiaIDs and explicit accepted-name redirects for exact COL26.8 names. It is not a frozen WoRMS release, a phylogeny, a complete biological account, or evidence that COL and WoRMS use the same species concept.',
      zh: '此 CC BY WoRMS 侧车仅为 COL26.8 严格同名结果提供按日期固定的 AphiaID 与明确接受名重定向；它不是冻结的 WoRMS 版本、系统发育树、完整生物学档案，也不表示 COL 与 WoRMS 采用相同物种概念。',
    },
    exactMatching: source.matchingContract,
    counts,
    records: groups,
  }
  const sidecarSourceBytes = jsonBytes(sidecar)
  const sidecarBytes = Buffer.from(deterministicGzip(sidecarSourceBytes, { level: 9 }))
  mkdirSync(dirname(options.sidecarOutput), { recursive: true })
  writeFileSync(options.sidecarOutput, sidecarBytes)

  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-WoRMS-exact-echinoderm-nomenclatural-sidecar',
    generatedFrom: {
      sourcePath: repoPath(options.sourceOutput),
      sourceSha256,
      colRegistryManifestPath: repoPath(manifestPath),
      colRegistryManifestSha256: sha256(manifestBytes),
      colOwnershipPath: repoPath(options.ownershipPath),
      colOwnershipSha256: sha256(ownershipBytes),
    },
    matchingContract: source.matchingContract,
    totals: counts,
    output: {
      packageId: 'echinoderms',
      path: repoPath(options.sidecarOutput),
      records: counts.total,
      bytes: sidecarBytes.byteLength,
      sha256: sha256(sidecarBytes),
      sourceBytes: sidecarSourceBytes.byteLength,
      sourceSha256: sha256(sidecarSourceBytes),
      encoding: 'gzip',
      mediaType: 'application/json',
    },
    generatedBy: {
      scriptPath: repoPath(SCRIPT_PATH),
      scriptSha256: await sha256File(SCRIPT_PATH),
      deterministic: 'Explicit retrieval instant, pinned COL inputs, exact request URLs, response checksums, exact normalization, stable record sorting and deterministic gzip metadata.',
    },
  }
  mkdirSync(dirname(options.ledgerOutput), { recursive: true })
  writeFileSync(options.ledgerOutput, jsonBytes(ledger))
  console.log(JSON.stringify({ source: repoPath(options.sourceOutput), sidecar: ledger.output, totals: counts }, null, 2))
}

await main()
