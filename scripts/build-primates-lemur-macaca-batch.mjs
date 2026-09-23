import { createHash } from "node:crypto"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from "node:zlib"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const sourcePath = resolve(root, "data/sources/primates-lemur-catta-macaca-nemestrina-batch-2026-09-24.json")
const rawPath = resolve(root, "data/knowledge/raw-dossiers/primates-lemur-catta-macaca-nemestrina-batch-2026-09-24.jsonl")
const shardPath = resolve(root, "data/knowledge/catalogue-dossiers-primates-lemur-catta-macaca-nemestrina-batch-2026-09-24.jsonl.br")
const manifestPath = resolve(root, "data/knowledge/catalogue-dossiers-primates-lemur-catta-macaca-nemestrina-batch-2026-09-24.batch-manifest.json")
const rel = path => path.slice(root.length + 1).replaceAll("\\", "/")
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex")
const fail = message => { throw new Error(message) }
const expected = new Map([
  ["3T528", { name: "Lemur catta Linnaeus, 1758", authorship: "Linnaeus, 1758", rank: "species", status: "accepted", sourceDatasetId: "2144", order: "Primates" }],
  ["3WWNT", { name: "Macaca nemestrina (Linnaeus, 1766)", authorship: "(Linnaeus, 1766)", rank: "species", status: "accepted", sourceDatasetId: "2144", order: "Primates" }],
])
const openPr357Ids = new Set(["3WWNQ", "3WWP6", "6TM9B"])
const facets = ["morphology", "lifeHistory", "ecology", "evolution", "distribution", "fossil", "conservation"]

const sourceBytes = readFileSync(sourcePath)
const sourceSha256 = sha256(sourceBytes)
const expectedSourceSha256 = "623c5da7d3f65c884aad6835055b377a67016c35c522ca3cd8ab576f3a1078f1"
if (sourceSha256 !== expectedSourceSha256) fail(`Source JSON SHA-256 mismatch: ${sourceSha256}`)
const source = JSON.parse(sourceBytes.toString("utf8"))
if (source.releaseAlias !== "COL26.8" || source.datasetKey !== 316115 || source.records?.length !== expected.size) fail("Source document is not the pinned COL26.8 batch")

