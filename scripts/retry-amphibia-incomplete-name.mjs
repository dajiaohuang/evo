import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const base='docs/amphibia-content',root='data/sources/snapshots/amphibia-full-roster-literature-2026-10-03',file=`${base}/full-roster-literature-collection.json`,ledger=JSON.parse(fs.readFileSync(file)),name=process.argv.slice(2).join(' '),j=ledger.names.find(n=>n.name===name)
if(!j||j.complete)throw Error('Requires an existing incomplete accepted-name job and a terminated original index process')
const parent=`${root}/${j.key}`,stamp=new Date().toISOString().replaceAll(/[:.]/g,'-'),prior=`${parent}/prior-attempt-${stamp}.json`,dir=`${parent}/attempt-${stamp}`
fs.writeFileSync(prior,JSON.stringify(j,null,2)+'\n',{flag:'wx'});fs.mkdirSync(dir,{recursive:true})
const earlierIds=new Set();for(const p of j.pages??[])for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result)earlierIds.add(`${r.source}:${r.id}`)
Object.assign(j,{priorAttemptManifest:prior,captureDirectory:dir,pages:[],complete:false,nextCursor:'*',query:`"${name}"`});delete j.error
function persist(){fs.writeFileSync(`${parent}/manifest.json`,JSON.stringify(j,null,2)+'\n');fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(j,null,2)+'\n');ledger.completedNames=ledger.names.filter(n=>n.complete).length;ledger.failedNames=ledger.names.filter(n=>n.error).length;fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n')}
persist();let mark='*';const ids=new Set()
try{while(true){const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(j.query)}&format=json&pageSize=1000&resultType=core&cursorMark=${encodeURIComponent(mark)}`;let raw,error
for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);raw=Buffer.from(await response.arrayBuffer());break}catch(e){error=e;await new Promise(resolve=>setTimeout(resolve,500*(attempt+1)))}}if(!raw)throw error
const data=JSON.parse(raw);if(!Array.isArray(data.resultList?.result)||!Number.isFinite(data.hitCount))throw Error('Invalid index response')
for(const r of data.resultList.result){if(!r.source||!r.id)throw Error('Index record identity missing');ids.add(`${r.source}:${r.id}`)}
const output=`${dir}/page-${String(j.pages.length+1).padStart(5,'0')}.json.gz`,compressed=zlib.gzipSync(raw);fs.writeFileSync(output,compressed,{flag:'wx'})
const next=data.nextCursorMark,terminal=!data.resultList.result.length||!next||next===mark
j.pages.push({file:output,url,cursorMark:mark,nextCursorMark:next??null,hitCount:data.hitCount,records:data.resultList.result.length,capturedAt:new Date().toISOString(),sha256:crypto.createHash('sha256').update(raw).digest('hex'),gzipSha256:crypto.createHash('sha256').update(compressed).digest('hex'),terminal})
j.hitCount=data.hitCount;j.nextCursor=next??null;j.totalCapturedRecords=j.pages.reduce((n,p)=>n+p.records,0);j.distinctCapturedRecords=ids.size;j.duplicateIndexRecords=j.totalCapturedRecords-ids.size;j.indexHitCountStable=j.pages.every(p=>p.hitCount===j.hitCount)
persist();if(j.pages.length%5===0)console.log(JSON.stringify({name,pages:j.pages.length,distinct:ids.size,hitCount:j.hitCount,indexHitCountStable:j.indexHitCountStable}))
if(terminal){j.complete=j.indexHitCountStable&&ids.size===j.hitCount;if(!j.complete)throw Error(`Index changed or incomplete distinct pagination: ${ids.size}/${j.hitCount}`);break}mark=next
}
j.attemptComparison={earlierDistinctRecords:earlierIds.size,currentDistinctRecords:ids.size,added:[...ids].filter(id=>!earlierIds.has(id)),notReturnedInCurrentAttempt:[...earlierIds].filter(id=>!ids.has(id)),biologicalAbsenceInferred:false}
}catch(error){j.error=String(error)}
persist();console.log(JSON.stringify({name,complete:j.complete,error:j.error,distinct:j.distinctCapturedRecords,hitCount:j.hitCount,priorAttemptPreserved:prior}))
