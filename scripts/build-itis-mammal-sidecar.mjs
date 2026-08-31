import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import {
  createItisMammalNameIndex,
  matchColSpecies,
  sortCrosswalkRecords,
} from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_SOURCE_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-2026-08-26.json')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const DEFAULT_PACKAGES_ROOT = join(REPOSITORY_ROOT, 'data', 'packages', 'mammalia')
const DEFAULT_LEDGER_OUTPUT = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-mammal-sidecar-import-ledger.json')

const ROUTES = [
  { packageId: 'perissodactyla', ancestorIds: ['623DW'] },
  { packageId: 'cetartiodactyla', ancestorIds: ['6227M', 'WP'] },
  { packageId: 'primates', ancestorIds: ['3W7'] },
  { packageId: 'carnivora', ancestorIds: ['VS'] },
  { packageId: 'other-mammals', ancestorIds: ['6224G'] },
]
const PACKAGE_IDS = ['mammal-origins', ...ROUTES.map((route) => route.packageId)]
const STATUS_KEYS = {
  accepted: 'accepted',
  'synonym-current-name-redirect': 'synonymCurrentNameRedirect',
  ambiguous: 'ambiguous',
  unmatched: 'unmatched',
}

function parseArgs(argv) {
  const options = {
    sourcePath: DEFAULT_SOURCE_PATH,
    registryRoot: DEFAULT_REGISTRY_ROOT,
    ownershipPath: DEFAULT_OWNERSHIP_PATH,
    packagesRoot: DEFAULT_PACKAGES_ROOT,
    ledgerOutput: DEFAULT_LEDGER_OUTPUT,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlite = resolve(argv[++index])
    else if (value === '--source') options.sourcePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--packages-root') options.packagesRoot = resolve(argv[++index])
    else if (value === '--ledger-output') options.ledgerOutput = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-itis-mammal-sidecar.mjs --itis-sqlite <path> [options]',
    '',
    'The SQLite file must be the verified official ITIS monthly export named by',
    'data/sources/itis-2026-08-26.json. The raw archive is never copied.',
    '',
    'Options:',
    '  --source <path>          Pinned ITIS source and import contract',
    '  --registry-root <path>   Pinned COL registry root',
    '  --ownership <path>       COL package-ownership projection',
    '  --packages-root <path>   Mammal package root',
    '  --ledger-output <path>   Generated import/output ledger',
  ].join('\n')
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
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
  for await (const line of lines) {
    if (line) visit(JSON.parse(line))
  }
}

function registryFiles(registryRoot, manifest) {
  return manifest.hierarchy.nodes.files
    .map((file) => join(registryRoot, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
}

async function loadHigherTaxa(registryRoot, manifest) {
  const nodes = new Map()
  for (const path of registryFiles(registryRoot, manifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species') nodes.set(record.id, { parentId: record.parentId })
    })
  }
  return nodes
}

function compileRouteIndex() {
  const routesByAncestor = new Map()
  for (const [priority, route] of ROUTES.entries()) {
    for (const ancestorId of route.ancestorIds) {
      if (!routesByAncestor.has(ancestorId)) routesByAncestor.set(ancestorId, [])
      routesByAncestor.get(ancestorId).push({ priority, packageId: route.packageId })
    }
  }
  return routesByAncestor
}

function ownerForSpecies(species, nodes, routesByAncestor) {
  const matches = []
  let ancestorId = species.parentId
  while (ancestorId) {
    matches.push(...(routesByAncestor.get(ancestorId) ?? []))
    const node = nodes.get(ancestorId)
    if (!node) throw new Error(`COL lineage is broken for ${species.id} at ${ancestorId}`)
    ancestorId = node.parentId
  }
  matches.sort((left, right) => left.priority - right.priority)
  return matches[0]?.packageId ?? null
}

async function loadColMammalSpecies(registryRoot, manifest) {
  const nodes = await loadHigherTaxa(registryRoot, manifest)
  const routesByAncestor = compileRouteIndex()
  const recordsByPackage = Object.fromEntries(PACKAGE_IDS.map((packageId) => [packageId, []]))
  for (const path of registryFiles(registryRoot, manifest)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank !== 'species' || record.status !== 'accepted') return
      const packageId = ownerForSpecies(record, nodes, routesByAncestor)
      if (packageId) recordsByPackage[packageId].push(record)
    })
  }
  for (const records of Object.values(recordsByPackage)) {
    records.sort((left, right) => left.id.localeCompare(right.id))
  }
  return recordsByPackage
}

