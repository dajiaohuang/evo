/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'zh'
type TranslationValues = Record<string, string | number>

const STORAGE_KEY = 'evo-atlas-language'

function initialLanguage(): Language {
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'en' || requested === 'zh') return requested
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'zh') return stored
  } catch {
    // Language detection still works when browser storage is unavailable.
  }
  const preferredLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return preferredLanguages.some((locale) => locale.toLowerCase().startsWith('zh')) ? 'zh' : 'en'
}

function interpolate(template: string, values?: TranslationValues): string {
  if (!values) return template
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`))
}

interface I18nContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (english: string, values?: TranslationValues) => string
  number: (value: number) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

let baseChinese: typeof import('./baseChinese') | undefined
const uiZh: Record<string, string> = { Explore: '探索', Search: '搜索', 'Loading atlas module…': '正在加载图集模块…' }

let extendedChineseTranslationsPromise: Promise<Record<string, string>> | undefined

export function loadExtendedChineseTranslations(): Promise<Record<string, string>> {
  extendedChineseTranslationsPromise ??= Promise.all([
    import('./baseChinese'),
    import('./marineZh'), import('./cetartiodactylaZh'), import('./carnivoraZh'), import('./turtleLepidosaurZh'),
    import('./crocBirdZh'), import('./primatesZh'), import('./otherMammalsZh'), import('./dinosaurZh'),
    import('./spongesCnidariansZh'), import('./molluscsBrachiopodsZh'), import('./trilobitesCheliceratesZh'),
    import('./crustaceansInsectsZh'), import('./vertebrateDeepeningZh'), import('./atlasArchosaurDeepeningZh'),
    import('./mammalProfilesZh'), import('./plantInvertebrateProfilesZh'), import('./issue84Rc45Zh'),
    import('./rc77PlantsZh'), import('./rc77EchinodermsZh'), import('./rc77TetrapodProfilesZh'),
  ]).then(([
    base,
    { marineZh }, { cetartiodactylaZh }, { carnivoraZh }, { turtleLepidosaurZh }, { crocBirdZh },
    { primatesZh }, { otherMammalsZh }, { dinosaurZh }, { spongesCnidariansZh }, { molluscsBrachiopodsZh },
    { trilobitesCheliceratesZh }, { crustaceansInsectsZh }, { vertebrateDeepeningZh },
    { atlasArchosaurDeepeningZh }, { mammalProfilesZh }, { plantInvertebrateProfilesZh }, { issue84Rc45Zh },
    { rc77PlantsZh }, { rc77EchinodermsZh }, { rc77TetrapodProfilesZh },
  ]) => {
    baseChinese = base
    return {
    ...base.zh,
    ...marineZh, ...cetartiodactylaZh, ...carnivoraZh, ...turtleLepidosaurZh, ...crocBirdZh, ...primatesZh,
    ...otherMammalsZh, ...dinosaurZh, ...spongesCnidariansZh, ...molluscsBrachiopodsZh,
    ...trilobitesCheliceratesZh, ...crustaceansInsectsZh, ...vertebrateDeepeningZh,
    ...atlasArchosaurDeepeningZh, ...mammalProfilesZh, ...plantInvertebrateProfilesZh, ...issue84Rc45Zh,
    ...rc77PlantsZh, ...rc77EchinodermsZh, ...rc77TetrapodProfilesZh,
    }
  })
  return extendedChineseTranslationsPromise
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [extendedZh, setExtendedZh] = useState<Record<string, string>>({})

  useEffect(() => {
    let active = true
    if (language === 'zh' && Object.keys(extendedZh).length === 0) {
      void loadExtendedChineseTranslations().then((translations) => {
        if (active) setExtendedZh(translations)
      })
    }
    return () => { active = false }
  }, [extendedZh, language])

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.documentElement.dataset.language = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Keep the active language even when persistence is blocked.
    }
  }, [language])

  const t = useCallback((english: string, values?: TranslationValues) => {
    const template = language === 'zh' ? extendedZh[english] ?? uiZh[english] ?? baseChinese?.compactAmphibianTranslation(english) ?? english : english
    return interpolate(template, values)
  }, [extendedZh, language])

  const number = useCallback((value: number) => new Intl.NumberFormat(language === 'zh' ? 'zh-CN' : 'en-US').format(value), [language])
  const toggleLanguage = useCallback(() => setLanguage((current) => current === 'en' ? 'zh' : 'en'), [])
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage, t, number }), [language, number, t, toggleLanguage])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used inside I18nProvider')
  return value
}
