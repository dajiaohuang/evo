import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { countIncompleteLivePages } from './wikipedia-live-completeness.mjs'

const arg=process.argv.indexOf('--audit-db')
assert.ok(arg>=0&&process.argv[arg+1], '--audit-db is required')
const source=new DatabaseSync(resolve(process.argv[arg+1]),{readOnly:true})
source.exec('PRAGMA busy_timeout=15000')
const livePath=resolve('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite')
assert.ok(existsSync(livePath), 'Live page audit database is missing')
source.prepare('ATTACH DATABASE ? AS live_audit').run(livePath)
try {
  source.exec('BEGIN')
  const incomplete=countIncompleteLivePages(source)
  source.exec('COMMIT')
  console.log(JSON.stringify({status:incomplete.total?'incomplete':'ready',incomplete}))
  if(incomplete.total) process.exitCode=1
} finally { source.close() }
if(!process.exitCode){
  const verified=spawnSync(process.execPath,['scripts/verify-live-snapshot-audit.mjs','--audit-db',resolve(process.argv[arg+1])],{stdio:'inherit'})
  assert.equal(verified.status,0,'Live page identity or reuse provenance verification failed')
}
