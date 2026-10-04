import fs from 'node:fs'
import crypto from 'node:crypto'
import {parse,stringify} from 'yaml'
import {appendAmphibianReference} from './amphibia-source-reference.mjs'
const base='docs/amphibia-content',coverage=JSON.parse(fs.readFileSync(`${base}/collection-placeholder-coverage.json`)),id='ref-amphibia-collection-index-2026-10-03',sourceKey='amphibia-collection-status',documentationPath=`${base}/reference-index.md`,bytes=fs.readFileSync(documentationPath),url='https://github.com/dajiaohuang/evo/blob/codex/amphibia-content-completion/docs/amphibia-content/reference-index.md'
const source={title:{en:'Amphibia reference-index collection record',zh:'两栖动物文献索引收集记录'},url,scope:{en:'Collection and placeholder status only. Discovery records are not assigned biological evidence.',zh:'仅说明资料收集与占位正文状态；文献发现记录未被赋予生物学证据用途。'}}
appendAmphibianReference({id,title:'Amphibia reference and discovery index, 2026-10-03',authors:[],authorsComplete:false,authorsStatus:'unresolved',type:'project-documentation',sourceRole:'documentation',fitnessFor:['methods'],metadataAssignment:'automated',url,version:'2026-10-03',accessedAt:'2026-10-03',artifactSha256:crypto.createHash('sha256').update(bytes).digest('hex'),note:'Documents citation-index collection and placeholder status. No species traits or taxonomic equivalence are asserted.',importedSourceMetadata:[{...source,documentationPath,originalFullTextAcquisitionRequired:false,biologicalClaimsAssigned:false}]})
let nodes=0,profiles=0;const failures=[]
for(const row of coverage.rows){try{
 const file=`${row.path}/evidence.md`,original=fs.readFileSync(file,'utf8'),match=/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(original);if(!match)throw Error('Missing evidence front matter');const head=parse(match[1],{uniqueKeys:true,maxAliasCount:0}),records=head.records,placeholder=records?.['amphibia-collection-placeholder'],section=placeholder?.sections?.[0];if(!section)throw Error('Missing placeholder')
 let changed=false
 for(const key of ['catalogue-profile','pbdb-fossil-reader']){const profile=records[key];if(!profile)continue;if(!Array.isArray(profile.sources?.referenceBindings))throw Error(`Unexpected source binding structure ${key}`)
  if(!profile.sources.referenceBindings.some(b=>b.sourceKey===sourceKey)){profile.sources.referenceBindings.push({referenceId:id,metadataVariant:0,sourceKey,usage:{locator:documentationPath},originalFields:['id','title','url','locator','scope']});changed=true}
  if(!profile.sections.some(s=>s.readerSectionKind==='amphibia-collection-placeholder')){
   // Reuse the original marked Markdown fields, so the canonical body appears once.
   profile.sections.push({topic:'overview',readerSectionKind:'amphibia-collection-placeholder',title:structuredClone(section.title),text:structuredClone(section.text),sourceIds:[sourceKey]});changed=true
  }profiles++
 }
 if(changed){const next=`---\n${stringify(head,{lineWidth:0,aliasDuplicateObjects:false})}---\n${original.slice(match[0].length)}`,stage=`${file}.placeholder-wiring.tmp`;fs.writeFileSync(stage,next);for(let attempt=0;attempt<3;attempt++){if(fs.readFileSync(file,'utf8')!==original)throw Error('Concurrent evidence edit; staged file preserved');try{fs.renameSync(stage,file);break}catch(e){if(!['EPERM','EACCES','EBUSY'].includes(e.code)||attempt===2)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,500)}}}
 nodes++
}catch(e){failures.push({path:row.path,error:String(e)})}if((nodes+failures.length)%500===0)console.log(JSON.stringify({nodes,profiles,failures:failures.length,total:coverage.totalNodes}))}
const receipt={totalNodes:coverage.totalNodes,nodes,profiles,documentationReferenceId:id,failures,canonicalPlaceholderFieldsReused:true,existingProsePreserved:true,newBiologicalClaims:0,projectionsGenerated:false,testsRun:false}
fs.writeFileSync(`${base}/placeholder-reader-wiring.json`,JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify(receipt));if(failures.length)process.exitCode=1
