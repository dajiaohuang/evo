import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'

export function checkPageAudit(audit, inventory, proof) {
  const pending = audit.prepare("SELECT (SELECT COUNT(*) FROM jobs WHERE status NOT IN ('matched','snapshot-matched','identity-conflict','no-item','disambiguation','missing')) + (SELECT COUNT(*) FROM unkeyed_pages WHERE status NOT IN ('available','snapshot-available','disambiguation','missing')) AS n").get().n
  assert.equal(pending, 0, `${pending} page checks still need completion`)
  const installed = inventory.prepare("SELECT value FROM meta WHERE key='page_audit_exclusions_sha256'").get()?.value
  assert.equal(createHash('sha256').update(proof).digest('hex'), installed, 'Page audit exclusions do not match their proof')
  assert.equal(JSON.parse(proof).manifestSha256, audit.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get()?.value, 'Page audit and exclusion proof use different snapshots')
  assert.ok(audit.prepare('SELECT COUNT(*) n FROM jobs').get().n > 0, 'Page audit is empty')
  const badUrl = inventory.prepare('SELECT 1 FROM page_audit_bad_urls WHERE url=?')
  const badItem = inventory.prepare('SELECT 1 FROM page_audit_bad_items WHERE url=? AND item=?')
  let missingUrls = 0, missingItems = 0
  for (const row of audit.prepare("SELECT url FROM jobs WHERE status IN ('disambiguation','missing') UNION SELECT url FROM unkeyed_pages WHERE status IN ('disambiguation','missing')").iterate()) if (!badUrl.get(row.url)) missingUrls++
  for (const row of audit.prepare("SELECT url,item FROM jobs WHERE status IN ('identity-conflict','no-item')").iterate()) if (!badItem.get(row.url, row.item)) missingItems++
  assert.equal(missingUrls + missingItems, 0, `Unreconciled exclusions: ${missingUrls} URLs and ${missingItems} identities`)
  return { status: 'ready', pending, missingUrls, missingItems }
}
