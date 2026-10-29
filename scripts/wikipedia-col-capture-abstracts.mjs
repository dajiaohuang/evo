import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'
const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec('PRAGMA busy_timeout=10000')
const index = process.argv.indexOf('--batches')
const limit = index < 0 ? 50 : Number(process.argv[index + 1])
assert.ok(Number.isSafeInteger(limit) && limit >= 1 && limit <= 1000)
const nextLocale = db.prepare("SELECT locale FROM article_jobs WHERE status='pending' GROUP BY locale ORDER BY CASE locale WHEN 'zh' THEN 0 WHEN 'en' THEN 1 ELSE 2 END, locale LIMIT 1")
const nextJobs = db.prepare("SELECT url,item_id FROM article_jobs WHERE status='pending' AND locale=? ORDER BY rowid LIMIT 20")
const getLicense = db.prepare('SELECT label,url FROM wiki_licenses WHERE locale=?')
const insertLicense = db.prepare('INSERT INTO wiki_licenses(locale,label,url) VALUES(?,?,?)')
const update = db.prepare("UPDATE article_jobs SET status=?,snapshot_json=?,checked_at=? WHERE url=? AND status='pending'")
let batches = 0, completed = 0, lastStart = 0
async function request(locale, query) {
  query.set('maxlag', '5')
  const delay = Math.max(0, 1200 - (Date.now() - lastStart))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  lastStart = Date.now()
  const response = await fetch(`https://${locale}.wikipedia.org/w/api.php?${query}`, { signal: AbortSignal.timeout(30000),
    headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; local Wikipedia abstract snapshots)' } })
  if (!response.ok) throw new Error(`Wikipedia ${locale} HTTP ${response.status}; current batch remains pending`)
  const data = await response.json()
  if (data.error || data.continue) throw new Error(`Incomplete Wikipedia response: ${JSON.stringify(data.error ?? data.continue)}`)
  return data
}
for (; batches < limit; batches++) {
  const locale = nextLocale.get()?.locale
  if (!locale) break
  assert.match(locale, /^[a-z0-9-]+$/)
  let license = getLicense.get(locale)
  if (!license) {
    const info = await request(locale, new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', meta: 'siteinfo', siprop: 'rightsinfo' }))
    const rights = info.query?.rightsinfo
    const url = new URL(rights?.url)
    if (url.protocol !== 'https:' || url.hostname !== 'creativecommons.org' || !url.pathname.startsWith('/licenses/by-sa/')) throw new Error(`Unsupported ${locale} Wikipedia text license`)
    license = { label: rights.text, url: url.href }
    assert.ok(license.label)
    insertLicense.run(locale, license.label, license.url)
  }
  const jobs = nextJobs.all(locale)
  const requested = jobs.map(job => ({ ...job, title: decodeURIComponent(new URL(job.url).pathname.slice('/wiki/'.length)).replaceAll('_', ' ') }))
  const query = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', redirects: '1',
    titles: requested.map(row => row.title).join('|'), prop: 'extracts|info|revisions|pageprops', inprop: 'url',
    rvprop: 'ids|timestamp', exintro: '1', explaintext: '1', exlimit: '20' })
  const result = await request(locale, query)
  if (!Array.isArray(result.query?.pages)) throw new Error('Missing Wikipedia pages')
  const aliases = new Map([...(result.query.normalized ?? []), ...(result.query.redirects ?? [])].map(row => [row.from, row.to]))
  const pages = new Map(result.query.pages.map(page => [page.title, page]))
  const at = new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const job of requested) {
      let title = job.title
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = pages.get(title)
      let state = 'unavailable', snapshot = null
      if (page && !page.missing && page.ns === 0 && !Object.hasOwn(page.pageprops ?? {}, 'disambiguation') && page.extract && page.revisions?.[0]?.revid) {
        if (`https://www.wikidata.org/entity/${page.pageprops?.wikibase_item}` !== job.item_id) state = 'identity-conflict'
        else {
          const url = new URL(page.fullurl)
          assert.equal(url.origin, `https://${locale}.wikipedia.org`)
          state = 'available'
          snapshot = { status: 'available', locale, requestedTitle: job.title, title: page.title, extract: page.extract,
            url: url.href, revisionId: page.revisions[0].revid, revisionTimestamp: page.revisions[0].timestamp, checkedAt: at,
            attributionUrl: `${url.origin}/w/index.php?title=${encodeURIComponent(page.title)}&action=history`, licenseUrl: license.url, licenseLabel: license.label }
        }
      }
      assert.equal(update.run(state, snapshot ? JSON.stringify(snapshot) : null, at, job.url).changes, 1)
    }
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  completed += jobs.length
  if ((batches + 1) % 10 === 0) console.log(JSON.stringify({ batches: batches + 1, completed, locale }))
}
const counts = db.prepare('SELECT status,COUNT(*) AS n FROM article_jobs GROUP BY status').all()
db.close()
console.log(JSON.stringify({ status: 'checkpoint', batches, completed, counts }))
