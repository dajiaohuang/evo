import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const expanded=process.argv.includes('--expanded'),name=process.argv.slice(2).filter(x=>!['--expanded','--manifest-only'].includes(x)).join(' '),base='docs/amphibia-content',file=`${base}/${expanded?'expanded':'full-roster'}-literature-collection.json`,ledger=JSON.parse(fs.readFileSync(file)),job=ledger.names.find(n=>n.name===name);const manifestOnly=process.argv.includes('--manifest-only'),indexRoot=`data/sources/snapshots/amphibia-${expanded?'expanded':'full-roster'}-literature-2026-10-03`;if(job)Object.assign(job,JSON.parse(fs.readFileSync(`${indexRoot}/${job.key}/manifest.json`)));const path=job?.sourcePartitionReconciliation?.manifestPath
if(!path||job.complete)throw Error('Requires incomplete terminated source partition reconciliation')
const receipt=JSON.parse(fs.readFileSync(path)),root=path.replace(/\/manifest.json$/,''),known=new Set(),seenPages=new Set()
function inspect(entry){for(const p of entry.pages??[]){if(seenPages.has(p.file))continue;seenPages.add(p.file);for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result)known.add(`${r.source}:${r.id}`)}if(entry.priorAttemptManifest)inspect(JSON.parse(fs.readFileSync(entry.priorAttemptManifest)))}inspect(job)
const all=new Set(),checks=[]
async function capture(query,label){const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=1000&resultType=idlist`,response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);const raw=Buffer.from(await response.arrayBuffer()),data=JSON.parse(raw),file=`${root}/omission-${label}-${Date.now()}.json`;fs.writeFileSync(file,raw,{flag:'wx'});return {query,url,file,sha256:crypto.createHash('sha256').update(raw).digest('hex'),hitCount:data.hitCount,identities:data.resultList.result.map(r=>`${r.source}:${r.id}`)}}
for(const part of receipt.partitions){const ids=new Set();for(const p of part.pages)for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result)ids.add(`${r.source}:${r.id}`)
 const candidates=[...known].filter(id=>id.startsWith(`${part.source}:`)&&!ids.has(id))
 if(candidates.length>100)throw Error('Too many omitted candidates; source index assumptions require review')
 for(const identity of candidates){const id=identity.slice(identity.indexOf(':')+1),check=await capture(`${part.query} AND EXT_ID:${id}`,identity.replace(':','-'));if(check.hitCount>1||check.identities.some(x=>x!==identity))throw Error(`Unexpected exact identity response ${identity}`);checks.push({...check,identity,currentlyMatches:check.hitCount===1});if(check.hitCount===1)ids.add(identity)}
 // A date-sorted head captures new publications inserted while the cursor ran.
 // Older changed counts remain in the original pages instead of being rewritten.
 const head=await capture(`${receipt.query} AND SRC:${part.source} sort_date:y`,`${part.source}-fresh-date-head`)
 for(const identity of head.identities){if(!identity.startsWith(`${part.source}:`))throw Error('Unexpected refreshed source identity');ids.add(identity)}
 part.freshDateSortedHead=head
 if(ids.size!==head.hitCount){
  const updates=await capture(`${receipt.query} AND SRC:${part.source} AND FIRST_IDATE:[2026-10-03 TO 2026-10-03]`,`${part.source}-first-indexed-day`)
  part.updatedIndexDay=updates
  if(updates.hitCount>updates.identities.length)throw Error('Updated-day query requires full pagination; receipt retained for follow-up')
  for(const identity of updates.identities){if(!identity.startsWith(`${part.source}:`))throw Error('Unexpected updated-day source identity');ids.add(identity)}
 }
 for(const identity of ids){if(known.has(identity))continue;const colon=identity.indexOf(':'),source=identity.slice(0,colon),id=identity.slice(colon+1),query=`${receipt.query} AND SRC:${source} AND EXT_ID:${id}`,url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=1000&resultType=core`,response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);const raw=Buffer.from(await response.arrayBuffer()),data=JSON.parse(raw);if(data.hitCount!==1||data.resultList.result[0]?.source!==source||data.resultList.result[0]?.id!==id)throw Error(`Unresolved fresh metadata ${identity}`);const file=`${root}/additional-core-fresh-${identity.replace(':','-')}-${Date.now()}.json.gz`,bytes=zlib.gzipSync(raw);fs.writeFileSync(file,bytes,{flag:'wx'});const page={file,url,sha256:crypto.createHash('sha256').update(raw).digest('hex'),gzipSha256:crypto.createHash('sha256').update(bytes).digest('hex'),hitCount:data.hitCount,records:1,capturedAt:new Date().toISOString(),identity};job.pages.push(page);known.add(identity)}
 part.individuallyMatchedOmissions=checks.filter(c=>c.currentlyMatches&&c.identity.startsWith(`${part.source}:`)).map(c=>c.identity);part.coveredDistinctIdentities=ids.size;part.complete=ids.size===head.hitCount
 for(const id of ids)all.add(id)
}
const final=await capture(receipt.query,'root-final');receipt.omissionAdjudication={checks,finalRoot:final,coveredDistinctIdentities:all.size,allCoreMetadataCaptured:[...all].every(id=>known.has(id)),noBiologicalAbsenceInferred:true}
receipt.rootCountChangedDuringCapture=receipt.initialRoot.hitCount!==final.hitCount
receipt.refreshedPartitionHitCountSum=receipt.partitions.reduce((n,p)=>n+p.freshDateSortedHead.hitCount,0)
receipt.complete=receipt.partitions.every(p=>p.complete)&&all.size===final.hitCount&&receipt.refreshedPartitionHitCountSum===final.hitCount&&receipt.omissionAdjudication.allCoreMetadataCaptured
fs.writeFileSync(path,JSON.stringify(receipt,null,2)+'\n');job.sourcePartitionReconciliation={...job.sourcePartitionReconciliation,complete:receipt.complete,coveredDistinctIdentities:all.size,omissionAdjudication:receipt.omissionAdjudication}
if(receipt.complete){job.complete=true;delete job.error;job.completeIndexHitCount=final.hitCount;job.completionBasis='Complete source-partition pagination plus individually matched cursor omissions and fresh date-sorted heads; distinct identities reconcile current source and root totals, and every identity has citation metadata. Original count changes remain recorded.'}
ledger.completedNames=ledger.names.filter(n=>n.complete).length;ledger.failedNames=ledger.names.filter(n=>n.error).length;if(!manifestOnly)fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n');fs.writeFileSync(`data/sources/snapshots/amphibia-${expanded?'expanded':'full-roster'}-literature-2026-10-03/${job.key}/manifest.json`,JSON.stringify(job,null,2)+'\n')
console.log(JSON.stringify({name,complete:receipt.complete,covered:all.size,hitCount:final.hitCount,checks:checks.map(c=>({identity:c.identity,hitCount:c.hitCount}))}))
