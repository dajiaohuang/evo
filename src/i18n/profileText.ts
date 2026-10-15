import type { TaxonProfile, TaxonProfileReaderSection } from '../types/catalog'

export function localizedIntroductionText(text: string | undefined, fallback: string): string {
  return text?.trim() ? text : fallback
}

export function localizedProfileText(
  profile: {
    readerSections?: Array<Pick<TaxonProfileReaderSection, 'text'>>
    readerLimitations?: TaxonProfile['readerLimitations']
    overview?: string
    overviewZh?: string
    evidenceSummary?: string
    evidenceSummaryZh?: string
    ecology?: TaxonProfile['ecology']
    traits?: string[]
    traitsZh?: string[]
  },
  text: string | undefined,
  language: 'en' | 'zh',
  translate: (text: string) => string,
): string {
  if (!text) return ''
  if (language === 'zh') {
    if (text === profile.overview && profile.overviewZh) return profile.overviewZh
    if (text === profile.evidenceSummary && profile.evidenceSummaryZh) return profile.evidenceSummaryZh
    for (const field of ['diet', 'habitat', 'locomotion', 'bodySize', 'guild'] as const) {
      const translated = profile.ecology?.[`${field}Zh`]
      if (text === profile.ecology?.[field] && translated) return translated
    }
    const traitIndex = profile.traits?.indexOf(text) ?? -1
    if (traitIndex >= 0 && profile.traitsZh?.length === profile.traits?.length && profile.traitsZh?.[traitIndex]) return profile.traitsZh[traitIndex]
    const section = profile.readerSections?.find((section) => section.text.en === text)
    if (section?.text.zh) return section.text.zh
    if (profile.readerLimitations?.en === text && profile.readerLimitations.zh) return profile.readerLimitations.zh
  }
  return translate(text)
}
