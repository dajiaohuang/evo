import { describe, expect, it } from 'vitest'
import { isRecordedUndatedLead, hasRecordedPaperLocator } from './reference-date-status.mjs'

describe('undated imported reference leads', () => {
  const lead = { type: 'bibliographic-record', dateStatus: 'unresolved-in-source-metadata', metadataStatus: 'verbatim-archive-citation-unparsed', sourceRole: 'unclassified', fitnessFor: [], importedCitationMetadata: [{ citation: 'Verbatim unresolved citation' }] }
  it('retains a provenance-bearing unresolved citation without inventing a date', () => {
    expect(isRecordedUndatedLead(lead)).toBe(true)
  })
  it('does not excuse papers, classified sources or empty metadata', () => {
    for (const change of [{ type: 'paper' }, { sourceRole: 'primary-study' }, { fitnessFor: ['taxonomy'] }, { importedCitationMetadata: [] }, { dateStatus: undefined }, { accessedAt: '2026-10-03' }]) {
      expect(isRecordedUndatedLead({ ...lead, ...change })).toBe(false)
    }
  })
  it('retains an undated imported database locator without assigning a global version', () => {
    expect(isRecordedUndatedLead({ ...lead, type: 'web-resource', sourceRole: 'taxonomic-database', authorsStatus: 'unresolved', fitnessFor: ['taxonomy', 'range'], metadataStatus: 'imported-without-bibliographic-enrichment', metadataVariants: [{ title: 'Original database taxon page', url: 'https://example.org/taxon/1' }] })).toBe(true)
  })
  it('requires a DOI or an actual recorded HTTPS locator for a paper', () => {
    expect(hasRecordedPaperLocator({ doi: '10.1234/example' })).toBe(true)
    expect(hasRecordedPaperLocator({ url: 'https://example.org/journal/article.pdf' })).toBe(true)
    for (const value of [{}, { url: 'https://' }, { url: 'http://example.org/article' }]) expect(hasRecordedPaperLocator(value)).toBe(false)
  })
})
