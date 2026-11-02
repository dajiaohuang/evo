import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
import { similarTaxonNames, similarSpeciesInflection } from './wikipedia-col-redirect-similarity.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite'), scan = new DatabaseSync(root + 'unlinked-name-parent-wikipedia-scan.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  assert.equal(scan.prepare("SELECT COUNT(*) n FROM targets WHERE status <> 'checked'").get().n, 0)
  const pageBytes = readFileSync(root + 'unlinked-name-parent-scan-page-checks.json'), pageChecks = JSON.parse(pageBytes)
  assert.equal(pageChecks.manifestSha256, scan.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value)
  const rows = pageChecks.checks.filter(row => row.status === 'identity-review' && /^Q\d+$/.test(row.actualItem ?? ''))
  const entities = {}
  const fetchEntities = async ids => {
    for (let offset = 0; offset < ids.length; offset += 40) {
      const url = new URL('https://www.wikidata.org/w/api.php')
      for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
      const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; name and parent verification)' }, signal: AbortSignal.timeout(30000) })
      assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error)); Object.assign(entities, data.entities)
    }
  }
  const values = (id, property) => (entities[id]?.claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
  const ids = [...new Set(rows.flatMap(row => [row.item, row.actualItem]))]; await fetchEntities(ids)
  const parents = [...new Set(ids.flatMap(id => values(id, 'P171')).filter(id => /^Q\d+$/.test(id)))]; await fetchEntities(parents)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), known = db.prepare('SELECT 1 FROM nodes WHERE id=?'), currentScan = scan.prepare('SELECT item,status,col_ids FROM targets WHERE node=?')
  const exactLink = db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?')
  const heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?'), existing = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?')
  const ranks = { species: 'Q7432', genus: 'Q34740' }, groups = new Map()
  for (const row of rows) {
    const source = node.get(row.node), parent = source?.parent_id ? node.get(source.parent_id) : null, scanned = currentScan.get(row.node), item = `https://www.wikidata.org/entity/${row.actualItem}`
    if (!source || !parent || !ranks[source.rank] || scanned?.status !== 'checked' || scanned.item !== row.item || exactLink.get(row.node)) continue
    const colIds = values(row.item, 'P10585')
    if (colIds.includes(row.node) || colIds.some(id => id !== row.node && known.get(id))) continue
    if (!values(row.item, 'P225').includes(source.name) || !values(row.item, 'P105').includes(ranks[source.rank])) continue
    const targetCols = values(row.actualItem, 'P10585'), targetNames = values(row.actualItem, 'P225')
    const formationRedirect = row.actualItem !== row.item && values(row.actualItem, 'P31').includes('Q736917')
    const publicationRedirect = row.actualItem !== row.item && values(row.actualItem, 'P31').includes('Q13442814')
    const contextualRedirect = formationRedirect || publicationRedirect
    if (targetCols.some(id => id !== row.node && known.get(id)) || (!contextualRedirect && !values(row.actualItem, 'P105').includes(ranks[source.rank]))) continue
    const closeName = targetNames.find(name => similarTaxonNames(source.name, name) || (source.rank === 'species' && similarSpeciesInflection(source.name, name)))
    const targetName = contextualRedirect ? row.targetTitle : row.actualItem === row.item ? source.name : (closeName ?? targetNames[0])
    if (!targetName) continue
    const targetParents = values(row.actualItem, 'P171')
    const matchedParents = values(row.item, 'P171').filter(id => (contextualRedirect || targetParents.includes(id)) && values(id, 'P225').includes(parent.name))
    if (!matchedParents.length || heldUrl.get(row.node, row.url) || heldItem.get(row.node, item) || badUrl.get(row.url) || badItem.get(row.url, item) || existing.get(row.node, item, row.url)) continue
    if (!groups.has(row.node)) groups.set(row.node, [])
    groups.get(row.node).push({ ...row, source, parent, matchedParents, colIds, targetCols, targetName, relation: formationRedirect ? 'geological-formation-redirect' : publicationRedirect ? 'scientific-publication-redirect' : row.actualItem === row.item ? 'name-parent-unverified' : closeName ? 'same-parent-rank-alternate' : 'same-parent-rank-redirect', fullItem: item })
  }
  const candidates = [...groups.values()].map(options => options.find(row => row.url === preferredUrls(options.map(value => value.url))[0]))
  if (!candidates.length) { console.log(JSON.stringify({ status: 'nothing-to-import', reviewedPages: rows.length })); process.exit(0) }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('primary_related_source_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, pageChecksSha256: sha(pageBytes), exclusionsSha256: sha(exclusions), candidates, checkedAt }))
  writeFileSync(root + 'unlinked-name-parent-live-candidate-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const insert = audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.fullItem); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.actualItem) } else insert.run(c.url, c.fullItem, c.locale, c.targetTitle, 'matched', c.targetTitle, c.actualItem, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('primary_related_source_sha256').value, previous); const insert = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) insert.run(c.node, `https://www.wikidata.org/entity/${c.item}`, `https://${c.locale}.wikipedia.org/wiki/${encodeURIComponent(c.title.replaceAll(' ', '_'))}`, c.fullItem, c.url, c.targetName, JSON.stringify([c.relation]), JSON.stringify(c.targetCols)); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.length, proofSha256: sha(proof) }))
} finally { scan.close(); audit.close(); db.close() }
