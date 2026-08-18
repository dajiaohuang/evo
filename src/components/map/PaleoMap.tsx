import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'
import { useAppStore } from '../../store'
import { usePaleogeography } from '../../hooks/usePaleogeography'
import { FossilMarkers, type MarkerMode } from './FossilMarkers'
import { hasSpatialPosition, type CoordinateMode } from '../../utils/spatial'
import { MIN_MAP_ZOOM, MAX_MAP_ZOOM, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'
import { useI18n } from '../../i18n'

export function PaleoMap() {
  const { number, t } = useI18n()
  const markerMode = useAppStore((s) => s.markerMode) as MarkerMode
  const coordinateMode = useAppStore((s) => s.coordinateMode) as CoordinateMode
  const showContinents = useAppStore((s) => s.showContinents)
  const setMarkerMode = useAppStore((s) => s.setMarkerMode)
  const setCoordinateMode = useAppStore((s) => s.setCoordinateMode)
  const setShowContinents = useAppStore((s) => s.setShowContinents)
  const viewState = useAppStore((s) => s.viewState)
  const setViewState = useAppStore((s) => s.setViewState)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const loadOccurrencesForInterval = useAppStore((s) => s.loadOccurrencesForInterval)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const mapRef = useRef<LeafletMap | null>(null)
  const { geoJson, available: landLayerAvailable } = usePaleogeography(currentPeriod)

  useEffect(() => {
    if (currentPeriod) {
      loadOccurrencesForInterval(currentPeriod)
    }
  }, [currentPeriod, loadOccurrencesForInterval])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const handler = () => {
      const c = map.getCenter()
      const z = map.getZoom()
      const current = useAppStore.getState().viewState
      if (
        Math.abs(current.center[0] - c.lat) > 0.0001
        || Math.abs(current.center[1] - c.lng) > 0.0001
        || Math.abs(current.zoom - z) > 0.0001
      ) {
        setViewState({ center: [c.lat, c.lng], zoom: z })
      }
    }
    map.on('moveend', handler)
    return () => { map.off('moveend', handler) }
  }, [setViewState])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const center = map.getCenter()
    if (
      Math.abs(center.lat - viewState.center[0]) > 0.0001
      || Math.abs(center.lng - viewState.center[1]) > 0.0001
      || Math.abs(map.getZoom() - viewState.zoom) > 0.0001
    ) {
      map.setView(viewState.center, viewState.zoom, { animate: false })
    }
  }, [viewState])

  const records = useMemo(() => currentPeriod ? (occurrencesByInterval[currentPeriod] ?? []) : [], [currentPeriod, occurrencesByInterval])
  const fossilCount = records.length
  const recordsLoaded = currentPeriod ? Object.hasOwn(occurrencesByInterval, currentPeriod) : true
  const paleoCoverage = useMemo(() => {
    if (!records.length) return 0
    return records.filter((record) => hasSpatialPosition(record, 'paleo')).length / records.length
  }, [records])

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={viewState.center ?? DEFAULT_MAP_CENTER}
        zoom={viewState.zoom ?? DEFAULT_MAP_ZOOM}
        minZoom={MIN_MAP_ZOOM}
        maxZoom={MAX_MAP_ZOOM}
        zoomControl={true}
        attributionControl={false}
        style={{ height: '100%', width: '100%', background: '#07171c' }}
        ref={mapRef}
      >
        {showContinents && landLayerAvailable && geoJson && (
          <GeoJSON
            key={currentPeriod ?? 'cretaceous'}
            data={geoJson}
            style={() => ({
              color: '#5a957d',
              weight: 1.5,
              fillColor: '#24463c',
              fillOpacity: 0.7,
            })}
          />
        )}
        <FossilMarkers mode={markerMode} coordinateMode={coordinateMode} />
      </MapContainer>

      <div style={{
        position: 'absolute', top: 8, left: 12, zIndex: 1000,
        background: 'rgba(8, 17, 21, 0.88)', borderRadius: 3,
        padding: '6px 12px', fontSize: 12, color: '#e6edf3',
        border: '1px solid #2a4248', pointerEvents: 'none',
      }}>
        {currentPeriod
          ? recordsLoaded
            ? t('{period} — {count} fossils', { period: t(currentPeriod), count: number(fossilCount) })
            : `${t(currentPeriod)} — ${t('loading records…')}`
          : t('No detailed map snapshot for this age')}
        {currentPeriod && recordsLoaded && (
          <div style={{ marginTop: 2, color: '#82938c', fontSize: 9 }}>
            {t('Paleo-coordinate coverage {coverage}%', { coverage: (paleoCoverage * 100).toFixed(0) })}
          </div>
        )}
      </div>

      <div className="map-layer-control" aria-label={t('Map layer controls')}>
        <span>{t('Evidence layer')}</span>
        <div role="group" aria-label={t('Fossil marker style')}>
          {(['clusters', 'density', 'points'] as MarkerMode[]).map((mode) => (
            <button key={mode} className={markerMode === mode ? 'is-active' : ''} onClick={() => setMarkerMode(mode)}>{t(mode)}</button>
          ))}
        </div>
        <span>{t('Coordinates')}</span>
        <div role="group" aria-label={t('Coordinate model')}>
          {(['paleo', 'modern'] as CoordinateMode[]).map((mode) => (
            <button key={mode} className={coordinateMode === mode ? 'is-active' : ''} onClick={() => setCoordinateMode(mode)}>{t(mode)}</button>
          ))}
        </div>
        <label title={landLayerAvailable ? undefined : t('Continental geometry is withheld pending source and license provenance.')}>
          <input type="checkbox" checked={showContinents && landLayerAvailable} disabled={!landLayerAvailable} onChange={(event) => setShowContinents(event.target.checked)} /> {t('period land snapshot')}
        </label>
        {!landLayerAvailable && <small role="status">{t('Continental geometry withheld pending provenance; occurrence coordinates remain available.')}</small>}
        <small>{t(coordinateMode === 'paleo' ? 'Only records with paired reconstructed coordinates are shown; no modern fallback.' : 'Only paired modern collection coordinates are shown; not aligned to reconstructed land.')}</small>
        <dl className="map-model-ledger">
          <div><dt>{t('Land')}</dt><dd>{t(landLayerAvailable ? 'period snapshot' : 'withheld')}</dd></div>
          <div><dt>{t('Paleo points')}</dt><dd>{t('PBDB bundled field')}</dd></div>
          <div><dt>{t('Runtime')}</dt><dd>{t('no live reconstruction')}</dd></div>
        </dl>
      </div>
    </div>
  )
}
