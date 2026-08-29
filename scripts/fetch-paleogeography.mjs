import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const MODEL = 'CAO2024'
const MODEL_VERSION = 'v2.4'
const MODEL_DOI = '10.5281/zenodo.13628813'
const MODEL_RECORD_URL = 'https://zenodo.org/records/13628813'
const MODEL_LICENSE = 'https://creativecommons.org/licenses/by/4.0/'
const SERVICE_ENDPOINT = 'https://gws.gplates.org/reconstruct/coastlines/'
const OUTPUT_DIRECTORY = resolve(rootDir, 'data/paleogeography')

function argument(name, fallback = null) {
  const index = process.argv.indexOf(`--${name}`)
  return index >= 0 ? process.argv[index + 1] : fallback
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
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

function normalizeGeometry(geometry) {
  if (geometry?.type === 'Polygon') {
    const coordinates = normalizePolygon(geometry.coordinates ?? [])
    return coordinates ? { type: 'Polygon', coordinates } : null
  }
  if (geometry?.type === 'MultiPolygon') {
    const coordinates = (geometry.coordinates ?? []).map(normalizePolygon).filter(Boolean)
    return coordinates.length ? { type: 'MultiPolygon', coordinates } : null
  }
  return null
}

function normalizeFeatureCollection(source, period, reconstructionAgeMa) {
  if (source?.type !== 'FeatureCollection' || !Array.isArray(source.features)) {
    throw new Error(`${period}: GPlates response is not a GeoJSON FeatureCollection`)
  }
  const unique = new Map()
  for (const feature of source.features) {
    const geometry = normalizeGeometry(feature.geometry)
    if (!geometry) continue
    unique.set(JSON.stringify(geometry), geometry)
  }
  const geometries = [...unique.values()].sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)))
  return {
    type: 'FeatureCollection',
    features: geometries.map((geometry, index) => ({
      type: 'Feature',
      properties: {
        id: `${slug(period)}-${String(index + 1).padStart(4, '0')}`,
        period,
        reconstructionAgeMa,
        model: MODEL,
      },
      geometry,
    })),
  }
}

const replace = process.argv.includes('--replace')
const requestedPeriod = argument('period')
const retrievedAt = argument('retrieved-at')
const scriptCommit = argument('script-commit')
if (!/^\d{4}-\d{2}-\d{2}$/.test(retrievedAt ?? '')) throw new Error('--retrieved-at YYYY-MM-DD is required')
if (!/^[0-9a-f]{7,40}$/.test(scriptCommit ?? '')) throw new Error('--script-commit must identify the committed processing script')

const timeScale = readJson('data/time-scale.json')
const metadata = readJson('data/period-map-metadata.json')
const periodByName = new Map(timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => [unit.nam, unit]))
const selected = metadata.filter((entry) => !requestedPeriod || entry.name.toLowerCase() === requestedPeriod.toLowerCase())
if (!selected.length) throw new Error(`Unknown period: ${requestedPeriod}`)

