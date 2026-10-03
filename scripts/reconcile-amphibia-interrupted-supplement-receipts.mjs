import fs from 'node:fs'
const file='docs/amphibia-content/supplement-package-collection.json',receipt=JSON.parse(fs.readFileSync(file))
let captured=0,failed=0,pending=0
for(const job of receipt.packages){
 const path=`data/sources/snapshots/amphibia-supplement-packages-2026-10-03/${job.pmcid}/manifest.json`
 if(fs.existsSync(path))Object.assign(job,JSON.parse(fs.readFileSync(path)))
 const metadata=JSON.parse(fs.readFileSync(job.metadataPath));job.sourceXmlSha256=metadata.sha256
 if(!job.status&&!job.captured)delete job.sha256
 if(job.captured)captured++;else if(job.error)failed++;else pending++
}
Object.assign(receipt,{captured,failed,pending,interrupted:true,interruptionReason:'Initial official endpoint requests repeatedly exceeded 60 seconds; bulk retry stopped while publisher routes and full XML discovery continue.',fullCollectionComplete:false})
fs.writeFileSync(file,JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({captured,failed,pending,interrupted:true}))
