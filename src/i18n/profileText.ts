import type { TaxonProfile } from '../types/catalog'

export function localizedProfileText(
  profile: Pick<TaxonProfile, 'readerSections' | 'readerLimitations'>,
  text: string,
  language: 'en' | 'zh',
  translate: (text: string) => string,
): string {
  if (language === 'zh') {
    const section = profile.readerSections?.find((section) => section.text.en === text)
    if (section?.text.zh) return section.text.zh
    if (profile.readerLimitations?.en === text && profile.readerLimitations.zh) return profile.readerLimitations.zh
  }
  return translate(text)
}
