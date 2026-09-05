import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import { createGunzip, brotliCompressSync, constants } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'
import { createItisMammalNameIndex, matchColSpecies } from './itis-mammal-sidecar-lib.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(SCRIPT_PATH), '..')
const SOURCE_PATH = join(ROOT, 'data/sources/itis-2026-08-26.json')
const REGISTRY_ROOT = join(ROOT, 'data/catalogue-of-life/releases/2026-08-20/registry')
const OWNERSHIP_PATH = join(ROOT, 'data/registry/package-species-coverage.json')
const CANONICAL_PATH = join(ROOT, 'data/sources/itis-crustacea-authority-crosswalk-col26.8.json.br')
const LEDGER_PATH = join(ROOT, 'data/sources/itis-crustacea-authority-import-ledger.json')
const PACKAGE_ROOT = join(ROOT, 'data/packages/arthropoda/crustaceans-insects')
const ITIS_ROOT_TSN = 83677
const COL_ROOT_ID = 'KZX8B'
const PACKAGE_ID = 'crustaceans-insects'
const SHARD_SOURCE_LIMIT_BYTES = 512 * 1024
const RUNTIME_FIELDS = ['colUsageId', 'colScientificName', 'colAuthorship', 'exactMatchName', 'status', 'currentName', 'matchedSynonyms', 'candidates']

