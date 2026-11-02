import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = value => createHash('sha256').update(value).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const source = readFileSync(root + 'cross-authorship-unkeyed-candidates-evidence.json'), live = readFileSync(root + 'cross-authorship-unkeyed-live-checks.json'), gbif = readFileSync(root + 'homonym-authorship-gbif-checks.json')
  const evidence = JSON.parse(source), checks = JSON.parse(live), identities = JSON.parse(gbif)
  assert.equal(checks.sourceSha256, sha(source)); assert.equal(identities.sourceSha256, sha(source))
  const byNode = new Map(identities.results.map(row => [row.node, row]))
  const rows = []
  for (const row of checks.rows) {
    const result = byNode.get(row.node), sourceResult = result?.values.find(value => value.node === row.node)
    const target = result?.values.find(value => row.others.includes(value.node) && row.actualColIds.includes(value.node))
    if (!sourceResult || !target || sourceResult.matchType !== 'EXACT' || target.matchType !== 'EXACT' || target.status !== 'ACCEPTED' || !sourceResult.usageKey || !target.usageKey || sourceResult.usageKey === target.usageKey || sourceResult.acceptedUsageKey === target.usageKey) continue
    const original = evidence.rows.find(value => value.node === row.node && value.url === row.url)
    assert.ok(original); assert.notEqual(original.sourceNode.authorship, original.targetNodes.find(value => value.id === target.node).authorship)
    assert.equal(row.actualPage?.item, row.item); assert.ok(!row.actualPage?.missing && !row.actualPage?.disambiguation)
    const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(row.url)
    assert.ok(['available', 'snapshot-available'].includes(page?.status)); assert.equal(page.actual_item, row.item)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(row.node, row.url), undefined)
    rows.push({ node: row.node, url: row.url, item: row.item, sourceResult, target })
  }
  assert.ok(rows.length)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, sourceSha256: sha(source), liveSha256: sha(live), gbifSha256: sha(gbif), exclusionsSha256: sha(exclusions), rows, createdAt: new Date().toISOString() }))
  writeFileSync(root + 'authorship-unkeyed-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous)
    const insert = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const row of rows) insert.run(row.node, row.url)
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', links: rows.length, nodes: rows.map(row => row.node), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
