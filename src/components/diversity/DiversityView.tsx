import { useMemo } from 'react'
import { useAppStore } from '../../store'
import { buildDiversityBins, summarizeSampling, topObservedTaxa } from '../../services/diversity'
import './DiversityView.css'

function percentage(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}

export function DiversityView() {
  const currentPeriod = useAppStore((state) => state.currentPeriod)
  const records = useAppStore((state) => currentPeriod ? state.occurrencesByInterval[currentPeriod] ?? [] : [])
  const quality = useMemo(() => summarizeSampling(records), [records])
  const bins = useMemo(() => buildDiversityBins(records, 12), [records])
  const topTaxa = useMemo(() => topObservedTaxa(records), [records])
  const maxBin = Math.max(1, ...bins.map((bin) => bin.observedTaxa))
  const maxTaxon = Math.max(1, ...topTaxa.map((taxon) => taxon.count))

  if (!currentPeriod) {
    return <div className="diversity-empty">Choose a Phanerozoic period to inspect its bundled occurrence sample.</div>
  }

  return (
    <div className="diversity-view">
      <header>
        <div>
          <span>Sampling-aware summary</span>
          <h2>{currentPeriod} occurrence evidence</h2>
        </div>
        <p>Counts describe this bundled PBDB sample. They are not direct estimates of true biodiversity.</p>
      </header>

      <section className="quality-grid" aria-label="Sampling quality summary">
        <article><strong>{quality.totalOccurrences.toLocaleString()}</strong><span>occurrences</span></article>
        <article><strong>{quality.observedTaxa.toLocaleString()}</strong><span>observed names</span></article>
        <article><strong>{quality.collections.toLocaleString()}</strong><span>collections</span></article>
        <article><strong>{quality.countries.toLocaleString()}</strong><span>countries</span></article>
      </section>

      <div className="diversity-columns">
        <section className="diversity-panel">
          <div className="diversity-panel-heading">
            <div><span>Temporal coverage</span><h3>Observed taxon names by midpoint bin</h3></div>
            <small>Occurrence age midpoint · older → younger</small>
          </div>
          <div className="age-bin-chart" role="img" aria-label="Observed taxon names by age bin">
            {bins.map((bin) => (
              <div className="age-bin" key={`${bin.olderMa}-${bin.youngerMa}`}>
                <div className="age-bin-bar" style={{ height: `${Math.max(2, bin.observedTaxa / maxBin * 100)}%` }} title={`${bin.observedTaxa} observed names; ${bin.occurrences} occurrences`} />
                <small>{bin.olderMa.toFixed(0)}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="diversity-panel">
          <div className="diversity-panel-heading"><div><span>Composition</span><h3>Most-recorded taxon names</h3></div></div>
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
        <div><span>Paleo coordinates</span><strong>{percentage(quality.paleoCoordinateCoverage)}</strong></div>
        <div><span>Country metadata</span><strong>{percentage(quality.countryCoverage)}</strong></div>
        <div><span>Age range ≤10 Ma</span><strong>{percentage(quality.narrowAgeCoverage)}</strong></div>
        <div><span>Median age range</span><strong>{quality.medianAgeUncertaintyMa.toFixed(1)} Ma</strong></div>
      </section>

      <aside className="bias-callout">
        <strong>Interpretation guardrail</strong>
        <p>Uneven rock exposure, collecting intensity, taxonomic practice, spatial coverage and age precision all shape these patterns. A zero is an unobserved cell in this sample—not evidence of biological absence.</p>
      </aside>
    </div>
  )
}
