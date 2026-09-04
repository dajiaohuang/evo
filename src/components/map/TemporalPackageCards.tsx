import { useEffect, useMemo, useState } from 'react'
import { loadPackageRanges, loadPackageRegistry, loadPackageResearchExamples } from '../../data-client/staticDataClient'
import { useI18n } from '../../i18n'
import { findTemporalPackageCards, type TemporalPackageSource } from './temporalPackageSceneMatcher'
import './TemporalPackageCards.css'

const INITIAL_CARD_LIMIT = 3

interface TemporalPackageCardsProps {
  ageMa: number
}

export function TemporalPackageCards({ ageMa }: TemporalPackageCardsProps) {
  const { language, t } = useI18n()
  const [packages, setPackages] = useState<TemporalPackageSource[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadPackageRegistry()
      .then((registry) => Promise.all(registry.packages.map(async (entry) => {
        const [research, ranges] = await Promise.all([loadPackageResearchExamples(entry.id), loadPackageRanges(entry.id)])
        return { id: entry.id, title: entry.title, titleZh: entry.titleZh, examples: research.examples, ranges }
      })))
      .then((loaded) => {
        if (!cancelled) {
          setPackages(loaded)
          setStatus('ready')
        }
      })
      .catch(() => { if (!cancelled) setStatus('error') })
    return () => { cancelled = true }
  }, [])

  const cards = useMemo(() => findTemporalPackageCards(packages, ageMa), [ageMa, packages])
  const visibleCards = expanded ? cards : cards.slice(0, INITIAL_CARD_LIMIT)
  if (status === 'error' || (status === 'ready' && cards.length === 0)) return null

  return <section className="map-temporal-cards" aria-label={t('Time-matched evidence scenes')} aria-live="polite">
    <header><div><span>{t('Evidence scenes at this time')}</span><small>{t('Published range and claim links only')}</small></div>{status === 'ready' && <strong>{cards.length}</strong>}</header>
    {status === 'loading'
      ? <p className="map-temporal-cards__loading" role="status">{t('Checking published range evidence…')}</p>
      : <div className="map-temporal-cards__list">{visibleCards.map((card) => {
        const title = language === 'zh' ? card.packageTitleZh : card.packageTitle
        const exampleTitle = language === 'zh' ? card.example.title.zh : card.example.title.en
        const exampleDescription = language === 'zh' ? card.example.description.zh : card.example.description.en
        return <article className="map-temporal-card" key={`${card.packageId}:${card.example.id}`}>
          <div className="map-temporal-card__meta"><span>{t(card.example.type === 'comparison' ? 'Comparison' : 'Research scene')}</span><code>{card.olderMa}–{card.youngerMa} Ma</code></div>
          <h3>{title}</h3><strong>{exampleTitle}</strong><p>{exampleDescription}</p>
          <dl><div><dt>{t('Range evidence')}</dt><dd>{card.range.taxonomicConcept}</dd></div><div><dt>{t('Geographic scope')}</dt><dd>{card.range.geographicScope}</dd></div></dl>
          <p className="map-temporal-card__limitation"><b>{t('Limitations')}</b>{t(card.example.limitations[0] ?? 'The linked evidence keeps its stated boundary.')}</p>
          <p className="map-temporal-card__boundary">{t('This contextual overlay is a temporal match, not a fossil locality, point or reconstructed distribution on the map.')}</p>
          <a href={card.example.route}>{t('Open available scene')} →</a>
        </article>
      })}</div>}
    {cards.length > INITIAL_CARD_LIMIT && <button type="button" className="map-temporal-cards__toggle" aria-expanded={expanded} onClick={() => setExpanded((current) => !current)}>{expanded ? t('Show fewer scenes') : t('Show {count} more scenes', { count: cards.length - INITIAL_CARD_LIMIT })}</button>}
  </section>
}
