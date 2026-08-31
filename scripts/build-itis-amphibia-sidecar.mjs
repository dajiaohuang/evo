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
const OUTPUT_PATH = join(REPOSITORY_ROOT, 'data', 'packages', 'vertebrata', 'amphibia', 'nomenclature', 'itis-tsn-sidecar.json')
const LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-amphibia-sidecar-import-ledger.json')
const AMPHIBIA_ROOT_TSN = 173420
const AMPHIBIA_COL_ROOT_ID = 'PH'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024
const MATCHING_STATUSES = {
  accepted: 'The normalized COL name resolves to exactly one valid ITIS Amphibia species and directly equals that current ITIS name.',
  'synonym-current-name-redirect': 'The normalized COL name equals one or more official ITIS invalid species names whose synonym_links rows resolve to exactly one valid ITIS Amphibia species.',
  ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Amphibia species TSN.',
  unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Amphibia species.',
}

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE amphibia_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN amphibia_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage,
  u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM amphibia_descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const SPECIES_SYNONYM_QUERY = `WITH RECURSIVE amphibia_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN amphibia_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_amphibia_species(tsn) AS (
  SELECT u.tsn FROM amphibia_descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_amphibia_species a ON a.tsn = s.tsn_accepted
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
    const recordBytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (recordBytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId}: one JSONL record exceeds the source shard limit`)
    if (current.length && currentBytes + recordBytes > SHARD_SOURCE_LIMIT_BYTES) {
      chunks.push(current)
      current = []
      currentBytes = 0
    }
    current.push(record)
    currentBytes += recordBytes
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

