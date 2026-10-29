import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'
import { classify } from './wikipedia-col-identity.mjs'

const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec('PRAGMA busy_timeout=15000')
const progress = db.prepare("SELECT value FROM meta WHERE key='col_id_covered_scan_rowid'").get()?.value
let lastRowid = Number(progress ?? 0), scanned = 0, covered = 0
const next = db.prepare('SELECT rowid,id,name,rank,parent_id FROM nodes WHERE rowid>? ORDER BY rowid LIMIT 20000')
const lookup = db.prepare('SELECT status FROM col_id_lookups WHERE id=?')
const name = db.prepare('SELECT status,candidates_json FROM names WHERE name=?')
const parent = db.prepare('SELECT name FROM nodes WHERE id=?')
const article = db.prepare('SELECT status FROM article_jobs WHERE url=?')
const mark = db.prepare("UPDATE col_id_lookups SET status='covered-by-existing-link',checked_at=? WHERE id=? AND status='pending'")
const removePriority = db.prepare('DELETE FROM col_id_priority WHERE id=?')
const save = db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('col_id_covered_scan_rowid',?)")
for (;;) {
  const rows = next.all(lastRowid)
  if (!rows.length) break
  const at = new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const row of rows) {
      lastRowid = row.rowid
      if (lookup.get(row.id)?.status !== 'pending') continue
      const info = name.get(row.name)
      if (info?.status !== 'queried') continue
      const result = classify({ ...row, parentName: row.parent_id ? parent.get(row.parent_id)?.name : undefined }, JSON.parse(info.candidates_json))
      if (!['matched-col-id', 'matched-name-parent-rank'].includes(result.status)) continue
      if (!result.articles.some(url => !['identity-conflict', 'unavailable'].includes(article.get(url)?.status))) continue
      const changed = mark.run(at, row.id).changes
      if (changed) removePriority.run(row.id)
      covered += changed
    }
    save.run(String(lastRowid))
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  scanned += rows.length
  if (scanned % 200000 === 0) console.log(JSON.stringify({ scanned, covered, lastRowid }))
}
console.log(JSON.stringify({ status: 'checkpoint', scanned, covered, lastRowid, counts: db.prepare('SELECT status,COUNT(*) n FROM col_id_lookups GROUP BY status').all() }))
db.close()
