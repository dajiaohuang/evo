import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import {
  createItisMammalNameIndex,
  matchColSpecies,
  sortCrosswalkRecords,
} from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-2026-08-26.json')
const REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const CANONICAL_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-reptilia-authority-crosswalk-col26.8.json.gz')
const LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-reptilia-authority-import-ledger.json')
const REPTILE_ROOT_TSN = 173747
const CROCODYLIA_ROOT_TSN = 551734
const REPTILIA_COL_ROOT_ID = 'RP'
const CROCODYLIA_COL_ROOT_ID = '329'
const TURTLES_PACKAGE_ID = 'turtles-lepidosaurs'
const CROC_PACKAGE_ID = 'crocodylomorphs-birds'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024
const RUNTIME_FIELDS = [
  'colUsageId', 'colScientificName', 'colAuthorship', 'exactMatchName',
  'status', 'currentName', 'matchedSynonyms', 'candidates',
]

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE reptilia_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN reptilia_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage,
  u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date,
  u.parent_tsn
FROM reptilia_descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const SPECIES_SYNONYM_QUERY = `WITH RECURSIVE reptilia_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN reptilia_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_reptilia_species(tsn) AS (
  SELECT u.tsn FROM reptilia_descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_reptilia_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
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

function jsonlBytes(records) {
  return Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
}

function compareCodeUnits(left, right) {
  return left < right ? -1 : left > right ? 1 : 0
}

function chunkBySourceBytes(records) {
  const chunks = []
  let current = []
  let currentBytes = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (bytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`Record ${record.colUsageId ?? record.currentName?.tsn} exceeds shard limit`)
    if (current.length && currentBytes + bytes > SHARD_SOURCE_LIMIT_BYTES) {
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

function outputDescriptor(path, records, bytes, sourceBytes) {
  return {
    path: repoPath(path),
    records: records.length,
    firstColUsageId: records[0]?.colUsageId ?? null,
    lastColUsageId: records.at(-1)?.colUsageId ?? null,
    bytes: bytes.length,
    sha256: sha256(bytes),
    sourceBytes: sourceBytes.length,
    sourceSha256: sha256(sourceBytes),
  }
}

async function forEachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColSpecies(manifest) {
  const nodes = new Map()
  const species = []
  const files = manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
  for (const path of files) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank === 'species' && record.status === 'accepted') species.push(record)
      else nodes.set(record.id, record.parentId)
    })
  }
  const ancestors = (record) => {
    const result = []
    let ancestorId = record.parentId
    while (ancestorId) {
      result.push(ancestorId)
      const parentId = nodes.get(ancestorId)
      if (parentId === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestorId}`)
      ancestorId = parentId
    }
    return result
  }
  const packages = {
    [TURTLES_PACKAGE_ID]: [],
    [CROC_PACKAGE_ID]: [],
  }
  const birds = []
  for (const record of species) {
    const lineage = ancestors(record)
    const isCrocodylia = lineage.includes(CROCODYLIA_COL_ROOT_ID)
    const isReptilia = lineage.includes(REPTILIA_COL_ROOT_ID)
    const isAves = lineage.includes('V2')
    if (isAves) birds.push(record)
    if (isCrocodylia) packages[CROC_PACKAGE_ID].push(record)
    else if (isReptilia) packages[TURTLES_PACKAGE_ID].push(record)
  }
  if (birds.length !== 11044) throw new Error(`Expected 11044 COL Aves excluded from this import; got ${birds.length}`)
  for (const records of Object.values(packages)) records.sort((left, right) => left.id.localeCompare(right.id))
  if (packages[TURTLES_PACKAGE_ID].length !== 12622 || packages[CROC_PACKAGE_ID].length !== 27) {
    throw new Error(`Unexpected COL Reptilia partitions: ${packages[TURTLES_PACKAGE_ID].length}/${packages[CROC_PACKAGE_ID].length}`)
  }
  return { packages, birdsExcluded: birds.length }
}

