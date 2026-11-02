import assert from 'node:assert/strict'
import {open,unlink,writeFile} from 'node:fs/promises'
import {pathToFileURL} from 'node:url'
import {localTursoPath,openTurso} from './turso-store.mjs'

const oldCheck=/json_type\s*\(document,\s*'\$\.evidence'\)\s*=\s*'object'/g
const newCheck="json_type(document,'$.evidence') IN ('object','null')"

// Run only with exclusive service ownership, before accepting client requests.
export async function migrateNullEvidence(db){
  const table=await db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name='node_revision'").get()
  assert.ok(table?.sql,'Missing node_revision table')
  if(/json_type\s*\(document,\s*'\$\.evidence'\)\s*IN\s*\('object',\s*'null'\)/.test(table.sql))return {changed:false}
  assert.equal([...table.sql.matchAll(oldCheck)].length,1,'Unexpected node_revision evidence constraint')
  const objects=await db.prepare("SELECT type,name,sql FROM sqlite_master WHERE tbl_name='node_revision' AND type IN ('index','trigger') AND sql IS NOT NULL ORDER BY type,name").all()
  assert.ok(objects.some(x=>x.name==='node_revision_update_guard')&&objects.some(x=>x.name==='node_revision_delete_guard'),'Missing immutable revision guards')
  const create=table.sql.replace(/^CREATE TABLE\s+"?node_revision"?/i,'CREATE TABLE node_revision_null_evidence_new').replace(oldCheck,newCheck)
  assert.notEqual(create,table.sql)
  await db.exec('PRAGMA foreign_keys=OFF')
  try{
    assert.equal(Number(Object.values(await db.prepare('PRAGMA foreign_keys').get())[0]),0,'Cannot suspend foreign keys for atomic table migration')
    await db.exec('BEGIN IMMEDIATE')
    try{
      await db.exec(create)
      await db.exec('INSERT INTO node_revision_null_evidence_new SELECT * FROM node_revision')
      const rows=Number((await db.prepare('SELECT count(*) n FROM node_revision').get()).n)
      assert.equal(Number((await db.prepare('SELECT count(*) n FROM node_revision_null_evidence_new').get()).n),rows)
      assert.equal((await db.prepare('SELECT * FROM node_revision EXCEPT SELECT * FROM node_revision_null_evidence_new LIMIT 1').all()).length,0,'Revision copy differs')
      assert.equal((await db.prepare('SELECT * FROM node_revision_null_evidence_new EXCEPT SELECT * FROM node_revision LIMIT 1').all()).length,0,'Revision copy differs')
      await db.exec('DROP TABLE node_revision')
      await db.exec('ALTER TABLE node_revision_null_evidence_new RENAME TO node_revision')
      for(const object of objects)await db.exec(object.sql)
      assert.deepEqual(await db.prepare('PRAGMA foreign_key_check').all(),[],'Foreign keys changed')
      await db.exec('COMMIT')
      return {changed:true,rows}
    }catch(error){await db.exec('ROLLBACK');throw error}
  }finally{await db.exec('PRAGMA foreign_keys=ON')}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  assert.ok(process.argv[2],'Explicit local database path required')
  const database=await localTursoPath(process.argv[2])
  const lockPath=database+'.service-lock',lock=await open(lockPath,'wx')
  await lock.writeFile(JSON.stringify({pid:process.pid,database,startedAt:new Date().toISOString(),operation:'null-evidence-migration'}));await lock.close()
  let db
  try{
    db=await openTurso(database)
    const startedAt=new Date().toISOString(),migration=await migrateNullEvidence(db)
    const result={startedAt,completedAt:new Date().toISOString(),database,...migration}
    await writeFile(database+'.null-evidence-migration.json',JSON.stringify(result,null,2),{flag:'wx'})
    console.log(JSON.stringify(result))
  }finally{if(db)await db.close();await unlink(lockPath)}
}
