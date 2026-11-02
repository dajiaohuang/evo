import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {DatabaseSync} from 'node:sqlite'

const path='.git/evo-wikipedia-col26-8/unresolved-direct-id-redirects.json'
const bytes=readFileSync(path),evidence=JSON.parse(bytes)
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
const byId=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE id=?')
const byName=db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?')
const source=db.prepare('SELECT item_id,status FROM article_jobs WHERE url=?')
db.exec('CREATE TABLE IF NOT EXISTS related_redirect_targets (node_id TEXT PRIMARY KEY, target_id TEXT NOT NULL, target_name TEXT NOT NULL, target_item TEXT NOT NULL, target_url TEXT NOT NULL, relation TEXT NOT NULL)')
const put=db.prepare('INSERT OR REPLACE INTO related_redirect_targets VALUES (?,?,?,?,?,?)')
let count=0
db.exec('BEGIN IMMEDIATE')
try {
 for(const row of evidence.results){
  const n=byId.get(row.id);assert.equal(n?.name,row.name)
  const matches=byName.all(row.targetTitle);assert.equal(matches.length,1)
  const target=matches[0]
  const relation=target.parent_id===n.id&&n.rank==='genus'&&target.rank==='species'?'child-species':n.parent_id===target.id&&n.rank==='species'&&target.rank==='genus'?'parent-genus':null
  assert.ok(relation,`Unsupported tree relationship for ${row.id}`)
  assert.match(row.targetItem,/^Q\d+$/)
  const sourceUrl=`https://en.wikipedia.org/wiki/${encodeURIComponent(n.name.replaceAll(' ','_'))}`
  const original=source.get(sourceUrl);assert.equal(original?.status,'identity-conflict');assert.equal(original.item_id,row.sourceItem)
  const targetUrl=`https://en.wikipedia.org/wiki/${encodeURIComponent(target.name.replaceAll(' ','_'))}`
  assert.notEqual(sourceUrl,targetUrl)
  put.run(n.id,target.id,target.name,row.targetItem,targetUrl,relation);count++
 }
 assert.equal(count,2)
 db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('related_redirect_source_sha256',?)").run(createHash('sha256').update(bytes).digest('hex'))
 db.exec('COMMIT')
}catch(error){db.exec('ROLLBACK');throw error}
db.close()
console.log(JSON.stringify({status:'imported',count}))
