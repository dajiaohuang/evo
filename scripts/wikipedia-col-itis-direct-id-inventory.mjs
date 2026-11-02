import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {createReadStream,readFileSync,writeFileSync} from 'node:fs'
import {createInterface} from 'node:readline'
import {createGunzip,gunzipSync} from 'node:zlib'
import {DatabaseSync} from 'node:sqlite'
import {execFileSync} from 'node:child_process'

const root='.git/evo-wikipedia-col26-8/', snapshot=process.argv[2]
assert.ok(snapshot,'Provide the published snapshot')
const bytes=readFileSync(snapshot+'/manifest.json'), manifest=JSON.parse(bytes)
assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.releaseAlias,'COL26.8')
const global=JSON.parse(readFileSync('data/catalogue-of-life/releases/2026-08-20/global-sources/manifest.json'))
const source=global.sources.find(x=>x.id==='itis-global-original-rc130');assert.ok(source)
const descBytes=execFileSync('rtk',['proxy','git','show',`53d0600b57ac5ea25e68693375dc73103dd03547:${source.descriptorPath}`],{maxBuffer:20*1024*1024})
assert.equal(createHash('sha256').update(descBytes).digest('hex'),source.descriptorSha256)
const descriptor=JSON.parse(descBytes);assert.equal(descriptor.datasetKey,2144)
const db=new DatabaseSync(snapshot+'/inventory.sqlite',{readOnly:true}),node=db.prepare('SELECT name,rank FROM nodes WHERE id=?'),targets=new Map()
for(const f of Object.values(manifest.shards)){
 const data=readFileSync(snapshot+'/'+f.path);assert.equal(createHash('sha256').update(data).digest('hex'),f.sha256)
 for(const [id,e] of Object.entries(JSON.parse(gunzipSync(data)).entries))if(['unresolved','ambiguous'].includes(e.status)){
  const row=node.get(id);assert.ok(row);const key=JSON.stringify([row.name,row.rank.toLowerCase()]);if(!targets.has(key))targets.set(key,new Set());targets.get(key).add(id)
 }
}
db.close()
async function* records(member){
 for(const file of descriptor.projection.files.filter(x=>x.member===member)){
  const hash=createHash('sha256');for await(const b of createReadStream(file.path))hash.update(b);assert.equal(hash.digest('hex'),file.sha256)
  let count=0;for await(const line of createInterface({input:createReadStream(file.path).pipe(createGunzip()),crlfDelay:Infinity})){if(line){const row=JSON.parse(line);assert.equal(row.sourceMember,member);count++;yield row.fields}}assert.equal(count,file.records)
 }
}
const nameNodes=new Map()
for await(const row of records('Name.tsv')){const ids=targets.get(JSON.stringify([row.scientificName,row.rank.toLowerCase()]));if(ids?.size===1)nameNodes.set(row.ID,[...ids][0])}
const mapping=new Map()
for await(const row of records('Taxon.tsv')){const id=nameNodes.get(row.nameID);if(id&&/^\d+$/.test(row.ID)){const key=JSON.stringify([id,row.ID]);mapping.set(key,{node:id,itisTaxonId:row.ID})}}
const out=root+'itis-direct-id-inventory.json'
writeFileSync(out,JSON.stringify({snapshotSha256:createHash('sha256').update(bytes).digest('hex'),descriptorSha256:source.descriptorSha256,description:'Exact name and rank candidates; identity remains unconfirmed.',values:[...mapping.values()]}))
console.log(JSON.stringify({targets:targets.size,matchedNameIds:nameNodes.size,mappings:mapping.size,output:out}))
