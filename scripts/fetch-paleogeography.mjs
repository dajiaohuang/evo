import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { unzipSync } from 'fflate'
import { geoClipAntimeridian, geoStream, geoTransform } from 'd3'
import { readJson, rootDir } from './data-lib.mjs'
import { decodeShapefileArchive, polygonGeometry } from './shapefile-reader.mjs'

const MODEL = 'CAO2024'
const MODEL_VERSION = 'v2.4'
const MODEL_DOI = '10.5281/zenodo.13628813'
const MODEL_RECORD_URL = 'https://zenodo.org/records/13628813'
const MODEL_ARCHIVE_URL = 'https://zenodo.org/api/records/13628813/files/1.8Ga_model_GSF.zip/content'
const MODEL_LICENSE = 'https://creativecommons.org/licenses/by/4.0/'
const MODEL_SHOW_URL = 'https://gws.gplates.org/model/show/?model=CAO2024'
const RECONSTRUCT_FILES_ENDPOINT = 'https://gws.gplates.org/reconstruct/reconstruct_files'
const MAX_RECONSTRUCTION_AGE_MA = 1800
const SERVICE_ALIAS_VERSION = '2024-10-18'
const SOURCE_ASSETS = {
  continentalPolygons: {
    archiveFile: 'ContinentalPolygons.zip',
    archiveUrl: 'https://repo.gplates.org/webdav/pmm/cao2024/ContinentalPolygons.zip',
    payloadFile: 'shapes_continents.gpmlz',
    payloadSha256: '6e30de73967f81a403f46370295dec5c0d7ed3ffd80c73d47df926461d949616',
  },
  continentOceanBoundaries: {
    archiveFile: 'COBs.zip',
    archiveUrl: 'https://repo.gplates.org/webdav/pmm/cao2024/COBs.zip',
    payloadFile: 'COBfile_1800_0.gpml',
    payloadSha256: 'cfcea20c5244613e53ad4b9cdf6411d79ff535c25af335b4fa6eb9251377d4bd',
  },
  staticPolygons: {
    archiveFile: 'StaticPolygons.zip',
    archiveUrl: 'https://repo.gplates.org/webdav/pmm/cao2024/StaticPolygons.zip',
    payloadFile: 'static_polygons.gpmlz',
    payloadSha256: '9b30d231157f99f9a7942d073efcb85649b0a6e10e49332637df2386f1b1350f',
  },
}
const LAYERS = [
  {
    id: 'coastlines',
    suffix: '',
    endpoint: 'https://gws.gplates.org/reconstruct/coastlines/',
    documentation: 'https://gwsdoc.gplates.org/reconstruction/reconstruct-coastlines/',
    geometryTypes: new Set(['Polygon', 'MultiPolygon']),
  },
  {
    id: 'platePolygons',
    suffix: '-plates',
    endpoint: 'https://gws.gplates.org/topology/plate_polygons',
    documentation: 'https://gwsdoc.gplates.org/topology/topological-plate-polygons/',
    geometryTypes: new Set(['Polygon', 'MultiPolygon']),
  },
  {
    id: 'plateBoundaries',
    suffix: '-boundaries',
    endpoint: 'https://gws.gplates.org/topology/plate_boundaries',
    documentation: 'https://gwsdoc.gplates.org/topology/topological-plate-boundaries/',
    geometryTypes: new Set(['LineString', 'MultiLineString']),
  },
  {
    id: 'continentalPolygons',
    suffix: '-continents',
    endpoint: RECONSTRUCT_FILES_ENDPOINT,
    documentation: 'https://gwsdoc.gplates.org/reconstruction/reconstruct-file/',
    geometryTypes: new Set(['Polygon', 'MultiPolygon']),
    sourceAsset: 'continentalPolygons',
    role: 'continental-extent',
  },
  {
    id: 'continentOceanBoundaries',
    suffix: '-cobs',
    endpoint: RECONSTRUCT_FILES_ENDPOINT,
    documentation: 'https://gwsdoc.gplates.org/reconstruction/reconstruct-file/',
    geometryTypes: new Set(['LineString', 'MultiLineString']),
    sourceAsset: 'continentOceanBoundaries',
    role: 'continent-ocean-boundary',
  },
  {
    id: 'staticPolygons',
    suffix: '-static-polygons',
    endpoint: 'https://gws.gplates.org/reconstruct/static_polygons/',
    documentation: 'https://gwsdoc.gplates.org/reconstruction/reconstruct-static-polygons/',
    geometryTypes: new Set(['Polygon', 'MultiPolygon']),
    sourceAsset: 'staticPolygons',
    role: 'rigid-plate-partition',
  },
]
const OUTPUT_DIRECTORY = resolve(rootDir, 'data/paleogeography')

