import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const common={pmc:'PMC11175521',year:2024,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Raw XML Materials/methods, Table1 and assay footnotes, extracted Results/Discussion read; species-specific named outcomes only, aggregate island/sample totals not species denominators; low-load diagnostic uncertainty and short-fragment pathogen identity distinct from disease or resistance; supplementary sample table not read',
}
const sampling=['health','A long-period opportunistic survey used two detection assays','长期机会性调查使用两种检测方法',
  'The 2024 Japanese study combined 1,012 samples collected in 2011–2023 from 98 sites and 21 amphibian species, including skin swabs and some toe clips. Some same-species, same-locality swabs were pooled, up to four per DNA extraction, so sample/extraction counts cannot automatically be treated as independently tested individuals. Standard PCR and duplex Bd/Bsal quantitative PCR were used. A strict qPCR-positive required both wells to amplify, a sigmoidal fluorescence curve and Ct below 40; single-well signals were retested. These overall study counts are not this species’ sample size or a uniformly sampled annual time series. No supplementary species-level denominator is independently read here.',
  '2024 年日本研究合并 2011–2023 年九十八地点、二十一种两栖动物的 1,012 个样本，含皮肤拭子及部分趾组织。同种、同地点拭子有时合并，每次 DNA 提取最多四个，因此样本或提取次数不能自动等同独立检测个体。使用常规 PCR 和 Bd/Bsal 双重定量 PCR。严格 qPCR 阳性要求两孔均扩增、荧光曲线呈 S 形且 Ct 小于四十；单孔信号重复检测。这些研究总数不是本种样本量，也不是均匀采样的年度序列；这里没有独立读取补充表的物种级分母。']
const assay=['health','Low-load signals and short sequences retain diagnostic limits','低负荷信号及短序列保留诊断限制',
  'Across the study, seventeen samples initially had at least one Bsal-positive qPCR well, but only four met the stated strict duplicate-well criteria. Thirteen samples yielded sequenced 160-base-pair amplicons identical to reference KC762295; the paper does not present these as seventeen plus thirteen independent infected animals. An alternative replicate-majority criterion would classify additional positives. The authors acknowledge that low loads prevented the independent diagnostic confirmation they discussed, and that false positives could not be completely excluded. A shared short fungal fragment does not establish a unique strain, whole-genome uniformity, viable fungal isolation or Japan as the proven origin of Bsal.',
  '全研究十七样本最初至少一个 qPCR 孔有 Bsal 阳性信号，但只有四个达到所述严格双孔标准。十三样本产生与参考 KC762295 相同的 160 碱基对扩增子序列；论文没有将其表述为十七加十三只独立感染动物。替代的重复孔多数阳性标准会分类出更多阳性。作者承认低负荷使其讨论的独立诊断确认不能完成，不能完全排除假阳性。共享短真菌片段不能确立唯一菌株、全基因组一致、活真菌分离或证明日本为 Bsal 起源。']
