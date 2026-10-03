import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const expanded=process.argv.includes('--expanded'),name=process.argv.slice(2).filter(x=>x!=='--expanded').join(' '),base='docs/amphibia-content',root=`data/sources/snapshots/amphibia-${expanded?'expanded':'full-roster'}-literature-2026-10-03`,file=`${base}/${expanded?'expanded':'full-roster'}-literature-collection.json`,ledger=JSON.parse(fs.readFileSync(file)),job=ledger.names.find(n=>n.name===name)
if(!job)throw Error('Unknown literal query')
const parent=`${root}/${job.key}`,current=JSON.parse(fs.readFileSync(`${parent}/manifest.json`));Object.assign(job,current)
if(job.complete)throw Error('Query is already complete')
if(job.sortMode!=='publication-date-descending'){
 const stamp=Date.now(),prior=`${parent}/prior-attempt-date-sort-${stamp}.json`,dir=`${parent}/attempt-date-sort-${stamp}`;fs.writeFileSync(prior,JSON.stringify(job,null,2)+'\n',{flag:'wx'});fs.mkdirSync(dir,{recursive:true});Object.assign(job,{priorAttemptManifest:prior,captureDirectory:dir,pages:[],nextCursor:'*',complete:false,sortMode:'publication-date-descending'});delete job.error
}
job.query=`"${name}" sort_date:y`;const ids=new Set();for(const p of job.pages)for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result)ids.add(`${r.source}:${r.id}`)
const persist=()=>fs.writeFileSync(`${parent}/manifest.json`,JSON.stringify(job,null,2)+'\n');persist();let mark=job.nextCursor??'*'
try{while(true){let raw,error;const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(job.query)}&format=json&pageSize=1000&resultType=lite&cursorMark=${encodeURIComponent(mark)}`
 for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);raw=Buffer.from(await response.arrayBuffer());break}catch(e){error=e}}if(!raw)throw error
 const data=JSON.parse(raw);if(!Array.isArray(data.resultList?.result))throw Error('Invalid metadata index response');for(const r of data.resultList.result){if(!r.source||!r.id)throw Error('Missing index identity');ids.add(`${r.source}:${r.id}`)}
 const path=`${job.captureDirectory}/page-${String(job.pages.length+1).padStart(5,'0')}.json.gz`,bytes=zlib.gzipSync(raw);fs.writeFileSync(path,bytes,{flag:'wx'});const next=data.nextCursorMark,terminal=!data.resultList.result.length||!next||next===mark
 job.pages.push({file:path,url,cursorMark:mark,nextCursorMark:next??null,hitCount:data.hitCount,records:data.resultList.result.length,capturedAt:new Date().toISOString(),sha256:crypto.createHash('sha256').update(raw).digest('hex'),gzipSha256:crypto.createHash('sha256').update(bytes).digest('hex'),terminal});job.hitCount=data.hitCount;job.nextCursor=next??null;job.distinctCapturedRecords=ids.size;job.totalCapturedRecords=job.pages.reduce((n,p)=>n+p.records,0);job.indexHitCountStable=job.pages.every(p=>p.hitCount===job.hitCount);persist()
 if(job.pages.length%25===0)console.log(JSON.stringify({name,pages:job.pages.length,distinct:ids.size,hitCount:job.hitCount,sortMode:job.sortMode}))
 if(terminal){job.complete=job.indexHitCountStable&&ids.size===job.hitCount;if(!job.complete)job.error=`Source index changed or omitted identities: ${ids.size}/${job.hitCount}`;break}mark=next
}}catch(e){job.error=String(e)}persist()
// Reconcile terminal manifests, preserving independently running per-name partition captures.
for(const n of ledger.names){const p=`${root}/${n.key}/manifest.json`;if(fs.existsSync(p))Object.assign(n,JSON.parse(fs.readFileSync(p)),{concepts:n.concepts})}
ledger.completedNames=ledger.names.filter(n=>n.complete).length;ledger.failedNames=ledger.names.filter(n=>n.error).length;fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n')
console.log(JSON.stringify({name,complete:job.complete,distinct:job.distinctCapturedRecords,hitCount:job.hitCount,pages:job.pages.length,error:job.error,originalFullTextsDownloaded:false}))
