import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const common = {
  pmc:'PMC12108350',year:2025,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Methods, Results and Discussion paragraphs read; single-stream larval encounter study, locally validated parasite-cyst identification proxy, occupied-riffle analysis; cited developmental background and mechanistic hypotheses separately attributed; no tables, figures or deposited datasets independently analysed',
}
const protocol = ['ecology','A three-day survey in one Georgia stream','佐治亚州一条溪流的三天调查',
  'The 2025 study surveyed a small second-order stream in the Savannah River drainage, Stephens County, northeastern Georgia, USA, at approximately 300 m elevation. Sampling took place on three rain-free days between 24 August and 10 September 2024. Riffles were searched by disturbing substrate into a downstream net; captured larvae were identified and returned. Flow was estimated from the travel time of powdered milk over one metre, and mean substrate diameter from ten arbitrarily selected representative rocks in a calibrated photograph. These are site-specific encounter and environmental measurements, not animal movement tracks, a random sediment census or a regional distribution survey.',
  '2025 年研究调查美国佐治亚州东北部 Stephens County、Savannah River 流域约海拔 300 米的一条小型二级溪流。采样在 2024 年 8 月 24 日至 9 月 10 日间三个无雨日进行。研究者扰动急流浅滩底质，由下游网具接取幼体，鉴定后原处释放。流速以奶粉溶液通过一米的时间估算；平均底质颗粒直径来自带标尺照片中任意选择的十块代表性石头。这些是单地点遭遇和环境测量，不是动物移动轨迹、随机沉积物普查或区域分布调查。']
const identification = ['health','Parasite cysts served as a locally supported identification proxy','寄生虫囊体作为具有当地依据的鉴定替代指标',
  'These two larvae are morphologically cryptic. Investigators examined the translucent belly for visible Metagonimoides oregonensis metacercariae, assigning cyst-bearing larvae to D. amphileucus and larvae without visible cysts to D. folkertsi. A previous PCR-genotyping study at this stream supported that association; the present survey did not report genotyping every sampled larva. The proxy therefore retains its local validation boundary. It does not establish universal species-specific infection, absence of all parasites in folkertsi, a diagnostic character throughout both ranges or a causal link between infection and flow use.',
  '两种幼体外形难以区分。研究者检查透光腹部是否有可见的 Metagonimoides oregonensis 囊蚴，将有囊体者归为 D. amphileucus，无可见囊体者归为 D. folkertsi。这条溪流此前的 PCR 基因分型研究支持该对应关系；本次调查没有报告逐只对所采幼体进行基因分型。因此该替代指标保留当地验证范围，不能据此判定整个分布区内的物种专属感染、folkertsi 完全无寄生虫，或感染导致流速利用差异。']
const comparison = ['ecology','Flow associations are conditional on occupied riffles','流速关联以已有幼体的浅滩为条件',
  'The analysis discarded riffles without Desmognathus before comparing species. Amphileucus-occupied riffles had mean flow 0.24 ± 0.01 m/s (20 riffles), compared with 0.174 ± 0.014 m/s for folkertsi (33 riffles); these uncertainties are reported standard errors, not standard deviations. Corresponding mean particle diameters were 37.53 ± 0.67 and 37.77 ± 0.39 mm. The model associated species presence with flow (p = 0.005), while particle diameter and larval-count covariates each had p = 0.941. Nine shared riffles occur in both species groups, so the group counts do not represent 53 distinct independent riffles. These encounter means are neither physiological flow limits nor experimentally demonstrated preferred velocities.',
  '比较物种前，分析舍弃没有 Desmognathus 的浅滩。有 amphileucus 的二十处浅滩平均流速为 0.24 ± 0.01 米/秒，有 folkertsi 的三十三处为 0.174 ± 0.014 米/秒；这里的不确定度是文中标准误，不是标准差。对应平均颗粒直径为 37.53 ± 0.67 和 37.77 ± 0.39 毫米。模型中流速与物种出现有关联（p = 0.005），颗粒直径及幼体数量协变量各为 p = 0.941。九处共有浅滩同时计入两组，因此组数量不等于五十三处不同的独立浅滩。这些遭遇环境均值不是生理流速极限，也不是实验确认的偏好速度。']
