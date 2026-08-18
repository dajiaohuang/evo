import evidenceClaimsData from '../../data/evidence/claims.json'
import claimRationalesZhData from '../../data/evidence/claim-rationales.zh.json'
import type { EvidenceClaim } from '../types/catalog'

const claimRationalesZh = claimRationalesZhData as Record<string, string>

export const evidenceClaims = evidenceClaimsData.map((claim) => ({
  ...claim,
  confidenceRationaleZh: claimRationalesZh[claim.id],
})) as EvidenceClaim[]

export function getClaimsForSubject(subjectId: string): EvidenceClaim[] {
  return evidenceClaims.filter((claim) => claim.subjectId === subjectId)
}
