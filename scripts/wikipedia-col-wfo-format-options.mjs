import {externalIdStatus,unresolvedIdentifierLabel} from './wikipedia-col-external-id.mjs'
import {preferredUrls} from './wikipedia-col-synonym-options.mjs'
const normalizeAuthor=value=>String(value??'').normalize('NFC').replace(/[.\s]/gu,'').toLowerCase()
export function wfoFormatOptions(rows,getPage,isUsable,nodeId,isKnownId=()=>true){
 const options=[],seen=new Set()
 for(const row of rows){if(!row.col_author||!row.wfo_author||normalizeAuthor(row.col_author)!==normalizeAuthor(row.wfo_author))continue
  for(const candidate of JSON.parse(row.candidates_json)){
   const scientificName=candidate.names.find(name=>name.split(' ')[0]===row.source_name.split(' ')[0])
   if(!scientificName||candidate.ranks.length&&!candidate.ranks.some(r=>r.endsWith('/Q7432'))||seen.has(candidate.item))continue
   const status=externalIdStatus(candidate.colIds,nodeId,isKnownId);if(status==='conflict')continue
   const q=candidate.item.split('/').at(-1),url=preferredUrls(candidate.articles).find(link=>{const page=getPage(link);return page?.status==='available'&&page.item===q&&isUsable(link,candidate.item)})
   if(!url)continue
   const labels=[`WFO 同名、作者格式一致；条目拼写不同，身份待核对 / WFO name and formatted author match; article spelling differs, identity unverified: ${row.source_name} → ${scientificName}`,`作者 / Authorship: ${row.col_author} / ${row.wfo_author}`]
   if(status==='unresolved')labels.push(unresolvedIdentifierLabel)
   options.push({item:candidate.item,parentNames:labels,ranks:candidate.ranks,url,abstracts:[],wfoFormatCandidate:true});seen.add(candidate.item)
  }
 }
 return options
}
