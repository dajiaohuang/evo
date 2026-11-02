export function relatedRedirectOptions(rows, usable) {
 return rows.filter(row=>usable(row.target_url)).map(row=>({
  item:`https://www.wikidata.org/entity/${row.target_item}`,
  parentNames:[row.relation==='parent-genus'
   ? `原页面跳转到上级属 / Original page redirects to parent genus: ${row.target_name}`
   : `原页面跳转到下级物种 / Original page redirects to child species: ${row.target_name}`],
  ranks:[],url:row.target_url,abstracts:[],relatedRedirectCandidate:true,
 }))
}

export function moreRedirectOptions(rows, usable) {
 const zhRanks={species:'物种',genus:'属',tribe:'族',subfamily:'亚科',family:'科'}
 return rows.filter(row=>usable(row.target_url)).map(row=>({
  item:`https://www.wikidata.org/entity/${row.target_item}`,
  parentNames:[row.relation==='ancestor'
   ? `原页面跳转到上级分类（${zhRanks[row.target_rank]??row.target_rank}） / Original page redirects to an ancestor taxon (${row.target_rank}): ${row.target_name}`
   : `原页面跳转到下级分类（${zhRanks[row.target_rank]??row.target_rank}） / Original page redirects to a descendant taxon (${row.target_rank}): ${row.target_name}`],
  ranks:[],url:row.target_url,abstracts:[],moreRedirectCandidate:true,
 }))
}

export function peerRedirectOptions(rows, usable) {
 return rows.filter(row=>usable(row.target_url)).map(row=>({
  item:`https://www.wikidata.org/entity/${row.target_item}`,
  parentNames:[`原页面跳转到同科的另一树节点，分类身份待核对 / Original page redirects to another tree node in the same family; taxonomic identity unverified: ${row.target_name}`],
  ranks:[],url:row.target_url,abstracts:[],peerRedirectCandidate:true,
 }))
}

export function unidentifiedRedirectOptions(rows, usable) {
 return moreRedirectOptions(rows, usable).map(option=>({
  ...option,
  parentNames:[...option.parentNames,'原条目缺少 COL 编号，来源身份待核对 / Source item lacks a COL identifier; identity unverified'],
  moreRedirectCandidate:false,unidentifiedRedirectCandidate:true,
 }))
}

export function unidentifiedPeerRedirectOptions(rows, usable) {
 return peerRedirectOptions(rows, usable).map(option=>({
  ...option,
  parentNames:[...option.parentNames,'原条目缺少 COL 编号，来源身份待核对 / Source item lacks a COL identifier; identity unverified'],
  peerRedirectCandidate:false,unidentifiedPeerRedirectCandidate:true,
 }))
}
