import{readFileSync as r,writeFileSync as w,mkdirSync}from'node:fs';import{gzipSync}from'node:zlib';import{createHash}from'node:crypto';
const old=JSON.parse(r('data/sources/amniota-pbdb-literature-metadata-2026-10-03.json')),base='data/sources/snapshots/amniota-literature-link-repairs-2026-10-03';mkdirSync(base,{recursive:true});const records=[];
for(const x of old.records.filter(x=>x.identityStatus==='metadata-retrieval-failed')){
 let candidate=x.doi,rule=null;
 if(/%[0-9a-f]{2}/i.test(candidate)){candidate=decodeURIComponent(candidate);rule='decode-percent-escaped-DOI-once';}
 else if(candidate==='10.1093/zoolinnean/zlaa165/6088263'){candidate='10.1093/zoolinnean/zlaa165';rule='remove-OUP-article-page-id-candidate';}
 if(!rule){records.push({...x,repairAttempted:false,reason:/^10\./.test(x.doi)?'Unresolved DOI; do not guess replacement.':'Source DOI field does not contain a DOI.'});continue;}
 const url='https://api.crossref.org/works/'+encodeURIComponent(candidate);await new Promise(resolve=>setTimeout(resolve,250));
 try{const response=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!response.ok)throw Error('HTTP '+response.status);const body=await response.text(),m=JSON.parse(body).message,file=base+'/'+x.pbdbReferenceId.replace(':','-')+'.json.gz';w(file,gzipSync(body));records.push({pbdbReferenceId:x.pbdbReferenceId,originalDoi:x.doi,candidateDoi:candidate,transformation:rule,metadata:{file,url,sha256:createHash('sha256').update(r(file)).digest('hex')},crossrefTitle:m.title,publisher:m.publisher,abstractCollected:typeof m.abstract==='string',conceptEquivalenceConfirmed:false,titleReviewPending:true,fullTextCollected:false,fullTextRead:false});}
 catch(e){records.push({pbdbReferenceId:x.pbdbReferenceId,originalDoi:x.doi,candidateDoi:candidate,transformation:rule,error:e.message});}
}
w('data/sources/amniota-pbdb-link-repairs-2026-10-03.json',JSON.stringify({date:'2026-10-03',scope:'Preserve original malformed DOI fields and collect only explicitly transformed metadata candidates; original bibliography remains unchanged.',records},null,2)+'\n');console.log(JSON.stringify(records));
