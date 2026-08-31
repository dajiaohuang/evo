import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_SPECIES_SHARD = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'bacteria', 'species-000.jsonl.gz')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'bacteria-lpsn-crosswalk-col26.8.json.gz')
const DEFAULT_CHECKPOINT = join(REPOSITORY_ROOT, 'data', 'sources', 'bacteria-lpsn-crosswalk-col26.8.checkpoint.jsonl.local')
const CHECKLISTBANK_DATASET_KEY = 316115
const SOURCE_DATASET_KEY = 2015
const SOURCE_DATASET_VERSION = '2026-07-26'
const CATALOGUE_RELEASE = 'COL26.8'
const CATALOGUE_RELEASE_DATE = '2026-08-20'
const EXPECTED_ACCEPTED_SPECIES = 26397
const EXPECTED_ELIGIBLE = 21570
const ENDPOINT_TEMPLATE = `https://api.checklistbank.org/dataset/${CHECKLISTBANK_DATASET_KEY}/nameusage/{colId}/source`
const LPSN_URL_TEMPLATE = 'https://lpsn.dsmz.de/taxon/{lpsnId}'

function parseArgs(argv) {
  const options = {
    speciesShard: DEFAULT_SPECIES_SHARD,
    output: DEFAULT_OUTPUT,
    checkpoint: DEFAULT_CHECKPOINT,
    retrievedAt: null,
    concurrency: 6,
    requestIntervalMs: 75,
    maxRetries: 5,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--species-shard') options.speciesShard = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--checkpoint') options.checkpoint = resolve(argv[++index])
    else if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--concurrency') options.concurrency = Number(argv[++index])
    else if (value === '--request-interval-ms') options.requestIntervalMs = Number(argv[++index])
    else if (value === '--max-retries') options.maxRetries = Number(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-bacteria-lpsn-crosswalk.mjs --retrieved-at YYYY-MM-DD [options]',
    '',
    'Fetches only sourceDatasetId=2015 usage source records from pinned ChecklistBank dataset 316115.',
    'The append-only checkpoint is resumable; normal builds remain offline.',
    '',
    '  --concurrency <1..8>          Concurrent workers (default 6)',
    '  --request-interval-ms <n>     Minimum delay between request starts (default 75)',
    '  --max-retries <n>             Retries for 429/5xx/network failures (default 5)',
    '  --checkpoint <path>           Append-only local checkpoint (*.local by default)',
  ].join('\n')
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function readSpecies(path) {
  return gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

function checkpointHeader(retrievedAt) {
  return {
    type: 'bacteria-lpsn-source-checkpoint',
    schemaVersion: 1,
    catalogueRelease: CATALOGUE_RELEASE,
    checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
    sourceDatasetKey: SOURCE_DATASET_KEY,
    sourceDatasetVersion: SOURCE_DATASET_VERSION,
    retrievedAt,
  }
}

function loadCheckpoint(path, retrievedAt, eligibleIds) {
  let text
  try {
    text = readFileSync(path, 'utf8')
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, `${JSON.stringify(checkpointHeader(retrievedAt))}\n`, 'utf8')
    return new Map()
  }
  const lines = text.split('\n').filter(Boolean)
  if (!lines.length) throw new Error(`Checkpoint is empty: ${path}`)
  const header = JSON.parse(lines.shift())
  if (JSON.stringify(header) !== JSON.stringify(checkpointHeader(retrievedAt))) {
    throw new Error(`Checkpoint belongs to a different release, source version, or retrieval date: ${path}`)
  }
  const records = new Map()
  for (const line of lines) {
    const record = JSON.parse(line)
    if (!eligibleIds.has(record.colId) || records.has(record.colId)
      || record.requestUrl !== ENDPOINT_TEMPLATE.replace('{colId}', encodeURIComponent(record.colId))
      || !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? '')
      || !['resolved', 'withheld'].includes(record.outcome)) {
      throw new Error(`Invalid or duplicate checkpoint record: ${record.colId ?? 'missing COL ID'}`)
    }
    records.set(record.colId, record)
  }
  return records
}

function delay(milliseconds) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))
}

function createRateLimiter(intervalMs) {
  let nextStartAt = 0
  return async () => {
    const now = Date.now()
    const wait = Math.max(0, nextStartAt - now)
    nextStartAt = Math.max(now, nextStartAt) + intervalMs
    if (wait) await delay(wait)
  }
}

function retryDelay(attempt) {
  return Math.min(10000, 500 * (2 ** attempt)) + Math.floor(Math.random() * 250)
}

