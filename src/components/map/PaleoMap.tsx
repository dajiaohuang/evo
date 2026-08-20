import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, GeoJSON, Polyline, Tooltip } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'
import { useAppStore } from '../../store'
import { usePaleogeography } from '../../hooks/usePaleogeography'
import { FossilMarkers, type MarkerMode } from './FossilMarkers'
import { getSpatialPosition, hasSpatialPosition, type CoordinateMode } from '../../utils/spatial'
import { MIN_MAP_ZOOM, MAX_MAP_ZOOM, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'
import { useI18n } from '../../i18n'
import type { FossilOccurrence } from '../../types'

interface TrajectoryBin {
  ageMa: number
  olderMa: number
  youngerMa: number
  latitude: number
  longitude: number
  records: number
}

function occurrenceTrajectory(records: FossilOccurrence[], coordinateMode: CoordinateMode): TrajectoryBin[] {
  const positioned = records.flatMap((record) => {
    const position = getSpatialPosition(record, coordinateMode)
    return position.mode === coordinateMode ? [{ record, position }] : []
  })
  if (positioned.length < 2) return []
  const oldest = Math.max(...positioned.map(({ record }) => (record.eag + record.lag) / 2))
  const youngest = Math.min(...positioned.map(({ record }) => (record.eag + record.lag) / 2))
  const span = Math.max(oldest - youngest, .001)
  const binCount = Math.min(8, Math.max(2, Math.ceil(Math.sqrt(positioned.length) / 2)))
  const bins = Array.from({ length: binCount }, () => [] as typeof positioned)
  for (const entry of positioned) {
    const age = (entry.record.eag + entry.record.lag) / 2
    const index = Math.min(binCount - 1, Math.floor(((oldest - age) / span) * binCount))
    bins[index].push(entry)
  }
  return bins.flatMap((bin) => {
    if (!bin.length) return []
    const latitude = bin.reduce((sum, entry) => sum + entry.position.lat, 0) / bin.length
    const longitudeRadians = bin.map((entry) => entry.position.lng * Math.PI / 180)
    const longitude = Math.atan2(longitudeRadians.reduce((sum, value) => sum + Math.sin(value), 0), longitudeRadians.reduce((sum, value) => sum + Math.cos(value), 0)) * 180 / Math.PI
    const ages = bin.map(({ record }) => (record.eag + record.lag) / 2)
    return [{ ageMa: ages.reduce((sum, age) => sum + age, 0) / ages.length, olderMa: Math.max(...ages), youngerMa: Math.min(...ages), latitude, longitude, records: bin.length }]
  }).sort((left, right) => right.ageMa - left.ageMa)
}

export function PaleoMap() {
  const { number, t } = useI18n()
  const [showTrajectory, setShowTrajectory] = useState(false)
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
  const occurrencesByTaxonQuery = useAppStore((s) => s.occurrencesByTaxonQuery)
  const selectedNodeId = useAppStore((s) => s.selectedNodeId)
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
  const positionedRecords = useMemo(() => records.filter((record) => hasSpatialPosition(record, coordinateMode)), [coordinateMode, records])
  const selectedTaxonRecords = useMemo(() => selectedNodeId ? occurrencesByTaxonQuery[`descendants:${selectedNodeId}`] ?? [] : [], [occurrencesByTaxonQuery, selectedNodeId])
  const trajectory = useMemo(() => occurrenceTrajectory(selectedTaxonRecords, coordinateMode), [coordinateMode, selectedTaxonRecords])
  const latitudinalShift = trajectory.length > 1 ? trajectory.at(-1)!.latitude - trajectory[0].latitude : null

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
        {showTrajectory && trajectory.length > 1 && <Polyline positions={trajectory.map((bin) => [bin.latitude, bin.longitude])} pathOptions={{ color: '#d8aa68', weight: 2, dashArray: '5 5', opacity: .9 }}><Tooltip sticky><div>{t('Sample centroid trajectory')}<br />{t('{count} time bins · latitude change {shift}°', { count: trajectory.length, shift: `${latitudinalShift! >= 0 ? '+' : ''}${latitudinalShift!.toFixed(1)}` })}</div></Tooltip></Polyline>}
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
        <label title={t('Connects time-binned sample centroids; it is not a biological dispersal route.')}>
          <input type="checkbox" checked={showTrajectory && trajectory.length > 1} disabled={trajectory.length < 2} onChange={(event) => setShowTrajectory(event.target.checked)} /> {t('sample centroid trajectory')}
        </label>
        {selectedNodeId && <small>{trajectory.length > 1 ? t('{count} time bins · latitude change {shift}°', { count: trajectory.length, shift: `${latitudinalShift! >= 0 ? '+' : ''}${latitudinalShift!.toFixed(1)}` }) : t('The selected taxon has insufficient positioned records for a trajectory.')}</small>}
        {!landLayerAvailable && <small role="status">{t('Continental geometry withheld pending provenance; occurrence coordinates remain available.')}</small>}
        <small>{t(coordinateMode === 'paleo' ? 'Only records with paired reconstructed coordinates are shown; no modern fallback.' : 'Only paired modern collection coordinates are shown; not aligned to reconstructed land.')}</small>
        <dl className="map-model-ledger">
          <div><dt>{t('Land')}</dt><dd>{t(landLayerAvailable ? 'period snapshot' : 'withheld')}</dd></div>
          <div><dt>{t('Paleo points')}</dt><dd>{t('PBDB bundled field')}</dd></div>
          <div><dt>{t('Runtime')}</dt><dd>{t('no live reconstruction')}</dd></div>
        </dl>
      </div>

      <details className="map-data-alternative">
        <summary>{t('Text and table alternative')}</summary>
        <div>
          <p>{t('{count} records have {mode} coordinates in the loaded {period} sample. The table shows the first {shown}.', { count: number(positionedRecords.length), mode: t(coordinateMode), period: t(currentPeriod ?? 'selected interval'), shown: number(Math.min(100, positionedRecords.length)) })}</p>
          <table>
            <caption>{t('Occurrence coordinate data')}</caption>
            <thead><tr><th>{t('Taxon')}</th><th>{t('Age Range')}</th><th>{t('Latitude')}</th><th>{t('Longitude')}</th><th>{t('Collection')}</th></tr></thead>
            <tbody>{positionedRecords.slice(0, 100).map((record) => <tr key={record.oid}><td>{record.tna ?? record.idn ?? t('Unknown')}</td><td>{record.eag}–{record.lag} Ma</td><td>{coordinateMode === 'paleo' ? record.paleolat : record.lat}</td><td>{coordinateMode === 'paleo' ? record.paleolng : record.lng}</td><td>{record.cid}</td></tr>)}</tbody>
          </table>
          {trajectory.length > 1 && <><h3>{t('Selected-taxon latitude summary')}</h3><p>{t('These are time-binned occurrence centroids, not inferred migration paths or biological range limits.')}</p><table><thead><tr><th>{t('Mean age')}</th><th>{t('Age window')}</th><th>{t('Latitude')}</th><th>{t('Longitude')}</th><th>{t('Records')}</th></tr></thead><tbody>{trajectory.map((bin) => <tr key={`${bin.olderMa}-${bin.youngerMa}`}><td>{bin.ageMa.toFixed(2)} Ma</td><td>{bin.olderMa.toFixed(2)}–{bin.youngerMa.toFixed(2)} Ma</td><td>{bin.latitude.toFixed(2)}</td><td>{bin.longitude.toFixed(2)}</td><td>{number(bin.records)}</td></tr>)}</tbody></table></>}
        </div>
      </details>
    </div>
  )
}
