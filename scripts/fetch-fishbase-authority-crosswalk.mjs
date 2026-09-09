import { createHash } from 'node:crypto'
import { createWriteStream, mkdirSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { createInterface } from 'node:readline'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'fishbase-authority-crosswalk-col26.8.json.gz')
const CATALOGUE_RELEASE = 'COL26.8'
const CATALOGUE_RELEASE_DATE = '2026-08-20'
const CHECKLISTBANK_DATASET_KEY = 316115
const SOURCE_DATASET_KEY = 1010
const SOURCE_VERSION = '2026-08-01'
const SOURCE_DOI = '10.48580/d37v'
const SOURCE_ENDPOINT = `https://api.checklistbank.org/dataset/${CHECKLISTBANK_DATASET_KEY}/nameusage/{colId}/source`
const ROOTS = [
  { id: 'actinopterygii', colId: '8VR36', scientificName: 'Actinopterygii', colPackage: 'actinopterygii' },
  { id: 'chondrichthyes', colId: '8X6G5', scientificName: 'Chondrichthyes', colPackage: 'chondrichthyes' },
  { id: 'myxini', colId: '6225G', scientificName: 'Myxini', colPackage: 'early-fishes' },
  // COL26.8 has no Petromyzontida node. Petromyzontiformes is the exact
  // species-bearing order below Petromyzonti in the pinned hierarchy.
  { id: 'petromyzontida', colId: '3SP', scientificName: 'Petromyzontiformes', colPackage: 'early-fishes' },
  { id: 'sarcopterygii', colId: '8VSMX', scientificName: 'Sarcopterygii', colPackage: 'tetrapod-transition' },
]
const EXPECTED_COUNTS = { actinopterygii: 35928, chondrichthyes: 1359, myxini: 92, petromyzontida: 49, sarcopterygii: 8 }
const compareStableIds = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

function parseArgs(argv) {
  const options = { registryRoot: DEFAULT_REGISTRY_ROOT, output: DEFAULT_OUTPUT, concurrency: 12, retrievedAt: '2026-08-31' }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--concurrency') options.concurrency = Math.max(1, Math.min(32, Number(argv[++index])))
    else if (value === '--retrieved-at') options.retrievedAt = argv[++index]
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/fetch-fishbase-authority-crosswalk.mjs [options]',
    '',
    'Fetches every pinned COL26.8 fish name-usage source record and writes a deterministic crosswalk.',
    'Only source identifiers returned by the CC BY COL release endpoint are retained; no FishBase archive is copied.',
    '',
    '  --registry-root <path>  Pinned COL hierarchy registry root',
    '  --output <path>        Gzip JSON crosswalk output',
    '  --concurrency <n>      Concurrent source-record requests (default 12)',
    '  --retrieved-at <date>  Retrieval date recorded in provenance',
  ].join('\n')
}

