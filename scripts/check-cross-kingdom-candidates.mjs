import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const root = '.git/evo-wikipedia-col26-8/'
const group = process.argv[2] ?? 'kingdom'
assert.ok(['kingdom', 'phylum', 'class', 'order', 'authorship', 'inexact', 'namekingdom', 'namephylum', 'nameclass', 'nameorder'].includes(group))
const bytes = readFileSync(root + `cross-${group}-unkeyed-candidates-evidence.json`)
const evidence = JSON.parse(bytes), items = {}, pages = {}
const request = async url => {
  const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity checks)' }, signal: AbortSignal.timeout(30000) })
  assert.ok(response.ok, `${url.hostname}: HTTP ${response.status}`)
  const data = await response.json(); assert.ok(!data.error, JSON.stringify(data.error)); return data
}
const ids = [...new Set(evidence.rows.map(row => row.item))].sort()
for (let offset = 0; offset < ids.length; offset += 40) {
  const url = new URL('https://www.wikidata.org/w/api.php')
  for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims', ids: ids.slice(offset, offset + 40).join('|'), maxlag: '10' })) url.searchParams.set(key, value)
  const data = await request(url)
  for (const [id, entity] of Object.entries(data.entities)) {
    items[id] = (entity.claims?.P10585 ?? []).filter(claim => claim.rank !== 'deprecated' && claim.mainsnak?.snaktype === 'value').map(claim => claim.mainsnak.datavalue.value)
  }
}
for (const locale of [...new Set(evidence.rows.map(row => new URL(row.url).hostname.split('.')[0]))].sort()) {
  assert.match(locale, /^[a-z0-9-]+$/)
  const rows = evidence.rows.filter(row => new URL(row.url).hostname.split('.')[0] === locale)
  const titles = [...new Set(rows.map(row => decodeURIComponent(new URL(row.url).pathname.slice('/wiki/'.length)).replaceAll('_', ' ')))]
  for (let offset = 0; offset < titles.length; offset += 40) {
    const selected = titles.slice(offset, offset + 40), url = new URL(`https://${locale}.wikipedia.org/w/api.php`)
    for (const [key, value] of Object.entries({ action: 'query', format: 'json', formatversion: '2', prop: 'pageprops', ppprop: 'wikibase_item|disambiguation', redirects: '1', titles: selected.join('|'), maxlag: '5' })) url.searchParams.set(key, value)
    const data = await request(url), aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
    const byTitle = new Map(data.query.pages.map(page => [page.title, page]))
    for (const row of rows) {
      let title = decodeURIComponent(new URL(row.url).pathname.slice('/wiki/'.length)).replaceAll('_', ' ')
      if (!selected.includes(title)) continue
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = byTitle.get(title)
      pages[row.url] = { title, item: page?.pageprops?.wikibase_item ?? null, missing: !page || Boolean(page.missing), disambiguation: Object.hasOwn(page?.pageprops ?? {}, 'disambiguation') }
    }
  }
  console.log(JSON.stringify({ locale, pages: rows.length }))
}
const rows = evidence.rows.map(row => ({ ...row, actualPage: pages[row.url], actualColIds: items[row.item] ?? [] }))
const verified = rows.filter(row => row.actualPage && !row.actualPage.missing && !row.actualPage.disambiguation && row.actualPage.item === row.item && row.others.some(id => row.actualColIds.includes(id)))
const proof = { sourceSha256: createHash('sha256').update(bytes).digest('hex'), checkedAt: new Date().toISOString(), rows, verifiedCount: verified.length }
writeFileSync(root + `cross-${group}-unkeyed-live-checks.json`, JSON.stringify(proof), { flag: 'wx' })
console.log(JSON.stringify({ rows: rows.length, verified: verified.length, nodes: new Set(verified.map(row => row.node)).size, unresolved: rows.length - verified.length }))
