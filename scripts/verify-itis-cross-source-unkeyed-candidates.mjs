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
  const bytes = readFileSync(root + 'itis-cross-source-unkeyed-candidates-proof.json'), proof = JSON.parse(bytes)
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_cross_unkeyed_sha256'").get()?.value, sha(bytes))
  for (const [key, file] of Object.entries({ inventorySha256: 'itis-cross-source-synonym-inventory-20261031-v2.json', pageChecksSha256: 'itis-cross-source-synonym-page-checks-20261031.json', itemChecksSha256: 'itis-cross-source-synonym-item-checks-20261031.json' })) assert.equal(proof[key], sha(readFileSync(root + file)))
  assert.equal(proof.exclusionsSha256, sha(exclusions))
  const rows = db.prepare('SELECT * FROM itis_cross_unkeyed_candidates').all()
  assert.equal(rows.length, proof.candidates.length)
  const find = db.prepare('SELECT * FROM itis_cross_unkeyed_candidates WHERE node_id=? AND item=?')
  const namedNode = db.prepare('SELECT id FROM nodes WHERE name=? AND rank=?')
  const pageChecks = JSON.parse(readFileSync(root + 'itis-cross-source-synonym-page-checks-20261031.json')).checks
  const checkedPages = new Map(pageChecks.map(value => [`${value.node}:${value.url}`, value]))
  for (const c of proof.candidates) {
    const row = find.get(c.node, c.item)
    assert.ok(row); assert.equal(row.source_name, c.source); assert.equal(row.synonym_name, c.synonym)
    assert.deepEqual(JSON.parse(row.pages), [c.page]); assert.deepEqual(JSON.parse(row.target_cols), [])
    const checked = checkedPages.get(`${c.node}:${c.page.url}`)
    assert.equal(checked?.status, 'available'); assert.ok(!checked?.item)
    assert.ok(checked.canonicalTitle)
    assert.ok(namedNode.all(checked.canonicalTitle, 'species').every(match => match.id === c.node), `Page title ${checked.canonicalTitle} belongs to another tree node`)
    const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(c.page.url)
    assert.ok(['available', 'snapshot-available'].includes(page?.status)); assert.ok(!page.actual_item)
    const [option] = itisCrossSourceOptions([row], () => true, () => false)
    assert.equal(option.url, c.page.url); assert.ok(option.parentNames.some(label => label.includes('No Wikidata item')))
    assert.deepEqual(option.abstracts, [])
  }
  console.log(JSON.stringify({ status: 'passed', candidates: rows.length, nodes: new Set(rows.map(row => row.node_id)).size, proofSha256: sha(bytes) }))
} finally { audit.close(); db.close() }
