import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
const article=db.prepare('SELECT status FROM article_jobs WHERE url=?'),counts={exact:0,candidate:0,conflicting:0},examples=[]
const sql="SELECT n.id node_id,n.name,l.candidates_json FROM alias_wikidata_targets t JOIN nodes n ON n.id=t.id JOIN alias_wikidata_lookup l ON l.name=n.name WHERE l.status='queried' UNION SELECT s.node_id,s.name,l.candidates_json FROM alias_wikidata_targets t JOIN synonym_names s ON s.node_id=t.id JOIN alias_wikidata_lookup l ON l.name=s.name WHERE l.status='queried'"
for(const row of db.prepare(sql).iterate())for(const candidate of JSON.parse(row.candidates_json)){
 const urls=candidate.articles.filter(url=>!['identity-conflict','unavailable'].includes(article.get(url)?.status));if(!urls.length)continue
 const kind=candidate.colIds.includes(row.node_id)?'exact':candidate.colIds.length?'conflicting':'candidate';counts[kind]++
 if(examples.length<10)examples.push({node:row.node_id,name:row.name,kind,item:candidate.item,colIds:candidate.colIds,urls})
}
console.log(JSON.stringify({counts,examples}));db.close()
