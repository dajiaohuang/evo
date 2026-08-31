import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/itis-2026-08-26.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const OWNERSHIP_PATH = join(ROOT, 'data/registry/package-species-coverage.json')
const NOMENCLATURE_ROOT = join(ROOT, 'data/packages/invertebrata/molluscs-brachiopods/nomenclature')
const OUTPUT_PATH = join(NOMENCLATURE_ROOT, 'itis-mollusca-brachiopoda-tsn-sidecar.json')
const LEDGER_PATH = join(ROOT, 'data/sources/itis-mollusca-brachiopoda-sidecar-import-ledger.json')
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const COL_ROOTS = [
  { id: 'M2L', scientificName: 'Mollusca', itisScientificName: 'Mollusca', role: 'applicable', itisTsn: 69458, itisRank: 'Phylum' },
  { id: 'B8V3K', scientificName: 'Brachiopoda Duméril, 1805', itisScientificName: 'Brachiopoda', role: 'applicable', itisTsn: 156755, itisRank: 'Phylum' },
  { id: 'KZ', scientificName: 'Graptolithina Bronn, 1849', itisScientificName: 'Graptolithina', role: 'non-applicable', itisTsn: 993363, itisRank: 'Subclass', reason: 'This package teaching root is retained as an explicit fossil/archival boundary. It is outside the requested Mollusca-and-Brachiopoda ITIS crosswalk scope, so no homonymous or higher-rank substitution is attempted.' },
]