prepareAmphibianResearchInput([
  {...common,colId:'6C7WR',name:'Cynops ensicauda',sectionLocators:[
    'PMC11175521 XML sec002 paragraphs 0–2',
    'PMC11175521 section 1 paragraphs 0–1; section 2 paragraphs 0, 2',
    'PMC11175521 section 1 paragraph 1; section 2 paragraphs 1–2, 4; XML pone.0305228.t001 footnotes t001fn002–t001fn004',
    'PMC11175521 section 2 paragraphs 0, 4–5',
  ],sections:[sampling,
    ['health','Four strict positive samples concern the Okinawan popei form','四个严格阳性样本属于冲绳 popei 型',
      'The source assigns all four strict Bsal qPCR-positive samples to Cynops ensicauda popei from two Okinawa Island localities. Repeated qPCR remained positive in both wells, with values around one genomic equivalent. The present accepted-species page retains that subspecies-level scope rather than transferring the result to all ensicauda populations. No deaths or compatible chytridiomycosis symptoms were observed within the Japanese range where Bsal was detected in this study. This observation does not establish lifelong resistance, absence of subclinical effects or a safe outcome under higher loads or other conditions. Without a verified species/subspecies denominator, these four samples do not define population prevalence.',
      '来源将四个严格 Bsal qPCR 阳性样本全部归于冲绳岛两个地点的 Cynops ensicauda popei。重复 qPCR 两孔持续阳性，约一个基因组当量。当前接受物种页面保留该亚种范围，不把结果扩展至所有 ensicauda 种群。研究在检出 Bsal 的日本范围内未观察到死亡或符合壶菌病的症状。这不确立终生抗性、没有亚临床影响，或高负荷及其他条件下也安全。没有核实的物种或亚种分母，四样本不能定义种群流行率。'],
    assay,
    ['conservation','An altered historical site does not establish disease-caused loss','历史地点改变不确立疾病导致消失',
      'At one Okinawa locality positive in the earlier study, repeated visits failed to find newts. The authors presumed major human-mediated habitat alteration as an explanation, rather than demonstrating Bsal-caused extirpation. Their contrasting endemic-versus-introduced pathogen interpretations remain unresolved because short ITS-region fragments provide limited historical information. Recommendations to reduce pathogen spread are proposals, not evidence that a particular intervention worked. The article’s 2024 discussion of collecting and trade laws is not presented here as a current legal statement.',
      '此前研究阳性的一个冲绳地点，多次访问未找到蝾螈。作者推定严重人为栖息地改变为解释，没有证明 Bsal 导致当地消失。来源对病原地方性与引入的不同解释仍未解决，短 ITS 区段提供的历史信息有限。减少病原传播的建议是提案，不是具体干预有效的证据。文章 2024 年对采集及贸易法律的讨论不在这里作为当前法律陈述。'],
  ]},
  {...common,colId:'6MQL6',name:'Hynobius retardatus',sectionLocators:[
    'PMC11175521 XML sec002 paragraphs 0–2',
    'PMC11175521 section 1 paragraph 2; section 2 paragraph 3; XML pone.0305228.t001 Hokkaido row and footnotes t001fn002, t001fn004',
    'PMC11175521 section 1 paragraph 1; section 2 paragraphs 1–2, 4; XML pone.0305228.t001 footnotes t001fn002–t001fn004',
  ],sections:[sampling,
    ['health','One Hokkaido positive is not a species-wide susceptibility experiment','一个北海道阳性不是全物种易感性实验',
      'The Discussion reports one Hynobius retardatus testing Bsal-positive in Hokkaido, the first such record for the species in the authors’ account. Table 1 records one sequenced Bsal sample and zero strict qPCR positives for Hokkaido; its seventy-four samples are an island aggregate, not a verified retardatus denominator. This named molecular detection does not quantify this species’ prevalence, disease severity, pathogen reproduction or susceptibility under controlled exposure. The study observed no deaths or compatible symptoms in the detected Japanese range, and the authors contrast the finding with a previous suggestion of resistance. Neither that suggestion nor one detection settles experimental resistance.',
      '讨论报告一只 Hynobius retardatus 在北海道 Bsal 阳性，作者称为该种首次此类记录。表一北海道一份 Bsal 序列阳性、严格 qPCR 阳性零；七十四样本是全岛汇总，不是核实的 retardatus 分母。具名分子检出不量化本种流行率、疾病严重性、病原繁殖或控制暴露易感性。研究在日本检出范围未见死亡或符合症状，作者将发现与此前抗性建议对照。早先建议及单次检出均不能解决实验抗性。'],
    assay,
  ]},
  {...common,colId:'6XBLN',name:'Salamandrella keyserlingii',sectionLocators:[
    'PMC11175521 XML sec002 paragraphs 0–2',
    'PMC11175521 section 2 paragraph 3; section 1 paragraph 2; XML pone.0305228.t001 Hokkaido row',
    'PMC11175521 section 1 paragraph 1; section 2 paragraphs 1–2, 4; XML pone.0305228.t001 footnotes t001fn002–t001fn004',
  ],sections:[sampling,
    ['health','A new nondetection is separate from the earlier two-of-four report','新的未检出与较早四只中两阳性报告分开',
      'The Discussion states that Bsal was not detected in Salamandrella keyserlingii in the new Hokkaido monitoring, contrasting an earlier report of two positives among four individuals. That earlier 50% figure belongs to a very small cited historical sample, not the new survey or the species throughout its range. The new Hokkaido sampling includes another salamander species, so neither its seventy-four aggregate samples nor the reported increased effort supplies a verified keyserlingii denominator here. Harsh winter conditions lowering pathogen detectability are proposed, not measured in an experimental seasonal comparison. Nondetection does not establish clearance, resistance, an infection-free population or absence across the species range.',
      '讨论说明新的北海道监测没有在 Salamandrella keyserlingii 检出 Bsal，对照较早四只中两只阳性的报告。早先百分之五十属于极小的引述历史样本，不是新调查或全分布区比例。新北海道采样含另一蝾螈种，因此七十四汇总样本及增加采样努力不能在这里提供核实的 keyserlingii 分母。严冬降低病原检出能力是提议解释，不是实验季节比较测得。未检出不确立清除、抗性、无感染种群或全物种范围缺失。'],
    assay,
  ]},
])
fs.writeFileSync('docs/amphibia-content/japan-bsal-detection-source-limits.json',JSON.stringify({
  source:'PMC11175521',doi:'10.1371/journal.pone.0305228',year:2024,colIds:['6C7WR','6MQL6','6XBLN'],license:'CC BY 4.0',licenseUrl:common.licenseUrl,
  limits:[
    {kind:'pooled-and-historical-sample-units',locator:'XML sec002 paragraphs 0–2',handling:'2011–2023 opportunistic1012samples/98sites/21species; max4same-species same-site swabs per extraction. Study/island totals not species-specific independently tested-animal denominators. SupplementaryS1sampletable not read.'},
    {kind:'assay-categories',locator:'section 1 paragraph 1; XML pone.0305228.t001 and footnotes',handling:'17initial at-least-one-well signals,4strict duplicate-well qPCR positives and13sequenced samples distinct nonadditive classifications. Alternative majority-replicate criteria separate. Okinawa table5localities and151samples aggregate not popei prevalence.'},
    {kind:'host-concept-and-positive-assignment',locator:'section 1 paragraph 1; section 2 paragraph 3; XML pone.0305228.t001 Hokkaido row',handling:'4strict positives allensicauda popei/twoOkinawalocalities; no broad ensicauda transfer. Named retardatus detection1; Hokkaido table sequenced1strictqPCR0, not new confirmed resistance experiment.'},
    {kind:'nondetection-versus-historical-prevalence',locator:'section 2 paragraph 3',handling:'keyserlingii current nondetection distinct from cited2/4previoussample50%; no new denominator, clearance or rangewide absence. Cold-weather detection hypothesis untested.'},
    {kind:'diagnostic-and-pathogen-history-boundaries',locator:'section 2 paragraphs 1–4',handling:'Low loads prevented independent diagnostic confirmation, false positives not fully excluded;160bp5.8S/ITSfragment identity not strain/genome uniformity, viable isolation or proven origin. Discussion juxtaposes endemic and introduced hypotheses; neither certified.'},
    {kind:'symptoms-causality-and-current-law',locator:'section 1 paragraph 0; section 2 paragraphs 0, 5',handling:'No observed symptoms/deaths in detectionrange not lifelong resistance or lack subclinical effects. Newtabsenceat alteredOkinawasite not demonstratedBsalextirpation.2024legal discussion not current law verification.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
