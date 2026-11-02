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
const node = '4V7N9', other = '4V7NP', qid = 'Q4355462', item = `https://www.wikidata.org/entity/${qid}`
const urls = ['ceb', 'sv', 'war'].map(locale => `https://${locale}.wikipedia.org/wiki/Schendyla_carniolensis`)
try {
  checkPageAudit(audit, db, exclusions)
  const lookup = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  assert.equal(lookup.get(node)?.name, 'Schendyla carniolensis')
  assert.equal(lookup.get(other)?.name, 'Schendyla nemorensis')
  assert.equal(lookup.get(node)?.parent_id, lookup.get(other)?.parent_id)
  const query = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: qid })) query.searchParams.set(key, value)
  const response = await fetch(query, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon link verification)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok)
  const data = await response.json(), claims = data.entities?.[qid]?.claims
  const values = property => (claims?.[property] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value)
  assert.ok(values('P10585').includes(other)); assert.ok(values('P225').includes('Schendyla nemorensis'))
  const page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
  for (const url of urls) { const row = page.get(url); assert.ok(['available', 'snapshot-available'].includes(row?.status)); assert.equal(row.actual_item, qid) }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?')
  const previousItems = meta.get('ncbi_candidate_identity_holds_sha256')?.value, previousUrls = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previousItems, /^[0-9a-f]{64}$/); assert.match(previousUrls, /^[0-9a-f]{64}$/)
  assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node, item), undefined)
  for (const url of urls) assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(node, url), undefined)
  const proof = Buffer.from(JSON.stringify({ previousItems, previousUrls, node: lookup.get(node), other: lookup.get(other), qid, urls, wikidataName: values('P225'), wikidataColIds: values('P10585'), checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'schendyla-cross-node-candidate-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('ncbi_candidate_identity_holds_sha256').value, previousItems); assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previousUrls)
    db.prepare('INSERT INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)').run(node, item, 'Wikidata identifies a different accepted tree node')
    const addUrl = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const url of urls) addUrl.run(node, url)
    const update = db.prepare('UPDATE meta SET value=? WHERE key=?')
    update.run(sha(proof), 'ncbi_candidate_identity_holds_sha256'); update.run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', node, other, urls: urls.length, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
