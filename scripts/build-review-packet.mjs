import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { zipSync } from 'fflate'
import { rootDir } from './data-lib.mjs'
import { buildPackageReviewMaterials, computePackageContentDigest } from './check-review-freshness.mjs'

function argument(name) {
  const exact = process.argv.indexOf(`--${name}`)
  if (exact >= 0) return process.argv[exact + 1]
  return process.argv.find((value) => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function mediaType(path) {
  if (path.endsWith('.json')) return 'application/json'
  if (path.endsWith('.md')) return 'text/markdown'
  return 'text/plain'
}

function reviewInstructions(packageId, contentDigest) {
  return `# Evo Atlas package review instructions\n\nPackage: ${packageId}\nContent digest: ${contentDigest}\n\n## Mandatory read protocol\n\n1. Read every file listed in FILE_MANIFEST.json.\n2. First report the files successfully read and the files that could not be read.\n3. Do not judge the package from this instruction file, a summary, or filenames alone.\n4. Every finding must name the file path, object ID, and field.\n5. Check taxonomy, geological ages, morphology, ecology, biogeography, citations, and Chinese-English consistency.\n6. Separate release blockers, major findings, minor findings, and items that cannot be confirmed.\n7. Never infer that an unsupported statement is correct.\n8. Finish with an explicit publish recommendation.\n\n## Required report sections\n\n1. Files read\n2. Files not read\n3. Overall conclusion\n4. Release blockers\n5. Major findings\n6. Minor findings\n7. Taxonomy and concept scope\n8. Geological ranges\n9. Morphology and ecology\n10. Biogeography\n11. Claim-reference support\n12. Chinese-English consistency\n13. Cross-page consistency\n14. Unconfirmed items\n15. Recommended changes\n16. Publish recommendation\n\n## Required fields for every finding\n\n- File path\n- Object ID\n- Field\n- Current content\n- Problem\n- Evidence or reasoning\n- Recommended correction\n- Severity\n\nThis packet records evidence for an external ChatGPT-assisted consistency check. Only the repository maintainer may set review.json to reviewed or reviewed-with-caveats after resolving the findings. It is not external domain-expert peer review.\n`
}

function packetMarkdown(packageId, contentDigest, files) {
  const sections = [...files.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([path, bytes]) => {
    const language = path.endsWith('.json') ? 'json' : path.endsWith('.md') ? 'markdown' : 'text'
    return `## ${path}\n\n~~~~${language}\n${bytes.toString('utf8').trimEnd()}\n~~~~`
  })
  return `# ${packageId} review packet\n\nThis self-contained rendering mirrors the files in the ZIP packet. The authoritative read ledger is FILE_MANIFEST.json.\n\nContent digest: \`${contentDigest}\`\n\n${sections.join('\n\n')}\n`
}

const packageId = argument('package')
if (!packageId) throw new Error('Usage: npm run review:packet -- --package <package-id>')
const outputArgument = argument('out') ?? 'review-output'
const outputDirectory = resolve(rootDir, outputArgument)
if (outputDirectory !== rootDir && !outputDirectory.startsWith(`${rootDir}\\`) && !outputDirectory.startsWith(`${rootDir}/`)) {
  throw new Error(`Review output must stay inside the repository: ${outputDirectory}`)
}

const sourceManifest = JSON.parse((await import('node:fs')).readFileSync(join(rootDir, 'data/manifest.json'), 'utf8'))
const { packageData, files: reviewFiles } = buildPackageReviewMaterials(packageId)
const contentDigest = computePackageContentDigest(reviewFiles)
const packetFiles = new Map(reviewFiles)
packetFiles.set('REVIEW_INSTRUCTIONS.md', Buffer.from(reviewInstructions(packageId, contentDigest), 'utf8'))
packetFiles.set('CONTENT_DIGEST.txt', Buffer.from(`${contentDigest}\n`, 'utf8'))

const listedFiles = [...packetFiles.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([path, bytes]) => ({
  path,
  sha256: sha256(bytes),
  bytes: bytes.byteLength,
  mediaType: mediaType(path),
  required: true,
}))
const fileManifest = {
  schemaVersion: 1,
  packageId,
  packageVersion: packageData.version,
  generatedAt: sourceManifest.generatedAt,
  contentDigest,
  protocol: 'Read every entry in files before beginning scientific review. FILE_MANIFEST.json is the ledger and is intentionally not self-hashed.',
  files: listedFiles,
}
packetFiles.set('FILE_MANIFEST.json', Buffer.from(`${JSON.stringify(fileManifest, null, 2)}\n`, 'utf8'))

const zipEntries = Object.fromEntries([...packetFiles.entries()].map(([path, bytes]) => [path, [new Uint8Array(bytes), { mtime: new Date('1980-01-01T00:00:00.000Z') }]]))
const archive = Buffer.from(zipSync(zipEntries, { level: 9 }))
const markdown = Buffer.from(packetMarkdown(packageId, contentDigest, packetFiles), 'utf8')
const externalManifest = Buffer.from(`${JSON.stringify({
  ...fileManifest,
  outputs: {
    markdown: { path: `${packageId}-review.md`, bytes: markdown.byteLength, sha256: sha256(markdown) },
    archive: { path: `${packageId}-review.zip`, bytes: archive.byteLength, sha256: sha256(archive) },
  },
}, null, 2)}\n`, 'utf8')

mkdirSync(outputDirectory, { recursive: true })
writeFileSync(join(outputDirectory, `${packageId}-review.md`), markdown)
writeFileSync(join(outputDirectory, `${packageId}-review.zip`), archive)
writeFileSync(join(outputDirectory, `${packageId}-review-manifest.json`), externalManifest)

console.log(`Built review packet for ${packageId}: ${packetFiles.size} readable files, ${contentDigest}.`)
console.log(`Output: ${outputDirectory}`)
