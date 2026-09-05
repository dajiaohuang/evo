import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { encodeWfoSource } from './wfo-source-codec.mjs'
import {
  exactNameKey,
  matchExactWfoRecord,
  parseTsvLine,
  splitColScientificName,
} from './wfo-plant-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const REGISTRY_MANIFEST_PATH = join(REGISTRY_ROOT, 'manifest.json')
const OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const SOURCES_PATH = join(REGISTRY_ROOT, 'sources.json')
const SOURCE_LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'wfo-plant-list-2026-06.json')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'wfo-plant-crosswalk-col26.8.json.br')
const DEFAULT_IMPORT_LEDGER = join(REPOSITORY_ROOT, 'data', 'sources', 'wfo-plant-sidecar-import-ledger.json')

const PACKAGE_ROUTES = [
  { packageId: 'angiospermae', ancestorIds: ['L2L', 'MG'], expected: 352619 },
  { packageId: 'gymnosperms', ancestorIds: ['BT', 'C7ZVJ', 'CGVH9'], expected: 1599 },
  { packageId: 'early-land-plants', ancestorIds: ['9J9G3', '9JHQ8', 'BJ5TM', 'GV', 'LYC'], expected: 33770 },
  { packageId: 'other-plants', ancestorIds: ['P'], expected: 698 },
]
const EXPECTED_COL_PLANTS = PACKAGE_ROUTES.reduce((sum, route) => sum + route.expected, 0)

function parseArgs(argv) {
  const options = { output: DEFAULT_OUTPUT, importLedger: DEFAULT_IMPORT_LEDGER }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--wfo-cldf') options.wfoCldf = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--import-ledger') options.importLedger = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-wfo-plant-sidecar.mjs --wfo-cldf <expanded-directory> [options]',
    '',
    'The directory must contain the verified files expanded from the official',
    'WFO Plant List 2026-06 ColDP archive named in the committed source ledger.',
  ].join('\n')
}

function repoPath(path) {
  return path.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/')
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

async function forEachGzipJsonLine(path, visit) {
  const input = createReadStream(path).pipe(createGunzip())
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function forEachTsv(path, visit) {
  const lines = createInterface({ input: createReadStream(path), crlfDelay: Infinity })
  let headers = null
  for await (const line of lines) {
    if (headers === null) {
      headers = parseTsvLine(line)
      continue
    }
    if (!line) continue
    const values = parseTsvLine(line)
    const record = Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']))
    visit(record)
  }
}

function registryFiles(manifest) {
  return manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
}

async function loadColPlantSpecies(registryManifest, ownership) {
  const nodes = new Map()
  for (const path of registryFiles(registryManifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species') nodes.set(record.id, record.parentId)
    })
  }
  const routeIndexes = new Map()
  for (const [priority, route] of PACKAGE_ROUTES.entries()) {
    for (const ancestorId of route.ancestorIds) routeIndexes.set(ancestorId, priority)
  }
  const records = []
  const counts = Object.fromEntries(PACKAGE_ROUTES.map((route) => [route.packageId, 0]))
  for (const path of registryFiles(registryManifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species' || record.status !== 'accepted') return
      const matchedPriorities = []
      let ancestorId = record.parentId
      while (ancestorId) {
        const priority = routeIndexes.get(ancestorId)
        if (priority !== undefined) matchedPriorities.push(priority)
        if (!nodes.has(ancestorId)) throw new Error(`Broken COL lineage for ${record.id} at ${ancestorId}`)
        ancestorId = nodes.get(ancestorId)
      }
      if (!matchedPriorities.length) return
      const route = PACKAGE_ROUTES[Math.min(...matchedPriorities)]
      const projected = {
        colId: record.id,
        packageId: route.packageId,
        scientificName: record.scientificName,
        authorship: record.authorship,
        sourceDatasetId: record.sourceDatasetId == null ? null : String(record.sourceDatasetId),
      }
      records.push(projected)
      counts[route.packageId] += 1
    })
  }
  records.sort((left, right) => left.colId.localeCompare(right.colId))
  if (records.length !== EXPECTED_COL_PLANTS) throw new Error(`Expected ${EXPECTED_COL_PLANTS} COL26.8 plant species, found ${records.length}`)
  for (const route of PACKAGE_ROUTES) {
    if (counts[route.packageId] !== route.expected || ownership.packageCounts[route.packageId] !== route.expected) {
      throw new Error(`${route.packageId}: plant ownership differs from the pinned contract`)
    }
  }
  return { records, counts }
}

