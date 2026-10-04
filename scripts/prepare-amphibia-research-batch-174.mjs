import fs from 'node:fs'
const facts=JSON.parse(fs.readFileSync('docs/amphibia-content/brachycephalus-pernix-comparison-source-rows.json')).rows
const taxa=new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(x=>[x.scientificName,x.colId]))
const study={colId:'3C9X',name:'Brachycephalus',pmc:'PMC12694819',year:2025,license:'CC BY (version not explicit in XML)',licenseUrl:'https://creativecommons.org/licenses/by/',
 sourceConcept:'Twenty accepted comparison species and unassigned new lulai concept in the 2025 pernix-group revision; selected portion of the fixed genus',
 readingRoutes:facts.map(x=>{const id=taxa.get(x.name);if(!id)throw new Error('Unmapped selected species');return id}),
 scope:{en:'Selected pernix-group comparisons, dated assessments and an unassigned new-species concept; no full genus biology or independent current species-concept equivalence certified.',zh:'所选 pernix 组比较、有日期评估及未分配新种概念；全属生物学或现行种概念等同性未经完整独立认证。'},
 readScope:'Raw study/collection/acoustic/molecular/conservation methods, Tables 2/7/8 and captions/footnotes, new-species diagnosis/natural history and taxonomy/conservation discussion read; no independent original specimens/recordings/GIS reanalysis',
 sectionLocators:[
 'PMC12694819 XML sec016 paragraph 0; sec008 paragraphs 0–4; sec028 paragraph 0; sec036 paragraphs 0,3–5; pone.0334746.t002',
 'PMC12694819 XML sec004 paragraphs 0–1; sec007 paragraphs 0–1; sec036 paragraphs 1–2,4–5; pone.0334746.t002 caption',
 'PMC12694819 XML sec009 paragraphs 0–4; sec030 paragraphs 0–3; sec038 paragraphs 2–6; pone.0334746.t007–t008 with footnotes',
 ],sections:[
 ['taxonomy','A species-group comparison covers only part of the genus','种组比较只覆盖全属一部分',
 'The 2025 paper describes lulai and compares it with twenty other species assigned to the pernix group. Its reviewed characters include skin texture, sex-specific snout–vent length, live/preserved colours, external digits and advertisement-call structure. These comparisons do not cover every accepted Brachycephalus species. Lulai is absent from the pinned accepted-species list and remains a separate source concept, without an invented catalogue ID or transfer of its measurements to auroguttatus or quiririensis. The four-locus analysis supports a clade containing those three names but does not resolve relationships among them. Shared colour or a close phylogenetic placement alone is not a synonymy decision.',
 '2025 年论文描述 lulai，并与 pernix 组另外二十种比较。所审性状含皮肤质地、分性别吻肛长、活体与保存颜色、外部手足指及求偶鸣声结构。这些比较不覆盖所有有效 Brachycephalus。lulai 不在固定有效种名册内，保留为独立来源概念，不编造目录 ID，也不把其测量转给 auroguttatus、quiririensis。四位点分析支持含这三个名称的支，但不解决三者内部关系。共享颜色或系统关系相近本身不是同物异名决定。'],
 ['behavior','Specimens, recordings, notes and pulses require separate units','标本、录音、音符与脉冲需要分开单位',
 'Table 2 retains the number of animals observed for each character; for acoustic characters, N counts animals with one or more recorded and analysed calls. The denominators differ across sex, skin, colour and acoustic variables. The note-centred approach treats a sequence as the call, while some older call-centred accounts treat one note as a call. Isolated notes, note groups, pulses and attenuated notes cannot be pooled as one duration or count. Mariaeterezae lacks available call data in this comparison. Limited samples and nonstandardized colour descriptions constrain diagnoses, and observed acoustic maxima do not establish invariant limits across the genus.',
 '表二保留每个性状所查动物数；声学性状 N 计有一个或多个鸣声被记录分析的动物。分母随性别、皮肤、颜色及声学变量不同。以音符为中心的方法把序列作鸣声，某些旧以鸣声为中心描述则将单音符作鸣声。单音符、音符组、脉冲及减弱音符不能合并成一个时长或数量。此次比较没有 mariaeterezae 可用鸣声数据。有限样本与非标准色彩描述限制诊断，已观察声学最大值不建立全属不变界限。'],
 ['conservation','Proposed refuge and recovery scores remain dated scenarios','拟建保护区及恢复评分仍是有日期情景',
 'The study reassesses twenty comparison species with spatial criteria and proposes a 6,600-hectare Serra do Quiriri refuge intended to protect lulai, auroguttatus, quiririensis and Melanophryniscus biancae alongside habitat. This is a proposal, not evidence of an established reserve or completed intervention. Record-based and potential-habitat AOO, EOO and threat-defined locations have different meanings. The authors’ 2025 categories and Green Status scenarios are not freshly verified official listings or population counts. Numeric inconsistencies and superscript footnotes in Table 8 are preserved in the source ledger. Quiririensis was heard in disturbed vegetation in 2004, but the authors report being unable to revisit after 2010 to confirm persistence; neither continued presence nor extinction is certified.',
 '研究用空间准则重新评估二十个比较种，提议 6,600 公顷 Serra do Quiriri 保护区，拟保护 lulai、auroguttatus、quiririensis、Melanophryniscus biancae 及生境。这是提议，不是保护区已建立或干预已完成证据。基于记录与潜在生境的 AOO、EOO 及威胁定义地点含义不同。作者 2025 年等级及绿色状态情景不是刚验证的官方名录或种群数。表八数值冲突、上标脚注保留在来源台账。2004 年受扰植被曾听到 quiririensis，但作者称 2010 年后无法回访确认持续存在，因此未认证当前存在或灭绝。'],
 ]}
const file='docs/amphibia-content/primary-direct-group-authoring-input.json'
const inputs=JSON.parse(fs.readFileSync(file)),i=inputs.findIndex(x=>x.colId===study.colId&&x.pmc===study.pmc)
if(i<0)inputs.push(study);else inputs[i]=study
fs.writeFileSync(file,JSON.stringify(inputs,null,2)+'\n')
console.log(JSON.stringify({groupReadersPrepared:1,researchSections:3,selectedReadingRoutes:20,testsRun:false}))
