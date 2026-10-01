---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pseudodesulfovibrio methanolicus Bidzhieva et al., 2025
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
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domesticated or captive populations were studied or inferred.
      fossil: Fossil evidence was not assessed; no fossil-presence or fossil-absence claim is made.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/V4TXN
            stableId: V4TXN
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
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
        - referenceId: ref-67dcbcc6-d55e-886c-a817-b93931874731
          metadataVariant: 0
          sourceKey: lpsn
          usage:
            licenseAppliesTo: LPSN nomenclatural source data and pinned crosswalk only
            stableId: "66881"
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
        - referenceId: ref-e3dffcc9-ca4d-892c-afe6-bec76431cab6
          metadataVariant: 0
          sourceKey: paper
          usage:
            stableId: 10.3390/biology13100800
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
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
      queryOrPath: ChecklistBank dataset 316115 taxon V4TXN; data/sources/bacteria-lpsn-crosswalk-col26.8.json.gz; LPSN record 66881; DOI 10.3390/biology13100800; PMCID PMC11505543
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
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
            locator: Section 3.1, ‘Phenotypic Characteristics of Strain 5S69T’
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
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
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
            locator: Abstract; sections 3.1 and 4; strain isolation context
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
            locator: Abstract; phylogenetic and genomic index analyses; conclusions
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
            locator: Title; abstract; strain isolation section
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

# Pseudodesulfovibrio methanolicus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage V4TXN was checked by API fields for full scientific name Pseudodesulfovibrio methanolicus Bidzhieva et al., 2025, authorship Bidzhieva et al., 2025, species rank, accepted status and source dataset 2015. The pinned COL26.8 LPSN source-record crosswalk maps this exact COL ID to LPSN record 66881; the linked LPSN record was checked for matching name usage and nomenclatural status. No name-only or fuzzy join was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
This establishes a nomenclatural usage crosswalk only; it does not establish full biological species-concept equivalence.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological observations refer only to the wild-origin type strain and observations reported in the cited species description; no field population generalization is made.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Name usage identity fields only: taxon ID, accepted scientific name, authorship, rank, status, and source dataset ID. No biological claims are derived from COL.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Pinned COL26.8 accepted usage V4TXN; API fields name, authorship, species rank, accepted status, and sectorDatasetKey 2015
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Freese et al. (2026), List of Prokaryotic names with Standing in Nomenclature (LPSN), https://doi.org/10.1093/nar/gkaf1110
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
The exact release-pinned COL ID to LPSN ID mapping and name usage nomenclature only; no biological claims or complete species-concept equivalence are inferred.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Release-pinned exact crosswalk row COL V4TXN -> LPSN record 66881; row response SHA-256 109f28c38b474db368b2976c2bda26e054fbf07e388e3c9e14365a74d2909b96; linked LPSN item record 66881 supplies matching name usage and nomenclatural status
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Taxon-specific species account and sections named in each facet claim; original article and item-level license metadata linked by DOI/PMCID
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
OpenAlex reports the item-level work license as CC BY; MDPI article landing page and article record identify the open-access paper. Claims here are paraphrases with attribution; third-party material may have separate terms.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Bidzhieva et al. (2024), Phenotypic and Genomic Characterization of a Sulfate-Reducing Bacterium Pseudodesulfovibrio methanolicus sp. nov. Isolated from a Petroleum Reservoir in Russia, DOI 10.3390/biology13100800
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Bounded identity check for COL26.8 usage V4TXN and its LPSN source record, plus claim extraction from the single cited peer-reviewed species description.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Queried the pinned ChecklistBank COL26.8 API for the exact COL ID and compared scientific name, authorship, rank, accepted status and source dataset ID. Checked the release-pinned COL-ID-to-LPSN-ID crosswalk and linked LPSN taxon record. Biological statements are restricted to the item-level species account and its cited section/table locators. No systematic multi-database, fossil, life-history, conservation or global-distribution search was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Only exact accepted COL26.8 identity fields, release-pinned LPSN crosswalk identity, and statements expressly reported in this species account.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins; general genus or family claims; observations from other species; inferred global range, fossil, conservation or life-history claims; unsearched facets.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The type strain 5S69T is reported as Gram-negative, strictly anaerobic, non-spore-forming, and straight or slightly curved rods measuring 0.35–0.45 × 1.0–2.0 μm; cells are motile by a single polar flagellum.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
The cultured type strain in the exponential-growth phase under study conditions.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
These observations do not characterize population variation or all growth phases and environments.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-history study or systematic search was performed; reproduction, development, behavior and lifespan are not characterized.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors isolated strain 5S69T from injection water collected at the Vostochno-Anzirskoe oil field in Tatarstan, Russia, and characterize it as sulfate-reducing. These observations do not establish a measured field-scale role in carbon or sulfur cycling.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
The single cultured type strain and the sampled oil-field water described in the article.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No in-situ abundance, activity rate, interaction network or reservoir-wide survey was assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The study uses 16S rRNA, 120 conserved single-copy proteins and genomic relatedness indices to support placement of 5S69T as a distinct Pseudodesulfovibrio species. It reports this as the authors' taxonomic conclusion.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The type strain and comparator strains in the 2024 study.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Alternative taxon sampling, later nomenclatural changes and independent phylogenomic review were not assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The paper reports the type strain from injection water collected at the Vostochno-Anzirskoe oil field, Tatarstan, Russia.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
One reported collection locality only; no wider range is implied.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild isolate; evidence is restricted to the named cultured type strain and the paper-reported observations.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No further localities, global range, georeferenced boundary or sampling completeness were assessed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological literature/database search was performed; no fossil-presence or fossil-absence conclusion is made.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment or current formal Red List record was assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one bounded species description was assessed; several biological facets remain not-assessed or locally scoped.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The exact nomenclatural crosswalk does not independently establish full biological species-concept equivalence.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review or comprehensive multi-source search has been completed.
<!-- /evo:text -->