function argument(name, fallback = null) {
  const index = process.argv.indexOf(`--${name}`)
  return index >= 0 ? process.argv[index + 1] : fallback
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

async function fetchBytes(url, label, options = {}) {
  let lastError = null
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(45_000),
        headers: {
          accept: '*/*',
          'user-agent': 'EvoAtlasDataPipeline/2026.08 (pinned CAO2024 v2.4 source snapshots)',
          ...options.headers,
        },
      })
      if (!response.ok) {
        const error = new Error(`${label}: download failed (${response.status} ${response.statusText})`)
        if (response.status < 500 || attempt === 3) throw error
        lastError = error
      } else {
        return Buffer.from(await response.arrayBuffer())
      }
    } catch (error) {
      lastError = error
      if (attempt === 3) break
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500 * attempt))
  }
  throw new Error(`${label}: request failed after 3 attempts`, { cause: lastError })
}

function cachedArchivePath(cacheDirectory, asset) {
  return cacheDirectory ? resolve(cacheDirectory, asset.archiveFile) : null
}

async function loadSourceAsset(assetId, cacheDirectory) {
  const asset = SOURCE_ASSETS[assetId]
  const cachePath = cachedArchivePath(cacheDirectory, asset)
  const archiveBytes = cachePath && existsSync(cachePath)
    ? readFileSync(cachePath)
    : await fetchBytes(asset.archiveUrl, `${assetId} source archive`)
  const archiveSha256 = sha256(archiveBytes)
  const entries = unzipSync(archiveBytes)
  const payloadEntry = Object.entries(entries).find(([name]) => name === asset.payloadFile || name.endsWith(`/${asset.payloadFile}`))
  if (!payloadEntry) throw new Error(`${assetId}: ${asset.payloadFile} is missing from the official layer archive`)
  const [payloadPath, payloadBytes] = payloadEntry
  const payloadDigest = sha256(payloadBytes)
  if (payloadDigest !== asset.payloadSha256) {
    throw new Error(`${assetId}: payload SHA-256 ${payloadDigest} does not match pinned CAO2024 v2.4 ${asset.payloadSha256}`)
  }
  return {
    assetId,
    archiveUrl: asset.archiveUrl,
    archiveBytes: archiveBytes.byteLength,
    archiveSha256,
    payloadFile: asset.payloadFile,
    payloadPath,
    payloadBytes: Buffer.from(payloadBytes),
    payloadLength: payloadBytes.byteLength,
    payloadSha256: payloadDigest,
    retrievalTransport: cachePath && existsSync(cachePath) ? 'verified-local-cache' : 'official-webdav',
  }
}

function sourceAssetProvenance(asset) {
  return {
    archiveUrl: asset.archiveUrl,
    archiveBytes: asset.archiveBytes,
    archiveSha256: asset.archiveSha256,
    payloadFile: asset.payloadFile,
    payloadBytes: asset.payloadLength,
    payloadSha256: asset.payloadSha256,
  }
}

function slug(value) {
  return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/(^-|-$)/g, '')
}

function rounded(value) {
  return Number(value.toFixed(4))
}

function samePosition(left, right) {
  return left[0] === right[0] && left[1] === right[1]
}

function signedRingArea(ring) {
  let area = 0
  for (let index = 0; index < ring.length; index += 1) {
    const current = ring[index]
    const next = ring[(index + 1) % ring.length]
    area += current[0] * next[1] - next[0] * current[1]
  }
  return area / 2
}

function orientedRing(ring, positiveArea) {
  return (signedRingArea(ring) > 0) === positiveArea ? ring : [...ring].reverse()
}

function hasDatelineJump(coordinates) {
  if (!Array.isArray(coordinates)) return false
  if (coordinates.length > 1 && Array.isArray(coordinates[0]) && typeof coordinates[0][0] === 'number') {
    return coordinates.some((position, index) => index > 0 && Math.abs(position[0] - coordinates[index - 1][0]) > 180)
  }
  return coordinates.some(hasDatelineJump)
}

