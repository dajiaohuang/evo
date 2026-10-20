import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {internalId,sha256,stableJson} from './model.mjs'
import {parsePageMarkdown,validateNodeReferenceBindings} from '../scripts/node-content.mjs'

export const EXTRACTOR_VERSION='page-dependencies-v1'
const pointerToken=value=>String(value).replaceAll('~','~0').replaceAll('/','~1')
function pageSections(document,locale){
  const markdown=document.pages?.[locale]
  if(markdown===undefined)return []
  const sections=parsePageMarkdown(markdown,'database revision page.'+locale+'.md')
  assert.deepEqual(sections.map(section=>section.key),document.node.structure.sections[locale],'Page section order differs from stored node structure')
  return sections
}
export function extractNodeDependencies(document){
  const references=new Map(),hashes=new Map(),blockers=[]
  const records=document.evidence?.records??{}
  for(const key of Object.keys(records))if(key!=='catalogue-profile')blockers.push('unsupported-record:'+key)
  function addReference(id,selector){
    assert.equal(typeof id,'string','Reference ID must be recorded')
    const values=references.get(id)??[];values.push(selector);references.set(id,values)
  }
  function walk(value,pointer){
    if(!value||typeof value!=='object')return
    if(Array.isArray(value)){value.forEach((item,index)=>walk(item,pointer+'/'+index));return}
    if(Object.hasOwn(value,'page')&&Object.hasOwn(value,'section')&&Object.hasOwn(value,'part')){
      assert.ok(['en','zh'].includes(value.page)&&['title','body'].includes(value.part),'Invalid page binding')
      assert.ok(pageSections(document,value.page).some(section=>section.key===value.section),'Page binding points to a missing section')
    }
    if(typeof value.referenceId==='string')addReference(value.referenceId,{pointer,sourceKey:value.id??null})
    if(Array.isArray(value.referenceIds))value.referenceIds.forEach((id,index)=>addReference(id,{pointer:pointer+'/referenceIds/'+index}))
    for(const [key,item] of Object.entries(value)){
      const next=pointer+'/'+pointerToken(key)
      if(/sha256$/i.test(key)&&typeof item==='string'&&/^[0-9a-f]{64}$/.test(item)){
        const selectors=hashes.get(item)??[];selectors.push({pointer:next});hashes.set(item,selectors)
      }
      // These require an explicit media/map/data adapter. Never silently declare
      // complete coverage just because a bibliography extractor understood them.
      if(/^(asset|assets|media|image|images|map|maps|grid|frames|attachments)$/i.test(key))blockers.push('unmodelled-resource:'+next)
      walk(item,next)
    }
  }
  walk(records,'/evidence/records')
  for(const [key,record] of Object.entries(records)){
    const local=new Set([...(record.sources??[]),...(record.readerSources??[])].map(source=>source.id))
    function checkSources(value){
      if(!value||typeof value!=='object')return
      if(Array.isArray(value.sourceIds))for(const id of value.sourceIds)assert.ok(local.has(id)||references.has(id),'Unknown passage source '+key+'/'+id)
      for(const child of Object.values(value))checkSources(child)
    }
    checkSources(record)
  }
  for(const locale of Object.keys(document.pages??{}))for(const section of pageSections(document,locale)){
    if(/!\[[^\]]*\]\(/.test(section.body))blockers.push('unmodelled-markdown-image:'+locale+'/'+section.key)
  }
  return {references,hashes,blockers:[...new Set(blockers)].sort(),recordKeys:Object.keys(records)}
}

export function dependencySpec(kind,key,identity,descriptor,native={},edges=[]){
  const entityId=internalId('dependency-entity/'+kind+'/'+key)
  const ordered=edges.map(edge=>({required:true,selectors:[],...edge})).sort((a,b)=>(a.role+'/'+a.to).localeCompare(b.role+'/'+b.to))
  const id=internalId('dependency-version/'+entityId+'/'+sha256(stableJson({descriptor,native,edges:ordered})))
  return {entityId,id,kind,key,identity,descriptor,native,edges:ordered}
}

