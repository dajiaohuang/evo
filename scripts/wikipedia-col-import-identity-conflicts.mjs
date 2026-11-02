import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFileSync} from 'node:fs'
import {DatabaseSync} from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/c-scratch/',manifest=readFileSync(root+'snapshot-trogoniformes-1/manifest.json')
const audit=new DatabaseSync(root+'live-identity-audit.sqlite',{readOnly:true}),db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
assert.equal(audit.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value,createHash('sha256').update(manifest).digest('hex'))
assert.equal(audit.prepare("SELECT COUNT(*) n FROM alternatives WHERE status='pending'").get().n,0)
const rows=audit.prepare("SELECT url,item,locale,actual_item,target_title,checked_at,status FROM alternatives WHERE status IN ('identity-conflict','disambiguation','missing','no-item')").all()
assert.ok(rows.length>0)
const get=db.prepare('SELECT item_id,status FROM article_jobs WHERE url=?')
const update=db.prepare('UPDATE article_jobs SET status=?,checked_at=? WHERE url=? AND item_id=?')
const add=db.prepare('INSERT INTO article_jobs(url,item_id,locale,status,checked_at) VALUES(?,?,?,?,?)')
let changed=0,added=0
db.exec('BEGIN IMMEDIATE')
try{
 for(const row of rows){
  if(row.status==='identity-conflict'){assert.match(row.actual_item??'',/^Q\d+$/);assert.notEqual(row.item.split('/').at(-1),row.actual_item)}
  const status=row.status==='identity-conflict'?'identity-conflict':'unavailable'
  const existing=get.get(row.url)
  if(!existing){add.run(row.url,row.item,row.locale,status,row.checked_at);added++;continue}
  assert.equal(existing.item_id,row.item,`Shared URL has different stored identity: ${row.url}`)
  if(existing.status!==status){assert.equal(update.run(status,row.checked_at,row.url,row.item).changes,1);changed++}
 }
 db.exec('COMMIT')
}catch(error){db.exec('ROLLBACK');throw error}
console.log(JSON.stringify({status:'imported',verifiedConflicts:rows.length,changed,added}));audit.close();db.close()