function clippedLines(geometry) {
  const lines = []
  let line = null
  const degrees = 180 / Math.PI
  const sink = {
    point(longitude, latitude) { line.push([longitude * degrees, latitude * degrees]) },
    lineStart() { line = [] },
    lineEnd() { if (line.length) lines.push(line); line = null },
    polygonStart() {},
    polygonEnd() {},
  }
  const radians = geoTransform({
    point(longitude, latitude) { this.stream.point(longitude / degrees, latitude / degrees) },
  })
  geoStream(geometry, radians.stream(geoClipAntimeridian(sink)))
  return lines
}

function splitPolygonAtDateline(coordinates) {
  const oriented = coordinates.map((ring, index) => orientedRing(ring, index === 0))
  const rings = clippedLines({ type: 'Polygon', coordinates: oriented }).map(normalizeRing).filter(Boolean)
  return polygonGeometry(rings)
}

function splitGeometryAtDateline(geometry) {
  if (!geometry || !hasDatelineJump(geometry.coordinates)) return geometry
  if (geometry.type === 'LineString' || geometry.type === 'MultiLineString') {
    const lines = clippedLines(geometry).map(normalizeLine).filter(Boolean)
    if (!lines.length) return null
    return lines.length === 1 ? { type: 'LineString', coordinates: lines[0] } : { type: 'MultiLineString', coordinates: lines }
  }
  if (geometry.type === 'Polygon') return splitPolygonAtDateline(geometry.coordinates)
  if (geometry.type === 'MultiPolygon') {
    const polygons = geometry.coordinates.flatMap((polygon) => {
      const split = splitPolygonAtDateline(polygon)
      return split?.type === 'Polygon' ? [split.coordinates] : split?.coordinates ?? []
    })
    if (!polygons.length) return null
    return polygons.length === 1 ? { type: 'Polygon', coordinates: polygons[0] } : { type: 'MultiPolygon', coordinates: polygons }
  }
  return geometry
}

function normalizeRing(ring) {
  const cleaned = []
  for (const position of ring) {
    if (!Array.isArray(position) || position.length < 2 || !Number.isFinite(position[0]) || !Number.isFinite(position[1])) continue
    const next = [rounded(position[0]), rounded(position[1])]
    if (!cleaned.length || !samePosition(cleaned.at(-1), next)) cleaned.push(next)
  }
  if (cleaned.length > 1 && samePosition(cleaned[0], cleaned.at(-1))) cleaned.pop()
  if (new Set(cleaned.map((position) => position.join(','))).size < 3) return null
  cleaned.push([...cleaned[0]])
  return cleaned
}

function normalizePolygon(polygon) {
  const rings = polygon.map(normalizeRing).filter(Boolean)
  return rings.length ? rings : null
}

function normalizeLine(line) {
  const cleaned = []
  for (const position of line) {
    if (!Array.isArray(position) || position.length < 2 || !Number.isFinite(position[0]) || !Number.isFinite(position[1])) continue
    const next = [rounded(position[0]), rounded(position[1])]
    if (!cleaned.length || !samePosition(cleaned.at(-1), next)) cleaned.push(next)
  }
  return cleaned.length > 1 ? cleaned : null
}

function normalizeGeometry(geometry, allowedTypes) {
  if (!allowedTypes.has(geometry?.type)) return null
  if (geometry?.type === 'Polygon') {
    const coordinates = normalizePolygon(geometry.coordinates ?? [])
    return coordinates ? { type: 'Polygon', coordinates } : null
  }
  if (geometry?.type === 'MultiPolygon') {
    const coordinates = (geometry.coordinates ?? []).map(normalizePolygon).filter(Boolean)
    return coordinates.length ? { type: 'MultiPolygon', coordinates } : null
  }
  if (geometry?.type === 'LineString') {
    const coordinates = normalizeLine(geometry.coordinates ?? [])
    return coordinates ? { type: 'LineString', coordinates } : null
  }
  if (geometry?.type === 'MultiLineString') {
    const coordinates = (geometry.coordinates ?? []).map(normalizeLine).filter(Boolean)
    return coordinates.length ? { type: 'MultiLineString', coordinates } : null
  }
  return null
}

function firstValue(properties, keys) {
  for (const key of keys) {
    if (typeof properties?.[key] === 'string' || Number.isFinite(properties?.[key])) return properties[key]
  }
  return null
}

