// Missing bibliography dates remain unknown. A discovery lead is not a dated,
// verified publication; retain the source metadata needed for later enrichment.
export function isRecordedUndatedLead(reference) {
  if (reference.dateStatus !== 'unresolved-in-source-metadata' || reference.publishedYear || reference.publishedAt || reference.accessedAt || reference.version) return false
  const unclassified = reference.sourceRole === 'unclassified' && reference.fitnessFor?.length === 0
  const importedTaxonomicLocator = reference.type === 'web-resource' && reference.sourceRole === 'taxonomic-database' && reference.authorsStatus === 'unresolved' && reference.fitnessFor?.every(value => ['taxonomy', 'range'].includes(value))
  if (!unclassified && !importedTaxonomicLocator) return false
  const field = reference.type === 'bibliographic-record' && reference.metadataStatus === 'verbatim-archive-citation-unparsed'
    ? 'importedCitationMetadata'
    : ['publication', 'web-resource'].includes(reference.type) && reference.metadataStatus === 'imported-without-bibliographic-enrichment'
      ? 'metadataVariants' : null
  return Boolean(field && reference[field]?.some(value => value && typeof value === 'object' && Object.keys(value).length > 0))
}

export function hasRecordedPaperLocator(reference) {
  if (typeof reference.doi === 'string' && reference.doi.trim()) return true
  try { const url = new URL(reference.url); return url.protocol === 'https:' && Boolean(url.hostname) }
  catch { return false }
}
