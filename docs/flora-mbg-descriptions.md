# MBG Flora description sources

This source pack preserves exact accepted WFO/COL identities from the World Flora Online DwC-A archives published by the Missouri Botanical Garden. The archive bytes remain retained outside Git; the importer pins their SHA-256 values and the decoded WFO/COL crosswalk before writing the runtime Brotli source.

| source | archive | accepted species | descriptions | license |
| --- | --- | ---: | ---: | --- |
| Flora de Nicaragua | `Flora_Of_Nicaragua.zip` | 4,917 | 4,919 general | CC BY 4.0 |
| Flora of Panama | `Flora_Of_Panama.zip` | 2,899 | 7,635 general/habit/distribution | CC BY 4.0 |

Only exact, unique accepted WFO/COL matches are materialized. Synonyms, ambiguous names, non-species rows, and unmatched archive rows remain retained but are not silently mapped. Source HTML is normalized to plain text for the runtime while row numbers, source UUIDs, reference records, citation scope, rights, and the archive-level citation are preserved. No translation, inferred trait, linked image, or PDF is redistributed.

The archive's language field is preserved as metadata (`en` plus a note that the archive declares English); this is not a claim that every excerpt's prose is English.