function normalizedProperties(properties, layer) {
  const output = { layer: layer.id }
  const type = firstValue(properties, ['type', 'GPGIM_TYPE'])
  const name = firstValue(properties, ['name', 'NAME'])
  const pid = firstValue(properties, ['pid', 'PLATEID1', 'reconstructionPlateId'])
  const polarity = firstValue(properties, ['polarity'])
  const featureId = firstValue(properties, ['featureId', 'FEATURE_ID'])
  const originalFeatureType = firstValue(properties, ['sourceFeatureType'])
  if (type !== null) output.type = type
  if (name !== null && String(name).trim()) output.name = String(name).trim()
  if (pid !== null) output.pid = pid
  if (polarity !== null) output.polarity = polarity
  if (featureId !== null && String(featureId).trim()) output.sourceFeatureId = String(featureId).trim()
  if (originalFeatureType !== null) output.sourceFeatureType = originalFeatureType
  if (layer.role) output.role = layer.role
  if (layer.id === 'staticPolygons') output.topologyBehavior = 'rigid-shape-partition'
  return output
}

function normalizeFeatureCollection(source, period, reconstructionAgeMa, layer) {
  if (source?.type !== 'FeatureCollection' || !Array.isArray(source.features)) {
    throw new Error(`${period}/${layer.id}: GPlates response is not a GeoJSON FeatureCollection`)
  }
  const unique = new Map()
  let usableFeatureCount = 0
  let datelineSplitFeatures = 0
  for (const feature of source.features) {
    const shouldSplitDateline = Boolean(layer.role) && hasDatelineJump(feature.geometry?.coordinates)
    const sourceGeometry = shouldSplitDateline ? splitGeometryAtDateline(feature.geometry) : feature.geometry
    const geometry = normalizeGeometry(sourceGeometry, layer.geometryTypes)
    if (!geometry) continue
    if (shouldSplitDateline) datelineSplitFeatures += 1
    usableFeatureCount += 1
    const properties = normalizedProperties(feature.properties, layer)
    const key = JSON.stringify({ properties, geometry })
    unique.set(key, { properties, geometry })
  }
  const features = [...unique.values()].sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)))
  return {
    collection: {
      type: 'FeatureCollection',
      features: features.map(({ properties, geometry }, index) => ({
        type: 'Feature',
        properties: {
          id: `${slug(period)}-${slug(layer.id)}-${String(index + 1).padStart(4, '0')}`,
          period,
          reconstructionAgeMa,
          model: MODEL,
          ...properties,
        },
        geometry,
      })),
    },
    sourceFeatures: source.features.length,
    invalidGeometryFeatures: source.features.length - usableFeatureCount,
    duplicateFeaturesRemoved: usableFeatureCount - features.length,
    datelineSplitFeatures,
  }
}

function postprocessExistingCollection(source, period, reconstructionAgeMa, layer) {
  if (source?.type !== 'FeatureCollection' || !Array.isArray(source.features)) {
    throw new Error(`${period}/${layer.id}: existing geometry is not a GeoJSON FeatureCollection`)
  }
  let datelineSplitFeatures = 0
  const features = source.features.map((feature) => {
    const shouldSplitDateline = hasDatelineJump(feature.geometry?.coordinates)
    const sourceGeometry = shouldSplitDateline ? splitGeometryAtDateline(feature.geometry) : feature.geometry
    const geometry = normalizeGeometry(sourceGeometry, layer.geometryTypes)
    if (!geometry) throw new Error(`${period}/${layer.id}: checked-in feature ${feature.properties?.id ?? 'unknown'} became invalid during deterministic post-processing`)
    if (shouldSplitDateline) datelineSplitFeatures += 1
    return { ...feature, geometry }
  })
  return {
    collection: { type: 'FeatureCollection', features },
    sourceFeatures: source.features.length,
    invalidGeometryFeatures: 0,
    duplicateFeaturesRemoved: 0,
    datelineSplitFeatures,
  }
}

function polygonOutlines(geometry) {
  const lines = geometry?.type === 'Polygon'
    ? geometry.coordinates
    : geometry?.type === 'MultiPolygon'
      ? geometry.coordinates.flat()
      : []
  if (!lines.length) return null
  return lines.length === 1 ? { type: 'LineString', coordinates: lines[0] } : { type: 'MultiLineString', coordinates: lines }
}

function sourceFeatureType(feature) {
  const value = firstValue(feature.properties, ['GPGIM_TYPE', 'type'])
  return typeof value === 'string' && value ? value : 'unknown'
}

function sourceFeatureName(feature) {
  const value = firstValue(feature.properties, ['NAME', 'name'])
  return typeof value === 'string' ? value.trim() : ''
}

function explicitAlternativeCobName(name) {
  return /(?<![A-Za-z])a?COB(?![A-Za-z])/i.test(name)
}

