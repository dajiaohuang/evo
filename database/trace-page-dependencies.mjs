import assert from 'node:assert/strict'
import {connect,PROJECT_ID,safeError} from './client.mjs'
const args=process.argv.slice(2),artifact=args[0]==='--artifact'?args[1]:null,version=artifact?null:args[0],reverse=args.includes('--reverse')
if(artifact)assert.match(artifact,/^[0-9a-f]{64}$/,'Provide artifact SHA-256')
else assert.match(version??'',/^[0-9a-f-]{36}$/,'Provide dependency version UUID')
const client=await connect()
try{
  await client.query('BEGIN READ ONLY')
  const targets=artifact?(await client.query("SELECT id FROM evo_v2.dependency_version WHERE artifact_sha256=$1 OR (kind='resource' AND descriptor->>'expectedSha256'=$1)",[artifact])).rows.map(row=>row.id):[version]
  assert.ok(targets.length,'Artifact is not indexed in the dependency graph')
  const results=[]
  for(const target of targets){
    assert.equal((await client.query('SELECT 1 FROM evo_v2.dependency_version WHERE id=$1',[target])).rowCount,1,'Unknown version')
    const rows=(await client.query(reverse?'SELECT * FROM evo_v2.dependency_referrers($1) ORDER BY page_key':'SELECT * FROM evo_v2.dependency_closure($1,true) ORDER BY kind,entity_key',[target])).rows
    const edges=(await client.query(reverse?'SELECT from_version_id,to_version_id,role,required,selectors FROM evo_v2.dependency_edge WHERE to_version_id=$1':'SELECT e.* FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_closure($1,true) c ON c.version_id=e.from_version_id',[target])).rows
    results.push({version:target,rows,edges})
  }
  const coverage=(await client.query('SELECT (SELECT count(DISTINCT node_revision_id) FROM evo_v2.dependency_version WHERE kind=\'node\')::integer AS indexed_node_revisions,(SELECT count(*) FROM evo_v2.node_revision)::integer AS native_node_revisions')).rows[0]
  await client.query('COMMIT')
  console.log(JSON.stringify({projectId:PROJECT_ID,artifact,direction:reverse?'reverse-page-users':'transitive-dependencies',results,coverage,garbageCollectionAuthorized:false,note:'Partial graph coverage is not evidence that other source files are unused. No deletion operation is provided.'}))
}catch(error){await client.query('ROLLBACK').catch(()=>{});console.error(safeError(error));process.exitCode=1}finally{await client.end()}
