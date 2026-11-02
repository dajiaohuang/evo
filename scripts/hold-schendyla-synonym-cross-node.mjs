import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = value => createHash('sha256').update(value).digest('hex')
const node = '4V7N9', qid = 'Q4355462', urls = ['ceb', 'sv', 'war'].map(locale => `https://${locale}.wikipedia.org/wiki/Schendyla_zonalis`)
try {
  checkPageAudit(audit, db, exclusions)
  const previousProof = readFileSync(root + 'schendyla-cross-node-candidate-hold-proof.json')
  const prior = JSON.parse(previousProof)
  assert.equal(prior.node.id, node); assert.equal(prior.other.id, '4V7NP'); assert.equal(prior.qid, qid)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?')
  const previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.equal(previous, sha(previousProof))
  assert.ok(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node, `https://www.wikidata.org/entity/${qid}`))
  const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
  const held = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  for (const url of urls) {
    const row = page.get(url); assert.ok(['available', 'snapshot-available'].includes(row?.status)); assert.equal(row.actual_item, qid)
    assert.equal(held.get(node, url), undefined)
  }
  const proof = Buffer.from(JSON.stringify({ previous, node, qid, urls, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'schendyla-synonym-cross-node-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous)
    const insert = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const url of urls) insert.run(node, url)
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', node, qid, urls: urls.length, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
