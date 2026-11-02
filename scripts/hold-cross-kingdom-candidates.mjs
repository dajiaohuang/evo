import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const sha = value => createHash('sha256').update(value).digest('hex')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const group = process.argv[2] ?? 'kingdom'
assert.ok(['kingdom', 'phylum', 'class', 'order', 'namekingdom', 'namephylum', 'nameclass', 'nameorder'].includes(group))
const selectedClass = process.argv[3] ?? 'Aves'
assert.ok(['Aves', 'Insecta'].includes(selectedClass))
try {
  checkPageAudit(audit, db, exclusions)
  const source = readFileSync(root + `cross-${group}-unkeyed-candidates-evidence.json`)
  const checked = readFileSync(root + `cross-${group}-unkeyed-live-checks.json`)
  const evidence = JSON.parse(source), checks = JSON.parse(checked)
  assert.equal(checks.sourceSha256, sha(source)); assert.equal(checks.rows.length, evidence.rows.length)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const held = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  const auditPage = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
  const ancestor = id => { const seen = new Set(); while (id && !seen.has(id)) { seen.add(id); const row = node.get(id); if (!row) return null; if (row.rank === (group.startsWith('name') ? group.slice(4) : group)) return row.id; id = row.parent_id } return null }
  const className = id => { const seen = new Set(); while (id && !seen.has(id)) { seen.add(id); const row = node.get(id); if (!row) return null; if (row.rank === 'class') return row.name; id = row.parent_id } return null }
  const rows = []
  for (const row of checks.rows) {
    if (!row.actualPage || row.actualPage.missing || row.actualPage.disambiguation || row.actualPage.item !== row.item || !row.others.some(id => row.actualColIds.includes(id))) continue
    const sourceNode = node.get(row.node), sourceKingdom = ancestor(row.node)
    assert.ok(sourceNode && sourceKingdom)
    if (group === 'nameorder' && className(row.node) !== selectedClass) continue
    const others = row.others.filter(id => row.actualColIds.includes(id))
    assert.ok(others.length)
    for (const id of others) { const target = node.get(id); assert.ok(target && (group.startsWith('name') || target.name === sourceNode.name) && target.rank === sourceNode.rank); assert.ok(ancestor(id) && ancestor(id) !== sourceKingdom) }
    if (group === 'nameorder') assert.ok(others.every(id => className(id) === selectedClass))
    const page = auditPage.get(row.url)
    assert.ok(['available', 'snapshot-available'].includes(page?.status)); assert.equal(page.actual_item, row.item)
    if (!held.get(row.node, row.url)) rows.push({ node: row.node, url: row.url, item: row.item, others })
  }
  if (group === 'nameorder') assert.ok(rows.length > 0)
  else assert.equal(rows.length, checks.verifiedCount)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, evidenceSha256: sha(source), liveChecksSha256: sha(checked), exclusionsSha256: sha(exclusions), rows, createdAt: new Date().toISOString() }))
  const proofGroup = group === 'nameorder' && selectedClass !== 'Aves' ? `${group}-${selectedClass.toLowerCase()}` : group
  writeFileSync(root + `cross-${proofGroup}-unkeyed-hold-proof.json`, proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous)
    const insert = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const row of rows) insert.run(row.node, row.url)
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', links: rows.length, nodes: new Set(rows.map(row => row.node)).size, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
