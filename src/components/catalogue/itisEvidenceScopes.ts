import type { RuntimeItisPackageScope } from '../../data-client/types'
import type { ItisEvidenceScopeMap } from './itisEvidenceConfigTypes'
import { itisEvidenceGroupA } from './itisEvidenceGroupA'
import { itisEvidenceGroupB } from './itisEvidenceGroupB'
import { itisEvidenceGroupC } from './itisEvidenceGroupC'

export const itisEvidenceScopes: ItisEvidenceScopeMap = {
  myriapoda: { packageId: 'crustaceans-insects', collectionId: 'itis-myriapoda-tsn-crosswalk', roots: new Set(['L2G4H', '93']), excludedRoots: new Set(['L25JL']), title: { en: 'ITIS Myriapoda exact nomenclatural mapping', zh: 'ITIS 多足动物精确命名对应' } },
  chondrichthyes: { packageId: 'chondrichthyes', collectionId: 'itis-chondrichthyes-tsn-crosswalk', roots: new Set(['8X6G5']), excludedRoots: new Set(), title: { en: 'ITIS Chondrichthyes exact nomenclatural mapping', zh: 'ITIS 软骨鱼类精确命名对应' } },
  chelicerata: { packageId: 'trilobites-chelicerates', collectionId: 'itis-chelicerata-tsn-crosswalk', roots: new Set(['KZWYC']), excludedRoots: new Set(['TRL']), title: { en: 'ITIS Chelicerata exact nomenclatural mapping', zh: 'ITIS 螯肢类精确命名对应' } },
  ...itisEvidenceGroupA,
  ...itisEvidenceGroupB,
  ...itisEvidenceGroupC,
}

export const packageItisEvidenceScopes = Object.keys(itisEvidenceScopes) as RuntimeItisPackageScope[]
