import { createHash } from 'node:crypto'

// Match catalogueRoutePrefix in the existing static client. Keep all source
// descriptions for one species together, without publishing them in Core.
export function partitionSanbiDescriptions(records) {
  const shards = new Map()
  for (const record of records) {
    const prefix = createHash('sha256').update(record.colId).digest('hex').slice(0, 2)
    if (!shards.has(prefix)) shards.set(prefix, [])
    shards.get(prefix).push(record)
  }
  return [...shards.entries()].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)
}
