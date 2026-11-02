export function classifyPage(query, title, item) {
  const aliases = new Map([...(query.normalized ?? []), ...(query.redirects ?? [])].map(row => [row.from, row.to]))
  const pages = new Map(query.pages.map(page => [page.title, page]))
  const seen = new Set()
  while (aliases.has(title)) {
    if (seen.has(title)) return { status: 'redirect-loop', title, item: null }
    seen.add(title); title = aliases.get(title)
  }
  const page = pages.get(title), actual = page?.pageprops?.wikibase_item ?? null
  let status = !page || page.missing || page.invalid ? 'missing' : Object.hasOwn(page.pageprops ?? {}, 'disambiguation') ? 'disambiguation' : 'available'
  if (status === 'available' && item) status = !actual ? 'no-item' : item.endsWith('/' + actual) ? 'matched' : 'identity-conflict'
  return { status, title, item: actual }
}

// Reuse a recent observation of the exact same URL and source title. The
// expected Wikidata identity belongs to the new record, not the cached one.
export function classifyCachedPage(cached, item) {
  const terminal = new Set(['missing', 'disambiguation', 'redirect-loop'])
  if (terminal.has(cached.status)) return { status: cached.status, title: cached.target_title, item: cached.actual_item }
  if (!['available', 'matched', 'identity-conflict', 'no-item'].includes(cached.status)) return null
  const actual = cached.actual_item
  const status = !item ? 'available' : !actual ? 'no-item' : item.endsWith('/' + actual) ? 'matched' : 'identity-conflict'
  return { status, title: cached.target_title, item: actual }
}
