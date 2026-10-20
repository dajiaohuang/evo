import {readFile, writeFile, mkdir, readdir} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {fileURLToPath} from 'node:url'
import {connect, PROJECT_ID, safeError} from './client.mjs'

const client = await connect()
try {
  await client.query('BEGIN')
  await client.query('SELECT pg_advisory_xact_lock($1)', [2026102001])
  const exists = (await client.query("SELECT to_regclass('evo_v2.schema_migration') AS relation")).rows[0].relation
  if (!exists) {
    const schema = (await client.query("SELECT 1 FROM pg_namespace WHERE nspname = 'evo_v2'")).rowCount
    if (schema) throw new Error('Unknown existing evo_v2 schema; reconcile before migration')
  }
  const migrations=[]
  for(const file of (await readdir(new URL('./migrations/',import.meta.url))).filter(file=>/^\d{4}_.+\.sql$/.test(file)).sort()){
    const version=file.slice(0,-4),sql=await readFile(new URL('./migrations/'+file,import.meta.url),'utf8'),sha256=createHash('sha256').update(sql).digest('hex')
    const previous=exists||migrations.length?(await client.query('SELECT sha256 FROM evo_v2.schema_migration WHERE version=$1',[version])).rows[0]:null
    if(previous){if(previous.sha256!==sha256)throw new Error('Existing schema migration differs: '+version)}
    else{await client.query(sql);await client.query('INSERT INTO evo_v2.schema_migration(version,sha256) VALUES ($1,$2)',[version,sha256])}
    migrations.push({version,sha256})
  }
  await client.query('COMMIT')
  const size = (await client.query('SELECT current_database() AS database, pg_database_size(current_database())::text AS bytes')).rows[0]
  const receipt = {status:'passed',projectId:PROJECT_ID,migrations,database:size.database,bytes:size.bytes,productionCutover:false}
  const output = new URL('../.git/platform-v2/', import.meta.url)
  await mkdir(output,{recursive:true})
  await writeFile(fileURLToPath(new URL('schema-receipt.json',output)), JSON.stringify(receipt,null,2)+'\n')
  console.log(JSON.stringify(receipt))
} catch (error) {
  await client.query('ROLLBACK').catch(()=>{})
  console.error(safeError(error));process.exitCode=1
} finally { await client.end() }
