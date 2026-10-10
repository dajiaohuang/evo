import { amphibianReferenceForSchema } from './amphibia-source-reference.mjs'
import fs from 'node:fs'
import { scientificNameSegment, readNodeContent, readYaml, writeNodeContent } from './tree-path-content.mjs'
const dir = 'data/sources/snapshots/amphibia-content-scope-2026-10-02'
const roster = JSON.parse(fs.readFileSync(`${dir}/pbdb-amphibia-accepted-fossil-species.json`)).records
const taxa = new Map(JSON.parse(fs.readFileSync(`${dir}/pbdb-classification-details.json`)).records.map(x => [x.oid, x]))
const occurrences = JSON.parse(fs.readFileSync(`${dir}/pbdb-fossil-occurrences.json`))
const source = { title: 'Paleobiology Database Amphibia taxonomy and fossil occurrences, 2 October 2026 snapshot', authors: ['Paleobiology Database Community'], version: 'Data Service 1.2; snapshot 2026-10-02', url: 'https://paleobiodb.org/data1.2/taxa/list.json?base_id=36319&rank=species&status=accepted&extant=no&pres=regular&limit=all', accessedAt: '2026-10-02', license: 'CC BY 4.0', licenseAssessment: 'item-level-verified', rightsEvidenceUrl: 'https://doi.org/10.1017/pab.2015.39', licenseAppliesTo: 'Public PBDB database records only; not the text or figures of cited publications.', attribution: 'Paleobiology Database Community and database contributors; original references are retained per taxon and occurrence. Database records are summarized and translated here.' }
const referenceId = 'ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953'
const referenceBytes = fs.readFileSync('data/references.json', 'utf8')
if (!JSON.parse(referenceBytes).some(x => x.id === referenceId)) {
  const reference = { id: referenceId, ...source, type: 'dataset', sourceRole: 'occurrence-database', fitnessFor: ['taxonomy', 'fossil'], authorsComplete: true, authorsStatus: 'recorded', importedSourceMetadata: [source] }
  fs.writeFileSync('data/references.json', referenceBytes.replace(/\]\s*$/, `,\n${JSON.stringify(amphibianReferenceForSchema(reference), null, 2)}\n]\n`))
}
const binding = { referenceId, metadataVariant: 0, sourceKey: 'pbdb', usage: {}, originalFields: ['id', ...Object.keys(source)] }
const root = 'content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia'
const paths = new Map()
function chain(taxon) {
  const result = [], seen = new Set()
  for (let current = taxon; current.oid !== 'txn:36319'; current = taxa.get(current.par)) {
    if (!current || seen.has(current.oid)) throw new Error(`Unresolved PBDB parent: ${taxon.oid}`)
    seen.add(current.oid)
    result.unshift(current)
    if (!taxa.has(current.par)) throw new Error(`Missing parent ${current.par}`)
  }
  return result
}
for (const row of roster) {
  const ancestors = chain(taxa.get(row.oid))
  for (let i = 0; i < ancestors.length; i++) {
    const node = ancestors[i]
    const path = `${root}/${ancestors.slice(0, i + 1).map(x => scientificNameSegment(x.nam)).join('/')}`
    if (paths.has(path) && paths.get(path) !== node.oid) throw new Error(`PBDB path collision ${path}`)
    paths.set(path, node.oid)
  }
}
let authored = 0, existing = 0
const coverage = []
for (const [path, oid] of paths) {
  const taxon = taxa.get(oid)
  const isSpecies = roster.some(x => x.oid === oid)
  const indexPath = `${path}/index.yaml`
  const oldIndex = fs.existsSync(indexPath) ? fs.readFileSync(indexPath) : null
  if (!isSpecies && fs.existsSync(`${path}/evidence.md`)) continue
  const records = fs.existsSync(`${path}/evidence.md`) ? readNodeContent(path).records : {}
  if (records['pbdb-fossil-reader']) { existing++; continue }
  const exact = occurrences.filter(x => x.tid === oid)
  const localities = [...new Set(exact.map(x => [x.cc2, x.stp, x.cny].filter(Boolean).join(' / ')).filter(Boolean))]
  const intervals = [...new Set(exact.map(x => [x.oei, x.oli].filter(Boolean).join('–')).filter(Boolean))]
  const ages = exact.filter(x => Number.isFinite(x.eag) && Number.isFinite(x.lag))
  const bounds = ages.length ? { older: Math.max(...ages.map(x => x.eag)), younger: Math.min(...ages.map(x => x.lag)) } : null
  const sourceBinding = structuredClone(binding)
  Object.assign(sourceBinding.usage, { locator: `Taxon ${oid}; exact tid occurrence rows in ${dir}/pbdb-fossil-occurrences.json`, scope: { en: 'PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.', zh: 'PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。' } })
  if (!sourceBinding.originalFields.includes('locator')) sourceBinding.originalFields.push('locator', 'scope')
  const sections = [{ topic: 'taxonomy', title: { en: 'Recorded fossil concept', zh: '来源记载的化石概念' }, text: {
    en: `PBDB records ${taxon.nam}${taxon.att ? ` ${taxon.att}` : ''} at ${taxon.rnk} rank. Its recorded parent is ${taxa.get(taxon.par)?.nam ?? taxon.par}. ${taxon.tdf ? `The record carries the taxonomic difference flag “${taxon.tdf}”; that uncertainty is retained.` : 'Its classification follows the database snapshot of 2 October 2026.'} This supplementary path does not assert equivalence with similarly named COL entries.`,
    zh: `PBDB 将 ${taxon.nam}${taxon.att ? ` ${taxon.att}` : ''} 记为 ${taxon.rnk} 级，所记父级为 ${taxa.get(taxon.par)?.nam ?? taxon.par}。${taxon.tdf ? `记录带有分类差异标记“${taxon.tdf}”，此处保留该不确定性。` : '分类依据 2026 年 10 月 2 日的数据库快照。'}这条补充路径不声明与 COL 中同名条目等同。`,
  }, sourceIds: ['pbdb'] }]
  if (isSpecies) sections.push({ topic: 'fossil', title: { en: 'Fossil occurrence evidence', zh: '化石出现记录' }, text: exact.length ? {
    en: `The exact PBDB concept has ${exact.length} returned occurrence records, representing ${new Set(exact.map(x => x.cid)).size} collection IDs. Recorded modern geographic labels include ${localities.join('; ') || 'no supplied locality labels'}. ${intervals.length ? `The supplied interval labels are ${intervals.join('; ')}. ` : ''}${bounds ? `The outer bounds of the returned collection age intervals are ${bounds.older}–${bounds.younger} million years ago. These are database age bounds for collections, not a measured species origin or extinction date.` : 'No complete numeric collection age bounds were supplied.'} The query is a database snapshot, not evidence of a complete global fossil distribution.`,
    zh: `这一确切 PBDB 概念返回 ${exact.length} 条出现记录，涉及 ${new Set(exact.map(x => x.cid)).size} 个采集地 ID。记录的现代地理标签包括 ${localities.join('；') || '未提供地点标签'}。${intervals.length ? `来源提供的年代区间标签为 ${intervals.join('；')}。` : ''}${bounds ? `这些采集地年代区间的外侧边界为距今 ${bounds.older}–${bounds.younger} 百万年；这是数据库中的采集地年代边界，不能当作测定的物种起源或灭绝时间。` : '来源未提供完整的数值年代边界。'}查询仅代表本次数据库快照，不能证明全球化石分布已被完整记录。`,
  } : {
    en: 'The dated query returned no occurrence with this exact accepted tid. This records a bounded database retrieval result, not absence of fossils or absence of published research. The taxonomic entry and its bibliography remain available for further study.',
    zh: '这次有日期的查询没有返回与该接受 tid 完全一致的出现记录。这是限定数据库检索的结果，不表示不存在化石或发表研究；分类条目和书目仍可用于进一步核对。',
  }, sourceIds: ['pbdb'] })
  const record = { scientificName: taxon.nam, rank: taxon.rnk, sourceTaxonId: oid, name: { en: taxon.nam, zh: taxon.nam },  checkedAt: '2026-10-02', sections, sources: { referenceBindings: [sourceBinding] }, originalBibliography: taxon.ref ?? null, occurrenceEvidence: exact.map(x => ({ occurrenceId: x.oid, collectionId: x.cid, acceptedTaxonId: x.tid, identifiedTaxonId: x.iid, identifiedName: x.idn, taxonomicDifference: x.tdf ?? null, referenceId: x.rid, bibliography: x.ref, locality: { countryCode: x.cc2 ?? null, stateProvince: x.stp ?? null, county: x.cny ?? null }, stratigraphy: { group: x.sgr ?? null, formation: x.sfm ?? null, member: x.smb ?? null }, olderAgeMa: x.eag ?? null, youngerAgeMa: x.lag ?? null })), limitations: { en: 'A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; ', zh: '本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。' } }
  records['pbdb-fossil-reader'] = record
  const index = oldIndex ? readYaml(indexPath) : { kind: 'supplementary-taxon', scientificName: taxon.nam, displayName: taxon.nam, rank: taxon.rnk, classification: { authority: 'Paleobiology Database snapshot', sourcePath: `${dir}/pbdb-classification-details.json`, sourceUrl: `https://paleobiodb.org/data1.2/taxa/single.json?id=${oid.replace('txn:', '')}`, placement: 'PBDB-recorded-parent-chain-beneath-Amphibia-storage-anchor'} }
  writeNodeContent(path, index, records)
  if (oldIndex) fs.writeFileSync(indexPath, oldIndex)
  for (const locale of ['en', 'zh']) {
    const file = `${path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  authored++
  if (isSpecies) coverage.push({ sourceTaxonId: oid, path, exactOccurrenceCount: exact.length, sourceCoverage: exact.length ? 'taxonomy-and-fossil-occurrences' : 'taxonomy-and-bounded-empty-occurrence-query', biologicalSynthesisComplete: false })
}
fs.writeFileSync('docs/amphibia-content/fossil-coverage.json', JSON.stringify(coverage, null, 2) + '\n')
console.log(JSON.stringify({ authored, existing, species: coverage.length, withExactOccurrences: coverage.filter(x => x.exactOccurrenceCount).length, biologicalSynthesisComplete: false }))
