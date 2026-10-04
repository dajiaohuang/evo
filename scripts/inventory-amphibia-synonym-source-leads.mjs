import fs from 'node:fs'
import crypto from 'node:crypto'
import { gunzipSync } from 'node:zlib'
const base = 'docs/amphibia-content'
const source = JSON.parse(fs.readFileSync('data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json')).source
const identity = JSON.parse(fs.readFileSync(`${base}/itis-distribution-coverage.json`)).ledger
const tsnToCol = new Map(identity.map(x => [x.sourceTsn, x.colId]))
const coverage = new Map(JSON.parse(fs.readFileSync(`${base}/species-coverage.json`)).map(x => [x.colId, x]))
const synonymRows = [], names = new Map(), inputs = []
function rows(member, retain) {
  for (const file of source.members.find(x => x.member === member).files) {
    const bytes = fs.readFileSync(file.path)
    if (crypto.createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`Changed source shard ${file.path}`)
    let kept = 0
    for (const line of gunzipSync(bytes).toString('utf8').split('\n')) if (line && retain(JSON.parse(line))) kept++
    if (kept) inputs.push({ path: file.path, sha256: file.sha256, member, retainedRows: kept })
  }
}
rows('Synonym.tsv', row => { if (!tsnToCol.has(row.fields.taxonID)) return false; synonymRows.push(row); return true })
const neededNames = new Set(synonymRows.map(x => x.fields.nameID))
rows('Name.tsv', row => { if (!neededNames.has(row.fields.ID)) return false; names.set(row.fields.ID, row); return true })
const bySourceName = new Map()
for (const file of ['amphibio-source-coverage', 'caecilian-traits-coverage', 'tadpole-traits-coverage', 'morphology-coverage', 'amphitherm-source-coverage']) {
  for (const row of JSON.parse(fs.readFileSync(`${base}/${file}.json`))) {
    if (!bySourceName.has(row.scientificName)) bySourceName.set(row.scientificName, [])
    bySourceName.get(row.scientificName).push({ dataset: file, path: row.path ?? row.readerPath, originalCandidateColIds: row.candidateColIds })
  }
}
const leads = []
for (const synonym of synonymRows) {
  const name = names.get(synonym.fields.nameID)
  if (!name) throw new Error(`Missing archived synonym Name ${synonym.fields.nameID}`)
  const colId = tsnToCol.get(synonym.fields.taxonID)
  const candidates = bySourceName.get(name.fields.scientificName) ?? []
  if (!candidates.length) continue
  leads.push({ colId, currentPath: coverage.get(colId).path, sourceTsn: synonym.fields.taxonID, originalSynonymRow: synonym, originalNameRow: name, candidateSourceReaders: candidates, currentSpeciesHasDirectNameTraitCandidate: Boolean(coverage.get(colId).sourceReaderCandidates?.length), mappingStatus: 'archived-ITIS-synonym-link-with-same-name-source-candidates; source-authorship-and-concept-scope-unresolved', biologicalClaimsAssigned: false })
}
fs.writeFileSync(`${base}/synonym-source-leads.json`, JSON.stringify({ sourceArchiveSha256: source.archiveSha256, sourceInputs: inputs, synonymRows: synonymRows.length, leads }, null, 2) + '\n')
console.log(JSON.stringify({ archivedCurrentSpeciesSynonymRows: synonymRows.length, synonymSourceLeads: leads.length, currentSpeciesWithLeads: new Set(leads.map(x => x.colId)).size, previouslyWithoutTraitCandidates: new Set(leads.filter(x => !x.currentSpeciesHasDirectNameTraitCandidate).map(x => x.colId)).size, sourceConceptEquivalenceCertified: false }))
