---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Tatraea yunnanensis C.J.Y. Li & Q. Zhao
    rank: species
    sourceDatasetId: "2073"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - fungalNames
        - li2024
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domestication or cultivation claim is made; managed plantation collections are identified as such in the source.
      fossil: Not assessed; no fossil occurrence claim is made.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 23
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned checklist identity metadata only
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/CC6RZ
            stableId: COL26.8 usage CC6RZ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage CC6RZ
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAppliesTo
            - licenseAssessment
            - scope
        - referenceId: ref-f2c5e0ee-be6d-8c13-aa73-c4a12bb64ebc
          metadataVariant: 0
          sourceKey: fungalNames
          usage:
            licenseAppliesTo: Species Fungorum Plus checklist taxonomic metadata; used for identity only
            stableId: Index Fungorum RecordID 901180
            accessedAt: 2026-09-24
            locator: COL26.8 crosswalk row CC6RZ; Index Fungorum record 901180
            attribution: Royal Botanic Gardens, Kew (2023), Species Fungorum Plus, DOI 10.15468/ts7wsb; Index Fungorum record 901180
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-7fcdc024-8f76-8cee-af39-f702dc4bf840
          metadataVariant: 0
          sourceKey: li2024
          usage:
            licenseAppliesTo: Published article text; dossier statements are paraphrases and do not redistribute full text or figures
            stableId: doi:10.3897/mycokeys.102.112565; Index Fungorum IF901180
            accessedAt: 2026-09-24
            locator: Species treatment Tatraea yunnanensis C.J.Y. Li & Q. Zhao; Index Fungorum IF901180
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - li2024
            locator: Species treatment T. yunnanensis, Description and Notes; Figure 7; holotype HKAS 128273
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - li2024
            locator: Species treatment T. yunnanensis, Description and Material examined; vouchers HKAS 128273 and 128272
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - li2024
            locator: Results, Phylogenetic analyses; Figure 2; Figure 3A; species treatment Notes
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - li2024
            locator: Species treatment T. yunnanensis, Holotype and Material examined; vouchers HKAS 128273 and 128272
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
---

# Tatraea yunnanensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 ID, accepted name, authorship, rank, status, and sourceDatasetId were verified against the pinned Fungi resource pack. The COL26.8 Species Fungorum Plus crosswalk maps this COL ID and exact accepted label to Index Fungorum record 901180; the original article names the same species and prints the same Index Fungorum identifier.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The accepted COL26.8 species usage and the linked source-owned Index Fungorum name usage. Biological claims retain the named species treatment, vouchers, collection localities, and study limitations.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims concern field-collected fungal specimens from decayed wood in the named Yunnan collection settings; some type localities are managed plantations. The paper does not characterize all management or population contexts.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and sourceDatasetId only; no biological evidence copied.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact name-usage identity link only; not a source of biological claims.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Li C.-J.-Y., Chethana K.W.T., Eungwanichayapant P.D., Zhou D.-Q., Zhao Q. (2024). MycoKeys 102:127–154. https://doi.org/10.3897/mycokeys.102.112565
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Original taxonomic study; claims cite only the species-specific treatment, material examined, or study phylogeny.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The species description reports dry apothecia 3.8–5.0 mm wide × 2.5–4.1 mm high (mean 4.8 ± 0.8 × 3.7 ± 0.8 mm, n=10); the sampled fruiting bodies were scattered, superficial when fresh, short-stipitate and glabrous. The description records brown receptacles and pastel-green to light-green discs.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
The article reports two collections from Yunnan, China: Jingdong County, Puer City (1455 m, 2022-08-23) and Tengchong City (1714 m, 2022-08-16). The study’s localities do not establish a global range.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Claims apply to the field collections and taxonomic account identified by the cited voucher; do not infer beyond those specimens.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The account describes measured collection material, but a genus-wide diagnosis, additional populations, developmental stages, and within-species variation were not systematically assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors describe T. yunnanensis as saprobic on decayed wood; the two listed collections were made from decayed wood.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
The article reports two collections from Yunnan, China: Jingdong County, Puer City (1455 m, 2022-08-23) and Tengchong City (1714 m, 2022-08-16). The study’s localities do not establish a global range.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Claims apply to the field collections and taxonomic account identified by the cited voucher; do not infer beyond those specimens.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The source describes substrate and saprobic habit, but interaction mechanisms, host identity for unidentified wood, seasonality, and population ecology remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In the combined LSU and ITS phylogeny, T. yunnanensis was sister to T. macrospora (98% maximum-likelihood bootstrap, 1.0 Bayesian posterior probability). The reported PHI value was Φw=1.0 for that pair.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The article reports two collections from Yunnan, China: Jingdong County, Puer City (1455 m, 2022-08-23) and Tengchong City (1714 m, 2022-08-16). The study’s localities do not establish a global range.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Claims apply to the field collections and taxonomic account identified by the cited voucher; do not infer beyond those specimens.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The placements are specific to one study’s sampled taxa and loci; broader phylogenomic evidence, alternative topologies, and divergence times were not reviewed. The authors also note that genus placement remains provisional because the type species lacks genetic data.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The article lists the type from Jingdong County, Puer City, Yunnan (1455 m, 2022-08-23) and a paratype from Tengchong City, Yunnan (1714 m, 2022-08-16). These are the documented study localities.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
The article reports two collections from Yunnan, China: Jingdong County, Puer City (1455 m, 2022-08-23) and Tengchong City (1714 m, 2022-08-16). The study’s localities do not establish a global range.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Claims apply to the field collections and taxonomic account identified by the cited voucher; do not infer beyond those specimens.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Only the named Yunnan study collections were reviewed; no global occurrence search, georeferenced range boundary, or native/introduced assessment was completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one original taxonomic paper was reviewed; four facets have limited species-treatment claims and remain partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history, fossils, and conservation remain not-assessed; no facet has a systematic literature and database search log.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The linked Index Fungorum identity is exact for this COL usage, but broad species-concept reconciliation and external expert review have not been completed.
<!-- /evo:text -->
