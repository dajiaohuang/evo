import fs from 'node:fs'
const pmc='PMC12189923',dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}`
const taxa=JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const selected=JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).filter(r=>r.pmc===pmc)
const source=JSON.parse(fs.readFileSync(`${dir}/tangjiahe-habitat-rows.json`)),groups=new Map()
for(const child of selected){
 const g=taxa.find(t=>t.colId===child.colId).classification.find(g=>g.rank==='genus')
 if(!groups.has(g.id))groups.set(g.id,{...g,children:[]})
 groups.get(g.id).children.push(child)
}
const file='docs/amphibia-content/primary-direct-group-authoring-input.json',inputs=JSON.parse(fs.readFileSync(file));let sections=0
for(const g of groups.values()){
 const n=g.children.length
 const study={colId:g.id,name:g.scientificName,pmc,year:2025,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',readScope:selected[0].readScope,sourceConcept:'Tangjiahe 2025 mixed contemporary-field and historical-literature inventory; not genus-wide biology or independently certified concepts',scope:{en:`${n} selected species entries from one regional mixed field-and-literature inventory.`,zh:`一份区域野外与文献混合名册中的 ${n} 个所选物种条目。`},readingRoutes:g.children.map(r=>r.colId),sectionLocators:['PMC12189923 XML Methods2.1–2.2; Results3.1; Table1; Discussion4.1','PMC12189923 XML Table1/caption; Results3.3/3.5; Discussion4.3','PMC12189923 XML Methods2.5; Results3.1/3.4/3.5; Discussion4.1/4.4/4.5; Conclusions'],sections:[
 ['occurrence','Regional inventory routes separate field records from literature','区域名册路径区分野外记录与文献',`The selected ${g.scientificName} routes contain ${n} source entries from the 2025 Tangjiahe inventory in northern Sichuan. The full list combines twenty species found during field surveys with five from literature, so its twenty-five rows are not twenty-five new field detections. Thirty-nine adult-search transects on rain-free nights during May–August 2024 do not represent year-round sampling or all genus members. The paper explicitly identifies historical Megophrys omeimontis and Oreolalax nanjiangensis as undetected in the current field survey; the species readers preserve those distinctions. Supplementary per-row evidence and vouchers have not been independently reconstructed.`,`所选 ${g.scientificName} 路径含四川北部 2025 年唐家河名册 ${n} 个来源条目。完整列表结合二十个野外调查种与五个文献种，二十五行不是二十五个新野外检测。2024 年五月至八月无雨夜的三十九条成年体搜索样线不代表全年取样或全属成员。论文明确将历史 Megophrys omeimontis 与 Oreolalax nanjiangensis 标为本次野外未检测；物种读本保留这些区别。逐行补充证据及凭证未独立重建。`],
 ['ecology','Habitat ticks describe local assignments rather than universal preferences','生境勾号描述地方分配而非普遍偏好','Table 1 distinguishes arboreal, soil-cave, farmland, highland, turbulent-water, running-water and quiet-water assignments. Multiple ticks are retained on species pages rather than collapsed into one ecological type. Empty cells do not establish intolerance, and these broad labels do not quantify flow, oxygen, breeding stage or habitat quality. The region’s reserve, sampling and statistical elevation scopes differ; exact species endpoints from the figure have not been digitized. Records above 2,300 m are specifically reported for Scutiger pingwuensis and Batrachuperus tibetanus, not a physiological upper limit for every genus member.','表一区分树栖、土洞、农田、高地、湍流、流水、静水分配。逐种页面保留多个勾号，不压成一种生态类型。空格不确立不耐受，广义标签未量化流速、氧、繁殖阶段或生境质量。区域保护区、取样及统计海拔范围不同，图中精确逐种端点未数字化。二千三百米以上专门报告 Scutiger pingwuensis 与 Batrachuperus tibetanus，不是每个属成员的生理上限。'],
 ['methods','Observed richness does not independently demonstrate conservation causality','观察丰富度不独立证明保护因果','Reported historical species-count increase has p 0.148 and linear elevation association p 0.412, while site diversity/evenness/dominance differences are nonsignificant. These results do not establish identical populations or prove that management caused recovery. Discussion and Conclusions nevertheless use stronger fragmentation, improved-biodiversity and large-population language; those claims require comparable historical effort, abundance records and a causal design beyond the displayed tests. Historical red-list/protection statements are dated source claims, and malformed CITES wording is not expanded into a guessed appendix. Recommendations for habitat restoration and disease monitoring are not completed conservation outcomes.','所报历史种数增加 p 0.148、线性海拔关联 p 0.412，地点多样性/均匀度/优势度差异不显著。结果不确立相同种群，亦不证明管理导致恢复。讨论、结论仍使用更强破碎化、改善多样性及大种群措辞；这些须可比历史努力、丰度记录及展示检验之外因果设计。历史红名录/保护陈述是有日期来源主张，不完整 CITES 措辞不扩写为猜测附录。生境恢复及疾病监测建议不是已完成保护结果。']
 ]}
 const aliases=g.children.flatMap(r=>(r.additionalReferenceBindings??[]))
 if(aliases.length){
  const key=`primary-direct-group-${pmc.toLowerCase()}-${g.id.toLowerCase()}-catalogue-alias`
  study.sectionAdditionalSourceKeys=[[],[],[],[key]]
  study.sections.push(['taxonomy','Source combinations retain a separately cited catalogue relation','来源组合保留单独引用目录关系','One selected historical combination reaches its accepted species page through an exact name-usage-to-accepted link in frozen COL26.8 dataset 316115. The species page preserves the article’s original row name, usage ID and source statements. This nomenclatural evidence does not certify the article’s specimen identifications, population origin or biological concept equivalence. It does not justify extending the regional habitat assignments to every accepted member of the genus.','一个所选历史组合通过冻结 COL26.8 数据集 316115 的精确名称用法至接受名链接进入接受种页。逐种页保留论文原行名称、用法 ID 及来源陈述。命名证据不认证论文标本鉴定、种群来源或生物学概念等同性，不支持将区域生境分配扩展至每个接受属成员。'])
  const locator=aliases.map(r=>r.usage.locator).join('; ')
  study.sectionLocators.push(locator)
  study.additionalReferenceBindings=[{referenceId:'ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23',metadataVariant:0,sourceKey:key,usage:{locator,scope:{en:'Exact frozen nomenclatural accepted-links only; specimen and biological concepts uncertified.',zh:'仅精确冻结命名接受名链接；标本及生物学概念未认证。'}},originalFields:['referenceId','sourceKey','metadataVariant','locator','scope']}]
 }
 const i=inputs.findIndex(r=>r.colId===g.id&&r.pmc===pmc);if(i<0)inputs.push(study);else inputs[i]=study
 sections+=study.sections.length
}
fs.writeFileSync(file,JSON.stringify(inputs,null,2)+'\n')
console.log(JSON.stringify({groupsPrepared:groups.size,sections,routes:selected.length,testsRun:false}))
