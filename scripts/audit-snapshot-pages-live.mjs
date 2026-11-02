import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { classifyPage, classifyCachedPage } from './wikipedia-live-page-result.mjs'
const source = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
source.exec('PRAGMA busy_timeout=15000')
const live = new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite')
live.exec('PRAGMA busy_timeout=15000')
live.exec('CREATE TABLE IF NOT EXISTS results (kind TEXT NOT NULL, source_rowid INTEGER NOT NULL, url TEXT NOT NULL, item TEXT, locale TEXT NOT NULL, title TEXT NOT NULL, status TEXT NOT NULL, target_title TEXT, actual_item TEXT, checked_at TEXT NOT NULL, PRIMARY KEY(kind,source_rowid)); CREATE TABLE IF NOT EXISTS checkpoint (kind TEXT PRIMARY KEY, last_rowid INTEGER NOT NULL); CREATE TABLE IF NOT EXISTS reuse_provenance (kind TEXT NOT NULL,source_rowid INTEGER NOT NULL,cached_kind TEXT NOT NULL,cached_rowid INTEGER NOT NULL,cached_checked_at TEXT NOT NULL,PRIMARY KEY(kind,source_rowid)); CREATE INDEX IF NOT EXISTS results_url_checked ON results(url,checked_at)')
const kind = process.argv[2] ?? 'keyed', limit = Number(process.argv[3] ?? 20)
assert.ok(['keyed','unkeyed'].includes(kind)); assert.ok(Number.isInteger(limit) && limit > 0 && limit <= 1000)
const selectedLocale = process.argv[4] ?? 'en'; assert.match(selectedLocale, /^[a-z0-9-]+$/)
const initialDelaySeconds = Number(process.argv[5] ?? 0); assert.ok(Number.isInteger(initialDelaySeconds) && initialDelaySeconds >= 0 && initialDelaySeconds <= 3600)
const intervalSeconds = Number(process.argv[6] ?? 3); assert.ok(Number.isInteger(intervalSeconds) && intervalSeconds >= 3 && intervalSeconds <= 3600)
const checkpointKey = `${kind}:${selectedLocale}`
const table = kind === 'keyed' ? 'jobs' : 'unkeyed_pages', status = kind === 'keyed' ? 'snapshot-matched' : 'snapshot-available'
const cursor = live.prepare('SELECT last_rowid FROM checkpoint WHERE kind=?'), advance = live.prepare('INSERT INTO checkpoint(kind,last_rowid) VALUES(?,?) ON CONFLICT(kind) DO UPDATE SET last_rowid=excluded.last_rowid')
const next = source.prepare(`SELECT rowid,url,${kind === 'keyed' ? 'item' : 'NULL AS item'},locale,title FROM ${table} WHERE status=? AND locale=? AND rowid>? ORDER BY rowid LIMIT 50`)
const save = live.prepare('INSERT OR IGNORE INTO results VALUES(?,?,?,?,?,?,?,?,?,?)')
const existing = live.prepare('SELECT url,item,locale,title FROM results WHERE kind=? AND source_rowid=?')
const recent = live.prepare('SELECT kind,source_rowid,status,target_title,actual_item,checked_at FROM results WHERE url=? AND locale=? AND title=? AND kind<>? AND checked_at>=? ORDER BY checked_at DESC LIMIT 1')
const saveReuse = live.prepare('INSERT INTO reuse_provenance VALUES(?,?,?,?,?)')
let batches=0, checked=0, reused=0, skipped=0
try {
  if(initialDelaySeconds){console.log(JSON.stringify({status:'initial-backoff',locale:selectedLocale,seconds:initialDelaySeconds}));await new Promise(resolve=>setTimeout(resolve,initialDelaySeconds*1000))}
  while(batches<limit){
    const start=cursor.get(checkpointKey)?.last_rowid ?? 0, rows=next.all(status,selectedLocale,start); if(!rows.length)break
    const locale=rows[0].locale, batch=[]; for(const row of rows){if(row.locale!==locale)break;batch.push(row)}
    assert.match(locale,/^[a-z0-9-]+$/)
    const work=batch.filter(row=>{const saved=existing.get(kind,row.rowid);if(!saved)return true;assert.equal(saved.url,row.url);assert.equal(saved.item,row.item);assert.equal(saved.locale,row.locale);assert.equal(saved.title,row.title);return false})
    const cached=new Map(),cutoff=new Date(Date.now()-86400000).toISOString()
    for(const row of work){const observation=recent.get(row.url,locale,row.title,kind,cutoff),result=observation&&classifyCachedPage(observation,row.item);if(result)cached.set(row.rowid,{result,observation})}
    const pending=work.filter(row=>!cached.has(row.rowid));let data
    if(pending.length){const url=new URL(`https://${locale}.wikipedia.org/w/api.php`);url.search=new URLSearchParams({action:'query',prop:'pageprops',ppprop:'wikibase_item|disambiguation',titles:[...new Set(pending.map(r=>r.title))].join('|'),redirects:'1',format:'json',formatversion:'2',maxlag:'5'})
      const response=await fetch(url,{headers:{'User-Agent':'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; link identity and availability audit)'},signal:AbortSignal.timeout(60000)})
      if(response.status===429||response.status===503){const value=response.headers.get('retry-after'),seconds=Math.max(60,value&&/^\d+$/.test(value)?Number(value):120);console.log(JSON.stringify({status:'backoff',locale,http:response.status,seconds}));await new Promise(resolve=>setTimeout(resolve,seconds*1000));continue}
      if(!response.ok)throw new Error(`HTTP ${response.status}; retry-after ${response.headers.get('retry-after') ?? 'unknown'}; checkpoint retained`)
      data=await response.json();if(data.error?.code==='maxlag'){console.log(JSON.stringify({status:'backoff',locale,code:'maxlag',seconds:60}));await new Promise(resolve=>setTimeout(resolve,60000));continue}assert.ok(!data.error,JSON.stringify(data.error))}
    live.exec('BEGIN IMMEDIATE');try{for(const row of work){const previous=cached.get(row.rowid),result=previous?.result??classifyPage(data.query,row.title,row.item),change=save.run(kind,row.rowid,row.url,row.item,locale,row.title,result.status,result.title,result.item,previous?.observation.checked_at??new Date().toISOString());if(previous&&change.changes)saveReuse.run(kind,row.rowid,previous.observation.kind,previous.observation.source_rowid,previous.observation.checked_at)}advance.run(checkpointKey,batch.at(-1).rowid);live.exec('COMMIT')}catch(error){live.exec('ROLLBACK');throw error}
    checked+=work.length;skipped+=batch.length-work.length;reused+=cached.size;batches++;if(batches%10===0)console.log(JSON.stringify({kind,batches,checked,reused,skipped,lastRowid:batch.at(-1).rowid}));if(pending.length)await new Promise(resolve=>setTimeout(resolve,intervalSeconds*1000))
  }
  console.log(JSON.stringify({status:'checkpoint',kind,batches,checked,reused,skipped,counts:live.prepare('SELECT status,COUNT(*) n FROM results WHERE kind=? GROUP BY status').all(kind)}))
} finally {source.close();live.close()}
