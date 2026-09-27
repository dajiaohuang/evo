import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BATCH_ID = 'fna-stratified-morphology-dossier-batch-2026-09-27'
const INPUT = 'data/sources/fna-stratified-morphology-dossier-batch-2026-09-27.json'
const MANIFEST = 'data/knowledge/fna-stratified-morphology-dossier-batch-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/fna-stratified-morphology-dossier-batch-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-fna-stratified-morphology-dossier-batch-2026-09-27.jsonl.br'
const FNA_PATH = 'data/sources/fna-descriptions.jsonl.br'
const FNA_SHA256 = 'f6000a5956207c9e300d1009c791951b83e865661e9edeba4aba4c66ff3dcbf1'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const EXCLUDED_ID = '4RHKL'
const SAMPLE_SIZE = 100
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const EXPECTED_INPUT_SHA256 = 'f6f94b2566360eaad5abf42ae58a8968b117be7c72a1c12004ee5679d82c0262'
const MORPHOLOGY_REVIEW = {
  '33CFQ': 'Culms trigonous, 5–50 cm × 0.5–1.5 mm, glabrous. Leaves V-shaped, 12–30 cm × 1–6 mm.',
  '34JJ7': 'Leaf blade pentagonal, 0.7-5 × 1-8 cm, glabrous to puberulent',
  '36D8R': 'Leaves alternate at basal nodes, opposite distally, 6–27 × 7–42 cm',
  '37JCQ': 'Stems unbranched, 0.2-1.1(-1.5) dm, pubescent proximally, trichomes 2-9-rayed, 0.05-0.2 mm',
  '38GSR': 'Stems some-what lax often sprawling, longest stems sometimes prostrate, cylindric, 8-40(-100?) × 3.2-15 cm',
  '39MSB': 'Leaves oblong-lanceolate, 2.5-3.5 mm, apices acute to short-acuminate, mucronate to hair-pointed',
  '3B4N4': 'Leaves basal; petiole 0.3-3 cm, thinly tomentose; blade oblong or rounded to subcordate, 0.3-1.5 × 0.3-1.5 cm',
  '3B4V8': 'Leaves basal; petiole 1-3(-5) cm, floccose; blade cordate to orbiculate, (0.5-)1-3 × (0.5-)1-3 cm',
  '3BFGQ': 'Bulbs ovoid, 10–20 mm;',
  '3CPQK': 'Stems prostrate to ascending, drooping at tips, 15–30 cm, glabrous.',
  '3FBSL': 'Leaves: blade green abaxially, bright green adaxially, generally flat, ovate-elliptic to broadly lanceolate',
  '3K4JC': 'Stems usually 1, usually unbranched distally, weakly winged, glabrous proximally, sparsely to moderately hairy distally.',
  '3LDJN': 'blade usually obovate or elliptic, sometimes oblong',
  '3NJ7C': 'Bulb rhizomatous, broadly ovoid, 6–8 × 3–6 cm; basal plate 3–6 cm; neck 3–5 cm; tunic grayish brown.',
  '3PZSC': 'Rhizomes freely branching, forming compact tufts, slender, 0.3–0.4 cm diam., covered with remains of old leaves; roots fibrous.',
  '3QTLP': 'Culms (1--)5--15(--25). Cataphylls 1--3.',
  '3SNXX': 'Leaf blades lanceolate or oblanceolate to linear, 6–70(–90) mm, margins (basal leaves) lobed (pinnatifid).',
  '3WDRD': 'Leaves petiolate; blades lanceolate, 50–120 × 6–20 mm',
  '3XV3M': 'Leaves: stipules lanceolate, entire; petiole 2–9 cm; blade basally attached, 5–7-lobed',
  '3ZSL7': 'Stems solitary, erect, straight; branches distal or along entire stem',
  '43LJ9': 'Stems erect or ascending, 2-3 dm, leafy mostly in proximal 1/2, openly forked distally',
  '47T3W': 'Stem scales concolored, margins black, undifferentiated, thick, ciliate.',
  '4CJK3': 'Leaves to 30 cm; blade sometimes sparsely setose abaxially on midrib; margins usually shallowly to deeply toothed.',
  '4FXPG': 'Leaves alternate; blade elliptic-lanceolate, 4-8 cm, margins not glandular, those of distal leaves irregularly serrate.',
  '4HG3G': 'Stems few to several from base, prostrate to erect or spreading, 0.05-0.5(-1.2) dm.',
  '4JD7J': 'Stems 1–20, erect, green to brown beneath hairs, simple, slender, densely silvery-sericeous',
  '4LBHX': 'Stems glabrous or glabrate. Leaves: petioles 3–10+ cm, seldom, if ever, winged',
  '4M58P': 'Basal leaves usually palmate, sometimes ternate, 2–8 cm; petiole 1–7 cm',
  '4NGX4': 'Stems sparsely setose, hairs spreading, glabrescent, rarely also with few appressed, stellate hairs.',
  '4R583': 'Bark dark brown to black with square plates. Twigs brown to reddish brown, 1-2.5 mm diam., tomentose to sparsely pubescent.',
  '4STB6': 'Culms erect to spreading-ascending, leafy based, trigonous or compressed, ribbed.',
  '4TCZZ': 'Stems spreading and weak, sometimes erect, slender, 3–10(–13) dm, openly branched',
  '4TYQD': 'phyllodial or rarely dilated apically, flattened, 4--40 cm',
  '4W9N7': 'Leaves alternate, widely divergent, sessile; blade pale or bluish green, not glaucous, narrowly lanceolate-elliptic or oblong',
  '4WZZ6': 'Stems prostrate, branched, 1-4 dm.',
  '4XDFW': 'Leaves mainly cauline, 2 per node, sessile, almost clasping, reduced proximal to inflorescence',
  '4Y7BV': 'Stems 1–10(–50), ascending to erect, glabrous or sparsely strigillose, copiously viscid-resinous in arrays.',
  '4Z6R4': 'Leaves: petiole 1–4 mm; blade ovate to elliptic, 1–4 × 1–2(–3) cm, chartaceous',
  '52XFQ': 'Cauline leaves: blade (mostly yellowish), ovate to lanceolate, 1-4 cm × 5-15 mm',
  '53Q92': 'Stems 1–4+, ascending to erect (straight), glabrous. Leaves thin, margins usually entire, sometimes very sparsely serrulate distally, scabrous, apices acute, mucronulate, faces glabrous',
  '5688F': 'Ray florets 8; laminae yellow to golden',
  '57L7R': 'Stems ± erect; internodes 6–8(–25) mm, ± strigose. Leaves basal and cauline, blades spatulate to oblanceolate',
  '59BM3': 'Cauline leaves: (proximal) petiole to 1 cm or (distal and bracts) subsessile; blade 2.5-4.5 cm',
  '5BM7V': 'Branches: bark exfoliating in shreds; nodal diaphragms 1–2.5 mm thick;',
  '5TVJF': 'outer coats enclosing 1 or more bulbs, brown to gray, membranous, cellular-reticulate',
  '5WN57': 'Culms 100–200 cm × 5–15 mm. Leaves: sheaths reaching to middle of culm or higher, fronts convex (to concave)',
  '5XBJG': 'Culms 20–90 cm, 1.5–3 mm wide basally, 0.9–1.1 mm wide distally.',
  '5YD2B': 'Leaves basal; petiole 0.5-3(-5) cm; blade elliptic to obovate or spatulate, 1-3(-3.5) × 0.2-1(-2.5) cm',
  '653V7': 'Stems short-creeping or suberect; scales bronzy deep yellow, concolored, margins entire.',
  '669LF': 'Cauline leaves subsessile or (proximal) attenuate to petiolelike base (to 0.4 cm); blade oblanceolate',
  '68LS4': 'leaf cells (1-)3:1, quadrate to rectangular-elliptic; perichaetial leaves abruptly subulate.',
  '69BFX': 'Culms to 80 cm. Leaves: blades 1.5–3(–4) mm wide.',
  '6BB52': 'blade rhombic-obovate or broadly elliptic',
  '6CPLC': 'Leaves: petiole 1–3 mm, sparsely to densely stellate-pubescent; blade ovate-lanceolate to ovate',
  '6F2MK': 'Culms acutely quadrangular, (30–)45–105 cm × (1–)2–5.4 mm, soft to firm, internally spongy, transverse septa incomplete;',
  '6GN7M': 'Leaves ascending to spreading; blades linear or oblong to oblanceolate (flat), 10–35 × 2–7 mm, midnerves evident',
  '6GQ93': 'blades spatulate to obovate-spatulate, 8–30 × 3–6 mm, margins usually 3-lobed, sometimes 2-lobed or entire',
  '6H3CJ': 'Leaves basal, fasciculate in terminal tufts; petiole 0.5-1.6(-2) cm, tomentose; blade elliptic to oblong',
  '6JDKR': 'Stems slender, rigid; stem and branch apices tightly long-attenuate; axillary hairs 250-300µm, 5-8 cells',
  '6KG6R': 'Leaves: basal 5–15 cm, blade strongly lyrate-pinnate, major leaflet 1, minor leaflets 4–10, terminal leaflet much larger than minor laterals;',
  '6M8Z5': 'Leaves: basal 5–6+, cauline 0(–1+); blades oblanceolate to spatulate, 40–80 × 18–45+ mm',
  '6NGZ9': 'Culms 1--15(--25). Cataphylls 1--2(--3).',
  '6PBWJ': 'Involucres turbinate to cylindric, 6–8 mm. Phyllaries 8–13, lanceolate to ovate, tomentose, glabrescent.',
  '6R2P6': 'Stems erect, simple or sometimes branched apically, 3-10 dm, stipitate-glandular, especially distally',
  '6V5F3': 'Stems decumbent to erect, usually branched distally, without noticeable ribs, glabrous or, rarely, pubescent distally',
  '6X3R2': 'Bark black with long rough ridges separated by deep furrows.',
  '6XHT2': 'Leaves basal and cauline or all cauline, sessile or petiolate; blade obovate or broadly spatulate to elliptic, 1.5-15 cm',
  '6YQMY': 'Stems terete, glabrous, hirsute, hispid, or scabrous.',
  '6ZXXT': 'Cauline leaves: blade linear to linear-lanceolate, (1.5-)3-9(-10) cm × 0.5-2 mm',
  '7358Y': 'Buds reddish brown, ovoid, 3–4 mm, scale margins tomentose.',
  '75VX7': 'Stems minutely stellate-hairy.',
  '77ZZ3': 'blade elliptic, ovate, or suborbiculate, 0.6–3 × 0.5–2 cm, base obtuse to rounded, subcordate, or truncate',
  '799R2': 'Leaves green, blades broadly ovate to lanceolate, all but distalmost 1–2-pinnatifid or pinnately compound',
  '79WDR': 'Culms sharply trigonous, sides concave distally, 0.4–1.5 m × 1.5–5 mm.',
  '7CQKY': 'Leaves 2.5–8.5 × 1–2.6 cm; stipules 3–9 × 1–4 mm; leaflets 12–16(–20), obliquely oblong to elliptic',
  '7FZLL': 'Leaves ascending, 15--45 cm; sheaths soft, base pink or red; blade deep green, linear, flattened, somewhat twisted, 5--10 mm wide',
  '8SBJ': 'Leaves: petiole 0.4–1.6 cm; blade reniform or suborbiculate, 0.5–1.5 × 0.8–2 cm, base cordate or rounded',
  '9LF6F': 'Stem sparingly branched; axillary hyaline nodules absent; central strand present. Leaves in as many as 20 pairs, obovate to lanceolate',
  '9XL4D': 'blade ovate to broadly elliptic',
  'BJNMZ': 'Stem leaves channeled, concave, 1.1-1.8 mm; apex sometimes incurved; costa broadly channeled;',
  'CPPB': 'Leaves mostly alternate; petioles 10–45+ mm; blades elliptic to ovate, 45–60(–100+) × 30–45(–75+) mm',
  'GBLS': 'Leaves: petiole 3-10 mm; blade whitish gray, dull, orbiculate-ovate, ovate, or elliptic, 2-5 × 1-3 cm',
  'GT3M': 'Leaves 3–7 pairs, sometimes crowded at stem bases',
  'HLPN': 'Stems short-creeping, often branched; scales black throughout or with brown borders, lanceolate, 2--5 × 0.2--0.5 mm',
  'KSV8': 'Leaves stiffly erect-appressed when dry, erect-spreading when moist, narrowly lanceolate, 2.5-4 mm',
  'M93R': 'Basal leaves: blade linear-oblanceolate, 2-5 mm wide, margins entire, not ciliate',
  'MPK9': 'Trophophore stalk 0--2 mm, 0 to 0.1 times length of trophophore rachis; blade bright shiny green, oblong-deltate, 1--2-pinnate, to 8 × 5 cm, papery.',
  'PXB2': 'Flowers erect; perianth open, campanulate; sepals lanceolate-ovate, 2–3 cm, apex acuminate;',
  'R4C5': 'Rhizomes cylindrical, slender or stout, 1.5-3 mm diam., (not fleshy).',
  'R8FM': 'Culms erect to arching, slender, 15–90 cm.',
  'R9FF': 'Culms often arching, weak, 10–40(–60) cm.',
  'RBK6': 'Culms 14–32 cm. Leaves: basal sheaths dark purplish to reddish brown; blades mostly basal, pale green, shorter than culms, thick, 0.9–3.3 mm wide.',
  'RCKN': 'Culms to 100 cm × 2 mm, scabrous. Leaves: sheath fronts spotted red-brown or pale brown, apex truncate or short-convex, membranous or hyaline, rugose;',
  'S6FY': 'Stems 1–several, much-branched throughout, puberulent and ± gray tomentose. Leaves hispidulous and ± short-tomentose;',
  'VDN8': 'broadly elliptic, ovate, obovate, or rarely ± orbicular',
  'VL7GR': 'Stem leaves triangular to triangular-lingulate, 1.2-1.7 mm, apex acute to sometimes shortly cuspidate',
  'VY9G': 'Leaf blade 1-ternate',
  'YGJT': 'bark corky, forming rectangular plates 0.5–1 cm wide;',
  'ZJRS': 'blade oblanceolate-elliptic to narrowly elliptic',
}

