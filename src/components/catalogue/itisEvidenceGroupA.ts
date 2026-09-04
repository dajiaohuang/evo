import type { ItisEvidenceScopeMap } from './itisEvidenceConfigTypes'

export const itisEvidenceGroupA: ItisEvidenceScopeMap = {
  crocodylia: {
    packageId: 'crocodylomorphs-birds',
    collectionId: 'itis-crocodylia-tsn-crosswalk',
    roots: new Set(['329']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Crocodylia exact nomenclatural mapping', zh: 'ITIS 鳄类精确命名对应' },
  },
  perissodactyla: {
    packageId: 'perissodactyla',
    collectionId: 'itis-perissodactyla-tsn-crosswalk',
    roots: new Set(['623DW']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Perissodactyla exact nomenclatural mapping', zh: 'ITIS 奇蹄类精确命名对应' },
  },
  cetartiodactyla: {
    packageId: 'cetartiodactyla',
    collectionId: 'itis-cetartiodactyla-tsn-crosswalk',
    roots: new Set(['6227M', 'WP']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Cetartiodactyla exact nomenclatural mapping', zh: 'ITIS 鲸偶蹄类精确命名对应' },
  },
  primates: {
    packageId: 'primates',
    collectionId: 'itis-primates-tsn-crosswalk',
    roots: new Set(['3W7']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Primates exact nomenclatural mapping', zh: 'ITIS 灵长类精确命名对应' },
  },
  crustacea: {
    packageId: 'crustaceans-insects',
    collectionId: 'itis-crustacea-tsn-crosswalk',
    roots: new Set(['KZX8B']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Crustacea exact nomenclatural mapping', zh: 'ITIS 甲壳类精确命名对应' },
  },
}
