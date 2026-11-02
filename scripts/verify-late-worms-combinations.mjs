import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',sha=b=>createHash('sha256').update(b).digest('hex'),source=readFileSync(root+'unlinked-live-tree-related-proof.json'),prior=JSON.parse(source)
const db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions)
  const get=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),rows=[]
  const headers={'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; marine taxon relationship verification)'}
  for(const [sourceId,targetId] of [['852YT','47H73'],['852ZL','852W8']]){
    const sourceNode=get.get(sourceId),targetNode=get.get(targetId),candidate=prior.candidates.find(c=>c.node===sourceId&&c.relatedTarget?.id===targetId);assert.ok(candidate)
    const records=[]
    for(const name of [sourceNode.name,targetNode.name]){
      const url=`https://www.marinespecies.org/rest/AphiaRecordsByName/${encodeURIComponent(name)}?like=false&marine_only=false`,response=await fetch(url,{headers,signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const data=await response.json();assert.ok(Array.isArray(data));const matches=data.filter(x=>x.scientificname===name&&x.rank==='Species');assert.equal(matches.length,1);const x=matches[0];records.push({name:x.scientificname,authority:x.authority,status:x.status,validName:x.valid_name,validId:x.valid_AphiaID,aphiaId:x.AphiaID,family:x.family,url})
    }
    assert.ok(['superseded combination','unaccepted'].includes(records[0].status));assert.equal(records[1].status,'accepted');assert.equal(records[0].validName,targetNode.name);assert.equal(records[0].validId,records[1].validId)
    const current=db.prepare('SELECT relations FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(sourceId,candidate.targetItem,candidate.url);assert.ok(JSON.parse(current?.relations??'[]').includes('same-superfamily-other-node'))
    rows.push({sourceNode,targetNode,item:candidate.targetItem,url:candidate.url,records})
  }
  const previous=db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,checkedAt=new Date().toISOString(),proof=Buffer.from(JSON.stringify({previous,sourceSha256:sha(source),exclusionsSha256:sha(exclusions),rows,checkedAt}))
  writeFileSync(root+'late-worms-combinations-proof.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('primary_related_source_sha256').value,previous);const update=db.prepare('UPDATE primary_related_candidates SET relations=? WHERE node_id=? AND target_item=? AND target_url=?');for(const r of rows)assert.equal(update.run(JSON.stringify(['worms-superseded-combination']),r.sourceNode.id,r.item,r.url).changes,1);db.prepare('UPDATE meta SET value=? WHERE key=?').run(sha(proof),'primary_related_source_sha256');db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'verified',nodes:rows.map(r=>r.sourceNode.id),proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
