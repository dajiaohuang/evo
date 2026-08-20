import { useMemo, useState, type ChangeEvent, type DragEvent } from 'react'
import { evidenceClaims } from '../../services/evidence'
import { getReferences, getTaxonProfile } from '../../services/catalog'
import type { EvolutionStory } from '../../types'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import './StoryStudio.css'

type StoryView = 'map' | 'tree' | 'diversity' | 'evidence'

interface LocalStoryStep {
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

interface LocalStoryDraft {
  schemaVersion: 1
  kind: 'evo-local-story-draft'
  title: string
  titleZh: string
  dek: string
  steps: LocalStoryStep[]
}

const STORAGE_KEY = 'evo-local-story-draft-v1'
const claimIds = new Set(evidenceClaims.map((claim) => claim.id))

const emptyDraft: LocalStoryDraft = {
  schemaVersion: 1,
  kind: 'evo-local-story-draft',
  title: 'Untitled local story',
  titleZh: '未命名本地故事',
  dek: 'A local teaching draft assembled from reproducible Explorer states.',
  steps: [{ id: 'step-1', title: 'First evidence state', text: 'Explain what this bounded Explorer state shows and which uncertainty remains visible.', age: 66, olderMa: 70, youngerMa: 60, taxonId: 'dinosauria', view: 'tree', claimId: '' }],
}

function isDraft(value: unknown): value is LocalStoryDraft {
  if (!value || typeof value !== 'object') return false
  const draft = value as Partial<LocalStoryDraft>
  return draft.schemaVersion === 1 && draft.kind === 'evo-local-story-draft' && typeof draft.title === 'string' && typeof draft.titleZh === 'string' && typeof draft.dek === 'string' && Array.isArray(draft.steps)
}

function encodeDraft(draft: LocalStoryDraft): string {
  const bytes = new TextEncoder().encode(JSON.stringify(draft))
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
}

function decodeDraft(encoded: string): LocalStoryDraft {
  const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/')
  const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='))
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0))
  const value: unknown = JSON.parse(new TextDecoder().decode(bytes))
  if (!isDraft(value)) throw new Error('The shared story draft has an unsupported structure.')
  return value
}

function initialDraft(encodedDraft?: string | null): LocalStoryDraft {
  try {
    if (encodedDraft) return decodeDraft(encodedDraft)
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const value: unknown = JSON.parse(stored)
      if (isDraft(value)) return value
    }
  } catch { /* Fall back to a new local draft. */ }
  return structuredClone(emptyDraft)
}

function stepReady(step: LocalStoryStep): boolean {
  return step.title.trim().length > 0 && step.text.trim().length >= 20 && Number.isFinite(step.age) && step.olderMa >= step.age && step.age >= step.youngerMa && step.youngerMa >= 0 && claimIds.has(step.claimId)
}

function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name
  anchor.click()
  URL.revokeObjectURL(url)
}

