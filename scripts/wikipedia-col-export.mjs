import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve, relative, isAbsolute, sep } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { gunzipSync, gzipSync } from 'node:zlib'
import { classify } from './wikipedia-col-identity.mjs'
import { preferredUrls, synonymWikidataOptions as buildSynonymWikidataOptions, exactWikidataOptions } from './wikipedia-col-synonym-options.mjs'
import { itisIdentityCandidates, itisExactIdentity } from './wikipedia-col-itis-identities.mjs'
import { subgenusOptions, subgenusExactOptions, subgenusRankOptions } from './wikipedia-col-subgenus-options.mjs'
import { hybridOptions } from './wikipedia-col-hybrid-options.mjs'
import { ictvExemplarOptions,ictvExemplarNameOptions,ictvNormalizedOptions } from './wikipedia-col-ictv-exemplar-options.mjs'
import { wfoRedirectOptions } from './wikipedia-col-wfo-redirect-options.mjs'
import { wfoFormatOptions } from './wikipedia-col-wfo-format-options.mjs'
import { relatedRedirectOptions, moreRedirectOptions, peerRedirectOptions, unidentifiedRedirectOptions, unidentifiedPeerRedirectOptions } from './wikipedia-col-related-redirect-options.mjs'
import { wikidataSynonymEdgeOptions } from './wikipedia-col-wikidata-synonym-options.mjs'
import { wormsSidecarOptions, wormsRedirectOptions, itisSynonymOptions, itisSharedSynonymOptions, wfoSharedSynonymOptions, sameNameParentOptions, sameNameGenusOptions, dipteraSynonymOptions, wormsArchiveSynonymOptions, wscSynonymOptions, reptileSynonymOptions, osfSynonymOptions, majorSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
import { ncbiIdOptions } from './wikipedia-col-ncbi-id-options.mjs'
import { ambiguousSynonymOptions, ambiguousSynonymPeerOptions } from './wikipedia-col-ambiguous-synonym-options.mjs'
import { canUseSupplementalExact, selectRefreshedExact } from './wikipedia-col-refreshed-exact.mjs'
import { mergeCandidateOptions } from './wikipedia-col-merge-candidate-options.mjs'
import { externalIdStatus, linkEvidenceStatus, nameIdentityEvidence, sameParentIdentityCandidates, unresolvedIdentifierLabel } from './wikipedia-col-external-id.mjs'
import { pageAuditAllows } from './wikipedia-col-page-audit-options.mjs'
import { isCandidateIdentityHeld } from './wikipedia-col-identity-holds.mjs'
import { checkNcbiAuthorCoverage } from './wikipedia-col-ncbi-author-preflight.mjs'
import { pageAuditError } from './wikipedia-col-page-audit-result.mjs'
import { primaryRelatedOptions, prioritizePrimaryRelated, synonymTitleRelatedOptions, nominateSubgenusParentOptions, subgenusSameFamilyGenusOptions, subgenusFamilyUnidentifiedGenusOptions, qualifiedUnkeyedSpeciesOptions, ncbiHigherSynonymPeerOptions, registryAbbrevPeerOptions } from './wikipedia-col-primary-related-options.mjs'
import { itisCrossSourceOptions } from './wikipedia-col-itis-cross-source-options.mjs'

const root = resolve('data/catalogue-of-life/releases/2026-08-20/registry')
const manifestBytes = readFileSync(join(root, 'manifest.json'))
const manifest = JSON.parse(manifestBytes)
const local = resolve('.git/evo-wikipedia-col26-8')
const auditOnly = process.argv.includes('--audit-only')
const option = process.argv.indexOf('--out')
assert.ok(auditOnly || (option >= 0 && process.argv[option + 1]), '--out is required')
const out = auditOnly ? null : resolve(process.argv[option + 1])
if (out) {
  const child = relative(local, out)
  assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Output must be inside the local matching workspace')
  assert.ok(!existsSync(out), 'Choose a new empty export path')
}
const auditArg = process.argv.indexOf('--audit-db')
assert.ok(!auditOnly || (auditArg >= 0 && process.argv[auditArg + 1]), '--audit-db is required for audit-only mode')
const inspectArg = process.argv.indexOf('--inspect-id')
assert.ok(inspectArg < 0 || (auditOnly && process.argv[inspectArg + 1]), '--inspect-id requires audit-only mode and a node ID')
const inspectId = inspectArg < 0 ? null : process.argv[inspectArg + 1]
const auditDb = auditOnly ? new DatabaseSync(resolve(process.argv[auditArg + 1]), { readOnly: true }) : null
if (auditDb) { auditDb.exec('PRAGMA busy_timeout=15000'); auditDb.exec('BEGIN'); auditDb.prepare('SELECT COUNT(*) n FROM jobs').get() }
const auditKeyed = auditDb?.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
const auditUnkeyed = auditDb?.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
const auditEvidence = auditDb?.prepare("SELECT status,actual_item FROM jobs WHERE url=? AND status IN ('matched','snapshot-matched','identity-conflict','no-item') LIMIT 1")
const auditCounts = { links: 0, missing: 0, conflicting: 0, examples: [] }
const dbIndex = process.argv.indexOf('--db')
const dbPath = dbIndex < 0 ? join(local, 'inventory.sqlite') : resolve(process.argv[dbIndex + 1])
const dbChild = relative(local, dbPath)
assert.ok(dbChild && !isAbsolute(dbChild) && dbChild !== '..' && !dbChild.startsWith('..' + sep), 'Database must be in the matching workspace')
const partIndex = process.argv.indexOf('--part')
const part = partIndex < 0 ? null : Number(process.argv[partIndex + 1])
const partsIndex = process.argv.indexOf('--parts')
const parts = partsIndex < 0 ? 1 : Number(process.argv[partsIndex + 1])
assert.ok(Number.isSafeInteger(parts) && parts >= 1 && parts <= 256 && (part === null ? parts === 1 : Number.isSafeInteger(part) && part >= 0 && part < parts))
const db = new DatabaseSync(dbPath, { readOnly: true })
db.exec('PRAGMA busy_timeout=15000')
checkNcbiAuthorCoverage(db)
assert.equal(db.prepare("SELECT value FROM meta WHERE key='inventory_complete'").get()?.value, 'true')
assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get()?.value, createHash('sha256').update(manifestBytes).digest('hex'))
const queryName = db.prepare('SELECT status,candidates_json FROM names WHERE name=?')
const parentName = db.prepare('SELECT name FROM nodes WHERE id=?')
const knownColId = db.prepare('SELECT 1 FROM nodes WHERE id=?')
const colNodeIdentity = db.prepare('SELECT name,rank,parent_id FROM nodes WHERE id=?')
// Read only link metadata from historical records; extracts are never returned.
const article = db.prepare("SELECT item_id,status,json_extract(snapshot_json,'$.url') snapshot_url FROM article_jobs WHERE url=?")
const pageAuditSource = db.prepare("SELECT value FROM meta WHERE key='page_audit_exclusions_sha256'").get()?.value
const pageAuditBadUrls = new Set(pageAuditSource ? db.prepare('SELECT url FROM page_audit_bad_urls').all().map(row=>row.url) : [])
const pageAuditBadItems = new Set(pageAuditSource ? db.prepare('SELECT url,item FROM page_audit_bad_items').all().map(row=>row.url+'\0'+row.item) : [])
const pageAuditUsable = (url,item) => pageAuditAllows(url,item,value=>pageAuditBadUrls.has(value),(value,identity)=>pageAuditBadItems.has(value+'\0'+identity))
const exactTitle = db.prepare("SELECT status,json_extract(snapshot_json,'$.url') snapshot_url,json_extract(snapshot_json,'$.wikidataItem') snapshot_item,json_extract(snapshot_json,'$.title') snapshot_title FROM exact_title_jobs WHERE name=?")
const dumpedTitle = db.prepare('SELECT title FROM exact_english_titles WHERE name=?')
const synonymsReady = Boolean(db.prepare("SELECT value FROM meta WHERE key='synonym_titles_sha256'").get()?.value)
const synonymTitles = synonymsReady ? db.prepare('SELECT DISTINCT t.title FROM synonym_names s JOIN synonym_title_matches t ON t.name=s.name WHERE s.node_id=? ORDER BY t.title') : null
const alternateLocales = db.prepare("SELECT key FROM meta WHERE key LIKE 'alternate_titles_%'").all().map(row => row.key.match(/^alternate_titles_([a-z0-9-]+)_sha256$/)?.[1]).filter(Boolean).sort()
const titleIndexSources = Object.fromEntries(['en', ...alternateLocales].map(locale => [locale,
  db.prepare('SELECT value FROM meta WHERE key=?').get(locale === 'en' ? 'en_titles_sha256' : `alternate_titles_${locale}_sha256`)?.value]).filter(([, value]) => value))
const normalizedLocales = db.prepare("SELECT key FROM meta WHERE key LIKE 'normalized_titles_%' AND value='true'").all().map(row => row.key.match(/^normalized_titles_([a-z0-9-]+)_complete$/)?.[1]).filter(Boolean).sort()
const normalizedTitleSources = Object.fromEntries(normalizedLocales.map(locale => [locale, db.prepare('SELECT value FROM meta WHERE key=?').get(`normalized_titles_${locale}_source`)?.value]))
const synonymWikidataSource = db.prepare("SELECT value FROM meta WHERE key='synonym_wikidata_source_sha256'").get()?.value
const synonymWikidataCounts = synonymWikidataSource ? db.prepare('SELECT status,COUNT(*) n FROM synonym_wikidata_lookup GROUP BY status').all() : []
const synonymWikidata = synonymWikidataSource ? { sourceSha256: synonymWikidataSource,
  queriedNames: synonymWikidataCounts.find(row => row.status === 'queried')?.n ?? 0,
  pendingNames: synonymWikidataCounts.find(row => row.status === 'pending')?.n ?? 0 } : undefined
