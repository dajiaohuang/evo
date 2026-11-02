import { preferredUrls } from './wikipedia-col-synonym-options.mjs'

export function itisCrossSourceOptions(rows, usable, knownId) {
  return rows.flatMap(row => {
    const pages = JSON.parse(row.pages), cols = JSON.parse(row.target_cols)
    const url = preferredUrls(pages.map(page => page.url).filter(value => usable(value, row.item)))[0]
    if (!url) return []
    const parentNames = [`ITIS 异名候选，分类身份待核对 / ITIS synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
    if (!/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(row.item)) parentNames.push('无 Wikidata 条目编号，分类身份待核对 / No Wikidata item; taxonomic identity unverified')
    if (cols.some(id => knownId(id) && id !== row.node_id)) parentNames.push('目标条目对应另一树节点 / Target article identifies another tree node')
    if (cols.some(id => !knownId(id))) parentNames.push('目标外部编号未对应 / Target external identifier unresolved')
    return [{ item: row.item, parentNames, ranks: [], url, abstracts: [], itisCrossSourceCandidate: true, itisSynonymCandidate: true }]
  })
}
