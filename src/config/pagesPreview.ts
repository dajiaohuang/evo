import type { AppRoute } from '../utils/routing'
import previewDefinition from '../../data/pages-preview.json'
import { frontendContract, resolveFrontendContract } from '../platform/frontendContract'

/** Pages and native builds use the explicit selected-core content definition. */
export function isPagesPreviewEnvironment(env: { PAGES_PREVIEW?: string; mode?: string }): boolean {
  return resolveFrontendContract({ pagesPreview: env.PAGES_PREVIEW, mode: env.mode }).edition === 'github-pages-preview'
}

export const isNativeCore = frontendContract.edition === 'native-core'
export const isPagesPreview = frontendContract.edition === 'github-pages-preview' || isNativeCore

export const pagesPreviewPackageIds = new Set(previewDefinition.packageIds)
export const pagesPreviewStoryIds = previewDefinition.storyIds
const PREVIEW_TAXA = new Set(previewDefinition.taxonIds)
const PREVIEW_STORIES = new Set(previewDefinition.storyIds)
const PREVIEW_EVENTS = new Set(previewDefinition.eventIds)
const PREVIEW_STORY_TAXA = new Map(Object.entries(previewDefinition.storyTaxonIds).map(([storyId, taxonIds]) => [storyId, new Set(taxonIds)]))

export function isPreviewTaxonAllowed(id: string | null | undefined): boolean {
  return !id || PREVIEW_TAXA.has(id)
}

export function isPreviewPackageAllowed(packageId: string | null | undefined): boolean {
  return Boolean(packageId && pagesPreviewPackageIds.has(packageId))
}

export function isPreviewStoryAllowed(storyId: string | null | undefined): boolean {
  return Boolean(storyId && PREVIEW_STORIES.has(storyId))
}

export function isPreviewEventAllowed(eventId: string | null | undefined): boolean {
  return Boolean(eventId && PREVIEW_EVENTS.has(eventId))
}

export function isPreviewStoryTaxonAllowed(storyId: string | null | undefined, taxonId: string | null | undefined): boolean {
  if (!storyId || !taxonId) return true
  return PREVIEW_STORY_TAXA.get(storyId)?.has(taxonId) ?? false
}

export function isPreviewRouteLocked(route: AppRoute, params: URLSearchParams, preview = isPagesPreview): boolean {
  if (!preview) return false
  if (route === 'taxa') return !params.get('id') || !isPreviewTaxonAllowed(params.get('id'))
  if (route === 'explore') {
    const taxon = params.get('taxon')
    const profile = params.get('profile')
    return (taxon !== null && !isPreviewTaxonAllowed(taxon)) || (profile !== null && !isPreviewTaxonAllowed(profile))
      || (params.has('story') && !isPreviewStoryAllowed(params.get('story')))
      || (taxon !== null && params.has('story') && !isPreviewStoryTaxonAllowed(params.get('story'), taxon))
      || (params.has('event') && !isPreviewEventAllowed(params.get('event')))
  }
  if (route === 'stories') {
    const storyId = params.get('id')
    return storyId === 'builder' || (storyId !== null && !isPreviewStoryAllowed(storyId))
  }
  if (route === 'events') {
    const eventId = params.get('id')
    return eventId !== null && !isPreviewEventAllowed(eventId)
  }
  // Keep the release summary and methods transparent, but keep full directories and tools closed.
  return route === 'registry' || route === 'research' || route === 'compare' || route === 'lab' || route === 'data'
}

export const pagesPreviewCopy = {
  en: {
    eyebrow: 'Selected core edition',
    title: 'This entry is outside the included core content.',
    body: 'The core edition includes the atlas dashboard, tutorial, selected time/map scenes and selected resource dossiers. Browse the full Web edition for the complete catalogue and research tools.',
  },
  zh: {
    eyebrow: '核心内容版',
    title: '此入口不包含在 App 核心内容中。',
    body: '核心版仅内置综合看板、教程、精选时间/地图场景和精选资源档案。完整分类目录与研究工具请通过完整版 Web 浏览。',
  },
} as const
