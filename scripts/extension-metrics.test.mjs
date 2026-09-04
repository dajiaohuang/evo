import { expect, it } from 'vitest'
import { summarizeExtensions } from './manifest-extension-utils.mjs'

it('counts separately listed source-only files exactly once, including already-inclusive totals', () => {
  const col = { path: 'example/col.gz', bytes: 11, sourceBytes: 17 }
  const upstream = { path: 'example/upstream.gz', bytes: 13, sourceBytes: 19 }
  const totals = { extensionCount: 1, extensionFileCount: 2, extensionCompressedBytes: 24, extensionSourceBytes: 36 }
  expect(summarizeExtensions([{ files: [col], upstreamOnlyFiles: [upstream], totalCompressedBytes: 24, totalSourceBytes: 36 }])).toEqual(totals)
  expect(summarizeExtensions([{ files: [col, upstream], upstreamOnlyFiles: [upstream] }])).toEqual(totals)
})