export async function putDependency(client,spec,actor){
  await client.query('INSERT INTO evo_v2.dependency_entity(id,kind,entity_key,identity) VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING',[spec.entityId,spec.kind,spec.key,spec.identity])
  const entity=(await client.query('SELECT kind,entity_key,identity FROM evo_v2.dependency_entity WHERE id=$1',[spec.entityId])).rows[0]
  assert.ok(entity&&entity.kind===spec.kind&&entity.entity_key===spec.key&&isDeepStrictEqual(entity.identity,spec.identity),'Dependency identity differs')
  const columns=['node_revision_id','reference_version_id','source_release_id','taxon_usage_id','artifact_sha256','source_snapshot_sha256']
  const native=columns.map(column=>spec.native[column]??null)
  await client.query(`INSERT INTO evo_v2.dependency_version(id,entity_id,kind,descriptor,${columns.join(',')},created_by) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT DO NOTHING`,[spec.id,spec.entityId,spec.kind,spec.descriptor,...native,actor])
  const version=(await client.query('SELECT * FROM evo_v2.dependency_version WHERE id=$1',[spec.id])).rows[0]
  assert.ok(version&&version.entity_id===spec.entityId&&version.kind===spec.kind&&isDeepStrictEqual(version.descriptor,spec.descriptor),'Dependency version differs')
  columns.forEach((column,index)=>assert.equal(version[column]===null?null:String(version[column]),native[index]===null?null:String(native[index]),'Native binding differs: '+column))
  for(const edge of spec.edges)await client.query('INSERT INTO evo_v2.dependency_edge(from_version_id,to_version_id,role,required,selectors) VALUES($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING',[spec.id,edge.to,edge.role,edge.required,JSON.stringify(edge.selectors)])
  const edges=(await client.query('SELECT to_version_id AS "to",role,required,selectors FROM evo_v2.dependency_edge WHERE from_version_id=$1',[spec.id])).rows.sort((a,b)=>(a.role+'/'+a.to).localeCompare(b.role+'/'+b.to))
  assert.deepEqual(edges,spec.edges,'Stored dependency edges differ')
  return (await client.query('SELECT * FROM evo_v2.seal_dependency_version($1)',[spec.id])).rows[0]
}