function incrementTypeCount(counts, type, key) {
  const record = counts.get(type) ?? { source: 0, included: 0, excludedByPolicy: 0, excludedInvalidGeometry: 0 }
  record[key] += 1
  counts.set(type, record)
}

function prepareUploadedFeatures(source, layer) {
  const typeCounts = new Map()
  const features = []
  for (const feature of source.features) {
    const featureType = sourceFeatureType(feature)
    const featureName = sourceFeatureName(feature)
    incrementTypeCount(typeCounts, featureType, 'source')
    const isFormalCob = featureType === 'gpml:ClosedContinentalBoundary' || featureType === 'gpml:PassiveContinentalBoundary'
    const isNamedAlternative = featureType === 'gpml:UnclassifiedFeature' && explicitAlternativeCobName(featureName)
    if (layer.id === 'continentOceanBoundaries' && !isFormalCob && !isNamedAlternative) {
      incrementTypeCount(typeCounts, featureType, 'excludedByPolicy')
      continue
    }
    const geometry = layer.id === 'continentOceanBoundaries' ? polygonOutlines(feature.geometry) : feature.geometry
    if (!geometry) {
      incrementTypeCount(typeCounts, featureType, 'excludedInvalidGeometry')
      continue
    }
    incrementTypeCount(typeCounts, featureType, 'included')
    features.push({
      type: 'Feature',
      properties: {
        ...feature.properties,
        type: isNamedAlternative ? 'unclassified-alternative-cob' : featureType,
        sourceFeatureType: featureType,
      },
      geometry,
    })
  }
  return {
    collection: { type: 'FeatureCollection', features },
    featureTypeCounts: Object.fromEntries([...typeCounts].sort(([left], [right]) => left.localeCompare(right))),
    inclusionPolicy: layer.id === 'continentOceanBoundaries'
      ? 'Include gpml:ClosedContinentalBoundary and gpml:PassiveContinentalBoundary. Also include gpml:UnclassifiedFeature only when NAME contains the independent token COB or aCOB; normalize those exceptional records to unclassified-alternative-cob. Exclude every other feature type, including gpml:InferredPaleoBoundary, and publish polygon rings only as boundary outlines.'
      : 'Include every reconstructed polygon from the official ContinentalPolygons layer while preserving its source GPGIM feature type, name, plate ID and feature ID.',
  }
}

async function reconstructUploadedLayer(layer, asset, period, reconstructionAgeMa) {
  const form = new FormData()
  form.set('time', String(reconstructionAgeMa))
  form.set('model', MODEL)
  form.set('assign_plate_id', '0')
  form.set('basename', `${slug(period)}-${slug(layer.id)}`)
  form.set('file_1', new Blob([asset.payloadBytes], { type: 'application/octet-stream' }), asset.payloadFile)
  const sourceBytes = await fetchBytes(RECONSTRUCT_FILES_ENDPOINT, `${period}/${layer.id} reconstruction`, {
    method: 'POST',
    body: form,
    headers: { accept: 'application/x-zip-compressed, application/zip' },
  })
  return { sourceBytes, decoded: decodeShapefileArchive(sourceBytes) }
}

const replace = process.argv.includes('--replace')
const requestedPeriod = argument('period')
const requestedLayers = argument('layers')
const sourceCache = argument('source-cache')
const retrievedAt = argument('retrieved-at')
const scriptCommit = argument('script-commit')
const reuseRecordedModelShow = process.argv.includes('--reuse-recorded-model-show')
const postprocessExisting = process.argv.includes('--postprocess-existing')
if (!/^\d{4}-\d{2}-\d{2}$/.test(retrievedAt ?? '')) throw new Error('--retrieved-at YYYY-MM-DD is required')
if (!/^[0-9a-f]{7,40}$/.test(scriptCommit ?? '')) throw new Error('--script-commit must identify the committed processing script')

const selectedLayerIds = new Set(requestedLayers ? requestedLayers.split(',').map((value) => value.trim()).filter(Boolean) : LAYERS.map((layer) => layer.id))
const unknownLayers = [...selectedLayerIds].filter((layerId) => !LAYERS.some((layer) => layer.id === layerId))
if (unknownLayers.length) throw new Error(`Unknown layer(s): ${unknownLayers.join(', ')}`)
const selectedLayers = LAYERS.filter((layer) => selectedLayerIds.has(layer.id))
if (!selectedLayers.length) throw new Error('At least one layer must be selected')