async function fetchSourceRecord(species, options, waitForRateLimit) {
  const requestUrl = ENDPOINT_TEMPLATE.replace('{colId}', encodeURIComponent(species.id))
  for (let attempt = 0; attempt <= options.maxRetries; attempt += 1) {
    await waitForRateLimit()
    try {
      const response = await fetch(requestUrl, { headers: { accept: 'application/json' } })
      const responseBytes = Buffer.from(await response.arrayBuffer())
      if (!response.ok) {
        if ((response.status === 429 || response.status >= 500) && attempt < options.maxRetries) {
          await delay(retryDelay(attempt))
          continue
        }
        throw new Error(`${species.id}: ChecklistBank returned HTTP ${response.status}`)
      }
      const source = JSON.parse(responseBytes.toString('utf8'))
      const base = {
        colId: species.id,
        requestUrl,
        sourceResponseSha256: sha256(responseBytes),
      }
      if (source.datasetKey !== CHECKLISTBANK_DATASET_KEY
        || source.sourceDatasetKey !== SOURCE_DATASET_KEY
        || source.sourceEntity !== 'name usage'
        || !/^\d+$/.test(String(source.sourceId ?? ''))) {
        return {
          ...base,
          outcome: 'withheld',
          reason: 'source-record-not-lpsn',
          observedSourceDatasetKey: source.sourceDatasetKey ?? null,
          observedSourceEntity: source.sourceEntity ?? null,
          observedSourceId: source.sourceId == null ? null : String(source.sourceId),
        }
      }
      const lpsnId = String(source.sourceId)
      return {
        ...base,
        outcome: 'resolved',
        lpsnId,
        lpsnUrl: LPSN_URL_TEMPLATE.replace('{lpsnId}', lpsnId),
        mappingBasis: 'checklistbank-source-record',
      }
    } catch (error) {
      if (attempt >= options.maxRetries) throw error
      await delay(retryDelay(attempt))
    }
  }
  throw new Error(`${species.id}: retry loop ended unexpectedly`)
}

