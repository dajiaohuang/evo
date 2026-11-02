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
const normalize = value => value.normalize('NFKC').toLocaleLowerCase('en-US').replaceAll('_', ' ').trim()
try {
  checkPageAudit(audit, db, exclusions)
  const inventoryBytes = readFileSync(root + 'itis-cross-source-synonym-inventory-20261031-v2.json')
  const pageBytes = readFileSync(root + 'itis-cross-source-synonym-page-checks-20261031.json')
  const itemBytes = readFileSync(root + 'itis-cross-source-synonym-item-checks-20261031.json')
  const inventory = JSON.parse(inventoryBytes), pageProof = JSON.parse(pageBytes), itemProof = JSON.parse(itemBytes)
  assert.equal(itemProof.sourceSha256, sha(pageBytes))
  const getNode = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  const sameName = db.prepare("SELECT 1 FROM nodes WHERE name=? AND rank='species' AND id<>? LIMIT 1")
  const existingCandidate = db.prepare('SELECT 1 FROM itis_cross_source_candidates WHERE node_id=? LIMIT 1')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  const names = new Map()
  for (const row of inventory.values) { if (!names.has(row.name)) names.set(row.name, new Set()); names.get(row.name).add(row.node) }
  const candidates = new Map()
  for (const row of itemProof.rows) {
    if (row.status !== 'available' || row.item || row.nodeInfo?.rank !== 'species') continue
    if (normalize(row.name) !== normalize(row.canonicalTitle) || names.get(row.name)?.size !== 1) continue
    if (existingCandidate.get(row.node) || sameName.get(row.name, row.node) || badUrl.get(row.url) || heldUrl.get(row.node, row.url)) continue
    assert.ok(inventory.values.some(value => value.node === row.node && value.name === row.name && value.sourceTaxonId === row.sourceTaxonId && value.status === 'synonym'))
    assert.equal(getNode.get(row.node)?.name, row.nodeInfo.name)
    const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(row.url)
    if (page && (!['available', 'snapshot-available'].includes(page.status) || page.actual_item)) continue
    const item = `Wikipedia:${row.locale}:${encodeURIComponent(row.canonicalTitle.replaceAll(' ', '_'))}`
    const key = `${row.node}\0${item}`
    candidates.set(key, { node: row.node, source: row.nodeInfo.name, synonym: row.name, item, sourceTaxonId: row.sourceTaxonId, sourceNameId: row.sourceNameId, page: { url: row.url, locale: row.locale, title: row.canonicalTitle } })
  }
  assert.ok(candidates.size > 0)
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_cross_unkeyed_sha256'").get(), undefined)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ inventorySha256: sha(inventoryBytes), pageChecksSha256: sha(pageBytes), itemChecksSha256: sha(itemBytes), exclusionsSha256: sha(exclusions), candidates: [...candidates.values()], checkedAt, interpretation: 'A unique ITIS synonym has an available same-title page without a Wikidata item; taxonomic identity remains unverified.' }))
  writeFileSync(root + 'itis-cross-source-unkeyed-candidates-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    for (const c of candidates.values()) {
      const old = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(c.page.url)
      if (old) assert.ok(['available', 'snapshot-available'].includes(old.status) && !old.actual_item)
      else audit.prepare('INSERT INTO unkeyed_pages(url,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?)').run(c.page.url, c.page.locale, c.synonym, 'available', c.page.title, null, pageProof.checkedAt)
    }
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    db.exec('CREATE TABLE itis_cross_unkeyed_candidates (node_id TEXT NOT NULL, item TEXT NOT NULL, source_name TEXT NOT NULL, synonym_name TEXT NOT NULL, target_cols TEXT NOT NULL, pages TEXT NOT NULL, PRIMARY KEY(node_id,item))')
    const insert = db.prepare('INSERT INTO itis_cross_unkeyed_candidates VALUES(?,?,?,?,?,?)')
    for (const c of candidates.values()) insert.run(c.node, c.item, c.source, c.synonym, '[]', JSON.stringify([c.page]))
    db.prepare('INSERT INTO meta(key,value) VALUES(?,?)').run('itis_cross_unkeyed_sha256', sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', candidates: candidates.size, nodes: new Set([...candidates.values()].map(c => c.node)).size, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