function morphologyReviewRationale(excerpt) {
  const lower = excerpt.toLowerCase()
  const feature = /\b(stem|culm|caudex|rhizome|bulb|root|tuber)\b/.test(lower) ? 'stem, below-ground, or supporting structure'
    : /\b(leaf|leaves|blade|petiole|leaflet)\b/.test(lower) ? 'leaf form, arrangement, or dimensions'
      : /\b(flower|floret|sepal|petal|stamen|inflorescence|spikelet|glume|bract|involucre|phyllar|ray|disc)\b/.test(lower) ? 'reproductive structure'
        : /\b(fruit|seed|capsule|achene|cypsela|utricle)\b/.test(lower) ? 'fruit or seed structure'
          : /\b(hair|glabrous|puberulent|pubescent|glabrous|scabrous|ciliate|surface|margin|apex|base)\b/.test(lower) ? 'surface or organ-character description'
            : 'explicit structural or dimensional description'
  return `The excerpt was manually cut to the source's ${feature} passage (${excerpt}); adjacent life-history, habitat, geographic, and taxonomic-context text was not included in the morphology evidence.`
}

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const norm = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const registryCache = new Map()

function registryRows(path) {
  if (!registryCache.has(path)) registryCache.set(path, gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
  return registryCache.get(path)
}

function readFnaRows() {
  const compressed = readFileSync(join(ROOT, FNA_PATH))
  assert.equal(sha256(compressed), FNA_SHA256, 'Pinned FNA description archive changed')
  return brotliDecompressSync(compressed).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
}

function currentDossierState() {
  const index = readJson('data/knowledge/catalogue-dossier-shards.json')
  const dossiers = readCatalogueDossiers()
  assert.equal(dossiers.records.length, index.recordCount)
  const ids = dossiers.records.map(record => record.colId).sort()
  assert.equal(ids.length, new Set(ids).size)
  return { index, dossiers, ids }
}

function selectStratified(rows, dossierIds) {
  const present = new Set(dossierIds)
  const eligible = rows.filter(row => !present.has(row.colId)).sort((a, b) => a.colId < b.colId ? -1 : a.colId > b.colId ? 1 : 0)
  assert.ok(eligible.length >= SAMPLE_SIZE)
  const selected = Array.from({ length: SAMPLE_SIZE }, (_, index) => eligible[Math.floor((index + 0.5) * eligible.length / SAMPLE_SIZE)])
  assert.equal(new Set(selected.map(row => row.colId)).size, SAMPLE_SIZE)
  return { eligible, selected }
}

function excerpt(text, limit = 240) {
  if (text.length <= limit) return text
  const end = text.lastIndexOf(' ', limit)
  return `${text.slice(0, end > 120 ? end : limit).trimEnd()}…`
}

function makeInput() {
  const { index, ids } = currentDossierState()
  const priorInput = existsSync(join(ROOT, INPUT)) ? readJson(INPUT) : null
  const existingShard = index.shards.find(shard => shard.path === SHARD)
  const priorBatchIds = existingShard
    ? new Set((priorInput?.newRecords ?? []).map(item => item.colId))
    : new Set()
  assert.equal(Boolean(existingShard), Boolean(priorInput?.batchId === BATCH_ID))
  if (existingShard) assert.equal(priorBatchIds.size, 99)
  const baselineIds = ids.filter(id => !priorBatchIds.has(id))
  const baselineRecordCount = index.recordCount - (existingShard?.recordCount ?? 0)
  const baselineShardCount = index.shards.length - Number(Boolean(existingShard))
  assert.equal(baselineIds.length, baselineRecordCount)
  const rows = readFnaRows()
  const { eligible, selected } = selectStratified(rows, baselineIds)
  assert.equal(eligible.length, 7284, 'Eligible FNA cohort changed since semantic audit')
  const excluded = selected.filter(row => row.colId === EXCLUDED_ID)
  assert.equal(excluded.length, 1, 'Audited general-only row is not the selected 4RHKL row')
  const excludedDescription = excluded[0].descriptions[0]
  assert.match(excludedDescription.text, /^Varieties 2 \(1 in the flora\): e North America; West Indies\./)
  const records = selected.filter(row => row.colId !== EXCLUDED_ID).map(row => {
    const description = row.descriptions[0]
    const morphologyExcerpt = MORPHOLOGY_REVIEW[row.colId]
    assert.ok(morphologyExcerpt, `No item-level semantic review recorded for ${row.colId}`)
    assert.ok(description.text.includes(morphologyExcerpt), `Reviewed morphology excerpt is absent from source text for ${row.colId}`)
    return {
      colId: row.colId,
      wfoId: row.wfoId,
      rowNumber: description.rowNumber,
      sourceId: description.sourceId,
      citation: description.citations[0],
      rightsHolder: description.rightsHolder,
      rights: description.rights,
      license: description.license,
      sourceEndUnclosed: description.sourceEndUnclosed,
      morphologyExcerpt,
      semanticReview: {
        status: 'reviewed',
        facet: 'morphology',
        decision: 'include',
        rationale: morphologyReviewRationale(morphologyExcerpt),
      },
    }
  })
  const registryManifest = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
  return {
    schemaVersion: 1,
    batchId: BATCH_ID,
    releaseAlias: 'COL26.8',
    checkedAt: '2026-09-27',
    sampleRule: {
      population: 'FNA source rows whose COL ID is absent from the complete indexed dossier store at base audit state',
      order: 'ascending COL ID using English ordinal string order',
      populationCount: eligible.length,
      strata: SAMPLE_SIZE,
      selection: 'zero-based position floor((i + 0.5) * populationCount / strata) for i=0..99',
    },
    baseAudit: {
      indexedRecordCount: baselineRecordCount,
      indexedShardCount: baselineShardCount,
      dossierIdsSha256: sha256(Buffer.from(baselineIds.join('\n') + '\n')),
      registryManifestSha256: sha256(registryManifest),
    },
    sourceArchive: { path: FNA_PATH, sha256: FNA_SHA256, ledger: 'data/sources/fna-descriptions-import-ledger.json' },
    sampledIds: selected.map(row => row.colId),
    exclusion: {
      colId: EXCLUDED_ID,
      scientificName: 'Ranunculus recurvatus Poir.',
      rowNumber: excludedDescription.rowNumber,
      sourceId: excludedDescription.sourceId,
      citation: excludedDescription.citations[0],
      reason: 'Excluded after item-level semantic review: the row only states the number of varieties and broad regions (“e North America; West Indies”); it supplies no direct morphology claim for the accepted species and is insufficiently scoped for a distribution claim.',
    },
    newRecords: records,
  }
}

function findUsage(registry, colId, name) {
  const route = norm(name).slice(0, 2)
  const matches = (registry.search.routes[route] ?? []).flatMap(registryRows).filter(row => row.id === colId)
  assert.equal(matches.length, 1, `Expected one pinned COL26.8 usage for ${colId}`)
  const usage = matches[0]
  assert.equal(usage.status, 'accepted', `COL usage is not accepted for ${colId}`)
  assert.equal(usage.rank, 'species', `COL usage is not species rank for ${colId}`)
  return usage
}

function attachClassification(registry, record) {
  const chain = []
  let id = record.colId
  while (id) {
    const route = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const path of registry.hierarchy.nodes.routes[route] ?? []) {
      node = registryRows(path).find(row => row.id === id)
      if (node) break
    }
    assert.ok(node, `Missing accepted COL26.8 node ${id}`)
    assert.equal(node.status, 'accepted', `Unaccepted parent node ${id}`)
    chain.unshift(node)
    id = node.parentId
  }
  record.classificationPath = chain.map(({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id: nodeId, scientificName, authorship, rank, status, sourceDatasetId }))
  assert.equal(record.classificationPath.at(-1).id, record.colId)
}

