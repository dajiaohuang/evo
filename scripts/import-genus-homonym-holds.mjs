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
const cases = [
  { node: '7P2HY', name: 'Cryptaulax', parent: 'Cryptaulacinae', item: 'https://www.wikidata.org/entity/Q21447255', targetParent: 'Q15157349', url: 'https://en.wikipedia.org/wiki/Cryptaulaxella', title: 'Cryptaulaxella', locale: 'en', reason: 'Catalogue genus belongs to Gastropoda; the page item belongs to the cryptomonad family Cryptomonadaceae.' },
  { node: '8V79C', name: 'Veterator', parent: 'Mathildidae', item: 'https://www.wikidata.org/entity/Q3556409', targetParent: 'Q12040', url: 'https://fr.wikipedia.org/wiki/Veterator_(araign%C3%A9e)', title: 'Veterator (araignée)', locale: 'fr', reason: 'Catalogue genus belongs to Gastropoda; the page item belongs to the spider family Trochanteriidae.' },
]
const request = async (base, params) => {
  const url = new URL(base); for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; homonym identity verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Metadata request: HTTP ${response.status}`)
  const body = await response.json(); if (body.error) throw new Error(JSON.stringify(body.error)); return body
}
try {
  checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const itemHeld = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const urlHeld = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  for (const row of cases) {
    const source = node.get(row.node); assert.equal(source?.name, row.name); assert.equal(source.rank, 'genus'); assert.equal(node.get(source.parent_id)?.name, row.parent)
    const seen = new Set(); let current = source, mollusca = false
    while (current && !seen.has(current.id)) { seen.add(current.id); if (current.name === 'Gastropoda' && current.rank === 'class') mollusca = true; current = current.parent_id ? node.get(current.parent_id) : null }
    assert.ok(mollusca); assert.equal(itemHeld.get(row.node, row.item), undefined); assert.equal(urlHeld.get(row.node, row.url), undefined)
  }
  const entityData = await request('https://www.wikidata.org/w/api.php', { action: 'wbgetentities', format: 'json', props: 'claims', ids: 'Q21447255|Q3556409', maxlag: '5' })
  const pageEvidence = []
  for (const row of cases) {
    const qid = row.item.split('/').at(-1), entity = entityData.entities?.[qid]
    const parents = (entity?.claims?.P171 ?? []).map(claim => claim.mainsnak?.datavalue?.value?.id).filter(Boolean)
    const names = (entity?.claims?.P225 ?? []).map(claim => claim.mainsnak?.datavalue?.value).filter(Boolean)
    assert.ok(parents.includes(row.targetParent)); assert.ok(names.includes(row.name))
    const data = await request(`https://${row.locale}.wikipedia.org/w/api.php`, { action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: row.title, redirects: '1', maxlag: '5' })
    const page = data.query?.pages?.[0]; assert.equal(page?.title, row.title); assert.equal(page.missing, undefined); assert.equal(page.pageprops?.wikibase_item, qid); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
    pageEvidence.push({ node: row.node, item: qid, parent: row.targetParent, title: page.title })
  }
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previousItems = meta.get('ncbi_candidate_identity_holds_sha256')?.value, previousUrls = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previousItems, /^[0-9a-f]{64}$/); assert.match(previousUrls, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousItems, previousUrls, cases, pageEvidence, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'genus-homonym-holds-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(meta.get('ncbi_candidate_identity_holds_sha256').value, previousItems); assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previousUrls)
    const addItem = db.prepare('INSERT INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'), addUrl = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const row of cases) { addItem.run(row.node, row.item, row.reason); addUrl.run(row.node, row.url) }
    const update = db.prepare('UPDATE meta SET value=? WHERE key=?'); update.run(sha(proof), 'ncbi_candidate_identity_holds_sha256'); update.run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', nodes: cases.map(row => row.node), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
