import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite'), scan = new DatabaseSync(root + 'unlinked-live-wikipedia-scan.sqlite', { readOnly: true })
const c = { node: '37ND4', source: 'Drepatelodes umbrillinea', sourceItem: 'Q13477639', target: 'Drepatelodes umbrilinea', targetItem: 'Q118496597', parentItem: 'Q10268772' }
const fetchJson = async url => { const r = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon relationship checks)' }, signal: AbortSignal.timeout(30000) }); assert.ok(r.ok); const d = await r.json(); assert.ok(!d.error); return d }
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const scanRow = scan.prepare('SELECT node,item,status,col_ids,links,checked_at FROM targets WHERE node=?').get(c.node)
  assert.equal(scanRow?.status, 'checked'); assert.equal(scanRow.item, c.sourceItem); assert.ok(JSON.parse(scanRow.col_ids).includes(c.node)); assert.ok(JSON.parse(scanRow.links).some(link => link.site === 'enwiki' && link.title === c.source))
  const source = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(c.node); assert.equal(source?.name, c.source); assert.equal(source.rank, 'species')
  const query = new URL('https://www.wikidata.org/w/api.php')
  for (const [k, v] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: [c.sourceItem, c.targetItem].join('|'), maxlag: '10' })) query.searchParams.set(k, v)
  const entities = (await fetchJson(query)).entities
  const vals = (id, p) => (entities[id]?.claims?.[p] ?? []).filter(x => x.rank !== 'deprecated' && x.mainsnak?.snaktype === 'value').map(x => x.mainsnak.datavalue.value?.id ?? x.mainsnak.datavalue.value)
  for (const [id, name] of [[c.sourceItem, c.source], [c.targetItem, c.target]]) { assert.ok(vals(id, 'P225').includes(name)); assert.ok(vals(id, 'P105').includes('Q7432')); assert.ok(vals(id, 'P171').includes(c.parentItem)) }
  assert.ok(vals(c.sourceItem, 'P10585').includes(c.node))
  const pageUrl = new URL('https://en.wikipedia.org/w/api.php')
  for (const [k, v] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: c.source, redirects: '1', maxlag: '10' })) pageUrl.searchParams.set(k, v)
  const pages = (await fetchJson(pageUrl)).query; assert.ok(pages.redirects.some(row => row.from === c.source && row.to === c.target))
  const page = pages.pages[0]; assert.equal(page.title, c.target); assert.equal(page.pageprops?.wikibase_item, c.targetItem); assert.ok(!Object.hasOwn(page.pageprops ?? {}, 'disambiguation'))
  c.url = `https://en.wikipedia.org/wiki/${c.target.replaceAll(' ', '_')}`; c.item = `https://www.wikidata.org/entity/${c.targetItem}`; c.original = `https://en.wikipedia.org/wiki/${c.source.replaceAll(' ', '_')}`
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(c.node, c.item, c.url), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.url), undefined)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('primary_related_source_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, scanRow, source, candidate: c, exclusionsSha256: sha(exclusions), checkedAt }))
  writeFileSync(root + 'drepatelodes-related-candidate-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.item); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.targetItem) } else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(c.url, c.item, 'en', c.target, 'matched', c.target, c.targetItem, checkedAt); audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('primary_related_source_sha256').value, previous); db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(c.node, `https://www.wikidata.org/entity/${c.sourceItem}`, c.original, c.item, c.url, c.target, JSON.stringify(['same-parent-rank-alternate']), JSON.stringify([])); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: c.node, target: c.url, proofSha256: sha(proof) }))
} finally { scan.close(); audit.close(); db.close() }