function currentName(row) {
  return {
    tsn: String(row.tsn),
    scientificName: String(row.scientific_name),
    usage: String(row.name_usage),
    credibilityRating: row.credibility_rtng || null,
    completenessRating: row.completeness_rtng || null,
    currencyRating: row.currency_rating || null,
    updateDate: row.update_date || null,
  }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(REPTILE_ROOT_TSN)
    if (!root || root.completename !== 'Reptilia' || root.rank_name !== 'Class' || root.name_usage !== 'valid') {
      throw new Error('Pinned ITIS Reptilia root TSN no longer has the expected valid class identity')
    }
    const currentRows = database.prepare(CURRENT_SPECIES_QUERY).all(REPTILE_ROOT_TSN)
    const synonymRows = database.prepare(SPECIES_SYNONYM_QUERY).all(REPTILE_ROOT_TSN)
    const validNodes = database.prepare(`WITH RECURSIVE reptilia_descendants(tsn) AS (
      SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN reptilia_descendants d ON u.parent_tsn = d.tsn WHERE u.name_usage = 'valid'
    ) SELECT u.tsn, u.parent_tsn FROM taxonomic_units u JOIN reptilia_descendants d ON d.tsn = u.tsn`).all(REPTILE_ROOT_TSN)
    const parentByTsn = new Map(validNodes.map((row) => [String(row.tsn), String(row.parent_tsn)]))
    const crocTsn = String(CROCODYLIA_ROOT_TSN)
    const isCrocodylia = (row) => {
      let tsn = String(row.parent_tsn)
      const visited = new Set()
      while (tsn && tsn !== '0') {
        if (tsn === crocTsn) return true
        if (visited.has(tsn)) throw new Error(`ITIS lineage cycle at ${tsn}`)
        visited.add(tsn)
        tsn = parentByTsn.get(tsn) ?? ''
      }
      return false
    }
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { root, currentRows, synonymRows, maxima, isCrocodylia }
  } finally {
    database.close()
  }
}

function countsFor(records) {
  return {
    total: records.length,
    accepted: records.filter((record) => record.status === 'accepted').length,
    synonymCurrentNameRedirect: records.filter((record) => record.status === 'synonym-current-name-redirect').length,
    ambiguous: records.filter((record) => record.status === 'ambiguous').length,
    unmatched: records.filter((record) => record.status === 'unmatched').length,
  }
}

function runtimeRecord(record) {
  return Object.fromEntries(RUNTIME_FIELDS
    .filter((field) => field in record)
    .map((field) => [field, record[field]]))
}