const limits = ['ecology','Shared riffles and similar prey do not resolve competition','共享浅滩及相似潜在食物不能判定竞争机制',
  'Both species occurred together in nine of fifteen downstream riffles yielding more than one larva. Counts within shared riffles did not differ significantly in the reported Mann–Whitney comparison (p = 0.6588), which does not prove equal competitive ability or absence of interactions. The authors found no evidence that folkertsi competitively excluded amphileucus upstream. Similar sampled potential-prey assemblages between reaches (Jaccard similarity 0.76) are not stomach-content or feeding-preference evidence. Unmeasured factors, female nesting-site selection and downstream drift remain possible explanations. The study explicitly cautions that results from this single stream may not apply throughout the sympatric region.',
  '下游十五处检出超过一只幼体的浅滩中，九处有两种共存。共有浅滩中两种数量的 Mann–Whitney 比较未达显著（p = 0.6588），不能证明竞争能力相等或没有互动。作者没有发现 folkertsi 竞争排除上游 amphileucus 的证据。两河段所采潜在食物群落相似（Jaccard 相似度 0.76），不等于胃内容物或取食偏好证据。未测因素、雌性产卵地点选择和幼体向下游漂移仍是可能解释。研究明确提醒，单条溪流结果未必适用于整个同域分布区域。']