function loadItisRows(sqlitePath, source) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootTsn = Number(source.databaseAudit.mammaliaRootTsn)
    const currentRows = database.prepare(source.importLedger.queries.currentMammalSpecies).all(rootTsn)
    const synonymRows = database.prepare(source.importLedger.queries.mammalSpeciesSynonyms).all(rootTsn)
    const maximumDates = database.prepare(
      'SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomic_units, (SELECT max(update_date) FROM synonym_links) AS synonym_links',
    ).get()
    if (currentRows.length !== source.databaseAudit.validMammalSpeciesCount) {
      throw new Error(`ITIS current Mammalia species count changed: ${currentRows.length}`)
    }
    if (synonymRows.length !== source.databaseAudit.speciesRankSynonymLinksToValidMammalSpecies) {
      throw new Error(`ITIS Mammalia species synonym-link count changed: ${synonymRows.length}`)
    }
    if (maximumDates.taxonomic_units !== source.databaseAudit.maximumTaxonomicUnitUpdateDate
      || maximumDates.synonym_links !== source.databaseAudit.maximumSynonymLinkUpdateDate) {
      throw new Error(`ITIS database update dates do not match the pinned export: ${JSON.stringify(maximumDates)}`)
    }
    return { currentRows, synonymRows }
  } finally {
    database.close()
  }
}

function emptyRecordGroups() {
  return {
    accepted: [],
    synonymCurrentNameRedirect: [],
    ambiguous: [],
    unmatched: [],
  }
}

function countsFor(groups) {
  return {
    total: Object.values(groups).reduce((sum, records) => sum + records.length, 0),
    accepted: groups.accepted.length,
    synonymCurrentNameRedirect: groups.synonymCurrentNameRedirect.length,
    ambiguous: groups.ambiguous.length,
    unmatched: groups.unmatched.length,
  }
}

