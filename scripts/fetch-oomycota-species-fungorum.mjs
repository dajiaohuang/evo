import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(SCRIPT_PATH), '..')
const HIERARCHY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry', 'hierarchy', 'children')
const OUTPUT = join(ROOT, 'data', 'sources', 'oomycota-species-fungorum-crosswalk-col26.8.json.gz')
const RETRIEVED_AT = process.argv[2]
const CHECKLIST_ENDPOINT = 'https://api.checklistbank.org/dataset/316115/nameusage/{colId}/source'
const INDEX_ENDPOINT = 'https://www.indexfungorum.org/ixfwebservice/fungus.asmx/NameByKey?NameKey={sourceId}'

if (!/^\d{4}-\d{2}-\d{2}$/.test(RETRIEVED_AT ?? '')) throw new Error('usage: node scripts/fetch-oomycota-species-fungorum.mjs YYYY-MM-DD')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms))

function readOomycotaSpecies() {
  const records = []
  for (const file of readdirSync(HIERARCHY_ROOT).filter((name) => name.endsWith('.gz'))) {
    const lines = gunzipSync(readFileSync(join(HIERARCHY_ROOT, file))).toString('utf8').split('\n')
    for (const line of lines) if (line) records.push(JSON.parse(line))
  }
  const byId = new Map(records.map((record) => [record.id, record]))
  const selected = records.filter((record) => record.sourceDatasetId === '2073' && record.rank === 'species' && record.status === 'accepted')
    .filter((record) => {
      let current = record
      for (let depth = 0; depth < 100 && current; depth += 1) {
        if (current.parentId === '5K') return true
        current = byId.get(current.parentId)
      }
      return false
    })
  if (selected.length !== 1673) throw new Error(`Expected 1673 COL Oomycota species, got ${selected.length}`)
  return selected.sort((left, right) => left.id.localeCompare(right.id))
}

