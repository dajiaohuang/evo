import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const path=process.argv[2];if(!path||!process.argv.includes('--sequential-terminal'))throw Error('Provide a partition manifest only after sequential collector has confirmed terminal status')
const receipt=JSON.parse(fs.readFileSync(path));if(!receipt.complete)throw Error('Partition index completeness is unproven; retain the collector and reconcile exact missing ranges')
const file='docs/amphibia-content/expanded-literature-collection.json',ledger=JSON.parse(fs.readFileSync(file)),job=ledger.names.find(n=>n.name===receipt.name),root='data/sources/snapshots/amphibia-expanded-literature-2026-10-03';if(!job)throw Error('Unknown name');Object.assign(job,JSON.parse(fs.readFileSync(`${root}/${job.key}/manifest.json`)))
const ids=new Set(),pages=receipt.partitions.flatMap(p=>p.pages)
for(const page of pages){const bytes=fs.readFileSync(page.file);if(crypto.createHash('sha256').update(bytes).digest('hex')!==page.gzipSha256)throw Error(`Changed capture ${page.file}`);const raw=zlib.gunzipSync(bytes);if(crypto.createHash('sha256').update(raw).digest('hex')!==page.sha256)throw Error('Changed raw capture');for(const r of JSON.parse(raw).resultList.result)ids.add(`${r.source}:${r.id}`)}
if(ids.size!==(receipt.snapshotAccounting?.distinctIdentities??receipt.finalRoot.hitCount))throw Error('Captured identity count does not match the complete receipt')
const prior=`${root}/${job.key}/prior-attempt-before-year-merge-${Date.now()}.json`;fs.writeFileSync(prior,JSON.stringify(job,null,2)+'\n',{flag:'wx'})
Object.assign(job,{priorAttemptManifest:prior,pages,complete:true,yearPartitionReconciliation:{manifestPath:path,complete:true,distinctIdentities:ids.size,hitCount:ids.size,snapshotAccounting:receipt.snapshotAccounting},completeIndexHitCount:ids.size,completionBasis:'Mutually exclusive publication-year partitions plus the outside/unrecorded-year complement; complete metadata pagination and dated partition counts reconcile all distinct captured identities; nontransactional snapshot with later source updates excluded; all earlier attempts preserved'})
delete job.error;fs.writeFileSync(`${root}/${job.key}/manifest.json`,JSON.stringify(job,null,2)+'\n')
for(const n of ledger.names){const p=`${root}/${n.key}/manifest.json`;if(fs.existsSync(p)){const concepts=n.concepts;Object.assign(n,JSON.parse(fs.readFileSync(p)),{concepts})}}
ledger.completedNames=ledger.names.filter(n=>n.complete).length;ledger.failedNames=ledger.names.filter(n=>n.error).length;fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n');console.log(JSON.stringify({name:job.name,complete:true,identities:ids.size,completedNames:ledger.completedNames,total:ledger.names.length,originalFullTextsDownloaded:false}))
