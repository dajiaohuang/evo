import { preferredUrls } from './wikipedia-col-synonym-options.mjs'

export function ambiguousSynonymOptions(rows, usable, knownId) {
  return rows.flatMap(row => {
    const cols = JSON.parse(row.target_cols)
    if (cols.some(id => id !== row.node_id && knownId(id))) return []
    const pages = JSON.parse(row.pages)
    const url = preferredUrls(pages.map(page => page.url).filter(value => usable(value, row.item)))[0]
    if (!url) return []
    const synonymRows = JSON.parse(row.synonyms)
    const synonyms = synonymRows.map(value => `${value.name}${value.authorship ? ` ${value.authorship}` : ''}`).join('; ')
    const labels = [`名录标记为歧义异名，分类身份未确认 / Catalog marks this synonym ambiguous; taxonomic identity unverified: ${row.source_name} ← ${synonyms}`]
    if (synonymRows.some(value => !value.authorship)) labels.push('名录异名缺少命名作者 / Catalog synonym lacks authorship')
    if (cols.some(id => !knownId(id))) labels.push('目标外部编号未对应 / Target external identifier unresolved')
    return [{ item: row.item, parentNames: labels, ranks: [], url, abstracts: [], majorSynonymCandidate: true }]
  })
}

export function ambiguousSynonymPeerOptions(rows, usable) {
  return rows.flatMap(row => {
    const url = preferredUrls(JSON.parse(row.pages).filter(value => usable(value, row.item)))[0]
    if (!url) return []
    const synonyms = JSON.parse(row.source_synonyms).map(value => `${value.name}${value.authorship ? ` ${value.authorship}` : ''}`).join('; ')
    return [{ item: row.item, parentNames: [`名录歧义异名指向另一树节点，作者一致，分类身份未确认 / Ambiguous catalog synonym points to a different tree node; authorship matches, identity unverified: ${synonyms} → ${row.target_name} (${row.common_name})`], ranks: [], url, abstracts: [], primaryRelatedCandidate: true }]
  })
}
