import {preferredUrls} from './wikipedia-col-synonym-options.mjs'
const rankIds={species:'Q7432',genus:'Q34740',tribe:'Q227936',superfamily:'Q2136103'}
export function wikidataSynonymEdgeOptions(rows,usable,knownId){
 return rows.flatMap(row=>{
  const names=JSON.parse(row.target_names),ranks=JSON.parse(row.target_ranks),cols=JSON.parse(row.target_cols),pages=JSON.parse(row.pages)
  const url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.target_item)))[0];if(!url)return []
  const targetName=names.join(' / ')||row.target_item.split('/').at(-1)
  const labels=[row.relationship_kind==='nomenclatural'
   ? `Wikidata 原名或替代名关系，分类范围待核对 / Wikidata original or replacement name relationship, taxonomic scope unverified: ${row.source_name} → ${targetName}`
   : `Wikidata 异名关系，分类范围待核对 / Wikidata synonym relationship, taxonomic scope unverified: ${row.source_name} → ${targetName}`]
  if(row.source_match==='matched-name-parent-rank')labels.push('来源身份按同名、上级和等级匹配，尚未确认 / Source identity based on name, parent and rank; unverified')
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  if(ranks.length&&(!rankIds[row.source_rank]||!ranks.some(rank=>rank.endsWith('/'+rankIds[row.source_rank]))))labels.push('目标分类等级待核对 / Target taxonomic rank requires review')
  return [{item:row.target_item,parentNames:labels,ranks,url,abstracts:[],wikidataSynonymCandidate:true}]
 })
}
