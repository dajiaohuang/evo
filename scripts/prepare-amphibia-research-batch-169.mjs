import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const records=[
 {colId:'7DBLB',name:'Tylototriton asperrimus',sections:[
 ['morphology','External and osteological evidence have different counts','外部与骨学证据有不同数量',
 'Table 1 lists six external-head and seven osteological records for Tylototriton asperrimus. The male-focused study measured external soft tissues and skull landmarks separately in lateral and dorsal views. Those counts cannot be added into thirteen independent animals or read as a wild population sample. Shape analyses removed allometry, and cranial centroid size is a landmark measure rather than snout–vent length or mass.',
 '表一列 Tylototriton asperrimus 六份外部头形、七份骨学记录。主要雄性的研究在侧面、背面分别测外部软组织及头骨标志点。数量不能相加成十三只独立动物，也不是野外种群样本。形状分析去除异速生长；头部质心大小是标志点测量，不是吻肛长或体重。'],
 ['morphology','Largest sampled Yaotriton cranium is a bounded comparison','所采 Yaotriton 最大头部是有限比较',
 'The results describe T. asperrimus as having the largest cranial centroid size among the sampled Yaotriton. Only T. vietnamensis and T. wenxianensis were consistently smaller across datasets. This does not mean all other species were significantly smaller, nor establish asperrimus as the largest-bodied species across its genus. View-specific landmark size and limited male samples do not provide a whole-body size distribution, sexual dimorphism or a geographic cline.',
 '结果将 T. asperrimus 描述为所采 Yaotriton 中头部质心大小最大者；只有 T. vietnamensis、T. wenxianensis 在各数据中持续较小。这不表示其他所有种都显著较小，也不确立 asperrimus 为整个属整体体型最大种。视角限定的标志点大小与有限雄性样本不提供整体体型分布、性二型或地理渐变。'],
 ]},
 {colId:'7DBJW',name:'Tylototriton vietnamensis',sections:[
 ['morphology','Eleven external and eight osteological records inform the comparison','十一份外部、八份骨学记录用于比较',
 'Table 1 records eleven external-head and eight osteological observations for Tylototriton vietnamensis. These are separate datasets in a predominantly male comparative design, not nineteen independent animals. External head shapes include soft tissues; skull configurations use bony landmarks. The lateral and dorsal results and species-mean plots must not be merged into one universal diagnosis or a species-wide body-size range.',
 '表一记录 Tylototriton vietnamensis 十一份外部头形、八份骨学观察。它们是主要雄性比较设计中的不同数据，不是十九只独立动物。外部头形含软组织，头骨配置用骨性标志点。侧面、背面结果及物种均值图不能合成一个通用诊断或全物种体型范围。'],
 ['evolution','Shape divergence and smaller cranial size have defined comparators','形状分化与较小头部有明确对照',
 'The authors report vietnamensis and ziegleri as highly divergent in shape from the Tylototriton subgenus, within their sampled Yaotriton comparisons. Vietnamensis also had consistently smaller cranial centroid size than asperrimus across the datasets discussed. The result does not quantify feeding performance, whole-body size, genetic distance or a reproductive mechanism. The statistical comparison supplies morphological evidence within the study’s sampling, not a new taxonomic reassignment.',
 '作者在所采 Yaotriton 比较中报告 vietnamensis、ziegleri 的形状与 Tylototriton 亚属高度不同。所讨论各数据中 vietnamensis 的头部质心大小也持续小于 asperrimus。结果不量化摄食表现、整体体型、遗传距离或繁殖机制。统计比较提供采样内的形态证据，不是新分类改归。'],
 ]},
 {colId:'7DBK8',name:'Tylototriton wenxianensis',sections:[
 ['morphology','Seven external and five osteological records delimit size evidence','七份外部、五份骨学记录限定大小证据',
 'Table 1 lists seven external-head and five osteological records for Tylototriton wenxianensis. The study mainly used males; the two measurement datasets are not additive animal counts. Its cranial centroid size was consistently below asperrimus in the reported datasets, and its dorsal external-head size was below Pleurodeles. Cranial landmark size is not body mass or snout–vent length, and this sample does not establish female size or a complete species-wide size range.',
 '表一列 Tylototriton wenxianensis 七份外部头形、五份骨学记录。研究主要用雄性，两种测量数据不是可相加动物数。所报数据中其头部质心大小持续小于 asperrimus，背面外部头形大小小于 Pleurodeles。头部标志点大小不是体重或吻肛长，该样本不建立雌性大小或完整全物种体型范围。'],
 ['reproduction','Mating habitat reports remain in conflict','交配生境记录仍有冲突',
 'The discussion assigns terrestrial mating to wenxianensis using Gong and Mu (2008) and Pasmans and colleagues (2017), but notes that Kieren and colleagues (2018) listed aquatic mating without an information source. This is a comparison of earlier accounts, not new observation of courtship in this study. The disagreement is retained rather than converted into a single confirmed species-wide mating habitat.',
 '讨论依据 Gong 与 Mu（2008）及 Pasmans 等（2017），把 wenxianensis 交配列为陆地，同时指出 Kieren 等（2018）在无信息来源情况下列为水中交配。这是较早记录比较，不是本研究新观察求偶。分歧保留，不能改写成已确认的全物种统一交配生境。'],
 ['reproduction','Underwater clutch deposition is distinct from mating location','水下产卵不同于交配地点',
 'The same discussion states that Gong and Mu observed clutch deposition under water, contrary to the account of Pasmans and colleagues. A report about where eggs were laid does not determine where courtship or sperm transfer occurred. The paper calls for more ecological work on differences among species and populations. These conflicting cited observations do not supply an independently observed clutch size, breeding season, developmental duration or fixed egg-laying mode for every population.',
 '同一讨论说 Gong 与 Mu 观察到水下产卵，与 Pasmans 等记录不同。卵产在何处不能决定求偶或精子转移发生地点。论文要求更多生态研究比较物种、种群差异。冲突的被引观察不提供独立观察卵数、繁殖季、发育时间或每个种群固定的产卵方式。'],
 ]},
 {colId:'7DBK9',name:'Tylototriton ziegleri',sections:[
 ['morphology','Ten external and five osteological observations have separate roles','十份外部与五份骨学观察各有用途',
 'Table 1 records ten external-head and five osteological observations for Tylototriton ziegleri. In this mainly male design, external landmarks describe soft-tissue outlines while skull landmarks describe bone. Counts are not summed into fifteen independent animals. Lateral and dorsal configurations and individual versus mean analyses are separate; allometry-adjusted shape is not a body-growth trajectory.',
 '表一记录 Tylototriton ziegleri 十份外部头形、五份骨学观察。主要雄性设计中，外部标志点描述软组织轮廓，头骨标志点描述骨骼。数量不能相加为十五只独立动物。侧面与背面配置、个体与均值分析分开，调整异速生长后的形状不是身体生长轨迹。'],
 ['evolution','Comparative divergence does not identify an ecological cause','比较分化不能确定生态原因',
 'The results single out ziegleri and vietnamensis among Yaotriton as highly divergent in cranial shape from members of the Tylototriton subgenus. The article analyses phylogenetic and reproductive covariates comparatively, without experimentally showing why ziegleri has that shape. This statement does not provide a new skull-function test, diet observation, species-wide mating mode or species reassignment. Supplementary pairwise matrices were not independently reanalysed for this reader.',
 '结果在 Yaotriton 中指出 ziegleri、vietnamensis 的头部形状与 Tylototriton 亚属成员高度不同。论文比较分析系统、繁殖协变量，没有实验说明 ziegleri 为何具该形状。此陈述不提供新头骨功能测试、食性观察、全物种交配方式或改归。此页面没有独立重分析补充成对矩阵。'],
 ]},
 {colId:'TNJJJ',name:'Tylototriton lizhenchangi',sections:[
 ['morphology','Three external and two osteological records form a small sample','三份外部、两份骨学记录构成小样本',
 'Table 1 lists three external-head and two osteological records for Tylototriton lizhenchangi. The mainly male sample distinguishes external soft tissues from skull bone, measured in two-dimensional lateral and dorsal configurations. Five independent animals cannot be inferred by adding dataset counts. This is not a sample of all populations, females or developmental stages.',
 '表一列 Tylototriton lizhenchangi 三份外部头形、两份骨学记录。主要雄性样本区分外部软组织与头骨，以二维侧面、背面配置测量。不能相加推断五只独立动物。这不是所有种群、雌性或发育阶段的样本。'],
 ['morphology','A dorsal external-head size comparison has a limited meaning','背面外部头形大小比较含义有限',
 'In the reported dorsal external-head analysis, Pleurodeles had larger centroid size than lizhenchangi. The result describes a landmark configuration and one view, not a whole-body length or mass comparison. It does not establish a species-wide upper size limit or show that every lizhenchangi is smaller than every ribbed newt. The study supplies comparative cranial evidence without a new ecological or reproductive observation for this species.',
 '所报背面外部头形分析中，Pleurodeles 质心大小大于 lizhenchangi。结果描述一个视角的标志点配置，不是整体体长或体重比较。它不建立全物种体型上限，也不说明每只 lizhenchangi 都小于每只肋突螈。研究提供比较头部证据，没有本种新生态或繁殖观察。'],
 ]},
 {colId:'7DBJX',name:'Tylototriton yangi',sections:[
 ['morphology','Only live specimens supplied external-head evidence','仅活体标本提供外部头部证据',
 'Table 1 records two external-head observations for Tylototriton yangi and no osteological sample. Its plus-sign footnote says only live specimens were available. This is not a larval-stage designation and does not imply micro-CT skull scans. The overall study predominantly selected males, but the small external dataset does not describe population variation, female morphology or a bony-skull diagnosis.',
 '表一记录 Tylototriton yangi 两份外部头形观察，没有骨学样本；加号脚注说明仅有活体标本可用。这不是幼体阶段标记，也不意味着微型 CT 头骨扫描。研究总体主要选雄性，但该小外部数据不描述种群变异、雌性形态或骨性头骨诊断。'],
 ['morphology','Lateral cranial size differed from taliangensis','侧面头部大小与 taliangensis 不同',
 'The results report a lateral cranial centroid-size difference between taliangensis and yangi. For yangi, Table 1 supplies external-head data but no osteological sample, so this comparison must not be presented as a directly measured pair of bony skulls. The text does not provide a species-wide whole-body size range or establish an ecological cause of the difference. Centroid size and allometry-adjusted shape are different quantities.',
 '结果报告 taliangensis 与 yangi 侧面头部质心大小不同。yangi 的表一有外部头形数据但无骨学样本，因此不能将此比较写成两种直接测定骨性头骨。正文不提供全物种整体体型范围，也不确立差异生态原因。质心大小与调整异速生长后的形状是不同量。'],
 ]},
]
prepareAmphibianResearchInput(records.map(r=>({...r,pmc:'PMC7369190',year:2020,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
 readScope:'Table 1 and footnotes, methods/landmark/statistical sections, lateral/dorsal and comparative shape/size results, ecological discussion read; no independent supplementary-matrix or original scan analysis',
 sectionLocators:r.sections.map((s,i)=>'PMC7369190 XML '+(i===0?'joa13201-tbl-0001 with footnotes; joa13201-sec-0002–0004':s[0]==='reproduction'?'joa13201-sec-0012 paragraph 0':'joa13201-sec-0009 paragraphs 0–1')),
})))
fs.writeFileSync('docs/amphibia-content/wenxianensis-reproductive-record-source-limits.json',JSON.stringify({source:'PMC7369190',doi:'10.1111/joa.13201',colId:'7DBK8',year:2020,limits:[
 {kind:'mating-versus-oviposition',locator:'XML joa13201-sec-0012 paragraph 0',handling:'GongMu2008/Pasmans2017 cited terrestrial mating versus Kieren2018 aquatic without source; GongMu underwater clutch deposition conflicts Pasmans. Egg placement not mating location. No new reproductive cohort or certified uniform mode.'},
 {kind:'sample-and-size',locator:'XML joa13201-tbl-0001; joa13201-sec-0009 paragraph 1',handling:'Seven external/five osteology separate datasets, male focused. Centroid below asperrimus; dorsal external below Pleurodeles, not body mass/length or full species range.'},
],fullArticleReadCertified:false,biologicalCoverageComplete:false},null,2)+'\n')
