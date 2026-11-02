import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
const root='.git/evo-wikipedia-col26-8/',source=readFileSync(root+'unresolved-same-parent-peer-inventory.json'),inventory=JSON.parse(source),rows=[]
const norm=s=>typeof s==='string'?s.normalize('NFKD').toLowerCase().replace(/[^\p{L}\p{N}]/gu,''):''
for(const row of inventory.rows){
  const evidence=[]
  for(const record of [row.sourceRecord,row.targetRecord]){
    const u=new URL('https://api.gbif.org/v1/species/match');u.searchParams.set('name',record.scientificName)
    let result
    for(let attempt=0;attempt<4;attempt++)try{const response=await fetch(u,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon authorship verification)'},signal:AbortSignal.timeout(30000)});assert.ok(response.ok);result=await response.json();break}catch(error){if(attempt===3)throw error;await new Promise(resolve=>setTimeout(resolve,(attempt+1)*2000))}
    const acceptable=['EXACT','FUZZY'].includes(result.matchType)&&result.rank==='SPECIES'&&result.confidence>=95&&['ACCEPTED','SYNONYM'].includes(result.status)&&norm(result.scientificName).includes(norm(record.authorship))
    evidence.push({query:record.scientificName,url:u.href,scientificName:result.scientificName??null,status:result.status??null,rank:result.rank??null,matchType:result.matchType??null,confidence:result.confidence??null,usageKey:result.usageKey??null,acceptedUsageKey:result.acceptedUsageKey??null,acceptable,effectiveKey:acceptable?(result.status==='SYNONYM'?result.acceptedUsageKey??null:result.usageKey??null):null})
  }
  const [a,b]=evidence,outcome=!a.effectiveKey||!b.effectiveKey?'insufficient':a.effectiveKey===b.effectiveKey?'same-accepted-key':'distinct-accepted-key'
  rows.push({...row,evidence,outcome})
  if(rows.length%10===0)console.log(JSON.stringify({checked:rows.length,total:inventory.rows.length}))
}
const proof={inventorySha256:createHash('sha256').update(source).digest('hex'),checkedAt:new Date().toISOString(),rows};writeFileSync(root+'unresolved-same-parent-gbif-checks.json',JSON.stringify(proof),{flag:'wx'})
const counts={};for(const row of rows)counts[row.outcome]=(counts[row.outcome]??0)+1;console.log(JSON.stringify({status:'checked',counts,examples:rows.filter(r=>r.outcome==='same-accepted-key').slice(0,10).map(r=>({node:r.source.id,name:r.source.name,target:r.target.name}))}))
