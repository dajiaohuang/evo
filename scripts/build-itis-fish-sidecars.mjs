import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies, sortCrosswalkRecords } from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(ROOT, 'data', 'sources', 'itis-2026-08-26.json')
const REGISTRY_ROOT = join(ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const OWNERSHIP_PATH = join(ROOT, 'data', 'registry', 'package-species-coverage.json')
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024

const PACKAGES = [
  {
    packageId: 'actinopterygii',
    packagePath: 'vertebrata/actinopterygii',
    collectionId: 'itis-actinopterygii-tsn-crosswalk',
    fileStem: 'itis-actinopterygii',
    colRoots: ['8VR36'],
    colScopeNames: ['Actinopterygii'],
    itisRoot: { tsn: 161061, scientificName: 'Actinopterygii', rank: 'Superclass' },
  },
  {
    packageId: 'chondrichthyes',
    packagePath: 'vertebrata/chondrichthyes',
    collectionId: 'itis-chondrichthyes-tsn-crosswalk',
    fileStem: 'itis-chondrichthyes',
    colRoots: ['8X6G5'],
    colScopeNames: ['Chondrichthyes'],
    // The valid superclass 914180 has exactly one valid child: this semantic class.
    itisRoot: { tsn: 159785, scientificName: 'Chondrichthyes', rank: 'Class' },
  },
  {
    packageId: 'early-fishes',
    packagePath: 'vertebrata/early-fishes',
    collectionId: 'itis-agnatha-myxini-tsn-crosswalk',
    fileStem: 'itis-agnatha-myxini',
    colRoots: ['KTXJW', '6225G'],
    colScopeNames: ['Agnatha', 'Myxini'],
    // ITIS Agnatha contains Myxini; the COL roots are a set union, never a sum.
    itisRoot: { tsn: 914178, scientificName: 'Agnatha', rank: 'Infraphylum' },
  },
]

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage, u.credibility_rtng,
  u.completeness_rtng, u.currency_rating, u.update_date
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
), accepted(tsn) AS (
  SELECT u.tsn FROM descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(records.length ? `${records.map((record) => JSON.stringify(record)).join('\n')}\n` : '', 'utf8')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(ROOT.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColStrictAccepted(manifest) {
  const parents = new Map()
  const species = []
  const files = manifest.hierarchy.nodes.files.map((file) => join(REGISTRY_ROOT, ...file.path.split('/'))).sort()
  for (const path of files) await eachGzipJsonLine(path, (record) => {
    if (record.rank === 'species' && record.status === 'accepted') species.push(record)
    else parents.set(record.id, record.parentId)
  })
  const ancestors = (record) => {
    const ids = new Set()
    let id = record.parentId
    while (id) {
      if (ids.has(id)) throw new Error(`COL hierarchy cycle at ${id}`)
      ids.add(id)
      if (!parents.has(id)) throw new Error(`COL hierarchy broken at ${id}`)
      id = parents.get(id)
    }
    return ids
  }
  return { species, ancestors }
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return {
    tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date),
  }
}

function countStatuses(records) {
  return {
    total: records.length,
    accepted: records.filter((record) => record.status === 'accepted').length,
    synonymCurrentNameRedirect: records.filter((record) => record.status === 'synonym-current-name-redirect').length,
    ambiguous: records.filter((record) => record.status === 'ambiguous').length,
    unmatched: records.filter((record) => record.status === 'unmatched').length,
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

function outputDescriptor(path, records, bytes, sourceBytes) {
  return {
    path: repoPath(path), records: records.length, bytes: bytes.length, sha256: sha256(bytes),
    sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes),
    firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null,
  }
}

function loadItis(sqlitePath, definition) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = ?1`).get(definition.itisRoot.tsn)
    if (!root || root.completename !== definition.itisRoot.scientificName || root.rank_name !== definition.itisRoot.rank || root.name_usage !== 'valid') {
      throw new Error(`${definition.packageId}: pinned ITIS root identity changed`)
    }
    const currentRows = database.prepare(CURRENT_SPECIES_QUERY).all(definition.itisRoot.tsn)
    const synonymRows = database.prepare(SPECIES_SYNONYM_QUERY).all(definition.itisRoot.tsn)
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { root, currentRows, synonymRows, maxima }
  } finally {
    database.close()
  }
}

function exactMatching(source, definition) {
  const scope = definition.colScopeNames.join('/')
  return {
    normalization: source.importLedger.normalization,
    statuses: {
      accepted: `The normalized COL name resolves to exactly one valid ITIS ${scope} species and directly equals that current ITIS name.`,
      'synonym-current-name-redirect': `The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS ${scope} species.`,
      ambiguous: `The normalized exact evidence resolves to more than one valid ITIS ${scope} species TSN.`,
      unmatched: `No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS ${scope} species.`,
    },
    prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
  }
}

async function buildOne({ definition, col, source, sourceBytes, registryBytes, ownershipBytes, ownership, sqlitePath }) {
  const selected = col.species.filter((record) => {
    const lineage = col.ancestors(record)
    return definition.colRoots.some((root) => lineage.has(root))
  }).sort((left, right) => compareCodeUnits(left.id, right.id))
  if (selected.length !== ownership.packageCounts[definition.packageId]) {
    throw new Error(`${definition.packageId}: COL root/package mismatch ${selected.length}/${ownership.packageCounts[definition.packageId]}`)
  }
  const itis = loadItis(sqlitePath, definition)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) {
    throw new Error(`${definition.packageId}: pinned ITIS update dates changed`)
  }
  const index = createItisMammalNameIndex(itis.currentRows, itis.synonymRows)
  const groups = { accepted: [], synonymCurrentNameRedirect: [], ambiguous: [], unmatched: [] }
  const evidencedTsns = new Set()
  for (const record of selected) {
    const result = matchColSpecies(record, index)
    const key = result.status === 'synonym-current-name-redirect' ? 'synonymCurrentNameRedirect' : result.status
    groups[key].push(result.record)
    if (result.record.currentName) evidencedTsns.add(result.record.currentName.tsn)
    for (const candidate of result.record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  for (const key of Object.keys(groups)) groups[key] = sortCrosswalkRecords(groups[key])
  const matches = Object.entries(groups).flatMap(([status, records]) => records.map((record) => ({
    status: status === 'synonymCurrentNameRedirect' ? 'synonym-current-name-redirect' : status,
    ...record,
  })))
    .sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  if (new Set(matches.map((record) => record.colUsageId)).size !== selected.length) throw new Error(`${definition.packageId}: duplicate COL IDs`)
  const upstreamOnly = itis.currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({
    colUsageId: null,
    currentName: currentName(row),
    basis: `No strict COL26.8 ${definition.colScopeNames.join('/')} accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS TSN.`,
  }))
  const nomenclatureRoot = join(ROOT, 'data', 'packages', ...definition.packagePath.split('/'), 'nomenclature')
  const descriptorPath = join(nomenclatureRoot, `${definition.fileStem}-sidecar.json`)
  const ledgerPath = join(ROOT, 'data', 'sources', `${definition.fileStem}-sidecar-import-ledger.json`)
  mkdirSync(nomenclatureRoot, { recursive: true })
  for (const name of readdirSync(nomenclatureRoot)) if (new RegExp(`^${definition.fileStem}-(?:sidecar|upstream-only)-\\d{3}\\.jsonl\\.gz$`, 'u').test(name)) rmSync(join(nomenclatureRoot, name))
  const files = chunkBySourceBytes(matches).map((records, number) => {
    const sourceBytes = jsonlBytes(records)
    const bytes = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const path = join(nomenclatureRoot, `${definition.fileStem}-sidecar-${String(number).padStart(3, '0')}.jsonl.gz`)
    writeFileSync(path, bytes)
    return outputDescriptor(path, records, bytes, sourceBytes)
  })
  const upstreamFiles = upstreamOnly.length === 0 ? [] : (() => {
    const sourceBytes = jsonlBytes(upstreamOnly)
    const bytes = Buffer.from(deterministicGzip(sourceBytes, { level: 9 }))
    const path = join(nomenclatureRoot, `${definition.fileStem}-upstream-only-000.jsonl.gz`)
    writeFileSync(path, bytes)
    return [{ ...outputDescriptor(path, upstreamOnly, bytes, sourceBytes), colOwnership: null, firstTsn: upstreamOnly[0].currentName.tsn, lastTsn: upstreamOnly.at(-1).currentName.tsn }]
  })()
  const counts = { ...countStatuses(matches), itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, itisUpstreamOnly: upstreamOnly.length }
  const matching = exactMatching(source, definition)
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId: definition.packageId,
    id: definition.collectionId,
    scope: { colRootUsageIds: definition.colRoots, colScopeNames: definition.colScopeNames, colStrictAcceptedSpecies: selected.length, packageStrictAcceptedSpecies: ownership.packageCounts[definition.packageId], rootUnion: 'A species is selected once when any declared COL root occurs in its lineage; nested roots are not additive.' },
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(join(REGISTRY_ROOT, 'manifest.json')), registryManifestSha256: sha256(registryBytes), ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(definition.itisRoot.tsn), scientificName: definition.itisRoot.scientificName, rank: definition.itisRoot.rank, sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: matching,
    evidenceBoundary: { en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or expert-review record.' },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES, stableAddressing: 'Binary-search non-overlapping inclusive COL usage-ID ranges; one detail request loads one immutable JSONL gzip shard.', files },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No COL usage ID is assigned; the complete ITIS-only current-species partition is a separate immutable JSONL gzip shard when non-empty.', files: upstreamFiles },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-fish-nomenclatural-sidecar',
    packageId: definition.packageId,
    collectionId: definition.collectionId,
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: await sha256File(sqlitePath), colRegistryManifestPath: repoPath(join(REGISTRY_ROOT, 'manifest.json')), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { colRoots: definition.colRoots, colScopeNames: definition.colScopeNames, colStrictAcceptedSpecies: selected.length, packageStrictAcceptedSpecies: ownership.packageCounts[definition.packageId], rootUnion: descriptor.scope.rootUnion, itisRoot: { tsn: String(itis.root.tsn), scientificName: itis.root.completename, rank: itis.root.rank_name, usage: itis.root.name_usage }, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima },
    queries: { currentSpecies: CURRENT_SPECIES_QUERY, speciesSynonyms: SPECIES_SYNONYM_QUERY },
    matchingContract: matching,
    totals: counts,
    outputs: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: files, upstreamOnly: upstreamFiles },
    deliveryContract: { pagesLight: 'Pages may publish only the descriptor and canonical file hashes; no row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include the descriptor and every listed row-level shard byte-for-byte.', runtimeChange: 'Data-only import; no version, package manifest or release-manifest changes.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, fixed COL and ITIS roots, exact SQL, representation-only normalization, Unicode code-unit ID ordering and deterministic gzip; no fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  return { packageId: definition.packageId, counts, files: files.length, upstreamFiles: upstreamFiles.length }
}

async function main() {
  const index = process.argv.indexOf('--itis-sqlite')
  if (index < 0 || !process.argv[index + 1]) throw new Error('Usage: node scripts/build-itis-fish-sidecars.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[index + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes)
  const registryBytes = readFileSync(join(REGISTRY_ROOT, 'manifest.json'))
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const ownership = JSON.parse(ownershipBytes)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  if (await sha256File(sqlitePath) !== source.archive.databaseSha256) throw new Error('ITIS SQLite SHA-256 mismatch')
  const col = await loadColStrictAccepted(JSON.parse(registryBytes))
  console.log(JSON.stringify(await Promise.all(PACKAGES.map((definition) => buildOne({ definition, col, source, sourceBytes, registryBytes, ownershipBytes, ownership, sqlitePath }))), null, 2))
}

await main()
