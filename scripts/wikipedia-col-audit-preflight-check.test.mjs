import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

test('blocks pending and unreconciled page checks, then accepts matching evidence', () => {
  const audit = new DatabaseSync(':memory:'), inventory = new DatabaseSync(':memory:')
  try {
    audit.exec("CREATE TABLE meta(key,value); INSERT INTO meta VALUES('manifest_sha256','source'); CREATE TABLE jobs(url,item,status); CREATE TABLE unkeyed_pages(url,status); INSERT INTO jobs VALUES('url','Q1','pending')")
    inventory.exec('CREATE TABLE meta(key,value); CREATE TABLE page_audit_bad_urls(url); CREATE TABLE page_audit_bad_items(url,item)')
    const proof=Buffer.from(JSON.stringify({manifestSha256:'source'}))
    inventory.prepare('INSERT INTO meta VALUES(?,?)').run('page_audit_exclusions_sha256',createHash('sha256').update(proof).digest('hex'))
    assert.throws(()=>checkPageAudit(audit,inventory,proof),/page checks still need completion/)
    audit.exec("UPDATE jobs SET status='identity-conflict'")
    assert.throws(()=>checkPageAudit(audit,inventory,proof),/Unreconciled exclusions/)
    inventory.exec("INSERT INTO page_audit_bad_items VALUES('url','Q1')")
    assert.equal(checkPageAudit(audit,inventory,proof).status,'ready')
    assert.throws(()=>checkPageAudit(audit,inventory,Buffer.from('{}')),/do not match their proof/)
    audit.exec("INSERT INTO unkeyed_pages VALUES('url2','missing')")
    assert.throws(()=>checkPageAudit(audit,inventory,proof),/Unreconciled exclusions/)
  } finally { audit.close(); inventory.close() }
})
