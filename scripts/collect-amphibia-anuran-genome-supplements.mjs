import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217',names=['12864_2025_12414_MOESM1_ESM.xlsx','12864_2025_12414_MOESM2_ESM.pdf']
const receipts=await Promise.all(names.map(async name=>{
 const url=`https://media.springernature.com/original/springer-static/esm/art%3A10.1186%2Fs12864-025-12414-y/MediaObjects/${name}`
 try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer()),valid=name.endsWith('.xlsx')?b.subarray(0,2).toString()==='PK':b.subarray(0,5).toString()==='%PDF-',receipt={url,status:r.status,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex'),artifactRetrieved:r.ok&&valid,independentlyRead:false,retrievedAt:new Date().toISOString()};if(r.ok&&valid){fs.writeFileSync(`${dir}/${name}`,b);receipt.file=name}return receipt}catch(e){return {url,error:String(e),artifactRetrieved:false,independentlyRead:false}}
}))
const file=`${dir}/genome-supplement-retrieval-receipts.json`,prior=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[]
fs.writeFileSync(file,JSON.stringify([...prior,...receipts],null,2)+'\n');console.log(JSON.stringify(receipts))
