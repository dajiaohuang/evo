import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC8819055'
const names=['JOA-240-447-s001.pdf','JOA-240-447-s005.pdf','JOA-240-447-s006.pdf'],receipts=await Promise.all(names.map(async name=>{
 const url=`https://pmc.ncbi.nlm.nih.gov/articles/PMC8819055/bin/${name}`
 try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer()),isPDF=b.subarray(0,5).toString()==='%PDF-',receipt={url,status:r.status,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex'),pdfRetrieved:r.ok&&isPDF,independentlyRead:false,retrievedAt:new Date().toISOString()};if(r.ok&&isPDF){fs.writeFileSync(`${dir}/${name}`,b);receipt.file=name}else receipt.responseKind=b.toString().includes('Preparing to download')?'browser-download-challenge':'non-PDF response';return receipt}catch(e){return {url,error:String(e),pdfRetrieved:false,independentlyRead:false,retrievedAt:new Date().toISOString()}}
}))
fs.writeFileSync(`${dir}/hand-gland-supplement-retrieval-receipts.json`,JSON.stringify(receipts,null,2)+'\n');console.log(JSON.stringify(receipts))
