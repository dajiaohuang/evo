# Flora of Australia descriptions

This projection contains 129 original English paragraphs for 46 uniquely linked
accepted COL26.8 species. It is a historical regional flora extract, not a
complete global species dossier, current conservation assessment, or provider
endorsement of the crosswalk.

## Source and rights

Australian Biological Resources Study, *Flora of Australia*, through the
[WFO 2020-12-03 archive](https://files.worldfloraonline.org/files/Australia/FoA/WFO_FoA_2020_12_03.zip).
The retained archive is 53,780 bytes, SHA-256
`3e90e2f0b3cc34dc3fa0340afc51de3c0d3643bd3929acaf626ee294491e9dd2`.
Retrieved 2026-09-05. Each selected description explicitly declares
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Preserve its Commonwealth of Australia rights-holder year (2017–2020), raw
rights label, publication citation, source URL and row locator. This permission
does not extend to other WFO archives or linked publications.

## Selection and transformation

The source contains 446 description rows, including higher taxa and label-only
rows. Only Biology, Diagnostic, Ecology, Habitat and Morphology paragraphs with
a unique accepted-species link in the pinned WFO/COL crosswalk are selected.
The 129 selected rows contain no `wfo-700...` family identifiers. Cross-date
identifier links do not establish identical taxonomic concepts.

References are joined by the pair of WFO taxon ID and source reference ID.
The source field is a reference identifier, **not a publication year**.
Escaped paragraph markup and inline tags are removed for plain-text rendering;
paragraph breaks, wording, units and uncertainty qualifiers are retained.
No distribution, conservation, genetics, bibliography-only or empty-type rows
are imported as biological description text in this batch.

The offline importer is `scripts/import-foa-descriptions.mjs`; it consumes the
reviewed candidate pinned by the ledger's input SHA-256. Original archive,
extracted tables and candidate remain in the separately retained data store,
outside the Git checkout. The committed compressed projection and
`data/sources/foa-descriptions-import-ledger.json` record output provenance.

## Delivery

Full-Web runtime generation emits lazy species-ID hash shards, loaded only for
the requested catalogue record. Paragraphs default to collapsed details and
show their citation, rights and license. Pages preview omits this collection.
Native application delivery and deployed-site acceptance are not certified by
this content batch.
