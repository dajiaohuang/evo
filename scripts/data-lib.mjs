import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

export const rootDir = process.cwd()

export function readJson(path) {
  return JSON.parse(readFileSync(join(rootDir, path), 'utf8'))
}

export function dataFiles() {
  const fixed = [
    'data/periods.json',
    'data/time-scale.json',
    'data/references.json',
    'data/places.json',
    'data/media.json',
    'data/phylogenies/perissodactyla-calibrations.json',
    'data/events.json',
    'data/stories.json',
    'data/taxa/profiles.json',
    'data/tree/life-cladogram.json',
    'data/tree/evidence.json',
  ]
  const fromDirectory = (directory) => readdirSync(join(rootDir, directory))
    .filter((name) => name.endsWith('.json'))
    .sort()
    .map((name) => `${directory}/${name}`)
  return [...fixed, ...fromDirectory('data/fossils'), ...fromDirectory('data/paleogeography')]
}

export function sha256(path) {
  return createHash('sha256').update(readFileSync(join(rootDir, path))).digest('hex')
}

export function countTreeNodes(root) {
  return 1 + (root.children ?? []).reduce((sum, child) => sum + countTreeNodes(child), 0)
}

export function flattenTree(root, output = []) {
  output.push(root)
  for (const child of root.children ?? []) flattenTree(child, output)
  return output
}

export function collectDataSummary() {
  const periods = readJson('data/periods.json')
  const timeScale = readJson('data/time-scale.json')
  const references = readJson('data/references.json')
  const places = readJson('data/places.json')
  const media = readJson('data/media.json')
  const perissodactylCalibrations = readJson('data/phylogenies/perissodactyla-calibrations.json')
  const events = readJson('data/events.json')
  const stories = readJson('data/stories.json')
  const profiles = readJson('data/taxa/profiles.json')
  const tree = readJson('data/tree/life-cladogram.json')
  const treeEvidence = readJson('data/tree/evidence.json')
  const fossilOccurrences = periods.reduce((sum, period) => {
    return sum + readJson(`data/fossils/${period.name.toLowerCase()}.json`).length
  }, 0)

  return {
    records: {
      fossilOccurrences,
      treeNodes: countTreeNodes(tree),
      geologicalPeriods: periods.length,
      paleogeographicSnapshots: periods.length,
      earthHistoryMa: timeScale.earthAgeMa,
      timeScaleUnits: timeScale.units.length,
      taxonProfiles: profiles.length,
      evolutionEvents: events.length,
      evolutionStories: stories.length,
      references: references.length,
      searchablePlaces: places.length,
      mediaAssets: media.length,
      divergenceEstimates: perissodactylCalibrations.estimates.length,
      treeEvidenceOverrides: Object.keys(treeEvidence.nodes).length,
    },
    checksums: Object.fromEntries(dataFiles().map((path) => [relative(rootDir, join(rootDir, path)).replaceAll('\\', '/'), sha256(path)])),
  }
}
