import profilesData from '../../data/registry/taxon-profiles.json'
import eventsData from '../../data/events.json'
import storiesData from '../../data/stories.json'
import referencesData from '../../data/references.json'
import treeData from '../../data/navigation/atlas-ontology.json'
import placesData from '../../data/places.json'
import perissodactylCalibrationsData from '../../data/packages/mammalia/perissodactyla/phylogeny/calibrations.json'
import perissodactylHypothesisData from '../../data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json'
import mediaData from '../../data/media.json'
import evidenceClaimsData from '../../data/evidence/claims.json'
import type {
  EvolutionEvent,
  EvolutionStory,
  ReferenceRecord,
  SearchResult,
  TaxonProfile,
  PlaceRecord,
  DivergenceEstimate,
  MediaAsset,
  EvidenceClaim,
} from '../types/catalog'
import type { TreeNode } from '../types/tree'
import { periods, timeScaleUnits } from './geology'
import { getEntityPublication } from './publication'

export const taxonProfiles = profilesData as TaxonProfile[]
const evidenceClaimById = new Map((evidenceClaimsData as EvidenceClaim[]).map((claim) => [claim.id, claim]))
export const evolutionEvents = eventsData.map((event) => {
  const eventClaims = event.claimIds.flatMap((claimId) => {
    const claim = evidenceClaimById.get(claimId)
    return claim ? [claim] : []
  })
  return {
    ...event,
    confidence: eventClaims[0]?.confidence ?? 'low',
    referenceIds: [...new Set(eventClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)))],
  }
}) as EvolutionEvent[]
export const evolutionStories = (storiesData as EvolutionStory[]).filter((story) => story.evidenceStatus === 'available-with-limitations')
export const references = referencesData as ReferenceRecord[]
export const places = placesData as PlaceRecord[]
export const perissodactylCalibrations = perissodactylCalibrationsData.estimates as DivergenceEstimate[]
export const mediaAssets = mediaData as MediaAsset[]

const taxonById = new Map(taxonProfiles.map((profile) => [profile.id, profile]))
const eventById = new Map(evolutionEvents.map((event) => [event.id, event]))
const storyById = new Map(evolutionStories.map((story) => [story.id, story]))
const referenceById = new Map(references.map((reference) => [reference.id, reference]))

export function getTaxonProfile(id: string | null): TaxonProfile | null {
  return id ? taxonById.get(id) ?? null : null
}

export function getEvolutionEvent(id: string | null): EvolutionEvent | null {
  return id ? eventById.get(id) ?? null : null
}

export function getEvolutionStory(id: string | null): EvolutionStory | null {
  return id ? storyById.get(id) ?? null : null
}

export function getReferences(ids: string[]): ReferenceRecord[] {
  return ids.flatMap((id) => {
    const reference = referenceById.get(id)
    return reference ? [reference] : []
  })
}

export function getMediaForTaxon(taxonId: string): MediaAsset[] {
  return mediaAssets.filter((asset) => asset.taxonId === taxonId)
}

export function hasPublishedRange(profile: TaxonProfile): boolean {
  return profile.rangeEvidenceLevel !== 'withheld-no-range-evidence'
}

function flattenTree(node: TreeNode, output: TreeNode[] = []): TreeNode[] {
  output.push(node)
  for (const child of node.children ?? []) flattenTree(child, output)
  return output
}

const treeNodes = flattenTree(treeData as TreeNode)

const phylogenyRoot = perissodactylHypothesisData.root as TreeNode
const phylogenyParent = new Map<string, string | null>()
function indexPhylogeny(node: TreeNode, parentId: string | null = null): void {
  phylogenyParent.set(node.id, parentId)
  for (const child of node.children ?? []) indexPhylogeny(child, node.id)
}
indexPhylogeny(phylogenyRoot)

function isAncestorOrSelf(ancestorId: string, nodeId: string): boolean {
  let cursor: string | null | undefined = nodeId
  while (cursor) {
    if (cursor === ancestorId) return true
    cursor = phylogenyParent.get(cursor)
  }
  return false
}

export function getCalibrationsForTaxon(profileId: string): DivergenceEstimate[] {
  const profile = getTaxonProfile(profileId)
  if (!profile?.treeNodeId || !phylogenyParent.has(profile.treeNodeId)) return []
  if (profileId === 'perissodactyla') return perissodactylCalibrations
  const treeNodeId = profile.treeNodeId
  return perissodactylCalibrations.filter((estimate) => (
    estimate.mappingStatus === 'mapped'
    && estimate.nodeId !== null
    && (isAncestorOrSelf(estimate.nodeId, treeNodeId)
      || isAncestorOrSelf(treeNodeId, estimate.nodeId))
  ))
}

function searchable(value: string): string {
  return value.normalize('NFKD').toLocaleLowerCase()
}

function score(haystack: string, query: string): number {
  if (haystack === query) return 100
  if (haystack.startsWith(query)) return 60
  const index = haystack.indexOf(query)
  if (index >= 0) return 40 - Math.min(index, 20)
  return 0
}

