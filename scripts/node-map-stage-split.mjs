import { readFile, mkdir, copyFile, writeFile } from 'node:fs/promises'
import { resolve, join, dirname } from 'node:path'
import { createHash } from 'node:crypto'

// Build a reviewable asset directory; does not modify public/ or deploy.
const [candidate, frameParts, memberParts, output] = process.argv.slice(2).map(path => resolve(path))
if (!output) throw new Error('Usage: node-map-stage-split.mjs candidate frame-parts member-parts output')
const read = async path => JSON.parse(await readFile(path, 'utf8'))
const manifest = await read(join(candidate, 'manifest.json'))
const frames = await read(join(frameParts, 'parts-index.json'))
const members = await read(join(memberParts, 'index.json'))
for (const index of [frames, members]) {
  if (index.revision !== manifest.revision || index.treeRevision !== manifest.treeRevision) throw new Error('Index revision mismatch')
}
if (members.originalMembersSha256 !== manifest.members.sha256) throw new Error('Membership source mismatch')
async function copyVerified(root, file, targetUrl = file.url) {
  for (const url of [file.url, targetUrl]) {
    if (!/^[a-zA-Z0-9_./-]+\.json$/.test(url) || url.includes('..') || url.startsWith('/')) throw new Error('Invalid asset path')
  }
  const bytes = await readFile(join(root, file.url))
  if (createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`Checksum mismatch: ${file.url}`)
  const target = join(output, targetUrl)
  await mkdir(dirname(target), { recursive: true })
  try {
    const prior = await readFile(target)
    if (!prior.equals(bytes)) throw new Error(`Refusing to replace different asset: ${target}`)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await copyFile(join(root, file.url), target)
  }
  return { ...file, url: targetUrl }
}
for (const frame of manifest.frames) {
  const split = frames.frames.find(item => item.ageMa === frame.ageMa)
  if (!split || split.sha256 !== frame.sha256 || split.coastlineSha256 !== frame.coastlineSha256) throw new Error('Frame binding mismatch')
  frame.parts = []
  for (const part of split.parts) frame.parts.push(await copyVerified(frameParts, part))
  frame.recordCount = split.recordCount
  frame.truncated = (await read(join(candidate, frame.url))).truncated
}
manifest.memberBuckets = {}
for (const [bucket, parts] of Object.entries(members.buckets)) {
  manifest.memberBuckets[bucket] = []
  for (const part of parts) manifest.memberBuckets[bucket].push(await copyVerified(memberParts, part, `members/${manifest.revision}/${part.url}`))
}
delete manifest.members
await writeFile(join(output, 'manifest.json'), JSON.stringify(manifest))
console.log(JSON.stringify({ revision: manifest.revision, frames: manifest.frames.length, buckets: Object.keys(manifest.memberBuckets).length, output }))
