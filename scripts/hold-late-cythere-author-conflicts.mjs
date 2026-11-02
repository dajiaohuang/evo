import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',registry='data/catalogue-of-life/releases/2026-08-20/registry/',sha=b=>createHash('sha256').update(b).digest('hex')
const manifestBytes=readFileSync(registry+'manifest.json'),manifest=JSON.parse(manifestBytes),wormsBytes=readFileSync(root+'late-worms-combinations-proof.json'),worms=JSON.parse(wormsBytes),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions);assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('manifest_sha256').value,sha(manifestBytes))
  const sourceRows=[]
  for(const id of ['852YT','47H73','852ZL','852W8']){
    const prefix=createHash('sha256').update(id).digest()[0].toString(16).padStart(2,'0'),file=manifest.hierarchy.nodes.files.find(x=>x.prefix===prefix),bytes=readFileSync(registry+file.path);assert.equal(sha(bytes),file.sha256)
    const row=gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean).map(line=>JSON.parse(line)).find(x=>x.id===id);assert.ok(row);sourceRows.push(row)
  }
  const byId=id=>sourceRows.find(r=>r.id===id)
  assert.equal(byId('852YT').authorship,'Capeder, 1902');assert.equal(byId('47H73').authorship,'(Brady, 1880)');assert.equal(byId('852ZL').authorship,'(Cornuel, 1846) Deroo, 1957');assert.equal(byId('852W8').authorship,'(Norman, 1865)')
  const holds=[]
  for(const [sourceId,targetId] of [['852YT','47H73'],['852ZL','852W8']]){
    const w=worms.rows.find(r=>r.sourceNode.id===sourceId&&r.targetNode.id===targetId);assert.ok(w);assert.notEqual(byId(sourceId).authorship,w.records[0].authority)
    const current=db.prepare('SELECT relations FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?').get(sourceId,w.item,w.url);assert.ok(JSON.parse(current?.relations??'[]').includes('worms-superseded-combination'))
    holds.push({node:sourceId,target:targetId,item:w.item,url:w.url,reason:`Catalogue source authorship ${byId(sourceId).authorship} differs from the WoRMS combination authorship ${w.records[0].authority}`})
  }
  const keys=['primary_related_source_sha256','ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],getMeta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(k=>[k,getMeta.get(k)?.value]));for(const v of Object.values(previous))assert.match(v,/^[0-9a-f]{64}$/)
  const proof=Buffer.from(JSON.stringify({previous,manifestSha256:sha(manifestBytes),wormsProofSha256:sha(wormsBytes),exclusionsSha256:sha(exclusions),sourceRows,holds,checkedAt:new Date().toISOString()}));writeFileSync(root+'late-cythere-author-conflicts-proof.json',proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{
    for(const k of keys)assert.equal(getMeta.get(k).value,previous[k])
    const remove=db.prepare('DELETE FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?'),holdItem=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),holdUrl=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for(const h of holds){assert.equal(remove.run(h.node,h.item,h.url).changes,1);holdItem.run(h.node,h.item,h.reason);holdUrl.run(h.node,h.url)}
    const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const k of keys)update.run(sha(proof),k)
    db.exec('COMMIT')
  }catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'held',nodes:holds.map(h=>h.node),proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
