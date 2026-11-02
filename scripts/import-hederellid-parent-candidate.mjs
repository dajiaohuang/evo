import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const id = '85878', parent = '8582T', qid = 'Q16982809', item = `https://www.wikidata.org/entity/${qid}`, url = 'https://en.wikipedia.org/wiki/Hederellid', original = 'https://en.wikipedia.org/wiki/Hederellidae'
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const sample = readFileSync(root + 'unlinked-live-wikipedia-sitelinks-spread-sample.json'), evidence = JSON.parse(sample).values.find(row => row.node === id)
  assert.equal(evidence?.item, 'Q35080172'); assert.ok(evidence.colIds.includes(id)); assert.ok(evidence.links.some(link => link.site === 'enwiki' && link.title === 'Hederellidae'))
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), source = node.get(id), target = node.get(parent)
  assert.equal(source.name, 'Hederellidae'); assert.equal(source.parent_id, parent); assert.equal(target.name, 'Hederellida')
  const query = new URL('https://en.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: 'Hederellidae', redirects: '1', maxlag: '10' })) query.searchParams.set(key, value)
  const response = await fetch(query, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon parent verification)' }, signal: AbortSignal.timeout(30000) }); assert.ok(response.ok)
  const data = await response.json(); assert.ok(!data.error); assert.ok(data.query.redirects.some(row => row.from === 'Hederellidae' && row.to === 'Hederellid'))
  const actual = data.query.pages[0]; assert.equal(actual.title, 'Hederellid'); assert.equal(actual.pageprops?.wikibase_item, qid); assert.ok(!Object.hasOwn(actual.pageprops ?? {}, 'disambiguation'))
  const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(url, item)
  assert.ok(['matched', 'snapshot-matched'].includes(existing?.status)); assert.equal(existing.actual_item, qid)
  assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(id, item, url), undefined)
  assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(id, url), undefined)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('primary_related_source_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, source, target, item, url, original, sampleSha256: sha(sample), exclusionsSha256: sha(exclusions), checkedAt: new Date().toISOString() }))
  writeFileSync(root + 'hederellid-parent-candidate-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('primary_related_source_sha256').value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(id, 'https://www.wikidata.org/entity/Q35080172', original, item, url, target.name, JSON.stringify(['tree-parent']), JSON.stringify([parent]))
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256'); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: id, relationship: 'parent', url, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
