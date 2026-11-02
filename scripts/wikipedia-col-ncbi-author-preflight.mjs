import assert from 'node:assert/strict'

// Older inventories predate this audit. Once installed, every NCBI candidate
// must have an explicit authorship result before a new export can proceed.
export function checkNcbiAuthorCoverage(db) {
  const installed = db.prepare("SELECT value FROM meta WHERE key='ncbi_general_author_checks_sha256'").get()?.value
  if (!installed) return { status: 'not-installed' }
  assert.match(installed, /^[a-f0-9]{64}$/)
  const missing = db.prepare(`WITH candidates AS (
    SELECT node_id,item FROM ncbi_id_candidates UNION
    SELECT node_id,item FROM ncbi_synonym_id_candidates UNION
    SELECT node_id,item FROM ncbi_catalog_synonym_candidates
  ) SELECT COUNT(*) n FROM candidates c
    LEFT JOIN ncbi_candidate_lineage l ON l.node_id=c.node_id AND l.item=c.item
    LEFT JOIN ncbi_general_author_checks g ON g.node_id=c.node_id AND g.item=c.item
    WHERE l.node_id IS NULL AND g.node_id IS NULL`).get().n
  const invalid = db.prepare(`SELECT (SELECT COUNT(*) FROM ncbi_candidate_lineage WHERE author_comparison NOT IN ('matched','matched_original','different','missing')) +
    (SELECT COUNT(*) FROM ncbi_general_author_checks WHERE author_comparison NOT IN ('matched','matched_original','different','missing')) n`).get().n
  assert.equal(missing, 0, `${missing} NCBI candidates lack an authorship audit`)
  assert.equal(invalid, 0, `${invalid} NCBI authorship audit results are invalid`)
  return { status: 'ready', missing, invalid }
}
