import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { reptileSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true }), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const proof = readFileSync(root + 'reptiledb-venemai-candidate-proof.json')
  const digest = createHash('sha256').update(proof).digest('hex')
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='reptile_synonym_source_sha256'").get().value, digest)
  checkPageAudit(audit, db, readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'))
  const rows = db.prepare('SELECT * FROM reptile_synonym_candidates WHERE node_id=?').all('V7F7Z')
  const getPage = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?'), known = db.prepare('SELECT 1 FROM nodes WHERE id=?')
  const options = reptileSynonymOptions(rows, (url, item) => { const page = getPage.get(url, item); return ['matched', 'snapshot-matched'].includes(page?.status) && item.endsWith('/' + page.actual_item) }, id => Boolean(known.get(id)))
  const option = options.find(value => value.item.endsWith('/Q3242192'))
  assert.ok(option); assert.match(option.parentNames.join(' '), /identity unverified/); assert.match(option.parentNames.join(' '), /external identifier unresolved/); assert.deepEqual(option.abstracts, [])
  console.log(JSON.stringify({ status: 'passed', node: 'V7F7Z', url: option.url, identity: 'unverified', externalIdentifier: 'unresolved', proofSha256: digest }))
} finally { audit.close(); db.close() }
