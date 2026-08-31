import { createReadStream, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  AVES_ROOT_ID,
  CHECKLISTBANK_DATASET_KEY,
  COL_RELEASE,
  COL_RELEASE_DATE,
  CROCODYLIA_ROOT_ID,
  EXPECTED_AVES_SPECIES,
  EXPECTED_CROCODYLIA_SPECIES,
  EXPECTED_PACKAGE_SPECIES,
  compareStableIds,
  createAviListIndex,
  matchColBirdSpecies,
  nonApplicableCrocodyliaRecord,
  readAviListWorkbook,
  sha256,
} from './avilist-birds-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const REGISTRY_MANIFEST_PATH = join(REGISTRY_ROOT, 'manifest.json')
const OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const SOURCES_PATH = join(REGISTRY_ROOT, 'sources.json')
const SOURCE_LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-v2025b.json')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-v2025b-crosswalk-col26.8.json.gz')
const DEFAULT_IMPORT_LEDGER = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-birds-import-ledger.json')

function parseArgs(argv) {
  const options = { output: DEFAULT_OUTPUT, importLedger: DEFAULT_IMPORT_LEDGER }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--avilist-xlsx') options.avilistXlsx = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--import-ledger') options.importLedger = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-avilist-birds-crosswalk.mjs --avilist-xlsx <path> [options]',
    '',
    'The workbook must match the official AviList v2025b extended-XLSX checksum',
    'pinned in data/sources/avilist-v2025b.json. No network access is performed.',
  ].join('\n')
}

function repoPath(path) {
  return path.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/')
}

