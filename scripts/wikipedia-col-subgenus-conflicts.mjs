import { createHash } from 'node:crypto'
import { writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root='.git/evo-wikipedia-col26-8/'
const db=new DatabaseSync(root+'inventory.sqlite',{readOnly:true})
const getTitles=db.prepare('SELECT t.locale,t.title FROM subgenus_names s JOIN subgenus_title_matches t ON t.name=s.name WHERE s.node_id=?')
const conflicts=new Map()
for(const table of ['names','synonym_wikidata_lookup','label_wikidata_lookup']){
  let hits=0
  for(const row of db.prepare(`SELECT s.node_id,s.name,l.candidates_json FROM subgenus_names s JOIN ${table} l ON l.name=s.name WHERE l.status='queried'`).iterate()){
    for(const candidate of JSON.parse(row.candidates_json)){
      if(!candidate.colIds.length || candidate.colIds.includes(row.node_id))continue
      const urls=new Set(candidate.articles)
      for(const title of getTitles.all(row.node_id)){
        const url=`https://${title.locale}.wikipedia.org/wiki/${encodeURIComponent(title.title)}`
        if(!urls.has(url))continue
        const key=JSON.stringify([row.node_id,url,candidate.item])
        conflicts.set(key,{node:row.node_id,url,item:candidate.item,colIds:candidate.colIds,source:table,name:row.name})
        hits++
      }
    }
  }
  console.log(JSON.stringify({table,hits}))
}
const payload=JSON.stringify({inventorySha256:db.prepare("SELECT value FROM meta WHERE key='subgenus_inventory_source_sha256'").get()?.value, conflicts:[...conflicts.values()]})
db.close()
writeFileSync(root+'subgenus-conflicts.json',payload)
console.log(JSON.stringify({status:'complete',conflicts:conflicts.size,sha256:createHash('sha256').update(payload).digest('hex')}))
