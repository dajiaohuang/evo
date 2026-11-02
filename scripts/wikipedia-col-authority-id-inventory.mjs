import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync,writeFileSync} from 'node:fs'
import {brotliDecompressSync,gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/',dir=process.argv[2];assert.ok(dir,'Provide the published snapshot')
const manifestBytes=readFileSync(dir+'/manifest.json'),manifest=JSON.parse(manifestBytes);assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only')
const db=new DatabaseSync(dir+'/inventory.sqlite',{readOnly:true}),get=db.prepare('SELECT name,rank,source_dataset_id FROM nodes WHERE id=?'),targets=new Set()
for(const f of Object.values(manifest.shards)){const data=readFileSync(dir+'/'+f.path);assert.equal(createHash('sha256').update(data).digest('hex'),f.sha256);for(const [id,e] of Object.entries(JSON.parse(gunzipSync(data)).entries))if(['unresolved','ambiguous'].includes(e.status))targets.add(id)}
const definitions=[{path:'data/sources/wfo-plant-crosswalk-col26.8.json.br',kind:'wfo',property:'P7715',records:'colRecords',id:'wfoId',status:'status',source:'colSourceDatasetId',pattern:/^wfo-\d{10}$/},{path:'data/sources/fungi-species-fungorum-crosswalk-col26.8.json.br',kind:'fungorum',property:'P1391',records:'records',id:'indexFungorumId',status:'status',source:'sourceDatasetId',pattern:/^\d+$/}]
const values=[],sources=[]
for(const spec of definitions){
 const bytes=readFileSync(spec.path),data=JSON.parse(brotliDecompressSync(bytes)),hash=createHash('sha256').update(bytes).digest('hex');let accepted=0
 for(const row of data[spec.records]){
  if(!targets.has(row.colId)||row[spec.status]!=='accepted'||!spec.pattern.test(row[spec.id]??''))continue
  const node=get.get(row.colId);assert.ok(node);assert.equal(node.rank,'species');assert.equal(node.source_dataset_id,String(row[spec.source]))
  values.push({node:row.colId,kind:spec.kind,property:spec.property,externalId:row[spec.id]});accepted++
 }
 sources.push({path:spec.path,sha256:hash,kind:spec.kind,accepted})
}
db.close();const out=root+'authority-id-inventory.json';writeFileSync(out,JSON.stringify({snapshotSha256:createHash('sha256').update(manifestBytes).digest('hex'),sources,values}))
console.log(JSON.stringify({unmatchedNodes:targets.size,sources,values:values.length,output:out}))
