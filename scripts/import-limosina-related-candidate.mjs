import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const nodeId = 'CP263', targetId = '7G8D8', item = 'https://www.wikidata.org/entity/Q14269696'
const originalUrl = 'https://pl.wikipedia.org/wiki/Limosina_setaria'
const targetUrl = 'https://ceb.wikipedia.org/wiki/Xenolimosina_setaria'
try {
  checkPageAudit(audit, db, exclusions)
  const getNode = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  const source = getNode.get(nodeId), target = getNode.get(targetId)
  assert.equal(source.name, 'Limosina (Scotophilella) setaria'); assert.equal(target.name, 'Xenolimosina setaria')
  assert.equal(source.rank, 'species'); assert.equal(target.rank, 'species')
  const inventoryBytes = readFileSync(root + 'diptera-archive-new-synonym-inventory-20261031-v2.json')
  const evidence = JSON.parse(inventoryBytes).values.find(row => row.node === nodeId && row.name === 'Limosina setaria')
  assert.equal(evidence?.authorship, 'Duda, 1918')
  const checksBytes = readFileSync(root + 'diptera-archive-synonym-item-checks-20261031.json')
  const found = JSON.parse(checksBytes).rows.find(row => row.node === nodeId && row.url === originalUrl && row.status === 'available')
  assert.equal(found?.item, 'Q14269696'); assert.ok(found.claims.names.includes(target.name)); assert.ok(found.claims.colIds.includes(targetId))
  const page = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, item)
  assert.ok(['matched', 'snapshot-matched'].includes(page?.status)); assert.equal(page.actual_item, 'Q14269696')
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(nodeId, item, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(nodeId, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, target: { ...target }, originalUrl, targetUrl, item, synonym: evidence.name, synonymAuthorship: evidence.authorship, inventorySha256: sha(inventoryBytes), checksSha256: sha(checksBytes), research: { url: 'https://doi.org/10.3406/bsef.2000.16706', locator: 'Page 477: type specimens and synonymy', interpretation: 'The study considers Duda’s 1918 Limosina name synonymous with Xenolimosina setaria (Villeneuve, 1918); both remain separate frozen tree nodes.' }, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'limosina-related-candidate-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(nodeId, 'Wikipedia:pl:Limosina_setaria', originalUrl, item, targetUrl, target.name, JSON.stringify(['published-synonym-split']), JSON.stringify([targetId]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: nodeId, targetNode: targetId, url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
