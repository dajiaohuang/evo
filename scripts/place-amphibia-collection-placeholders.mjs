import fs from 'node:fs'
import {readNodeContent,writeNodeContent,scientificNameSegment} from './tree-path-content.mjs'
const b='docs/amphibia-content',scope='data/sources/snapshots/amphibia-content-scope-2026-10-02',taxa=JSON.parse(fs.readFileSync(`${scope}/col26.8-accepted-species.json`)),nodes=new Map()
for(const s of taxa){const start=s.classification.findIndex(c=>c.id==='PH');for(let i=start;i<s.classification.length;i++){const t=s.classification[i],path=`content/taxa/${s.classification.slice(0,i+1).map(c=>scientificNameSegment(c.scientificName)).join('/')}`;if(!nodes.has(path))nodes.set(path,{path,name:t.scientificName,concepts:[]});const n=nodes.get(path);if(!n.concepts.some(c=>c.id===t.id))n.concepts.push({authority:'COL26.8',id:t.id,rank:t.rank})}}
for(const f of ['fossil-coverage','fossil-group-reader-coverage'])for(const s of JSON.parse(fs.readFileSync(`${b}/${f}.json`))){if(!nodes.has(s.path))nodes.set(s.path,{path:s.path,name:s.path.split('/').at(-1).replaceAll('_',' '),concepts:[]});nodes.get(s.path).concepts.push({authority:'PBDB snapshot2026-10-02',id:s.sourceTaxonId??null,rank:f==='fossil-coverage'?'species':'group'})}
let written=0,preserved=0;const rows=[],failures=[]
for(const n of nodes.values()){
 try{const {index,records}=readNodeContent(n.path),key='amphibia-collection-placeholder';if(!records[key]){
 const originalIndex=fs.readFileSync(`${n.path}/index.yaml`),statuses=new Map(['en','zh'].map(l=>[l,fs.readFileSync(`${n.path}/page.${l}.md`,'utf8').match(/^status: (.+)$/m)?.[1]]))
 records[key]={name:{en:n.name,zh:n.name},sections:[{topic:'overview',title:{en:'Research text pending',zh:'研究正文待整理'},text:{en:'This section is a placeholder. Source collection is in progress; a detailed account of morphology, life history, ecology, evolution, range, fossils and conservation will be prepared after the collected material has been reviewed. Existing source summaries on this page remain available. A search result or downloaded file is not a verified biological claim.',zh:'本节为占位内容。资料正在收集；待所收集材料核对后，再整理形态、生活史、生态、演化、分布、化石及保护的详实正文。本页已有来源摘要继续保留。检索结果或已下载文件不等于已核实的生物学主张。'}}],collectionLedgerPath:'docs/amphibia-content/full-roster-literature-collection.json',concepts:n.concepts,placeholder:true,biologicalSynthesisComplete:false}
 writeNodeContent(n.path,index,records);fs.writeFileSync(`${n.path}/index.yaml`,originalIndex)
 for(const [l,status]of statuses){if(status){const p=`${n.path}/page.${l}.md`,text=fs.readFileSync(p,'utf8'),updated=text.replace(/^status: .+$/m,`status: ${status}`);if(text!==updated){const stage=`${p}.collection-placeholder.tmp`;fs.writeFileSync(stage,updated);fs.renameSync(stage,p)}}}written++
 }else preserved++
 rows.push({...n,placeholderRecord:key,placeholder:true,sourceCollectionComplete:false,biologicalSynthesisComplete:false})
 }catch(e){failures.push({path:n.path,error:String(e)})}
 if((written+preserved+failures.length)%250===0)console.log(JSON.stringify({written,preserved,failures:failures.length,total:nodes.size}))
}
fs.writeFileSync(`${b}/collection-placeholder-coverage.json`,JSON.stringify({requestedAt:'2026-10-03',scope:{currentSpecies:taxa.length,fossilConcepts:772},totalNodes:nodes.size,coveredNodes:rows.length,failures,rows,existingProsePreserved:true,projectionsGenerated:false,testsRun:false},null,2)+'\n');console.log(JSON.stringify({written,preserved,failures:failures.length,total:nodes.size,testsRun:false}));if(failures.length)process.exitCode=1
