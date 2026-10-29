import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { resolve } from 'node:path'

const db = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'))
db.exec('PRAGMA busy_timeout=15000')
const index = process.argv.indexOf('--batches')
const limit = index < 0 ? 50 : Number(process.argv[index + 1])
assert.ok(Number.isInteger(limit) && limit > 0 && limit <= 1000)
const next = db.prepare("SELECT name,title FROM exact_title_jobs WHERE status='pending' ORDER BY rowid LIMIT 20")
const update = db.prepare("UPDATE exact_title_jobs SET status=?,snapshot_json=?,checked_at=? WHERE name=? AND status='pending'")
const licenseQuery = db.prepare("SELECT label,url FROM wiki_licenses WHERE locale='en'")
let license = licenseQuery.get()
let last = 0
async function request(query) {
  const delay = Math.max(0, 1200 - (Date.now() - last))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  last = Date.now()
  const response = await fetch('https://en.wikipedia.org/w/api.php?' + query, { signal: AbortSignal.timeout(30000),
    headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; local Wikipedia abstract snapshots)' } })
  if (!response.ok) throw new Error(`Wikipedia HTTP ${response.status}; batch remains pending`)
  const data = await response.json()
  if (data.error || data.continue) throw new Error(`Incomplete Wikipedia response: ${JSON.stringify(data.error ?? data.continue)}`)
  return data
}
if (!license) {
  const data = await request(new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', meta: 'siteinfo', siprop: 'rightsinfo' }))
  const info = data.query?.rightsinfo
  const url = new URL(info?.url)
  assert.equal(url.hostname, 'creativecommons.org')
  assert.ok(url.pathname.startsWith('/licenses/by-sa/'))
  license = { label: info.text, url: url.href }
  db.prepare('INSERT OR IGNORE INTO wiki_licenses(locale,label,url) VALUES(?,?,?)').run('en', license.label, license.url)
}
let batches = 0, checked = 0
for (; batches < limit; batches++) {
  const jobs = next.all()
  if (!jobs.length) break
  const titles = jobs.map(job => job.title.replaceAll('_', ' '))
  const query = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', redirects: '1', titles: titles.join('|'),
    prop: 'extracts|info|revisions|pageprops', inprop: 'url', rvprop: 'ids|timestamp', exintro: '1', explaintext: '1', exlimit: '20' })
  const data = await request(query)
  if (!Array.isArray(data.query?.pages)) throw new Error('Missing Wikipedia pages')
  const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
  const pages = new Map(data.query.pages.map(page => [page.title, page]))
  const at = new Date().toISOString()
  db.exec('BEGIN IMMEDIATE')
  try {
    for (let i = 0; i < jobs.length; i++) {
      let title = titles[i]
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = pages.get(title)
      let status = 'unavailable', snapshot = null
      if (page && !page.missing && page.ns === 0 && Object.hasOwn(page.pageprops ?? {}, 'disambiguation')) status = 'ambiguous'
      else if (page && !page.missing && page.ns === 0 && page.extract && page.revisions?.[0]?.revid) {
        const url = new URL(page.fullurl)
        assert.equal(url.origin, 'https://en.wikipedia.org')
        status = 'available'
        snapshot = { status: 'available', locale: 'en', requestedTitle: titles[i], title: page.title, extract: page.extract,
          url: url.href, revisionId: page.revisions[0].revid, revisionTimestamp: page.revisions[0].timestamp, checkedAt: at,
          attributionUrl: `${url.origin}/w/index.php?title=${encodeURIComponent(page.title)}&action=history`,
          licenseUrl: license.url, licenseLabel: license.label, wikidataItem: page.pageprops?.wikibase_item ?? null }
      }
      assert.equal(update.run(status, snapshot ? JSON.stringify(snapshot) : null, at, jobs[i].name).changes, 1)
    }
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  checked += jobs.length
  if ((batches + 1) % 10 === 0) console.log(JSON.stringify({ batches: batches + 1, checked }))
}
console.log(JSON.stringify({ status: 'checkpoint', batches, checked, counts: db.prepare('SELECT status,COUNT(*) AS n FROM exact_title_jobs GROUP BY status').all() }))
db.close()
