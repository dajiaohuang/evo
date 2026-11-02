import { DatabaseSync } from 'node:sqlite'
const db=new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite',{readOnly:true})
const counts=db.prepare("SELECT COUNT(*) total, SUM(CASE WHEN actual_item IS NOT NULL THEN 1 ELSE 0 END) with_item, SUM(CASE WHEN title <> target_title THEN 1 ELSE 0 END) changed_title FROM results WHERE kind='unkeyed' AND status='available'").get()
const examples=db.prepare("SELECT url,actual_item,target_title FROM results WHERE kind='unkeyed' AND status='available' AND actual_item IS NOT NULL LIMIT 10").all()
console.log(JSON.stringify({counts,examples}));db.close()