const records = source.records.map(entry => {
  const identity = expected.get(entry.colId)
  if (!identity || openPr357Ids.has(entry.colId)) fail(`Unexpected or already-covered COL ID: ${entry.colId}`)
  if (entry.scientificName !== identity.name || entry.authorship !== identity.authorship || entry.rank !== identity.rank || entry.status !== identity.status || String(entry.sourceDatasetId) !== identity.sourceDatasetId || !entry.classification.includes(identity.order)) fail(`COL identity mismatch for ${entry.colId}`)
  if (entry.classification.at(-1) !== (entry.colId === "3T528" ? "Lemur" : "Macaca")) fail(`COL parent/genus classification mismatch for ${entry.colId}`)
  const article = entry.article
  const claims = entry.claims ?? {}
  if (!article?.id || article.licenseAssessment !== "item-level-verified" || article.licenseVersion !== "CC BY 4.0" || !article.locator || !article.attribution) fail(`Missing source rights or locator for ${entry.colId}`)
  const outputFacets = Object.fromEntries(facets.map(facet => {
    const claim = claims[facet]
    return [facet, claim ? {
      status: "partially-supported",
      claims: [{ text: claim.text, sourceIds: [article.id], locator: claim.locator, placeTimeScope: claim.scope, lifeStatus: claim.lifeStatus, translationStatus: "untranslated", originalLanguage: "en" }],
      gaps: [`The selected paper supports only the bounded claim above; no comprehensive ${facet} assessment was performed.`],
    } : { status: "not-assessed", gaps: [`No direct, scope-bounded ${facet} evidence was assessed in the selected source.`] }]
  }))
  const colSource = {
    id: "col",
    title: "Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144",
    url: `https://www.checklistbank.org/dataset/316115/taxon/${entry.colId}`,
    version: "COL26.8 released 2026-08-20; ChecklistBank dataset 316115",
    stableId: `col:${entry.colId}@COL26.8`,
    publishedAt: "2026-08-20",
    accessedAt: source.checkedAt,
    locator: `Accepted species usage ${entry.colId}; exact scientific name, authorship, rank, accepted status, sourceDatasetId 2144 and Primates classification`,
    license: "CC BY 4.0 nomenclatural metadata; no biological text reused",
    licenseAssessment: "identity-only",
    scope: "Identity only: pinned COL26.8 taxonomic record and classification.",
    rightsHolder: "Catalogue of Life Foundation",
    licenseVersion: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    licenseAppliesTo: "Pinned nomenclatural and taxonomic checklist metadata only.",
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${entry.colId}.`,
  }
  const articleSource = { ...article, stableId: `doi:${article.url.split("doi.org/")[1]}`, accessedAt: source.checkedAt }
  const record = {
    colId: entry.colId,
    scientificName: entry.scientificName,
    rank: entry.rank,
    sourceDatasetId: identity.sourceDatasetId,
    checkedAt: source.checkedAt,
    identity: {
      method: "Exact COL26.8 accepted species usage verified from ChecklistBank dataset 316115, including verbatim name/authorship, rank, status, sourceDatasetId and classification.",
      scope: entry.identityScope,
      sourceIds: ["col", article.id],
    },
    lifeStatusScope: {
      wild: "The selected primary study concerns wild sampled animals; claims retain its sample and locality limits.",
      domesticated: "Domestication and captive history have not been assessed.",
      fossil: "Fossil evidence has not been assessed.",
    },
    sources: [colSource, articleSource],
    facets: outputFacets,
    completeness: {
      status: "incomplete",
      reasons: ["Only one selected primary study was assessed; unsupported facets remain not-assessed.", "No systematic current-literature search or independent expert review has been completed."],
    },
    expertReview: { status: "not-reviewed", reviewers: [], reviewDigest: null },
  }
  const sourceIds = new Set(record.sources.map(item => item.id))
  for (const facet of Object.values(record.facets)) {
    for (const claim of facet.claims ?? []) {
      if (claim.sourceIds.some(id => !sourceIds.has(id))) fail(`Unresolved claim source for ${entry.colId}`)
    }
  }
  if (record.completeness.status !== "incomplete" || record.expertReview.status !== "not-reviewed" || facets.some(facet => !record.facets[facet])) fail(`Review/completeness state mismatch for ${entry.colId}`)
  return record
})
if (records.length !== expected.size || new Set(records.map(record => record.colId)).size !== expected.size) fail("Batch does not contain exactly two distinct expected COL usages")

const index = JSON.parse(readFileSync(resolve(root, "data/knowledge/catalogue-dossier-shards.json"), "utf8"))
const indexedIds = new Set()
for (const shard of index.shards) {
  const decoded = brotliDecompressSync(readFileSync(resolve(root, shard.path)))
  if (sha256(decoded) !== shard.decodedSha256) fail(`Existing indexed shard hash mismatch: ${shard.path}`)
  for (const line of decoded.toString("utf8").trimEnd().split(/\r?\n/)) {
    const record = JSON.parse(line)
    indexedIds.add(record.colId)
  }
}
for (const record of records) {
  if (indexedIds.has(record.colId) || openPr357Ids.has(record.colId)) fail(`Duplicate indexed/open-PR dossier: ${record.colId}`)
}

const rawBytes = Buffer.from(records.map(record => JSON.stringify(record)).join("\n") + "\n", "utf8")
if (rawBytes.includes(Buffer.from("\r\n"))) fail("Raw JSONL must use LF line endings")
const compressed = brotliCompressSync(rawBytes, { params: {
  [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
  [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
} })
const roundTrip = brotliDecompressSync(compressed)
if (!roundTrip.equals(rawBytes)) fail("Brotli round-trip bytes differ from the raw JSONL")

const manifest = {
  schemaVersion: 1,
  batchId: "primates-lemur-catta-macaca-nemestrina-2026-09-24",
  releaseAlias: "COL26.8",
  input: { path: rel(sourcePath), bytes: sourceBytes.byteLength, sha256: sourceSha256 },
  raw: { path: rel(rawPath), bytes: rawBytes.byteLength, sha256: sha256(rawBytes), lineEnding: "LF" },
  shard: {
    path: rel(shardPath), encoding: "brotli-jsonl", recordCount: records.length,
    decodedBytes: roundTrip.byteLength, decodedSha256: sha256(roundTrip),
    compressedBytes: compressed.byteLength, compressedSha256: sha256(compressed),
    byteExactRoundTrip: true,
    brotliParameters: { mode: "text", quality: 11 },
  },
  generationSource: rel(sourcePath),
  generationSourceSha256: sourceSha256,
  generator: rel(fileURLToPath(import.meta.url)),
  duplicateGuard: { indexedShardManifest: "data/knowledge/catalogue-dossier-shards.json", excludedOpenPr357Ids: [...openPr357Ids].sort() },
  identities: source.records.map(entry => ({ colId: entry.colId, scientificName: entry.scientificName, authorship: entry.authorship, rank: entry.rank, status: entry.status, sourceDatasetId: entry.sourceDatasetId })),
}
mkdirSync(dirname(rawPath), { recursive: true })
mkdirSync(dirname(shardPath), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
process.stdout.write(JSON.stringify({ count: records.length, sourceSha256, rawSha256: manifest.raw.sha256, decodedSha256: manifest.shard.decodedSha256, compressedSha256: manifest.shard.compressedSha256 }) + "\n")
