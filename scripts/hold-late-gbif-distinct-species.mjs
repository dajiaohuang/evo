import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
const root='.git/evo-wikipedia-col26-8/',registry='data/catalogue-of-life/releases/2026-08-20/registry/',sha=b=>createHash('sha256').update(b).digest('hex'),manifestBytes=readFileSync(registry+'manifest.json'),manifest=JSON.parse(manifestBytes),db=new DatabaseSync(root+'inventory.sqlite'),audit=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const somatogyrus=process.argv.includes('--somatogyrus')
const achaeaDurfa=process.argv.includes('--achaeadurfa'),achaeaSynethes=process.argv.includes('--achaesynethes')
const unkeyedTarget=process.argv.includes('--unkeyed-target')||somatogyrus||achaeaDurfa||achaeaSynethes
try{
  const exclusions=readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json');checkPageAudit(audit,db,exclusions);assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('manifest_sha256').value,sha(manifestBytes))
  const pairs=achaeaDurfa?[['94Q2Y',null,'Q13224413','Achaea durfa']]:achaeaSynethes?[['94Q36',null,'Q134570795','Achaea synethes']]:somatogyrus?[['99QKC',null,'Q4932598','Somatogyrus rheophilas']]:unkeyedTarget?[['95QXT',null,'Q2898772','Rachesa nisa']]:[['8VJYQ','8VJYN','Q13257368'],['95YRR','95YR6','Q16974775'],['7G2FW','5B2DV','Q17746808']],holds=[]
  const getRow=id=>{const prefix=createHash('sha256').update(id).digest()[0].toString(16).padStart(2,'0'),file=manifest.hierarchy.nodes.files.find(x=>x.prefix===prefix),bytes=readFileSync(registry+file.path);assert.equal(sha(bytes),file.sha256);const row=gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean).map(line=>JSON.parse(line)).find(x=>x.id===id);assert.ok(row);return row}
  for(const [sourceId,targetId,qid,targetName] of pairs){
    const source=getRow(sourceId),target=targetId?getRow(targetId):null,get=db.prepare('SELECT id,name,rank FROM nodes WHERE id=?'),sourceNode=get.get(sourceId),targetNode=targetId?get.get(targetId):{name:targetName,rank:'species'};assert.equal(source.rank,'species');if(target)assert.equal(target.rank,'species')
    const item=`https://www.wikidata.org/entity/${qid}`,candidate=db.prepare('SELECT target_url,relations FROM primary_related_candidates WHERE node_id=? AND target_item=?').get(sourceId,item);assert.ok(candidate)
    const evidence=[]
    for(const [index,node] of [sourceNode,targetNode].entries()){
      const url=new URL('https://api.gbif.org/v1/species/match');url.searchParams.set('name',node.name);const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; distinct taxon verification)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);const x=await response.json();assert.equal(x.matchType,'EXACT');assert.ok(x.status==='ACCEPTED'||(index===1&&x.status==='SYNONYM'&&x.acceptedUsageKey));assert.equal(x.rank,'SPECIES');assert.ok(x.scientificName.startsWith(node.name));assert.ok(x.usageKey);evidence.push({name:node.name,scientificName:x.scientificName,status:x.status,usageKey:x.usageKey,acceptedUsageKey:x.acceptedUsageKey??null,matchType:x.matchType,url:url.href})
    }
    assert.notEqual(evidence[0].usageKey,evidence[1].acceptedUsageKey??evidence[1].usageKey);holds.push({node:sourceId,target:targetId,item,url:candidate.target_url,source,target,evidence,reason:'GBIF associates the source and linked target with distinct accepted species'})
  }
  const keys=['primary_related_source_sha256','ncbi_candidate_identity_holds_sha256','candidate_identity_held_urls_sha256'],meta=db.prepare('SELECT value FROM meta WHERE key=?'),previous=Object.fromEntries(keys.map(k=>[k,meta.get(k)?.value]));for(const v of Object.values(previous))assert.match(v,/^[0-9a-f]{64}$/)
  const proof=Buffer.from(JSON.stringify({previous,manifestSha256:sha(manifestBytes),exclusionsSha256:sha(exclusions),holds,checkedAt:new Date().toISOString()}));writeFileSync(root+(achaeaDurfa?'late-gbif-distinct-achaea-durfa-proof.json':achaeaSynethes?'late-gbif-distinct-achaea-synethes-proof.json':somatogyrus?'late-gbif-distinct-somatogyrus-proof.json':unkeyedTarget?'late-gbif-distinct-unkeyed-target-proof.json':'late-gbif-distinct-species-proof.json'),proof,{flag:'wx'})
  db.exec('BEGIN IMMEDIATE');try{for(const k of keys)assert.equal(meta.get(k).value,previous[k]);const remove=db.prepare('DELETE FROM primary_related_candidates WHERE node_id=? AND target_item=? AND target_url=?'),holdItem=db.prepare('INSERT OR IGNORE INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)'),holdUrl=db.prepare('INSERT OR IGNORE INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)');for(const h of holds){assert.equal(remove.run(h.node,h.item,h.url).changes,1);holdItem.run(h.node,h.item,h.reason);holdUrl.run(h.node,h.url)}const update=db.prepare('UPDATE meta SET value=? WHERE key=?');for(const k of keys)update.run(sha(proof),k);db.exec('COMMIT')}catch(error){db.exec('ROLLBACK');throw error}
  console.log(JSON.stringify({status:'held',nodes:holds.map(h=>h.node),proofSha256:sha(proof)}))
}finally{audit.close();db.close()}
