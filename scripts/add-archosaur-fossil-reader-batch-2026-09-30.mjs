import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const checkedAt = '2026-09-30'
const snapshotPath = 'data/sources/snapshots/pbdb-archosauria-accepted-fossil-species-2026-09-30.json'
const snapshot = readJson(snapshotPath)
const pbdbRows = new Map(snapshot.records.map(row => [row.oid, row]))

const targets = [
  {
    id: 'carnufex_carolinensis',
    parentId: 'carnufex',
    packagePath: 'archosauria/crocodylomorphs-birds',
    pbdbTaxonId: 'txn:321717',
    scientificName: 'Carnufex carolinensis',
    story: ['crocodylomorph-bird-evidence-boundaries', 'carnufex-holotype'],
    overview: 'Carnufex carolinensis is documented by partial, skeletally immature holotype NCSM 21558 and referred humerus NCSM 21623. Its estimated size and placement among high-tier terrestrial predators are study reconstructions, not direct evidence of feeding behaviour or ancestry.',
    overviewZh: 'Carnufex carolinensis 由部分保存、尚未成熟的正型标本 NCSM 21558 及归入的肱骨 NCSM 21623 记录。体型估算和高阶陆生捕食者定位属于研究复原，并非直接的摄食行为或祖先关系证据。',
  },
  {
    id: 'asteriornis_maastrichtensis',
    parentId: 'asteriornis',
    packagePath: 'archosauria/crocodylomorphs-birds',
    pbdbTaxonId: 'txn:413465',
    scientificName: 'Asteriornis maastrichtensis',
    story: ['crocodylomorph-bird-evidence-boundaries', 'asteriornis-crown-test'],
    overview: 'Asteriornis maastrichtensis is known from CT-imaged holotype NHMM 2013 008. Its near-galloanseran placement differs between parsimony and tip-dated analyses; this page does not treat it as a settled first appearance of crown birds.',
    overviewZh: 'Asteriornis maastrichtensis 由经 CT 成像的正型标本 NHMM 2013 008 代表。简约法与尖端定年分析对其近鸡雁类的位置并不一致；本页不将它视为现代鸟类冠群最早记录的定论。',
  },
  {
    id: 'ankylosaurus_magniventris',
    parentId: 'ankylosaurus',
    packagePath: 'archosauria/dinosauria',
    pbdbTaxonId: 'txn:52793',
    scientificName: 'Ankylosaurus magniventris',
    overview: 'Ankylosaurus magniventris is documented here through Carpenter’s redescription of named Western Interior material. The page reports skull and armor anatomy from that sample; the source does not resolve feeding, locomotion, or behaviour.',
    overviewZh: '本页依据 Carpenter 对西部内陆地区具名材料的重新描述介绍 Ankylosaurus magniventris，限于该样本的头骨与装甲解剖。所用来源未能判定其食性、运动方式或行为。',
  },
  {
    id: 'buriolestes_schultzi',
    parentId: 'buriolestes',
    packagePath: 'archosauria/dinosauria',
    pbdbTaxonId: 'txn:347522',
    scientificName: 'Buriolestes schultzi',
    story: ['dinosauria-primary-evidence-without-an-ancestor-ladder', 'carnivorous-sauropodomorph'],
    overview: 'Buriolestes schultzi is represented by articulated holotype ULBRA-PVT280. Its recurved, serrated teeth inform a faunivory hypothesis, while both diet reconstruction and phylogenetic position remain analysis-dependent.',
    overviewZh: 'Buriolestes schultzi 由有关节连接的正型标本 ULBRA-PVT280 代表。其弯曲带锯齿的牙齿为动物性食物假说提供依据；食性复原与系统发育位置仍取决于分析方法。',
  },
  {
    id: 'yinlong_downsi',
    parentId: 'yinlong',
    packagePath: 'archosauria/dinosauria',
    pbdbTaxonId: 'txn:90118',
    scientificName: 'Yinlong downsi',
    story: ['dinosauria-primary-evidence-without-an-ancestor-ladder', 'ceratopsian-mosaic'],
    overview: 'Yinlong downsi is known here from nearly complete holotype IVPP V14530. Its preserved anatomy is distinct from its analysis-dependent placement among early ceratopsians; neither result identifies a direct ancestor.',
    overviewZh: '本页依据近乎完整的正型标本 IVPP V14530 介绍 Yinlong downsi。保存的解剖特征与其在早期角龙类中的分析性定位分开呈现；两者都不能据此确定直接祖先。',
  },
  {
    id: 'yutyrannus_huali',
    parentId: 'yutyrannus',
    packagePath: 'archosauria/dinosauria',
    pbdbTaxonId: 'txn:230947',
    scientificName: 'Yutyrannus huali',
    story: ['dinosauria-primary-evidence-without-an-ancestor-ladder', 'large-bodied-filaments'],
    overview: 'Yutyrannus huali is represented by three nearly complete skeletons from the Yixian Formation. Filamentous integument is preserved, but its colour, full-body coverage, function, behaviour, and locomotor performance are not directly observed.',
    overviewZh: 'Yutyrannus huali 由义县组的三具近乎完整骨架代表。化石保存了丝状体表结构，但其颜色、全身覆盖范围、功能、行为和运动表现并未被直接观察。',
  },
]

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function appendUnique(items, value, key = item => item.id ?? item) {
  const existing = items.find(item => key(item) === key(value))
  if (existing) assert.deepEqual(existing, value, `Conflicting record for ${key(value)}`)
  else items.push(value)
}