async function fetchMissing(speciesRecords, checkpoint, options) {
  const missing = speciesRecords.filter((record) => !checkpoint.has(record.id))
  if (!missing.length) return
  const waitForRateLimit = createRateLimiter(options.requestIntervalMs)
  let nextIndex = 0
  let completed = checkpoint.size
  async function worker() {
    while (nextIndex < missing.length) {
      const index = nextIndex
      nextIndex += 1
      const record = await fetchSourceRecord(missing[index], options, waitForRateLimit)
      appendFileSync(options.checkpoint, `${JSON.stringify(record)}\n`, 'utf8')
      checkpoint.set(record.colId, record)
      completed += 1
      if (completed % 250 === 0 || completed === speciesRecords.length) {
        console.log(`Checkpointed ${completed}/${speciesRecords.length} eligible source records`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(options.concurrency, missing.length) }, () => worker()))
}

function writeSnapshot(speciesRecords, eligibleRecords, checkpoint, options) {
  const resolved = []
  const withheldEligible = []
  for (const species of eligibleRecords) {
    const result = checkpoint.get(species.id)
    if (!result) throw new Error(`Eligible record is absent from checkpoint: ${species.id}`)
    if (result.outcome === 'resolved') {
      resolved.push({
        colId: result.colId,
        lpsnId: result.lpsnId,
        lpsnUrl: result.lpsnUrl,
        mappingBasis: result.mappingBasis,
        status: 'resolved',
        sourceResponseSha256: result.sourceResponseSha256,
      })
    } else {
      withheldEligible.push({
        colId: result.colId,
        sourceDatasetId: String(SOURCE_DATASET_KEY),
        reason: result.reason,
        sourceResponseSha256: result.sourceResponseSha256,
        observedSourceDatasetKey: result.observedSourceDatasetKey,
        observedSourceEntity: result.observedSourceEntity,
        observedSourceId: result.observedSourceId,
      })
    }
  }
  const withheldIneligible = speciesRecords
    .filter((record) => String(record.sourceDatasetId) !== String(SOURCE_DATASET_KEY))
    .map((record) => ({
      colId: record.id,
      sourceDatasetId: record.sourceDatasetId == null ? null : String(record.sourceDatasetId),
      reason: record.sourceDatasetId == null ? 'missing-source-dataset-id' : 'source-dataset-not-lpsn',
    }))
  const withheldRecords = [...withheldIneligible, ...withheldEligible]
    .sort((left, right) => left.colId.localeCompare(right.colId))
  const requestLedgerBytes = Buffer.from(`${eligibleRecords.map((species) => {
    const result = checkpoint.get(species.id)
    return JSON.stringify({ colId: species.id, requestUrl: result.requestUrl, sourceResponseSha256: result.sourceResponseSha256 })
  }).join('\n')}\n`, 'utf8')
  const snapshot = {
    schemaVersion: 1,
    crosswalkType: 'release-pinned-external-name-identifier-crosswalk',
    source: {
      provider: 'LPSN',
      catalogueRelease: CATALOGUE_RELEASE,
      catalogueReleaseDate: CATALOGUE_RELEASE_DATE,
      checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
      sourceDatasetKey: SOURCE_DATASET_KEY,
      sourceDatasetVersion: SOURCE_DATASET_VERSION,
      retrievedAt: options.retrievedAt,
      endpointTemplate: ENDPOINT_TEMPLATE,
      lpsnUrlTemplate: LPSN_URL_TEMPLATE,
      informationUrl: 'https://lpsn.dsmz.de/',
      license: 'CC-BY-SA-4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      citation: 'Freese et al. (2026), List of Prokaryotic names with Standing in Nomenclature (LPSN), https://doi.org/10.1093/nar/gkaf1110',
    },
    eligibility: {
      acceptedSpeciesPredicate: 'rank=species AND status=accepted in the Bacteria resource pack',
      eligiblePredicate: 'sourceDatasetId=2015',
      withheldPredicate: 'sourceDatasetId is missing or is not 2015, or the pinned usage source record is not an LPSN name usage with a numeric sourceId',
    },
    integrity: {
      algorithm: 'sha256',
      responseHashBasis: 'Exact UTF-8 response bytes returned by the pinned ChecklistBank source-record endpoint.',
      requestCount: eligibleRecords.length,
      requestLedgerSha256: sha256(requestLedgerBytes),
    },
    counts: {
      acceptedSpecies: speciesRecords.length,
      eligible: eligibleRecords.length,
      resolved: resolved.length,
      withheld: withheldRecords.length,
      withheldIneligible: withheldIneligible.length,
      withheldEligible: withheldEligible.length,
    },
    records: resolved,
    withheldRecords,
  }
  mkdirSync(dirname(options.output), { recursive: true })
  const sourceBytes = Buffer.from(`${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  writeFileSync(options.output, Buffer.from(deterministicGzip(sourceBytes, { level: 9 })))
  console.log(`Wrote ${resolved.length} resolved LPSN mappings and ${withheldRecords.length} withheld records to ${options.output}`)
  console.log(`Request ledger SHA-256: ${snapshot.integrity.requestLedgerSha256}`)
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(options.retrievedAt ?? '')) throw new Error('--retrieved-at must be an explicit YYYY-MM-DD date')
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1 || options.concurrency > 8) throw new Error('--concurrency must be an integer from 1 to 8')
  if (!Number.isInteger(options.requestIntervalMs) || options.requestIntervalMs < 25) throw new Error('--request-interval-ms must be an integer of at least 25')
  if (!Number.isInteger(options.maxRetries) || options.maxRetries < 0 || options.maxRetries > 10) throw new Error('--max-retries must be an integer from 0 to 10')

  const speciesRecords = readSpecies(options.speciesShard)
  if (speciesRecords.length !== EXPECTED_ACCEPTED_SPECIES
    || speciesRecords.some((record) => record.rank !== 'species' || record.status !== 'accepted')) {
    throw new Error(`Expected ${EXPECTED_ACCEPTED_SPECIES} strict accepted COL26.8 Bacteria species`)
  }
  const eligibleRecords = speciesRecords.filter((record) => String(record.sourceDatasetId) === String(SOURCE_DATASET_KEY))
  if (eligibleRecords.length !== EXPECTED_ELIGIBLE) {
    throw new Error(`Expected ${EXPECTED_ELIGIBLE} sourceDatasetId=2015 Bacteria species, found ${eligibleRecords.length}`)
  }
  const eligibleIds = new Set(eligibleRecords.map((record) => record.id))
  const checkpoint = loadCheckpoint(options.checkpoint, options.retrievedAt, eligibleIds)
  console.log(`Resuming from ${checkpoint.size}/${eligibleRecords.length} eligible source records`)
  await fetchMissing(eligibleRecords, checkpoint, options)
  writeSnapshot(speciesRecords, eligibleRecords, checkpoint, options)
}

await main()
