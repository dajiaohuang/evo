import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const sha = value => createHash('sha256').update(value).digest('hex')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get('8NT45')
  assert.equal(node.name, 'Kamia'); assert.equal(node.rank, 'genus')
  const url = 'https://hr.wikipedia.org/wiki/Kamia'
  const response = await fetch('https://hr.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops%7Ccategories&cllimit=100&redirects=1&titles=Kamia', { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity check)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok)
  const result = await response.json(); assert.ok(!result.error && !result.continue)
  const page = result.query.pages[0]
  assert.equal(page.title, 'Kamia Indijanci'); assert.ok(page.categories.some(c => c.title === 'Kategorija:Yuman'))
  const key = 'candidate_identity_held_urls_sha256', meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get(key).value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ node, url, previous, checkedAt: new Date().toISOString(), query: result.query }))
  writeFileSync(root + 'late-kamia-homonym-hold.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get(key).value, previous)
    db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)').run(node.id, url)
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), key)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', node: node.id, url, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
