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

## Dossier projection (2026-09-27)

The deterministic batch generator projects only the Portuguese morphology and
habitat rows into partial dossier claims. Of 28,896 source-associated accepted
species, 28,398 had a distinct morphology field or a concrete habitat value;
805 already had dossiers and were left unchanged, so 27,593 new incomplete
dossiers were added. The new records include 20,548 morphology claims and
23,619 dossiers with ecology claims. The source `habit` field is not treated as
life-history evidence.

Before projection, exact Portuguese morphology text shared across multiple COL
IDs was quarantined: 273 text groups affecting 1,048 accepted species. The 91
habitat rows explicitly labelled `Desconhecido` were retained in source data
and excluded as biological claims. Literal source punctuation and quotation
marks remain unchanged. Claims retain physical row numbers and dataset-reported
morphology citations; the archive's CC BY 4.0 declaration remains
`aggregate-declaration-only` for dossier completeness, and cited publications
were not assigned item-level rights without verification. All added dossiers
remain incomplete and not externally reviewed.

The source and full evidence queue stay outside App and GitHub Pages preview
payloads. App `native-core` and the Pages preview use the same curated
`data/pages-preview.json` selection, including Primates. Rebuild with
`npm run data:brazil-flora-dossiers:build`; verify reproducibility with
`npm run data:brazil-flora-dossiers:check`.
