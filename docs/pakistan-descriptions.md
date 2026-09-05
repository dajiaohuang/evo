# Flora of Pakistan descriptions

This collection contains 2,657 English general descriptions for uniquely linked
accepted COL26.8 species from the WFO Flora of Pakistan archive, retrieved on
2026-09-05. Missouri Botanical Garden attribution and the archive's explicit
CC BY 4.0 description/reference defaults are retained. All selected records
have citations matched by WFO ID and source identifier, with original source
and reference row locators.

The archive has 4,663 description rows, including infraspecific taxa. Intake
requires exactly one COL crosswalk record and accepted status: 1,850 rows have
no match, 97 have multiple matches and 59 have a unique non-accepted match.
No fuzzy mapping or invented identifiers are used. Of the selected IDs, 2,108
are absent from the six prior original-description collections; this is not a
worldwide completeness estimate.

The original source fields remain independently retained outside Git. The
importer removes italic, bold and paragraph HTML markup and decodes entities
using the existing flora plain-text converter. Text is never rendered as raw
HTML. No character cap was observed, but that does not prove completeness.
Regional historical descriptions are not current global range assessments;
WFO/COL links do not prove identical taxonomic concepts across source dates.

Full Web loads shards on demand with detailed passages collapsed. Pages preview
excludes this collection. Web checks do not certify a native release.

```sh
python -B scripts/import-pakistan-descriptions.py /path/to/pakistan-candidate.jsonl
npm run data:manifest
```
