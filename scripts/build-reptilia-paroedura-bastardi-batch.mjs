import { createHash } from "node:crypto"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, constants as zlibConstants } from "node:zlib"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const inputPath = resolve(root, "data/knowledge/raw-dossiers/reptilia-paroedura-bastardi-2026-09-24.jsonl")
const shardPath = resolve(root, "data/knowledge/catalogue-dossiers-reptilia-paroedura-bastardi-2026-09-24.jsonl.br")
const manifestPath = resolve(root, "data/knowledge/catalogue-dossiers-reptilia-paroedura-bastardi-2026-09-24.batch-manifest.json")
const rel = path => path.slice(root.length + 1).replaceAll("\\", "/")
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex")
const expected = new Map([["4DR4J", "819024"], ["4DR57", "819035"]])
const facets = ["morphology", "lifeHistory", "ecology", "evolution", "distribution", "fossil", "conservation"]
const decoded = readFileSync(inputPath)
if (!decoded.length || decoded.at(-1) !== 10) throw new Error("Raw JSONL must end with a newline")
const records = decoded.toString("utf8").trimEnd().split(/\r?\n/).map((line, i) => {
  try { return JSON.parse(line) } catch (error) { throw new Error("Invalid JSON on line " + (i + 1) + ": " + error.message) }
})
const seen = new Set()
for (const record of records) {
  if (!expected.has(record.colId) || seen.has(record.colId)) throw new Error("Unexpected or duplicate COL ID: " + record.colId)
  if (record.rank !== "species" || record.sourceDatasetId !== "1008" || record.completeness?.status !== "incomplete" || record.expertReview?.status !== "not-reviewed") throw new Error("Unexpected identity/review state for " + record.colId)
  if (Object.keys(record.facets ?? {}).sort().join("|") !== [...facets].sort().join("|")) throw new Error("Missing seven-facet set for " + record.colId)
  if (record.sources?.find(s => s.id === "miralles2021")?.licenseAssessment !== "item-level-verified") throw new Error("Missing article-level rights record for " + record.colId)
  if (record.sources?.find(s => s.id === "itis")?.stableId !== "ITIS TSN " + expected.get(record.colId)) throw new Error("ITIS crosswalk mismatch for " + record.colId)
  seen.add(record.colId)
}
if (seen.size !== expected.size) throw new Error("Batch must contain exactly both verified usages")
const compressed = brotliCompressSync(decoded, { params: {
  [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
  [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
} })
const manifest = {
  schemaVersion: 1,
  batchId: "reptilia-paroedura-bastardi-2026-09-24",
  releaseAlias: "COL26.8",
  input: { path: rel(inputPath), bytes: decoded.byteLength, sha256: sha256(decoded) },
  shard: {
    path: rel(shardPath), encoding: "brotli-jsonl", recordCount: records.length,
    decodedBytes: decoded.byteLength, decodedSha256: sha256(decoded),
    compressedBytes: compressed.byteLength, compressedSha256: sha256(compressed),
    brotliParameters: { mode: "text", quality: 11 },
  },
  generator: rel(fileURLToPath(import.meta.url)),
}
mkdirSync(dirname(shardPath), { recursive: true })
writeFileSync(shardPath, compressed)
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
process.stdout.write(JSON.stringify({ recordCount: records.length, compressedSha256: manifest.shard.compressedSha256, manifest: rel(manifestPath) }) + "\n")