const MATCHING_STATUSES = {
  accepted: 'The normalized COL name resolves to exactly one valid ITIS species under a declared applicable root and directly equals that current ITIS name.',
  'synonym-current-name-redirect': 'The normalized COL name equals one or more official ITIS invalid species names whose synonym_links rows resolve to exactly one valid ITIS species under a declared applicable root.',
  ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS species TSN under the declared applicable roots.',
  unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS species under the declared applicable roots.',
}

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage,
  u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const SPECIES_SYNONYM_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_species(tsn) AS (
  SELECT u.tsn FROM descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const codeUnitCompare = (left, right) => left < right ? -1 : left > right ? 1 : 0
const repoPath = (path) => path.slice(ROOT.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function forEachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function outputDescriptor(path, records, bytes, sourceBytes) {
  return {
    path: repoPath(path), records: records.length,
    firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null,
    bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes),
  }
}

function chunkBySourceBytes(records) {
  const chunks = []
  let current = []
  let currentBytes = 0
  for (const record of records) {
    const recordBytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (recordBytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId}: one JSONL record exceeds the source shard limit`)
    if (current.length && currentBytes + recordBytes > SHARD_SOURCE_LIMIT_BYTES) {
      chunks.push(current); current = []; currentBytes = 0
    }
    current.push(record); currentBytes += recordBytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

async function loadColScope(manifest) {
  const nodes = new Map()
  const species = []
  const files = manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
  for (const path of files) await forEachGzipJsonLine(path, (record) => {
    if (record.rank === 'species' && record.status === 'accepted') species.push(record)
    else nodes.set(record.id, record.parentId)
  })
  const roots = new Map(COL_ROOTS.map((root) => [root.id, root]))
  const groups = new Map(COL_ROOTS.map((root) => [root.id, []]))
  for (const record of species) {
    let ancestorId = record.parentId
    const found = []
    while (ancestorId) {
      if (roots.has(ancestorId)) found.push(ancestorId)
      const parentId = nodes.get(ancestorId)
      if (parentId === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestorId}`)
      ancestorId = parentId
    }
    if (found.length > 1) throw new Error(`COL species ${record.id} belongs to overlapping declared roots: ${found.join(', ')}`)
    if (found.length === 1) groups.get(found[0]).push(record)
  }
  for (const records of groups.values()) records.sort((left, right) => codeUnitCompare(left.id, right.id))
  return groups
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootQuery = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`)
    const current = database.prepare(CURRENT_SPECIES_QUERY)
    const synonyms = database.prepare(SPECIES_SYNONYM_QUERY)
    const rootAudits = COL_ROOTS.map((definition) => {
      const root = rootQuery.get(definition.itisTsn)
      if (!root || root.completename !== definition.itisScientificName) throw new Error(`ITIS root ${definition.itisTsn} has an unexpected scientific identity`)
      if (root.rank_name !== definition.itisRank || root.name_usage !== 'valid') throw new Error(`ITIS root ${definition.itisTsn} is not the expected valid ${definition.itisRank}`)
      const currentRows = current.all(definition.itisTsn)
      const synonymRows = synonyms.all(definition.itisTsn)
      return { definition, root, currentRows, synonymRows }
    })
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootAudits, maxima }
  } finally { database.close() }
}

function currentName(row) {
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: row.credibility_rtng || null, completenessRating: row.completeness_rtng || null, currencyRating: row.currency_rating || null, updateDate: row.update_date || null }
}

function countsFor(groups) {
  return { total: Object.values(groups).reduce((sum, records) => sum + records.length, 0), accepted: groups.accepted.length, synonymCurrentNameRedirect: groups.synonymCurrentNameRedirect.length, ambiguous: groups.ambiguous.length, unmatched: groups.unmatched.length }
}

async function main() {
  const flag = process.argv.indexOf('--itis-sqlite')
  if (flag < 0 || !process.argv[flag + 1]) throw new Error('Usage: node scripts/build-itis-mollusca-brachiopoda-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[flag + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes.toString('utf8'))
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(REGISTRY_ROOT, 'manifest.json')
  const registryManifestBytes = readFileSync(registryManifestPath)
  if (sha256(registryManifestBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes.toString('utf8'))
  const colGroups = await loadColScope(JSON.parse(registryManifestBytes.toString('utf8')))
  const colScope = COL_ROOTS.map((root) => ({ ...root, strictAcceptedSpecies: colGroups.get(root.id).length }))
  const allPackageSpecies = colScope.reduce((sum, root) => sum + root.strictAcceptedSpecies, 0)
  if (allPackageSpecies !== ownership.packageCounts['molluscs-brachiopods']) throw new Error(`COL package ownership mismatch: ${allPackageSpecies}`)
  const { rootAudits, maxima } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const applicableAudits = rootAudits.filter(({ definition }) => definition.role === 'applicable')
  const currentRows = applicableAudits.flatMap(({ currentRows: rows }) => rows)
  const synonymRows = applicableAudits.flatMap(({ synonymRows: rows }) => rows)
  if (new Set(currentRows.map((row) => String(row.tsn))).size !== currentRows.length) throw new Error('Applicable ITIS roots overlap at current species rank')
  const index = createItisMammalNameIndex(currentRows, synonymRows)
  const groups = { accepted: [], synonymCurrentNameRedirect: [], ambiguous: [], unmatched: [] }
  const evidencedTsns = new Set()
  const applicableColSpecies = applicableAudits.flatMap(({ definition }) => colGroups.get(definition.id))
  for (const colRecord of applicableColSpecies) {
    const result = matchColSpecies(colRecord, index)
    groups[result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status].push(result.record)
    if (result.record.currentName) evidencedTsns.add(result.record.currentName.tsn)
    for (const candidate of result.record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  for (const records of Object.values(groups)) records.sort((left, right) => codeUnitCompare(left.colUsageId, right.colUsageId))
  const counts = countsFor(groups)
  if (counts.total !== applicableColSpecies.length || new Set(applicableColSpecies.map((row) => row.id)).size !== counts.total) throw new Error('Applicable COL species do not have exactly one sidecar result')
  const crosswalkRecords = Object.entries(groups).flatMap(([status, records]) => records.map((record) => ({ status, ...record }))).sort((left, right) => codeUnitCompare(left.colUsageId, right.colUsageId))
  const upstreamOnly = currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({ colUsageId: null, currentName: currentName(row), basis: 'No strict COL26.8 accepted species under the declared applicable package roots has exact current-name or official ITIS species-synonym evidence for this valid ITIS TSN.' })).sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn))
  mkdirSync(NOMENCLATURE_ROOT, { recursive: true })
  for (const name of readdirSync(NOMENCLATURE_ROOT)) if (/^itis-mollusca-brachiopoda-(?:tsn-sidecar|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) rmSync(join(NOMENCLATURE_ROOT, name))
  const shards = chunkBySourceBytes(crosswalkRecords).map((records, index) => {
    const sourceBytes = jsonlBytes(records)
    const bytes = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const path = join(NOMENCLATURE_ROOT, `itis-mollusca-brachiopoda-tsn-sidecar-${String(index).padStart(3, '0')}.jsonl.gz`)
    writeFileSync(path, bytes)
    return outputDescriptor(path, records, bytes, sourceBytes)
  })
  const upstreamSourceBytes = jsonlBytes(upstreamOnly)
  const upstreamBytes = Buffer.from(deterministicGzip(upstreamSourceBytes, { level: 9 }))
  const upstreamPath = join(NOMENCLATURE_ROOT, 'itis-mollusca-brachiopoda-upstream-only-000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = { ...outputDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamSourceBytes), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const rootAudit = rootAudits.map(({ definition, root, currentRows, synonymRows }) => ({ col: colScope.find((entry) => entry.id === definition.id), itis: { tsn: String(root.tsn), scientificName: root.completename, rank: root.rank_name, usage: root.name_usage, currentSpecies: currentRows.length, speciesSynonymLinks: synonymRows.length } }))
  const sidecar = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: 'molluscs-brachiopods',
    sources: { col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryManifestBytes), ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes) }, itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi } },
    scope: { packageStrictAcceptedSpecies: allPackageSpecies, roots: rootAudit, applicableColStrictAcceptedSpecies: applicableColSpecies.length, nonApplicable: rootAudit.filter(({ col }) => col.role === 'non-applicable').map(({ col, itis }) => ({ ...col, itisCurrentSpeciesAuditOnly: itis.currentSpecies, itisSpeciesSynonymLinksAuditOnly: itis.speciesSynonymLinks })) },
    exactMatching: { normalization: source.importLedger.normalization, statuses: MATCHING_STATUSES, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, taxon-substituted, homonym-substituted or higher-rank matching is used.' },
    evidenceBoundary: { en: 'This CC0 ITIS sidecar supplies a frozen, exact nomenclatural crosswalk only for the declared Mollusca and Brachiopoda COL roots. Graptolithina is explicitly non-applicable. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, or scientific-review record.', zh: '此 CC0 ITIS 侧车仅为所声明的软体动物和腕足动物 COL 根提供冻结的严格命名交叉映射；笔石亚纲被明确标记为不适用。它不是最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。' },
    counts: { ...counts, itisApplicableCurrentSpecies: currentRows.length, itisApplicableSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length },
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search the non-overlapping inclusive colUsageId ranges; a detail request loads exactly one matching immutable JSONL gzip shard.', files: shards },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition for the declared applicable roots is in its own immutable JSONL gzip shard.', files: [upstreamDescriptor] },
  }
  const sidecarBytes = jsonBytes(sidecar)
  writeFileSync(OUTPUT_PATH, sidecarBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-mollusca-brachiopoda-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryManifestBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { roots: sidecar.scope.roots, packageStrictAcceptedSpecies: allPackageSpecies, applicableColStrictAcceptedSpecies: applicableColSpecies.length, nonApplicable: sidecar.scope.nonApplicable, maximumUpdateDates: maxima }, matchingContract: sidecar.exactMatching, totals: sidecar.counts,
    output: { descriptor: { path: repoPath(OUTPUT_PATH), bytes: sidecarBytes.length, sha256: sha256(sidecarBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and canonical hash inventory; it may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, declared non-overlapping roots, fixed SQL, exact representation-only normalization and stable sorting; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(LEDGER_PATH, jsonBytes(ledger))
  console.log(JSON.stringify({ ledger: repoPath(LEDGER_PATH), totals: sidecar.counts, scope: sidecar.scope, output: ledger.output }, null, 2))
}

await main()