function findNode(node, id) {
  if (node.id === id) return node
  for (const child of node.children ?? []) {
    const found = findNode(child, id)
    if (found) return found
  }
  return null
}

function appendAfterOrAtEnd(values, anchor, value) {
  if (values.includes(value)) return
  const index = values.indexOf(anchor)
  if (index === -1) values.push(value)
  else values.splice(index + 1, 0, value)
}

function appendTsArrayEntries(path, entries, allowDuplicateValues = false) {
  const source = readFileSync(path, 'utf8')
  const present = entries.map(entry => source.includes(JSON.stringify(entry)) || source.includes(`'${entry.replaceAll("'", "\\'")}'`))
  if (present.every(Boolean)) return []
  const arrayEnd = source.lastIndexOf('\n] as const')
  assert.notEqual(arrayEnd, -1, `Missing translation array in ${path}`)
  const inserted = allowDuplicateValues ? entries : entries.filter((_entry, index) => !present[index])
  const rendered = inserted.map(entry => `  ${JSON.stringify(entry)},`).join('\n')
  writeFileSync(path, `${source.slice(0, arrayEnd)}\n${rendered}${source.slice(arrayEnd)}`, 'utf8')
  return inserted
}

function appendLocaleStrings(path, entries) {
  const locale = readJson(path)
  for (const [key, value] of Object.entries(entries)) {
    if (Object.hasOwn(locale.strings, key)) assert.equal(locale.strings[key], value, `Conflicting locale string ${key}`)
    else locale.strings[key] = value
  }
  writeJson(path, locale)
}

const ontology = readJson('data/navigation/atlas-ontology.json')
const ranges = readJson('data/ranges/range-evidence.json')
const taxonResolution = readJson('data/sources/pbdb-taxon-resolution.json')
const resolutionById = new Map(taxonResolution.resolutions.map(entry => [entry.entityId, entry]))
const pageLocales = new Map()
const rangeRecords = []
const resolutionRecords = []
const speciesPages = []

