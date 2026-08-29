import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { gunzipSync } from 'node:zlib'
import { zipSync, strToU8 } from 'fflate'
import { afterEach, describe, expect, it } from 'vitest'
import { buildColRegistry, normalizeScientificName, parseSourceMetadata, sha256File } from './col-registry-lib.mjs'

const temporaryDirectories = []
afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true })
})

describe('Catalogue of Life registry projection', () => {
  it('normalizes scientific names deterministically', () => {
    expect(normalizeScientificName('×Ábies  alba')).toBe('abies alba')
  })

  it('extracts source checklist lineage', () => {
    const source = parseSourceMetadata('1014', '<dataset><alternateIdentifier>10.1234/example</alternateIdentifier><title>Example list</title><shortName>EX</shortName><pubDate>2026-01-02</pubDate><intellectualRights><ulink url="https://creativecommons.org/licenses/by/4.0/"><citetitle>CC BY 4.0</citetitle></ulink></intellectualRights><distribution><online><url function="information">https://example.test</url></online></distribution></dataset><additionalMetadata><metadata><gbif><citation>Example citation</citation></gbif><col><version>v1</version></col></metadata></additionalMetadata>')
    expect(source).toMatchObject({ datasetId: '1014', title: 'Example list', version: 'v1', doi: '10.1234/example', citation: 'Example citation', licenseLabel: 'CC BY 4.0' })
  })

  it('keeps accepted species and resolving usages separate and reproducible', async () => {
    const directory = mkdtempSync(join(tmpdir(), 'evo-col-registry-'))
    temporaryDirectories.push(directory)
    const archivePath = join(directory, 'fixture.zip')
    const header = ['taxonID', 'parentNameUsageID', 'acceptedNameUsageID', 'originalNameUsageID', 'scientificNameID', 'datasetID', 'taxonomicStatus', 'taxonRank', 'scientificName', 'scientificNameAuthorship', 'notho', 'genericName', 'infragenericEpithet', 'specificEpithet', 'infraspecificEpithet', 'cultivarEpithet', 'nameAccordingTo', 'namePublishedIn', 'nomenclaturalCode', 'nomenclaturalStatus', 'kingdom', 'phylum', 'class', 'order', 'superfamily', 'family', 'subfamily', 'tribe', 'subtribe', 'genus', 'subgenus', 'taxonRemarks', 'references', 'merged']
    const row = (values) => header.map((field) => values[field] ?? '').join('\t')
    const taxon = [
      header.join('\t'),
      row({ taxonID: 'accepted-1', parentNameUsageID: 'genus-1', datasetID: '10', taxonomicStatus: 'accepted', taxonRank: 'species', scientificName: 'Abies alba', scientificNameAuthorship: 'Mill.', kingdom: 'Plantae', phylum: 'Tracheophyta', class: 'Pinopsida', order: 'Pinales', family: 'Pinaceae', genus: 'Abies' }),
      row({ taxonID: 'synonym-1', acceptedNameUsageID: 'accepted-subspecies-1', datasetID: '10', taxonomicStatus: 'synonym', taxonRank: 'species', scientificName: 'Pinus picea', scientificNameAuthorship: 'L.', kingdom: 'Plantae', family: 'Pinaceae', genus: 'Pinus' }),
      row({ taxonID: 'accepted-subspecies-1', parentNameUsageID: 'accepted-1', datasetID: '10', taxonomicStatus: 'accepted', taxonRank: 'subspecies', scientificName: 'Abies alba minor', scientificNameAuthorship: 'Test', kingdom: 'Plantae', family: 'Pinaceae', genus: 'Abies' }),
      row({ taxonID: 'provisional-1', datasetID: '10', taxonomicStatus: 'provisionally accepted', taxonRank: 'species', scientificName: 'Abies dubia' }),
      row({ taxonID: 'genus-1', datasetID: '10', taxonomicStatus: 'accepted', taxonRank: 'genus', scientificName: 'Abies' }),
    ].join('\n') + '\n'
    const sourceXml = '<dataset><alternateIdentifier>10.1/example</alternateIdentifier><title>Example checklist</title><shortName>EX</shortName><pubDate>2026-01-01</pubDate></dataset><additionalMetadata><metadata><gbif><citation>Example</citation></gbif><col><version>1</version></col></metadata></additionalMetadata>'
    writeFileSync(archivePath, zipSync({ 'dataset/10.xml': strToU8(sourceXml), 'Taxon.tsv': strToU8(taxon) }, { level: 6 }))
    const archiveHash = await sha256File(archivePath)
    const provenance = {
      registryType: 'nomenclatural-and-taxonomic-checklist', releaseAlias: 'TEST', releaseDate: '2026-01-01', checklistBankDatasetKey: 1, doi: '10.1/test', citation: 'Test', licenseRaw: 'cc by', licenseLabel: 'CC BY 4.0', licenseSpdx: 'CC-BY-4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', snapshotBoundary: 'test', scientificLimitations: [], nameUsageCount: 5, acceptedSpeciesCount: 1, provisionallyAcceptedSpeciesCount: 1, sourceChecklistCount: 1, archive: { computedSha256: archiveHash },
    }
    const firstOutput = join(directory, 'first')
    const secondOutput = join(directory, 'second')
    const first = await buildColRegistry({ archivePath, outputRoot: firstOutput, provenance })
    const second = await buildColRegistry({ archivePath, outputRoot: secondOutput, provenance })
    expect(first.manifest.counts).toMatchObject({ nameUsages: 5, acceptedSpecies: 1, provisionallyAcceptedSpecies: 1, resolvingNameUsages: { synonym: 1, 'ambiguous-synonym': 0, misapplied: 0 } })
    expect(first.manifest.acceptedTargets).toMatchObject({ uniqueReferencedIds: 1, records: 1, unresolvedIds: 0, ranks: { subspecies: 1 } })
    expect(first.manifest.acceptedTargets.totalSourceBytes).toBeGreaterThan(0)
    expect(first.manifest.upstreamTaxonUrlTemplate).toBe('https://www.checklistbank.org/dataset/1/taxon/{id}')
    expect(first.manifest.search.totalCompressedBytes).toBe(second.manifest.search.totalCompressedBytes)
    expect(first.manifest.search.files.map((file) => file.sha256)).toEqual(second.manifest.search.files.map((file) => file.sha256))
    const accepted = first.manifest.search.files.find((file) => file.prefix === 'ab')
    const synonym = first.manifest.search.files.find((file) => file.prefix === 'pi')
    expect(JSON.parse(gunzipSync(readFileSync(join(firstOutput, accepted.path))).toString('utf8').trim())).toMatchObject({ id: 'accepted-1', status: 'accepted', sourceDatasetId: '10' })
    expect(JSON.parse(gunzipSync(readFileSync(join(firstOutput, synonym.path))).toString('utf8').trim())).toMatchObject({ id: 'synonym-1', status: 'synonym', acceptedId: 'accepted-subspecies-1' })
    const targetFile = first.manifest.acceptedTargets.files[0]
    expect(JSON.parse(gunzipSync(readFileSync(join(firstOutput, targetFile.path))).toString('utf8').trim())).toMatchObject({ id: 'accepted-subspecies-1', rank: 'subspecies', status: 'accepted' })
  })
})
