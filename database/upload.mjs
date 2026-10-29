import {readFile,writeFile,mkdir,stat,realpath} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {resolve,join,sep} from 'node:path'
import {put,get} from '@vercel/blob'
import {connect,safeError} from './client.mjs'
import {sha256,internalId,stableJson} from './model.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const folder=arg('--from');if(!folder)throw new Error('--from requires the completed export directory')
const root=resolve(import.meta.dirname,'..'),input=resolve(folder),manifestBytes=await readFile(join(input,'manifest.json')),manifest=JSON.parse(manifestBytes)
if(!manifest.completed)throw new Error('Refusing incomplete export')
const storeId='store_xxrtIBwYQAds7u6s',options={access:'private',storeId}
for(const file of [...manifest.batches,manifest.referenceFile,manifest.originalSourceArchive])if(!/^(nodes-\d{4}\.ndjson\.gz|references\.ndjson\.gz|canonical-content\.tar\.gz)$/.test(file.path))throw new Error('Unexpected export artifact path')
const targets=[...manifest.batches,manifest.referenceFile,manifest.originalSourceArchive].map(file=>({...file,localPath:join(input,file.path),mediaType:'application/gzip',provenance:{kind:'canonical-migration-artifact',sourceCommit:manifest.sourceCommit}}))
targets.push({path:'manifest.json',localPath:join(input,'manifest.json'),sha256:sha256(manifestBytes),bytes:manifestBytes.length,mediaType:'application/json',provenance:{kind:'migration-manifest',sourceCommit:manifest.sourceCommit}})
const sourceManifest=JSON.parse(await readFile(join(root,'archive/docs/local-integration-2026-10-20.sources.json'),'utf8'))
if(sourceManifest.status!=='PASS')throw new Error('Scientific snapshot preservation is not verified')
for(const file of sourceManifest.files){
  const path=resolve(root,file.retainedLocalPath)
  const relative=file.retainedLocalPath.replaceAll('\\','/')
  if(!relative.startsWith('.git/accepted-source-evidence-20261020/')||relative.split('/').includes('..'))throw new Error('Unexpected scientific snapshot path')
  if(!(await realpath(path)).startsWith((await realpath(join(root,'.git','accepted-source-evidence-20261020')))+sep))throw new Error('Scientific snapshot resolves outside the approved vault')
  targets.push({path:relative,localPath:path,sha256:file.sha256,bytes:file.bytes,mediaType:'application/octet-stream',scientificSource:true,provenance:{kind:'preserved-scientific-source',referenceIds:file.referenceIds,originalFilename:relative.split('/').at(-1)}})
}
const catalogueRoot=join(root,'data/catalogue-of-life/releases/2026-08-20/registry')
const catalogueBytes=await readFile(join(catalogueRoot,'manifest.json')),catalogue=JSON.parse(catalogueBytes)
const checklistsBytes=await readFile(join(catalogueRoot,'sources.json')),checklists=JSON.parse(checklistsBytes)
if(catalogue.releaseAlias!=='COL26.8'||sha256(checklistsBytes)!==catalogue.sourceChecklists.sha256)throw new Error('Frozen catalogue identity/checklist hash differs')
const sourceReleaseId=internalId('source-release/Catalogue of Life/COL26.8')
const sourceReleaseMetadata={manifestSha256:sha256(catalogueBytes),manifest:catalogue}
for(const file of [...catalogue.hierarchy.nodes.files,...catalogue.search.files]){
  if(!/^(hierarchy\/nodes\/id-[0-9a-f]{2}\.jsonl\.gz|search\/name-[a-z0-9-]+\.jsonl\.gz)$/.test(file.path))throw new Error('Unexpected frozen catalogue source path')
  targets.push({...file,localPath:join(catalogueRoot,file.path),mediaType:'application/gzip',scientificSource:true,provenance:{kind:'frozen-catalogue-source',authority:'Catalogue of Life',release:catalogue.releaseAlias,sourcePath:file.path,decodedSha256:file.sourceSha256}})
}
for(const [name,bytes] of [['manifest.json',catalogueBytes],['sources.json',checklistsBytes]])targets.push({path:'catalogue/'+name,localPath:join(catalogueRoot,name),sha256:sha256(bytes),bytes:bytes.length,mediaType:'application/json',scientificSource:true,provenance:{kind:'frozen-catalogue-metadata',authority:'Catalogue of Life',release:catalogue.releaseAlias,sourcePath:name}})
const totalBytes=targets.reduce((sum,file)=>sum+file.bytes,0)
if(totalBytes>900*1024**2)throw new Error('Private store upload exceeds the configured 900 MiB bound; no automatic paid upgrade')
const receipt={status:'running',storeId,access:'private',sourceCommit:manifest.sourceCommit,plannedObjects:targets.length,plannedBytes:totalBytes,objects:[],productionCutover:false}
const receiptDir=join(root,'.git/platform-v2/uploads');await mkdir(receiptDir,{recursive:true});const receiptPath=join(receiptDir,manifest.sourceCommit+'.json')
let receiptWrite=Promise.resolve()
function saveReceipt(){const snapshot=JSON.stringify(receipt,null,2)+'\n';receiptWrite=receiptWrite.then(()=>writeFile(receiptPath,snapshot));return receiptWrite}
const client=await connect()
let sqlTail=Promise.resolve()
function query(...args){const task=sqlTail.then(()=>client.query(...args));sqlTail=task.catch(()=>{});return task}
async function verify(response,expected){
  if(!response||response.statusCode!==200)throw new Error('Uploaded object cannot be read back')
  const hash=createHash('sha256');let bytes=0
  for await(const chunk of response.stream){hash.update(chunk);bytes+=chunk.length}
  if(bytes!==expected.bytes||hash.digest('hex')!==expected.sha256)throw new Error('Private Blob readback hash/size mismatch')
  return response.blob.url
}
try{
  await query('BEGIN')
  await query('INSERT INTO evo_v2.source_release(id,authority,release_key,metadata) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING',[sourceReleaseId,'Catalogue of Life',catalogue.releaseAlias,sourceReleaseMetadata])
  const nativeRelease=(await query('SELECT metadata FROM evo_v2.source_release WHERE id=$1',[sourceReleaseId])).rows[0]
  if(!nativeRelease||stableJson(nativeRelease.metadata)!==stableJson(sourceReleaseMetadata))throw new Error('Frozen source release native readback differs')
  await query(`INSERT INTO evo_v2.source_checklist(release_id,source_dataset_id,metadata)
    SELECT $1,x.value->>'datasetId',x.value FROM jsonb_array_elements($2::jsonb) x(value) ON CONFLICT DO NOTHING`,[sourceReleaseId,JSON.stringify(checklists)])
  const nativeChecklists=(await query('SELECT source_dataset_id,metadata FROM evo_v2.source_checklist WHERE release_id=$1',[sourceReleaseId])).rows
  if(nativeChecklists.length!==checklists.length||checklists.some(row=>stableJson(nativeChecklists.find(value=>value.source_dataset_id===row.datasetId)?.metadata)!==stableJson(row)))throw new Error('Frozen checklists native readback differs')
  await query('COMMIT')
  async function uploadTarget(target){
    if((await stat(target.localPath)).size!==target.bytes)throw new Error('Local upload size changed')
    const bytes=await readFile(target.localPath);if(sha256(bytes)!==target.sha256)throw new Error('Local upload hash changed')
    const pathname='v2/sha256/'+target.sha256
    let existing=await get(pathname,options),url
    if(existing)url=await verify(existing,target)
    else{
      // Deterministic content address; no overwrite and no random duplicate name.
      await put(pathname,bytes,{...options,addRandomSuffix:false,allowOverwrite:false,contentType:target.mediaType,multipart:bytes.length>8*1024**2})
      url=await verify(await get(pathname,{...options,useCache:false}),target)
    }
    const known=(await query('SELECT bytes::text,storage_locator,access FROM evo_v2.artifact WHERE sha256=$1',[target.sha256])).rows[0]
    if(!known)await query('INSERT INTO evo_v2.artifact(sha256,bytes,media_type,storage_locator,access) VALUES ($1,$2,$3,$4,\'private\')',[target.sha256,target.bytes,target.mediaType,url])
    if(target.scientificSource){
      const snapshot=(await query('SELECT bytes::text,storage_locator,access FROM evo_v2.source_snapshot WHERE sha256=$1',[target.sha256])).rows[0]
      if(!snapshot)await query('INSERT INTO evo_v2.source_snapshot(sha256,bytes,media_type,storage_locator,access,provenance) VALUES ($1,$2,$3,$4,\'private\',$5)',[target.sha256,target.bytes,target.mediaType,url,target.provenance])
      else if(snapshot.bytes!==String(target.bytes)||snapshot.storage_locator!==url||snapshot.access!=='private')throw new Error('Stored source snapshot descriptor differs')
    }
    const descriptor=(await query('SELECT bytes::text,storage_locator,access FROM evo_v2.artifact WHERE sha256=$1',[target.sha256])).rows[0]
    if(descriptor.bytes!==String(target.bytes)||descriptor.storage_locator!==url||descriptor.access!=='private')throw new Error('Stored artifact descriptor differs')
    receipt.objects.push({sha256:target.sha256,bytes:target.bytes,pathname,url,verifiedReadback:true,scientificSource:Boolean(target.scientificSource)})
    await saveReceipt()
    if(receipt.objects.length%25===0)console.log(JSON.stringify({verifiedObjects:receipt.objects.length,total:targets.length}))
  }
  let next=0,failure=null
  await Promise.all(Array.from({length:6},async()=>{
    while(!failure){const target=targets[next++];if(!target)return;try{await uploadTarget(target)}catch(error){failure??=error}}
  }))
  if(failure)throw failure
  receipt.status='passed';await saveReceipt()
  console.log(JSON.stringify({status:'passed',verifiedObjects:receipt.objects.length,bytes:totalBytes,access:'private'}))
}catch(error){await query('ROLLBACK').catch(()=>{});receipt.status='failed';receipt.error=safeError(error);await saveReceipt();console.error(safeError(error));process.exitCode=1}
finally{await client.end()}
