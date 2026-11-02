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
const nodeId = '9HV5S', item = 'https://www.wikidata.org/entity/Q10809689', url = 'https://sv.wikipedia.org/wiki/Pycnopogon_pallidipennis'
try {
  checkPageAudit(audit, db, exclusions)
  const source = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(nodeId)
  assert.equal(source.name, 'Acnephalum pallidipennis'); assert.equal(source.rank, 'species')
  const bytes = readFileSync(root + 'diptera-candidate-authorship-profile-20261031.json')
  const evidence = JSON.parse(bytes).values.find(row => row.node === nodeId && row.item === 'Q10809689')
  assert.equal(evidence?.sourceAuthorship, '(Brullé, 1833)')
  assert.equal(evidence.gbif.canonicalName, 'Pycnopogon pallidipennis')
  assert.match(evidence.gbif.scientificName, /1836/)
  assert.equal(db.prepare('SELECT 1 FROM diptera_synonym_candidates WHERE node_id=? AND item=?').get(nodeId, item)?.['1'], 1)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(nodeId, url), undefined)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?')
  const previousItems = meta.get('ncbi_candidate_identity_holds_sha256')?.value, previousUrls = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previousItems, /^[0-9a-f]{64}$/); assert.match(previousUrls, /^[0-9a-f]{64}$/)
  const reason = 'The source crosswalk gives Brullé, 1833 and the target GBIF record gives Brullé, 1836; resolve publication-year discrepancy before linking.'
  const proof = Buffer.from(JSON.stringify({ previousItems, previousUrls, nodeId, item, url, source: { ...source }, sourceAuthorship: evidence.sourceAuthorship, targetGbif: evidence.gbif, profileSha256: sha(bytes), research: 'https://www.gbif.org/dataset/e4b3ecfe-f67c-4542-86f2-1c338dc3470c', reason, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'diptera-authorship-conflict-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('ncbi_candidate_identity_holds_sha256').value, previousItems); assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previousUrls)
    db.prepare('INSERT INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)').run(nodeId, item, reason)
    db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)').run(nodeId, url)
    const update = db.prepare('UPDATE meta SET value=? WHERE key=?'); update.run(sha(proof), 'ncbi_candidate_identity_holds_sha256'); update.run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', node: nodeId, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
