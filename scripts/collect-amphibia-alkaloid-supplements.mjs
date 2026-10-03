import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC11677230',url='https://elifesciences.org/articles/100011',receipts=[]
try{
 const response=await fetch(url,{signal:AbortSignal.timeout(40000)}),bytes=Buffer.from(await response.arrayBuffer()),entry={url,status:response.status,contentType:response.headers.get('content-type'),bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')}
 if(response.ok){fs.writeFileSync(`${dir}/publisher-article.html`,bytes);entry.file='publisher-article.html'}
 entry.documentKind=response.ok&&bytes.toString('utf8').includes('<title>Client Challenge</title>')?'client-challenge':'publisher-response'
 entry.articleContentRetrieved=response.ok&&entry.documentKind!=='client-challenge'
 receipts.push(entry)
 if(response.ok){
  const html=bytes.toString('utf8'),links=[...new Set([...html.matchAll(/https?:[^\s"'<>]+elife-100011-supp[134][^\s"'<>]*\.(?:docx|csv|xlsx)/g)].map(m=>m[0].replaceAll('&amp;','&')))]
  for(const link of links){
   try{const r=await fetch(link,{signal:AbortSignal.timeout(40000)}),b=Buffer.from(await r.arrayBuffer()),name=new URL(link).pathname.split('/').at(-1),receipt={url:link,status:r.status,contentType:r.headers.get('content-type'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')};if(r.ok){fs.writeFileSync(`${dir}/${name}`,b);receipt.file=name}receipts.push(receipt)}catch(error){receipts.push({url:link,error:String(error)})}
  }
 }
}catch(error){receipts.push({url,error:String(error)})}
fs.writeFileSync(`${dir}/alkaloid-supplement-retrieval-receipts.json`,JSON.stringify(receipts,null,2)+'\n')
console.log(JSON.stringify(receipts))
