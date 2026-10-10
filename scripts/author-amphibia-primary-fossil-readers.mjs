import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
import { appendAmphibianReference } from './amphibia-source-reference.mjs'

const base='docs/amphibia-content'
const coverage=JSON.parse(fs.readFileSync(`${base}/fossil-coverage.json`))
const studies=JSON.parse(fs.readFileSync(`${base}/primary-fossil-authoring-input.json`))
const receipt=[]
for (const study of studies) {
  const entry=coverage.find(x=>x.sourceTaxonId===study.anchorSpeciesId)
  if (!entry) throw new Error(`Missing fixed fossil anchor ${study.anchorSpeciesId}`)
  const target=study.target==='parent-genus' ? path.posix.dirname(entry.path) : entry.path
  const node=readNodeContent(target),record=node.records['pbdb-fossil-reader']
  if (!record || node.index.scientificName!==study.name || (study.target==='parent-genus' && node.index.rank!=='genus')) throw new Error(`Fossil identity mismatch ${study.name}`)
  if (study.target!=='parent-genus' && record.sourceTaxonId!==study.anchorSpeciesId) throw new Error('Fossil species ID mismatch')
  const dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${study.pmc}`
  const reading=JSON.parse(fs.readFileSync(`${dir}/reading-sections.json`))
  const hex=crypto.createHash('sha256').update(reading.articleIds.doi.toLowerCase()).digest('hex')
  const referenceId=`ref-${hex.slice(0,8)}-${hex.slice(8,12)}-4${hex.slice(13,16)}-a${hex.slice(17,20)}-${hex.slice(20,32)}`
  const key=`primary-fossil-${study.pmc.toLowerCase()}-${study.key}`
  const source={title:reading.title,authors:reading.authorsAsRecorded,year:study.year,doi:reading.articleIds.doi,url:`https://pmc.ncbi.nlm.nih.gov/articles/${study.pmc}/`,accessedAt:'2026-10-03',license:study.license,licenseUrl:study.licenseUrl,licenseAssessment:'item-level-verified',attribution:'Own factual synthesis and Chinese translation of the original study; no figures reproduced.'}
  appendAmphibianReference({id:referenceId,...source,type:'article',sourceRole:'primary-study',fitnessFor:['taxonomy','morphology','ecology','evolution','occurrence'],authorsComplete:true,authorsStatus:'recorded',importedSourceMetadata:[source]})
  const index=fs.readFileSync(`${target}/index.yaml`),before=semanticJson(node.records)
  record.sections=record.sections.filter(s=>!s.sourceIds?.includes(key))
  record.sections.push(...study.sections.map(([topic,enTitle,zhTitle,en,zh])=>({topic,readerSectionKind:'primary-fossil-research',sourceIds:[key],title:{en:enTitle,zh:zhTitle},text:{en,zh}})))
  const scope={en:'Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.',zh:'仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。'}
  record.sources.referenceBindings=record.sources.referenceBindings.filter(b=>b.sourceKey!==key)
  record.sources.referenceBindings.push({referenceId,metadataVariant:0,sourceKey:key,usage:{locator:study.readScope,scope},originalFields:['id',...Object.keys(source),'locator','scope']})
  record.primaryStudyScopes??=[]
  record.primaryStudyScopes=record.primaryStudyScopes.filter(s=>s.sourceKey!==key)
  record.primaryStudyScopes.push({doi:source.doi,referenceId,sourceKey:key,sourceFile:`${dir}/article.xml`,sourceConcept:study.sourceConcept,evidenceRead:study.readScope,contemporaryConceptEquivalence:'not-independently-certified',rightsBoundary:{license:source.license,licenseUrl:source.licenseUrl,attribution:source.attribution},sectionEvidence:study.sections.map(([topic,enTitle,zhTitle,en,zh],i)=>({sectionOrdinal:i,topic,heading:{en:enTitle,zh:zhTitle},referenceId,sourceKey:key,locator:study.sectionLocators[i],locatorPrecision:'manually-recorded-section-and-paragraph-label',evidenceSummary:{en,zh},scope}))})
  record.primaryBiologicalSynthesisComplete=false
  record.limitations={en:'Partial database and primary-study fossil reader. Specimen identity, preservation, historical assignments and inferred life habits retain separate scopes. Remaining biological synthesis are incomplete.',zh:'部分数据库及原研究化石读本。标本身份、保存状况、历史归属及推断生活习性各自限定范围，其余生物学综述及。'}
  if (semanticJson(node.records)!==before) {
    writeNodeContent(target,node.index,node.records)
    fs.writeFileSync(`${target}/index.yaml`,index)
    for(const locale of ['en','zh']){const p=`${target}/page.${locale}.md`;fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace('status: migrated-verbatim','status: source-linked'))}
  }
  if (study.target!=='parent-genus') {entry.primaryStudyReferences??=[];if(!entry.primaryStudyReferences.includes(referenceId))entry.primaryStudyReferences.push(referenceId);entry.biologicalSynthesisComplete=false}
  const manifestFile=`${dir}/manifest.json`,manifest=JSON.parse(fs.readFileSync(manifestFile))
  manifest.fossilReadScopes??=[]
  manifest.fossilReadScopes=manifest.fossilReadScopes.filter(s=>s.sourceKey!==key)
  manifest.fossilReadScopes.push({sourceKey:key,targetPath:target,sourceConcept:study.sourceConcept,sourceTaxonId:study.target==='parent-genus'?null:study.anchorSpeciesId,readScope:study.readScope})
  Object.assign(manifest,{articleRead:true,licenseVerified:true,license:source.license,licenseUrl:source.licenseUrl,fullArticleReadCertified:false,biologicalReaderComplete:false})
  fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n')
  receipt.push({path:target,name:study.name,sourceTaxonId:study.target==='parent-genus'?null:study.anchorSpeciesId,pmc:study.pmc,referenceId,authoredSections:study.sections.length,sourceConcept:study.sourceConcept,biologicalSynthesisComplete:false})
}
fs.writeFileSync(`${base}/fossil-coverage.json`,JSON.stringify(coverage,null,2)+'\n')
fs.writeFileSync(`${base}/primary-fossil-reader-coverage.json`,JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({researchReaders:new Set(receipt.map(r=>r.path)).size,studyReaderScopes:receipt.length,speciesResearchReaders:new Set(receipt.filter(r=>r.sourceTaxonId).map(r=>r.sourceTaxonId)).size,researchSections:receipt.reduce((n,r)=>n+r.authoredSections,0),biologicalSynthesisComplete:false,testsRun:false}))
