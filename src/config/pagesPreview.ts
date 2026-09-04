import type { AppRoute } from '../utils/routing'
import previewDefinition from '../../data/pages-preview.json'

/** Pages is an intentionally explicit preview build; normal Web and native stay full. */
export function isPagesPreviewEnvironment(env: { PAGES_PREVIEW?: string; mode?: string }): boolean {
  return env.PAGES_PREVIEW === 'true' && env.mode !== 'mobile'
}

export const isPagesPreview = isPagesPreviewEnvironment({
  PAGES_PREVIEW: import.meta.env.VITE_PAGES_PREVIEW,
  mode: import.meta.env.MODE,
})

export const pagesPreviewPackageIds = new Set(previewDefinition.packageIds)
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
    eyebrow: 'GitHub Pages preview edition',
    title: 'This entry is available in the full Web edition.',
    body: 'The preview keeps the atlas dashboard, tutorial, time/map scenes and selected resource dossiers. Open the full Web edition to browse the complete catalogue and research tools.',
  },
  zh: {
    eyebrow: 'GitHub Pages 预览版',
    title: '此入口请在完整版 Web 中打开。',
    body: '预览版保留综合看板、教程、时间/地图场景和精选资源档案。完整目录与研究工具请使用完整版 Web。',
  },
} as const
