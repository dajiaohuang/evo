import { createHash } from "node:crypto"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, constants as zlibConstants } from "node:zlib"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const inputPath = resolve(root, "data/knowledge/raw-dossiers/primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl")
const shardPath = resolve(root, "data/knowledge/catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl.br")
const manifestPath = resolve(root, "data/knowledge/catalogue-dossiers-primates-homo-sapiens-south-african-genomes-2026-09-24.batch-manifest.json")
const relative = path => path.slice(root.length + 1).replaceAll(String.fromCharCode(92), "/")
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex")
const facetNames = ["morphology", "lifeHistory", "ecology", "evolution", "distribution", "fossil", "conservation"]
const decoded = readFileSync(inputPath)
if (!decoded.length || decoded.at(-1) !== 10) throw new Error("Raw JSONL must end with a newline")
const records = decoded.toString("utf8").trim().split(String.fromCharCode(10)).filter(Boolean).map((line, index) => {
  try { return JSON.parse(line) } catch (error) { throw new Error("Invalid JSON on line " + (index + 1) + ": " + error.message) }
})
if (records.length !== 1) throw new Error("Batch must contain exactly one reviewed COL usage")
const record = records[0]
if (record.colId !== "6MB3T" || record.scientificName !== "Homo sapiens Linnaeus, 1758" || record.rank !== "species" || record.sourceDatasetId !== "2144") throw new Error("Unexpected COL26.8 identity")
if (record.completeness?.status !== "incomplete" || record.expertReview?.status !== "not-reviewed") throw new Error("Dossier must remain incomplete and not reviewed")
if (Object.keys(record.facets ?? {}).sort().join("|") !== [...facetNames].sort().join("|")) throw new Error("Missing seven-facet set")
if (record.sources?.find(source => source.id === "jakobsson2025")?.licenseAssessment !== "item-level-verified") throw new Error("Article-level rights record missing")
if (record.sources?.find(source => source.id === "itis")?.stableId !== "ITIS TSN 180092") throw new Error("Exact ITIS crosswalk missing")
const compressed = brotliCompressSync(decoded, { params: {
  [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
  [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
} })
const manifest = {
  schemaVersion: 1,
  batchId: "primates-homo-sapiens-south-african-genomes-2026-09-24",
  releaseAlias: "COL26.8",
  input: { path: relative(inputPath), bytes: decoded.byteLength, sha256: sha256(decoded) },
  shard: {
    path: relative(shardPath), encoding: "brotli-jsonl", recordCount: records.length,
    decodedBytes: decoded.byteLength, decodedSha256: sha256(decoded),
    compressedBytes: compressed.byteLength, compressedSha256: sha256(compressed),
    brotliParameters: { mode: "text", quality: 11 },
  },
  generator: relative(fileURLToPath(import.meta.url)),
}
mkdirSync(dirname(shardPath), { recursive: true })
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + String.fromCharCode(10))
process.stdout.write(JSON.stringify({ recordCount: records.length, compressedSha256: manifest.shard.compressedSha256, manifest: relative(manifestPath) }) + String.fromCharCode(10))
