import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibian-generation-length-2025-2026-10-02'
fs.mkdirSync(dir, { recursive: true })
const get = async url => {
  const response = await fetch(url, { signal: AbortSignal.timeout(45000) })
  if (!response.ok) throw new Error(`Source capture HTTP ${response.status}: ${url}`)
  return Buffer.from(await response.arrayBuffer())
}
const metadataUrl = 'https://datadryad.org/api/v2/datasets/doi%3A10.5061%2Fdryad.w0vt4b93t'
const metadataBytes = await get(metadataUrl), metadata = JSON.parse(metadataBytes)
if (metadata.versionNumber !== 7) throw new Error('Dryad release changed; explicitly review the new version before capture')
fs.writeFileSync(`${dir}/dryad-metadata.json`, metadataBytes)
const filesUrl = `https://datadryad.org${metadata._links['stash:version'].href}/files`
const fileBytes = await get(filesUrl), files = JSON.parse(fileBytes)
fs.writeFileSync(`${dir}/dryad-files.json`, fileBytes)
const entries = []
for (const file of files._embedded['stash:files'].filter(file => ['amphibian_full_data.csv', 'generation_length_herps.csv', 'README.md'].includes(file.path))) {
  // The API download link requires API authentication; the published landing
  // page offers this public download route for the same deposited file ID.
  const id = file._links.self.href.split('/').at(-1)
  const url = `https://datadryad.org/downloads/file_stream/${id}`
  const bytes = await get(url), sha256 = crypto.createHash('sha256').update(bytes).digest('hex')
  if (file.digestType !== 'sha-256' || sha256 !== file.digest || bytes.length !== file.size) throw new Error(`Downloaded file differs from deposited descriptor: ${file.path}`)
  fs.writeFileSync(`${dir}/${file.path}`, bytes)
  entries.push({ file: file.path, url, sha256, byteLength: bytes.length, depositedDigestMatches: true })
}
fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify({ capturedAt: new Date().toISOString(), metadataUrl, filesUrl, doi: metadata.identifier, versionNumber: metadata.versionNumber, publicationDate: metadata.publicationDate, license: metadata.license, entries, readerClaimsAuthored: false, inferenceBoundary: 'Observed generation lengths and GAM/PGLS model predictions must remain separate; model estimates are not field measurements, longevity or age at maturity.' }, null, 2) + '\n')
console.log(JSON.stringify({ capturedFiles: entries.length, version: metadata.versionNumber, readerClaimsAuthored: false }))
