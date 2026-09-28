import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const today = '2026-09-28'
const sourcePath = 'data/sources/priority-primate-evidence-batch-2026-09-28.json'
const manifestPath = 'data/knowledge/priority-primate-evidence-batch-2026-09-28.update-manifest.json'
const dossierIndexPath = 'data/knowledge/catalogue-dossier-shards.json'
const queueManifestPath = 'data/knowledge/species-evidence-queue/manifest.json'
const selectorPath = 'data/pages-preview.json'
const checkFinalize = process.argv.includes('--finalize')
const hash = value => createHash('sha256').update(value).digest('hex')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
const inputBytes = readFileSync(sourcePath)
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, 'priority-primate-evidence-batch-2026-09-28')
assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.checkedAt, today)
assert.deepEqual(input.targets.map(item => item.colId), ['6MB3T', '3WWNQ'])

const manifestBefore = existsSync(manifestPath) ? readJson(manifestPath) : null
const dossierIndex = readJson(dossierIndexPath)
const selectorBytes = readFileSync(selectorPath)
const selector = JSON.parse(selectorBytes.toString('utf8'))
const queueManifestBytes = readFileSync(queueManifestPath)
const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
assert.equal(queueManifest.notIncludedInRuntime, true, 'The full species evidence queue must stay outside runtime packages')
for (const taxonId of input.runtimeSelection.selectedTaxonIds) {
  assert.ok(selector.taxonIds.includes(taxonId), `${taxonId} must remain in the shared App/Pages selector`)
}

function closingDelimiter(source, start, opening, closing) {
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = start; index < source.length; index += 1) {
    const character = source[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quoted = false
      continue
    }
    if (character === '"') quoted = true
    else if (character === opening) depth += 1
    else if (character === closing && --depth === 0) return index
  }
  throw new Error(`Unclosed ${opening}`)
}

