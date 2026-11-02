import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fetchWikidata } from './wikidata-identity-fetch.mjs'

test('respects Retry-After before retrying a throttled identity batch', async () => {
  const oldFetch = globalThis.fetch, oldTimer = globalThis.setTimeout
  const waits = []; let calls = 0
  globalThis.setTimeout = (fn, ms) => { waits.push(ms); queueMicrotask(fn) }
  globalThis.fetch = async () => ++calls === 1
    ? new Response('', { status: 429, headers: { 'retry-after': '120' } })
    : Response.json({ entities: { Q1: { id: 'Q1' } } })
  try {
    assert.equal((await fetchWikidata('https://example.test')).entities.Q1.id, 'Q1')
    assert.equal(calls, 2)
    assert.deepEqual(waits, [120000])
  } finally { globalThis.fetch = oldFetch; globalThis.setTimeout = oldTimer }
})
