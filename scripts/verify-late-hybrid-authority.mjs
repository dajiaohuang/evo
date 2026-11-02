import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',registry='data/catalogue-of-life/releases/2026-08-20/registry/',sha=b=>createHash('sha256').update(b).digest('hex'),manifestBytes=readFileSync(registry+'manifest.json'),manifest=JSON.parse(manifestBytes),source=readFileSync(root+'late-hybrid-synonym-proof.json'),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions);assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('manifest_sha256').value,sha(manifestBytes))
  const shard=manifest.search.files.find(x=>x.prefix==='ve'),bytes=readFileSync(registry+shard.path);assert.equal(sha(bytes),shard.sha256);const synonym=gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean).map(line=>JSON.parse(line)).find(x=>x.id==='7G2HV');assert.equal(synonym.scientificName,'Verbascum × pseudophoeniceum Reichardt');assert.equal(synonym.acceptedId,'7G2FW');assert.equal(synonym.status,'synonym')
  const headers={'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; hybrid synonym author verification)'},records=[]
  for(const name of ['Verbascum pseudophoeniceum','Verbascum × divaricatum']){const u=new URL('https://api.gbif.org/v1/species/match');u.searchParams.set('name',name);const response=await fetch(u,{headers,signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const x=await response.json();assert.equal(x.matchType,'EXACT');records.push({query:name,url:u.href,scientificName:x.scientificName,status:x.status,usageKey:x.usageKey,acceptedUsageKey:x.acceptedUsageKey})}
  assert.equal(records[0].scientificName,'Verbascum × pseudophoeniceum Reichardt');assert.equal(records[0].status,'SYNONYM');assert.equal(records[1].scientificName,'Verbascum × divaricatum Kitt.');assert.equal(records[1].status,'ACCEPTED');assert.equal(records[0].acceptedUsageKey,records[1].usageKey)
  const item='https://www.wikidata.org/entity/Q17748898',candidate=db.prepare('SELECT relations,target_url FROM primary_related_candidates WHERE node_id=? AND target_item=?').get('7G2FW',item);assert.ok(JSON.parse(candidate?.relations??'[]').includes('source-synonym-hybrid-variant'))
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,proof=Buffer.from(JSON.stringify({previous,manifestSha256:sha(manifestBytes),sourceSha256:sha(source),exclusionsSha256:sha(exclusions),synonym,records,targetUrl:candidate.target_url,limitation:'Wikidata target has no author statement; identity remains unverified',checkedAt:new Date().toISOString()}));writeFileSync(root+'late-hybrid-authority-proof.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,previous);db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256');db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'verified',node:'7G2FW',proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
