import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const common={pmc:'PMC10324467',year:2023,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Introduction and Sphyranura euryceae host/infection account, raw XML Sampling and parasite-status discussion read; new paedomorphic tynerensis sample separate from cited other-host records; parasite sequence and morphology not assigned to host biology; no original cited surveys or underlying sequence reanalysis',
}
const boundary=['health','The worm’s molecular traits are not salamander traits','寄生虫分子性状不是蝾螈性状',
  'The paper revises the diagnosis and molecular placement of the monogenean flatworm Sphyranura euryceae. Listed ribosomal and mitochondrial accessions describe parasites, not the salamander host’s genome. The account places worms on external gills and skin, especially near the leg bases; a host association does not establish exclusive host specificity, physiological tolerance or a measured effect on survival. Parasite prevalence is the proportion of examined hosts carrying worms, whereas intensity is the number of worms on an infected host. Neither supplies the host’s abundance, fertility, life span or current conservation category.',
  '论文修订单殖吸虫 Sphyranura euryceae 的诊断及分子位置。所列核糖体和线粒体编号描述寄生虫，不是蝾螈宿主基因组。条目记虫位于外鳃及皮肤，尤近足基部；宿主关联不确立专属宿主特异性、生理耐受或实测存活影响。感染率是检查宿主中有虫者比例，感染强度是每感染宿主虫数，二者都不提供宿主数量、繁殖力、寿命或当前保护类别。']