function jsonBytes(value) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function forEachGzipJsonLine(path, visit) {
  const input = createReadStream(path).pipe(createGunzip())
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function registryFiles(manifest) {
  return manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
}

async function loadColPackageSpecies(registryManifest, ownership) {
  const parentById = new Map()
  const species = []
  for (const path of registryFiles(registryManifest)) {
    await forEachGzipJsonLine(path, (record) => {
      parentById.set(record.id, record.parentId)
      if (record.rank === 'species' && record.status === 'accepted') species.push(record)
    })
  }
  const birds = []
  const crocodylia = []
  for (const record of species) {
    let ancestorId = record.parentId
    while (ancestorId && ancestorId !== AVES_ROOT_ID && ancestorId !== CROCODYLIA_ROOT_ID) {
      if (!parentById.has(ancestorId)) throw new Error(`Broken COL lineage for ${record.id} at ${ancestorId}`)
      ancestorId = parentById.get(ancestorId)
    }
    if (ancestorId === AVES_ROOT_ID) birds.push(record)
    else if (ancestorId === CROCODYLIA_ROOT_ID) crocodylia.push(record)
  }
  birds.sort((left, right) => compareStableIds(left.id, right.id))
  crocodylia.sort((left, right) => compareStableIds(left.id, right.id))
  if (birds.length !== EXPECTED_AVES_SPECIES || crocodylia.length !== EXPECTED_CROCODYLIA_SPECIES
    || ownership.packageCounts['crocodylomorphs-birds'] !== EXPECTED_PACKAGE_SPECIES) {
    throw new Error(`Pinned COL package scope changed: Aves=${birds.length}, Crocodylia=${crocodylia.length}`)
  }
  return { birds, crocodylia }
}

function sourceComposition(records, sources) {
  const counts = new Map()
  for (const record of records) {
    const datasetId = String(record.colSourceDatasetId)
    counts.set(datasetId, (counts.get(datasetId) ?? 0) + 1)
  }
  const sourceById = new Map(sources.map((source) => [String(source.datasetId), source]))
  return [...counts.entries()].sort((left, right) => compareStableIds(left[0], right[0])).map(([datasetId, acceptedSpecies]) => {
    const source = sourceById.get(datasetId)
    if (!source) throw new Error(`COL source dataset is absent from sources.json: ${datasetId}`)
    return {
      datasetId,
      title: source.title,
      shortName: source.shortName,
      version: source.version,
      publicationDate: source.publicationDate,
      doi: source.doi,
      licenseLabel: source.licenseLabel,
      licenseUrl: source.licenseUrl,
      acceptedSpecies,
    }
  })
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!options.avilistXlsx) throw new Error('--avilist-xlsx is required')

  const sourceLedgerBytes = readFileSync(SOURCE_LEDGER_PATH)
  const sourceLedger = JSON.parse(sourceLedgerBytes.toString('utf8'))
  const registryManifestBytes = readFileSync(REGISTRY_MANIFEST_PATH)
  const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  const sources = JSON.parse(readFileSync(SOURCES_PATH, 'utf8'))
  if (registryManifest.releaseAlias !== COL_RELEASE
    || registryManifest.releaseDate !== COL_RELEASE_DATE
    || registryManifest.checklistBankDatasetKey !== CHECKLISTBANK_DATASET_KEY
    || sha256(registryManifestBytes) !== sourceLedger.colInput.registryManifestSha256
    || sha256(ownershipBytes) !== sourceLedger.colInput.ownershipSha256) {
    throw new Error('Pinned COL26.8 inputs differ from the AviList import contract')
  }

  const col = await loadColPackageSpecies(registryManifest, ownership)
  const avilist = readAviListWorkbook(options.avilistXlsx, sourceLedger)
  const index = createAviListIndex(avilist.records)
  const colRecords = col.birds.map((record) => matchColBirdSpecies(record, index))
  const nonApplicableRecords = col.crocodylia.map(nonApplicableCrocodyliaRecord)
  const counts = {
    packageAcceptedSpecies: EXPECTED_PACKAGE_SPECIES,
    colAcceptedAves: colRecords.length,
    colAcceptedCrocodylia: nonApplicableRecords.length,
    avilistAcceptedSpecies: avilist.records.length,
    accepted: colRecords.filter((record) => record.status === 'accepted').length,
    officialCurrentNameRedirect: colRecords.filter((record) => record.status === 'official-current-name-redirect').length,
    ambiguous: colRecords.filter((record) => record.status === 'ambiguous').length,
    unmatched: colRecords.filter((record) => record.status === 'unmatched').length,
    nonApplicable: nonApplicableRecords.length,
  }
  const coveredIds = new Set(colRecords.flatMap((record) => (
    record.avibaseId ? [record.avibaseId] : (record.candidates ?? []).map((candidate) => candidate.avibaseId)
  )))
  const matchedIds = new Set(colRecords.filter((record) => record.avibaseId).map((record) => record.avibaseId))
  const upstreamOnlyRecords = avilist.records
    .filter((record) => !coveredIds.has(record.avibaseId))
    .map((record) => ({
      status: 'upstream-only',
      avibaseId: record.avibaseId,
      officialScientificName: record.scientificName,
      officialAuthority: record.authority,
      officialEnglishName: record.englishName,
      officialOrder: record.order,
      officialFamily: record.family,
      officialProtonym: record.protonym,
      sourceRow: record.sourceRow,
      sequence: record.sequence,
    }))
    .sort((left, right) => compareStableIds(left.avibaseId, right.avibaseId))
  counts.uniqueMatchedAviListSpecies = matchedIds.size
  counts.manyToOneColLinks = counts.accepted + counts.officialCurrentNameRedirect - matchedIds.size
  counts.upstreamOnly = upstreamOnlyRecords.length

  const recordLedgerBytes = Buffer.from(`${[...colRecords, ...nonApplicableRecords]
    .sort((left, right) => compareStableIds(left.colId, right.colId))
    .map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
  const snapshot = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-avilist-avibase-concept-crosswalk',
    sources: {
      col: {
        releaseAlias: COL_RELEASE,
        releaseDate: COL_RELEASE_DATE,
        checklistBankDatasetKey: CHECKLISTBANK_DATASET_KEY,
        registryManifestPath: repoPath(REGISTRY_MANIFEST_PATH),
        registryManifestSha256: sha256(registryManifestBytes),
        ownershipPath: repoPath(OWNERSHIP_PATH),
        ownershipSha256: sha256(ownershipBytes),
      },
      avilist: {
        version: sourceLedger.release.version,
        published: sourceLedger.release.published,
        versionDoi: sourceLedger.release.versionDoi,
        sourceLedgerPath: repoPath(SOURCE_LEDGER_PATH),
        sourceLedgerSha256: sha256(sourceLedgerBytes),
        workbookBytes: avilist.workbookBytes.byteLength,
        workbookSha256: sha256(avilist.workbookBytes),
        license: sourceLedger.license.spdx,
      },
    },
    matchingContract: sourceLedger.matchingContract,
    counts,
    colSourceComposition: {
      aves: sourceComposition(colRecords, sources),
      crocodyliaNonApplicable: sourceComposition(nonApplicableRecords, sources),
    },
    integrity: {
      algorithm: 'sha256',
      packageRecordLedgerSha256: sha256(recordLedgerBytes),
      packageRecordLedgerOrder: 'Unicode code-unit ascending by colId; one compact JSON record plus LF per row.',
    },
    deliveryContract: {
      canonical: 'This deterministic gzip JSON remains the complete audit source for later package-local projections.',
      colIdLookup: 'Package-local records are projected into non-overlapping lexicographic colId-range JSON-array gzip shards so one requested COL ID selects at most one payload.',
      upstreamOnly: 'AviList species without permitted COL26.8 evidence remain in separate upstream-only shards without fabricated COL IDs.',
      webPackageZipAndroidIos: 'A future runtime release must register the same checksummed descriptor and shards in Web, browser offline storage, package ZIP, Android assets and iOS assets; no reduced native subset is permitted.',
    },
    limitations: sourceLedger.limitations,
    colRecords,
    nonApplicableRecords,
    upstreamOnlyRecords,
  }
  const sourceBytes = jsonBytes(snapshot)
  const compressed = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
  mkdirSync(dirname(options.output), { recursive: true })
  writeFileSync(options.output, compressed)

  const importLedger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-AviList-v2025b-exact-bird-authority-sidecar',
    generatedFrom: {
      sourceLedgerPath: repoPath(SOURCE_LEDGER_PATH),
      sourceLedgerSha256: sha256(sourceLedgerBytes),
      workbookUrl: sourceLedger.acquisition.url,
      workbookBytes: avilist.workbookBytes.byteLength,
      workbookSha256: sha256(avilist.workbookBytes),
      registryManifestPath: repoPath(REGISTRY_MANIFEST_PATH),
      registryManifestSha256: sha256(registryManifestBytes),
      ownershipPath: repoPath(OWNERSHIP_PATH),
      ownershipSha256: sha256(ownershipBytes),
    },
    counts,
    colSourceComposition: snapshot.colSourceComposition,
    integrity: snapshot.integrity,
    output: {
      path: repoPath(options.output),
      bytes: compressed.byteLength,
      sha256: sha256(compressed),
      sourceBytes: sourceBytes.byteLength,
      sourceSha256: sha256(sourceBytes),
      encoding: 'gzip',
      mediaType: 'application/json',
    },
    generatedBy: {
      scriptPath: repoPath(SCRIPT_PATH),
      scriptSha256: sha256(readFileSync(SCRIPT_PATH)),
      deterministic: 'Pinned workbook and COL checksums, exact case- and diacritic-preserving matching, explicit code-unit sorting, deterministic gzip and no wall-clock values.',
    },
  }
  mkdirSync(dirname(options.importLedger), { recursive: true })
  writeFileSync(options.importLedger, jsonBytes(importLedger))
  console.log(JSON.stringify({ counts, output: importLedger.output }, null, 2))
}

await main()
