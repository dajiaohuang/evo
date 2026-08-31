import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'data/sources/itis-2026-08-26.json')
const registryRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const ownershipPath = join(root, 'data/registry/package-species-coverage.json')
const nomenclatureRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
const descriptorPath = join(nomenclatureRoot, 'itis-phoronida-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-phoronida-sidecar-import-ledger.json')
const ITIS_ROOT_TSN = 155456
const COL_ROOT_USAGE_ID = '5P'
const PACKAGE_ID = 'other-animals'
const SHARD_SOURCE_LIMIT_BYTES = 2 * 1024 * 1024

const currentSpeciesQuery = `WITH RECURSIVE phoronida_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN phoronida_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng,
  u.completeness_rtng, u.currency_rating, u.update_date
FROM phoronida_descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const synonymQuery = `WITH RECURSIVE phoronida_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN phoronida_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_phoronida_species(tsn) AS (
  SELECT u.tsn FROM phoronida_descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_phoronida_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(root.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColPhoronidaSpecies(manifest) {
  const files = manifest.hierarchy.nodes.files
    .map((file) => join(registryRoot, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
  const parents = new Map()
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank !== 'species') parents.set(record.id, record.parentId)
  })
  const descendants = []
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank !== 'species' || record.status !== 'accepted') return
    let ancestor = record.parentId
    while (ancestor) {
      if (ancestor === COL_ROOT_USAGE_ID) {
        descendants.push(record)
        return
      }
      const parent = parents.get(ancestor)
      if (parent === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestor}`)
      ancestor = parent
    }
  })
  return descendants.sort((left, right) => compareCodeUnits(left.id, right.id))
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return {
    tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date),
  }
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
  let chunk = []
  let used = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (bytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId} exceeds the source shard limit`)
    if (chunk.length && used + bytes > SHARD_SOURCE_LIMIT_BYTES) {
      chunks.push(chunk)
      chunk = []
      used = 0
    }
    chunk.push(record)
    used += bytes
  }
  if (chunk.length) chunks.push(chunk)
  return chunks
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const rootRecord = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(ITIS_ROOT_TSN)
    if (!rootRecord || rootRecord.completename !== 'Phoronida' || rootRecord.rank_name !== 'Phylum' || rootRecord.name_usage !== 'valid') {
      throw new Error('Pinned ITIS Phoronida root no longer has the expected valid phylum identity')
    }
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { rootRecord, maxima, currentRows: database.prepare(currentSpeciesQuery).all(ITIS_ROOT_TSN), synonymRows: database.prepare(synonymQuery).all(ITIS_ROOT_TSN) }
  } finally {
    database.close()
  }
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-phoronida-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(sourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const registryManifestPath = join(registryRoot, 'manifest.json')
  const registryBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(ownershipPath)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const ownership = JSON.parse(ownershipBytes)
  const packageCount = ownership.packageCounts[PACKAGE_ID]
  const colSpecies = await loadColPhoronidaSpecies(JSON.parse(registryBytes))
  if (!Number.isInteger(packageCount) || colSpecies.length > packageCount) throw new Error('COL/package scope audit is inconsistent')
  const { rootRecord, maxima, currentRows, synonymRows } = loadItis(sqlitePath)
  if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
  const index = createItisMammalNameIndex(currentRows, synonymRows)
  const counts = { accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0 }
  const crosswalk = []
  const evidencedTsns = new Set()
  for (const colRecord of colSpecies) {
    const result = matchColSpecies(colRecord, index)
    const status = result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status
    counts[status] += 1
    const record = { status: result.status, ...result.record }
    crosswalk.push(record)
    if (record.currentName) evidencedTsns.add(record.currentName.tsn)
    for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  crosswalk.sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  if (new Set(crosswalk.map((record) => record.colUsageId)).size !== colSpecies.length) throw new Error('COL Phoronida records are not uniquely addressable')
  const upstreamOnly = currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({
    colUsageId: null, currentName: currentName(row),
    basis: 'No strict COL26.8 Phoronida accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.',
  })).sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn))
  mkdirSync(nomenclatureRoot, { recursive: true })
  for (const name of readdirSync(nomenclatureRoot)) if (/^itis-phoronida-(?:sidecar|upstream-only)-\d{3,4}\.jsonl\.gz$/u.test(name)) rmSync(join(nomenclatureRoot, name))
  const shards = chunkBySourceBytes(crosswalk).map((records, indexNumber) => {
    const filename = `itis-phoronida-sidecar-${String(indexNumber).padStart(4, '0')}.jsonl.gz`
    const sourceBytes = jsonlBytes(records)
    const bytes = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const path = join(nomenclatureRoot, filename)
    writeFileSync(path, bytes)
    return outputDescriptor(path, records, bytes, sourceBytes)
  })
  const upstreamSourceBytes = jsonlBytes(upstreamOnly)
  const upstreamBytes = Buffer.from(deterministicGzip(upstreamSourceBytes, { level: 9 }))
  const upstreamPath = join(nomenclatureRoot, 'itis-phoronida-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamBytes)
  const upstreamDescriptor = { ...outputDescriptor(upstreamPath, upstreamOnly, upstreamBytes, upstreamSourceBytes), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const total = Object.values(counts).reduce((sum, value) => sum + value, 0)
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-nomenclatural-crosswalk', packageId: PACKAGE_ID,
    scope: {
      colRootUsageId: COL_ROOT_USAGE_ID, colRootScientificName: 'Phoronida', colStrictAcceptedSpecies: colSpecies.length,
      packageStrictAcceptedSpecies: packageCount, packageOutOfScopeStrictAcceptedSpecies: packageCount - colSpecies.length,
      boundary: 'other-animals is the deterministic Animalia remainder after every more-specific static-package route. This sidecar covers only strict accepted COL26.8 species descending from the exact Phoronida root 5P; every other other-animals-owned species is explicitly non-applicable.',
    },
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN), sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: {
        accepted: 'The normalized COL name resolves to exactly one valid ITIS Phoronida species and directly equals that current ITIS name.',
        'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Phoronida species.',
        ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Phoronida species TSN.',
        unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Phoronida species.',
      },
      prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk, not a global phoronid checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier or scientific-review record.',
      zh: '此 CC0 ITIS 侧车是冻结的严格命名交叉映射；它不是全球帚虫动物门（Phoronida）名录、最终分类权威、系统发育树、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts: { total, ...counts, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, itisUpstreamOnly: upstreamOnly.length },
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamDescriptor] },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-phoronida-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...descriptor.scope, itisRoot: { tsn: String(rootRecord.tsn), scientificName: rootRecord.completename, rank: rootRecord.rank_name, usage: rootRecord.name_usage }, itisCurrentSpecies: currentRows.length, itisSpeciesSynonymLinks: synonymRows.length, maximumUpdateDates: maxima },
    matchingContract: descriptor.exactMatching, totals: descriptor.counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: 'scripts/build-itis-phoronida-sidecar.mjs', scriptSha256: await sha256File(fileURLToPath(import.meta.url)), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: descriptor.counts, scope: descriptor.scope, output: ledger.output }, null, 2))
}

await main()
