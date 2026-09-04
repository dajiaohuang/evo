export type CatalogueItisScopeConfig = {
  scope: string
  packageId: 'other-animals' | 'protists-chromists'
  collectionId: string
  roots: ReadonlySet<string>
  excludedRoots: ReadonlySet<string>
  title: { en: string; zh: string }
}
