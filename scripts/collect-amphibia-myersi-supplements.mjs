import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC9985417'
const jobs=[1,4].map(i=>{const name=`peerj-11-14715-s00${i}.docx`;return {name,url:`https://pmc.ncbi.nlm.nih.gov/articles/instance/9985417/bin/${name}`}})
const receipts=await Promise.all(jobs.map(async ({name,url})=>{try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer()),valid=r.ok&&b.subarray(0,4).equals(Buffer.from([0x50,0x4b,0x03,0x04])),entry={url,status:r.status,finalUrl:r.url,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex'),docxRetrieved:valid,independentlyRead:false,retrievedAt:new Date().toISOString()};if(valid){fs.writeFileSync(`${dir}/${name}`,b);entry.file=name}else entry.responseKind=b.toString().includes('Preparing to download')?'browser-download-challenge':'non-DOCX response';return entry}catch(e){return {url,error:String(e),docxRetrieved:false,independentlyRead:false,retrievedAt:new Date().toISOString()}}}))
const file=`${dir}/myersi-supplement-retrieval-receipts.json`,previous=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[]
fs.writeFileSync(file,JSON.stringify([...previous,...receipts],null,2)+'\n');console.log(JSON.stringify(receipts))
