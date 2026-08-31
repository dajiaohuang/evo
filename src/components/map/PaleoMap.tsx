import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, GeoJSON, Polyline, Tooltip } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'
import { useAppStore } from '../../store'
import { usePaleogeography } from '../../hooks/usePaleogeography'
import { useCaoObservations } from '../../hooks/useCaoObservations'
import { FossilMarkers, type MarkerMode } from './FossilMarkers'
import { CaoObservationLayers } from './CaoObservationLayers'
import { getSpatialPosition, hasSpatialPosition, type CoordinateMode } from '../../utils/spatial'
import { observationsToGeoJson, visibleCaoObservations } from '../../utils/caoObservations'
import { resolvePaleotopographyFrame, runtimeDataUrl } from '../../data-client/staticDataClient'
import { PaleotopographyLayer } from './PaleotopographyLayer'
import { TemporalPackageCards } from './TemporalPackageCards'
import { MIN_MAP_ZOOM, MAX_MAP_ZOOM, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'
import { useI18n } from '../../i18n'
import { CAO_OBSERVATION_DATASET_IDS, type CaoObservationDatasetId, type CaoObservationRecord, type FossilOccurrence, type PaleogeographyLayerId } from '../../types'
import type { RuntimeMapObservationDataset } from '../../data-client/types'

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

function downloadJson(filename: string, value: unknown) {
  const url = URL.createObjectURL(new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: 'application/geo+json' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

function rawValue(value: unknown): string {
  if (value === '') return '(empty source value)'
  if (value === null) return 'null'
  return String(value)
}

function formatObservationPositions(positions: CaoObservationRecord['sourcePositions'] | null): string {
  if (!positions) return 'unavailable'
  const entries = Object.entries(positions)
  if (!entries.length) return 'unavailable'
  return entries.map(([key, position]) => `${key}: [${position[0]}, ${position[1]}]`).join(' · ')
}

export function PaleoMap() {
  const { number, t } = useI18n()
  const [showTrajectory, setShowTrajectory] = useState(false)
  const [showPlatePolygons, setShowPlatePolygons] = useState(true)
  const [showPlateBoundaries, setShowPlateBoundaries] = useState(true)
  const [showContinentalCrust, setShowContinentalCrust] = useState(false)
  const [showContinentOceanBoundaries, setShowContinentOceanBoundaries] = useState(false)
  const [showStaticPolygons, setShowStaticPolygons] = useState(false)
  const [showPaleotopography, setShowPaleotopography] = useState(false)
  const [paleotopographyStatus, setPaleotopographyStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [paleotopographyError, setPaleotopographyError] = useState<string | null>(null)
  const [enabledObservationDatasets, setEnabledObservationDatasets] = useState<Set<CaoObservationDatasetId>>(() => new Set())
  const [selectedObservation, setSelectedObservation] = useState<{ record: CaoObservationRecord; descriptor: RuntimeMapObservationDataset } | null>(null)
  const markerMode = useAppStore((s) => s.markerMode) as MarkerMode
  const coordinateMode = useAppStore((s) => s.coordinateMode) as CoordinateMode
  const showContinents = useAppStore((s) => s.showContinents)
  const setMarkerMode = useAppStore((s) => s.setMarkerMode)
  const setCoordinateMode = useAppStore((s) => s.setCoordinateMode)
  const setShowContinents = useAppStore((s) => s.setShowContinents)
  const viewState = useAppStore((s) => s.viewState)
  const setViewState = useAppStore((s) => s.setViewState)
  const currentPeriod = useAppStore((s) => s.currentPeriod)
  const currentAge = useAppStore((s) => s.currentAge)
  const loadOccurrencesForInterval = useAppStore((s) => s.loadOccurrencesForInterval)
  const occurrencesByInterval = useAppStore((s) => s.occurrencesByInterval)
  const occurrencesByTaxonQuery = useAppStore((s) => s.occurrencesByTaxonQuery)
  const selectedNodeId = useAppStore((s) => s.selectedNodeId)
  const mapRef = useRef<LeafletMap | null>(null)
  const requestedPaleogeographyLayers = useMemo(() => [
    ...(showContinents ? ['coastlines'] as const : []),
    ...(showPlatePolygons ? ['platePolygons'] as const : []),
    ...(showPlateBoundaries ? ['plateBoundaries'] as const : []),
    ...(showContinentalCrust ? ['continentalPolygons'] as const : []),
    ...(showContinentOceanBoundaries ? ['continentOceanBoundaries'] as const : []),
    ...(showStaticPolygons ? ['staticPolygons'] as const : []),
  ] satisfies PaleogeographyLayerId[], [showContinents, showPlatePolygons, showPlateBoundaries, showContinentalCrust, showContinentOceanBoundaries, showStaticPolygons])
  const {
    layers,
    available: landLayerAvailable,
    loading: landLayerLoading,
    error: landLayerError,
    selections: mapSelections,
    settledAgeMa,
    manifest: mapManifest,
    loadingLayers,
    layerErrors,
  } = usePaleogeography(currentAge, requestedPaleogeographyLayers)
  const requestedObservationDatasets = useMemo(
    () => CAO_OBSERVATION_DATASET_IDS.filter((datasetId) => enabledObservationDatasets.has(datasetId)),
    [enabledObservationDatasets],
  )
  const {
    collections: observationCollections,
    descriptors: observationDescriptors,
    loading: observationLoading,
    errors: observationErrors,
  } = useCaoObservations(requestedObservationDatasets)

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
  const boundaryTypeCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const feature of layers?.plateBoundaries?.features ?? []) {
      const type = feature.properties.type ?? 'UnclassifiedFeature'
      counts.set(type, (counts.get(type) ?? 0) + 1)
    }
    return [...counts.entries()].sort(([left], [right]) => left.localeCompare(right))
  }, [layers])
  const cobTypeCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const feature of layers?.continentOceanBoundaries?.features ?? []) {
      const type = feature.properties.type ?? 'UnclassifiedFeature'
      counts.set(type, (counts.get(type) ?? 0) + 1)
    }
    return [...counts.entries()].sort(([left], [right]) => left.localeCompare(right))
  }, [layers])
  const anyLayerLoading = landLayerLoading || requestedPaleogeographyLayers.some((layerId) => loadingLayers[layerId])
  const visibleLayerErrors = requestedPaleogeographyLayers.flatMap((layerId) => layerErrors[layerId] ? [[layerId, layerErrors[layerId]] as const] : [])
  const primaryMapSelection = mapSelections.coastlines ?? mapSelections.platePolygons ?? mapSelections.plateBoundaries
  const paleotopographyCollection = mapManifest?.paleotopography
  const paleotopographyFrame = useMemo(
    () => paleotopographyCollection ? resolvePaleotopographyFrame(paleotopographyCollection, currentAge) : null,
    [currentAge, paleotopographyCollection],
  )
  const paleotopographyAvailable = Boolean(paleotopographyFrame)
  const handlePaleotopographyStatus = useCallback((status: 'loading' | 'ready' | 'error', error?: string) => {
    setPaleotopographyStatus(status)
    setPaleotopographyError(error ?? null)
  }, [])
  const observationGroups = useMemo(() => requestedObservationDatasets.flatMap((datasetId) => {
    const collection = observationCollections[datasetId]
    const descriptor = observationDescriptors[datasetId]
    return collection && descriptor ? [{ datasetId, collection, descriptor, visible: visibleCaoObservations(collection.records, currentAge) }] : []
  }), [currentAge, observationCollections, observationDescriptors, requestedObservationDatasets])
  const visibleObservationRecords = useMemo(() => observationGroups.flatMap((group) => group.visible.map((record) => ({ record, descriptor: group.descriptor }))), [observationGroups])
  const anyObservationLoading = requestedObservationDatasets.some((datasetId) => observationLoading[datasetId])

  function toggleObservationDataset(datasetId: CaoObservationDatasetId, enabled: boolean) {
    setEnabledObservationDatasets((current) => {
      const next = new Set(current)
      if (enabled) next.add(datasetId)
      else next.delete(datasetId)
      return next
    })
    if (!enabled && selectedObservation?.record.observationKind === datasetId) setSelectedObservation(null)
  }

  function exportVisibleObservations() {
    const features = observationGroups.flatMap(({ collection, descriptor }) => observationsToGeoJson(collection.records, descriptor, currentAge).features)
    downloadJson(`evo-cao2024-observations-${currentAge.toFixed(3)}-ma.geojson`, { type: 'FeatureCollection', features })
  }

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={viewState.center ?? DEFAULT_MAP_CENTER}
        zoom={viewState.zoom ?? DEFAULT_MAP_ZOOM}
        minZoom={MIN_MAP_ZOOM}
        maxZoom={MAX_MAP_ZOOM}
        zoomControl={true}
        attributionControl={false}
        preferCanvas={true}
        style={{ height: '100%', width: '100%', background: '#07171c' }}
        ref={mapRef}
      >
        {showPaleotopography && paleotopographyAvailable && paleotopographyCollection && paleotopographyFrame && (
          <PaleotopographyLayer
            key={paleotopographyFrame.id}
            collection={paleotopographyCollection}
            frame={paleotopographyFrame}
            onStatus={handlePaleotopographyStatus}
          />
        )}
        {showStaticPolygons && landLayerAvailable && layers?.staticPolygons && (
          <GeoJSON
            key={mapSelections.staticPolygons?.frame.url ?? 'static-polygons'}
            data={layers.staticPolygons}
            style={(feature) => {
              const pid = Number(feature?.properties?.pid ?? 0)
              const palette = ['#645e76', '#536f78', '#6e6550', '#526d60']
              return { color: palette[Math.abs(pid) % palette.length], weight: .55, opacity: .38, fillColor: palette[Math.abs(pid) % palette.length], fillOpacity: .035, dashArray: '2 5' }
            }}
            onEachFeature={(feature, layer) => {
              const label = [t('Static reconstruction partition'), feature.properties?.name, feature.properties?.pid ? `${t('Plate')} ${feature.properties.pid}` : null].filter(Boolean).join(' · ')
              layer.bindTooltip(label, { sticky: true })
            }}
          />
        )}
        {showPlatePolygons && landLayerAvailable && layers?.platePolygons && (
          <GeoJSON
            key={mapSelections.platePolygons?.frame.url ?? 'plate-polygons'}
            data={layers.platePolygons}
            style={(feature) => {
              const pid = Number(feature?.properties?.pid ?? 0)
              const palette = ['#516d7c', '#59657d', '#536f69', '#6d6256', '#5d6670']
              return {
                color: palette[Math.abs(pid) % palette.length],
                weight: 0.8,
                opacity: 0.65,
                fillColor: palette[Math.abs(pid) % palette.length],
                fillOpacity: 0.08,
              }
            }}
            onEachFeature={(feature, layer) => {
              const label = [feature.properties?.name, feature.properties?.pid ? `${t('Plate')} ${feature.properties.pid}` : null].filter(Boolean).join(' · ')
              if (label) layer.bindTooltip(label, { sticky: true })
            }}
          />
        )}
        {showContinents && landLayerAvailable && layers?.coastlines && (
          <GeoJSON
            key={mapSelections.coastlines?.frame.url ?? 'coastlines'}
            data={layers.coastlines}
            style={() => ({
              color: '#5a957d',
              weight: 1.5,
              fillColor: '#24463c',
              fillOpacity: 0.7,
            })}
          />
        )}
        {showContinentalCrust && landLayerAvailable && layers?.continentalPolygons && (
          <GeoJSON
            key={mapSelections.continentalPolygons?.frame.url ?? 'continental-crust'}
            data={layers.continentalPolygons}
            style={() => ({ color: '#b8a270', weight: .8, opacity: .58, fillColor: '#8b7548', fillOpacity: .12 })}
            onEachFeature={(feature, layer) => {
              const label = [t('Modelled continental crust'), feature.properties?.type ? t(feature.properties.type) : null, feature.properties?.name, feature.properties?.pid ? `${t('Plate')} ${feature.properties.pid}` : null].filter(Boolean).join(' · ')
              layer.bindTooltip(label, { sticky: true })
            }}
          />
        )}
        {showContinentOceanBoundaries && landLayerAvailable && layers?.continentOceanBoundaries && (
          <GeoJSON
            key={mapSelections.continentOceanBoundaries?.frame.url ?? 'continent-ocean-boundaries'}
            data={layers.continentOceanBoundaries}
            style={() => ({ color: '#74a9cf', weight: 1.3, opacity: .78, fillOpacity: 0, dashArray: '7 4' })}
            onEachFeature={(feature, layer) => {
              const label = [t('Continent–ocean transition boundary'), feature.properties?.type ? t(feature.properties.type) : null, feature.properties?.name, feature.properties?.pid ? `${t('Plate')} ${feature.properties.pid}` : null].filter(Boolean).join(' · ')
              layer.bindTooltip(label, { sticky: true })
            }}
          />
        )}
        {showPlateBoundaries && landLayerAvailable && layers?.plateBoundaries && (
          <GeoJSON
            key={mapSelections.plateBoundaries?.frame.url ?? 'plate-boundaries'}
            data={layers.plateBoundaries}
            style={(feature) => {
              const boundaryType = String(feature?.properties?.type ?? 'UnclassifiedFeature')
              const styles = {
                MidOceanRidge: { color: '#efb65a', weight: 1.5, dashArray: '5 3' },
                SubductionZone: { color: '#e27a73', weight: 1.8 },
                Transform: { color: '#79b9c6', weight: 1.35, dashArray: '2 3' },
                ContinentalRift: { color: '#c6a6d9', weight: 1.35, dashArray: '6 3' },
                TerraneBoundary: { color: '#b8aa86', weight: 1.1, dashArray: '1 3' },
              }
              return { ...(styles[boundaryType as keyof typeof styles] ?? { color: '#83969e', weight: 1, dashArray: '3 4' }), opacity: 0.9 }
            }}
            onEachFeature={(feature, layer) => {
              const boundaryType = String(feature.properties?.type ?? t('Unclassified boundary'))
              const polarity = feature.properties?.polarity ? t('GPlates polarity: {polarity}', { polarity: t(feature.properties.polarity) }) : null
              const label = [t(boundaryType), polarity, feature.properties?.name, feature.properties?.pid ? `${t('Plate')} ${feature.properties.pid}` : null].filter(Boolean).join(' · ')
              layer.bindTooltip(label, { sticky: true })
            }}
          />
        )}
        <CaoObservationLayers
          ageMa={currentAge}
          datasetIds={requestedObservationDatasets}
          collections={observationCollections}
          descriptors={observationDescriptors}
          onSelect={(record, descriptor) => setSelectedObservation({ record, descriptor })}
        />
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
          : t('No period-scoped fossil sample for this age')}
        {currentPeriod && recordsLoaded && (
          <div style={{ marginTop: 2, color: '#82938c', fontSize: 9 }}>
            {t('Paleo-coordinate coverage {coverage}%', { coverage: (paleoCoverage * 100).toFixed(0) })}
          </div>
        )}
        {primaryMapSelection && <div style={{ marginTop: 2, color: '#9eb8aa', fontSize: 9 }}>{t('CAO2024 nearest frame {selected} Ma · requested {requested} Ma · Δ {delta} Myr', { selected: number(primaryMapSelection.selectedAgeMa), requested: number(currentAge), delta: number(primaryMapSelection.deltaMa) })}</div>}
        {showPaleotopography && paleotopographyAvailable && paleotopographyFrame && <div style={{ marginTop: 2, color: '#d7c88b', fontSize: 9 }}>{t('PALEOMAP nearest archive frame {archive} Ma · internal description age {internal}', { archive: paleotopographyFrame.archiveNominalAgeMa, internal: paleotopographyFrame.internalDescriptionAgeMa === null ? t('not stated') : `${paleotopographyFrame.internalDescriptionAgeMa} Ma` })}</div>}
      </div>

      <TemporalPackageCards ageMa={currentAge} />

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
        <label title={landLayerError ?? undefined}>
          <input type="checkbox" checked={showContinents && landLayerAvailable} disabled={!landLayerAvailable || landLayerLoading} onChange={(event) => setShowContinents(event.target.checked)} /> {t('nearest coastline frame')}
        </label>
        <label>
          <input type="checkbox" checked={showPlatePolygons && landLayerAvailable} disabled={!landLayerAvailable || landLayerLoading} onChange={(event) => setShowPlatePolygons(event.target.checked)} /> {t('tectonic plate polygons')}
        </label>
        <label>
          <input type="checkbox" checked={showPlateBoundaries && landLayerAvailable} disabled={!landLayerAvailable || landLayerLoading} onChange={(event) => setShowPlateBoundaries(event.target.checked)} /> {t('typed plate boundaries')}
        </label>
        {showPlateBoundaries && <div className="tectonic-legend" aria-label={t('Tectonic boundary legend')}>
          <span><i className="ridge" />{t('ridge')}</span>
          <span><i className="subduction" />{t('subduction')}</span>
          <span><i className="transform" />{t('transform')}</span>
          <span><i className="other" />{t('other')}</span>
        </div>}
        <span>{t('Detailed CAO2024 layers')}</span>
        <label title={t('Modelled continental-crust extent; it is not exposed land, coastline, elevation or water depth.')}>
          <input type="checkbox" checked={showContinentalCrust} disabled={!landLayerAvailable || landLayerLoading || !mapManifest?.layers?.continentalPolygons?.frames.length} onChange={(event) => setShowContinentalCrust(event.target.checked)} /> {t('continental-crust extent')}
        </label>
        <label title={t('Continental–ocean crust transition boundaries; not coastlines or active plate boundaries.')}>
          <input type="checkbox" checked={showContinentOceanBoundaries} disabled={!landLayerAvailable || landLayerLoading || !mapManifest?.layers?.continentOceanBoundaries?.frames.length} onChange={(event) => setShowContinentOceanBoundaries(event.target.checked)} /> {t('continent–ocean boundaries')}
        </label>
        <label title={t('Rigid reconstruction partitions used for plate-ID assignment; not dynamic topological plate coverage.')}>
          <input type="checkbox" checked={showStaticPolygons} disabled={!landLayerAvailable || landLayerLoading || !mapManifest?.layers?.staticPolygons?.frames.length} onChange={(event) => setShowStaticPolygons(event.target.checked)} /> {t('static reconstruction partitions')}
        </label>
        <span>{t('Numeric palaeotopography and palaeobathymetry')}</span>
        <label title={t('Complete modelled PALEOMAP elevation/depth series at five-million-year nominal ages from 0 to 540 Ma.')}>
          <input
            type="checkbox"
            aria-label={t('PALEOMAP elevation and bathymetry')}
            checked={showPaleotopography && paleotopographyAvailable}
            disabled={!paleotopographyAvailable}
            onChange={(event) => setShowPaleotopography(event.target.checked)}
          /> {t('PALEOMAP elevation and bathymetry')}
        </label>
        {paleotopographyFrame && paleotopographyCollection && <small>{t('Nearest nominal frame {selected} Ma for requested {requested} Ma; no temporal interpolation. A worker loads only this independent {resolution}° integer-metre grid and colours visible Web Mercator canvas tiles.', { selected: paleotopographyFrame.archiveNominalAgeMa, requested: currentAge, resolution: paleotopographyCollection.delivery.resolutionDegrees })}</small>}
        {paleotopographyCollection?.delivery.profile === 'web-preview' && <small>{t('Web and browser-offline use a checksummed 0.5° exact-decimation preview. Android and iOS bundle every independent lossless 0.1° source grid.')}</small>}
        {paleotopographyFrame && <small>{t('Web Mercator display ends at ±85.051° latitude; the source and native grids retain both polar rows.')}</small>}
        {paleotopographyFrame && <small>{t('Internal NetCDF description: {description}', { description: paleotopographyFrame.internalDescription })}</small>}
        {showPaleotopography && paleotopographyStatus === 'loading' && <small role="status">{t('Loading one checksum-verified PALEOMAP grid…')}</small>}
        {showPaleotopography && paleotopographyStatus === 'error' && <small role="alert" title={paleotopographyError ?? undefined}>{t('The selected PALEOMAP grid is unavailable; other verified layers remain visible.')}</small>}
        {showPaleotopography && paleotopographyAvailable && <small>{t('PALEOMAP terrain is independent of CAO2024 geometry, CAO2024 observations and PBDB palaeocoordinates; overlay does not establish co-registration.')}</small>}
        <span>{t('CAO2024 observations and constraints')}</span>
        {CAO_OBSERVATION_DATASET_IDS.map((datasetId) => {
          const descriptor = mapManifest?.observations?.datasets[datasetId]
          const visibleCount = observationGroups.find((group) => group.datasetId === datasetId)?.visible.length
          return <label key={datasetId} title={descriptor ? t('Source observations filtered by their original age interval; reconstructed positions use the midpoint shared with the 0–1,800 Ma model range.') : undefined}>
            <input
              type="checkbox"
              checked={enabledObservationDatasets.has(datasetId)}
              disabled={!descriptor}
              onChange={(event) => toggleObservationDataset(datasetId, event.target.checked)}
            />
            <span>{descriptor ? t(descriptor.title) : t(datasetId)}{visibleCount === undefined ? '' : ` · ${number(visibleCount)}`}</span>
          </label>
        })}
        {requestedObservationDatasets.length > 0 && <small>{t('Observation points are source data or model constraints, not geometry, terrain, elevation or bathymetry. Raw source positions never replace missing reconstructed positions.')}</small>}
        {anyObservationLoading && <small role="status">{t('Loading checksum-verified CAO2024 observations…')}</small>}
        {requestedObservationDatasets.flatMap((datasetId) => observationErrors[datasetId] ? [<small role="alert" title={observationErrors[datasetId]} key={datasetId}>{t('{dataset} observations are unavailable.', { dataset: t(mapManifest?.observations?.datasets[datasetId]?.title ?? datasetId) })}</small>] : [])}
        {visibleObservationRecords.length > 0 && <button type="button" className="observation-export" onClick={exportVisibleObservations}>{t('Export visible observations GeoJSON')}</button>}
        <label title={t('Connects time-binned sample centroids; it is not a biological dispersal route.')}>
          <input type="checkbox" checked={showTrajectory && trajectory.length > 1} disabled={trajectory.length < 2} onChange={(event) => setShowTrajectory(event.target.checked)} /> {t('sample centroid trajectory')}
        </label>
        {selectedNodeId && <small>{trajectory.length > 1 ? t('{count} time bins · latitude change {shift}°', { count: trajectory.length, shift: `${latitudinalShift! >= 0 ? '+' : ''}${latitudinalShift!.toFixed(1)}` }) : t('The selected taxon has insufficient positioned records for a trajectory.')}</small>}
        {anyLayerLoading && <small role="status">{t('Loading checksum-verified paleogeography layers…')}</small>}
        {landLayerError && <small role="alert">{t('Paleogeography layers unavailable; occurrence coordinates remain available.')}</small>}
        {visibleLayerErrors.map(([layerId, message]) => <small role="alert" title={message} key={layerId}>{t('{layer} is unavailable; other verified layers remain visible.', { layer: t(layerId) })}</small>)}
        {primaryMapSelection && <small>{t('Nearest published CAO2024 frame; no interpolation. Each layer may use a different cadence and reports its own selected age.')}</small>}
        {primaryMapSelection && <small>{t('Tectonic polygons and boundaries do not encode elevation, bathymetry or terrain relief.')}</small>}
        {mapManifest && <small>{t('Land and occurrence paleocoordinates may use different models and are not spatially co-registered.')}</small>}
        <small>{t(coordinateMode === 'paleo' ? 'Only records with paired reconstructed coordinates are shown; no modern fallback.' : 'Only paired modern collection coordinates are shown; not aligned to reconstructed land.')}</small>
        <dl className="map-model-ledger">
          <div><dt>{t('Requested age')}</dt><dd>{number(currentAge)} Ma</dd></div>
          {requestedPaleogeographyLayers.map((layerId) => <div key={layerId}><dt>{t(layerId)}</dt><dd>{mapSelections[layerId] ? `${number(mapSelections[layerId]!.selectedAgeMa)} Ma · Δ ${number(mapSelections[layerId]!.deltaMa)} Myr` : t('unavailable')}</dd></div>)}
          <div><dt>{t('Paleo points')}</dt><dd>{t('PBDB bundled field')}</dd></div>
          <div><dt>{t('Runtime')}</dt><dd>{t('no live reconstruction')}</dd></div>
          {mapManifest && <div><dt>{t('Source')}</dt><dd><a href={mapManifest.source.url} target="_blank" rel="noreferrer">Cao et al. 2024 · {mapManifest.source.license}</a></dd></div>}
          {paleotopographyFrame && <div><dt>{t('Terrain source')}</dt><dd><a href={mapManifest?.paleotopography?.source.recordUrl} target="_blank" rel="noreferrer">Scotese &amp; Wright 2018 · {mapManifest?.paleotopography?.source.license}</a></dd></div>}
        </dl>
      </div>

      {selectedObservation && <section className="cao-observation-detail" aria-live="polite" aria-label={t('CAO2024 observation details')}>
        <header>
          <div><small>{t(selectedObservation.descriptor.role)}</small><h3>{selectedObservation.record.name ?? selectedObservation.record.sourceFeatureId}</h3></div>
          <button type="button" aria-label={t('Close observation details')} onClick={() => setSelectedObservation(null)}>×</button>
        </header>
        <p>{t(selectedObservation.descriptor.title)}</p>
        <dl>
          <div><dt>{t('Source feature ID')}</dt><dd><code>{selectedObservation.record.sourceFeatureId}</code></dd></div>
          <div><dt>{t('Source feature type')}</dt><dd>{selectedObservation.record.sourceFeatureType}</dd></div>
          <div><dt>{t('Source file')}</dt><dd><code>{selectedObservation.descriptor.sourceFile}</code></dd></div>
          <div><dt>{t('Upstream reference field')}</dt><dd>{selectedObservation.record.referenceId ?? t('not supplied by this source feature')}</dd></div>
          <div><dt>{t('Source revision ID')}</dt><dd><code>{selectedObservation.record.sourceRevisionId}</code></dd></div>
          <div><dt>{t('Source age interval')}</dt><dd>{selectedObservation.record.age.rawFromLexeme}–{selectedObservation.record.age.rawToLexeme} Ma</dd></div>
          <div><dt>{t('Plate ID')}</dt><dd>{selectedObservation.record.plateId ?? t('not supplied')}</dd></div>
          <div><dt>{t('Source positions [longitude, latitude]')}</dt><dd>{t(formatObservationPositions(selectedObservation.record.sourcePositions))}</dd></div>
          <div><dt>{t('Reconstructed positions [longitude, latitude]')}</dt><dd>{t(formatObservationPositions(selectedObservation.record.reconstructedPositions))}</dd></div>
          <div><dt>{t('Reconstruction status')}</dt><dd>{t(selectedObservation.record.reconstructionStatus)}</dd></div>
          <div><dt>{t('Reconstruction age')}</dt><dd>{selectedObservation.record.age.reconstructionAgeMa === null ? t('unavailable') : `${selectedObservation.record.age.reconstructionAgeMa} Ma · ${t(selectedObservation.record.age.reconstructionAgeMethod ?? 'unavailable')}`}</dd></div>
          <div><dt>{t('Sample ID')}</dt><dd>{selectedObservation.record.sampleId ?? t('not supplied')}</dd></div>
          <div><dt>{t('Pole A95')}</dt><dd>{selectedObservation.record.poleA95Lexeme ?? t('not supplied')}</dd></div>
          <div><dt>{t('Source flags')}</dt><dd>{selectedObservation.record.sourceFlags.length ? selectedObservation.record.sourceFlags.map((flag) => t(flag)).join(', ') : t('none')}</dd></div>
        </dl>
        <p>{t('The map filters the untouched source-age interval. The plotted point was reconstructed at its disclosed representative age, which may differ from the current map frame.')}</p>
        <table>
          <caption>{t('Raw upstream fields')}</caption>
          <thead><tr><th>{t('Field')}</th><th>{t('Value type')}</th><th>{t('Exact source lexeme')}</th></tr></thead>
          <tbody>{selectedObservation.record.sourceAttributes.map(([key, valueType, lexeme], index) => <tr key={`${key}:${index}`}><th>{key}</th><td>{valueType}</td><td>{t(rawValue(lexeme))}</td></tr>)}</tbody>
        </table>
        <div className="cao-observation-detail__links">
          <a href={mapManifest?.source.url} target="_blank" rel="noreferrer">{t('Open pinned source record')}</a>
          {selectedObservation.descriptor.files.map((file, index) => <a key={file.url} href={runtimeDataUrl(file.url)} download>{t('Dataset shard {index}', { index: index + 1 })}</a>)}
        </div>
      </section>}

      <details className="map-data-alternative">
        <summary>{t('Text and table alternative')}</summary>
        <div>
          {primaryMapSelection && layers && <>
            <h3>{t('Paleogeography model summary')}</h3>
            <p>{t('{model} request: {age} Ma. Nearest per-layer frame ages are listed above. Feature counts: {coastlines} coastlines, {plates} topological plate polygons, {boundaries} typed plate boundaries, {continents} continental-crust polygons, {cobs} continent–ocean boundaries and {staticPolygons} static partitions.', {
              model: 'CAO2024',
              age: settledAgeMa === null ? t('unavailable') : number(settledAgeMa),
              coastlines: layers.coastlines ? number(layers.coastlines.features.length) : t('unavailable'),
              plates: layers.platePolygons ? number(layers.platePolygons.features.length) : t('unavailable'),
              boundaries: layers.plateBoundaries ? number(layers.plateBoundaries.features.length) : t('unavailable'),
              continents: layers.continentalPolygons ? number(layers.continentalPolygons.features.length) : t('not loaded'),
              cobs: layers.continentOceanBoundaries ? number(layers.continentOceanBoundaries.features.length) : t('not loaded'),
              staticPolygons: layers.staticPolygons ? number(layers.staticPolygons.features.length) : t('not loaded'),
            })}</p>
            <p>{t('Continental-crust polygons are modelled crustal extent, not exposed land, coastline or terrain. COB lines are crust-transition interpretations, not coastlines or active plate boundaries. Static partitions are rigid technical plate-ID regions, not dynamic topological coverage.')}</p>
            <table>
              <caption>{t('Boundary type counts')}</caption>
              <thead><tr><th>{t('Boundary type')}</th><th>{t('Features')}</th></tr></thead>
              <tbody>{boundaryTypeCounts.map(([type, count]) => <tr key={type}><td>{t(type)}</td><td>{number(count)}</td></tr>)}</tbody>
            </table>
            {layers.continentOceanBoundaries && <table>
              <caption>{t('Continent–ocean boundary type counts')}</caption>
              <thead><tr><th>{t('Boundary type')}</th><th>{t('Features')}</th></tr></thead>
              <tbody>{cobTypeCounts.map(([type, count]) => <tr key={type}><td>{t(type)}</td><td>{number(count)}</td></tr>)}</tbody>
            </table>}
          </>}
          {requestedObservationDatasets.length > 0 && <>
            <h3>{t('CAO2024 observation and constraint summary')}</h3>
            <p>{t('{visible} reconstructed observations intersect {age} Ma across the enabled datasets. All {total} source records, including {rawOnly} raw-only records outside the supported reconstruction range, remain in the fixed dataset shards.', {
              visible: number(visibleObservationRecords.length),
              age: number(currentAge),
              total: number(observationGroups.reduce((sum, group) => sum + group.descriptor.records, 0)),
              rawOnly: number(observationGroups.reduce((sum, group) => sum + group.descriptor.rawOnlyRecords, 0)),
            })}</p>
            <p>{t('These points are observations or model constraints. They are not paleoelevation, bathymetry, terrain, coastlines or direct measurements of an entire ancient surface.')}</p>
            <table>
              <caption>{t('Active observation records')}</caption>
              <thead><tr><th>{t('Dataset')}</th><th>{t('Source age interval')}</th><th>{t('Reference')}</th><th>{t('Details')}</th></tr></thead>
              <tbody>{visibleObservationRecords.slice(0, 100).map(({ record, descriptor }) => <tr key={`${record.observationKind}:${record.sourceFeatureId}`}>
                <td>{t(descriptor.title)}</td><td>{record.age.rawFromLexeme}–{record.age.rawToLexeme} Ma</td><td>{record.referenceId ?? t('not supplied')}</td>
                <td><button type="button" onClick={() => setSelectedObservation({ record, descriptor })}>{t('View raw fields')}</button></td>
              </tr>)}</tbody>
            </table>
          </>}
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
