import fs from 'node:fs'
import crypto from 'node:crypto'
const base='docs/amphibia-content',inventory=JSON.parse(fs.readFileSync(`${base}/collected-article-metadata-inventory.json`)),root='data/sources/snapshots/amphibia-supplement-packages-2026-10-03'
const jobs=inventory.papers.filter(p=>p.supplementItems>0).map(p=>({...p,sourceXmlSha256:p.sha256,sha256:undefined,url:`https://www.ebi.ac.uk/europepmc/webservices/rest/${p.pmcid}/supplementaryFiles`,apiDocumentation:'https://europepmc.org/RestfulWebService',originalSupplementLinksRetained:true}))
fs.mkdirSync(root,{recursive:true});let cursor=0,captured=0,failed=0
function persist(){fs.writeFileSync(`${base}/supplement-package-collection.json`,JSON.stringify({articleMetadataInventoryAtStart:inventory.capturedArticlesProcessed,requestedPackages:jobs.length,captured,failed,packages:jobs,fullCollectionComplete:false,scientificEvidenceRead:false,redistributionRightsVerified:false},null,2)+'\n')}
async function worker(){while(cursor<jobs.length){const job=jobs[cursor++],dir=`${root}/${job.pmcid}`,manifest=`${dir}/manifest.json`;fs.mkdirSync(dir,{recursive:true});try{
 if(fs.existsSync(manifest)){const previous=JSON.parse(fs.readFileSync(manifest));if(previous.captured){Object.assign(job,previous);captured++;continue}}
 const response=await fetch(job.url,{signal:AbortSignal.timeout(60000)}),bytes=Buffer.from(await response.arrayBuffer())
 Object.assign(job,{status:response.status,finalUrl:response.url,contentType:response.headers.get('content-type'),byteLength:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),attemptedAt:new Date().toISOString()})
 if(!response.ok)throw Error(`HTTP${response.status}`)
 if(!['504b0304','504b0506','504b0708'].includes(bytes.subarray(0,4).toString('hex')))throw Error('Response is not a ZIP package')
 job.file=`${dir}/supplementary.zip`;fs.writeFileSync(job.file,bytes,{flag:'wx'});Object.assign(job,{captured:true,scientificEvidenceRead:false,redistributionRightsVerified:false});captured++
 }catch(error){Object.assign(job,{captured:false,error:String(error)});failed++}
 fs.writeFileSync(manifest,JSON.stringify(job,null,2)+'\n');if((captured+failed)%25===0){persist();console.log(JSON.stringify({captured,failed,total:jobs.length}))}
}}
persist();await Promise.all(Array.from({length:3},worker));persist();console.log(JSON.stringify({captured,failed,total:jobs.length}))