function appendArrayRecords(path, values, identity = value => value.id ?? value) {
  let source = readFileSync(path, 'utf8')
  const current = JSON.parse(source)
  assert.ok(Array.isArray(current), `${path} must contain an array`)
  for (const value of values) {
    const existing = current.find(item => identity(item) === identity(value))
    if (existing) assert.deepEqual(existing, value, `${path} has a conflicting ${identity(value)}`)
  }
  const missing = values.filter(value => !current.some(existing => identity(existing) === identity(value)))
  if (!missing.length) return
  const arrayStart = source.indexOf('[')
  const arrayEnd = closingDelimiter(source, arrayStart, '[', ']')
  const inner = source.slice(arrayStart + 1, arrayEnd)
  const nonWhitespace = inner.trimEnd()
  const closeLineStart = source.lastIndexOf('\n', arrayEnd) + 1
  const closingIndent = source.slice(closeLineStart, arrayEnd).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${closingIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const rendered = missing.map(value => JSON.stringify(value, null, 2)
    .replaceAll('\n', `${newline}${itemIndent}`)
    .replace(/^/u, itemIndent)).join(`,${newline}`)
  const insertion = `${nonWhitespace ? ',' : ''}${newline}${rendered}${newline}${closingIndent}`
  source = `${source.slice(0, arrayStart + 1)}${inner.trimEnd()}${insertion}${source.slice(arrayEnd)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}

function arrayItemEnd(source, start) {
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = start; index < source.length; index += 1) {
    const character = source[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quoted = false
      continue
    }
    if (character === '"') quoted = true
    else if (character === '{' || character === '[') depth += 1
    else if (character === '}' || character === ']') {
      depth -= 1
      if (depth === 0) return index + 1
    }
  }
  throw new Error('Unclosed JSON array value')
}

function replaceArrayRecord(path, property, value) {
  let source = readFileSync(path, 'utf8')
  const values = JSON.parse(source)
  assert.ok(Array.isArray(values), `${path} must contain an array`)
  const matches = values.filter(item => item[property] === value[property])
  assert.equal(matches.length, 1, `${path} must contain exactly one ${property}=${value[property]}`)
  const arrayStart = source.indexOf('[')
  let cursor = arrayStart + 1
  let replacement
  for (let itemIndex = 0; itemIndex < values.length; itemIndex += 1) {
    while (cursor < source.length && /[\s,]/u.test(source[cursor])) cursor += 1
    const start = cursor
    const end = arrayItemEnd(source, start)
    const existing = JSON.parse(source.slice(start, end))
    if (existing[property] === value[property]) {
      const lineStart = source.lastIndexOf('\n', start - 1) + 1
      const indent = source.slice(lineStart, start)
      const newline = source.includes('\r\n') ? '\r\n' : '\n'
      replacement = { start, end, text: JSON.stringify(value, null, 2).replaceAll('\n', `${newline}${indent}`) }
      break
    }
    cursor = end
  }
  assert.ok(replacement, `Missing ${property}=${value[property]} in ${path}`)
  source = `${source.slice(0, replacement.start)}${replacement.text}${source.slice(replacement.end)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}

function upsertArrayRecords(path, values, identity = value => value.id ?? value) {
  const current = readJson(path)
  assert.ok(Array.isArray(current), `${path} must contain an array`)
  for (const value of values) {
    const key = identity(value)
    const existing = current.find(item => identity(item) === key)
    if (!existing) appendArrayRecords(path, [value], identity)
    else if (JSON.stringify(existing) === JSON.stringify(value)) continue
    else replaceArrayRecord(path, 'id', value)
  }
}

function appendObjectEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const current = JSON.parse(source)
  const missing = Object.entries(entries).filter(([key, value]) => {
    if (!Object.hasOwn(current, key)) return true
    assert.equal(current[key], value, `${path} has a conflicting ${key}`)
    return false
  })
  if (!missing.length) return
  const closingIndex = source.lastIndexOf('}')
  assert.ok(closingIndex >= 0, `Missing object close in ${path}`)
  const closeLineStart = source.lastIndexOf('\n', closingIndex) + 1
  const closingIndent = source.slice(closeLineStart, closingIndex).match(/^\s*/u)?.[0] ?? ''
  const itemIndent = `${closingIndent}  `
  const newline = source.includes('\r\n') ? '\r\n' : '\n'
  const inner = source.slice(source.indexOf('{') + 1, closingIndex)
  const rendered = missing.map(([key, value]) => {
    const serialized = JSON.stringify(value, null, 2).replaceAll('\n', `${newline}${itemIndent}`)
    return `${itemIndent}${JSON.stringify(key)}: ${serialized}`
  }).join(`,${newline}`)
  source = `${source.slice(0, closingIndex).trimEnd()}${inner.trimEnd() ? ',' : ''}${newline}${rendered}${newline}${closingIndent}${source.slice(closingIndex)}`
  JSON.parse(source)
  writeFileSync(path, source, 'utf8')
}

function appendTsDictionaryEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const missing = Object.entries(entries).filter(([key, value]) => {
    const existing = source.split('\n').find(line => line.trim().startsWith(`'${key}':`) || line.trim().startsWith(`"${key}":`))
    if (!existing) return true
    assert.equal(existing.trim(), `'${key}': '${value}',`, `Conflicting translation for ${key}`)
    return false
  })
  if (!missing.length) return
  const objectEnd = source.lastIndexOf('\n}')
  assert.ok(objectEnd >= 0, `Missing dictionary close in ${path}`)
  source = `${source.slice(0, objectEnd)}\n${missing.map(([key, value]) => `  '${key}': '${value}',`).join('\n')}${source.slice(objectEnd)}`
  writeFileSync(path, source, 'utf8')
}

function appendTsSetEntries(path, entries) {
  let source = readFileSync(path, 'utf8')
  const missing = entries.filter(key => !source.split('\n').some(line => line.trim() === `${JSON.stringify(key)},`))
  if (!missing.length) return
  const setEnd = source.lastIndexOf('])')
  assert.ok(setEnd >= 0, `Missing translation set close in ${path}`)
  source = `${source.slice(0, setEnd)}${missing.map(key => `  ${JSON.stringify(key)},`).join('\n')}\n${source.slice(setEnd)}`
  writeFileSync(path, source, 'utf8')
}

