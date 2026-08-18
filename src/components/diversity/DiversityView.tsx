import { useMemo } from 'react'
import { useAppStore } from '../../store'
import { buildDiversityBins, summarizeSampling, topObservedTaxa } from '../../services/diversity'
import type { FossilOccurrence } from '../../types'
import './DiversityView.css'
import { useI18n } from '../../i18n'

const EMPTY_OCCURRENCES: FossilOccurrence[] = []

function percentage(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}

export function DiversityView() {
  const { number, t } = useI18n()
  const currentPeriod = useAppStore((state) => state.currentPeriod)
  const loadedRecords = useAppStore((state) => currentPeriod ? state.occurrencesByInterval[currentPeriod] : undefined)
  const records = loadedRecords ?? EMPTY_OCCURRENCES
  const quality = useMemo(() => summarizeSampling(records), [records])
  const bins = useMemo(() => buildDiversityBins(records, 12), [records])
  const topTaxa = useMemo(() => topObservedTaxa(records), [records])
  const maxBin = Math.max(1, ...bins.map((bin) => bin.observedTaxa))
  const maxTaxon = Math.max(1, ...topTaxa.map((taxon) => taxon.count))

  if (!currentPeriod) {
    return <div className="diversity-empty">{t('Choose a Phanerozoic period to inspect its bundled occurrence sample.')}</div>
  }

  return (
    <div className="diversity-view">
      <header>
        <div>
          <span>{t('Sampling-aware summary')}</span>
          <h2>{t('{period} occurrence evidence', { period: t(currentPeriod) })}</h2>
        </div>
        <p>{t('Counts describe this bundled PBDB sample. They are not direct estimates of true biodiversity.')}</p>
      </header>

      <section className="quality-grid" aria-label={t('Sampling quality summary')}>
        <article><strong>{number(quality.totalOccurrences)}</strong><span>{t('occurrences')}</span></article>
        <article><strong>{number(quality.observedTaxa)}</strong><span>{t('observed names')}</span></article>
        <article><strong>{number(quality.collections)}</strong><span>{t('collections')}</span></article>
        <article><strong>{number(quality.countries)}</strong><span>{t('countries')}</span></article>
      </section>

      <div className="diversity-columns">
        <section className="diversity-panel">
          <div className="diversity-panel-heading">
            <div><span>{t('Temporal coverage')}</span><h3>{t('Observed taxon names by midpoint bin')}</h3></div>
            <small>{t('Occurrence age midpoint · older → younger')}</small>
          </div>
          <div className="age-bin-chart" role="img" aria-label={t('Observed taxon names by age bin')}>
            {bins.map((bin) => (
              <div className="age-bin" key={`${bin.olderMa}-${bin.youngerMa}`}>
                <div className="age-bin-bar" style={{ height: `${Math.max(2, bin.observedTaxa / maxBin * 100)}%` }} title={t('{names} observed names; {occurrences} occurrences', { names: number(bin.observedTaxa), occurrences: number(bin.occurrences) })} />
                <small>{bin.olderMa.toFixed(0)}</small>
              </div>
            ))}
          </div>
          <table className="visually-hidden">
            <caption>{t('Observed taxon names by age bin')}</caption>
            <thead><tr><th>{t('Age Range')}</th><th>{t('Observed names')}</th><th>{t('occurrences')}</th></tr></thead>
            <tbody>
              {bins.map((bin) => (
                <tr key={`table-${bin.olderMa}-${bin.youngerMa}`}>
                  <td>{bin.olderMa.toFixed(1)}–{bin.youngerMa.toFixed(1)} Ma</td>
                  <td>{bin.observedTaxa}</td>
                  <td>{bin.occurrences}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="diversity-panel">
          <div className="diversity-panel-heading"><div><span>{t('Composition')}</span><h3>{t('Most-recorded taxon names')}</h3></div></div>
          <div className="taxon-bars">
            {topTaxa.map((taxon) => (
              <div className="taxon-bar" key={taxon.name}>
                <span title={taxon.name}>{taxon.name}</span>
                <i><b style={{ width: `${taxon.count / maxTaxon * 100}%` }} /></i>
                <strong>{taxon.count}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="coverage-panel">
        <div><span>{t('Paleo coordinates')}</span><strong>{percentage(quality.paleoCoordinateCoverage)}</strong></div>
        <div><span>{t('Country metadata')}</span><strong>{percentage(quality.countryCoverage)}</strong></div>
        <div><span>{t('Age range ≤10 Ma')}</span><strong>{percentage(quality.narrowAgeCoverage)}</strong></div>
        <div><span>{t('Median age range')}</span><strong>{quality.medianAgeUncertaintyMa.toFixed(1)} Ma</strong></div>
      </section>

      <aside className="bias-callout">
        <strong>{t('Interpretation guardrail')}</strong>
        <p>{t('Uneven rock exposure, collecting intensity, taxonomic practice, spatial coverage and age precision all shape these patterns. A zero is an unobserved cell in this sample—not evidence of biological absence.')}</p>
      </aside>
    </div>
  )
}
