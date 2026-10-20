import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {gunzipSync} from 'node:zlib'
import {Readable} from 'node:stream'
import {pipeline} from 'node:stream/promises'
import {resolve,join} from 'node:path'
import {isDeepStrictEqual} from 'node:util'
import {from as copyFrom} from 'pg-copy-streams'
import {connect,safeError,PROJECT_ID} from './client.mjs'
import {sha256,internalId} from './model.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const commit=arg('--commit');if(!/^[a-f0-9]{40}$/.test(commit??''))throw new Error('--commit requires the exact source commit')
const root=resolve(import.meta.dirname,'..'),source=join(root,'data/catalogue-of-life/releases/2026-08-20/registry')
const manifestBytes=await readFile(join(source,'manifest.json')),manifest=JSON.parse(manifestBytes)
if(manifest.releaseAlias!=='COL26.8')throw new Error('Unrecognized frozen catalogue release')
const manifestHash=sha256(manifestBytes),releaseId=internalId('source-release/Catalogue of Life/COL26.8'),id='hierarchy:'+manifestHash
const maxBytes=850*1024**2,client=await connect(),inspector=await connect()
const output=join(root,'.git/platform-v2/taxonomy.json')
const receipt={status:'running',projectId:PROJECT_ID,sourceCommit:commit,sourceRelease:manifest.releaseAlias,manifestSha256:manifestHash,rowsStreamed:0,shardsVerified:0,productionCutover:false}
const uploads=JSON.parse(await readFile(join(root,`.git/platform-v2/uploads/${commit}.json`),'utf8'))
if(uploads.status!=='passed')throw new Error('Complete verified source upload required')
const verified=new Set(uploads.objects.filter(row=>row.verifiedReadback).map(row=>row.sha256))
const sampleIds=new Set(['N6S2','8GNQF','HY5','3KTM2','6G5JP',...manifest.hierarchy.roots.map(row=>row.id)]),samples=new Map()
function cell(value){if(value===null||value===undefined)return '\\N';if(String(value).includes('\0'))throw new Error('NUL in frozen catalogue field');return String(value).replaceAll('\\','\\\\').replaceAll('\t','\\t').replaceAll('\n','\\n').replaceAll('\r','\\r')}
async function* lines(){
  for(const file of manifest.hierarchy.nodes.files){
    if(!/^hierarchy\/nodes\/id-[a-f0-9]{2}\.jsonl\.gz$/.test(file.path)||!verified.has(file.sha256))throw new Error('Unverified frozen hierarchy shard')
    const bytes=await readFile(join(source,file.path));if(sha256(bytes)!==file.sha256)throw new Error('Frozen compressed source changed')
    const decoded=gunzipSync(bytes);if(sha256(decoded)!==file.sourceSha256)throw new Error('Frozen decoded source changed')
    const rows=decoded.toString('utf8').trimEnd().split('\n');if(rows.length!==file.records)throw new Error('Frozen shard record count differs')
    let buffer=''
    for(const line of rows){
      const row=JSON.parse(line)
      if(typeof row.id!=='string'||typeof row.scientificName!=='string')throw new Error('Invalid recorded identity')
      if(sampleIds.has(row.id))samples.set(row.id,row)
      buffer+=[releaseId,row.id,row.scientificName,row.authorship,row.rank,row.status,row.parentId,null,row.sourceDatasetId,true].map(cell).join('\t')+'\n'
      receipt.rowsStreamed++
      if(buffer.length>=64*1024){yield buffer;buffer=''}
    }
    if(buffer)yield buffer
    receipt.shardsVerified++
    if(receipt.shardsVerified%8===0){
      const size=Number((await inspector.query('SELECT pg_database_size(current_database())::text bytes')).rows[0].bytes)
      if(size>=maxBytes)throw new Error('Database capacity watermark reached; entire hierarchy transaction will roll back')
      receipt.databaseBytes=size;await writeFile(output,JSON.stringify(receipt,null,2)+'\n')
      console.log(JSON.stringify({shards:receipt.shardsVerified,rows:receipt.rowsStreamed,databaseBytes:size}))
    }
  }
}
try{
  const sourceRelease=(await client.query('SELECT metadata FROM evo_v2.source_release WHERE id=$1',[releaseId])).rows[0]
  if(sourceRelease?.metadata?.manifestSha256!==manifestHash)throw new Error('Native source release differs')
  const prior=(await client.query('SELECT payload_sha256,record_count FROM evo_v2.import_batch WHERE id=$1',[id])).rows[0]
  const existing=Number((await client.query('SELECT count(*)::text count FROM evo_v2.taxon_usage WHERE release_id=$1',[releaseId])).rows[0].count)
  if(prior){
    if(prior.payload_sha256!==manifestHash||prior.record_count!==manifest.hierarchy.counts.nodes||existing!==prior.record_count)throw new Error('Hierarchy receipt/state mismatch')
    receipt.status='passed';receipt.reconciled=true;receipt.rowsStreamed=existing
  }else{
    if(existing!==0)throw new Error('Unrecognized partial hierarchy; reconcile before any retry')
    await client.query('BEGIN')
    await client.query('SELECT pg_advisory_xact_lock($1)',[2026102003])
    const stream=client.query(copyFrom('COPY evo_v2.taxon_usage(release_id,usage_id,scientific_name,authorship,rank,status,parent_id,accepted_id,source_dataset_id,in_hierarchy) FROM STDIN'))
    await pipeline(Readable.from(lines()),stream)
    if(receipt.rowsStreamed!==manifest.hierarchy.counts.nodes)throw new Error('Complete hierarchy source count differs')
    await client.query('SET CONSTRAINTS ALL IMMEDIATE')
    const counts=(await client.query(`SELECT count(*)::integer nodes,count(*) FILTER(WHERE parent_id IS NULL)::integer roots,count(*) FILTER(WHERE parent_id IS NOT NULL)::integer edges,count(*) FILTER(WHERE rank='species')::integer species FROM evo_v2.taxon_usage WHERE release_id=$1`,[releaseId])).rows[0]
    const expected={nodes:manifest.hierarchy.counts.nodes,roots:manifest.hierarchy.counts.roots,edges:manifest.hierarchy.counts.directChildEdges,species:manifest.hierarchy.counts.acceptedSpeciesNodes}
    if(!isDeepStrictEqual(counts,expected))throw new Error('Native hierarchy aggregate counts differ')
    for(const [usageId,row] of samples){
      const native=(await client.query('SELECT scientific_name,authorship,rank,status,parent_id,source_dataset_id,(SELECT count(*)::integer FROM evo_v2.taxon_usage ch WHERE ch.release_id=t.release_id AND ch.parent_id=t.usage_id) child_count FROM evo_v2.taxon_usage t WHERE release_id=$1 AND usage_id=$2',[releaseId,usageId])).rows[0]
      const expected={scientific_name:row.scientificName,authorship:row.authorship,rank:row.rank,status:row.status,parent_id:row.parentId,source_dataset_id:row.sourceDatasetId,child_count:row.childCount}
      if(!isDeepStrictEqual(native,expected))throw new Error('Native recorded node/child query differs for '+usageId)
    }
    await client.query('INSERT INTO evo_v2.import_batch(id,source_commit,payload_sha256,record_count) VALUES ($1,$2,$3,$4)',[id,commit,manifestHash,receipt.rowsStreamed])
    await client.query('COMMIT')
    receipt.status='passed';receipt.counts=counts;receipt.actualSampleQueries=samples.size
  }
  await writeFile(output,JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify(receipt))
}catch(error){await client.query('ROLLBACK').catch(()=>{});receipt.status='failed';receipt.error=safeError(error);await writeFile(output,JSON.stringify(receipt,null,2)+'\n');console.error(safeError(error));process.exitCode=1}
finally{await client.end();await inspector.end()}
