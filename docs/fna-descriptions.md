# Flora of North America descriptions

This collection imports 7,960 original English general descriptions from the
official WFO-hosted Flora of North America archive retrieved on 2026-09-06.
The archive metadata supplies CC BY 4.0 and Flora of North America Association
attribution. Imported description rows retain their item-level license URL and
rights holder, including the source item used in the first audited FNA dossier.

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

## Audited species dossiers

The 2026-09-27 increments link thirty-two accepted species to exact FNA rows.
*Pinus longaeva* (`COL26.8` `77L64`; WFO `wfo-0000481202`) uses row 9926,
source identifier `8B9ADD07-8A9F-4AAF-BBD9-E83C0E9B8011`, cited as Bailey
(2003). *Pinus albicaulis* (`4J224`; WFO `wfo-0000482599`) uses row 6701,
source identifier `8BCF01AB-57A3-4F43-82EC-BF64C0F41BD4`, cited as Engelmann
(2003). A further morphology-only batch links *P. aristata* (`4J22N`, row
6702), *P. banksiana* (`4J237`, row 14994), *P. contorta* (`4J24Y`, row
10294), *P. coulteri* (`4J254`, row 9918), *P. edulis* (`4J269`, row 6698),
*P. engelmannii* (`4J26G`, row 5837), *P. flexilis* (`4J273`, row 10309),
*P. lambertiana* (`4J29V`, row 10286), *P. monophylla* (`4J2C7`, row 3880),
*P. palustris* (`4J2DX`, row 15806), *P. radiata* (`4J2FP`, row 9920), and
*P. attenuata* (`77L5J`, row 15216). Their exact FNA source identifiers, WFO
IDs, item citations, morphology fragments, and license declarations are pinned
in the batch input and manifest.

A second morphology-only batch links *P. cembroides* (`4J24K`, row 11863),
*P. echinata* (`4J267`, row 15805), *P. glabra* (`4J27G`, row 3679),
*P. monticola* (`4J2CG`, row 1950), *P. muricata* (`4J2CS`, row 9919),
*P. ponderosa* (`4J2F3`, row 15414), *P. pungens* (`4J2FK`, row 14995),
*P. quadrifolia* (`4J2FN`, row 15450), *P. resinosa* (`4J2G5`, row 9272),
*P. rigida* (`4J2G9`, row 15807), *P. strobiformis* (`4J2HX`, row 6696),
*P. strobus* (`4J2HY`, row 14780), *P. torreyana* (`4J2JZ`, row 16139),
*P. virginiana* (`4J2KR`, row 15810), *P. serotina* (`6VKSL`, row 12269),
*P. elliottii* (`77KTN`, row 10700), *P. sabiniana* (`C85JD`, row 1949), and
*P. clausa* (`VM3L9`, row 15425). Exact FNA source identifiers, WFO IDs, item
citations, morphology fragments, and license declarations are pinned in
`data/sources/fna-pinus-morphology-dossier-batch-2-2026-09-27.json` and its
manifest. Two other candidate rows were excluded because they describe
varieties or geography, not species morphology: *P. sylvestris* (`4J2J5`, row
14781) and *P. leiophylla* (`6VL5T`, row 880).

For every dossier, the accepted COL name, authorship, rank, source dataset, and
complete parent chain are verified from the pinned COL26.8 registry. Each
record keeps only claims supported by its cited FNA account: *P. longaeva* has
one partially supported morphology facet; *P. albicaulis* has partially
supported morphology and life-history facets; both twelve- and eighteen-species
batches have a partially supported seed-cone morphology facet only. All other
facets remain not assessed. English claims in the two morphology batches remain
marked untranslated. FNA measurements are account-level descriptions, not population
means; none of these regional accounts is treated as a global range assessment
or proof of identical species circumscription across checklist releases. Each
row's CC BY 4.0 declaration and the archive license metadata are retained with
attribution. Direct eFloras and WFO resource fetches returned 502 for *P.
albicaulis* during its audit; those claims use only the hash-pinned archived row
and its citation. All thirty-two dossiers remain in the canonical evidence store;
FNA source descriptions remain excluded from App and GitHub Pages preview
payloads.

## Deterministic stratified morphology batch

The 2026-09-27 semantic audit sampled 100 of the 7,284 FNA-linked accepted COL
species that had no dossier in the base evidence index. It sorted COL IDs in
ordinal order, divided that ordered population into 100 equal-rank strata, and
selected position `floor((i + 0.5) * 7,284 / 100)` in each stratum (zero-based
`i`). Ninety-nine rows directly support a bounded morphology excerpt and were
added as incomplete, not-reviewed dossiers. `4RHKL` (*Ranunculus recurvatus*)
was excluded: its row only states a variety count and broad regions, without a
species-level morphology claim or a sufficiently scoped distribution claim.

The exact 100 sampled IDs, source row numbers and IDs, citations, item rights
fields, excerpt text, exclusion rationale, baseline dossier-ID digest, and input
digest are retained in
`data/sources/fna-stratified-morphology-dossier-batch-2026-09-27.json`.
Rebuild the archive records and manifest with
`node scripts/build-fna-stratified-morphology-dossier-batch-2026-09-27.mjs`.
The output dossier shard remains in the audit evidence store and is not a
measure of coverage for unsampled FNA rows. Each dossier records one
partially-supported morphology facet; life history, ecology, evolution,
distribution, fossils, and conservation remain not assessed. English excerpts
remain untranslated.

## Shared App and Pages preview selection

App native-core and GitHub Pages preview use the same curated content selection.
Primates remain a priority within that shared selection. The complete FNA source,
this stratified evidence batch, and the full species evidence queue remain audit
assets; none is an App native-core or Pages preview payload. A dossier may enter
the shared selection only through the curated package/profile selection used by
both editions.