export function searchCatalog(rawQuery: string, limit = 16): SearchResult[] {
  const query = searchable(rawQuery.trim())
  if (!query) {
    return evolutionStories
      .filter((story) => story.featured)
      .slice(0, limit)
      .map((story) => ({
        id: story.id,
        kind: 'story' as const,
        title: story.title,
        titleZh: story.titleZh,
        subtitle: `${story.durationMinutes} min field story`,
        subtitleZh: `${story.durationMinutes} 分钟主题故事`,
        keywords: '',
        route: `#/stories?id=${story.id}`,
      }))
  }

  const candidates: Array<SearchResult & { score: number }> = []

  for (const profile of taxonProfiles) {
    const publication = getEntityPublication(profile.treeNodeId ?? profile.id)
    const title = `${profile.commonNameZh} ${profile.scientificName} ${profile.commonName}`
    const keywords = `${title} ${profile.rank} ${profile.parentName} ${profile.traits.join(' ')}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: profile.id,
      kind: 'taxon',
      title: `${profile.commonName} · ${profile.scientificName}`,
      titleZh: `${profile.commonNameZh} · ${profile.scientificName}`,
      subtitle: `${profile.rank} · ${hasPublishedRange(profile) ? `${profile.firstAppearance}–${profile.lastAppearance || 'Present'} Ma` : 'Range unavailable'}`,
      subtitleZh: `${profile.rank} · ${hasPublishedRange(profile) ? `${profile.firstAppearance}–${profile.lastAppearance || '现今'} Ma` : '区间暂无可发布证据'}`,
      keywords,
      route: `#/taxa?id=${profile.id}`,
      scientificMaturity: publication?.scientificMaturity,
      score: resultScore + 4,
    })
  }

  for (const event of evolutionEvents) {
    const keywords = `${event.titleZh} ${event.title} ${event.category} ${event.clades.join(' ')} ${event.regions.join(' ')}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: event.id,
      kind: 'event',
      title: event.title,
      titleZh: event.titleZh,
      subtitle: `${event.category} · ${event.startAge}–${event.endAge} Ma`,
      subtitleZh: `${event.startAge}–${event.endAge} Ma`,
      keywords,
      route: `#/events?id=${event.id}`,
      score: resultScore + 2,
    })
  }

  for (const story of evolutionStories) {
    const keywords = `${story.titleZh} ${story.title} ${story.dek}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: story.id,
      kind: 'story',
      title: story.title,
      titleZh: story.titleZh,
      subtitle: `${story.durationMinutes} min field story`,
      subtitleZh: `${story.durationMinutes} 分钟主题故事`,
      keywords,
      route: `#/stories?id=${story.id}`,
      score: resultScore + (story.featured ? 3 : 0),
    })
  }

  for (const node of treeNodes) {
    if (taxonById.has(node.id)) continue
    const keywords = `${node.name} ${node.commonName ?? ''} ${node.commonNameZh ?? ''}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: node.id,
      kind: 'tree',
      title: node.commonName ?? node.name,
      titleZh: node.commonNameZh ?? node.commonName ?? node.name,
      subtitle: `${node.name} · tree node`,
      subtitleZh: `${node.name} · 树节点`,
      keywords,
      route: `#/explore?taxon=${node.id}&age=${Math.min(node.firstAppearance, 4567).toFixed(1)}&view=tree`,
      scientificMaturity: getEntityPublication(node.id)?.scientificMaturity,
      score: resultScore,
    })
  }

  for (const unit of timeScaleUnits) {
    const period = periods.find((entry) => entry.name === unit.nam)
    const parent = timeScaleUnits.find((entry) => entry.oid === unit.pid)
    const keywords = `${unit.nam} ${unit.namZh ?? ''} ${unit.abr ?? ''} ${unit.itp} ${parent?.nam ?? ''} ${parent?.namZh ?? ''} ${period?.description ?? ''} ${period?.descriptionZh ?? ''}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: unit.oid.split(':').at(-1) ?? unit.oid,
      kind: 'interval',
      title: unit.nam,
      titleZh: unit.namZh ?? unit.nam,
      subtitle: `${unit.itp} · ${unit.eag}–${unit.lag} Ma`,
      subtitleZh: `${unit.itp} · ${unit.eag}–${unit.lag} Ma`,
      keywords,
      route: `#/explore?age=${((unit.eag + unit.lag) / 2).toFixed(3)}&view=diversity`,
      score: resultScore + (unit.itp === 'period' ? 1 : 0),
    })
  }

  for (const place of places) {
    const keywords = `${place.code} ${place.name} ${place.nameZh}`
    const resultScore = score(searchable(keywords), query)
    if (resultScore > 0) candidates.push({
      id: place.code,
      kind: 'place',
      titleZh: place.nameZh,
      title: place.name,
      subtitle: `${place.code} · ${place.occurrences.toLocaleString()} bundled occurrences`,
      subtitleZh: `${place.code} · ${place.occurrences.toLocaleString('zh-CN')} 条内置记录`,
      keywords,
      route: `#/lab?country=${place.code}`,
      score: resultScore + 1,
    })
  }

  return candidates
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
    .map(({ id, kind, title, titleZh, subtitle, subtitleZh, keywords, route, scientificMaturity }) => ({
      id, kind, title, titleZh, subtitle, subtitleZh, keywords, route, scientificMaturity,
    }))
}