interface StoryBuilderProps {
  encodedDraft?: string | null
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

export function StoryBuilder({ encodedDraft, onNavigate }: StoryBuilderProps) {
  const { number, t } = useI18n()
  const [draft, setDraft] = useState<LocalStoryDraft>(() => initialDraft(encodedDraft))
  const [message, setMessage] = useState('')
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const linkedClaims = useMemo(() => evidenceClaims.filter((claim) => draft.steps.some((step) => step.claimId === claim.id)), [draft.steps])
  const linkedReferences = useMemo(() => getReferences([...new Set(linkedClaims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)))]), [linkedClaims])
  const readySteps = draft.steps.filter(stepReady).length
  const encoded = useMemo(() => encodeDraft(draft), [draft])
  const shareUrl = `${window.location.origin}${import.meta.env.BASE_URL}#/stories?id=builder&draft=${encoded}`

  const updateStep = (index: number, patch: Partial<LocalStoryStep>) => setDraft((current) => ({ ...current, steps: current.steps.map((step, stepIndex) => stepIndex === index ? { ...step, ...patch } : step) }))
  const addStep = () => setDraft((current) => ({ ...current, steps: [...current.steps, { ...emptyDraft.steps[0], id: `step-${current.steps.length + 1}`, title: `Evidence state ${current.steps.length + 1}` }] }))
  const removeStep = (index: number) => setDraft((current) => ({ ...current, steps: current.steps.filter((_, stepIndex) => stepIndex !== index) }))

  const saveLocal = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    setMessage(t('Saved in this browser'))
  }
  const importDraft = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const value: unknown = JSON.parse(await file.text())
      if (!isDraft(value)) throw new Error(t('Unsupported story draft structure'))
      setDraft(value)
      setMessage(t('Draft imported locally'))
    } catch (caught) {
      setMessage(caught instanceof Error ? caught.message : t('Import failed'))
    } finally {
      event.target.value = ''
    }
  }
  const copyShare = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setMessage(t('Teacher share link copied'))
  }
  const dropStep = (event: DragEvent<HTMLElement>, targetIndex: number) => {
    event.preventDefault()
    if (draggedIndex === null || draggedIndex === targetIndex) return
    setDraft((current) => {
      const steps = [...current.steps]
      const [moved] = steps.splice(draggedIndex, 1)
      steps.splice(targetIndex, 0, moved)
      return { ...current, steps }
    })
    setDraggedIndex(null)
  }

  return (
    <main className="catalog-page story-studio">
      <header className="story-studio__hero">
        <button className="story-back" onClick={() => onNavigate('stories')}>← {t('All stories')}</button>
        <span className="section-label">{t('Story Builder / local workspace')}</span>
        <h1>{t('Compose evidence-bound Explorer states.')}</h1>
        <p>{t('Drafts stay in this browser unless you export JSON or copy a share link. A local draft can never mark itself published.')}</p>
      </header>

      <section className="story-studio__meta">
        <label><span>{t('English title')}</span><input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} /></label>
        <label><span>{t('Chinese title')}</span><input value={draft.titleZh} onChange={(event) => setDraft({ ...draft, titleZh: event.target.value })} /></label>
        <label className="wide"><span>{t('Teaching premise')}</span><textarea value={draft.dek} onChange={(event) => setDraft({ ...draft, dek: event.target.value })} /></label>
      </section>

      <div className="story-studio__toolbar">
        <button onClick={saveLocal}>{t('Save locally')}</button>
        <button onClick={() => download('evo-story-draft.json', `${JSON.stringify(draft, null, 2)}\n`, 'application/json')}>{t('Export JSON')}</button>
        <label><input type="file" accept=".json,application/json" onChange={(event) => void importDraft(event)} /><span>{t('Import JSON')}</span></label>
        <button onClick={() => void copyShare()}>{t('Copy teacher share link')}</button>
        <button onClick={() => void navigator.clipboard.writeText(`<iframe title="${draft.title}" src="${shareUrl}" loading="lazy"></iframe>`)}>{t('Copy iframe embed')}</button>
        <button onClick={addStep}>{t('Add Explorer state')}</button>
      </div>
      {message && <p className="story-studio__message" role="status">{message}</p>}

      <section className="story-studio__readiness">
        <div><strong>{number(readySteps)}/{number(draft.steps.length)}</strong><span>{t('steps pass local evidence checks')}</span></div>
        <div><strong>{number(linkedClaims.length)}</strong><span>{t('linked claims')}</span></div>
        <div><strong>{number(linkedReferences.length)}</strong><span>{t('derived references')}</span></div>
        <p>{readySteps === draft.steps.length ? t('Ready to submit for repository review; publication still requires the normal story evidence gate.') : t('Each step needs a valid time window, at least 20 characters of explanation and a known claim ID.')}</p>
      </section>

      <datalist id="story-claim-ids">{evidenceClaims.map((claim) => <option value={claim.id} key={claim.id}>{claim.statement}</option>)}</datalist>
      <div className="story-studio__steps">
        {draft.steps.map((step, index) => (
          <article key={step.id} draggable onDragStart={() => setDraggedIndex(index)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => dropStep(event, index)} className={stepReady(step) ? 'is-ready' : ''}>
            <header><span>↕ {String(index + 1).padStart(2, '0')}</span><strong>{stepReady(step) ? t('Evidence linked') : t('Draft incomplete')}</strong><button onClick={() => removeStep(index)} disabled={draft.steps.length === 1}>{t('Remove')}</button></header>
            <div className="story-studio__step-grid">
              <label className="wide"><span>{t('Step title')}</span><input value={step.title} onChange={(event) => updateStep(index, { title: event.target.value })} /></label>
              <label className="wide"><span>{t('Explanation')}</span><textarea value={step.text} onChange={(event) => updateStep(index, { text: event.target.value })} /></label>
              <label><span>{t('Focus age (Ma)')}</span><input type="number" min="0" max="4567" value={step.age} onChange={(event) => updateStep(index, { age: Number(event.target.value) })} /></label>
              <label><span>{t('Older bound (Ma)')}</span><input type="number" min="0" max="4567" value={step.olderMa} onChange={(event) => updateStep(index, { olderMa: Number(event.target.value) })} /></label>
              <label><span>{t('Younger bound (Ma)')}</span><input type="number" min="0" max="4567" value={step.youngerMa} onChange={(event) => updateStep(index, { youngerMa: Number(event.target.value) })} /></label>
              <label><span>{t('Primary view')}</span><select value={step.view} onChange={(event) => updateStep(index, { view: event.target.value as StoryView })}><option value="map">map</option><option value="tree">tree</option><option value="diversity">diversity</option><option value="evidence">evidence</option></select></label>
              <label><span>{t('Taxon or entity ID')}</span><input value={step.taxonId} onChange={(event) => updateStep(index, { taxonId: event.target.value })} /></label>
              <label className="wide"><span>{t('Claim ID')}</span><input list="story-claim-ids" value={step.claimId} onChange={(event) => updateStep(index, { claimId: event.target.value })} placeholder="claim:taxon:…" /></label>
            </div>
            <button className="story-studio__preview" onClick={() => onNavigate('explore', { age: String(step.age), older: String(step.olderMa), younger: String(step.youngerMa), view: step.view === 'evidence' ? 'map' : step.view, taxon: step.taxonId })}>{t('Preview this state in Explorer')} ↗</button>
          </article>
        ))}
      </div>
    </main>
  )
}

