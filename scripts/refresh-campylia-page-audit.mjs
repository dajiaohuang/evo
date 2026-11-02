import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/', url = 'https://de.wikipedia.org/wiki/Campylia', sha = b => createHash('sha256').update(b).digest('hex')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const previous = audit.prepare('SELECT * FROM unkeyed_pages WHERE url=?').get(url)
  assert.ok(['available', 'snapshot-available'].includes(previous?.status)); assert.equal(previous.actual_item, 'Q146118')
  const oldProof = readFileSync(root + 'cross-namekingdom-unkeyed-live-checks.json')
  const oldCheck = JSON.parse(oldProof).rows.find(row => row.url === url && row.node === 'BXZ3Z')
  assert.equal(oldCheck?.actualPage?.item, 'Q13635288')
  const pageUrl = new URL('https://de.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: 'Campylia', maxlag: '10' })) pageUrl.searchParams.set(key, value)
  const response = await fetch(pageUrl, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error)
  const page = data.query.pages[0]; assert.equal(page.title, 'Campylia'); assert.equal(page.pageprops?.wikibase_item, 'Q13635288'); assert.ok(!Object.hasOwn(page.pageprops ?? {}, 'disambiguation'))
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, actualItem: 'Q13635288', targetTitle: page.title, checkedAt, earlierLiveChecksSha256: sha(oldProof) }))
  writeFileSync(root + 'campylia-page-refresh-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const current = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(url)
    assert.equal(current.status, previous.status); assert.equal(current.actual_item, previous.actual_item)
    const result = audit.prepare("UPDATE unkeyed_pages SET status='available',actual_item=?,target_title=?,checked_at=? WHERE url=?").run('Q13635288', page.title, checkedAt, url)
    assert.equal(result.changes, 1); audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'refreshed', url, previous: previous.actual_item, actual: 'Q13635288', proofSha256: sha(proof) }))
} finally { audit.close() }
