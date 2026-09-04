import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createGunzip } from 'node:zlib'
import { createInterface } from 'node:readline'
import { deterministicGzip } from './archive-determinism.mjs'
import { summarizeExtensions } from './manifest-extension-utils.mjs'
import { buildBacteriaLpsnSidecar } from './build-bacteria-lpsn-sidecar.mjs'
import { buildVirusIctvSidecar } from './build-virus-ictv-sidecar.mjs'
import { buildWfoPlantProjections } from './build-wfo-plant-projections.mjs'
import { buildFungiAuthoritySidecar } from './build-fungi-authority-sidecar.mjs'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_PACKAGE_DEFINITIONS = join(REPOSITORY_ROOT, 'scripts', 'package-definitions.mjs')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')
const DEFAULT_RESOURCE_PACKS_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs')
const DEFAULT_ARCHAEA_LPSN_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'archaea-lpsn-crosswalk-col26.8.json')
const DEFAULT_BACTERIA_LPSN_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'bacteria-lpsn-crosswalk-col26.8.json.gz')
const DEFAULT_VIRUS_ICTV_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'ictv-virus-crosswalk-col26.8-msl41.v1.json.gz')
const DEFAULT_WFO_PLANT_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'wfo-plant-crosswalk-col26.8.json.gz')
const DEFAULT_FUNGI_AUTHORITY_CROSSWALK = join(REPOSITORY_ROOT, 'data', 'sources', 'fungi-species-fungorum-crosswalk-col26.8.json.gz')
const RESOURCE_PACK_SOURCE_LIMIT = 6 * 1024 * 1024
const ARCHAEA_LPSN_FIELDS = ['colId', 'lpsnId', 'lpsnUrl', 'mappingBasis', 'status']

// Release-scoped CoL usage IDs, ordered from specific teaching packages to
// broad catalogue-only owners. Fossil/navigation packages without a reliable
// node in this strict accepted-species snapshot intentionally have no route.
const STATIC_ROUTE_IDS = [
  ['perissodactyla', ['623DW']],
  ['cetartiodactyla', ['6227M', 'WP']],
  ['primates', ['3W7']],
  ['carnivora', ['VS']],
  ['crocodylomorphs-birds', ['329', 'V2']],
  ['turtles-lepidosaurs', ['45C', '477', 'RP']],
  ['other-mammals', ['6224G']],
  ['amphibia', ['PH']],
  ['actinopterygii', ['8VR36']],
  ['chondrichthyes', ['8X6G5']],
  ['tetrapod-transition', ['8VSMX']],
  ['early-fishes', ['6225G', 'KTXJW']],
  ['trilobites-chelicerates', ['KZWYC', 'TRL']],
  ['crustaceans-insects', ['H6', 'KZX8B', 'L2655', 'L2G4H', 'RT']],
  ['sponges-cnidarians', ['B8TXQ', 'CN2']],
  ['molluscs-brachiopods', ['B8V3K', 'KZ', 'M2L']],
  ['echinoderms', ['CHN']],
  // COL26.8 materialises these plant groups as exact class/phylum usages.
  ['angiospermae', ['L2L', 'MG']],
  ['gymnosperms', ['BT', 'C7ZVJ', 'CGVH9']],
  ['early-land-plants', ['9J9G3', '9JHQ8', 'BJ5TM', 'GV', 'LYC']],
]

const STATIC_ZERO_REASONS = {
  'atlas-core': 'Navigation/core package; no species-bearing CoL clade is assigned to it.',
  'mammal-origins': 'Synapsida is not materialised as a reliable species-bearing node in COL26.8; extant Mammalia route to other-mammals or a specific mammal package.',
  dinosauria: 'Dinosauria is not materialised as a reliable species-bearing node in this strict accepted-species snapshot; Aves remain in crocodylomorphs-birds.',
  'marine-reptiles-pterosaurs': 'Its named roots are fossil clades without reliable species-bearing nodes in this strict accepted-species snapshot.',
}

const OWNERSHIP_DISCLAIMER = 'Package ownership is a deterministic navigation assignment within the pinned COL26.8 strict accepted-species snapshot. It is not a taxonomic endorsement, evidence of monophyly, a dossier-maturity claim, or a claim that known biodiversity is complete.'
const OWNERSHIP_DISCLAIMER_ZH = '内容包归属仅是固定 COL26.8 严格接受种快照内的确定性导航分配；不构成分类学背书、单系性证据、物种档案成熟度声明，也不表示已知生物多样性已完整收录。'

