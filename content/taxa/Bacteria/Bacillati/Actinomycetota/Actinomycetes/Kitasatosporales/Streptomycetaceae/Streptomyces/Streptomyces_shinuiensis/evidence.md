---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Streptomyces shinuiensis Lim et al., 2026
    rank: species
    sourceDatasetId: "2015"
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
        - lpsn
    lifeStatusScope:
      wild: Biological statements refer only to wild-origin cultured type strain(s) and observations reported in the cited paper.
      domesticated: No domesticated or captive populations were studied or inferred.
      fossil: Fossil evidence was not assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 26
          sourceKey: col
          usage:
            licenseAppliesTo: COL26.8 nomenclatural usage only
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            version: COL26.8 pinned 2026-08-20; accepted usage checked 2026-09-24
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/VPZKQ
            stableId: VPZKQ
            locator: "Pinned COL26.8 API usage VPZKQ: exact name, authorship, species rank, accepted status and sourceDatasetId 2015"
          originalFields:
            - id
            - title
            - version
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-f95de1bc-e32c-8e57-a50a-f611b277d6e1
          metadataVariant: 0
          sourceKey: lpsn
          usage:
            licenseAppliesTo: Nomenclatural source data and pinned crosswalk only
            stableId: "69610"
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
          originalFields:
            - id
            - title
            - version
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-bba270e1-7ed5-8cfd-a048-f3aca5443ca6
          metadataVariant: 0
          sourceKey: paper
          usage:
            stableId: 10.4014/jmb.2510.10026
            accessedAt: 2026-09-24
            locator: Taxon-specific species account and cited item sections; linked journal/PMC article and item-level open-access metadata
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
            - licenseAssessment
            - scope
            - attribution
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: ChecklistBank dataset 316115 usage VPZKQ; LPSN record 69610; DOI 10.4014/jmb.2510.10026; PMC12740849
      inclusionCriteria: Exact accepted COL identity, exact pinned crosswalk and claims explicitly reported in the cited species treatment.
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
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
              - paper
            locator: Species account, ‘Description of Streptomyces shinuiensis sp. nov.’
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - paper
            locator: Abstract; Introduction; Materials and Methods, ‘Isolation and Strains’
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
              - paper
            locator: Abstract; phylogenetic/phylogenomic analyses; Taxonomic Conclusion
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
              - paper
            locator: Abstract; Materials and Methods, ‘Isolation and Strains’; species account
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      lifeHistory:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
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
      reviewDigest: null
---

# Streptomyces shinuiensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 usage VPZKQ checked for full name Streptomyces shinuiensis Lim et al., 2026, authorship Lim et al., 2026, species rank, accepted status and sourceDatasetId 2015; pinned LPSN crosswalk maps this COL ID to record 69610.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nomenclatural usage crosswalk only; no complete biological species-concept equivalence inferred.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Nomenclatural usage fields only; no biological claims are derived from COL.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Freese et al. (2026), List of Prokaryotic names with Standing in Nomenclature (LPSN), https://doi.org/10.1093/nar/gkaf1110
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Release-pinned source-record nomenclature crosswalk only; no biological claims or full species-concept equivalence inferred.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Exact release-pinned row COL VPZKQ -> LPSN 69610; row response SHA-256 b1a5e01ed611c44a930695e60c5bcb8d146657f0abfac238375b98782249c342
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Item page identifies open access under the article's Creative Commons Attribution license; article copyright is © 2025 authors. Article text and original material only; third-party items may have separate terms.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Lim et al. (2025), Streptomyces shinuiensis sp. nov., a Salternamides-Producing Bacterium Isolated from Saltern Sediment, DOI 10.4014/jmb.2510.10026
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Bounded COL26.8 identity and LPSN crosswalk check for VPZKQ, plus evidence extraction from one peer-reviewed species description.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Compared exact COL ID, scientific name, authorship, rank, accepted status and sourceDatasetId; checked the release-pinned COL-to-LPSN row; extracted only item-level species-account observations. No systematic multi-database, life-history, fossil, conservation or global-distribution search was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins, unbounded genus claims, unsupported ecological function, global range, life history, fossils and conservation.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The type strain HK10T is described as aerobic, Gram-stain-positive and filamentous, with branched substrate mycelium and aerial hyphae bearing spore chains. The species account reports growth on ISP2 at 25–40 °C (optimum 30 °C), pH 7–9 (optimum 8), and 0–9% NaCl (optimum 3%).
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Cultured type strain HK10T and stated laboratory media/conditions.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild-origin cultured type strain or isolates; claim limited to the stated observations.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Evidence is limited to the named strain(s), sites, methods and conditions in the cited paper; population-wide generalization was not assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
HK10T was isolated from saltern sediment on Shinui Island, Republic of Korea; the study identifies it as a producer of salternamides, with production context grounded in the cited prior isolation work.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One cultured type strain and its reported collection context; no field ecological role inferred.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild-origin cultured type strain or isolates; claim limited to the stated observations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Evidence is limited to the named strain(s), sites, methods and conditions in the cited paper; population-wide generalization was not assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors place HK10T in Streptomyces using 16S rRNA and phylogenomic evidence, and report ANI and dDDH values below their cited species delineation thresholds against comparator type strains.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The type strain and comparison set analyzed in this paper; authors’ taxonomic inference only.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild-origin cultured type strain or isolates; claim limited to the stated observations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Evidence is limited to the named strain(s), sites, methods and conditions in the cited paper; population-wide generalization was not assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The reported collection locality for HK10T is saltern sediment on Shinui Island, Republic of Korea.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Single type-strain collection locality; no wider range implied.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild-origin cultured type strain or isolates; claim limited to the stated observations.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Evidence is limited to the named strain(s), sites, methods and conditions in the cited paper; population-wide generalization was not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No systematic life-history study/search was performed; reproductive, developmental, behavioral and lifespan claims are not assessed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed; no fossil presence or absence is claimed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment or current formal Red List record was assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one peer-reviewed species treatment was assessed per record.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Several facets remain not assessed and supported claims are limited to specified strains, samples, sites and methods.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent expert review and comprehensive multi-source review are incomplete.
<!-- /evo:text -->