prepareAmphibianResearchInput([
  {...common,colId:'3D3HW',name:'Eurycea tynerensis',sectionLocators:[
    'PMC10324467 XML S4 paragraph 0; section 2 paragraphs 0, 2–3',
    'PMC10324467 section 2 paragraphs 5–6',
    'PMC10324467 section 0 paragraph 1',
    'PMC10324467 section 2 paragraphs 5–7; XML S21 paragraph 0',
  ],sections:[
    ['ecology','Paedomorphic salamanders were sampled at one Arkansas spring','一个阿肯色泉点采到幼态成体',
      'On three occasions between November 2019 and November 2020, paedomorphic tynerensis were dip-netted at Greathouse Spring in Tontitown, Benton County, Arkansas, USA. They were kept in habitat water and examined within twenty-four hours; gills and bodies were inspected under a stereomicroscope for ectoparasites. This is a local parasite-survey sample, not a full habitat-preference or seasonal abundance study. The parasite’s Oklahoma type locality at Pea Vine Creek is historical and separate from these Arkansas collections. Neither locality exhausts the salamander’s geographic range.',
      '2019 年十一月至 2020 年十一月间三次，在美国阿肯色州 Benton County、Tontitown 的 Greathouse Spring 用水生抄网采幼态成体 tynerensis。保留于生境水中，二十四小时内检查；以体视显微镜检查外鳃及身体外寄生虫。这是当地寄生虫调查样本，不是完整生境偏好或季节数量研究。寄生虫在俄克拉何马州 Pea Vine Creek 的模式产地是独立历史地点，与本次阿肯色采样分开，二者都不穷尽蝾螈地理分布。'],
    ['health','Year-specific parasite prevalence has small local denominators','分年度寄生虫比例具有较小当地分母',
      'The study found Sphyranura euryceae on twelve of twenty-seven tynerensis in 2019, reported prevalence 44.4%, with one or two worms per infected host. In 2020, two of six were infected, reported prevalence 33.3%, each with one worm. These are different sampled-year denominators, not a demonstrated population trend or an estimate for all tynerensis. Earlier cited surveys found ten of ten and thirty-seven of seventy-four infected; they remain separate historical samples rather than additions to this study’s denominator. The paper does not experimentally test disease severity, transmission rate or parasite effects on host growth and survival.',
      '2019 年检查二十七只 tynerensis，十二只有 Sphyranura euryceae，报告感染率 44.4%，每感染宿主一至两虫；2020 年六只中两只感染，报告 33.3%，各一虫。不同年度具有不同采样分母，不是证明的种群趋势或全物种估计。较早引述调查有十只全感染，以及七十四中三十七感染，保持独立历史样本，不加入本次分母。论文没有实验测试疾病严重性、传播速率或寄生虫对宿主生长存活的影响。'],
    ['lifeHistory','Alternative life histories are cited background rather than this experiment','不同生活史是引述背景而非本实验',
      'The Introduction describes tynerensis as endemic to the Ozark Plateau and cites earlier studies linking paedomorphic populations to chert streambeds with year-round access to subsurface water, and metamorphic populations to compact streambeds where such access is less assured. This contextual association is not a manipulation of substrate or a measured developmental response in the present parasite study. Its examined paedomorphic sample should not be used to classify every population as permanently gilled or to infer larval duration, breeding season or reproductive output.',
      '引言将 tynerensis 描述为 Ozark Plateau 特有，并引述较早研究：幼态持续种群与可全年利用地下水的燧石溪床相关，变态种群与较紧实、该水源未必保障的溪床相关。该背景关联不是本寄生虫研究对底质的操纵或实测发育响应。所查幼态成体样本不能将每种群归为永久具鳃，也不能推出幼体年限、繁殖季或繁殖产量。'],
    boundary,
  ]},
  {...common,colId:'3D3H6',name:'Eurycea lucifuga',sectionLocators:[
    'PMC10324467 section 0 paragraph 1; section 2 paragraphs 1, 5–6',
    'PMC10324467 section 2 paragraphs 5–7; XML S21 paragraph 0',
  ],sections:[
    ['health','The ten-of-ten parasite record is a cited earlier sample','十只全有虫的记录是引述早先样本',
      'The 2023 taxonomic account lists lucifuga as an additional host of Sphyranura euryceae and cites an earlier McAllister report in which ten of ten examined lucifuga were infected. This 100% figure describes that small historical sample, not new lucifuga collections in the present study, the species’ prevalence across its range or proof that all cave salamanders are infected. Current field sampling here targeted paedomorphic tynerensis at an Arkansas spring. The revised parasite account lists skin and external gills as infection sites, but supplies no newly measured lucifuga-specific intensity, clinical outcome or transmission experiment.',
      '2023 年分类条目将 lucifuga 列为 Sphyranura euryceae 的另一个宿主，并引 McAllister 较早报告：检查十只 lucifuga，十只感染。百分之一百描述该小型历史样本，不是本研究新采 lucifuga、全分布区流行率或所有洞穴蝾螈都有虫的证明。本研究野外采样针对阿肯色泉点幼态成体 tynerensis。修订寄生虫条目列皮肤及外鳃为感染部位，但没有新测 lucifuga 专属感染强度、临床结局或传播实验。'],
    boundary,
  ]},
  {...common,colId:'3D3HP',name:'Eurycea spelaea',sectionLocators:[
    'PMC10324467 section 0 paragraph 1; section 2 paragraphs 1, 5–6',
    'PMC10324467 section 2 paragraphs 5–7; XML S21 paragraph 0',
  ],sections:[
    ['health','A cited one-of-two host record cannot define species prevalence','引述两只中一感染不能定义物种流行率',
      'The 2023 parasite account lists spelaea as an additional Sphyranura euryceae host and cites an earlier report of one infected individual among two examined, expressed as 50% prevalence. This is a very small historical host sample, not the present study’s tynerensis survey or a representative estimate for spelaea throughout its range. The paper does not newly sample spelaea populations, establish infection intensity for this species or measure health consequences. Association with the parasite does not convert the worm’s Oklahoma type locality or Arkansas sampling spring into a new confirmed spelaea distribution record.',
      '2023 年寄生虫条目将 spelaea 列为 Sphyranura euryceae 另一个宿主，引用早先两只中一只感染、表达为感染率百分之五十的记录。这是极小历史宿主样本，不是本次 tynerensis 调查或 spelaea 全分布区代表估计。论文没有新采 spelaea 种群，没有建立本种感染强度或测量健康后果。寄生关联不能把寄生虫俄克拉何马模式产地或阿肯色采样泉变成新的确认 spelaea 分布记录。'],
    boundary,
  ]},
])
fs.writeFileSync('docs/amphibia-content/eurycea-sphyranura-host-source-limits.json',JSON.stringify({
  source:'PMC10324467',doi:'10.1051/parasite/2023025',year:2023,colIds:['3D3HW','3D3H6','3D3HP'],license:'CC BY 4.0',licenseUrl:common.licenseUrl,
  limits:[
    {kind:'new-versus-cited-host-samples',locator:'XML S4 paragraph 0; section 2 paragraphs 1, 6',handling:'Current field work paedomorphictynerensis GreathouseSpring Arkansas2019–2020 only. lucifuga10/10 andspelaea1/2 cited historical records not new measurements; original cited surveys not independently read. Do not combine denominators.'},
    {kind:'prevalence-versus-intensity',locator:'section 2 paragraph 6',handling:'2019tynerensis12/27,1–2worms perinfectedhost;2020two/six,1worm.44.4%versus33.3%notdemonstratedpopulationtrend. Older10/10 and37/74 independent citedsamples. No clinical outcome or transmission tested.'},
    {kind:'host-parasite-data-separation',locator:'section 2 paragraphs 0–7; XML S21 paragraph 0',handling:'Oklahoma parasite type locality not allhostsdistribution; Arkansas newtynerensis sample not newlucifuga/spelaea localities. Parasite rDNA/mitogenome, worm dimensions and evolutionary placement not host genomic/morphological traits.'},
    {kind:'life-history-context',locator:'section 0 paragraph 1',handling:'Ozark endemic/contextual chert–paedomorphic versuscompact–metamorphic association cited earlierliterature, not new substrate/development experiment. Currentpaedomorphic sample not allpopulations permanentgills or measureddevelopment/reproduction.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