function updateDossier(dossier, target) {
  assert.equal(dossier.colId, target.colId)
  assert.equal(dossier.scientificName, target.scientificName)
  assert.equal(dossier.rank, 'species')
  assert.equal(String(dossier.sourceDatasetId), target.sourceDatasetId)
  assert.equal(dossier.completeness.status, 'incomplete')
  assert.equal(dossier.expertReview.status, 'not-reviewed')
  const sourceIds = new Set(dossier.sources.map(item => item.id))
  assert.equal(sourceIds.size, dossier.sources.length, 'Source IDs must be unique')
  const existingSource = dossier.sources.find(item => item.id === target.source.id)
  if (existingSource) assert.deepEqual(existingSource, target.source, `Conflicting source ${target.source.id}`)
  else {
    assert.ok(!dossier.sources.some(item => item.stableId === target.source.stableId), `Duplicate source DOI ${target.source.stableId}`)
    dossier.sources.push(target.source)
  }
  const facet = dossier.facets[target.facet]
  assert.ok(facet, `Missing ${target.facet} facet for ${target.colId}`)
  const existingClaim = facet.claims?.find(item => item.sourceIds?.includes(target.source.id))
  if (existingClaim) assert.deepEqual(existingClaim, target.claim, `Conflicting claim from ${target.source.id}`)
  else facet.claims = [...(facet.claims ?? []), target.claim]
  dossier.facets[target.facet] = { status: 'partially-supported', claims: facet.claims, gaps: target.gaps }
  assert.ok(dossier.facets[target.facet].gaps.length > 0, 'Partial facets must retain explicit gaps')
  assert.ok(target.claim.locator && target.claim.placeTimeScope && target.claim.lifeStatus)
  assert.ok(target.claim.sourceIds?.length && target.claim.sourceIds.every(id => dossier.sources.some(source => source.id === id)))
  assert.equal(target.claim.translationStatus, 'translated')
  assert.ok(target.claim.textZh)
  dossier.checkedAt = today
  if (target.colId === '6MB3T') {
    dossier.identity.scope = 'Exact accepted COL26.8 species usage 6MB3T. Biological evidence is limited to the selected ancient southern African genomic sample, the Tam Pà Ling fossils, and the early human isotope sample from Ilsenhöhle at Ranis; none is generalized to all human populations or to a complete species history.'
    dossier.completeness.reasons = [
      'The dossier combines a sample-bounded genomic study, specimen-limited morphology, one site-limited fossil chronology, and a cave-specific isotope study; it is not a systematic species-wide synthesis.',
      'Life history and formal conservation assessment remain unassessed. Ecology has one archaeological cave isotope study; distribution, evolution, morphology and fossil coverage remain partial.',
      'A systematic current literature review and independent expert review have not been completed.',
    ]
  } else {
    const scopeAddition = ' A new conservation source concerns road mortality on one 11-km NH-7 segment in Madhya Pradesh during 2009–2010; it does not establish a species-wide mortality rate or conservation category.'
    if (!dossier.identity.scope.includes(scopeAddition)) dossier.identity.scope += scopeAddition
    dossier.completeness.reasons = [
      'The dossier contains site-specific population-genomic, ecology, high-ranking-male life-history, Cayo Santiago morphology and selection evidence, plus one 11-km roadside mortality study; each finding is limited to its sample, measured traits, place or study period.',
      'Fossil evidence, morphological variation across the species range, formal conservation status, population-level road mortality and systematic coverage of the accepted species concept remain incomplete or unassessed.',
      'Independent external expert review has not been completed.',
    ]
  }
  return dossier
}

const shardConfigs = [
  {
    targetIds: ['6MB3T'],
    rawPath: 'data/knowledge/raw-dossiers/primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl',
    shardPath: 'data/knowledge/catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl.br',
    batchManifestPath: 'data/knowledge/catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.batch-manifest.json',
  },
  {
    targetIds: ['3WWNQ'],
    rawPath: 'data/knowledge/raw-dossiers/primates-dossiers-batch-3.jsonl',
    shardPath: 'data/knowledge/catalogue-dossiers-primates-batch-3.jsonl.br',
    metadataPath: 'data/knowledge/catalogue-dossiers-primates-batch-3.metadata.json',
  },
]

