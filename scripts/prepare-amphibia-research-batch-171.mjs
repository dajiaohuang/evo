import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
// Measurements transcribed from the read XML Tables 1–3, not generated from taxon names.
const rows=[
 ['MDNN','Bolitoglossa chinanteca',60.2,43.7,19.17,9.420,9.749,'small'],
 ['MDPF','Bolitoglossa flaviventris',55.5,70.3,18.61,9.395,9.211,'large'],
 ['MDQF','Bolitoglossa macrinii',52.8,81.2,15.37,6.643,8.725,'large'],
 ['MDQN','Bolitoglossa mexicana',57.8,76.3,15.78,8.166,7.607,'large'],
 ['MDR7','Bolitoglossa occidentalis',58.6,56.1,17.67,7.762,9.906,'small'],
 ['MDRL','Bolitoglossa platydactyla',59.9,69.6,19.96,9.741,10.214,'large'],
 ['MDRY','Bolitoglossa rufescens',59.1,39.5,17.49,7.604,9.885,'small'],
 ['MDSD','Bolitoglossa stuarti',56.4,87.2,17.06,7.174,9.886,'large'],
 ['68MX3','Bolitoglossa veracrucis',56.0,34.9,15.97,7.314,8.657,'small'],
 ['MDSZ','Bolitoglossa yucatana',49.7,60.1,14.77,8.430,6.331,'large'],
 ['5Y6M9','Chiropterotriton dimidiatus',62.9,30.3,15.81,3.329,12.478,'dimidiatus'],
 ['5Y6LB','Chiropterotriton priscus',45.3,32.9,11.41,5.682,5.727,'priscus'],
 ['56KSX','Thorius lunaris',74.8,24.9,13.90,9.534,4.276,'thorius-small'],
 ['56KT7','Thorius narisovalis',73.3,22.9,15.95,10.706,3.811,'thorius-small'],
 ['56KTG','Thorius spilogaster',73.8,23.4,14.51,10.020,4.405,'thorius-small'],
 ['56KTH','Thorius tlaxiacus',65.6,28.9,13.49,9.798,3.506,'tlaxiacus'],
]
const histories={
 large:[
 'The authors place this species among six Bolitoglossa with broad ERV divergence peaks at Kimura two-parameter distances of 20–26. Ty3/Gypsy peaks in this group generally occur around 23–28; platydactyla instead has a reported bimodal pattern around 18 and 28. These distances are differences between reads and repeat consensus sequences, not millions of years. No conspicuous ongoing expansion was evident in the larger-genome profiles, which is not proof that all transposition has ceased.',
 '作者把本种列入六个 Bolitoglossa，其 ERV 分化广峰在 Kimura 双参数距离 20–26。该组 Ty3/Gypsy 峰通常约 23–28；platydactyla 则报告约 18 与 28 的双峰。距离是读段与重复共识序列差异，不是百万年。较大基因组谱未显明显持续扩张，不等于全部转座活动已停止。'],
 small:[
 'The study places this species among four Bolitoglossa with ERV peaks at Kimura distances of 11–13, lower than the main peaks in the six larger-genome Bolitoglossa. Their Gypsy/Ty3 profiles have lower, broader peaks extending to smaller distances; rufescens has a reported additional low-distance peak. These are relative sequence-divergence histories, not absolute dates or direct observed insertion rates. The study could not distinguish element deletion from more effective silencing.',
 '研究把本种列入四个 Bolitoglossa，其 ERV 峰为 Kimura 距离 11–13，低于六个较大基因组 Bolitoglossa 的主峰。其 Gypsy/Ty3 谱峰较低、较宽并延伸至较小距离；rufescens 另报低距离峰。这是相对序列分化历史，不是绝对日期或直接观察插入率；研究不能区分元件删除与较有效沉默。'],
 dimidiatus:[
 'Dimidiatus lacked or nearly lacked the older high-distance ERV peak found in priscus and the larger Bolitoglossa. A lower ERV peak occurred below distance four, while the principal Gypsy/Ty3 peak was around thirteen. Several repeat superfamilies included reads below distance one, which the authors interpret as evidence of recent or ongoing expansion. This indirect divergence evidence is not a direct transposition experiment, and neutral mutation rates were insufficient to date events absolutely.',
 'dimidiatus 缺失或近乎缺失 priscus 及较大 Bolitoglossa 的旧高距离 ERV 峰；较低 ERV 峰在距离四以下，Gypsy/Ty3 主峰约十三。若干重复超家族有距离一以下读段，作者解释为近期或持续扩张证据。这种间接分化证据不是直接转座实验，中性突变率也不足以绝对定年。'],
 priscus:[
 'Priscus shared an older ERV divergence peak with larger-genome Bolitoglossa and had a Gypsy/Ty3 peak around Kimura distance twenty-seven. That contrasts with lower-distance peaks in dimidiatus. The comparison supports different repeat histories within the sampled genus, without establishing exact elapsed years, a body-size effect or a causal regulatory mechanism. Inferred common-ancestor expansion and lineage-specific silencing or deletion remain interpretations.',
 'priscus 与较大基因组 Bolitoglossa 共享较旧 ERV 分化峰，Gypsy/Ty3 峰约 Kimura 距离二十七，与 dimidiatus 较低距离峰对照。比较支持所采属内不同重复历史，但不确立精确年数、体型效应或因果调控机制。共同祖先扩张及支系特异沉默、删除仍属解释。'],
 'thorius-small':[
 'The study groups lunaris, narisovalis and spilogaster as the three smaller-genome Thorius. Their ERV peaks were below Kimura distance four, with low-distance reads in several superfamilies interpreted as recent or ongoing expansion. Gypsy activity was comparatively weak. These repeat-distance profiles do not measure an insertion rate, date an evolutionary event in years or demonstrate the deletion/silencing mechanism; one sequenced specimen per species limits population generalization.',
 '研究把 lunaris、narisovalis、spilogaster 归三个较小基因组 Thorius；ERV 峰在 Kimura 距离四以下，若干超家族低距离读段解释为近期或持续扩张，Gypsy 活动相对弱。重复距离谱不测插入率、不按年定演化事件，也不证明删除或沉默机制；每种一个测序标本限制种群推广。'],
 tlaxiacus:[
 'Tlaxiacus had the largest Table 1 C-value among the four sampled Thorius and an ERV peak around Kimura distance nine, older in relative divergence than the peaks below four in its sampled congeners. The authors describe little to no evident ongoing activity in that profile. This is a comparative repeat-landscape interpretation, not a chronological date or proof that every individual is inactive. Deletion rates were not estimated, so deletion and silencing alternatives remain unresolved.',
 'tlaxiacus 的表一 C 值为所采四个 Thorius 最大，ERV 峰约 Kimura 距离九，相对分化上较同属样本四以下峰更旧。作者描述该谱少有或未见明显持续活动。这是比较重复景观解释，不是历年日期或证明每个个体都无活动。研究没有估删除率，删除与沉默替代解释仍未解决。'],
}
prepareAmphibianResearchInput(rows.map(([colId,name,total,pg,ltr,erv,gypsy,history])=>({
 colId,name,pmc:'PMC11562844',year:2024,license:'CC BY-NC 4.0',licenseUrl:'https://creativecommons.org/licenses/by-nc/4.0/',
 readScope:'Results and Tables 1–3, genome-size and sequencing methods, four-species assembly/library construction, repeat masking/diversity methods, abundance/size/activity results, genome-size and repeat-history discussion read; no original reads/assemblies or supplementary voucher/landscape matrices independently analysed',
 sectionLocators:[
 'PMC11562844 XML msae225-T1 named species row; msae225-s5.1 paragraph 0; msae225-s5.2 paragraph 0; msae225-s5.4 paragraph 0',
 'PMC11562844 XML msae225-T1, T2, T3 named species rows; msae225-s2 paragraph 2; msae225-s3.1 paragraph 2',
 'PMC11562844 XML msae225-s2.4 paragraphs 0–1; msae225-s3.2 paragraphs 0–1; msae225-s5.4 paragraph 1',
 ],sections:[
 ['evolution','One sequenced individual and a separate DNA-content estimate','一个测序个体与另行估计的 DNA 含量',
 `The study extracted liver DNA from one ${name} specimen as part of a sixteen-species, three-genus comparison, targeting ten gigabases of short-read data per species. Repeat analysis randomly sampled merged reads at roughly 0.1-fold coverage. Table 1 gives a genome C-value estimate of ${pg} picograms, based on blood-smear densitometry and species means from earlier genome-size work. Picograms of DNA are not gigabases, body mass or a complete genome assembly; the sequenced individual and the species-mean DNA-content estimate have different evidence roles. The sample does not determine variation among sexes, populations or ages.`,
 `研究从一个 ${name} 标本提取肝 DNA，属于十六种、三个属比较，每种目标十 Gb 短读数据。重复分析随机抽合并读段，约 0.1 倍覆盖。表一基因组 C 值估计为 ${pg} 皮克，依据血涂片密度测定及较早基因组工作物种均值。DNA 皮克不是 Gb、体重或完整基因组组装；测序个体与物种平均 DNA 含量有不同证据用途。样本不确定性别、种群或年龄变异。`],
 ['evolution','Detected repeat abundance is a method-dependent lower estimate','可检出重复丰度是依赖方法的偏低估计',
 `Table 1 reports ${total}% detectable repeat abundance for ${name}, including uncategorized repeats. Table 2 reports LTRs at ${ltr}%, and Table 3 separates ERV at ${erv}% from Ty3/Gypsy at ${gypsy}%. These are percentages of sampled bases identified by the study's repeat library, not percentages of animals, newly inserted elements or measured gene expression. Mutation can degrade repeats beyond recognition; the authors regard short-read masking as likely underestimating true repetitive content. Rounded table categories need not sum exactly, and uncategorized repeats should not be silently assigned to a known TE superfamily.`,
 `表一报告 ${name} 可检出重复丰度 ${total}%，含未分类重复。表二 LTR 为 ${ltr}%，表三区分 ERV ${erv}%、Ty3/Gypsy ${gypsy}%。这是研究重复库鉴认的所抽碱基比例，不是动物比例、新插入元件比例或已测基因表达。突变可使重复退化至无法识别；作者认为短读遮蔽可能低估真实重复含量。四舍五入表类不必精确相加，未分类重复不能默归已知转座超家族。`],
 ['evolution','Repeat divergence suggests relative expansion histories','重复分化提示相对扩张历史',...histories[history]],
 ],
})))
fs.writeFileSync('docs/amphibia-content/neotropical-salamander-transposable-elements-source-limits.json',JSON.stringify({source:'PMC11562844',doi:'10.1093/molbev/msae225',year:2024,license:'CC BY-NC 4.0',licenseUrl:'https://creativecommons.org/licenses/by-nc/4.0/',
 speciesMeasurements:rows.map(([colId,name,total,pg,ltr,erv,gypsy,history])=>({colId,name,table1DetectedRepeatsPercent:total,table1CValuePg:pg,table2LTRPercent:ltr,table3ERVPercent:erv,table3GypsyPercent:gypsy,reportedHistoryGroup:history})),
 limits:[
 {kind:'sampling',locator:'XML msae225-s5.1–5.4',handling:'One liver specimen per16species/10Gb target; roughly0.1x sampled merged reads. GenomeCvalues bloodsmear FIAD/speciesmean earlierwork, not complete assemblies or bodymass. Onlyfour assembled species supply combined repeatlibrary; not16fullgenomes. Supplementary voucher mapping not independently checked.'},
 {kind:'denominator',locator:'XML msae225-T1–T3; msae225-s2 paragraph2; msae225-s3.1 paragraph2',handling:'Detectable maskedbases/sampledbases includes noCat, not all true repeats; shortreads unable doublemask wholegenome; mutation-degraded unknown repeats likelymissing. Rounding cross-table variation preserved, not forced sums.'},
 {kind:'source-size-inconsistencies',locator:'XML msae225-s5.3 paragraph0; msae225-T1; msae225-s3.1 paragraphs0,2',handling:'Methods callsrufescens smallestBolitoglossa forassembly butTable1veracrucis34.9pg<rufescens39.5pg. Discussion claimsallBolitoglossa>40Gb conflicts Table1/Resultsrufescens~38.6Gb. Discussionsmallest22.9Gb versusTable1narisovalis22.9pg andResults~22.3Gb; do not equate pg/Gb or certify erroneous minima.'},
 {kind:'source-class-II-inconsistency',locator:'XML msae225-s2 paragraph2; msae225-T1 dimidiatus row',handling:'TextdimidiatusClassII3.8% versusTable13.7%; no universalcorrectedvalue asserted.'},
 {kind:'relative-history',locator:'XML msae225-s2.4; msae225-s3.2; msae225-s5.4 paragraph1',handling:'K2Pcopy-consensusdivergence notabsoluteMyr. Recent/ongoingexpansion inferred notdirectinsertion/transcription assay. No neutralrateabsoluteclock or deletionrate; silencing/deletionunresolved. No detected ongoing activity not zeroeveryindividual.'},
 {kind:'phylogenetic-comparison',locator:'XML msae225-s2.3 paragraph0',handling:'Across16species identifiable-repeat/diversity versusgenomesize associations do not establish within-species mechanism. ClassII/noCat separate unadjusted associations lose significance inPGLS; do not reportallclassesphylogeneticallysignificant.'},
 ],fullArticleReadCertified:false,biologicalCoverageComplete:false},null,2)+'\n')
