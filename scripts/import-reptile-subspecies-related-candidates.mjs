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
  { id: 'VP9MG', name: 'Varanus orientalis', targetId: '7FG9F', targetName: 'Varanus tristis', item: 'Q164109', originalUrl: 'https://en.wikipedia.org/wiki/Freckled_monitor', targetUrl: 'https://en.wikipedia.org/wiki/Black-headed_monitor', research: 'https://reptile-database.reptarium.cz/Varanus/tristis', historicName: 'Varanus tristis orientalis' },
  { id: 'V7F3K', name: 'Micrurus michoacanensis', targetId: '6RJKC', targetName: 'Micrurus distans', item: 'Q3312520', originalUrl: 'https://en.wikipedia.org/wiki/West_Mexican_coral_snake', targetUrl: 'https://en.wikipedia.org/wiki/Micrurus_distans', research: 'https://reptile-database.reptarium.cz/Micrurus/distans', historicName: 'Micrurus distans michoacanensis' },
  { id: 'RVKPW', name: 'Podarcis thais', targetId: '4KPJ5', targetName: 'Podarcis peloponnesiacus', item: 'Q1572648', originalUrl: 'https://en.wikipedia.org/wiki/Peloponnese_wall_lizard', targetUrl: 'https://en.wikipedia.org/wiki/Peloponnese_wall_lizard', research: 'https://reptile-database.reptarium.cz/Podarcis/thais', historicName: 'Podarcis peloponnesiacus thais' },
]
try {
  checkPageAudit(audit, db, exclusions)
  const getNode = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
  const checksBytes = readFileSync(root + 'reptiledb-vernacular-item-checks-20261031.json')
  const checks = JSON.parse(checksBytes).rows
  for (const c of candidates) {
    const source = getNode.get(c.id), target = getNode.get(c.targetId)
    assert.equal(source.name, c.name); assert.equal(target.name, c.targetName)
    assert.equal(source.rank, 'species'); assert.equal(target.rank, 'species'); assert.equal(source.parent_id, target.parent_id)
    const evidence = checks.find(row => row.node === c.id && row.url === c.originalUrl)
    assert.equal(evidence?.status, 'available'); assert.equal(evidence.item, c.item)
    assert.ok(evidence.claims.names.includes(c.targetName)); assert.ok(evidence.claims.colIds.includes(c.targetId))
    const item = `https://www.wikidata.org/entity/${c.item}`
    const page = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.targetUrl, item)
    assert.ok(['matched', 'snapshot-matched'].includes(page?.status)); assert.equal(page.actual_item, c.item)
    assert.equal(db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(c.id, item, c.targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(c.targetUrl, item), undefined)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(c.id, c.targetUrl), undefined)
    assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(c.id, item), undefined)
  }
  const previous = db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, candidates, sourceChecksSha256: sha(checksBytes), interpretation: 'Each historic name is a published subspecies treatment; the frozen tree has distinct species nodes.', checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'reptile-subspecies-related-candidates-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='primary_related_source_sha256'").get().value, previous)
    for (const c of candidates) db.prepare('INSERT INTO primary_related_candidates VALUES(?,?,?,?,?,?,?,?)').run(c.id, `Wikipedia:en:${c.originalUrl.split('/').pop()}`, c.originalUrl, `https://www.wikidata.org/entity/${c.item}`, c.targetUrl, c.targetName, JSON.stringify(['published-subspecies-treatment']), JSON.stringify([c.targetId]))
    db.prepare("UPDATE meta SET value=? WHERE key='primary_related_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.map(c => c.id), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