mkdirSync(OUTPUT_DIRECTORY, { recursive: true })
const snapshots = []
for (const entry of selected) {
  const period = periodByName.get(entry.name)
  if (!period) throw new Error(`${entry.name}: missing period in data/time-scale.json`)
  const reconstructionAgeMa = Number(((period.eag + period.lag) / 2).toFixed(3))
  const parameters = new URLSearchParams({
    time: String(reconstructionAgeMa),
    model: MODEL,
    anchor_plate_id: '0',
    wrap: 'true',
  })
  const sourceUrl = `${SERVICE_ENDPOINT}?${parameters}`
  const response = await fetch(sourceUrl, { headers: { accept: 'application/geo+json, application/json', 'user-agent': 'EvoAtlasDataPipeline/2026.08 (pinned CAO2024 coastline snapshots)' } })
  if (!response.ok) throw new Error(`${entry.name}: GPlates download failed (${response.status} ${response.statusText})`)
  const sourceBytes = Buffer.from(await response.arrayBuffer())
  const normalized = normalizeFeatureCollection(JSON.parse(sourceBytes.toString('utf8')), entry.name, reconstructionAgeMa)
  if (!normalized.features.length) throw new Error(`${entry.name}: no usable coastline features returned`)
  const outputBytes = Buffer.from(`${JSON.stringify(normalized)}\n`)
  const outputPath = join(OUTPUT_DIRECTORY, `${slug(entry.name)}.json`)
  if (existsSync(outputPath) && !replace) throw new Error(`Refusing to overwrite ${outputPath}; pass --replace after reviewing the source change`)
  writeFileSync(outputPath, outputBytes)
  snapshots.push({
    period: entry.name,
    reconstructionAgeMa,
    model: MODEL,
    anchorPlateId: 0,
    sourceUrl,
    sourceBytes: sourceBytes.byteLength,
    sourceSha256: sha256(sourceBytes),
    geometryFile: `data/paleogeography/${basename(outputPath)}`,
    geometryFeatures: normalized.features.length,
    geometryBytes: outputBytes.byteLength,
    geometrySha256: sha256(outputBytes),
  })
  console.log(`${entry.name}: ${normalized.features.length} unique coastline features at ${reconstructionAgeMa} Ma`)
}

const provenancePath = join(OUTPUT_DIRECTORY, 'provenance.json')
const prior = existsSync(provenancePath) ? JSON.parse(readFileSync(provenancePath, 'utf8')) : null
const selectedNames = new Set(snapshots.map((snapshot) => snapshot.period))
const retained = (prior?.snapshots ?? []).filter((snapshot) => !selectedNames.has(snapshot.period))
const provenance = {
  schemaVersion: 1,
  dataset: {
    title: "Earth's tectonic and plate boundary evolution over 1.8 billion years",
    authors: 'Cao, X.; Collins, A.S.; Pisarevsky, S.; Flament, N.; Li, S.; Hasterok, D.; Müller, R.D.',
    publishedYear: 2024,
    version: MODEL_VERSION,
    doi: MODEL_DOI,
    url: MODEL_RECORD_URL,
    license: 'CC-BY-4.0',
    licenseUrl: MODEL_LICENSE,
  },
  service: {
    name: 'GPlates Web Service',
    endpoint: SERVICE_ENDPOINT,
    model: MODEL,
    documentation: 'https://gwsdoc.gplates.org/reconstruction/reconstruct-coastlines/',
    modelDocumentation: 'https://gwsdoc.gplates.org/models/',
  },
  processing: {
    script: 'scripts/fetch-paleogeography.mjs',
    scriptCommit,
    coordinatePrecisionDecimals: 4,
    method: 'Fetch reconstructed coastline polygons at each ICS 2026/06 period midpoint; wrap at the dateline; remove invalid or duplicate rings and byte-identical geometries; sort deterministically.',
  },
  retrievedAt,
  attribution: 'Cao et al. (2024), reconstructed through the GPlates Web Service operated by the EarthByte Group and AuScope.',
  scientificLimitations: [
    'These are modelled coastline reconstructions at one representative midpoint per geological period, not direct observations or a continuous paleogeographic movie.',
    'Plate reconstructions become more uncertain deeper in time; exact coastlines, terrane positions and longitudinal placement are model-dependent.',
    'The land layer and PBDB occurrence paleocoordinates may derive from different reconstruction models and must not be treated as spatially co-registered evidence.',
  ],
  snapshots: [...retained, ...snapshots].sort((left, right) => periodByName.get(right.period).eag - periodByName.get(left.period).eag),
}
writeFileSync(provenancePath, `${JSON.stringify(provenance, null, 2)}\n`)
console.log(`Updated ${provenancePath} with ${provenance.snapshots.length} snapshot record(s).`)