const CATALOGUE_ROUTES = [
  {
    id: 'viruses', kind: 'nomenclatural-resource-pack', title: 'Viruses', titleZh: '病毒', ancestorIds: ['92e52ff4-2dc6-4b35-9339-2e92035b8daf'],
    scope: 'Strict accepted species descending from the exact COL26.8 Viruses root.',
    scopeZh: '固定 COL26.8 中精确 Viruses 根节点下的严格接受种。',
    disclaimer: 'This browse scope follows the pinned Catalogue of Life treatment of virus species and does not resolve debates over whether viruses are living organisms.',
    disclaimerZh: '该浏览范围遵循固定版生命物种名录对病毒种的处理，不对“病毒是否属于生命”的争议作出结论。',
  },
  {
    id: 'archaea', kind: 'nomenclatural-resource-pack', title: 'Archaea', titleZh: '古菌域', ancestorIds: ['CRLT8'],
    scope: 'Strict accepted species descending from the exact COL26.8 Archaea domain root.',
    scopeZh: '固定 COL26.8 中精确古菌域根节点下的严格接受种。',
    disclaimer: 'Counts reflect accepted names in this release, not environmental lineage diversity or uncultured archaeal diversity.',
    disclaimerZh: '计数反映该版本的接受学名，不代表环境谱系或未培养古菌的完整多样性。',
  },
  {
    id: 'bacteria', kind: 'nomenclatural-resource-pack', title: 'Bacteria', titleZh: '细菌域', ancestorIds: ['CRRY6'],
    scope: 'Strict accepted species descending from the exact COL26.8 Bacteria domain root.',
    scopeZh: '固定 COL26.8 中精确细菌域根节点下的严格接受种。',
    disclaimer: 'Counts reflect accepted names in this release, not environmental lineage diversity, metagenomic diversity or uncultured bacterial diversity.',
    disclaimerZh: '计数反映该版本的接受学名，不代表环境谱系、宏基因组或未培养细菌的完整多样性。',
  },
  {
    id: 'fungi', kind: 'nomenclatural-resource-pack', title: 'Fungi', titleZh: '真菌界', ancestorIds: ['F'],
    scope: 'Strict accepted species descending from the exact COL26.8 Fungi kingdom root.',
    scopeZh: '固定 COL26.8 中精确真菌界根节点下的严格接受种。',
    disclaimer: 'This is a catalogue browse owner, not a claim that fungal taxonomy or described fungal diversity is complete.',
    disclaimerZh: '这是名录浏览归属，不表示真菌分类或已描述的真菌多样性已完整。',
  },
  {
    id: 'protists-chromists', kind: 'nomenclatural-resource-pack', title: 'Protists and Chromists', titleZh: '原生生物与色界生物', ancestorIds: ['C', 'Z'],
    scope: 'Strict accepted species descending from the exact COL26.8 Chromista or Protozoa kingdom roots.',
    scopeZh: '固定 COL26.8 中精确色界或原生动物界根节点下的严格接受种。',
    disclaimer: 'The combined browse owner is operational and does not assert that Chromista and Protozoa form one clade or reflect a universally accepted kingdom system.',
    disclaimerZh: '该合并浏览归属只是操作性分组，不声称色界与原生动物界构成同一演化支，也不代表该界系统获得普遍接受。',
  },
  {
    id: 'other-plants', kind: 'nomenclatural-resource-pack', title: 'Other Plants', titleZh: '其他植物', ancestorIds: ['P'],
    scope: 'Strict accepted species below the exact COL26.8 Plantae kingdom root that are not claimed by the flowering-plant, gymnosperm or named early-land-plant routes.',
    scopeZh: '固定 COL26.8 中精确植物界根节点下，且未被被子植物、裸子植物或指定早期陆生植物路由接收的严格接受种。',
    disclaimer: '“Other” is the deterministic remainder of this release and may combine unrelated plant or algal lineages; it is not a taxonomic clade.',
    disclaimerZh: '“其他”是该版本的确定性余集，可能合并无直接亲缘关系的植物或藻类谱系，并非分类学演化支。',
  },
  {
    id: 'other-animals', kind: 'nomenclatural-resource-pack', title: 'Other Animals', titleZh: '其他动物', ancestorIds: ['N'],
    scope: 'Strict accepted species below the exact COL26.8 Animalia kingdom root that are not claimed by a more specific static-package route.',
    scopeZh: '固定 COL26.8 中精确动物界根节点下，且未被更具体静态内容包路由接收的严格接受种。',
    disclaimer: '“Other” is the deterministic remainder of this release and combines many unrelated animal phyla; it is not a taxonomic clade.',
    disclaimerZh: '“其他”是该版本的确定性余集，合并了多个无直接亲缘关系的动物门，并非分类学演化支。',
  },
  {
    id: 'other-eukaryotes',
    kind: 'catalogue-only',
    title: 'Other Eukaryotes',
    titleZh: '其他真核生物',
    ancestorIds: ['CS5HF'],
    scope: 'Strict accepted species below the exact COL26.8 Eukaryota domain root that remain after the five exact kingdom routes.',
    scopeZh: '固定 COL26.8 中精确真核生物域根节点下，经五个精确界级路由后仍未分配的严格接受种。',
    disclaimer: 'This is a release-scoped remainder owner, not a clade. It is empty in COL26.8 because the five exact kingdom routes exhaust the Eukaryota descendants.',
    disclaimerZh: '这是该版本范围内的余集归属，并非演化支。在 COL26.8 中，五个精确界级路由已覆盖全部真核生物后代，因此该项为空。',
    zeroAssignmentReason: 'Every COL26.8 Eukaryota species is already below Animalia, Chromista, Fungi, Plantae or Protozoa in this snapshot.',
  },
]

