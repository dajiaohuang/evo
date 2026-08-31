import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'

// Metamonada is intentionally represented only when both pinned authorities
// expose an exact root. Never widen this audit to Diplomonadida, Parabasalia,
// Excavata, or another historical neighboring name.
const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = resolve(dirname(scriptPath), '..')
const releaseRoot = join(repositoryRoot, 'data', 'catalogue-of-life', 'releases', '2026-08-20')
const registryRoot = join(releaseRoot, 'registry')
const packageRoot = join(releaseRoot, 'resource-packs', 'protists-chromists')
const descriptorPath = join(packageRoot, 'itis-metamonada-sidecar.json')
const ledgerPath = join(repositoryRoot, 'data', 'sources', 'itis-metamonada-sidecar-import-ledger.json')
const sourcePath = join(repositoryRoot, 'data', 'sources', 'itis-2026-08-26.json')
const requestedRootName = 'Metamonada'
const packageId = 'protists-chromists'
const packageRootIds = ['C', 'Z']
const nearNames = ['Diplomonadida', 'Trichomonadida', 'Parabasalia', 'Zoomastigophora', 'Mastigophora', 'Sarcomastigophora']

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const repoPath = (value) => value.slice(repositoryRoot.length + 1).replaceAll('\\', '/')
async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

function readJson(path) { return JSON.parse(readFileSync(path, 'utf8')) }

function auditCol() {
  const manifestPath = join(registryRoot, 'manifest.json')
  const manifestBytes = readFileSync(manifestPath)
  const manifest = JSON.parse(manifestBytes)
  const exact = []
  for (const file of manifest.hierarchy.nodes.files) {
    const path = join(registryRoot, ...file.path.split('/'))
    for (const line of gunzipSync(readFileSync(path)).toString('utf8').split('\n')) {
      if (!line) continue
      const row = JSON.parse(line)
      if (String(row.scientificName ?? '').normalize('NFC').trim().toLowerCase() === requestedRootName.toLowerCase()) {
        exact.push({ id: row.id, scientificName: row.scientificName, rank: row.rank, status: row.status, parentId: row.parentId ?? null })
      }
    }
  }
  const packageManifestPath = join(packageRoot, 'manifest.json')
  const packageManifestBytes = readFileSync(packageManifestPath)
  const packageManifest = JSON.parse(packageManifestBytes)
  if (packageManifest.packageId !== packageId || JSON.stringify(packageManifest.browseRootIds) !== JSON.stringify(packageRootIds)) throw new Error('Pinned COL package is not the exact Chromista/Protozoa package')
  if (exact.length) throw new Error(`COL26.8 now exposes an exact ${requestedRootName} root; select and validate it before regenerating: ${JSON.stringify(exact)}`)
  return { manifestPath, manifestBytes, packageManifestPath, packageManifestBytes, packageStrictAcceptedSpecies: packageManifest.acceptedSpeciesCount, exact }
}

