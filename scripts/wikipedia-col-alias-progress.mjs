import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
let namesWithLinks=0,articles=0
for(const row of db.prepare("SELECT name,candidates_json FROM alias_wikidata_lookup WHERE status='queried'").iterate()){
 const n=JSON.parse(row.candidates_json).reduce((total,candidate)=>total+candidate.articles.length,0)
 if(n){namesWithLinks++;if(process.argv.includes('--details'))console.log(JSON.stringify({name:row.name,candidates:JSON.parse(row.candidates_json).filter(x=>x.articles.length)}))}articles+=n
}
console.log(JSON.stringify({counts:db.prepare('SELECT status,COUNT(*) n FROM alias_wikidata_lookup GROUP BY status').all(),namesWithLinks,articles}));db.close()
