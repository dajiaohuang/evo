import { DatabaseSync } from 'node:sqlite'
const source=new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite',{readOnly:true})
const live=new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite',{readOnly:true})
source.exec('PRAGMA busy_timeout=15000');live.exec('PRAGMA busy_timeout=15000')
source.prepare('ATTACH DATABASE ? AS live_audit').run('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite')
source.exec('BEGIN')
for(const [kind,table,status] of [['keyed','jobs','snapshot-matched'],['unkeyed','unkeyed_pages','snapshot-available']]){
  const identityJoin=kind==='keyed'?' AND r.item=s.item':''
  const locales=source.prepare(`SELECT s.locale,COUNT(*) total,COUNT(r.source_rowid) observed,SUM(CASE WHEN r.status=? THEN 1 ELSE 0 END) matched FROM ${table} s LEFT JOIN live_audit.results r ON r.kind=? AND r.source_rowid=s.rowid AND r.url=s.url${identityJoin} WHERE s.status=? GROUP BY s.locale ORDER BY total DESC`).all(kind==='keyed'?'matched':'available',kind,status)
  const total=locales.reduce((n,row)=>n+row.total,0),observed=locales.reduce((n,row)=>n+row.observed,0),matched=locales.reduce((n,row)=>n+row.matched,0)
  const allLiveResults=source.prepare('SELECT status,COUNT(*) n FROM live_audit.results WHERE kind=? GROUP BY status').all(kind)
  console.log(JSON.stringify({kind,total,observed,notObserved:total-observed,matched,observedButNotMatched:observed-matched,allLiveResults}))
  console.log(JSON.stringify({kind,largestLocales:locales.slice(0,10).map(row=>({...row,notObserved:row.total-row.observed}))}))
}
source.exec('COMMIT');source.close();live.close()
