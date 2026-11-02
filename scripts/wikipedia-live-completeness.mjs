// The caller supplies a source database with the live database attached as
// live_audit. Requiring the original URL and identity prevents stale row IDs
// from being counted as completed checks.
export function countIncompleteLivePages(source) {
  const keyed = source.prepare(`SELECT COUNT(*) n FROM jobs s LEFT JOIN live_audit.results r
    ON r.kind='keyed' AND r.source_rowid=s.rowid AND r.url=s.url AND r.item=s.item AND r.locale=s.locale AND r.title=s.title AND r.status='matched'
    WHERE s.status='snapshot-matched' AND r.source_rowid IS NULL`).get().n
  const unkeyed = source.prepare(`SELECT COUNT(*) n FROM unkeyed_pages s LEFT JOIN live_audit.results r
    ON r.kind='unkeyed' AND r.source_rowid=s.rowid AND r.url=s.url AND r.locale=s.locale AND r.title=s.title AND r.status='available'
    WHERE s.status='snapshot-available' AND r.source_rowid IS NULL`).get().n
  return { keyed, unkeyed, total: keyed + unkeyed }
}
