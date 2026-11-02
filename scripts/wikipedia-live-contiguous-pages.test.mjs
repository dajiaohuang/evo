import { test } from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { assertWithinLiveCeiling, matchesIdentityReviewMode, selectContiguousLivePages } from './wikipedia-live-contiguous-pages.mjs'

test('does not advance identity review across a backfilled future row', () => {
  const db=new DatabaseSync(':memory:')
  db.exec(`CREATE TABLE checkpoint(kind TEXT PRIMARY KEY,last_rowid INTEGER);
    CREATE TABLE results(kind TEXT,source_rowid INTEGER,url TEXT,title TEXT,target_title TEXT,actual_item TEXT,checked_at TEXT,locale TEXT,status TEXT);
    INSERT INTO checkpoint VALUES('unkeyed:ceb',100);
    INSERT INTO results VALUES('unkeyed',20,'a','a','a','Q1','now','ceb','available');
    INSERT INTO results VALUES('unkeyed',200,'b','b','b','Q2','now','ceb','available');`)
  try {
    const first=selectContiguousLivePages(db,'ceb',0)
    assert.equal(first.ceiling,100)
    assert.deepEqual(first.pages.map(row=>row.source_rowid),[20])
    assert.doesNotThrow(()=>assertWithinLiveCeiling(0,100,first.ceiling))
    assert.throws(()=>assertWithinLiveCeiling(0,200,first.ceiling),/continuous page-scan checkpoint/)
    db.exec("UPDATE checkpoint SET last_rowid=200 WHERE kind='unkeyed:ceb'")
    assert.deepEqual(selectContiguousLivePages(db,'ceb',20).pages.map(row=>row.source_rowid),[200])
  } finally { db.close() }
})

test('separates redirected titles from exact titles and requires an item', () => {
  const redirect={title:'Speculator',target_title:'Speculation',actual_item:'Q1'}
  assert.equal(matchesIdentityReviewMode(redirect,true),true)
  assert.equal(matchesIdentityReviewMode(redirect,false),false)
  assert.equal(matchesIdentityReviewMode({...redirect,target_title:'Speculator'},false),true)
  assert.equal(matchesIdentityReviewMode({...redirect,actual_item:null},true),false)
})