for (const target of targets) {
  const pbdbRow = pbdbRows.get(target.pbdbTaxonId)
  assert.ok(pbdbRow, `PBDB OID is absent from the frozen accepted-fossil roster: ${target.pbdbTaxonId}`)
  assert.equal(pbdbRow.rnk, 'species', `${target.pbdbTaxonId}: expected species rank`)
  assert.equal(pbdbRow.nam, target.scientificName, `${target.pbdbTaxonId}: accepted name changed`)
  assert.equal(pbdbRow.ext, '0', `${target.pbdbTaxonId}: expected non-extant record`)

  const packageDir = `data/packages/${target.packagePath}`
  const profilePath = `${packageDir}/profiles.source.json`
  const profiles = readJson(profilePath)
  const parentProfile = profiles.find(profile => profile.id === target.parentId)
  assert.ok(parentProfile, `Missing source profile ${target.parentId}`)
  assert.equal(pbdbRow.par, parentProfile.pbdbTaxonId, `${target.scientificName}: PBDB parent OID differs from the existing genus profile`)

  const parentNode = findNode(ontology, target.parentId)
  assert.ok(parentNode, `Missing taxonomy node ${target.parentId}`)
  assert.equal(parentNode.rank, 'genus', `${target.parentId}: expected genus parent`)
  const parentResolution = resolutionById.get(target.parentId)
  assert.equal(parentResolution?.resolutionStatus, 'resolved', `${target.parentId}: PBDB parent must already be resolved`)
  assert.equal(parentResolution.pbdbId, parentProfile.pbdbTaxonId, `${target.parentId}: profile and resolution IDs differ`)

  const speciesProfile = structuredClone(parentProfile)
  Object.assign(speciesProfile, {
    id: target.id,
    treeNodeId: target.id,
    pbdbTaxonId: target.pbdbTaxonId,
    scientificName: target.scientificName,
    rank: 'species',
    parentName: parentProfile.scientificName,
    overview: target.overview,
  })
  appendUnique(profiles, speciesProfile)
  writeJson(profilePath, profiles)
  speciesPages.push({ target, parentProfile })

  const node = {
    id: target.id,
    name: target.scientificName,
    commonName: parentProfile.commonName,
    commonNameZh: parentProfile.commonNameZh,
    rank: 'species',
    taxonId: target.pbdbTaxonId,
    firstAppearance: 0,
    lastAppearance: 0,
    rangeEvidenceLevel: 'withheld-no-range-evidence',
    extinct: true,
    children: [],
    parentRelationshipKind: 'taxonomic-parent',
    entityKind: 'taxon',
    contentLevel: 'dossier',
  }
  appendUnique(parentNode.children, node)

  const range = {
    id: `range:${target.id}:global`,
    entityId: target.id,
    rangeKind: 'global-composite',
    taxonomicConcept: `PBDB accepted fossil species ${target.pbdbTaxonId} (${target.scientificName}); profile scope is the cited specimen record, not a global range synthesis`,
    geographicScope: `Named source locality only; no complete global geographic-temporal range is assigned`,
    olderMa: 0,
    youngerMa: 0,
    status: 'withheld-pending-provenance',
    uncertainty: { olderMa: null, youngerMa: null, note: 'Zero values are non-display placeholders; the cited specimen study does not establish a complete global first and last appearance range.' },
    evidenceBasis: `The frozen PBDB roster supports accepted name, rank, OID and immediate parent. The selected literature supports the described specimen evidence, not a complete global range for ${target.scientificName}.`,
    evidenceLevel: 'withheld-no-range-evidence',
    confidence: 'low',
    claimIds: [],
    referenceLocators: parentProfile.referenceIds.map(referenceId => ({ referenceId, locator: 'Cited named specimen and locality; no complete global range is claimed.' })),
    reviewStatus: 'not-reviewed',
  }
  appendUnique(ranges, range)
  rangeRecords.push(range)

  const resolution = {
    entityId: target.id,
    localName: target.scientificName,
    localRank: 'species',
    previousPbdbId: null,
    resolutionStatus: 'resolved',
    resolutionReason: 'resolved-exact-name-rank-and-parent-in-frozen-PBDB-accepted-fossil-roster',
    externalResolutionStatus: 'resolved-exact',
    pbdbId: target.pbdbTaxonId,
    candidatePbdbId: target.pbdbTaxonId,
    acceptedName: target.scientificName,
    acceptedRank: 'species',
    matchedTaxonName: target.scientificName,
    pbdbParentName: parentProfile.scientificName,
    pbdbClassification: structuredClone(parentResolution.pbdbClassification),
    resolvedName: target.scientificName,
    resolvedRank: 'species',
    resolvedImmediateParent: parentProfile.scientificName,
    resolvedClassification: structuredClone(parentResolution.resolvedClassification),
    resolvedAncestorChain: [
      { pbdbId: parentProfile.pbdbTaxonId, name: parentProfile.scientificName },
      ...structuredClone(parentResolution.resolvedAncestorChain),
    ],
    localExpectedParentConcept: parentProfile.scientificName,
    parentRelationshipKind: 'taxonomic-parent',
    lineageCompatibility: 'compatible-ancestor-chain',
    conceptReviewStatus: 'compatible',
    automatedRecommendation: 'accept-external-mapping',
    humanCuratorDecision: null,
    curatorRationale: null,
    curatorReviewedAt: null,
    curatorReviewer: null,
    occurrenceCount: Number(pbdbRow.noc),
    referenceNo: pbdbRow.rid,
    snapshotModifiedAt: null,
  }
  appendUnique(taxonResolution.resolutions, resolution, entry => entry.entityId)
  resolutionRecords.push(resolution)

  const localePath = `${packageDir}/locales/zh.json`
  if (!pageLocales.has(localePath)) pageLocales.set(localePath, {})
  pageLocales.get(localePath)[`entity.${target.id}.name`] = parentProfile.commonNameZh
  pageLocales.get(localePath)[`profile.${target.id}.name`] = parentProfile.commonNameZh
}

