import fs from 'node:fs'
const pmc='PMC10688756',dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}`
const taxa=JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const source=JSON.parse(fs.readFileSync(`${dir}/atlantic-life-history-rows.json`)),bridges=JSON.parse(fs.readFileSync(`${dir}/col26.8-name-bridges.json`))
const selected=JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).filter(r=>r.pmc===pmc),selectedIds=new Set(selected.map(r=>r.colId)),groups=new Map(),pending=[]
for(const row of source.records){
 const bridge=bridges.records.find(r=>r.sourceName===row.normalizedName&&r.pinnedAcceptedBridge)
 const t=taxa.find(t=>t.scientificName===row.normalizedName)??(bridge?taxa.find(t=>t.colId===bridge.pinnedAcceptedBridge.colId):null)
 if(!t){pending.push(row.normalizedName);continue}
 if(!selectedIds.has(t.colId))throw Error(`Unwritten reader ${t.colId}`)
 const g=t.classification.find(g=>g.rank==='genus')
 if(!groups.has(g.id))groups.set(g.id,{...g,rows:[],ids:new Set()})
 groups.get(g.id).rows.push({row,bridge});groups.get(g.id).ids.add(t.colId)
}
const file='docs/amphibia-content/primary-direct-group-authoring-input.json',inputs=JSON.parse(fs.readFileSync(file))
let sections=0,routes=0
for(const g of groups.values()){
 const n=g.rows.length,unique=g.ids.size,v=g.rows.map(r=>r.row.valuesAsRecorded)
 const count=field=>v.filter(r=>r[field]===1).length
 const head=v.filter(r=>/Head width/i.test(r.Observation??'')).length,tibia=v.filter(r=>/tibia/i.test(r.Observation??'')).length
 const aliases=g.rows.filter(r=>r.bridge),key=`primary-direct-group-${pmc.toLowerCase()}-${g.id.toLowerCase()}-catalogue-alias`
 const loc=`PMC10688756 S3 Traits rows ${g.rows.map(r=>r.row.sheetRow).join(', ')}; XML Functional diversity`
 const study={colId:g.id,name:g.scientificName,pmc,year:2023,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',readScope:selected[0].readScope,sourceConcept:'Source-labelled Atlantic Forest workbook rows grouped through fixed exact names or explicit catalogue accepted-links; duplicate destinations retained, not biological identity certification',scope:{en:`${n} source workbook rows linked to ${unique} distinct accepted species pages; row traits and limits, not complete genus biology.`,zh:`${n} 个来源工作簿行链接 ${unique} 个不同接受种页面；行性状及限制，不是全属生物学。`},readingRoutes:[...g.ids],sectionLocators:[loc,loc+' length/Observation columns; Results/Discussion'],sectionAdditionalSourceKeys:[[],[]],additionalReferenceBindings:[],sections:[
 ['ecology','Reproduction and juvenile habitats retain source-row denominators','繁殖及幼体生境保留来源行分母',`The retained ${g.scientificName} subset contains ${n} source-labelled workbook rows linked to ${unique} distinct accepted species pages. At the row level, ${count('Direct development')} are coded direct-developing, ${count('Terrestrial oviposition')} terrestrial-ovipositing, and juvenile habitat flags mark ${count('Habitat aquatic')} aquatic, ${count('Habitat terrestrial')} terrestrial and ${count('Habitatsemiterrestrial')} semiterrestrial entries. These are counts of source rows, not distinct accepted species prevalence or a complete genus census. Historical names sharing a destination retain separate trait statements. Terrestrial eggs do not automatically imply direct development; juvenile habitat is distinct from adult preference. The pages preserve multiple egg-site flags and original upstream reference indices without claiming independent observation of every trait.`,`所保留 ${g.scientificName} 子集包含 ${n} 个来源名称工作簿行，链接 ${unique} 个不同接受种页面。按行计，${count('Direct development')} 个编码直接发育、${count('Terrestrial oviposition')} 个陆生产卵，幼体生境标记水生 ${count('Habitat aquatic')}、陆生 ${count('Habitat terrestrial')}、半陆生 ${count('Habitatsemiterrestrial')} 个条目。这是来源行计数，不是不同接受种比例或全属普查。共享目的地的历史名称保留分开性状陈述。陆生卵不自动意味直接发育，幼体生境区别于成体偏好。页面保留多个卵位点标记及原上游参考索引，不声称每个性状均独立观察。`],
 ['methods','Inference flags and community associations have limited scope','推断标记及群落关联具有有限范围',`In this source-row subset, ${head} head-width entries and ${tibia} tibia-length entries are explicitly inferred. Unflagged lengths are not independently certified measurements. Mixed means/maxima, missing explicit header units and inconsistent sex/stage labels prevent a uniform diagnostic size series. The full article models 766 communities and reports 36% explained variation in direct-development proportions; functional diversity is a proxy and the fitted associations do not establish competition, predation or physiological thresholds for each linked species. Across the full workbook, 463 rows now have retained reader destinations and one unresolved source spelling remains outside the routes; those 463 rows represent 457 distinct accepted destinations, not a revised biological census.`,`此来源行子集中，${head} 个头宽条目、${tibia} 个胫长条目明确为推断值。无标记长度不是独立认证测量。混合均值/最大值、表头无明确单位、性别/阶段标签不一致，阻止一致诊断体型系列。全文对 766 个群落建模，报告直接发育比例变异解释 36%；功能多样性为代理，拟合关联未确立每个链接种的竞争、捕食或生理阈值。全工作簿目前 463 行有保留阅读目的地，一个未解决来源拼写仍在路径外；463 行代表 457 个不同接受名目的地，不是修订生物学普查。`]
 ]}
 if(aliases.length){
  const links=aliases.map(({row,bridge})=>{const u=bridge.exactUsageLinks.find(u=>u.name===row.normalizedName&&u.acceptedId===bridge.pinnedAcceptedBridge.colId);return `${row.normalizedName}: usage${u.usageId} accepted${u.acceptedId}`}).join('; ')
  study.sections.push(['taxonomy','Historical combinations follow recorded catalogue links','历史组合跟随所记目录链接',`${aliases.length} historical-name rows in this selected subset reach their species pages through explicit exact-name usage-to-accepted links in frozen COL26.8 dataset 316115. Original workbook names and separate trait statements remain on those pages. The nomenclatural relation does not prove that the original authors examined correctly identified specimens or used an identical biological species concept. Neither a shared accepted destination nor a genus transfer justifies averaging source traits or extending them to every current member. The archived catalogue receipts provide each usage ID and accepted destination.`,`所选子集中 ${aliases.length} 个历史名称行通过冻结 COL26.8 数据集 316115 的明确精确名称用法至接受名链接进入物种页。原工作簿名称及分开性状陈述保留在页面。命名关系不证明原作者检查正确鉴定标本或应用相同生物学种概念。共享接受名目的地或属转移均不支持平均来源性状或扩展至每个当前成员。存档目录收据提供逐个用法 ID 及接受名目的地。`])
  study.sectionLocators.push(`${loc}; ${dir}/col26.8-name-bridges.json; ${links}`);study.sectionAdditionalSourceKeys.push([key])
  study.additionalReferenceBindings.push({referenceId:'ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23',metadataVariant:0,sourceKey:key,usage:{locator:`COL26.8 dataset316115; ${links}; archived ${dir}/col26.8-name-bridges.json`,scope:{en:'Exact recorded nomenclatural accepted-links only; biological concept identity remains uncertified.',zh:'仅精确所记命名接受名链接；生物学概念身份仍未认证。'}},originalFields:['referenceId','sourceKey','metadataVariant','locator','scope']})
 }
 if(g.scientificName==='Myersiella'){
  study.sections.push(['ecology','A cited direct developer outside the principal terraran concentration','主要 Terrarana 集中之外的引用直接发育种','Discussion names Myersiella microps as a direct-developing lineage outside the principal terraran concentration in the Atlantic Forest tree. This describes the source phylogenetic distribution, not a new developmental experiment or certified date for its origin. No free-living tadpole stage does not remove humidity requirements. The community associations do not determine the physiology of every microps population.','讨论点名 Myersiella microps 为大西洋森林树上主要 Terrarana 集中之外直接发育谱系。这描述来源系统发育分布，不是新发育实验或已认证起源日期。无自由生活蝌蚪阶段不能消除湿度需求。群落关联不决定每个 microps 种群生理。'])
  study.sectionLocators.push('PMC10688756 XML Discussion Direct development in Atlantic Forest anurans');study.sectionAdditionalSourceKeys.push([])
 }
 const i=inputs.findIndex(r=>r.colId===g.id&&r.pmc===pmc);if(i<0)inputs.push(study);else inputs[i]=study
 sections+=study.sections.length;routes+=study.readingRoutes.length
}
fs.writeFileSync(file,JSON.stringify(inputs,null,2)+'\n')
console.log(JSON.stringify({groupsPrepared:groups.size,sections,routes,mappedSourceRows:source.records.length-pending.length,pending,testsRun:false}))
