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
const candidates = [
  { node: '9HV5S', source: 'Acnephalum pallidipennis', synonym: 'Pycnopogon pallidipennis', foundName: 'Dasypogon apiformis', item: 'Q10809689', research: 'https://www.gbif.org/dataset/e4b3ecfe-f67c-4542-86f2-1c338dc3470c' },
  { node: '8D8ZB', source: 'Perlucidina perlucida', synonym: 'Calozenillia perlucida', foundName: 'Tachina dubia', item: 'Q14734889', research: 'https://iris.uniroma1.it/retrieve/e3835315-9084-15e8-e053-a505fe0a3de9/OHara_Annotated_2016.pdf' },
]
try {
  checkPageAudit(audit, db, exclusions)
  const checksBytes = readFileSync(root + 'diptera-archive-synonym-item-checks-20261031.json')
  const checks = JSON.parse(checksBytes).rows
  const getNode = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  for (const c of candidates) {
    const source = getNode.get(c.node)
    assert.equal(source.name, c.source); assert.equal(source.rank, 'species')
    const found = checks.find(row => row.node === c.node && row.item === c.item && row.locale === 'sv' && row.status === 'available')
    assert.equal(found?.name, c.foundName); assert.equal(found.canonicalTitle, c.synonym)
    assert.ok(found.claims.names.includes(c.synonym)); assert.ok(found.claims.ranks.includes('Q7432'))
    c.targetCols = found.claims.colIds
    assert.ok(c.targetCols.every(id => id === c.node || !getNode.get(id)))
    c.url = `https://sv.wikipedia.org/wiki/${encodeURIComponent(c.synonym.replaceAll(' ', '_'))}`
    const url = new URL('https://sv.wikipedia.org/w/api.php')
    for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', titles: c.synonym, redirects: '1', maxlag: '10' })) url.searchParams.set(key, value)
    const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; synonym identity verification)' }, signal: AbortSignal.timeout(30000) })
    if (!response.ok) throw new Error(`Page metadata HTTP ${response.status}`)
    const data = await response.json(); if (data.error) throw new Error(JSON.stringify(data.error))
    const page = data.query?.pages?.[0]
    assert.equal(page?.title, c.synonym); assert.equal(page.missing, undefined)
    assert.equal(page.pageprops?.wikibase_item, c.item); assert.equal(Object.hasOwn(page.pageprops, 'disambiguation'), false)
    const item = `https://www.wikidata.org/entity/${c.item}`
    assert.equal(db.prepare('SELECT 1 FROM diptera_synonym_candidates WHERE node_id=? AND item=?').get(c.node, item), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?').get(c.url, item), undefined)
    assert.equal(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(c.node, c.url), undefined)
    assert.equal(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(c.node, item), undefined)
  }
  const previous = db.prepare("SELECT value FROM meta WHERE key='diptera_synonym_source_sha256'").get()?.value
  assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString()
  const proof = Buffer.from(JSON.stringify({ previousSourceSha256: previous, candidates, checksSha256: sha(checksBytes), interpretation: 'Published taxonomic sources support the scientific-name combination; the page identity remains a candidate.', checkedAt, exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'diptera-researched-synonym-candidates-proof.json', proof, { flag: 'wx' })
  audit.exec('BEGIN IMMEDIATE')
  try {
    for (const c of candidates) {
      const item = `https://www.wikidata.org/entity/${c.item}`
      const existing = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?').get(c.url, item)
      if (existing) assert.ok(['matched', 'snapshot-matched'].includes(existing.status) && existing.actual_item === c.item)
      else audit.prepare('INSERT INTO jobs(url,item,locale,title,status,target_title,actual_item,checked_at) VALUES(?,?,?,?,?,?,?,?)').run(c.url, item, 'sv', c.synonym, 'matched', c.synonym, c.item, checkedAt)
    }
    audit.exec('COMMIT')
  } catch (error) { audit.exec('ROLLBACK'); throw error }
  checkPageAudit(audit, db, exclusions)
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(db.prepare("SELECT value FROM meta WHERE key='diptera_synonym_source_sha256'").get().value, previous)
    for (const c of candidates) db.prepare('INSERT INTO diptera_synonym_candidates VALUES(?,?,?,?,?,?)').run(c.node, `https://www.wikidata.org/entity/${c.item}`, c.source, c.synonym, JSON.stringify(c.targetCols), JSON.stringify([{ url: c.url, item: c.item, available: true }]))
    db.prepare("UPDATE meta SET value=? WHERE key='diptera_synonym_source_sha256'").run(sha(proof)); db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'imported', nodes: candidates.map(c => c.node), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
