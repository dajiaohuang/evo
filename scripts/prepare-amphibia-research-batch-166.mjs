import fs from 'node:fs'
const common={pmc:'PMC4589347',year:2015,license:'CC BY (version not explicit in XML)',licenseUrl:'https://creativecommons.org/licenses/by/',readScope:'Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined'}
const entries=[
  {...common,key:'chelotriton-genus',name:'Chelotriton',anchorSpeciesId:'txn:64187',target:'parent-genus',sourceConcept:'Chelotriton sp. specimen MB.Am.45, Orsberg; not assigned to accepted species',sectionLocators:[
    'PMC4589347 XML sec008 paragraph 0; sec009 paragraph 2; sec020 paragraph 0',
    'PMC4589347 XML sec011 paragraph 0',
    'PMC4589347 XML sec012 paragraphs 0–2, 7, 9; sec020 paragraphs 1, 8',
    'PMC4589347 XML sec014 paragraphs 0–3',
    'PMC4589347 XML sec013 paragraphs 2–4; sec019 paragraphs 0–6',
    'PMC4589347 XML sec019 paragraphs 4, 6; sec020 paragraphs 8–10',
  ],sections:[
    ['fossil','A latest Oligocene mold is not an assigned paradoxus specimen','晚渐新世印模不是已归属 paradoxus 的标本',
      'MB.Am.45.1 is a natural dorsal mold of a skull, anterior trunk and right forelimb from lignite at Orsberg near Erpel, Rhineland-Palatinate, Germany. No original bone or counterpart survives. An older plaster cast was abraded; the 2015 description used a new silicone cast, MB.Am.45.3. Mammal stratigraphy places the deposit in the latest Oligocene, and the sediments are interpreted as lacustrine. The authors retained Chelotriton sp., explicitly declining either to assign a known species or name a new one. These locality and preservation facts do not provide a species origination date or justify relabelling the specimen paradoxus.',
      'MB.Am.45.1 是头骨、躯干前部和右前肢背面的天然印模，来自德国 Rhineland-Palatinate、Erpel 附近 Orsberg 褐煤。原骨及对板均未保留。旧石膏翻模磨蚀，2015 年描述使用新硅胶翻模 MB.Am.45.3。哺乳动物地层学将沉积置于晚渐新世末期，沉积环境解释为湖泊。作者保留 Chelotriton sp.，明确既不归已知种，也不命名新种。这些地点及保存事实不提供物种起源日期，也不支持将标本重标 paradoxus。'],
    ['morphology','A very broad skull has precisely defined measurements','极宽头骨具有明确测量定义',
      'The cast’s skull measures 18 mm along the midline, from premaxillary tip to the posterior parietal margin, and 35 mm wide as the minimum distance between lateral quadratojugal–quadrate edges. The reported width-to-length ratio is 1.94. Interorbital width is reconstructed at approximately 14 mm because the left opening outline is incomplete; its ratio to skull length is therefore approximate. The jaw joints project unusually far behind the occiput. These are specimen-specific preserved or reconstructed dimensions, not adult snout–vent length, body mass or a whole-genus size range.',
      '翻模头骨中线长十八毫米，定义为前颌骨尖至顶骨后缘；宽三十五毫米，为两侧方轭骨—方骨外缘最短距离。报告宽长比 1.94。因左侧开口轮廓不全，眶间宽重建约十四毫米，与头骨长之比也属近似。颌关节异常向后突出于枕部。这些是该标本保存或重建尺寸，不是成年吻肛长、体重或全属体型范围。'],
    ['morphology','Surface sculpture and uncertain bone identities retain preservation limits','表面雕纹及未定骨骼身份保留保存限制',
      'Most exposed dermal bones have tubercular sculpture, while the maxillary region has stronger pit-and-ridge or honeycomb-like relief. A small bone near the nostril has competing septomaxillary, process and vomer interpretations that the natural mold cannot resolve. No exposed teeth on the premaxilla or maxilla means those surfaces do not reveal teeth, not proof of toothlessness. Sediment, cracks and crushing obscure sutures and parts of the jaw region. The frontal’s proportions are described differently in the descriptive and comparison paragraphs, so they are not standardized into one unambiguous diagnostic ratio.',
      '多数暴露皮骨有瘤状雕纹，颌骨区则有较强凹窝与嵴或蜂窝样浮纹。鼻孔附近小骨有隔颌骨、突起及犁骨等竞争解释，天然印模不能解决。前颌骨及上颌骨没有暴露牙齿，指表面不显示牙齿，不证明无齿。沉积物、裂缝和挤压遮蔽骨缝及部分颌区。额骨比例在描述与比较段落记载不同，不能标准化为一个无歧义鉴别比值。'],
    ['morphology','Ribs and forelimb are an incomplete anatomical sample','肋骨及前肢是部分解剖样本',
      'At least eight rib pairs are preserved, with missing proximal portions and some displacement. Several left ribs expose three or more processes, one at least five; a single process on some right ribs reflects exposure direction rather than a reliable side difference. The right humerus measures 12 mm, ulna 8 mm and radius approximately 7 mm. At least two wrist elements are ossified, but matrix obscures others. Four metacarpals survive; the uncertain phalangeal formula is not certified as a complete digit count. The terminal digit crest appears real, while its apparent serration might be a casting artifact.',
      '至少保存八对肋骨，近端缺失且部分移位。若干左肋显示三个以上突起，一根至少五个；部分右肋只见一突可能源于暴露方向，不能可靠确定左右差异。右肱骨十二毫米、尺骨八毫米、桡骨约七毫米。至少两块腕骨骨化，其余被基质遮蔽。四块掌骨保留，不确定指骨式不能认证完整指骨计数。末端指骨嵴似真实，其表观锯齿可能是翻模伪影。'],
    ['development','Adult-like ossification and larval-like throat elements form a mosaic','成年样骨化与幼体样咽部骨骼形成镶嵌',
      'The authors interpret heavy skull ossification, broad arches and posterior jaw joints as peramorphic features, extending developmental trends seen in living salamanders. Rod-like elements behind the skull are interpreted as retained ossified branchial-arch components, a paedomorphic condition. This is a mosaic inference from one fossil, not an observed growth series or a measured maturation age. The unidentified nostril bone contributes only conditionally to the peramorphosis argument. Superficial similarity to much older temnospondyls does not mean the specimen is ancestral to them or that ancient skull bones have demonstrably reappeared.',
      '作者把头骨高度骨化、宽弓及后移颌关节解释为延伸现生蝾螈发育趋势的过成体性状。头骨后棒状结构解释为保留并骨化的鳃弓部分，为幼态保持状态。这是由一个化石推断的镶嵌，不是观察生长序列或测量成熟年龄。鼻孔未定小骨只能有条件参与过成体论证。与更早离片椎类的表面相似，不意味着本标本是它们祖先，也不证明古老头骨骨骼重新出现。'],
    ['ecology','An aquatic interpretation is separate from species identity','水生解释与物种身份分开',
      'The retained larval-type hyobranchial apparatus supports a primarily aquatic interpretation for MB.Am.45, alongside lacustrine deposition. It does not preserve a diet, reproductive event, skin defence mechanism or seasonal activity schedule. The paper contrasts this with a terrestrial interpretation proposed for pliocenicus vertebral articulations, while stressing poor overlap of comparable material. Taxonomic revision and better specimens are required before assigning the mixed developmental anatomy to an accepted species. Broader late-Oligocene cooling explanations are cited context, not an independently tested climate response of this individual.',
      '保留幼体型舌鳃装置及湖相沉积支持 MB.Am.45 主要水生的解释，但没有保存食性、繁殖事件、皮肤防御机制或季节活动日程。论文与依据 pliocenicus 椎骨关节提出的陆生解释对照，同时强调可比较材料重叠很差。把镶嵌发育解剖归于接受种前，需要分类修订及更好标本。晚渐新世降温的更广解释属引述背景，不是独立测试本个体气候反应。'],
  ]},
  {...common,key:'paradoxus',name:'Chelotriton paradoxus',anchorSpeciesId:'txn:64187',target:'species',sourceConcept:'2015 comparisons to paradoxus neotype-locality material; MB.Am.45 and Enspel/Randeck assignments unresolved',sectionLocators:[
    'PMC4589347 XML sec009 paragraph 2; sec020 paragraphs 0–4, 8',
    'PMC4589347 XML sec007 paragraphs 5–7; sec014 paragraphs 1–2; sec020 paragraphs 1, 7',
    'PMC4589347 XML sec013 paragraph 3; sec019 paragraph 4; sec020 paragraphs 4, 9',
  ],sections:[
    ['taxonomy','A familiar species label conceals unresolved fossil assignments','熟悉种名之下有未解决化石归属',
      'The 2015 paper challenges earlier placement of the Orsberg specimen MB.Am.45 in paradoxus and retains it as Chelotriton sp. Comparisons distinguish neotype-locality material from Enspel and Randeck skeletons traditionally assigned the same name. Thus the 18-by-35-mm skull, extreme posterior jaw joints and forelimb lengths of MB.Am.45 are not paradoxus measurements. The database concept remains retained for navigation, while original specimen identity requires a separate revision. The article’s arguments do not establish a newly named species or complete the reconciliation of every database occurrence.',
      '2015 年论文质疑此前将 Orsberg 标本 MB.Am.45 放入 paradoxus，保留为 Chelotriton sp.。比较将新模产地材料与传统归入同名的 Enspel、Randeck 骨骼分开。因此 MB.Am.45 十八乘三十五毫米头骨、极后移颌关节及前肢长度不是 paradoxus 测量。数据库概念保留导航，原标本身份仍需独立修订。论文论证没有建立新命名物种，也未完成每条数据库出现记录核对。'],
    ['morphology','Neotype-locality comparisons have their own anatomical scope','新模产地比较有自身解剖范围',
      'The source cites two to four processes per rib in paradoxus material from the neotype locality and an approximately 30–35° orientation of a frontal process to the sagittal plane. Those are comparative reports from particular material, not a universal adult diagnosis or directly remeasured specimens here. The paper records uncertain or variable vertebral and cranial characters across the genus, including preservation-dependent differences. It does not transfer the genus diagnosis’s body-length range or MB.Am.45’s incomplete wrist and digit anatomy to every paradoxus fossil.',
      '来源引述 paradoxus 新模产地材料每肋二至四突，以及额骨突相对矢状面约三十至三十五度方向。这是特定材料比较报告，不是通用成体诊断，也不是这里直接重测标本。论文记录属内不定或可变椎骨、头骨性状，含保存相关差别。不能将属诊断体长范围或 MB.Am.45 不完整腕指解剖转移至每个 paradoxus 化石。'],
    ['development','Historical metamorphosis interpretations were revised for referred material','归入材料的历史变态解释曾修订',
      'Some skeletons traditionally called paradoxus were earlier interpreted as having a fully metamorphosed hyobranchial apparatus; later cited work interpreted Enspel and Randeck material as retaining larval components. The 2015 discussion uses this as a comparative mosaic-development example. It does not demonstrate that every paradoxus population was paedomorphic, establish a larval duration or measure breeding biology. Because the same paper questions several species assignments, developmental interpretation and the recorded name must remain separate evidence fields.',
      '传统称 paradoxus 的一些骨骼，较早被解释为舌鳃装置完全变态；后来引述研究将 Enspel、Randeck 材料解释为保留幼体部分。2015 年讨论将其用于比较镶嵌发育实例，没有证明每个 paradoxus 种群幼态保持、确定幼体年限或测繁殖生物学。论文同时质疑多个种级归属，因此发育解释与记录名称应保留为独立证据。'],
  ]},
  {...common,key:'robustus',name:'Chelotriton robustus',anchorSpeciesId:'txn:393933',target:'species',sourceConcept:'2015 comparative robustus anatomical literature, not MB.Am.45 identity',sectionLocators:[
    'PMC4589347 XML sec011 paragraph 0; sec014 paragraph 1; sec020 paragraph 10',
    'PMC4589347 XML sec014 paragraph 3; sec020 paragraphs 8, 10',
  ],sections:[
    ['morphology','Honeycomb-like sculpture distinguishes the cited robustus material','蜂窝样雕纹区别所引 robustus 材料',
      'The paper describes robustus as having honeycomb-like sculpture across bones exposed to the skin, contrasting with predominantly pustular relief in most other Chelotriton material. Its vertebral spine tables are cited as wide plates with pits and very fine pustules. MB.Am.45 combines mostly pustular surfaces with a more honeycomb-like maxillary region; that mixture is not a robustus identification. These are literature-based comparative features, not a new population sample or measurements of skin itself. The authors leave the developmental significance of the sculpture differences uncertain.',
      '论文描述 robustus 与皮肤接触骨面为蜂窝样雕纹，与多数其他 Chelotriton 主要瘤状浮纹对照。其椎骨神经棘顶板引述为带凹窝及细小瘤点的宽板。MB.Am.45 结合多数瘤状骨面及较蜂窝样颌骨区，不是 robustus 鉴定。这些是文献比较特征，不是新种群样本或皮肤本身测量。作者保留雕纹差异发育意义不确定。'],
    ['development','Ossified wrists are a cited comparison, not a growth curve','骨化腕部是引述比较而非生长曲线',
      'Robustus is among the taxa cited as having ossified wrist elements, alongside other fossil and living newts. The observation does not determine an age at ossification, developmental rate or complete digit formula for the species. Its relatively small honeycomb-sculptured vertebrae are contrasted with larger pustular vertebrae assigned paradoxus, but body-size differences cannot alone resolve ontogeny or species boundaries. MB.Am.45’s humerus, ulna and radius lengths remain with that unassigned specimen rather than being copied to robustus.',
      'robustus 与其他化石及现生蝾螈一起，被引述有骨化腕部；该观察不确定骨化年龄、发育速率或本种完整指骨式。其较小蜂窝雕纹椎骨与较大、归 paradoxus 的瘤状椎骨对照，但体型差异本身不能解决个体发育或种界。MB.Am.45 的肱骨、尺骨、桡骨长度保留在未归种标本，不能复制给 robustus。'],
  ]},
  {...common,key:'ogygius',name:'Chelotriton ogygius',anchorSpeciesId:'txn:393932',target:'species',sourceConcept:'2015 discussion of historical ogygius type and locality; no independently reexamined type',sectionLocators:[
    'PMC4589347 XML sec007 paragraphs 2, 5; sec009 paragraph 2; sec008 paragraph 0',
    'PMC4589347 XML sec007 paragraph 5; sec009 paragraph 2',
  ],sections:[
    ['fossil','An apparently lost type limits comparison at Orsberg','模式似已遗失，限制 Orsberg 比较',
      'The 2015 authors state that ogygius came from the same locality as MB.Am.45, but comparison is hampered by the apparent loss of its type and only known specimen. The old specimen was illustrated in ventral view, whereas MB.Am.45 preserves dorsal anatomy. Shared locality is therefore not proof of shared species identity, and MB.Am.45’s new cast is not a replacement ogygius type. The bounded empty occurrence query in the database reader does not erase this historical literature record; neither source proves a complete geographic or temporal range.',
      '2015 年作者记 ogygius 与 MB.Am.45 来自同一地点，但模式及唯一已知标本似已遗失，限制比较。旧标本图为腹面，MB.Am.45 保存背面解剖。共享地点不证明同种，新 MB.Am.45 翻模也不是替代 ogygius 模式。数据库读本限定查询未返出现记录，不消除这一历史文献记录；二者都不证明完整地理或时间范围。'],
    ['morphology','A historical vertebral count is an estimate from incomplete material','历史椎骨数是部分材料估计',
      'The paper recounts an older estimate of twelve presacral vertebrae for ogygius: the first ten were preserved, with presumed sacral and proximal tail vertebrae separated by a gap. This remains a historical reconstruction, rather than a new verified count or invariant species character. Other Chelotriton material was reported with different sacral positions, and the authors note vertebral variation even among living salamanders. Without comparable type material, the 2015 study neither resolves ogygius identity nor supplies its feeding, reproduction or growth chronology.',
      '论文转述 ogygius 较早荐前椎十二枚估计：前十枚保存，推定荐椎及近端尾椎之间有缺口。这是历史重建，不是新核实计数或恒定物种性状。其他 Chelotriton 材料有不同荐椎位置报告，作者提醒现生蝾螈也有椎数变化。缺少可比模式材料，2015 年研究未解决 ogygius 身份，也未提供取食、繁殖或生长年代。'],
  ]},
]
const file='docs/amphibia-content/primary-fossil-authoring-input.json'
const prior=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[]
for(const entry of entries){const i=prior.findIndex(x=>x.pmc===entry.pmc&&x.key===entry.key);if(i<0)prior.push(entry);else prior[i]=entry}
fs.writeFileSync(file,JSON.stringify(prior,null,2)+'\n')
fs.writeFileSync('docs/amphibia-content/chelotriton-mold-source-limits.json',JSON.stringify({source:common.pmc,doi:'10.1371/journal.pone.0137068',year:2015,license:common.license,licenseUrl:common.licenseUrl,
  limits:[
    {kind:'specimen-not-species',locator:'XML sec009 paragraph 2; sec020 paragraphs 0–4',handling:'MB.Am.45 genus-only; no transfer of skull/limb measurements to paradoxus or otheraccepted species. Enspel/Randeck traditional assignments questioned. No new species named.'},
    {kind:'preservation-and-estimates',locator:'XML sec008 paragraph 0; sec011 paragraph 0; sec012 paragraphs 0, 2, 7, 9; sec014 paragraph 3',handling:'Natural mold,nooriginalbone/counterpart; siliconecastdescription. Skull18/35mm preciselydefined; interorbital~14mm reconstructed from partialoutline. Unidentifiedbone, toothnonexposure, obscurecarpals, uncertainphalangealformula and possiblecastserration not resolvedfacts.'},
    {kind:'frontal-proportion-conflict',locator:'XML sec012 paragraph 4; sec020 paragraph 1',handling:'Description saysfrontal slightlylongerthanwide;comparison saysbroaderthanlong. Do not standardize one diagnostic ratio or use as standalone speciesdecision.'},
    {kind:'development-and-ecology-inferences',locator:'XML sec013 paragraphs 2–4; sec019 paragraphs 0–6; sec020 paragraphs 8–10',handling:'Peramorphic/paedomorphicmosaic inferred not growthseries, hormoneproof or ancestralreversion. Aquaticinterpretation not diet/reproduction data. Pliocenicus terrestrialcomparison limitedoverlap; title developmentalwordnot definedage.'},
    {kind:'historical-comparisons-and-name-gap',locator:'XML sec007 paragraphs 5–8; sec009 paragraph 2',handling:'Ogygius apparentlosttype/ventralview and historical12presacralsestimate distinct from mold. Brachycormus noachicus in source differs from pinnedPBDBnoachius spelling; preserveunresolvedlead without assigning measurements to that acceptedID.'},
    {kind:'rights-version',locator:'XML permissions/license',handling:'ExplicitCCBY but no version or licenceURL inXML; recordedunversionedCCBY, do not assume4.0. Nofiguresreproduced.'},
  ],fullArticleReadCertified:false,biologicalCoverageComplete:false,
},null,2)+'\n')
console.log(JSON.stringify({readersPrepared:entries.length,sectionsPrepared:entries.reduce((n,e)=>n+e.sections.length,0),testsRun:false}))
