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
const sourceItem = 'https://www.wikidata.org/entity/Q124831967', targetItem = 'https://www.wikidata.org/entity/Q96196038'
const originalUrl = 'https://en.wikipedia.org/wiki/Heterocorticium', targetUrl = 'https://en.wikipedia.org/wiki/Proterochaete'
try {
  checkPageAudit(audit, db, exclusions)
  const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const source = getNode.get('CB2WY'), target = getNode.get('6XGW')
  assert.equal(source.name, 'Heterocorticium'); assert.equal(source.rank, 'genus')
  assert.equal(target.name, 'Proterochaete'); assert.equal(target.rank, 'genus'); assert.notEqual(source.id, target.id)
  const getPage = audit.prepare('SELECT status,actual_item,target_title FROM jobs WHERE url=? AND item=?')
  const original = getPage.get(originalUrl, sourceItem), page = getPage.get(targetUrl, targetItem)
  assert.equal(original?.status, 'identity-conflict'); assert.equal(original.actual_item, 'Q96196038')
  assert.ok(['matched', 'snapshot-matched'].includes(page?.status)); assert.equal(page.actual_item, 'Q96196038')
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(source.id, targetItem, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(source.id, targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(source.id, targetItem), undefined)
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, source: { ...source }, target: { ...target }, sourceItem, targetItem, originalUrl, targetUrl, evidence: { publication: 'Exidia and Exidiopsis (Auriculariales, Basidiomycota): a reconsideration', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13444229/', locator: 'Taxonomy, Proterochaete; Heterocorticium listed as a genus synonym', relationship: 'genus synonym in the cited revision; the frozen catalogue retains separate nodes' }, page: { ...page }, originalPage: { ...original }, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'heterocorticium-related-candidate-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(source.id, sourceItem, originalUrl, targetItem, targetUrl, target.name, JSON.stringify(['published-synonym']), JSON.stringify([target.id]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: source.id, targetNode: target.id, relation: 'published-synonym', url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
