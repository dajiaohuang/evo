import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite',{readOnly:true})
for(const name of ['Aubertiana','Ceylonspathius','Anacanthodes','Neopsilochorema'])console.log(JSON.stringify({name,nodes:db.prepare('SELECT id,name,rank,parent_id FROM nodes WHERE name=?').all(name)}))
db.close()
