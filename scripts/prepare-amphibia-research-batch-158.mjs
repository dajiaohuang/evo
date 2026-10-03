import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const common = {pmc:'PMC12510250',year:2025,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Raw XML experimental subjects, escape trials, kinematic/statistical methods, Results and Discussion read; three identifiable species and one unresolved northern semi-aquatic group; captive fast-start metric not maximum speed, wild predation success or experimentally demonstrated fitness; source individual labels not independent genetic re-identification',
}
const protocol = ['behavior','Repeated escape trials measured an individual mean fast start','重复逃逸试验测量个体平均快速起动',
  'After eight to twelve weeks in captivity, each animal received three aquatic and three terrestrial trials in randomized order, with at least thirty minutes between trials. Animals acclimated to the camera room at 21–22 °C before a gentle forceps pinch at the tail base. Pinch strength was not measured. Video at 500 frames per second was scored independently by two observers unaware of species and the ecomorph hypothesis. Net velocity was straight-line displacement over the first three trunk undulations, averaged across trials and observers for each animal in each medium. Repeated trials, frames and scorers are not independent animals; the metric is an average initial burst, not maximum sprint speed or sustained endurance.',
  '圈养八至十二周后，每只动物以随机次序接受三次水中及三次陆地试验，试验间至少隔三十分钟。先适应 21–22 摄氏度摄影室，再以镊子轻夹尾基触发逃逸；夹力没有测定。每秒五百帧影像由两位不知物种及生态型假说的观察者独立评分。净速度为前三次躯干摆动的直线位移除以时间，再对每个体每介质平均试验及观察者结果。重复试验、影格和评分者不是独立动物；该指标是平均初始冲刺，不是最大短跑速度或持续耐力。']
const tradeoff = ['behavior','The cross-sample trade-off does not quantify this species alone','跨样本的性能权衡不单独量化本种',
  'Across all forty-four animals, aquatic and terrestrial fast-start velocities expressed in body lengths per second were negatively correlated (r = −0.571, p < 0.0001). Northern and southern subset confidence intervals overlapped; a mixed model retained individual identity because every animal was tested in both media. Semi-aquatic groups performed faster on land and aquatic groups faster in water. These are comparative results spanning three named species and an unresolved northern group, not a separately estimated within-species correlation or a universal swimming speed. Body length also affected speed, and the model omitted strongly correlated head and tail lengths.',
  '全部四十四只动物按体长每秒表示的水中与陆地快速起动速度负相关（r = −0.571，p < 0.0001）。北方、南方子集置信区间重叠；因每只均在两介质测试，混合模型保留个体身份。半水生组陆地较快，水生组水中较快。这是跨三种有名物种及一个未解决北方组的比较，不是单独估计的种内相关或普遍游泳速度。体长也影响速度，模型排除高度相关的头长及尾长。']
const interpretation = ['ecology','Functional parallelism is an interpretation with unresolved northern identity','功能平行演化解释保留北方身份疑问',
  'The authors interpret similar aquatic-versus-terrestrial performance contrasts in northern and southern clades as support for functional trade-offs and parallel evolution. The northern semi-aquatic animals were collected in 2010 before later taxonomic revision and treated as Desmognathus sp., potentially mavrokoilius, kanawha or their contact-zone mixture. Their measurements cannot be copied onto either species page. The experiment did not measure successful escape from live predators, survival, mating success, natural habitat choice or an inherited causal mechanism. Comparisons with other newts also use different locomotor metrics, so differences are not a uniform test across genera.',
  '作者将南北支系相似的水中与陆地性能对照解释为功能权衡及平行演化支持。北方半水生动物于 2010 年、后来分类修订前采集，作为 Desmognathus sp. 处理，可能为 mavrokoilius、kanawha 或接触区混合。不能把其测量复制到任一种页面。实验没有测量从活捕食者成功逃逸、存活、交配成功、自然栖息地选择或遗传因果机制。与其他蝾螈的比较也使用不同运动指标，不是跨属统一试验。']
