import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
import {amphibianReferenceForSchema} from './amphibia-source-reference.mjs'
const base='docs/amphibia-content',root='data/sources/snapshots/amphibia-reference-index-2026-10-03',registry=JSON.parse(fs.readFileSync('data/references.json')),inputLedgers=[]
fs.mkdirSync(root,{recursive:true})
// Bound memory to one hash partition; preserve intermediate files for interrupted runs.
const work=`${root}/work-${Date.now()}`,partitionCount=128,seenMetadata=new Set(),sourceIdentities=new Set()
fs.mkdirSync(work,{recursive:true})
const handles=Array.from({length:partitionCount},(_,i)=>fs.openSync(`${work}/part-${i}.jsonl`,'wx'))
const bindingFile=`${work}/bindings.jsonl`,bindingHandle=fs.openSync(bindingFile,'wx')
let queryCount=0
async function* jsonLines(path){let pending='';for await(const chunk of fs.createReadStream(path,{encoding:'utf8'})){pending+=chunk;let end;while((end=pending.indexOf('\n'))>=0){const line=pending.slice(0,end);pending=pending.slice(end+1);if(line)yield line}}if(pending)yield pending}
function pages(name,seen=new Set()){const rows=[...(name.pages??[])];if(name.priorAttemptManifest&&!seen.has(name.priorAttemptManifest)){seen.add(name.priorAttemptManifest);rows.push(...pages(JSON.parse(fs.readFileSync(name.priorAttemptManifest)),seen))}return [...new Map(rows.map(r=>[r.file,r])).values()]}
const byDoi=new Map(registry.filter(r=>r.doi).map(r=>[r.doi.toLowerCase(),r])),byPmc=new Map(registry.flatMap(r=>{const pmc=/\/articles\/(PMC\d+)\//.exec(r.url??'')?.[1];return pmc?[[pmc,r]]:[]}))
for(const [filename,kind] of [['full-roster-literature-collection.json','accepted-name'],['expanded-literature-collection.json','archived-synonym-or-higher-taxon'],['bibliography-literature-collection.json','archived-bibliography']]){
 const path=`${base}/${filename}`;if(!fs.existsSync(path))continue;const ledger=JSON.parse(fs.readFileSync(path)),names=ledger.names??ledger.rows.map(r=>({name:r.queryText,concepts:r.conceptLeads,pages:r.pages,sourceReferenceId:r.sourceReferenceId,complete:r.complete}));inputLedgers.push({path,kind,queries:names.length,completeQueries:names.filter(n=>n.complete).length})
 for(const name of names){const identities=new Set();for(const page of pages(name)){const data=JSON.parse(zlib.gunzipSync(fs.readFileSync(page.file)));for(const [position,r]of data.resultList.result.entries()){
  if(!r.source||!r.id)throw Error(`Missing source identity at ${page.file}:${position}`)
  const identity=`${r.source}:${r.id}`,doi=typeof r.doi==='string'?r.doi.trim().toLowerCase():null,key=doi?`doi:${doi}`:r.pmcid?`pmcid:${r.pmcid}`:`index:${identity}`
  sourceIdentities.add(identity)
  identities.add(key)
  const metadata=Object.fromEntries(Object.entries(r).filter(([key])=>!['abstractText','fullText','fullTextXML'].includes(key))),digest=crypto.createHash('sha256').update(JSON.stringify(metadata)).digest('hex')
  const fingerprint=crypto.createHash('sha256').update(`${key}|${identity}|${digest}`).digest('hex')
  if(!seenMetadata.has(fingerprint)){seenMetadata.add(fingerprint);const partition=crypto.createHash('sha256').update(key).digest()[0]%partitionCount;fs.writeSync(handles[partition],JSON.stringify({key,identity,digest,metadata:{...metadata,metadataSha256:digest,originalIndexLocator:{file:page.file,field:`/resultList/result/${position}`,rawResponseSha256:page.sha256,sourceUrl:page.url}}})+'\n')}
 }}fs.writeSync(bindingHandle,JSON.stringify({queryName:name.name,queryKind:kind,conceptLeads:name.concepts??[],sourceReferenceId:name.sourceReferenceId??null,collectionLedgerPath:path,queryComplete:Boolean(name.complete),referenceKeys:[...identities],biologicalClaimsAssigned:false})+'\n');queryCount++;if(queryCount%1000===0)console.log(JSON.stringify({phase:'index-metadata-partition',queries:queryCount,uniqueMetadata:seenMetadata.size}))}
}
handles.forEach(h=>fs.closeSync(h));fs.closeSync(bindingHandle);seenMetadata.clear()
const referenceIds=new Map(),missingTitles=[],shards=[],bindingShards=[]
let rows=[],referenceCount=0,indexIdentityCount=0,alreadyRegistered=0,newCanonicalCandidates=0
function saveShard(part,prefix,list){const path=`${root}/${prefix}-${String(list.length).padStart(5,'0')}.json.gz`,text=JSON.stringify({records:part})+'\n',bytes=zlib.gzipSync(text,{level:9});fs.writeFileSync(path,bytes);list.push({path,encoding:'gzip-json',records:part.length,bytes:bytes.length,decodedBytes:Buffer.byteLength(text),sha256:crypto.createHash('sha256').update(bytes).digest('hex'),decodedSha256:crypto.createHash('sha256').update(text).digest('hex')})}
for(let partition=0;partition<partitionCount;partition++){
 const records=new Map()
 for await(const line of jsonLines(`${work}/part-${partition}.jsonl`)){const r=JSON.parse(line);if(!records.has(r.key))records.set(r.key,{key:r.key,identities:new Set(),variants:new Map()});const record=records.get(r.key);record.identities.add(r.identity);if(!record.variants.has(r.digest))record.variants.set(r.digest,r.metadata)}
for(const record of records.values()){
 const variants=[...record.variants.values()],r=variants.find(r=>r.title&&r.authorList?.author?.length)??variants.find(r=>r.title)??variants[0],doi=r.doi?.trim(),existing=(doi&&byDoi.get(doi.toLowerCase()))||(r.pmcid&&byPmc.get(r.pmcid)),hash=crypto.createHash('sha256').update(`Amphibia literature:${record.key}`).digest('hex'),id=existing?.id??`ref-${hash.slice(0,8)}-${hash.slice(8,12)}-5${hash.slice(13,16)}-a${hash.slice(17,20)}-${hash.slice(20,32)}`
 referenceIds.set(record.key,id)
 const authors=(r.authorList?.author??[]).map(a=>a.fullName??[a.firstName,a.lastName].filter(Boolean).join(' ')).filter(Boolean),year=Number(r.pubYear)
 const envelope={id,title:r.title,authors:authors.length?authors:(r.authorString?[r.authorString]:[]),authorsComplete:false,authorsStatus:authors.length?'recorded':r.authorString?'incomplete-verbatim':'unresolved',type:'indexed-publication',sourceRole:'unclassified',fitnessFor:[],...(doi?{doi}:{}),...(r.pmcid?{url:`https://pmc.ncbi.nlm.nih.gov/articles/${r.pmcid}/`}:r.source==='MED'?{url:`https://pubmed.ncbi.nlm.nih.gov/${r.id}/`}:{}),...(Number.isInteger(year)&&year>0&&year<=2100?{publishedYear:year}:{}),accessedAt:'2026-10-03',metadataStatus:'Index citation fields retained; publication role, exact author completeness and biological relevance await review.',note:'Literature discovery reference. A query mention does not assign biological claims to current accepted or fossil concepts.',importedSourceMetadata:variants.map(v=>({...v,scientificEvidenceRead:false,biologicalClaimsAssigned:false,indexOpenAccessLabelIsNotItemLicense:true}))}
 const candidate={referenceId:id,referenceKey:record.key,indexIdentities:[...record.identities],alreadyRegistered:Boolean(existing),existingCuratedEntryPreserved:true,reference:r.title?amphibianReferenceForSchema(envelope):null,originalIndexMetadata:!r.title?variants:undefined}
 if(!r.title)missingTitles.push({referenceId:id,referenceKey:record.key,indexIdentities:candidate.indexIdentities,reason:'No source title; preserve record and identity without inventing a canonical citation title'})
 rows.push(candidate)
 referenceCount++;indexIdentityCount+=record.identities.size;if(existing)alreadyRegistered++;else if(candidate.reference)newCanonicalCandidates++
 if(rows.length===500){saveShard(rows,'references',shards);rows=[]}
}
 if((partition+1)%16===0)console.log(JSON.stringify({phase:'reference-shards',partition:partition+1,totalPartitions:partitionCount,referenceCount}))
}
if(rows.length)saveShard(rows,'references',shards)
let bindings=[]
for await(const line of jsonLines(bindingFile)){const {referenceKeys,...rest}=JSON.parse(line);bindings.push({...rest,referenceIds:referenceKeys.map(k=>referenceIds.get(k))});if(bindings.length===500){saveShard(bindings,'query-bindings',bindingShards);bindings=[]}}
if(bindings.length)saveShard(bindings,'query-bindings',bindingShards)
const manifest={schemaVersion:1,inputLedgers,referenceCount,indexIdentityCount,alreadyRegistered,newCanonicalCandidates,missingTitles,shards,bindingShards,queryBindings:queryCount,referenceIdentityAssignment:'DOI or PMCID grouping is an index metadata lead; all original source identities and conflicting citation variants retained.',canonicalRegistryPath:'data/references.json',centralRegistryModified:false,originalFullTextsDownloadedByThisScript:false,scientificEvidenceRead:false,fullResearchCollectionCertified:false,referenceIndexPhaseComplete:inputLedgers.every(l=>l.completeQueries===l.queries)}
manifest.distinctSourceIdentityCount=sourceIdentities.size
manifest.sourceIdentityAssignmentsAcrossCandidateGroups=indexIdentityCount
manifest.additionalAssignmentsFromMetadataIdentifierVariants=indexIdentityCount-sourceIdentities.size
manifest.publicationDeduplicationCertified=false
fs.writeFileSync(`${root}/manifest.json`,JSON.stringify(manifest,null,2)+'\n');fs.writeFileSync(`${base}/reference-index-coverage.json`,JSON.stringify(manifest,null,2)+'\n');console.log(JSON.stringify({referenceCount:manifest.referenceCount,indexIdentityCount:manifest.indexIdentityCount,queryBindings:queryCount,newCandidates:manifest.newCanonicalCandidates,missingTitles:missingTitles.length,referenceIndexPhaseComplete:manifest.referenceIndexPhaseComplete,originalFullTextsDownloaded:false}))
