import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/'
const candidateBytes=readFileSync(root+'itis-vernacular-casefold-candidates.json')
const checkBytes=readFileSync(root+'itis-vernacular-title-checks-casefold.json')
const identityBytes=readFileSync(root+'itis-vernacular-wikidata-checks-casefold.json')
const digest=b=>createHash('sha256').update(b).digest('hex')
const input=JSON.parse(candidateBytes),checks=JSON.parse(checkBytes),identities=JSON.parse(identityBytes)
assert.equal(checks.sourceSha256,digest(candidateBytes));assert.equal(identities.titleChecksSha256,digest(checkBytes))
const db=new DatabaseSync(root+'inventory.sqlite');db.exec('PRAGMA busy_timeout=15000')
assert.ok(db.prepare("SELECT value FROM meta WHERE key='itis_wikidata_identities_sha256'").get()?.value)
const previous=db.prepare("SELECT value FROM meta WHERE key='itis_casefold_candidates_sha256'").get()?.value;assert.ok(!previous||previous===digest(candidateBytes))
const target=db.prepare('SELECT 1 FROM label_wikidata_targets WHERE id=?')
const addCandidate=db.prepare('INSERT OR IGNORE INTO itis_vernacular_candidates VALUES(?,?,?,?,?)')
const oldCheck=db.prepare('SELECT status,item FROM itis_vernacular_title_checks WHERE locale=? AND title=?')
const addCheck=db.prepare('INSERT OR IGNORE INTO itis_vernacular_title_checks VALUES(?,?,?,?)')
const oldIdentity=db.prepare('SELECT col_ids FROM itis_wikidata_identities WHERE item=?')
const addIdentity=db.prepare('INSERT OR IGNORE INTO itis_wikidata_identities VALUES(?,?)')
const setMeta=db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)')
db.exec('BEGIN IMMEDIATE')
try{
 for(const check of checks.results){
  assert.ok(['available','unavailable','disambiguation'].includes(check.status));assert.ok(check.item===null||/^Q\d+$/.test(check.item))
  const old=oldCheck.get(check.locale,check.requested);if(old){assert.equal(old.status,check.status);assert.equal(old.item,check.item)}
  addCheck.run(check.locale,check.requested,check.status,check.item)
 }
 for(const entity of identities.results){
  assert.match(entity.item,/^Q\d+$/);assert.ok(Array.isArray(entity.colIds))
  const colIds=JSON.stringify([...new Set(entity.colIds)].sort()),old=oldIdentity.get(entity.item)
  if(old)assert.deepEqual([...JSON.parse(old.col_ids)].sort(),JSON.parse(colIds))
  addIdentity.run(entity.item,colIds)
 }
 for(const row of input.matches){
  assert.ok(target.get(row.node));assert.match(row.itisTaxonId,/^\d+$/)
  assert.equal(row.url,`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title.replaceAll(' ','_'))}`)
  const check=oldCheck.get(row.locale,row.title);assert.ok(check)
  if(check.status==='available'&&check.item)assert.ok(oldIdentity.get(check.item))
  addCandidate.run(row.node,row.locale,row.title,row.itisTaxonId,row.url)
 }
 setMeta.run('itis_casefold_candidates_sha256',digest(candidateBytes));setMeta.run('itis_casefold_checks_sha256',digest(checkBytes));setMeta.run('itis_casefold_identities_sha256',digest(identityBytes));db.exec('COMMIT')
}catch(error){db.exec('ROLLBACK');throw error}
console.log(JSON.stringify({status:'imported',candidates:input.matches.length,checks:checks.results.length,items:identities.results.length,sourceSha256:digest(candidateBytes)}));db.close()
