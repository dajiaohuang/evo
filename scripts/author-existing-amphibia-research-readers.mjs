import fs from 'node:fs'
import { readNodeContent, writeNodeContent } from './tree-path-content.mjs'
const translations = {
  'CQ4M/evolution/0': '2018 年研究报告，所组装的美西螈基因组缺少 Pax3；其旁系同源基因 Pax7 发生突变后，表型与 Pax3 或 Pax7 突变小鼠相似。基因组 DNA 来自一只三岁的实验室繁殖 d/d 成年雄性。这一单个基因组和编辑实验不能说明野生种群中相关性状的频率，也不能确定变化发生的演化时间。',
  'J8YL/morphology/0': '2011 年研究报告，所检查的 Atelopus franciscus 材料没有外部声囊和外部鼓膜。解剖及声学测量仅对应研究材料；不是跨种群或全部发育阶段的形态调查。',
  'J8YL/ecology/0': '2011 年研究报告，在嘈杂的河岸环境中，野外雄性会回应同种鸣声；研究条件下测得的鸣声传播距离不足 8 米。声环境测量只是特定地点与时段的截面，不能推广为全分布区、所有季节或发育阶段的行为。',
  '3SLRG/morphology/0': '2017 年呼拉谷自然史论文描述，Latonia nigriventer 的蝌蚪形态与其姊妹类群 Discoglossus 相似。这里仅指论文中的比较性蝌蚪观察，不能据此推断成体或其他发育阶段的完整形态。',
  '3SLRG/lifeHistory/0': '2017 年论文将调查中的繁殖时序描述为机会性的，并报告成体在水生栖地中具有较长的年度出现期。结论限于作者的呼拉谷野外研究时段；不能据此推定全年种群占据情况或论文未给出的精确繁殖日期。',
  '3SLRG/ecology/0': '2017 年呼拉谷调查将 Latonia nigriventer 描述为分布局部、难以发现；调查在该地区及所采样的蛙上检出 Batrachochytrium dendrobatidis，但未观察到本种的壶菌病症状。病原检出不能直接解释为临床疾病，也不代表当前整个种群的状态。',
  '736LN/ecology/0': '2017 年实验比较野生和圈养雄性 Mantella aurantiaca 的趋声反应。野生雄性对野生与圈养同种鸣声的反应相近，而英国切斯特动物园的雄性对本园另行饲养的同种群体鸣声反应更强。野外鸣声来自马达加斯加 Mangabe，圈养鸣声来自马达加斯加 Mitsinjo 和切斯特动物园；结果仅对应所采样个体及实验条件。',
  '736LN/ecology/1': '在马达加斯加东部 Mangabe-Ranomena-Sahasarotra 保护区、靠近已知繁殖池的十处林地，1 m² 样方中的 Mantella aurantiaca 检出与落叶覆盖、树根数量及表面温度相关。混合模型中落叶覆盖和根数的系数为正、表面温度系数为负；相邻正文却将最密集根系样地的检出描述为较少，并报告有蛙样方平均有 1.73 条根。由于同一研究不同层次的根数比较不一致，本页不推断单调的根系偏好。九处样地在 2014 年 11 月 28 日至 12 月 12 日调查，第十处在同年 3 月调查；每处仅在 07:00–14:00 访问一次。作者提醒，计数会随调查日活动变化，不能直接视为丰度估计。',
  '49SSQ/morphology/0': '研究者于 2008 年 12 月至 2011 年 6 月，在哥斯达黎加和巴拿马六个种群测量 255 只活体 Oophaga pumilio 的皮肤反射率。视觉模型显示，所采样背部和腹部颜色的色彩与亮度对比在种群之间不同。样地为 Sarapiquí、Hitoy Cerere、Río Gloria、Tierra Oscura、Isla Colón 和 Isla Solarte。蛙在野外测量后原地放回；这些结果不证明差异由选择造成，也不代表本种全部种群。',
  '49SSQ/ecology/0': '研究者在哥斯达黎加和巴拿马的六个样地分别进行 20 天实验，每处放置 1,600 个标准化黏土蛙模型。模型受攻击率在样地间不同，所采样的两个巴拿马岛屿样地高于若干大陆样地；模型属于本地或非本地型的总体效应不显著。这是捕食者与黏土模型的相互作用，不是活蛙死亡率或存活率测量。样地为 Sarapiquí、Hitoy Cerere、Río Gloria、Tierra Oscura、Isla Colón 和 Isla Solarte；正文没有逐一给出模型实验日期，因此精确实验日期仍未知。',
  '6WR99/lifeHistory/0': '在瑞典南部斯科讷的 Rana temporaria 监测序列中，同一年内当地种群的开始繁殖时间最多相差三周。观察持续于 1990–2015 年，每年监测 29–84 处池塘，最远池塘间距为 60 千米。研究通过池塘卵团观察野生繁殖种群；这是地方监测序列，不能作为整个物种的繁殖物候估计。',
  '6WR99/ecology/0': '在斯科讷 19 处具有 2011–2015 年温度记录仪数据的池塘，较早的平均繁殖时间与较暖的平均池塘温度、以及用卵团数量估计的较大平均繁殖聚集相关；温度和聚集项具有统计学显著性，但池塘之间仍有较大残余差异。这是野生繁殖种群的观察性关联，不能确定因果机制，也不能推广为全分布区的生态结论。',
  '4ZMCC/morphology/0': '在 Gosner 第 27 阶段的幼体软骨颅描述中，Staurois parvus 没有幼体耳突。作者将其列为可能的鉴别性状，但指出仍需在其他蛙科类群中研究其分类层级意义。材料来自奥地利维也纳美泉宫动物园繁殖设施：共 116 只、第 19–27 阶段幼体，其中 11 只处于第 27 阶段。文章首发于 2026 年 3 月 31 日，未给出采样日期。这些圈养来源材料不证明野生种群变异或该性状的全种诊断价值。',
  '4ZMCC/ecology/0': '在文莱乌鲁淡布隆国家公园 Sungai Mata Ikan 的一段岩石急流，雄性 Staurois parvus 使用显著的足部挥动视觉信号；观察和回放实验中，声学求偶鸣叫先于足部挥动。采样时段为 2005–2007 年和 2010 年，研究涉及该地点的一个自由生活种群，不能推广为本种全部种群或季节的行为。',
}
const facetTitles = { morphology: ['Morphology in the study', '研究中的形态'], lifeHistory: ['Life history in the study', '研究中的生活史'], ecology: ['Ecology in the study', '研究中的生态'], evolution: ['Evolutionary evidence in the study', '研究中的演化证据'] }
const coverage = JSON.parse(fs.readFileSync('docs/amphibia-content/species-coverage.json'))
const roster = new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(x => [x.colId, x]))
let readers = 0, translatedClaims = 0
for (const entry of coverage.filter(x => x.sourceCoverage === 'existing-content-unreviewed')) {
  const node = readNodeContent(entry.path), dossier = node.records['catalogue-dossier']
  if (!dossier) throw new Error(`Existing dossier not found: ${entry.colId}`)
  const sections = []
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    for (let i = 0; i < (assessment.claims ?? []).length; i++) {
      const claim = assessment.claims[i]
      const textZh = claim.textZh ?? translations[`${entry.colId}/${facet}/${i}`]
      if (!textZh) throw new Error(`Missing authored translation ${entry.colId}/${facet}/${i}`)
      if (!claim.textZh) { claim.textZh = textZh; claim.translationStatus = 'translated'; translatedClaims++ }
      sections.push({ topic: facet, title: { en: facetTitles[facet][0], zh: facetTitles[facet][1] }, text: { en: `${claim.text}\n\nStudy scope: ${claim.placeTimeScope}\n\nStudy material: ${claim.lifeStatus}`, zh: textZh }, sourceIds: claim.sourceIds, locator: claim.locator, evidenceAssessment: assessment.status })
    }
  }
  const taxon = roster.get(entry.colId)
  node.records['catalogue-profile'] = { scientificName: taxon.scientificName, rank: 'species', sourceDatasetId: taxon.sourceDatasetId, name: { en: taxon.scientificName, zh: taxon.scientificName },  checkedAt: '2026-10-02', sections, sources: structuredClone(dossier.sources), limitations: { en: 'This reader summarizes the retained species-focused research. Study subjects, places, dates and experimental conditions are bounded in each section. The seven-facet dossier remains incomplete; unassessed topics and unresolved questions are retained. ', zh: '本读本概括已保留的种级研究，每节限定研究对象、地点、日期及实验条件。七主题档案仍不完整，未评估主题和未解决问题继续保留；。' } }
  const index = fs.readFileSync(`${entry.path}/index.yaml`)
  writeNodeContent(entry.path, node.index, node.records)
  fs.writeFileSync(`${entry.path}/index.yaml`, index)
  for (const locale of ['en', 'zh']) {
    const file = `${entry.path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  entry.sourceCoverage = 'species-research-partial-with-bilingual-reader'
  entry.biologicalReaderComplete = false
  entry.speciesResearchSections = sections.length
  readers++
}
fs.writeFileSync('docs/amphibia-content/species-coverage.json', JSON.stringify(coverage, null, 2) + '\n')
fs.writeFileSync('docs/amphibia-content/existing-research-authoring.json', JSON.stringify({ readers, translatedClaims, completeDossiers: 0,  testsRun: false, projectionsGenerated: false }, null, 2) + '\n')
console.log(JSON.stringify({ readers, translatedClaims }))
