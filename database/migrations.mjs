import {readFile,readdir} from 'node:fs/promises'
import {sha256} from './model.mjs'

/** Same byte-verified migrations for an isolated local server or the managed DB. */
export async function applyMigrations(client){
  await client.query('BEGIN')
  try{
    await client.query('SELECT pg_advisory_xact_lock($1)',[2026102001])
    const exists=(await client.query("SELECT to_regclass('evo_v2.schema_migration') AS relation")).rows[0].relation
    if(!exists&&(await client.query("SELECT 1 FROM pg_namespace WHERE nspname='evo_v2'")).rowCount)throw new Error('Unknown existing evo_v2 schema; reconcile before migration')
    const migrations=[]
    for(const file of (await readdir(new URL('./migrations/',import.meta.url))).filter(file=>/^\d{4}_.+\.sql$/.test(file)).sort()){
      const version=file.slice(0,-4),bytes=await readFile(new URL('./migrations/'+file,import.meta.url)),digest=sha256(bytes)
      const previous=exists||migrations.length?(await client.query('SELECT sha256 FROM evo_v2.schema_migration WHERE version=$1',[version])).rows[0]:null
      if(previous){if(previous.sha256!==digest)throw new Error('Existing schema migration differs: '+version)}
      else{await client.query(bytes.toString('utf8'));await client.query('INSERT INTO evo_v2.schema_migration(version,sha256) VALUES($1,$2)',[version,digest])}
      migrations.push({version,sha256:digest})
    }
    await client.query('COMMIT');return migrations
  }catch(error){await client.query('ROLLBACK').catch(()=>{});throw error}
}
