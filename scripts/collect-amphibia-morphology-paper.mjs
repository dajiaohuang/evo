import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibian-morphology-2023-2026-10-02'
const repositoryUrl = 'https://api.github.com/repos/rdmpage/amphibian-traits-database/contents'
const response = await fetch(repositoryUrl, { signal: AbortSignal.timeout(45000) })
if (!response.ok) throw new Error(`Mirror listing HTTP ${response.status}`)
const files = await response.json(), file = files.find(file => file.name.endsWith('.pdf'))
if (!file) throw new Error('Published-paper mirror no longer listed')
const blob = await fetch(file.git_url, { signal: AbortSignal.timeout(45000) })
if (!blob.ok) throw new Error(`Mirror blob HTTP ${blob.status}`)
const data = await blob.json(), bytes = Buffer.from(data.content.replace(/\s/g, ''), 'base64')
const gitHash = crypto.createHash('sha1').update(Buffer.from(`blob ${bytes.length}\0`)).update(bytes).digest('hex')
if (gitHash !== file.sha || bytes.length !== file.size || bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error('Paper capture does not match pinned mirror blob')
fs.writeFileSync(`${dir}/primary-article.pdf`, bytes)
fs.writeFileSync(`${dir}/primary-article.manifest.json`, JSON.stringify({ capturedAt: new Date().toISOString(), doi: '10.1111/geb.13656', sourceRole: 'primary-published-article; repository mirror is transport, not the authority for claims', repositoryUrl, sourceUrl: file.git_url, mirrorBlobSha: file.sha, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), byteLength: bytes.length, publisherPdfPreviouslyUnavailable: true, redistributionRightsVerified: false, unitsVerified: false }, null, 2) + '\n')
console.log(JSON.stringify({ capturedBytes: bytes.length, unitsVerified: false, redistributionRightsVerified: false }))
