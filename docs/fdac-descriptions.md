# Flora d'Afrique Centrale descriptions

The collection contains 8,021 original morphology and habitat passages for
4,156 uniquely linked accepted COL26.8 species. It is regional historical
source text, not a global species dossier, current distribution assessment,
or expert review of Evo's taxonomy.

Source: Meise Botanic Garden's WFO archive, retrieved 2026-09-05, under CC BY 4.0.
The import ledger records archive, candidate and output SHA-256 digests.
All selected source texts were independently compared with their original
archive fields. WFO/COL links do not establish identical taxonomic concepts
across publication dates.

Original punctuation and measurement signs remain unchanged. The archive does
not declare language; records retain `und`, not inferred French. Nineteen
passages have no bibliographic citation in the source: their missing status,
Meise attribution, license and archive row locators remain explicit. Multiple
reference row locators are preserved even when their citation text is identical.

Full Web loads hash-routed description shards on demand. Pages preview omits
the collection. Neither import nor Web validation certifies a native release.

Rebuild using the independently retained, reviewed candidate:

```sh
python scripts/import-fdac-descriptions.py /path/to/fdac-candidate.jsonl
npm run data:manifest
```

Do not reconstruct missing passages or silently normalize source formatting.
