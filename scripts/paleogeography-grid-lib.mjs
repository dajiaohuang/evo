export const MAX_PALEOGEOGRAPHY_AGE_MA = 1800
export const PALEOGEOGRAPHY_CADENCE_BOUNDARY_MA = 540

export const PERIOD_MIDPOINTS = Object.freeze([
  { period: 'Cambrian', ageMa: 512.825 },
  { period: 'Ordovician', ageMa: 464.975 },
  { period: 'Silurian', ageMa: 431.36 },
  { period: 'Devonian', ageMa: 389.24 },
  { period: 'Carboniferous', ageMa: 328.88 },
  { period: 'Permian', ageMa: 275.401 },
  { period: 'Triassic', ageMa: 226.651 },
  { period: 'Jurassic', ageMa: 172.25 },
  { period: 'Cretaceous', ageMa: 104.55 },
  { period: 'Paleogene', ageMa: 44.52 },
  { period: 'Neogene', ageMa: 12.81 },
  { period: 'Quaternary', ageMa: 1.29 },
])

export const PERIOD_MIDPOINT_AGES_MA = Object.freeze(PERIOD_MIDPOINTS.map(({ ageMa }) => ageMa))

const CADENCE_BY_LAYER = Object.freeze({
  coastlines: Object.freeze([[0, 540, 5], [540, 1800, 10]]),
  platePolygons: Object.freeze([[0, 250, 1], [250, 1000, 5], [1000, 1800, 10]]),
  plateBoundaries: Object.freeze([[0, 250, 1], [250, 1000, 5], [1000, 1800, 10]]),
  continentalPolygons: Object.freeze([[0, 540, 10], [540, 1800, 20]]),
  continentOceanBoundaries: Object.freeze([[0, 540, 10], [540, 1800, 20]]),
  staticPolygons: Object.freeze([[0, 540, 20], [540, 1800, 40]]),
})

export const PALEOGEOGRAPHY_LAYER_ROLES = Object.freeze({
  coastlines: 'modelled-coastline',
  platePolygons: 'dynamic-topological-plate-coverage',
  plateBoundaries: 'typed-topological-boundary',
  continentalPolygons: 'continental-extent',
  continentOceanBoundaries: 'continent-ocean-boundary',
  staticPolygons: 'rigid-plate-partition',
})

export const PALEOGEOGRAPHY_LAYER_IDS = Object.freeze(Object.keys(CADENCE_BY_LAYER))

export function paleogeographyCadenceBands(layerId) {
  const bands = CADENCE_BY_LAYER[layerId]
  if (!bands) throw new TypeError(`Unknown paleogeography layer: ${layerId}`)
  return bands.map(([youngestMa, oldestMa, cadenceMa]) => ({ youngestMa, oldestMa, cadenceMa }))
}

function addCadence(ages, startMa, endMa, stepMa) {
  for (let ageMa = startMa; ageMa <= endMa; ageMa += stepMa) ages.add(ageMa)
  ages.add(endMa)
}

export function paleogeographyAgeGrid(layerId) {
  const bands = CADENCE_BY_LAYER[layerId]
  if (!bands) throw new TypeError(`Unknown paleogeography layer: ${layerId}`)

  const ages = new Set(PERIOD_MIDPOINT_AGES_MA)
  for (const [youngestMa, oldestMa, cadenceMa] of bands) addCadence(ages, youngestMa, oldestMa, cadenceMa)
  return [...ages].sort((left, right) => left - right)
}

export function nearestFrameAge(ageMa, frameAges) {
  if (!Number.isFinite(ageMa) || ageMa < 0 || ageMa > MAX_PALEOGEOGRAPHY_AGE_MA || frameAges.length === 0) return null

  let nearest = null
  let nearestDistance = Number.POSITIVE_INFINITY
  for (const frameAgeMa of frameAges) {
    const distance = Math.abs(frameAgeMa - ageMa)
    if (distance < nearestDistance || (distance === nearestDistance && frameAgeMa < nearest)) {
      nearest = frameAgeMa
      nearestDistance = distance
    }
  }
  return nearest
}

export function selectPaleogeographyFrameAge(ageMa, layerId) {
  return nearestFrameAge(ageMa, paleogeographyAgeGrid(layerId))
}
