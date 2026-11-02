import { preferredUrls } from './wikipedia-col-synonym-options.mjs'

export function ncbiIdOptions(rows, usable, knownId) {
  return rows.flatMap(row => {
    if (row.identity_hold) return []
    const pages = JSON.parse(row.pages)
    const names = JSON.parse(row.target_names)
    const cols = JSON.parse(row.target_cols)
    const url = preferredUrls(pages.map(page => page.url).filter(value => usable(value, row.item)))[0]
    if (!url || cols.some(id => id !== row.node_id && knownId(id))) return []
    const targetName = names.length ? names.join(', ') : '目标名称未填写 / Target name missing'
    const basis = row.source_kind === 'catalog_synonym' ? '名录异名与 NCBI 对应候选，分类身份待核对 / Catalog synonym matched to NCBI, identity unverified' : row.source_kind === 'synonym' ? 'NCBI 分类异名候选，分类身份待核对 / NCBI taxon synonym, identity unverified' : 'NCBI 分类对应候选，分类身份待核对 / NCBI taxon match candidate, identity unverified'
    const sourceName = row.source_synonym ? `${row.source_name} ← ${row.source_synonym}` : row.source_name
    const labels = [`${basis}: ${sourceName} → ${targetName}`]
    if (row.col_genus && row.ncbi_genus) labels.push(`属名不同，待核对 / Genus names differ; verify: ${row.col_genus} → ${row.ncbi_genus}`)
    if (row.author_comparison === 'different') labels.push('命名作者写法未直接对应，待核对 / Authorship does not match directly; verify')
    if (row.author_comparison === 'matched_original') labels.push('原名称与命名作者可对应，分类身份待核对 / Original name and authorship match; taxonomic identity unverified')
    if (row.author_comparison === 'missing') labels.push('命名作者信息不足 / Insufficient authorship information')
    if (cols.some(id => !knownId(id))) labels.push('目标外部编号未对应 / Target external identifier unresolved')
    return [{ item: row.item, parentNames: labels, ranks: [], url, abstracts: [], majorSynonymCandidate: true }]
  })
}
