import fs from 'node:fs'
const pmc='PMC13149743',dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}`
const taxa=JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const source=JSON.parse(fs.readFileSync(`${dir}/guayaquil-urban-amphibian-rows.json`)),selected=JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).filter(r=>r.pmc===pmc),groups=new Map()
for(const child of selected){
 const g=taxa.find(t=>t.colId===child.colId).classification.find(g=>g.rank==='genus')
 if(!groups.has(g.id))groups.set(g.id,{...g,children:[]})
 groups.get(g.id).children.push(child)
}
const file='docs/amphibia-content/primary-direct-group-authoring-input.json',inputs=JSON.parse(fs.readFileSync(file));let sections=0
for(const g of groups.values()){
 const rows=source.records.filter(r=>g.children.some(c=>c.name===r.nameAsRecorded)),n=rows.length
 const areaCount=code=>rows.filter(r=>r.areaCodesAsRecorded.split(',').map(c=>c.trim()).includes(code)).length
 const study={colId:g.id,name:g.scientificName,pmc,year:2026,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',readScope:selected[0].readScope,sourceConcept:'2026 mixed urban/periurban Guayaquil source subset; nearbyXenopus record excluded fromcitychecklist counts, notallgenus biology orverified vouchers',scope:{en:`${g.children.length} selected source-linked species pages; ${n} belong to the city checklist.`,zh:`${g.children.length} 个所选来源关联物种页，其中 ${n} 属于城市名册。`},readingRoutes:g.children.map(r=>r.colId),sections:[],sectionLocators:[]}
 if(g.scientificName==='Xenopus'){
  study.sections=[
   ['occurrence','A nearby historical specimen claim is not a city checklist addition','附近历史标本陈述不是城市名册增加','The laevis route preserves a source-reported specimen from the Babahoyo River banks in Samborondón canton on 1 June 2006, attributed to personal communication and ZSFQ4320. It lies near Guayaquil and remains separate from the nineteen Table 3 amphibians. Original specimen identity, collector record and an established local population have not been independently verified. River proximity does not certify current city presence or range expansion.','Laevis 路径保留来源报告 2006 年六月一日 Samborondón 县 Babahoyo 河岸一件标本，归于个人通信及 ZSFQ4320。地点在瓜亚基尔附近，与表三十九两栖分开。原标本身份、采集记录及已建立地方种群未独立核实。河流邻近不认证当前城市出现或分布扩张。'],
   ['ecology','Pet-trade introduction remains a proposed explanation','宠物贸易引入仍是拟议解释','The paper proposes aquatic-pet trade as a possible origin based on circulation in Latin America, without identifying a release event, owner or breeding population. It does not establish local predation, disease transmission or control success. One historical laevis report is not a complete Xenopus inventory or a current invasion assessment.','论文依据其在拉美流通，提出水生宠物贸易为可能来源，未鉴定释放事件、饲主或繁殖种群。未确立地方捕食、病原传播或控制成功。一个历史 laevis 报告不是完整 Xenopus 名册或当前入侵评估。']
  ]
  study.sectionLocators=['PMC13149743 XML Discussion4.1 Xenopus paragraph; Table3 citydenominator','PMC13149743 XML Discussion4.1 proposedpettradeorigin']
 }else{
  const endemic=rows.filter(r=>r.endemicToEcuadorAsRecorded).length,type=rows.filter(r=>r.typeLocalityFlagAsRecorded==='X').length
  study.sections=[
   ['occurrence','City routes retain source area categories and mixed sampling history','城市路径保留来源地区类别及混合取样史',`The selected ${g.scientificName} subset has ${n} Guayaquil checklist rows: ${areaCount('CA')} record conservation areas, ${areaCount('REM')} unprotected native remnants and ${areaCount('UP')} urban parks. Categories overlap and are presence assignments, not summed unique populations or densities. The source combines fieldwork from 2008–2025, museums, databases and screened secondary records, including selected near-boundary sites. These routes do not represent uniform coverage of every urban habitat or current occurrence throughout all Guayaquil territory. Detailed specimen appendices and photographs have not been independently retrieved and checked.`,`所选 ${g.scientificName} 子集有 ${n} 个瓜亚基尔名册行：${areaCount('CA')} 个记保护地区、${areaCount('REM')} 个未列保护原生残存植被、${areaCount('UP')} 个城市公园。类别重叠且为出现分配，不是相加不同种群或密度。来源结合 2008–2025 野外工作、馆藏、数据库及筛选次级记录，包括部分近边界地点。路径不代表每个城市生境一致覆盖或全部瓜亚基尔土地当前出现。详细标本附录、照片尚未独立取得并检查。`],
   ['taxonomy','Country endemism and type-locality flags have different meanings','国家特有及模式产地标记具有不同含义',`Within this subset, ${endemic} source rows are marked endemic to Ecuador and ${type} identify Guayaquil as the type locality. Neither flag means city-only distribution or verifies all present populations at a historical type site. The article’s taxonomy follows 2025 source frameworks, while these reader routes use exact-name candidates in frozen COL26.8. Same-name matching does not independently certify original vouchers or biological concept equivalence. Overall type-locality totals differ between tables and Discussion, and the discrepancy is retained without a guessed correction.`,`此子集中 ${endemic} 个来源行标厄瓜多尔特有，${type} 个指瓜亚基尔模式产地。均不意味仅城市分布，亦不核实历史模式地点全部当前种群。论文分类跟随 2025 来源框架，读本路径使用冻结 COL26.8 精确名称候选。同名匹配不独立认证原凭证或生物学概念等同性。总体模式产地数在表与讨论不同，保留差异，不猜测修正。`],
   ['ecology','Persistence, risk categories and urban resilience remain distinct claims','持续出现、风险类别及城市韧性仍是不同主张','Global IUCN 2025 and Ecuadorian 2021 amphibian categories are retained as dated source assignments with different geographic scales. Presence in a conservation category does not prove effective protection, and urban records do not experimentally demonstrate pollution tolerance, reproductive rate or inherited adaptation. Discussion’s cited Bd reports are not new prevalence measurements; caecilian rediscovery is not a population estimate, and introduced bullfrog records are not measured local impact. GIS land-cover change and biological persistence describe different evidence streams. Restoration, invasive-species monitoring and education recommendations remain proposed actions.','全球 IUCN 2025、厄瓜多尔 2021 两栖类别作为不同地理尺度有日期来源分配保留。出现在保护类别不证明有效保护，城市记录不实验确立污染耐受、繁殖率或遗传适应。讨论引用 Bd 报告不是新流行率测量；蚓螈再发现不是种群估计，引入牛蛙记录不是测得地方影响。GIS 土地覆盖变化与生物持续出现描述不同证据流。恢复、入侵种监测及教育建议仍是拟议行动。']
  ]
  study.sectionLocators=[`PMC13149743 XML Table3 rows${rows.map(r=>r.tableBodyRow).join(', ')}; Methods2.1–2.3; Table2 notes`,'PMC13149743 XML Table3 type/endemicflags; Methods2.3; Results; Discussion4.1','PMC13149743 XML Table3; Methods2.3; Discussion4.2–4.4; Figures1–2 captions']
 }
 const i=inputs.findIndex(r=>r.colId===g.id&&r.pmc===pmc);if(i<0)inputs.push(study);else inputs[i]=study
 sections+=study.sections.length
}
fs.writeFileSync(file,JSON.stringify(inputs,null,2)+'\n')
console.log(JSON.stringify({groupsPrepared:groups.size,sections,routes:selected.length,cityRows:19,nearbyCitedSpecies:1,testsRun:false}))
