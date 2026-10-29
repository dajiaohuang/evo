import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'

export function normalizeName(value) {
  return String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/g, ' ').trim()
}

if (process.argv[1] && resolve(process.argv[1]) === resolve('scripts/wikipedia-col-normalized-names.mjs')) {
  const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
  db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS uncovered_normalized (normalized TEXT NOT NULL, name TEXT NOT NULL, PRIMARY KEY(normalized,name))')
  const scope = db.prepare("SELECT value FROM meta WHERE key='uncovered_source_sha256'").get()?.value
  if (!scope) throw new Error('Build the uncovered inventory first')
  const oldScope = db.prepare("SELECT value FROM meta WHERE key='uncovered_normalized_scope'").get()?.value
  if (oldScope && oldScope !== scope) throw new Error('Normalized name index uses a different uncovered inventory')
  if (!oldScope) {
    const add = db.prepare('INSERT OR IGNORE INTO uncovered_normalized(normalized,name) VALUES(?,?)')
    const next = db.prepare('SELECT rowid,name FROM uncovered_names WHERE rowid>? ORDER BY rowid LIMIT 10000')
    const save = db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('uncovered_normalized_rowid',?)")
    let last = Number(db.prepare("SELECT value FROM meta WHERE key='uncovered_normalized_rowid'").get()?.value ?? 0)
    for (;;) {
      const rows = next.all(last)
      if (!rows.length) break
      db.exec('BEGIN IMMEDIATE')
      try {
        for (const row of rows) {
        const normalized = normalizeName(row.name)
        if (normalized.length >= 3) add.run(normalized, row.name)
          last = row.rowid
        }
        save.run(String(last))
        db.exec('COMMIT')
      } catch (error) { db.exec('ROLLBACK'); throw error }
      }
    db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('uncovered_normalized_scope',?)").run(scope)
  }
  console.log(JSON.stringify({ status: 'complete', names: db.prepare('SELECT COUNT(*) n FROM uncovered_normalized').get().n, scope }))
  db.close()
}
