import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { primaryRelatedOptions } from './wikipedia-col-primary-related-options.mjs'

const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const proof = readFileSync('.git/evo-wikipedia-col26-8/vrzh-related-candidate-proof.json')
  const digest = createHash('sha256').update(proof).digest('hex')
  const current = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value
  if (current !== digest) {
    const next = readFileSync('.git/evo-wikipedia-col26-8/denitrificimonas-related-candidate-proof.json')
    assert.equal(createHash('sha256').update(next).digest('hex'), current)
    assert.equal(JSON.parse(next).previousSourceSha256, digest)
  }
  checkPageAudit(audit, db, readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'))
  const rows = db.prepare('SELECT * FROM primary_related_candidates WHERE node_id=?').all('VRZH')
  const getPage = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
  const options = primaryRelatedOptions(rows, (url, item) => {
    const page = getPage.get(url, item)
    return ['matched', 'snapshot-matched'].includes(page?.status) && item.endsWith('/' + page.actual_item)
  })
  const found = options.find(option => option.url === 'https://en.wikipedia.org/wiki/Clastostelium')
  assert.ok(found)
  assert.equal(found.item, 'https://www.wikidata.org/entity/Q134385717')
  assert.match(found.parentNames.join(' '), /上级分类|ancestor taxon/)
  assert.deepEqual(found.abstracts, [])
  console.log(JSON.stringify({ status: 'passed', node: 'VRZH', relation: 'ancestor taxon', url: found.url, proofSha256: digest }))
} finally { audit.close(); db.close() }
