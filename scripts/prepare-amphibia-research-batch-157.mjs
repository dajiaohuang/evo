import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const tyl = {
  pmc:'PMC12776023',year:2025,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Sampling, raw XML sequencing/assembly/tree methods and protein-coding results, extracted genome organization/RNA/control-region/phylogeny results and discussion read; one individual per newly sequenced species; published assembly/accession labels only, no independent sequence retrieval, assembly validation or population/genus completeness',
}
const organization = ['evolution','A conventional mitochondrial gene complement in one assembly','一个组装中的常见线粒体基因组成',
  'Both new assemblies were annotated as containing thirteen protein-coding genes, twenty-two transfer RNAs and two ribosomal RNAs: thirty-seven genes, plus a noncoding control region. Most genes lie on one strand; ND6 and eight tRNAs lie on the opposite strand. The source predicts tRNA secondary structures computationally, including loss of the D-arm in tRNA-Ser2. These are assembly annotations and predicted RNA structures, not experimentally measured gene expression, metabolic performance or a whole nuclear genome. The biological consequences of small sequence and gene-length differences remain unresolved.',
  '两个新组装均注释有十三个蛋白编码基因、二十二个转运 RNA、两个核糖体 RNA，共三十七个基因，另有非编码控制区。多数基因在一条链上，ND6 及八个 tRNA 在另一条链。来源通过计算预测 tRNA 二级结构，包括 tRNA-Ser2 缺少 D 臂。这些是组装注释及预测 RNA 结构，不是实验测定的基因表达、代谢表现或完整核基因组。细微序列及基因长度差异的生物学后果仍未解决。']
const bounds = ['conservation','Assembly resources support future assays rather than validated monitoring','组装资源支持未来检测，并非已验证监测',
  'The authors propose using mitochondrial regions such as ND2 or COX1 to develop species-specific environmental-DNA assays. They did not validate detection sensitivity, cross-species specificity or field occupancy estimates for these two species. One individual per species cannot characterize geographic haplotype variation, heteroplasmy or population diversity. Short-read assembly could include nuclear mitochondrial pseudogenes; the paper recommends further read-coverage and PCR–Sanger checks, especially for repetitive and control regions. Genetic resources therefore supplement future conservation work without establishing current threat categories, complete ranges or successful interventions.',
  '作者提出利用 ND2、COX1 等线粒体区段开发物种特异环境 DNA 检测，但没有验证这两种的检出灵敏度、跨物种特异性或野外占域估计。每种一个体不能刻画地理单倍型变异、异质性或种群多样性。短读长组装可能包含核内线粒体假基因；论文建议进一步做读段覆盖及 PCR–Sanger 检查，特别针对重复及控制区。遗传资源可补充未来保护工作，但没有确立当前威胁类别、完整分布或干预成功。']
