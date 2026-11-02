import assert from 'node:assert/strict'
import { readFileSync,writeFileSync } from 'node:fs'
const root='.git/evo-wikipedia-col26-8/',projects=JSON.parse(readFileSync(root+'sources/wikipedia-projects.json')).projects,results=[]
let cursor=0,done=0
async function worker(){
  for(;;){const index=cursor++;if(index>=projects.length)return;const p=projects[index],receipt=JSON.parse(readFileSync(root+`sources/${p.locale}wiki-titles-ns0.gz.receipt.json`)),expected=`https://dumps.wikimedia.org/${p.dbname}/latest/${p.dbname}-latest-all-titles-in-ns0.gz`;assert.equal(receipt.url,expected)
    let response,error
    for(let attempt=0;attempt<3;attempt++){try{response=await fetch(expected,{method:'HEAD',headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; title index freshness verification)'},signal:AbortSignal.timeout(30000)});if(!response.ok)throw new Error(`HTTP ${response.status}`);break}catch(e){error=String(e);response=null;if(attempt<2)await new Promise(resolve=>setTimeout(resolve,(attempt+1)*2500))}}
    if(response){const modified=response.headers.get('last-modified'),etag=response.headers.get('etag'),bytes=Number(response.headers.get('content-length'));results.push({locale:p.locale,status:'checked',unchanged:modified===receipt.lastModified&&etag===receipt.etag&&bytes===receipt.bytes,localModified:receipt.lastModified,remoteModified:modified,localEtag:receipt.etag,remoteEtag:etag,localBytes:receipt.bytes,remoteBytes:bytes})}
    else results.push({locale:p.locale,status:'error',error})
    done++;if(done%25===0)console.log(JSON.stringify({checked:done,total:projects.length,changed:results.filter(r=>r.status==='checked'&&!r.unchanged).length,errors:results.filter(r=>r.status==='error').length}));await new Promise(resolve=>setTimeout(resolve,750))
  }
}
await Promise.all([worker(),worker()]);results.sort((a,b)=>a.locale.localeCompare(b.locale));const proof={checkedAt:new Date().toISOString(),results};writeFileSync(root+'title-index-freshness.json',JSON.stringify(proof),{flag:'wx'});console.log(JSON.stringify({status:'checked',projects:results.length,unchanged:results.filter(r=>r.status==='checked'&&r.unchanged).length,changed:results.filter(r=>r.status==='checked'&&!r.unchanged).map(r=>r.locale),errors:results.filter(r=>r.status==='error')}))
