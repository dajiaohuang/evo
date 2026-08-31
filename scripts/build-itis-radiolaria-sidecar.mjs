import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = resolve(dirname(scriptPath), '..')
const releaseRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const outputRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const descriptorPath = join(outputRoot, 'itis-radiolaria-sidecar.json')
const ledgerPath = join(repositoryRoot, 'data', 'sources', 'itis-radiolaria-sidecar-import-ledger.json')
const packageId = 'protists-chromists'
const packageRoots = ['C', 'Z']
const targetName = 'Radiolaria'

function parseArgs(argv) {
  const options = {
    registryRoot: join(releaseRoot, 'registry'),
    ownershipPath: join(repositoryRoot, 'data', 'registry', 'package-species-coverage.json'),
    itisSourceLedgerPath: join(repositoryRoot, 'data', 'sources', 'itis-2026-08-26.json'),
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--ownership') options.ownershipPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourceLedgerPath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-radiolaria-sidecar.mjs --itis-sqlite <verified ITIS.sqlite> [--registry-root <path>] [--ownership <path>] [--itis-source-ledger <path>]')
  return options
}

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')

function repositoryPath(path) {
  const normalized = path.replaceAll('\\', '/')
  const known = [
    '/data/catalogue-of-life/releases/2026-08-20/registry/manifest.json',
    '/data/registry/package-species-coverage.json',
    '/data/sources/itis-2026-08-26.json',
  ]
  const match = known.find((suffix) => normalized.endsWith(suffix))
  if (match) return match.slice(1)
  return normalized.startsWith(`${repositoryRoot.replaceAll('\\', '/')}/`)
    ? normalized.slice(repositoryRoot.length + 1)
    : normalized
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function auditColScope(registryRoot) {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exactRootCandidates = []
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (record) => {
      if (record.scientificName === targetName) exactRootCandidates.push(record)
    })
  }
  if (exactRootCandidates.length) throw new Error(`Pinned COL root audit changed: found exact ${targetName} node(s); reassess this zero-row boundary before regenerating`)
  return { manifestPath, manifestBytes, exactRootCandidates }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exactNameCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all(targetName)
    const legacyRoot = exactNameCandidates.find((row) => row.tsn === 46088)
    if (!legacyRoot || legacyRoot.scientific_name !== targetName || legacyRoot.rank_name !== 'Order' || legacyRoot.name_usage !== 'valid' || legacyRoot.parent_tsn !== 46078) throw new Error(`Pinned ITIS legacy Radiolaria audit changed: ${JSON.stringify(exactNameCandidates)}`)
    const acceptedExactRoots = exactNameCandidates.filter((row) => row.name_usage === 'accepted')
    if (acceptedExactRoots.length) throw new Error(`ITIS now has an accepted exact ${targetName} root; reassess this zero-row boundary before regenerating: ${JSON.stringify(acceptedExactRoots)}`)
    const legacyLineage = database.prepare(`WITH RECURSIVE ancestors(tsn, scientific_name, rank_name, name_usage, parent_tsn, depth) AS (
      SELECT u.tsn, l.completename, r.rank_name, u.name_usage, u.parent_tsn, 0
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id WHERE u.tsn = 46088
      UNION ALL
      SELECT u.tsn, l.completename, r.rank_name, u.name_usage, u.parent_tsn, a.depth + 1
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id JOIN ancestors a ON a.parent_tsn = u.tsn
    ) SELECT tsn, scientific_name, rank_name, name_usage, parent_tsn, depth FROM ancestors ORDER BY depth`).all()
    const legacyDescendants = database.prepare(`WITH RECURSIVE descendants(tsn) AS (
      SELECT 46088 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn = d.tsn
    ) SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM descendants d JOIN taxonomic_units u ON u.tsn = d.tsn JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id ORDER BY u.tsn`).all()
    const nearbyModernCandidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = 'rhizaria' ORDER BY u.tsn`).all()
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exactNameCandidates, acceptedExactRoots, legacyRoot, legacyLineage, legacyDescendants, nearbyModernCandidates, maxima }
  } finally { database.close() }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-radiolaria-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditColScope(options.registryRoot)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === packageId)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== ownership.packageCounts[packageId] || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(packageRoots)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)

  // COL has no exact Radiolaria usage node. ITIS has only a legacy valid order
  // under Labyrinthulea/Piroplasmia and no accepted species descendants. Rhizaria
  // is recorded only as a modern nearby candidate, never as a taxon substitute.
  const emptySource = Buffer.alloc(0)
  const emptyBytes = Buffer.from(deterministicGzip(emptySource, { level: 9 }))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-radiolaria-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const upstreamPath = join(outputRoot, 'itis-radiolaria-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, emptyBytes)
  const upstreamDescriptor = { path: repositoryPath(upstreamPath), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: emptyBytes.length, sha256: sha256(emptyBytes), sourceBytes: emptySource.length, sourceSha256: sha256(emptySource), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = {
    packageRootUsageIds: packageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: targetName,
    colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId],
    colRootAudit: `No exact COL26.8 usage node named ${targetName} exists in the complete pinned hierarchy; no strict COL partition is claimed.`,
    boundary: 'This boundary audit contains no Radiolaria rows: COL26.8 has no exact Radiolaria node, and ITIS 2026-08-26 has no accepted exact Radiolaria root. Its only exact-name valid order is a legacy Labyrinthulea/Piroplasmia placement with no accepted species descendants. Accepted Rhizaria is recorded only as a nearby modern classification candidate and is not substituted.',
  }
  const rootBoundaryAudit = {
    colExactRootCandidates: col.exactRootCandidates, itisExactNameCandidates: itis.exactNameCandidates, itisAcceptedExactRootCandidates: itis.acceptedExactRoots,
    itisLegacyExactNameRoot: itis.legacyRoot, itisLegacyExactNameLineage: itis.legacyLineage, itisLegacyExactNameDescendants: itis.legacyDescendants,
    itisNearbyModernCandidates: itis.nearbyModernCandidates, selectedColRoot: null, selectedItisRoot: null,
    decision: 'No exact accepted Radiolaria root exists in either pinned authority. The ITIS exact-name order TSN 46088 is a valid legacy record under Labyrinthulea/Piroplasmia with no accepted species descendants; accepted Rhizaria TSN 969913 is a nearby modern classification record, not a substitute root. No COL or ITIS range is asserted.',
  }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-root-boundary-audit', packageId, scope, rootBoundaryAudit,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repositoryPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), ownershipPath: repositoryPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: targetName, rootStatus: 'no-accepted-exact-root', sourceLedgerPath: repositoryPath(options.itisSourceLedgerPath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: { normalization: source.importLedger.normalization, statuses: { accepted: `Unavailable: no exact accepted ${targetName} root exists in the pinned authorities.`, 'synonym-current-name-redirect': `Unavailable: no exact accepted ${targetName} root exists in the pinned authorities.`, ambiguous: `Unavailable: no exact accepted ${targetName} root exists in the pinned authorities.`, unmatched: `Unavailable: no exact ${targetName} COL partition exists.` }, prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, package-wide, near-lineage or taxon-substituted matching is used.' },
    evidenceBoundary: { en: `This CC0 ITIS boundary audit is a frozen exact-root check for the declared COL26.8 Protists and Chromists package. It is not a global ${targetName} checklist, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier or a scientific-review record.`, zh: `此 CC0 ITIS 边界审计仅冻结声明的 COL26.8 原生生物与色界生物包的精确根检查；它不是全球 ${targetName} 名录、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。` },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: 'No COL row-level files exist because COL26.8 does not materialize an exact Radiolaria root.', files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No exact accepted ITIS Radiolaria root exists in this release, so the upstream-only partition is an explicit empty immutable JSONL gzip shard.', files: [upstreamDescriptor] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [upstreamDescriptor.path], records: 0, totalCompressedBytes: upstreamDescriptor.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  mkdirSync(dirname(ledgerPath), { recursive: true })
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-radiolaria-root-boundary-audit',
    generatedFrom: { sourcePath: repositoryPath(options.itisSourceLedgerPath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repositoryPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colOwnershipPath: repositoryPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, maximumUpdateDates: itis.maxima }, matchingContract: descriptor.exactMatching, totals: counts,
    output: { descriptor: { path: repositoryPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstreamDescriptor },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor and may omit the empty row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories include the descriptor and the listed explicit empty shard; there are no non-empty authoritative rows to include.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: 'scripts/build-itis-radiolaria-sidecar.mjs', scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact COL and ITIS root audits, explicit legacy and nearby-modern records, and deterministic gzip; no wall-clock fields or fuzzy matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
