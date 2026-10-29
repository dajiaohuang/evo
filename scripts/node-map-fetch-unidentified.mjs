// Freeze exact occurrence lookups for records lacking a source taxon ID.
import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
const root=process.cwd(), dir=join(root,'data/fossils'), out=join(root,'data/node-map/pbdb-occurrence-audit-20261029')
const ids=[]
for(const file of (await readdir(dir)).filter(x=>x.endsWith('.json')).sort())
  for(const row of JSON.parse(await readFile(join(dir,file)))) if(row.oid && !row.tid) ids.push(row.oid)
if(new Set(ids).size!==ids.length || ids.some(x=>!/^occ:\d+$/.test(x))) throw Error('invalid or duplicate occurrence ID')
ids.sort(); await mkdir(out,{recursive:true})
const batches=[]
for(let i=0;i<ids.length;i+=100) {
  const requested=ids.slice(i,i+100),url='https://paleobiodb.org/data1.2/occs/list.json?'+new URLSearchParams({id:requested.join(','),show:'ident'})
  try {
    const res=await fetch(url,{signal:AbortSignal.timeout(30000)}); if(!res.ok) throw Error(`HTTP ${res.status}`)
    const raw=Buffer.from(await res.arrayBuffer()), parsed=JSON.parse(raw)
    if(!Array.isArray(parsed.records)) throw Error('missing records')
    const returned=[],unexpected=[],duplicates=[],seen=new Set()
    for(const r of parsed.records) if(!requested.includes(r.oid)) unexpected.push(r.oid); else if(seen.has(r.oid)) duplicates.push(r.oid); else {seen.add(r.oid);returned.push(r.oid)}
    const file=`batch-${String(i/100).padStart(3,'0')}.json`; await writeFile(join(out,file),raw,{flag:'wx'})
    batches.push({file,url,requested,returned,unexpected,duplicates,sha256:createHash('sha256').update(raw).digest('hex')})
  } catch(e) {batches.push({requested,error:String(e)})}
}
await writeFile(join(out,'manifest.json'),JSON.stringify({schemaVersion:1,retrievedAt:new Date().toISOString(),selection:'Exact occurrence IDs with no taxon ID in frozen fossil files',batches},null,2)+'\n',{flag:'wx'})
console.log(JSON.stringify({requested:ids.length,returned:batches.reduce((n,b)=>n+(b.returned?.length||0),0),errors:batches.filter(b=>b.error).length}))
