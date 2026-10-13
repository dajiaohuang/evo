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
const base='docs/amphibia-content',root='data/sources/snapshots/amphibia-bibliography-literature-2026-10-03',input=JSON.parse(fs.readFileSync(`${base}/primary-reference-leads.json`)),references=new Map()
for(const lead of input.ledger){const original=lead.originalReferenceRow;if(!original)continue;const id=original.fields.ID;if(!references.has(id))references.set(id,{originalReferenceRow:original,conceptLeads:[]});references.get(id).conceptLeads.push({colId:lead.colId,path:lead.path,sourceTsn:lead.sourceTsn})}
fs.mkdirSync(root,{recursive:true});const rows=[]
for(const [id,reference]of references){const dir=`${root}/${id}`;fs.mkdirSync(dir,{recursive:true});const original=reference.originalReferenceRow.fields,field=original.title&&original.title!=='NULL'?'title':'source',queryText=original[field];const row={sourceReferenceId:id,...reference,queryField:field,queryText,query:`"${queryText}"`,pages:[],complete:false};let mark='*';const identities=new Set()
try{while(true){const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(row.query)}&format=json&pageSize=1000&resultType=core&cursorMark=${encodeURIComponent(mark)}`,file=`${dir}/page-${String(row.pages.length+1).padStart(5,'0')}.json.gz`;let raw;if(fs.existsSync(file))raw=zlib.gunzipSync(fs.readFileSync(file));else{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);raw=Buffer.from(await response.arrayBuffer());fs.writeFileSync(file,zlib.gzipSync(raw),{flag:'wx'})}const data=JSON.parse(raw);if(!Array.isArray(data.resultList?.result)||!Number.isFinite(data.hitCount))throw Error('Invalid index response');for(const r of data.resultList.result)identities.add(`${r.source}:${r.id}`);const next=data.nextCursorMark,terminal=!data.resultList.result.length||!next||next===mark;row.pages.push({file,url,cursorMark:mark,nextCursorMark:next??null,hitCount:data.hitCount,records:data.resultList.result.length,sha256:crypto.createHash('sha256').update(raw).digest('hex'),terminal});row.hitCount=data.hitCount;if(terminal)break;mark=next}
row.distinctRecords=identities.size;row.complete=row.pages.every(p=>p.hitCount===row.hitCount)&&identities.size===row.hitCount;if(!row.complete)throw Error('Unstable bibliography query pagination')
}catch(error){row.error=String(error)}rows.push(row);fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify(sourcePayload(row),null,2)+'\n');console.log(JSON.stringify({sourceReferenceId:id,queryField:field,hitCount:row.hitCount,complete:row.complete,error:row.error}))}
fs.writeFileSync(`${base}/bibliography-literature-collection.json`,JSON.stringify(sourcePayload({inputLedgerPath:`${base}/primary-reference-leads.json`,scope:{currentAcceptedSpecies:input.ledger.length,withArchivedReference:input.ledger.filter(l=>l.originalReferenceRow).length,distinctArchivedReferences:references.size},rows,completedReferences:rows.filter(r=>r.complete).length,failedReferences:rows.filter(r=>r.error).length,queryResultsAreMentionsNotVerifiedOriginalWorks:true}),null,2)+'\n')
