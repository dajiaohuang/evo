import periods from '../../../data/periods.json'
import manifest from '../../../data/manifest.json'
import storiesData from '../../../data/stories.json'
import { useAppStore } from '../../store'
import type { AppRoute } from '../../utils/routing'
import './HomePage.css'

interface HomePageProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

const featuredStories = storiesData.filter((story) => story.featured).slice(0, 3)

export function HomePage({ onNavigate }: HomePageProps) {
  const setTime = useAppStore((state) => state.setTime)

  const enterAt = (age: number) => {
    setTime(age)
    onNavigate('explore')
  }

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
        <div className="hero__content">
          <div className="kicker"><span /> Deep-time evidence explorer</div>
          <h1>
            Life has a history.<br />
            <em>Read the evidence.</em>
          </h1>
          <p>
            Navigate 4.567 billion years of fossils, shifting continents and evolutionary branches
            in one connected, source-aware atlas.
          </p>
          <div className="hero__actions">
            <button className="button button--primary" onClick={() => enterAt(66)}>
              Open explorer <span aria-hidden="true">↗</span>
            </button>
            <button className="button button--ghost" onClick={() => onNavigate('data')}>
              Inspect the dataset
            </button>
          </div>
        </div>

        <div className="hero__instrument" aria-label="Deep time overview">
          <div className="instrument__header">
            <span>EARTH HISTORY / DEEP TIME</span>
            <span>4.567 Ga—PRESENT</span>
          </div>
          <div className="instrument__rings">
            <div className="ring ring--outer" />
            <div className="ring ring--middle" />
            <div className="ring ring--inner" />
            <div className="instrument__core">
              <strong>13.6K</strong>
              <span>occurrences</span>
            </div>
            <span className="orbit-dot orbit-dot--one" />
            <span className="orbit-dot orbit-dot--two" />
            <span className="orbit-dot orbit-dot--three" />
          </div>
          <div className="instrument__legend">
            <span><i className="legend-dot legend-dot--fossil" /> Fossil occurrence</span>
            <span><i className="legend-dot legend-dot--branch" /> Evolutionary branch</span>
          </div>
        </div>
      </section>

      <section className="atlas-strip" aria-label="Atlas statistics">
        <div><strong>{manifest.records.fossilOccurrences.toLocaleString()}</strong><span>fossil records</span></div>
        <div><strong>{manifest.records.treeNodes}</strong><span>curated tree nodes</span></div>
        <div><strong>{manifest.records.paleogeographicSnapshots}</strong><span>world snapshots</span></div>
        <div><strong>4.567 Gyr</strong><span>visible timespan</span></div>
      </section>

      <section className="home-section period-section">
        <div className="section-heading">
          <div>
            <span className="section-label">Time navigator</span>
            <h2>Enter anywhere in deep time</h2>
          </div>
          <p>Each interval aligns the tree, map and fossil evidence to a shared geological age.</p>
        </div>

        <div className="period-ribbon">
          {[...periods].reverse().map((period) => (
            <button
              key={period.name}
              style={{ '--period-color': period.color } as React.CSSProperties}
              onClick={() => enterAt((period.eag + period.lag) / 2)}
              title={period.description}
            >
              <span>{period.abr}</span>
              <strong>{period.name}</strong>
              <small>{period.eag.toFixed(1)} Ma</small>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section story-section">
        <div className="section-heading">
          <div>
            <span className="section-label">Field stories</span>
            <h2>Start with a turning point</h2>
          </div>
          <p>Guided narratives are reproducible sequences of real explorer states.</p>
        </div>
        <div className="story-grid">
          {featuredStories.map((story, index) => (
            <button
              key={story.id}
              className={`story-card story-card--${story.theme}`}
              onClick={() => onNavigate('stories', { id: story.id })}
            >
              <span className="story-card__number">0{index + 1}</span>
              <div>
                <small>{story.durationMinutes} min · guided evidence</small>
                <h3>{story.titleZh}</h3>
                <p>{story.dek}</p>
              </div>
              <span className="story-card__arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span>EVO ATLAS / {manifest.datasetVersion}</span>
        <span>Static-first · Source-aware · Open data</span>
      </footer>
    </main>
  )
}
