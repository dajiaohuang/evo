import { DatabaseSync } from 'node:sqlite'
import { classifyCachedPage } from './wikipedia-live-page-result.mjs'

// Copy only a recent observation for the identical URL, locale and title.
// Preserve its original timestamp and source row so it remains auditable.
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/live-snapshot-page-audit.sqlite')
db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS reuse_provenance (kind TEXT NOT NULL,source_rowid INTEGER NOT NULL,cached_kind TEXT NOT NULL,cached_rowid INTEGER NOT NULL,cached_checked_at TEXT NOT NULL,PRIMARY KEY(kind,source_rowid))')
db.prepare('ATTACH DATABASE ? AS audit').run('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite')
const cutoff = new Date(Date.now() - 86400000).toISOString()
const unkeyedCandidates = db.prepare(`SELECT u.rowid target_rowid,u.url,u.locale,u.title,r.kind cached_kind,r.source_rowid cached_rowid,r.status,r.target_title,r.actual_item,r.checked_at
  FROM audit.unkeyed_pages u JOIN results r ON r.url=u.url AND r.locale=u.locale AND r.title=u.title
  WHERE u.status=? AND r.kind=? AND r.status=? AND r.checked_at>=?
  AND NOT EXISTS (SELECT 1 FROM results done WHERE done.kind=? AND done.source_rowid=u.rowid)`).all('snapshot-available','keyed','matched',cutoff,'unkeyed')
const keyedCandidates = db.prepare(`SELECT j.rowid target_rowid,j.url,j.item,j.locale,j.title,r.kind cached_kind,r.source_rowid cached_rowid,r.status,r.target_title,r.actual_item,r.checked_at
  FROM audit.jobs j JOIN results r ON r.url=j.url AND r.locale=j.locale AND r.title=j.title
  WHERE j.status=? AND r.kind=? AND r.status=? AND r.checked_at>=?
  AND NOT EXISTS (SELECT 1 FROM results done WHERE done.kind=? AND done.source_rowid=j.rowid)`).all('snapshot-matched','unkeyed','available',cutoff,'keyed')
const insert = db.prepare('INSERT OR IGNORE INTO results VALUES(?,?,?,?,?,?,?,?,?,?)')
const provenance = db.prepare('INSERT INTO reuse_provenance VALUES(?,?,?,?,?)')
let insertedUnkeyed = 0, insertedKeyed = 0
db.exec('BEGIN IMMEDIATE')
try {
  for (const row of unkeyedCandidates) {
    const result = classifyCachedPage(row, null)
    if (!result || result.status !== 'available') continue
    const change = insert.run('unkeyed',row.target_rowid,row.url,null,row.locale,row.title,result.status,result.title,result.item,row.checked_at)
    if (change.changes) { provenance.run('unkeyed',row.target_rowid,row.cached_kind,row.cached_rowid,row.checked_at); insertedUnkeyed++ }
  }
  for (const row of keyedCandidates) {
    const result = classifyCachedPage(row, row.item)
    // Only use a cached page to confirm an exact identity. Conflicts remain
    // in the normal queue for independent page review.
    if (!result || result.status !== 'matched') continue
    const change = insert.run('keyed',row.target_rowid,row.url,row.item,row.locale,row.title,result.status,result.title,result.item,row.checked_at)
    if (change.changes) { provenance.run('keyed',row.target_rowid,row.cached_kind,row.cached_rowid,row.checked_at); insertedKeyed++ }
  }
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({ status:'backfilled', unkeyedCandidates:unkeyedCandidates.length, keyedCandidates:keyedCandidates.length, insertedUnkeyed, insertedKeyed, cutoff }))
db.close()
