import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const nodeId = 'V7F7Z', item = 'https://www.wikidata.org/entity/Q3242192', targetUrl = 'https://en.wikipedia.org/wiki/Lipinia_venemai'
try {
  checkPageAudit(audit, db, exclusions)
  const source = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(nodeId)
  assert.equal(source.name, 'Ornithuroscincus venemai'); assert.equal(source.rank, 'species')
  const inventory = readFileSync(root + 'reptiledb-vernacular-inventory-20261031.json'), titles = readFileSync(root + 'reptiledb-vernacular-title-candidates-20261031.json'), pages = readFileSync(root + 'reptiledb-vernacular-page-checks-20261031.json'), items = readFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json')
  assert.equal(JSON.parse(titles).inventorySha256, sha(inventory)); assert.equal(JSON.parse(pages).sourceSha256, sha(titles)); assert.equal(JSON.parse(items).sourceSha256, sha(pages))
  const candidate = JSON.parse(items).rows.find(row => row.node === nodeId && row.item === 'Q3242192' && row.status === 'available')
  assert.equal(candidate?.title, "Brongersma's Lipinia"); assert.equal(candidate.sourceTaxonId, '2837c85c-9119-fb97-b688-58eb71ae8e84')
  assert.ok(candidate.claims.names.includes('Lipinia venemai')); assert.ok(candidate.claims.ranks.includes('Q7432'))
  assert.ok(candidate.claims.colIds.every(id => id === nodeId || !db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
  assert.equal(db.prepare('SELECT 1 FROM reptile_synonym_candidates WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(nodeId, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, item), undefined)
  const url = new URL('https://en.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: 'Lipinia venemai', redirects: '1', maxlag: '5' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; reptile link verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Page metadata HTTP ${response.status}`)
  const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
  const page = data.query?.pages?.[0]
  assert.equal(page?.title, 'Lipinia venemai'); assert.equal(page.missing, undefined); assert.equal(page.pageprops?.wikibase_item, 'Q3242192'); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
  const previous = db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, targetItem: item, targetUrl, scientificSynonym: 'Lipinia venemai Brongersma, 1953', targetColIds: candidate.claims.colIds, itemChecksSha256: sha(items), sources: [{ url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T42484939A42484944.en', locator: 'Taxonomy and synonyms' }, { url: 'https://reptile-database.reptarium.cz/Ornithuroscincus/venemai', locator: 'Synonym' }], checkedAt, exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'reptiledb-venemai-candidate-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, item)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q3242192')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, item, 'en', 'Lipinia venemai', 'matched', page.title, 'Q3242192', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO reptile_synonym_candidates(node_id,item,source_name,synonym_name,target_cols,pages) VALUES(?,?,?,?,?,?)').run(nodeId, item, source.name, 'Lipinia venemai', JSON.stringify(candidate.claims.colIds), JSON.stringify([{ url: targetUrl, item: 'Q3242192', available: true }]))
    db.prepare("UPDATE meta SET value=? WHERE key='reptile_synonym_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: nodeId, item, url: targetUrl, targetExternalIds: candidate.claims.colIds, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
