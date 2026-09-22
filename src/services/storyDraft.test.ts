import { describe, expect, it } from 'vitest'
import { decodeStoryDraft, nextStoryStepId, parseStoryDraft, readStoryDraft, storyDraftShareUrl, storyIframe, storyStepReady, type LocalStoryDraft } from './storyDraft'

const draft: LocalStoryDraft = { schemaVersion: 1, kind: 'evo-local-story-draft', title: 'Evidence', titleZh: '证据 🦕', dek: 'Draft', steps: [
  { id: 'step-1', title: 'State', text: 'A bounded explanation with an explicit evidence claim.', age: 66, olderMa: 70, youngerMa: 60, taxonId: 'dinosauria', view: 'tree', claimId: 'known' },
] }

describe('local story trust boundary', () => {
  it.each([null, [], [null], [{}], [{ ...draft.steps[0], age: '66' }], [{ ...draft.steps[0], olderMa: Infinity }], [{ ...draft.steps[0], view: 'unsupported' }], [draft.steps[0], draft.steps[0]]].map(steps => ({ steps })))('rejects malformed or ambiguous steps: %j', ({ steps }) => {
    expect(() => parseStoryDraft({ ...draft, steps })).toThrow('Unsupported story draft structure')
  })
  it('preserves Unicode and incomplete evidence while discarding untrusted publication flags', () => {
    const input = { ...draft, published: true, steps: [{ ...draft.steps[0], claimId: 'unknown', reviewed: true }] }
    const parsed = parseStoryDraft(input)
    expect(parsed).not.toHaveProperty('published')
    expect(parsed.steps[0]).not.toHaveProperty('reviewed')
    expect(storyStepReady(parsed.steps[0], new Set(['known']))).toBe(false)
    const url = storyDraftShareUrl('https://evo.test/#/stories?draft=', parsed)
    expect(decodeStoryDraft(url.split('draft=')[1])).toEqual(parsed)
  })
  it('bounds imports and encoded links before decoding large inputs', () => {
    expect(() => readStoryDraft(' '.repeat(1_000_001))).toThrow('1 MB')
    expect(() => decodeStoryDraft('a'.repeat(64_001))).toThrow('structure')
    expect(() => storyDraftShareUrl('https://evo.test/', { ...draft, steps: Array.from({ length: 4 }, (_, i) => ({ ...draft.steps[0], id: String(i), text: '证'.repeat(20_000) })) })).toThrow('Export JSON')
  })
  it('requires finite ordered ages within Earth history and a nonempty taxon', () => {
    expect(storyStepReady(draft.steps[0], new Set(['known']))).toBe(true)
    for (const patch of [{ olderMa: Infinity }, { olderMa: 4568 }, { age: 80 }, { youngerMa: -1 }, { taxonId: ' ' }]) {
      expect(storyStepReady({ ...draft.steps[0], ...patch }, new Set(['known']))).toBe(false)
    }
  })
  it('creates distinct IDs after deletions and emits inert iframe attributes', () => {
    expect(nextStoryStepId([draft.steps[0], { ...draft.steps[0], id: 'step-3' }])).toBe('step-4')
    const html = storyIframe('"><img src=x onerror=alert(1)>', 'https://evo.test/?x=1&y=2')
    const template = document.createElement('template')
    template.innerHTML = html
    expect(template.content.querySelectorAll('*')).toHaveLength(1)
    const iframe = template.content.querySelector('iframe')!
    expect(iframe.title).toBe('"><img src=x onerror=alert(1)>')
    expect(iframe.getAttribute('src')).toBe('https://evo.test/?x=1&y=2')
  })
})
