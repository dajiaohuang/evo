import type { RuntimeRangeEvidence, RuntimeResearchExample } from '../../data-client/types'
import { getFiniteRouteNumber, parseRouteHash } from '../../utils/routing'

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
  olderMa: number
  youngerMa: number
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
 * with the scene. An explicit scene window further narrows that interval;
 * the taxon's broader range must not surface a dated scene at another time.
 * Unbounded evidence-entry routes retain their linked published interval.
 */
export function findTemporalPackageCards(packages: TemporalPackageSource[], ageMa: number): TemporalPackageCard[] {
  return packages.flatMap((pack) => pack.examples.flatMap((example) => {
    const { params } = parseRouteHash(example.route)
    const older = getFiniteRouteNumber(params, 'older')
    const younger = getFiniteRouteNumber(params, 'younger')
    const anchor = older === null && younger === null ? getFiniteRouteNumber(params, 'age') : null
    const sceneOlder = older ?? anchor ?? Infinity
    const sceneYounger = younger ?? anchor ?? -Infinity
    if (ageMa > sceneOlder || ageMa < sceneYounger) return []
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
      olderMa: Math.min(range.olderMa, sceneOlder),
      youngerMa: Math.max(range.youngerMa, sceneYounger),
    }] : []
  })).sort((left, right) => left.packageTitle.localeCompare(right.packageTitle) || left.example.title.en.localeCompare(right.example.title.en))
}
