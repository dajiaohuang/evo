import assert from 'node:assert/strict'
import {readFile,writeFile,stat} from 'node:fs/promises'
import {createHash,randomUUID} from 'node:crypto'
import {fileURLToPath} from 'node:url'
import {connectLocal} from './local-client.mjs'
import {openTurso,TURSO_DIRECTORY,TABLE_CONTRACT,SCHEMA,quote} from './turso-store.mjs'
import {sha256,stableJson} from './model.mjs'
import {readLocalArtifact} from './local-artifacts.mjs'

const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1]}
const target=arg('--target')??fileURLToPath(new URL('content-'+randomUUID()+'.db',TURSO_DIRECTORY))
const source=await connectLocal();let db,report
const normalize=(table,row)=>Object.fromEntries(table.columns.map(col=>{
  let value=row[col.name]
  if(value!==null){
    if(col.type==='jsonb')value=stableJson(value)
    if(['integer','bigint'].includes(col.type)){value=Number(value);assert.ok(Number.isSafeInteger(value),'Unsafe integer in '+table.name+'.'+col.name)}
    if(col.type==='boolean')value=value?1:0
  }
  return [col.name,value]
}))
try{
  // Refuse overlap rather than copying across an active writer. Source is never edited.
  await source.query('BEGIN ISOLATION LEVEL REPEATABLE READ')
  await source.query('SET LOCAL lock_timeout=\'5s\'')
  const live=(await source.query("SELECT tablename FROM pg_tables WHERE schemaname='evo_v2' ORDER BY tablename")).rows.map(r=>r.tablename)
  assert.deepEqual(live,TABLE_CONTRACT.map(t=>t.name),'Source table set differs from reviewed contract')
  await source.query('LOCK TABLE '+live.map(t=>'evo_v2.'+quote(t)).join(',')+' IN SHARE MODE NOWAIT')
  db=await openTurso(target,{create:true});await db.exec('PRAGMA foreign_keys=OFF;')
  await db.exec(SCHEMA)
  report={status:'copying',at:new Date().toISOString(),target,engine:'@tursodatabase/database@0.8.3',schemaSha256:sha256(SCHEMA),tables:[],artifacts:0,remoteAccessed:false}
  for(const table of TABLE_CONTRACT){
    const name=quote(table.name),columns=table.columns.map(c=>quote(c.name)).join(','),order=table.primaryKey.map(quote).join(',')
    const count=Number((await source.query('SELECT count(*) n FROM evo_v2.'+name)).rows[0].n)
    assert.ok(table.authoring||count===0,'Non-authoring table has rows; port its semantic API before migrating: '+table.name)
    const fingerprint=createHash('sha256');let copied=0
    await source.query(`DECLARE migration_rows NO SCROLL CURSOR FOR SELECT row_to_json(t)::text AS payload FROM (SELECT * FROM evo_v2.${name} ORDER BY ${order}) t`)
    await db.exec('BEGIN IMMEDIATE')
    try{
      while(true){
        const rows=(await source.query('FETCH FORWARD 500 FROM migration_rows')).rows
        if(!rows.length)break
        const normalized=rows.map(r=>normalize(table,JSON.parse(r.payload)))
        for(const row of normalized)fingerprint.update(stableJson(row)+'\n')
        for(let i=0;i<normalized.length;i+=50){
          const batch=normalized.slice(i,i+50),slots='('+table.columns.map(()=>'?').join(',')+')'
          await db.prepare(`INSERT INTO ${name} (${columns}) VALUES ${batch.map(()=>slots).join(',')}`).run(...batch.flatMap(r=>table.columns.map(c=>r[c.name])))
        }
        copied+=rows.length
      }
      await db.exec('COMMIT')
    }catch(error){await db.exec('ROLLBACK').catch(()=>{});throw error}
    await source.query('CLOSE migration_rows');assert.equal(copied,count)
    const expected=fingerprint.digest('hex'),actual=createHash('sha256');let offset=0
    while(true){const rows=await db.prepare(`SELECT ${columns} FROM ${name} ORDER BY ${order} LIMIT 1000 OFFSET ?`).all(offset);if(!rows.length)break;for(const row of rows)actual.update(stableJson(row)+'\n');offset+=rows.length}
    assert.equal(offset,count);assert.equal(actual.digest('hex'),expected,'Full row equality failed: '+table.name)
    report.tables.push({table:table.name,rows:count,sha256:expected})
    console.log(JSON.stringify({table:table.name,rows:count,verified:true}))
  }
  await db.exec('PRAGMA foreign_keys=ON')
  assert.deepEqual(await db.prepare('PRAGMA foreign_key_check').all(),[],'Migrated foreign keys differ')
  for(const artifact of await db.prepare('SELECT sha256,bytes,storage_locator FROM artifact').all()){
    const response=await readLocalArtifact(artifact.storage_locator);let bytes=0;for await(const chunk of response.stream)bytes+=chunk.length
    assert.equal(bytes,Number(artifact.bytes));assert.equal(artifact.storage_locator,'local:sha256:'+artifact.sha256);report.artifacts++
  }
  report.sourceFingerprint=sha256(stableJson(report.tables));report.status='migrated-not-activated';report.completedAt=new Date().toISOString()
  await db.prepare('INSERT INTO turso_local_migration(id,schema_sha256,source_fingerprint,receipt) VALUES(?,?,?,?)').run('postgres-local-v1',report.schemaSha256,report.sourceFingerprint,stableJson(report))
  await db.close();db=null
  await source.query('ROLLBACK')
  report.databaseBytes=(await stat(target)).size
  await writeFile(target+'.migration.json',JSON.stringify(report,null,2)+'\n',{flag:'wx'})
  console.log(JSON.stringify(report))
}catch(error){console.error(JSON.stringify({status:'failed',target,message:error.message,preservedPartialTarget:true}));process.exitCode=1}
finally{if(db)await db.close().catch(()=>{});await source.query('ROLLBACK').catch(()=>{});await source.end()}
