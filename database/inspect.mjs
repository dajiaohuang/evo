import {connect,safeError} from './client.mjs'
const client=await connect()
try{
  const database=(await client.query('SELECT pg_database_size(current_database())::text AS bytes')).rows[0]
  const tables=(await client.query(`SELECT relname AS name,pg_total_relation_size(c.oid)::text AS bytes FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname='evo_v2' AND c.relkind='r' ORDER BY pg_total_relation_size(c.oid) DESC`)).rows
  const counts=(await client.query('SELECT (SELECT count(*)::integer FROM evo_v2.node_revision) AS nodes,(SELECT count(*)::integer FROM evo_v2.reference_revision) AS references_count,(SELECT count(*)::integer FROM evo_v2.source_snapshot) AS snapshots')).rows[0]
  console.log(JSON.stringify({database,tables,counts}))
}catch(error){console.error(safeError(error));process.exitCode=1}finally{await client.end()}
