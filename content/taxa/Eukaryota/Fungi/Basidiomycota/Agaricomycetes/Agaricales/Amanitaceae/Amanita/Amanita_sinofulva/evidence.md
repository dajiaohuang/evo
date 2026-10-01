---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang
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
        - cui2023
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Not assessed; no domestication or cultivation claim is made.
      fossil: Not assessed; no fossil occurrence claim is made.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 23
          sourceKey: col
          usage:
            licenseAppliesTo: Checklist taxon identity metadata only
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/C8SPF
            stableId: COL26.8 usage C8SPF
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage C8SPF
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
        - referenceId: ref-789b46dd-1383-8197-af1f-8802b76c9c31
          metadataVariant: 0
          sourceKey: fungalNames
          usage:
            licenseAppliesTo: Species Fungorum Plus taxonomic checklist record used to verify name identity
            stableId: Index Fungorum RecordID 571588; Fungal Names FN 571588
            accessedAt: 2026-09-24
            locator: COL26.8 crosswalk row C8SPF; Index Fungorum record 571588
            attribution: Royal Botanic Gardens, Kew (2023), Species Fungorum Plus, DOI 10.15468/ts7wsb; Index Fungorum record 571588
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
        - referenceId: ref-7f5bb31a-045b-84d9-af62-87074e5c5795
          metadataVariant: 0
          sourceKey: cui2023
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.3390/jof9080862; Fungal Names FN 571588
            accessedAt: 2026-09-24
            locator: Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang, Fungal Names FN 571588; section 3.2
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
              - cui2023
            locator: Section 3.2, Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang, Diagnosis and Description; Type
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
              - cui2023
            locator: Section 3.2, Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang, Habitat
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
              - cui2023
            locator: Results, phylogenetic relationships; Figure 1 and Figures S1–S4
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
              - cui2023
            locator: Section 3.2, Amanita sinofulva Q. Cai, Y.Y. Cui & Zhu L. Yang, Type, Additional specimens examined, and Distribution
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

# Amanita sinofulva

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 accepted usage was checked by COL ID and exact accepted label against the pinned COL hierarchy; Species Fungorum Plus dataset 2073 crosswalk maps this COL ID by exact source-dataset-and-verbatim-label to Index Fungorum record / Fungal Names FN 571588. The 2023 paper independently names the same species and cites that FN identifier.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The accepted COL26.8 species usage and its explicitly linked Species Fungorum / Fungal Names name usage. Biological claims retain the paper’s species treatment, collection, place, and study limits.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims concern the authors’ field-collected fungal basidiomata and herbarium vouchers in natural forest settings as described in the paper.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity, authorship, rank, status and sourceDatasetId only; no biological evidence copied.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Identity link only; not a biological evidence source.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases scientific claims and does not redistribute article figures or full text
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Cui, Y.-Y.; Hao, Y.-J.; Guo, T.; Yang, Z.L.; Cai, Q. (2023), Journal of Fungi 9(8):862. https://doi.org/10.3390/jof9080862
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Original taxonomic study of Amanita sect. Vaginatae in China; each cited passage is a named species account or paper phylogeny.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The species account describes the type basidioma and microscopic characters and compares its spores and pileus with A. orientifulva and A. suborientifulva.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Type from Nanjian, Dali, Yunnan, China, collected 2015-06-27; the article lists additional Anhui and Yunnan collections from 2017 and cites broader eastern, central, and southwestern China occurrence. Tibet and Hunan are not asserted here because the paper presents those from an ITS-tree inference.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild fungal type collection described by the authors.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
One taxonomic paper and its sampled material do not cover developmental variation, broad population variation, or a complete diagnostic synthesis.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors report solitary-to-scattered fruiting on soil in subtropical forests dominated by Fagaceae, sometimes mixed with Pinus.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Type from Nanjian, Dali, Yunnan, China, collected 2015-06-27; the article lists additional Anhui and Yunnan collections from 2017 and cites broader eastern, central, and southwestern China occurrence. Tibet and Hunan are not asserted here because the paper presents those from an ITS-tree inference.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild field collections; the stated forest association does not establish a physiological host relationship.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The account does not establish interaction mechanisms, resource dependence, seasonality, or population-level ecology.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors’ multilocus analysis places A. sinofulva close to A. orientifulva and A. suborientifulva; their ITS analysis also includes additional provisionally or previously misidentified collections.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Type from Nanjian, Dali, Yunnan, China, collected 2015-06-27; the article lists additional Anhui and Yunnan collections from 2017 and cites broader eastern, central, and southwestern China occurrence. Tibet and Hunan are not asserted here because the paper presents those from an ITS-tree inference.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Modern herbarium collections analyzed in the cited study.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Placement is limited to the study taxa, loci, sampling, and analyses; no divergence-time or broader phylogenomic synthesis was assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The authors report A. sinofulva from eastern, central, and southwestern China and list dated collections from Anhui and Yunnan; the paper separately attributes Tibet and Hunan to ITS-tree inference, which is excluded from this direct occurrence claim.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Type from Nanjian, Dali, Yunnan, China, collected 2015-06-27; the article lists additional Anhui and Yunnan collections from 2017 and cites broader eastern, central, and southwestern China occurrence. Tibet and Hunan are not asserted here because the paper presents those from an ITS-tree inference.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Reported field-collected specimens; cultivated, introduced, and global range status not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The paper reports its known range and examined collections; no exhaustive global occurrence search or native/introduced assessment was completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One original taxonomic study supplies direct evidence for only the cited morphology, field habitat, sampled regional distribution, and study-specific multilocus placement; these facets remain partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history, fossils, and conservation have not been assessed; no facet has a reproducible systematic search and screening log.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The species concept is linked by the source-owned Fungal Names / Index Fungorum identifier, but broader taxonomic concept reconciliation and external expert review have not been completed.
<!-- /evo:text -->
