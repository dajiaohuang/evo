import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip, gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const outputRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const descriptorPath = join(outputRoot, 'itis-katablepharidota-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-katablepharidota-sidecar-import-ledger.json')
const packageId = 'protists-chromists'
const packageRoots = ['C', 'Z']
const targetName = 'Katablepharidota'
// These are recorded as exact-name audit candidates only. They are never
// treated as taxonomic equivalents or used to select a row-level range.
const nearRootNames = ['Katablepharidophyta', 'Katablepharidophyceae', 'Katablepharidida', 'Katablepharidales']

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(records.length ? `${records.map((record) => JSON.stringify(record)).join('\n')}\n` : '', 'utf8')
const repoPath = (path) => path.replaceAll('\\', '/').slice(root.length + 1)

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const lines = createInterface({ input: createReadStream(path).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function parseArgs(argv) {
  const options = {
    registryRoot: join(releaseRoot, 'registry'),
    ownershipPath: join(root, 'data', 'registry', 'package-species-coverage.json'),
    itisSourceLedgerPath: join(root, 'data', 'sources', 'itis-2026-08-26.json'),
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
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-katablepharidota-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

async function auditColScope(registryRoot) {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exactRootCandidates = []
  const nearRootCandidates = []
  for (const file of manifest.hierarchy.nodes.files) await eachGzipJsonLine(join(registryRoot, ...file.path.split('/')), (record) => {
    if (record.scientificName === targetName) exactRootCandidates.push(record)
    if (nearRootNames.includes(record.scientificName)) nearRootCandidates.push(record)
  })
  if (exactRootCandidates.length) throw new Error(`Pinned COL hierarchy now contains exact ${targetName}: ${JSON.stringify(exactRootCandidates)}`)
  return { manifestPath, manifestBytes, exactRootCandidates, nearRootCandidates }
}

function loadItis(sqlitePath) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const placeholders = [targetName, ...nearRootNames].map(() => '?').join(',')
    const candidates = database.prepare(`SELECT u.tsn, l.completename AS scientific_name, r.rank_name, u.name_usage, u.parent_tsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) IN (${placeholders}) ORDER BY u.tsn`).all(targetName, ...nearRootNames)
    const exactNameCandidates = candidates.filter((row) => row.scientific_name.trim().toLowerCase() === targetName.toLowerCase())
    if (exactNameCandidates.length) throw new Error(`Pinned ITIS export now contains exact ${targetName}: ${JSON.stringify(exactNameCandidates)}`)
    const nearRootCandidates = candidates.filter((row) => row.scientific_name.trim().toLowerCase() !== targetName.toLowerCase())
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    return { exactNameCandidates, nearRootCandidates, maxima }
  } finally { database.close() }
}

function auditExistingSidecars() {
  const inspectedScopes = []
  const overlappingColUsageIds = []
  const overlappingItisTsns = []
  const seenCol = new Map()
  const seenTsn = new Map()
  for (const name of readdirSync(outputRoot).filter((value) => value.startsWith('itis-') && value.endsWith('-sidecar.json')).sort()) {
    if (name === 'itis-katablepharidota-sidecar.json') continue
    const descriptor = JSON.parse(readFileSync(join(outputRoot, name), 'utf8'))
    const scopeName = name.slice('itis-'.length, -'-sidecar.json'.length)
    inspectedScopes.push(scopeName)
    const paths = [...(descriptor.colUsageIdLocator?.files ?? []), ...(descriptor.upstreamOnly?.files ?? [])]
    for (const file of paths) {
      const absolute = join(root, file.path)
      try {
        const text = readFileSync(absolute)
        for (const line of gunzipSync(text).toString('utf8').split('\n').filter(Boolean)) {
          const row = JSON.parse(line)
          if (row.colUsageId !== null && row.colUsageId !== undefined) {
            if (seenCol.has(row.colUsageId) && seenCol.get(row.colUsageId) !== scopeName) overlappingColUsageIds.push({ id: row.colUsageId, scope: scopeName, previousScope: seenCol.get(row.colUsageId) })
            seenCol.set(row.colUsageId, scopeName)
          }
          const names = row.currentName ? [row.currentName] : (row.candidates ?? []).flatMap((candidate) => candidate.currentName ? [candidate.currentName] : [])
          for (const current of names) {
            if (seenTsn.has(String(current.tsn)) && seenTsn.get(String(current.tsn)) !== scopeName) overlappingItisTsns.push({ tsn: String(current.tsn), scope: scopeName, previousScope: seenTsn.get(String(current.tsn)) })
            seenTsn.set(String(current.tsn), scopeName)
          }
        }
      } catch { /* A missing/empty descriptor shard is not an overlap. */ }
    }
  }
  return { inspectedScopes, overlappingColUsageIds, overlappingItisTsns }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-katablepharidota-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourceLedgerPath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditColScope(options.registryRoot)
  const ownershipBytes = readFileSync(options.ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === packageId)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== ownership.packageCounts[packageId] || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(packageRoots)) throw new Error('Pinned COL package ownership does not match Protists and Chromists')
  const itis = loadItis(options.itisSqlitePath)
  if (itis.maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || itis.maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(itis.maxima)}`)

  const overlapAudit = auditExistingSidecars()
  const emptySource = jsonlBytes([])
  const emptyBytes = Buffer.from(deterministicGzip(emptySource, { level: 9 }))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-katablepharidota-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const upstreamPath = join(outputRoot, 'itis-katablepharidota-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, emptyBytes)
  const upstreamFile = { path: repoPath(upstreamPath), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: emptyBytes.length, sha256: sha256(emptyBytes), sourceBytes: emptySource.length, sourceSha256: sha256(emptySource), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = {
    packageRootUsageIds: packageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'], colRootUsageId: null, colRootScientificName: targetName,
    colStrictAcceptedSpecies: 0, packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId],
    colRootAudit: `No exact COL26.8 usage node named ${targetName} exists in the complete pinned hierarchy; no strict COL partition is claimed.`,
    boundary: `This boundary audit contains no ${targetName} rows because neither COL26.8 nor ITIS 2026-08-26 exposes an exact accepted root named ${targetName}. Exact-name candidates such as ${nearRootNames.join(', ')} are recorded only for audit and are not substituted.`,
  }
  const rootBoundaryAudit = {
    colExactRootCandidates: col.exactRootCandidates, colNearRootCandidates: col.nearRootCandidates,
    itisExactNameCandidates: itis.exactNameCandidates, itisNearRootCandidates: itis.nearRootCandidates,
    selectedColRoot: null, selectedItisRoot: null, overlapAudit,
    decision: `No exact ${targetName} root exists in either pinned authority. Any nearby exact-name candidates are audit evidence only; no COL or ITIS range is asserted and no taxonomic equivalence is inferred.`,
  }
  const exactMatching = {
    normalization: source.importLedger.normalization,
    statuses: { accepted: `Unavailable: no exact ${targetName} root exists in the pinned authorities.`, 'synonym-current-name-redirect': `Unavailable: no exact ${targetName} root exists in the pinned authorities.`, ambiguous: `Unavailable: no exact ${targetName} root exists in the pinned authorities.`, unmatched: `Unavailable: no exact ${targetName} partition exists.` },
    prohibited: 'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, package-wide or taxon-substituted matching is used.',
  }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-root-boundary-audit', packageId, scope, rootBoundaryAudit,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), ownershipPath: repoPath(options.ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: targetName, rootStatus: 'absent', sourceLedgerPath: repoPath(options.itisSourceLedgerPath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching, evidenceBoundary: {
      en: `This CC0 ITIS boundary audit is a frozen exact-root check for ${targetName} in the pinned COL26.8 Protists and Chromists package. It is not a global checklist, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier or a scientific-review record.`,
      zh: `此 CC0 ITIS 边界审计冻结记录了固定版本 COL26.8 原生生物与色界生物包中 ${targetName} 的精确根检查。它不是全球物种清单、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。`,
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: `No COL row-level files exist because COL26.8 does not materialize an exact ${targetName} root.`, files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: `No exact ITIS ${targetName} root exists in this release, so the upstream-only partition is an explicit empty immutable JSONL gzip shard.`, files: [upstreamFile] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [upstreamFile.path], records: 0, totalCompressedBytes: upstreamFile.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-katablepharidota-root-boundary-audit',
    generatedFrom: { sourcePath: repoPath(options.itisSourceLedgerPath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colOwnershipPath: repoPath(options.ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, maximumUpdateDates: itis.maxima }, matchingContract: exactMatching, totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstreamFile },
    deliveryContract: { pagesLight: 'Pages needs only this small descriptor summary and may omit the empty row-level JSONL gzip shard.', androidIosFull: 'Android and iOS complete-data inventories include the descriptor and the listed explicit empty shard; there are no non-empty authoritative rows to include.', runtimeChange: 'This import deliberately changes no formal runtime or published release manifest.' },
    generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact COL and ITIS root audits, explicit exact-name candidate audit, existing-sidecar overlap audit and deterministic gzip; no wall-clock fields or taxonomic substitution.' },
  }
  mkdirSync(dirname(ledgerPath), { recursive: true }); writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
