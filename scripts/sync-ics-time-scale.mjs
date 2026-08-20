import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { rootDir } from './data-lib.mjs'

const MACHINE_SOURCE = 'https://raw.githubusercontent.com/i-c-stratigraphy/chart/main/chart.ttl'
const EXPECTED_VERSION = '2026-06'

function argumentValue(name) {
  const index = process.argv.indexOf(name)
  return index >= 0 ? process.argv[index + 1] : null
}

function conceptChunks(ttl) {
  return ttl
    .split(/(?=^gtsd:[A-Za-z0-9]+\r?$)/m)
    .flatMap((chunk) => {
      const match = chunk.match(/^gtsd:([A-Za-z0-9]+)\r?\n/)
      return match ? [{ id: match[1], body: chunk.slice(match[0].length) }] : []
    })
}

function lastLanguageLabel(body, language) {
  const section = body.match(/skos:prefLabel([\s\S]*?)(?=\r?\n\s*time:hasBeginning)/)?.[1] ?? ''
  const matches = [...section.matchAll(new RegExp('"([^"\\r\\n]+)"@' + language, 'g'))]
  return matches.at(-1)?.[1] ?? ''
}

function camelWords(value) {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Za-z])(\d)/g, '$1 $2')
    .replace(/(\d)([A-Za-z])/g, '$1 $2')
}

