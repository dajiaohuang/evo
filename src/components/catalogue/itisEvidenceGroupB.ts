import type { ItisEvidenceScopeMap } from './itisEvidenceConfigTypes'

export const itisEvidenceGroupB: ItisEvidenceScopeMap = {
  actinopterygii: {
    packageId: 'actinopterygii',
    collectionId: 'itis-actinopterygii-tsn-crosswalk',
    roots: new Set(['8VR36']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Actinopterygii exact nomenclatural mapping', zh: 'ITIS 辐鳍鱼类精确命名对应' },
  },
  'agnatha-myxini': {
    packageId: 'early-fishes',
    collectionId: 'itis-agnatha-myxini-tsn-crosswalk',
    roots: new Set(['KTXJW', '6225G']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Agnatha and Myxini exact nomenclatural mapping', zh: 'ITIS 无颌类与盲鳗类精确命名对应' },
  },
  sarcopterygii: {
    packageId: 'tetrapod-transition',
    collectionId: 'itis-sarcopterygii-tsn-crosswalk',
    roots: new Set(['8VSMX']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Sarcopterygii exact nomenclatural mapping', zh: 'ITIS 肉鳍鱼类精确命名对应' },
  },
  insecta: {
    packageId: 'crustaceans-insects',
    collectionId: 'itis-insecta-tsn-crosswalk',
    roots: new Set(['H6']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Insecta exact nomenclatural mapping', zh: 'ITIS 昆虫类精确命名对应' },
  },
  'reptilia-non-crocodylia': {
    packageId: 'turtles-lepidosaurs',
    collectionId: 'itis-reptilia-tsn-crosswalk',
    roots: new Set(['45C', '477', 'RP']),
    excludedRoots: new Set(['329']),
    title: { en: 'ITIS non-Crocodylia Reptilia exact nomenclatural mapping', zh: 'ITIS 非鳄类爬行动物精确命名对应' },
  },
  amphibia: {
    packageId: 'amphibia',
    collectionId: 'itis-2026-08-26-tsn-crosswalk',
    roots: new Set(['PH']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Amphibia exact nomenclatural mapping', zh: 'ITIS 两栖类精确命名对应' },
  },
  'collembola-protura': {
    packageId: 'crustaceans-insects',
    collectionId: 'itis-collembola-protura-tsn-crosswalk',
    roots: new Set(['KZS5W', '8NKDZ']),
    excludedRoots: new Set(),
    title: { en: 'ITIS Collembola and Protura exact nomenclatural mapping', zh: 'ITIS 弹尾类与原尾类精确命名对应' },
  },
}
