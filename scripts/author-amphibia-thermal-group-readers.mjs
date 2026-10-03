import fs from 'node:fs'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const groups = JSON.parse(fs.readFileSync(`${base}/group-reader-coverage.json`))
const sources = JSON.parse(fs.readFileSync(`${base}/amphitherm-source-coverage.json`))
const records = new Map(sources.map(entry => [entry.path, readNodeContent(entry.path).records['amphitherm-source-reader']]))
const receipt = []
for (const group of groups) {
  const node = readNodeContent(group.path), profile = node.records['catalogue-profile']
  const rank = profile.rank, name = profile.scientificName
  if (!['class', 'order', 'family', 'genus'].includes(rank)) continue
  const selected = sources.filter(source => rank === 'class' ? name === 'Amphibia' : rank === 'order' ? source.order === name : rank === 'family' ? source.family === name : source.scientificName.split(' ')[0] === name)
  if (!selected.length) continue
  const before = semanticJson(node.records), index = fs.readFileSync(`${group.path}/index.yaml`)
  const metrics = new Map()
  const stages = new Set()
  for (const source of selected) {
    const record = records.get(source.path)
    for (const row of record.originalRows) {
      const metric = row.values[record.originalColumns.indexOf('metric')]
      if (!metrics.has(metric)) metrics.set(metric, { rows: 0, names: new Set() })
      metrics.get(metric).rows++
      metrics.get(metric).names.add(source.scientificName)
      stages.add(row.values[record.originalColumns.indexOf('life_stage_tested')])
    }
  }
  const statistics = [...metrics].map(([metric, value]) => ({ metric, rows: value.rows, sourceConcepts: value.names.size }))
  profile.sections = profile.sections.filter(section => section.sourceReaderKind !== 'amphitherm-group-scope')
  profile.sections.push({ topic: 'ecology', sourceReaderKind: 'amphitherm-group-scope', title: { en: 'The captured thermal evidence', zh: '已取得的热生理证据' }, sourceIds: ['amphitherm'], text: { en: `Within the pinned curated AmphiTherm source classification, the name ${name} matches ${selected.length} deposited species concepts and ${selected.reduce((n, entry) => n + entry.sourceRows, 0)} estimate rows. Recorded metrics: ${statistics.map(item => `${item.metric}, ${item.rows} rows across ${item.sourceConcepts} source concepts`).join('; ')}. CTmax and CTmin concern critical limits, LT50_hot and LT50_cold lethal-limit assays, and Tpref thermal preference. These metrics describe different experiments and cannot be merged into one tolerance range. Overlapping metric counts do not sum to distinct species or animals. Source life-stage codes are ${[...stages].join(', ')}. This dated material describes study coverage, not the physiology of every current member; the source's 2018 classification and present group boundaries remain distinct.`, zh: `在固定清理版本的 AmphiTherm 来源分类中，名称 ${name} 匹配 ${selected.length} 个存档物种概念与 ${selected.reduce((n, entry) => n + entry.sourceRows, 0)} 条估计行。所记指标：${statistics.map(item => `${item.metric}，${item.rows} 行、涉及 ${item.sourceConcepts} 个来源概念`).join('；')}。CTmax、CTmin 涉及临界温度限，LT50_hot、LT50_cold 为致死限实验，Tpref 为温度偏好。各指标来自不同实验，不能合并为一个耐受范围；指标间概念重叠，计数不能直接相加为独立物种数或动物数。来源发育阶段代码为 ${[...stages].join('、')}。这些有年代限定的材料说明研究覆盖，不代表每个当前成员的生理特征；来源的 2018 年分类与当代类群范围分别保留。` } })
  profile.thermalGroupEvidence = { sourceConcepts: selected.map(entry => ({ scientificName: entry.scientificName, path: entry.path })), metrics: statistics, sourceConceptEquivalenceCertified: false, notPopulationPrevalence: true }
  for (const entry of selected) for (const binding of records.get(entry.path).sources.referenceBindings) if (!profile.sources.referenceBindings.some(existing => existing.referenceId === binding.referenceId && existing.metadataVariant === binding.metadataVariant)) {
    const groupBinding = structuredClone(binding)
    groupBinding.usage.locator = `Pinned curated file, source-classification subset ${name}; deposited species concepts and estimate-row counts`
    profile.sources.referenceBindings.push(groupBinding)
  }
  if (semanticJson(node.records) !== before) {
    writeNodeContent(group.path, node.index, node.records)
    fs.writeFileSync(`${group.path}/index.yaml`, index)
    for (const locale of ['en', 'zh']) {
      const file = `${group.path}/page.${locale}.md`
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
    }
  }
  receipt.push({ colId: group.colId, path: group.path, sourceConcepts: selected.length, estimateRows: selected.reduce((n, entry) => n + entry.sourceRows, 0), metrics: statistics })
}
fs.writeFileSync(`${base}/thermal-group-reader-coverage.json`, JSON.stringify(receipt, null, 2) + '\n')
console.log(JSON.stringify({ groupReadersWithThermalStudyScope: receipt.length, testsRun: false, biologicalGroupSynthesisComplete: false }))
