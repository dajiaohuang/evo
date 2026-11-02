import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
const article=db.prepare('SELECT status FROM article_jobs WHERE url=?')
const exact=new Set(),candidate=new Set(),conflict=new Set()
const sql="SELECT t.id node_id,l.candidates_json FROM abbreviated_wikidata_targets t JOIN subgenus_names s ON s.node_id=t.id JOIN abbreviated_wikidata_lookup l ON l.name=s.name WHERE l.status='queried'"
for(const row of db.prepare(sql).iterate())for(const value of JSON.parse(row.candidates_json)){
 if(!value.articles.some(url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status)))continue
 if(value.colIds.includes(row.node_id))exact.add(row.node_id);else if(value.colIds.length)conflict.add(row.node_id);else candidate.add(row.node_id)
}
console.log(JSON.stringify({counts:db.prepare('SELECT status,COUNT(*) n FROM abbreviated_wikidata_lookup GROUP BY status').all(),exactNodes:exact.size,candidateNodes:candidate.size,conflictingNodes:conflict.size}));db.close()
