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
const nodeId = 'C2FXR', item = 'https://www.wikidata.org/entity/Q3775270'
const urls = ['https://en.wikipedia.org/wiki/Rubus_macropetalus', 'https://ru.wikipedia.org/wiki/Rubus_macropetalus', 'https://en.wikipedia.org/wiki/Rubus_ursinus']
try {
  checkPageAudit(audit, db, exclusions)
  const source = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(nodeId)
  assert.equal(source.name, 'Rubus grandipetalus'); assert.equal(source.rank, 'species')
  const bytes = readFileSync(root + 'uncovered-synonym-title-checks.json')
  const rows = JSON.parse(bytes).values.filter(row => row.node === nodeId && row.synonym === 'Rubus macropetalus')
  assert.equal(rows.length, 2)
  assert.ok(rows.every(row => row.synonymAuthorship === 'P.J.Müll. & Lefèvre' && row.page.item === 'Q3775270'))
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(nodeId, item), undefined)
  const urlHold = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  for (const url of urls) assert.equal(urlHold.get(nodeId, url), undefined)
  const getMeta = db.prepare('SELECT value FROM meta WHERE key=?')
  const previousItems = getMeta.get('ncbi_candidate_identity_holds_sha256')?.value, previousUrls = getMeta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previousItems, /^[0-9a-f]{64}$/); assert.match(previousUrls, /^[0-9a-f]{64}$/)
  const reason = 'R. macropetalus P.J.Müll. & Lefèvre is a later homonym, distinct from R. macropetalus Douglas ex Hook., which is associated with R. ursinus.'
  const proof = Buffer.from(JSON.stringify({ previousItems, previousUrls, source: { ...source }, item, urls, reason, sourceChecksSha256: sha(bytes), publication: { url: 'https://repository.naturalis.nl/pub/627813/Gorteria39_Beek_5-45.pdf', title: 'The types of the taxa of the genus Rubus described by Philipp Jakob Müller', locator: 'Rubus macropetalus, page 28' }, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'rubus-homonym-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(getMeta.get('ncbi_candidate_identity_holds_sha256').value, previousItems); assert.equal(getMeta.get('candidate_identity_held_urls_sha256').value, previousUrls)
    db.prepare('INSERT INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)').run(nodeId, item, reason)
    const addUrl = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const url of urls) addUrl.run(nodeId, url)
    const setMeta = db.prepare('UPDATE meta SET value=? WHERE key=?')
    setMeta.run(sha(proof), 'ncbi_candidate_identity_holds_sha256'); setMeta.run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', node: nodeId, item, urlPairs: urls.length, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
