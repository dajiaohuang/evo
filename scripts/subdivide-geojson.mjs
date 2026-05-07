import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const DIR = 'data/paleogeography'
const SUBDIVISIONS = 4
const ROUGHNESS = 0.015

let seed = 42
function rand() {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

function subdivideRing(coords, level, roughness) {
  if (level <= 0) return coords
  const result = []
  for (let i = 0; i < coords.length - 1; i++) {
    const [lng1, lat1] = coords[i]
    const [lng2, lat2] = coords[i + 1]
    const midLng = (lng1 + lng2) / 2
    const midLat = (lat1 + lat2) / 2
    const dx = lng2 - lng1
    const dy = lat2 - lat1
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len < 0.001) {
      result.push([lng1, lat1])
      continue
    }
    const nx = -dy / len
    const ny = dx / len
    const offset = (rand() - 0.5) * len * roughness * 2
    result.push([lng1, lat1])
    result.push([
      midLng + nx * offset,
      midLat + ny * offset,
    ])
  }
  result.push(coords[coords.length - 1])
  return subdivideRing(result, level - 1, roughness * 0.5)
}

function subdivideGeometry(geom, level, roughness) {
  if (geom.type === 'Polygon') {
    return {
      type: 'Polygon',
      coordinates: geom.coordinates.map((ring) => subdivideRing(ring, level, roughness)),
    }
  }
  if (geom.type === 'MultiPolygon') {
    return {
      type: 'MultiPolygon',
      coordinates: geom.coordinates.map((poly) =>
        poly.map((ring) => subdivideRing(ring, level, roughness))
      ),
    }
  }
  return geom
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.json'))
let totalVerts = 0

for (const file of files) {
  const path = join(DIR, file)
  const data = JSON.parse(readFileSync(path, 'utf8'))
  let fileVerts = 0
  data.features = data.features.map((feature) => {
    feature.geometry = subdivideGeometry(feature.geometry, SUBDIVISIONS, ROUGHNESS)
    if (feature.geometry.type === 'Polygon') {
      feature.geometry.coordinates.forEach((ring) => { fileVerts += ring.length })
    } else if (feature.geometry.type === 'MultiPolygon') {
      feature.geometry.coordinates.forEach((poly) => {
        poly.forEach((ring) => { fileVerts += ring.length })
      })
    }
    return feature
  })
  writeFileSync(path, JSON.stringify(data))
  console.log(`${file}: ${fileVerts} vertices`)
  totalVerts += fileVerts
}
console.log(`\nTotal: ${totalVerts} vertices across ${files.length} files`)
