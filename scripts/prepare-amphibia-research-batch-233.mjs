import fs from 'node:fs'
const taxa = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const selected = JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).filter(r => r.pmc === 'PMC10688756')
const source = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10688756/atlantic-life-history-rows.json'))
const sourceNames = new Map(source.records.map(r => [r.normalizedName, r])), groups = new Map()
for (const species of selected) {
  const g = taxa.find(t => t.colId === species.colId).classification.find(g => g.rank === 'genus')
  if (!groups.has(g.id)) groups.set(g.id, { ...g, children: [] })
  groups.get(g.id).children.push(species)
}
const file = 'docs/amphibia-content/primary-direct-group-authoring-input.json', inputs = JSON.parse(fs.readFileSync(file))
for (const g of groups.values()) {
  const rows = g.children.map(r => sourceNames.get(r.name)), n = rows.length
  const direct = rows.filter(r => r.valuesAsRecorded['Direct development'] === 1).length, terrestrialEggs = rows.filter(r => r.valuesAsRecorded['Terrestrial oviposition'] === 1).length
  const head = rows.filter(r => (r.valuesAsRecorded.Observation ?? '').includes('Head width')).length, tibia = rows.filter(r => /tibia/i.test(r.valuesAsRecorded.Observation ?? '')).length
  const aquaticJuveniles = rows.filter(r => r.valuesAsRecorded['Habitat aquatic'] === 1).length, terrestrialJuveniles = rows.filter(r => r.valuesAsRecorded['Habitat terrestrial'] === 1).length, mixedJuveniles = rows.filter(r => r.valuesAsRecorded.Habitatsemiterrestrial === 1).length
  const study = { colId: g.id, name: g.scientificName, pmc: 'PMC10688756', year: 2023, license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', readScope: selected[0].readScope, sourceConcept: `2023 Atlantic Forest exact-name ${g.scientificName} workbook subset; not whole-genus sampling or independently certified taxonomy`, scope: { en: `${n} selected exact-name species rows from one Atlantic Forest compilation; source trait coding and limits, not a complete genus synthesis.`, zh: `一份大西洋森林汇编中 ${n} 个所选精确名称物种行；来源性状编码及限制，不是全属综述。` }, readingRoutes: g.children.map(r => r.colId), sectionLocators: [
    `PMC10688756 S3 File Traits rows ${rows.map(r => r.sheetRow).join(', ')}; XML Functional diversity`,
    `PMC10688756 S3 File Traits Observation/length columns; XML Functional diversity; Results/Discussion`
  ], sections: [
    ['ecology', 'Reproductive and juvenile-habitat coding in a selected species subset', '所选物种子集的繁殖与幼体生境编码', `The exact-name ${g.scientificName} subset linked below contains ${n} species rows from the Atlantic Forest compilation. The source codes ${direct} as direct-developing and ${n - direct} as having larval development; ${terrestrialEggs} have terrestrial oviposition and ${n - terrestrialEggs} aquatic oviposition. Juvenile-habitat flags count ${aquaticJuveniles} aquatic, ${terrestrialJuveniles} terrestrial and ${mixedJuveniles} semiterrestrial entries. These counts describe the retained source subset, not a current census of the genus or independently observed reproduction. Terrestrial eggs do not automatically imply direct development, and juvenile habitat is not adult preference. The species links retain the individual egg-site categories and their upstream reference numbers.`, `下列精确名称 ${g.scientificName} 子集包含大西洋森林汇编的 ${n} 个物种行。来源将 ${direct} 个编为直接发育、${n - direct} 个为有幼体阶段；${terrestrialEggs} 个陆生产卵、${n - terrestrialEggs} 个水生产卵。幼体生境标记计水生 ${aquaticJuveniles}、陆生 ${terrestrialJuveniles}、半陆生 ${mixedJuveniles} 个条目。计数描述保留来源子集，不是当前全属普查或独立观察繁殖。陆生卵不自动意味直接发育，幼体生境不是成体偏好。物种链接保留逐行卵位点类别及上游参考编号。`],
    ['methods', 'Trait inference and community results cannot diagnose every species', '性状推断及群落结果不能诊断每个物种', `Within this selected ${g.scientificName} subset, ${head} head-width values and ${tibia} tibia-length values carry explicit inference flags. Unflagged cells are not independently verified original measurements. The compilation mixes means with maxima and lacks explicit units in the length headers, so it is not a uniform diagnostic series or a sex-specific size distribution. Its model of 766 communities explains 36% of variation in direct-development proportions, but functional diversity is a proxy and the correlations do not experimentally establish competition, predation or a climatic threshold for each species in this genus. Forty-six unmatched names across the full workbook remain outside the fixed-name routes.`, `所选 ${g.scientificName} 子集中，${head} 个头宽、${tibia} 个胫长有明确推断标记。无标记单元格不是独立核实原测量。汇编混合均值与最大值，长度表头无明确单位，因此不是一致诊断系列或性别专属体型分布。766 个群落模型解释直接发育比例变异 36%，但功能多样性是代理，相关未实验确立本属每种的竞争、捕食或气候阈值。全工作簿四十六个未匹配名称仍不进入固定名称路径。`]
  ] }
  if (g.scientificName === 'Myersiella') {
    study.sections.push(['ecology', 'A direct developer outside the principal terraran concentration', '主要 Terrarana 集中之外的直接发育种', 'The Discussion specifically names Myersiella microps as a direct-developing lineage outside the main terraran concentration in the Atlantic Forest tree. This is a source statement about the sampled phylogenetic distribution, not a new experiment locating the origin of development or certifying an evolutionary date. Independence from a free-living tadpole stage does not remove environmental humidity needs. The community model cannot establish a physiological tolerance or explain every population of microps.', '讨论明确点名 Myersiella microps 为大西洋森林树上主要 Terrarana 集中之外的直接发育谱系。这是取样系统发育分布的来源陈述，不是新实验定位发育起源或认证进化日期。无自由生活蝌蚪阶段不能消除环境湿度需求。群落模型不能确立生理耐受或解释 microps 每个种群。'])
    study.sectionLocators.push('PMC10688756 XML Discussion Direct development in Atlantic Forest anuran communities')
  }
  const i = inputs.findIndex(r => r.colId === study.colId && r.pmc === study.pmc)
  if (i < 0) inputs.push(study); else inputs[i] = study
}
fs.writeFileSync(file, JSON.stringify(inputs, null, 2) + '\n')
console.log(JSON.stringify({ groupsPrepared: groups.size, sections: groups.size * 2 + 1, selectedRoutes: selected.length, testsRun: false }))
