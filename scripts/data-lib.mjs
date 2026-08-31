import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { gunzipSync } from 'node:zlib'

export const rootDir = process.cwd()

export function readJson(path) {
  const bytes = readFileSync(join(rootDir, path))
  const source = path.endsWith('.gz') ? gunzipSync(bytes) : bytes
  return JSON.parse(source.toString('utf8'))
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
        : (name.endsWith('.json') || (directory === 'data/sources' && name.endsWith('.json.gz'))) ? [relativePath] : []
    })
}

export function dataFiles() {
  return jsonFilesBelow('data').filter((path) => path !== 'data/manifest.json')
}

export function sha256(path) {
  const bytes = readFileSync(join(rootDir, path))
  const canonicalJson = (path.endsWith('.gz') ? gunzipSync(bytes) : bytes).toString('utf8').replaceAll('\r\n', '\n')
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
  const profiles = readJson('data/registry/taxon-profiles.json')
  const ontology = readJson('data/navigation/atlas-ontology.json')
  const treeEvidence = readJson('data/tree/evidence.json')
  const claims = readJson('data/evidence/claims.json')
  const editorialDecisions = readJson('data/evidence/editorial-decisions.json')
  const entityRegistry = readJson('data/registry/entities/entities.json')
  const packageRegistry = readJson('data/registry/package-registry.json')
  const paleogeography = readJson('data/paleogeography/provenance.json')
  const caoObservations = readJson('data/paleogeography/observations/manifest.json')
  const catalogue = readJson('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')
  const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
  const occurrences = periodNames.flatMap((periodName) => readJson(`data/fossils/${periodName.toLowerCase()}.json`))
  const formationNames = new Set(occurrences.map((record) => record.formation).filter(Boolean))
  const fossilCollections = new Set(occurrences.map((record) => record.cid).filter(Boolean))
  const traitTerms = new Set(profiles.flatMap((profile) => profile.traits ?? []))

  return {
    records: {
      fossilOccurrences: occurrences.length,
      treeNodes: countTreeNodes(ontology),
      geologicalPeriods: periodNames.length,
      periodMidpointSnapshots: periodMetadata.filter((record) => record.mapLayerStatus === 'available').length,
      paleogeographicFrames: Object.values(paleogeography.series.layers).reduce((sum, layer) => sum + layer.frames.length, 0),
      caoObservationDatasets: Object.keys(caoObservations.datasets).length,
      caoObservationRecords: caoObservations.counts.total,
      caoReconstructedObservationRecords: caoObservations.counts.reconstructed,
      caoRawOnlyObservationRecords: caoObservations.counts.rawOnlyModelRange + caoObservations.counts.rawOnlyMissingPlateCircuit,
      earthHistoryMa: timeScale.earthAgeMa,
      timeScaleUnits: timeScale.units.length,
      taxonProfiles: profiles.length,
      evolutionEvents: events.length,
      publishedEvolutionStories: stories.filter((story) => story.evidenceStatus === 'available-with-limitations').length,
      evidenceBlockedStoryDrafts: stories.filter((story) => story.evidenceStatus === 'blocked-pending-step-evidence').length,
      references: references.length,
      searchablePlaces: places.length,
      mediaAssets: media.length,
      formationNames: formationNames.size,
      fossilCollections: fossilCollections.size,
      traitTerms: traitTerms.size,
      divergenceEstimates: perissodactylCalibrations.estimates.length,
      treeEvidenceOverrides: Object.keys(treeEvidence.nodes).length,
      evidenceClaims: claims.length,
      editorialDecisions: editorialDecisions.length,
      registryEntities: entityRegistry.length,
      dataPackages: packageRegistry.packages.length,
      bilingualRegistryEntities: entityRegistry.filter((entity) => entity.names.en && entity.names.zh).length,
      packageOwnedEntities: entityRegistry.filter((entity) => entity.packageId).length,
      acceptedSpeciesNames: catalogue.counts.acceptedSpecies,
      resolvingSpeciesNameUsages: Object.values(catalogue.counts.resolvingNameUsages).reduce((sum, count) => sum + count, 0),
      catalogueSourceChecklists: catalogue.sourceChecklists.count,
    },
    checksums: Object.fromEntries(dataFiles().map((path) => [relative(rootDir, join(rootDir, path)).replaceAll('\\', '/'), sha256(path)])),
  }
}
