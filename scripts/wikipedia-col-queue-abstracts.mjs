import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'
import { classify } from './wikipedia-col-identity.mjs'

const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec('PRAGMA busy_timeout=10000')
if (!db.prepare("PRAGMA table_info(names)").all().some(row => row.name === 'abstract_queued_at')) db.exec('ALTER TABLE names ADD COLUMN abstract_queued_at TEXT')
if (!db.prepare("PRAGMA table_info(names)").all().some(row => row.name === 'abstract_queue_version')) db.exec('ALTER TABLE names ADD COLUMN abstract_queue_version INTEGER NOT NULL DEFAULT 0')
db.exec(`CREATE TABLE IF NOT EXISTS article_jobs (
  url TEXT PRIMARY KEY, item_id TEXT NOT NULL, locale TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', snapshot_json TEXT, checked_at TEXT
); CREATE INDEX IF NOT EXISTS article_jobs_status_locale ON article_jobs(status,locale);
CREATE TABLE IF NOT EXISTS exact_title_jobs (name TEXT PRIMARY KEY, title TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending', snapshot_json TEXT, checked_at TEXT);
CREATE INDEX IF NOT EXISTS exact_title_jobs_status ON exact_title_jobs(status);
CREATE TABLE IF NOT EXISTS wiki_licenses(locale TEXT PRIMARY KEY, label TEXT NOT NULL, url TEXT NOT NULL);`)
const limitIndex = process.argv.indexOf('--names')
const limit = limitIndex < 0 ? 20000 : Number(process.argv[limitIndex + 1])
assert.ok(Number.isSafeInteger(limit) && limit > 0 && limit <= 100000)
const names = db.prepare("SELECT name,candidates_json FROM names WHERE status='queried' AND abstract_queue_version < 5 ORDER BY rowid LIMIT ?").all(limit)
const nodes = db.prepare('SELECT n.id,n.rank,p.name AS parentName FROM nodes n LEFT JOIN nodes p ON n.parent_id=p.id WHERE n.name=?')
const insert = db.prepare('INSERT OR IGNORE INTO article_jobs(url,item_id,locale) VALUES(?,?,?)')
const existing = db.prepare('SELECT item_id FROM article_jobs WHERE url=?')
const markConflict = db.prepare("UPDATE article_jobs SET status='identity-conflict' WHERE url=?")
const mark = db.prepare('UPDATE names SET abstract_queued_at=?,abstract_queue_version=5 WHERE name=? AND abstract_queue_version < 5')
const title = db.prepare('SELECT title FROM exact_english_titles WHERE name=?')
const insertTitle = db.prepare('INSERT OR IGNORE INTO exact_title_jobs(name,title) VALUES(?,?)')
const deferTitle = db.prepare("UPDATE exact_title_jobs SET status='deferred-redundant' WHERE name=? AND status='pending'")
let matchedNodes = 0, queuedArticleReferences = 0
db.exec('BEGIN IMMEDIATE')
try {
  for (const row of names) {
    const candidates = JSON.parse(row.candidates_json)
    const fallback = title.get(row.name)
    const nodeRows = nodes.all(row.name)
    const englishAlreadyConfirmed = nodeRows.length > 0 && nodeRows.every(node => {
      const result = classify(node, candidates)
      return ['matched-col-id', 'matched-name-parent-rank'].includes(result.status)
        && result.articles.some(article => new URL(article).hostname === 'en.wikipedia.org')
    })
    if (fallback && !englishAlreadyConfirmed) insertTitle.run(row.name, fallback.title)
    else if (englishAlreadyConfirmed) deferTitle.run(row.name)
    for (const node of nodeRows) {
      const result = classify(node, candidates)
      const exact = ['matched-col-id', 'matched-name-parent-rank'].includes(result.status)
      const options = exact || result.status === 'candidate-name' ? candidates.filter(candidate => candidate.item === result.item)
        : result.status.startsWith('ambiguous') ? candidates : []
      if (exact) matchedNodes++
      for (const candidate of options) {
        const articles = candidate.articles.map(value => ({ url: value, locale: new URL(value).hostname.split('.')[0] }))
        const chosen = articles.filter(article => article.locale === 'zh' || article.locale === 'en')
        if (!chosen.length && articles.length) chosen.push(articles[0])
        for (const article of chosen) {
          insert.run(article.url, candidate.item, article.locale)
          if (existing.get(article.url)?.item_id !== candidate.item) markConflict.run(article.url)
          queuedArticleReferences++
        }
      }
    }
    assert.equal(mark.run(new Date().toISOString(), row.name).changes, 1)
  }
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
const jobCounts = db.prepare('SELECT status,COUNT(*) AS n FROM article_jobs GROUP BY status').all()
const remaining = db.prepare("SELECT COUNT(*) AS n FROM names WHERE status='queried' AND abstract_queue_version < 5").get().n
db.close()
console.log(JSON.stringify({ processedNames: names.length, remainingNames: remaining, matchedNodes, queuedArticleReferences, jobCounts }))
