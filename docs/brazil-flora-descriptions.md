# Brazilian Flora 2020 descriptions

The pinned WFO archive supplies 122,273 fields for 28,896 uniquely matched
accepted COL26.8 species: 66,573 morphology, 28,710 habit and 26,990 habitat
fields. Languages are Portuguese (77,891), Spanish (22,191) and English
(22,191). These are source-provided structured descriptions and life-form or
habitat fields, not complete dossiers, newly authored summaries, or evidence
of current/global coverage. Languages are retained rather than translated.

The archive core contains WFO IDs only. Names and accepted species identities
come from the pinned WFO/COL crosswalk, not inferred source authorship.
Morphology citations join exactly by WFO ID and source/reference identifier.
Habit and habitat lack such identifiers and receive only the EML dataset
citation. Original text, citation fields and physical archive row numbers
(including the header) are retained. Literal TSV quotation marks are not
silently removed. Older EML dates are not a claim of current live data.

Group Brazil Flora, REFLORA Program licenses the extracted data under CC BY 4.0.
The import ledger pins the archive, candidate, decoded and compressed output
SHA-256 hashes. Linked articles, figures and images are not included or licensed
by inference. Original archives and reviewed candidates remain independently
retained outside the source repository.

For an intentional offline import, run
`node scripts/import-brazil-flora-descriptions.mjs /path/to/reviewed-candidate.jsonl`.
Normal builds use committed Brotli source storage and emit gzip runtime shards
through the existing COL-ID hash routing. Full-Web delivery adds these shards
to the release inventory; the Pages preview excludes them. The catalogue page
loads one shard on demand and displays collapsed, language-labelled original
fields with their citation scope. Native release readiness is not established
by this Web integration.