prepareAmphibianResearchInput([
  {...tyl,colId:'7DBLC',name:'Tylototriton anguliceps',sectionLocators:[
    'PMC12776023 section 1 paragraph 0; section 2 paragraph 0; section 5 paragraph 3; XML SECID0ECFAE paragraphs 0–1; SECID0EOFAE paragraph 0',
    'PMC12776023 section 2 paragraph 0; section 3 paragraphs 1–2; section 5 paragraph 0',
    'PMC12776023 section 4 paragraphs 0–3; section 5 paragraph 1; XML SECID0EMGAE paragraph 0',
    'PMC12776023 section 5 paragraphs 2–4',
  ],sections:[
    ['evolution','A single Vietnamese specimen yielded the reported mitogenome','一个越南标本产生所报告线粒体组装',
      'One anguliceps specimen from Xuan Nha Nature Reserve, Son La Province, Vietnam, supplied liver DNA for short-read Illumina sequencing and MitoZ assembly and annotation. The reported circular mitogenome is 16,720 base pairs, deposited under PX673615; its control region is reported as 736 base pairs. These lengths and accession labels describe that specimen’s published assembly, not an invariant species-wide genome or a sequence independently downloaded and validated here. This collection record adds a sampled locality without supplying a complete geographic range.',
      '越南 Son La 省 Xuan Nha 自然保护区一个 anguliceps 标本提供肝脏 DNA，进行 Illumina 短读长测序及 MitoZ 组装、注释。论文报告环状线粒体基因组 16,720 碱基对，提交编号 PX673615；控制区报告为 736 碱基对。这些长度和编号描述该标本的已发表组装，不是物种内恒定基因组，也不是这里独立下载验证的序列。该采集记录增加一个所采地点，没有提供完整地理分布。'],
    organization,
    ['evolution','Marker-dependent placement within a sparsely sampled genus','属内采样有限且依标记而异的系统位置',
      'A concatenated thirteen-protein-coding-gene analysis placed anguliceps in a clade sharing ancestry with verrucosus and shanjing. The separate 16S–ND2 analysis grouped the sampled anguliceps with other anguliceps and reported a sister relationship to phukhaensis and uyenoi. These describe different marker and taxon samples; they are not interchangeable statements of an exhaustively resolved nearest relative. The paper analysed 21 mitogenomes including outgroups, with genus coverage described as fifteen of forty-three recognized species at publication. Its tree is mitochondrial evidence, not an independent nuclear species tree or certification of all catalogue concepts.',
      '十三个蛋白编码基因串联分析将 anguliceps 放在与 verrucosus、shanjing 共享祖先的一支。另行 16S–ND2 分析把所采 anguliceps 与其他 anguliceps 聚类，并报告与 phukhaensis、uyenoi 的姐妹关系。这些来自不同标记及类群样本，不能互换为全面解决最近亲缘种的结论。论文分析含外群的二十一个线粒体组装，并说明发表时覆盖属内所承认四十三种中的十五种。所得树是线粒体证据，不是独立核物种树，也没有认证所有目录概念。'],
    bounds,
  ]},
  {...tyl,colId:'TNJJT',name:'Tylototriton ngoclinhensis',sectionLocators:[
    'PMC12776023 section 1 paragraph 0; section 2 paragraph 0; section 5 paragraph 3; XML SECID0ECFAE paragraphs 0–1; SECID0EOFAE paragraph 0',
    'PMC12776023 section 2 paragraph 0; section 3 paragraphs 1–2; section 5 paragraph 0',
    'PMC12776023 section 4 paragraphs 0–3; section 5 paragraph 1; XML SECID0EMGAE paragraph 0',
    'PMC12776023 section 5 paragraphs 2–4',
  ],sections:[
    ['evolution','A new mitogenome is distinct from the corrected original ND2 labels','新线粒体组装与已更正原 ND2 编号分开',
      'One specimen collected at Ngoc Linh Mountain, reported as the type locality in Quang Ngai Province, Vietnam, supplied liver DNA for Illumina sequencing and MitoZ assembly and annotation. The reported circular mitogenome is 16,260 base pairs, deposited under PX673616, with a 735-base-pair control region. This new assembly accession is distinct from the LC757221–LC757223 ND2 labels corrected in the original-description corrigendum. The study does not add a population sample or independent verification of the downloaded accession records here, and its administrative locality wording is retained as recorded rather than used to rewrite earlier locality evidence.',
      '越南 Ngoc Linh Mountain 一个标本提供肝脏 DNA，来源记为 Quang Ngai 省模式产地，进行 Illumina 测序及 MitoZ 组装、注释。论文报告环状线粒体基因组 16,260 碱基对，提交编号 PX673616，控制区 735 碱基对。这个新组装编号与原描述勘误更正的 LC757221–LC757223 ND2 编号分开。本研究没有增加种群样本，也没有在这里独立验证下载编号记录；行政产地措辞按来源保留，不据此改写此前产地证据。'],
    organization,
    ['evolution','Mitochondrial grouping depends on the sampled comparison','线粒体归簇依赖所采比较范围',
      'In the thirteen-protein-coding-gene analysis, ngoclinhensis and vietnamensis were described as early-diverging branches within Yaotriton. The separate 16S–ND2 comparison grouped specimen TY000002 with earlier ngoclinhensis ND2 samples IEBR A.5130 and A.5131. This supports the authors’ identification within their marker sample; it is not a divergence date, an assertion that living species are ancestral, or a fully sampled species tree. The paper discusses re-identifying another accession, KR733683, from wenxianensis to maolanensis; that is a source-proposed reassignment of a different taxon and does not authorize changing ngoclinhensis evidence or the pinned catalogue.',
      '十三个蛋白编码基因分析将 ngoclinhensis、vietnamensis 描述为 Yaotriton 内较早分化分支。另行 16S–ND2 比较把 TY000002 与较早 ngoclinhensis ND2 样本 IEBR A.5130、A.5131 聚类。这支持作者在所采标记中的鉴定，不是分化日期、现生物种为祖先的判断或完整采样的物种树。论文讨论将另一编号 KR733683 从 wenxianensis 重新鉴定为 maolanensis；这是不同类群的来源建议重归，不能用来改变 ngoclinhensis 证据或固定目录。'],
    bounds,
  ]},
  {colId:'Q37W5',name:'Hynobius notialis',pmc:'PMC12673973',year:2025,license:'CC BY-NC 4.0',licenseUrl:'https://creativecommons.org/licenses/by-nc/4.0/',
    readScope:'Introduction, Materials and methods, raw XML Results S0003 and Discussion/conclusion read; one vouchered March 2021 specimen; mitochondrial annotation and ML placement source claims only, no sequence or assembly reanalysis, dated range/status background separately attributed',
    sectionLocators:[
      'PMC12673973 section 1 paragraphs 0–1',
      'PMC12673973 XML S0003 paragraph 0; section 1 paragraphs 1–2',
      'PMC12673973 section 1 paragraph 2; XML S0003 paragraph 0; section 2 paragraph 0',
      'PMC12673973 XML S0001 paragraphs 0–1; section 2 paragraph 0',
    ],sections:[
      ['evolution','A vouchered Hadong specimen underlies this sequence','Hadong 凭证标本是本序列依据',
        'The specimen was collected on 19 March 2021 at Bukcheon-myeon, Hadong-gun, Gyeongsangnam-do, Republic of Korea, and deposited as cgrb16302, field ID mms11038, at the Conservation Genome Resource Bank for Korean Wildlife. Species identification was reconfirmed with cytochrome-b sequences. Tail tissue supplied DNA for paired-end Illumina sequencing, GetOrganelle assembly and MITOS annotation with manual curation. A single voucher and collection locality do not estimate population diversity or delimit the whole distribution. Laboratory library sizes and sequencing yield are not animal body measurements.',
        '标本于 2021 年 3 月 19 日采自韩国 Gyeongsangnam-do 的 Hadong-gun、Bukcheon-myeon，存于韩国野生动物 Conservation Genome Resource Bank，凭证号 cgrb16302、野外号 mms11038。通过细胞色素 b 序列复核物种鉴定。尾组织 DNA 用于 Illumina 双端测序、GetOrganelle 组装及 MITOS 注释并人工校订。单凭证及采集点不能估计种群多样性或界定全分布；实验文库尺寸和测序产量不是动物体测。'],
      ['evolution','The reported 16,408-base-pair assembly is a mitochondrial resource','报告的 16,408 碱基对组装是线粒体资源',
        'The source reports a complete 16,408-base-pair mitochondrial assembly under PX412262, with thirteen protein-coding genes, twenty-two tRNAs, two rRNAs and a noncoding control region. ND6 and eight tRNAs lie on the light strand; the remaining genes and control region are reported on the heavy strand. Base composition is A 33.6%, T 32.0%, C 20.7% and G 13.6%; the rounded values need not sum to exactly 100%. These are source-reported annotations and rounded composition, not whole-genome size, experimentally established gene function or an independently downloaded and validated sequence.',
        '来源报告完整线粒体组装 16,408 碱基对，编号 PX412262，含十三蛋白编码基因、二十二 tRNA、二 rRNA 及非编码控制区。ND6 和八个 tRNA 在轻链，其余基因及控制区报告在重链。碱基组成为 A 33.6%、T 32.0%、C 20.7%、G 13.6%，舍入值不必恰好合计百分之一百。这是来源注释及舍入组成，不是全基因组大小、实验确认的基因功能或独立下载验证序列。'],
      ['evolution','The sampled mitochondrial tree placed notialis near unisacculus','所采线粒体树将 notialis 放在 unisacculus 附近',
        'The maximum-likelihood analysis used eleven mitogenomes: ten Hynobius species and Onychodactylus fischeri as outgroup, with 1,000 bootstrap replicates. The reported tree placed notialis closest to unisacculus, in a clade also containing quelpaertensis, within a broader sampled Korean Hynobius group. It was not a comparison of every Hynobius species, nor did it integrate an independent nuclear genome. The Discussion interprets Korean grouping as compatible with limited gene flow after diversification, but this tree did not directly measure gene flow. Maternal inheritance, introgression and substitution saturation remain acknowledged mitochondrial limitations.',
        '最大似然分析使用十一个线粒体组装：十种 Hynobius 及外群 Onychodactylus fischeri，进行一千次 bootstrap 重采样。所报告树将 notialis 放在最近 unisacculus 的位置，与 quelpaertensis 组成一支，属于更广的所采韩国 Hynobius 组。这不是所有 Hynobius 的比较，也未整合独立核基因组。讨论将韩国归簇解释为分化后有限基因流相容，但树没有直接测量基因流。母系遗传、渐渗及替换饱和仍是来源承认的线粒体限制。'],
      ['conservation','Restricted-range and threat statements are dated background','狭域及威胁陈述属于有日期背景',
        'The Introduction cites the 2021 description for occurrence along the southern Korean Peninsula and a narrow extent of occurrence, and cites IUCN 2023 for a Vulnerable category. These are attributed historical statements, not a newly mapped range or independently checked current assessment. The single-sequence study proposes value for future evolutionary and conservation research without measuring habitat loss, population trend or intervention success. This preserves the original-description reader’s separate dated Endangered proposal rather than silently replacing it with an undated definitive category.',
        '引言引用 2021 年描述，记分布于朝鲜半岛南缘及出现范围狭窄，并引 IUCN 2023 的易危类别。这些是归属明确的历史陈述，不是新绘分布或独立核对的当前评估。单序列研究提出未来演化及保护研究价值，没有测量栖息地损失、种群趋势或干预效果。原描述页面另有注明日期的濒危建议，保留为独立证据，不悄然替换成无日期确定类别。'],
    ],
  },
])
fs.writeFileSync('docs/amphibia-content/newt-mitogenomes-2025-source-limits.json',JSON.stringify({
  sources:[{pmc:'PMC12776023',doi:'10.3897/zookeys.1265.171020',year:2025,license:'CC BY 4.0',colIds:['7DBLC','TNJJT']},{pmc:'PMC12673973',doi:'10.1080/23802359.2025.2597137',year:2025,license:'CC BY-NC 4.0',colIds:['Q37W5']}],
  limits:[
    {kind:'single-individual-and-assembly',locator:'PMC12776023 section 5 paragraph 3; PMC12673973 section 1 paragraph 0',handling:'One specimen per newly sequenced species; assembly/accession labels published, not independently sequence-verified. No population diversity, heteroplasmy, nuclear species-tree or full distribution certification.'},
    {kind:'mitochondrial-partitions-and-sampling',locator:'PMC12776023 XML SECID0EMGAE paragraph 0; section 4 paragraphs 0–3; section 5 paragraph 1',handling:'Methods nineteen species versus Results twenty-one mitogenomes and fifteen of forty-three genus species are different stated units. PCG and 16S–ND2 placements not interchangeable exhaustive sister relationships; retain marker scope. KR733683 reassignment source proposal for another taxon, no pinned catalogue mutation.'},
    {kind:'protein-codon-conflicts',locator:'PMC12776023 XML SECID0EFPBG paragraphs 1, 3',handling:'ND3 stop-codon statements conflict internally: paragraph first contrasts incomplete anguliceps with TAA ngoclinhensis, then lists ND3 among remaining incomplete genes. GUA described both as Val and Ser1. Omit conflicted claims from certified biological conclusions, retain text as source uncertainty.'},
    {kind:'predicted-function-and-future-assays',locator:'PMC12776023 section 3 paragraph 1; section 5 paragraphs 0, 2–4',handling:'tRNA secondary structures computational; functional significance unresolved. Proposed eDNA assays not validated for sensitivity/specificity. Short-read pseudogene/artifact and repeat-region validation limitations remain explicit.'},
    {kind:'dated-status-and-tree-interpretation',locator:'PMC12673973 XML S0001 paragraphs 0–1; S0003 paragraph 0; section 2 paragraph 0',handling:'2023 Vulnerable citation separate from original 2021 Endangered proposal; no current assessment check. Korean mitochondrial clade not direct gene-flow measurement. Five of seven Korean species coverage not exhaustive genus sampling; rounded base percentages sum 99.9, not silently altered.'},
    {kind:'distinct-accession-and-locality-history',locator:'PMC12776023 section 1 paragraph 0; section 2 paragraph 0',handling:'PX673616 new mitogenome distinct from corrected LC757221–223 original ND2 labels. Quang Ngai administrative wording retained as recorded, not silent rewrite of earlier locality evidence.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
