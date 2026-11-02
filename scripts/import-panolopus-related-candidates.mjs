import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const targetUrl = 'https://en.wikipedia.org/wiki/Panolopus_costatus'
const targetItem = 'https://www.wikidata.org/entity/Q2943932'
const originalUrl = 'https://en.wikipedia.org/wiki/Common_Hispaniolan_galliwasp'
const sources = [
  { id: 'V7HB7', name: 'Panolopus chalcorhabdus', url: 'https://reptile-database.reptarium.cz/Panolopus/chalcorhabdus' },
  { id: 'V7HSH', name: 'Panolopus melanchrous', url: 'https://reptile-database.reptarium.cz/Panolopus/melanchrous' },
  { id: 'V7G7Z', name: 'Panolopus oreistes', url: 'https://reptile-database.reptarium.cz/Panolopus/oreistes' },
]
try {
  checkPageAudit(audit, db, exclusions)
  const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const target = getNode.get('4CG3R')
  assert.equal(target.name, 'Panolopus costatus'); assert.equal(target.rank, 'species')
  const checksBytes = readFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json')
  const checks = JSON.parse(checksBytes).rows
  for (const source of sources) {
    const node = getNode.get(source.id)
    assert.equal(node.name, source.name); assert.equal(node.rank, 'species'); assert.equal(node.parent_id, target.parent_id)
    const evidence = checks.find(row => row.node === source.id && row.url === originalUrl)
    assert.equal(evidence?.status, 'available'); assert.equal(evidence.item, 'Q2943932')
    assert.ok(evidence.claims.names.includes('Celestus costatus'))
    assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(source.id, targetItem, targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(source.id, targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(source.id, targetItem), undefined)
  }
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl), undefined)
  assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem), undefined)
  const url = new URL('https://en.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: 'Panolopus costatus', redirects: '1', maxlag: '5' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; related taxon page verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Page metadata HTTP ${response.status}`)
  const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
  const page = data.query?.pages?.[0]
  assert.equal(page?.title, 'Panolopus costatus'); assert.equal(page.missing, undefined)
  assert.equal(page.pageprops?.wikibase_item, 'Q2943932'); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, sources, target: { ...target }, targetUrl, targetItem, originalUrl, sourceChecksSha256: sha(checksBytes), interpretation: 'Each source was previously treated as a subspecies of Celestus or Panolopus costatus; the frozen tree represents each as a separate species.', targetNameSource: 'https://reptile-database.reptarium.cz/Panolopus/costatus', checkedAt, exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'panolopus-related-candidates-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, targetItem)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q2943932')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, targetItem, 'en', 'Panolopus costatus', 'matched', page.title, 'Q2943932', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    for (const source of sources) db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(source.id, 'Wikipedia:en:Common_Hispaniolan_galliwasp', originalUrl, targetItem, targetUrl, target.name, JSON.stringify(['published-subspecies-treatment']), JSON.stringify([target.id]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: sources.map(source => source.id), targetNode: target.id, relation: 'published-subspecies-treatment', url: targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
