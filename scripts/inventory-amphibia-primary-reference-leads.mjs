import fs from 'node:fs'
import crypto from 'node:crypto'
import { gunzipSync } from 'node:zlib'
const source = JSON.parse(fs.readFileSync('data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json')).source
const identity = JSON.parse(fs.readFileSync('docs/amphibia-content/itis-distribution-coverage.json')).ledger
const coverage = JSON.parse(fs.readFileSync('docs/amphibia-content/species-coverage.json'))
const needed = new Set(identity.map(x => x.sourceTsn).filter(Boolean))
const taxa = new Map(), refs = new Map(), inputs = []
for (const member of ['Taxon.tsv', 'Reference.tsv']) {
  for (const file of source.members.find(x => x.member === member).files) {
    const bytes = fs.readFileSync(file.path)
    if (crypto.createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`Source shard changed ${file.path}`)
    let retained = 0
    for (const line of gunzipSync(bytes).toString('utf8').split('\n')) {
      if (!line) continue
      const row = JSON.parse(line)
      if (member === 'Taxon.tsv' && needed.has(row.fields.ID)) { taxa.set(row.fields.ID, row); retained++ }
      if (member === 'Reference.tsv') { refs.set(row.fields.ID, row); retained++ }
    }
    if (retained) inputs.push({ path: file.path, sha256: file.sha256, member, retainedRows: retained })
  }
}
const ledger = identity.map(id => {
  const species = coverage.find(x => x.colId === id.colId)
  const taxon = taxa.get(id.sourceTsn)
  const refId = taxon?.fields.referenceID
  const bibliography = refId && refId !== 'NULL' ? refs.get(refId) ?? null : null
  return { colId: id.colId, path: species.path, sourceTsn: id.sourceTsn, originalTaxonRow: taxon ?? null, originalReferenceRow: bibliography, status: bibliography ? 'taxonomic-bibliography-lead-not-yet-read' : 'no-explicit-taxon-reference-in-pinned-source', citationRole: 'unclassified; may be a secondary checklist rather than primary biological research', traitSourceCandidates: species.sourceReaderCandidates?.length ?? 0, biologicalClaimsAssigned: false }
})
ledger.sort((a, b) => a.traitSourceCandidates - b.traitSourceCandidates || Number(Boolean(b.originalReferenceRow)) - Number(Boolean(a.originalReferenceRow)) || a.colId.localeCompare(b.colId))
fs.writeFileSync('docs/amphibia-content/primary-reference-leads.json', JSON.stringify({ sourceArchiveSha256: source.archiveSha256, sourceInputs: inputs, ledger }, null, 2) + '\n')
console.log(JSON.stringify({ currentSpecies: ledger.length, exactSourceTaxonRows: taxa.size, explicitReferenceLeads: ledger.filter(x => x.originalReferenceRow).length, noTraitCandidateWithReferenceLead: ledger.filter(x => !x.traitSourceCandidates && x.originalReferenceRow).length }))
