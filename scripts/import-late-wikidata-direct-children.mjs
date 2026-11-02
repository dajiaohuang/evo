import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'

const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const relatedMode = process.argv.includes('--related')
const source = readFileSync(root + 'late-uncovered-title-item-checks.json'), data = JSON.parse(source)
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), existing = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=?'), exact = db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?')
  const rows = data.rows.filter(r => r.status === 'available' && r.item && r.claims?.names?.length && r.claims.parents.length && r.kind === 'accepted' && r.name === r.nodeInfo.name && !existing.get(r.node) && !exact.get(r.node) && !r.claims.colIds.includes(r.node))
  const ids = [...new Set(rows.flatMap(r => [r.item, ...r.claims.parents]))].filter(id => /^Q\d+$/.test(id)), entities = {}, headers = { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; direct child verification)' }
  for (let i = 0; i < ids.length; i += 40) {
    const url = new URL('https://www.wikidata.org/w/api.php'); for (const [k,v] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(i,i+40).join('|'), maxlag: '10' })) url.searchParams.set(k,v)
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) }); assert.ok(response.ok); const result = await response.json(); assert.ok(!result.error); Object.assign(entities, result.entities)
  }
  const values = (id, prop) => (entities[id]?.claims?.[prop] ?? []).filter(v => v.rank !== 'deprecated' && v.mainsnak?.snaktype === 'value').map(v => v.mainsnak.datavalue.value?.id ?? v.mainsnak.datavalue.value).filter(Boolean)
  const groups = new Map()
  const rankIds = { species:'Q7432', genus:'Q34740', subfamily:'Q164280', tribe:'Q227936', subtribe:'Q3965313', family:'Q35409', superfamily:'Q2136103' }
  for (const r of rows) {
    const current = node.get(r.node), targetNames = values(r.item, 'P225'), targetCols = values(r.item, 'P10585')
    if (!current || !targetNames.length || targetCols.includes(r.node)) continue
    let matched
    if (!relatedMode) matched = values(r.item, 'P171').filter(id => values(id, 'P10585').includes(r.node) && values(id, 'P225').includes(current.name))
    else {
      const targetRanks = values(r.item, 'P105')
      if (!rankIds[current.rank] || !targetRanks.length || targetRanks.includes(rankIds[current.rank])) continue
      const sourceName = current.name.toLowerCase(), close = targetNames.some(name => { let i=0, other=name.toLowerCase(); while(i<sourceName.length && i<other.length && sourceName[i]===other[i]) i++; return i>=7 })
      if (!close) continue
      const ancestors = []; let parent=current
      for(let i=0;i<10 && parent?.parent_id;i++){ parent=node.get(parent.parent_id); if(parent) ancestors.push(parent) }
      matched = values(r.item, 'P171').filter(id => ancestors.some(a => values(id, 'P10585').includes(a.id) && values(id, 'P225').includes(a.name)))
    }
    if (!matched.length || (r.canonicalTitle === current.name && targetNames.every(name => name !== current.name))) continue
    const targetUrl = `https://${r.locale}.wikipedia.org/wiki/${encodeURIComponent(r.canonicalTitle.replaceAll(' ', '_'))}`, targetItem = `https://www.wikidata.org/entity/${r.item}`
    if (db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(r.node,targetUrl) || db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(r.node,targetItem) || db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl) || db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl,targetItem)) continue
    if (!groups.has(r.node)) groups.set(r.node, [])
    groups.get(r.node).push({ ...r, current, matched, targetName: targetNames[0], targetCols, targetUrl, targetItem })
  }
  const candidates = [...groups.values()].map(rows => rows.find(r => r.targetUrl === preferredUrls(rows.map(x => x.targetUrl))[0])), accepted = []
  for (const c of candidates) {
    const url = new URL(`https://${c.locale}.wikipedia.org/w/api.php`); for (const [k,v] of Object.entries({ action:'query', format:'json', formatversion:'2', prop:'pageprops', ppprop:'wikibase_item|disambiguation', redirects:'1', titles:c.name, maxlag:'10' })) url.searchParams.set(k,v)
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) }); assert.ok(response.ok); const result = await response.json(); assert.ok(!result.error)
    const page = result.query.pages.find(p => p.title === c.canonicalTitle)
    if (page && !page.missing && page.pageprops?.wikibase_item === c.item && !Object.hasOwn(page.pageprops ?? {}, 'disambiguation')) accepted.push(c)
  }
  if (!accepted.length) { console.log(JSON.stringify({ status:'nothing-to-import', checked: rows.length })); process.exit(0) }
  const previous = db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value, checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, sourceSha256:sha(source), exclusionsSha256:sha(exclusions), accepted, checkedAt }))
  writeFileSync(root + (relatedMode ? 'late-wikidata-related-rank-proof.json' : 'late-wikidata-direct-child-proof.json'), proof, { flag:'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { for (const c of accepted) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.targetUrl,c.targetItem); if (old) { assert.ok(['matched','snapshot-matched'].includes(old.status)); assert.equal(old.actual_item,c.item) } else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(c.targetUrl,c.targetItem,c.locale,c.canonicalTitle,'matched',c.canonicalTitle,c.item,checkedAt) } audit.exec('COMMIT') } catch(error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,previous); const insert=db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for(const c of accepted) insert.run(c.node,`Wikipedia:${c.locale}:${c.name}`,c.url,c.targetItem,c.targetUrl,c.targetName,JSON.stringify([relatedMode ? 'same-ancestor-different-rank' : 'wikidata-direct-child-page']),JSON.stringify(c.targetCols)); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256'); db.exec('COMMIT') } catch(error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({status:'imported',nodes:accepted.map(c=>c.node),proofSha256:sha(proof)}))
} finally { audit.close(); db.close() }
