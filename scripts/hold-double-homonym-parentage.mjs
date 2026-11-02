import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root = '.git/evo-wikipedia-col26-8/', sha = bytes => createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
  checkPageAudit(audit, db, exclusions)
  const previousChecks = readFileSync(root + 'cross-inexact-parentage-checks.json'), checks = JSON.parse(previousChecks)
  const specs = [{ node: '5XHCQ', item: 'Q22113012', parent: 'Q659774', grandparent: 'Q386535', grandName: 'Scorpaenidae', grandCol: 'KVS3K', anchor: 'KVT2H', other: '5XHD2' }, { node: '7TBGG', item: 'Q17258493', parent: 'Q7690222', grandparent: 'Q12336690', grandName: 'Splachnaceae', grandCol: null, anchor: '9JGGL', other: '9MN9S' }]
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: specs.flatMap(s => [s.parent, s.grandparent]).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; parent taxon checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok); const data = await response.json(); assert.ok(!data.error)
  const values = (id, prop) => (data.entities[id]?.claims?.[prop] ?? []).filter(c => c.rank !== 'deprecated' && c.mainsnak?.snaktype === 'value').map(c => c.mainsnak.datavalue.value?.id ?? c.mainsnak.datavalue.value)
  const node = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const lineage = id => { const rows = [], seen = new Set(); while (id && !seen.has(id)) { seen.add(id); const row = node.get(id); if (!row) break; rows.push(row); id = row.parent_id } return rows }
  const held = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?'), page = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
  const rows = []
  for (const spec of specs) {
    assert.ok(values(spec.parent, 'P171').includes(spec.grandparent)); assert.ok(values(spec.grandparent, 'P225').includes(spec.grandName))
    if (spec.grandCol) assert.ok(values(spec.grandparent, 'P10585').includes(spec.grandCol))
    const source = lineage(spec.node), target = lineage(spec.other), parentNode = node.get(spec.grandCol ?? spec.anchor)
    assert.equal(source[0].name, target[0].name); assert.equal(source[0].rank, target[0].rank)
    assert.ok(target.some(n => n.id === spec.anchor)); assert.ok(!source.some(n => n.id === spec.anchor))
    if (spec.grandCol) assert.equal(parentNode.parent_id, spec.anchor)
    else assert.equal(parentNode.name, spec.grandName)
    for (const row of checks.rows.filter(r => r.node === spec.node && r.item === spec.item)) {
      assert.equal(row.actualPage.item, spec.item); assert.ok(row.parentNames.some(parent => parent.id === spec.parent))
      const receipt = page.get(row.url); assert.ok(['available', 'snapshot-available'].includes(receipt?.status)); assert.equal(receipt.actual_item, spec.item)
      if (!held.get(row.node, row.url)) rows.push({ node: row.node, url: row.url, item: row.item, spec })
    }
  }
  assert.equal(rows.length, 6)
  const meta = db.prepare('SELECT value FROM meta WHERE key=?'), previous = meta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previous, previousChecksSha256: sha(previousChecks), exclusionsSha256: sha(exclusions), rows, checkedAt: new Date().toISOString() }))
  writeFileSync(root + 'double-homonym-parentage-hold-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(meta.get('candidate_identity_held_urls_sha256').value, previous); const insert = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)'); for (const row of rows) insert.run(row.node, row.url); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof), 'candidate_identity_held_urls_sha256'); db.exec('COMMIT') } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', links: rows.length, nodes: new Set(rows.map(row => row.node)).size, proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
