import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { similarTaxonNames,similarSpeciesInflection } from './wikipedia-col-redirect-similarity.mjs'

const root='.git/evo-wikipedia-col26-8/',published=root+'published-data-reviewed-20261031/',registry='data/catalogue-of-life/releases/2026-08-20/registry/',sha=b=>createHash('sha256').update(b).digest('hex')
const publishedBytes=readFileSync(published+'manifest.json'),publishedManifest=JSON.parse(publishedBytes),registryBytes=readFileSync(registry+'manifest.json'),registryManifest=JSON.parse(registryBytes)
const authorMismatch=process.argv.includes('--author-mismatch')
const sameNameMoved=process.argv.includes('--same-name-moved')
assert.ok(!(authorMismatch&&sameNameMoved))
const db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true})
try{
  assert.equal(db.prepare('SELECT value FROM meta WHERE key=?').get('manifest_sha256').value,sha(registryBytes))
  const node=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?'),lookup=db.prepare('SELECT candidates_json FROM names WHERE name=?'),existing=db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? UNION SELECT 1 FROM exact_source_synonym_links WHERE node_id=? UNION SELECT 1 FROM qualified_unkeyed_species_links WHERE node_id=?'),held=db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const authorKey=s=>typeof s==='string'?s.normalize('NFKD').toLowerCase().replace(/[^\p{L}\p{N}]/gu,''):''
  const similar=(a,b)=>{if(similarTaxonNames(a,b)||similarSpeciesInflection(a,b))return true;const x=a.toLowerCase().split(/\s+/),y=b.toLowerCase().split(/\s+/);if(x.length!==2||y.length!==2||x[0]!==y[0])return false;let i=0;while(i<x[1].length&&i<y[1].length&&x[1][i]===y[1][i])i++;return i>=5}
  const shardCache=new Map()
  const registryRow=id=>{const prefix=createHash('sha256').update(id).digest()[0].toString(16).padStart(2,'0');if(!shardCache.has(prefix)){const meta=registryManifest.hierarchy.nodes.files.find(x=>x.prefix===prefix),bytes=readFileSync(registry+meta.path);assert.equal(sha(bytes),meta.sha256);shardCache.set(prefix,new Map(gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean).map(line=>{const r=JSON.parse(line);return[r.id,r]})))}return shardCache.get(prefix).get(id)}
  const rows=[]
  for(const shard of Object.values(publishedManifest.shards)){
    const bytes=readFileSync(published+shard.path);assert.equal(sha(bytes),shard.sha256)
    for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(bytes)).entries)){
      if(entry.status!=='unresolved'||entry.matchKind||existing.get(id,id,id))continue
      const current=node.get(id);if(!current||!(sameNameMoved?['species','genus'].includes(current.rank):current.rank==='species'))continue
      for(const candidate of JSON.parse(lookup.get(current.name)?.candidates_json||'[]')){
        if(!candidate.articles?.length||held.get(id,candidate.item))continue
        for(const targetId of candidate.colIds??[]){
          const target=node.get(targetId);if(!target||target.id===id||target.rank!==current.rank||!target.parent_id)continue
          if(sameNameMoved){
            if(target.name!==current.name||target.parent_id===current.parent_id)continue
            const path=value=>{const result=[];for(let i=0;i<20&&value;i++){result.push(value);value=value.parent_id?node.get(value.parent_id):null}return result}
            const other=new Set(path(target).filter(x=>['family','superfamily','order'].includes(x.rank)).map(x=>x.id));if(!path(current).some(x=>other.has(x.id)))continue
          }else if(target.parent_id!==current.parent_id||!similar(current.name,target.name))continue
          const src=registryRow(id),tgt=registryRow(targetId);if(!src||!tgt||!authorKey(src.authorship)||!authorKey(tgt.authorship)||(authorMismatch?authorKey(src.authorship)===authorKey(tgt.authorship):authorKey(src.authorship)!==authorKey(tgt.authorship)))continue
          rows.push({source:current,target,sourceRecord:src,targetRecord:tgt,item:candidate.item,articles:candidate.articles})
        }
      }
    }
  }
  const result={publishedManifestSha256:sha(publishedBytes),registryManifestSha256:sha(registryBytes),checkedAt:new Date().toISOString(),rows}
  writeFileSync(root+(sameNameMoved?'unresolved-same-name-moved-inventory.json':authorMismatch?'unresolved-same-parent-author-mismatch-inventory.json':'unresolved-same-parent-peer-inventory.json'),JSON.stringify(result),{flag:'wx'})
  console.log(JSON.stringify({status:'scanned',candidates:rows.length,nodes:new Set(rows.map(r=>r.source.id)).size,examples:rows.slice(0,10).map(r=>({node:r.source.id,name:r.source.name,target:r.target.name,sourceAuthor:r.sourceRecord.authorship,targetAuthor:r.targetRecord.authorship}))}))
}finally{db.close()}
