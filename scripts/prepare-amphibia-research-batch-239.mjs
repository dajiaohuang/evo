import fs from 'node:fs'
const pmc = 'PMC12070909'
const taxa = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const children = JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).filter(r => r.pmc === pmc)
const groups = new Map()
for (const child of children) {
  const genus = taxa.find(t => t.colId === child.colId).classification.find(t => t.rank === 'genus')
  if (!groups.has(genus.id)) groups.set(genus.id, { ...genus, children: [] })
  groups.get(genus.id).children.push(child)
}
const file = 'docs/amphibia-content/primary-direct-group-authoring-input.json', inputs = JSON.parse(fs.readFileSync(file))
for (const genus of groups.values()) {
  const introduced = genus.children.filter(r => r.sections[0][1].includes('introduced')).length
  const study = { colId: genus.id, name: genus.scientificName, pmc, year: 2025, license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', readScope: children[0].readScope, sourceConcept: '2025 Sierra Madre Occidental checklist names linked by exact names or recorded frozen catalogue accepted-links; specimen identities not independently certified', scope: { en: `${genus.children.length} selected checklist entries; regional occurrence and dated assessments, not complete genus coverage.`, zh: `${genus.children.length} 个所选名册条目；区域出现及有日期评估，不是全属覆盖。` }, readingRoutes: genus.children.map(r => r.colId), sectionLocators: [
    'PMC12070909 XML Methods2.1–2.2; Table1 amphibian rows; archived sierra-madre-amphibian-rows.json and col26.8-name-bridges.json',
    'PMC12070909 XML Table1 caption; Results/Discussion3.2–3.4; Conclusions'
  ], sections: [
    ['occurrence', 'Regional checklist routes preserve source names and sampling limits', '区域名册路径保留来源名称及取样限制', `The selected ${genus.scientificName} routes retain ${genus.children.length} entries from the 2025 Sierra Madre Occidental checklist, including ${introduced} introduced entries. The source combines state lists, museum information, VertNet and GBIF across a seven-state regional scope. This is not a new field census, an abundance estimate or occurrence in every state. Thirteen old combinations across the retained amphibian subset have explicit COL26.8 accepted-name links; those nomenclatural links do not certify every voucher or reconcile all biological species concepts. Three unmatched source spellings remain outside the species routes. Individual pages preserve original row labels and distinguish native from introduced records.`, `所选 ${genus.scientificName} 路径保留 2025 年西马德雷山脉名册 ${genus.children.length} 个条目，其中 ${introduced} 个为引入条目。来源在跨七州区域范围汇集州名册、馆藏资料、VertNet 与 GBIF。这不是新野外普查、丰度估计或每州均有出现。保留两栖子集中十三个旧组合具有明确 COL26.8 接受名链接；命名链接不认证每件凭证或解决全部生物学种概念。三个未匹配来源拼写仍在物种路径之外。逐种页面保留原行标签，区分原生与引入记录。`],
    ['ecology', 'Endemism and risk categories retain their original evidence boundaries', '特有性及风险类别保留原证据边界', 'Native species pages separate source global-distribution codes, province counts, IUCN version 2024-2, the static 2010 Mexican list and expert-based Environmental Vulnerability Scores. These are dated assignments with different meanings, not current legal verification, measured population decline or interchangeable extinction probabilities. Province totals are not occupancy area or counts of individual populations. The article reports ten SMO amphibian endemics in Results but eleven in Conclusions; no correction is guessed. Regional protected-area coverage and cited pathogen suitability do not establish protection or infection for every linked species. The introduced bullfrog account cites potential mechanisms from elsewhere while acknowledging limited direct local impact evidence.', '原生种页面分开来源全球分布码、省数、IUCN 2024-2 版、静态 2010 墨西哥列表及专家环境脆弱评分。这些是含义不同的有日期分配，不是当前法律核实、测得种群下降或可交换灭绝概率。省总数不是占域面积或个体种群计数。论文结果报告十个 SMO 两栖特有种、结论十一，不猜测修正。区域保护区覆盖及引用病原适宜性不能确立每个链接物种的保护或感染。引入牛蛙叙述引用他处潜在机制，同时承认地方直接效应证据有限。']
  ] }
  const i = inputs.findIndex(r => r.colId === study.colId && r.pmc === pmc)
  if (i < 0) inputs.push(study); else inputs[i] = study
}
fs.writeFileSync(file, JSON.stringify(inputs, null, 2) + '\n')
console.log(JSON.stringify({ groupsPrepared: groups.size, bilingualSections: groups.size * 2, routes: children.length, testsRun: false }))
