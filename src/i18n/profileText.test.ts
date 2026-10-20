import { describe, expect, it } from 'vitest'
import { localizedIntroductionText, localizedProfileText } from './profileText'

const profile = {
  overview: 'English overview remains available.',
  overviewZh: '中文概述仍然存在。',
  readerSections: [{
    text: { en: 'English introduction.', zh: '中文导读正文。' },
  }],
}
const translate = (text: string) => text

function selected(text: string | undefined, language: 'en' | 'zh', overview?: string, overviewZh?: string) {
  const fallback = localizedProfileText({ overview, overviewZh }, overview, language, translate)
  return localizedIntroductionText(text, fallback)
}

describe('localized introduction fallback', () => {
  it('preserves authored English and Chinese text', () => {
    expect(selected(profile.readerSections[0].text.en, 'en', profile.overview, profile.overviewZh)).toBe('English introduction.')
    expect(selected(profile.readerSections[0].text.zh, 'zh', profile.overview, profile.overviewZh)).toBe('中文导读正文。')
  })

  it.each(['', '  \n\t'])('uses the existing English overview when requested introduction is blank (%j)', (text) => {
    expect(selected(text, 'en', profile.overview, profile.overviewZh)).toBe('English overview remains available.')
  })

  it('uses the recorded Chinese overview for a blank Chinese introduction', () => {
    expect(selected('', 'zh', profile.overview, profile.overviewZh)).toBe('中文概述仍然存在。')
  })

  it('does not fabricate prose when both locale introductions and the overview are missing', () => {
    const absent = { en: '  ', zh: '\t\n' }
    expect(localizedIntroductionText(absent.en, '')).toBe('')
    expect(localizedIntroductionText(absent.zh, '')).toBe('')
  })

  it('uses the overview when the introduction section is absent, and stays empty when both are unavailable', () => {
    expect(selected(undefined, 'en', profile.overview, profile.overviewZh)).toBe('English overview remains available.')
    expect(selected(undefined, 'en')).toBe('')
  })

  it('does not change withheld navigation/range state or passage source bindings', () => {
    const section = { text: { en: '', zh: '中文导读正文。' }, sourceIds: ['recorded-source'] }
    const navigation = { rangeEvidenceLevel: 'withheld-no-range-evidence', rangeProvisional: true }
    expect(localizedIntroductionText(section.text.en, profile.overview)).toBe(profile.overview)
    expect(section.sourceIds).toEqual(['recorded-source'])
    expect(navigation).toEqual({ rangeEvidenceLevel: 'withheld-no-range-evidence', rangeProvisional: true })
  })
})