async function validateWfoInput(wfoCldf, sourceLedger) {
  const outputs = {}
  for (const [member, contract] of Object.entries(sourceLedger.members)) {
    const path = join(wfoCldf, member)
    const bytes = statSync(path).size
    const digest = await sha256File(path)
    if (bytes !== contract.bytes || digest !== contract.sha256) throw new Error(`${member}: WFO input checksum differs from the source ledger`)
    outputs[member] = { path, bytes, sha256: digest }
  }
  const metadata = JSON.parse(readFileSync(outputs['metadata.json'].path, 'utf8'))
  if (metadata.version !== '2026-06 01' || metadata.issued !== '2026-06-21' || metadata.license !== 'cc0') {
    throw new Error('WFO packaged metadata does not identify the pinned 2026-06 CC0 release')
  }
  return { metadata, members: outputs }
}

function appendCandidate(candidates, key, candidate) {
  if (!candidates.has(key)) candidates.set(key, [])
  const values = candidates.get(key)
  if (!values.some((value) => value.kind === candidate.kind && value.nameId === candidate.nameId && value.targetTaxonId === candidate.targetTaxonId)) {
    values.push(candidate)
  }
}

async function loadWfoIndex(wfoInput, colRecords) {
  const colKeys = new Set()
  for (const record of colRecords) {
    const split = splitColScientificName(record.scientificName, record.authorship)
    if (split.safe) colKeys.add(exactNameKey({ scientificName: split.name, authorship: split.authorship }))
  }

  const acceptedTaxaByNameId = new Map()
  await forEachTsv(wfoInput.members['taxon.tsv'].path, (record) => {
    if (!record.ID || !record.nameID) return
    acceptedTaxaByNameId.set(record.nameID, {
      acceptedTaxonId: record.ID,
      nameId: record.nameID,
      parentId: record.parentID || null,
      snapshotId: record.alternativeID || null,
      snapshotUrl: record.link || null,
      extinct: record.extinct === 'true',
    })
  })

  const synonymTargetsByNameId = new Map()
  await forEachTsv(wfoInput.members['synonym.tsv'].path, (record) => {
    if (!record.nameID || !record.taxonID) return
    if (!synonymTargetsByNameId.has(record.nameID)) synonymTargetsByNameId.set(record.nameID, [])
    synonymTargetsByNameId.get(record.nameID).push(record.taxonID)
  })

  const acceptedByTaxonId = new Map()
  const candidates = new Map()
  await forEachTsv(wfoInput.members['name.tsv'].path, (record) => {
    const rank = record.rank.toLowerCase()
    const acceptedBase = acceptedTaxaByNameId.get(record.ID)
    if (acceptedBase) {
      acceptedBase.rank = rank
      acceptedBase.scientificName = record.scientificName
      acceptedBase.authorship = record.authorship
      acceptedBase.wfoId = record.ID
      acceptedBase.stableUrl = record.link || `https://list.worldfloraonline.org/${record.ID}`
      if (rank === 'species') acceptedByTaxonId.set(acceptedBase.acceptedTaxonId, acceptedBase)
    }
    if (rank !== 'species') return
    const key = exactNameKey({ scientificName: record.scientificName, authorship: record.authorship, rank })
    if (!colKeys.has(key)) return
    if (acceptedBase) appendCandidate(candidates, key, { kind: 'accepted', nameId: record.ID, targetTaxonId: acceptedBase.acceptedTaxonId })
    for (const targetTaxonId of synonymTargetsByNameId.get(record.ID) ?? []) {
      appendCandidate(candidates, key, { kind: 'synonym', nameId: record.ID, targetTaxonId })
    }
  })
  return { acceptedByTaxonId, candidates }
}

function sourceComposition(crosswalkRecords, sources) {
  const counts = new Map()
  for (const record of crosswalkRecords) {
    if (!counts.has(record.colSourceDatasetId)) counts.set(record.colSourceDatasetId, { acceptedSpecies: 0, accepted: 0, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0 })
    const count = counts.get(record.colSourceDatasetId)
    count.acceptedSpecies += 1
    count[record.status] += 1
  }
  const sourcesById = new Map(sources.map((source) => [String(source.datasetId), source]))
  return [...counts.entries()]
    .sort((left, right) => right[1].acceptedSpecies - left[1].acceptedSpecies || String(left[0]).localeCompare(String(right[0])))
    .map(([datasetId, outcomes]) => {
      const source = sourcesById.get(datasetId)
      if (!source) throw new Error(`COL plant source dataset ${datasetId} is absent from sources.json`)
      return {
        datasetId,
        title: source.title,
        shortName: source.shortName,
        version: source.version,
        publicationDate: source.publicationDate,
        doi: source.doi,
        licenseLabel: source.licenseLabel,
        licenseUrl: source.licenseUrl,
        acceptedSpecies: outcomes.acceptedSpecies,
        outcomes: {
          accepted: outcomes.accepted,
          redirect: outcomes.redirect,
          ambiguous: outcomes.ambiguous,
          unmatched: outcomes.unmatched,
          withheld: outcomes.withheld,
        },
      }
    })
}

