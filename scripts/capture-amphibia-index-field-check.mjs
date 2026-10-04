import fs from 'node:fs'
import crypto from 'node:crypto'
const root=`data/sources/snapshots/amphibia-index-identities-2026-10-03/field-check-${Date.now()}`
fs.mkdirSync(root,{recursive:true})
const queries=['"Xenopus laevis" AND PMCID:PMC13621697','"Xenopus laevis" AND EXT_ID:13621697 AND SRC:PMC','"Xenopus laevis" AND EXT_ID:23781148 AND SRC:MED','"Xenopus laevis" AND SRC:PMC','"Xenopus laevis" AND SRC:MED','"Xenopus laevis"']
const rows=[]
for(const [i,query] of queries.entries()){
 const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=1000&resultType=idlist`
 const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error(`HTTP${response.status}`)
 const bytes=Buffer.from(await response.arrayBuffer()),data=JSON.parse(bytes),file=`${root}/check-${i}.json`
 fs.writeFileSync(file,bytes,{flag:'wx'});rows.push({query,url,file,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),hitCount:data.hitCount,identities:data.resultList.result.map(r=>`${r.source}:${r.id}`)})
 console.log(JSON.stringify({query,hitCount:data.hitCount,identities:data.hitCount<3?rows.at(-1).identities:undefined}))
}
fs.writeFileSync(`${root}/manifest.json`,JSON.stringify({capturedAt:new Date().toISOString(),rows,originalFullTextsDownloaded:false},null,2)+'\n')
