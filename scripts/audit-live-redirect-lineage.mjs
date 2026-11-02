import { DatabaseSync } from 'node:sqlite'
const inventory=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
const live=new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite',{readOnly:true})
const lookup=inventory.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?')
const groups={directChild:0,distinctKnown:0,unknown:0},examples={directChild:[],distinctKnown:[],unknown:[]}
for(const row of live.prepare("SELECT url,title,target_title,actual_item FROM results WHERE kind='unkeyed' AND status='available' AND title<>target_title").iterate()){
  const source=lookup.all(row.title),target=lookup.all(row.target_title)
  const category=source.some(s=>target.some(t=>t.parent_id===s.id))?'directChild':source.length&&target.length?'distinctKnown':'unknown'
  groups[category]++;if(examples[category].length<5)examples[category].push({url:row.url,title:row.title,target:row.target_title,item:row.actual_item,source:source.map(n=>n.id),targetIds:target.map(n=>n.id)})
}
console.log(JSON.stringify({groups,examples}));inventory.close();live.close()
