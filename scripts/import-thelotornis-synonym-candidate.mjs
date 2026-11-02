import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const nodeId = 'VPHL5', item = 'https://www.wikidata.org/entity/Q543759', targetUrl = 'https://fr.wikipedia.org/wiki/Xyelodontophis_uluguruensis'
async function query(base, params) {
  const url = new URL(base)
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Metadata HTTP ${response.status}`)
  const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error)); return data
}
try {
  checkPageAudit(audit, db, exclusions)
  const source = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(nodeId)
  assert.equal(source.name, 'Thelotornis uluguruensis'); assert.equal(source.rank, 'species')
  const bytes = readFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json')
  const evidence = JSON.parse(bytes).rows.find(row => row.node === nodeId && row.item === 'Q14178445' && row.status === 'available')
  assert.equal(evidence?.nodeInfo?.name, source.name)
  assert.ok(evidence.claims.names.includes('Xyelodontophis')); assert.ok(evidence.claims.ranks.includes('Q34740'))
  const data = await query('https://www.wikidata.org/w/api.php', { action: 'wbgetentities', format: 'json', props: 'claims', ids: 'Q543759', maxlag: '10' })
  const claims = data.entities?.Q543759?.claims
  const values = prop => (claims?.[prop] ?? []).filter(x => x.rank !== 'deprecated' && x.mainsnak?.snaktype === 'value').map(x => x.mainsnak.datavalue?.value?.id ?? x.mainsnak.datavalue?.value).filter(Boolean)
  assert.ok(values('P225').includes('Xyelodontophis uluguruensis')); assert.ok(values('P105').includes('Q7432')); assert.ok(values('P171').includes('Q14178445'))
  const colIds = values('P10585')
  assert.ok(colIds.every(id => id === nodeId || !db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
  const metadata = await query('https://fr.wikipedia.org/w/api.php', { action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: 'Xyelodontophis uluguruensis', redirects: '1', maxlag: '5' })
  const page = metadata.query?.pages?.[0]
  assert.equal(page?.title, 'Xyelodontophis uluguruensis'); assert.equal(page.missing, undefined)
  assert.equal(page.pageprops?.wikibase_item, 'Q543759'); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
  assert.equal(db.prepare('SELECT 1 FROM reptile_synonym_candidates WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(nodeId, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, item), undefined)
  const previous = db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, item, targetUrl, scientificSynonym: 'Xyelodontophis uluguruensis Broadley & Wallach, 2002', targetColIds: colIds, sourceChecksSha256: sha(bytes), sources: [{ url: 'https://reptile-database.reptarium.cz/Thelotornis/uluguruensis', locator: 'Synonym and type species' }, { url: 'https://doi.org/10.1017/S0968047002000079', locator: 'Original description' }], checkedAt, exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'thelotornis-synonym-candidate-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, item)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q543759')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, item, 'fr', page.title, 'matched', page.title, 'Q543759', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO reptile_synonym_candidates(node_id,item,source_name,synonym_name,target_cols,pages) VALUES(?,?,?,?,?,?)').run(nodeId, item, source.name, 'Xyelodontophis uluguruensis', JSON.stringify(colIds), JSON.stringify([{ url: targetUrl, item: 'Q543759', available: true }]))
    db.prepare("UPDATE meta SET value=? WHERE key='reptile_synonym_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: nodeId, item, url: targetUrl, targetExternalIds: colIds, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
