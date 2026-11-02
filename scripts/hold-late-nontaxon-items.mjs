import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const evidence = readFileSync(root + 'late-no-col-instance-checks.json'), data = JSON.parse(evidence)
  assert.equal(data.sourceSha256, sha(readFileSync(root + 'late-uncovered-title-item-checks.json')))
  const classes = { Q5: 'human', Q11424: 'film', Q215380: 'musical group' }
  const pairs = new Map()
  for (const row of data.rows) {
    const type = row.instances.find(id => classes[id]); if (!type || row.taxonNames.length) continue
    const item = `https://www.wikidata.org/entity/${row.item}`
    pairs.set(`${row.node}:${item}`, { node: row.node, item, reason: `Wikipedia item is a ${classes[type]}, not a taxon`, instance: type })
  }
  const holds = [...pairs.values()]; assert.ok(holds.length)
  const key = 'ncbi_candidate_identity_holds_sha256', meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get(key).value; assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, evidenceSha256: sha(evidence), exclusionsSha256: sha(exclusions), holds, checkedAt: new Date().toISOString() }))
  writeFileSync(root + 'late-nontaxon-item-holds.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get(key).value, previous); const insert = db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'); for (const row of holds) insert.run(row.node, row.item, row.reason); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), key); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', pairs: holds.length, nodes: new Set(holds.map(row => row.node)).size, holds }))
} finally { audit.close(); db.close() }
