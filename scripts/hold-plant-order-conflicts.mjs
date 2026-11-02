import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const group = process.argv[2] ?? 'plant'
assert.ok(['plant', 'other'].includes(group))
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const source = readFileSync(root + `cross-${group}-order-authorship-evidence.json`), gbif = readFileSync(root + `${group}-order-authorship-gbif-checks.json`), checks = JSON.parse(gbif), evidence = JSON.parse(source)
  assert.equal(checks.sourceSha256, sha(source)); assert.equal(checks.results.length, evidence.rows.length)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?'), held = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  const rows = []
  for (let i = 0; i < evidence.rows.length; i++) {
    const row = evidence.rows[i], result = checks.results[i], sourceResult = result.values.find(value => value.node === row.node)
    const target = result.values.find(value => row.others.includes(value.node) && row.actualColIds.includes(value.node))
    if (!sourceResult || !target || sourceResult.matchType !== 'EXACT' || target.matchType !== 'EXACT' || sourceResult.status !== 'ACCEPTED' || target.status !== 'ACCEPTED' || !sourceResult.usageKey || !target.usageKey || sourceResult.usageKey === target.usageKey) continue
    const sourceNode = node.get(row.node), targetNode = node.get(target.node)
    if (!sourceNode || !targetNode || sourceNode.rank !== 'species' || targetNode.rank !== 'species' || sourceResult.canonicalName !== sourceNode.name || target.canonicalName !== targetNode.name) continue
    if (sourceNode.name.split(/\s+/).at(-1).toLowerCase() === targetNode.name.split(/\s+/).at(-1).toLowerCase()) continue
    assert.equal(row.actualPage?.item, row.item); assert.ok(!row.actualPage?.missing && !row.actualPage?.disambiguation)
    const receipt = page.get(row.url); assert.ok(['available', 'snapshot-available'].includes(receipt?.status)); assert.equal(receipt.actual_item, row.item)
    if (!held.get(row.node, row.url)) rows.push({ node: row.node, url: row.url, item: row.item, sourceResult, target })
  }
  assert.ok(rows.length)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, sourceSha256: sha(source), gbifSha256: sha(gbif), exclusionsSha256: sha(exclusions), rows, createdAt: new Date().toISOString() }))
  writeFileSync(root + `${group}-order-conflicts-hold-proof.json`, proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous); const insert = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)'); for (const row of rows) insert.run(row.node, row.url); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', links: rows.length, nodes: new Set(rows.map(row => row.node)).size, checked: evidence.rows.length, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
