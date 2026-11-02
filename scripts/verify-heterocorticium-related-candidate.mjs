import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { primaryRelatedOptions } from './wikipedia-col-primary-related-options.mjs'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const proof = readFileSync('.git/evo-wikipedia-col26-8/heterocorticium-related-candidate-proof.json')
  const digest = createHash('sha256').update(proof).digest('hex')
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, digest)
  checkPageAudit(audit, db, readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'))
  const rows = db.prepare('SELECT * FROM primary_related_candidates WHERE node_id=?').all('CB2WY')
  const lookup = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
  const options = primaryRelatedOptions(rows, (url, item) => { const page = lookup.get(url, item); return ['matched', 'snapshot-matched'].includes(page?.status) && item.endsWith('/' + page.actual_item) })
  const option = options.find(row => row.url === 'https://en.wikipedia.org/wiki/Proterochaete')
  assert.ok(option); assert.match(option.parentNames.join(' '), /synonym or basionym/); assert.match(option.parentNames.join(' '), /identity unverified/)
  assert.deepEqual(option.abstracts, [])
  console.log(JSON.stringify({ status: 'passed', node: 'CB2WY', targetNode: '6XGW', relation: 'published synonym', url: option.url, proofSha256: digest }))
} finally { audit.close(); db.close() }