prepareAmphibianResearchInput([
  { ...common,colId:'6CNY6',name:'Desmognathus aureatus',sectionLocators:[
    'PMC12510250 XML sec3 paragraphs 0–2','PMC12510250 XML sec4 paragraphs 1–3; sec5 paragraphs 0–2','PMC12510250 XML sec6 paragraphs 0–2; sec7 paragraphs 0–1','PMC12510250 XML sec8 paragraphs 0–2; sec3 paragraph 0',
  ],sections:[
    ['morphology','Ten southern aquatic adults define the measured sample','十只南方水生型成体限定所测样本',
      'Ten adults labelled aureatus were collected from a stream near DeSoto Falls Recreational Area, Lumpkin County, Georgia, in 2010. They were the southern aquatic group, searched beneath submerged rocks in riffles. Sex was unknown; animals with tail damage or snout–vent length below 50 mm were not collected. Mean snout–vent length at capture was reported as 66.5 ± 0.69 mm, with the Methods explicitly labelling the dispersion standard deviation. This selected sample mean is not a sex-specific adult range or species-wide maximum. Aquatic housing at 15 °C and laboratory feeding do not establish natural thermal limits or measured wild diet.',
      '2010 年在佐治亚州 Lumpkin County、DeSoto Falls Recreational Area 附近溪流采十只标为 aureatus 的成体，为南方水生组，从浅滩水下石块下搜索。性别未知，没有采断尾或吻肛长低于五十毫米的个体。捕获时平均吻肛长报告为 66.5 ± 0.69 毫米，方法明确将离散度称作标准差。这是选择样本均值，不是分性别成体范围或全物种最大值。15 摄氏度水中饲养及实验室供食不确立自然耐温或野外食性。'],
    protocol,tradeoff,interpretation,
  ]},
  { ...common,colId:'353MN',name:'Desmognathus marmoratus',sectionLocators:[
    'PMC12510250 XML sec3 paragraphs 0–2','PMC12510250 XML sec4 paragraphs 1–3; sec5 paragraphs 0–2','PMC12510250 XML sec6 paragraphs 0–2; sec7 paragraphs 0–1','PMC12510250 XML sec8 paragraphs 0–2; sec3 paragraph 0',
  ],sections:[
    ['morphology','Twelve Virginia aquatic adults define this experiment','十二只弗吉尼亚州水生型成体限定本实验',
      'Twelve adults labelled marmoratus were collected in 2010 from Little Laurel Creek along Whitetop Road, Smyth County, Virginia, as the northern aquatic group. Aquatic individuals were located under submerged rocks in riffles. Sex was unknown; damaged tails and individuals below 50 mm snout–vent length were excluded at collection. The reported capture mean was 72.2 ± 1.23 mm snout–vent length, with dispersion labelled standard deviation. This is not the species’ complete adult size range. The comparison’s northern semi-aquatic group has unresolved species identity and is not another twelve marmoratus. Captive water conditions and food offered are not measured wild tolerance or diet.',
      '2010 年在弗吉尼亚州 Smyth County、Whitetop Road 沿线 Little Laurel Creek 采十二只标为 marmoratus 的成体，组成北方水生组，从浅滩水下石块下寻找。性别未知，采集时排除断尾及吻肛长不足五十毫米者。捕获均值报告为吻肛长 72.2 ± 1.23 毫米，离散度标为标准差；这不是完整成体体型范围。对照的北方半水生组身份未解决，不能另算十二只 marmoratus。圈养水条件及提供食物不是实测野外耐受或食性。'],
    protocol,tradeoff,interpretation,
  ]},
  { ...common,colId:'NGBSS',name:'Desmognathus amphileucus',sectionLocators:[
    'PMC12510250 XML sec3 paragraphs 0–2','PMC12510250 XML sec4 paragraphs 1–3; sec5 paragraphs 0–2','PMC12510250 XML sec6 paragraphs 0–2; sec7 paragraphs 0–1','PMC12510250 XML sec8 paragraphs 0–2; sec3 paragraph 0',
  ],sections:[
    ['morphology','Ten Georgia adults are separate from the larval stream study','十只佐治亚州成体与幼体溪流研究分开',
      'Ten adults labelled amphileucus were collected in 2010 near DeSoto Falls Recreational Area, Lumpkin County, Georgia, as the southern semi-aquatic group. Semi-aquatic animals were searched beneath rocks along the stream edge or above water in the channel. Mean capture snout–vent length was 74.9 ± 1.52 mm, dispersion explicitly labelled standard deviation. Sex was unknown, and the collection excluded tail damage and individuals below 50 mm. These adult data concern a different locality, year and stage from the 2024 Stephens County larval microhabitat survey. Neither sample supplies a full sex-specific size range or proof of a shared developmental trajectory.',
      '2010 年在佐治亚州 Lumpkin County、DeSoto Falls Recreational Area 附近采十只标为 amphileucus 的成体，组成南方半水生组，从溪边或水道内高于水面的石块下搜索。捕获时平均吻肛长 74.9 ± 1.52 毫米，离散度明确标为标准差。性别未知，采集排除断尾和低于五十毫米个体。成体数据与 2024 年 Stephens County 幼体微生境调查地点、年份及生命阶段不同。二者均不提供完整分性别体型范围，也没有证明共同发育轨迹。'],
    protocol,tradeoff,interpretation,
  ]},
])
fs.writeFileSync('docs/amphibia-content/desmognathus-locomotion-source-limits.json',JSON.stringify({
  source:'PMC12510250',doi:'10.7717/peerj.20111',year:2025,license:'CC BY 4.0',licenseUrl:common.licenseUrl,colIds:['6CNY6','353MN','NGBSS'],
  limits:[
    {kind:'unresolved-northern-semi-aquatic-group',locator:'XML sec3 paragraph 0',handling:'Twelve 2010 Virginia adults treated as Desmognathus sp.; mavrokoilius/kanawha/contact-zone mixture not resolved. Do not attribute group size, 60.6 ± .89 mm or performance to either accepted species.',candidateColIds:['V5JDV','V5JRB'],assignedToCandidateReaders:false},
    {kind:'selected-adult-measurements',locator:'XML sec3 paragraphs 0–2',handling:'10 aureatus, 10 amphileucus, 12 marmoratus, 12 unresolved =44 adults, sex unknown, tails intact and SVL≥50 mm at selection. Mean±SD explicit source label retained, not sex ranges or developmental limits. Body-length snout-to-groin model units distinguished from capture SVL.'},
    {kind:'repeated-trial-units',locator:'XML sec4 paragraphs 1–3; sec5 paragraphs 0–2; sec6 paragraph 1',handling:'Three trials per animal per medium, two blind scorers, 500 fps; average initial-three-undulation net velocity per animal not maximum performance, independent frames or endurance.'},
    {kind:'stimulus-temperature-and-motivation',locator:'XML sec3 paragraph 2; sec4 paragraphs 1–3',handling:'15 C maintenance differs from 21–22 C camera room; unmeasured forceps pinch strength and assumptions about unbiased motivation/fatigue remain limits. No field predation or survival test.'},
    {kind:'cross-sample-versus-species-result',locator:'XML sec6 paragraphs 0–2; sec7 paragraphs 0–1; sec8 paragraphs 0–2',handling:'Negative r−.571 spans all44, not independent within-species estimate. Ecomorph contrasts in both regions support proposed functional parallelism; northern identity and different comparison metrics limit extrapolation. No inherited causal mechanism or fitness established.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
