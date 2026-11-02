import { externalIdStatus, unresolvedIdentifierLabel } from './wikipedia-col-external-id.mjs'
export function preferredUrls(urls) {
  const rank = url => new URL(url).hostname === 'zh.wikipedia.org' ? 0 : new URL(url).hostname === 'en.wikipedia.org' ? 1 : 2
  return [...urls].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
}

export function synonymWikidataOptions(rows, isUsable, label = '异名 / Synonym', nodeId, isKnownId = () => true) {
  const options = []
  for (const row of rows) {
    for (const candidate of JSON.parse(row.candidates_json)) {
      const status=externalIdStatus(candidate.colIds,nodeId,isKnownId)
      if(status==='conflict')continue
      const url = preferredUrls(candidate.articles.filter(url => isUsable(url, candidate.item)))[0]
      if (url) options.push({ item: candidate.item, parentNames: [`${label}: ${row.name}`, ...(status==='unresolved' ? [unresolvedIdentifierLabel] : []), ...candidate.parentNames], ranks: candidate.ranks, url, abstracts: [] })
    }
  }
  return options
}

export function exactWikidataOptions(rows, isUsable, nodeId) {
  const matches = rows.flatMap(row => JSON.parse(row.candidates_json))
    .filter(candidate => candidate.colIds?.includes(nodeId))
    .map(candidate => ({ item: candidate.item, url: preferredUrls(candidate.articles.filter(url => isUsable(url, candidate.item)))[0] }))
    .filter(candidate => candidate.url)
  return matches
}
