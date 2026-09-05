# Flora Mesoamericana original excerpts

The collection contains 4,858 original-language excerpts for 4,850 uniquely
linked accepted COL26.8 species. Spanish and English remain untranslated. These
are historical regional source excerpts, not complete global species dossiers.

## Source and permission

Missouri Botanical Garden, *Flora Mesoamericana*, through the
[WFO archive](https://files.worldfloraonline.org/files/MBG/Flora_Mesoamericana/Flora_Mesoamericana.zip),
retrieved 2026-09-05. Archive: 5,967,530 bytes; SHA-256
`55a67bc3092d472aced949cd61bc17b40cb15ad50ac0254f54918b9246df67bb`.
All 8,510 source description rows explicitly declare
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reference metadata
declares the same default. Preserve Missouri Botanical Garden attribution,
each associated publication citation and source locator. This does not license
other WFO archives or separately linked publications.

## Matching and transformations

Only WFO IDs with exactly one matching crosswalk row, marked accepted in the
pinned COL26.8 projection, are selected. This does not prove species-concept
equivalence across dates. The source's general description type is preserved;
it is not reclassified as a reviewed Evo claim or current conservation status.

Description source IDs can be comma-separated. Each is joined with its WFO ID
to a Reference identifier, retaining every citation. Reference TSV uses quoted
fields; naive line splitting is not the reference parser. The offline retained
candidate includes original HTML and row locators. Import uses Python standard
library HTML parsing, removes tags, decodes entities and normalizes whitespace;
it does not reconstruct missing text or translate scientific assertions.

## Incomplete-source boundary

The archive has a 4,000-character text ceiling. Some excerpts end mid-sentence;
143 selected rows reach the observed ceiling. Every delivered row is explicitly
an excerpt, and rows at the ceiling get an additional warning. Being shorter
than the ceiling does not certify completeness. The original archive and
candidate are retained independently outside Git. Never add invented endings
or count these records as fully researched species dossiers.

## Delivery and reproduction

`scripts/import-meso-descriptions.py` imports the SHA-pinned candidate and writes
the compressed source projection and ledger. Run
`python scripts/test_import_meso_descriptions.py` for focused text conversion
tests. Full-Web runtime uses lazy species-ID hash shards. Catalogue descriptions
default to collapsed details, with language, citations, rights and source
limitations visible. Pages preview excludes the collection. Native and deployed
site acceptance are not certified by this content batch.
