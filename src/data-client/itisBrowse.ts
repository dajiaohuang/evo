import { loadCatalogueResourcePackManifest, loadPackageManifest, loadRuntimeFile } from './staticDataClient'
import type { CatalogueResourcePackPayloadFile, ItisNomenclatureName, ItisNomenclatureRecord, RuntimeItisNomenclatureCollection } from './types'

export interface ItisBrowseCollection {
  id: string
  label: string
  exportDate: string
  boundary: { en: string; zh: string }
  completeRows: boolean
  colCount: number
  sourceOnlyCount: number
  colFiles: CatalogueResourcePackPayloadFile[]
  sourceOnlyFiles: CatalogueResourcePackPayloadFile[]
}

// Catalogue sidecars have two historical layouts; retain their declared partition
// membership instead of inferring it from filenames or taxon names.
interface CatalogueItisBrowseMetadata {
  id: string
  provider: string
  source: { exportDate?: string }
  scope: string | { colRootScientificName?: string }
  scopeZh?: string
  evidenceBoundary?: { en: string; zh: string }
  delivery: { profile: string; completeRows: boolean }
  counts: { eligible: number; upstreamOnly: number }
  files: Array<CatalogueResourcePackPayloadFile & { role?: string }>
  upstreamOnly?: { files: Array<{ path: string }> }
}

export function packageItisBrowseCollections(collections: RuntimeItisNomenclatureCollection[]): ItisBrowseCollection[] {
  return collections.map((collection) => ({
    id: collection.id,
    label: collection.id.replace(/^itis-/, '').replace(/-tsn-crosswalk$/, '').replaceAll('-', ' '),
    exportDate: String(collection.source.exportDate ?? ''),
    boundary: collection.evidenceBoundary,
    completeRows: collection.delivery.profile === 'native-full' && collection.delivery.completeRows,
    colCount: collection.counts.total,
    sourceOnlyCount: collection.counts.itisUpstreamOnly,
    colFiles: collection.files,
    sourceOnlyFiles: collection.upstreamOnlyFiles,
  }))
}

export function catalogueItisBrowseCollections(extensions: CatalogueItisBrowseMetadata[]): ItisBrowseCollection[] {
  return extensions.filter((extension) => extension.provider === 'Integrated Taxonomic Information System').map((extension) => {
    const sourceOnlyPaths = new Set(extension.upstreamOnly?.files.map((file) => file.path) ?? [])
    const isSourceOnly = (file: CatalogueItisBrowseMetadata['files'][number]) => file.role === 'upstream-only' || sourceOnlyPaths.has(file.path)
    return {
      id: extension.id,
      label: extension.id.replace(/^itis-/, '').replace(/-tsn-crosswalk$/, '').replaceAll('-', ' '),
      exportDate: extension.source.exportDate ?? '',
      boundary: extension.evidenceBoundary ?? { en: typeof extension.scope === 'string' ? extension.scope : '', zh: extension.scopeZh ?? '' },
      completeRows: extension.delivery.profile === 'native-full' && extension.delivery.completeRows,
      colCount: extension.counts.eligible,
      sourceOnlyCount: extension.counts.upstreamOnly,
      colFiles: extension.files.filter((file) => !isSourceOnly(file)),
      sourceOnlyFiles: extension.files.filter(isSourceOnly),
    }
  })
}

export async function loadItisBrowseCollections(packageId: string, kind: 'static-package' | 'nomenclatural-resource-pack'): Promise<ItisBrowseCollection[]> {
  if (kind === 'static-package') {
    const manifest = await loadPackageManifest(packageId)
    const collections = (manifest.nomenclatureCollections ?? []).filter((collection): collection is RuntimeItisNomenclatureCollection => collection.provider === 'Integrated Taxonomic Information System')
    return packageItisBrowseCollections(collections)
  }
  const manifest = await loadCatalogueResourcePackManifest(packageId)
  return catalogueItisBrowseCollections((manifest.extensions ?? []) as unknown as CatalogueItisBrowseMetadata[])
}

export type ItisSourceOnlyRecord = ItisNomenclatureName | { colUsageId: null; currentName: ItisNomenclatureName; basis?: string }
export type ItisBrowseRecord = ItisNomenclatureRecord | ItisSourceOnlyRecord

export async function loadItisBrowseFile(collection: ItisBrowseCollection, partition: 'col' | 'source-only', index: number): Promise<ItisBrowseRecord[]> {
  if (!collection.completeRows) throw new Error('Row browsing requires the native-full data profile')
  const file = (partition === 'col' ? collection.colFiles : collection.sourceOnlyFiles)[index]
  if (!file) throw new Error('Select a published ITIS file')
  return loadRuntimeFile<ItisBrowseRecord[]>(file)
}