async function writeSidecars({ source, sourceSha256, recordsByPackage, itisNameIndex, packagesRoot }) {
  const outputs = []
  for (const packageId of PACKAGE_IDS) {
    const groups = emptyRecordGroups()
    for (const colRecord of recordsByPackage[packageId]) {
      const result = matchColSpecies(colRecord, itisNameIndex)
      groups[STATUS_KEYS[result.status]].push(result.record)
    }
    for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
    const counts = countsFor(groups)
    const sidecar = {
      schemaVersion: 1,
      sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
      packageId,
      sources: {
        col: {
          releaseAlias: source.importLedger.colInput.releaseAlias,
          releaseDate: source.importLedger.colInput.releaseDate,
          registryManifestPath: source.importLedger.colInput.registryManifestPath,
        },
        itis: {
          datasetId: source.datasetId,
          exportDate: source.release.exportDate,
          sourceLedgerPath: 'data/sources/itis-2026-08-26.json',
          sourceLedgerSha256: sourceSha256,
          license: source.license.spdx,
          citationDoi: source.citation.doi,
        },
      },
      exactMatching: {
        normalization: source.importLedger.normalization,
        statuses: source.importLedger.matching,
      },
      evidenceBoundary: {
        en: 'This CC0 ITIS sidecar supplies release-pinned TSNs and exact nomenclatural redirects. It is not an MDD equivalent, a final classification authority, a phylogeny, or evidence that COL and ITIS use the same species concept.',
        zh: '此 CC0 ITIS 侧车仅提供固定版本的 TSN 与严格同名重定向；它不是 MDD 的等价替代品，也不是最终分类权威、系统发育树，且不表示 COL 与 ITIS 采用相同物种概念。',
      },
      counts,
      records: groups,
    }
    const outputPath = join(packagesRoot, packageId, 'nomenclature', 'itis-tsn-sidecar.json')
    mkdirSync(dirname(outputPath), { recursive: true })
    const bytes = jsonBytes(sidecar)
    writeFileSync(outputPath, bytes)
    outputs.push({
      packageId,
      path: repoPath(outputPath),
      bytes: bytes.byteLength,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      counts,
    })
  }
  return outputs
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  if (!options.itisSqlite) throw new Error('--itis-sqlite is required')

  const sourceBytes = readFileSync(options.sourcePath)
  const source = JSON.parse(sourceBytes.toString('utf8'))
  const sourceSha256 = createHash('sha256').update(sourceBytes).digest('hex')
  const sqliteSha256 = await sha256File(options.itisSqlite)
  if (sqliteSha256 !== source.archive.databaseSha256) {
    throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  }

  const registryManifestPath = join(options.registryRoot, 'manifest.json')
  const registryManifestSha256 = await sha256File(registryManifestPath)
  if (registryManifestSha256 !== source.importLedger.colInput.registryManifestSha256) {
    throw new Error(`COL registry manifest SHA-256 mismatch: ${registryManifestSha256}`)
  }
  const ownershipSha256 = await sha256File(options.ownershipPath)
  if (ownershipSha256 !== source.importLedger.colInput.ownershipSha256) {
    throw new Error(`COL ownership SHA-256 mismatch: ${ownershipSha256}`)
  }

  const registryManifest = JSON.parse(readFileSync(registryManifestPath, 'utf8'))
  const ownership = JSON.parse(readFileSync(options.ownershipPath, 'utf8'))
  const recordsByPackage = await loadColMammalSpecies(options.registryRoot, registryManifest)
  for (const packageId of PACKAGE_IDS) {
    const expected = source.importLedger.colInput.packageCounts[packageId]
    if (ownership.packageCounts[packageId] !== expected || recordsByPackage[packageId].length !== expected) {
      throw new Error(`${packageId}: COL ownership count does not match the pinned import contract`)
    }
  }

  const { currentRows, synonymRows } = loadItisRows(options.itisSqlite, source)
  const itisNameIndex = createItisMammalNameIndex(currentRows, synonymRows)
  const outputs = await writeSidecars({
    source,
    sourceSha256,
    recordsByPackage,
    itisNameIndex,
    packagesRoot: options.packagesRoot,
  })
  const totals = outputs.reduce((result, output) => {
    for (const [key, value] of Object.entries(output.counts)) result[key] += value
    return result
  }, { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0 })
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-mammal-nomenclatural-sidecars',
    generatedFrom: {
      sourcePath: repoPath(options.sourcePath),
      sourceSha256,
      itisDatabaseMember: source.archive.databaseMember,
      itisDatabaseSha256: sqliteSha256,
      colRegistryManifestPath: repoPath(registryManifestPath),
      colRegistryManifestSha256: registryManifestSha256,
      colOwnershipPath: repoPath(options.ownershipPath),
      colOwnershipSha256: ownershipSha256,
    },
    matchingContract: source.importLedger,
    totals,
    outputs,
    generatedBy: {
      scriptPath: repoPath(SCRIPT_PATH),
      scriptSha256: await sha256File(SCRIPT_PATH),
      deterministic: 'Pinned input checksums, exact SQL, fixed route priority, exact name normalization and explicit sorting; no wall-clock values or fuzzy matching.',
    },
  }
  mkdirSync(dirname(options.ledgerOutput), { recursive: true })
  writeFileSync(options.ledgerOutput, jsonBytes(ledger))
  console.log(JSON.stringify({ ledger: repoPath(options.ledgerOutput), totals, outputs }, null, 2))
}

await main()