export function StoryLearningPanel({ story }: { story: EvolutionStory }) {
  const { language, number, t } = useI18n()
  const [answer, setAnswer] = useState<number | null>(null)
  const profiles = [...new Set(story.steps.flatMap((step) => step.taxonIds))].map(getTaxonProfile).filter((profile) => profile !== null)
  const claims = evidenceClaims.filter((claim) => story.steps.some((step) => step.claimLinks.some((link) => link.claimId === claim.id)))
  const references = getReferences([...new Set(claims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)))])
  const shareUrl = `${window.location.origin}${import.meta.env.BASE_URL}#/stories?id=${encodeURIComponent(story.id)}`
  const choices = [
    'A bounded Explorer state linked to explicit claims',
    'A complete record of biological diversity',
    'An external expert consensus statement',
  ]
  return (
    <section className="story-learning">
      <div className="story-learning__summary"><article><strong>{number(claims.length)}</strong><span>{t('story claims')}</span></article><article><strong>{number(references.length)}</strong><span>{t('derived references')}</span></article><article><strong>{number(profiles.length)}</strong><span>{t('glossary entries')}</span></article></div>
      <div className="story-learning__grid">
        <article><small>{t('Glossary')}</small><h2>{t('Key taxa in this story')}</h2>{profiles.map((profile) => <details key={profile.id}><summary>{language === 'zh' ? profile.commonNameZh : profile.commonName}</summary><p>{t(profile.overview)}</p></details>)}</article>
        <article><small>{t('Quick check')}</small><h2>{t('What does a story step represent?')}</h2>{choices.map((choice, index) => <button className={answer === index ? 'is-selected' : ''} key={choice} onClick={() => setAnswer(index)}>{t(choice)}</button>)}{answer !== null && <p role="status">{answer === 0 ? t('Correct: the state is reproducible, but its data and claims retain explicit limits.') : t('Not quite: a story state is bounded and evidence-linked, not a completeness or expert-consensus claim.')}</p>}</article>
      </div>
      <div className="story-learning__share"><button onClick={() => void navigator.clipboard.writeText(shareUrl)}>{t('Copy teacher link')}</button><button onClick={() => void navigator.clipboard.writeText(`<iframe title="${story.title}" src="${shareUrl}" loading="lazy"></iframe>`)}>{t('Copy embeddable story card')}</button></div>
    </section>
  )
}
