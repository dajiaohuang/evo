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
const candidates = [
  { id: '8GPDR', name: 'Boaedon variegatus', synonym: 'Alopecion variegatum', targetId: 'M7W3', targetName: 'Boaedon lineatus', item: 'Q2907510', url: 'https://en.wikipedia.org/wiki/Boaedon_lineatus', research: 'https://reptile-database.reptarium.cz/Boaedon/lineatus' },
  { id: 'VB849', name: 'Calotes vultuosus', synonym: 'Agama vultuosa', targetId: 'Q467', targetName: 'Calotes versicolor', item: 'Q41489', url: 'https://en.wikipedia.org/wiki/Oriental_garden_lizard', research: 'https://reptile-database.reptarium.cz/Calotes/vultuosus' },
]
try {
  checkPageAudit(audit, db, exclusions)
  const inventoryBytes = readFileSync(root + 'reptiledb-archive-synonym-inventory-20261031.json')
  const inventory = JSON.parse(inventoryBytes), getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: candidates.map(c => c.item).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity verification)' }, signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
  const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
  for (const c of candidates) {
    const source = getNode.get(c.id), target = getNode.get(c.targetId)
    assert.equal(source.name, c.name); assert.equal(target.name, c.targetName)
    assert.equal(source.rank, 'species'); assert.equal(target.rank, 'species'); assert.equal(source.parent_id, target.parent_id)
    assert.ok(inventory.values.some(row => row.node === c.id && row.name === c.synonym))
    const claims = data.entities[c.item]?.claims
    const values = prop => (claims?.[prop] ?? []).filter(x => x.rank !== 'deprecated' && x.mainsnak?.snaktype === 'value').map(x => x.mainsnak.datavalue?.value?.id ?? x.mainsnak.datavalue?.value).filter(Boolean)
    assert.ok(values('P225').includes(c.targetName)); assert.ok(values('P105').includes('Q7432')); assert.ok(values('P10585').includes(c.targetId))
    const item = `https://www.wikidata.org/entity/${c.item}`
    const page = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, item)
    assert.ok(['matched', 'snapshot-matched'].includes(page?.status)); assert.equal(page.actual_item, c.item)
    assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(c.id, item, c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(c.url, item), undefined)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(c.id, c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(c.id, item), undefined)
  }
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, candidates, inventorySha256: sha(inventoryBytes), interpretation: 'The historic synonym is associated with a different species node under another taxonomic treatment.', checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'reptile-split-synonym-candidates-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    for (const c of candidates) db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(c.id, `Wikidata:alias:${c.synonym}`, c.url, `https://www.wikidata.org/entity/${c.item}`, c.url, c.targetName, JSON.stringify(['published-synonym-split']), JSON.stringify([c.targetId]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.map(c => c.id), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
