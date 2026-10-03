import fs from 'node:fs'
import crypto from 'node:crypto'
const base='docs/amphibia-content',inventory=JSON.parse(fs.readFileSync(`${base}/collected-article-metadata-inventory.json`)),root='data/sources/snapshots/amphibia-collected-supplements-2026-10-03',queue=new Map(),unresolved=[]
const journals={pone:'plosone',pbio:'plosbiology',pgen:'plosgenetics',pntd:'plosntds',ppat:'plospathogens',pcbi:'ploscompbiol',pmed:'plosmedicine'}
for(const paper of inventory.papers){const metadata=JSON.parse(fs.readFileSync(paper.metadataPath));for(const supplement of metadata.supplements)for(const link of supplement.links){
 let url,derivation
 if(link.href.startsWith('https://')){url=link.href;derivation='XML-declared absolute link'}
 else if(/^[a-z]+\.\d+\.s\d+\.[A-Za-z0-9]+$/.test(link.href)&&journals[link.href.split('.')[0]]){const prefix=link.href.split('.')[0],id=link.href.replace(/\.[^.]+$/,'');url=`https://journals.plos.org/${journals[prefix]}/article/file?id=10.1371/journal.${id}&type=supplementary`;derivation='PLOS supplementary file naming convention; original XML href retained'}
 else if(!/^(https?:|ftp:|mailto:|#)/i.test(link.href)){unresolved.push({pmcid:paper.pmcid,supplementId:supplement.id,link,reason:'Relative PMC asset retained for official package or publisher resolution; legacy bin route returned challenges and was stopped'});continue}
 else{unresolved.push({pmcid:paper.pmcid,supplementId:supplement.id,link,reason:'Unsupported link scheme; original locator retained'});continue}
 const key=crypto.createHash('sha256').update(url).digest('hex').slice(0,24)
 if(!queue.has(key))queue.set(key,{key,url,derivation,links:[]})
 queue.get(key).links.push({pmcid:paper.pmcid,metadataPath:paper.metadataPath,supplementId:supplement.id,position:supplement.position,originalHref:link.href,element:link.element})
}}
fs.mkdirSync(root,{recursive:true});const jobs=[...queue.values()];let cursor=0,captured=0,failed=0
function persist(){fs.writeFileSync(`${base}/collected-supplement-retrieval.json`,JSON.stringify({articleMetadataInventoryAtStart:inventory.capturedArticlesProcessed,requestedFiles:jobs.length,captured,failed,unresolved,files:jobs,fullCollectionComplete:false,scientificEvidenceRead:false,redistributionRightsVerified:false},null,2)+'\n')}
async function worker(){while(cursor<jobs.length){const job=jobs[cursor++],dir=`${root}/${job.key}`,manifest=`${dir}/manifest.json`;fs.mkdirSync(dir,{recursive:true});try{
 if(fs.existsSync(manifest)){const old=JSON.parse(fs.readFileSync(manifest));if(old.captured){Object.assign(job,old,{links:job.links});captured++;continue}}
 const response=await fetch(job.url,{signal:AbortSignal.timeout(40000)}),bytes=Buffer.from(await response.arrayBuffer()),type=response.headers.get('content-type')??''
 Object.assign(job,{status:response.status,finalUrl:response.url,contentType:type,byteLength:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),attemptedAt:new Date().toISOString()})
 if(!response.ok)throw Error(`HTTP${response.status}`)
 if(/html/i.test(type)||/^\s*<!doctype html|^\s*<html/i.test(bytes.subarray(0,300).toString()))throw Error('HTML landing or challenge returned instead of attachment')
 if(!bytes.length)throw Error('Empty attachment response')
 job.file=`${dir}/attachment.bin`;fs.writeFileSync(job.file,bytes,{flag:'wx'});Object.assign(job,{captured:true,scientificEvidenceRead:false,redistributionRightsVerified:false});captured++
 }catch(error){Object.assign(job,{captured:false,error:String(error)});failed++}
 fs.writeFileSync(manifest,JSON.stringify(job,null,2)+'\n');if((captured+failed)%50===0){persist();console.log(JSON.stringify({captured,failed,total:jobs.length}))}
}}
persist();await Promise.all(Array.from({length:3},worker));persist();console.log(JSON.stringify({captured,failed,total:jobs.length,unresolved:unresolved.length}))
