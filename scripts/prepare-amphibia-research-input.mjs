import fs from 'node:fs'
import crypto from 'node:crypto'
export function prepareAmphibianResearchInput(batch) {
  const file = 'docs/amphibia-content/primary-reader-authoring-input.json'
  const inputs = JSON.parse(fs.readFileSync(file))
  const taxa = new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(taxon => [taxon.colId, taxon.scientificName]))
  for (const entry of batch) {
    if (taxa.get(entry.colId) !== entry.name) throw new Error(`Pinned species mismatch ${entry.colId}`)
    const reading = JSON.parse(fs.readFileSync(`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${entry.pmc}/reading-sections.json`))
    const hex = crypto.createHash('sha256').update(reading.articleIds.doi.toLowerCase()).digest('hex')
    const referenceId = `ref-${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`
    const key = `primary-${entry.pmc.toLowerCase()}-${entry.colId.toLowerCase()}`
    const study = { ...entry, key, referenceId, dir: `amphibia-primary-corpus-2026-10-02/${entry.pmc}`, title: reading.title, authors: entry.authors ?? reading.authorsAsRecorded, sourceAuthorMetadataAsRecorded: reading.authorsAsRecorded, doi: reading.articleIds.doi, readScope: `${entry.name}: ${entry.readScope}; no figures or deposited datasets reproduced` }
    const existing = inputs.findIndex(input => input.key === key)
    if (existing >= 0) inputs[existing] = study
    else inputs.push(study)
  }
  fs.writeFileSync(file, JSON.stringify(inputs, null, 2) + '\n')
  console.log(JSON.stringify({ speciesPrepared: batch.length, bilingualSections: batch.reduce((n, entry) => n + entry.sections.length, 0), testsRun: false }))
}
