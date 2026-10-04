import fs from 'node:fs'
import path from 'node:path'
import { scientificNameSegment, writeNodeContent, readYaml } from './tree-path-content.mjs'

const scopeDir = 'data/sources/snapshots/amphibia-content-scope-2026-10-02'
const species = JSON.parse(fs.readFileSync(`${scopeDir}/col26.8-accepted-species.json`, 'utf8'))
const groups = new Map()
const paths = new Map()
for (const record of species) {
  const chain = record.classification
  const amphibIndex = chain.findIndex(x => x.id === 'PH')
  for (let i = amphibIndex; i < chain.length; i++) {
    const taxon = chain[i]
    const directory = `content/taxa/${chain.slice(0, i + 1).map(x => scientificNameSegment(x.scientificName)).join('/')}`
    if (paths.has(directory) && paths.get(directory) !== taxon.id) throw new Error(`Ambiguous recorded path: ${directory}`)
    paths.set(directory, taxon.id)
    if (!groups.has(taxon.id)) groups.set(taxon.id, { ...taxon, path: directory, members: [], parent: chain[i - 1] })
    groups.get(taxon.id).members.push(record)
  }
}
const pendingProfiles = []
const coverage = []
let created = 0
let preserved = 0
const rankZh = { class: '纲', order: '目', suborder: '亚目', superfamily: '总科', family: '科', subfamily: '亚科', tribe: '族', genus: '属', species: '种' }
for (const node of groups.values()) {
  const files = ['evidence.md', 'page.en.md', 'page.zh.md'].map(file => path.join(node.path, file))
  if (files.some(file => fs.existsSync(file))) {
    preserved++
    if (node.rank === 'species') coverage.push({ colId: node.id, path: node.path, sourceCoverage: 'existing-content-unreviewed', biologicalReaderComplete: false })
    continue
  }
  const isSpecies = node.rank === 'species'
  const item = isSpecies ? node.members[0] : null
  const lineage = (isSpecies ? item.classification : node.members[0].classification.slice(0, node.members[0].classification.findIndex(x => x.id === node.id) + 1)).filter(x => ['order', 'family', 'genus'].includes(x.rank) && x.id !== node.id)
  const chainEn = lineage.map(x => `${x.scientificName} (${x.rank})`).join(' → ')
  const chainZh = lineage.map(x => `${x.scientificName}（${rankZh[x.rank]}）`).join(' → ')
  const named = isSpecies ? `${node.scientificName}${item.authorship ? ` ${item.authorship}` : ''}` : node.scientificName
  const section0 = isSpecies ? {
    en: `COL26.8 accepts ${named} as a species. Its recorded classification places it along ${chainEn}. The name and placement refer to the release issued on 20 August 2026; names in another checklist or fossil database require their own identity evidence.`,
    zh: `COL26.8 接受 ${named} 为种级记录，所记分类路径为 ${chainZh}。这里的名称和分类位置对应 2026 年 8 月 20 日发布的版本；其他目录或化石数据库的名称需要各自的身份依据。`,
  } : {
    en: `In COL26.8, ${node.scientificName} is an accepted ${node.rank} below ${node.parent.scientificName}. The complete accepted-species query contains ${node.members.length} species beneath this recorded classification path. This is a dated catalogue count, with distinct names and concepts retained in their recorded hierarchy.`,
    zh: `COL26.8 将 ${node.scientificName} 接受为 ${node.parent.scientificName} 下的${rankZh[node.rank] ?? node.rank}级记录。完整接受种查询在这条分类路径下收录 ${node.members.length} 种。这是有版本日期的目录计数，各名称和分类概念保留在来源记载的层级中。`,
  }
  const section1 = isSpecies ? {
    en: `Begin with the accepted record and its parent genus, then use the family and order pages to locate related catalogue entries. This page supplies a taxonomic orientation. Species-specific morphology, ecology, life history, distribution, evolutionary evidence and conservation information still require reviewed biological sources.`,
    zh: `先查看接受记录和父级属，再通过科、目页面定位相关目录记录。本页提供分类阅读入口；种级形态、生态、生活史、分布、演化证据和保护信息仍需经过核对的生物学来源。`,
  } : {
    en: `Read from this ${node.rank} to its subordinate groups and species. Compare accepted names within the same release before consulting species research. The hierarchy provides a route through the catalogue; it does not establish shared traits or a biological history for every descendant.`,
    zh: `从本${rankZh[node.rank] ?? node.rank}进入下级类群和物种，先在同一版本内比较接受名称，再查阅物种研究。分类层级提供目录阅读路线，但不能据此确定全部后代的共有性状或生物学历史。`,
  }
  const record = {
    scientificName: node.scientificName, rank: node.rank, sourceDatasetId: item?.sourceDatasetId ?? '316115',
    name: { en: node.scientificName, zh: node.scientificName }, reviewStatus: 'source-linked', checkedAt: '2026-10-02',
    sections: [
      { topic: 'taxonomy', title: { en: 'Accepted name and placement', zh: '接受名称与分类位置' }, text: section0, sourceIds: ['taxonomy'] },
      { topic: 'overview', title: { en: 'Reading route', zh: '阅读路线' }, text: section1, sourceIds: ['taxonomy'] },
    ],
    sources: { referenceBindings: [{
      referenceId: 'ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23', metadataVariant: 0, sourceKey: 'taxonomy',
      usage: {
        title: `Catalogue of Life COL26.8 — ${node.scientificName}`,
        url: `https://www.checklistbank.org/dataset/316115/taxon/${node.id}`,
        locator: 'Complete paginated accepted-species search under Amphibia PH; recorded classification chain.',
        scope: { en: 'Accepted name, rank, recorded classification and descendant roster in the pinned catalogue. No biological species synthesis or equivalence with PBDB.', zh: '固定目录中的接受名称、等级、所记分类和后代名录；没有进行生物学物种综合，也不声明与 PBDB 记录等同。' },
      }, originalFields: ['id', 'title', 'url', 'locator', 'scope'],
    }] },
    limitations: { en: 'Taxonomy-only orientation. Biological research coverage is pending and this page is not counted as a complete species account. No external expert review has been completed.', zh: '本页仅提供分类阅读入口。生物学研究覆盖尚待补齐，不计为完整物种档案；没有完成外部专家审评。' },
  }
  const indexFile = path.join(node.path, 'index.yaml')
  const priorIndex = fs.existsSync(indexFile) ? fs.readFileSync(indexFile) : null
  const index = priorIndex ? readYaml(indexFile) : {
    kind: 'taxon', scientificName: node.scientificName, displayName: node.scientificName, rank: node.rank,
    classification: { authority: 'Catalogue of Life', release: 'COL26.8', publishedAt: '2026-08-20', status: 'accepted', sourceDatasetId: item?.sourceDatasetId ?? '316115', sourceUrl: `https://www.checklistbank.org/dataset/316115/taxon/${node.id}` },
  }
  writeNodeContent(node.path, index, { 'catalogue-profile': record })
  if (priorIndex) fs.writeFileSync(indexFile, priorIndex)
  for (const locale of ['en', 'zh']) {
    const file = path.join(node.path, `page.${locale}.md`)
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  pendingProfiles.push({ colId: node.id, path: node.path, rank: node.rank, scientificName: node.scientificName, sourceCoverage: 'taxonomy-only' })
  if (isSpecies) coverage.push({ colId: node.id, path: node.path, sourceCoverage: 'taxonomy-only', biologicalReaderComplete: false })
  created++
}
const ledgerDir = 'docs/amphibia-content'
fs.mkdirSync(ledgerDir, { recursive: true })
fs.writeFileSync(`${ledgerDir}/pending-profile-mappings.json`, JSON.stringify(pendingProfiles, null, 2) + '\n')
fs.writeFileSync(`${ledgerDir}/species-coverage.json`, JSON.stringify(coverage, null, 2) + '\n')
fs.writeFileSync(`${ledgerDir}/authoring-summary.json`, JSON.stringify({ createdProfiles: created, preservedExistingProfiles: preserved, colAcceptedSpecies: species.length, biologicalCompletionCertified: false, projectionsGenerated: false, testsRun: false }, null, 2) + '\n')
console.log(JSON.stringify({ createdProfiles: created, preservedExistingProfiles: preserved, colAcceptedSpecies: species.length }))
