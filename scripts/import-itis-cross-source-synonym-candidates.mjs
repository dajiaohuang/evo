import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replaceAll(/\p{M}/gu, '').toLocaleLowerCase('en-US').replaceAll(/[^a-z0-9]+/g, ' ').trim()
try {
  checkPageAudit(audit, db, exclusions)
  const inventoryBytes = readFileSync(root + 'itis-cross-source-synonym-inventory-20261031-v2.json')
  const titleBytes = readFileSync(root + 'itis-cross-source-synonym-title-candidates-20261031.json')
  const pageBytes = readFileSync(root + 'itis-cross-source-synonym-page-checks-20261031.json')
  const itemBytes = readFileSync(root + 'itis-cross-source-synonym-item-checks-20261031.json')
  const inventory = JSON.parse(inventoryBytes), titles = JSON.parse(titleBytes), pages = JSON.parse(pageBytes), items = JSON.parse(itemBytes)
  assert.equal(titles.inventorySha256, sha(inventoryBytes)); assert.equal(pages.sourceSha256, sha(titleBytes)); assert.equal(items.sourceSha256, sha(pageBytes))
  const getNode = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  const sameName = db.prepare("SELECT id FROM nodes WHERE name=? AND rank='species' AND id<>? LIMIT 1")
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
  const heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const groups = new Map(), synonymNodes = new Map()
  for (const row of items.rows) {
    if (row.status !== 'available' || !row.item || !row.claims || row.claims.missing || row.nodeInfo?.rank !== 'species') continue
    if (!row.claims.ranks.includes('Q7432') || !row.claims.names.some(name => normalize(name) === normalize(row.name))) continue
    if (row.claims.colIds.some(id => id !== row.node && getNode.get(id))) continue
    if (row.claims.names.some(name => sameName.get(name, row.node))) continue
    const item = `https://www.wikidata.org/entity/${row.item}`
    if (heldItem.get(row.node, item) || heldUrl.get(row.node, row.url) || badUrl.get(row.url) || badItem.get(row.url, item)) continue
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(row.url, item)
    if (existing && (!['matched', 'snapshot-matched'].includes(existing.status) || existing.actual_item !== row.item)) continue
    const key = `${row.node}\0${row.item}`
    if (!groups.has(key)) groups.set(key, { node: row.node, source: row.nodeInfo.name, synonym: row.name, item: row.item, targetCols: row.claims.colIds, sourceTaxonId: row.sourceTaxonId, sourceNameId: row.sourceNameId, pages: [] })
    groups.get(key).pages.push({ url: row.url, locale: row.locale, title: row.canonicalTitle })
    if (!synonymNodes.has(row.name)) synonymNodes.set(row.name, new Set())
    synonymNodes.get(row.name).add(row.node)
  }
  const candidates = [...groups.values()].filter(group => synonymNodes.get(group.synonym).size === 1).map(group => {
    const selected = preferredUrls(group.pages.map(page => page.url))[0]
    return { ...group, pages: group.pages.filter(page => page.url === selected) }
  })
  assert.ok(candidates.length > 0)
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_cross_source_sha256'").get(), undefined)
  for (const c of candidates) assert.ok(inventory.values.some(row => row.node === c.node && row.name === c.synonym && row.sourceTaxonId === c.sourceTaxonId && row.status === 'synonym'))
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ inventorySha256: sha(inventoryBytes), titleChecksSha256: sha(titleBytes), pageChecksSha256: sha(pageBytes), itemChecksSha256: sha(itemBytes), exclusionsSha256: sha(exclusions), candidates, checkedAt, interpretation: 'Exact source name, rank and authorship crosswalk to ITIS; page name and rank match the ITIS synonym; identity remains unverified.' }))
  writeFileSync(root + 'itis-cross-source-candidates-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    for (const c of candidates) for (const page of c.pages) {
      const item = `https://www.wikidata.org/entity/${c.item}`
      const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(page.url, item)
      if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === c.item)
      else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(page.url, item, page.locale, c.synonym, 'matched', page.title, c.item, pages.checkedAt)
    }
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    db.exec('CREATE TABLE itis_cross_source_candidates (node_id TEXT NOT NULL, item TEXT NOT NULL, source_name TEXT NOT NULL, synonym_name TEXT NOT NULL, target_cols TEXT NOT NULL, pages TEXT NOT NULL, PRIMARY KEY(node_id,item))')
    const insert = db.prepare('INSERT INTO itis_cross_source_candidates VALUES(?,?,?,?,?,?)')
    for (const c of candidates) insert.run(c.node, `https://www.wikidata.org/entity/${c.item}`, c.source, c.synonym, JSON.stringify(c.targetCols), JSON.stringify(c.pages))
    db.prepare('INSERT INTO meta(key,value) VALUES(?,?)').run('itis_cross_source_sha256', sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', candidates: candidates.length, nodes: new Set(candidates.map(c => c.node)).size, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
