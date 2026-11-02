import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/', sha = b => createHash('sha256').update(b).digest('hex')
const input = readFileSync(root + 'late-disambiguation-qualified-item-checks.json'), rows = JSON.parse(input).rows
const db = new DatabaseSync(root + 'inventory.sqlite'), audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit, db, exclusions)
  const row = rows.find(r => r.node === '5G8H' && r.matchedTitle === 'Lolia (uhong)' && r.canonicalTitle === 'Lolia aquatica' && r.status === 'available' && !r.item)
  assert.ok(row)
  const get = db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), genus = get.get('5G8H'), species = get.get('3VVR6')
  assert.equal(genus.name, 'Lolia'); assert.equal(genus.rank, 'genus'); assert.equal(species.name, 'Lolia aquatica'); assert.equal(species.parent_id, genus.id)
  const api = new URL('https://ceb.wikipedia.org/w/api.php')
  for (const [key, value] of Object.entries({ action:'query', format:'json', formatversion:'2', prop:'pageprops|categories', ppprop:'wikibase_item|disambiguation', cllimit:'100', redirects:'1', titles:'Lolia (uhong)', maxlag:'10' })) api.searchParams.set(key,value)
  const response = await fetch(api, { headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; unkeyed child page verification)'}, signal:AbortSignal.timeout(30000) }); assert.ok(response.ok)
  const data = await response.json(); assert.ok(!data.error); assert.ok(data.query.redirects.some(r => r.from === 'Lolia (uhong)' && r.to === species.name))
  const page = data.query.pages.find(p => p.title === species.name); assert.ok(page && !page.missing && !page.pageprops?.wikibase_item && !Object.hasOwn(page.pageprops ?? {}, 'disambiguation'))
  assert.ok(page.categories?.some(c => c.title === 'Kategoriya:Lolia'))
  const url = 'https://ceb.wikipedia.org/wiki/Lolia_aquatica'
  assert.ok(!db.prepare('SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?').get(genus.id))
  assert.ok(!db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(genus.id,url))
  assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(url))
  const previous = db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256')?.value; assert.match(previous, /^[0-9a-f]{64}$/)
  const checkedAt = new Date().toISOString(), proof = Buffer.from(JSON.stringify({previous,sourceSha256:sha(input),exclusionsSha256:sha(exclusions),genus,species,page:data.query,checkedAt}))
  writeFileSync(root + 'late-unkeyed-lolia-proof.json',proof,{flag:'wx'})
  audit.exec('BEGIN IMMEDIATE')
  try { const old = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(url); if (old) { assert.ok(['available','snapshot-available'].includes(old.status)); assert.equal(old.actual_item,null) } else audit.prepare('INSERT INTO unkeyed_pages(url,locale,title,status,actual_item,target_title,checked_at) VALUES(?,?,?,?,?,?,?)').run(url,'ceb',species.name,'available',null,species.name,checkedAt); audit.exec('COMMIT') } catch(error) { audit.exec('ROLLBACK'); throw error }
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256').value,previous); db.prepare('INSERT INTO qualified_unkeyed_species_links VALUES(?,?,?,?,?)').run(genus.id,'ceb','Lolia_aquatica',url,'属名限定标题重定向到树中的下级物种 / Qualified genus title redirects to a descendant species in the tree'); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'qualified_unkeyed_species_sha256'); db.exec('COMMIT') } catch(error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({status:'imported',node:genus.id,proofSha256:sha(proof)}))
} finally { audit.close(); db.close() }
