// Bounded exact-ID PBDB parent closure. Responses and rejected identities are retained.
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
const root = process.cwd(), out = join(root, 'data/node-map/pbdb-parent-closure-20261029')
const current = JSON.parse(await readFile(join(root,'public/data/current.json')))
const reader = JSON.parse(await readFile(join(root,'public/data',current.pbdbReader.manifest.url)))
const index = JSON.parse(gunzipSync(await readFile(join(root,'public/data',reader.index.url))))
const known = new Set(index.map(x=>x.pbdbTaxonId))
const seed = JSON.parse(await readFile(join(root,'data/node-map/pbdb-exact-20261029-v2/manifest.json')))
for (const b of seed.batches) for (const id of b.returned || []) known.add(id)
const ledger = JSON.parse(await readFile(join(root,'public/node-map/ledger.json')))
let frontier = [...new Set(ledger.entries.map(e=>e.parentId).filter(Boolean))].filter(id=>!known.has(id)).sort()
await mkdir(out,{recursive:true})
const attempted = new Set(), levels = []
for (let depth=0; frontier.length && depth<32; depth++) {
  if (attempted.size+frontier.length>50000) { levels.push({depth,stop:'50,000 ID service limit',unattempted:frontier}); break }
  if (frontier.some(x=>!/^txn:\d+$/.test(x))) throw Error('invalid source ID')
  const chunks=Array.from({length:Math.ceil(frontier.length/100)},(_,i)=>frontier.slice(i*100,(i+1)*100))
  const batches=Array(chunks.length); let next=0
  async function worker() {
    while (next<chunks.length) {
      const i=next++, requested=chunks[i], url='https://paleobiodb.org/data1.2/taxa/list.json?'+new URLSearchParams({id:requested.join(','),show:'attr,phylo'})
      try {
        const response=await fetch(url,{signal:AbortSignal.timeout(30000)})
        if (!response.ok) throw Error(`HTTP ${response.status}`)
        const raw=Buffer.from(await response.arrayBuffer()), parsed=JSON.parse(raw)
        if (!Array.isArray(parsed.records)) throw Error('missing records')
        const seen=new Set(), unexpected=[], duplicates=[]
        for (const row of parsed.records) {
          if (!requested.includes(row.oid)) unexpected.push(row.oid)
          else if(seen.has(row.oid)) duplicates.push(row.oid)
          else seen.add(row.oid)
        }
        const file=`level-${String(depth).padStart(2,'0')}-batch-${String(i).padStart(3,'0')}.json`
        await writeFile(join(out,file),raw,{flag:'wx'})
        batches[i]={file,url,requested,returned:[...seen].sort(),unexpected,duplicates,sha256:createHash('sha256').update(raw).digest('hex')}
      } catch (e) { batches[i]={requested,error:String(e)} }
    }
  }
  await Promise.all(Array.from({length:4},worker))
  for(const id of frontier) attempted.add(id)
  const candidates=[]
  for(const batch of batches) {
    if(batch.error || batch.duplicates?.length) continue
    const exact=new Set(batch.returned), raw=JSON.parse(await readFile(join(out,batch.file)))
    for(const row of raw.records) if(exact.has(row.oid)) {
      known.add(row.oid)
      if(typeof row.par==='string' && /^txn:\d+$/.test(row.par)) candidates.push(row.par)
    }
  }
  levels.push({depth,batches})
  frontier=[...new Set(candidates)].filter(x=>!known.has(x)&&!attempted.has(x)).sort()
  console.log(JSON.stringify({depth,requested:chunks.reduce((n,c)=>n+c.length,0),returned:batches.reduce((n,b)=>n+(b.returned?.length||0),0),errors:batches.filter(b=>b.error).length,next:frontier.length}))
}
const manifest={schemaVersion:1,retrievedAt:new Date().toISOString(),selection:'Recorded PBDB parent identifiers recursively; exact returned IDs only',maxDepth:32,maxRequested:50000,remaining:frontier,levels}
await writeFile(join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'})
