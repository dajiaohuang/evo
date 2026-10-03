import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC9985417',url='https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9985417/supplementaryFiles',file=`${dir}/myersi-supplement-retrieval-receipts.json`
let entry
try{const r=await fetch(url,{signal:AbortSignal.timeout(60000)}),b=Buffer.from(await r.arrayBuffer()),valid=r.ok&&b.subarray(0,4).equals(Buffer.from([0x50,0x4b,0x03,0x04]));entry={url,status:r.status,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex'),zipRetrieved:valid,independentlyRead:false,retrievedAt:new Date().toISOString()};if(valid){entry.file='supplementaryFiles.zip';fs.writeFileSync(`${dir}/${entry.file}`,b)}}catch(error){entry={url,error:String(error),zipRetrieved:false,independentlyRead:false,retrievedAt:new Date().toISOString()}}
fs.writeFileSync(file,JSON.stringify([...JSON.parse(fs.readFileSync(file)),entry],null,2)+'\n');console.log(JSON.stringify(entry))
