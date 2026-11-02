import { test } from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { checkNcbiAuthorCoverage } from './wikipedia-col-ncbi-author-preflight.mjs'

test('blocks newly added NCBI candidates until authorship is checked', () => {
  const db = new DatabaseSync(':memory:')
  try {
    db.exec("CREATE TABLE meta(key TEXT, value TEXT); CREATE TABLE ncbi_id_candidates(node_id TEXT,item TEXT); CREATE TABLE ncbi_synonym_id_candidates(node_id TEXT,item TEXT); CREATE TABLE ncbi_catalog_synonym_candidates(node_id TEXT,item TEXT); CREATE TABLE ncbi_candidate_lineage(node_id TEXT,item TEXT,author_comparison TEXT); CREATE TABLE ncbi_general_author_checks(node_id TEXT,item TEXT,author_comparison TEXT)")
    assert.equal(checkNcbiAuthorCoverage(db).status, 'not-installed')
    db.prepare('INSERT INTO meta VALUES(?,?)').run('ncbi_general_author_checks_sha256', 'a'.repeat(64))
    db.prepare('INSERT INTO ncbi_id_candidates VALUES(?,?)').run('A', 'Q1')
    assert.throws(() => checkNcbiAuthorCoverage(db), /1 NCBI candidates lack an authorship audit/)
    db.prepare('INSERT INTO ncbi_general_author_checks VALUES(?,?,?)').run('A', 'Q1', 'missing')
    assert.equal(checkNcbiAuthorCoverage(db).status, 'ready')
  } finally { db.close() }
})
