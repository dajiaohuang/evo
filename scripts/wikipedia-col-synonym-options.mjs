export function preferredUrls(urls) {
  const rank = url => new URL(url).hostname === 'zh.wikipedia.org' ? 0 : new URL(url).hostname === 'en.wikipedia.org' ? 1 : 2
  return [...urls].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
}

export function synonymWikidataOptions(rows, isUsable) {
  const options = []
  for (const row of rows) {
    for (const candidate of JSON.parse(row.candidates_json)) {
      const url = preferredUrls(candidate.articles.filter(isUsable))[0]
      if (url) options.push({ item: candidate.item, parentNames: [`异名 / Synonym: ${row.name}`, ...candidate.parentNames], ranks: candidate.ranks, url, abstracts: [] })
    }
  }
  return options
}
