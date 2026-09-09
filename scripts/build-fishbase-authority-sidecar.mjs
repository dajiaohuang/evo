import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'fishbase-authority-crosswalk-col26.8.json.gz')
const DEFAULT_OUTPUT_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'fish')
const SOURCE_BYTE_LIMIT = 5 * 1024 * 1024
const ROOTS = new Set(['actinopterygii', 'chondrichthyes', 'myxini', 'petromyzontida'])
const RUNTIME_FIELDS = [
  'scopeId', 'scopeRootColId', 'colPackage', 'colId', 'scientificName', 'authorship', 'rank', 'status',
  'sourceDatasetId', 'fishBaseId', 'fishBaseUrl', 'mappingBasis', 'sourceResponseSha256', 'sourceResponseBytes', 'sourceEndpoint',
]

function parseArgs(argv) {
  const options = { crosswalk: DEFAULT_CROSSWALK, outputRoot: DEFAULT_OUTPUT_ROOT, sourceByteLimit: SOURCE_BYTE_LIMIT }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--crosswalk') options.crosswalk = resolve(argv[++index])
    else if (value === '--output-root') options.outputRoot = resolve(argv[++index])
    else if (value === '--source-byte-limit') options.sourceByteLimit = Number(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-fishbase-authority-sidecar.mjs [options]',
    '',
    'Builds deterministic, globally non-overlapping COL ID range shards from the committed FishBase crosswalk.',
    'This standalone sidecar does not modify the generated release manifest or runtime version.',
    '',
    '  --crosswalk <path>          Canonical FishBase crosswalk gzip',
    '  --output-root <path>        Standalone fish sidecar directory',
    '  --source-byte-limit <n>     Uncompressed JSONL shard budget (default 5242880)',
  ].join('\n')
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function compareColId(left, right) {
  return left < right ? -1 : left > right ? 1 : 0
}

function loadCrosswalk(path) {
  const compressed = readFileSync(path)
  const source = gunzipSync(compressed)
  const snapshot = JSON.parse(source.toString('utf8'))
  if (snapshot.schemaVersion !== 1 || snapshot.crosswalkType !== 'release-pinned-fish-authority-identifier-crosswalk') {
    throw new Error('Unexpected FishBase crosswalk schema')
  }
  if (snapshot.source?.catalogueRelease !== 'COL26.8' || snapshot.source?.checklistBankDatasetKey !== 316115
    || snapshot.source?.sourceDatasetKey !== 1010 || snapshot.source?.sourceDatasetVersion !== '2026-08-01') {
    throw new Error('FishBase crosswalk is not pinned to COL26.8 / source dataset 1010 / version 2026-08-01')
  }
  const counts = snapshot.counts ?? {}
  if (counts.eligible !== 37428 || counts.resolved !== 37428 || counts.direct !== 37428
    || counts.redirect !== 0 || counts.ambiguous !== 0 || counts.unmatched !== 0 || counts.withheld !== 0
    || counts.upstreamOnly !== 0 || !Array.isArray(snapshot.records) || snapshot.records.length !== 37428
    || !Array.isArray(snapshot.upstreamOnlyRecords) || snapshot.upstreamOnlyRecords.length !== 0) {
    throw new Error('FishBase crosswalk counts do not match the complete four-root contract')
  }
  const seenColIds = new Set()
  const seenFishBaseIds = new Set()
  for (const record of snapshot.records) {
    if (!ROOTS.has(record.scopeId) || record.sourceDatasetId !== '1010' || record.rank !== 'species' || record.status !== 'accepted'
      || record.mappingBasis !== 'checklistbank-source-record' || !/^V?[A-Za-z0-9]+$/.test(record.colId)
      || !/^urn:lsid:marinespecies\.org:taxname:\d+$/.test(record.fishBaseId)
      || !/^https:\/\/www\.marinespecies\.org\/aphia\.php\?p=taxdetails&id=\d+$/.test(record.fishBaseUrl)
      || !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256) || !Number.isInteger(record.sourceResponseBytes)
      || seenColIds.has(record.colId) || seenFishBaseIds.has(record.fishBaseId)) {
      throw new Error(`Invalid, duplicate or incomplete FishBase record: ${record.colId ?? 'missing COL ID'}`)
    }
    seenColIds.add(record.colId)
    seenFishBaseIds.add(record.fishBaseId)
  }
  if (seenColIds.size !== 37428 || seenFishBaseIds.size !== 37428) throw new Error('FishBase identifiers are not one-to-one')
  return { compressed, source, snapshot }
}

function chunkBySourceBytes(records, sourceByteLimit) {
  const chunks = []
  let current = []
  let currentBytes = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && currentBytes + bytes > sourceByteLimit) {
      chunks.push(current)
      current = []
      currentBytes = 0
    }
    current.push(record)
    currentBytes += bytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