function makeDossier(item, fnaRecord, usage, checkedAt, registry) {
  const description = fnaRecord.descriptions.find(value => value.rowNumber === item.rowNumber && value.sourceId === item.sourceId)
  assert.ok(description, `Missing exact FNA row/sourceId for ${item.colId}`)
  assert.equal(description.type, 'general')
  assert.equal(description.sourceExcerpt, true)
  assert.equal(description.rightsHolder, item.rightsHolder)
  assert.equal(description.rights, item.rights)
  assert.equal(description.license, item.license)
  assert.equal(description.citations[0], item.citation)
  assert.equal(item.semanticReview?.status, 'reviewed', `Missing item-level semantic review for ${item.colId}`)
  assert.equal(item.semanticReview?.facet, 'morphology', `Semantic review facet is not morphology for ${item.colId}`)
  assert.equal(item.semanticReview?.decision, 'include', `Semantic review disposition is not include for ${item.colId}`)
  assert.ok(item.semanticReview?.rationale?.trim(), `Missing semantic review rationale for ${item.colId}`)
  assert.ok(description.text.includes(item.morphologyExcerpt), `Reviewed morphology excerpt no longer appears in source row ${item.rowNumber}`)
  assert.equal(description.sourceEndUnclosed, item.sourceEndUnclosed, `FNA source-ending warning changed for ${item.colId}`)
  assert.equal(description.citationMissingInSource, false)
  assert.ok(item.citation.trim())

  const sourceId = `fna_${item.sourceId.toLowerCase().replaceAll('-', '_')}`
  const name = usage.scientificName
  const dossier = {
    colId: item.colId,
    scientificName: name,
    authorship: usage.authorship,
    rank: usage.rank,
    sourceDatasetId: usage.sourceDatasetId,
    checkedAt,
    classificationPath: [],
    identity: {
      method: 'Matched the retained COL ID and WFO-linked FNA source row to exactly one accepted species usage in the pinned COL26.8 search registry; followed each parent through the pinned hierarchy registry and retained the complete accepted parent chain. The source join also preserves the exact FNA row number, source identifier, and taxon-specific citation.',
      scope: `COL26.8 accepted identity ${item.colId} linked through WFO ${item.wfoId} to one Flora of North America species account. This link does not assert full concept equivalence across checklist versions.`,
      sourceIds: ['col', sourceId],
    },
    lifeStatusScope: {
      wild: 'The account does not identify the provenance of the described material; population-level wild status has not been assessed.',
      domesticated: 'Cultivation, domestication, and horticultural history have not been assessed.',
      fossil: 'Fossil occurrence and geological age have not been assessed.',
    },
    sources: [],
    systematicSearch: {
      scope: 'Focused semantic review of one taxon-specific Flora of North America description and exact COL26.8 identity resolution; not a systematic review of all seven facets.',
      method: 'Checked the exact COL ID, WFO ID, accepted species usage, complete accepted parent chain, FNA row number, source identifier, source citation, item-declared license, rights holder, and archive license metadata.',
      queryOrPath: `COL26.8 ChecklistBank dataset 316115 usage ${item.colId}; FNA source row ${item.rowNumber}; sourceId ${item.sourceId}.`,
      inclusionCriteria: 'The row is within the deterministically sampled FNA accepted-species cohort and its reviewed text directly supports a bounded morphology statement.',
      exclusionCriteria: 'No habitat, environmental interaction, reproduction or full life history, evolutionary result, geographic range, fossil occurrence, conservation status, population mean, or unobserved measurement is inferred.',
      date: checkedAt,
      searcher: 'Evo source audit',
    },
    facets: {},
    completeness: {
      status: 'incomplete',
      reasons: ['One regional flora account supports a bounded morphology excerpt only.', 'The other six scientific facets remain explicitly not assessed.', 'No independent external expert review has been completed.'],
    },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
  attachClassification(registry, dossier)

  const colSource = {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset ' + usage.sourceDatasetId,
    url: `https://www.checklistbank.org/dataset/316115/taxon/${item.colId}`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    stableId: `col:${item.colId}@COL26.8`,
    publishedAt: '2026-08-20',
    accessedAt: checkedAt,
    locator: `Accepted species usage ${item.colId}; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${item.colId}. https://doi.org/10.48580/dgywk.`,
  }
  const fnaSource = {
    id: sourceId,
    title: `${name}, Flora of North America @ eFloras; cited item`,
    url: 'https://efloras.org/flora_page.aspx?flora_id=1',
    stableId: `FNA-sourceId:${item.sourceId}`,
    version: `FNA item cited in row ${item.rowNumber}; archive retrieved 2026-09-06`,
    publishedAt: item.citation.match(/\b(?:19|20)\d{2}\b/u)?.[0] ?? null,
    accessedAt: checkedAt,
    locator: `FNA imported general-description row ${item.rowNumber}; source identifier ${item.sourceId}; exact taxon-specific citation retained.`,
    sourceCitation: item.citation,
    itemDeclaredLicenseUrl: item.license,
    license: 'The individual imported item declares CC BY 4.0; the FNA archive metadata also declares CC BY 4.0 unless otherwise noted.',
    rightsHolder: item.rightsHolder,
    rights: item.rights,
    licenseEvidenceUrl: 'https://worldfloraonline.org/resource/33517',
    licenseEvidenceLocator: 'Archive resource metadata declares CC BY 4.0; the imported source item independently retains its CC BY 4.0 license URL and rights-holder field.',
    licenseAppliesTo: `The taxon-specific FNA description text in row ${item.rowNumber}; no third-party figure, image, or table is reused.`,
    attribution: `${item.citation} ${item.rightsHolder}; one short excerpt retained with its source locator.`,
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAssessment: 'item-level-verified',
    scope: 'Regional North American taxonomic description; morphology excerpt only, not a population-sampled estimate, current/global range statement, or proof of cross-release concept equivalence.',
  }
  dossier.sources = [colSource, fnaSource]
  const claim = {
    text: `The FNA account describes these morphology characters: “${item.morphologyExcerpt}”`,
    translationStatus: 'untranslated',
    originalLanguage: 'en',
    sourceIds: [sourceId],
    locator: `FNA description row ${item.rowNumber}, source identifier ${item.sourceId}; citation: ${item.citation}`,
    placeTimeScope: 'Regional Flora of North America taxonomic account; the excerpt does not provide a population-sampling frame, named observation locality, or temporal estimate.',
    lifeStatus: 'The source describes taxonomic structures but does not identify whether the described material was wild or cultivated; neither status is inferred.',
  }
  const gaps = {
    lifeHistory: 'Seed maturation, release, germination, recruitment, growth, survival, and the full reproductive cycle have not been assessed.',
    ecology: 'Habitat, environmental tolerances, and ecological interactions have not been assessed.',
    evolution: 'No species-specific phylogenetic, population-genetic, or evolutionary analysis was assessed.',
    distribution: 'This regional flora excerpt is not a current range map or global distribution assessment.',
    fossil: 'No fossil occurrences or bounded species-level fossil search were assessed.',
    conservation: 'No current conservation assessment, population trend, or threat analysis was reviewed.',
  }
  dossier.facets = Object.fromEntries(FACETS.map(facet => [facet, facet === 'morphology'
    ? { status: 'partially-supported', claims: [claim], gaps: ['One reviewed excerpt supports selected morphology characters only; completeness, variation, methods, and coverage of the full COL26.8 concept remain unassessed.'] }
    : { status: 'not-assessed', claims: [], gaps: [gaps[facet]] }]))
  return dossier
}

const args = process.argv.slice(2)
if (args.length === 1 && args[0] === '--prepare-input') {
  const input = makeInput()
  const bytes = Buffer.from(`${JSON.stringify(input, null, 2)}\n`, 'utf8')
  writeFileSync(join(ROOT, INPUT), bytes)
  console.log(JSON.stringify({ input: INPUT, sha256: sha256(bytes), sampled: input.sampledIds.length, included: input.newRecords.length, excluded: input.exclusion.colId, eligibleCount: input.sampleRule.populationCount }, null, 2))
  process.exit(0)
}
if (args.length) throw new Error('Usage: node scripts/build-fna-stratified-morphology-dossier-batch-2026-09-27.mjs [--prepare-input]')

const inputBytes = readFileSync(join(ROOT, INPUT))
assert.equal(sha256(inputBytes), EXPECTED_INPUT_SHA256, 'Pinned stratified FNA input changed')
const input = JSON.parse(inputBytes.toString('utf8'))
assert.equal(input.batchId, BATCH_ID)
assert.equal(input.sampledIds.length, SAMPLE_SIZE)
assert.equal(input.newRecords.length, 99)
assert.equal(input.exclusion.colId, EXCLUDED_ID)

const { index, dossiers, ids } = currentDossierState()
const existing = index.shards.find(shard => shard.path === SHARD)
const inputIds = new Set(input.newRecords.map(item => item.colId))
assert.equal(inputIds.size, 99)
const currentIds = new Set(ids)
for (const id of inputIds) assert.equal(currentIds.has(id), Boolean(existing), `Unexpected pre-existing dossier ${id}`)
const baselineIds = ids.filter(id => !inputIds.has(id))
assert.equal(baselineIds.length, input.baseAudit.indexedRecordCount)
assert.equal(sha256(Buffer.from(baselineIds.join('\n') + '\n')), input.baseAudit.dossierIdsSha256, 'Dossier baseline ID set changed')
assert.equal(index.shards.length, input.baseAudit.indexedShardCount + Number(Boolean(existing)))
assert.equal(index.recordCount, input.baseAudit.indexedRecordCount + (existing?.recordCount ?? 0))
assert.equal(existing?.recordCount ?? 0, existing ? 99 : 0)

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), input.baseAudit.registryManifestSha256)
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.checklistBankDatasetKey, 316115)
const fnaRows = readFnaRows()
const baselineSet = new Set(baselineIds)
const { eligible, selected } = selectStratified(fnaRows, baselineIds)
assert.equal(eligible.length, input.sampleRule.populationCount)
assert.deepEqual(selected.map(row => row.colId), input.sampledIds, 'Deterministic stratified sample changed')
assert.equal(selected.filter(row => row.colId === EXCLUDED_ID).length, 1)
assert.deepEqual(new Set(input.newRecords.map(item => item.colId)), new Set(selected.map(row => row.colId).filter(id => id !== EXCLUDED_ID)))
assert.equal(selected.length - input.newRecords.length, 1)