const timeScale = readJson('data/time-scale.json')
const metadata = readJson('data/period-map-metadata.json')
const periodByName = new Map(timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => [unit.nam, unit]))
const selected = metadata.filter((entry) => !requestedPeriod || entry.name.toLowerCase() === requestedPeriod.toLowerCase())
if (!selected.length) throw new Error(`Unknown period: ${requestedPeriod}`)

mkdirSync(OUTPUT_DIRECTORY, { recursive: true })
const provenancePath = join(OUTPUT_DIRECTORY, 'provenance.json')
const prior = existsSync(provenancePath) ? JSON.parse(readFileSync(provenancePath, 'utf8')) : null
const priorSnapshotByPeriod = new Map((prior?.snapshots ?? []).map((snapshot) => [snapshot.period, snapshot]))
const neededSourceAssetIds = postprocessExisting ? [] : [...new Set(selectedLayers.map((layer) => layer.sourceAsset).filter(Boolean))]
const sourceAssets = { ...(prior?.sourceAssets ?? {}) }
const loadedSourceAssets = new Map()
for (const assetId of neededSourceAssetIds) {
  const loaded = await loadSourceAsset(assetId, sourceCache)
  loadedSourceAssets.set(assetId, loaded)
  sourceAssets[assetId] = sourceAssetProvenance(loaded)
  console.log(`${assetId}: verified ${loaded.payloadFile} (${loaded.payloadSha256})`)
}

let modelShow = prior?.service?.modelShow ?? null
if (neededSourceAssetIds.length) {
  let modelShowResponse
  let modelShowBytes
  if (reuseRecordedModelShow) {
    if (!modelShow?.response || sha256(modelShow.response) !== modelShow.responseSha256) {
      throw new Error('--reuse-recorded-model-show requires a checksum-valid descriptor response in existing provenance')
    }
    modelShowResponse = modelShow.response
    modelShowBytes = Buffer.from(modelShowResponse)
    console.log(`model/show: reused checksum-verified recorded response (${modelShow.responseSha256})`)
  } else {
    modelShowBytes = await fetchBytes(MODEL_SHOW_URL, 'CAO2024 model/show', { headers: { accept: 'application/json' } })
    modelShowResponse = modelShowBytes.toString('utf8')
  }
  const parsedModelShow = JSON.parse(modelShowResponse)
  if (parsedModelShow.Version !== SERVICE_ALIAS_VERSION) {
    throw new Error(`CAO2024 service alias version changed from ${SERVICE_ALIAS_VERSION} to ${parsedModelShow.Version}; review before importing`)
  }
  for (const assetId of neededSourceAssetIds) {
    if (parsedModelShow.Layers?.[assetId === 'continentOceanBoundaries' ? 'COBs' : assetId[0].toUpperCase() + assetId.slice(1)] !== SOURCE_ASSETS[assetId].archiveUrl) {
      throw new Error(`${assetId}: model/show layer URL differs from the pinned official WebDAV archive`)
    }
  }
  modelShow = {
    url: MODEL_SHOW_URL,
    response: modelShowResponse,
    responseBytes: modelShowBytes.byteLength,
    responseSha256: sha256(modelShowBytes),
    serviceAliasVersion: parsedModelShow.Version,
    reportedBigTime: parsedModelShow.BigTime,
    enforcedMaximumAgeMa: MAX_RECONSTRUCTION_AGE_MA,
    knownMetadataIssue: parsedModelShow.BigTime === 18000
      ? 'The service reports BigTime=18000, but the CAO2024 publication, model documentation and source filenames establish a 0-1800 Ma scope. This pipeline rejects midpoint ages above 1800 Ma.'
      : null,
    relationshipToRelease: 'The GPlates service alias is dated 2024-10-18 rather than semantically versioned v2.4. Its three pinned layer payloads are accepted only after matching the SHA-256 of the immutable Zenodo v2.4 files.',
  }
}

