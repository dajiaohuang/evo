import fs from 'node:fs'
const pmc=process.argv[2]??'PMC8819055',file=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}/col26.8-name-bridges.json`,taxa=JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')),byId=new Map(taxa.map(t=>[t.colId,t])),output=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):{datasetKey:316115,version:'COL26.8',pmcid:pmc,records:[]}
for(const name of process.argv.slice(3).length?process.argv.slice(3):['Allobates olfersioides','Colostethus ruthveni']){
 if(output.records.some(r=>r.sourceName===name))continue
 const url=`https://api.checklistbank.org/dataset/316115/nameusage/search?taxonID=PH&rank=species&q=${encodeURIComponent(name)}&limit=100`,response=await fetch(url,{signal:AbortSignal.timeout(30000)})
 if(!response.ok)throw Error(`Catalogue ${name} HTTP${response.status}`)
 const raw=await response.json(),matches=(raw.result??[]).filter(r=>r.usage?.name?.scientificName===name&&r.usage.name.rank==='species'&&r.classification?.some(c=>c.id==='PH')),links=matches.map(r=>({usageId:r.usage.id,usageStatus:r.usage.status,name:r.usage.name.scientificName,acceptedId:r.usage.status==='accepted'?r.usage.id:r.usage.accepted?.id,acceptedName:r.usage.status==='accepted'?r.usage.name.scientificName:r.usage.accepted?.name?.scientificName})),pinned=links.filter(r=>r.acceptedId&&r.acceptedName&&byId.get(r.acceptedId)?.scientificName===r.acceptedName),targets=[...new Set(pinned.map(r=>r.acceptedId))],bridge=targets.length===1?{colId:targets[0],acceptedName:byId.get(targets[0]).scientificName}:null
 output.records.push({sourceName:name,queryUrl:url,fetchedAt:new Date().toISOString(),rawQueryResult:raw,exactUsageLinks:links,pinnedAcceptedBridge:bridge,searchCompletenessCertified:false,biologicalConceptEquivalenceCertified:false})
 fs.writeFileSync(file,JSON.stringify(output,null,2)+'\n')
}
console.log(JSON.stringify(output.records.map(r=>({sourceName:r.sourceName,bridge:r.pinnedAcceptedBridge}))))
