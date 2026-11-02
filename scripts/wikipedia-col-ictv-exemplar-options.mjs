import {externalIdStatus,unresolvedIdentifierLabel} from './wikipedia-col-external-id.mjs'
import {preferredUrls} from './wikipedia-col-synonym-options.mjs'
export function ictvExemplarOptions(rows,isUsable,nodeId,isKnownId=()=>true,isShared=()=>false){
 const options=[],seen=new Set()
 for(const row of rows){
  if(row.page_status!=='available'||!row.item||row.entity_status!=='queried'||!isUsable(row.url,`https://www.wikidata.org/entity/${row.item}`))continue
  const ids=JSON.parse(row.col_ids??'[]'),status=externalIdStatus(ids,nodeId,isKnownId);if(status==='conflict'||seen.has(row.item))continue
  const ranks=JSON.parse(row.rank_ids??'[]'),labels=['ICTV 代表病毒相关条目，分类关系待核对 / ICTV exemplar-related article, identity unverified',`实际页面 / Destination: ${row.canonical_title}`]
  if(isShared(`https://www.wikidata.org/entity/${row.item}`))labels.push('同一条目关联多个节点 / Article relates to multiple nodes')
  if(ranks.includes('Q34740'))labels.push('属级条目 / Genus-level article')
  if(status==='unresolved')labels.push(unresolvedIdentifierLabel)
  options.push({item:`https://www.wikidata.org/entity/${row.item}`,parentNames:labels,ranks:ranks.map(r=>`https://www.wikidata.org/entity/${r}`),url:row.url,abstracts:[]})
  seen.add(row.item)
 }
 return options
}
export function ictvNormalizedOptions(rows,isUsable,nodeId,isKnownId=()=>true,isShared=()=>false){
 const allowed=rows.filter(row=>JSON.parse(row.type_ids??'[]').some(type=>['Q16521','Q808','Q855769','Q87756246'].includes(type)))
 return ictvExemplarOptions(allowed,isUsable,nodeId,isKnownId,isShared).map(option=>({...option,parentNames:option.parentNames.map(label=>label==='ICTV 代表病毒相关条目，分类关系待核对 / ICTV exemplar-related article, identity unverified'?'ICTV 名称归一化匹配，分类关系待核对 / ICTV normalized name, identity unverified':label)}))
}
export function ictvExemplarNameOptions(rows,isUsable,nodeId,isKnownId=()=>true,isShared=()=>false){
 const options=[],seen=new Set()
 for(const row of rows)for(const candidate of JSON.parse(row.candidates_json)){
  const status=externalIdStatus(candidate.colIds,nodeId,isKnownId);if(status==='conflict'||seen.has(candidate.item))continue
  const url=preferredUrls(candidate.articles.filter(url=>isUsable(url,candidate.item)))[0];if(!url)continue
  const labels=[`ICTV 代表病毒名称匹配，分类关系待核对 / ICTV exemplar name match, identity unverified: ${row.name}`]
  if(isShared(candidate.item))labels.push('同一条目关联多个节点 / Article relates to multiple nodes')
  if(candidate.ranks?.some(rank=>rank.endsWith('/Q34740')))labels.push('属级条目 / Genus-level article')
  if(status==='unresolved')labels.push(unresolvedIdentifierLabel)
  options.push({item:candidate.item,parentNames:labels,ranks:candidate.ranks??[],url,abstracts:[]});seen.add(candidate.item)
 }
 return options
}
