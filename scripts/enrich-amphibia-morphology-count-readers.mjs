import fs from 'node:fs'
import { readNodeContent, writeNodeContent, semanticJson } from './tree-path-content.mjs'
import { appendAmphibianReference } from './amphibia-source-reference.mjs'
const source = { title: 'Amphibian traits database: A global database on morphological traits of amphibians', authors: ['Na Huang', 'Xinyuan Sun', 'Yanfang Song', 'Zhiyong Yuan', 'Weiwei Zhou'], year: 2023, doi: '10.1111/geb.13656', url: 'https://doi.org/10.1111/geb.13656', accessedAt: '2026-10-02', licenseAssessment: 'unresolved', licenseAppliesTo: 'No article text or figures reproduced; own factual descriptions of count definitions. Deposited trait values retain their independent dataset license.' }
const referenceId = 'ref-d4c49f33-d905-46a0-8a88-cff8d472232d'
appendAmphibianReference({ id: referenceId, ...source, type: 'article', sourceRole: 'primary-study', fitnessFor: ['methods', 'morphology'], authorsComplete: true, authorsStatus: 'recorded', importedSourceMetadata: [source] })
const definitions = [['TA1', 'annuli counted dorsally', '背侧计数的环褶'], ['TA2', 'annuli counted ventrally', '腹侧计数的环褶'], ['PVA', 'annuli behind the vent', '泄殖孔后的环褶'], ['VA', 'annuli interrupted by the vent', '被泄殖孔打断的环褶']]
const coverage = JSON.parse(fs.readFileSync('docs/amphibia-content/morphology-coverage.json'))
const receipt = []
for (const entry of coverage.filter(entry => entry.order === 'Gymnophiona')) {
  const node = readNodeContent(entry.path), record = node.records['amphibian-morphology-reader']
  const index = fs.readFileSync(`${entry.path}/index.yaml`), before = semanticJson(node.records)
  const observations = []
  for (const row of record.originalMeasurementRows) {
    const counts = definitions.map(([code, en, zh]) => ({ code, en, zh, value: row.values[record.originalColumns.indexOf(code)] })).filter(field => field.value !== null && field.value !== '' && field.value !== 'NA' && Number.isFinite(Number(field.value)) && Number(field.value) >= 0)
    if (counts.length) observations.push({ rowNumber: row.rowNumber, sexCode: row.values[record.originalColumns.indexOf('Sex')], counts })
  }
  if (!observations.length) continue
  record.sections = record.sections.filter(section => section.sourceReaderKind !== 'deposited-annulus-counts')
  record.sections.push({ topic: 'morphology', sourceReaderKind: 'deposited-annulus-counts', title: { en: 'Deposited annulus counts', zh: '存档的环褶计数' }, sourceIds: ['amphibian-morphology', 'huang-2023-methods'], text: { en: `The deposited rows report ${observations.map(row => `row ${row.rowNumber} (${row.sexCode}): ${row.counts.map(field => `${field.en} ${field.value}`).join(', ')}`).join('; ')}. F/M denote recorded female/male categories, J juvenile material and NA unspecified sex. These compiled row values can include summaries and do not establish fixed diagnostic counts for every individual. Dorsal, ventral and post-vent counts remain distinct; missing fields are not zero.`, zh: `存档行记载 ${observations.map(row => `第 ${row.rowNumber} 行（${row.sexCode}）：${row.counts.map(field => `${field.zh} ${field.value}`).join('、')}`).join('；')}。F/M 为所记雌性/雄性类别，J 为幼体，NA 为未指定性别。汇编行值可能包含汇总值，不能确立每只个体不变的鉴别计数。背侧、腹侧与泄殖孔后计数分别保留；缺失字段不是零。` } })
  record.verifiedCountDefinitions = { doi: source.doi, locator: 'Table 3, printed page 638', fields: definitions.map(([code, meaning]) => ({ code, meaning })), absoluteLengthUnitsVerified: false }
  if (!record.sources.referenceBindings.some(binding => binding.referenceId === referenceId)) record.sources.referenceBindings.push({ referenceId, metadataVariant: 0, sourceKey: 'huang-2023-methods', usage: { locator: 'Table 3, page 638: TA1, TA2, PVA and VA definitions', scope: { en: 'Anatomical count meanings only; absolute length units remain unconfirmed.', zh: '仅核对解剖计数含义；绝对长度单位仍未确认。' } }, originalFields: ['id', ...Object.keys(source), 'locator', 'scope'] })
  if (semanticJson(node.records) !== before) {
    writeNodeContent(entry.path, node.index, node.records)
    fs.writeFileSync(`${entry.path}/index.yaml`, index)
  }
  receipt.push({ scientificName: entry.scientificName, path: entry.path, depositedRowsWithCounts: observations.length, candidateColIds: entry.candidateColIds })
}
fs.writeFileSync('docs/amphibia-content/morphology-count-section-coverage.json', JSON.stringify(receipt, null, 2) + '\n')
console.log(JSON.stringify({ sourceReadersWithCountSections: receipt.length, originalCountRows: receipt.reduce((n, row) => n + row.depositedRowsWithCounts, 0), absoluteLengthUnitsVerified: false, testsRun: false }))
