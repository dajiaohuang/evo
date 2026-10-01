import { digest } from './tree-path-content.mjs'

const usageKeys = new Set([
  'scope', 'locator', 'accessedAt', 'licenseAssessment', 'rightsEvidenceUrl', 'attribution', 'stableId',
  'originalSourceText', 'originalLanguage', 'sourceField', 'sourceRowNumber', 'archiveSourceId', 'archiveSourceIds',
  'referenceRowNumbers', 'sourceCitations', 'licenseEvidenceLocator', 'licenseAppliesTo', 'sourcePackLicenseAssessment',
  'citedWorkLicenseAssessment',
])
const citationUsageKeys = new Set(['identifier', 'referenceRowNumber', 'license', 'licenseAssessment', 'rightsHolder'])
const orderedJson = value => JSON.stringify(value && typeof value === 'object' && !Array.isArray(value)
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, JSON.parse(orderedJson(value[key]))]))
  : Array.isArray(value) ? value.map(item => JSON.parse(orderedJson(item))) : value)

export function orderedAuthors(value) {
  if (Array.isArray(value)) return { authors: value, authorsComplete: value.length > 0, authorsStatus: value.length ? 'recorded' : 'unresolved' }
  if (typeof value !== 'string' || !value.trim()) return { authors: [], authorsComplete: false, authorsStatus: 'unresolved' }
  const incomplete = /\bet\s+al\.?|\band others\b|等(?:人)?/.test(value)
  const authors = value.split(/\s*;\s*/).map(name => name.trim()).filter(name => name && !/^et\s+al\.?$/i.test(name))
  return { authors, authorsComplete: !incomplete, authorsStatus: incomplete ? 'incomplete-verbatim' : 'recorded', authorsVerbatim: value }
}

function doiOf(source) {
  const candidate = source.doi?.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').trim()
    ?? /^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i.exec(source.url ?? '')?.[1]
    ?? /^doi:(.+)$/i.exec(source.stableId ?? '')?.[1]
  // Legacy stableId values can append an archive hash and record locator after '; '.
  // Those locators are retained in each evidence usage; they are not part of the DOI.
  return typeof candidate === 'string' ? candidate.split('; ')[0].split(/\s/)[0] : null
}

function referenceUuid(key) {
  const hex = digest(key)
  return `ref-${hex.slice(0, 8)}-${hex.slice(8, 12)}-8${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`
}

export class ContentReferenceCatalogue {
  constructor(references) {
    this.records = references.map(reference => ({ ...reference, ...orderedAuthors(reference.authors) }))
    this.byId = new Map(this.records.map(reference => [reference.id, reference]))
    this.byKey = new Map()
    this.variants = new Map()
    for (const reference of this.records) {
      const doi = doiOf(reference)
      const key = orderedJson({ identifier: doi ? `doi:${doi.toLowerCase()}` : reference.url, version: reference.version ?? null, publishedAt: reference.publishedAt ?? null })
      if (!this.byKey.has(key)) this.byKey.set(key, reference)
      this.variants.set(reference.id, new Map((reference.importedSourceMetadata ?? []).map((variant, index) => [orderedJson(variant), index])))
    }
  }

