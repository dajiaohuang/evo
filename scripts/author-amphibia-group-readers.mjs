import fs from 'node:fs'
import path from 'node:path'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const pendingFile = `${base}/pending-profile-mappings.json`
const pending = JSON.parse(fs.readFileSync(pendingFile))
const species = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const rows = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibio-v1-2026-10-02/decoded-source-rows.json')).rows
const root = 'content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia'
if (!pending.some(x => x.colId === 'PH')) pending.push({ colId: 'PH', path: root, rank: 'class', scientificName: 'Amphibia', sourceCoverage: 'taxonomy-and-historical-trait-group-introduction' })
const all = new Map([...pending, ...species].map(x => [x.colId, x]))
const sourceRef = 'ref-6db7bceb-2df2-46ef-90e7-a43ed817725b'
const sourceMetadata = JSON.parse(fs.readFileSync('data/references.json')).find(x => x.id === sourceRef).importedSourceMetadata[0]
const taxonomyBinding = readNodeContent(`${root}/Anura`).records['catalogue-profile'].sources.referenceBindings.find(x => x.sourceKey === 'taxonomy')
const ledger = []
for (const entry of pending.filter(x => x.rank !== 'species')) {
  const index = fs.readFileSync(`${entry.path}/index.yaml`)
  const node = readNodeContent(entry.path), before = semanticJson(node.records)
  let profile = node.records['catalogue-profile']
  if (!profile && entry.colId !== 'PH') throw new Error(`Missing group catalogue profile ${entry.path}`)
  if (!profile) {
    const binding = structuredClone(taxonomyBinding)
    binding.usage.title = 'Catalogue of Life COL26.8 — Amphibia'
    binding.usage.url = 'https://www.checklistbank.org/dataset/316115/taxon/PH'
    profile = node.records['catalogue-profile'] = { scientificName: 'Amphibia', rank: 'class', sourceDatasetId: '316115', name: { en: 'Amphibia', zh: '两栖动物' }, checkedAt: '2026-10-02', reviewStatus: 'source-linked', sources: { referenceBindings: [binding] }, sections: [{ topic: 'taxonomy', sourceIds: ['taxonomy'], title: { en: 'The pinned amphibian roster', zh: '固定的两栖动物名录' }, text: { en: 'The complete COL26.8 accepted-species query contains 8,923 records under Amphibia: 7,868 Anura, 828 Caudata and 227 Gymnophiona. The independently captured PBDB fossil roster retains its own concepts and ancestry.', zh: '完整的 COL26.8 接受物种查询在 Amphibia 下包含 8,923 条记录：无尾目 7,868 条、有尾目 828 条、蚓螈目 227 条。独立捕获的 PBDB 化石名录保留各自概念和分类路径。' } }] }
  }
  profile.sections = profile.sections.filter(x => !['historical-group-traits', 'canonical-child-route'].includes(x.readerSectionKind))
  const field = { order: 'Order', family: 'Family', genus: 'Genus' }[entry.rank]
  const represented = entry.colId === 'PH' ? rows : field ? rows.filter(x => x[field] === entry.scientificName) : []
  if (represented.length) {
    const positives = key => represented.filter(x => x[key] === '1').length
    const foraging = [['Fos', 'fossorial', '穴居'], ['Ter', 'terrestrial', '陆栖'], ['Aqu', 'aquatic', '水栖'], ['Arb', 'arboreal', '树栖']].map(([key, en, zh]) => ({ key, en, zh, count: positives(key) })).filter(x => x.count)
    const development = [['Dir', 'direct development', '直接发育'], ['Lar', 'larval development', '幼体发育'], ['Viv', 'viviparity', '胎生']].map(([key, en, zh]) => ({ key, en, zh, count: positives(key) })).filter(x => x.count)
    const title = `${entry.scientificName} in the Frost 2011 source classification`
    profile.sections.push({ topic: 'ecology', sourceIds: ['amphibio-group'], readerSectionKind: 'historical-group-traits', title: { en: 'Foraging in the historical compilation', zh: '历史汇编中的觅食层位' }, text: { en: `AmphiBIO retains ${represented.length} source records under ${title}. Positive foraging codes occur in ${foraging.length ? foraging.map(x => `${x.count} records for ${x.en}`).join(', ') : 'none of the listed categories'}. Categories can overlap within a record; unreported values remain unknown. These counts describe represented historical concepts, not the prevalence of traits across every species in the current group.`, zh: `AmphiBIO 在 Frost 2011 来源分类的 ${entry.scientificName} 下保留 ${represented.length} 条记录。觅食类别的正值计数为${foraging.length ? foraging.map(x => `${x.zh} ${x.count} 条`).join('、') : '所列类别均无正值'}；同一记录可以同时属于多个类别，未报告值仍为未知。这些计数描述汇编中有代表的历史概念，不表示当前类群所有物种的性状比例。` } })
    if (development.length) profile.sections.push({ topic: 'lifeHistory', sourceIds: ['amphibio-group'], readerSectionKind: 'historical-group-traits', title: { en: 'Recorded developmental categories', zh: '所记发育类别' }, text: { en: `Within the same historical source subset, positive codes record ${development.map(x => `${x.en} in ${x.count} records`).join(', ')}. The coded records are not independent population samples, and missing categories are not inferred absent. Species-level readers retain the original values and compilation scope.`, zh: `在同一历史来源子集中，正值代码记载${development.map(x => `${x.en === 'direct development' ? '直接发育' : x.zh} ${x.count} 条`).join('、')}。代码记录不是独立种群样本；缺失类别不能推断为不存在。种级读本保留原值和汇编范围。` } })
    if (!profile.sources.referenceBindings.some(x => x.sourceKey === 'amphibio-group')) profile.sources.referenceBindings.push({ referenceId: sourceRef, metadataVariant: 0, sourceKey: 'amphibio-group', usage: { locator: `AmphiBIO v1 deposited rows grouped by ${field ?? 'all rows'} = ${entry.scientificName}; original row IDs retained in historicalTraitGroupEvidence`, scope: { en: 'Aggregate positive-code counts for historical source concepts only; no universal group traits or current concept equivalence.', zh: '仅汇总历史来源概念的正值代码计数；不确定类群普遍性状或当前概念等同性。' } }, originalFields: ['id', ...Object.keys(sourceMetadata), 'locator', 'scope'] })
    profile.historicalTraitGroupEvidence = { sourcePath: 'data/sources/snapshots/amphibio-v1-2026-10-02/decoded-source-rows.json', classificationBasis: 'Frost 2011', sourceField: field ?? 'all-rows', sourceName: entry.scientificName, sourceRowIds: represented.map(x => x.id), foragingCounts: foraging, developmentCounts: development, currentConceptEquivalenceCertified: false }
  }
  const children = [...all.values()].filter(x => path.posix.dirname(x.path) === entry.path).sort((a, b) => (a.scientificName ?? path.posix.basename(a.path)).localeCompare(b.scientificName ?? path.posix.basename(b.path)))
  if (children.length) {
    const list = children.map(x => `- [${x.scientificName ?? path.posix.basename(x.path).replaceAll('_', ' ')}](${path.posix.relative(entry.path, x.path)}/page.LOCALE.md)`)
    profile.sections.push({ topic: 'overview', sourceIds: ['taxonomy'], readerSectionKind: 'canonical-child-route', title: { en: 'Continue through the recorded tree', zh: '沿所记分类树继续阅读' }, readingLinks: children.map(x => ({ kind: 'catalogue', colId: x.colId, releaseAlias: 'COL26.8', targetPath: x.path, label: { en: x.scientificName ?? path.posix.basename(x.path).replaceAll('_', ' '), zh: x.scientificName ?? path.posix.basename(x.path).replaceAll('_', ' ') } })), text: { en: `The following materialized child pages follow the pinned classification. Source-specific biological accounts keep their own identity and review boundaries.\n\n${list.join('\n').replaceAll('LOCALE', 'en')}`, zh: `以下已编写子页面遵循固定分类。限定来源的生物学记录保留各自身份和审阅边界。\n\n${list.join('\n').replaceAll('LOCALE', 'zh')}` } })
  }
  profile.limitations = { en: 'Taxonomic and source-bounded group introduction. Historical source subsets are not assumed equivalent to the entire current group; unrepresented biological evidence remains to be reviewed. This reader is not externally expert-reviewed.', zh: '本页为分类与限定来源范围的类群介绍；不将历史来源子集视为整个当前类群的等同物。尚未代表的生物学证据仍需核对，未经过外部领域专家评审。' }
  if (semanticJson(node.records) !== before) {
    writeNodeContent(entry.path, node.index, node.records)
    fs.writeFileSync(`${entry.path}/index.yaml`, index)
    for (const locale of ['en', 'zh']) {
      const file = `${entry.path}/page.${locale}.md`
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
    }
  }
  ledger.push({ colId: entry.colId, path: entry.path, historicalSourceRows: represented.length, childReadingLinks: children.length, biologicalGroupSynthesisComplete: false })
}
fs.writeFileSync(pendingFile, JSON.stringify(pending, null, 2) + '\n')
fs.writeFileSync(`${base}/group-reader-coverage.json`, JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ groupReaders: ledger.length, withHistoricalTraitCounts: ledger.filter(x => x.historicalSourceRows).length, childReadingLinks: ledger.reduce((n, x) => n + x.childReadingLinks, 0) }))