const CURRENT_SPECIES_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn=d.tsn WHERE u.name_usage='valid'
) SELECT u.tsn,l.completename scientific_name,u.name_usage,u.credibility_rtng,u.completeness_rtng,u.currency_rating,u.update_date,u.parent_tsn
FROM descendants d JOIN taxonomic_units u ON u.tsn=d.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id JOIN longnames l ON l.tsn=u.tsn
WHERE lower(trim(r.rank_name))='species' AND u.name_usage='valid' ORDER BY u.tsn`
const SPECIES_SYNONYM_QUERY = `WITH RECURSIVE descendants(tsn) AS (
  SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn=d.tsn WHERE u.name_usage='valid'
), accepted(tsn) AS (
  SELECT u.tsn FROM descendants d JOIN taxonomic_units u ON u.tsn=d.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id
  WHERE lower(trim(r.rank_name))='species' AND u.name_usage='valid'
) SELECT s.tsn synonym_tsn,sl.completename synonym_name,su.name_usage synonym_usage,su.unaccept_reason,su.update_date synonym_update_date,s.tsn_accepted
FROM synonym_links s JOIN accepted a ON a.tsn=s.tsn_accepted JOIN taxonomic_units su ON su.tsn=s.tsn JOIN taxon_unit_types sr ON sr.kingdom_id=su.kingdom_id AND sr.rank_id=su.rank_id JOIN longnames sl ON sl.tsn=su.tsn
WHERE lower(trim(sr.rank_name))='species' ORDER BY s.tsn,s.tsn_accepted`

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
async function sha256File(path) { const hash=createHash('sha256'); for await (const chunk of createReadStream(path)) hash.update(chunk); return hash.digest('hex') }
const repoPath = (path) => path.slice(ROOT.length + 1).replaceAll('\\', '/')
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
const jsonlBytes = (records) => Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const codeCompare = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

async function forEachGzipJsonLine(path, visit) {
  const lines=createInterface({ input:createReadStream(path).pipe(createGunzip()), crlfDelay:Infinity })
  for await (const line of lines) if (line) visit(JSON.parse(line))
}

async function loadColSpecies(manifest) {
  const nodes=new Map(); const species=[]
  const files=manifest.hierarchy.nodes.files.map((file)=>join(REGISTRY_ROOT,...file.path.split('/'))).sort()
  for (const path of files) await forEachGzipJsonLine(path,(record)=>{
    if (record.rank === 'species' && record.status === 'accepted') species.push(record)
    else nodes.set(record.id, record.parentId)
  })
  const lineage=(record)=>{ const ids=[]; let id=record.parentId; const seen=new Set(); while(id){ if(seen.has(id)) throw new Error(`COL hierarchy cycle at ${id}`); seen.add(id); ids.push(id); if(!nodes.has(id)) throw new Error(`COL hierarchy broken at ${id}`); id=nodes.get(id) } return ids }
  const selected=species.filter((record)=>lineage(record).includes(COL_ROOT_ID)).sort((left,right)=>codeCompare(left.id,right.id))
  return selected
}

function currentName(row) { return { tsn:String(row.tsn), scientificName:String(row.scientific_name), usage:String(row.name_usage), credibilityRating:row.credibility_rtng || null, completenessRating:row.completeness_rtng || null, currencyRating:row.currency_rating || null, updateDate:row.update_date || null } }

function loadItis(path) {
  const database=new DatabaseSync(path,{readOnly:true})
  try {
    const root=database.prepare(`SELECT u.tsn,l.completename,r.rank_name,u.name_usage,u.parent_tsn FROM taxonomic_units u JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE u.tsn=?1`).get(ITIS_ROOT_TSN)
    if (!root || root.completename !== 'Crustacea' || root.rank_name !== 'Subphylum' || root.name_usage !== 'valid') throw new Error('Pinned ITIS Crustacea root identity changed')
    const currentRows=database.prepare(CURRENT_SPECIES_QUERY).all(ITIS_ROOT_TSN)
    const synonymRows=database.prepare(SPECIES_SYNONYM_QUERY).all(ITIS_ROOT_TSN)
    const maxima=database.prepare('SELECT (SELECT max(update_date) FROM taxonomic_units) taxonomicUnits,(SELECT max(update_date) FROM synonym_links) synonymLinks').get()
    const validNodes=database.prepare(`WITH RECURSIVE descendants(tsn) AS (SELECT ?1 UNION ALL SELECT u.tsn FROM taxonomic_units u JOIN descendants d ON u.parent_tsn=d.tsn WHERE u.name_usage='valid') SELECT u.tsn,u.parent_tsn FROM taxonomic_units u JOIN descendants d ON d.tsn=u.tsn`).all(ITIS_ROOT_TSN)
    const parentByTsn=new Map(validNodes.map((row)=>[String(row.tsn),String(row.parent_tsn)]))
    const isDescendant=(row)=>{ let id=String(row.parent_tsn); const seen=new Set(); while(id && id !== '0'){ if(seen.has(id)) throw new Error(`ITIS lineage cycle at ${id}`); seen.add(id); if(id === String(ITIS_ROOT_TSN)) return true; id=parentByTsn.get(id) ?? '' } return false }
    return { root,currentRows,synonymRows,maxima,isDescendant }
  } finally { database.close() }
}

function counts(records) { return { total:records.length, accepted:records.filter((r)=>r.status==='accepted').length, synonymCurrentNameRedirect:records.filter((r)=>r.status==='synonym-current-name-redirect').length, ambiguous:records.filter((r)=>r.status==='ambiguous').length, unmatched:records.filter((r)=>r.status==='unmatched').length } }
function runtimeRecord(record) { return Object.fromEntries(RUNTIME_FIELDS.filter((field)=>field in record).map((field)=>[field,record[field]])) }
function chunkBySourceBytes(records) { const chunks=[]; let chunk=[]; let bytes=0; for(const record of records){const size=Buffer.byteLength(JSON.stringify(record),'utf8')+1; if(size>SHARD_SOURCE_LIMIT_BYTES) throw new Error(`record exceeds shard limit: ${record.colUsageId}`); if(chunk.length && bytes+size>SHARD_SOURCE_LIMIT_BYTES){chunks.push(chunk);chunk=[];bytes=0} chunk.push(record);bytes+=size} if(chunk.length) chunks.push(chunk); return chunks }
function descriptorFor(path, records, compressed, source) { return { path:repoPath(path), records:records.length, firstColUsageId:records[0]?.colUsageId ?? null, lastColUsageId:records.at(-1)?.colUsageId ?? null, bytes:compressed.length, sha256:sha256(compressed), sourceBytes:source.length, sourceSha256:sha256(source) } }

function makeRuntimeDescriptor({ allMatches, upstreamOnly, source, sourceBytes, registryManifestBytes, ownershipBytes, canonicalBytes }) {
  const root=join(PACKAGE_ROOT,'nomenclature'); mkdirSync(root,{recursive:true})
  for(const name of readdirSync(root)) if(/^itis-(?:tsn-sidecar|upstream-only)-\d{3}\.jsonl\.gz$/u.test(name)) rmSync(join(root,name))
  const records=[...allMatches.values()].map(runtimeRecord).sort((left,right)=>codeCompare(left.colUsageId,right.colUsageId))
  const shards=chunkBySourceBytes(records).map((chunk,index)=>{const src=jsonlBytes(chunk);const compressed=Buffer.from(deterministicGzip(src,{level:9}));const path=join(root,`itis-tsn-sidecar-${String(index).padStart(3,'0')}.jsonl.gz`);writeFileSync(path,compressed);return descriptorFor(path,chunk,compressed,src)})
  const upstreamRecords=upstreamOnly.map((row)=>({colUsageId:null,currentName:currentName(row),basis:'No strict COL26.8 accepted species or official species-synonym evidence resolves to this current ITIS Crustacea species; it remains ITIS-only upstream data.'}))
  const upstreamSource=jsonlBytes(upstreamRecords);const upstreamCompressed=Buffer.from(deterministicGzip(upstreamSource,{level:9}));const upstreamPath=join(root,'itis-upstream-only-000.jsonl.gz');writeFileSync(upstreamPath,upstreamCompressed)
  const upstreamDescriptor={...descriptorFor(upstreamPath,upstreamRecords,upstreamCompressed,upstreamSource),colOwnership:null,firstTsn:upstreamRecords[0]?.currentName.tsn ?? null,lastTsn:upstreamRecords.at(-1)?.currentName.tsn ?? null}
  const packageCounts=counts(records)
  const descriptor={schemaVersion:1,sidecarType:'release-pinned-exact-nomenclatural-crosswalk',packageId:PACKAGE_ID,scope:'COL26.8 accepted species below exact Crustacea usage KZX8B; Insecta, Hexapoda, Myriapoda and other Arthropoda roots in this mixed package are outside this sidecar.',sources:{col:{releaseAlias:'COL26.8',releaseDate:'2026-08-20',rootUsageIds:[COL_ROOT_ID],registryManifestPath:repoPath(join(REGISTRY_ROOT,'manifest.json')),registryManifestSha256:sha256(registryManifestBytes),ownershipPath:repoPath(OWNERSHIP_PATH),ownershipSha256:sha256(ownershipBytes)},itis:{datasetId:source.datasetId,exportDate:source.release.exportDate,rootTsn:String(ITIS_ROOT_TSN),databaseMember:source.archive.databaseMember,databaseSha256:source.archive.databaseSha256,sourceLedgerPath:repoPath(SOURCE_PATH),sourceLedgerSha256:sha256(sourceBytes),license:source.license.spdx,citationDoi:source.citation.doi}},exactMatching:{normalization:source.importLedger.normalization,statuses:{accepted:'The normalized COL name resolves to exactly one valid ITIS Crustacea species and directly equals that current ITIS name.','synonym-current-name-redirect':'The normalized COL name equals one or more official ITIS invalid species names whose synonym_links rows resolve to exactly one valid ITIS Crustacea species.','ambiguous':'The normalized exact evidence resolves to more than one valid ITIS Crustacea species TSN.','unmatched':'No normalized exact valid-name or official ITIS species-synonym evidence resolves to a valid ITIS Crustacea species.'},prohibited:'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.'},evidenceBoundary:{en:'This CC0 ITIS sidecar is a frozen exact nomenclatural crosswalk for the declared Crustacea partition only. It is not a final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or expert-review record; the mixed package still contains separate non-Crustacea Arthropoda routes.',zh:'此 CC0 ITIS 侧车只为明确声明的甲壳类分区提供冻结的严格命名交叉映射。它不是最终分类权威、系统发育、物种概念等同性声明、生物档案、化石记录或专家审查记录；混合包中的昆虫、六足类、多足类和其他节肢动物路线仍保持独立。'},counts:{...packageCounts,itisCurrentSpecies:source.currentRows.length,itisSpeciesSynonymLinks:source.synonymRows.length,itisUpstreamOnly:upstreamOnly.length},colUsageIdLocator:{key:'colUsageId',ordering:'Unicode code-unit ascending',sourceShardLimitBytes:SHARD_SOURCE_LIMIT_BYTES,stableAddressing:'Binary-search non-overlapping inclusive colUsageId ranges; one detail request loads exactly one immutable JSONL gzip shard.',files:shards},upstreamOnly:{colOwnership:null,stableAddressing:'No COL usage ID is assigned; ITIS-only current Crustacea species are in one immutable JSONL gzip shard.',files:[upstreamDescriptor]},canonicalCrosswalk:{path:repoPath(CANONICAL_PATH),bytes:canonicalBytes.length,sha256:sha256(canonicalBytes)},integration:{targetPackageManifestPath:'data/packages/arthropoda/crustaceans-insects/manifest.json',pagesLight:'Pages may retain only this descriptor and omit every row-level JSONL gzip shard.',androidIosFull:'Android and iOS complete-data inventories must include this descriptor, every listed row-level shard and the upstream-only shard byte-for-byte.',lookup:{strategy:'lexicographic-colUsageId-range-v1',requestPolicy:'Select the sole file whose inclusive firstColUsageId/lastColUsageId range contains the requested COL usage ID; parse only that payload shard.',forbiddenBehavior:'A single-species detail query must not download or parse the complete authority sidecar or more than one payload shard.'}}}
  const descriptorPath=join(root,'itis-tsn-sidecar.json');const descriptorBytes=jsonBytes(descriptor);writeFileSync(descriptorPath,descriptorBytes);return {descriptor,descriptorPath,descriptorBytes,shards,upstreamDescriptor}
}

async function main() {
  const sqliteArgument=process.argv.indexOf('--itis-sqlite');if(sqliteArgument<0||!process.argv[sqliteArgument+1]) throw new Error('Usage: node scripts/build-itis-crustacea-sidecars.mjs --itis-sqlite <verified ITIS.sqlite>')
  const sqlitePath=resolve(process.argv[sqliteArgument+1]);const sourceBytes=readFileSync(SOURCE_PATH);const source=JSON.parse(sourceBytes.toString('utf8'));const registryManifestPath=join(REGISTRY_ROOT,'manifest.json');const registryManifestBytes=readFileSync(registryManifestPath);const ownershipBytes=readFileSync(OWNERSHIP_PATH);const ownership=JSON.parse(ownershipBytes.toString('utf8'));const sqliteSha256=await sha256File(sqlitePath)
  if(sqliteSha256!==source.archive.databaseSha256) throw new Error(`ITIS SQLite SHA-256 mismatch: ${sqliteSha256}`);if(sha256(registryManifestBytes)!==source.importLedger.colInput.registryManifestSha256) throw new Error('COL registry manifest SHA-256 mismatch')
  const col=await loadColSpecies(JSON.parse(registryManifestBytes.toString('utf8')));if(col.length!==80890||ownership.packageCounts[PACKAGE_ID]!==1049133) throw new Error(`Unexpected COL Crustacea/package boundary: ${col.length}/${ownership.packageCounts[PACKAGE_ID]}`)
  const itis=loadItis(sqlitePath);if(itis.currentRows.length!==32493||itis.synonymRows.length!==7762) throw new Error(`Unexpected ITIS Crustacea counts: ${itis.currentRows.length}/${itis.synonymRows.length}`);if(itis.maxima.taxonomicUnits!==source.databaseAudit.maximumTaxonomicUnitUpdateDate||itis.maxima.synonymLinks!==source.databaseAudit.maximumSynonymLinkUpdateDate) throw new Error(`ITIS update dates changed: ${JSON.stringify(itis.maxima)}`)
  const index=createItisMammalNameIndex(itis.currentRows,itis.synonymRows);const allMatches=new Map();const canonicalRecords=[]
  for(const record of col){const result=matchColSpecies(record,index);const output={packageId:PACKAGE_ID,scope:'Crustacea only; non-Crustacea Arthropoda excluded',status:result.status,...result.record};allMatches.set(record.id,output);canonicalRecords.push(output)}
  canonicalRecords.sort((left,right)=>codeCompare(left.colUsageId,right.colUsageId));const evidencedTsns=new Set();for(const record of canonicalRecords){if(record.currentName) evidencedTsns.add(record.currentName.tsn);for(const candidate of record.candidates??[]) evidencedTsns.add(candidate.currentName.tsn)}
  const upstreamOnly=itis.currentRows.filter((row)=>!evidencedTsns.has(String(row.tsn))).sort((left,right)=>Number(left.tsn)-Number(right.tsn));const totalCounts=counts(canonicalRecords);const canonical={schemaVersion:1,crosswalkType:'release-pinned-exact-itis-crustacea-authority-crosswalk',sources:{col:{releaseAlias:'COL26.8',releaseDate:'2026-08-20',rootUsageIds:[COL_ROOT_ID],registryManifestPath:repoPath(registryManifestPath),registryManifestSha256:sha256(registryManifestBytes),ownershipPath:repoPath(OWNERSHIP_PATH),ownershipSha256:sha256(ownershipBytes),strictPredicate:'rank=species AND status=accepted'},itis:{datasetId:source.datasetId,exportDate:source.release.exportDate,rootTsn:String(ITIS_ROOT_TSN),rootScientificName:itis.root.completename,rootRank:itis.root.rank_name,sourceLedgerPath:repoPath(SOURCE_PATH),sourceLedgerSha256:sha256(sourceBytes),databaseMember:source.archive.databaseMember,databaseSha256:sqliteSha256,license:source.license.spdx,citationDoi:source.citation.doi}},scope:{colRootUsageId:COL_ROOT_ID,colStrictAcceptedSpecies:col.length,mixedPackageAcceptedSpecies:ownership.packageCounts[PACKAGE_ID],itisRootTsn:String(ITIS_ROOT_TSN),itisCurrentSpecies:itis.currentRows.length},exactMatching:{normalization:source.importLedger.normalization,forbidden:'No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used.'},counts:{...totalCounts,itisCurrentSpecies:itis.currentRows.length,itisSpeciesSynonymLinks:itis.synonymRows.length,itisUpstreamOnly:upstreamOnly.length},integrity:{algorithm:'sha256',recordLedgerSha256:sha256(jsonlBytes(canonicalRecords)),upstreamOnlyLedgerSha256:sha256(jsonlBytes(upstreamOnly.map(currentName)))},records:canonicalRecords,upstreamOnlyRecords:upstreamOnly.map((row)=>({currentName:currentName(row)})),limitations:['This date-pinned CC0 nomenclatural crosswalk does not assert identical COL and ITIS species concepts or taxonomic finality.','The enclosing package is intentionally mixed: this sidecar owns only the exact COL Crustacea root KZX8B; Insecta, Hexapoda, Myriapoda and other Arthropoda are not silently included.','ITIS-only current Crustacea species remain explicit upstream-only records without COL ownership IDs.','The ITIS SQLite archive is not committed; reproducibility depends on the recorded official archive and database checksums.']}
  const canonicalSource=jsonBytes(canonical);const canonicalBytes=brotliCompressSync(canonicalSource,{params:{[constants.BROTLI_PARAM_QUALITY]:11}});mkdirSync(dirname(CANONICAL_PATH),{recursive:true});writeFileSync(CANONICAL_PATH,canonicalBytes);const result=makeRuntimeDescriptor({allMatches,upstreamOnly,source:{...source,currentRows:itis.currentRows,synonymRows:itis.synonymRows},sourceBytes,registryManifestBytes,ownershipBytes,canonicalBytes})
  const ledger={schemaVersion:1,importType:'COL26.8-to-ITIS-exact-crustacea-nomenclatural-sidecar',generatedFrom:{sourcePath:repoPath(SOURCE_PATH),sourceSha256:sha256(sourceBytes),itisDatabaseMember:source.archive.databaseMember,itisDatabaseSha256:sqliteSha256,colRegistryManifestPath:repoPath(registryManifestPath),colRegistryManifestSha256:sha256(registryManifestBytes),colOwnershipPath:repoPath(OWNERSHIP_PATH),colOwnershipSha256:sha256(ownershipBytes)},scopeAudit:{colRootUsageId:COL_ROOT_ID,colStrictAcceptedSpecies:col.length,mixedPackageAcceptedSpecies:ownership.packageCounts[PACKAGE_ID],packageBoundary:'Crustacea-only sidecar inside mixed crustaceans-insects package; non-Crustacea roots excluded',itisRoot:{tsn:String(itis.root.tsn),scientificName:itis.root.completename,rank:itis.root.rank_name,usage:itis.root.name_usage},itisCurrentSpecies:itis.currentRows.length,itisSpeciesSynonymLinks:itis.synonymRows.length,maximumUpdateDates:itis.maxima},queries:{currentCrustaceaSpecies:CURRENT_SPECIES_QUERY,crustaceaSpeciesSynonyms:SPECIES_SYNONYM_QUERY},matchingContract:canonical.exactMatching,totals:canonical.counts,canonical:{path:repoPath(CANONICAL_PATH),bytes:canonicalBytes.length,sha256:sha256(canonicalBytes),sourceBytes:canonicalSource.length,sourceSha256:sha256(canonicalSource)},outputs:{descriptor:{path:repoPath(result.descriptorPath),bytes:result.descriptorBytes.length,sha256:sha256(result.descriptorBytes)},counts:result.descriptor.counts,colUsageIdShards:result.shards,upstreamOnly:result.upstreamDescriptor},deliveryContract:{pagesLight:'Pages may include only the descriptor and omit every row-level shard.',androidIosFull:'Android and iOS must include descriptor and every listed shard byte-for-byte.',runtimeChange:'Data-only import; no runtime, version or release manifest changes.'},generatedBy:{scriptPath:repoPath(SCRIPT_PATH),scriptSha256:await sha256File(SCRIPT_PATH),deterministic:'Pinned checksums, fixed roots, exact SQL, exact representation-only normalization and stable sorting; no wall-clock fields or fuzzy matching.'}}
  writeFileSync(LEDGER_PATH,jsonBytes(ledger));console.log(JSON.stringify({counts:canonical.counts,canonical:ledger.canonical,descriptor:ledger.outputs},null,2))
}
await main()
