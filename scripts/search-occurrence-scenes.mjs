// Search exposes a bounded sample, not a complete distribution or a study locality.
export function occurrenceSearchScenes(profiles, snapshots) {
  const seen = new Set()
  const records = snapshots.flatMap((snapshot) => snapshot?.records ?? [])
  return profiles.flatMap((profile) => {
    if (!profile.extinct || !['genus', 'species'].includes(profile.rank.toLowerCase())) return []
    const entityId = profile.treeNodeId ?? profile.id
    const record = records.find((candidate) => (
      candidate.oid && candidate.matchedEntityIds?.includes(entityId)
      && candidate.referenceId && candidate.cid && candidate.paleoModelId
      && Number.isFinite(candidate.eag) && Number.isFinite(candidate.lag)
      && candidate.eag >= candidate.lag && candidate.lag >= 0 && candidate.eag <= 4567
      && typeof candidate.paleolat === 'number' && Number.isFinite(candidate.paleolat) && Math.abs(candidate.paleolat) <= 90
      && typeof candidate.paleolng === 'number' && Number.isFinite(candidate.paleolng) && Math.abs(candidate.paleolng) <= 180
      && !seen.has(candidate.oid)
    ))
    if (!record) return []
    seen.add(record.oid)
    const scene = new URLSearchParams({
      view: 'map', profile: profile.id, taxon: entityId, occurrence: record.oid,
      age: String((record.eag + record.lag) / 2), older: String(record.eag), younger: String(record.lag),
      lat: String(record.paleolat), lng: String(record.paleolng), zoom: '4', coords: 'paleo',
    })
    const locality = record.formation ?? record.nmn ?? record.cid
    return [{
      id: record.oid, kind: 'occurrence', packageId: record.packageId,
      title: `${record.tna ?? profile.scientificName} · ${locality} · ${record.oid}`,
      titleZh: `${profile.commonNameZh} · ${locality} · ${record.oid}`,
      route: `#/home?${scene}`,
      terms: [profile.scientificName, profile.commonName, profile.commonNameZh, record.formation, record.nmn, record.cid, record.referenceId],
    }]
  })
}
