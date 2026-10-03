import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-collected-sequence-data-2026-10-03/PMC9985417'
fs.mkdirSync(dir,{recursive:true});const accessions=Array.from({length:432-258+1},(_,i)=>`ON${468258+i}`),batches=[]
for(let start=0;start<accessions.length;start+=100){
 const ids=accessions.slice(start,start+100),url=new URL('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi')
 url.search=new URLSearchParams({db:'nuccore',id:ids.join(','),rettype:'gb',retmode:'text'})
 const file=`${dir}/batch-${start}.gb`,manifest=`${dir}/batch-${start}.json`;let record={url:url.href,requestedAccessions:ids,sourcePmcid:'PMC9985417',sourceLocator:'supp-7 external nuccore range ON468258:ON468432[pacc]',apiDocumentation:'https://www.ncbi.nlm.nih.gov/sites/books/NBK25499/',biologicalClaimsAssigned:false,scientificEvidenceRead:false}
 try{let bytes;if(fs.existsSync(file))bytes=fs.readFileSync(file);else{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});record.status=response.status;if(!response.ok)throw Error(`HTTP${response.status}`);bytes=Buffer.from(await response.arrayBuffer())}
 const text=bytes.toString('utf8'),received=[...text.matchAll(/^ACCESSION\s+(\S+)/gm)].map(r=>r[1])
 if(!received.length||!text.startsWith('LOCUS'))throw Error('Response is not GenBank records')
 if(!fs.existsSync(file))fs.writeFileSync(file,bytes,{flag:'wx'})
 Object.assign(record,{captured:true,file,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),byteLength:bytes.length,receivedAccessions:received,missingAccessions:ids.filter(id=>!received.includes(id)),unexpectedAccessions:received.filter(id=>!ids.includes(id)),capturedAt:new Date().toISOString()})
 }catch(error){record.captured=false;record.error=String(error)}
 fs.writeFileSync(manifest,JSON.stringify(record,null,2)+'\n');batches.push(record)
 console.log(JSON.stringify({start,requested:ids.length,captured:record.captured,received:record.receivedAccessions?.length,error:record.error}))
}
const complete=batches.every(b=>b.captured&&!b.missingAccessions.length&&!b.unexpectedAccessions.length)
fs.writeFileSync(`${dir}/manifest.json`,JSON.stringify({sourcePmcid:'PMC9985417',requestedRange:'ON468258:ON468432',requestedAccessions:accessions.length,complete,batches,biologicalClaimsAssigned:false,sourceLabelConceptEquivalenceVerified:false},null,2)+'\n')
if(complete){const file='docs/amphibia-content/collected-supplement-retrieval.json',ledger=JSON.parse(fs.readFileSync(file));const job=ledger.files.find(r=>r.url==='https://www.ncbi.nlm.nih.gov/nuccore/?term=ON468258:ON468432[pacc]');if(job){job.resolvedAsDataRepositoryLink=true;job.dataRetrievalManifestPath=`${dir}/manifest.json`;job.attachmentRequirement=false;ledger.resolvedDataRepositoryLinks=ledger.files.filter(r=>r.resolvedAsDataRepositoryLink).length;ledger.unresolvedRetrievalFailures=ledger.files.filter(r=>r.error&&!r.captured&&!r.resolvedAsDataRepositoryLink).length;fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n')}}
