import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'

const internalReviewFields = new Set(["scientificEvidenceRead","biologicalClaimsAssigned","fullResearchCollectionCertified","articleRightsReviewComplete","taxonomicConceptAssignmentCertified","originalCitedWorkRead","publicationDeduplicationCertified"]);
function sourcePayload(value) {
  if (Array.isArray(value)) return value.map(sourcePayload);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value)
      .filter(([key]) => !internalReviewFields.has(key))
      .map(([key, item]) => [key, sourcePayload(item)]));
  }
  return value;
}
const expanded=process.argv.includes('--expanded')
const b='docs/amphibia-content',root=`data/sources/snapshots/amphibia-${expanded?'expanded':'full-roster'}-literature-2026-10-03`,scope='data/sources/snapshots/amphibia-content-scope-2026-10-02',output=`${b}/${expanded?'expanded':'full-roster'}-literature-collection.json`
fs.mkdirSync(root,{recursive:true})
const current=JSON.parse(fs.readFileSync(`${scope}/col26.8-accepted-species.json`)),fossils=JSON.parse(fs.readFileSync(`${scope}/pbdb-amphibia-accepted-fossil-species.json`)).records,queue=new Map()
if(expanded){for(const s of JSON.parse(fs.readFileSync(`${b}/expanded-literature-name-scope.json`)).names)for(const c of s.concepts)add(s.name,c)}else{
for(const s of current)add(s.scientificName,{authority:'COL26.8',id:s.colId})
for(const s of fossils)add(s.nam,{authority:'PBDB snapshot2026-10-02',id:s.oid})}
function add(name,concept){if(!queue.has(name))queue.set(name,{name,key:crypto.createHash('sha256').update(name).digest('hex').slice(0,24),concepts:[]});queue.get(name).concepts.push(concept)}
const jobs=[...queue.values()];let cursor=0,finished=0,failed=0
const ledger=()=>({scope:{currentAcceptedSpecies:current.length,independentFossilConcepts:fossils.length,uniqueLiteralNames:jobs.length},database:'Europe PMC',newRequestsResultType:'lite',priorCoreMetadataPreserved:true,queryMode:'Quoted literal accepted-name discovery; all returned pages captured. Synonyms and historic names remain separate later collection work.',searcher:'Evo source collection workflow',inclusion:'All returned index records, including mentions; full-text permissions and biological assignment not inferred',exclusion:'No index results excluded; non-indexed literature outside this retrieval scope',completedNames:jobs.filter(j=>j.complete).length,failedNames:jobs.filter(j=>j.error).length,names:jobs})
function persist(){const value=ledger();if(expanded){value.scope={additionalLiteralNames:jobs.length,uniqueLiteralNames:jobs.length};value.queryMode='Quoted archived-synonym and higher-taxon names; all pages captured; biological assignment unresolved';value.nameScopePath=`${b}/expanded-literature-name-scope.json`}fs.writeFileSync(output,JSON.stringify(sourcePayload(value),null,2)+'\n')}
function reconcileRecordCount(j){
 j.totalCapturedRecords=j.pages.reduce((n,p)=>n+p.records,0)
 const ids=new Set();let missingIdentity=false
 for(const p of j.pages)for(const r of JSON.parse(zlib.gunzipSync(fs.readFileSync(p.file))).resultList.result){if(!r.source||!r.id)missingIdentity=true;else ids.add(`${r.source}:${r.id}`)}
 j.distinctCapturedRecords=ids.size;j.duplicateIndexRecords=j.totalCapturedRecords-ids.size
 j.indexHitCountStable=j.pages.every(p=>p.hitCount===j.hitCount)
 j.complete=Boolean(j.complete&&j.indexHitCountStable&&!missingIdentity&&ids.size===j.hitCount)
 if(j.complete)delete j.error
 return j.complete
}
for(const j of jobs){const p=`${root}/${j.key}/manifest.json`;if(fs.existsSync(p)){const old=JSON.parse(fs.readFileSync(p));Object.assign(j,old,{concepts:j.concepts});if(j.complete)finished++}}
persist()
async function request(url){let error;for(let attempt=0;attempt<3;attempt++){try{const r=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error(`HTTP${r.status}`);return Buffer.from(await r.arrayBuffer())}catch(e){error=e;await new Promise(resolve=>setTimeout(resolve,500*(attempt+1)))}}throw error}
async function worker(){while(cursor<jobs.length){const j=jobs[cursor++];if(j.complete)continue;const dir=`${root}/${j.key}`;fs.mkdirSync(dir,{recursive:true});j.query=`"${j.name}"`;j.pages=j.pages??[];let mark=j.nextCursor??'*';try{while(true){const existing=j.pages.find(p=>p.cursorMark===mark);if(existing){if(existing.terminal){j.complete=true;break}mark=existing.nextCursorMark;continue}const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(j.query)}&format=json&pageSize=1000&resultType=lite&cursorMark=${encodeURIComponent(mark)}`,raw=await request(url),data=JSON.parse(raw);if(!Array.isArray(data.resultList?.result)||!Number.isFinite(data.hitCount))throw Error('Invalid search response');const file=`${dir}/page-${String(j.pages.length+1).padStart(5,'0')}.json.gz`;fs.writeFileSync(file,zlib.gzipSync(raw),{flag:'wx'});const next=data.nextCursorMark,terminal=data.resultList.result.length===0||!next||next===mark;const page={file,url,cursorMark:mark,nextCursorMark:next??null,hitCount:data.hitCount,records:data.resultList.result.length,capturedAt:new Date().toISOString(),sha256:crypto.createHash('sha256').update(raw).digest('hex'),gzipSha256:crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),terminal};j.pages.push(page);j.hitCount=data.hitCount;j.nextCursor=next??null;delete j.error;fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(sourcePayload(j),null,2)+'\n');if(terminal){j.complete=true;break}mark=next}reconcileRecordCount(j);if(!j.complete)throw Error(`Index changed or incomplete pagination: ${j.totalCapturedRecords}/${j.hitCount}`);finished++;fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(sourcePayload(j),null,2)+'\n')}catch(e){j.error=String(e);failed++;fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(sourcePayload(j),null,2)+'\n')}if((finished+failed)%50===0){persist();console.log(JSON.stringify({finished,failed,total:jobs.length,lastName:j.name}))}}}
await Promise.all(Array.from({length:6},worker));persist();console.log(JSON.stringify({finished,failed,total:jobs.length,testsRun:false}))
