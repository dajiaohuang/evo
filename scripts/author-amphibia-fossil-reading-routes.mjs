import fs from 'node:fs'
import path from 'node:path'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
const base = 'docs/amphibia-content'
const root = 'content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia'
const species = JSON.parse(fs.readFileSync(`${base}/fossil-coverage.json`))
const referenceId = 'ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953'
const metadata = JSON.parse(fs.readFileSync('data/references.json')).find(x => x.id === referenceId).importedSourceMetadata[0]
const groups = new Map(), names = new Map(), occurrences = new Map()
for (const entry of species) {
  const node = readNodeContent(entry.path)
  names.set(entry.path, node.index.scientificName)
  occurrences.set(entry.sourceTaxonId, node.records['pbdb-fossil-reader'].occurrenceEvidence)
  for (let current = path.posix.dirname(entry.path); current.startsWith(root); current = path.posix.dirname(current)) {
    if (!groups.has(current)) groups.set(current, [])
    groups.get(current).push(entry)
    if (current === root) break
  }
}
const allPaths = new Set([...groups.keys(), ...species.map(x => x.path)])
for (const group of groups.keys()) names.set(group, readNodeContent(group).index.scientificName)
const ledger = []
for (const [group, descendants] of groups) {
  const node = readNodeContent(group), before = semanticJson(node.records)
  const index = fs.readFileSync(`${group}/index.yaml`)
  const record = node.records['pbdb-fossil-reader'] ??= { scientificName: node.index.scientificName, name: { en: node.index.scientificName, zh: node.index.scientificName }, checkedAt: '2026-10-02',  sections: [], sources: { referenceBindings: [{ referenceId, metadataVariant: 0, sourceKey: 'pbdb', usage: { locator: 'Complete accepted fossil-species query under PBDB txn:36319; recorded parent chains retained in the local source snapshot' }, originalFields: ['id', ...Object.keys(metadata), 'locator'] }] } }
  record.sections = record.sections.filter(x => !['pbdb-descendant-material', 'pbdb-child-route'].includes(x.readerSectionKind))
  const material = descendants.flatMap(x => occurrences.get(x.sourceTaxonId))
  const dated = material.filter(x => Number.isFinite(x.olderAgeMa) && Number.isFinite(x.youngerAgeMa))
  const oldest = dated.length ? Math.max(...dated.map(x => x.olderAgeMa)) : null
  const youngest = dated.length ? Math.min(...dated.map(x => x.youngerAgeMa)) : null
  record.sections.push({ topic: 'fossil', sourceIds: ['pbdb'], readerSectionKind: 'pbdb-descendant-material', title: { en: 'Material in the captured fossil roster', zh: '捕获化石名录中的材料' }, text: { en: `The captured PBDB parent chains place ${descendants.length} accepted fossil-species concepts beneath this source node. Exact returned-taxon matches supply ${material.length} occurrence records; ${descendants.filter(x => !x.exactOccurrenceCount).length} concepts have no such record in the captured query. ${dated.length ? `The dated collection-interval boundaries extend from ${oldest} to ${youngest} million years ago across ${dated.length} records. These are pooled collection bounds, not the lineage's origin, extinction or a continuous range.` : 'No finite collection-interval pair is available for this subset.'} The PBDB placement is supplementary and does not establish equivalence with a similarly named COL group.`, zh: `捕获的 PBDB 父级路径将 ${descendants.length} 个接受的化石种概念置于此来源节点之下。返回分类号的精确匹配提供 ${material.length} 条出现记录；其中 ${descendants.filter(x => !x.exactOccurrenceCount).length} 个概念在本次捕获查询中没有这种记录。${dated.length ? `${dated.length} 条有年代记录的采集区间边界合起来覆盖距今 ${oldest} 至 ${youngest} 百万年；这是采集区间边界的汇总，不是谱系起源、灭绝日期或连续分布。` : '这一子集没有可用的有限采集区间成对边界。'}PBDB 分类位置是补充来源，不确定与同名 COL 类群等同。` } })
  const children = [...allPaths].filter(x => path.posix.dirname(x) === group).sort((a, b) => names.get(a).localeCompare(names.get(b)))
  const links = children.map(x => `- [${names.get(x)}](${path.posix.relative(group, x)}/page.LOCALE.md)`)
  if (children.length) record.sections.push({ topic: 'overview', sourceIds: ['pbdb'], readerSectionKind: 'pbdb-child-route', title: { en: 'Read the recorded PBDB descendants', zh: '阅读所记 PBDB 后代' }, text: { en: `Follow these pages through the separately retained fossil ancestry. Read each source scope before combining fossil and current-species evidence.\n\n${links.join('\n').replaceAll('LOCALE', 'en')}`, zh: `沿以下页面阅读单独保留的化石分类路径。合并化石与当前物种证据前，请先查看各来源范围。\n\n${links.join('\n').replaceAll('LOCALE', 'zh')}` } })
  record.descendantMaterialSummary = { sourceConceptIds: descendants.map(x => x.sourceTaxonId), exactOccurrenceCount: material.length, datedOccurrenceCount: dated.length, collectionIntervalBoundsMa: dated.length ? { older: oldest, younger: youngest } : null, conceptEquivalenceCertified: false }
  record.limitations = { en: 'Supplementary fossil-source reader. Collection intervals, database ancestry and source concepts remain distinct from lineage origin, a resolved phylogeny and current species. This is.', zh: '本页是补充化石来源读本。采集区间、数据库分类路径及来源概念，与谱系起源、已解析系统发育和当前物种分别保留。' }
  if (semanticJson(node.records) !== before) {
    writeNodeContent(group, node.index, node.records)
    fs.writeFileSync(`${group}/index.yaml`, index)
    for (const locale of ['en', 'zh']) {
      const file = `${group}/page.${locale}.md`
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
    }
  }
  ledger.push({ path: group, descendantFossilConcepts: descendants.length, exactOccurrenceRecords: material.length, childReadingLinks: children.length })
}
fs.writeFileSync(`${base}/fossil-group-reader-coverage.json`, JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ fossilGroupReaders: ledger.length, fossilSpecies: species.length, childReadingLinks: ledger.reduce((n, x) => n + x.childReadingLinks, 0) }))