async function fetchBytes(url, retries = 5) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { accept: '*/*' } })
      const bytes = Buffer.from(await response.arrayBuffer())
      if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`)
      return { requestUrl: url, responseUrl: response.url, responseDate: response.headers.get('date'), bytes, byteCount: bytes.byteLength, sha256: sha256(bytes) }
    } catch (error) {
      if (attempt >= retries) throw error
      await sleep(Math.min(10000, 500 * (2 ** attempt)))
    }
  }
  throw new Error(`request failed: ${url}`)
}

async function mapConcurrent(records, workerCount, worker) {
  const output = new Array(records.length)
  let next = 0
  async function run() {
    while (true) {
      const index = next
      next += 1
      if (index >= records.length) return
      output[index] = await worker(records[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(workerCount, records.length) }, run))
  return output
}

function xmlValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  if (!match) return null
  return match[1].replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&apos;', "'").trim() || null
}

const colRecords = readOomycotaSpecies()
const sourceResponses = await mapConcurrent(colRecords, 8, async (record) => {
  const response = await fetchBytes(CHECKLIST_ENDPOINT.replace('{colId}', encodeURIComponent(record.id)))
  const payload = JSON.parse(response.bytes.toString('utf8'))
  if (String(payload.sourceDatasetKey) !== '2073' || payload.sourceEntity !== 'name usage' || !/^\d+$/.test(String(payload.sourceId))) {
    throw new Error(`Unexpected ChecklistBank source for ${record.id}`)
  }
  return { record, response, sourceId: String(payload.sourceId) }
})
const authorityResponses = await mapConcurrent(sourceResponses, 4, async ({ record, response, sourceId }) => {
  const request = await fetchBytes(INDEX_ENDPOINT.replace('{sourceId}', encodeURIComponent(sourceId)))
  const xml = request.bytes.toString('utf8')
  const phylum = xmlValue(xml, 'Phylum_x0020_name')
  if (!xmlValue(xml, 'RECORD_x0020_NUMBER')) throw new Error(`${record.id}/${sourceId} returned no Index Fungorum record`)
  return {
    colId: record.id,
    sourceDatasetId: '2073',
    scientificName: record.scientificName,
    authorship: record.authorship,
    rank: record.rank,
    status: record.status,
    indexFungorumId: sourceId,
    indexFungorumUrl: `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${sourceId}`,
    indexFungorumName: xmlValue(xml, 'NAME_x0020_OF_x0020_FUNGUS'),
    indexFungorumAuthors: xmlValue(xml, 'AUTHORS'),
    currentUse: xmlValue(xml, 'Current_x0020_Use'),
    taxonomicReferee: xmlValue(xml, 'TAXONOMIC_x0020_REFEREE'),
    updatedDate: xmlValue(xml, 'UpdatedDate'),
    phylum,
    mappingBasis: 'COL-oomycota-root-plus-checklistbank-source-plus-index-fungorum-namebykey',
    checklistBankSourceEndpoint: response.requestUrl,
    checklistBankSourceResponseDate: response.responseDate,
    checklistBankSourceResponseBytes: response.byteCount,
    checklistBankSourceResponseSha256: response.sha256,
    indexFungorumEndpoint: request.requestUrl,
    indexFungorumResponseDate: request.responseDate,
    indexFungorumResponseBytes: request.byteCount,
    indexFungorumResponseSha256: request.sha256,
  }
})
const seenCol = new Set(authorityResponses.map((record) => record.colId))
const seenAuthority = new Set(authorityResponses.map((record) => record.indexFungorumId))
if (seenCol.size !== 1673 || seenAuthority.size !== 1673) throw new Error(`Oomycota completeness check failed: col=${seenCol.size} authority=${seenAuthority.size}`)
const currentUse = Object.groupBy(authorityResponses, (record) => record.currentUse ?? 'missing')
const observedPhylum = Object.groupBy(authorityResponses, (record) => record.phylum ?? 'missing')
const requestLedger = Buffer.from(`${authorityResponses.map((record) => JSON.stringify({
  colId: record.colId, sourceId: record.indexFungorumId, checklistBankSourceEndpoint: record.checklistBankSourceEndpoint,
  checklistBankSourceResponseSha256: record.checklistBankSourceResponseSha256, indexFungorumEndpoint: record.indexFungorumEndpoint,
  indexFungorumResponseSha256: record.indexFungorumResponseSha256,
})).join('\n')}\n`, 'utf8')
const recordLedger = Buffer.from(`${authorityResponses.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const snapshot = {
  schemaVersion: 1,
  crosswalkType: 'release-pinned-oomycota-species-fungorum-identifier-crosswalk',
  source: {
    provider: 'Species Fungorum / Index Fungorum through ChecklistBank source links',
    catalogueRelease: 'COL26.8', catalogueReleaseDate: '2026-08-20', checklistBankDatasetKey: 316115,
    sourceDatasetKey: '2073', sourceDatasetTitle: 'Species Fungorum Plus', sourceDatasetVersion: 'Apr 2024',
    sourceDatasetIssued: '2024-04-28', sourceDatasetDoi: '10.48580/d4hj.v14', sourceDatasetLicense: 'CC-BY-4.0',
    sourceDatasetLicenseUrl: 'https://creativecommons.org/licenses/by/4.0/', retrievedAt: RETRIEVED_AT,
    rootColUsageId: '5K', rootColScientificName: 'Oomycota', eligibleSpecies: 1673,
    checklistBankSourceEndpointTemplate: CHECKLIST_ENDPOINT, indexFungorumEndpointTemplate: INDEX_ENDPOINT,
    rightsEvidence: {
      speciesFungorumDataUrl: 'https://www.speciesfungorum.org/Data.asp',
      kewTermsUrl: 'https://www.kew.org/science/collections-and-resources/data-and-digital/terms-of-use',
      boundary: 'Kew permits software applications to use site data, requires attribution where CC-BY applies, asks extracted re-use to state that Kew cannot warrant quality or accuracy, and prohibits endorsement claims. No bulk database or page content is copied; only the declared identifier/name/status fields and request hashes are retained.',
    },
  },
  counts: { eligible: 1673, resolved: 1673, accepted: 1673, redirects: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 0 },
  observations: { currentUse: Object.fromEntries(Object.entries(currentUse).map(([key, value]) => [key, value.length])), phylum: Object.fromEntries(Object.entries(observedPhylum).map(([key, value]) => [key, value.length])) },
  fields: Object.keys(authorityResponses[0]),
  records: authorityResponses,
  integrity: { algorithm: 'sha256', requestCount: 3346, requestLedgerSha256: sha256(requestLedger), recordLedgerSha256: sha256(recordLedger) },
  limitations: ['Release-scoped exact COL Oomycota identifier crosswalk; not a complete fungal taxonomy or biological dossier.', 'Index Fungorum NameByKey is a live endpoint. Response dates and hashes are retained; reruns may observe later edits.', 'The COL root scope is authoritative for eligibility; live Index Fungorum classification fields are observations and are not used to silently drop records when its phylum/current-use fields differ.', 'Attribution: Species Fungorum / Index Fungorum, Royal Botanic Gardens, Kew; Kew cannot warrant quality or accuracy of extracted data.'],
}
mkdirSync(dirname(OUTPUT), { recursive: true })
const json = Buffer.from(`${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
const compressed = Buffer.from(deterministicGzip(json, { level: 9 }))
writeFileSync(OUTPUT, compressed)
console.log(JSON.stringify({ output: OUTPUT, records: authorityResponses.length, compressedBytes: compressed.byteLength, sourceBytes: json.byteLength, sha256: sha256(compressed), requestLedgerSha256: sha256(requestLedger), recordLedgerSha256: sha256(recordLedger) }, null, 2))
