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
const sourceId = 'CRXVS', childId = 'CRXVT', sourceItem = 'https://www.wikidata.org/entity/Q111353415', targetItem = 'https://www.wikidata.org/entity/Q135672333'
const originalUrl = 'https://en.wikipedia.org/wiki/Denitrificimonas', targetUrl = 'https://en.wikipedia.org/wiki/Denitrificimonas_caeni'
try {
  checkPageAudit(audit, db, exclusions)
  const get = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const source = get.get(sourceId), child = get.get(childId)
  assert.equal(source.name, 'Denitrificimonas'); assert.equal(source.rank, 'genus')
  assert.equal(child.name, 'Denitrificimonas caeni'); assert.equal(child.rank, 'species'); assert.equal(child.parent_id, source.id)
  const origin = audit.prepare('SELECT status,actual_item,target_title FROM jobs WHERE url=? AND item=?').get(originalUrl, sourceItem)
  assert.equal(origin?.status, 'identity-conflict'); assert.equal(origin.actual_item, 'Q135672333'); assert.equal(origin.target_title, child.name)
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(sourceId, targetItem, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(sourceId, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(sourceId, targetItem), undefined)
  const url = new URL('https://en.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: child.name, maxlag: '5' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy link verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Page metadata: HTTP ${response.status}`)
  const data = await response.json()
  if (data.error) throw new Error(JSON.stringify(data.error))
  const page = data.query?.pages?.[0]
  assert.equal(page?.title, child.name); assert.equal(page.missing, undefined)
  assert.equal(page.pageprops?.wikibase_item, 'Q135672333'); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, child: { ...child }, sourceItem, targetItem, originalUrl, targetUrl, page: { title: page.title, item: page.pageprops.wikibase_item }, checkedAt, exclusionsSha256: sha(exclusions), qualification: 'Page title matches a tree child; the target entity has no scientific name or rank claims, so identity remains unconfirmed.' }))
  writeFileSync(root + 'denitrificimonas-related-candidate-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, targetItem)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q135672333')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, targetItem, 'en', child.name, 'matched', page.title, 'Q135672333', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(sourceId, sourceItem, originalUrl, targetItem, targetUrl, child.name, JSON.stringify(['tree-child']), JSON.stringify([]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: sourceId, child: childId, identity: 'unconfirmed', url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
