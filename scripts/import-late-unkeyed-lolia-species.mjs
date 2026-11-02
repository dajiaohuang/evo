import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/', sha=b=>createHash('sha256').update(b).digest('hex')
const source=readFileSync(root+'late-unkeyed-lolia-proof.json'), prior=JSON.parse(source)
const db=new DatabaseSync(root+'inventory.sqlite'), audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try {
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json'); checkPageAudit(audit,db,exclusions)
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'), species=get.get('3VVR6'), genus=get.get(species.parent_id)
  assert.equal(species.name,'Lolia aquatica'); assert.equal(species.rank,'species'); assert.equal(genus.name,'Lolia'); assert.equal(genus.id,prior.genus.id)
  const api=new URL('https://ceb.wikipedia.org/w/api.php'); for(const [k,v] of Object.entries({action:'query',format:'json',formatversion:'2',prop:'pageprops|categories',ppprop:'wikibase_item|disambiguation',cllimit:'100',titles:species.name,maxlag:'10'}))api.searchParams.set(k,v)
  const response=await fetch(api,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; unkeyed species verification)'},signal:AbortSignal.timeout(30000)}); assert.ok(response.ok); const data=await response.json();assert.ok(!data.error)
  const page=data.query.pages.find(p=>p.title===species.name); assert.ok(page&&!page.missing&&!page.pageprops?.wikibase_item&&!Object.hasOwn(page.pageprops??{},'disambiguation'));assert.ok(page.categories?.some(c=>c.title==='Kategoriya:Lolia'))
  const url='https://ceb.wikipedia.org/wiki/Lolia_aquatica'; assert.ok(!db.prepare('SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?').get(species.id)); assert.ok(!db.prepare('SELECT 1 FROM exact_source_synonym_links WHERE node_id=?').get(species.id)); assert.ok(!db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(species.id,url)); assert.ok(!db.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?').get(url))
  const auditRow=audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?').get(url);assert.ok(['available','snapshot-available'].includes(auditRow?.status));assert.equal(auditRow.actual_item,null)
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256').value, checkedAt=new Date().toISOString(),proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(source),exclusionsSha256:sha(exclusions),species,genus,page:data.query,checkedAt}))
  writeFileSync(root+'late-unkeyed-lolia-species-proof.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE')
  try { assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('qualified_unkeyed_species_sha256').value,previous);db.prepare('INSERT INTO qualified_unkeyed_species_links VALUES(?,?,?,?,?)').run(species.id,'ceb','Lolia_aquatica',url,'同名物种页面归入相同属分类 / Same-name species page is categorized in the matching genus');db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'qualified_unkeyed_species_sha256');db.exec('COMMIT') } catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'imported',node:species.id,proofSha256:sha(proof)}))
} finally {audit.close();db.close()}
