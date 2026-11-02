import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync,writeFileSync } from 'node:fs'
import { dirname,isAbsolute,join,relative,resolve,sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
const root=resolve('.git/evo-wikipedia-col26-8'),snapshot=resolve(process.argv[2]??'')
const child=relative(root,snapshot);assert.ok(child&&!isAbsolute(child)&&child!=='..'&&!child.startsWith('..'+sep))
const manifestBytes=readFileSync(join(snapshot,'manifest.json')),manifest=JSON.parse(manifestBytes)
assert.equal(manifest.releaseAlias,'COL26.8');assert.equal(manifest.contentMode,'links-only');assert.equal(manifest.stats.pendingNodes,0)
const targets=new Set()
for(const file of Object.values(manifest.shards)){
 const data=readFileSync(join(snapshot,file.path));assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256)
 for(const [id,entry] of Object.entries(JSON.parse(gunzipSync(data)).entries))if(['unresolved','ambiguous'].includes(entry.status))targets.add(id)
}
const projects=new Set(JSON.parse(readFileSync(join(root,'sources/wikipedia-projects.json'))).projects.map(x=>x.locale))
const values=new Map(),sourceDigests={}
for(const type of ['mdd','ioc']){
 const ledgerPath=`data/sources/${type==='mdd'?'mdd-9802':'ioc-2036'}-import-ledger.json`,ledgerBytes=readFileSync(ledgerPath),ledger=JSON.parse(ledgerBytes)
 assert.equal(ledger.registryManifestSha256,manifest.registryManifestSha256)
 const archive=readFileSync(ledger.source.archivePath);assert.equal(createHash('sha256').update(archive).digest('hex'),ledger.source.archiveSha256)
 sourceDigests[type]={ledgerSha256:createHash('sha256').update(ledgerBytes).digest('hex'),archiveSha256:ledger.source.archiveSha256}
 const packs=type==='mdd'?Object.values(ledger.outputs.packages):[ledger.outputs]
 for(const pack of packs){
  const base=dirname(dirname(pack.descriptor.path))
  for(const file of pack.files.filter(x=>x.role==='col-partition')){
   const data=readFileSync(join(base,file.path));assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256,file.path)
   const rows=JSON.parse(gunzipSync(data));assert.equal(rows.length,file.records)
   for(const row of rows){
    if(row.status!=='accepted'||!targets.has(row.colId))continue
    for(const name of row.acceptedName?.ancillary?.vernacular??[]){
     if(!name['col:name']||!name['col:language'])continue
     let locale;try{locale=new Intl.Locale(name['col:language']).language}catch{continue}
     if(!projects.has(locale))continue
     const title=name['col:name'].trim();if(!title||title.includes('|'))continue
     const key=JSON.stringify([row.colId,locale,title,type,row.acceptedName.id])
     values.set(key,{node:row.colId,locale,title,source:type,sourceTaxonId:row.acceptedName.id})
    }
   }
  }
 }
}
const out=join(root,'mdd-ioc-vernacular-inventory.json')
writeFileSync(out,JSON.stringify({snapshotSha256:createHash('sha256').update(manifestBytes).digest('hex'),sourceDigests,values:[...values.values()]}))
console.log(JSON.stringify({status:'complete',targets:targets.size,vernacularNames:values.size,nodes:new Set([...values.values()].map(x=>x.node)).size,output:out}))
