import { externalIdStatus, unresolvedIdentifierLabel } from './wikipedia-col-external-id.mjs'
export function subgenusOptions(rows, isUsable, nodeId, isKnownId=()=>true, extraStatus=()=> 'none') {
  return rows.flatMap(row=>{
    if(['unavailable','disambiguation'].includes(row.page_status))return []
    const url=`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title)}`
    const status=externalIdStatus(JSON.parse(row.col_ids??'[]'),nodeId,isKnownId),extra=extraStatus(url)
    if(status==='conflict'||extra==='conflict'||!isUsable(url))return []
    return [{item:`Wikipedia:${row.locale}:${row.title}`,parentNames:[`省略亚属候选 / Abbreviated subgenus: ${row.original_name}`,...(status==='unresolved'||extra==='unresolved'?[unresolvedIdentifierLabel]:[])],ranks:[],url,abstracts:[]}]
  })
}

export function subgenusExactOptions(rows, isUsable, nodeId) {
  return rows.filter(row => row.page_status === 'available' && row.item && row.col_ids && JSON.parse(row.col_ids).includes(nodeId))
    .map(row => ({item:`https://www.wikidata.org/entity/${row.item}`,url:`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title)}`}))
    .filter(row => isUsable(row.url,row.item))
}

export function subgenusRankOptions(rows,isUsable,nodeId,isKnownId=()=>true) {
  return rows.filter(row=>{
    const ids=JSON.parse(row.col_ids??'[]'),ranks=JSON.parse(row.rank_ids??'[]')
    return !['unavailable','disambiguation'].includes(row.page_status) && externalIdStatus(ids,nodeId,isKnownId)!=='conflict' && (!ranks.length||ranks.includes('Q3238261'))
  }).map(row => ({item:`Wikipedia:${row.locale}:${row.title}`,parentNames:[`${row.kind==='rank-title'?'亚属标题候选 / Subgenus title':'同名标题候选 / Same-name title'}: ${row.original_name}`,...(externalIdStatus(JSON.parse(row.col_ids??'[]'),nodeId,isKnownId)==='unresolved'?[unresolvedIdentifierLabel]:[])],ranks:[],url:`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title)}`,abstracts:[]})).filter(row=>isUsable(row.url))
}
