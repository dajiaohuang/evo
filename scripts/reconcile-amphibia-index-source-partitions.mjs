import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const expanded=process.argv.includes('--expanded'),dateSort=process.argv.includes('--date-sort'),name=process.argv.slice(2).filter(x=>!['--expanded','--manifest-only','--date-sort'].includes(x)).join(' '),base='docs/amphibia-content',ledgerPath=`${base}/${expanded?'expanded':'full-roster'}-literature-collection.json`,ledger=JSON.parse(fs.readFileSync(ledgerPath)),job=ledger.names.find(n=>n.name===name)
const manifestOnly=process.argv.includes('--manifest-only'),indexRoot=`data/sources/snapshots/amphibia-${expanded?'expanded':'full-roster'}-literature-2026-10-03`;if(job&&fs.existsSync(`${indexRoot}/${job.key}/manifest.json`))Object.assign(job,JSON.parse(fs.readFileSync(`${indexRoot}/${job.key}/manifest.json`)));
if(!job||job.complete)throw Error('Requires an incomplete name and no running collector for this ledger')
const root=`data/sources/snapshots/amphibia-index-identities-2026-10-03/${job.key}/source-partitions-${Date.now()}`;fs.mkdirSync(root,{recursive:true})
const known=new Set(),sources=new Set(),seenPages=new Set()
function inspect(entry){for(const p of entry.pages??[]){if(seenPages.has(p.file))continue;seenPages.add(p.file);for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result){known.add(`${r.source}:${r.id}`);sources.add(r.source)}}if(entry.priorAttemptManifest)inspect(JSON.parse(fs.readFileSync(entry.priorAttemptManifest)))}
inspect(job)
const receipt={name,query:`"${name}"`,scope:'Source-partition ID pagination with retained core metadata and exact-ID metadata captures; no original texts downloaded',knownCoreIdentities:known.size,partitions:[],additionalCorePages:[],complete:false,scientificEvidenceRead:false,biologicalClaimsAssigned:false},ids=new Set()
const hash=b=>crypto.createHash('sha256').update(b).digest('hex')
async function capture(query,label,mark='*',type='idlist'){const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=1000&resultType=${type}&cursorMark=${encodeURIComponent(mark)}`;let raw,last
 for(let attempt=0;attempt<3;attempt++){try{const res=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!res.ok)throw Error(`HTTP${res.status}`);raw=Buffer.from(await res.arrayBuffer());break}catch(e){last=e}}if(!raw)throw last
 const data=JSON.parse(raw);if(!Array.isArray(data.resultList?.result))throw Error('Invalid index response');const file=`${root}/${label}.json.gz`;fs.writeFileSync(file,zlib.gzipSync(raw),{flag:'wx'});return {data,page:{file,url,sha256:hash(raw),gzipSha256:hash(fs.readFileSync(file)),hitCount:data.hitCount,records:data.resultList.result.length,capturedAt:new Date().toISOString()}}
}
const persist=()=>fs.writeFileSync(`${root}/manifest.json`,JSON.stringify(receipt,null,2)+'\n')
try{
 const initial=await capture(receipt.query,'root-initial');receipt.initialRoot=initial.page
 for(const source of [...sources].sort()){
  const part={source,query:`${receipt.query} AND SRC:${source}${dateSort?' sort_date:y':''}`,sortMode:dateSort?'publication-date-descending':'default',pages:[],complete:false};receipt.partitions.push(part);let mark='*';const local=new Set()
  while(true){const {data,page}=await capture(part.query,`${source}-${String(part.pages.length+1).padStart(5,'0')}`,mark);for(const r of data.resultList.result){if(r.source!==source||!r.id)throw Error('Unexpected source partition identity');local.add(`${r.source}:${r.id}`);ids.add(`${r.source}:${r.id}`)}const next=data.nextCursorMark,terminal=!data.resultList.result.length||!next||next===mark;part.pages.push({...page,terminal});part.hitCount=data.hitCount;persist();if(terminal)break;mark=next;if(part.pages.length%10===0)console.log(JSON.stringify({name,source,pages:part.pages.length,ids:local.size,hitCount:part.hitCount}))}
  part.distinctIdentities=local.size;part.indexHitCountStable=part.pages.every(p=>p.hitCount===part.hitCount);part.complete=part.indexHitCountStable&&local.size===part.hitCount;persist()
 }
 receipt.missingCoreIds=[...ids].filter(id=>!known.has(id))
 for(const identity of receipt.missingCoreIds){const colon=identity.indexOf(':'),source=identity.slice(0,colon),id=identity.slice(colon+1),{data,page}=await capture(`${receipt.query} AND SRC:${source} AND EXT_ID:${id}`,`additional-core-${receipt.additionalCorePages.length}`,'*','core');if(data.hitCount!==1||!data.resultList.result.some(r=>`${r.source}:${r.id}`===identity))throw Error(`Missing exact metadata ${identity}`);receipt.additionalCorePages.push({...page,identity});known.add(identity)}
 const final=await capture(receipt.query,'root-final');receipt.finalRoot=final.page;receipt.distinctIdentities=ids.size;receipt.partitionHitCountSum=receipt.partitions.reduce((n,p)=>n+p.hitCount,0);receipt.allPartitionMetadataCaptured=[...ids].every(id=>known.has(id));receipt.complete=receipt.partitions.every(p=>p.complete)&&initial.data.hitCount===final.data.hitCount&&ids.size===final.data.hitCount&&receipt.partitionHitCountSum===final.data.hitCount&&receipt.allPartitionMetadataCaptured
}catch(e){receipt.error=String(e)}persist()
job.sourcePartitionReconciliation={manifestPath:`${root}/manifest.json`,complete:receipt.complete,distinctIdentities:receipt.distinctIdentities,partitionHitCountSum:receipt.partitionHitCountSum,initialRootHitCount:receipt.initialRoot?.hitCount,finalRootHitCount:receipt.finalRoot?.hitCount,error:receipt.error}
// Additional metadata pages are part of the source index, without replacing original attempts.
job.pages.push(...receipt.additionalCorePages)
if(receipt.complete){job.complete=true;delete job.error;job.completionBasis='Stable source-partition ID index; every counted source identity has retained core metadata';job.completeIndexHitCount=receipt.finalRoot.hitCount}
ledger.completedNames=ledger.names.filter(n=>n.complete).length;ledger.failedNames=ledger.names.filter(n=>n.error).length
if(!manifestOnly)fs.writeFileSync(ledgerPath,JSON.stringify(ledger,null,2)+'\n')
fs.writeFileSync(`${indexRoot}/${job.key}/manifest.json`,JSON.stringify(job,null,2)+'\n')
console.log(JSON.stringify({name,complete:receipt.complete,distinctIdentities:receipt.distinctIdentities,initialHitCount:receipt.initialRoot?.hitCount,finalHitCount:receipt.finalRoot?.hitCount,partitions:receipt.partitions.map(p=>({source:p.source,distinct:p.distinctIdentities,hitCount:p.hitCount,complete:p.complete})),additionalCorePages:receipt.additionalCorePages.length,error:receipt.error}))
