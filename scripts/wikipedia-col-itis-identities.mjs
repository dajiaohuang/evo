import { externalIdStatus } from './wikipedia-col-external-id.mjs'
export function itisIdentityCandidates(rows, nodeId, isKnownId=()=>true) {
  return rows.filter(row => {
    const ids = JSON.parse(row.col_ids ?? '[]')
    return externalIdStatus(ids,nodeId,isKnownId)!=='conflict'
  })
}
export function itisExactIdentity(rows, nodeId) {
  const exact = rows.filter(row => row.item && JSON.parse(row.col_ids ?? '[]').includes(nodeId))
  const items = new Set(exact.map(row => row.item))
  return items.size === 1 ? exact[0] : null
}
