import { useMemo, useState } from 'react'
import { useI18n } from '../../i18n'
import { frontendContract } from '../../platform/frontendContract'
import './TemporalPackageCards.css'
import { hasPublishedRange, taxonProfiles } from '../../services/catalogProfiles'
import { localizedIntroductionText, localizedProfileText } from '../../i18n/profileText'
import { ReaderInlineText } from '../reading/ReaderInlineText'

const INITIAL_CARD_LIMIT = 3

interface TemporalPackageCardsProps {
  ageMa: number
}

export function TemporalPackageCards({ ageMa }: TemporalPackageCardsProps) {
  const { language, t } = useI18n()
  const zh = language === 'zh'
  const [expanded, setExpanded] = useState(false)

  const cards = useMemo(() => taxonProfiles.flatMap(profile => {
    if (!profile.referenceIds.length) return []
    const primary = hasPublishedRange(profile) && profile.lastAppearance <= ageMa && profile.firstAppearance >= ageMa
    const regional = profile.regionalRanges?.find(range => range.youngerMa <= ageMa && range.olderMa >= ageMa)
    if (!primary && !regional) return []
    return [{profile, olderMa: primary ? profile.firstAppearance : regional!.olderMa, youngerMa: primary ? profile.lastAppearance : regional!.youngerMa, scope: primary ? null : regional!}]
  }).sort((left, right) => Number(Boolean(right.profile.readerSections?.some(section => section.id === 'reading-introduction'))) - Number(Boolean(left.profile.readerSections?.some(section => section.id === 'reading-introduction')))), [ageMa])
  const visibleCards = expanded ? cards : cards.slice(0, INITIAL_CARD_LIMIT)
  if (!cards.length) return null

  return <section className="map-temporal-cards" aria-label={zh ? '这个时代的阅读' : 'Reading for this time'} aria-live="polite" data-scene-trigger="timeline" data-content-scope={frontendContract.content.scope}>
    <header><div><span>{zh ? '这个时代的生物与发现' : 'Organisms and discoveries in this time'}</span><small>{zh ? '按已有时间范围关联，具体地点以具名记录为准。' : 'Linked by recorded time ranges; localities require named records.'}</small></div></header>
    <div className="map-temporal-cards__list">{visibleCards.map(({profile, olderMa, youngerMa, scope}) => {
        const introduction = profile.readerSections?.find(section => section.id === 'reading-introduction')
        return <article className="map-temporal-card" key={profile.id}>
          <div className="map-temporal-card__meta"><span>{profile.scientificName}</span><code>{olderMa}–{youngerMa} Ma</code></div>
          {scope && <small>{t(scope.label)} · {t(scope.region)}{scope.provisional ? ` · ${t('Provisional')}` : ''}</small>}
          <h3>{zh ? profile.commonNameZh : profile.commonName}</h3>
          <p><ReaderInlineText text={localizedIntroductionText(introduction?.text[language], localizedProfileText(profile, profile.overview, language, t))} /></p>
          <a href={`#/taxa?id=${encodeURIComponent(profile.id)}`}>{zh ? '继续阅读' : 'Continue reading'} →</a>
        </article>
      })}</div>
    {cards.length > INITIAL_CARD_LIMIT && <button type="button" className="map-temporal-cards__toggle" aria-expanded={expanded} onClick={() => setExpanded((current) => !current)}>{expanded ? t('Show fewer scenes') : t('Show {count} more scenes', { count: cards.length - INITIAL_CARD_LIMIT })}</button>}
  </section>
}
