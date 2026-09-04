import type { CatalogueItisScopeConfig } from './catalogueItisScopeTypes'

/**
 * ITIS scopes with a non-empty COL projection.  Source-only scopes remain
 * available through the package source browser and are intentionally not
 * attached to individual catalogue species pages.
 */
export const catalogueItisProtistsScopes: readonly CatalogueItisScopeConfig[] = [
  {
    scope: 'amoebozoa',
    packageId: 'protists-chromists',
    collectionId: 'itis-amoebozoa-tsn-crosswalk',
    roots: new Set(['622B2']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Amoebozoa exact nomenclatural mapping', zh: 'ITIS 变形虫类精确命名对应' },
  },
  {
    scope: 'apicomplexa',
    packageId: 'protists-chromists',
    collectionId: 'itis-apicomplexa-tsn-crosswalk',
    roots: new Set(['87FBN']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Apicomplexa exact nomenclatural mapping', zh: 'ITIS 顶复门精确命名对应' },
  },
  {
    scope: 'bigyra',
    packageId: 'protists-chromists',
    collectionId: 'itis-bigyra-tsn-crosswalk',
    roots: new Set(['622CB']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Bigyra exact nomenclatural mapping', zh: 'ITIS Bigyra 精确命名对应' },
  },
  {
    scope: 'cercozoa',
    packageId: 'protists-chromists',
    collectionId: 'itis-cercozoa-tsn-crosswalk',
    roots: new Set(['35']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Cercozoa exact nomenclatural mapping', zh: 'ITIS Cercozoa 精确命名对应' },
  },
  {
    scope: 'ciliophora',
    packageId: 'protists-chromists',
    collectionId: 'itis-ciliophora-tsn-crosswalk',
    roots: new Set(['3H']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Ciliophora exact nomenclatural mapping', zh: 'ITIS 纤毛虫类精确命名对应' },
  },
  {
    scope: 'dinoflagellata',
    packageId: 'protists-chromists',
    collectionId: 'itis-dinoflagellata-tsn-crosswalk',
    roots: new Set(['622D3']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Dinoflagellata exact nomenclatural mapping', zh: 'ITIS 甲藻类精确命名对应' },
  },
  {
    scope: 'ochrophyta',
    packageId: 'protists-chromists',
    collectionId: 'itis-ochrophyta-tsn-crosswalk',
    roots: new Set(['5H']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Ochrophyta exact nomenclatural mapping', zh: 'ITIS Ochrophyta 精确命名对应' },
  },
  {
    scope: 'oomycota',
    packageId: 'protists-chromists',
    collectionId: 'itis-oomycota-tsn-crosswalk',
    roots: new Set(['3SH', '3ZZ', '3FT', '3DC']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Oomycota exact nomenclatural mapping', zh: 'ITIS 卵菌类精确命名对应' },
  },
]