function buildCrosswalk(col, wfo) {
  const coveredTargetIds = new Set()
  const statusCounts = { accepted: 0, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0 }
  const packageCounts = Object.fromEntries(PACKAGE_ROUTES.map((route) => [route.packageId, { total: 0, ...statusCounts }]))
  const records = col.records.map((record) => {
    const result = matchExactWfoRecord(record, wfo.candidates, wfo.acceptedByTaxonId)
    statusCounts[result.status] += 1
    packageCounts[record.packageId].total += 1
    packageCounts[record.packageId][result.status] += 1
    const base = {
      colId: record.colId,
      packageId: record.packageId,
      colScientificName: record.scientificName,
      colAuthorship: record.authorship,
      colSourceDatasetId: record.sourceDatasetId,
      status: result.status,
    }
    if (result.status === 'withheld') return { ...base, reason: result.reason }
    if (result.status === 'unmatched') return { ...base, mappingBasis: result.mappingBasis }
    if (result.status === 'ambiguous') return { ...base, mappingBasis: result.mappingBasis, candidateWfoIds: result.candidateWfoIds }
    const target = result.target
    coveredTargetIds.add(target.acceptedTaxonId)
    return {
      ...base,
      mappingBasis: result.mappingBasis,
      wfoId: target.wfoId,
      wfoUrl: target.stableUrl,
      wfoSnapshotId: target.snapshotId,
      wfoSnapshotUrl: target.snapshotUrl,
      wfoScientificName: target.scientificName,
      wfoAuthorship: target.authorship,
      wfoExtinct: target.extinct,
    }
  })
  const upstreamOnlyRecords = [...wfo.acceptedByTaxonId.values()]
    .filter((record) => !coveredTargetIds.has(record.acceptedTaxonId))
    .map((record) => ({
      status: 'upstream-only',
      wfoId: record.wfoId,
      wfoUrl: record.stableUrl,
      wfoSnapshotId: record.snapshotId,
      wfoSnapshotUrl: record.snapshotUrl,
      wfoScientificName: record.scientificName,
      wfoAuthorship: record.authorship,
      wfoParentId: record.parentId,
      wfoExtinct: record.extinct,
    }))
    .sort((left, right) => left.wfoId.localeCompare(right.wfoId))
  return { records, upstreamOnlyRecords, coveredTargetIds, statusCounts, packageCounts }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!options.wfoCldf) throw new Error('--wfo-cldf is required')

  const sourceLedgerBytes = readFileSync(SOURCE_LEDGER_PATH)
  const sourceLedger = JSON.parse(sourceLedgerBytes.toString('utf8'))
  const registryManifestBytes = readFileSync(REGISTRY_MANIFEST_PATH)
  const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  const sourcesBytes = readFileSync(SOURCES_PATH)
  const sources = JSON.parse(sourcesBytes.toString('utf8'))
  if (registryManifest.releaseAlias !== 'COL26.8' || registryManifest.checklistBankDatasetKey !== 316115) {
    throw new Error('The COL registry is not the pinned COL26.8 / ChecklistBank 316115 snapshot')
  }

  const wfoInput = await validateWfoInput(options.wfoCldf, sourceLedger)
  const col = await loadColPlantSpecies(registryManifest, ownership)
  const wfo = await loadWfoIndex(wfoInput, col.records)
  const crosswalk = buildCrosswalk(col, wfo)
  const packageSourceComposition = Object.fromEntries(PACKAGE_ROUTES.map((route) => [
    route.packageId,
    sourceComposition(crosswalk.records.filter((record) => record.packageId === route.packageId), sources),
  ]))
  const snapshot = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-plant-nomenclatural-crosswalk',
    sources: {
      col: {
        releaseAlias: 'COL26.8',
        releaseDate: '2026-08-20',
        checklistBankDatasetKey: 316115,
        registryManifestPath: repoPath(REGISTRY_MANIFEST_PATH),
        registryManifestSha256: sha256(registryManifestBytes),
        ownershipPath: repoPath(OWNERSHIP_PATH),
        ownershipSha256: sha256(ownershipBytes),
        strictPredicate: 'rank=species AND status=accepted',
      },
      wfo: {
        version: sourceLedger.release.version,
        issued: sourceLedger.release.issued,
        versionDoi: sourceLedger.release.versionDoi,
        conceptDoi: sourceLedger.release.conceptDoi,
        sourceLedgerPath: repoPath(SOURCE_LEDGER_PATH),
        sourceLedgerSha256: sha256(sourceLedgerBytes),
        license: sourceLedger.license.spdx,
        archiveSha256: sourceLedger.archive.sha256,
      },
    },
    matchingContract: sourceLedger.matchingContract,
    counts: {
      colAcceptedPlantSpecies: col.records.length,
      wfoAcceptedSpecies: wfo.acceptedByTaxonId.size,
      ...crosswalk.statusCounts,
      unambiguousColLinks: crosswalk.statusCounts.accepted + crosswalk.statusCounts.redirect,
      uniqueCoveredWfoAcceptedSpecies: crosswalk.coveredTargetIds.size,
      upstreamOnly: crosswalk.upstreamOnlyRecords.length,
    },
    packageCounts: crosswalk.packageCounts,
    colSourceComposition: sourceComposition(crosswalk.records, sources),
    packageSourceComposition,
    deliveryDesign: {
      // Retain historical snapshot wording so a storage-only re-encoding does
      // not change source bytes. The import ledger records the current codec.
      canonical: 'This gzip JSON is the single derived source for later package-specific runtime projections.',
      webAndOffline: 'Split deterministic NDJSON shards are to be registered in runtime and offline manifests without changing records.',
      packageZip: 'The same split shards and source/limitations metadata are to be included in each affected package ZIP.',
      androidAndIos: 'The existing full-data Capacitor build stages the identical runtime shards; no reduced native subset is permitted.',
      upstreamOnly: 'WFO accepted species without an unambiguous COL26.8 link remain a separate WFO upstream-only catalogue partition until a release-aware package route is proven.',
    },
    limitations: [
      sourceLedger.distributionBoundary.evidenceBoundary,
      'COL26.8 and WFO 2026-06 are independent snapshots with different update timing and species concepts; exact name agreement is not proof of concept equivalence.',
      'Ambiguous, unmatched and withheld COL rows are retained explicitly. Upstream-only WFO accepted species are not silently forced into a COL package.',
      'Later WFO or COL releases require a new immutable snapshot and a concept-level diff; this sidecar must not be silently rewritten.',
    ],
    colRecords: crosswalk.records,
    upstreamOnlyRecords: crosswalk.upstreamOnlyRecords,
  }
  const sourceBytes = jsonBytes(snapshot)
  const compressed = encodeWfoSource(sourceBytes)
  mkdirSync(dirname(options.output), { recursive: true })
  writeFileSync(options.output, compressed)

  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-WFO-2026-06-exact-plant-sidecar',
    generatedFrom: {
      sourceLedgerPath: repoPath(SOURCE_LEDGER_PATH),
      sourceLedgerSha256: sha256(sourceLedgerBytes),
      registryManifestPath: repoPath(REGISTRY_MANIFEST_PATH),
      registryManifestSha256: sha256(registryManifestBytes),
      ownershipPath: repoPath(OWNERSHIP_PATH),
      ownershipSha256: sha256(ownershipBytes),
      wfoMembers: Object.fromEntries(Object.entries(wfoInput.members).map(([name, value]) => [name, { bytes: value.bytes, sha256: value.sha256 }])),
    },
    counts: snapshot.counts,
    packageCounts: snapshot.packageCounts,
    colSourceComposition: snapshot.colSourceComposition,
    packageSourceComposition,
    output: {
      path: repoPath(options.output),
      bytes: compressed.byteLength,
      sha256: sha256(compressed),
      sourceBytes: sourceBytes.byteLength,
      sourceSha256: sha256(sourceBytes),
      encoding: 'br',
      mediaType: 'application/json',
    },
    generatedBy: {
      scriptPath: repoPath(SCRIPT_PATH),
      scriptSha256: await sha256File(SCRIPT_PATH),
      deterministic: 'Pinned input checksums, exact release routes, exact case- and diacritic-preserving name/authorship keys, explicit sorting, Brotli quality 5 and no wall-clock values.',
    },
  }
  mkdirSync(dirname(options.importLedger), { recursive: true })
  writeFileSync(options.importLedger, jsonBytes(ledger))
  console.log(JSON.stringify({ counts: snapshot.counts, packageCounts: snapshot.packageCounts, output: ledger.output }, null, 2))
}

await main()
