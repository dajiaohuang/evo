# Moss Flora of Central America excerpts

This collection contains 276 original English source excerpts for 276 uniquely
matched accepted COL26.8 species. The source is Missouri Botanical Garden's
Moss Flora of Central America archive distributed through WFO, retrieved on
2026-09-05. Archive metadata explicitly assigns CC BY 4.0 to description and
reference fields. Source, candidate and output hashes are in the import ledger.

The archive contains 704 descriptions; 428 have no unique accepted COL match
under this intake rule and are not imported. No fuzzy match or invented taxon
identifier is used. Of the selected IDs, 243 are absent from the five preceding
original-description collections. This is not a global completeness estimate.

All entries are source excerpts, not complete global species dossiers. Of the
selected entries, 54 reach the observed 32,759-character source boundary and
may be truncated. Another independent flag records a missing final paragraph
closing tag in 76 entries; that alone is not proof of missing text. No missing
passages are reconstructed. Historical regional habitat statements must not be
read as current global distribution assessments.

Original markup remains in the independently retained reviewed candidate and
ZIP. The importer uses the existing flora HTML-to-plain-text conversion:
paragraph boundaries are retained, tags removed and entities decoded after
parsing. Measurement characters are not interpreted as new markup. Text is
rendered as text, never injected as HTML. Source punctuation is not silently
corrected; archive row numbers and reference row locators remain available.

Full Web loads description shards on demand and keeps detailed passages
collapsed. Pages preview excludes the collection. Web validation does not
certify Android or iOS delivery.

```sh
python -B scripts/import-moss-descriptions.py /path/to/moss-candidate-reviewed.jsonl
npm run data:manifest
```