writeJson('data/navigation/atlas-ontology.json', ontology)
writeJson('data/ranges/range-evidence.json', ranges)
taxonResolution.generatedAt = checkedAt
taxonResolution.summary.ontologyNodes = taxonResolution.resolutions.length
taxonResolution.summary.unresolved = taxonResolution.resolutions.filter(entry => entry.resolutionStatus !== 'resolved').length
taxonResolution.summary.resolved = taxonResolution.resolutions.filter(entry => entry.resolutionStatus === 'resolved').length
taxonResolution.summary.needsConceptReview = taxonResolution.resolutions.filter(entry => entry.conceptReviewStatus === 'needs-concept-review').length
taxonResolution.summary.humanCuratorDecisions = taxonResolution.resolutions.filter(entry => entry.humanCuratorDecision).length
writeJson('data/sources/pbdb-taxon-resolution.json', taxonResolution)

const stories = readJson('data/stories.json')
for (const { target } of speciesPages) {
  if (!target.story) continue
  const [storyId, stepId] = target.story
  const story = stories.find(entry => entry.id === storyId)
  const step = story?.steps.find(entry => entry.id === stepId)
  assert.ok(step, `Missing reading-path step ${storyId}/${stepId}`)
  appendAfterOrAtEnd(step.taxonIds, target.parentId, target.id)
}
writeJson('data/stories.json', stories)

