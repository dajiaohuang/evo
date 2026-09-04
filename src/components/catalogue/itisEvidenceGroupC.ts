import type { ItisEvidenceScopeMap } from './itisEvidenceConfigTypes'

export const itisEvidenceGroupC: ItisEvidenceScopeMap = {
  'mollusca-brachiopoda': {
    packageId: 'molluscs-brachiopods',
    collectionId: 'itis-mollusca-brachiopoda-tsn-crosswalk',
    roots: new Set(['M2L', 'B8V3K', 'KZ']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Mollusca, Brachiopoda and Graptolithina exact nomenclatural mapping', zh: 'ITIS 软体动物、腕足动物与笔石类精确命名对应' },
  },
  'porifera-cnidaria': {
    packageId: 'sponges-cnidarians',
    collectionId: 'itis-porifera-cnidaria-tsn-crosswalk',
    roots: new Set(['B8TXQ', 'CN2']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Porifera and Cnidaria exact nomenclatural mapping', zh: 'ITIS 海绵动物与刺胞动物精确命名对应' },
  },
  echinodermata: {
    packageId: 'echinoderms',
    collectionId: 'itis-echinodermata-tsn-crosswalk',
    roots: new Set(['CHN']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Echinodermata exact nomenclatural mapping', zh: 'ITIS 棘皮动物精确命名对应' },
  },
  carnivora: {
    packageId: 'carnivora',
    collectionId: 'itis-carnivora-tsn-crosswalk',
    roots: new Set(['VS']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Carnivora exact nomenclatural mapping', zh: 'ITIS 食肉目精确命名对应' },
  },
  'other-mammals': {
    packageId: 'other-mammals',
    collectionId: 'itis-other-mammals-tsn-crosswalk',
    roots: new Set(['6224G']),
    excludedRoots: new Set(),
    title: { en: 'ITIS other mammals exact nomenclatural mapping', zh: 'ITIS 其他哺乳动物精确命名对应' },
  },
}
