import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const candidates = [
  { node: '52F', source: 'Danubitaceae', sourceItem: 'Q5221281', target: 'Danubitoidea', targetItem: 'Q139499030', parentItem: 'Q1054661' },
  { node: '622P5', source: 'Otocerataceae', sourceItem: 'Q7108915', target: 'Otoceratoidea', targetItem: 'Q35075994', parentItem: 'Q7108916' },
]
const fetchJson = async url => { const r = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon relationship checks)' }, signal: AbortSignal.timeout(30000) }); assert.ok(r.ok); const d = await r.json(); assert.ok(!d.error); return d }
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const sample = readFileSync(root + 'unlinked-live-wikipedia-sitelinks-spread-sample.json'), sampled = JSON.parse(sample)
  const query = new URL('https://www.wikidata.org/w/api.php')
  for (const [k, v] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: candidates.flatMap(c => [c.sourceItem, c.targetItem]).join('|'), maxlag: '10' })) query.searchParams.set(k, v)
  const entities = (await fetchJson(query)).entities
  const vals = (id, p) => (entities[id]?.claims?.[p] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value)
  const pageUrl = new URL('https://en.wikipedia.org/w/api.php')
  for (const [k, v] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: candidates.map(c => c.source).join('|'), redirects: '1', maxlag: '10' })) pageUrl.searchParams.set(k, v)
  const pages = (await fetchJson(pageUrl)).query
  for (const c of candidates) {
    const node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(c.node); assert.equal(node?.name, c.source); assert.equal(node.rank, 'superfamily')
    const sampledRow = sampled.values.find(row => row.node === c.node); assert.equal(sampledRow?.item, c.sourceItem); assert.ok(sampledRow.colIds.includes(c.node))
    for (const [id, name] of [[c.sourceItem, c.source], [c.targetItem, c.target]]) { assert.ok(vals(id, 'P225').includes(name)); assert.ok(vals(id, 'P105').includes('Q2136103')); assert.ok(vals(id, 'P171').includes(c.parentItem)) }
    assert.ok(vals(c.sourceItem, 'P10585').includes(c.node)); assert.ok(pages.redirects.some(r => r.from === c.source && r.to === c.target))
    const page = pages.pages.find(p => p.title === c.target); assert.equal(page?.pageprops?.wikibase_item, c.targetItem); assert.ok(!Object.hasOwn(page.pageprops ?? {}, 'disambiguation'))
    c.url = `https://en.wikipedia.org/wiki/${c.target}`; c.item = `https://www.wikidata.org/entity/${c.targetItem}`; c.original = `https://en.wikipedia.org/wiki/${c.source}`
    assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(c.node, c.item, c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.url), undefined)
  }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('primary_related_source_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, sampleSha256: sha(sample), exclusionsSha256: sha(exclusions), candidates, checkedAt }))
  writeFileSync(root + 'ammonoid-related-candidates-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const insert = audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) { const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.item); if (existing) { assert.ok(['matched', 'snapshot-matched'].includes(existing.status)); assert.equal(existing.actual_item, c.targetItem) } else insert.run(c.url, c.item, 'en', c.target, 'matched', c.target, c.targetItem, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('primary_related_source_sha256').value, previous); const insert = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) insert.run(c.node, `https://www.wikidata.org/entity/${c.sourceItem}`, c.original, c.item, c.url, c.target, JSON.stringify(['same-parent-rank-alternate']), JSON.stringify([])); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.map(c => c.node), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
