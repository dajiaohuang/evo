import fs from 'node:fs'
import crypto from 'node:crypto'
import {amphibianReferenceForSchema} from './amphibia-source-reference.mjs'
const base='docs/amphibia-content',inventory=JSON.parse(fs.readFileSync(`${base}/collected-article-metadata-inventory.json`)),registry=JSON.parse(fs.readFileSync('data/references.json')),rows=[],failures=[]
for(const entry of inventory.papers){
 const m=JSON.parse(fs.readFileSync(entry.metadataPath)),doi=m.identifiers.find(i=>i['pub-id-type']==='doi')?.value
 if(!m.title){failures.push({pmcid:m.pmcid,metadataPath:entry.metadataPath,sourceVersion:m.sourceVersion??null,articleSha256:m.sha256,reason:'Missing article title; original metadata retained without inventing a canonical citation'});continue}
 const existing=registry.find(r=>(doi&&r.doi?.toLowerCase()===doi.toLowerCase())||r.url?.includes(`/articles/${m.pmcid}/`))
 const hash=crypto.createHash('sha256').update(`EuropePMC:${m.pmcid}`).digest('hex'),id=existing?.id??`ref-${hash.slice(0,8)}-${hash.slice(8,12)}-5${hash.slice(13,16)}-a${hash.slice(17,20)}-${hash.slice(20,32)}`
 const authors=m.authors.map(a=>a.name).filter(Boolean)
 const reference=amphibianReferenceForSchema({id,title:m.title,authors,authorsComplete:false,authorsStatus:authors.length===m.authors.length&&authors.length?'recorded':'incomplete-verbatim',type:'article',sourceRole:'unclassified',fitnessFor:[],url:`https://pmc.ncbi.nlm.nih.gov/articles/${m.pmcid}/`,...(doi?{doi}:{}),artifactSha256:m.sha256,accessedAt:'2026-10-03',metadataStatus:'Captured XML citation fields; role, biological relevance and author completeness await review.',note:'Literature collection candidate; captured bytes and name mentions do not establish biological claims.',importedSourceMetadata:[{pmcid:m.pmcid,title:m.title,authors:m.authors,identifiers:m.identifiers,publicationDates:m.publicationDates,licenseMetadata:m.licenses,metadataPath:entry.metadataPath,sourceXmlPath:m.xmlPath,metadataLocator:m.metadataLocator,sha256:m.sha256,scientificEvidenceRead:false,licenseInterpretationVerified:false,biologicalClaimsAssigned:false}]})
 reference.importedSourceMetadata[0].sourceVersion=m.sourceVersion??null
 reference.importedSourceMetadata[0].journalMetadata=m.journalMetadata??null
 reference.importedSourceMetadata[0].articleCitationFields=m.articleCitationFields??null
 rows.push({pmcid:m.pmcid,sourceVersion:m.sourceVersion??null,articleSha256:m.sha256,referenceId:id,alreadyRegistered:Boolean(existing),existingRegistryEntryPreserved:true,reference,metadataPath:entry.metadataPath})
}
fs.writeFileSync(`${base}/collection-reference-candidates.json`,JSON.stringify({scope:'Captured article XML citation metadata only; canonical schema envelopes prepared for later registration.',canonicalRegistryPath:'data/references.json',existingRegistered:rows.filter(r=>r.alreadyRegistered).length,newCandidates:rows.filter(r=>!r.alreadyRegistered).length,failures,rows,centralRegistryModified:false,biologicalClaimsAssigned:false},null,2)+'\n')
console.log(JSON.stringify({articles:rows.length,existingRegistered:rows.filter(r=>r.alreadyRegistered).length,newCandidates:rows.filter(r=>!r.alreadyRegistered).length,failures:failures.length,centralRegistryModified:false}))
