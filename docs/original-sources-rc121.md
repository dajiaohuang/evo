# RC121 Thaliacea and Appendicularia original-source projections

RC121 freezes two official ChecklistBank source archives issued on 2026-09-01
and projects their exact source-owned COL26.8 species boundaries. It does not
change Catalogue of Life's 2,183,133 accepted-species baseline and does not
claim species-concept equivalence, biological dossier completeness, fossil
evidence, independent scientific corroboration or human expert review.

| Source | COL boundary | Source result | Full-data payload |
| --- | ---: | ---: | ---: |
| *World List of Thaliacea*, dataset 1185, `10.48580/d3fw.v87`, CC BY | 78 | 78 exact accepted; 0 other outcomes | 1 file; 24,440 compressed / 265,714 uncompressed bytes |
| *World List of Appendicularia*, dataset 1178, `10.48580/d3fn.v89`, CC BY | 68 | 68 exact accepted; 0 other outcomes | 1 file; 21,044 compressed / 495,089 uncompressed bytes |

The Thaliacea boundary is the accepted-species closure below COL usage
`L2QHG`. The Appendicularia boundary is the accepted-species closure below
`622C5`; its parent Tunicata closure is used only to verify that the 3,000
Ascidiacea records from source 1186 and 78 Thaliacea records from source 1185
are excluded. Matching normalizes Unicode to NFC and collapses whitespace in
the scientific name and authorship. It does not use fuzzy, case-folded,
accent-folded, synonym-substitution or species-concept matching.

The committed metadata retains each source's actual title, version, version
DOI, citation HTML, editor list and contributor list. The committed archives
retain all 12 original members,
and every projected record retains its source accepted name, authorship,
source identifier, references and row locators for the applicable
`Taxon.txt`, `Name.txt`, `NameReference.txt` and `Reference.txt` rows. The
focused replay tests rebuild into isolated output roots, compare canonical
bytes and verify every projected field and archive-member digest.

`native-full` delivers both row files and verifies them through the release
inventory for Android and iOS. `web-light` publishes the complete source,
scope, count, limitation and canonical hash summaries but no row payloads.
This keeps GitHub Pages bounded while retaining an auditable path to the full
native data.
