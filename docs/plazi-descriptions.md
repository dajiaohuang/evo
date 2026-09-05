# Original Plazi descriptions

This bounded collection contains 35 original paragraphs for 16 accepted COL26.8
species: seven fishes, seven flowering plants and two Syspira spiders. These are
attributed treatment excerpts, not complete biological dossiers or a global
coverage claim. Lazy Web delivery is implemented and focused loader/component
checks pass; deployed browser acceptance remains unverified.

## Rights and provenance

The reviewed Darwin Core Archives declare CC0 for the extracted data in their
embedded EML. That declaration does not license linked publication PDFs or
images. Each paragraph retains its publication citation, treatment URL, archive
SHA-256 and description-extension row number. No figures are included.
The projection and import ledger pin the reviewed input and output bytes.

Run `node scripts/import-plazi-descriptions.mjs /path/to/retained-intake` only
for an intentional offline import. Normal builds read the committed projection
and do not fetch upstream. Original downloaded archives remain separately retained.

## Interpretation boundaries

Measurements describe the publications' specimens and samples, not universal
species limits. Historical or proposed conservation assessments, figure-only
references and specimen-only descriptions were not imported. Source spelling,
encoding defects and inconsistent wording are not silently corrected. In
particular, some S. tigrina palp traits differ between diagnosis and description;
the texts must not be converted into an unqualified synthesized trait list.

Hedeoma salomeae's diagnosis is Latin; its original source language metadata is
retained separately. The other imported paragraphs are English.

Hedeoma salomeae and Begonia nhatii use individually reviewed author-variant
links supported by publication bibliographic evidence, not a fuzzy matching
rule. Both source authorship and the pinned catalogue name are retained.
Begonia's strict WFO crosswalk remains unmatched. The corresponding IPNI names
are 77371664-1 and 77369870-1; matching protologues are Phytotaxa 726:293 (2025)
and 720:82 (2025), respectively. Publication authorship and nomenclatural author
abbreviations are not interchangeable fields.

The source name Hyphessobrycon peugeoti maps through the explicit COL26.8
synonym usage KVD6K to accepted 3NRZH, Hyphessobrycon peugeotorum. The original
source name and usage ID remain visible. This is one accepted species, not two;
the description retains the publication's original spelling. Unmatched
Chamaepinnularia mirim is not assigned a fabricated release-scoped ID.

Wittmackia aurantiolilacina uses accepted COL26.8 VBWPB. The source's
`Leme, E. Fernandez & Amorim 2025` and the catalogue's `Leme, E.P.Fern. & Amorim`
are linked by an individually reviewed binomial, lineage and protologue match,
supported by IPNI 77372190-1 and Phytotaxa 730(2):189–198 (2025),
[doi:10.11646/phytotaxa.730.2.6](https://doi.org/10.11646/phytotaxa.730.2.6).
Only its comparative diagnosis is included; material-associated morphology and
the conservation analysis embedded in the distribution section are excluded.

## Delivery

Full-Web builds partition records by the existing COL-ID hash route and add
files to the existing release inventory. The catalogue detail page loads one
route on demand, with original paragraphs collapsed by default. The Pages
preview omits the collection. Complete-Atlas offline storage uses the release
inventory; saving an individual package is a different action. Native release
readiness is not established by this Web work.
