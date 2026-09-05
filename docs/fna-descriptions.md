# Flora of North America descriptions

This collection imports 7,960 original English general descriptions from the
official WFO-hosted Flora of North America archive retrieved on 2026-09-06.
The archive's description/reference metadata explicitly supplies CC BY 4.0
and Flora of North America Association attribution; row license fields are empty.

The core contains identifiers only. Species selection therefore relies on the
pinned WFO/COL crosswalk, not an invented FNA rank: exactly one COL record and
accepted status. Display names come from COL. Original text, source identifiers,
citations and archive row locators are retained. Literature-type entries remain
separate retained evidence, not biological descriptions. Of the selected COL IDs,
6,889 were absent from the eight prior description collections.

Original markup remains independently retained outside Git. Plain-text conversion
uses the existing flora converter, without reconstructing missing text. Three
selected rows have unmatched paragraph tags and carry a source-ending warning;
this does not prove biological truncation. No selected row reaches the observed
4,000 UTF-16-unit source maximum, but completeness is not implied.

Full Web loads hash-partitioned gzip shards on demand with details collapsed.
Pages preview excludes this collection. Historical regional descriptions are not
modern global range assessments, complete dossiers or expert review. Identifier
links do not prove identical taxonomic concepts across dates. Web checks do not
certify native delivery.

## Reproduce the source projection

With the independently retained, hash-pinned final candidate:

```sh
python -B scripts/import-fna-descriptions.py /path/to/fna-candidate-final.jsonl
npm run data:manifest
```

The earlier `fna-candidate-reviewed.jsonl` has incorrect filtered row numbering
and is retained only as history. It is not an input to this importer.
