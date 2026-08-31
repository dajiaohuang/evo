import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_SPECIES_SHARD = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'archaea', 'species-000.jsonl.gz')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'archaea-lpsn-crosswalk-col26.8.json')
const CHECKLISTBANK_DATASET_KEY = 316115
const SOURCE_DATASET_KEY = 2015
const SOURCE_DATASET_VERSION = '2026-07-26'
const CATALOGUE_RELEASE = 'COL26.8'
const CATALOGUE_RELEASE_DATE = '2026-08-20'
const ENDPOINT_TEMPLATE = `https://api.checklistbank.org/dataset/${CHECKLISTBANK_DATASET_KEY}/nameusage/{colId}/source`
const LPSN_URL_TEMPLATE = 'https://lpsn.dsmz.de/taxon/{lpsnId}'

function parseArgs(argv) {
  const options = { speciesShard: DEFAULT_SPECIES_SHARD, output: DEFAULT_OUTPUT, retrievedAt: null }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--species-shard') options.speciesShard = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-archaea-lpsn-crosswalk.mjs --retrieved-at YYYY-MM-DD [options]',
    '',
    'Fetches the pinned ChecklistBank source record for every species in the COL26.8 Archaea shard.',
    'This is an explicit snapshot refresh command; normal builds remain offline.',
  ].join('\n')
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function readSpecies(path) {
  return gunzipSync(readFileSync(path)).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

async function fetchSourceRecord(species) {
  const requestUrl = ENDPOINT_TEMPLATE.replace('{colId}', encodeURIComponent(species.id))
  const response = await fetch(requestUrl, { headers: { accept: 'application/json' } })
  const responseBytes = Buffer.from(await response.arrayBuffer())
  if (!response.ok) throw new Error(`${species.id}: ChecklistBank returned HTTP ${response.status}`)
  const source = JSON.parse(responseBytes.toString('utf8'))
  if (source.datasetKey !== CHECKLISTBANK_DATASET_KEY
    || source.sourceDatasetKey !== SOURCE_DATASET_KEY
    || source.sourceEntity !== 'name usage'
    || !/^\d+$/.test(String(source.sourceId ?? ''))) {
    throw new Error(`${species.id}: unexpected ChecklistBank source record ${responseBytes.toString('utf8')}`)
  }
  const lpsnId = String(source.sourceId)
  return {
    colId: species.id,
    lpsnId,
    lpsnUrl: LPSN_URL_TEMPLATE.replace('{lpsnId}', lpsnId),
    mappingBasis: 'checklistbank-source-record',
    status: 'resolved',
    sourceResponseSha256: sha256(responseBytes),
  }
}

async function fetchAll(speciesRecords, concurrency = 8) {
  const records = new Array(speciesRecords.length)
  let nextIndex = 0
  async function worker() {
    while (nextIndex < speciesRecords.length) {
      const index = nextIndex
      nextIndex += 1
      records[index] = await fetchSourceRecord(speciesRecords[index])
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, speciesRecords.length) }, () => worker()))
  return records
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(options.retrievedAt ?? '')) throw new Error('--retrieved-at must be an explicit YYYY-MM-DD date')

  const speciesRecords = readSpecies(options.speciesShard)
  if (speciesRecords.length !== 790) throw new Error(`Expected 790 COL26.8 Archaea species, found ${speciesRecords.length}`)
  if (speciesRecords.some((record) => record.rank !== 'species' || record.status !== 'accepted' || String(record.sourceDatasetId) !== String(SOURCE_DATASET_KEY))) {
    throw new Error('The selected shard is not the pinned 790-record LPSN-backed Archaea species set')
  }

  const records = await fetchAll(speciesRecords)
  const ledgerBytes = Buffer.from(`${records.map((record) => JSON.stringify({
    colId: record.colId,
    requestUrl: ENDPOINT_TEMPLATE.replace('{colId}', encodeURIComponent(record.colId)),
    sourceResponseSha256: record.sourceResponseSha256,
  })).join('\n')}\n`, 'utf8')
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
    integrity: {
      algorithm: 'sha256',
      responseHashBasis: 'Exact UTF-8 response bytes returned by the pinned ChecklistBank source-record endpoint.',
      requestCount: records.length,
      requestLedgerSha256: sha256(ledgerBytes),
    },
    counts: { eligible: speciesRecords.length, resolved: records.length, withheld: 0 },
    records,
  }
  mkdirSync(dirname(options.output), { recursive: true })
  writeFileSync(options.output, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${records.length} LPSN mappings to ${options.output}`)
  console.log(`Request ledger SHA-256: ${snapshot.integrity.requestLedgerSha256}`)
}

await main()
