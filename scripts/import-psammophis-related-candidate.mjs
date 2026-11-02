import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const originalUrl = 'https://en.wikipedia.org/wiki/Speckled_sand_racer'
const targetUrl = 'https://en.wikipedia.org/wiki/Psammophis_punctulatus'
const targetItem = 'https://www.wikidata.org/entity/Q3409434'
try {
  checkPageAudit(audit, db, exclusions)
  const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const source = getNode.get('C867J'), target = getNode.get('4NCY8')
  assert.equal(source.name, 'Psammophis trivirgatus')
  assert.equal(target.name, 'Psammophis punctulatus')
  assert.equal(source.rank, 'species'); assert.equal(target.rank, 'species')
  assert.equal(source.parent_id, target.parent_id)
  const checksBytes = readFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json')
  const evidence = JSON.parse(checksBytes).rows.find(row => row.node === source.id && row.url === originalUrl)
  assert.equal(evidence?.status, 'available'); assert.equal(evidence.item, 'Q3409434')
  assert.ok(evidence.claims.names.includes(target.name))
  const page = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, targetItem)
  assert.ok(['matched', 'snapshot-matched'].includes(page?.status)); assert.equal(page.actual_item, 'Q3409434')
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(source.id, targetItem, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(source.id, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(source.id, targetItem), undefined)
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, target: { ...target }, originalUrl, targetUrl, targetItem, sourceChecksSha256: sha(checksBytes), research: { title: 'The Herpetofauna of Sibiloi National Park, Kenya', url: 'https://amphibian-reptile-conservation.org/pdfs/Volume/Vol_17_nos_1-2/ARC_17_1-2_%5BGeneral_Section%5D_1-18_e324.pdf', interpretation: 'This published treatment recognizes P. punctulatus trivirgatus as a subspecies; the frozen tree treats P. trivirgatus and P. punctulatus as separate species.' }, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'psammophis-related-candidate-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(source.id, 'Wikipedia:en:Speckled_sand_racer', originalUrl, targetItem, targetUrl, target.name, JSON.stringify(['published-subspecies-treatment']), JSON.stringify([target.id]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: source.id, targetNode: target.id, relation: 'published-subspecies-treatment', url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
