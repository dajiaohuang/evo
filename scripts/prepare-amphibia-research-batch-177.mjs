import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const taxa=new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(x=>[x.scientificName,x.colId]))
// Explicit sets reviewed in the manuscript's taxonomic comparison and Discussion.
const traits={
 fold:['aenea','annandalii','gammii','liebigii','polunini','rarica','rostandi','unculuanus','vicina'],
 threeFingers:['arnoldi','maculosa','yunnanensis','zhaoermii'],
 vocal:['blanfordii','chayuensis','conaensis','feae','medogensis','mokokchungensis','phrynoides','sichuanensis'],
 firstFinger:['kangxianensis'],
 noFingerSpines:['quadranus','taihangnica'],
}
const morphology={
 fold:['A cited dorsolateral fold distinguishes this comparison','被引背侧褶区分此比较',
 'The 2023 account includes this species among Nanorana reported to have a dorsolateral fold, contrasting with the absent fold in laojunshanensis. That is a cited taxonomic comparison based on earlier descriptions, not a newly measured series for this species. It does not state a population-wide frequency, fold dimensions or a functional role. A single shared trait cannot identify all species; the new-species diagnosis uses a character combination rather than treating fold presence as unique.',
 '2023 年记述将本种列入据报有背侧褶的 Nanorana，与 laojunshanensis 无褶对照。这是依较早描述的被引分类比较，不是本种新测系列。它不陈述种群频率、褶尺寸或功能。单一共有性状不能识别全部种，新种诊断采用性状组合，不把有褶视为独有。'],
 threeFingers:['Male finger-spine distribution is a cited comparison','雄性指棘位置是被引比较',
 'The taxonomic account reports nuptial spines on fingers I–III for this species, contrasting with fingers I and II in adult male laojunshanensis. The statement is a comparison from earlier taxonomic descriptions, not new measurements of spine density, colour or seasonal change. Nuptial spines should not be generalized to females or all life stages. The character does not itself establish courtship behaviour, a breeding calendar, fertilization mode or species identity.',
 '分类记述据较早描述报告本种婚棘在第一至三指，与成年雄 laojunshanensis 的第一、二指对照。这不是新测棘密度、颜色或季节变化。婚棘不能推广到雌性或所有发育阶段，性状本身不确立求偶行为、繁殖历、受精方式或物种身份。'],
 vocal:['Vocal-sac presence is anatomical comparison evidence','声囊存在是解剖比较证据',
 'The 2023 comparison lists this species as having a vocal sac, unlike the absent sac in laojunshanensis, using earlier descriptions. It is an anatomical statement rather than a new acoustic recording. No call duration, frequency, pulse rate, mating success or calling season for this species was measured by that comparison. It does not imply identical call structure among all listed species or that every individual and life stage was examined.',
 '2023 年比较依据较早描述，将本种列为有声囊，与 laojunshanensis 无声囊对照。这是解剖陈述，不是新声学录音；比较不测本种鸣声时长、频率、脉冲率、交配成功或鸣叫季。不意味着所列种有相同鸣声结构，也不表示所有个体及发育阶段均经过检查。'],
 firstFinger:['Nuptial spines restricted to finger I distinguish the cited material','仅第一指婚棘区分被引材料',
 'The account cites nuptial spines on finger I in kangxianensis, contrasting with fingers I and II in laojunshanensis. The Discussion also lists first finger longer than second, complete toe webbing and absence of a tarsal fold in kangxianensis. These cited characters are not a fresh population series, direct performance measurements or a verified year-round reproductive state. They illustrate that the older Allopaa diagnosis contains traits shared with Nanorana.',
 '记述引用 kangxianensis 第一指婚棘，与 laojunshanensis 第一、二指对照。讨论还列 kangxianensis 第一指长于第二、趾全蹼、无跗褶。这些被引性状不是新种群系列、直接表现测量或已验证全年繁殖状态；它们说明旧 Allopaa 诊断含与 Nanorana 共有性状。'],
 noFingerSpines:['The cited comparison lacks finger nuptial spines','被引比较没有指婚棘',
 'The 2023 account describes this species as lacking finger nuptial spines in its comparison with laojunshanensis. The genus discussion additionally lists first finger longer than second and complete toe webbing for both quadranus and taihangnica. These statements come from comparative descriptions, not a newly examined absence in every season or all populations. Lack of finger spines does not establish absence of reproduction, a silent male or absence of spines elsewhere on the body.',
 '2023 年记述在与 laojunshanensis 比较时称本种缺指婚棘；属讨论还将 quadranus、taihangnica 均列为第一指长于第二、趾全蹼。这是比较描述，不是新查每个季节或全部种群均缺。无指棘不确立不繁殖、雄性无声或身体其他部位无棘。'],
}
const proposedPaa=new Set(['arnoldi','blanfordii','ercepeae','polunini','rarica','rostandi','vicina','zhaoermii'])
const establishedPaa=new Set(['liebigii','conaensis','medogensis','maculosa','chayuensis'])
const proposedChap=new Set(['kangxianensis','sichuanensis','phrynoides'])
const establishedChap=new Set(['aenea','quadranus','taihangnica','unculuanus','yunnanensis'])
const noSequence=new Set(['annandalii','feae','gammii','mokokchungensis'])
const bySpecies=new Map()
for(const [trait,names] of Object.entries(traits))for(const epithet of names){
 const name=`Nanorana ${epithet}`,colId=taxa.get(name)
 if(!colId)throw new Error('Missing fixed comparison species '+name)
 const [enTitle,zhTitle,en,zh]=morphology[trait]
 const absent=noSequence.has(epithet)?[
 ' The same Discussion says no sequence data were available for this species in that analysis and leaves its subgenus allocation unresolved. This dated evidence gap is not a current universal claim about all databases.',
 ' 同一讨论称该分析没有本种序列资料，亚属分配未解决。这是有日期证据缺口，不是对当前所有数据库的普遍陈述。']:['','']
 bySpecies.set(epithet,{colId,name,sections:[['morphology',enTitle,zhTitle,`${name}: ${en}${absent[0]}`,`${name}：${zh}${absent[1]}`]],sectionLocators:['PMC10649098 XML sec3dot3-animals-13-03427 paragraph 16; sec2dot2-animals-13-03427 paragraph 0; sec4-animals-13-03427 paragraphs 2–3']})
}
for(const epithet of new Set([...proposedPaa,...establishedPaa,...proposedChap,...establishedChap])){
 const name=`Nanorana ${epithet}`,colId=taxa.get(name)
 if(!colId)throw new Error('Missing fixed phylogenetic species '+name)
 const group=proposedPaa.has(epithet)||establishedPaa.has(epithet)?'Paa':'Chaparana'
 const newly=proposedPaa.has(epithet)||proposedChap.has(epithet)
 const entry=bySpecies.get(epithet)??{colId,name,sections:[],sectionLocators:[]}
 const en=newly?`The 2023 combined-locus analysis placed ${name} with known members of ${group}; the authors therefore suggest allocating it to that subgenus. This is an explicit sampled phylogenetic proposal, not a change to the fixed species ID or independent certification that a rank is biologically required.`:`The 2023 analysis uses ${name} among known ${group} members when comparing and allocating other Nanorana species. Its placement is evidence in the available four-locus reference framework, not an independently reanalysed whole-genome relationship or a new species description.`
 const zh=newly?`2023 年合并位点分析把 ${name} 与 ${group} 已知成员放在一起，作者因而建议归该亚属。这是明确所采系统关系提议，不是改变固定种 ID，或独立认证该等级在生物学上必需。`:`2023 年分析以 ${name} 为 ${group} 已知成员之一，比较并分配其他 Nanorana。归属是在可用四位点参考框架内的证据，不是独立重分析完整基因组关系或新种描述。`
 entry.sections.push(['evolution',`Published placement within ${group}`,`出版研究中 ${group} 内的位置`,en+' Reference sequences include missing loci and earlier studies. A subgenus label does not provide this species’ habitat, reproduction or conservation status, and branch placement alone does not measure divergence time, migration or reproductive isolation.',zh+' 参考序列含缺失位点及较早研究。亚属标签不提供本种生境、繁殖或保护状态；分支位置本身也不测分化时间、迁移或繁殖隔离。'])
 entry.sectionLocators.push(`PMC10649098 XML sec4-animals-13-03427 paragraph 2; animals-13-03427-t007 ${name} row; sec2dot3-animals-13-03427 paragraphs 0–1`)
 bySpecies.set(epithet,entry)
}
const entries=[...bySpecies.values()]
prepareAmphibianResearchInput(entries.map(r=>({...r,pmc:'PMC10649098',year:2023,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',readScope:'Taxonomic comparison paragraph 16, genus Discussion and suggested-subgenus Table 7 plus molecular/morphometric methods read; cited anatomical traits distinguished from newly sampled type measurements; no independent reference-sequence/voucher or supplementary data reanalysis'})))
fs.writeFileSync('docs/amphibia-content/nanorana-2023-comparison-scope.json',JSON.stringify({source:'PMC10649098',doi:'10.3390/ani13213427',year:2023,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',species:entries.map(x=>({colId:x.colId,name:x.name,authoredSections:x.sections.length})),sourceComparisons:Object.fromEntries(Object.entries(traits)),sourcePhylogeneticProposals:{Paa:[...proposedPaa],Chaparana:[...proposedChap]},unresolvedInStudy:[...noSequence],limits:['Named/cited anatomical statements not new population trait-frequency samples','Adultmale nuptialcharacters not female/larval/yearround invariants','Presencevocal sac not acoustic recording or silence evidence','Four-locus/reference framework includes missing markers; no independent whole-genome reanalysis','2023no-sequence gap not currentdatabase census','Xuelinensis conflicting assignment is in batch176 and not silently overwritten'],fullArticleReadCertified:false,biologicalCoverageComplete:false},null,2)+'\n')