async function loadColAmphibiaSpecies(manifest) {
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
  const amphibia = species.filter((record) => {
    let ancestorId = record.parentId
    while (ancestorId) {
      if (ancestorId === AMPHIBIA_COL_ROOT_ID) return true
      const parentId = nodes.get(ancestorId)
      if (parentId === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestorId}`)
      ancestorId = parentId
    }
    return false
  }).sort((left, right) => left.id.localeCompare(right.id))
  return amphibia
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

function sortUpstreamOnly(records) {
  return [...records].sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn))
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(AMPHIBIA_ROOT_TSN)
    if (!root || root.completename !== 'Amphibia' || root.rank_name !== 'Class' || root.name_usage !== 'valid') {
      throw new Error('Pinned ITIS Amphibia root TSN no longer has the expected valid class identity')
    }
    const currentRows = database.prepare(CURRENT_SPECIES_QUERY).all(AMPHIBIA_ROOT_TSN)
    const synonymRows = database.prepare(SPECIES_SYNONYM_QUERY).all(AMPHIBIA_ROOT_TSN)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { root, currentRows, synonymRows, maxima }
  } finally {
    database.close()
  }
}

async function main() {
  const sqliteArgument = process.argv.indexOf('--itis-sqlite')
  if (sqliteArgument < 0 || !process.argv[sqliteArgument + 1]) throw new Error('Usage: node scripts/build-itis-amphibia-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[sqliteArgument + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes.toString('utf8'))
  const sourceSha256 = sha256(sourceBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(REGISTRY_ROOT, 'manifest.json')
  const registryManifestBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  if (sha256(registryManifestBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  const colSpecies = await loadColAmphibiaSpecies(JSON.parse(registryManifestBytes.toString('utf8')))
  if (colSpecies.length !== ownership.packageCounts.amphibia) throw new Error(`COL Amphibia ownership mismatch: ${colSpecies.length}`)
  const { root, currentRows, synonymRows, maxima } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const index = createItisMammalNameIndex(currentRows, synonymRows)
  const groups = { accepted: [], synonymCurrentNameRedirect: [], ambiguous: [], unmatched: [] }
  const evidencedTsns = new Set()
  for (const colRecord of colSpecies) {
    const result = matchColSpecies(colRecord, index)
    groups[result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status].push(result.record)
    if (result.record.currentName) evidencedTsns.add(result.record.currentName.tsn)
    for (const candidate of result.record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
  const upstreamOnly = sortUpstreamOnly(currentRows
    .filter((row) => !evidencedTsns.has(String(row.tsn)))
    .map((row) => ({
      colUsageId: null,
      currentName: currentName(row),
      basis: 'No strict COL26.8 Amphibia accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.',
    })))
  const counts = countsFor(groups)
  const crosswalkRecords = Object.entries(groups)
    .flatMap(([status, records]) => records.map((record) => ({ status, ...record })))
    .sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  if (new Set(crosswalkRecords.map((record) => record.colUsageId)).size !== colSpecies.length) {
    throw new Error('COL Amphibia sidecar records are not uniquely addressable by colUsageId')
  }
  const nomenclatureRoot = dirname(OUTPUT_PATH)
  mkdirSync(nomenclatureRoot, { recursive: true })
  for (const name of readdirSync(nomenclatureRoot)) {
    if (/^itis-(?:tsn-sidecar|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) rmSync(join(nomenclatureRoot, name))
  }
  const shardDescriptors = chunkBySourceBytes(crosswalkRecords).map((records, index) => {
    const fileName = `itis-tsn-sidecar-${String(index).padStart(3, '0')}.jsonl.gz`
    const sourceBytes = jsonlBytes(records)
    const bytes = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const path = join(nomenclatureRoot, fileName)
    writeFileSync(path, bytes)
    return outputDescriptor(path, records, bytes, sourceBytes)
  })
  const upstreamSourceBytes = jsonlBytes(upstreamOnly)
  const upstreamBytes = Buffer.from(deterministicGzip(upstreamSourceBytes, { level: 9 }))
  const upstreamPath = join(nomenclatureRoot, 'itis-upstream-only-000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = {
    ...outputDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamSourceBytes),
    colOwnership: null,
    firstTsn: upstreamOnly[0]?.currentName.tsn ?? null,
    lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null,
  }
  const sidecar = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId: 'amphibia',
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', rootUsageId: AMPHIBIA_COL_ROOT_ID, registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryManifestBytes), ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(AMPHIBIA_ROOT_TSN), sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sourceSha256, license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: MATCHING_STATUSES,
      prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar supplies a frozen, exact nomenclatural crosswalk. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, or scientific-review record.',
      zh: '此 CC0 ITIS 侧车提供冻结的严格命名交叉映射；它不是最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts: { ...counts, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length },
    colUsageIdLocator: {
      key: 'colUsageId',
      ordering: 'Unicode code-unit ascending',
      sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES,
      stableAddressing: 'Binary-search the non-overlapping inclusive colUsageId ranges; a detail request loads exactly one matching immutable JSONL gzip shard.',
      files: shardDescriptors,
    },
    upstreamOnly: {
      colOwnership: null,
      stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.',
      files: [upstreamDescriptor],
    },
  }
  const sidecarBytes = jsonBytes(sidecar)
  writeFileSync(OUTPUT_PATH, sidecarBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-amphibia-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256, itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryManifestBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { colRootUsageId: AMPHIBIA_COL_ROOT_ID, colStrictAcceptedSpecies: colSpecies.length, itisRoot: { tsn: String(root.tsn), scientificName: root.completename, rank: root.rank_name, usage: root.name_usage }, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima },
    matchingContract: sidecar.exactMatching,
    totals: sidecar.counts,
    output: {
      descriptor: { path: repoPath(OUTPUT_PATH), bytes: sidecarBytes.length, sha256: sha256(sidecarBytes) },
      colUsageIdShards: shardDescriptors,
      upstreamOnly: upstreamDescriptor,
    },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', zip: 'When a package ZIP integration is approved, include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization and stable sorting; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(LEDGER_PATH, jsonBytes(ledger))
  console.log(JSON.stringify({ ledger: repoPath(LEDGER_PATH), totals: sidecar.counts, output: ledger.output }, null, 2))
}

await main()
