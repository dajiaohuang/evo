---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Haloarcula montana Liu et al., 2025
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
            url: https://www.checklistbank.org/dataset/316115/taxon/VBNLQ
            stableId: VBNLQ
            locator: "Pinned COL26.8 API usage VBNLQ: exact name, authorship, species rank, accepted status and sourceDatasetId 2015"
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
        - referenceId: ref-3072de1c-9c73-853e-a15b-8e6a7eec3493
          metadataVariant: 0
          sourceKey: lpsn
          usage:
            licenseAppliesTo: Nomenclatural source data and pinned crosswalk only
            stableId: "65841"
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
        - referenceId: ref-2bfab92f-ac96-84bb-a416-e54dfbd34c8c
          metadataVariant: 0
          sourceKey: paper
          usage:
            stableId: 10.3390/biology14060615
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
      queryOrPath: ChecklistBank dataset 316115 usage VBNLQ; LPSN record 65841; DOI 10.3390/biology14060615; PMC12189638
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
            locator: Results, phenotypic characterization; ‘Description of Haloarcula montana sp. nov.’
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
            locator: Abstract; strain isolation account
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
            locator: Abstract; genome-based reclassification and phylogenetic analyses; species description
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
            locator: Abstract; strain isolation account
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

# Haloarcula montana

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 usage VBNLQ checked for full name Haloarcula montana Liu et al., 2025, authorship Liu et al., 2025, species rank, accepted status and sourceDatasetId 2015; pinned LPSN crosswalk maps this COL ID to record 65841.
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
Exact release-pinned row COL VBNLQ -> LPSN 65841; row response SHA-256 3112d0bf8fd4644045ab91663648240a5fa55adb742335e78b420004e0f25184
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Article states open access under CC BY 4.0; article text and original material only; third-party items may have separate terms.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Liu et al. (2025), Genome-Based Reclassification of Two Haloarcula Species and Characterization of Haloarcula montana sp. nov., DOI 10.3390/biology14060615
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Bounded COL26.8 identity and LPSN crosswalk check for VBNLQ, plus evidence extraction from one peer-reviewed species description.
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
Cells of type strain GH36T are described as motile, pleomorphic irregular granules 1.0–4.0 μm and Gram-negative; colonies are red, elevated and round, about 0.5 mm in diameter.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Cultured type strain GH36T and stated assay conditions.
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
GH36T was isolated from a salt lake in China; this collection context alone does not establish ecosystem function or abundance.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One cultured type strain and reported sample source.
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
The authors use genome-based comparisons and taxonomic characterization to propose Haloarcula montana for strain GH36T.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The strain and comparator genomes analyzed in the 2025 study; authors’ taxonomic inference only.
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
The reported type-strain source is a salt lake in China.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Single reported source locality at country-level precision; no wider range implied.
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