function parseArgs(argv) {
  const options = {
    registryRoot: DEFAULT_REGISTRY_ROOT,
    packageDefinitions: DEFAULT_PACKAGE_DEFINITIONS,
    output: DEFAULT_OUTPUT,
    resourcePacksRoot: DEFAULT_RESOURCE_PACKS_ROOT,
    archaeaLpsnCrosswalk: DEFAULT_ARCHAEA_LPSN_CROSSWALK,
    bacteriaLpsnCrosswalk: DEFAULT_BACTERIA_LPSN_CROSSWALK,
    virusIctvCrosswalk: DEFAULT_VIRUS_ICTV_CROSSWALK,
    wfoPlantCrosswalk: DEFAULT_WFO_PLANT_CROSSWALK,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--package-definitions') options.packageDefinitions = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
    else if (value === '--resource-packs-root') options.resourcePacksRoot = resolve(argv[++index])
    else if (value === '--archaea-lpsn-crosswalk') options.archaeaLpsnCrosswalk = resolve(argv[++index])
    else if (value === '--bacteria-lpsn-crosswalk') options.bacteriaLpsnCrosswalk = resolve(argv[++index])
    else if (value === '--virus-ictv-crosswalk') options.virusIctvCrosswalk = resolve(argv[++index])
    else if (value === '--wfo-plant-crosswalk') options.wfoPlantCrosswalk = resolve(argv[++index])
    else if (value === '--help') options.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function usage() {
  return [
    'Usage: node scripts/build-package-species-coverage.mjs [options]',
    '',
    'Options:',
    '  --registry-root <path>        Pinned CoL registry root',
    '  --package-definitions <path>  Package definitions module',
    '  --output <path>               Compact routing manifest output',
    '  --resource-packs-root <path>  Deterministic nomenclatural resource packs',
    '  --archaea-lpsn-crosswalk <path>  Pinned COL26.8-to-LPSN identifier snapshot',
    '  --bacteria-lpsn-crosswalk <path>  Pinned COL26.8 Bacteria-to-LPSN identifier snapshot',
    '  --virus-ictv-crosswalk <path>  Pinned COL26.8/ICTV MSL41.v1 and VMR snapshot',
    '  --wfo-plant-crosswalk <path>  Pinned COL26.8/WFO Plant List 2026-06 snapshot',
  ].join('\n')
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

async function forEachGzipJsonLine(path, visit) {
  const input = createReadStream(path).pipe(createGunzip())
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) {
    if (line) visit(JSON.parse(line))
  }
}

function filesFromProjection(registryRoot, projection) {
  return projection.files
    .map((file) => join(registryRoot, ...file.path.split('/')))
    .sort((left, right) => left.localeCompare(right))
}

async function loadHigherTaxa(registryRoot, manifest) {
  const nodes = new Map()
  for (const path of filesFromProjection(registryRoot, manifest.hierarchy.nodes)) {
    await forEachGzipJsonLine(path, (record) => {
      if (record.rank === 'species') return
      nodes.set(record.id, {
        parentId: record.parentId,
        scientificName: record.scientificName,
        rank: record.rank,
        status: record.status,
      })
    })
  }
  return nodes
}

function compileRoutes(nodes, packageIds) {
  const staticRoutes = STATIC_ROUTE_IDS.map(([packageId, ancestorIds]) => {
    if (!packageIds.has(packageId)) throw new Error(`Route references unknown package: ${packageId}`)
    return {
      packageId,
      kind: 'static-package',
      ancestorIds,
    }
  })
  const routes = [...staticRoutes, ...CATALOGUE_ROUTES.map((route) => ({
    packageId: route.id,
    kind: route.kind,
    ancestorIds: route.ancestorIds,
  }))].map((route, index) => ({
    priority: index + 1,
    ...route,
    browseRoots: route.ancestorIds.map((id) => {
      const node = nodes.get(id)
      if (!node) throw new Error(`Pinned route ancestor is absent from the hierarchy: ${route.packageId}/${id}`)
      return { id, scientificName: node.scientificName, rank: node.rank, status: node.status }
    }),
    matchedSpecies: 0,
  }))
  const ruleIndexesByAncestorId = new Map()
  for (const [index, route] of routes.entries()) {
    for (const ancestorId of route.ancestorIds) {
      if (!ruleIndexesByAncestorId.has(ancestorId)) ruleIndexesByAncestorId.set(ancestorId, [])
      ruleIndexesByAncestorId.get(ancestorId).push(index)
    }
  }
  return { routes, ruleIndexesByAncestorId }
}

async function countOwnership({ registryRoot, manifest, nodes, routes, ruleIndexesByAncestorId, ownerIds }) {
  const packageCounts = Object.fromEntries([...ownerIds].sort().map((packageId) => [packageId, 0]))
  const resourcePackRecords = Object.fromEntries(CATALOGUE_ROUTES
    .filter((route) => route.kind === 'nomenclatural-resource-pack')
    .map((route) => [route.id, []]))
  const proof = {
    visitedAcceptedSpecies: 0,
    assignedSpecies: 0,
    unmatchedSpecies: 0,
    ambiguousAfterPriority: 0,
    overlappingCandidatesBeforePriority: 0,
    brokenLineages: 0,
  }
  // The acceptedTargets projection contains dereference targets for synonyms,
  // not the accepted baseline itself. Accepted species are the species-ranked
  // records in the complete hierarchy node projection.
  for (const path of filesFromProjection(registryRoot, manifest.hierarchy.nodes)) {
    await forEachGzipJsonLine(path, (species) => {
      if (species.rank !== 'species' || species.status !== 'accepted') return
      proof.visitedAcceptedSpecies += 1
      const matchedRuleIndexes = new Set()
      let ancestorId = species.parentId
      let lineageBroken = false
      while (ancestorId) {
        for (const ruleIndex of ruleIndexesByAncestorId.get(ancestorId) ?? []) matchedRuleIndexes.add(ruleIndex)
        const node = nodes.get(ancestorId)
        if (!node) {
          lineageBroken = true
          break
        }
        ancestorId = node.parentId
      }
      if (lineageBroken) proof.brokenLineages += 1
      const orderedMatches = [...matchedRuleIndexes].sort((left, right) => left - right)
      if (new Set(orderedMatches.map((index) => routes[index].packageId)).size > 1) {
        proof.overlappingCandidatesBeforePriority += 1
      }
      const winningRoute = orderedMatches.length ? routes[orderedMatches[0]] : null
      const packageId = winningRoute?.packageId
      if (!packageId || !ownerIds.has(packageId)) {
        proof.unmatchedSpecies += 1
        return
      }
      if (winningRoute) winningRoute.matchedSpecies += 1
      packageCounts[packageId] += 1
      if (resourcePackRecords[packageId]) {
        resourcePackRecords[packageId].push({
          id: species.id,
          parentId: species.parentId,
          scientificName: species.scientificName,
          authorship: species.authorship,
          rank: species.rank,
          status: species.status,
          sourceDatasetId: species.sourceDatasetId,
        })
      }
      proof.assignedSpecies += 1
    })
  }
  return { packageCounts, proof, resourcePackRecords }
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function ndjsonBytes(records) {
  return Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
}

function chunkBySourceBytes(records, limit = RESOURCE_PACK_SOURCE_LIMIT) {
  const chunks = []
  let current = []
  let currentBytes = 0
  for (const record of records) {
    const bytes = Buffer.byteLength(JSON.stringify(record), 'utf8') + 1
    if (current.length && currentBytes + bytes > limit) {
      chunks.push(current)
      current = []
      currentBytes = 0
    }
    current.push(record)
    currentBytes += bytes
  }
  if (current.length) chunks.push(current)
  return chunks
}

function loadArchaeaLpsnCrosswalk(path) {
  const bytes = readFileSync(path)
  const snapshot = JSON.parse(bytes.toString('utf8'))
  const source = snapshot.source ?? {}
  if (snapshot.schemaVersion !== 1
    || snapshot.crosswalkType !== 'release-pinned-external-name-identifier-crosswalk'
    || source.provider !== 'LPSN'
    || source.catalogueRelease !== 'COL26.8'
    || source.catalogueReleaseDate !== '2026-08-20'
    || source.checklistBankDatasetKey !== 316115
    || source.sourceDatasetKey !== 2015
    || source.sourceDatasetVersion !== '2026-07-26'
    || source.retrievedAt !== '2026-08-31'
    || source.license !== 'CC-BY-SA-4.0'
    || snapshot.counts?.eligible !== 790
    || snapshot.counts?.resolved !== 790
    || snapshot.counts?.withheld !== 0
    || snapshot.integrity?.algorithm !== 'sha256'
    || snapshot.integrity?.requestCount !== 790
    || !Array.isArray(snapshot.records)
    || snapshot.records.length !== 790) {
    throw new Error('Archaea LPSN crosswalk does not match the pinned COL26.8/LPSN 2026-07-26 snapshot contract')
  }
  const colIds = new Set()
  const lpsnIds = new Set()
  for (const record of snapshot.records) {
    if (!record.colId || colIds.has(record.colId)
      || !/^\d+$/.test(record.lpsnId ?? '') || lpsnIds.has(record.lpsnId)
      || record.lpsnUrl !== source.lpsnUrlTemplate.replace('{lpsnId}', record.lpsnId)
      || record.mappingBasis !== 'checklistbank-source-record'
      || record.status !== 'resolved'
      || !/^[a-f0-9]{64}$/.test(record.sourceResponseSha256 ?? '')) {
      throw new Error(`Invalid or duplicate Archaea LPSN crosswalk record: ${record.colId ?? 'missing COL ID'}`)
    }
    colIds.add(record.colId)
    lpsnIds.add(record.lpsnId)
  }
  const requestLedgerBytes = Buffer.from(`${snapshot.records.map((record) => JSON.stringify({
    colId: record.colId,
    requestUrl: source.endpointTemplate.replace('{colId}', encodeURIComponent(record.colId)),
    sourceResponseSha256: record.sourceResponseSha256,
  })).join('\n')}\n`, 'utf8')
  if (sha256(requestLedgerBytes) !== snapshot.integrity.requestLedgerSha256) {
    throw new Error('Archaea LPSN crosswalk request-ledger SHA-256 does not match its records')
  }
  return { snapshot, bytes, path }
}

function buildArchaeaLpsnExtension({ crosswalk, speciesRecords, packageRoot }) {
  const speciesById = new Map(speciesRecords.map((record) => [record.id, record]))
  if (speciesRecords.some((record) => String(record.sourceDatasetId) !== String(crosswalk.snapshot.source.sourceDatasetKey))) {
    throw new Error('Archaea LPSN extension eligibility requires sourceDatasetId=2015 for every species')
  }
  const crosswalkIds = new Set(crosswalk.snapshot.records.map((record) => record.colId))
  const crosswalkByColId = new Map(crosswalk.snapshot.records.map((record) => [record.colId, record]))
  const missing = speciesRecords.filter((record) => !crosswalkIds.has(record.id)).map((record) => record.id)
  const extra = crosswalk.snapshot.records.filter((record) => !speciesById.has(record.colId)).map((record) => record.colId)
  if (missing.length || extra.length) {
    throw new Error(`Archaea LPSN crosswalk membership differs from the species shard: ${missing.length} missing, ${extra.length} extra`)
  }
  const runtimeRecords = speciesRecords.map((species) => {
    const record = crosswalkByColId.get(species.id)
    return Object.fromEntries(ARCHAEA_LPSN_FIELDS.map((field) => [field, record[field]]))
  })
  const source = ndjsonBytes(runtimeRecords)
  const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
  const name = 'lpsn-000.jsonl.gz'
  writeFileSync(join(packageRoot, name), compressed)
  const file = {
    path: `archaea/${name}`,
    records: runtimeRecords.length,
    bytes: compressed.byteLength,
    sourceBytes: source.byteLength,
    sha256: sha256(compressed),
    sourceSha256: sha256(source),
    encoding: 'gzip',
    mediaType: 'application/x-ndjson',
  }
  const pinnedSource = crosswalk.snapshot.source
  return {
    id: 'lpsn-identifiers',
    recordType: 'external-name-identifier-crosswalk',
    provider: 'LPSN',
    source: {
      catalogueRelease: pinnedSource.catalogueRelease,
      catalogueReleaseDate: pinnedSource.catalogueReleaseDate,
      checklistBankDatasetKey: pinnedSource.checklistBankDatasetKey,
      sourceDatasetKey: pinnedSource.sourceDatasetKey,
      sourceDatasetVersion: pinnedSource.sourceDatasetVersion,
      retrievedAt: pinnedSource.retrievedAt,
      endpointTemplate: pinnedSource.endpointTemplate,
      lpsnUrlTemplate: pinnedSource.lpsnUrlTemplate,
      informationUrl: pinnedSource.informationUrl,
      license: pinnedSource.license,
      licenseUrl: pinnedSource.licenseUrl,
      citation: pinnedSource.citation,
      canonicalCrosswalkPath: 'data/sources/archaea-lpsn-crosswalk-col26.8.json',
      canonicalCrosswalkSha256: sha256(crosswalk.bytes),
      requestIntegrity: crosswalk.snapshot.integrity,
    },
    eligibility: 'sourceDatasetId=2015 for every accepted species in this pack',
    counts: { eligible: speciesRecords.length, resolved: runtimeRecords.length, withheld: 0 },
    fields: ARCHAEA_LPSN_FIELDS,
    files: [file],
    totalCompressedBytes: file.bytes,
    totalSourceBytes: file.sourceBytes,
    limitations: [
      'Source linkage is not an ecology, genome, fossil, media, phylogeny, dossier, or expert-review claim.',
      'The LPSN URL identifies a release-pinned nomenclatural source record; later taxonomic opinions may change.',
    ],
  }
}

function removeBaselineSpeciesFiles(resourcePacksRoot) {
  for (const route of CATALOGUE_ROUTES.filter((entry) => entry.kind === 'nomenclatural-resource-pack')) {
    const packageRoot = join(resourcePacksRoot, route.id)
    let entries
    try {
      entries = readdirSync(packageRoot, { withFileTypes: true })
    } catch (error) {
      if (error.code === 'ENOENT') continue
      throw error
    }
    for (const name of entries.filter((entry) => entry.isFile() && /^species-\d+\.jsonl\.gz$/.test(entry.name)).map((entry) => entry.name)) {
      rmSync(join(packageRoot, name), { force: true })
    }
  }
}

export function writeResourcePacks({ resourcePacksRoot, registryRoot, sourceManifest, resourcePackRecords, packageCounts, archaeaLpsnCrosswalk }) {
  const expectedRoot = resolve(dirname(registryRoot), 'resource-packs')
  if (resourcePacksRoot !== expectedRoot) throw new Error(`Resource-pack output must be the sibling of the selected registry: ${expectedRoot}`)
  mkdirSync(resourcePacksRoot, { recursive: true })
  removeBaselineSpeciesFiles(resourcePacksRoot)
  let existingCollectionManifest = null
  try {
    existingCollectionManifest = JSON.parse(readFileSync(join(resourcePacksRoot, 'manifest.json'), 'utf8'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  const sourcesPath = join(registryRoot, sourceManifest.sourceChecklists.path)
  const sourcesBytes = readFileSync(sourcesPath)
  const sourceIds = new Set(JSON.parse(sourcesBytes.toString('utf8')).map((source) => String(source.datasetId)))
  const packs = []
  for (const route of CATALOGUE_ROUTES.filter((entry) => entry.kind === 'nomenclatural-resource-pack')) {
    const records = resourcePackRecords[route.id].sort((left, right) => left.id.localeCompare(right.id))
    if (records.length !== packageCounts[route.id]) throw new Error(`${route.id}: materialized records do not match ownership count`)
    const unresolvedSourceDatasetIds = [...new Set(records
      .map((record) => record.sourceDatasetId)
      .filter((id) => id !== null && id !== undefined && !sourceIds.has(String(id))))]
    if (unresolvedSourceDatasetIds.length) throw new Error(`${route.id}: sourceDatasetId values are absent from sources.json: ${unresolvedSourceDatasetIds.join(', ')}`)

    const packageRoot = join(resourcePacksRoot, route.id)
    mkdirSync(packageRoot, { recursive: true })
    const existingManifestPath = join(packageRoot, 'manifest.json')
    let existingManifest = null
    try {
      existingManifest = JSON.parse(readFileSync(existingManifestPath, 'utf8'))
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }
    const files = chunkBySourceBytes(records).map((chunk, index) => {
      const name = `species-${String(index).padStart(3, '0')}.jsonl.gz`
      const source = ndjsonBytes(chunk)
      const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
      writeFileSync(join(packageRoot, name), compressed)
      return {
        path: `${route.id}/${name}`,
        records: chunk.length,
        bytes: compressed.byteLength,
        sourceBytes: source.byteLength,
        sha256: sha256(compressed),
        sourceSha256: sha256(source),
        encoding: 'gzip',
        mediaType: 'application/x-ndjson',
      }
    })
    const missingSourceDatasetId = records.filter((record) => record.sourceDatasetId === null || record.sourceDatasetId === undefined).length
    const generatedExtensions = route.id === 'archaea'
      ? [buildArchaeaLpsnExtension({ crosswalk: archaeaLpsnCrosswalk, speciesRecords: records, packageRoot })]
      : []
    const generatedExtensionsById = new Map(generatedExtensions.map((extension) => [extension.id, extension]))
    const existingExtensionIds = new Set((existingManifest?.extensions ?? []).map((extension) => extension.id))
    const extensions = [
      ...(existingManifest?.extensions ?? []).map((extension) => generatedExtensionsById.get(extension.id) ?? extension),
      ...generatedExtensions.filter((extension) => !existingExtensionIds.has(extension.id)),
    ]
    const manifest = {
      ...existingManifest,
      schemaVersion: 1,
      packageType: 'static-nomenclatural-resource-pack',
      packageId: route.id,
      title: route.title,
      titleZh: route.titleZh,
      source: {
        releaseAlias: sourceManifest.releaseAlias,
        releaseDate: sourceManifest.releaseDate,
        checklistBankDatasetKey: sourceManifest.checklistBankDatasetKey,
        strictPredicate: 'rank=species AND status=accepted',
        sharedSourcesPath: '../registry/sources.json',
        sharedSourcesCount: sourceManifest.sourceChecklists.count,
        sharedSourcesSha256: sha256(sourcesBytes),
      },
      scope: route.scope,
      scopeZh: route.scopeZh,
      disclaimer: route.disclaimer,
      disclaimerZh: route.disclaimerZh,
      browseRootIds: route.ancestorIds,
      acceptedSpeciesCount: records.length,
      missingSourceDatasetId,
      fields: ['id', 'parentId', 'scientificName', 'authorship', 'rank', 'status', 'sourceDatasetId'],
      files,
      ...(extensions.length ? { extensions } : {}),
      totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
      totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
      evidenceBoundary: 'This package preserves official COL26.8 nomenclatural and placement fields only; it does not assert an Evo Atlas dossier, biological evidence, media, fossils, ecology, translation, or expert review.',
    }
    const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
    writeFileSync(join(packageRoot, 'manifest.json'), manifestBytes)
    packs.push({
      packageId: route.id,
      manifestPath: `${route.id}/manifest.json`,
      manifestBytes: manifestBytes.byteLength,
      manifestSha256: sha256(manifestBytes),
      acceptedSpeciesCount: records.length,
      fileCount: files.length,
      totalCompressedBytes: manifest.totalCompressedBytes,
      totalSourceBytes: manifest.totalSourceBytes,
      ...(extensions.length ? {
        ...summarizeExtensions(extensions),
      } : {}),
    })
  }
  const manifest = {
    ...existingCollectionManifest,
    schemaVersion: 1,
    collectionType: 'static-nomenclatural-resource-packs',
    source: {
      releaseAlias: sourceManifest.releaseAlias,
      releaseDate: sourceManifest.releaseDate,
      checklistBankDatasetKey: sourceManifest.checklistBankDatasetKey,
      strictPredicate: 'rank=species AND status=accepted',
      sharedSourcesPath: '../registry/sources.json',
      sharedSourcesCount: sourceManifest.sourceChecklists.count,
      sharedSourcesSha256: sha256(sourcesBytes),
    },
    packageCount: packs.length,
    acceptedSpeciesCount: packs.reduce((sum, pack) => sum + pack.acceptedSpeciesCount, 0),
    packs,
  }
  writeFileSync(join(resourcePacksRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  return manifest
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const sourceManifestPath = join(options.registryRoot, 'manifest.json')
  const sourceManifest = JSON.parse(readFileSync(sourceManifestPath, 'utf8'))
  const archaeaLpsnCrosswalk = loadArchaeaLpsnCrosswalk(options.archaeaLpsnCrosswalk)
  const packageModule = await import(`${pathToFileURL(options.packageDefinitions).href}?sha=${await sha256File(options.packageDefinitions)}`)
  const packageDefinitions = packageModule.packageDefinitions
  const packageIds = new Set(packageDefinitions.map((definition) => definition.id))
  if (packageDefinitions.length !== packageIds.size) throw new Error('Package definitions contain duplicate IDs')

  const nodes = await loadHigherTaxa(options.registryRoot, sourceManifest)
  const { routes, ruleIndexesByAncestorId } = compileRoutes(nodes, packageIds)
  const ownerIds = new Set([...packageIds, ...CATALOGUE_ROUTES.map((route) => route.id)])
  const { packageCounts, proof, resourcePackRecords } = await countOwnership({
    registryRoot: options.registryRoot,
    manifest: sourceManifest,
    nodes,
    routes,
    ruleIndexesByAncestorId,
    ownerIds,
  })

  const expected = sourceManifest.counts.acceptedSpecies
  const packageCountSum = Object.values(packageCounts).reduce((sum, count) => sum + count, 0)
  if (proof.visitedAcceptedSpecies !== expected || proof.assignedSpecies !== expected || packageCountSum !== expected || proof.unmatchedSpecies) {
    throw new Error(`Coverage proof failed: ${JSON.stringify({ expected, packageCountSum, ...proof })}`)
  }
  const resourcePacks = writeResourcePacks({
    resourcePacksRoot: options.resourcePacksRoot,
    registryRoot: options.registryRoot,
    sourceManifest,
    resourcePackRecords,
    packageCounts,
    archaeaLpsnCrosswalk,
  })
  buildBacteriaLpsnSidecar({
    resourcePacksRoot: options.resourcePacksRoot,
    crosswalkPath: options.bacteriaLpsnCrosswalk,
  })
  buildVirusIctvSidecar({
    resourcePacksRoot: options.resourcePacksRoot,
    crosswalkPath: options.virusIctvCrosswalk,
  })
  buildWfoPlantProjections({
    resourcePacksRoot: options.resourcePacksRoot,
    crosswalkPath: options.wfoPlantCrosswalk,
  })
  buildFungiAuthoritySidecar({
    packageRoot: join(options.resourcePacksRoot, 'fungi'),
    crosswalkPath: DEFAULT_FUNGI_AUTHORITY_CROSSWALK,
    descriptorPath: join(options.resourcePacksRoot, 'fungi', 'index-fungorum-extension.json'),
    resourcePacksRoot: options.resourcePacksRoot,
  })

  const routeByOwnerId = new Map(routes.map((route) => [route.packageId, route]))
  const entries = [
    ...packageDefinitions.map((definition) => {
      const route = routeByOwnerId.get(definition.id)
      return {
        id: definition.id,
        kind: 'static-package',
        title: definition.title,
        titleZh: definition.titleZh,
        acceptedSpeciesCount: packageCounts[definition.id],
        browseRootIds: route?.ancestorIds ?? [],
        ...(STATIC_ZERO_REASONS[definition.id] ? { zeroAssignmentReason: STATIC_ZERO_REASONS[definition.id] } : {}),
      }
    }),
    ...CATALOGUE_ROUTES.map((definition) => ({
      id: definition.id,
      kind: definition.kind,
      title: definition.title,
      titleZh: definition.titleZh,
      acceptedSpeciesCount: packageCounts[definition.id],
      browseRootIds: definition.ancestorIds,
      scope: definition.scope,
      scopeZh: definition.scopeZh,
      disclaimer: definition.disclaimer,
      disclaimerZh: definition.disclaimerZh,
      ...(definition.zeroAssignmentReason ? { zeroAssignmentReason: definition.zeroAssignmentReason } : {}),
      ...(definition.kind === 'nomenclatural-resource-pack' ? { resourcePackManifestPath: `data/catalogue-of-life/releases/2026-08-20/resource-packs/${definition.id}/manifest.json` } : {}),
    })),
  ]
  const output = {
    schemaVersion: 1,
    projectionType: 'exclusive-package-ownership-for-strictly-accepted-species',
    source: {
      releaseAlias: sourceManifest.releaseAlias,
      releaseDate: sourceManifest.releaseDate,
      checklistBankDatasetKey: sourceManifest.checklistBankDatasetKey,
      acceptedSpecies: expected,
      strictPredicate: 'rank=species AND status=accepted',
      manifestPath: sourceManifestPath.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/'),
      manifestSha256: await sha256File(sourceManifestPath),
    },
    packageRegistry: {
      schemaVersion: packageModule.PACKAGE_SCHEMA_VERSION,
      datasetPackageVersion: packageModule.DATASET_PACKAGE_VERSION,
      definitionsPath: options.packageDefinitions.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/'),
      definitionsSha256: await sha256File(options.packageDefinitions),
      packageCount: packageDefinitions.length,
    },
    ownershipPolicy: {
      semantics: 'Walk the release-scoped CoL parent lineage, collect exact ancestor-ID rules, and choose the lowest numeric priority.',
      cardinality: 'Exactly one package owner is selected for every strict accepted species.',
      overlapResolution: 'Most-specific teaching routes are ordered before broad clade routes; the first matching route wins.',
      catchAll: 'The four exact CoL roots and their exact kingdom descendants are catalogue-only routes; no unrelated species are assigned to atlas-core.',
      runtimeInput: 'The existing CoL hierarchy/lineage; no per-species ownership table is materialized.',
      disclaimer: OWNERSHIP_DISCLAIMER,
      disclaimerZh: OWNERSHIP_DISCLAIMER_ZH,
    },
    entries,
    resourcePacks: {
      packageCount: resourcePacks.packageCount,
      acceptedSpeciesCount: resourcePacks.acceptedSpeciesCount,
      manifestPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/manifest.json',
    },
    routes: routes.map(({ matchedSpecies, browseRoots, ...route }) => ({ ...route, browseRoots, matchedSpecies })),
    packageCounts,
    proof: {
      expectedAcceptedSpecies: expected,
      ...proof,
      packageCountSum,
      uniqueOwnersByConstruction: proof.assignedSpecies,
    },
    generatedBy: {
      scriptPath: SCRIPT_PATH.slice(REPOSITORY_ROOT.length + 1).replaceAll('\\', '/'),
      scriptSha256: await sha256File(SCRIPT_PATH),
      deterministic: 'No wall-clock fields; sorted source shards, IDs, packages and rule candidates.',
    },
  }
  writeFileSync(options.output, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
  console.log(JSON.stringify({ output: options.output, packageCounts, proof }, null, 2))
}

if (resolve(process.argv[1] ?? '') === SCRIPT_PATH) await main()
