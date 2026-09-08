# Flora of China source descriptions

This layer contains 20,049 English descriptions linked to unique accepted
COL26.8 species through the pinned WFO crosswalk. It is a historical regional
source, not a current Chinese inventory, a global distribution dataset, or a
complete species dossier. Automated integrity checks are not scientific review.
Each selected species has exactly one description in this layer. The review
date records engineering checks of source parsing, identity joins, attribution
and byte integrity; it does not indicate independent botanical peer review.

## Source and attribution

The retained [WFO Flora of China archive](https://files.worldfloraonline.org/files/eFloras/Flora_Of_China/Flora_Of_China.zip)
was obtained on 2026-09-05 and reviewed on 2026-09-06. Those dates are not
publication dates. Archive SHA-256:
`4c0b89280efdcfd0ef8dc753cca5d63566ddf8c34542b0bb4a78cdce799b63a9`.

The archive metadata supplies the CC BY 4.0 license and Missouri Botanical
Garden attribution defaults. Per-description rights and rights-holder values
are preserved where provided. Each citation is joined by both source taxon ID
and reference identifier, not guessed from row position. Record locators count
parsed records, not physical lines in quoted TSV files. Empty reference title,
creator and date fields remain empty; the bibliographic citation is retained.
The import ledger is `data/sources/flora-china-descriptions-import-ledger.json`.

Descriptions and citations are converted to readable plain text. Paragraphs,
line breaks and character entities are retained in readable form; numeric
subscripts retain notation such as C₃ and C₄. Source markup is never rendered
as application HTML. Figures, PDFs and the source tracking image are not copied
or fetched. No translations or replacement scientific summaries are generated.

## Reproduction and checks

`scripts/prepare-flora-china-descriptions.py` accepts three positional paths:
the retained ZIP, the **decoded JSON bytes** of the pinned WFO crosswalk, and
a new candidate JSONL output. It uses Python's standard library and refuses
changed archive, crosswalk or output fingerprints. Decode the repository's
`data/sources/wfo-plant-crosswalk-col26.8.json.br` with a Brotli-capable tool
without parsing or reserializing the decoded JSON. Do not substitute a newer
crosswalk. The output path must not already exist.
The required decoded crosswalk SHA-256 is
`980144add135db3fa709392552534e19e33bc45605a97f5bafeb4d239d1621af`.
The converter was exercised with Python 3.13.13. Use the repository's Node.js
22 environment for the importer and build commands.

Then pass the candidate path to `scripts/import-flora-china-descriptions.mjs`
using Node.js. This verifies the candidate fingerprint, compresses its exact
bytes and writes the canonical source and import ledger. The decoded source
is 35,276,565 bytes, SHA-256
`2ecd4df59916b5b0073724f6b32ac04f5df9297e484d3975bacc34b55eda99a7`.

Run `npm run data:manifest` and `npm run data:build` after importing. Runtime
delivery uses the existing checksummed gzip route shards; Brotli is canonical
source storage only. `npm test` includes the full source-integrity test and
the Python text-conversion regression tests. `npm run verify:web` is the Web
release gate, not proof of Android or iOS readiness.

## Exclusions

Of 37,029 description records, 16,401 have no pinned crosswalk match, 252 map
to nonaccepted entries and 327 have ambiguous mappings. These are excluded,
not silently resolved by name similarity. The resulting 20,049 links do not
establish complete coverage of any resource pack.
