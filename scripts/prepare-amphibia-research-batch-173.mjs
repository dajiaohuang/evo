import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const facts=JSON.parse(fs.readFileSync('docs/amphibia-content/brachycephalus-pernix-comparison-source-rows.json')).rows
const taxa=new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(x=>[x.scientificName,x.colId]))
const skinZh=s=>s.replace('Densely rough','密集粗糙').replace('Moderately rough','中等粗糙').replace('Smooth','光滑')
const yesZh=s=>s.replace('Yes','有').replace('No','无')
const color={
 actaeus:['Variable dark green, brown and orange dorsal/lateral patterns with an orange belly; preserved animals are darker with cream ventral areas.','背部及体侧深绿、褐与橙色组合多变，腹橙色；保存后较暗，腹部有奶油色区域。'],
 albolineatus:['Green with orange ventral patches, sometimes a pale dorsal midline; preserved dark and cream patterns differ from live colour.','绿色伴橙色腹斑，有时有浅色背中线；保存后的暗色与奶油色图案不同于活体。'],
 auroguttatus:['Orange/yellow and darker areas vary, with an orange head; a brown-backed pattern with an orange midline also occurs. Preservation replaces bright hues with cream and darker areas.','橙黄与暗区组合多变，头橙色；也有褐背、橙中线图案。保存后鲜色变为奶油色与暗区。'],
 boticario:['Dark dorsal areas contrast with orange head, midline and belly; those orange areas become cream in preservative.','暗背与橙色头、背中线及腹形成对照；保存后橙区变奶油色。'],
 brunneus:['Brown with yellow ventral patches in life, becoming darker with cream patches after preservation.','活体褐色伴黄色腹斑，保存后较暗并有奶油色斑。'],
 coloratus:['Reddish central dorsum contrasts with greener sides and mixed yellow-green ventral colour; preserved material loses this live contrast.','中央背部偏红，与较绿体侧及黄绿腹色对照；保存材料失去此活体鲜色对比。'],
 curupira:['Brown and yellow ventral patches resemble brunneus, but a black-and-gold iris provides an additional sampled distinction.','褐色及黄色腹斑近 brunneus，但黑金色虹膜提供另一所采区别。'],
 ferruginus:['Orange with optional brown dorsal spots or midline markings; preserved bright areas become cream with darker markings.','橙色可伴褐色背斑或中线纹，保存后鲜区变奶油色并有暗纹。'],
 fuscolineatus:['Orange and green dorsal patterns vary from a greener midline to a broadly greenish back, with orange sides and belly. Preserved material is cream and dark.','橙绿背纹由较绿中线至大部背偏绿，体侧与腹橙色；保存后为奶油色与暗色。'],
 izecksohni:['Orange with small green lateral dots in life; the comparative table describes preserved animals as cream.','活体橙色伴体侧小绿点，比较表把保存个体描述为奶油色。'],
 leopardus:['Orange with green rounded lateral and ventral dots; in preservative these contrasts become cream with darker dots.','橙色伴体侧及腹圆绿点，保存后转为奶油色伴暗点。'],
 mariaeterezae:['Orange, a blue dorsal stripe and brown patches combine with green ventral dots; preserved colours differ markedly.','橙色、蓝背纹及褐斑伴绿色腹点，保存后的颜色明显不同。'],
 mirissimus:['Orange with a white dorsal midline, becoming cream while retaining a pale stripe after preservation.','橙色伴白背中线，保存后变奶油色并仍有浅纹。'],
 olivaceus:['Green with orange on the chin and central belly or scattered ventral orange dots; preserved areas are dark and cream.','绿色伴颏、中央腹橙区或散布腹部橙点；保存后为暗色及奶油色区域。'],
 pernix:['Orange central back contrasts with dark sides and mixed orange-dark ventral areas; preserved bright areas become cream.','橙色背中央与暗体侧、橙暗混合腹区对照，保存后鲜区变奶油色。'],
 pombali:['Orange, sometimes with brown lateral and ventral spots; in preservative cream replaces orange and spots remain darker.','橙色有时伴体侧、腹部褐斑；保存后奶油色替橙色，斑仍较暗。'],
 quiririensis:['A dark back has an orange head and midline; orange ventral areas contain variable darker or greenish patches. Preserved patterns are cream and dark.','暗背伴橙头及背中线；橙腹含多变暗色或偏绿斑，保存图案为奶油色与暗色。'],
 tabuleiro:['An olive back with brown marks and a white midline contrasts with a mottled orange head and orange-green belly; the live-colour sample comprised only two animals.','橄榄色背伴褐纹、白中线，与混色橙头及橙绿腹对照；活体颜色样本仅两只。'],
 tridactylus:['Orange-green-dotted, darker orange and brown-backed patterns occur, with pale lateral dots or patches. These alternatives caution against one fixed colour diagnosis.','有橙色伴绿点、较暗橙色及褐背图案，伴浅体侧点或斑；这些替代型提醒不能用一个固定颜色诊断。'],
 verrucosus:['Pale green contrasts with an orange/yellow head, dorsal midline and belly; preservation changes these bright areas to cream against darker tissue.','浅绿与橙黄头、背中线及腹对照；保存后鲜区变奶油色并衬暗组织。'],
}
const entries=facts.map(({name,measurements:m,acoustics:a,conservation:c})=>{
 const colId=taxa.get(name),epithet=name.split(' ')[1]
 if(!colId||!color[epithet])throw new Error('Missing fixed species or reviewed colour '+name)
 const acoustic=a[0]==='?'?[
 'The authors had no available advertisement-call data for mariaeterezae. Table 2 therefore leaves note groups, attenuated notes and maximum note/pulse counts unknown. Missing recordings do not establish silence or absence of these structures. No call rate, frequency, season or reproductive mode is inferred from this gap.',
 '作者没有 mariaeterezae 可用求偶鸣声数据，表二因而将音符组、减弱音符及最大音符／脉冲数留未知。缺录音不确立沉默或这些结构不存在，也不从缺口推鸣率、频率、季节或繁殖方式。']:[
 `The note-centred comparison records note groups as ${a[0]}, attenuated notes as ${a[1]}, maximum notes per group as ${a[2]}, and maximum pulses per note as ${a[3]}. The table’s N counts animals with one or more recorded and analysed calls, not a universal count of notes or complete calls. A call sequence, an isolated note, a note group and a pulse are different units. These observed maxima and presence/absence statements apply to the examined recordings, not invariant limits for every population. Earlier call-centred descriptions may use different units.`,
 `以音符为中心的比较记录音符组 ${yesZh(a[0])}、减弱音符 ${yesZh(a[1])}、每组最大音符数 ${a[2]}、每音符最大脉冲数 ${a[3]}。表中 N 计一个或多个鸣声被记录分析的动物，不是通用音符或完整鸣声数。鸣声序列、单音符、音符组及脉冲为不同单位。最大值及有无陈述限定所查录音，不是每个种群不变界限。较早以鸣声为中心的描述可用不同单位。`]
 return {colId,name,pmc:'PMC12694819',year:2025,license:'CC BY (version not explicit in XML)',licenseUrl:'https://creativecommons.org/licenses/by/',
 readScope:'Raw study/collection, acoustic and molecular methods, comparative Table 2 with caption, conservation methods/Table 7, new-species diagnosis/natural-history and taxonomy/conservation discussion read; selected accepted comparison species only, original recordings/specimens and supplementary GIS not independently reanalysed',
 sectionLocators:[
 `PMC12694819 XML pone.0334746.t002 ${name} measurement row and caption; sec004 paragraphs 0–1; sec036 paragraphs 4–5`,
 `PMC12694819 XML pone.0334746.t002 ${name} live/preserved colour columns and caption; sec036 paragraphs 2,4–5`,
 `PMC12694819 XML pone.0334746.t002 ${name} acoustic row and caption; sec007 paragraphs 0–1; sec036 paragraphs 0–1,4`,
 `PMC12694819 XML pone.0334746.t007 ${name} row; sec009 paragraphs 0–4; sec038 paragraphs 2–6`,
 ],sections:[
 ['morphology','Sex-specific measurements retain variable-specific sample counts','分性别测量保留各变量样本数',
 `In the 2025 comparative table, male snout–vent length for ${name} is ${m[0]} mm and female length is ${m[1]} mm, with N retained separately for each sex. Dorsal skin is ${m[5].toLowerCase()} and lateral skin ${m[6].toLowerCase()}. N refers to animals observed for each variable, so the size, skin and colour denominators cannot be pooled into extra specimens. These examined ranges are not whole-species maxima, a statistical proof of population sexual dimorphism or a growth series. Smooth skin in this study can include small, inconspicuous warts; external digit absence does not alone establish skeletal absence.`,
 `2025 年比较表中 ${name} 雄性吻肛长为 ${m[0]} mm，雌性 ${m[1]} mm，各性别 N 分别保留。背皮 ${skinZh(m[5])}，体侧 ${skinZh(m[6])}。N 指每个变量所观察动物，体长、皮肤与颜色分母不能合并成额外标本。所查范围不是全物种极值、种群性二型的统计证明或生长系列。研究的光滑皮肤可含小而不突出疣；外部手足指缺失本身不确立骨骼缺失。`],
 ['appearance','Live and preserved colours are separate evidence','活体与保存颜色是不同证据',
 color[epithet][0]+' These are the authors’ comparative observations rather than a standardized colour-chart measurement. Colour and specimen counts vary by trait; similar colours recur among species, so a single hue is not a complete identification rule. Preserved appearance should not be substituted for live appearance.',
 color[epithet][1]+' 这是作者比较观察，不是标准色卡测量。颜色及标本数随变量不同，相近颜色在种间重复，单一色调不是完整鉴定规则。保存外观不能替代活体外观。'],
 ['behavior','Advertisement-call comparisons use distinct acoustic units','求偶鸣声比较区分声学单位',...acoustic],
 ['conservation','The 2025 assessment separates records, mapped habitat and risk','2025 年评估区分记录、映射生境与风险',
 `The authors’ Table 7 records an observed elevation range of ${c[4]} metres above sea level for ${name}; this is not a physiological altitude tolerance. Extent of occurrence is ${c[0]} square kilometres, lower-bound grid area of occupancy ${c[2]}, and upper-bound AOO ${c[1]}, with ${c[6]} threat-defined location(s). Dashes mark unavailable mapped estimates, not zero occupied area. The study proposes ${c[7]} under its assessment; this is a dated research assessment, not a freshly checked official Red List category. Records, potential habitat polygons, convex-hull EOO and two-kilometre grid AOO have different meanings. The location count is not a specimen count. Potential management and long-term recovery scenarios are not measured intervention success or a current population census.`,
 `作者表七记录 ${name} 已观察海拔 ${c[4]} 米（海平面以上），不是生理海拔耐受。分布范围 EOO 为 ${c[0]} 平方公里，网格占域 AOO 下界 ${c[2]}、上界 ${c[1]}，有 ${c[6]} 个按威胁定义地点。破折号指不可用映射估计，不是零占域。研究依据其评估提出 ${c[7]}，这是有日期的研究评估，不是刚核查的官方红色名录等级。记录、潜在生境多边形、凸包 EOO 与两公里网格 AOO 含义不同。地点数不是标本数。潜在管理及长期恢复情景不等于已测干预成功或当前种群普查。`],
 ]}
})
prepareAmphibianResearchInput(entries)
fs.writeFileSync('docs/amphibia-content/brachycephalus-pernix-2025-source-limits.json',JSON.stringify({source:'PMC12694819',doi:'10.1371/journal.pone.0334746',year:2025,license:'CC BY (version not explicit in XML)',licenseUrl:'https://creativecommons.org/licenses/by/',acceptedComparisonSpecies:entries.map(x=>({colId:x.colId,name:x.name})),limits:[
 {kind:'new-species-scope',locator:'XML sec012–sec030',handling:'Lulai absent from fixedCOL26.8 list; no invented acceptedID or assignment toauroguttatus/quiririensis. Newspeciesdata retained separately outsidecompletion count.'},
 {kind:'variable-denominators',locator:'XML pone.0334746.t002 andcaption; sec004; sec036',handling:'Each variable animalN, callNanimalsoneormorecalls not notes/calls count. SexSVL samples not universal extrema/dimorphism significance. Smoothmayhaveinconspicuouswarts; externalabsence not skeletalabsence. Live/preserved colours separated andno standardcolorchart.'},
 {kind:'call-units-and-gaps',locator:'XML sec007; sec036 paragraphs0–1; pone.0334746.t002',handling:'Notecentredcallsequence vs callcentredsinglenote distinctions. Group/note/pulse/attenuatednote different. Maximumobserved not invariant. Mariaeterezaenoavailablecalls notsilent. SourceunclosedtridactylusfingerII N parentheses not biologicalunknown.'},
 {kind:'spatial-and-assessment',locator:'XML sec009; pone.0334746.t007; sec038',handling:'2025authors assessment not checkedofficialcategory. Observationaltitude versusmappedenvelope, habitatpolygon/EOO/AOO distinct. EOO raisedtoAOOiflower;2x2km grids lowerrecordsupperpotential; blank/dashnotzero. Locationthreat-defined not localities/individuals. Proposed6600harefuge not implementedlegalprotection; no new populationtrend measured.'},
 {kind:'green-score-source-inconsistencies',locator:'XML pone.0334746.t008; sec009 paragraph4',handling:'Superscript2 afterweight10 not102. PotentialCU107.5 footnote3 not107.53. Coloratus100−43.3=56.7 notprinted56.5; CR20+85=105 versusquiririensis/tabuleiro105.5. No silentcertifiedcorrection or metricreuse; scenarios not interventions.'},
],fullArticleReadCertified:false,biologicalCoverageComplete:false},null,2)+'\n')
fs.writeFileSync('docs/amphibia-content/brachycephalus-lulai-pending-scope.json',JSON.stringify({source:'PMC12694819',sourceName:'Brachycephalus lulai',status:'not-in-pinned-COL26.8-accepted-species',countedAsAcceptedReader:false,evidenceRead:'XML sec003–sec009,sec016,sec020,sec023–sec030; selected taxonomy/conservation discussion',factualScope:{maleSVLmm:[8.9,11.3],femaleSVLmm:[11.7,13.4],measuredTypeSexCounts:{male:25,female:7},knownLocalities:['Pico Garuva','Monte Crista'],observedElevationMetres:[435,990],acousticIndividuals:13,callRecordingStartedAfterOnset:true,noteDurationSeconds:[0.010,0.061],noteDominantFrequencyKHz:[5.2,6.6],recordedNotes:205,authorsProposedCategory:'LC',lowerBoundAooKm2:8},limits:['No completecall duration from truncated61.7–201.8second recordings','Fourgeneticparatypes/fourloci/1828bp; three-speciesrelationships withauroguttatus/quiririensis unresolved','OneparatypeCT; histologythreeadultsperlocality notwholepopulation','Parasitesinonehost tentativeOphiotaenia withoutdiagnosticstructures; noallgenusconfirmedinfection','Interveningforestoccupancy/proposedrefuge/recoveryscenarios not verifiedrecords or implementedmanagement'],license:'CC BY (version not explicit in XML)',licenseUrl:'https://creativecommons.org/licenses/by/',fullArticleReadCertified:false,biologicalCoverageComplete:false},null,2)+'\n')