function updateShard(config) {
  const rawBefore = readFileSync(config.rawPath)
  const compressedBefore = readFileSync(config.shardPath)
  const decodedBefore = brotliDecompressSync(compressedBefore)
  assert.deepEqual(decodedBefore, rawBefore, `Raw dossier and indexed shard differ before update: ${config.shardPath}`)
  const lines = rawBefore.toString('utf8').trimEnd().split(/\r?\n/u)
  const rows = lines.map(line => JSON.parse(line))
  assert.equal(new Set(rows.map(row => row.colId)).size, rows.length, 'Raw dossier shard contains duplicate COL IDs')
  let changed = 0
  const updatedLines = rows.map((row, index) => {
    if (!config.targetIds.includes(row.colId)) return lines[index]
    const target = input.targets.find(item => item.colId === row.colId)
    assert.ok(target, `Missing input for ${row.colId}`)
    changed += 1
    return JSON.stringify(updateDossier(row, target))
  })
  assert.equal(changed, config.targetIds.length, 'Every expected dossier must appear once in its raw shard')
  const rawAfter = Buffer.from(`${updatedLines.join('\n')}\n`, 'utf8')
  const compressedAfter = brotliCompressSync(rawAfter, { params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  } })
  assert.deepEqual(brotliDecompressSync(compressedAfter), rawAfter, 'Brotli dossier round trip must be byte-exact')
  const indexEntry = dossierIndex.shards.find(item => item.path === config.shardPath)
  assert.ok(indexEntry, `Missing dossier index entry for ${config.shardPath}`)
  const before = { rawSha256: hash(rawBefore), decodedSha256: hash(decodedBefore), compressedSha256: hash(compressedBefore) }
  indexEntry.decodedSha256 = hash(rawAfter)
  indexEntry.compressedSha256 = hash(compressedAfter)

  if (config.metadataPath) {
    const metadata = readJson(config.metadataPath)
    assert.equal(metadata.path, config.shardPath)
    assert.equal(metadata.rawPath, config.rawPath)
    const existing = (metadata.supplementalUpdates ?? []).find(item => item.batchId === input.batchId)
    const supplementalUpdate = {
      batchId: input.batchId,
      sourcePath,
      sourceSha256: hash(inputBytes),
      generator: 'scripts/update-priority-primate-evidence-batch-2026-09-28.mjs',
      checkedAt: today,
      targetColIds: config.targetIds,
      previousDecodedSha256: existing?.previousDecodedSha256 ?? before.decodedSha256,
      previousCompressedSha256: existing?.previousCompressedSha256 ?? before.compressedSha256,
      decodedSha256: hash(rawAfter),
      compressedSha256: hash(compressedAfter),
      mode: 'in-place-add-local-road-mortality-evidence-to-existing-macaca-mulatta-record',
    }
    if (existing) {
      assert.equal(existing.previousDecodedSha256, supplementalUpdate.previousDecodedSha256, 'Macaca supplemental update baseline changed')
      metadata.supplementalUpdates = metadata.supplementalUpdates.map(item => item.batchId === input.batchId ? supplementalUpdate : item)
    } else metadata.supplementalUpdates.push(supplementalUpdate)
    metadata.rawSha256 = hash(rawAfter)
    metadata.decodedSha256 = hash(rawAfter)
    metadata.compressedSha256 = hash(compressedAfter)
    metadata.decodedBytes = rawAfter.length
    metadata.compressedBytes = compressedAfter.length
    metadata.checkedAt = today
    config.metadataAfter = `${JSON.stringify(metadata, null, 2)}\n`
  }
  if (config.batchManifestPath) {
    const manifest = readJson(config.batchManifestPath)
    manifest.input = { path: config.rawPath, bytes: rawAfter.length, sha256: hash(rawAfter) }
    manifest.shard = {
      path: config.shardPath,
      encoding: 'brotli-jsonl',
      recordCount: rows.length,
      decodedBytes: rawAfter.length,
      decodedSha256: hash(rawAfter),
      compressedBytes: compressedAfter.length,
      compressedSha256: hash(compressedAfter),
      brotliParameters: { mode: 'text', quality: 11 },
      roundTrip: 'exact-byte-match',
    }
    manifest.lastIncrementalUpdate = {
      batchId: input.batchId,
      sourceStableIds: input.targets.filter(item => config.targetIds.includes(item.colId)).map(item => item.source.stableId),
      targetColIds: config.targetIds,
      targetRecordSha256: hash(Buffer.from(updatedLines.map((line, index) => config.targetIds.includes(rows[index].colId) ? line : '').filter(Boolean).join('\n'), 'utf8')),
      appAndPagesPreviewManifestChanged: false,
      mode: 'in-place-add-site-limited-priority-primate-ecology-evidence',
    }
    config.batchManifestAfter = `${JSON.stringify(manifest, null, 2)}\n`
  }

  return {
    config,
    rawBefore,
    rawAfter,
    compressedBefore,
    compressedAfter,
    before,
    output: { rawSha256: hash(rawAfter), decodedSha256: hash(rawAfter), compressedSha256: hash(compressedAfter), bytes: rawAfter.length, compressedBytes: compressedAfter.length, recordCount: rows.length },
  }
}

