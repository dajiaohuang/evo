import { amphibianReferenceForSchema } from './amphibia-source-reference.mjs'
import fs from 'node:fs'
import { scientificNameSegment, writeNodeContent } from './tree-path-content.mjs'
const dir = 'data/sources/snapshots/amphibian-morphology-2023-2026-10-02'
const { tables } = JSON.parse(fs.readFileSync(`${dir}/decoded-source-tables.json`))
const meta = JSON.parse(fs.readFileSync(`${dir}/figshare-metadata.json`))
const sourceRecord = { title: meta.title, authors: meta.authors.map(x => x.full_name), doi: meta.doi, url: `https://doi.org/${meta.doi}`, version: 'Figshare version 3', publishedAt: meta.published_date.slice(0, 10), accessedAt: '2026-10-02', license: meta.license.name, licenseUrl: meta.license.url, rightsEvidenceUrl: 'https://api.figshare.com/v2/articles/21159229/versions/3', licenseAssessment: 'item-level-verified', licenseAppliesTo: 'The deposited data; independently cited works retain their own rights.', attribution: `${meta.authors.map(x => x.full_name).join('; ')}. ${meta.title}. ${meta.doi}. Deposited uploader metadata is retained separately from the associated paper authors.` }
const referenceId = 'ref-fd9084a2-752b-4a3e-b904-e62d665705df'
const bytes = fs.readFileSync('data/references.json', 'utf8')
if (!JSON.parse(bytes).some(x => x.id === referenceId)) fs.writeFileSync('data/references.json', bytes.replace(/\]\s*$/, `,\n${JSON.stringify(amphibianReferenceForSchema({ id: referenceId, ...sourceRecord, type: 'dataset', sourceRole: 'trait-database', fitnessFor: ['morphology'], authorsComplete: false, authorsStatus: 'unresolved', authorMetadataProvenance: 'anonymous deposited uploader; creator identity unresolved', importedSourceMetadata: [sourceRecord] }), null, 2)}\n]\n`))
const bibliography = tables.find(t => t.sourceFile.endsWith('Reference.csv'))
const get = (t, row, key) => row.values[t.headers.indexOf(key)]
const col = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const ledger = []
for (const table of tables.filter(t => t !== bibliography)) {
  const order = table.sourceFile.split('/').at(-1).replace('.csv', '')
  const groups = new Map()
  for (const row of table.rows) {
    const identity = ['Family', 'Genus', 'Species'].map(k => get(table, row, k))
    if (identity.some(x => !x)) throw new Error(`Missing source identity ${table.sourceFile}:${row.rowNumber}`)
    const key = JSON.stringify(identity)
    if (!groups.has(key)) groups.set(key, { identity, rows: [] })
    groups.get(key).rows.push(row)
  }
  for (const { identity: [family, genus, name], rows } of groups.values()) {
    const refs = bibliography.rows.filter(r => get(bibliography, r, 'Order') === order && get(bibliography, r, 'Species') === name.replaceAll(' ', '_'))
    const sexCodes = [...new Set(rows.map(r => get(table, r, 'Sex')))]
    if (sexCodes.some(x => !['F', 'M', 'J', 'NA'].includes(x))) throw new Error(`Unexpected sex code ${name}`)
    const available = table.headers.slice(4).filter(k => rows.some(r => !['NA', '', null].includes(get(table, r, k))))
    const sections = [
      { topic: 'overview', title: { en: 'The deposited morphology record', zh: '存档的形态记录' }, sourceIds: ['amphibian-morphology'], text: { en: `The version 3 deposit records ${name} within ${genus}, ${family}, ${order}. Its source concept is retained independently of current COL26.8 species. Original trait cells, sex codes and bibliographic rows accompany this record.`, zh: `第 3 版存档将 ${name} 记在 ${genus}、${family}、${order} 下。此来源概念与当前 COL26.8 物种分别保留；原性状单元格、性别代码和书目行附在本记录中。` } },
      { topic: 'morphology', title: { en: 'Sex-specific measurement material', zh: '按性别保留的测量材料' }, sourceIds: ['amphibian-morphology'], text: { en: `The compilation retains ${rows.length} rows and ${available.length} populated trait columns for this source concept. Recorded sex codes are ${sexCodes.join(', ')}: F and M denote the source female and male categories; J denotes juvenile material, and NA leaves the category unspecified. These are compiled rows rather than unique specimen counts. Values from separate sexes, life stages and publications must not be pooled into a single diagnostic size. Missing cells do not establish absence of an anatomical structure.`, zh: `汇编为这一来源概念保留 ${rows.length} 行，${available.length} 个性状列含有非空记录。性别代码为 ${sexCodes.join('、')}：F、M 分别为来源中的雌性、雄性类别，J 为幼体材料，NA 为未指定类别。汇编行数不是去重的标本数；不同性别、发育阶段和文献的值不能合并成一个鉴别尺寸。缺失单元格也不代表相应解剖结构不存在。` } }
    ]
    const candidates = col.filter(x => x.scientificName === name && x.classification.some(y => y.rank === 'family' && y.scientificName === family) && x.classification.some(y => y.rank === 'order' && y.scientificName === order))
    const path = `content/topics/research/AmphibianMorphology/${[order, family, genus, name].map(scientificNameSegment).join('/')}`
    const binding = { referenceId, metadataVariant: 0, sourceKey: 'amphibian-morphology', usage: { locator: `${table.sourceFile}, rows ${rows.map(r => r.rowNumber).join(', ')}; Reference.csv rows ${refs.map(r => r.rowNumber).join(', ') || 'none'}`, scope: { en: 'Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.', zh: '存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。' } }, originalFields: ['id', ...Object.keys(sourceRecord), 'locator', 'scope'] }
    const record = { scientificName: name, name: { en: name, zh: name }, sourceClassification: { order, family, genus }, checkedAt: '2026-10-02',  sections, sources: { referenceBindings: [binding] }, originalColumns: table.headers, originalMeasurementRows: rows, originalReferenceColumns: bibliography.headers, originalReferenceRows: refs, availableTraitCodes: available, sourceConceptMapping: { status: 'unresolved', candidateColIds: candidates.map(x => x.colId) }, quantitativeLengthUnits: 'not-confirmed; absolute dimensions omitted from reader claims', limitations: { en: 'The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.', zh: '读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。' } }
    if (!fs.existsSync(`${path}/evidence.md`)) writeNodeContent(path, { kind: 'research-context', scientificName: name, displayName: `${name} — morphology source`, source: { authority: 'Amphibian morphology version 3', sourceUrl: sourceRecord.url } }, { 'amphibian-morphology-reader': record })
    for (const locale of ['en', 'zh']) {
      const file = `${path}/page.${locale}.md`
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
    }
    ledger.push({ scientificName: name, order, family, path, measurementRows: rows.length, availableTraitColumns: available.length, bibliographyRows: refs.length, candidateColIds: candidates.map(x => x.colId), mappingStatus: 'unresolved' })
  }
}
fs.writeFileSync('docs/amphibia-content/morphology-coverage.json', JSON.stringify(ledger, null, 2) + '\n')
console.log(JSON.stringify({ sourceConcepts: ledger.length, measurementRows: ledger.reduce((n, x) => n + x.measurementRows, 0), currentColCandidates: ledger.filter(x => x.candidateColIds.length).length, absoluteUnitsConfirmed: false }))