// Build from a hash-verified database aggregate, not a fresh filename/name match.
// Import this function from future worker/API adapters; it never writes content
// back into Git and does not create a publication or channel.
export async function indexNodePage(client,{revision,document,locale,renderer,actor}){
  assert.ok(['en','zh'].includes(locale),'Unsupported locale')
  const sections=pageSections(document,locale)
  assert.ok(sections.length,'No authored sections for requested locale')
  const extracted=extractNodeDependencies(document),specs=[],nodeEdges=[]
  async function put(spec){const seal=await putDependency(client,spec,actor);specs.push({kind:spec.kind,key:spec.key,versionId:spec.id,ready:seal.ready,manifestSha256:seal.manifest_sha256,blockers:seal.blockers});return spec}
  async function resource(hash,retention){
    const artifact=(await client.query('SELECT sha256,bytes::text,media_type,access FROM evo_v2.artifact WHERE sha256=$1',[hash])).rows[0]
    const snapshot=(await client.query('SELECT sha256 FROM evo_v2.source_snapshot WHERE sha256=$1',[hash])).rowCount>0
    return put(dependencySpec('resource','sha256:'+hash,{sha256:hash},{storage:artifact?'blob':'unavailable',retention,expectedSha256:hash,...(artifact?{bytes:Number(artifact.bytes),mediaType:artifact.media_type,access:artifact.access}:{})},artifact?{artifact_sha256:hash,...(snapshot?{source_snapshot_sha256:hash}:{})}:{}))
  }
  const deps=(await client.query('SELECT r.version_id::text,r.reference_id,r.content_sha256,r.metadata FROM evo_v2.revision_dependency d JOIN evo_v2.reference_revision r ON r.version_id=d.reference_version_id WHERE d.revision_id=$1 ORDER BY r.reference_id',[revision.id])).rows
  validateNodeReferenceBindings({records:document.evidence?.records??{},relationships:document.node.relationships??[]},{references:deps.map(ref=>ref.metadata)})
  assert.deepEqual([...extracted.references.keys()].sort(),deps.map(row=>row.reference_id).sort(),'Native bibliography differs from original aggregate')
  for(const ref of deps){
    const spec=await put(dependencySpec('reference',ref.reference_id,{referenceId:ref.reference_id},{metadataSha256:ref.content_sha256},{reference_version_id:ref.version_id}))
    nodeEdges.push({to:spec.id,role:'citation',selectors:extracted.references.get(ref.reference_id)})
  }
  if(revision.payload_artifact_sha256){
    const payload=await resource(revision.payload_artifact_sha256,'selected-record')
    nodeEdges.push({to:payload.id,role:'payload',selectors:[{recordId:revision.payload_record_id??revision.id}]})
  }
  for(const [hash,selectors] of extracted.hashes){
    const original=await resource(hash,'full-file')
    // Citation locator/hash remains in the immutable aggregate. Keeping the full
    // file is optional; a recorded policy change must create a new node graph.
    nodeEdges.push({to:original.id,role:'source-original',required:false,selectors})
  }
  const classification=document.node.identity.classification
  if(classification?.authority==='Catalogue of Life'){
    const release=(await client.query('SELECT id FROM evo_v2.source_release WHERE authority=$1 AND release_key=$2',[classification.authority,classification.release])).rows[0]
    assert.ok(release,'Recorded classification release missing')
    const dataset=await put(dependencySpec('dataset',classification.authority+'/'+classification.release,{authority:classification.authority,release:classification.release},{representation:'native-frozen-hierarchy',scope:'accepted hierarchy and recorded source checklists'},{source_release_id:release.id}))
    if(classification.id){
      const taxon=(await client.query('SELECT usage_id FROM evo_v2.taxon_usage WHERE release_id=$1 AND usage_id=$2',[release.id,classification.id])).rows[0]
      assert.ok(taxon,'Exact recorded taxon is absent from its source release')
      const taxonSpec=await put(dependencySpec('taxon',classification.authority+'/'+classification.release+'/'+classification.id,classification,{},{source_release_id:release.id,taxon_usage_id:classification.id},[{to:dataset.id,role:'classification'}]))
      nodeEdges.push({to:taxonSpec.id,role:'identity',selectors:[{pointer:'/node/identity/classification'}]})
    }else{
      // Source context without an asserted concept bridge is not an exact taxon
      // identity. Never obtain an ID from a physical key, URL or matching name.
      nodeEdges.push({to:dataset.id,role:'classification',selectors:[{pointer:'/node/identity/classification',scope:'recorded-source-context-only; no taxon concept equivalence asserted'}]})
    }
  }else if(classification){extracted.blockers.push('unsupported-classification-adapter:'+classification.authority)}
  const node=await put(dependencySpec('node',revision.node_id,{nodeId:revision.node_id},{extractionVersion:EXTRACTOR_VERSION,extractionCoverage:extracted.blockers.length?'partial':'complete',blockers:extracted.blockers,sourcePolicy:'citation-and-record-locators; full originals optional',recordKeys:extracted.recordKeys},{node_revision_id:revision.id},nodeEdges))
  const rendererSpec=await put(renderer)
  const subject=classification??document.node.identity
  const pageKey=stableJson({type:'node',nodeId:revision.node_id,locale})
  const page=await put(dependencySpec('page',pageKey,{subject,locale},{pageType:'node-reading',locale,route:'node:'+revision.node_id+':'+locale,dependencyCoverage:extracted.blockers.length?'partial':'complete',sections:sections.map(section=>section.key),scope:'Authored node reading surface only; excludes catalogue search, authority panels, map and navigation widgets until their adapters are declared'}, {},[
    {to:node.id,role:'content',selectors:sections.map(section=>({pointer:'/pages/'+locale,section:section.key,part:'body'}))},
    {to:rendererSpec.id,role:'renderer'},
  ]))
  const closure=(await client.query('SELECT * FROM evo_v2.dependency_closure($1,true) ORDER BY kind,entity_key',[page.id])).rows
  const originals=specs.filter(spec=>spec.kind==='resource'&&spec.key!==('sha256:'+revision.payload_artifact_sha256))
  return {pageVersionId:page.id,pageEntityId:page.entityId,nodeVersionId:node.id,locale,revisionId:revision.id,specs,closure,optionalOriginals:originals.length,productionCutover:false}
}
