import { amphibianReferenceForSchema } from './amphibia-source-reference.mjs'
import fs from 'node:fs'
import crypto from 'node:crypto'
import { gunzipSync } from 'node:zlib'
import { readNodeContent, writeNodeContent } from './tree-path-content.mjs'
const scope = 'data/sources/snapshots/amphibia-content-scope-2026-10-02'
const original = JSON.parse(fs.readFileSync('data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json'))
const source = original.source
const usages = []
for (let offset = 0; offset <= 8000; offset += 1000) usages.push(...JSON.parse(fs.readFileSync(`${scope}/col26.8-species-${offset}.json`)).result)
const sourceLinks = new Map()
for (const item of usages) {
  const link = item.usage.link ?? item.usage.name.link
  const tsn = /[?&]search_value=(\d+)(?:&|$)/.exec(link ?? '')?.[1]
  if (tsn && item.sectorDatasetKey === 2144) sourceLinks.set(item.id, { tsn, link, scientificName: item.usage.name.scientificName, authorship: item.usage.name.authorship ?? null })
}
const needed = new Set([...sourceLinks.values()].map(x => x.tsn))
const names = new Map(), distributions = new Map(), inputs = []
for (const memberName of ['Name.tsv', 'Distribution.tsv']) {
  for (const file of source.members.find(x => x.member === memberName).files) {
    const bytes = fs.readFileSync(file.path)
    if (crypto.createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`Original source shard changed: ${file.path}`)
    let relevant = 0
    for (const line of gunzipSync(bytes).toString('utf8').split('\n')) {
      if (!line) continue
      const row = JSON.parse(line)
      const key = memberName === 'Name.tsv' ? row.fields.ID : row.fields.taxonID
      if (!needed.has(key)) continue
      relevant++
      if (memberName === 'Name.tsv') {
        if (names.has(key)) throw new Error(`Duplicate source Name ID ${key}`)
        names.set(key, row)
      } else {
        if (!distributions.has(key)) distributions.set(key, [])
        distributions.get(key).push(row)
      }
    }
    if (relevant) inputs.push({ path: file.path, sha256: file.sha256, member: memberName, relevantRows: relevant })
  }
}
const sourceRecord = { title: 'The Integrated Taxonomic Information System — pinned ChecklistBank attempt 118 distribution records', authors: source.editors.map(x => x.name), url: `https://doi.org/${source.versionDoi}`, doi: source.versionDoi, version: `ChecklistBank dataset 2144 attempt 118; source issued ${source.issued}; original citation label ${source.label}`, publishedAt: source.issued, accessedAt: '2026-10-02', license: source.licenseLabel, licenseUrl: source.licenseUrl, licenseAssessment: 'item-level-verified', rightsEvidenceUrl: source.metadataUrl, licenseAppliesTo: 'ITIS-produced records in the pinned ChecklistBank archive; linked third-party publications are excluded.', attribution: `${source.editors.map(x => x.name).join('; ')}. ${source.title}, ChecklistBank dataset 2144 attempt 118 (${source.versionDoi}). Distribution fields are summarized and translated; original rows and archive hashes are retained.` }
const referenceId = 'ref-49e06cbd-4c4a-4a7e-9b4c-07e576ee72c8'
const referenceBytes = fs.readFileSync('data/references.json', 'utf8')
if (!JSON.parse(referenceBytes).some(x => x.id === referenceId)) fs.writeFileSync('data/references.json', referenceBytes.replace(/\]\s*$/, `,\n${JSON.stringify(amphibianReferenceForSchema({ id: referenceId, ...sourceRecord, type: 'dataset', sourceRole: 'distribution-database', fitnessFor: ['taxonomy', 'distribution'], authorsComplete: true, authorsStatus: 'recorded', importedSourceMetadata: [sourceRecord] }), null, 2)}\n]\n`))
const coverage = JSON.parse(fs.readFileSync('docs/amphibia-content/species-coverage.json'))
const ledger = []
let authored = 0
const normalizeAuthorshipRepresentation = value => value?.normalize('NFC').replace(/\band\b/g, '&').replace(/\s+/g, ' ').trim() ?? 'NULL'
for (const entry of coverage) {
  const link = sourceLinks.get(entry.colId)
  const name = link && names.get(link.tsn)
  const exactAuthorship = name?.fields.authorship === (link?.authorship ?? 'NULL')
  const equivalentAuthorshipRepresentation = normalizeAuthorshipRepresentation(name?.fields.authorship) === normalizeAuthorshipRepresentation(link?.authorship)
  if (!name || name.fields.scientificName !== link.scientificName || name.fields.rank !== 'species' || !equivalentAuthorshipRepresentation) {
    ledger.push({ colId: entry.colId, sourceTsn: link?.tsn ?? null, status: 'identity-unresolved', sourceName: name?.fields.scientificName ?? null, sourceAuthorship: name?.fields.authorship ?? null, exactAuthorship })
    continue
  }
  const rows = distributions.get(link.tsn) ?? []
  if (!rows.length) { ledger.push({ colId: entry.colId, sourceTsn: link.tsn, status: 'direct-source-id-without-distribution-row' }); continue }
  const node = readNodeContent(entry.path)
  const profile = node.records['catalogue-profile']
  if (!profile) { ledger.push({ colId: entry.colId, sourceTsn: link.tsn, status: 'existing-profile-schema-review-needed', distributionRows: rows.length }); continue }
  if (profile.sections.some(x => x.sourceIds?.includes('itis-distribution'))) { ledger.push({ colId: entry.colId, sourceTsn: link.tsn, status: 'already-authored', distributionRows: rows.length }); continue }
  const areas = [...new Set(rows.map(x => x.fields.area))]
  profile.sections.push({ topic: 'distribution', title: { en: 'Recorded geographic labels', zh: '来源记载的地理标签' }, sourceIds: ['itis-distribution'], text: {
    en: `The pinned ITIS source lists ${areas.join('; ')} for ${link.scientificName}. The connection uses the exact ITIS TSN ${link.tsn} supplied by COL26.8, with the scientific name and authorship checked against the archived source Name row (allowing only Unicode/whitespace formatting and “and” versus “&” in the author list). These are textual geographic labels rather than precise range boundaries, local observation dates or population measurements. ${rows.every(x => x.fields.status === 'NULL') ? 'The distribution-status field is unspecified, so native versus introduced status cannot be assigned from these rows.' : 'Original distribution-status fields are retained separately and are not generalized across all listed areas.'}`,
    zh: `固定的 ITIS 来源为 ${link.scientificName} 列出 ${areas.join('；')}。关联使用 COL26.8 明确给出的 ITIS TSN ${link.tsn}，并已对照存档 Name 行核对科学名称和命名作者，仅允许 Unicode、空白格式及作者列表中 and 与 & 的表示差异。这些是文字地理标签，不是精确分布边界、当地观察日期或种群测量。${rows.every(x => x.fields.status === 'NULL') ? '分布状态字段未指定，因此不能根据这些行判定原生或引入状态。' : '原始分布状态字段单独保留，不推广到所有所列地域。'}`,
  } })
  profile.sources.referenceBindings.push({ referenceId, metadataVariant: 0, sourceKey: 'itis-distribution', usage: { locator: `Name.tsv ID ${link.tsn}, row ${name.locator.row}; Distribution.tsv rows ${rows.map(x => x.locator.row).join(', ')}; pinned archive SHA-256 ${source.archiveSha256}`, scope: { en: 'Textual geographic labels in the exact source TSN record. No inferred origin status, complete geographic range, contemporary population or species-concept equivalence beyond the recorded source linkage.', zh: '确切来源 TSN 记录中的文字地理标签；不推断原生状态、完整分布、当代种群，也不将所记来源链接推广为额外的物种概念等同声明。' } }, originalFields: ['id', ...Object.keys(sourceRecord), 'locator', 'scope'] })
  profile.distributionSourceEvidence = { sourceDatasetId: 2144, sourceTsn: link.tsn, recordedColSourceLink: link.link, identityMethod: 'COL-supplied direct source TSN plus exact archived scientificName and species rank; authorship representation normalization limited to NFC, whitespace and and/& conjunction.', originalSourceAuthorship: name.fields.authorship, colAuthorship: link.authorship, exactAuthorship, equivalentAuthorshipRepresentation, nameLocator: name.locator, rows }
  const indexBytes = fs.readFileSync(`${entry.path}/index.yaml`)
  writeNodeContent(entry.path, node.index, node.records)
  fs.writeFileSync(`${entry.path}/index.yaml`, indexBytes)
  for (const locale of ['en', 'zh']) {
    const file = `${entry.path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  entry.distributionReaderStatus = 'source-linked-geographic-labels'
  entry.biologicalReaderComplete = false
  ledger.push({ colId: entry.colId, sourceTsn: link.tsn, status: 'authored', distributionRows: rows.length })
  authored++
}
fs.writeFileSync('docs/amphibia-content/itis-distribution-coverage.json', JSON.stringify({ sourceArchiveSha256: source.archiveSha256, sourceInputs: inputs, ledger }, null, 2) + '\n')
fs.writeFileSync('docs/amphibia-content/species-coverage.json', JSON.stringify(coverage, null, 2) + '\n')
console.log(JSON.stringify({ authored, statuses: ledger.reduce((a, x) => (a[x.status] = (a[x.status] ?? 0) + 1, a), {}), biologicalCompletionCertified: false }))
