import manifest from '../../../data/manifest.json'
import storiesData from '../../../data/stories.json'
import { useAppStore } from '../../store'
import { periods } from '../../services/geology'
import type { AppRoute } from '../../utils/routing'
import { useI18n } from '../../i18n'
import './HomePage.css'

interface HomePageProps {
  onNavigate: (route: AppRoute, params?: Record<string, string>) => void
}

const featuredStories = storiesData.filter((story) => story.featured).slice(0, 3)

export function HomePage({ onNavigate }: HomePageProps) {
  const { language, number, t } = useI18n()
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
          <div className="kicker"><span /> {t('Deep-time evidence explorer')}</div>
          <h1>
            {t('Life has a history.')}<br />
            <em>{t('Read the evidence.')}</em>
          </h1>
          <p>{t('Navigate 4.567 billion years of fossils, shifting continents and evolutionary branches in one connected, source-aware atlas.')}</p>
          <div className="hero__actions">
            <button className="button button--primary" onClick={() => enterAt(66)}>
              {t('Open explorer')} <span aria-hidden="true">↗</span>
            </button>
            <button className="button button--ghost" onClick={() => onNavigate('data')}>
              {t('Inspect the dataset')}
            </button>
          </div>
        </div>

        <div className="hero__instrument" aria-label={t('Deep time overview')}>
          <div className="instrument__header">
            <span>{t('Earth history / deep time').toUpperCase()}</span>
            <span>{t('4.567 Ga—Present').toUpperCase()}</span>
          </div>
          <div className="instrument__rings">
            <div className="ring ring--outer" />
            <div className="ring ring--middle" />
            <div className="ring ring--inner" />
            <div className="instrument__core">
              <strong>13.6K</strong>
              <span>{t('occurrences')}</span>
            </div>
            <span className="orbit-dot orbit-dot--one" />
            <span className="orbit-dot orbit-dot--two" />
            <span className="orbit-dot orbit-dot--three" />
          </div>
          <div className="instrument__legend">
            <span><i className="legend-dot legend-dot--fossil" /> {t('Fossil occurrence')}</span>
            <span><i className="legend-dot legend-dot--branch" /> {t('Evolutionary branch')}</span>
          </div>
        </div>
      </section>

      <section className="atlas-strip" aria-label={t('Atlas statistics')}>
        <div><strong>{number(manifest.records.fossilOccurrences)}</strong><span>{t('fossil records')}</span></div>
        <div><strong>{number(manifest.records.treeNodes)}</strong><span>{t('curated tree nodes')}</span></div>
        <div><strong>{number(manifest.records.paleogeographicSnapshots)}</strong><span>{t('licensed land snapshots')}</span></div>
        <div><strong>{language === 'zh' ? '45.67 亿年' : '4.567 Gyr'}</strong><span>{t('visible timespan')}</span></div>
      </section>

      <section className="home-section period-section">
        <div className="section-heading">
          <div>
            <span className="section-label">{t('Time navigator')}</span>
            <h2>{t('Enter anywhere in deep time')}</h2>
          </div>
          <p>{t('Each interval aligns the tree, map and fossil evidence to a shared geological age.')}</p>
        </div>

        <div className="period-ribbon">
          {[...periods].reverse().map((period) => (
            <button
              key={period.name}
              style={{ '--period-color': period.color } as React.CSSProperties}
              onClick={() => enterAt((period.eag + period.lag) / 2)}
              title={language === 'zh' ? period.descriptionZh : period.description}
            >
              <span>{period.abr}</span>
              <strong>{language === 'zh' ? period.nameZh : period.name}</strong>
              <small>{period.eag.toFixed(1)} Ma</small>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section story-section">
        <div className="section-heading">
          <div>
            <span className="section-label">{t('Field stories')}</span>
            <h2>{t('Start with a turning point')}</h2>
          </div>
          <p>{t('Guided narratives are reproducible sequences of real explorer states.')}</p>
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
                <small>{story.durationMinutes} {language === 'zh' ? '分钟' : 'min'} · {t('guided evidence')}</small>
                <h3>{language === 'zh' ? story.titleZh : story.title}</h3>
                <p>{t(story.dek)}</p>
              </div>
              <span className="story-card__arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span>EVO ATLAS / {manifest.datasetVersion}</span>
        <span>{t('Static-first · Source-aware · Open data')}</span>
      </footer>
    </main>
  )
}
