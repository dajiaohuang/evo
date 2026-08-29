import { createHash } from 'node:crypto'
import { createReadStream, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createGunzip } from 'node:zlib'
import { createInterface } from 'node:readline'

const SCRIPT_PATH = fileURLToPath(import.meta.url)
const REPOSITORY_ROOT = resolve(dirname(SCRIPT_PATH), '..')
const DEFAULT_REGISTRY_ROOT = join(REPOSITORY_ROOT, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'registry')
const DEFAULT_PACKAGE_DEFINITIONS = join(REPOSITORY_ROOT, 'scripts', 'package-definitions.mjs')
const DEFAULT_OUTPUT = join(REPOSITORY_ROOT, 'data', 'registry', 'package-species-coverage.json')

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
    id: 'viruses', title: 'Viruses', titleZh: '病毒', ancestorIds: ['92e52ff4-2dc6-4b35-9339-2e92035b8daf'],
    scope: 'Strict accepted species descending from the exact COL26.8 Viruses root.',
    scopeZh: '固定 COL26.8 中精确 Viruses 根节点下的严格接受种。',
    disclaimer: 'This browse scope follows the pinned Catalogue of Life treatment of virus species and does not resolve debates over whether viruses are living organisms.',
    disclaimerZh: '该浏览范围遵循固定版生命物种名录对病毒种的处理，不对“病毒是否属于生命”的争议作出结论。',
  },
  {
    id: 'archaea', title: 'Archaea', titleZh: '古菌域', ancestorIds: ['CRLT8'],
    scope: 'Strict accepted species descending from the exact COL26.8 Archaea domain root.',
    scopeZh: '固定 COL26.8 中精确古菌域根节点下的严格接受种。',
    disclaimer: 'Counts reflect accepted names in this release, not environmental lineage diversity or uncultured archaeal diversity.',
    disclaimerZh: '计数反映该版本的接受学名，不代表环境谱系或未培养古菌的完整多样性。',
  },
  {
    id: 'bacteria', title: 'Bacteria', titleZh: '细菌域', ancestorIds: ['CRRY6'],
    scope: 'Strict accepted species descending from the exact COL26.8 Bacteria domain root.',
    scopeZh: '固定 COL26.8 中精确细菌域根节点下的严格接受种。',
    disclaimer: 'Counts reflect accepted names in this release, not environmental lineage diversity, metagenomic diversity or uncultured bacterial diversity.',
    disclaimerZh: '计数反映该版本的接受学名，不代表环境谱系、宏基因组或未培养细菌的完整多样性。',
  },
  {
    id: 'fungi', title: 'Fungi', titleZh: '真菌界', ancestorIds: ['F'],
    scope: 'Strict accepted species descending from the exact COL26.8 Fungi kingdom root.',
    scopeZh: '固定 COL26.8 中精确真菌界根节点下的严格接受种。',
    disclaimer: 'This is a catalogue browse owner, not a claim that fungal taxonomy or described fungal diversity is complete.',
    disclaimerZh: '这是名录浏览归属，不表示真菌分类或已描述的真菌多样性已完整。',
  },
  {
    id: 'protists-chromists', title: 'Protists and Chromists', titleZh: '原生生物与色界生物', ancestorIds: ['C', 'Z'],
    scope: 'Strict accepted species descending from the exact COL26.8 Chromista or Protozoa kingdom roots.',
    scopeZh: '固定 COL26.8 中精确色界或原生动物界根节点下的严格接受种。',
    disclaimer: 'The combined browse owner is operational and does not assert that Chromista and Protozoa form one clade or reflect a universally accepted kingdom system.',
    disclaimerZh: '该合并浏览归属只是操作性分组，不声称色界与原生动物界构成同一演化支，也不代表该界系统获得普遍接受。',
  },
  {
    id: 'other-plants', title: 'Other Plants', titleZh: '其他植物', ancestorIds: ['P'],
    scope: 'Strict accepted species below the exact COL26.8 Plantae kingdom root that are not claimed by the flowering-plant, gymnosperm or named early-land-plant routes.',
    scopeZh: '固定 COL26.8 中精确植物界根节点下，且未被被子植物、裸子植物或指定早期陆生植物路由接收的严格接受种。',
    disclaimer: '“Other” is the deterministic remainder of this release and may combine unrelated plant or algal lineages; it is not a taxonomic clade.',
    disclaimerZh: '“其他”是该版本的确定性余集，可能合并无直接亲缘关系的植物或藻类谱系，并非分类学演化支。',
  },
  {
    id: 'other-animals', title: 'Other Animals', titleZh: '其他动物', ancestorIds: ['N'],
    scope: 'Strict accepted species below the exact COL26.8 Animalia kingdom root that are not claimed by a more specific static-package route.',
    scopeZh: '固定 COL26.8 中精确动物界根节点下，且未被更具体静态内容包路由接收的严格接受种。',
    disclaimer: '“Other” is the deterministic remainder of this release and combines many unrelated animal phyla; it is not a taxonomic clade.',
    disclaimerZh: '“其他”是该版本的确定性余集，合并了多个无直接亲缘关系的动物门，并非分类学演化支。',
  },
  {
    id: 'other-eukaryotes',
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
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--registry-root') options.registryRoot = resolve(argv[++index])
    else if (value === '--package-definitions') options.packageDefinitions = resolve(argv[++index])
    else if (value === '--output') options.output = resolve(argv[++index])
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
    kind: 'catalogue-only',
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
      proof.assignedSpecies += 1
    })
  }
  return { packageCounts, proof }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }
  const sourceManifestPath = join(options.registryRoot, 'manifest.json')
  const sourceManifest = JSON.parse(readFileSync(sourceManifestPath, 'utf8'))
  const packageModule = await import(`${pathToFileURL(options.packageDefinitions).href}?sha=${await sha256File(options.packageDefinitions)}`)
  const packageDefinitions = packageModule.packageDefinitions
  const packageIds = new Set(packageDefinitions.map((definition) => definition.id))
  if (packageDefinitions.length !== packageIds.size) throw new Error('Package definitions contain duplicate IDs')

  const nodes = await loadHigherTaxa(options.registryRoot, sourceManifest)
  const { routes, ruleIndexesByAncestorId } = compileRoutes(nodes, packageIds)
  const ownerIds = new Set([...packageIds, ...CATALOGUE_ROUTES.map((route) => route.id)])
  const { packageCounts, proof } = await countOwnership({
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
      kind: 'catalogue-only',
      title: definition.title,
      titleZh: definition.titleZh,
      acceptedSpeciesCount: packageCounts[definition.id],
      browseRootIds: definition.ancestorIds,
      scope: definition.scope,
      scopeZh: definition.scopeZh,
      disclaimer: definition.disclaimer,
      disclaimerZh: definition.disclaimerZh,
      ...(definition.zeroAssignmentReason ? { zeroAssignmentReason: definition.zeroAssignmentReason } : {}),
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

await main()