function auditItis(sqlitePath, source) {
  const database = new DatabaseSync(sqlitePath, { readOnly: true })
  try {
    const exact = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) = lower(?1) ORDER BY u.tsn`).all(requestedRootName)
    const contains = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(l.completename) LIKE '%metamonad%' ORDER BY u.tsn`).all()
    const nearby = database.prepare(`SELECT u.tsn, l.completename AS scientificName, r.rank_name AS rank,
      u.name_usage AS usage, u.parent_tsn AS parentTsn
      FROM taxonomic_units u JOIN longnames l ON l.tsn = u.tsn
      JOIN taxon_unit_types r ON r.kingdom_id = u.kingdom_id AND r.rank_id = u.rank_id
      WHERE lower(trim(l.completename)) IN (${nearNames.map(() => '?').join(',')}) ORDER BY u.tsn`).all(...nearNames.map((name) => name.toLowerCase()))
    const maxima = database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) AS taxonomicUnits, (SELECT max(update_date) FROM synonym_links) AS synonymLinks').get()
    if (exact.length || contains.length) throw new Error(`ITIS now exposes a Metamonada candidate; select and validate an explicit exact root before regenerating: ${JSON.stringify({ exact, contains })}`)
    if (maxima.taxonomicUnits !== source.databaseAudit.maximumTaxonomicUnitUpdateDate || maxima.synonymLinks !== source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update-date mismatch: ${JSON.stringify(maxima)}`)
    return { exact, contains, nearby, maxima }
  } finally { database.close() }
}

function auditExistingPartitions() {
  return readdirSync(packageRoot)
    .filter((name) => /^itis-.+-sidecar\.json$/u.test(name) && name !== 'itis-metamonada-sidecar.json')
    .sort()
    .map((name) => {
      const descriptor = readJson(join(packageRoot, name))
      return {
        label: descriptor.scope?.requestedLabel ?? name,
        descriptorPath: repoPath(join(packageRoot, name)),
        colRootUsageId: descriptor.scope?.colRootUsageId ?? descriptor.scope?.requestedColRoot?.usageId ?? null,
        itisRootTsn: descriptor.scope?.itisRootTsn ?? descriptor.sources?.itis?.rootTsn ?? null,
        sidecarRecords: descriptor.counts?.total ?? 0,
        overlappingColUsageIds: [],
        overlappingItisTsns: [],
      }
    })
}

async function main() {
  const argument = process.argv.indexOf('--itis-sqlite')
  if (argument < 0 || !process.argv[argument + 1]) throw new Error('Usage: node scripts/build-itis-metamonada-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath = resolve(process.argv[argument + 1])
  const sourceBytes = readFileSync(sourcePath)
  const source = JSON.parse(sourceBytes)
  const sqliteSha256 = await sha256File(sqlitePath)
  if (sqliteSha256 !== source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`)
  const col = auditCol()
  const itis = auditItis(sqlitePath, source)
  const existingPartitions = auditExistingPartitions()
  const counts = { total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 0, itisSpeciesSynonymLinks: 0, itisUpstreamOnly: 0 }
  const descriptor = {
    schemaVersion: 1,
    sidecarType: 'release-pinned-empty-nomenclatural-boundary-audit',
    packageId,
    scope: {
      requestedLabel: requestedRootName,
      packageRootUsageIds: packageRootIds,
      packageRootScientificNames: ['Chromista', 'Protozoa'],
      packageStrictAcceptedSpecies: col.packageStrictAcceptedSpecies,
      colRootUsageId: null,
      colRootScientificName: requestedRootName,
      colExactRootCandidates: col.exact,
      colStrictAcceptedSpecies: 0,
      itisRootTsn: null,
      itisRootScientificName: requestedRootName,
      itisExactRootCandidates: itis.exact,
      itisContainsNameCandidates: itis.contains,
      boundary: 'Neither COL26.8 nor ITIS 2026-08-26 materializes an exact Metamonada root. Diplomonadida and other historically neighboring ITIS names are recorded for audit context only and are not used as a taxonomic proxy; this partition therefore emits no crosswalk or ITIS-only species rows.',
    },
    rootBoundaryAudit: {
      colRegistryManifestPath: repoPath(col.manifestPath),
      colRegistryManifestSha256: sha256(col.manifestBytes),
      colPackageManifestPath: repoPath(col.packageManifestPath),
      colPackageManifestSha256: sha256(col.packageManifestBytes),
      colExactRootCandidates: col.exact,
      itisExactRootCandidates: itis.exact,
      itisContainsNameCandidates: itis.contains,
      itisNearbyNameCandidates: itis.nearby,
      existingPartitions,
      overlapWithExistingPartitions: existingPartitions.map((partition) => ({ label: partition.label, overlappingColUsageIds: [], overlappingItisTsns: [] })),
      decision: 'No exact Metamonada root exists in either pinned source. No neighboring order, class, phylum, package-wide, fuzzy, or name-substitution scope is accepted; zero rows are the complete truthful result for this release.',
    },
    sources: {
      col: { releaseAlias: 'COL26.8', releaseDate: '2026-08-20', packageManifestPath: repoPath(col.packageManifestPath), packageManifestSha256: sha256(col.packageManifestBytes), registryManifestPath: repoPath(col.manifestPath), registryManifestSha256: sha256(col.manifestBytes) },
      itis: { datasetId: source.datasetId, exportDate: source.release.exportDate, rootTsn: null, requestedRootName, sourceLedgerPath: repoPath(sourcePath), sourceLedgerSha256: sha256(sourceBytes), license: source.license.spdx, citationDoi: source.citation.doi },
    },
    exactMatching: {
      normalization: source.importLedger.normalization,
      statuses: { accepted: 'Unavailable: neither pinned source defines an exact Metamonada root.', 'synonym-current-name-redirect': 'Unavailable: neither pinned source defines an exact Metamonada root.', ambiguous: 'Unavailable: neither pinned source defines an exact Metamonada root.', unmatched: 'Unavailable: neither pinned source defines an exact Metamonada root.' },
      prohibited: 'No inferred root, fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, neighboring-taxon, higher-rank, or package-wide matching is used.',
    },
    evidenceBoundary: {
      en: 'This CC0 sidecar is an explicitly empty, release-pinned nomenclatural boundary audit. It is not a Metamonada checklist, an inferred taxonomic placement, a final classification authority, a phylogeny, a species-concept equivalence assertion, a biological dossier, or a scientific-review record.',
      zh: '此 CC0 侧车是明确为空的、固定版本的命名边界审计；它不是 Metamonada 名录、推断的分类位置、最终分类权威、系统发育、物种概念等同性声明、生物档案或科学审查记录。',
    },
    counts,
    colUsageIdLocator: { key: 'colUsageId', ordering: 'Unicode code-unit ascending', stableAddressing: 'No COL row-level files exist because neither pinned source materializes an exact Metamonada root.', files: [] },
    upstreamOnly: { colOwnership: null, stableAddressing: 'No exact ITIS Metamonada root exists, so no ITIS-only rows are emitted.', files: [] },
    deliveryProfiles: {
      'web-light': { payload: 'summary-only', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'GitHub Pages carries this descriptor and its hashes only; no row-level payload exists.' },
      'native-full': { payload: 'complete', files: [], records: 0, totalCompressedBytes: 0, totalSourceBytes: 0, statement: 'Android and iOS carry the complete empty partition; there are no non-empty rows to omit.' },
    },
  }
  const descriptorBytes = jsonBytes(descriptor)
  mkdirSync(packageRoot, { recursive: true })
  writeFileSync(descriptorPath, descriptorBytes)
  const ledger = {
    schemaVersion: 1,
    importType: 'ITIS-2026-08-26-COL26.8-Metamonada-empty-boundary-audit',
    generatedFrom: { sourcePath: repoPath(sourcePath), sourceSha256: sha256(sourceBytes), itisDatabaseMember: source.archive.databaseMember, itisDatabaseSha256: sqliteSha256, colRegistryManifestPath: repoPath(col.manifestPath), colRegistryManifestSha256: sha256(col.manifestBytes), colPackageManifestPath: repoPath(col.packageManifestPath), colPackageManifestSha256: sha256(col.packageManifestBytes), existingPartitionDescriptors: existingPartitions.map((partition) => ({ label: partition.label, path: partition.descriptorPath })) },
    scopeAudit: descriptor.scope,
    rootBoundaryAudit: descriptor.rootBoundaryAudit,
    matchingContract: descriptor.exactMatching,
    totals: counts,
    output: { descriptor: { path: repoPath(descriptorPath), bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) }, colUsageIdShards: [], upstreamOnly: [] },
    deliveryContract: { pagesLight: 'Pages publishes summary-only descriptor metadata and no row-level payload.', androidIosFull: 'Android and iOS native-full inventories include the complete empty partition; no non-empty row is omitted.', runtimeChange: 'This import deliberately changes no formal runtime, release manifest, or central integration.' },
    generatedBy: { scriptPath: 'scripts/build-itis-metamonada-sidecar.mjs', scriptSha256: await sha256File(scriptPath), deterministic: 'Pinned input checksums, exact-name root audits, named neighboring-context audit, stable JSON ordering, and no wall-clock fields or inferred name matching.' },
  }
  writeFileSync(ledgerPath, jsonBytes(ledger))
  console.log(JSON.stringify({ totals: counts, scope: descriptor.scope, rootBoundaryAudit: descriptor.rootBoundaryAudit, output: ledger.output }, null, 2))
}

await main()
