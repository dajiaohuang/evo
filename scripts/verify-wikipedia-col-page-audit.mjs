import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { gunzipSync } from 'node:zlib'
import { pageAuditError } from './wikipedia-col-page-audit-result.mjs'

const output=resolve(process.argv[2] ?? ''),auditPath=process.argv[3]
assert.ok(process.argv[2] && auditPath,'Usage: node scripts/verify-wikipedia-col-page-audit.mjs <output> <audit-db>')
const manifest=JSON.parse(readFileSync(join(output,'manifest.json')))
const audit=new DatabaseSync(resolve(auditPath),{readOnly:true})
const keyed=audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
const unkeyed=audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
const pageEvidence=audit.prepare("SELECT status,actual_item FROM jobs WHERE url=? AND status IN ('matched','snapshot-matched','identity-conflict','no-item') LIMIT 1")
let links=0,missing=0,conflicting=0,nodes=0
const examples=[]
try{
 for(const shard of Object.values(manifest.shards)){
  const bytes=readFileSync(join(output,shard.path));assert.equal(createHash('sha256').update(bytes).digest('hex'),shard.sha256)
  const entries=JSON.parse(gunzipSync(bytes)).entries
  for(const [id,entry] of Object.entries(entries)){
   nodes++
   for(const option of [entry,...(entry.options??[])]){
    if(!option.url)continue;links++
    const expected=/^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(option.item??'')?.[1]
    const row=expected ? keyed.get(option.url,option.item) : null
    const fallback=row ? null : unkeyed.get(option.url) ?? pageEvidence.get(option.url)
    const error=pageAuditError(expected,row,fallback)
    if(error){if(error==='page not confirmed')missing++;else conflicting++;if(examples.length<20)examples.push({id,url:option.url,item:option.item,error})}
   }
  }
 }
 console.log(JSON.stringify({nodes,links,missing,conflicting,examples}))
 assert.equal(missing+conflicting,0,'Some exported links lack matching audit evidence')
}finally{audit.close()}
