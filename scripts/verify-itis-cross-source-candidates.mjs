import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { itisCrossSourceOptions } from './wikipedia-col-itis-cross-source-options.mjs'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true })
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
try {
  checkPageAudit(audit, db, exclusions)
  const proofBytes = readFileSync(root + 'itis-cross-source-candidates-proof.json')
  const proof = JSON.parse(proofBytes)
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_cross_source_sha256'").get()?.value, sha(proofBytes))
  for (const [key, file] of Object.entries({ inventorySha256: 'itis-cross-source-synonym-inventory-20261031-v2.json', titleChecksSha256: 'itis-cross-source-synonym-title-candidates-20261031.json', pageChecksSha256: 'itis-cross-source-synonym-page-checks-20261031.json', itemChecksSha256: 'itis-cross-source-synonym-item-checks-20261031.json' })) assert.equal(proof[key], sha(readFileSync(root + file)))
  assert.equal(proof.exclusionsSha256, sha(exclusions))
  const rows = db.prepare('SELECT * FROM itis_cross_source_candidates').all()
  assert.equal(rows.length, proof.candidates.length)
  const find = db.prepare('SELECT * FROM itis_cross_source_candidates WHERE node_id=? AND item=?')
  const node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  const namedNode = db.prepare('SELECT id FROM nodes WHERE name=? AND rank=?')
  const itemChecks = JSON.parse(readFileSync(root + 'itis-cross-source-synonym-item-checks-20261031.json')).rows
  const itemEvidence = new Map(itemChecks.map(value => [`${value.node}:${value.item}`, value]))
  const page = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
  const badUrl = db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?'), badItem = db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
  const heldUrl = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), heldItem = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  for (const c of proof.candidates) {
    const item = `https://www.wikidata.org/entity/${c.item}`
    const row = find.get(c.node, item)
    assert.ok(row); assert.equal(row.source_name, c.source); assert.equal(row.synonym_name, c.synonym)
    assert.deepEqual(JSON.parse(row.target_cols), c.targetCols); assert.deepEqual(JSON.parse(row.pages), c.pages)
    assert.equal(node.get(c.node)?.name, c.source); assert.equal(node.get(c.node)?.rank, 'species')
    assert.ok(c.targetCols.every(id => id === c.node || !node.get(id)))
    const evidence = itemEvidence.get(`${c.node}:${c.item}`)
    assert.ok(evidence?.claims)
    for (const name of evidence.claims.names ?? []) {
      assert.ok(namedNode.all(name, 'species').every(match => match.id === c.node), `Wikidata name ${name} belongs to another tree node`)
    }
    assert.equal(heldItem.get(c.node, item), undefined)
    for (const value of c.pages) {
      assert.equal(badUrl.get(value.url), undefined); assert.equal(badItem.get(value.url, item), undefined); assert.equal(heldUrl.get(c.node, value.url), undefined)
      const receipt = page.get(value.url, item)
      assert.ok(['matched', 'snapshot-matched'].includes(receipt?.status)); assert.equal(receipt.actual_item, c.item)
    }
    const [option] = itisCrossSourceOptions([row], () => true, id => Boolean(node.get(id)))
    assert.ok(option); assert.equal(option.url, c.pages[0].url)
    assert.ok(option.parentNames.some(label => label.includes('identity unverified')))
    assert.deepEqual(option.abstracts, [])
  }
  console.log(JSON.stringify({ status: 'passed', candidates: rows.length, nodes: new Set(rows.map(row => row.node_id)).size, proofSha256: sha(proofBytes) }))
} finally { audit.close(); db.close() }