if (checkFinalize) {
  assert.ok(manifestBefore, 'Run the updater before queue finalization')
  const indexBytes = readFileSync(dossierIndexPath)
  assert.equal(queueManifest.inputs?.dossierIndexSha256, hash(indexBytes), 'Rebuild the full species evidence queue after updating the dossier index')
  assert.equal(queueManifest.notIncludedInRuntime, true)
  const queue = {
    manifestSha256: hash(queueManifestBytes),
    dossierIndexSha256: hash(indexBytes),
    notIncludedInRuntime: queueManifest.notIncludedInRuntime,
    shardCount: queueManifest.shards.length,
    acceptedSpeciesCount: queueManifest.counts?.acceptedSpecies ?? queueManifest.acceptedSpeciesCount ?? queueManifest.speciesCount ?? queueManifest.recordCount ?? null,
  }
  manifestBefore.queueProjection = queue
  manifestBefore.sharedSelector = { path: selectorPath, sha256: hash(selectorBytes), selectedTaxonIds: input.runtimeSelection.selectedTaxonIds, changed: false }
  writeJson(manifestPath, manifestBefore)
  console.log(JSON.stringify({ batchId: input.batchId, finalized: true, queueProjection: queue, sharedSelectorUnchanged: true }, null, 2))
} else {
  const results = shardConfigs.map(updateShard)
  for (const result of results) {
    writeFileSync(result.config.rawPath, result.rawAfter)
    writeFileSync(result.config.shardPath, result.compressedAfter)
    if (result.config.metadataAfter) writeFileSync(result.config.metadataPath, result.config.metadataAfter, 'utf8')
    if (result.config.batchManifestAfter) writeFileSync(result.config.batchManifestPath, result.config.batchManifestAfter, 'utf8')
  }
  const indexBytesAfter = `${JSON.stringify(dossierIndex, null, 2)}\n`
  writeFileSync(dossierIndexPath, indexBytesAfter, 'utf8')

  const references = [
    {
      id: 'smith-2024-ranis-early-human-diet',
      title: input.targets[0].source.title,
      authors: input.targets[0].source.authors,
      publishedYear: 2024,
      type: 'paper',
      url: input.targets[0].source.url,
      doi: '10.1038/s41559-023-02303-6',
      publisher: 'Nature Ecology & Evolution',
      pages: '8(3):564–577',
      version: input.targets[0].source.version,
      sourceRole: 'primary-study',
      fitnessFor: ['ecology', 'methods'],
      metadataAssignment: 'curator-reviewed',
      note: 'The article-level CC BY 4.0 study uses stable isotopes from 10 human and 52 animal remains at one cave; its diet inference is not a species-wide Homo sapiens profile. No article expression, figures, third-party content or data files are reproduced.',
    },
    {
      id: 'pragatheesh-2011-nh7-rhesus-road-mortality',
      title: input.targets[1].source.title,
      authors: input.targets[1].source.authors,
      publishedYear: 2011,
      type: 'paper',
      url: input.targets[1].source.url,
      doi: '10.11609/JoTT.o2669.1656-62',
      publisher: 'Journal of Threatened Taxa',
      pages: '3(4):1656–1662',
      version: input.targets[1].source.version,
      sourceRole: 'primary-study',
      fitnessFor: ['ecology', 'methods'],
      metadataAssignment: 'curator-reviewed',
      note: 'One-year monitoring of one 11-km NH-7 segment in Madhya Pradesh. The paper front page identifies CC BY 3.0 Unported and separately states non-profit reuse with attribution; the dossier paraphrases facts and reuses no article expression or figures.',
    },
  ]
  upsertArrayRecords('data/references.json', references)
  upsertArrayRecords('data/packages/mammalia/primates/references.json', references)

  const claims = input.targets.map(target => ({
    id: target.claimId,
    subjectId: `taxon:${target.appProfile.profileId}`,
    claimKind: 'scientific',
    claimType: target.claimType ?? target.facet,
    statement: target.claim.text,
    confidence: 'medium',
    confidenceRationale: target.colId === '6MB3T'
      ? 'The primary article reports the isotope sample sizes and directly states the large-terrestrial-mammal diet inference. The evidence is limited to the sampled early humans and one archaeological cave context.'
      : 'The primary article reports the monitoring period, road segment, carcass counts and observed correlations. It is a single local study without a population-level mortality estimate or formal conservation assessment.',
    reviewedBy: 'Evo Atlas primary-source audit',
    reviewedAt: today,
    reviewedAgainstReferenceVersion: target.source.version,
    referenceLinks: [{ referenceId: target.appProfile.referenceId, relation: 'supports', quoteLocator: target.claim.locator }],
  }))
  upsertArrayRecords('data/evidence/claims.json', claims)
  appendObjectEntries('data/evidence/claim-statements.zh.json', Object.fromEntries(input.targets.map(target => [target.claim.text, target.claim.textZh])))
  appendObjectEntries('data/evidence/claim-rationales.zh.json', Object.fromEntries(input.targets.map(target => [target.claimId, target.colId === '6MB3T'
    ? '原始论文直接报告了同位素样本量及大型陆生哺乳动物饮食推断。证据仅限于被采样的早期人类个体和一个洞穴考古背景。'
    : '原始论文报告了监测期间、道路路段、尸体计数和观察到的相关性。这是一项局地单点研究，没有种群层面的死亡率估计，也没有正式保育评估。'])))

  const profilesPath = 'data/packages/mammalia/primates/profiles.source.json'
  const profiles = readJson(profilesPath)
  const translations = {}
  for (const target of input.targets) {
    const profile = profiles.find(item => item.id === target.appProfile.profileId)
    assert.ok(profile, `Missing selected core profile ${target.appProfile.profileId}`)
    if (!profile.referenceIds.includes(target.appProfile.referenceId)) profile.referenceIds.push(target.appProfile.referenceId)
    if (target.appProfile.field === 'ecology.diet') profile.ecology.diet = target.appProfile.value
    else if (target.appProfile.field === 'evidenceSummary') profile.evidenceSummary = target.appProfile.value
    else throw new Error(`Unsupported core profile field ${target.appProfile.field}`)
    translations[target.appProfile.value] = target.appProfile.valueZh
    replaceArrayRecord(profilesPath, 'id', profile)
  }
  const overridesPath = 'data/packages/mammalia/primates/evidence/field-claim-overrides.source.json'
  const overrides = readJson(overridesPath)
  overrides.profiles.homo_sapiens['ecology.diet'] = { claimId: input.targets[0].claimId }
  overrides.profiles.macaca_mulatta = {
    ...(overrides.profiles.macaca_mulatta ?? {}),
    evidenceSummary: { claimId: input.targets[1].claimId },
  }
  writeJson(overridesPath, overrides)

  const runtimeProfilesPath = 'data/packages/mammalia/primates/profiles.json'
  const runtimeProfiles = readJson(runtimeProfilesPath)
  for (const target of input.targets) {
    const sourceProfile = profiles.find(item => item.id === target.appProfile.profileId)
    const runtimeProfile = runtimeProfiles.find(item => item.id === target.appProfile.profileId)
    assert.ok(runtimeProfile, `Missing runtime profile ${target.appProfile.profileId}`)
    runtimeProfile.referenceIds = [...sourceProfile.referenceIds]
    if (target.appProfile.field === 'ecology.diet') runtimeProfile.ecology.diet = target.appProfile.value
    else runtimeProfile.evidenceSummary = target.appProfile.value
    replaceArrayRecord(runtimeProfilesPath, 'id', runtimeProfile)
  }

  const claimIdsPath = 'data/packages/mammalia/primates/evidence/claim-ids.json'
  const claimIds = readJson(claimIdsPath)
  for (const target of input.targets) if (!claimIds.includes(target.claimId)) claimIds.push(target.claimId)
  writeJson(claimIdsPath, claimIds)

  const fieldLinksPath = 'data/packages/mammalia/primates/evidence/field-claim-links.json'
  const fieldLinks = readJson(fieldLinksPath)
  const claimsById = new Map(readJson('data/evidence/claims.json').map(claim => [claim.id, claim]))
  for (const target of input.targets) {
    const fieldLinkRecord = fieldLinks.find(item => item.profileId === target.appProfile.profileId)
    const claim = claimsById.get(target.claimId)
    assert.ok(fieldLinkRecord && claim, `Missing runtime evidence record for ${target.appProfile.profileId}`)
    const sourceLocators = claim.referenceLinks
      .filter(link => link.relation === 'supports')
      .map(link => ({ referenceId: link.referenceId, locator: link.pages ?? link.figure ?? link.quoteLocator ?? 'Source scope; precise locator pending curator review.' }))
    fieldLinkRecord.fields[target.appProfile.field] = {
      claimId: claim.id,
      claimType: claim.claimType,
      relation: 'supports',
      sourceLocators,
      confidence: claim.confidence,
      reviewStatus: 'automated-audit-passed',
      contentOrigin: 'editorial-synthesis',
    }
    replaceArrayRecord(fieldLinksPath, 'profileId', fieldLinkRecord)
  }

  const localePath = 'data/packages/mammalia/primates/locales/zh.json'
  const locale = readJson(localePath)
  for (const target of input.targets) locale.strings[`claim.${target.claimId}.confidenceRationale`] = target.colId === '6MB3T'
    ? '原始论文直接报告了同位素样本量及大型陆生哺乳动物饮食推断。证据仅限于被采样的早期人类个体和一个洞穴考古背景。'
    : '原始论文报告了监测期间、道路路段、尸体计数和观察到的相关性。这是一项局地单点研究，没有种群层面的死亡率估计，也没有正式保育评估。'
  writeJson(localePath, locale)
  appendTsDictionaryEntries('src/i18n/primatesZh.ts', translations)
  appendTsSetEntries('src/i18n/primatesZhKeys.ts', Object.keys(translations))

  const outputManifest = {
    schemaVersion: 1,
    batchId: input.batchId,
    releaseAlias: input.releaseAlias,
    checkedAt: today,
    input: { path: sourcePath, sha256: hash(inputBytes) },
    baseHead: 'be5c092abe7d73ecdc36f7b609f9e4bd076d36da',
    duplicateAudit: input.duplicateAudit,
    targets: results.map(result => {
      const prior = manifestBefore?.targets?.find(item => item.colId === result.config.targetIds[0])
      return {
        colIds: result.config.targetIds,
        rawPath: result.config.rawPath,
        shardPath: result.config.shardPath,
        baseline: prior?.baseline ?? result.before,
        output: result.output,
        mode: 'in-place-enrichment-of-existing-primate-dossier',
      }
    }),
    sharedSelector: { path: selectorPath, sha256: hash(selectorBytes), selectedTaxonIds: input.runtimeSelection.selectedTaxonIds, changed: false },
    runtime: { fullSpeciesEvidenceQueueIncluded: false, selectionSharedByAppAndPages: true },
    queueProjection: manifestBefore?.queueProjection ?? null,
  }
  writeJson(manifestPath, outputManifest)
  console.log(JSON.stringify({
    batchId: input.batchId,
    targets: results.map(result => ({ colIds: result.config.targetIds, output: result.output })),
    sourceQueueRemainsOutsideRuntime: true,
    selectorChanged: false,
    next: 'Run data:species-queue:build, then rerun this script with --finalize.',
  }, null, 2))
}
