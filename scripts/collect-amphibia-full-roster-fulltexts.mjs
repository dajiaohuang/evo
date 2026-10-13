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
const b='docs/amphibia-content',input=`${b}/full-roster-literature-collection.json`,index=JSON.parse(fs.readFileSync(input)),root='data/sources/snapshots/amphibia-full-roster-primary-2026-10-03',papers=new Map()
const indexes=[{file:input,index}]
if(fs.existsSync(`${b}/expanded-literature-collection.json`))indexes.push({file:`${b}/expanded-literature-collection.json`,index:JSON.parse(fs.readFileSync(`${b}/expanded-literature-collection.json`))})
if(fs.existsSync(`${b}/bibliography-literature-collection.json`)){
 const bibliography=JSON.parse(fs.readFileSync(`${b}/bibliography-literature-collection.json`))
 indexes.push({file:`${b}/bibliography-literature-collection.json`,index:{completedNames:bibliography.completedReferences,scope:{uniqueLiteralNames:bibliography.rows.length},names:bibliography.rows.map(r=>({name:r.queryText,pages:r.pages,concepts:r.conceptLeads.map(l=>({...l,authority:'archived ITIS bibliography lead',sourceReferenceId:r.sourceReferenceId,role:'bibliographic title/source discovery, not literal taxon name',originalReferenceLocator:r.originalReferenceRow.locator}))}))}})
}
fs.mkdirSync(root,{recursive:true})
function discoveryPages(name,seen=new Set()){
 const pages=[...(name.pages??[])],prior=name.priorAttemptManifest
 if(prior&&!seen.has(prior)){seen.add(prior);pages.push(...discoveryPages(JSON.parse(fs.readFileSync(prior)),seen))}
 return [...new Map(pages.map(p=>[p.file,p])).values()]
}
for(const scope of indexes)for(const name of scope.index.names)for(const page of discoveryPages(name)){const data=JSON.parse(zlib.gunzipSync(fs.readFileSync(page.file)));for(const r of data.resultList.result){if(!r.pmcid||r.isOpenAccess!=='Y')continue;if(!/^PMC\d+$/.test(r.pmcid))continue;if(!papers.has(r.pmcid))papers.set(r.pmcid,{pmcid:r.pmcid,doi:r.doi??null,title:r.title,publicationYear:r.pubYear,sourceUrl:`https://www.ebi.ac.uk/europepmc/webservices/rest/${r.pmcid}/fullTextXML`,leads:[]});const p=papers.get(r.pmcid);if(!p.leads.some(l=>l.name===name.name&&l.discoveryLedger===scope.file))p.leads.push({name:name.name,concepts:name.concepts,discoveryLedger:scope.file})}}
const jobs=[...papers.values()];let cursor=0,captured=0,failed=0
async function request(url){let error;for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`);return Buffer.from(await response.arrayBuffer())}catch(e){error=e;await new Promise(resolve=>setTimeout(resolve,500*(attempt+1)))}}throw error}
async function worker(){while(cursor<jobs.length){const p=jobs[cursor++],dir=`${root}/${p.pmcid}`,manifest=`${dir}/manifest.json`;fs.mkdirSync(dir,{recursive:true});try{
const local=`${dir}/article.xml`,old=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${p.pmcid}/article.xml`;let bytes
if(fs.existsSync(local)){bytes=fs.readFileSync(local);if(fs.existsSync(manifest)){const previous=JSON.parse(fs.readFileSync(manifest));const leads=p.leads;Object.assign(p,previous,{leads});delete p.error}}
else if(fs.existsSync(old)){bytes=fs.readFileSync(old);p.reusedLocalSnapshot=old}else bytes=await request(p.sourceUrl)
if(!bytes.toString('utf8').includes('<article'))throw Error('Not article XML')
const hash=crypto.createHash('sha256').update(bytes).digest('hex');if(p.sha256&&p.sha256!==hash)throw Error('Existing capture hash changed')
if(!fs.existsSync(local))fs.writeFileSync(local,bytes,{flag:'wx'})
Object.assign(p,{captured:true,capturedAt:p.capturedAt??new Date().toISOString(),sha256:hash,byteLength:bytes.length,licenseVerified:p.licenseVerified??false,publishFullText:p.publishFullText??false});captured++
}catch(e){Object.assign(p,{captured:false,error:String(e),attemptedAt:new Date().toISOString()});failed++}fs.writeFileSync(manifest,JSON.stringify(sourcePayload(p),null,2)+'\n');if((captured+failed)%50===0)console.log(JSON.stringify({captured,failed,total:jobs.length}))}}
await Promise.all(Array.from({length:3},worker));const receipt={indexCompletedNamesAtStart:index.completedNames,indexTotalNames:index.scope.uniqueLiteralNames,indexCompleteAtStart:index.completedNames===index.scope.uniqueLiteralNames,discoveryIndexes:indexes.map(s=>({file:s.file,completedNames:s.index.completedNames,totalNames:s.index.scope.uniqueLiteralNames})),requestedCandidates:jobs.length,captured,failed,papers:jobs};fs.writeFileSync(`${b}/full-roster-fulltext-collection.json`,JSON.stringify(sourcePayload(receipt),null,2)+'\n');console.log(JSON.stringify({captured,failed,total:jobs.length,indexCompleteAtStart:receipt.indexCompleteAtStart,testsRun:false}))