const snapshots = []
for (const entry of selected) {
  const period = periodByName.get(entry.name)
  if (!period) throw new Error(`${entry.name}: missing period in data/time-scale.json`)
  const reconstructionAgeMa = Number(((period.eag + period.lag) / 2).toFixed(3))
  if (reconstructionAgeMa > MAX_RECONSTRUCTION_AGE_MA) throw new Error(`${entry.name}: ${reconstructionAgeMa} Ma exceeds the documented CAO2024 limit`)
  const layerRecords = { ...(priorSnapshotByPeriod.get(entry.name)?.layers ?? {}) }
  for (const layer of selectedLayers) {
    let sourceUrl
    let sourceBytes
    let source
    let uploadDetails = null
    let preservedSourceRecord = null
    let normalized
    if (postprocessExisting) {
      preservedSourceRecord = layerRecords[layer.id]
      if (!preservedSourceRecord?.geometryFile || !preservedSourceRecord.geometrySha256) {
        throw new Error(`${entry.name}/${layer.id}: no checksum-addressed checked-in geometry is available for post-processing`)
      }
      const existingBytes = readFileSync(resolve(rootDir, preservedSourceRecord.geometryFile))
      if (existingBytes.byteLength !== preservedSourceRecord.geometryBytes || sha256(existingBytes) !== preservedSourceRecord.geometrySha256) {
        throw new Error(`${entry.name}/${layer.id}: checked-in geometry differs from its recorded provenance`)
      }
      source = JSON.parse(existingBytes.toString('utf8'))
      normalized = postprocessExistingCollection(source, entry.name, reconstructionAgeMa, layer)
    } else if (layer.sourceAsset && layer.id !== 'staticPolygons') {
      const asset = loadedSourceAssets.get(layer.sourceAsset)
      const reconstructed = await reconstructUploadedLayer(layer, asset, entry.name, reconstructionAgeMa)
      sourceUrl = RECONSTRUCT_FILES_ENDPOINT
      sourceBytes = reconstructed.sourceBytes
      const prepared = prepareUploadedFeatures(reconstructed.decoded, layer)
      source = prepared.collection
      uploadDetails = {
        sourceArchive: asset.archiveUrl,
        sourcePayloadFile: asset.payloadFile,
        sourcePayloadSha256: asset.payloadSha256,
        responseFormat: 'ESRI Shapefile ZIP decoded by scripts/shapefile-reader.mjs',
        request: { time: reconstructionAgeMa, model: MODEL, assignPlateId: 0 },
        inclusionPolicy: prepared.inclusionPolicy,
        sourceFeatureTypeCounts: prepared.featureTypeCounts,
      }
    } else {
      const parameters = new URLSearchParams({ time: String(reconstructionAgeMa), model: MODEL })
      if (layer.id === 'coastlines') {
        parameters.set('anchor_plate_id', '0')
        parameters.set('wrap', 'true')
      } else if (layer.id === 'staticPolygons') {
        parameters.set('anchor_plate_id', '0')
      }
      sourceUrl = `${layer.endpoint}?${parameters}`
      sourceBytes = await fetchBytes(sourceUrl, `${entry.name}/${layer.id}`, { headers: { accept: 'application/geo+json, application/json' } })
      source = JSON.parse(sourceBytes.toString('utf8'))
    }
    normalized ??= normalizeFeatureCollection(source, entry.name, reconstructionAgeMa, layer)
    if (!normalized.collection.features.length) throw new Error(`${entry.name}/${layer.id}: no usable features returned`)
    const outputBytes = Buffer.from(`${JSON.stringify(normalized.collection)}\n`)
    const outputPath = join(OUTPUT_DIRECTORY, `${slug(entry.name)}${layer.suffix}.json`)
    if (existsSync(outputPath) && !replace) throw new Error(`Refusing to overwrite ${outputPath}; pass --replace after reviewing the source change`)
    writeFileSync(outputPath, outputBytes)
    layerRecords[layer.id] = preservedSourceRecord ? {
      ...preservedSourceRecord,
      geometryFile: `data/paleogeography/${basename(outputPath)}`,
      geometryFeatures: normalized.collection.features.length,
      geometryBytes: outputBytes.byteLength,
      geometrySha256: sha256(outputBytes),
      normalization: {
        ...preservedSourceRecord.normalization,
        datelineSplitFeatures: normalized.datelineSplitFeatures || preservedSourceRecord.normalization?.datelineSplitFeatures || 0,
      },
    } : {
      sourceUrl,
      sourceBytes: sourceBytes.byteLength,
      sourceSha256: sha256(sourceBytes),
      geometryFile: `data/paleogeography/${basename(outputPath)}`,
      geometryFeatures: normalized.collection.features.length,
      geometryBytes: outputBytes.byteLength,
      geometrySha256: sha256(outputBytes),
      normalization: {
        sourceFeatures: normalized.sourceFeatures,
        invalidGeometryFeatures: normalized.invalidGeometryFeatures,
        duplicateFeaturesRemoved: normalized.duplicateFeaturesRemoved,
        datelineSplitFeatures: normalized.datelineSplitFeatures,
      },
      ...(layer.id === 'staticPolygons' ? {
        sourceArchive: loadedSourceAssets.get(layer.sourceAsset).archiveUrl,
        sourcePayloadFile: loadedSourceAssets.get(layer.sourceAsset).payloadFile,
        sourcePayloadSha256: loadedSourceAssets.get(layer.sourceAsset).payloadSha256,
        technicalLayer: 'Rigid-shape plate partition reconstructed by plate ID; suitable for plate assignment and technical masking, not a substitute for dynamically resolved topological plate polygons.',
      } : {}),
      ...(uploadDetails ?? {}),
    }
    console.log(`${entry.name}/${layer.id}: ${normalized.collection.features.length} unique features at ${reconstructionAgeMa} Ma`)
  }
  snapshots.push({
    period: entry.name,
    reconstructionAgeMa,
    model: MODEL,
    anchorPlateId: 0,
    layers: layerRecords,
  })
}

