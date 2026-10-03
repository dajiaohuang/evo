import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12654886'
const urls=[['publisher-article.html','https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0332753'],['pone.0332753.s001.zip','https://journals.plos.org/plosone/article/file?type=supplementary&id=10.1371/journal.pone.0332753.s001']]
const receipts=[]
for(const [file,url] of urls){try{const r=await fetch(url,{signal:AbortSignal.timeout(40000)}),b=Buffer.from(await r.arrayBuffer());const entry={url,status:r.status,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')};if(r.ok){fs.writeFileSync(`${dir}/${file}`,b);entry.file=file}receipts.push(entry)}catch(e){receipts.push({url,error:String(e)})}}
fs.writeFileSync(`${dir}/supplement-retrieval-receipts.json`,JSON.stringify(receipts,null,2)+'\n');console.log(JSON.stringify(receipts))
