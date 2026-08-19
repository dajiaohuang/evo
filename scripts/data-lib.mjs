import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

export const rootDir = process.cwd()

export function readJson(path) {
  return JSON.parse(readFileSync(join(rootDir, path), 'utf8'))
}

function jsonFilesBelow(directory) {
  const absoluteDirectory = join(rootDir, directory)
  return readdirSync(absoluteDirectory)
    .sort()
    .flatMap((name) => {
      const absolutePath = join(absoluteDirectory, name)
      const relativePath = `${directory}/${name}`.replaceAll('\\', '/')
      return statSync(absolutePath).isDirectory()
        ? jsonFilesBelow(relativePath)
        : name.endsWith('.json') ? [relativePath] : []
    })
}

export function dataFiles() {
  return jsonFilesBelow('data').filter((path) => path !== 'data/manifest.json')
}

export function sha256(path) {
  const canonicalJson = readFileSync(join(rootDir, path), 'utf8').replaceAll('\r\n', '\n')
  return createHash('sha256').update(canonicalJson, 'utf8').digest('hex')
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
  const periodMetadata = readJson('data/period-map-metadata.json')
  const timeScale = readJson('data/time-scale.json')
  const references = readJson('data/references.json')
  const places = readJson('data/places.json')
  const media = readJson('data/media.json')
  const perissodactylCalibrations = readJson('data/packages/mammalia/perissodactyla/phylogeny/calibrations.json')
  const events = readJson('data/events.json')
  const stories = readJson('data/stories.json')
  const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
  const ontology = readJson('data/navigation/atlas-ontology.json')
  const treeEvidence = readJson('data/tree/evidence.json')
  const claims = readJson('data/evidence/claims.json')
  const editorialDecisions = readJson('data/evidence/editorial-decisions.json')
  const entityRegistry = readJson('data/registry/entities/entities.json')
  const packageRegistry = readJson('data/registry/package-registry.json')
  const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
  const fossilOccurrences = periodNames.reduce((sum, periodName) => {
    return sum + readJson(`data/fossils/${periodName.toLowerCase()}.json`).length
  }, 0)

  return {
    records: {
      fossilOccurrences,
      treeNodes: countTreeNodes(ontology),
      geologicalPeriods: periodNames.length,
      paleogeographicSnapshots: periodMetadata.filter((record) => record.mapLayerStatus === 'available').length,
      earthHistoryMa: timeScale.earthAgeMa,
      timeScaleUnits: timeScale.units.length,
      taxonProfiles: profiles.length,
      evolutionEvents: events.length,
      publishedEvolutionStories: stories.filter((story) => story.evidenceStatus === 'available-with-limitations').length,
      evidenceBlockedStoryDrafts: stories.filter((story) => story.evidenceStatus === 'blocked-pending-step-evidence').length,
      references: references.length,
      searchablePlaces: places.length,
      mediaAssets: media.length,
      divergenceEstimates: perissodactylCalibrations.estimates.length,
      treeEvidenceOverrides: Object.keys(treeEvidence.nodes).length,
      evidenceClaims: claims.length,
      editorialDecisions: editorialDecisions.length,
      registryEntities: entityRegistry.length,
      dataPackages: packageRegistry.packages.length,
      bilingualRegistryEntities: entityRegistry.filter((entity) => entity.names.en && entity.names.zh).length,
      packageOwnedEntities: entityRegistry.filter((entity) => entity.packageId).length,
    },
    checksums: Object.fromEntries(dataFiles().map((path) => [relative(rootDir, join(rootDir, path)).replaceAll('\\', '/'), sha256(path)])),
  }
}