const selectedNames = new Set(snapshots.map((snapshot) => snapshot.period))
const retained = (prior?.snapshots ?? []).filter((snapshot) => !selectedNames.has(snapshot.period))
const provenance = {
  schemaVersion: 2,
  dataset: {
    title: "Earth's tectonic and plate boundary evolution over 1.8 billion years",
    authors: 'Cao, X.; Collins, A.S.; Pisarevsky, S.; Flament, N.; Li, S.; Hasterok, D.; Müller, R.D.',
    publishedYear: 2024,
    version: MODEL_VERSION,
    doi: MODEL_DOI,
    url: MODEL_RECORD_URL,
    immutableArchiveUrl: MODEL_ARCHIVE_URL,
    license: 'CC-BY-4.0',
    licenseUrl: MODEL_LICENSE,
  },
  service: {
    name: 'GPlates Web Service',
    endpoints: Object.fromEntries(LAYERS.map((layer) => [layer.id, layer.endpoint])),
    model: MODEL,
    documentation: Object.fromEntries(LAYERS.map((layer) => [layer.id, layer.documentation])),
    modelDocumentation: 'https://gwsdoc.gplates.org/models/',
    modelShow,
  },
  sourceAssets,
  processing: {
    script: 'scripts/fetch-paleogeography.mjs',
    scriptCommit,
    scriptCommitRole: 'Generation worktree base; the exact processing-script content used for this uncommitted review build is identified by scriptSha256.',
    scriptSha256: sha256(readFileSync(new URL(import.meta.url))),
    coordinatePrecisionDecimals: 4,
    method: 'Fetch six reconstructed CAO2024 layers at each ICS 2026/06 period midpoint. Coastlines, dynamic topological plate polygons, typed plate boundaries and rigid static polygons use official GET endpoints. Continental polygons and continent-ocean boundaries use SHA-pinned official WebDAV GPML/GPMLZ payloads submitted to the official reconstruct_files endpoint with their existing plate IDs. Preserve continental feature type/name/plate ID; publish only formal Closed/Passive continental boundaries plus explicitly named alternative COB records; clip new polygon and line geometry at the antimeridian; remove invalid or duplicate geometry; sort deterministically.',
  },
  retrievedAt,
  attribution: 'Cao et al. (2024), reconstructed through the GPlates Web Service operated by the EarthByte Group and AuScope.',
  scientificLimitations: [
    'These are modelled coastline reconstructions at one representative midpoint per geological period, not direct observations or a continuous paleogeographic movie.',
    'Plate polygons and typed boundaries add tectonic context, but the dataset does not provide paleoelevation, bathymetry or terrain relief; no elevation is inferred or illustrated.',
    'Static polygons are rigid-shape technical plate partitions used for plate assignment and masking. They are not dynamically closing plate polygons and must not replace the topological plate polygon layer.',
    'Continent-ocean boundaries represent a broad, interpretation-dependent transition between continental and oceanic crust. They are not coastlines, and records with unrelated or ambiguous feature types are excluded.',
    'Plate reconstructions become more uncertain deeper in time; exact coastlines, terrane positions and longitudinal placement are model-dependent.',
    'The land layer and PBDB occurrence paleocoordinates may derive from different reconstruction models and must not be treated as spatially co-registered evidence.',
  ],
  snapshots: [...retained, ...snapshots].sort((left, right) => periodByName.get(right.period).eag - periodByName.get(left.period).eag),
}
writeFileSync(provenancePath, `${JSON.stringify(provenance, null, 2)}\n`)
console.log(`Updated ${provenancePath} with ${provenance.snapshots.length} snapshot record(s).`)
