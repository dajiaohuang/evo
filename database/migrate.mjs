import {writeFile, mkdir} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import {connect, PROJECT_ID, safeError} from './client.mjs'
import {applyMigrations} from './migrations.mjs'

const client = await connect()
try {
  const migrations=await applyMigrations(client)
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
