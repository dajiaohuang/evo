import fs from 'node:fs'
const common={pmc:'PMC7369190',year:2020,license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',readScope:'Materials/methods, landmark and geometric analysis, lateral/dorsal results, raw XML fossil morphology and phylogeny/ecology/shape results, morphology/phylogeny discussion and raw ecology discussion read; Table1 counts/footnotes; eight tentative Chelotriton fossils, taphonomic/estimation bounds, no independent scans/landmark or original cited ecological studies examined'}
const entries=[
  {...common,key:'chelotriton-genus',name:'Chelotriton',anchorSpeciesId:'txn:64187',target:'parent-genus',sourceConcept:'2020 Enspel and Randeck Chelotriton samples, species association tentative',sectionLocators:[
    'PMC7369190 section 0 paragraph 0; section 1 paragraph 1; section 2 paragraph 0; XML joa13201-tbl-0001 Chelotriton rows',
    'PMC7369190 XML joa13201-sec-0008 paragraphs 0–1; joa13201-sec-0009 paragraph 1; section 5 paragraph 3',
    'PMC7369190 XML joa13201-sec-0012 paragraphs 2–3; section 5 paragraph 3',
  ],sections:[
    ['fossil','Eight skulls were compared with taphonomic reconstruction limits','八个头骨比较保留埋藏重建限制',
      'The 2020 study included seven Chelotriton fossils from Enspel and one from Randeck Maar, Germany. It cites Enspel deposits at 24.8–24.6 million years and Randeck at 17–15 million years; these are locality age estimates, not species origin or extinction dates. Flattening prevented adequate three-dimensional shape comparison, so dorsal two-dimensional images were used. Enspel crania underwent specimen-specific algorithmic symmetrization; the apparently symmetric Randeck sample did not. Across the fossil landmark dataset, 105 of 672 positions were missing and estimated, with two specimens accounting for 50 and 44. The reconstructed shapes are analytical approximations, not undeformed original anatomy.',
      '2020 年研究含德国 Enspel 七个 Chelotriton 化石和 Randeck Maar 一个。引述 Enspel 沉积距今 24.8–24.6 百万年，Randeck 为十七至十五百万年；这是地点年代估计，不是物种起源或灭绝。压扁使充分三维形状比较不可行，故使用背面二维图像。Enspel 头骨按各标本进行算法对称化，表观对称的 Randeck 样本未处理。化石标志点数据 672 个位置中 105 个缺失并估计，两标本分别占五十、四十四。重建形状是分析近似，不是未变形原解剖。'],
    ['morphology','Different deposits occupy different shape regions without resolving species','不同地点形状位置不同但未解决种界',
      'Enspel and Randeck skulls occupied different regions of the analysed morphospace. Enspel was closer to Yaotriton and Echinotriton in the authors’ comparisons, while Randeck lay between the Tylototriton and Pleurodeles regions on the displayed axes. Morphological similarity does not itself establish a direct ancestor or a definitive sister lineage. The lone Randeck specimen was excluded from post-hoc species comparisons because of sample size. The paper proposes different fossil species as an explanation but retains tentative paradoxus assignments and emphasizes further revision. Centroid size compares landmark configurations, not measured adult body length or mass.',
      'Enspel 与 Randeck 头骨在分析形态空间占不同区域。作者比较中 Enspel 更近 Yaotriton、Echinotriton，展示轴上 Randeck 处于 Tylototriton 与 Pleurodeles 区域之间。形态相似本身不建立直接祖先或确定姐妹支系。Randeck 单标本因样本量排除于事后种级比较。论文提出不同化石种为解释，但保留暂定 paradoxus 归属，并强调继续修订。质心大小比较标志点配置，不是实测成年体长或体重。'],
    ['ecology','Climate and terrestrial-life suggestions remain comparative hypotheses','气候及陆生建议仍是比较假说',
      'The article cites palaeoclimate estimates of approximately 24 °C mean annual temperature for Randeck and 15–17 °C for Enspel. These locality-level reconstructions are not this animal’s preferred temperature, body temperature or physiological tolerance. No cranial adaptation to the tested biome categories was detected, which does not show that climate had no biological effect. Resemblance to living land-mating and land-egg-laying newts motivates a more terrestrial interpretation for some Chelotriton material; no fossil courtship or egg deposition was directly observed. This concerns different samples from the separately described aquatic MB.Am.45, whose unresolved species identity is retained.',
      '文章引述 Randeck 年均古温约二十四摄氏度、Enspel 十五至十七摄氏度。这些地点重建不是该动物偏好温度、体温或生理耐受。对所测生物群系类别未检出头骨适应，不证明气候没有生物效应。与现生陆地交配及陆地产卵蝾螈相似，促成部分 Chelotriton 更陆生的解释；没有直接观察化石求偶或产卵。这涉及不同于另述水生 MB.Am.45 的样本，后者未解决种级身份继续保留。'],
  ]},
  {...common,key:'paradoxus',name:'Chelotriton paradoxus',anchorSpeciesId:'txn:64187',target:'species',sourceConcept:'2020 tentative Enspel/Randeck paradoxus association, not certified species equivalence',sectionLocators:[
    'PMC7369190 section 0 paragraph 0; section 5 paragraph 3; XML joa13201-sec-0008 paragraphs 0–1',
    'PMC7369190 section 1 paragraph 1; section 2 paragraph 0; XML joa13201-sec-0009 paragraph 1; joa13201-sec-0012 paragraphs 2–3',
  ],sections:[
    ['taxonomy','The 2020 study labels its paradoxus association tentative','2020 年研究将 paradoxus 关联标为暂定',
      'Seven Enspel fossils and one Randeck fossil were tentatively associated with paradoxus, following cited earlier work. Their differing skull shapes prompted the suggestion that the deposits may contain different species, and the authors state that named Chelotriton species await validation. Consequently, the study’s pooled fossil shape and size comparisons cannot be certified as a single paradoxus population trait. This preserves the earlier 2015 concerns about historical assignments rather than silently treating a later citation as final identity confirmation.',
      '依引述较早工作，Enspel 七个、Randeck 一个化石暂与 paradoxus 关联。不同头骨形状促成两地点或含不同种的建议，作者记具名 Chelotriton 种仍待验证。因此所合并化石形状及大小比较不能认证为单一 paradoxus 种群性状。这保留 2015 年对历史归属的疑问，不把较晚引用悄然当作最终身份确认。'],
    ['fossil','Deposit ages and reconstructed skulls have distinct evidence roles','沉积年代与重建头骨具有不同证据角色',
      'The cited 24.8–24.6-million-year Enspel interval and 17–15-million-year Randeck interval date the sampled deposits. They do not show continuous occupation by one species between those ages. Shape analysis included estimated missing landmarks and symmetrization of distorted Enspel fossils, and post-hoc comparisons omitted the single Randeck sample. Palaeoclimate and terrestrial-life interpretations belong to the comparative study, not independently established paradoxus thermal limits or directly preserved reproductive behaviour.',
      '引述 Enspel 24.8–24.6 百万年及 Randeck 十七至十五百万年区间是所采沉积年代，不证明同一种在两年代间连续占据。形状分析包含缺失标志点估计及变形 Enspel 化石对称化，事后比较排除 Randeck 单样本。古气候及陆生解释属于比较研究，不是独立建立的 paradoxus 耐温或直接保存繁殖行为。'],
  ]},
]
const file='docs/amphibia-content/primary-fossil-authoring-input.json'
const prior=JSON.parse(fs.readFileSync(file))
for(const entry of entries){const i=prior.findIndex(x=>x.pmc===entry.pmc&&x.key===entry.key);if(i<0)prior.push(entry);else prior[i]=entry}
fs.writeFileSync(file,JSON.stringify(prior,null,2)+'\n')
fs.writeFileSync('docs/amphibia-content/chelotriton-cranial-morphometrics-source-limits.json',JSON.stringify({source:common.pmc,doi:'10.1111/joa.13201',year:2020,license:common.license,licenseUrl:common.licenseUrl,
  limits:[
    {kind:'tentative-species-and-sample-units',locator:'section 0 paragraph 0; XML Table1 Chelotriton rows; section 5 paragraph 3',handling:'7Enspel1Randeck8fossils, tentativeparadoxusassignment;differences mayrepresentdifferentspecies. Deposit24.8–24.6Maand17–15Ma intervals not lineageorigin/extinction orcontinuous speciespresence. Randeck singletonexcludedfromposthoc.'},
    {kind:'taphonomy-and-estimated-landmarks',locator:'section 1 paragraph 1; section 2 paragraph 0',handling:'2Dcomparisonsbecausedeformationprecludesadequate3D;Enspelalgorithmicsymmetrization,notRandeck.105/672missinglandmarks,50and44intwospecimens. Algorithmsnottruthrecovery orfullcompleteanatomy.'},
    {kind:'shape-size-and-ecology-boundaries',locator:'XML joa13201-sec-0008 paragraphs 0–1; joa13201-sec-0009 paragraph 1; joa13201-sec-0012 paragraphs 2–3',handling:'Morphospacepositionsnotdefinitivesistertreeorancestor;centroidsize notbodylength/mass. PalaeoMATnotphysiologicaltolerance. Terrestrial/reproductivelife analogy not observedfossileggs/mating;separatefromMB.Am.45aquaticinterpretation.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
console.log(JSON.stringify({readersPrepared:entries.length,sectionsPrepared:5,testsRun:false}))
