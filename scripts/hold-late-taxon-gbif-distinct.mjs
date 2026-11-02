import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const bytes = readFileSync(root + 'late-taxon-gbif-checks.json'), data = JSON.parse(bytes)
  assert.equal(data.sourceSha256, sha(readFileSync(root + 'late-no-col-instance-checks.json')))
  const holds = data.pairs.filter(row => row.sourceMatch.matchType === 'EXACT' && row.targetMatch.matchType === 'EXACT' && row.sourceMatch.usageKey && row.targetMatch.usageKey && (row.sourceMatch.acceptedUsageKey ?? row.sourceMatch.usageKey) !== (row.targetMatch.acceptedUsageKey ?? row.targetMatch.usageKey)).map(row => ({ node: row.node, item: `https://www.wikidata.org/entity/${row.item}`, reason: 'GBIF resolves source and target names to different accepted taxa', source: row.source, target: row.target }))
  assert.equal(holds.length, 3)
  const key = 'ncbi_candidate_identity_holds_sha256', meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get(key).value; assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, evidenceSha256: sha(bytes), exclusionsSha256: sha(exclusions), holds, checkedAt: new Date().toISOString() }))
  writeFileSync(root + 'late-taxon-gbif-distinct-holds.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get(key).value, previous); const insert = db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'); for (const row of holds) insert.run(row.node, row.item, row.reason); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), key); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status:'held', holds }))
} finally { audit.close(); db.close() }
