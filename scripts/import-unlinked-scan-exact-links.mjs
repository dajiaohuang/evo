import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { preferredUrls } from './wikipedia-col-synonym-options.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const nameParent = process.argv.includes('--name-parent')
const scan = new DatabaseSync(root + (nameParent ? 'unlinked-name-parent-wikipedia-scan.sqlite' : 'unlinked-live-wikipedia-scan.sqlite'), { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  assert.equal(scan.prepare("SELECT COUNT(*) n FROM targets WHERE status <> 'checked'").get().n, 0, 'Complete the scan before import')
  const checksBytes = readFileSync(root + (nameParent ? 'unlinked-name-parent-scan-page-checks.json' : 'unlinked-live-scan-page-checks.json')), checks = JSON.parse(checksBytes)
  assert.equal(checks.manifestSha256, scan.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value)
  const target = scan.prepare('SELECT item,status,col_ids FROM targets WHERE node=?'), known = db.prepare('SELECT id FROM nodes WHERE id=?')
  const heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
  const existing = db.prepare('SELECT item,url FROM exact_source_synonym_links WHERE node_id=?'), groups = new Map()
  for (const row of checks.checks) {
    if (row.status !== 'exact') continue
    const source = target.get(row.node), item = `https://www.wikidata.org/entity/${row.item}`
    assert.ok(known.get(row.node)); assert.equal(source?.status, 'checked'); assert.equal(source.item, row.item); assert.ok(JSON.parse(source.col_ids).includes(row.node)); assert.equal(row.actualItem, row.item)
    if (existing.get(row.node) || heldUrl.get(row.node, row.url) || heldItem.get(row.node, item) || badUrl.get(row.url) || badItem.get(row.url, item)) continue
    if (!groups.has(row.node)) groups.set(row.node, [])
    groups.get(row.node).push({ ...row, fullItem: item })
  }
  const candidates = [...groups.values()].map(rows => rows.find(row => row.url === preferredUrls(rows.map(value => value.url))[0]))
  if (!candidates.length) { console.log(JSON.stringify({ status: 'nothing-to-import', checkedPages: checks.checks.length })); process.exit(0) }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('exact_source_synonym_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, checksSha256: sha(checksBytes), exclusionsSha256: sha(exclusions), candidates, checkedAt }))
  writeFileSync(root + (nameParent ? 'unlinked-name-parent-scan-exact-import-proof.json' : 'unlinked-live-scan-exact-import-proof.json'), proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try { const insert = audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)'); for (const c of candidates) { const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, c.fullItem); if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, c.item) } else insert.run(c.url, c.fullItem, c.locale, c.title, 'matched', c.targetTitle, c.item, checkedAt) } audit.exec('COMMIT') } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('exact_source_synonym_sha256').value, previous); const insert = db.prepare('INSERT INTO exact_source_synonym_links(node_id,item,url) VALUES(?,?,?)'); for (const c of candidates) insert.run(c.node, c.fullItem, c.url); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'exact_source_synonym_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.length, proofSha256: sha(proof) }))
} finally { scan.close(); audit.close(); db.close() }