function makeDescriptor({ packageId, scope, packageRecords, allMatches, upstreamOnly, source, sourceBytes, registryManifestBytes, ownershipBytes, canonicalBytes, packageRoot }) {
  const records = packageRecords.map((record) => runtimeRecord(allMatches.get(record.id)))
    .sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  const root = join(packageRoot, 'nomenclature')
  mkdirSync(root, { recursive: true })
  for (const name of readdirSync(root)) {
    if (/^itis-(?:tsn-sidecar|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) rmSync(join(root, name))
  }
  const shards = chunkBySourceBytes(records).map((chunk, index) => {
    const name = `itis-tsn-sidecar-${String(index).padStart(3, '0')}.jsonl.gz`
    const sourcePayload = jsonlBytes(chunk)
    const compressed = Buffer.from(deterministicGzip(sourcePayload, { level: 9 }))
    const path = join(root, name)
    writeFileSync(path, compressed)
    return outputDescriptor(path, chunk, compressed, sourcePayload)
  })
  const upstreamRecords = upstreamOnly.map((row) => ({
    colUsageId: null,
    currentName: currentName(row),
    basis: `No strict COL26.8 accepted species or official species-synonym evidence resolves to this current ITIS Reptilia species; package partition: ${scope}.`,
  })).sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn))
  const upstreamDescriptor = upstreamRecords.length
    ? (() => {
      const upstreamSource = jsonlBytes(upstreamRecords)
      const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
      const upstreamPath = join(root, 'itis-upstream-only-000.jsonl.gz')
      writeFileSync(upstreamPath, upstreamCompressed)
      return {
        ...outputDescriptor(upstreamPath, upstreamRecords, upstreamCompressed, upstreamSource),
        colOwnership: null,
        firstTsn: upstreamRecords[0].currentName.tsn,
        lastTsn: upstreamRecords.at(-1).currentName.tsn,
      }
    })()
    : null
  const counts = countsFor(records)
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId,
    scope,
    sources: {
      col: {
        releaseAlias: 'COL26.8',
        releaseDate: '2026-08-20',
        rootUsageIds: packageId === TURTLES_PACKAGE_ID ? ['45C', '477', 'RP'] : ['329'],
        registryManifestPath: repoPath(join(REGISTRY_ROOT, 'manifest.json')),
        registryManifestSha256: sha256(registryManifestBytes),
        ownershipPath: repoPath(OWNERSHIP_PATH),
        ownershipSha256: sha256(ownershipBytes),
      },
      itis: {
        datasetId: source.datasetId,
        exportDate: source.release.exportDate,
        rootTsn: String(REPTILE_ROOT_TSN),
        crocodyliaRootTsn: String(CROCODYLIA_ROOT_TSN),
        sourceLedgerPath: repoPath(SOURCE_PATH),
        sourceLedgerSha256: sha256(sourceBytes),
        license: source.license.spdx,
        citationDoi: source.citation.doi,
      },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: {
        accepted: 'The normalized COL name resolves to exactly one valid ITIS Reptilia species and directly equals that current ITIS name.',
        'synonym-current-name-redirect': 'The normalized COL name equals one or more official ITIS invalid species names whose synonym_links rows resolve to exactly one valid ITIS Reptilia species.',
        ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Reptilia species TSN.',
        unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Reptilia species.',
      },
      prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar supplies a frozen, exact nomenclatural crosswalk for the declared COL26.8 partition. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or scientific-review record. Aves are deliberately excluded; the 27 Crocodylia records are retained in the existing mixed crocodylomorphs-birds package under an explicit Crocodylia scope.',
      zh: '此 CC0 ITIS 侧车仅为声明的 COL26.8 分区提供冻结的严格命名交叉映射；它不是最终分类权威、系统发育、物种概念等同性声明、生物档案、化石记录或科学审查记录。鸟类被明确排除；27 条鳄类记录保留在现有鳄形类与鸟类混合包中，并标明 Crocodylia 分区。',
    },
    counts: { ...counts, itisCurrentSpecies: source.currentRows.length, itisSpeciesSynonymLinks: source.synonymRows.length, itisUpstreamOnly: upstreamRecords.length },
    colUsageIdLocator: {
      key: 'colUsageId',
      ordering: 'Unicode code-unit ascending',
      sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES,
      stableAddressing: 'Binary-search the non-overlapping inclusive colUsageId ranges; a detail request loads exactly one matching immutable JSONL gzip shard.',
      files: shards,
    },
    upstreamOnly: {
      colOwnership: null,
      stableAddressing: upstreamDescriptor
        ? 'No COL usage ID is assigned. The package-partitioned ITIS-only current-species records are in one immutable JSONL gzip shard.'
        : 'No ITIS-only current species belong to this package partition.',
      files: upstreamDescriptor ? [upstreamDescriptor] : [],
    },
    canonicalCrosswalk: {
      path: repoPath(CANONICAL_PATH),
      bytes: canonicalBytes.length,
      sha256: sha256(canonicalBytes),
    },
    integration: {
      targetPackageManifestPath: `data/packages/${packageId === TURTLES_PACKAGE_ID ? 'reptilia/turtles-lepidosaurs' : 'archosauria/crocodylomorphs-birds'}/manifest.json`,
      pagesLight: 'Pages may retain this descriptor and omit every row-level JSONL gzip shard.',
      androidIosFull: 'Android and iOS complete-data inventories must include this descriptor and every listed row-level shard byte-for-byte.',
      lookup: {
        strategy: 'lexicographic-colUsageId-range-v1',
        requestPolicy: 'Select the sole file whose inclusive firstColUsageId/lastColUsageId range contains the requested COL usage ID; load and parse only that payload shard.',
        forbiddenBehavior: 'A single-species detail query must not download or parse the complete authority sidecar or more than one payload shard.',
      },
    },
  }
  const descriptorPath = join(root, 'itis-tsn-sidecar.json')
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  return { descriptor, descriptorPath, descriptorBytes, shards, upstreamDescriptor, records }
}

