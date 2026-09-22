export type StoryView = 'map' | 'tree' | 'diversity' | 'evidence'
export interface LocalStoryStep {
  id: string
  title: string
  text: string
  age: number
  olderMa: number
  youngerMa: number
  taxonId: string
  view: StoryView
  claimId: string
}
export interface LocalStoryDraft {
  schemaVersion: 1
  kind: 'evo-local-story-draft'
  title: string
  titleZh: string
  dek: string
  steps: LocalStoryStep[]
}

export const STORY_DRAFT_MAX_BYTES = 1_000_000
export const STORY_DRAFT_MAX_STEPS = 100
const SHARE_MAX_LENGTH = 64_000
const invalid = () => new Error('Unsupported story draft structure')
const text = (value: unknown, max: number): value is string => typeof value === 'string' && value.length <= max
const age = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 4567

export function parseStoryDraft(value: unknown): LocalStoryDraft {
  if (!value || typeof value !== 'object') throw invalid()
  const draft = value as Partial<LocalStoryDraft>
  if (draft.schemaVersion !== 1 || draft.kind !== 'evo-local-story-draft'
    || !text(draft.title, 500) || !text(draft.titleZh, 500) || !text(draft.dek, 20_000)
    || !Array.isArray(draft.steps) || draft.steps.length < 1 || draft.steps.length > STORY_DRAFT_MAX_STEPS) throw invalid()
  const ids = new Set<string>()
  const steps = draft.steps.map(value => {
    if (!value || typeof value !== 'object') throw invalid()
    const step = value as Partial<LocalStoryStep>
    if (!text(step.id, 200) || !step.id.trim() || ids.has(step.id) || !text(step.title, 500)
      || !text(step.text, 20_000) || !text(step.taxonId, 200) || !text(step.claimId, 500)
      || !age(step.age) || !age(step.olderMa) || !age(step.youngerMa)
      || !['map', 'tree', 'diversity', 'evidence'].includes(step.view ?? '')) throw invalid()
    ids.add(step.id)
    // Copy only draft fields. Imported publication/review flags have no authority.
    return { id: step.id, title: step.title, text: step.text, age: step.age, olderMa: step.olderMa,
      youngerMa: step.youngerMa, taxonId: step.taxonId, view: step.view as StoryView, claimId: step.claimId }
  })
  return { schemaVersion: 1, kind: 'evo-local-story-draft', title: draft.title, titleZh: draft.titleZh, dek: draft.dek, steps }
}

export function readStoryDraft(text: string): LocalStoryDraft {
  if (new TextEncoder().encode(text).byteLength > STORY_DRAFT_MAX_BYTES) throw new Error('Story drafts are limited to 1 MB. Export smaller drafts separately.')
  return parseStoryDraft(JSON.parse(text))
}

export function decodeStoryDraft(encoded: string): LocalStoryDraft {
  if (encoded.length > SHARE_MAX_LENGTH || !/^[A-Za-z0-9_-]+$/.test(encoded)) throw invalid()
  const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/')
  const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='))
  return readStoryDraft(new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(binary, character => character.charCodeAt(0))))
}

export function storyDraftShareUrl(baseUrl: string, draft: LocalStoryDraft): string {
  const json = JSON.stringify(parseStoryDraft(draft))
  const bytes = new TextEncoder().encode(json)
  // Bound before constructing a large binary string. JSON export remains available.
  if (baseUrl.length + Math.ceil(bytes.length / 3) * 4 > SHARE_MAX_LENGTH) throw new Error('This draft is too large for a share link. Use Export JSON instead.')
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return baseUrl + btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
}

export function storyStepReady(step: LocalStoryStep, claimIds: ReadonlySet<string>): boolean {
  return step.title.trim().length > 0 && step.text.trim().length >= 20 && Boolean(step.taxonId.trim())
    && age(step.age) && age(step.olderMa) && age(step.youngerMa) && step.olderMa >= step.age && step.age >= step.youngerMa && claimIds.has(step.claimId)
}

export function nextStoryStepId(steps: LocalStoryStep[]): string {
  const ids = new Set(steps.map(step => step.id))
  let next = steps.length + 1
  while (ids.has(`step-${next}`)) next++
  return `step-${next}`
}

export function storyIframe(title: string, url: string): string {
  const escape = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
  return `<iframe title="${escape(title)}" src="${escape(url)}" loading="lazy"></iframe>`
}
