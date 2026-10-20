import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {mkdir,writeFile} from 'node:fs/promises'
import {connect,PROJECT_ID,safeError} from './client.mjs'
import {connectLocal} from './local-client.mjs'

const local=process.argv.includes('--local')
const client=await (local?connectLocal():connect()),checks=[]
async function rejects(label,code,work){
  await client.query('SAVEPOINT negative_case')
  let actual
  try{await work()}catch(error){actual=error.code}
  await client.query('ROLLBACK TO SAVEPOINT negative_case')
  assert.equal(actual,code,label);checks.push({check:label,passed:true,sqlState:actual})
}
try{
  await client.query('BEGIN')
  const release=randomUUID(),other=randomUUID(),node=randomUUID(),revision=randomUUID()
  await client.query("INSERT INTO evo_v2.source_release(id,authority,release_key,metadata) VALUES ($1::uuid,'test-only',$1::text,'{}'),($2::uuid,'test-only',$2::text,'{}')",[release,other])
  await rejects('source release uniqueness','23505',()=>client.query("INSERT INTO evo_v2.source_release(id,authority,release_key,metadata) VALUES ($1,'test-only',$2,'{}')",[randomUUID(),release]))
  await rejects('unknown source checklist rejected','23503',()=>client.query("INSERT INTO evo_v2.taxon_usage(release_id,usage_id,scientific_name,rank,status,source_dataset_id) VALUES ($1,'test-child','Test fixture','species','accepted','absent')",[release]))
  await client.query("INSERT INTO evo_v2.taxon_usage(release_id,usage_id,scientific_name,rank,status) VALUES ($1,'test-parent','Test fixture','family','accepted')",[other])
  await rejects('parent cannot cross source releases','23503',async()=>{
    await client.query("INSERT INTO evo_v2.taxon_usage(release_id,usage_id,scientific_name,rank,status,parent_id) VALUES ($1,'test-child','Test fixture','species','accepted','test-parent')",[release])
    await client.query('SET CONSTRAINTS ALL IMMEDIATE')
  })
  await client.query("INSERT INTO evo_v2.content_node(id,kind) VALUES ($1,'test-only')",[node])
  await client.query("INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,source_files,delivery_bindings,origin_commit,created_by) VALUES ($1,$2,$3,$4,'{}','[]',$5,'native-test-only')",[revision,node,'a'.repeat(64),{node:{identity:{kind:'test-only'}},evidence:null,pages:{}},'a'.repeat(40)])
  await rejects('revisions are immutable','P0001',()=>client.query("UPDATE evo_v2.node_revision SET document='{}' WHERE id=$1",[revision]))
  await rejects('missing aggregate keys rejected','23514',()=>client.query("INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,source_files,delivery_bindings,origin_commit,created_by) VALUES ($1,$2,$3,'{}','{}','[]',$4,'native-test-only')",[randomUUID(),node,'b'.repeat(64),'a'.repeat(40)]))
  await rejects('unregistered bibliography dependency rejected','23503',()=>client.query('INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id) VALUES ($1,-1)',[revision]))
  await rejects('external payload requires a registered object','23503',()=>client.query("INSERT INTO evo_v2.node_revision(id,node_id,content_sha256,document,identity,payload_artifact_sha256,source_files,delivery_bindings,origin_commit,created_by) VALUES ($1,$2,$3,NULL,'{}',$4,'{}','[]',$5,'native-test-only')",[randomUUID(),node,'c'.repeat(64),'f'.repeat(64),'a'.repeat(40)]))
  const nextRevision=randomUUID()
  await client.query("INSERT INTO evo_v2.node_revision(id,node_id,parent_revision_id,content_sha256,document,source_files,delivery_bindings,origin_commit,created_by) VALUES ($1,$2,$3,$4,$5,'{}','[]',$6,'native-test-only')",[nextRevision,node,revision,'a'.repeat(64),{node:{identity:{kind:'test-only'}},evidence:null,pages:{}},'a'.repeat(40)])
  checks.push({check:'identical body supports a distinct revision for changed citation metadata',passed:true})
  await client.query('ROLLBACK')
  const receipt={status:'passed',projectId:local?'local':PROJECT_ID,layer:'native PostgreSQL constraints; all synthetic rows rolled back',checks,productionCutover:false}
  await mkdir(new URL('../.git/platform-v2/',import.meta.url),{recursive:true})
  await writeFile(new URL(local?'../.git/platform-v2/local/native-constraints.json':'../.git/platform-v2/native-constraints.json',import.meta.url),JSON.stringify(receipt,null,2)+'\n')
  console.log(JSON.stringify(receipt))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}
finally{await client.end()}