async function main() {
  const sqliteArgument = process.argv.indexOf('--itis-sqlite')
  if (sqliteArgument < 0 || !process.argv[sqliteArgument + 1]) throw new Error('Usage: node scripts/build-itis-reptilia-sidecars.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[sqliteArgument + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes.toString('utf8'))
  const registryManifestPath = join(REGISTRY_ROOT, 'manifest.json')
  const registryManifestBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  if (sha256(registryManifestBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const col = await loadColSpecies(JSON.parse(registryManifestBytes.toString('utf8')))
  if (ownership.packageCounts[TURTLES_PACKAGE_ID] !== col.packages[TURTLES_PACKAGE_ID].length
    || ownership.packageCounts[CROC_PACKAGE_ID] !== 11071) throw new Error('COL ownership package counts do not match pinned package boundaries')
  const itis = loadItis(sqlitePath)
  if (itis.currentRows.length !== 10550) throw new Error(`Unexpected ITIS valid Reptilia species count: ${itis.currentRows.length}`)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  const index = createItisMammalNameIndex(itis.currentRows, itis.synonymRows)
  const allCol = [...col.packages[TURTLES_PACKAGE_ID].map((record) => ({ ...record, packageId: TURTLES_PACKAGE_ID, scope: 'non-Crocodylia Reptilia' })), ...col.packages[CROC_PACKAGE_ID].map((record) => ({ ...record, packageId: CROC_PACKAGE_ID, scope: 'Crocodylia only; Aves excluded' }))]
  const allMatches = new Map()
  const canonicalRecords = []
  for (const record of allCol) {
    const result = matchColSpecies(record, index)
    const output = { packageId: record.packageId, scope: record.scope, status: result.status, ...result.record }
    allMatches.set(record.id, output)
    canonicalRecords.push(output)
  }
  canonicalRecords.sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  const evidencedTsns = new Set()
  for (const record of canonicalRecords) {
    if (record.currentName) evidencedTsns.add(record.currentName.tsn)
    for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  const upstreamRows = itis.currentRows.filter((row) => !evidencedTsns.has(String(row.tsn)))
  const upstreamByPackage = { [TURTLES_PACKAGE_ID]: [], [CROC_PACKAGE_ID]: [] }
  for (const row of upstreamRows) upstreamByPackage[itis.isCrocodylia(row) ? CROC_PACKAGE_ID : TURTLES_PACKAGE_ID].push(row)
  const totalCounts = countsFor(canonicalRecords)
  const canonical = {
    schemaVersion: 1,
    crosswalkType: 'release-pinned-exact-itis-reptilia-authority-crosswalk',
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', rootUsageIds: ['45C', '477', 'RP', '329'], registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryManifestBytes), ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes), strictPredicate: 'rank=species AND status=accepted' },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(REPTILE_ROOT_TSN), crocodyliaRootTsn: String(CROCODYLIA_ROOT_TSN), sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sha256(sourceBytes), databaseMember: source.archive.databaseMember, databaseSha256: sqliteSha256, license: source.license.spdx, citationDoi: source.citation.doi },
    },
    scope: { colAcceptedSpecies: totalCounts.total, turtlesLepidosaurs: col.packages[TURTLES_PACKAGE_ID].length, crocodyliaInMixedPackage: col.packages[CROC_PACKAGE_ID].length, avesExcludedFromMixedPackage: col.birdsExcluded, itisRoot: 'Reptilia; all valid descendants; Aves excluded' },
    exactMatching: { normalization: source.importLedger.normalization, forbidden: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.' },
    counts: { ...totalCounts, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, itisUpstreamOnly: upstreamRows.length },
    packageCounts: { [TURTLES_PACKAGE_ID]: countsFor(canonicalRecords.filter((record) => record.packageId === TURTLES_PACKAGE_ID)), [CROC_PACKAGE_ID]: countsFor(canonicalRecords.filter((record) => record.packageId === CROC_PACKAGE_ID)), upstreamOnly: Object.fromEntries(Object.entries(upstreamByPackage).map(([key, rows]) => [key, rows.length])) },
    integrity: { algorithm: 'sha256', recordLedgerSha256: sha256(jsonlBytes(canonicalRecords)), upstreamOnlyLedgerSha256: sha256(jsonlBytes(upstreamRows.map(currentName))) },
    records: canonicalRecords,
    upstreamOnlyRecords: upstreamRows.map((row) => ({ packageId: itis.isCrocodylia(row) ? CROC_PACKAGE_ID : TURTLES_PACKAGE_ID, currentName: currentName(row) })).sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn)),
    limitations: ['This release-pinned nomenclatural crosswalk is not a claim that the COL or ITIS species concepts are identical.', 'Aves are excluded even though they share the existing crocodylomorphs-birds package.', 'Crocodylia is retained as 27 COL species in that mixed package and is never silently merged with Aves.', 'ITIS-only current species remain in package-partitioned upstream-only shards and have no COL ownership ID.'],
  }
  const canonicalSource = jsonBytes(canonical)
  const canonicalBytes = Buffer.from(deterministicGzip(canonicalSource, { level: 9 }))
  writeFileSync(CANONICAL_PATH, canonicalBytes)
  const packageResults = {}
  packageResults[TURTLES_PACKAGE_ID] = makeDescriptor({ packageId: TURTLES_PACKAGE_ID, scope: 'Non-Crocodylia Reptilia: Squamata, Testudines and remaining COL Reptilia ownership; Aves excluded.', packageRecords: col.packages[TURTLES_PACKAGE_ID], allMatches, upstreamOnly: upstreamByPackage[TURTLES_PACKAGE_ID], source: { ...itis, ...source }, sourceBytes, registryManifestBytes, ownershipBytes, canonicalBytes, packageRoot: join(REPOSITORY_ROOT, 'data', 'packages', 'reptilia', 'turtles-lepidosaurs') })
  packageResults[CROC_PACKAGE_ID] = makeDescriptor({ packageId: CROC_PACKAGE_ID, scope: 'Crocodylia-only partition of the existing mixed crocodylomorphs-birds package; all Aves excluded.', packageRecords: col.packages[CROC_PACKAGE_ID], allMatches, upstreamOnly: upstreamByPackage[CROC_PACKAGE_ID], source: { ...itis, ...source }, sourceBytes, registryManifestBytes, ownershipBytes, canonicalBytes, packageRoot: join(REPOSITORY_ROOT, 'data', 'packages', 'archosauria', 'crocodylomorphs-birds') })
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-reptilia-nomenclatural-sidecars',
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryManifestBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { colRootUsageIds: ['45C', '477', 'RP', '329'], colStrictAcceptedSpecies: totalCounts.total, packageCounts: canonical.packageCounts, avesExcluded: col.birdsExcluded, itisRoot: { tsn: String(itis.root.tsn), scientificName: itis.root.completename, rank: itis.root.rank_name, usage: itis.root.name_usage }, crocodyliaRootTsn: String(CROCODYLIA_ROOT_TSN), itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima },
    matchingContract: canonical.exactMatching,
    totals: canonical.counts,
    canonical: { path: repoPath(CANONICAL_PATH), bytes: canonicalBytes.length, sha256: sha256(canonicalBytes), sourceBytes: canonicalSource.length, sourceSha256: sha256(canonicalSource) },
    outputs: Object.fromEntries(Object.entries(packageResults).map(([packageId, result]) => [packageId, { descriptor: { path: repoPath(result.descriptorPath), bytes: result.descriptorBytes.length, sha256: sha256(result.descriptorBytes) }, counts: result.descriptor.counts, colUsageIdShards: result.shards, upstreamOnly: result.upstreamDescriptor }])),
    deliveryContract: { pagesLight: 'Pages may include only the small per-package descriptors and omit all row-level sidecar shards.', androidIosFull: 'Android and iOS must include each descriptor, all listed colUsageId shards and each listed upstream-only shard byte-for-byte.', runtimeChange: 'This data import changes no runtime/version/release manifest.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization and stable sorting; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(LEDGER_PATH, jsonBytes(ledger))
  console.log(JSON.stringify({ counts: canonical.counts, packageCounts: canonical.packageCounts, canonical: ledger.canonical, outputs: ledger.outputs }, null, 2))
}

await main()