function slug(value) {
  return camelWords(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function sectionBetween(body, start, next) {
  const startIndex = body.indexOf(start)
  if (startIndex < 0) return ''
  const remainder = body.slice(startIndex + start.length)
  const nextIndex = next ? remainder.indexOf(next) : -1
  return nextIndex >= 0 ? remainder.slice(0, nextIndex) : remainder
}

function numericValue(section) {
  const value = section.match(/gtsd:inMYA\s+([0-9.]+)/)?.[1]
  if (!value) throw new Error('ICS time boundary is missing gtsd:inMYA')
  return Number(value)
}

function uncertainty(section) {
  const value = section.match(/schema:marginOfError\s+([0-9.]+)/)?.[1]
  return value ? Number(value) : null
}

function derivedChineseName(id, parentId, rank, labelsById) {
  const directional = id.match(/^(Lower|Middle|Upper)(.+)$/)
  if (directional) {
    const prefix = { Lower: '下', Middle: '中', Upper: '上' }[directional[1]]
    const parent = labelsById.get(parentId)?.zh || camelWords(parentId)
    const stem = parent.replace(/(亚纪|纪|世|统|期)$/, '')
    return `${prefix}${stem}统`
  }
  return `未命名${rank === 'epoch' ? '世' : '期'}（${camelWords(id)}）`
}

function detailedUnits(ttl, baseUnits) {
  const concepts = conceptChunks(ttl)
  const labelsById = new Map(concepts.map(({ id, body }) => [id, {
    en: lastLanguageLabel(body, 'en'),
    zh: lastLanguageLabel(body, 'zh'),
  }]))
  for (const unit of baseUnits) {
    const concept = concepts.find(({ id }) => slug(id) === unit.oid.split(':').at(-1))
    if (concept) labelsById.set(concept.id, { en: unit.nam, zh: unit.namZh })
  }
  labelsById.set('Mississippian', { en: 'Mississippian', zh: '密西西比亚纪' })
  labelsById.set('Pennsylvanian', { en: 'Pennsylvanian', zh: '宾夕法尼亚亚纪' })

  const units = concepts.flatMap(({ id, body }) => {
    const hasEpochRank = /rank:Epoch/.test(body)
    const hasAgeRank = /rank:Age/.test(body)
    if (!hasEpochRank && !hasAgeRank) return []
    const rank = hasEpochRank ? 'epoch' : 'age'
    const parentConceptId = body.match(/skos:broader\s+gtsd:([A-Za-z0-9]+)/)?.[1]
    if (!parentConceptId) throw new Error(`ICS concept ${id} has no broader concept`)
    const beginning = sectionBetween(body, 'time:hasBeginning', 'time:hasEnd')
    const ending = sectionBetween(body, 'time:hasEnd', 'sh:order')
    const eag = numericValue(beginning)
    const lag = numericValue(ending)
    const labels = labelsById.get(id)
    const isDirectional = /^(Lower|Middle|Upper)/.test(id)
    const parentSlug = ['Mississippian', 'Pennsylvanian'].includes(parentConceptId)
      ? 'carboniferous'
      : slug(parentConceptId)
    const pid = `${rank === 'epoch' ? 'period' : 'epoch'}:${parentSlug}`
    return [{
      oid: `${rank}:${slug(id)}`,
      nam: labels?.en || camelWords(id),
      namZh: isDirectional ? derivedChineseName(id, parentConceptId, rank, labelsById) : labels?.zh || derivedChineseName(id, parentConceptId, rank, labelsById),
      itp: rank,
      lag,
      eag,
      col: body.match(/schema:color\s+"(#[0-9A-Fa-f]{6})"/)?.[1] ?? '#71837b',
      pid,
      abr: body.match(/skos:notation\s+"([^"]+)"/)?.[1] ?? undefined,
      sourceId: `gtsd:${id}`,
      sourceParentId: `gtsd:${parentConceptId}`,
      eagUncertaintyMa: uncertainty(beginning),
      lagUncertaintyMa: uncertainty(ending),
      eagApproximate: /skos:note\s+"uncertain"/.test(beginning),
      lagApproximate: /skos:note\s+"uncertain"/.test(ending),
      ratifiedGssp: /gts:ratifiedGSSP\s+true/.test(body),
    }]
  }).sort((left, right) => ['epoch', 'age'].indexOf(left.itp) - ['epoch', 'age'].indexOf(right.itp) || right.eag - left.eag)

  // The 2026/06 PDF places the base of Pridoli at 422.7 Ma. The current RDF
  // serializes Ludlow through 419.62 Ma, overlapping Pridoli, so keep the
  // official chart partition and retain an explicit note about the correction.
  const ludlow = units.find((unit) => unit.oid === 'epoch:ludlow')
  const pridoli = units.find((unit) => unit.oid === 'epoch:pridoli')
  if (ludlow && pridoli && ludlow.lag !== pridoli.eag) {
    ludlow.lag = pridoli.eag
    ludlow.lagUncertaintyMa = pridoli.eagUncertaintyMa
    ludlow.lagApproximate = pridoli.eagApproximate
    ludlow.sourceNote = 'End projected to the 422.7 Ma Pridoli base shown on the ICS 2026/06 chart; the RDF Ludlow end currently overlaps Pridoli.'
  }
  const miocene = units.find((unit) => unit.oid === 'epoch:miocene')
  const aquitanian = units.find((unit) => unit.oid === 'age:aquitanian')
  if (miocene && aquitanian && miocene.eag !== aquitanian.eag) {
    aquitanian.eag = miocene.eag
    aquitanian.eagUncertaintyMa = miocene.eagUncertaintyMa
    aquitanian.eagApproximate = miocene.eagApproximate
    aquitanian.sourceNote = 'Older boundary projected to the 23.04 Ma Miocene base shown on the ICS 2026/06 chart; the RDF Aquitanian value is rounded to 23.03 Ma.'
  }

  const allIds = new Set([...baseUnits.map((unit) => unit.oid), ...units.map((unit) => unit.oid)])
  const allById = new Map([...baseUnits, ...units].map((unit) => [unit.oid, unit]))
  for (const unit of units) {
    if (!allIds.has(unit.pid)) throw new Error(`${unit.oid} maps to missing parent ${unit.pid}`)
    if (!(unit.eag > unit.lag)) throw new Error(`${unit.oid} has an invalid ${unit.eag}–${unit.lag} Ma range`)
    const parent = allById.get(unit.pid)
    if (unit.eag > parent.eag + 0.001 || unit.lag < parent.lag - 0.001) {
      throw new Error(`${unit.oid} falls outside ${unit.pid}`)
    }
  }
  return units
}

const inputPath = argumentValue('--input')
const targetPath = resolve(rootDir, argumentValue('--target') ?? 'data/time-scale.json')
const ttl = inputPath
  ? readFileSync(resolve(process.cwd(), inputPath), 'utf8')
  : await fetch(MACHINE_SOURCE).then((response) => {
    if (!response.ok) throw new Error(`ICS download failed: ${response.status} ${response.statusText}`)
    return response.text()
  })

if (!ttl.includes(`owl:versionInfo "${EXPECTED_VERSION}"`)) {
  throw new Error(`Expected ICS ${EXPECTED_VERSION} machine data`)
}

const timeScale = JSON.parse(readFileSync(targetPath, 'utf8'))
if (timeScale.officialVersion !== '2026/06') throw new Error('Target timescale is not pinned to ICS 2026/06')
const baseUnits = timeScale.units.filter((unit) => ['eon', 'era', 'period'].includes(unit.itp))
const details = detailedUnits(ttl, baseUnits)
timeScale.source.machineReadableUrl = MACHINE_SOURCE
timeScale.source.license = 'https://creativecommons.org/licenses/by/4.0/'
timeScale.units = [...baseUnits, ...details]
writeFileSync(targetPath, `${JSON.stringify(timeScale, null, 2)}\n`)

const rankCounts = Object.groupBy(details, (unit) => unit.itp)
console.log(`Synced ICS ${EXPECTED_VERSION}: ${rankCounts.epoch?.length ?? 0} epochs and ${rankCounts.age?.length ?? 0} ages.`)
