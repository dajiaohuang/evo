import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const live = readFileSync(root + 'cross-inexact-unkeyed-live-checks.json'), parentage = readFileSync(root + 'cross-inexact-parentage-checks.json')
  const proofData = JSON.parse(parentage)
  assert.equal(proofData.sourceSha256, sha(live))
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), named = db.prepare('SELECT id FROM nodes WHERE name=?')
  const kingdom = id => { const seen = new Set(); while (id && !seen.has(id)) { seen.add(id); const n = node.get(id); if (!n) return null; if (n.rank === 'kingdom') return n.id; id = n.parent_id } return null }
  const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?'), held = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  const rows = []
  for (const row of proofData.rows) {
    if (!row.supported.length || row.actualPage?.item !== row.item || row.actualPage.missing || row.actualPage.disambiguation) continue
    const source = node.get(row.node), sourceKingdom = kingdom(row.node)
    if (!source || !sourceKingdom) continue
    const targets = row.others.map(id => node.get(id))
    if (targets.some(target => !target || target.name !== source.name || target.rank !== source.rank || !kingdom(target.id) || kingdom(target.id) === sourceKingdom)) continue
    const targetKingdoms = new Set(targets.map(target => kingdom(target.id)))
    const supported = row.supported.filter(parent => {
      const matches = named.all(parent.name)
      return matches.length && matches.every(match => targetKingdoms.has(kingdom(match.id))) && row.targetAncestors.some(path => path.some(value => value.name === parent.name))
    })
    if (!supported.length) continue
    const receipt = page.get(row.url)
    assert.ok(['available', 'snapshot-available'].includes(receipt?.status)); assert.equal(receipt.actual_item, row.item)
    if (!held.get(row.node, row.url)) rows.push({ node: row.node, item: row.item, url: row.url, others: row.others, supported })
  }
  assert.ok(rows.length)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, liveSha256: sha(live), parentageSha256: sha(parentage), exclusionsSha256: sha(exclusions), rows, createdAt: new Date().toISOString() }))
  writeFileSync(root + 'inexact-parentage-hold-proof.json', proof, { flag: 'wx' })
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
