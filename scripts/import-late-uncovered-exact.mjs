import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const inventory = readFileSync(root + 'late-uncovered-title-inventory.json'), titles = readFileSync(root + 'late-uncovered-title-candidates.json'), pages = readFileSync(root + 'late-uncovered-title-page-checks.json'), items = readFileSync(root + 'late-uncovered-title-item-checks.json')
  const inventoryData = JSON.parse(inventory), titleData = JSON.parse(titles), pageData = JSON.parse(pages), itemData = JSON.parse(items)
  assert.equal(titleData.inventorySha256, sha(inventory)); assert.equal(pageData.sourceSha256, sha(titles)); assert.equal(itemData.sourceSha256, sha(pages))
  const node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?'), known = db.prepare('SELECT 1 FROM nodes WHERE id=?'), existing = db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?'), heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const groups = new Map()
  for (const row of itemData.rows) {
    if (row.status !== 'available' || !row.item || !row.claims?.colIds?.includes(row.node)) continue
    const source = node.get(row.node), item = `https://www.wikidata.org/entity/${row.item}`, url = `https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.canonicalTitle.replaceAll(' ', '_'))}`
    assert.ok(source && inventoryData.values.some(value => value.node === row.node && value.name === row.name))
    if (row.claims.colIds.some(id => id !== row.node && known.get(id)) || existing.get(row.node) || badUrl.get(url) || badItem.get(url, item) || heldUrl.get(row.node, url) || heldItem.get(row.node, item)) continue
    if (!groups.has(row.node)) groups.set(row.node, [])
    groups.get(row.node).push({ node: row.node, item, url, locale: row.locale, title: row.canonicalTitle, sourceName: row.name, colIds: row.claims.colIds })
  }
  const candidates = []
  for (const rows of groups.values()) {
    if (new Set(rows.map(row => row.item)).size !== 1) continue
    candidates.push(rows.find(row => row.url === preferredUrls(rows.map(value => value.url))[0]))
  }
  assert.ok(candidates.length)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('exact_source_synonym_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, inventorySha256: sha(inventory), titleSha256: sha(titles), pageSha256: sha(pages), itemSha256: sha(items), exclusionsSha256: sha(exclusions), candidates, checkedAt }))
  writeFileSync(root + 'late-uncovered-exact-import-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const insert = audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.item); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.item.split('/').at(-1)) } else insert.run(c.url, c.item, c.locale, c.title, 'matched', c.title, c.item.split('/').at(-1), checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('exact_source_synonym_sha256').value, previous); const insert = db.prepare('INSERT INTO exact_source_synonym_links(node_id,item,url) VALUES(?,?,?)'); for (const c of candidates) insert.run(c.node, c.item, c.url); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'exact_source_synonym_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.length, candidates, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