const preview = readJson('data/pages-preview.json')
for (const { target } of speciesPages) {
  appendAfterOrAtEnd(preview.taxonIds, target.parentId, target.id)
}
const crocBirdStory = stories.find(story => story.id === 'crocodylomorph-bird-evidence-boundaries')
assert.ok(crocBirdStory, 'Missing crocodylomorph-bird evidence reading path')
appendAfterOrAtEnd(preview.packageIds, 'dinosauria', 'crocodylomorphs-birds')
const previewStoryIds = new Set([
  ...speciesPages.map(({ target }) => target.story?.[0]).filter(Boolean),
  crocBirdStory.id,
])
for (const storyId of previewStoryIds) {
  const story = stories.find(entry => entry.id === storyId)
  assert.ok(story, `Missing selected reading path ${storyId}`)
  appendAfterOrAtEnd(preview.storyIds, 'dinosauria-primary-evidence-without-an-ancestor-ladder', storyId)
  preview.storyTaxonIds[storyId] = [...new Set(story.steps.flatMap(step => step.taxonIds))]
  for (const id of preview.storyTaxonIds[storyId]) appendAfterOrAtEnd(preview.taxonIds, 'dinosauria', id)
}
for (const step of crocBirdStory.steps) {
  if (step.eventId) appendAfterOrAtEnd(preview.eventIds, 'dinosaur-radiation', step.eventId)
}
writeJson('data/pages-preview.json', preview)

const sharedTranslations = new Map([
  [
    'A Carnian sauropodomorph represented by the articulated holotype ULBRA-PVT280; its anatomy and faunivory inference are kept distinct from the study\'s topology-dependent reconstruction of ancestral diet.',
    '该项研究将有关节连接的正型标本 ULBRA-PVT280 作为卡尼期蜥脚形类来描述；其解剖和动物性食物推断与基于系统发育拓扑重建的祖先食性分开呈现。',
  ],
  [
    'Faunivorous early sauropodomorph in the study\'s character-based reconstruction',
    '在该研究基于性状的重建中，被解释为食动物的早期蜥脚形类。',
  ],
  [
    'A Late Jurassic ceratopsian represented by the nearly complete holotype IVPP V14530 from the upper Shishugou Formation; its position in the study\'s character matrix is a test result, not an uncontested ancestry claim.',
    '该晚侏罗世角龙类由上部石树沟组近乎完整的正型标本 IVPP V14530 代表；它在研究性状矩阵中的位置是分析结果，并非无争议的祖先关系结论。',
  ],
  [
    'The named skeletons, Yixian Formation provenance and preserved filamentous integument are direct evidence. Their colour, complete body coverage, insulation or display function, behaviour and performance are not directly observed; phylogenetic position depends on the study\'s sampled analysis.',
    '具名骨架、义县组产地和保存下来的丝状体表结构属于直接证据。颜色、全身覆盖范围、保温或展示功能、行为与运动表现均未被直接观察；系统发育位置取决于该研究的取样分析。',
  ],
  [
    'Approximately 3 m in the study\'s reconstruction, with an immature femur-length estimate of 354–441 mm',
    '该研究复原的体长约为 3 米；未成年个体的股骨长度估算为 354–441 毫米。',
  ],
  [
    'Mean body-mass estimate of 394 g from the study\'s skeletal scaling model',
    '根据该研究的骨骼尺度模型，平均体重估算为 394 克。',
  ],
])
for (const { target } of speciesPages) sharedTranslations.set(target.overview, target.overviewZh)
const translationKeys = [...sharedTranslations.keys()]
const addedTranslationKeys = appendTsArrayEntries('src/i18n/atlasArchosaurDeepeningZhKeys.ts', translationKeys)
if (addedTranslationKeys.length) {
  appendTsArrayEntries('src/i18n/atlasArchosaurDeepeningZh.ts', addedTranslationKeys.map(key => sharedTranslations.get(key)), true)
}

for (const [path, strings] of pageLocales) appendLocaleStrings(path, strings)

console.log(JSON.stringify({
  addedSpeciesPages: speciesPages.map(({ target }) => ({ id: target.id, pbdbTaxonId: target.pbdbTaxonId, parentId: target.parentId })),
  addedWithheldRanges: rangeRecords.length,
  addedExactPbdbResolutions: resolutionRecords.length,
  addedReaderPathLinks: speciesPages.filter(({ target }) => target.story).length,
  globalRanges: 'withheld for all six species',
}, null, 2))
