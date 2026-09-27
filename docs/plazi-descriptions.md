# Original Plazi descriptions

This bounded collection contains 99 original paragraphs for 27 accepted COL26.8
species: seven fishes, 18 flowering plants and two Syspira spiders. The eight
Cestrum article names include two source synonyms delivered under explicit
accepted COL usages. These are
attributed treatment excerpts, not complete biological dossiers or a global
coverage claim. Lazy Web delivery is implemented and focused loader/component
checks pass; deployed browser acceptance remains unverified.

RC150 repairs eight Cestrum accepted identifiers and two synonym usage IDs that
were not present in the retained COL26.8 release. The exact name, authorship,
source dataset 1141 and explicit redirect evidence are recorded in
`data/sources/authority-link-evidence/plazi-cestrum-col26.8.json`. The 40 original
candidate rows were reconstructed to their previous SHA-256 before changing
identifiers; all 99 paragraph bodies and non-ID evidence fields remain unchanged.

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

The three Lycianthes species from Dean, Poore & Kang (2020) are exact accepted
COL26.8 records 7X2WL, 7X2WM and 7X2WR, with WFO 2026-06 identifiers
wfo-1000023513, wfo-1000023514 and wfo-1000023516. The committed import ledger
records CC0 for extracted archive data and contributes 24 English description
rows. The original Plazi source
types (materials_examined, diagnosis, description, distribution,
biology_ecology, etymology and discussion), treatment IDs, reference IDs and
page ranges are retained; canonical display types are accompanied by the
original `sourceType`. This is article-scoped evidence, not a complete species
dossier, and the linked figures and publication PDF are not redistributed.

## Lycianthes species dossiers

The 2026-09-27 batch adds incomplete, not-reviewed dossiers for all three
accepted usages. Each has one comparative morphology claim, one voucher-month
life-history claim, one habitat/elevation claim and one attributed distribution
claim; the remaining three facets are not assessed. Exact rows, claim wording,
COL/WFO identity links, source scopes and checksums are recorded in the
[batch manifest](../data/knowledge/catalogue-dossiers-plazi-lycianthes-batch-2026-09-27.batch-manifest.json)
and [reviewed input](../data/sources/plazi-lycianthes-dossier-batch-2026-09-27.json).

## Syspira species dossiers

The 2026-09-27 Syspira batch adds incomplete, not-reviewed records for accepted
COL26.8 usages `5448F` (*Syspira longipes*) and `5448K` (*S. tigrina*). Each
record has partial morphology and ecology facets; life history, evolution,
distribution, fossil and conservation remain not assessed. Source rows 7, 8 and
10 support the bounded *S. longipes* claims. For *S. tigrina*, rows 14, 15 and
17 were checked: its morphology claim uses only the diagnosis's carapace pattern
and live color, while the conflicting embolus and cymbial-groove wording in the
description is explicitly excluded. Ecology remains limited to the article's
reported microhabitats or cited, location-bound pitfall samples. Row locators,
identity checks and checksums are recorded in the [batch manifest](../data/knowledge/catalogue-dossiers-plazi-syspira-batch-2026-09-27.batch-manifest.json)
and [reviewed input](../data/sources/plazi-syspira-dossier-batch-2026-09-27.json).

The source ZIP is absent from this checkout and its embedded EML was not
rechecked for this batch. The retained archive CC0 declaration is scoped to
extracted Plazi records; the article's item-level reuse rights remain unknown.
No article prose, PDF, or figures are redistributed.

For this dossier batch, the extracted-record CC0 declaration is taken from the
committed Plazi import ledger and source documentation. The source ZIP is not
present in this checkout, so its embedded EML was not rechecked during this
batch. The cited article's item-level reuse rights remain unknown; claims are
short paraphrases, and no article prose, PDF, or figures are redistributed.
Plazi row 21 spells the prose name as `talamancesis`; its retained exact
`sourceColUsageId`, treatment, authorship and WFO identifier map to accepted
COL26.8 `Lycianthes talamancensis` (`7X2WR`), which is used in the dossier.

The Cestrum treatment from Monro (2012), Plazi dataset
`0879c1f1-55a2-47fb-8fa8-7ca0fa3e8e92`, contributes 40 English rows for eight
source names. The archive is CC0 and is pinned by SHA-256
`0953e88f539f8b31a25f4cb32bcb46dc82af3ba522a6974fa875309ad88b1214`. Six names
are exact accepted COL26.8 World Plants usages. `Cestrum haberii` and
`Cestrum talamancaense` are explicit COL synonym usages redirected to accepted
`C. rugulosum` and `C. irazuense`; their source names, usage IDs and redirects
remain in every description row. WFO identifiers and the original treatment,
reference, page and source-type fields are retained. This is publication-scoped
evidence; figures and the linked article PDF are not redistributed.

The source name Hyphessobrycon peugeoti maps through the explicit COL26.8
synonym usage KVD6K to accepted 3NRZH, Hyphessobrycon peugeotorum. The original
source name and usage ID remain visible. This is one accepted species, not two;
the description retains the publication's original spelling. Unmatched
Chamaepinnularia mirim is not assigned a fabricated release-scoped ID.

The 2026-09-27 Rio fish batch adds incomplete, not-reviewed dossiers for the
direct accepted COL26.8 usages `3M86Z` (*Hollandichthys taramandahy*) and
`6RGPT` (*Microglanis lundbergi*). Claims are limited to treatment rows 4/5/8
and 4/5/7, respectively, with specimen, comparison-sample, locality, and
label-source boundaries recorded in each dossier locator. The two source
archives retain separate names and SHA-256 values. Their ZIP files are absent
from this checkout and embedded EML was not rechecked; the ledger's CC0
declaration applies only to extracted Plazi rows, while article item-level
reuse rights remain unknown. Five facets per dossier remain not assessed.
Details are recorded in the [batch manifest](../data/knowledge/catalogue-dossiers-plazi-rio-fish-batch-2026-09-27.batch-manifest.json)
and [reviewed input](../data/sources/plazi-rio-fish-dossier-batch-2026-09-27.json).

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
