import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const nameParent = process.argv.includes('--name-parent')
const db = new DatabaseSync(root + (nameParent ? 'unlinked-name-parent-wikipedia-scan.sqlite' : 'unlinked-live-wikipedia-scan.sqlite'), { readOnly: true })
try {
  assert.equal(db.prepare("SELECT COUNT(*) n FROM targets WHERE status <> 'checked'").get().n, 0, 'Complete the scan before checking its pages')
  const manifestBytes = readFileSync(root + 'published-data-reviewed-20261031/manifest.json')
  assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get().value, createHash('sha256').update(manifestBytes).digest('hex'))
  const projects = JSON.parse(readFileSync(root + 'sources/wikipedia-projects.json')).projects
  const siteLocales = new Map(projects.map(p => [p.dbname, p.locale]))
  const candidates = []
  for (const row of db.prepare("SELECT node,item,col_ids,links,checked_at FROM targets WHERE status='checked' AND links<>'[]'").iterate()) {
    const colIds = JSON.parse(row.col_ids)
    for (const link of JSON.parse(row.links)) {
      const locale = siteLocales.get(link.site); assert.match(locale ?? '', /^[a-z0-9-]+$/)
      candidates.push({ node: row.node, item: row.item, colIds, locale, title: link.title, identityCheckedAt: row.checked_at })
    }
  }
  const checks = []
  for (const locale of [...new Set(candidates.map(row => row.locale))].sort()) {
    const rows = candidates.filter(row => row.locale === locale), titles = [...new Set(rows.map(row => row.title))]
    for (let offset = 0; offset < titles.length; offset += 40) {
      const selected = titles.slice(offset, offset + 40), url = new URL(`https://${locale}.wikipedia.org/w/api.php`)
      for (const [k, v] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: selected.join('|'), maxlag: '10' })) url.searchParams.set(k, v)
      const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; current page identity checks)' }, signal: AbortSignal.timeout(30000) })
      assert.ok(response.ok, `${locale} HTTP ${response.status}`); const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error))
      const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
      const pages = new Map(data.query.pages.map(page => [page.title, page]))
      for (const row of rows.filter(value => selected.includes(value.title))) {
        let title = row.title; const seen = new Set()
        while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
        const page = pages.get(title), actualItem = page?.pageprops?.wikibase_item ?? null
        const status = !page || page.missing ? 'missing' : Object.hasOwn(page.pageprops ?? {}, 'disambiguation') ? 'disambiguation' : actualItem === row.item && row.colIds.includes(row.node) ? 'exact' : 'identity-review'
        checks.push({ ...row, targetTitle: title, actualItem, status, url: `https://${locale}.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(' ', '_'))}` })
      }
    }
    console.log(JSON.stringify({ locale, checked: rows.length }))
  }
  assert.equal(checks.length, candidates.length)
  const proof = { manifestSha256: createHash('sha256').update(manifestBytes).digest('hex'), checkedAt: new Date().toISOString(), checks }
  writeFileSync(root + (nameParent ? 'unlinked-name-parent-scan-page-checks.json' : 'unlinked-live-scan-page-checks.json'), JSON.stringify(proof), { flag: 'wx' })
  console.log(JSON.stringify({ status: 'checked', pages: checks.length, exact: checks.filter(row => row.status === 'exact').length, review: checks.filter(row => row.status === 'identity-review').length, unavailable: checks.filter(row => ['missing', 'disambiguation'].includes(row.status)).length }))
} finally { db.close() }