prepareAmphibianResearchInput([
  {...common,colId:'353MH',name:'Desmognathus folkertsi',sectionLocators:[
    'PMC12108350 section 1 paragraphs 0, 4–7',
    'PMC12108350 section 1 paragraphs 1, 7',
    'PMC12108350 section 2 paragraphs 2–5',
    'PMC12108350 section 1 paragraphs 7, 10–11; section 2 paragraph 8',
    'PMC12108350 section 2 paragraph 5; section 3 paragraphs 5–6',
    'PMC12108350 section 2 paragraphs 0, 5, 9; section 3 paragraphs 4–7',
  ],sections:[protocol,identification,
    ['ecology','Larvae occurred on both sides of the tributary','支流汇入口两侧均检出幼体',
      'Of 51 riffles searched, 44 contained Desmognathus larvae. Folkertsi occurred in 33: sixteen downstream and seventeen upstream of a tributary entering the study stream. Its numbers per occupied riffle averaged 2.125 downstream (range 1–8) and 2.412 upstream (1–5). These are counts within surveyed occupied riffles, not densities per square metre or population estimates. No Desmognathus larvae were found in the sampled pool leaf packs, although other salamander larvae were present. This local non-detection does not establish that folkertsi never uses pools elsewhere or during other seasons.',
      '搜索五十一处急流浅滩，四十四处有 Desmognathus 幼体。folkertsi 出现在三十三处，其中支流汇入口下游十六处、上游十七处。每处有该种的浅滩平均下游 2.125 只（范围 1–8），上游 2.412 只（1–5）。这是调查中已有该种浅滩的数量，不是每平方米密度或种群估计。所查水潭落叶堆没有发现 Desmognathus 幼体，但有其他蝾螈幼体；当地未检出不证明 folkertsi 在别处或其他季节从不利用水潭。'],
    comparison,
    ['reproduction','Seven females attended upstream nests; developmental duration is cited background','七只雌性在上游照料巢；发育年限来自引述资料',
      'The researchers directly observed seven adult female folkertsi attending nests upstream of the tributary. This is a reproductive attendance observation, without measurements of clutch size, hatching success or experimentally tested benefits of attendance. The Discussion cites an approximately two-year larval period for folkertsi, contrasting it with the cited three-to-four-year period of amphileucus. Neither duration was established by following a cohort during this three-day survey. Active female selection of flow conditions and downstream drift of some larvae are hypotheses rather than tracked nesting decisions or marked-individual movements.',
      '研究者直接观察到七只成年雌性 folkertsi 在汇入口上游照料巢。这是繁殖照料观察，没有测定窝卵数、孵化成功率或实验验证照料收益。讨论引述 folkertsi 约两年的幼体期，与所引 amphileucus 三至四年对照；三个调查日没有追踪队列建立这些年限。雌性主动选择水流条件及部分幼体向下游漂移是解释假说，不是已跟踪的产卵决策或标记个体移动。'],
    limits,
  ]},
  {...common,colId:'NGBSS',name:'Desmognathus amphileucus',sectionLocators:[
    'PMC12108350 section 1 paragraphs 0, 4–7',
    'PMC12108350 section 1 paragraphs 1, 7',
    'PMC12108350 section 2 paragraphs 2–5',
    'PMC12108350 section 1 paragraphs 7, 10–11; section 2 paragraph 8',
    'PMC12108350 section 3 paragraphs 5–6',
    'PMC12108350 section 2 paragraphs 0, 5, 9; section 3 paragraphs 4–7',
  ],sections:[protocol,identification,
    ['ecology','A sharp local encounter boundary at a tributary','支流汇入口附近清晰的当地遭遇界限',
      'Amphileucus larvae occurred in twenty riffles, all downstream of the tributary, with one to six individuals per occupied riffle (mean 2.20). None was found in the nineteen upstream riffles searched. Four were captured in one riffle less than ten metres downstream, while folkertsi occupied a suitable riffle within ten metres upstream. The tributary increased stream flow and size, but neither was experimentally manipulated. This narrow local boundary describes detections during the survey, not the complete geographic range, an impassable barrier or proof of permanent absence upstream. Sampled pool leaf packs yielded no Desmognathus larvae.',
      'amphileucus 幼体出现在二十处浅滩，全部在汇入口下游，每处已有该种的浅滩一至六只、均值 2.20。搜索的十九处上游浅滩没有检出该种。距汇入口下游不足十米的一处捕到四只，而上游十米内一处适宜浅滩有 folkertsi。支流使流量和溪流规模增加，但研究没有实验操纵二者。这个狭窄的当地界限描述调查时的检出，不是完整地理分布、不可越过的障碍或上游永久缺失的证明。所采水潭落叶堆也未发现 Desmognathus 幼体。'],
    comparison,
    ['development','A longer cited larval period motivates an untested nesting hypothesis','较长的引述幼体期支持待检验的产卵假说',
      'The Discussion cites a three-to-four-year larval period for amphileucus and approximately two years for folkertsi. These durations come from earlier literature, not longitudinal measurements in the present study. The authors propose that amphileucus females may choose higher-flow nesting sites because a long aquatic period could increase exposure to drought in smaller stream reaches. They did not document amphileucus nest counts here, experimentally test female flow choice or measure drought survival. General reports of downstream larval drift and studies on other salamanders or fishes do not establish those mechanisms in this sampled population.',
      '讨论引述 amphileucus 三至四年的幼体期及 folkertsi 约两年。这些年限来自早期资料，不是本研究纵向测量。作者提出，较长水生期可能增加小溪段干旱暴露，因此 amphileucus 雌性或选择流速较高的产卵地点。本研究没有记录该种巢数量，没有实验测试雌性水流选择或测量干旱存活。有关幼体向下游漂移的一般报道，以及其他蝾螈或鱼类研究，不能确立这些机制在本次种群中的作用。'],
    limits,
  ]},
])
fs.writeFileSync('docs/amphibia-content/desmognathus-georgia-microhabitat-source-limits.json',JSON.stringify({
  source:'PMC12108350',doi:'10.3390/ani15101479',year:2025,colIds:['353MH','NGBSS'],license:'CC BY 4.0',licenseUrl:common.licenseUrl,
  limits:[
    {kind:'identification-proxy',locator:'section 1 paragraphs 1, 7',handling:'Prior local PCR validation supports visible Metagonimoides cyst proxy; current survey does not genotype every larva. Do not extrapolate universal infection or parasite-driven flow selection.'},
    {kind:'sampling-and-independent-units',locator:'section 1 paragraphs 4–7; section 2 paragraphs 3–8',handling:'One stream, three rain-free days. Empty riffles discarded before comparison. Nine shared riffles included in both species groups. Ten photographed rocks are substrate subsamples, not larvae. Encounter means are not tolerances or experimental preferences.'},
    {kind:'uncertainty-units',locator:'section 2 paragraphs 7–8',handling:'Source states mean ± one standard error. Do not reinterpret as SD or physiological range; retain units and group sizes.'},
    {kind:'prey-name-conflict',locator:'section 2 paragraph 0',handling:'Source pairs larval caddisflies with Ephemeroptera, an inconsistent taxonomic label. Do not silently certify either identification. Sampled potential prey/Jaccard 0.76 are not measured diet.'},
    {kind:'reproductive-observation-versus-hypothesis',locator:'section 2 paragraph 5; section 3 paragraph 5',handling:'Seven folkertsi females attending upstream nests are observed. Amphileucus high-flow nest selection is proposed, without observed nest counts or experimentally tracked choice.'},
    {kind:'cited-development-and-mechanisms',locator:'section 3 paragraphs 4–7',handling:'Larval periods 2 versus 3–4 years are cited background. Drift, drought advantage and competitive mechanisms untested here. Captive aggression/cannibalism cited from earlier work not current field observation. Nonsignificant shared counts do not prove equal competition.'},
    {kind:'scope-limit',locator:'section 3 paragraph 7',handling:'Single-stream pattern not certified throughout sympatric range; no complete range, seasonal absence or current conservation assessment established.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