async function forEachGzipJsonLine(path, visit) {
  const input = readFileSync(path)
  const lines = createInterface({ input: createGunzip().end(input), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadNodes(registryRoot) {
  const nodes = new Map()
  const nodeRoot = join(registryRoot, 'hierarchy', 'nodes')
  for (const name of readdirSync(nodeRoot).filter((value) => value.endsWith('.jsonl.gz')).sort()) {
    await forEachGzipJsonLine(join(nodeRoot, name), (record) => nodes.set(record.id, record))
  }
  return nodes
}

function collectSpecies(nodes) {
  const records = []
  for (const species of nodes.values()) {
    if (species.rank !== 'species' || species.status !== 'accepted' || String(species.sourceDatasetId) !== String(SOURCE_DATASET_KEY)) continue
    for (const root of ROOTS) {
      let ancestorId = species.parentId
      while (ancestorId && ancestorId !== root.colId) ancestorId = nodes.get(ancestorId)?.parentId
      if (ancestorId === root.colId) {
        records.push({
          scopeId: root.id,
          scopeRootColId: root.colId,
          colPackage: root.colPackage,
          colId: species.id,
          scientificName: species.scientificName,
          authorship: species.authorship,
          rank: species.rank,
          status: species.status,
          sourceDatasetId: String(species.sourceDatasetId),
        })
        break
      }
    }
  }
  records.sort((left, right) => compareStableIds(left.scopeId, right.scopeId) || compareStableIds(left.colId, right.colId))
  return records
}

async function requestSource(record, attempt = 0) {
  const url = SOURCE_ENDPOINT.replace('{colId}', encodeURIComponent(record.colId))
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(30000) })
    const bytes = Buffer.from(await response.arrayBuffer())
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${bytes.toString('utf8').slice(0, 180)}`)
    const payload = JSON.parse(bytes.toString('utf8'))
    if (payload.sourceDatasetKey !== SOURCE_DATASET_KEY || typeof payload.sourceId !== 'string' || !payload.sourceId) {
      throw new Error('source endpoint did not return the pinned FishBase dataset and a source identifier')
    }
    return {
      ...record,
      fishBaseId: payload.sourceId,
      fishBaseUrl: `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${encodeURIComponent(payload.sourceId.split(':').at(-1))}`,
      mappingBasis: 'checklistbank-source-record',
      sourceResponseSha256: createHash('sha256').update(bytes).digest('hex'),
      sourceResponseBytes: bytes.byteLength,
      sourceEndpoint: url,
    }
  } catch (error) {
    if (attempt < 3) {
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 300 * (attempt + 1)))
      return requestSource(record, attempt + 1)
    }
    throw new Error(`${record.scopeId}/${record.colId} ${record.scientificName}: ${error.message}`)
  }
}

async function fetchAll(records, concurrency) {
  const output = new Array(records.length)
  let cursor = 0
  async function worker() {
    while (true) {
      const index = cursor
      cursor += 1
      if (index >= records.length) return
      output[index] = await requestSource(records[index])
      if ((index + 1) % 500 === 0) console.error(`Fetched ${index + 1}/${records.length}`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, records.length) }, () => worker()))
  return output
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

export async function buildFishbaseCrosswalk({ registryRoot = DEFAULT_REGISTRY_ROOT, output = DEFAULT_OUTPUT, concurrency = 12, retrievedAt = '2026-08-31' } = {}) {
  const nodes = await loadNodes(registryRoot)
  const records = collectSpecies(nodes)
  const counts = Object.fromEntries(ROOTS.map((root) => [root.id, records.filter((record) => record.scopeId === root.id).length]))
  for (const root of ROOTS) if (counts[root.id] !== EXPECTED_COUNTS[root.id]) throw new Error(`COL26.8 ${root.id} count ${counts[root.id]} != ${EXPECTED_COUNTS[root.id]}`)
  const resolved = await fetchAll(records, concurrency)
  const responseLedger = Buffer.from(`${resolved.map((record) => `${record.colId}\t${record.sourceResponseSha256}`).join('\n')}\n`, 'utf8')
  const snapshot = {
    schemaVersion: 1,
    crosswalkType: 'release-pinned-fish-authority-identifier-crosswalk',
    source: {
      catalogueRelease: CATALOGUE_RELEASE,
      catalogueReleaseDate: CATALOGUE_RELEASE_DATE,
      checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
      sourceDatasetKey: SOURCE_DATASET_KEY,
      sourceDatasetVersion: SOURCE_VERSION,
      sourceDatasetDoi: SOURCE_DOI,
      sourceDatasetTitle: 'FishBase',
      sourceDatasetAlias: 'WoRMS FishBase',
      sourceDatasetLicense: 'CC-BY-NC-4.0',
      sourceDatasetLicenseUrl: 'https://creativecommons.org/licenses/by-nc/4.0/',
      sourceDatasetUrl: 'https://www.fishbase.org',
      sourceDatasetArchiveNotBundled: true,
      retrievedAt,
      endpointTemplate: SOURCE_ENDPOINT,
      sourceIdentifierNamespace: 'urn:lsid:marinespecies.org:taxname',
      rightsBoundary: 'The committed crosswalk retains only the source identifiers and URLs returned by the pinned CC BY Catalogue of Life name-usage source endpoint. It does not copy, mirror, or redistribute the FishBase CC BY-NC archive, descriptions, references, distributions, media, or other source fields.',
    },
    scope: {
      predicate: 'COL26.8 rank=species AND status=accepted AND sourceDatasetId=1010',
      roots: ROOTS.map((root) => ({ ...root, expectedSpecies: EXPECTED_COUNTS[root.id] })),
      overlapPolicy: 'Each species is assigned to the first exact root in ROOTS; the five roots are disjoint in the pinned hierarchy.',
      petromyzontidaNote: 'COL26.8 has no Petromyzontida node; exact species-bearing Petromyzontiformes order 3SP below Petromyzonti is used as the release-scoped equivalent.',
    },
    counts: {
      eligible: resolved.length,
      resolved: resolved.length,
      direct: resolved.length,
      redirect: 0,
      ambiguous: 0,
      unmatched: 0,
      withheld: 0,
      upstreamOnly: 0,
      byScope: counts,
    },
    integrity: {
      algorithm: 'sha256',
      requestCount: resolved.length,
      responseLedgerSha256: sha256(responseLedger),
      recordLedgerSha256: sha256(Buffer.from(`${resolved.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')),
    },
    records: resolved,
    upstreamOnlyRecords: [],
    limitations: [
      'This is a COL26.8 release-scoped FishBase identifier crosswalk, not the complete FishBase database or a claim that fish taxonomy or described diversity is complete.',
      'The FishBase source archive identifies itself as CC BY-NC; it is deliberately not copied. The crosswalk carries only release source identifiers and links, with the COL release and source endpoint cited.',
      'Catalog of Fishes is the upstream nomenclatural authority used by FishBase, but its public service exposes no verified bulk redistribution license in this audit; no Catalog of Fishes content is copied.',
      'No FishBase upstream-only inventory is asserted because the non-redistributable FishBase archive was not bundled and the pinned COL endpoint only exposes records attached to COL usages.',
    ],
  }
  const bytes = Buffer.from(`${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  mkdirSync(dirname(output), { recursive: true })
  const compressed = Buffer.from(deterministicGzip(bytes, { level: 9 }))
  await new Promise((resolveWrite, rejectWrite) => {
    const stream = createWriteStream(output)
    stream.on('error', rejectWrite)
    stream.on('finish', resolveWrite)
    stream.end(compressed)
  })
  return { snapshot, bytes, compressed }
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) console.log(usage())
  else {
    const { snapshot, compressed } = await buildFishbaseCrosswalk(options)
    console.log(JSON.stringify({ counts: snapshot.counts, compressedBytes: compressed.byteLength, sha256: sha256(compressed) }, null, 2))
  }
}
