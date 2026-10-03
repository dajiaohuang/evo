import fs from 'node:fs'
import crypto from 'node:crypto'
import path from 'node:path'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
import { appendAmphibianReference } from './amphibia-source-reference.mjs'
const base='docs/amphibia-content'
const groups=JSON.parse(fs.readFileSync(`${base}/group-reader-coverage.json`))
const species=new Map(JSON.parse(fs.readFileSync(`${base}/species-coverage.json`)).map(x=>[x.colId,x]))
const inputs=JSON.parse(fs.readFileSync(`${base}/primary-direct-group-authoring-input.json`))
const receipt=[]
for(const study of inputs){
 const group=groups.find(x=>x.colId===study.colId)
 if(!group)throw new Error(`Missing fixed group ${study.colId}`)
 const node=readNodeContent(group.path),record=node.records['catalogue-profile']
 if(record.scientificName!==study.name||record.rank!=='genus')throw new Error('Group identity mismatch')
 if(study.sectionLocators.length!==study.sections.length)throw new Error('Section evidence mismatch')
 const routes=(study.readingRoutes??[]).map(colId=>{
  const entry=species.get(colId)
  if(!entry||path.posix.dirname(entry.path)!==group.path)throw new Error(`Reading route outside accepted genus ${colId}`)
  return {kind:'catalogue',colId,releaseAlias:'COL26.8',targetPath:entry.path,label:{en:path.posix.basename(entry.path).replaceAll('_',' '),zh:path.posix.basename(entry.path).replaceAll('_',' ')}}
 })
 const dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${study.pmc}`
 const reading=JSON.parse(fs.readFileSync(`${dir}/reading-sections.json`))
 const hex=crypto.createHash('sha256').update(reading.articleIds.doi.toLowerCase()).digest('hex')
 const referenceId=`ref-${hex.slice(0,8)}-${hex.slice(8,12)}-4${hex.slice(13,16)}-a${hex.slice(17,20)}-${hex.slice(20,32)}`
 const key=`primary-direct-group-${study.pmc.toLowerCase()}-${study.colId.toLowerCase()}`
 const source={title:reading.title,authors:reading.authorsAsRecorded,year:study.year,doi:reading.articleIds.doi,url:`https://pmc.ncbi.nlm.nih.gov/articles/${study.pmc}/`,accessedAt:'2026-10-03',license:study.license,licenseUrl:study.licenseUrl,licenseAssessment:'item-level-verified',attribution:study.attribution??'Own factual synthesis and Chinese translation of the original study; no figures reproduced.'}
 appendAmphibianReference({id:referenceId,...source,type:'article',sourceRole:study.sourceRole??'primary-study',fitnessFor:study.referenceFitnessFor??['taxonomy','evolution','conservation'],authorsComplete:true,authorsStatus:'recorded',importedSourceMetadata:[source]})
 const index=fs.readFileSync(`${group.path}/index.yaml`),before=semanticJson(node.records)
 const scope={en:study.scope.en,zh:study.scope.zh}
 record.sections=record.sections.filter(s=>!s.sourceIds?.includes(key))
 record.sections.push(...study.sections.map(([topic,enTitle,zhTitle,en,zh],i)=>({topic,readerSectionKind:'primary-direct-group-research',sourceIds:[key,...(study.sectionAdditionalSourceKeys?.[i]??[])],title:{en:enTitle,zh:zhTitle},text:{en,zh}})))
 if(routes.length){
  const links=locale=>routes.map(r=>`- [${r.label[locale]}](${path.posix.relative(group.path,r.targetPath)}/page.${locale}.md)`).join('\n')
  record.sections.push({topic:'overview',readerSectionKind:'primary-direct-group-reading-route',sourceIds:[key],title:study.readingRouteTitle??{en:'Read the sampled species',zh:'阅读所采物种'},readingLinks:routes,text:{en:`${study.readingRouteIntro?.en??'These pages preserve the sampled species and evidence limits of this study. This selection covers the study sample, not all accepted genus members or every biological facet.'}\n\n${links('en')}`,zh:`${study.readingRouteIntro?.zh??'这些页面保留本研究所采物种与证据限制。此选择覆盖研究样本，不是全属所有有效成员，也不覆盖全部生物学主题。'}\n\n${links('zh')}`}})
 }
 record.sources.referenceBindings=record.sources.referenceBindings.filter(s=>s.sourceKey!==key)
 record.sources.referenceBindings.push({referenceId,metadataVariant:0,sourceKey:key,usage:{locator:study.readScope,scope},originalFields:['id',...Object.keys(source),'locator','scope']})
 const aliasPrefix=`${key}-catalogue-alias`
 record.sources.referenceBindings=record.sources.referenceBindings.filter(binding=>!binding.sourceKey?.startsWith(aliasPrefix))
 for(const binding of study.additionalReferenceBindings??[]){
  const references=JSON.parse(fs.readFileSync('data/references.json'))
  const reference=references.references?.find(r=>r.id===binding.referenceId)??(Array.isArray(references)?references.find(r=>r.id===binding.referenceId):null)
  if(!binding.sourceKey.startsWith(aliasPrefix)||!reference?.fitnessFor?.includes('taxonomy'))throw new Error(`Invalid group catalogue binding ${binding.sourceKey}`)
  record.sources.referenceBindings.push(binding)
 }
 record.primaryStudyScopes??=[]
 record.primaryStudyScopes=record.primaryStudyScopes.filter(s=>s.sourceKey!==key)
 record.primaryStudyScopes.push({doi:source.doi,referenceId,sourceKey:key,sourceFile:`${dir}/article.xml`,sourceConcept:study.sourceConcept,evidenceRead:study.readScope,contemporaryConceptEquivalence:'not-independently-certified',rightsBoundary:{license:source.license,licenseUrl:source.licenseUrl,attribution:source.attribution},sectionEvidence:study.sections.map(([topic,enTitle,zhTitle,en,zh],sectionOrdinal)=>({sectionOrdinal,topic,heading:{en:enTitle,zh:zhTitle},referenceId,sourceKey:key,locator:study.sectionLocators[sectionOrdinal],locatorPrecision:'manually-recorded-section-and-paragraph-label',evidenceSummary:{en,zh},scope}))})
 record.primaryResearchGroupSynthesisComplete=false
 if(semanticJson(node.records)!==before){
  writeNodeContent(group.path,node.index,node.records)
  fs.writeFileSync(`${group.path}/index.yaml`,index)
  for(const locale of ['en','zh']){const file=`${group.path}/page.${locale}.md`;fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('status: migrated-verbatim','status: source-linked'))}
 }
 const manifestFile=`${dir}/manifest.json`,manifest=JSON.parse(fs.readFileSync(manifestFile))
 manifest.groupReadScopes??=[]
 manifest.groupReadScopes=manifest.groupReadScopes.filter(s=>s.sourceKey!==key)
 manifest.groupReadScopes.push({sourceKey:key,colId:study.colId,targetPath:group.path,sourceConcept:study.sourceConcept,readScope:study.readScope})
 Object.assign(manifest,{articleRead:true,licenseVerified:true,license:source.license,licenseUrl:source.licenseUrl,fullArticleReadCertified:false,biologicalReaderComplete:false})
 fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n')
 receipt.push({colId:study.colId,name:study.name,path:group.path,pmc:study.pmc,referenceId,authoredResearchSections:study.sections.length,selectedReadingRoutes:routes.length,biologicalGroupSynthesisComplete:false})
}
fs.writeFileSync(`${base}/primary-direct-group-reader-coverage.json`,JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({groupReaders:new Set(receipt.map(x=>x.colId)).size,researchSections:receipt.reduce((n,x)=>n+x.authoredResearchSections,0),testsRun:false,biologicalGroupSynthesisComplete:false}))
