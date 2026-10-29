// Resumable exact-ID lookup and recursive source-parent closure.
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile, rename } from 'node:fs/promises'
import { join } from 'node:path'
const base=join(process.cwd(),'.git/platform-v2/local/node-map-expansion')
const dir=join(base,'taxa-v5'), input=JSON.parse(await readFile(join(base,'input-v5.json')))
const known=new Set(input.knownTaxa)
await mkdir(dir,{recursive:true})
const hash=x=>createHash('sha256').update(x).digest('hex')
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms))
let state
try { state=JSON.parse(await readFile(join(dir,'state.json'))) } catch(e) { if(e.code!=='ENOENT') throw e; state={version:1,frontier:input.missingTaxa,attempted:[],returned:[],batches:[],depth:0} }
async function save(){const path=join(dir,'state.json'),tmp=path+'.tmp'; await writeFile(tmp,JSON.stringify(state,null,2)+'\n'); await rename(tmp,path)}
await save()
for (;state.frontier.length && state.depth<32;) {
  const requested=state.frontier.slice(0,300), key=hash(Buffer.from(requested.join('\n'))).slice(0,20)
  const url='https://paleobiodb.org/data1.2/taxa/list.json?'+new URLSearchParams({id:requested.join(','),show:'attr,phylo',limit:'all'})
  let raw, error
  for(let n=0;n<4;n++) {
    try { const res=await fetch(url,{signal:AbortSignal.timeout(45000)}); if(!res.ok) throw Error('HTTP '+res.status); raw=Buffer.from(await res.arrayBuffer()); break }
    catch(e){error=String(e); await sleep(1000*2**n)}
  }
  if(!raw){state.lastError={url,error,at:new Date().toISOString()}; await save(); console.error(JSON.stringify(state.lastError)); process.exitCode=1; break}
  const seen=new Set(), requestedSet=new Set(requested), parents=[], unexpected=[]
  try {
    const data=JSON.parse(raw)
    if(!Array.isArray(data.records)) throw Error('missing records')
    for(const row of data.records) {
      if(!requestedSet.has(row.oid)){unexpected.push(row.oid); continue}
      if(seen.has(row.oid)) throw Error('duplicate ID '+row.oid)
      seen.add(row.oid); if(/^txn:\d+$/.test(row.par||'')) parents.push(row.par)
    }
  } catch(e) {
    const file='error-'+key+'-'+hash(raw).slice(0,12)+'.json'
    try {await writeFile(join(dir,file),raw,{flag:'wx'})} catch(writeError) {if(writeError.code!=='EEXIST') throw writeError}
    state.lastError={url,error:String(e),file,sha256:hash(raw),at:new Date().toISOString()}; await save(); throw e
  }
  const file=key+'.json', filename=join(dir,file)
  try {await writeFile(filename,raw,{flag:'wx'})} catch(e) {if(e.code!=='EEXIST'||hash(await readFile(filename))!==hash(raw)) throw e}
  state.frontier.splice(0,requested.length); state.attempted.push(...requested); state.returned.push(...seen)
  const attempted=new Set(state.attempted), queued=new Set(state.frontier)
  for(let id of parents) {
    const chain=new Set()
    while(id && known.has(id)) {
      if(chain.has(id)) throw Error('cycle in cached parent chain '+id)
      chain.add(id); id=input.knownParents[id]
    }
    if(id&&!/^txn:\d+$/.test(id)) throw Error('invalid cached parent identifier '+id)
    if(id&&!attempted.has(id)&&!queued.has(id)){state.frontier.push(id);queued.add(id)}
  }
  state.batches.push({file,url,sha256:hash(raw),requested,returned:[...seen].sort(),unexpected,retrievedAt:new Date().toISOString()})
  delete state.lastError; await save()
  if(state.batches.length%10===0) console.log(JSON.stringify({batches:state.batches.length,attempted:state.attempted.length,returned:state.returned.length,remaining:state.frontier.length}))
  await sleep(500)
}
console.log(JSON.stringify({attempted:state.attempted.length,returned:state.returned.length,remaining:state.frontier.length}))
