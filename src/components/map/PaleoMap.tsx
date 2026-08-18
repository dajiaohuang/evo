import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
import { useAppStore } from '../../store'
import { usePaleogeography } from '../../hooks/usePaleogeography'
import { FossilMarkers, type CoordinateMode, type MarkerMode } from './FossilMarkers'
import { MIN_MAP_ZOOM, MAX_MAP_ZOOM, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'

export function PaleoMap() {
  const [markerMode, setMarkerMode] = useState<MarkerMode>('clusters')
  const [coordinateMode, setCoordinateMode] = useState<CoordinateMode>('paleo')
  const [showContinents, setShowContinents] = useState(true)
  const setViewState = useAppStore((s) => s.setViewState)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const loadOccurrencesForInterval = useAppStore((s) => s.loadOccurrencesForInterval)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const mapRef = useRef<L.Map | null>(null)
  const { geoJson } = usePaleogeography(currentPeriod)

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
      setViewState({ center: [c.lat, c.lng], zoom: z })
    }
    map.on('moveend', handler)
    return () => { map.off('moveend', handler) }
  }, [setViewState])

  const records = useMemo(() => currentPeriod ? (occurrencesByInterval[currentPeriod] ?? []) : [], [currentPeriod, occurrencesByInterval])
  const fossilCount = records.length
  const recordsLoaded = currentPeriod ? Object.hasOwn(occurrencesByInterval, currentPeriod) : true
  const paleoCoverage = useMemo(() => {
    if (!records.length) return 0
    return records.filter((record) => Number.isFinite(record.paleolat) && Number.isFinite(record.paleolng)).length / records.length
  }, [records])

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={DEFAULT_MAP_CENTER}
        zoom={DEFAULT_MAP_ZOOM}
        minZoom={MIN_MAP_ZOOM}
        maxZoom={MAX_MAP_ZOOM}
        zoomControl={true}
        attributionControl={false}
        style={{ height: '100%', width: '100%', background: '#07171c' }}
        ref={mapRef}
      >
        {showContinents && geoJson && (
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
          ? `${currentPeriod} — ${recordsLoaded ? `${fossilCount.toLocaleString()} fossils` : 'loading records…'}`
          : 'No detailed map snapshot for this age'}
        {currentPeriod && recordsLoaded && (
          <div style={{ marginTop: 2, color: '#82938c', fontSize: 9 }}>
            Paleo-coordinate coverage {(paleoCoverage * 100).toFixed(0)}%
          </div>
        )}
      </div>

      <div className="map-layer-control" aria-label="Map layer controls">
        <span>Evidence layer</span>
        <div role="group" aria-label="Fossil marker style">
          {(['clusters', 'density', 'points'] as MarkerMode[]).map((mode) => (
            <button key={mode} className={markerMode === mode ? 'is-active' : ''} onClick={() => setMarkerMode(mode)}>{mode}</button>
          ))}
        </div>
        <span>Coordinates</span>
        <div role="group" aria-label="Coordinate model">
          {(['paleo', 'modern'] as CoordinateMode[]).map((mode) => (
            <button key={mode} className={coordinateMode === mode ? 'is-active' : ''} onClick={() => setCoordinateMode(mode)}>{mode}</button>
          ))}
        </div>
        <label><input type="checkbox" checked={showContinents} onChange={(event) => setShowContinents(event.target.checked)} /> period land snapshot</label>
        <small>{coordinateMode === 'paleo' ? 'Reconstructed coordinates where available; modern fallback otherwise.' : 'Modern collection coordinates; not aligned to reconstructed land.'}</small>
        <dl className="map-model-ledger">
          <div><dt>Land</dt><dd>period snapshot</dd></div>
          <div><dt>Paleo points</dt><dd>PBDB bundled field</dd></div>
          <div><dt>Runtime</dt><dd>no live reconstruction</dd></div>
        </dl>
      </div>
    </div>
  )
}
