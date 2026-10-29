export async function enrichSpecies(entries, nodes) {
  const names = Object.keys(entries).filter(name => entries[name].status === 'missing' && nodes.some(node => node.name === name && node.rank === 'species'))
  const titles = [...new Set(names.map(name => entries[name.split(' ')[0]]?.title ?? name.split(' ')[0]))]
  for (let offset = 0; offset < titles.length; offset += 20) {
    const batch = titles.slice(offset, offset + 20)
    const query = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', redirects: '1', titles: batch.join('|'), prop: 'info|extracts|pageprops', inprop: 'url', exintro: '1', explaintext: '1', exlimit: '20' })
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + query, { signal: AbortSignal.timeout(30000) })
    if (!response.ok) throw new Error('Wikipedia genus batch HTTP ' + response.status)
    const data = await response.json()
    if (!data.query?.pages) throw new Error('Invalid Wikipedia genus batch')
    const aliases = new Map([...(data.query.normalized ?? []), ...(data.query.redirects ?? [])].map(row => [row.from, row.to]))
    for (const name of names) {
      let title = entries[name.split(' ')[0]]?.title ?? name.split(' ')[0]
      if (!batch.includes(title)) continue
      const seen = new Set()
      while (aliases.has(title) && !seen.has(title)) { seen.add(title); title = aliases.get(title) }
      const page = data.query.pages.find(page => page.title === title)
      if (page?.ns !== 0 || page.missing || Object.hasOwn(page.pageprops ?? {}, 'disambiguation') || !page.extract?.toLowerCase().includes(name.toLowerCase())) continue
      entries[name] = { ...entries[name], status: 'matched', title: page.title, pageId: page.pageid, url: page.fullurl, scope: 'species-mentioned-in-genus-lead', checkedAt: new Date().toISOString() }
    }
  }
}
