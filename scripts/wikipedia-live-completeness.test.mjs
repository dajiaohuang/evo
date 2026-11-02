import { test } from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { countIncompleteLivePages } from './wikipedia-live-completeness.mjs'

test('requires the current page URL, item and successful live status before export', () => {
  const db = new DatabaseSync(':memory:')
  db.exec(`ATTACH DATABASE ':memory:' AS live_audit;
    CREATE TABLE jobs(url TEXT,item TEXT,locale TEXT,title TEXT,status TEXT);
    CREATE TABLE unkeyed_pages(url TEXT,locale TEXT,title TEXT,status TEXT);
    CREATE TABLE live_audit.results(kind TEXT,source_rowid INTEGER,url TEXT,item TEXT,locale TEXT,title TEXT,status TEXT);
    INSERT INTO jobs VALUES('https://en.wikipedia.org/wiki/A','Q1','en','A','snapshot-matched');
    INSERT INTO unkeyed_pages VALUES('https://en.wikipedia.org/wiki/B','en','B','snapshot-available');`)
  try {
    assert.deepEqual(countIncompleteLivePages(db), { keyed:1, unkeyed:1, total:2 })
    db.exec(`INSERT INTO live_audit.results VALUES('keyed',1,'https://en.wikipedia.org/wiki/A','Q2','en','A','matched');
      INSERT INTO live_audit.results VALUES('unkeyed',1,'https://en.wikipedia.org/wiki/B',NULL,'en','B','disambiguation');`)
    assert.deepEqual(countIncompleteLivePages(db), { keyed:1, unkeyed:1, total:2 })
    db.exec("UPDATE live_audit.results SET item='Q1' WHERE kind='keyed'; UPDATE live_audit.results SET status='available' WHERE kind='unkeyed'")
    assert.deepEqual(countIncompleteLivePages(db), { keyed:0, unkeyed:0, total:0 })
  } finally { db.close() }
})
