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
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-2026-08-26.json')
const REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const RESOURCE_PACK_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'other-animals')
const RESOURCE_PACK_MANIFEST_PATH = join(RESOURCE_PACK_ROOT, 'manifest.json')
const OWNERSHIP_PATH = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const OUTPUT_ROOT = RESOURCE_PACK_ROOT
const DESCRIPTOR_PATH = join(OUTPUT_ROOT, 'itis-nematomorpha-sidecar.json')
const LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'itis-nematomorpha-sidecar-import-ledger.json')
const COL_ROOT_USAGE_ID = '5B'
const COL_ROOT_NAME = 'Nematomorpha'
const ITIS_ROOT_TSN = 64183
const PACKAGE_ID = 'other-animals'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024
const EXPECTED = Object.freeze({
  colStrictAcceptedSpecies: 356,
  packageStrictAcceptedSpecies: 99161,
  itisCurrentSpecies: 238,
  itisSpeciesSynonymLinks: 70,
})

const currentSpeciesQuery = `WITH RECURSIVE nematomorpha_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN nematomorpha_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
)
SELECT u.tsn, l.completename AS scientific_name, u.name_usage,
  u.credibility_rtng, u.completeness_rtng, u.currency_rating, u.update_date
FROM nematomorpha_descendants d
JOIN taxonomic_units u ON u.tsn = d.tsn
JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
JOIN longnames l ON l.tsn = u.tsn
WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
ORDER BY u.tsn`

