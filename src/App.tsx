import { useEffect } from 'react'
import { useAppStore } from './store'
import { AppLayout } from './components/layout/AppLayout'
import { PaleoMap } from './components/map/PaleoMap'
import { GeoTimeline } from './components/timeline/GeoTimeline'
import { EvoTree } from './components/tree/EvoTree'
import { SpeciesDetail } from './components/details/SpeciesDetail'
import { ErrorBoundary } from './components/common/ErrorBoundary'

function FallbackView({ message }: { message: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100%', width: '100%', color: 'var(--color-text-muted)',
      fontSize: 13, background: 'var(--color-surface)',
    }}>
      {message}
    </div>
  )
}

export default function App() {
  const loadIntervals = useAppStore((s) => s.loadIntervals)
  const intervalsLoading = useAppStore((s) => s.intervalsLoading)
  const intervalsError = useAppStore((s) => s.intervalsError)

  useEffect(() => {
    loadIntervals()
  }, [loadIntervals])

  if (intervalsLoading && !intervalsError) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', color: 'var(--color-text-muted)',
        background: 'var(--color-bg)', fontSize: 15,
      }}>
        Loading geological timescale...
      </div>
    )
  }

  if (intervalsError) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 8,
        height: '100vh', color: 'var(--color-danger)',
        background: 'var(--color-bg)', fontSize: 15,
      }}>
        <div>Failed to load geological data</div>
        <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{intervalsError}</div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <AppLayout
        map={
          <ErrorBoundary fallback={<FallbackView message="Map failed to load" />}>
            <PaleoMap />
          </ErrorBoundary>
        }
        tree={
          <ErrorBoundary fallback={<FallbackView message="Tree failed to load" />}>
            <EvoTree />
          </ErrorBoundary>
        }
        timeline={
          <ErrorBoundary fallback={<FallbackView message="Timeline failed to load" />}>
            <GeoTimeline />
          </ErrorBoundary>
        }
        details={
          <ErrorBoundary fallback={<FallbackView message="Details failed to load" />}>
            <SpeciesDetail />
          </ErrorBoundary>
        }
      />
    </ErrorBoundary>
  )
}