const dossiersToWrite = input.newRecords.map(item => {
  const source = fnaRows.find(row => row.colId === item.colId)
  assert.ok(source, `Missing FNA row for ${item.colId}`)
  assert.ok(source.wfoId)
  assert.equal(source.wfoId, item.wfoId, `WFO crosswalk changed for ${item.colId}`)
  const usage = findUsage(registry, item.colId, source.scientificName)
  assert.equal(usage.scientificName, source.scientificName, `Accepted COL name differs from source crosswalk for ${item.colId}`)
  const dossier = makeDossier(item, source, usage, input.checkedAt, registry)
  assert.ok(!baselineSet.has(dossier.colId))
  return dossier
})
assert.equal(new Set(dossiersToWrite.map(record => record.colId)).size, 99)
assert.ok(dossiersToWrite.every(record => record.completeness.status === 'incomplete' && record.expertReview.status === 'not-reviewed'))
assert.ok(dossiersToWrite.every(record => record.facets.morphology.status === 'partially-supported' && FACETS.filter(facet => facet !== 'morphology').every(facet => record.facets[facet].status === 'not-assessed')))

const raw = Buffer.from(dossiersToWrite.map(JSON.stringify).join('\n') + '\n', 'utf8')
const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressed).equals(raw), 'Brotli round-trip mismatch')
if (existing) {
  const existingRaw = readFileSync(join(ROOT, RAW))
  const existingCompressed = readFileSync(join(ROOT, SHARD))
  assert.equal(sha256(existingRaw), existing.decodedSha256)
  assert.equal(sha256(existingCompressed), existing.compressedSha256)
  if (!existingRaw.equals(raw) || !existingCompressed.equals(compressed)) {
    assert.equal(existing.recordCount, dossiersToWrite.length, 'Existing batch shard record count changed')
    writeFileSync(join(ROOT, RAW), raw)
    writeFileSync(join(ROOT, SHARD), compressed)
    const shard = index.shards.find(item => item.path === SHARD)
    assert.ok(shard, 'Existing batch shard is absent from dossier index')
    shard.decodedSha256 = sha256(raw)
    shard.compressedSha256 = sha256(compressed)
    writeFileSync(join(ROOT, 'data/knowledge/catalogue-dossier-shards.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
  }
} else {
  mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
  writeFileSync(join(ROOT, RAW), raw)
  writeFileSync(join(ROOT, SHARD), compressed)
  index.shards.push({ path: SHARD, recordCount: dossiersToWrite.length, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) })
  index.recordCount += dossiersToWrite.length
  writeFileSync(join(ROOT, 'data/knowledge/catalogue-dossier-shards.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8')
}

const storedRaw = readFileSync(join(ROOT, RAW))
const storedCompressed = readFileSync(join(ROOT, SHARD))
const manifest = {
  schemaVersion: 1,
  batchId: BATCH_ID,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT, sha256: sha256(inputBytes) },
  sampleRule: input.sampleRule,
  baseAudit: input.baseAudit,
  newRecords: dossiersToWrite.map(({ colId, scientificName }) => ({ colId, scientificName })),
  excluded: input.exclusion,
  indexedRecordCount: input.baseAudit.indexedRecordCount + 99,
  newShard: {
    path: SHARD,
    rawPath: RAW,
    encoding: 'brotli-jsonl',
    recordCount: 99,
    decodedBytes: storedRaw.length,
    decodedSha256: sha256(storedRaw),
    compressedBytes: storedCompressed.length,
    compressedSha256: sha256(storedCompressed),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  registry: { path: `${REGISTRY_ROOT}/manifest.json`, releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha256(registryManifestBytes) },
  sourceArchive: { path: FNA_PATH, sha256: FNA_SHA256, archiveLicenseLedger: input.sourceArchive.ledger },
  generator: 'scripts/build-fna-stratified-morphology-dossier-batch-2026-09-27.mjs',
}
writeFileSync(join(ROOT, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

const ledgerPath = join(ROOT, 'data/sources/fna-descriptions-import-ledger.json')
const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
ledger.auditedDossierBatches = (ledger.auditedDossierBatches ?? []).filter(batch => batch.batchId !== BATCH_ID)
ledger.auditedDossierBatches.push({
  batchId: BATCH_ID,
  input: INPUT,
  inputSha256: sha256(inputBytes),
  generator: manifest.generator,
  manifest: MANIFEST,
  sampledAcceptedSpeciesWithoutDossier: 100,
  authoredDossiers: 99,
  excluded: [{ colId: input.exclusion.colId, reason: input.exclusion.reason }],
  selectionRule: input.sampleRule,
  claimPolicy: 'morphology only; English excerpts remain untranslated; other six facets not assessed; all records incomplete and not reviewed',
})
writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8')

console.log(JSON.stringify({ batchId: BATCH_ID, eligible: eligible.length, sampled: selected.length, included: dossiersToWrite.length, excluded: input.exclusion.colId, indexedRecordsAfter: index.recordCount, rawBytes: storedRaw.length, compressedBytes: storedCompressed.length, inputSha256: sha256(inputBytes), rawSha256: sha256(storedRaw), compressedSha256: sha256(storedCompressed), disposition: existing ? 'verified-idempotent-rebuild' : 'applied' }, null, 2))
