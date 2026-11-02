import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const evidence = JSON.parse(readFileSync(root + 'vrzh-related-candidate-review.json', 'utf8'))
const inventory = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
try {
  checkPageAudit(audit, inventory, exclusions)
  const node = inventory.prepare('SELECT id,name,rank FROM nodes WHERE id=?').get(evidence.node)
  assert.deepEqual({ ...node }, { id: 'VRZH', name: 'Clastostelium recurvatum', rank: 'species' })
  const sourcePage = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(evidence.originalUrl, evidence.sourceItem)
  assert.equal(sourcePage?.status, 'identity-conflict')
  assert.equal(sourcePage.actual_item, 'Q134385717')
  assert.equal(inventory.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(node.id, evidence.targetItem, evidence.targetUrl), undefined)
  assert.equal(inventory.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(evidence.targetUrl), undefined)
  assert.equal(inventory.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(evidence.targetUrl, evidence.targetItem), undefined)
  assert.equal(inventory.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(node.id, evidence.targetUrl), undefined)
  assert.equal(inventory.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node.id, evidence.targetItem), undefined)

  const query = async (base, params) => {
    const url = new URL(base)
    for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy link verification)' }, signal: AbortSignal.timeout(30000) })
    if (!response.ok) throw new Error(`Metadata request failed: HTTP ${response.status}`)
    const data = await response.json()
    if (data.error) throw new Error(JSON.stringify(data.error))
    return data
  }
  const entities = await query('https://www.wikidata.org/w/api.php', { action: 'wbgetentities', format: 'json', props: 'claims|sitelinks', ids: 'Q134385710|Q134385717' })
  const source = entities.entities.Q134385710, target = entities.entities.Q134385717
  const values = (entity, property) => (entity.claims?.[property] ?? []).map(claim => claim.mainsnak?.datavalue?.value?.id ?? claim.mainsnak?.datavalue?.value).filter(Boolean)
  assert.ok(values(source, 'P225').includes(node.name))
  assert.ok(values(source, 'P10585').includes(node.id))
  assert.ok(values(source, 'P171').includes('Q134385717'))
  assert.ok(values(target, 'P225').includes('Clastostelium'))
  assert.ok(values(target, 'P105').includes('Q34740'))
  assert.equal(target.sitelinks?.enwiki?.title, 'Clastostelium')
  const page = await query('https://en.wikipedia.org/w/api.php', { action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: 'Clastostelium', maxlag: '5' })
  const targetPage = page.query?.pages?.[0]
  assert.equal(targetPage?.title, 'Clastostelium')
  assert.equal(targetPage.missing, undefined)
  assert.equal(targetPage.pageprops?.wikibase_item, 'Q134385717')
  assert.equal(Object.hasOwn(targetPage.pageprops, 'disambiguation'), false)

  const previous = inventory.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, evidence, checkedAt, sourceClaims: { name: values(source, 'P225'), colIds: values(source, 'P10585'), parents: values(source, 'P171') }, targetClaims: { name: values(target, 'P225'), rank: values(target, 'P105'), colIds: values(target, 'P10585') }, page: { title: targetPage.title, item: targetPage.pageprops.wikibase_item }, exclusionsSha256: sha(exclusions) }))
  const proofPath = root + 'vrzh-related-candidate-proof.json'
  writeFileSync(proofPath, proof, { flag: 'wx' })

  audit.exec('BEGIN IMMEDIATE')
  try {
    const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(evidence.targetUrl, evidence.targetItem)
    if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === 'Q134385717')
    else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(evidence.targetUrl, evidence.targetItem, 'en', 'Clastostelium', 'matched', targetPage.title, 'Q134385717', checkedAt)
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, inventory, exclusions)
  inventory.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(inventory.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    inventory.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(node.id, evidence.sourceItem, evidence.originalUrl, evidence.targetItem, evidence.targetUrl, evidence.targetName, JSON.stringify(['wikidata-parent']), JSON.stringify(values(target, 'P10585')))
    inventory.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof))
    inventory.exec('COMMIT')
  } catch (error) { inventory.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', node: node.id, relation: 'wikidata-parent', target: evidence.targetUrl, proofSha256: sha(proof) }))
} finally { audit.close(); inventory.close() }
