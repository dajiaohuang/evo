import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const root = resolve('.git/evo-wikipedia-col26-8')
const projects = JSON.parse(readFileSync(join(root, 'sources/wikipedia-projects.json'), 'utf8')).projects
const limitIndex = process.argv.indexOf('--limit')
const limit = limitIndex < 0 ? 10 : Number(process.argv[limitIndex + 1])
assert.ok(Number.isSafeInteger(limit) && limit > 0 && limit <= 100)
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec("PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS project_title_scans(locale TEXT PRIMARY KEY, state TEXT NOT NULL, checked_at TEXT NOT NULL, note TEXT)")
assert.ok(db.prepare("SELECT value FROM meta WHERE key='uncovered_source_sha256'").get()?.value)
const completed = db.prepare('SELECT value FROM meta WHERE key=?')
const prior = db.prepare('SELECT state FROM project_title_scans WHERE locale=?')
const record = db.prepare('INSERT OR REPLACE INTO project_title_scans(locale,state,checked_at,note) VALUES(?,?,?,?)')
const preferred = ['az', 'uk', 'tr', 'ca', 'fi', 'fa', 'ar', 'id', 'he', 'cs', 'hu', 'no', 'da', 'ko', 'sr', 'ro', 'bg', 'ta', 'th']
const rank = locale => { const index = preferred.indexOf(locale); return index < 0 ? preferred.length : index }
const ordered = [...projects].sort((a,b) => rank(a.locale) - rank(b.locale) || a.locale.localeCompare(b.locale))
const run = (script, args) => new Promise((resolveResult, reject) => {
  const child = spawn(process.execPath, [script, ...args], { stdio: ['ignore', 'pipe', 'pipe'] })
  let log = ''
  const collect = chunk => { log = (log + chunk.toString()).slice(-5000) }
  child.stdout.on('data', collect)
  child.stderr.on('data', collect)
  child.on('error', reject)
  child.on('close', (code, signal) => resolveResult({ code, signal, log }))
})
let processed = 0
for (const project of ordered) {
  const { locale } = project
  if (locale === 'en' || completed.get(`alternate_titles_${locale}_sha256`)?.value || prior.get(locale)?.state === 'unavailable') continue
  if (processed >= limit) break
  const target = join(root, `sources/${locale}wiki-titles-ns0.gz`)
  if (!existsSync(target)) {
    const download = await run('scripts/wikipedia-download-title-index.mjs', [locale])
    if (download.code !== 0) {
      if (/Title dump HTTP 404/.test(download.log)) {
        record.run(locale, 'unavailable', new Date().toISOString(), 'Wikimedia title dump HTTP 404')
        console.log(JSON.stringify({ locale, status: 'unavailable', reason: 'HTTP 404' }))
        processed++
        continue
      }
      throw new Error(`Title download ${locale} failed; source preserved: ${download.log}`)
    }
  }
  let indexed
  for (let attempt = 0; attempt < 3; attempt++) {
    indexed = await run('scripts/wikipedia-col-alternate-titles.mjs', [locale, '--uncovered-only'])
    if (indexed.code === 0) break
    console.warn(`Title index ${locale} attempt ${attempt + 1} failed (${indexed.code}); checkpoint preserved`)
  }
  if (indexed.code !== 0) throw new Error(`Title index ${locale} failed after three attempts: ${indexed.log}`)
  record.run(locale, 'indexed', new Date().toISOString(), null)
  console.log(JSON.stringify({ locale, status: 'indexed', detail: indexed.log.trim().split('\n').at(-1) }))
  processed++
}
const indexed = ordered.filter(project => project.locale === 'en' || completed.get(`alternate_titles_${project.locale}_sha256`)?.value).length
const unavailable = db.prepare("SELECT COUNT(*) n FROM project_title_scans WHERE state='unavailable'").get().n
console.log(JSON.stringify({ status: 'checkpoint', processed, projects: ordered.length, indexed, unavailable, remaining: ordered.length - indexed - unavailable }))
db.close()
