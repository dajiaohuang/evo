import {preferredUrls} from './wikipedia-col-synonym-options.mjs'
export function wormsSidecarOptions(rows,usable,knownId){
 return rows.flatMap(row=>{
  const names=JSON.parse(row.target_names),ranks=JSON.parse(row.target_ranks),cols=JSON.parse(row.target_cols),pages=JSON.parse(row.pages)
  const url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`共享 WoRMS 编号，分类身份待核对 / Shared WoRMS identifier, taxonomic identity unverified: ${row.source_name} → ${names.join(' / ')||row.item.split('/').at(-1)}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  if(!ranks.length)labels.push('目标分类等级待核对 / Target taxonomic rank requires review')
  return [{item:row.item,parentNames:labels,ranks,url,abstracts:[],wormsSidecarCandidate:true}]
 })
}

export function wormsRedirectOptions(rows, usable, knownId) {
 return rows.flatMap(row => {
  const pages=JSON.parse(row.pages), cols=JSON.parse(row.target_cols)
  const url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`WoRMS 异名指向接受名，分类范围待核对 / WoRMS synonym points to accepted name, taxonomic scope unverified: ${row.source_name} → ${row.accepted_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],wormsRedirectCandidate:true}]
 })
}

export function itisSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row => {
  const pages=JSON.parse(row.pages), cols=JSON.parse(row.target_cols)
  const url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`ITIS 异名指向接受名，分类范围待核对 / ITIS synonym points to accepted name, taxonomic scope unverified: ${row.source_name} → ${row.accepted_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],itisSynonymCandidate:true}]
 })
}

export function itisSharedSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row => {
  const pages=JSON.parse(row.pages), cols=JSON.parse(row.target_cols)
  const url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`COL 与 ITIS 共享异名，接受名及身份待核对 / COL and ITIS share a synonym; accepted names and identity require review: ${row.source_name} ← ${row.shared_name} → ${row.accepted_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],itisSharedSynonymCandidate:true}]
 })
}

export function wfoSharedSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),names=JSON.parse(row.target_names),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`COL 异名对应 WFO 编号，目标名称及身份待核对 / COL synonym shares a WFO identifier; target name and identity require review: ${row.source_name} ← ${row.shared_name} → ${names.join(' / ')||row.item.split('/').at(-1)}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],wfoSharedSynonymCandidate:true}]
 })
}

export function sameNameParentOptions(rows, usable) {
 return rows.flatMap(row=>{
  const url=preferredUrls(JSON.parse(row.pages).map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  return [{item:row.item,parentNames:[`同名上级属，亚属条目未确认 / Same-name parent genus; subgenus article unconfirmed: ${row.parent_name}`],ranks:[],url,abstracts:[],sameNameParentCandidate:true}]
 })
}

export function sameNameGenusOptions(rows, usable) {
 return rows.flatMap(row=>{
  const url=preferredUrls(JSON.parse(row.pages).map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  return [{item:row.item,parentNames:[`同名属条目，COL 编号指向下级亚属，身份待核对 / Same-name genus article; COL identifier points to child subgenus, identity unverified: ${row.parent_name}`],ranks:[],url,abstracts:[],sameNameGenusCandidate:true}]
 })
}

export function dipteraSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`双翅目名录异名候选，分类身份待核对 / Systema Dipterorum synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],dipteraSynonymCandidate:true}]
 })
}

export function wormsArchiveSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`WoRMS 档案异名候选，分类身份待核对 / WoRMS archive synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],wormsArchiveSynonymCandidate:true}]
 })
}

export function wscSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`世界蜘蛛名录异名候选，分类身份待核对 / World Spider Catalog synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],wscSynonymCandidate:true}]
 })
}

export function reptileSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`爬行动物数据库异名候选，分类身份待核对 / Reptile Database synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],reptileSynonymCandidate:true}]
 })
}

export function osfSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`直翅目名录异名候选，分类身份待核对 / Orthoptera Species File synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],osfSynonymCandidate:true}]
 })
}

export function majorSynonymOptions(rows, usable, knownId) {
 return rows.flatMap(row=>{
  const pages=JSON.parse(row.pages),cols=JSON.parse(row.target_cols),url=preferredUrls(pages.map(p=>p.url).filter(url=>usable(url,row.item)))[0];if(!url)return []
  const labels=[`分类名录异名候选，分类身份待核对 / Source catalog synonym candidate, taxonomic identity unverified: ${row.source_name} ← ${row.synonym_name}`]
  if (row.synonym_name.includes('×')) labels.push('杂交身份待核对 / Hybrid identity unverified')
  if(cols.some(id=>knownId(id)&&id!==row.node_id))labels.push('目标条目对应另一树节点 / Target article identifies another tree node')
  if(cols.some(id=>!knownId(id)))labels.push('目标外部编号未对应 / Target external identifier unresolved')
  return [{item:row.item,parentNames:labels,ranks:[],url,abstracts:[],majorSynonymCandidate:true}]
 })
}
