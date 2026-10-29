# Illustrated Flora of Turkey

This collection retains 262 source descriptions linked through unambiguous
WFO identifiers to accepted COL26.8 species. The dated archive is
TurkeyIllustratedFlora_20240220.zip. Its explicit defaults identify morphology,
Turkish (`TR`, displayed as `tr`), Resimli Türkiye Florası attribution, and
CC BY 4.0. Original source names, authorship and families are retained apart
from the catalogue name. No missing traits or translations are authored.

The description extension is quoted TSV without a header. Source locators
refer to one-based parsed record numbers, not physical lines. The archive has
no reference extension; dataset attribution is not a paragraph-specific
publication citation. Unmatched and multiply matched identifiers are not
force-linked. Regional historical descriptions are not complete dossiers or
current global distribution evidence. Figures and PDFs are not included.

The explicit offline command
`node scripts/import-turkey-descriptions.mjs /path/to/reviewed-candidate.jsonl`
checks the reviewed input fingerprint and writes Brotli source storage with
an import ledger. Normal builds never fetch upstream. Full-Web builds emit
gzip COL-ID hash shards for on-demand loading and the existing release/offline
inventory. The Pages preview excludes this collection. Android/iOS readiness
is not established by this Web integration.
