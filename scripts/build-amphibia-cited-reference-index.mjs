import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'

const internalReviewFields = new Set(["scientificEvidenceRead","biologicalClaimsAssigned","fullResearchCollectionCertified","articleRightsReviewComplete","taxonomicConceptAssignmentCertified","originalCitedWorkRead","publicationDeduplicationCertified"]);
function sourcePayload(value) {
  if (Array.isArray(value)) return value.map(sourcePayload);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value)
      .filter(([key]) => !internalReviewFields.has(key))
      .map(([key, item]) => [key, sourcePayload(item)]));
  }
  return value;
}
const base='docs/amphibia-content',inventoryPath=`${base}/collected-article-metadata-inventory.json`,inventory=JSON.parse(fs.readFileSync(inventoryPath)),root='data/sources/snapshots/amphibia-cited-reference-index-2026-10-03'
fs.mkdirSync(root,{recursive:true});let records=[],count=0;const shards=[]
const digest=b=>crypto.createHash('sha256').update(b).digest('hex')
function flush(){if(!records.length)return;const decoded=Buffer.from(JSON.stringify(sourcePayload({records}))+'\n'),bytes=zlib.gzipSync(decoded,{level:9}),path=`${root}/cited-work-leads-${String(shards.length).padStart(5,'0')}.json.gz`;fs.writeFileSync(path,bytes);shards.push({path,encoding:'gzip-json',records:records.length,bytes:bytes.length,sha256:digest(bytes),decodedSha256:digest(decoded)});records=[]}
for(const paper of inventory.papers){const bytes=fs.readFileSync(paper.metadataPath),data=JSON.parse(bytes),metadataSha256=digest(bytes);for(const [position,reference]of data.citedReferences.entries()){
 const identity={citingArticlePmcid:paper.pmcid,citingArticleSha256:data.sha256,sourceVersion:paper.sourceVersion??null,sourceCitationId:reference.id??null,sourceCitationPosition:position}
 records.push({...identity,citationLeadId:`citation-lead-${digest(JSON.stringify(identity))}`,originalReferenceMetadata:reference,metadataLocator:{file:paper.metadataPath,field:`/citedReferences/${position}`,sha256:metadataSha256,originalArticleSha256:data.sha256},originalCitedWorkRetrievedByThisScript:false})
 count++;if(records.length===500)flush()
 }}flush()
const receipt={schemaVersion:1,inventoryPath,citingArticles:inventory.papers.length,citedReferenceLeads:count,originalCitationIdentityPreserved:true,missingFieldsInvented:false,originalFullTextsDownloadedByThisScript:false,shards,extractionFailures:inventory.failures}
fs.writeFileSync(`${root}/manifest.json`,JSON.stringify(sourcePayload(receipt),null,2)+'\n');console.log(JSON.stringify({citingArticles:receipt.citingArticles,citedReferenceLeads:count,shards:shards.length,extractionFailures:receipt.extractionFailures.length,originalFullTextsDownloaded:false}))
