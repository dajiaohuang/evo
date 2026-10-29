import { DatabaseSync } from 'node:sqlite'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('node-map schema preserves identity, ages and reconstruction compatibility', () => {
  const db = new DatabaseSync(':memory:')
  try {
    db.exec('PRAGMA foreign_keys = ON')
    db.exec(readFileSync(new URL('./node-map-schema.sql', import.meta.url), 'utf8'))
    const hash = 'a'.repeat(64)
    db.prepare('INSERT INTO map_tree_release VALUES (?, ?, ?)').run('tree', 'source:v1', hash)
    db.exec("INSERT INTO map_node VALUES ('tree', 'parent'), ('tree', 'child')")
    db.exec("INSERT INTO map_node_ancestor VALUES ('tree', 'parent', 'parent', 0), ('tree', 'parent', 'child', 1)")
    db.prepare('INSERT INTO map_evidence_source VALUES (?, ?, ?, ?)').run('source', 'fixture://source', 'v1', hash)
    db.exec("INSERT INTO map_dataset_release VALUES ('data', 'tree', 'bounded-sample', 1, 'source')")
    const insertOccurrence = db.prepare(`INSERT INTO map_occurrence
      (dataset_release_id, tree_release_id, occurrence_id, node_id, source_id, mapping_source_id,
       older_ma, younger_ma, modern_longitude, modern_latitude) VALUES ('data', 'tree', ?, ?, 'source', 'source', ?, ?, ?, ?)`)
    insertOccurrence.run('occ:1', 'child', 70, 60, 179, 10)
    insertOccurrence.run('occ:unknown', 'child', null, null, null, null)
    assert.throws(() => insertOccurrence.run('bad-age', 'child', 60, 70, 0, 0), /CHECK/)
    assert.throws(() => insertOccurrence.run('half-age', 'child', 60, null, 0, 0), /CHECK/)
    assert.throws(() => insertOccurrence.run('half-location', 'child', 70, 60, null, 0), /CHECK/)
    assert.throws(() => insertOccurrence.run('bad-node', 'absent', 70, 60, 0, 0), /FOREIGN KEY/)
    assert.throws(() => db.exec("INSERT INTO map_node_ancestor VALUES ('tree', 'child', 'child', 1)"), /CHECK/)
    db.exec("INSERT INTO map_reconstruction_model VALUES ('model:v1', 'source', 'mantle', 0, 100, 0)")
    db.exec("INSERT INTO map_reconstruction_frame VALUES ('frame', 'model:v1', 'mantle', 0, 65, 'source')")
    assert.throws(() => db.exec("INSERT INTO map_reconstruction_frame VALUES ('too-old', 'model:v1', 'mantle', 0, 101, 'source')"), /outside model/)
    assert.throws(() => db.exec("INSERT INTO map_reconstruction_frame VALUES ('wrong-anchor', 'model:v1', 'mantle', 1, 66, 'source')"), /FOREIGN KEY/)
    assert.throws(() => db.exec("UPDATE map_reconstruction_frame SET age_ma = 101 WHERE id = 'frame'"), /outside model/)
    const insertPosition = db.prepare(`INSERT INTO map_occurrence_position VALUES ('data', ?, 'frame', 'source', ?, ?, ?, ?, ?)`)
    insertPosition.run('occ:1', 'ready', 1, -179, 12, null)
    insertPosition.run('occ:unknown', 'missing-plate', null, null, null, 'No plate assignment')
    assert.throws(() => db.exec("UPDATE map_occurrence_position SET longitude = 181 WHERE occurrence_id = 'occ:1'"), /CHECK/)
    assert.throws(() => db.exec("UPDATE map_occurrence_position SET status = 'failed' WHERE occurrence_id = 'occ:1'"), /CHECK/)
    assert.deepEqual(db.prepare('PRAGMA foreign_key_check').all(), [])
  } finally { db.close() }
})