function project(record) {
  return Object.fromEntries(RUNTIME_FIELDS.map((field) => [field, record[field]]))
}

export function buildFishbaseAuthoritySidecar({ crosswalkPath = DEFAULT_CROSSWALK, outputRoot = DEFAULT_OUTPUT_ROOT, sourceByteLimit = SOURCE_BYTE_LIMIT } = {}) {
  const crosswalk = loadCrosswalk(crosswalkPath)
  const records = crosswalk.snapshot.records.map(project).sort((left, right) => compareColId(left.colId, right.colId))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot, { withFileTypes: true }).filter((entry) => /^fishbase-\d{3}\.jsonl\.gz$/.test(entry.name)).map((entry) => entry.name)) {
    rmSync(join(outputRoot, name))
  }
  const files = chunkBySourceBytes(records, sourceByteLimit).map((chunk, index) => {
    const sourceBytes = Buffer.from(`${chunk.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const name = `fishbase-${String(index).padStart(3, '0')}.jsonl.gz`
    writeFileSync(join(outputRoot, name), compressed)
    return {
      path: `fish/${name}`,
      records: chunk.length,
      bytes: compressed.byteLength,
      sourceBytes: sourceBytes.byteLength,
      sha256: sha256(compressed),
      sourceSha256: sha256(sourceBytes),
      encoding: 'gzip',
      mediaType: 'application/x-ndjson',
      minColId: chunk[0].colId,
      maxColId: chunk.at(-1).colId,
    }
  })
  const descriptor = {
    id: 'fishbase-identifiers',
    recordType: 'external-name-identifier-crosswalk',
    provider: 'FishBase (WoRMS/Aphia source records)',
    source: {
      ...crosswalk.snapshot.source,
      canonicalCrosswalkPath: 'data/sources/fishbase-authority-crosswalk-col26.8.json.gz',
      canonicalCrosswalkBytes: crosswalk.compressed.byteLength,
      canonicalCrosswalkSha256: sha256(crosswalk.compressed),
      canonicalCrosswalkSourceBytes: crosswalk.source.byteLength,
      canonicalCrosswalkSourceSha256: sha256(crosswalk.source),
      requestIntegrity: crosswalk.snapshot.integrity,
    },
    eligibility: 'Every strict accepted COL26.8 species below the exact Actinopterygii, Chondrichthyes, Myxini or Petromyzontiformes roots whose COL sourceDatasetId is FishBase 1010.',
    counts: crosswalk.snapshot.counts,
    fields: RUNTIME_FIELDS,
    files,
    totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
    totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
    upstreamOnly: {
      status: 'not-enumerated',
      files: [],
      reason: 'The FishBase source archive is CC BY-NC and is not bundled; the pinned COL source endpoint exposes only source records attached to COL usages, so no upstream-only count is asserted.',
    },
    limitations: [
      'This is a COL26.8 release-scoped identifier crosswalk, not a complete FishBase database or a claim that fish taxonomy or described diversity is complete.',
      'FishBase COLDP metadata identifies the source archive as CC BY-NC; no FishBase archive, descriptive fields, references, distributions, media or other source content is copied.',
      'Catalog of Fishes is used by FishBase as its nomenclatural authority, but its public service exposed no verified bulk redistribution license in this audit; no Catalog of Fishes content is copied.',
      'The four root scopes are disjoint in COL26.8. COL has no Petromyzontida node; Petromyzontiformes (3SP) is the exact species-bearing release node used for that requested scope.',
    ],
    integration: {
      standalone: true,
      targetManifestPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/manifest.json',
      clientParityRequirement: 'After parent integration, every listed shard must be copied byte-for-byte into Web-light metadata/native-full Android/iOS assets; Web-light need only retain this descriptor and aggregate counts.',
      lookup: {
        strategy: 'lexicographic-colId-range-v1',
        ordering: 'Unicode code-unit ascending with no locale folding or normalization.',
        requestPolicy: 'Select the sole file whose inclusive minColId/maxColId range contains the requested COL ID; a single-species query loads at most one shard.',
        forbiddenBehavior: 'A single-species query must not download or parse the complete authority sidecar or more than one payload shard.',
      },
    },
  }
  writeFileSync(join(outputRoot, 'fishbase-extension.json'), `${JSON.stringify(descriptor, null, 2)}\n`, 'utf8')
  return descriptor
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) console.log(usage())
  else {
    const descriptor = buildFishbaseAuthoritySidecar(options)
    console.log(JSON.stringify({ counts: descriptor.counts, files: descriptor.files, totalCompressedBytes: descriptor.totalCompressedBytes, totalSourceBytes: descriptor.totalSourceBytes }, null, 2))
  }
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
