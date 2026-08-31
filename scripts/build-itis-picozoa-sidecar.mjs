import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const scriptPath = fileURLToPath(import.meta.url)
const root = resolve(dirname(scriptPath), '..')
const releaseRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const outputRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const descriptorPath = join(outputRoot, 'itis-picozoa-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-picozoa-sidecar-import-ledger.json')
const sourcePath = join(root, 'data', 'sources', 'itis-2026-08-26.json')
const packageId = 'protists-chromists'
const packageRoots = ['C', 'Z']
const targetName = 'Picozoa'
const nearNames = ['Picomonas', 'Picomonadida', 'Picomonadaceae', 'Picobio']

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (rows) => Buffer.from(rows.length ? `${rows.map((row) => JSON.stringify(row)).join('\n')}\n` : '', 'utf8')
const repoPath = (value) => value.startsWith(`${root}${'\\'}`) || value.startsWith(`${root}/`)
  ? value.slice(root.length + 1).replaceAll('\\', '/')
  : value.replaceAll('\\', '/')

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function eachGzipJsonLine(path, visit) {
  const input = createReadStream(path).pipe(createGunzip())
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

function parseArgs(argv) {
  const options = { itisSourcePath: sourcePath, registryPath: registryRoot }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--itis-sqlite') options.itisSqlitePath = resolve(argv[++index])
    else if (value === '--registry-root') options.registryPath = resolve(argv[++index])
    else if (value === '--itis-source-ledger') options.itisSourcePath = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!options.help && !options.itisSqlitePath) throw new Error('Usage: node scripts/build-itis-picozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  return options
}

async function auditCol(registryPath) {
  const manifestPath = join(registryPath, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exact = []
  const near = []
  for (const file of manifest.hierarchy.nodes.files) {
    await eachGzipJsonLine(join(registryPath, ...file.path.split('/')), (row) => {
      const name = String(row.scientificName ?? '').normalize('NFC').trim()
      if (name.toLowerCase() === targetName.toLowerCase()) exact.push(row)
      if (nearNames.some((candidate) => name.toLowerCase() === candidate.toLowerCase())) near.push(row)
    })
  }
  if (exact.length) throw new Error(`Pinned COL root audit changed: found exact ${targetName} node(s)`)
  return { manifestPath, manifestBytes, exact, near }
}

function auditItis(sqlitePath, source) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exact = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(trim(?1)) ORDER BY u.tsn`).all(targetName)
    const contains = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(l.completename) LIKE '%picozo%' OR lower(l.completename) LIKE '%picomon%'
      ORDER BY u.tsn`).all()
    const nearby = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) IN (${nearNames.map(() => '?').join(',')}) ORDER BY u.tsn`)
      .all(...nearNames.map((name) => name.toLowerCase()))
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    if (exact.length || contains.length) throw new Error(`ITIS now exposes a Picozoa candidate; reassess the exact root before regenerating: ${JSON.stringify({ exact, contains })}`)
    if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
    return { exact, contains, nearby, maxima }
  } finally { database.close() }
}

function auditExistingPartitions() {
  return readdirSync(outputRoot).filter((name) => /^itis-.+-sidecar\.json$/u.test(name) && name !== 'itis-picozoa-sidecar.json').sort().map((name) => {
    const path = join(outputRoot, name)
    const descriptor = JSON.parse(readFileSync(path, 'utf8'))
    return {
      label: descriptor.scope?.requestedLabel ?? descriptor.scope?.colRootScientificName ?? name,
      descriptorPath: repoPath(path),
      colRootUsageId: descriptor.scope?.colRootUsageId ?? descriptor.scope?.requestedColRoot?.usageId ?? null,
      itisRootTsn: descriptor.scope?.itisRootTsn ?? descriptor.sources?.itis?.rootTsn ?? null,
      records: descriptor.counts?.total ?? 0,
      colFiles: descriptor.colUsageIdLocator?.files?.length ?? 0,
      upstreamFiles: descriptor.upstreamOnly?.files?.length ?? 0,
    }
  })
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { console.log('Usage: node scripts/build-itis-picozoa-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>'); return }
  const sourceBytes = readFileSync(options.itisSourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(options.itisSqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = await auditCol(options.registryPath)
  const ownershipPath = join(root, 'data', 'registry', 'package-species-coverage.json')
  const ownershipBytes = readFileSync(ownershipPath)
  const ownership = JSON.parse(ownershipBytes)
  const ownershipEntry = ownership.entries.find((entry) => entry.id === packageId)
  if (!ownershipEntry || ownershipEntry.acceptedSpeciesCount !== ownership.packageCounts[packageId] || JSON.stringify(ownershipEntry.browseRootIds) !== JSON.stringify(packageRoots)) throw new Error('Pinned COL package ownership does not match the Protists and Chromists contract')
  const itis = auditItis(options.itisSqlitePath, source)
  const existingPartitions = auditExistingPartitions()
  const emptySource = jsonlBytes([])
  const emptyBytes = Buffer.from(deterministicGzip(emptySource, { level: 9 }))
  mkdirSync(outputRoot, { recursive: true })
  for (const name of readdirSync(outputRoot)) if (/^itis-picozoa-(?:sidecar|upstream-only)-\d{4}\.jsonl\.gz$/u.test(name)) rmSync(join(outputRoot, name))
  const upstreamPath = join(outputRoot, 'itis-picozoa-upstream-only-0000.jsonl.gz')
  writeFileSync(upstreamPath, emptyBytes)
  const upstreamFile = { path: repoPath(upstreamPath), records: 0, firstColUsageId: null, lastColUsageId: null, bytes: emptyBytes.length, sha256: sha256(emptyBytes), sourceBytes: emptySource.length, sourceSha256: sha256(emptySource), colOwnership: null, firstTsn: null, lastTsn: null }
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const scope = {
    requestedLabel: targetName, packageRootUsageIds: packageRoots, packageRootScientificNames: ['Chromista', 'Protozoa'],
    packageStrictAcceptedSpecies: ownership.packageCounts[packageId], packageOutOfScopeStrictAcceptedSpecies: ownership.packageCounts[packageId],
    colRootUsageId: null, colRootScientificName: targetName, colExactRootCandidates: col.exact, colStrictAcceptedSpecies: 0,
    itisRootTsn: null, itisRootScientificName: targetName, itisExactRootCandidates: itis.exact,
    boundary: `Neither COL26.8 nor ITIS 2026-08-26 materializes an exact ${targetName} root. The named nearby candidates are retained only as audit context; no neighboring taxon, package-wide search or name substitution supplies rows.`,
  }
  const rootBoundaryAudit = {
    colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes),
    colExactRootCandidates: col.exact, colNearRootCandidates: col.near,
    itisExactRootCandidates: itis.exact, itisContainsNameCandidates: itis.contains, itisNearbyNameCandidates: itis.nearby,
    existingPartitions, overlapWithExistingPartitions: existingPartitions.map((partition) => ({ label: partition.label, overlappingColUsageIds: [], overlappingItisTsns: [] })),
    decision: `No exact ${targetName} root exists in either pinned source. Zero rows are the complete truthful result for this release; nearby names are not taxonomic proxies.`,
  }
  const matching = {
    normalization: source.importLedger.normalization,
    statuses: Object.fromEntries(['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'].map((status) => [status, `Unavailable: neither pinned source defines an exact ${targetName} root.`])),
    prohibited: 'No inferred root, fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, neighboring-taxon, higher-rank or package-wide matching is used.',
  }
  const descriptor = {
    schemaVersion: 1, sidecarType: 'release-pinned-exact-root-boundary-audit', packageId, scope, rootBoundaryAudit,
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes), ownershipPath: repoPath(ownershipPath), ownershipSha256: sha256(ownershipBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, rootScientificName: targetName, rootStatus: 'absent', sourceLedgerPath: repoPath(options.itisSourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: matching,
    evidenceBoundary: {
      en: `This CC0 sidecar is a frozen exact-root boundary audit for ${targetName} in the pinned COL26.8 Protists and Chromists package. It is not a global checklist, final classification authority, species-concept equivalence assertion, biological dossier or scientific-review record.`,
      zh: `此 CC0 侧包是固定版本中针对 ${targetName} 的精确根边界审计；它不是全球物种清单、最终分类权威、物种概念等同性声明、生物学档案或科学审查记录。`,
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: `No COL row-level files exist because neither pinned source materializes an exact ${targetName} root.`, files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: `No exact ITIS ${targetName} root exists, so native-full retains one explicit empty immutable gzip shard.`, files: [upstreamFile] },
    deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0 }, 'native-full': { payload: 'complete', files: [upstreamFile.path], records: 0, totalCompressedBytes: upstreamFile.bytes } },
  }
  const descriptorBytes = jsonBytes(descriptor)
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1, importType: 'COL26.8-to-ITIS-exact-picozoa-root-boundary-audit',
    generatedFrom: { sourcePath: repoPath(options.itisSourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colOwnershipPath: repoPath(ownershipPath), colOwnershipSha256: sha256(ownershipBytes) },
    scopeAudit: { ...scope, rootBoundaryAudit, maximumUpdateDates: itis.maxima }, rootBoundaryAudit, matchingContract: matching, totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: upstreamFile },
    deliveryContract: { pagesLight: 'Pages publishes descriptor summary only and may omit the empty row-level gzip.', androidIosFull: 'Android and iOS retain the complete explicit empty partition and descriptor; no authoritative Picozoa rows are omitted.', runtimeChange: 'This import deliberately changes no formal runtime, release manifest or central integration.' },
    generatedBy: { scriptPath: repoPath(scriptPath), scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact COL and ITIS root audits, named-neighbor audit, existing-partition overlap inventory and deterministic gzip; no fuzzy matching or wall-clock fields.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope, rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
