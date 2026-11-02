import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/'
const bytes=readFileSync(root+'subgenus-conflicts.json')
const input=JSON.parse(bytes), digest=createHash('sha256').update(bytes).digest('hex')
const db=new DatabaseSync(root+'inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS subgenus_conflicts(node_id TEXT NOT NULL,url TEXT NOT NULL,item TEXT NOT NULL,col_ids TEXT NOT NULL,PRIMARY KEY(node_id,url,item));')
assert.equal(db.prepare("SELECT value FROM meta WHERE key='subgenus_inventory_source_sha256'").get()?.value,input.inventorySha256)
const previous=db.prepare("SELECT value FROM meta WHERE key='subgenus_conflicts_sha256'").get()?.value
assert.ok(!previous||previous===digest)
const add=db.prepare('INSERT OR IGNORE INTO subgenus_conflicts VALUES(?,?,?,?)')
db.exec('BEGIN IMMEDIATE')
try{
  for(const row of input.conflicts){
    assert.ok(row.colIds.length && !row.colIds.includes(row.node))
    assert.match(row.item,/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/)
    const url=new URL(row.url); assert.match(url.hostname,/^[a-z0-9-]+\.wikipedia\.org$/); assert.equal(url.protocol,'https:')
    add.run(row.node,row.url,row.item,JSON.stringify(row.colIds))
  }
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('subgenus_conflicts_sha256',?)").run(digest)
  db.exec('COMMIT')
}catch(error){db.exec('ROLLBACK');throw error}
console.log(JSON.stringify({status:'imported',sha256:digest,conflicts:db.prepare('SELECT COUNT(*) n FROM subgenus_conflicts').get().n}))
db.close()
