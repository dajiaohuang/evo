import type { RuntimeRangeEvidence, RuntimeResearchExample } from '../../data-client/types'

export interface TemporalPackageSource {
  id: string
  title: string
  titleZh: string
  examples: RuntimeResearchExample[]
  ranges: RuntimeRangeEvidence[]
}

export interface TemporalPackageCard {
  packageId: string
  packageTitle: string
  packageTitleZh: string
  example: RuntimeResearchExample
  range: RuntimeRangeEvidence
}

function rangeContainsAge(range: RuntimeRangeEvidence, ageMa: number): boolean {
  return range.status === 'available'
    && Number.isFinite(ageMa)
    && ageMa <= range.olderMa
    && ageMa >= range.youngerMa
}

function compareRanges(left: RuntimeRangeEvidence, right: RuntimeRangeEvidence): number {
  const confidence = { high: 0, medium: 1, low: 2, contested: 3 }
  return confidence[left.confidence] - confidence[right.confidence]
    || (left.olderMa - left.youngerMa) - (right.olderMa - right.youngerMa)
    || left.id.localeCompare(right.id)
}

/**
 * A research scene is time-relevant only when one of its linked entities has a
 * published interval at the selected age and that interval shares a claim ID
 * with the scene. This deliberately does not treat an unlinked package range
 * as evidence for a scene.
 */
export function findTemporalPackageCards(packages: TemporalPackageSource[], ageMa: number): TemporalPackageCard[] {
  return packages.flatMap((pack) => pack.examples.flatMap((example) => {
    const exampleClaims = new Set(example.claimIds)
    const range = pack.ranges
      .filter((candidate) => example.entityIds.includes(candidate.entityId)
        && candidate.claimIds.some((claimId) => exampleClaims.has(claimId))
        && rangeContainsAge(candidate, ageMa))
      .sort(compareRanges)[0]
    return range ? [{
      packageId: pack.id,
      packageTitle: pack.title,
      packageTitleZh: pack.titleZh,
      example,
      range,
    }] : []
  })).sort((left, right) => left.packageTitle.localeCompare(right.packageTitle) || left.example.title.en.localeCompare(right.example.title.en))
}
