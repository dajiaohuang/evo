export function hybridOptions(rows,isUsable,nodeId){
 return rows.filter(row=>{
  const ids=JSON.parse(row.col_ids??'[]')
  return row.status==='available'&&(!ids.length||ids.includes(nodeId))
 }).map(row=>({item:`Wikipedia:${row.locale}:${row.title}`,parentNames:[`杂交名称候选 / Hybrid name: ${row.original_name}`],ranks:[],url:`https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title)}`,abstracts:[]})).filter(row=>isUsable(row.url))
}
