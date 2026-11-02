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
  const original = readFileSync(root + 'plant-order-conflicts-hold-proof.json'), prior = JSON.parse(original)
  const rows = prior.rows.filter(row => row.node === 'B3STC' && row.sourceResult.canonicalName === 'Buddleja volubilis' && row.target.canonicalName === 'Secamone volubilis')
  assert.equal(rows.length, 4)
  assert.ok(rows.every(row => row.sourceResult.requested.includes('Lam.') && row.target.requested.includes('Lam.')))
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.equal(previous, sha(original))
  const proof = Buffer.from(JSON.stringify({ previous, originalProofSha256: sha(original), reason: 'Shared original author and epithet require taxonomic review before excluding these links.', rows, createdAt: new Date().toISOString() }))
  writeFileSync(root + 'buddleja-shared-authorship-restore-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous)
    const remove = db.prepare('DELETE FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
    for (const row of rows) assert.equal(remove.run(row.node, row.url).changes, 1)
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'restored-candidates', links: rows.length, node: 'B3STC', proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
