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
const rows = [{ id: 'V93W3', name: 'Drosophila starki' }, { id: 'V99Q5', name: 'Drosophila stylipennis' }]
const targetItem = 'https://www.wikidata.org/entity/Q77849175'
const targetTitle = 'Drosophila bromeliae (artgrupp)'
const targetUrl = 'https://sv.wikipedia.org/wiki/Drosophila_bromeliae_(artgrupp)'
try {
  checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  for (const row of rows) {
    const found = node.get(row.id)
    assert.equal(found.name, row.name); assert.equal(found.rank, 'species'); assert.equal(node.get(found.parent_id)?.name, 'Drosophila')
    assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(row.id, targetItem, targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(row.id, targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(row.id, targetItem), undefined)
  }
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem), undefined)
  const titles = [targetTitle, ...rows.map(row => `${row.name} (artundergrupp)`)]
  const url = new URL('https://sv.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: titles.join('|'), maxlag: '5' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon link verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Page metadata HTTP ${response.status}`)
  const data = await response.json()
  if (data.error) throw new Error(JSON.stringify(data.error))
  const page = data.query?.pages?.find(value => value.title === targetTitle)
  assert.ok(page && !page.missing); assert.equal(page.pageprops?.wikibase_item, 'Q77849175'); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
  for (const row of rows) assert.ok(data.query.redirects?.some(redirect => redirect.from === `${row.name} (artundergrupp)` && redirect.to === targetTitle))
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, rows, targetItem, targetTitle, targetUrl, redirects: data.query.redirects, source: { title: 'Revision of the Drosophila bromeliae species group', url: 'https://www.biodiversitylibrary.org/bibliography/161197', locator: '2016 revision and species descriptions for D. starki and D. stylipennis', note: 'These are species in the group; the linked page concerns a species group, not either species.' }, checkedAt, exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'bromeliae-species-group-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, targetItem)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q77849175')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, targetItem, 'sv', targetTitle, 'matched', targetTitle, 'Q77849175', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    const add = db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)')
    for (const row of rows) add.run(row.id, `Wikipedia:sv:${row.name} (artundergrupp)`, `https://sv.wikipedia.org/wiki/${encodeURIComponent(row.name.replaceAll(' ', '_') + '_(artundergrupp)')}`, targetItem, targetUrl, 'Drosophila bromeliae species group', JSON.stringify(['published-species-group']), JSON.stringify([]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: rows.map(row => row.id), relation: 'species group', identity: 'unconfirmed', url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