const synonymQuery = `WITH RECURSIVE nematomorpha_descendants(tsn) AS (
  SELECT ?1
  UNION ALL
  SELECT u.tsn FROM taxonomic_units u
  JOIN nematomorpha_descendants d ON u.parent_tsn = d.tsn
  WHERE u.name_usage = 'valid'
), accepted_nematomorpha_species(tsn) AS (
  SELECT u.tsn FROM nematomorpha_descendants d
  JOIN taxonomic_units u ON u.tsn = d.tsn
  JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
  WHERE lower(trim(r.rank_name)) = 'species' AND u.name_usage = 'valid'
)
SELECT s.tsn AS synonym_tsn, sl.completename AS synonym_name, su.name_usage AS synonym_usage,
  su.unaccept_reason, su.update_date AS synonym_update_date, s.tsn_accepted
FROM synonym_links s
JOIN accepted_nematomorpha_species a ON a.tsn = s.tsn_accepted
JOIN taxonomic_units su ON su.tsn = s.tsn
JOIN taxon_unit_types sr ON sr.kingdom_id = su.kingdom_id AND sr.rank_id = su.rank_id
JOIN longnames sl ON sl.tsn = su.tsn
WHERE lower(trim(sr.rank_name)) = 'species'
ORDER BY s.tsn, s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)
const repoPath = (path) => path.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColNematomorphaSpecies(manifest) {
  const nodes = new Map()
  const species = []
  const files = manifest.hierarchy.nodes.files
    .map((file) => join(REGISTRY_ROOT, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
  for (const path of files) {
    await eachGzipJsonLine(path, (record) => {
      if (record.rank === 'species' && record.status === 'accepted') species.push(record)
      else nodes.set(record.id, record.parentId)
    })
  }
  const descendants = species.filter((record) => {
    let ancestor = record.parentId
    const visited = new Set()
    while (ancestor) {
      if (ancestor === COL_ROOT_USAGE_ID) return true
      if (visited.has(ancestor)) throw new Error(`COL hierarchy cycle at ${ancestor}`)
      visited.add(ancestor)
      const parent = nodes.get(ancestor)
      if (parent === undefined) throw new Error(`COL hierarchy is broken for ${record.id} at ${ancestor}`)
      ancestor = parent
    }
    return false
  }).sort((left, right) => compareCodeUnits(left.id, right.id))
  return descendants
}

async function loadPackageSpecies(manifest) {
  const records = []
  for (const file of manifest.files) {
    await eachGzipJsonLine(join(RESOURCE_PACK_ROOT, file.path.split('/').slice(1).join('/')), (record) => records.push(record))
  }
  if (records.length !== manifest.acceptedSpeciesCount) throw new Error(`other-animals resource pack records changed: ${records.length}`)
  if (new Set(records.map((record) => record.id)).size !== records.length) throw new Error('other-animals resource pack contains duplicate COL IDs')
  if (records.some((record) => record.rank !== 'species' || record.status !== 'accepted')) throw new Error('other-animals resource pack contains a non-strict species record')
  return new Set(records.map((record) => record.id))
}

function currentName(row) {
  const clean = (value) => value === null || value === undefined ? null : String(value).trim() || null
  return {
    tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date),
  }
}

function chunkBySourceBytes(records) {
  const chunks = []
  let chunk = []
  let used = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (bytes > SHARD_SOURCE_LIMIT_BYTES) throw new Error(`COL ${record.colUsageId ?? record.currentName?.tsn} exceeds the source shard limit`)
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
    path: repoPath(path), records: records.length,
    firstColUsageId: records[0]?.colUsageId ?? null, lastColUsageId: records.at(-1)?.colUsageId ?? null,
    bytes: bytes.length, sha256: sha256(bytes), sourceBytes: sourceBytes.length, sourceSha256: sha256(sourceBytes),
  }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const root = database.prepare(`SELECT u.tsn, l.completename, r.rank_name, u.name_usage
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE u.tsn = ?1`).get(ITIS_ROOT_TSN)
    if (!root || root.completename !== 'Nematomorpha' || root.rank_name !== 'Phylum' || root.name_usage !== 'valid') {
      throw new Error('Pinned ITIS Nematomorpha root no longer has the expected valid phylum identity')
    }
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return {
      root,
      maxima,
      currentRows: database.prepare(currentSpeciesQuery).all(ITIS_ROOT_TSN),
      synonymRows: database.prepare(synonymQuery).all(ITIS_ROOT_TSN),
    }
  } finally {
    database.close()
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

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-nematomorpha-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(SOURCE_PATH)
  const source = JSON.parse(sourceBytes)
  const registryManifestPath = join(REGISTRY_ROOT, 'manifest.json')
  const registryBytes = readFileSync(registryManifestPath)
  const ownershipBytes = readFileSync(OWNERSHIP_PATH)
  const resourcePackBytes = readFileSync(RESOURCE_PACK_MANIFEST_PATH)
  const resourcePack = JSON.parse(resourcePackBytes)
  const ownership = JSON.parse(ownershipBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  if (sha256(registryBytes) !== source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  if (resourcePack.packageId !== PACKAGE_ID || resourcePack.acceptedSpeciesCount !== ownership.packageCounts[PACKAGE_ID]) throw new Error('other-animals package ownership manifest mismatch')
  const colSpecies = await loadColNematomorphaSpecies(JSON.parse(registryBytes))
  const packageIds = await loadPackageSpecies(resourcePack)
  if (!colSpecies.every((record) => packageIds.has(record.id))) throw new Error('COL Nematomorpha species escaped the other-animals ownership boundary')
  const nonApplicable = resourcePack.acceptedSpeciesCount - colSpecies.length
  if (colSpecies.length !== EXPECTED.colStrictAcceptedSpecies || resourcePack.acceptedSpeciesCount !== EXPECTED.packageStrictAcceptedSpecies) {
    throw new Error(`Unexpected frozen COL Nematomorpha scope: ${colSpecies.length}/${resourcePack.acceptedSpeciesCount}`)
  }
  const itis = loadItis(sqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)
  if (itis.currentRows.length !== EXPECTED.itisCurrentSpecies || itis.synonymRows.length !== EXPECTED.itisSpeciesSynonymLinks) {
    throw new Error(`Unexpected frozen ITIS Nematomorpha scope: ${itis.currentRows.length}/${itis.synonymRows.length}`)
  }
  const index = createItisMammalNameIndex(itis.currentRows, itis.synonymRows)
  const crosswalk = []
  const evidencedTsns = new Set()
  for (const colRecord of colSpecies) {
    const result = matchColSpecies(colRecord, index)
    const record = { status: result.status, ...result.record }
    crosswalk.push(record)
    if (record.currentName) evidencedTsns.add(record.currentName.tsn)
    for (const candidate of record.candidates ?? []) evidencedTsns.add(candidate.currentName.tsn)
  }
  crosswalk.sort((left, right) => compareCodeUnits(left.colUsageId, right.colUsageId))
  if (new Set(crosswalk.map((record) => record.colUsageId)).size !== colSpecies.length) throw new Error('COL Nematomorpha records are not uniquely addressable')
  const upstreamOnly = itis.currentRows.filter((row) => !evidencedTsns.has(String(row.tsn))).map((row) => ({
    colUsageId: null, currentName: currentName(row),
    basis: 'No strict COL26.8 Nematomorpha accepted-species name or official ITIS species-synonym evidence resolves to this current ITIS Nematomorpha species.',
  })).sort((left, right) => Number(left.currentName.tsn) - Number(right.currentName.tsn))
  for (const name of readdirSync(OUTPUT_ROOT)) if (/^itis-nematomorpha-(?:sidecar|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) rmSync(join(OUTPUT_ROOT, name))
  const shards = chunkBySourceBytes(crosswalk).map((records, indexNumber) => {
    const filename = `itis-nematomorpha-sidecar-${String(indexNumber).padStart(3, '0')}.jsonl.gz`
    const sourcePayload = jsonlBytes(records)
    const compressed = Buffer.from(deterministicGzip(sourcePayload, { level: 9 }))
    const path = join(OUTPUT_ROOT, filename)
    writeFileSync(path, compressed)
    return outputDescriptor(path, records, compressed, sourcePayload)
  })
  const upstreamSource = jsonlBytes(upstreamOnly)
  const upstreamCompressed = Buffer.from(deterministicGzip(upstreamSource, { level: 9 }))
  const upstreamPath = join(OUTPUT_ROOT, 'itis-nematomorpha-upstream-only-000.jsonl.gz')
  writeFileSync(upstreamPath, upstreamCompressed)
  const upstreamDescriptor = { ...outputDescriptor(upstreamPath, upstreamOnly, upstreamCompressed, upstreamSource), colOwnership: null, firstTsn: upstreamOnly[0]?.currentName.tsn ?? null, lastTsn: upstreamOnly.at(-1)?.currentName.tsn ?? null }
  const counts = countStatuses(crosswalk)
  const sourceComposition = Object.fromEntries(Object.entries(colSpecies.reduce((result, record) => { result[record.sourceDatasetId] = (result[record.sourceDatasetId] ?? 0) + 1; return result }, {})).sort((left, right) => left[0].localeCompare(right[0])))
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-exact-nomenclatural-crosswalk',
    packageId: PACKAGE_ID,
    scope: {
      colRootUsageId: COL_ROOT_USAGE_ID,
      colRootScientificName: COL_ROOT_NAME,
      colStrictAcceptedSpecies: colSpecies.length,
      packageStrictAcceptedSpecies: resourcePack.acceptedSpeciesCount,
      packageOutOfScopeStrictAcceptedSpecies: nonApplicable,
      packageOwnership: 'other-animals is the deterministic COL26.8 residual route below Animalia (N); Nematomorpha 5B has no more-specific static-package route.',
      nonApplicableBoundary: 'All other-animals strict accepted species not descending from 5B are non-applicable to this Nematomorpha sidecar. They remain in the mixed resource pack and are not silently mapped to ITIS Nematomorpha.',
      sourceComposition,
    },
    sources: {
      col: {
        releaseAlias: 'COL26.8', releaseDate: '2026-08-20', rootUsageId: COL_ROOT_USAGE_ID,
        registryManifestPath: repoPath(registryManifestPath), registryManifestSha256: sha256(registryBytes),
        ownershipPath: repoPath(OWNERSHIP_PATH), ownershipSha256: sha256(ownershipBytes),
        resourcePackManifestPath: repoPath(RESOURCE_PACK_MANIFEST_PATH), resourcePackManifestSha256: sha256(resourcePackBytes),
      },
      itis: {
        datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: String(ITIS_ROOT_TSN),
        sourceLedgerPath: repoPath(SOURCE_PATH), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi,
      },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: {
        accepted: 'The normalized COL name resolves to exactly one valid ITIS Nematomorpha species and directly equals that current ITIS name.',
        'synonym-current-name-redirect': 'The normalized COL name equals official ITIS invalid species-name evidence that resolves to exactly one valid ITIS Nematomorpha species.',
        ambiguous: 'The normalized exact evidence resolves to more than one valid ITIS Nematomorpha species TSN.',
        unmatched: 'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Nematomorpha species.',
      },
      prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the COL26.8 Nematomorpha partition. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or scientific-review record. The other-animals resource pack is mixed; its non-Nematomorpha remainder is explicitly out of scope.',
      zh: '此 CC0 ITIS 侧车是 COL26.8 Nematomorpha 分区的冻结严格命名交叉映射；它不是最终分类权威、系统发育树、物种概念等同性声明、生物档案、化石记录或科学审查记录。other-animals 资源包是混合包，其余非 Nematomorpha 物种被明确排除在本侧车之外。',
    },
    counts: { ...counts, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, itisUpstreamOnly: upstreamOnly.length },
    colUsageIdLocator: {
      key: 'colUsageId', ordering: 'Unicode code-unit ascending', sourceShardLimitBytes: SHARD_SOURCE_LIMIT_BYTES,
      stableAddressing: 'Binary-search the non-overlapping inclusive colUsageId ranges; one detail query loads exactly one immutable JSONL gzip shard.', files: shards,
    },
    upstreamOnly: {
      colOwnership: null, stableAddressing: 'No COL usage ID is assigned. The complete ITIS-only current-species partition is in its own immutable JSONL gzip shard.', files: [upstreamDescriptor],
    },
  }
  descriptor.deliveryProfiles = {
    'web-light': { payload: 'summary-only', records: 0, files: [], statement: 'GitHub Pages carries the descriptor and hashes without row-level Nematomorpha payload shards.' },
    'native-full': { payload: 'complete', records: colSpecies.length, files: [...shards, upstreamDescriptor], statement: 'Android and iOS carry every checksum-addressed Nematomorpha row shard, including the explicit ITIS-only partition.' },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(DESCRIPTOR_PATH, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'COL26.8-to-ITIS-exact-nematomorpha-nomenclatural-sidecar',
    generatedFrom: { sourcePath: repoPath(SOURCE_PATH), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(registryManifestPath), colRegistryManifestSha256: sha256(registryBytes), colOwnershipPath: repoPath(OWNERSHIP_PATH), colOwnershipSha256: sha256(ownershipBytes), resourcePackManifestPath: repoPath(RESOURCE_PACK_MANIFEST_PATH), resourcePackManifestSha256: sha256(resourcePackBytes) },
    scopeAudit: { ...descriptor.scope, itisRoot: { tsn: String(itis.root.tsn), scientificName: itis.root.completename, rank: itis.root.rank_name, usage: itis.root.name_usage }, itisCurrentSpecies: itis.currentRows.length, itisSpeciesSynonymLinks: itis.synonymRows.length, maximumUpdateDates: itis.maxima },
    matchingContract: descriptor.exactMatching,
    totals: descriptor.counts,
    output: { descriptor: { path: repoPath(DESCRIPTOR_PATH), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: shards, upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit all row-level JSONL gzip shards.', androidIosFull: 'Android and iOS complete-data inventories must include this descriptor and every listed row-level shard as the same checksum-addressed bytes.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(SCRIPT_PATH), scriptSha256: await sha256File(SCRIPT_PATH), deterministic: 'Pinned input checksums, fixed roots, exact SQL, exact representation-only normalization, code-unit ID ordering and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(LEDGER_PATH, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: descriptor.counts, scope: descriptor.scope, output: ledger.output }, null, 2))
}

await main()
