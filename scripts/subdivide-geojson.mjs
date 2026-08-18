import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'

function argument(name, fallback = null) {
  const index = process.argv.indexOf(`--${name}`)
  return index >= 0 ? process.argv[index + 1] : fallback
}

const inputArg = argument('input')
const outputDirectory = resolve(argument('output', 'staging/paleogeography'))
const property = argument('property', 'period')
const precision = Number(argument('precision', '4'))
const replace = process.argv.includes('--replace')

if (!inputArg || !Number.isInteger(precision) || precision < 0 || precision > 8) {
  console.error('Usage: node scripts/subdivide-geojson.mjs --input source.geojson [--output staging/paleogeography] [--property period] [--precision 4] [--replace]')
  process.exit(1)
}

const input = resolve(inputArg)
const source = JSON.parse(readFileSync(input, 'utf8'))
if (source.type !== 'FeatureCollection' || !Array.isArray(source.features)) throw new Error('Input must be a GeoJSON FeatureCollection.')

const roundCoordinates = (value) => Array.isArray(value)
  ? value.map(roundCoordinates)
  : typeof value === 'number'
    ? Number(value.toFixed(precision))
    : value

const groups = new Map()
for (const feature of source.features) {
  const key = String(feature.properties?.[property] ?? 'unclassified').trim().toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')
  const normalized = structuredClone(feature)
  normalized.geometry.coordinates = roundCoordinates(normalized.geometry.coordinates)
  if (!groups.has(key)) groups.set(key, [])
  groups.get(key).push(normalized)
}

mkdirSync(outputDirectory, { recursive: true })
for (const [key, features] of groups) {
  const output = resolve(outputDirectory, `${key}.json`)
  if (existsSync(output) && !replace) throw new Error(`Refusing to overwrite ${output}. Pass --replace after reviewing the target.`)
  writeFileSync(output, `${JSON.stringify({ type: 'FeatureCollection', features })}\n`)
  console.log(`${basename(input)} → ${key}.json (${features.length} features, ${precision}-decimal coordinates)`)
}

console.log(`Wrote ${groups.size} period file(s) to ${outputDirectory}. Validate before promoting them into data/paleogeography.`)
