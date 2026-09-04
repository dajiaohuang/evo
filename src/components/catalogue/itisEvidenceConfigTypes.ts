import type { RuntimeItisNomenclatureCollection, RuntimeItisPackageScope } from '../../data-client/types'

export type ItisEvidenceScopeConfig = {
  packageId: string
  collectionId: RuntimeItisNomenclatureCollection['id']
  roots: ReadonlySet<string>
  excludedRoots: ReadonlySet<string>
  title: { en: string; zh: string }
}

export type ItisEvidenceScopeMap = Partial<Record<RuntimeItisPackageScope, ItisEvidenceScopeConfig>>
