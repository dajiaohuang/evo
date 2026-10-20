import assert from 'node:assert/strict'
import {mkdir,writeFile,readFile} from 'node:fs/promises'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {readRevision} from './read-revision.mjs'
import {dependencySpec,indexNodePage} from './page-dependencies.mjs'
import {sha256} from './model.mjs'

const args=process.argv.slice(2),apply=args.includes('--apply')
function option(name){const index=args.indexOf(name);return index<0?null:args[index+1]}
const sourceCommit=option('--source-commit'),key=option('--physical-key'),locale=option('--locale')??'zh'
assert.match(sourceCommit??'',/^[0-9a-f]{40}$/,'Provide exact imported source SHA')
assert.ok(key&&!/[\\/]/.test(key),'Provide one physical storage key')
const client=await connect()
try{
  await client.query('BEGIN')
  await client.query('SELECT pg_advisory_xact_lock($1)',[2026102109])
  const revision=(await client.query('SELECT r.* FROM evo_v2.import_node_key k JOIN evo_v2.node_revision r ON r.id=k.revision_id WHERE k.source_commit=$1 AND k.physical_key=$2',[sourceCommit,key])).rows[0]
  assert.ok(revision,'Unknown source/physical-key mapping')
  const document=await readRevision(client,revision.id)
  const rendererInputs={}
  for(const file of ['src/components/catalogue/CatalogueKnowledge.tsx','src/components/reading/NodeReadingSections.tsx','src/utils/nodeReading.mjs'])rendererInputs[file]=sha256(await readFile(new URL('../'+file,import.meta.url)))
  const renderer=dependencySpec('renderer','node-reading-v1',{surface:'node-reading'},{buildStatus:'unbuilt',sourceInputs:rendererInputs,note:'Code input hashes only; a verified full renderer build and widget/resource declarations are still required.'})
  const result=await indexNodePage(client,{revision,document,locale,renderer,actor:'migration-page-index'})
  const size=(await client.query('SELECT pg_database_size(current_database())::text AS bytes')).rows[0].bytes
  assert.ok(Number(size)<850*1024**2,'Database capacity watermark reached')
  if(apply)await client.query('COMMIT');else await client.query('ROLLBACK')
  const report={status:'passed',mode:apply?'private-index-committed':'dry-run-rolled-back',projectId:PROJECT_ID,recordedAt:new Date().toISOString(),sourceCommit,physicalKey:key,databaseBytes:size,...result,coverage:'One authored node reading surface; not a complete full-site/catalogue-page import. Readiness blockers remain explicit.'}
  await mkdir(new URL('../.git/platform-v2/page-dependencies/',import.meta.url),{recursive:true})
  await writeFile(new URL('../.git/platform-v2/page-dependencies/'+encodeURIComponent(key)+'-'+locale+'.json',import.meta.url),JSON.stringify(report,null,2)+'\n')
  const root=result.specs.find(spec=>spec.versionId===result.pageVersionId)
  console.log(JSON.stringify({status:report.status,mode:report.mode,physicalKey:key,locale,pageVersionId:result.pageVersionId,dependencyVersions:result.closure.length,ready:root.ready,blockers:root.blockers,databaseBytes:size,productionCutover:false}))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}finally{await client.end()}
