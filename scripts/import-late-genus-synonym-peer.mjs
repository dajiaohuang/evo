import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const proofBytes = readFileSync(root + 'late-uncovered-title-item-checks.json')
  const candidate = JSON.parse(proofBytes).rows.find(row => row.node === '8CMPF' && row.item === 'Q14419252')
  assert.equal(candidate?.name, 'Lipsana insulaepaschalis')
  const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const node = getNode.get('8CMPF'), sourceGenus = getNode.get(node.parent_id), targetGenus = getNode.get('BY3RW')
  assert.equal(node.rank, 'species'); assert.equal(sourceGenus.name, 'Lipsana'); assert.equal(targetGenus.name, 'Physiphora')
  assert.equal(getNode.get(sourceGenus.parent_id).parent_id, getNode.get(targetGenus.parent_id).parent_id)
  const headers = { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; genus synonym verification)' }
  const entitiesUrl = 'https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=Q21351820%7CQ14419252'
  const pageUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops&ppprop=wikibase_item%7Cdisambiguation&redirects=1&titles=Lipsana_insulaepaschalis'
  const [entityResponse, pageResponse] = await Promise.all([fetch(entitiesUrl, { headers }), fetch(pageUrl, { headers })])
  assert.ok(entityResponse.ok && pageResponse.ok)
  const [entities, pageData] = await Promise.all([entityResponse.json(), pageResponse.json()])
  assert.ok(!entities.error && !pageData.error)
  const values = (id, prop) => (entities.entities[id]?.claims?.[prop] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value).filter(Boolean)
  assert.ok(values('Q21351820', 'P225').includes(sourceGenus.name)); assert.ok(values('Q14419252', 'P225').includes(targetGenus.name))
  assert.ok(values('Q14419252', 'P1420').includes('Q21351820'))
  assert.ok(values('Q21351820', 'P171').some(id => values('Q14419252', 'P171').includes(id)))
  assert.ok(pageData.query.redirects.some(row => row.from === node.name && row.to === targetGenus.name))
  const page = pageData.query.pages.find(row => row.title === targetGenus.name)
  assert.equal(page?.pageprops?.wikibase_item, 'Q14419252'); assert.ok(!page?.pageprops?.disambiguation)
  const targetItem = 'https://www.wikidata.org/entity/Q14419252', targetUrl = 'https://en.wikipedia.org/wiki/Physiphora'
  assert.ok(!db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?').get(node.id))
  assert.ok(!db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(node.id, targetUrl))
  assert.ok(!db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node.id, targetItem))
  assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(targetUrl))
  assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(targetUrl, targetItem))
  assert.ok(!db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(node.id, targetItem, targetUrl))
  const previous = db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({ previous, originalProofSha256: sha(proofBytes), exclusionsSha256: sha(exclusions), node, sourceGenus, targetGenus, page: pageData.query, targetSynonyms: values('Q14419252', 'P1420'), checkedAt }))
  writeFileSync(root + 'late-genus-synonym-peer-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    const old = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(targetUrl, targetItem)
    if (old) { assert.ok(['matched', 'snapshot-matched'].includes(old.status)); assert.equal(old.actual_item, 'Q14419252') }
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(targetUrl, targetItem, 'en', 'Physiphora', 'matched', 'Physiphora', 'Q14419252', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value, previous)
    db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(node.id, 'https://www.wikidata.org/entity/Q21351820', candidate.url, targetItem, targetUrl, targetGenus.name, JSON.stringify(['wikidata-genus-synonym-peer']), JSON.stringify(values('Q14419252', 'P10585')))
    db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'primary_related_source_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: node.id, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