  bind(source) {
    let doi = doiOf(source)
    const isColUsage = /^https:\/\/www\.checklistbank\.org\/dataset\/316115\/taxon\//.test(source.url ?? '')
    const wfoUsage = /^https:\/\/list\.worldfloraonline\.org\/wfo-[0-9]+-([0-9]{4}-[0-9]{2})(?:$|[/?#])/.exec(source.url ?? '')
    const archiveUrl = /\.zip(?:$|[?#])/.test(source.url ?? '')
    const archiveRow = archiveUrl && ('originalSourceText' in source || 'sourceRowNumber' in source || 'sourceField' in source)
    if (wfoUsage && typeof source.version === 'string') doi = /version DOI (10\.[0-9]+\/[^\s;]+)/i.exec(source.version)?.[1] ?? doi
    const identifier = isColUsage ? 'https://www.checklistbank.org/dataset/316115' : doi ? `doi:${doi.toLowerCase()}` : wfoUsage ? `https://list.worldfloraonline.org/${wfoUsage[1]}` : source.url
    if (!identifier) throw new Error(`Imported reference has no recorded locator: ${source.title ?? source.id}`)
    const version = isColUsage ? 'COL26.8 / 2026-08-20' : wfoUsage ? `WFO ${wfoUsage[1]}` : source.version ?? null
    const artifactSha256 = source.archiveSha256 ?? /archive sha256 ([a-f0-9]{64})/i.exec(source.stableId ?? '')?.[1] ?? null
    const key = orderedJson({ identifier, version, publishedAt: isColUsage ? '2026-08-20' : source.publishedAt ?? null, ...(artifactSha256 ? { artifactSha256 } : {}), ...(archiveUrl && !archiveRow && !doi ? { bibliographicTitle: source.title } : {}) })
    let reference = this.byKey.get(key)
    if (!reference) {
      const id = referenceUuid(key)
      if (this.byId.has(id)) throw new Error(`Reference identity collision: ${id}`)
      reference = {
        id,
        title: isColUsage ? 'Catalogue of Life, version 2026-08-20 (COL26.8), ChecklistBank dataset 316115' : wfoUsage ? `World Flora Online Plant List, version ${wfoUsage[1]}` : archiveRow ? source.sourceCitations?.[0]?.source || 'Archived flora descriptions' : typeof source.title === 'string' ? source.title : source.title?.en ?? source.title?.zh,
        ...(source.title && typeof source.title === 'object' ? { titleTranslations: source.title } : {}),
        ...orderedAuthors(source.authors ?? source.authorNames),
        type: isColUsage || wfoUsage || /\.zip(?:$|[?#])/.test(source.url ?? '') ? 'dataset' : doi ? 'publication' : 'web-resource',
        url: isColUsage ? identifier : wfoUsage && doi ? `https://doi.org/${doi}` : source.url,
        sourceRole: isColUsage || wfoUsage ? 'taxonomic-database' : 'unclassified',
        fitnessFor: isColUsage || wfoUsage ? ['taxonomy'] : [],
        metadataAssignment: 'automated',
        metadataStatus: 'imported-without-bibliographic-enrichment',
        ...(doi ? { doi } : {}),
        ...(version ? { version } : {}),
        ...(typeof source.publishedAt === 'string' && /^\d{4}-\d{2}-\d{2}/.test(source.publishedAt) ? { publishedAt: source.publishedAt } : {}),
        ...(source.publishedYear ? { publishedYear: source.publishedYear } : {}),
        ...(artifactSha256 ? { artifactSha256 } : {}),
      }
      this.records.push(reference)
      this.byId.set(id, reference)
      this.byKey.set(key, reference)
      this.variants.set(id, new Map())
    }
    const metadata = {}, usage = {}
    for (const [name, value] of Object.entries(source)) {
      if (name === 'id') continue
      if (name === 'sourceCitations' && Array.isArray(value)) usage[name] = { citationBindings: value.map(citation => this.bindCitation(citation, source)) }
      else if (usageKeys.has(name) || ((isColUsage || wfoUsage || archiveRow) && ['title', 'url', 'version', 'publishedAt'].includes(name))) usage[name] = value
      else metadata[name] = value
    }
    const variantKey = orderedJson(metadata)
    const variants = this.variants.get(reference.id)
    let variant = variants.get(variantKey)
    if (variant === undefined) {
      reference.importedSourceMetadata ??= []
      variant = reference.importedSourceMetadata.length
      reference.importedSourceMetadata.push(metadata)
      variants.set(variantKey, variant)
    }
    return { referenceId: reference.id, metadataVariant: variant, sourceKey: source.id, usage, originalFields: Object.keys(source) }
  }

  bindCitation(citation, container) {
    const bibliography = {}, usage = {}
    for (const [key, value] of Object.entries(citation)) (citationUsageKeys.has(key) ? usage : bibliography)[key] = value
    const key = orderedJson({ kind: 'verbatim-archive-citation', citation: bibliography.citation ?? null, title: bibliography.title ?? null, creator: bibliography.creator ?? null, date: bibliography.date ?? null, source: bibliography.source ?? null, ...(!bibliography.citation && !bibliography.title ? { archive: container.url, record: citation.identifier ?? null } : {}) })
    let reference = this.byKey.get(key)
    if (!reference) {
      const id = referenceUuid(key)
      reference = {
        id,
        title: bibliography.title || bibliography.citation || 'Unresolved citation in an archived source record',
        ...orderedAuthors(bibliography.creator),
        type: 'bibliographic-record',
        sourceRole: 'unclassified',
        fitnessFor: [],
        metadataAssignment: 'automated',
        metadataStatus: 'verbatim-archive-citation-unparsed',
        importedCitationMetadata: [bibliography],
      }
      this.records.push(reference)
      this.byId.set(id, reference)
      this.byKey.set(key, reference)
    }
    let variant = reference.importedCitationMetadata.findIndex(value => orderedJson(value) === orderedJson(bibliography))
    if (variant < 0) { variant = reference.importedCitationMetadata.length; reference.importedCitationMetadata.push(bibliography) }
    return { referenceId: reference.id, metadataVariant: variant, usage, originalFields: Object.keys(citation) }
  }

  detach(value) {
    if (Array.isArray(value)) return value.map(item => this.detach(item))
    if (!value || typeof value !== 'object') return value
    return Object.fromEntries(Object.entries(value).map(([key, item]) => {
      if (['sources', 'readerSources'].includes(key) && Array.isArray(item) && item.every(source => source && typeof source.id === 'string' && typeof source.url === 'string')) {
        return [key, { referenceBindings: item.map(source => this.bind(source)) }]
      }
      return [key, this.detach(item)]
    }))
  }
}

export function attachContentReferences(value, referencesById) {
  if (Array.isArray(value)) return value.map(item => attachContentReferences(item, referencesById))
  if (!value || typeof value !== 'object') return value
  if (Array.isArray(value.citationBindings) && Object.keys(value).length === 1) {
    return value.citationBindings.map(binding => {
      const metadata = referencesById.get(binding.referenceId)?.importedCitationMetadata?.[binding.metadataVariant]
      if (!metadata) throw new Error(`Missing imported citation metadata: ${binding.referenceId}`)
      const citation = { ...metadata, ...binding.usage }
      return Object.fromEntries(binding.originalFields.map(key => [key, citation[key]]))
    })
  }
  if (Array.isArray(value.referenceBindings) && Object.keys(value).length === 1) {
    return value.referenceBindings.map(binding => {
      const reference = referencesById.get(binding.referenceId)
      const metadata = reference?.importedSourceMetadata?.[binding.metadataVariant]
      if (!metadata) throw new Error(`Missing imported reference metadata: ${binding.referenceId}/${binding.metadataVariant}`)
      const source = attachContentReferences({ id: binding.sourceKey, ...structuredClone(metadata), ...binding.usage }, referencesById)
      return Object.fromEntries(binding.originalFields.map(key => {
        if (!(key in source)) throw new Error(`Missing reference field ${binding.referenceId}/${key}`)
        return [key, source[key]]
      }))
    })
  }
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, attachContentReferences(item, referencesById)]))
}
