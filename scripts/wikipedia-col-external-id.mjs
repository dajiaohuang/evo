// An identifier absent from the current tree does not prove a conflict.
// It remains an unconfirmed candidate, never an exact match.
export function externalIdStatus(ids,nodeId,isKnownId=()=>true){
 if(!nodeId||!ids?.length)return 'none'
 if(ids.includes(nodeId))return 'exact'
 return ids.some(isKnownId)?'conflict':'unresolved'
}
export const unresolvedIdentifierLabel='外部编号未对应 / External identifier unresolved'
export function nameIdentityEvidence(candidates,nodeId,isKnownId=()=>true){
 const eligible=[],conflictingUrls=new Set(),unresolvedUrls=new Set()
 for(const candidate of candidates){
  const status=externalIdStatus(candidate.colIds,nodeId,isKnownId)
  if(status==='conflict'){for(const url of candidate.articles??[])conflictingUrls.add(url);continue}
  if(status==='unresolved')for(const url of candidate.articles??[])unresolvedUrls.add(url)
  eligible.push(candidate)
 }
 return {eligible,conflictingUrls,unresolvedUrls}
}
export function sameParentIdentityCandidates(candidates,nodeId,node,getNode){
 if(!node?.parent_id)return []
 return candidates.filter(candidate=>{
  if(candidate.colIds?.includes(nodeId)||!candidate.articles?.length)return false
  const others=(candidate.colIds??[]).map(getNode).filter(Boolean)
  return others.length>0&&others.every(other=>other.name===node.name&&other.rank===node.rank&&other.parent_id===node.parent_id)
 })
}
export function linkEvidenceStatus(rows,nodeId,isKnownId=()=>true){
 const statuses=rows.map(row=>['unavailable','disambiguation'].includes(row.status)?'conflict':externalIdStatus(JSON.parse(row.col_ids??'[]'),nodeId,isKnownId))
 return statuses.includes('conflict')?'conflict':statuses.includes('unresolved')?'unresolved':'none'
}
