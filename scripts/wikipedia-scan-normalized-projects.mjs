import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const root = resolve('.git/evo-wikipedia-col26-8')
const projects = JSON.parse(readFileSync(join(root, 'sources/wikipedia-projects.json'), 'utf8')).projects
const index = process.argv.indexOf('--limit')
const limit = index < 0 ? 10 : Number(process.argv[index + 1])
assert.ok(Number.isSafeInteger(limit) && limit > 0 && limit <= 100)
const db = new DatabaseSync(join(root, 'inventory.sqlite'), { readOnly: true })
const meta = db.prepare('SELECT value FROM meta WHERE key=?')
assert.ok(meta.get('uncovered_normalized_scope')?.value)
const first = ['en', 'ceb', 'sv', 'war', 'nl', 'vi', 'fr', 'de', 'es', 'pt', 'ru', 'zh']
const rank = locale => { const index = first.indexOf(locale); return index < 0 ? first.length : index }
const ordered = [...projects].sort((a,b) => rank(a.locale) - rank(b.locale) || a.locale.localeCompare(b.locale))
const run = locale => new Promise((resolveResult, reject) => {
  const child = spawn(process.execPath, ['scripts/wikipedia-col-normalized-titles.mjs', locale], { stdio: ['ignore', 'pipe', 'pipe'] })
  let log = ''
  const collect = chunk => { log = (log + chunk.toString()).slice(-5000) }
  child.stdout.on('data', collect)
  child.stderr.on('data', collect)
  child.on('error', reject)
  child.on('close', (code, signal) => resolveResult({ code, signal, log }))
})
let processed = 0
for (const { locale } of ordered) {
  if (meta.get(`normalized_titles_${locale}_complete`)?.value === 'true') continue
  if (processed >= limit) break
  let result
  for (let attempt = 0; attempt < 3; attempt++) {
    result = await run(locale)
    if (result.code === 0) break
    console.warn(`Normalized title scan ${locale} attempt ${attempt + 1} failed (${result.code}); checkpoint preserved`)
  }
  if (result.code !== 0) throw new Error(`Normalized title scan ${locale} failed after three attempts: ${result.log}`)
  console.log(JSON.stringify({ locale, status: 'indexed', detail: result.log.trim().split('\n').at(-1) }))
  processed++
}
const indexed = ordered.filter(project => meta.get(`normalized_titles_${project.locale}_complete`)?.value === 'true').length
console.log(JSON.stringify({ status: 'checkpoint', processed, projects: ordered.length, indexed, remaining: ordered.length - indexed }))
db.close()
