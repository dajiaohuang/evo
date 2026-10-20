import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import pg from 'pg'

export const LOCAL_DIRECTORY=new URL('../.git/platform-v2/local/',import.meta.url)
export async function localConfig(){
  // Never reads .env.local or silently falls back to any remote database.
  const config=JSON.parse(await readFile(new URL('connection.json',LOCAL_DIRECTORY),'utf8'))
  assert.equal(config.host,'127.0.0.1');assert.equal(config.user,'evo_local');assert.equal(config.database,'evo_local')
  assert.ok(Number.isInteger(config.port)&&config.port>1024&&config.port<65536)
  return config
}
export async function connectLocal(){
  const client=new pg.Client({...await localConfig(),connectionTimeoutMillis:5000,application_name:'evo-local-authoring'})
  await client.connect()
  const row=(await client.query('SELECT host(inet_server_addr()) address,current_database() name')).rows[0]
  assert.equal(row.address,'127.0.0.1');assert.equal(row.name,'evo_local')
  return client
}
