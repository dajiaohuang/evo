import fs from 'node:fs'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
const path = process.argv[2]
const receipt = JSON.parse(fs.readFileSync(path))
const all = new Set(), current = new Set()
let sum = 0
for (const part of receipt.partitions) {
  const ids = new Set()
  for (const page of part.pages) {
    const bytes = fs.readFileSync(page.file)
    if (crypto.createHash('sha256').update(bytes).digest('hex') !== page.gzipSha256) throw Error(`Changed capture: ${page.file}`)
    const raw = zlib.gunzipSync(bytes)
    if (crypto.createHash('sha256').update(raw).digest('hex') !== page.sha256) throw Error(`Changed decoded capture: ${page.file}`)
    for (const row of JSON.parse(raw).resultList.result) ids.add(`${row.source}:${row.id}`)
  }
  const gap = part.dateGapReconciliation
  const proof = gap ? JSON.parse(fs.readFileSync(gap.manifestPath)) : null
  const hitCount = proof ? proof.finalHitCount : part.refreshedHitCount
  const sourceReceipt = proof ? proof.finalReceipt : part.pages.filter(p => p.refresh).at(-1)?.file
  const omitted = [...new Set((proof?.ranges ?? []).flatMap(r => r.oldIdentitiesNotReturned ?? []))]
  const active = new Set([...ids].filter(id => !omitted.includes(id)))
  if (active.size !== hitCount || !sourceReceipt || proof?.error) throw Error(`Incomplete dated partition: ${part.label}: ${active.size}/${hitCount}`)
  part.complete = true
  part.snapshotAccounting = { distinctIdentities: ids.size, currentlyReturnedIdentities: active.size, retainedPreviouslyReturnedIdentities: omitted, hitCount, sourceReceipt, gapReceipt: gap?.manifestPath ?? null }
  sum += hitCount
  for (const id of ids) all.add(id)
  for (const id of active) current.add(id)
}
if (current.size !== sum) throw Error('Publication-year partitions overlap in source identities')
receipt.complete = true
receipt.distinctIdentities = all.size
receipt.partitionHitCountSum = sum
receipt.completedAt = new Date().toISOString()
receipt.retainedWholeQueryObservations = fs.readdirSync(receipt.root).filter(name => /^refreshed-root-\d+\.json\.gz$/.test(name)).sort().map(name => {
  const file = `${receipt.root}/${name}`, bytes = fs.readFileSync(file), raw = zlib.gunzipSync(bytes)
  return { file, hitCount: JSON.parse(raw).hitCount, sha256: crypto.createHash('sha256').update(raw).digest('hex'), gzipSha256: crypto.createHash('sha256').update(bytes).digest('hex') }
})
receipt.snapshotAccounting = { complete: true, distinctIdentities: all.size, currentlyReturnedIdentities: current.size, retainedPreviouslyReturnedIdentities: all.size-current.size, perPartitionCountsReconciled: true, transactionalProviderSnapshot: false, latestObservedWholeQueryHitCount: receipt.finalRoot.hitCount, wholeQueryObservedAtDifferentTime: true, sourceUpdatesAfterCaptureIncluded: false }
receipt.snapshotAccounting.latestObservedWholeQueryHitCount = receipt.retainedWholeQueryObservations.at(-1)?.hitCount ?? receipt.finalRoot.hitCount
receipt.completionBasis = 'Every disjoint publication-year partition and the outside/unrecorded-year complement has complete metadata pagination and a dated source-count reconciliation. Provider updates continue during capture; this is a bounded collection snapshot, not a transactional or continuously current index.'
fs.writeFileSync(path, JSON.stringify(receipt, null, 2) + '\n')
console.log(JSON.stringify(receipt.snapshotAccounting))
