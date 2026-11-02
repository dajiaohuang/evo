import {externalIdStatus,unresolvedIdentifierLabel} from './wikipedia-col-external-id.mjs'
import {preferredUrls} from './wikipedia-col-synonym-options.mjs'
export function wfoRedirectOptions(rows,getPage,isUsable,nodeId,isKnownId=()=>true){
 const options=[],seen=new Set()
 for(const row of rows)for(const candidate of JSON.parse(row.candidates_json)){
  if(!candidate.names.includes(row.accepted_name)||candidate.ranks.length&&!candidate.ranks.some(r=>r.endsWith('/Q7432'))||seen.has(candidate.item))continue
  const q=candidate.item.split('/').at(-1),url=preferredUrls(candidate.articles).find(link=>{const page=getPage(link);return page?.status==='available'&&page.item===q&&isUsable(link,candidate.item)})
  if(!url)continue
  const status=externalIdStatus(candidate.colIds,nodeId,isKnownId),labels=[`WFO 将此名称列为异名，条目指向接受名 / WFO synonym maps to accepted name: ${row.accepted_name}`]
  if(status==='conflict')labels.push('条目编号对应另一节点 / Article identifier refers to another node')
  if(status==='unresolved')labels.push(unresolvedIdentifierLabel)
  options.push({item:candidate.item,parentNames:labels,ranks:candidate.ranks,url,abstracts:[],wfoRedirectCandidate:true});seen.add(candidate.item)
 }
 return options
}