const synonymWikidataRows = synonymWikidataSource ? db.prepare("SELECT s.name,l.candidates_json FROM synonym_wikidata_targets u JOIN synonym_names s ON s.node_id=u.id JOIN synonym_wikidata_lookup l ON l.name=s.name WHERE u.id=? AND l.status='queried'") : null
const exactSourceSynonymSource = db.prepare("SELECT value FROM meta WHERE key='exact_source_synonym_sha256'").get()?.value
const exactSourceSynonymRows = exactSourceSynonymSource ? db.prepare('SELECT item,url FROM exact_source_synonym_links WHERE node_id=?') : null
const labelWikidataSource = db.prepare("SELECT value FROM meta WHERE key='label_wikidata_source_sha256'").get()?.value
const labelWikidataCounts = labelWikidataSource ? db.prepare('SELECT status,COUNT(*) n FROM label_wikidata_lookup GROUP BY status').all() : []
const labelWikidata = labelWikidataSource ? { sourceSha256: labelWikidataSource, queriedNames: labelWikidataCounts.find(row => row.status === 'queried')?.n ?? 0, pendingNames: labelWikidataCounts.find(row => row.status === 'pending')?.n ?? 0, languages: ['en', 'la', 'mul'] } : undefined
const labelWikidataRows = labelWikidataSource ? db.prepare("SELECT n.name,l.candidates_json FROM label_wikidata_targets u JOIN nodes n ON n.id=u.id JOIN label_wikidata_lookup l ON l.name=n.name WHERE u.id=? AND l.status='queried' UNION SELECT s.name,l.candidates_json FROM label_wikidata_targets u JOIN synonym_names s ON s.node_id=u.id JOIN label_wikidata_lookup l ON l.name=s.name WHERE u.id=? AND l.status='queried'") : null
const aliasSource = db.prepare("SELECT value FROM meta WHERE key='alias_wikidata_source_sha256'").get()?.value
const aliasCounts = aliasSource ? db.prepare('SELECT status,COUNT(*) n FROM alias_wikidata_lookup GROUP BY status').all() : []
const aliasWikidata = aliasSource ? {sourceSha256:aliasSource,queriedNames:aliasCounts.find(row=>row.status==='queried')?.n??0,pendingNames:aliasCounts.find(row=>row.status==='pending')?.n??0,languages:['en','la','mul']} : undefined
const aliasRows = aliasSource ? db.prepare("SELECT n.name,l.candidates_json FROM alias_wikidata_targets u JOIN nodes n ON n.id=u.id JOIN alias_wikidata_lookup l ON l.name=n.name WHERE u.id=? AND l.status='queried' UNION SELECT s.name,l.candidates_json FROM alias_wikidata_targets u JOIN synonym_names s ON s.node_id=u.id JOIN alias_wikidata_lookup l ON l.name=s.name WHERE u.id=? AND l.status='queried'") : null
const authoritySource = db.prepare("SELECT value FROM meta WHERE key='authority_wikidata_source_sha256'").get()?.value
const authorityRows = authoritySource ? db.prepare('SELECT name,candidates_json FROM authority_wikidata_matches WHERE node_id=?') : null
const itisDirectSource = db.prepare("SELECT value FROM meta WHERE key='itis_direct_source_sha256'").get()?.value
const itisDirectCounts = itisDirectSource ? db.prepare('SELECT status,COUNT(*) n FROM itis_direct_lookup GROUP BY status').all() : []
const itisDirect = itisDirectSource ? {sourceSha256:itisDirectSource,queriedIds:itisDirectCounts.find(r=>r.status==='queried')?.n??0,pendingIds:itisDirectCounts.find(r=>r.status==='pending')?.n??0} : undefined
const itisDirectRows = itisDirectSource ? db.prepare("SELECT t.itis_id name,l.candidates_json FROM itis_direct_targets t JOIN itis_direct_lookup l ON l.id=t.itis_id WHERE t.node_id=? AND l.status='queried'") : null
const authorityIdSource = db.prepare("SELECT value FROM meta WHERE key='authority_id_source_sha256'").get()?.value
const authorityIdCounts = authorityIdSource ? db.prepare('SELECT status,COUNT(*) n FROM authority_id_lookup GROUP BY status').all() : []
const authorityId = authorityIdSource ? {sourceSha256:authorityIdSource,queriedIds:authorityIdCounts.find(r=>r.status==='queried')?.n??0,pendingIds:authorityIdCounts.find(r=>r.status==='pending')?.n??0} : undefined
const authorityIdRows = authorityIdSource ? db.prepare("SELECT (t.kind || ':' || t.external_id) name,l.candidates_json FROM authority_id_targets t JOIN authority_id_lookup l ON l.property=t.property AND l.id=t.external_id WHERE t.node_id=? AND l.status='queried'") : null
const wfoRedirectSource = db.prepare("SELECT value FROM meta WHERE key='wfo_redirect_source_sha256'").get()?.value
const wfoRedirect = wfoRedirectSource ? {sourceSha256:wfoRedirectSource,pendingIds:db.prepare("SELECT COUNT(*) n FROM wfo_redirect_lookup WHERE status='pending'").get().n,pendingPages:db.prepare("SELECT COUNT(*) n FROM wfo_redirect_pages WHERE status='pending'").get().n} : undefined
const wfoRedirectRows = wfoRedirectSource ? db.prepare("SELECT t.wfo_id,t.accepted_name,l.candidates_json FROM wfo_redirect_targets t JOIN wfo_redirect_lookup l ON l.id=t.wfo_id WHERE t.node_id=? AND l.status='queried'") : null
const wfoRedirectPage = wfoRedirectSource ? db.prepare('SELECT status,item,canonical_title FROM wfo_redirect_pages WHERE url=?') : null
const wfoFormatSource = db.prepare("SELECT value FROM meta WHERE key='wfo_format_source_sha256'").get()?.value
const wfoFormat = wfoFormatSource ? {sourceSha256:wfoFormatSource,pendingPages:db.prepare("SELECT COUNT(*) n FROM wfo_format_pages WHERE status='pending'").get().n} : undefined
const wfoFormatRows = wfoFormatSource ? db.prepare('SELECT t.source_name,t.col_author,t.wfo_author,l.candidates_json FROM wfo_format_targets t JOIN wfo_format_lookup l ON l.id=t.wfo_id WHERE t.node_id=?') : null
const wfoFormatPage = wfoFormatSource ? db.prepare('SELECT status,item,canonical_title FROM wfo_format_pages WHERE url=?') : null
const relatedRedirectSource = db.prepare("SELECT value FROM meta WHERE key='related_redirect_source_sha256'").get()?.value
const relatedRedirectRows = relatedRedirectSource ? db.prepare('SELECT target_name,target_item,target_url,relation FROM related_redirect_targets WHERE node_id=?') : null
const primaryRelatedSource = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
const primaryRelatedRows = primaryRelatedSource ? db.prepare('SELECT * FROM primary_related_candidates WHERE node_id=?') : null
const bryoRelatedSource = db.prepare("SELECT value FROM meta WHERE key='bryo_related_source_sha256'").get()?.value
const bryoRelatedRows = bryoRelatedSource ? db.prepare('SELECT * FROM bryo_related_candidates WHERE node_id=?') : null
const moreRedirectSource = db.prepare("SELECT value FROM meta WHERE key='more_redirect_source_sha256'").get()?.value
const moreRedirectRows = moreRedirectSource ? db.prepare('SELECT * FROM more_redirect_targets WHERE node_id=?') : null
const peerRedirectSource = db.prepare("SELECT value FROM meta WHERE key='peer_redirect_source_sha256'").get()?.value
const peerRedirectRows = peerRedirectSource ? db.prepare('SELECT * FROM peer_redirect_targets WHERE node_id=?') : null
const unidentifiedRedirectSource = db.prepare("SELECT value FROM meta WHERE key='unidentified_redirect_source_sha256'").get()?.value
const unidentifiedRedirectRows = unidentifiedRedirectSource ? db.prepare('SELECT * FROM unidentified_redirect_targets WHERE node_id=?') : null
const unidentifiedPeerRedirectSource = db.prepare("SELECT value FROM meta WHERE key='unidentified_peer_redirect_source_sha256'").get()?.value
const unidentifiedPeerRedirectRows = unidentifiedPeerRedirectSource ? db.prepare('SELECT * FROM unidentified_peer_redirect_targets WHERE node_id=?') : null
const wikidataSynonymEdgeSource = db.prepare("SELECT value FROM meta WHERE key='wikidata_synonym_edge_source_sha256'").get()?.value
const contextualSynonymEdgeSource = db.prepare("SELECT value FROM meta WHERE key='wikidata_contextual_synonym_edge_source_sha256'").get()?.value
const contextualInverseSynonymEdgeSource = db.prepare("SELECT value FROM meta WHERE key='wikidata_contextual_inverse_synonym_edge_source_sha256'").get()?.value
const wikidataNomenclaturalSource = db.prepare("SELECT value FROM meta WHERE key='wikidata_nomenclatural_source_sha256'").get()?.value
const wikidataNomenclaturalInverseSource = db.prepare("SELECT value FROM meta WHERE key='wikidata_nomenclatural_inverse_source_sha256'").get()?.value
const wormsSidecarSource = db.prepare("SELECT value FROM meta WHERE key='worms_sidecar_source_sha256'").get()?.value
const wormsSidecarRows = wormsSidecarSource ? db.prepare('SELECT * FROM worms_sidecar_candidates WHERE node_id=?') : null
const wormsRedirectSource = db.prepare("SELECT value FROM meta WHERE key='worms_redirect_source_sha256'").get()?.value
const wormsRedirectRows = wormsRedirectSource ? db.prepare('SELECT * FROM worms_redirect_candidates WHERE node_id=?') : null
const itisSynonymSource = db.prepare("SELECT value FROM meta WHERE key='itis_synonym_source_sha256'").get()?.value
const itisSynonymRows = itisSynonymSource ? db.prepare('SELECT * FROM itis_synonym_candidates WHERE node_id=?') : null
const itisSharedSynonymSource = db.prepare("SELECT value FROM meta WHERE key='itis_col_synonym_source_sha256'").get()?.value
const itisSharedSynonymRows = itisSharedSynonymSource ? db.prepare('SELECT * FROM itis_col_synonym_candidates WHERE node_id=?') : null
const wfoSharedSynonymSource = db.prepare("SELECT value FROM meta WHERE key='wfo_col_synonym_source_sha256'").get()?.value
const wfoSharedSynonymRows = wfoSharedSynonymSource ? db.prepare('SELECT * FROM wfo_col_synonym_candidates WHERE node_id=?') : null
const sameNameParentSource = db.prepare("SELECT value FROM meta WHERE key='same_name_parent_source_sha256'").get()?.value
const sameNameParentRows = sameNameParentSource ? db.prepare('SELECT * FROM same_name_parent_candidates WHERE node_id=?') : null
const sameNameGenusSource = db.prepare("SELECT value FROM meta WHERE key='same_name_genus_source_sha256'").get()?.value
const sameNameGenusRows = sameNameGenusSource ? db.prepare('SELECT * FROM same_name_genus_candidates WHERE node_id=?') : null
const dipteraSynonymSource = db.prepare("SELECT value FROM meta WHERE key='diptera_synonym_source_sha256'").get()?.value
const dipteraSynonymRows = dipteraSynonymSource ? db.prepare('SELECT * FROM diptera_synonym_candidates WHERE node_id=?') : null
const itisCrossSource = db.prepare("SELECT value FROM meta WHERE key='itis_cross_source_sha256'").get()?.value
const itisCrossSourceRows = itisCrossSource ? db.prepare('SELECT * FROM itis_cross_source_candidates WHERE node_id=?') : null
const itisCrossUnkeyed = db.prepare("SELECT value FROM meta WHERE key='itis_cross_unkeyed_sha256'").get()?.value
const itisCrossUnkeyedRows = itisCrossUnkeyed ? db.prepare('SELECT * FROM itis_cross_unkeyed_candidates WHERE node_id=?') : null
const wormsArchiveSynonymSource = db.prepare("SELECT value FROM meta WHERE key='worms_archive_synonym_source_sha256'").get()?.value
const wormsArchiveSynonymRows = wormsArchiveSynonymSource ? db.prepare('SELECT * FROM worms_archive_synonym_candidates WHERE node_id=?') : null
const wscSynonymSource = db.prepare("SELECT value FROM meta WHERE key='wsc_synonym_source_sha256'").get()?.value
const wscSynonymRows = wscSynonymSource ? db.prepare('SELECT * FROM wsc_synonym_candidates WHERE node_id=?') : null
const reptileSynonymSource = db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get()?.value
const reptileSynonymRows = reptileSynonymSource ? db.prepare('SELECT * FROM reptile_synonym_candidates WHERE node_id=?') : null
const osfSynonymSource = db.prepare("SELECT value FROM meta WHERE key='osf_synonym_source_sha256'").get()?.value
const osfSynonymRows = osfSynonymSource ? db.prepare('SELECT * FROM osf_synonym_candidates WHERE node_id=?') : null
const majorSynonymSource = db.prepare("SELECT value FROM meta WHERE key='major_synonym_source_sha256'").get()?.value
const majorSynonymRows = majorSynonymSource ? db.prepare('SELECT * FROM major_synonym_candidates WHERE node_id=?') : null
const biotaSynonymSource = db.prepare("SELECT value FROM meta WHERE key='biota_synonym_source_sha256'").get()?.value
const biotaSynonymRows = biotaSynonymSource ? db.prepare('SELECT * FROM biota_synonym_candidates WHERE node_id=?') : null
const bacteriaSynonymSource = db.prepare("SELECT value FROM meta WHERE key='bacteria_synonym_source_sha256'").get()?.value
const bacteriaSynonymRows = bacteriaSynonymSource ? db.prepare('SELECT * FROM bacteria_synonym_candidates WHERE node_id=?') : null
const marineFiveSynonymSource = db.prepare("SELECT value FROM meta WHERE key='marine_five_synonym_source_sha256'").get()?.value
const marineFiveSynonymRows = marineFiveSynonymSource ? db.prepare('SELECT * FROM marine_five_synonym_candidates WHERE node_id=?') : null
const laterSynonymSource = db.prepare("SELECT value FROM meta WHERE key='later_synonym_source_sha256'").get()?.value
const laterSynonymRows = laterSynonymSource ? db.prepare('SELECT * FROM later_synonym_candidates WHERE node_id=?') : null
const ncbiIdSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_id_source_sha256'").get()?.value
const ncbiIdRows = ncbiIdSource ? db.prepare('SELECT * FROM ncbi_id_candidates WHERE node_id=?') : null
const ncbiSynonymSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_synonym_id_source_sha256'").get()?.value
const ncbiSynonymRows = ncbiSynonymSource ? db.prepare("SELECT *, 'synonym' source_kind FROM ncbi_synonym_id_candidates WHERE node_id=?") : null
const ncbiCatalogSynonymSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_catalog_synonym_source_sha256'").get()?.value
const ncbiCatalogSynonymRows = ncbiCatalogSynonymSource ? db.prepare("SELECT *, 'catalog_synonym' source_kind FROM ncbi_catalog_synonym_candidates WHERE node_id=?") : null
const ncbiLineageSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_candidate_lineage_sha256'").get()?.value
const nominateSubgenusParentSource = db.prepare("SELECT value FROM meta WHERE key='nominate_subgenus_parent_sha256'").get()?.value
const nominateSubgenusParentRows = nominateSubgenusParentSource ? db.prepare('SELECT * FROM nominate_subgenus_parent_links WHERE node_id=?') : null
const subgenusSameFamilyGenusSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_same_family_genus_sha256'").get()?.value
const subgenusSameFamilyGenusRows = subgenusSameFamilyGenusSource ? db.prepare('SELECT * FROM subgenus_same_family_genus_links WHERE node_id=?') : null
const subgenusFamilyUnidentifiedGenusSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_family_unidentified_genus_sha256'").get()?.value
const subgenusFamilyUnidentifiedGenusRows = subgenusFamilyUnidentifiedGenusSource ? db.prepare('SELECT * FROM subgenus_family_unidentified_genus_links WHERE node_id=?') : null
const qualifiedUnkeyedSpeciesSource = db.prepare("SELECT value FROM meta WHERE key='qualified_unkeyed_species_sha256'").get()?.value
const qualifiedUnkeyedSpeciesRows = qualifiedUnkeyedSpeciesSource ? db.prepare('SELECT * FROM qualified_unkeyed_species_links WHERE node_id=?') : null
const ncbiHigherSynonymPeerSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_higher_synonym_peer_sha256'").get()?.value
const ncbiHigherSynonymPeerRows = ncbiHigherSynonymPeerSource ? db.prepare('SELECT * FROM ncbi_higher_synonym_peer_links WHERE node_id=?') : null
const registryAbbrevPeerSource = db.prepare("SELECT value FROM meta WHERE key='registry_abbrev_peer_sha256'").get()?.value
const registryAbbrevPeerRows = registryAbbrevPeerSource ? db.prepare('SELECT * FROM registry_abbrev_peer_links WHERE node_id=?') : null
const registryAmbiguousSynonymSource = db.prepare("SELECT value FROM meta WHERE key='registry_ambiguous_synonym_sha256'").get()?.value
const registryAmbiguousSynonymRows = registryAmbiguousSynonymSource ? db.prepare('SELECT * FROM registry_ambiguous_synonym_candidates WHERE node_id=?') : null
const registryAmbiguousPeerSource = db.prepare("SELECT value FROM meta WHERE key='registry_ambiguous_peer_sha256'").get()?.value
const registryAmbiguousPeerRows = registryAmbiguousPeerSource ? db.prepare('SELECT * FROM registry_ambiguous_peer_links WHERE node_id=?') : null
const ncbiLineageAuthoritySource = db.prepare("SELECT value FROM meta WHERE key='ncbi_lineage_authority_sha256'").get()?.value
const ncbiOriginalNameAuthoritySource = db.prepare("SELECT value FROM meta WHERE key='ncbi_original_name_authority_sha256'").get()?.value
const ncbiIdentityHoldSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_candidate_identity_holds_sha256'").get()?.value
const ncbiIdentityHoldRow = ncbiIdentityHoldSource ? db.prepare('SELECT reason FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?') : null
const candidateIdentityHeldUrlsSource = db.prepare("SELECT value FROM meta WHERE key='candidate_identity_held_urls_sha256'").get()?.value
const candidateIdentityHeldUrlRow = candidateIdentityHeldUrlsSource ? db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?') : null
const isHeld = (id,item,url) => isCandidateIdentityHeld(id,item,url,(node,value)=>ncbiIdentityHoldRow?.get(node,value),(node,value)=>candidateIdentityHeldUrlRow?.get(node,value))
const ncbiGeneralAuthorSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_general_author_checks_sha256'").get()?.value
const ncbiGeneralOriginalAuthorSource = db.prepare("SELECT value FROM meta WHERE key='ncbi_general_original_authority_sha256'").get()?.value
const ncbiGeneralAuthorRow = ncbiGeneralAuthorSource ? db.prepare('SELECT author_comparison FROM ncbi_general_author_checks WHERE node_id=? AND item=?') : null
const ncbiLineageRow = ncbiLineageSource ? db.prepare(`SELECT col_genus,ncbi_genus${ncbiLineageAuthoritySource ? ',author_comparison' : ''} FROM ncbi_candidate_lineage WHERE node_id=? AND item=?`) : null
const withNcbiLineage = rows => rows.map(row => ({ ...row, ...ncbiLineageRow?.get(row.node_id, row.item), ...ncbiGeneralAuthorRow?.get(row.node_id, row.item), identity_hold: Boolean(ncbiIdentityHoldRow?.get(row.node_id, row.item)) }))
const expandSynonymSource = db.prepare("SELECT value FROM meta WHERE key='expand_synonym_source_sha256'").get()?.value
const expandSynonymRows = expandSynonymSource ? db.prepare('SELECT * FROM expand_synonym_candidates WHERE node_id=?') : null
const extraSynonymSource = db.prepare("SELECT value FROM meta WHERE key='extra_synonym_source_sha256'").get()?.value
const extraSynonymRows = extraSynonymSource ? db.prepare('SELECT * FROM extra_synonym_candidates WHERE node_id=?') : null
const nextSynonymSource = db.prepare("SELECT value FROM meta WHERE key='next_synonym_source_sha256'").get()?.value
const nextSynonymRows = nextSynonymSource ? db.prepare('SELECT * FROM next_synonym_candidates WHERE node_id=?') : null
const moreSynonymSource = db.prepare("SELECT value FROM meta WHERE key='more_synonym_source_sha256'").get()?.value
const moreSynonymRows = moreSynonymSource ? db.prepare('SELECT * FROM more_synonym_candidates WHERE node_id=?') : null
const batchSynonymSource = db.prepare("SELECT value FROM meta WHERE key='batch_synonym_source_sha256'").get()?.value
const batchSynonymRows = batchSynonymSource ? db.prepare('SELECT * FROM batch_synonym_candidates WHERE node_id=?') : null
const wikidataSynonymEdgeRows = wikidataSynonymEdgeSource ? db.prepare('SELECT * FROM wikidata_synonym_edge_targets WHERE node_id=?') : null
const ictvExemplarSource = db.prepare("SELECT value FROM meta WHERE key='ictv_exemplar_source_sha256'").get()?.value
const ictvExemplar = ictvExemplarSource ? {sourceSha256:ictvExemplarSource,pendingPages:db.prepare("SELECT COUNT(*) n FROM ictv_exemplar_pages WHERE status='pending'").get().n,pendingEntities:db.prepare("SELECT COUNT(*) n FROM ictv_exemplar_entities WHERE status='pending' OR rank_ids IS NULL").get().n} : undefined
const ictvExemplarRows = ictvExemplarSource ? db.prepare("SELECT t.url,p.status page_status,p.item,p.canonical_title,e.status entity_status,e.col_ids,e.rank_ids FROM ictv_exemplar_targets t JOIN ictv_exemplar_pages p ON p.title=t.title LEFT JOIN ictv_exemplar_entities e ON e.item=p.item WHERE t.node_id=?") : null
const ictvMultiSource = db.prepare("SELECT value FROM meta WHERE key='ictv_multi_source_sha256'").get()?.value
const ictvMulti = ictvMultiSource ? {sourceSha256:ictvMultiSource,pendingPages:db.prepare("SELECT COUNT(*) n FROM ictv_multi_pages WHERE status='pending'").get().n,pendingEntities:db.prepare("SELECT COUNT(*) n FROM ictv_multi_entities WHERE status='pending'").get().n} : undefined
const ictvMultiRows = ictvMultiSource ? db.prepare("SELECT t.url,p.status page_status,p.item,p.canonical_title,e.status entity_status,e.col_ids,e.rank_ids FROM ictv_multi_targets t JOIN ictv_multi_pages p ON p.locale=t.locale AND p.title=t.title LEFT JOIN ictv_multi_entities e ON e.item=p.item WHERE t.node_id=? ORDER BY t.locale") : null
const ictvSplitSource = db.prepare("SELECT value FROM meta WHERE key='ictv_split_source_sha256'").get()?.value
const ictvSplit = ictvSplitSource ? {sourceSha256:ictvSplitSource,pendingPages:db.prepare("SELECT COUNT(*) n FROM ictv_split_pages WHERE status='pending'").get().n,pendingEntities:db.prepare("SELECT COUNT(*) n FROM ictv_split_entities WHERE status='pending'").get().n} : undefined
const ictvSplitRows = ictvSplitSource ? db.prepare("SELECT t.url,p.status page_status,p.item,p.canonical_title,e.status entity_status,e.col_ids,e.rank_ids FROM ictv_split_targets t JOIN ictv_split_pages p ON p.locale=t.locale AND p.title=t.title LEFT JOIN ictv_split_entities e ON e.item=p.item WHERE t.node_id=? ORDER BY t.locale") : null
const ictvNormSource = db.prepare("SELECT value FROM meta WHERE key='ictv_norm_source_sha256'").get()?.value
const ictvNorm = ictvNormSource ? {sourceSha256:ictvNormSource,pendingPages:db.prepare("SELECT COUNT(*) n FROM ictv_norm_pages WHERE status='pending'").get().n,pendingEntities:db.prepare("SELECT COUNT(*) n FROM ictv_norm_entities WHERE status='pending' OR type_ids IS NULL").get().n} : undefined
const ictvNormRows = ictvNormSource ? db.prepare("SELECT t.url,p.status page_status,p.item,p.canonical_title,e.status entity_status,e.col_ids,e.rank_ids,e.type_ids FROM ictv_norm_targets t JOIN ictv_norm_pages p ON p.locale=t.locale AND p.title=t.title LEFT JOIN ictv_norm_entities e ON e.item=p.item WHERE t.node_id=? ORDER BY t.locale") : null
const ictvSharedSource = db.prepare("SELECT value FROM meta WHERE key='ictv_shared_source_sha256'").get()?.value
const ictvShared = ictvSharedSource ? db.prepare('SELECT 1 FROM ictv_shared_items WHERE item=?') : null
const ictvNameSource = db.prepare("SELECT value FROM meta WHERE key='ictv_name_source_sha256'").get()?.value
const ictvNameCounts = ictvNameSource ? db.prepare('SELECT status,COUNT(*) n FROM ictv_name_lookup GROUP BY status').all() : []
const ictvNameSharedSource = db.prepare("SELECT value FROM meta WHERE key='ictv_name_shared_sha256'").get()?.value
const ictvName = ictvNameSource ? {sourceSha256:ictvNameSource,sharedSha256:ictvNameSharedSource,queriedNames:ictvNameCounts.find(r=>r.status==='queried')?.n??0,pendingNames:ictvNameCounts.find(r=>r.status==='pending')?.n??0} : undefined
const ictvNameRows = ictvNameSource ? db.prepare("SELECT t.name,l.candidates_json FROM ictv_name_targets t JOIN ictv_name_lookup l ON l.name=t.name WHERE t.node_id=? AND l.status='queried'") : null
const ictvNameShared = ictvNameSharedSource ? db.prepare('SELECT 1 FROM ictv_name_shared WHERE item=?') : null
const abbreviatedSource = db.prepare("SELECT value FROM meta WHERE key='abbreviated_wikidata_source_sha256'").get()?.value
const abbreviatedCounts = abbreviatedSource ? db.prepare('SELECT status,COUNT(*) n FROM abbreviated_wikidata_lookup GROUP BY status').all() : []
const abbreviatedWikidata = abbreviatedSource ? {sourceSha256:abbreviatedSource,queriedNames:abbreviatedCounts.find(row=>row.status==='queried')?.n??0,pendingNames:abbreviatedCounts.find(row=>row.status==='pending')?.n??0} : undefined
const abbreviatedRows = abbreviatedSource ? db.prepare("SELECT DISTINCT s.name,l.candidates_json FROM abbreviated_wikidata_targets u JOIN subgenus_names s ON s.node_id=u.id JOIN abbreviated_wikidata_lookup l ON l.name=s.name WHERE u.id=? AND l.status='queried'") : null
const itisSource = db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_candidates_sha256'").get()?.value
const itisExpandedSource = db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_expanded_sha256'").get()?.value
const itisChecksSource = db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_checks_sha256'").get()?.value
const itisIdentitySource = db.prepare("SELECT value FROM meta WHERE key='itis_wikidata_identities_sha256'").get()?.value
const itisCasefoldSource = db.prepare("SELECT value FROM meta WHERE key='itis_casefold_candidates_sha256'").get()?.value
const itisCasefoldChecks = db.prepare("SELECT value FROM meta WHERE key='itis_casefold_checks_sha256'").get()?.value
const itisCasefoldIdentities = db.prepare("SELECT value FROM meta WHERE key='itis_casefold_identities_sha256'").get()?.value
const itisRows = itisSource ? db.prepare(itisIdentitySource ? "SELECT c.locale,c.title,c.itis_id,c.url,v.item,w.col_ids FROM itis_vernacular_candidates c JOIN itis_vernacular_title_checks v ON v.locale=c.locale AND v.title=c.title LEFT JOIN itis_wikidata_identities w ON w.item=v.item WHERE c.node_id=? AND v.status='available'" : itisChecksSource ? "SELECT c.locale,c.title,c.itis_id,c.url,NULL item,NULL col_ids FROM itis_vernacular_candidates c JOIN itis_vernacular_title_checks v ON v.locale=c.locale AND v.title=c.title WHERE c.node_id=? AND v.status='available'" : 'SELECT locale,title,itis_id,url,NULL item,NULL col_ids FROM itis_vernacular_candidates WHERE node_id=?') : null
const subgenusSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_inventory_source_sha256'").get()?.value
const subgenusConflictSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_conflicts_sha256'").get()?.value
const subgenusPageSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_page_source_sha256'").get()?.value
const subgenusEntityReady = Boolean(db.prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name='subgenus_entity_jobs'").get())
const subgenusDone = subgenusSource ? db.prepare('SELECT locale,source_sha256 FROM subgenus_title_done ORDER BY locale').all() : []
const subgenus = subgenusSource ? { sourceSha256:subgenusSource, conflictsSha256:subgenusConflictSource, pageSourceSha256:subgenusPageSource, pageCounts:subgenusPageSource ? db.prepare('SELECT status,COUNT(*) n FROM subgenus_page_jobs GROUP BY status').all():undefined, entityCounts:subgenusEntityReady ? db.prepare('SELECT status,COUNT(*) n FROM subgenus_entity_jobs GROUP BY status').all():undefined, locales:Object.fromEntries(subgenusDone.map(row => [row.locale,row.source_sha256])) } : undefined
const subgenusSelect = 'SELECT DISTINCT t.locale,t.title,s.original_name'
const subgenusFrom = ' FROM subgenus_names s JOIN subgenus_title_matches t ON t.name=s.name JOIN subgenus_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256'
const subgenusRows = subgenusSource ? db.prepare(subgenusPageSource ? subgenusSelect + ',j.status page_status,j.item' + (subgenusEntityReady ? ',e.col_ids' : ',NULL col_ids') + subgenusFrom + " LEFT JOIN subgenus_page_jobs j ON j.locale=t.locale AND j.title=replace(t.title,'_',' ')" + (subgenusEntityReady ? " LEFT JOIN subgenus_entity_jobs e ON e.item=j.item AND e.status='queried'" : '') + ' WHERE s.node_id=? ORDER BY t.locale,t.title' : subgenusSelect + ',NULL page_status,NULL item,NULL col_ids' + subgenusFrom + ' WHERE s.node_id=? ORDER BY t.locale,t.title') : null
const subgenusConflict = subgenusConflictSource ? db.prepare('SELECT col_ids FROM subgenus_conflicts WHERE node_id=? AND url=?') : null
const subgenusPageEvidence = subgenusPageSource ? db.prepare('SELECT p.status,p.item,'+(subgenusEntityReady?'e.col_ids':'NULL col_ids')+' FROM subgenus_page_targets t JOIN subgenus_page_jobs p ON p.locale=t.locale AND p.title=t.title'+(subgenusEntityReady?" LEFT JOIN subgenus_entity_jobs e ON e.item=p.item AND e.status='queried'":'')+' WHERE t.node_id=? AND t.url=?') : null
const rankSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_source_sha256'").get()?.value
const rankPageSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_page_source_sha256'").get()?.value
const rankAllPagesSource = db.prepare("SELECT value FROM meta WHERE key='subgenus_rank_all_pages_source_sha256'").get()?.value
const rankEntityReady = Boolean(db.prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name='subgenus_rank_entity_jobs'").get())
const rankDone = rankSource ? db.prepare('SELECT locale,source_sha256 FROM subgenus_rank_title_done ORDER BY locale').all() : []
const rankSubgenus = rankSource ? {sourceSha256:rankSource,allPagesSourceSha256:rankAllPagesSource,pageCounts:rankPageSource?db.prepare('SELECT status,COUNT(*) n FROM subgenus_rank_page_jobs GROUP BY status').all():undefined,entityCounts:rankEntityReady?db.prepare('SELECT status,COUNT(*) n FROM subgenus_rank_entity_jobs GROUP BY status').all():undefined,locales:Object.fromEntries(rankDone.map(row=>[row.locale,row.source_sha256]))} : undefined
const rankRows = rankSource ? db.prepare('SELECT DISTINCT t.locale,t.title,s.original_name,s.kind,'+(rankPageSource?'p.status':'NULL')+' page_status,'+(rankEntityReady&&rankPageSource?'e.col_ids,e.rank_ids':'NULL col_ids,NULL rank_ids')+' FROM subgenus_rank_names s JOIN subgenus_rank_title_matches t ON t.name=s.name JOIN subgenus_rank_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256'+(rankPageSource?" LEFT JOIN subgenus_rank_page_jobs p ON p.locale=t.locale AND p.title=replace(t.title,'_',' ')":'')+(rankEntityReady&&rankPageSource?" LEFT JOIN subgenus_rank_entity_jobs e ON e.item=p.item AND e.status='queried'":'')+' WHERE s.node_id=? ORDER BY t.locale,t.title') : null
const hybridSource = db.prepare("SELECT value FROM meta WHERE key='hybrid_inventory_source_sha256'").get()?.value
const hybridDone = hybridSource ? db.prepare('SELECT locale,source_sha256 FROM hybrid_title_done ORDER BY locale').all() : []
const hybrid = hybridSource ? {sourceSha256:hybridSource,locales:Object.fromEntries(hybridDone.map(row=>[row.locale,row.source_sha256]))} : undefined
const hybridRows = hybridSource ? db.prepare('SELECT DISTINCT t.locale,t.title,s.original_name,p.status,p.col_ids FROM hybrid_names s JOIN hybrid_title_matches t ON t.name=s.name JOIN hybrid_title_done d ON d.locale=t.locale AND d.source_sha256=t.source_sha256 JOIN hybrid_page_checks p ON p.locale=t.locale AND p.title=t.title WHERE s.node_id=? ORDER BY t.locale,t.title') : null
const normalizedLocaleSet = new Set(normalizedLocales)
const normalizedNames = normalizedLocales.length ? db.prepare('SELECT locale,title FROM normalized_title_matches INDEXED BY normalized_title_matches_name WHERE name=?') : null
const normalizedSynonyms = normalizedLocales.length ? db.prepare('SELECT DISTINCT t.locale,t.title FROM synonym_names s JOIN normalized_title_matches t INDEXED BY normalized_title_matches_name ON t.name=s.name WHERE s.node_id=?') : null
function normalizedOptions(name, id) {
  const own = (normalizedNames?.all(name) ?? []).filter(row => normalizedLocaleSet.has(row.locale)).map(row => ({ ...row, kind: '规范化名称 / Normalized name' }))
  const synonyms = (normalizedSynonyms?.all(id) ?? []).filter(row => normalizedLocaleSet.has(row.locale)).map(row => ({ ...row, kind: '规范化异名 / Normalized synonym' }))
  return [...own, ...synonyms].map(({ locale, title, kind }) => ({ item: `Wikipedia:${locale}:${title}`, parentNames: [kind], ranks: [],
    url: `https://${locale}.wikipedia.org/wiki/${encodeURIComponent(title)}`, abstracts: [] }))
    .filter(option => usableForNode(id,option.url))
}
const completedLocales = new Set(alternateLocales)
const alternateNames = alternateLocales.length ? db.prepare('SELECT locale,title FROM alternate_title_matches INDEXED BY alternate_title_matches_name WHERE name=?') : null
const alternateSynonyms = alternateLocales.length ? db.prepare('SELECT DISTINCT t.locale,t.title FROM synonym_names s JOIN alternate_title_matches t INDEXED BY alternate_title_matches_name ON t.name=s.name WHERE s.node_id=?') : null
function alternateOptions(name, id) {
  const own = (alternateNames?.all(name) ?? []).filter(row => completedLocales.has(row.locale)).map(row => ({ ...row, kind: '同名标题 / Same title' }))
  const synonyms = (alternateSynonyms?.all(id) ?? []).filter(row => completedLocales.has(row.locale)).map(row => ({ ...row, kind: '异名 / Synonym' }))
  return [...own, ...synonyms].map(({ locale, title, kind }) => ({ item: `Wikipedia:${locale}:${title}`, parentNames: [kind], ranks: [],
    url: `https://${locale}.wikipedia.org/wiki/${encodeURIComponent(title)}`, abstracts: [] }))
    .filter(option => usableForNode(id,option.url))
}
function synonymOptions(id) {
  return (synonymTitles?.all(id) ?? []).map(({ title }) => ({ item: `Wikipedia:${title}`, parentNames: ['异名 / Synonym'], ranks: [],
    url: `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`, abstracts: [] }))
    .filter(option => usableForNode(id,option.url))
}
let activeNameEvidence={conflictingUrls:new Set(),unresolvedUrls:new Set()}, activeSameParentOptions=[]
function nodeUrlStatus(id,url){
  const knownId=value=>Boolean(knownColId.get(value))
  if(activeNameEvidence.conflictingUrls.has(url))return 'conflict'
  const status=linkEvidenceStatus([...(subgenusConflict?.all(id,url)??[]),...(subgenusPageEvidence?.all(id,url)??[])],id,knownId)
  return status==='none'&&activeNameEvidence.unresolvedUrls.has(url)?'unresolved':status
}
function usableForNode(id,url){return pageAuditUsable(url)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status)&&nodeUrlStatus(id,url)!=='conflict'}
function usableForSameParentNode(id,url){
 const knownId=value=>Boolean(knownColId.get(value))
 return pageAuditUsable(url)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status)&&linkEvidenceStatus([...(subgenusConflict?.all(id,url)??[]),...(subgenusPageEvidence?.all(id,url)??[])],id,knownId)!=='conflict'
}
function usableForWfoRedirect(id,url,item){return !['identity-conflict','unavailable'].includes(article.get(url)?.status)&&pageMatchesItem(id,url,item)}
function pageMatchesItem(id,url,item){
  if(!pageAuditUsable(url,item))return false
  const expected=/^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(item??'')?.[1]
  if(!expected)return true
  return (subgenusPageEvidence?.all(id,url)??[]).every(row=>!row.item||row.item===expected)
}
function uniqueOptions(options,id) {
  options = prioritizePrimaryRelated(options)
  return mergeCandidateOptions(options.filter(option => option?.url && !isHeld(id,option.item,option.url) && pageAuditUsable(option.url,option.item) && (option.primaryRelatedCandidate ? true : option.relatedRedirectCandidate || option.moreRedirectCandidate || option.peerRedirectCandidate || option.unidentifiedRedirectCandidate || option.unidentifiedPeerRedirectCandidate ? !['identity-conflict','unavailable'].includes(article.get(option.url)?.status) : option.wfoRedirectCandidate || option.wikidataSynonymCandidate || option.wormsSidecarCandidate || option.wormsRedirectCandidate || option.itisSynonymCandidate || option.itisSharedSynonymCandidate || option.wfoSharedSynonymCandidate || option.sameNameParentCandidate || option.sameNameGenusCandidate || option.dipteraSynonymCandidate || option.wormsArchiveSynonymCandidate || option.wscSynonymCandidate || option.reptileSynonymCandidate || option.osfSynonymCandidate || option.majorSynonymCandidate ? usableForWfoRedirect(id,option.url,option.item) : option.sameParentCandidate ? usableForSameParentNode(id,option.url) : usableForNode(id,option.url))).map(option=>{
    if(nodeUrlStatus(id,option.url)==='unresolved'&&!option.parentNames.includes(unresolvedIdentifierLabel))option.parentNames.push(unresolvedIdentifierLabel)
    if(!pageMatchesItem(id,option.url,option.item))option.parentNames.push('跳转条目待核对 / Redirect identity unverified')
    return option
  }))
}
function synonymWikidataOptions(id) {
  const usable = (value,item) => usableForNode(id,value) && pageMatchesItem(id,value,item)
  const knownId = value => Boolean(knownColId.get(value))
  const sharedItem = item => Boolean(ictvShared?.get(item))
  const itis = itisIdentityCandidates(itisRows?.all(id) ?? [], id,knownId).filter(row => usable(row.url)).map(row => ({ item: `ITIS:${row.itis_id}:${row.locale}:${row.title}`, parentNames: [`俗名候选 / Vernacular: ${row.title}`,...(externalIdStatus(JSON.parse(row.col_ids??'[]'),id,knownId)==='unresolved'?[unresolvedIdentifierLabel]:[])], ranks: [], url: row.url, abstracts: [] }))
  const sourceIdOptions=buildSynonymWikidataOptions(authorityIdRows?.all(id) ?? [],usable,'来源编号候选，身份待核对 / Source identifier, identity unverified',id,knownId).filter(option=>!option.ranks.length||option.ranks.some(rank=>rank.endsWith('/Q7432')))
  const wfoOptions=wfoRedirectOptions(wfoRedirectRows?.all(id) ?? [],url=>wfoRedirectPage?.get(url),(url,item)=>usableForWfoRedirect(id,url,item),id,knownId)
  const wfoFormatCandidates=wfoFormatOptions(wfoFormatRows?.all(id) ?? [],url=>wfoFormatPage?.get(url),(url,item)=>usable(url)&&pageMatchesItem(id,url,item),id,knownId)
  const relatedRedirectCandidates=relatedRedirectOptions(relatedRedirectRows?.all(id) ?? [],url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status))
  const primaryRelatedCandidates=primaryRelatedOptions(primaryRelatedRows?.all(id) ?? [],pageAuditUsable)
  primaryRelatedCandidates.push(...nominateSubgenusParentOptions(nominateSubgenusParentRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...subgenusSameFamilyGenusOptions(subgenusSameFamilyGenusRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...subgenusFamilyUnidentifiedGenusOptions(subgenusFamilyUnidentifiedGenusRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...qualifiedUnkeyedSpeciesOptions(qualifiedUnkeyedSpeciesRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...ncbiHigherSynonymPeerOptions(ncbiHigherSynonymPeerRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...registryAbbrevPeerOptions(registryAbbrevPeerRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...ambiguousSynonymOptions(registryAmbiguousSynonymRows?.all(id) ?? [],(url,item)=>pageAuditUsable(url,item)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status),knownId))
  primaryRelatedCandidates.push(...ambiguousSynonymPeerOptions(registryAmbiguousPeerRows?.all(id) ?? [],pageAuditUsable))
  primaryRelatedCandidates.push(...ncbiIdOptions(withNcbiLineage(ncbiIdRows?.all(id) ?? []),(url,item)=>pageAuditUsable(url,item)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status),knownId))
  primaryRelatedCandidates.push(...ncbiIdOptions(withNcbiLineage(ncbiSynonymRows?.all(id) ?? []),(url,item)=>pageAuditUsable(url,item)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status),knownId))
  primaryRelatedCandidates.push(...ncbiIdOptions(withNcbiLineage(ncbiCatalogSynonymRows?.all(id) ?? []),(url,item)=>pageAuditUsable(url,item)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status),knownId))
  primaryRelatedCandidates.push(...synonymTitleRelatedOptions(bryoRelatedRows?.all(id) ?? [],pageAuditUsable))
  const moreRedirectCandidates=moreRedirectOptions(moreRedirectRows?.all(id) ?? [],url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status))
  const peerRedirectCandidates=peerRedirectOptions(peerRedirectRows?.all(id) ?? [],url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status))
  const unidentifiedRedirectCandidates=unidentifiedRedirectOptions(unidentifiedRedirectRows?.all(id) ?? [],url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status))
  const unidentifiedPeerRedirectCandidates=unidentifiedPeerRedirectOptions(unidentifiedPeerRedirectRows?.all(id) ?? [],url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status))
  const usableCandidatePage = (url,item) => pageAuditUsable(url,item) && !['identity-conflict','unavailable'].includes(article.get(url)?.status)
  const wikidataSynonymCandidates=wikidataSynonymEdgeOptions(wikidataSynonymEdgeRows?.all(id) ?? [],usableCandidatePage,knownId)
  const wormsSidecarCandidates=wormsSidecarOptions(wormsSidecarRows?.all(id) ?? [],usableCandidatePage,knownId)
  const wormsRedirectCandidates=wormsRedirectOptions(wormsRedirectRows?.all(id) ?? [],usableCandidatePage,knownId)
  const itisSynonymCandidates=itisSynonymOptions(itisSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const itisSharedSynonymCandidates=itisSharedSynonymOptions(itisSharedSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const wfoSharedSynonymCandidates=wfoSharedSynonymOptions(wfoSharedSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const sameNameParentCandidates=sameNameParentOptions(sameNameParentRows?.all(id) ?? [],usableCandidatePage)
  const sameNameGenusCandidates=sameNameGenusOptions(sameNameGenusRows?.all(id) ?? [],usableCandidatePage)
  const dipteraSynonymCandidates=dipteraSynonymOptions(dipteraSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const wormsArchiveSynonymCandidates=wormsArchiveSynonymOptions(wormsArchiveSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const wscSynonymCandidates=wscSynonymOptions(wscSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const reptileSynonymCandidates=reptileSynonymOptions(reptileSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const itisCrossSourceCandidates=itisCrossSourceOptions([...(itisCrossSourceRows?.all(id) ?? []),...(itisCrossUnkeyedRows?.all(id) ?? [])],usableCandidatePage,knownId)
  const osfSynonymCandidates=osfSynonymOptions(osfSynonymRows?.all(id) ?? [],usableCandidatePage,knownId)
  const majorSynonymCandidates=majorSynonymOptions([...(majorSynonymRows?.all(id) ?? []),...(biotaSynonymRows?.all(id) ?? []),...(bacteriaSynonymRows?.all(id) ?? []),...(marineFiveSynonymRows?.all(id) ?? []),...(laterSynonymRows?.all(id) ?? []),...(expandSynonymRows?.all(id) ?? []),...(extraSynonymRows?.all(id) ?? []),...(nextSynonymRows?.all(id) ?? []),...(moreSynonymRows?.all(id) ?? []),...(batchSynonymRows?.all(id) ?? [])],(url,item)=>pageAuditUsable(url,item)&&!['identity-conflict','unavailable'].includes(article.get(url)?.status),knownId)
  const options=[...buildSynonymWikidataOptions(synonymWikidataRows?.all(id) ?? [], usable, '异名 / Synonym', id,knownId), ...buildSynonymWikidataOptions(labelWikidataRows?.all(id, id) ?? [], usable, '标签候选 / Label', id,knownId), ...buildSynonymWikidataOptions(aliasRows?.all(id,id) ?? [],usable,'别名候选 / Alias',id,knownId), ...buildSynonymWikidataOptions(authorityRows?.all(id) ?? [],usable,'去作者候选，分类范围待核对 / Authority stripped, scope unverified',id,knownId), ...buildSynonymWikidataOptions(itisDirectRows?.all(id) ?? [],usable,'ITIS 同名同等级候选，身份待核对 / ITIS name and rank, identity unverified',id,knownId), ...sourceIdOptions, ...wfoOptions, ...wfoFormatCandidates, ...buildSynonymWikidataOptions(abbreviatedRows?.all(id) ?? [],usable,'省略亚属候选 / Abbreviated subgenus',id,knownId), ...ictvExemplarOptions(ictvExemplarRows?.all(id) ?? [],usable,id,knownId,sharedItem), ...ictvExemplarOptions(ictvMultiRows?.all(id) ?? [],usable,id,knownId,sharedItem), ...ictvExemplarOptions(ictvSplitRows?.all(id) ?? [],usable,id,knownId,sharedItem), ...ictvExemplarNameOptions(ictvNameRows?.all(id) ?? [],usable,id,knownId,item=>sharedItem(item)||Boolean(ictvNameShared?.get(item))), ...ictvNormalizedOptions(ictvNormRows?.all(id) ?? [],usable,id,knownId,sharedItem), ...activeSameParentOptions, ...itis, ...subgenusOptions(subgenusRows?.all(id) ?? [],usable,id,knownId,url=>nodeUrlStatus(id,url)), ...subgenusRankOptions(rankRows?.all(id) ?? [],usable,id,knownId), ...hybridOptions(hybridRows?.all(id) ?? [],usable,id)]
  options.push(...primaryRelatedCandidates,...relatedRedirectCandidates,...moreRedirectCandidates,...peerRedirectCandidates,...unidentifiedRedirectCandidates,...unidentifiedPeerRedirectCandidates,...wikidataSynonymCandidates,...wormsSidecarCandidates,...wormsRedirectCandidates,...itisSynonymCandidates,...itisSharedSynonymCandidates,...wfoSharedSynonymCandidates,...sameNameParentCandidates,...sameNameGenusCandidates,...dipteraSynonymCandidates,...wormsArchiveSynonymCandidates,...wscSynonymCandidates,...reptileSynonymCandidates,...osfSynonymCandidates,...majorSynonymCandidates)
  options.push(...itisCrossSourceCandidates)
  for(const option of options)if(nodeUrlStatus(id,option.url)==='unresolved'&&!option.parentNames.includes(unresolvedIdentifierLabel))option.parentNames.push(unresolvedIdentifierLabel)
  return options
}
db.exec('BEGIN')
const stats = { totalNodes: 0, queriedNodes: 0, pendingNodes: 0, matchedWithAbstract: 0,
  matchedAwaitingAbstract: 0, matchedWithoutSitelink: 0, candidatesWithAbstract: 0, candidatesAwaitingAbstract: 0, ambiguous: 0, unresolved: 0, pendingTitleCandidates: 0 }
const shards = {}
if (out) mkdirSync(out, { recursive: true })
for (const [index, source] of manifest.hierarchy.nodes.files.entries()) {
  if (part !== null && index % parts !== part) continue
  const bytes = readFileSync(join(root, source.path))
  assert.equal(createHash('sha256').update(bytes).digest('hex'), source.sha256, source.path)
  const rows = gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean)
  assert.equal(rows.length, source.records)
  stats.totalNodes += rows.length
  const entries = {}
  for (const line of rows) {
    const row = JSON.parse(line)
    activeNameEvidence={conflictingUrls:new Set(),unresolvedUrls:new Set()}
    activeSameParentOptions=[]
    const author = row.authorship?.trim()
    const name = author && row.scientificName.endsWith(author) ? row.scientificName.slice(0, -author.length).trim() : row.scientificName.trim()
    const result = queryName.get(name)
    if (!result || result.status !== 'queried') {
      stats.pendingNodes++
      const options = uniqueOptions([...synonymOptions(row.id), ...alternateOptions(name, row.id), ...normalizedOptions(name, row.id), ...synonymWikidataOptions(row.id)],row.id)
      if (options.length) {
        entries[row.id] = { status: 'candidate', lookupPending: true, options }
        stats.pendingTitleCandidates++
        stats.candidatesAwaitingAbstract++
      }
      continue
    }
    stats.queriedNodes++
    const allNameCandidates=JSON.parse(result.candidates_json)
    activeNameEvidence=nameIdentityEvidence(allNameCandidates,row.id,value=>Boolean(knownColId.get(value)))
    if(activeNameEvidence.conflictingUrls.size)activeSameParentOptions=sameParentIdentityCandidates(allNameCandidates,row.id,colNodeIdentity.get(row.id),id=>colNodeIdentity.get(id)).map(candidate=>({item:candidate.item,parentNames:['同名同级且上级相同，条目对应另一节点 / Same name, rank and parent; article identifies another node',...(candidate.parentNames??[])],ranks:candidate.ranks??[],url:preferredUrls(candidate.articles.filter(url=>usableForSameParentNode(row.id,url)))[0],abstracts:[],sameParentCandidate:true})).filter(option=>option.url)
    const candidates = activeNameEvidence.eligible
    let identity = classify({ ...row, parentName: row.parentId ? parentName.get(row.parentId)?.name : undefined }, candidates)
    if (identity.item && isHeld(row.id, identity.item, null)) identity = { status: 'unresolved' }
    if(identity.status==='matched-name-parent-rank'){
      const matched=candidates.find(candidate=>candidate.item===identity.item)
      if(externalIdStatus(matched?.colIds,row.id,value=>Boolean(knownColId.get(value)))==='unresolved')identity={status:'candidate-name',item:identity.item}
    }
    if (canUseSupplementalExact(identity.status)) {
      const usable = (url,item) => usableForNode(row.id,url) && pageMatchesItem(row.id,url,item)
      const itisExact = itisExactIdentity(itisRows?.all(row.id) ?? [], row.id)
      const exact = exactWikidataOptions([...(synonymWikidataRows?.all(row.id) ?? []), ...(labelWikidataRows?.all(row.id, row.id) ?? []), ...(aliasRows?.all(row.id,row.id) ?? []), ...(abbreviatedRows?.all(row.id) ?? [])], usable, row.id)
      exact.push(...(exactSourceSynonymRows?.all(row.id) ?? []).filter(x => usable(x.url,x.item)))
      exact.push(...subgenusExactOptions(subgenusRows?.all(row.id) ?? [], usable, row.id))
      if (itisExact && usable(itisExact.url)) exact.push({ item:`https://www.wikidata.org/entity/${itisExact.item}`, url:itisExact.url })
      const verifiedExact=exact.filter(x=>!isHeld(row.id,x.item,x.url)&&pageMatchesItem(row.id,x.url,x.item))
      if (verifiedExact.length && new Set(verifiedExact.map(x => x.item)).size === 1) {
        entries[row.id] = { status: 'abstract-pending', item: verifiedExact[0].item, matchKind: 'matched-col-id', url: verifiedExact[0].url }
        stats.matchedAwaitingAbstract++
        continue
      }
    }
    const fallback = exactTitle.get(name)
    const savedFallback = fallback?.status === 'available' && fallback.snapshot_url ? {url:fallback.snapshot_url,wikidataItem:fallback.snapshot_item,title:fallback.snapshot_title} : null
    const fallbackSnapshot = savedFallback && usableForNode(row.id,savedFallback.url) ? savedFallback : null
    const titleCandidate = !['ambiguous', 'unavailable'].includes(fallback?.status) ? dumpedTitle.get(name)?.title : undefined
    const titleCandidateUrl = titleCandidate ? `https://en.wikipedia.org/wiki/${encodeURIComponent(titleCandidate)}` : undefined
    const fallbackOption = fallbackSnapshot ? { item: fallbackSnapshot.wikidataItem ? `https://www.wikidata.org/entity/${fallbackSnapshot.wikidataItem}` : `Wikipedia:${fallbackSnapshot.title}`,
      parentNames: [], ranks: [], url: fallbackSnapshot.url, abstracts: [] }
      : titleCandidateUrl && usableForNode(row.id,titleCandidateUrl) ? { item: `Wikipedia:${titleCandidate}`, parentNames: [], ranks: [],
        url: titleCandidateUrl, abstracts: [] } : null
    if (identity.status === 'unresolved') {
      const options = uniqueOptions([fallbackOption, ...synonymOptions(row.id), ...alternateOptions(name, row.id), ...normalizedOptions(name, row.id), ...synonymWikidataOptions(row.id)],row.id)
      if (options.length) {
        entries[row.id] = { status: 'candidate', options }
        stats.candidatesAwaitingAbstract++
        continue
      }
    }
    if (identity.status.startsWith('ambiguous') || identity.status === 'candidate-name') {
      const selected = identity.status === 'candidate-name' ? candidates.filter(candidate => candidate.item === identity.item) : candidates
      const options = selected.filter(candidate => candidate.articles.length).map(candidate => {
        const usable = preferredUrls(candidate.articles.filter(url => usableForNode(row.id,url)))
        let savedUrl
        for (const url of usable) {
          const saved = article.get(url)
          if (!savedUrl && saved?.item_id === candidate.item && saved.status === 'available' && saved.snapshot_url) savedUrl = saved.snapshot_url
        }
        return { item: candidate.item, parentNames: candidate.parentNames, ranks: candidate.ranks, url: savedUrl ?? usable[0], abstracts: [] }
      }).filter(option => option.url)
      const allOptions = uniqueOptions([...options, fallbackOption, ...synonymOptions(row.id), ...alternateOptions(name, row.id), ...normalizedOptions(name, row.id), ...synonymWikidataOptions(row.id)],row.id)
      if (allOptions.length) {
        entries[row.id] = { status: 'candidate', options: allOptions }
        if (allOptions.some(option => option.abstracts.length)) stats.candidatesWithAbstract++
        else stats.candidatesAwaitingAbstract++
      } else { entries[row.id] = { status: 'ambiguous' }; stats.ambiguous++ }
      continue
    }
    if (!['matched-col-id', 'matched-name-parent-rank'].includes(identity.status)) { entries[row.id] = { status: 'unresolved' }; stats.unresolved++; continue }
    const usableArticles = preferredUrls(identity.articles.filter(url => usableForNode(row.id,url)&&pageMatchesItem(row.id,url,identity.item)))
    if (!usableArticles.length) {
      const refreshedExact = selectRefreshedExact(exactSourceSynonymRows?.all(row.id) ?? [], identity.item, (item,url)=>isHeld(row.id,item,url), url=>usableForNode(row.id,url), (url,item)=>pageMatchesItem(row.id,url,item))
      if (refreshedExact) {
        entries[row.id] = { status: 'abstract-pending', item: identity.item, matchKind: identity.status, url: refreshedExact.url }
        stats.matchedAwaitingAbstract++
      } else if (fallbackOption && fallbackOption.item === identity.item && pageMatchesItem(row.id,fallbackOption.url,identity.item)) {
        entries[row.id] = { status: 'abstract-pending', item: identity.item, matchKind: identity.status, url: fallbackOption.url }
        stats.matchedAwaitingAbstract++
      } else {
        const options = uniqueOptions([fallbackOption, ...synonymOptions(row.id), ...alternateOptions(name, row.id), ...normalizedOptions(name, row.id), ...synonymWikidataOptions(row.id)],row.id)
        if (options.length) {
          entries[row.id] = { status: 'candidate', options }
          stats.candidatesAwaitingAbstract++
        } else {
          entries[row.id] = { status: 'unresolved', item: identity.item, matchKind: identity.status }
          stats.matchedWithoutSitelink++
        }
      }
      continue
    }
    const available = []
    for (const url of usableArticles) {
      const saved = article.get(url)
      if (saved?.item_id === identity.item && saved.status === 'available' && saved.snapshot_url && pageAuditUsable(saved.snapshot_url,identity.item) && pageMatchesItem(row.id,saved.snapshot_url,identity.item)) available.push(saved.snapshot_url)
    }
    if (fallbackSnapshot && fallbackOption?.item === identity.item && pageMatchesItem(row.id,fallbackOption.url,identity.item) && !available.includes(fallbackOption.url)) available.push(fallbackOption.url)
    if (!available.length) {
      entries[row.id] = { status: 'abstract-pending', item: identity.item, matchKind: identity.status, url: usableArticles[0] }
      stats.matchedAwaitingAbstract++
    } else {
      entries[row.id] = { status: 'abstract-pending', item: identity.item, matchKind: identity.status, url: available[0] }
      stats.matchedAwaitingAbstract++
    }
  }
  // Publish links only. Previously captured extracts remain local and are not
  // included in the generated data; the existing client supports link-only
  // abstract-pending entries and candidate options without abstracts.
  for (const entry of Object.values(entries)) {
    if (entry.status === 'matched') {
      entry.status = 'abstract-pending'
      delete entry.abstracts
    }
    for (const option of entry.options ?? []) option.abstracts = []
  }
  if (auditOnly) {
    if (inspectId && entries[inspectId]) console.log(JSON.stringify({ inspectedId: inspectId, entry: entries[inspectId] }))
    for (const [id, entry] of Object.entries(entries)) for (const candidate of [entry, ...(entry.options ?? [])]) {
      if (!candidate.url) continue
      auditCounts.links++
      const expected = /^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(candidate.item ?? '')?.[1]
      const row = expected ? auditKeyed.get(candidate.url, candidate.item) : null
      const fallback = row ? null : auditUnkeyed.get(candidate.url) ?? auditEvidence.get(candidate.url)
      const error = pageAuditError(expected, row, fallback)
      if (error) {
        auditCounts[error === 'page not confirmed' ? 'missing' : 'conflicting']++
        if (auditCounts.examples.length < 20) auditCounts.examples.push({ id, url: candidate.url, item: candidate.item, error })
      }
    }
    console.log(JSON.stringify({ checkedPrefix: source.prefix, nodes: Object.keys(entries).length, ...auditCounts }))
    continue
  }
  const raw = Buffer.from(JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', entries }))
  const output = gzipSync(raw, { level: 1, mtime: 0 })
  const outputHash = createHash('sha256').update(output).digest('hex')
  const path = `id-${source.prefix}-${outputHash.slice(0, 16)}.json.gz`
  writeFileSync(join(out, path), output)
  shards[source.prefix] = { path, sha256: outputHash, bytes: output.length,
    sourceSha256: createHash('sha256').update(raw).digest('hex'), sourceBytes: raw.length, entries: Object.keys(entries).length }
  console.log(`${path}: ${Object.keys(entries).length} checked`)
}
assert.equal(stats.queriedNodes + stats.pendingNodes, stats.totalNodes)
stats.matchedAwaitingAbstract += stats.matchedWithAbstract
stats.matchedWithAbstract = 0
stats.candidatesAwaitingAbstract += stats.candidatesWithAbstract
stats.candidatesWithAbstract = 0
db.exec('COMMIT')
db.close()
if (auditOnly) {
  auditDb.exec('ROLLBACK')
  auditDb.close()
  console.log(JSON.stringify({ status: auditCounts.missing || auditCounts.conflicting ? 'incomplete' : 'checked', part, parts, stats, audit: auditCounts }))
  process.exit(auditCounts.missing || auditCounts.conflicting ? 1 : 0)
}
writeFileSync(join(out, 'manifest.json'), JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', contentMode: 'links-only', generatedAt: new Date().toISOString(), colIdentityPolicy:'unresolved-ids-are-candidates', itisCrossSource:itisCrossSource ? {sourceSha256:itisCrossSource} : undefined, itisCrossUnkeyed:itisCrossUnkeyed ? {sourceSha256:itisCrossUnkeyed} : undefined, registryAmbiguousPeer: registryAmbiguousPeerSource ? {sourceSha256:registryAmbiguousPeerSource} : undefined, registryAmbiguousSynonym: registryAmbiguousSynonymSource ? {sourceSha256:registryAmbiguousSynonymSource} : undefined, registryAbbrevPeer: registryAbbrevPeerSource ? {sourceSha256:registryAbbrevPeerSource} : undefined, exactSourceSynonym: exactSourceSynonymSource ? {sourceSha256:exactSourceSynonymSource} : undefined, ncbiHigherSynonymPeer: ncbiHigherSynonymPeerSource ? {sourceSha256:ncbiHigherSynonymPeerSource} : undefined, nominateSubgenusParent: nominateSubgenusParentSource ? {sourceSha256:nominateSubgenusParentSource} : undefined, subgenusSameFamilyGenus: subgenusSameFamilyGenusSource ? {sourceSha256:subgenusSameFamilyGenusSource} : undefined, subgenusFamilyUnidentifiedGenus: subgenusFamilyUnidentifiedGenusSource ? {sourceSha256:subgenusFamilyUnidentifiedGenusSource} : undefined, qualifiedUnkeyedSpecies: qualifiedUnkeyedSpeciesSource ? {sourceSha256:qualifiedUnkeyedSpeciesSource} : undefined, ncbiGeneralOriginalAuthor: ncbiGeneralOriginalAuthorSource ? {sourceSha256:ncbiGeneralOriginalAuthorSource} : undefined, ncbiGeneralAuthor: ncbiGeneralAuthorSource ? {sourceSha256:ncbiGeneralAuthorSource} : undefined, candidateIdentityHeldUrls: candidateIdentityHeldUrlsSource ? {sourceSha256:candidateIdentityHeldUrlsSource} : undefined, ncbiIdentityHolds: ncbiIdentityHoldSource ? {sourceSha256:ncbiIdentityHoldSource} : undefined, ncbiLineage: ncbiLineageSource ? {sourceSha256:ncbiLineageSource} : undefined, ncbiLineageAuthority: ncbiLineageAuthoritySource ? {sourceSha256:ncbiLineageAuthoritySource} : undefined, ncbiOriginalNameAuthority: ncbiOriginalNameAuthoritySource ? {sourceSha256:ncbiOriginalNameAuthoritySource} : undefined, ncbiId: ncbiIdSource ? {sourceSha256:ncbiIdSource} : undefined, ncbiSynonym: ncbiSynonymSource ? {sourceSha256:ncbiSynonymSource} : undefined, ncbiCatalogSynonym: ncbiCatalogSynonymSource ? {sourceSha256:ncbiCatalogSynonymSource} : undefined, titleIndexSources, normalizedTitleSources, synonymWikidata, labelWikidata, aliasWikidata, abbreviatedWikidata, subgenus, rankSubgenus, hybrid, itisVernacular: itisSource ? { candidatesSha256: itisSource, expandedSha256: itisExpandedSource, checksSha256: itisChecksSource, identitiesSha256: itisIdentitySource, casefoldCandidatesSha256:itisCasefoldSource,casefoldChecksSha256:itisCasefoldChecks,casefoldIdentitiesSha256:itisCasefoldIdentities } : undefined,
  authorityWikidata: authoritySource ? {sourceSha256:authoritySource} : undefined, itisDirect, authorityId, wfoRedirect, wfoFormat, relatedRedirect:relatedRedirectSource ? {sourceSha256:relatedRedirectSource} : undefined, moreRedirect:moreRedirectSource ? {sourceSha256:moreRedirectSource} : undefined, peerRedirect:peerRedirectSource ? {sourceSha256:peerRedirectSource} : undefined, unidentifiedRedirect:unidentifiedRedirectSource ? {sourceSha256:unidentifiedRedirectSource} : undefined, unidentifiedPeerRedirect:unidentifiedPeerRedirectSource ? {sourceSha256:unidentifiedPeerRedirectSource} : undefined, wikidataSynonymEdge:wikidataSynonymEdgeSource ? {sourceSha256:wikidataSynonymEdgeSource} : undefined, contextualSynonymEdge:contextualSynonymEdgeSource ? {sourceSha256:contextualSynonymEdgeSource} : undefined, contextualInverseSynonymEdge:contextualInverseSynonymEdgeSource ? {sourceSha256:contextualInverseSynonymEdgeSource} : undefined, wikidataNomenclatural:wikidataNomenclaturalSource ? {sourceSha256:wikidataNomenclaturalSource} : undefined, wikidataNomenclaturalInverse:wikidataNomenclaturalInverseSource ? {sourceSha256:wikidataNomenclaturalInverseSource} : undefined, wormsSidecar:wormsSidecarSource ? {sourceSha256:wormsSidecarSource} : undefined, wormsRedirect:wormsRedirectSource ? {sourceSha256:wormsRedirectSource} : undefined, itisSynonym:itisSynonymSource ? {sourceSha256:itisSynonymSource} : undefined, itisSharedSynonym:itisSharedSynonymSource ? {sourceSha256:itisSharedSynonymSource} : undefined, wfoSharedSynonym:wfoSharedSynonymSource ? {sourceSha256:wfoSharedSynonymSource} : undefined, sameNameParent:sameNameParentSource ? {sourceSha256:sameNameParentSource} : undefined, sameNameGenus:sameNameGenusSource ? {sourceSha256:sameNameGenusSource} : undefined, dipteraSynonym:dipteraSynonymSource ? {sourceSha256:dipteraSynonymSource} : undefined, wormsArchiveSynonym:wormsArchiveSynonymSource ? {sourceSha256:wormsArchiveSynonymSource} : undefined, wscSynonym:wscSynonymSource ? {sourceSha256:wscSynonymSource} : undefined, reptileSynonym:reptileSynonymSource ? {sourceSha256:reptileSynonymSource} : undefined, osfSynonym:osfSynonymSource ? {sourceSha256:osfSynonymSource} : undefined, majorSynonym:majorSynonymSource ? {sourceSha256:majorSynonymSource} : undefined, biotaSynonym:biotaSynonymSource ? {sourceSha256:biotaSynonymSource} : undefined, bacteriaSynonym:bacteriaSynonymSource ? {sourceSha256:bacteriaSynonymSource} : undefined, marineFiveSynonym:marineFiveSynonymSource ? {sourceSha256:marineFiveSynonymSource} : undefined, laterSynonym:laterSynonymSource ? {sourceSha256:laterSynonymSource} : undefined, expandSynonym:expandSynonymSource ? {sourceSha256:expandSynonymSource} : undefined, extraSynonym:extraSynonymSource ? {sourceSha256:extraSynonymSource} : undefined, nextSynonym:nextSynonymSource ? {sourceSha256:nextSynonymSource} : undefined, moreSynonym:moreSynonymSource ? {sourceSha256:moreSynonymSource} : undefined, batchSynonym:batchSynonymSource ? {sourceSha256:batchSynonymSource} : undefined, pageAudit:pageAuditSource ? {sourceSha256:pageAuditSource} : undefined, primaryRelated:primaryRelatedSource ? {sourceSha256:primaryRelatedSource} : undefined, bryoRelated:bryoRelatedSource ? {sourceSha256:bryoRelatedSource} : undefined, ictvExemplar, ictvMulti, ictvSplit, ictvName, ictvNorm, ictvSharedSha256:ictvSharedSource, registryManifestSha256: createHash('sha256').update(manifestBytes).digest('hex'), status: stats.pendingNodes ? 'partial' : 'queried', ...(part === null ? {} : { part, parts }), stats, shards }, null, 2) + '\n')
console.log(JSON.stringify({ status: 'exported', out, stats }))
