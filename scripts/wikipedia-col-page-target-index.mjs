import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000; CREATE INDEX IF NOT EXISTS subgenus_page_targets_locale_title ON subgenus_page_targets(locale,title,node_id)')
console.log(JSON.stringify({status:'complete',index:'subgenus_page_targets_locale_title'}));db.close()
