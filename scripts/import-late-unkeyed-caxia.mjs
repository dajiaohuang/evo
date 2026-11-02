import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root='.git/evo-wikipedia-col26-8/', sha=b=>createHash('sha256').update(b).digest('hex')
const input=readFileSync(root+'late-disambiguation-qualified-item-checks.json'), rows=JSON.parse(input).rows
const db=new DatabaseSync(root+'inventory.sqlite'), audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit,db,exclusions)
  assert.ok(rows.some(r=>r.node==='8HFQR' && r.matchedTitle==='Caxia (insekto)' && r.canonicalTitle==='Caxia (insekto)' && r.status==='available' && !r.item))
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), genus=get.get('8HFQR'), family=get.get(genus.parent_id)
  assert.equal(genus.name,'Caxia'); assert.equal(genus.rank,'genus'); assert.equal(family.name,'Cicadellidae'); assert.equal(family.rank,'family')
  const api=new URL('https://ceb.wikipedia.org/w/api.php'); for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops|links',ppprop:'wikibase_item|disambiguation',pllimit:'500',titles:'Caxia (insekto)',maxlag:'10'}))api.searchParams.set(k,v)
  const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; unkeyed family verification)'},signal:AbortSignal.timeout(30000)}); assert.ok(response.ok)
  const data=await response.json(); assert.ok(!data.error && !data.continue); const page=data.query.pages.find(p=>p.title==='Caxia (insekto)')
  assert.ok(page && !page.missing && !page.pageprops?.wikibase_item && !Object.hasOwn(page.pageprops??{},'disambiguation')); assert.ok(page.links?.some(l=>l.title===family.name))
  const url='https://ceb.wikipedia.org/wiki/Caxia_(insekto)'
  assert.ok(!db.prepare('SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?').get(genus.id)); assert.ok(!db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(genus.id,url)); assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(url))
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256')?.value; assert.match(previous,/^[0-9a-f]{64}$/)
  const checkedAt=new Date().toISOString(), proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(input),exclusionsSha256:sha(exclusions),genus,family,page:data.query,checkedAt}))
  writeFileSync(root+'late-unkeyed-caxia-proof.json',proof,{flag:'wx'})
  audit.exec('BEGIN IMMEDIATE')
  try { const old=audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(url); if(old){assert.ok(['available','snapshot-available'].includes(old.status));assert.equal(old.actual_item,null)}else audit.prepare('INSERT INTO unkeyed_pages(url,locale,title,status,actual_item,target_title,checked_at) VALUES(?,?,?,?,?,?,?)').run(url,'ceb','Caxia (insekto)','available',null,'Caxia (insekto)',checkedAt); audit.exec('COMMIT') } catch(error){audit.exec('ROLLBACK');throw error}
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256').value,previous); db.prepare('INSERT INTO qualified_unkeyed_species_links VALUES(?,?,?,?,?)').run(genus.id,'ceb','Caxia_(insekto)',url,'限定昆虫页面链接到名录中的蝉科 / Qualified insect page links to the catalogue family Cicadellidae'); db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'qualified_unkeyed_species_sha256'); db.exec('COMMIT') } catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'imported',node:genus.id,proofSha256:sha(proof)}))
} finally {audit.close();db.close()}
