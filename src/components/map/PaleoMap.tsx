import { useEffect, useRef } from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
import { useAppStore } from '../../store'
import { usePaleogeography } from '../../hooks/usePaleogeography'
import { FossilMarkers } from './FossilMarkers'
import { MIN_MAP_ZOOM, MAX_MAP_ZOOM, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'

export function PaleoMap() {
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

  const records = currentPeriod ? (occurrencesByInterval[currentPeriod] ?? []) : []
  const fossilCount = records.length

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={DEFAULT_MAP_CENTER}
        zoom={DEFAULT_MAP_ZOOM}
        minZoom={MIN_MAP_ZOOM}
        maxZoom={MAX_MAP_ZOOM}
        zoomControl={true}
        attributionControl={false}
        style={{ height: '100%', width: '100%', background: '#0a1628' }}
        ref={mapRef}
      >
        {geoJson && (
          <GeoJSON
            key={currentPeriod ?? 'cretaceous'}
            data={geoJson}
            style={() => ({
              color: '#4a8c6a',
              weight: 1.5,
              fillColor: '#2a4a3a',
              fillOpacity: 0.7,
            })}
          />
        )}
        <FossilMarkers />
      </MapContainer>

      <div style={{
        position: 'absolute', top: 8, left: 12, zIndex: 1000,
        background: 'rgba(22, 27, 34, 0.85)', borderRadius: 6,
        padding: '6px 12px', fontSize: 12, color: '#e6edf3',
        border: '1px solid #30363d', pointerEvents: 'none',
      }}>
        {currentPeriod ?? 'Cretaceous'} — {fossilCount.toLocaleString()} fossils
      </div>
    </div>
  )
}
