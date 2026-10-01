---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ursus maritimus Phipps, 1774
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-28
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 9CK8W
        scientificName: Tetrapoda
        authorship: null
        rank: megaclass
        status: accepted
        sourceDatasetId: null
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: VS
        scientificName: Carnivora Bowdich, 1821
        authorship: Bowdich, 1821
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4CT
        scientificName: Caniformia Kretzoi, 1938
        authorship: Kretzoi, 1938
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: HQQ
        scientificName: Ursidae G. Fischer von Waldheim, 1817
        authorship: G. Fischer von Waldheim, 1817
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 63VHR
        scientificName: Ursus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 7F2J9
        scientificName: Ursus maritimus Phipps, 1774
        authorship: Phipps, 1774
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild: The claim uses individually marked, free-ranging polar bears sampled by helicopter surveys in western Hudson Bay.
      domesticated: Domesticated populations have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/7F2J9
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:7F2J9@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 7F2J9. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-4f01a1ca-0e36-8c83-a351-ecc91fdcf89c
          metadataVariant: 0
          sourceKey: hostetter2021
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0252748
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
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
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
    facets:
      morphology:
        status: not-assessed
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - hostetter2021
            locator: Methods, Case study; Results, Case study and Fig. 3; Abstract.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/2
      ecology:
        status: not-assessed
      evolution:
        status: not-assessed
      distribution:
        status: not-assessed
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

# Ursus maritimus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to a 2012–2018 age-structured capture–recapture case study of independent, free-ranging polar bears in western Hudson Bay. It does not establish species-wide survival or the status of the whole subpopulation.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 7F2J9; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright and license statement says the work is free of all copyright and made available under the Creative Commons CC0 public domain dedication.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The published article text and its stated findings; this dossier paraphrases results and does not reproduce third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and Methods, Case study; Results, Case study and Fig. 3; Discussion, limitations of the western Hudson Bay case study.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original research applying an age-structured Jolly–Seber model to capture–recapture data for western Hudson Bay polar bears from 2012–2018.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Hostetter NJ, Lunn NJ, Richardson ES, Regehr EV, Converse SJ (2021). Age-structured Jolly-Seber model expands inference and improves parameter estimation from capture-recapture data. PLOS ONE 16(6):e0252748. https://doi.org/10.1371/journal.pone.0252748. Findings paraphrased.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
For independent polar bears aged at least two years in a western Hudson Bay case study, an age-structured Jolly–Seber model with quadratic age-dependent survival estimated median survival above 0.95 for ages 7–22, followed by decline at older ages. The model estimated near-zero survival above age 30, but observed ages in the analyzed sample ranged from 2 to 30 years; estimates beyond that range are model results rather than direct observations.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Western Hudson Bay, Canada; 2012–2018; annual capture–recapture sampling in fall (August–September). The analyzed histories cover 296 independent bears and 427 capture events; observed ages ranged from 2 to 30 years.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging individuals marked during helicopter surveys; the study analyzed independent females and males aged at least two years. No captive or domesticated bears are represented.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The authors describe the analyzed records as a subset and simplified model case study, not an estimate of the status of the entire western Hudson Bay subpopulation or a management assessment.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The model's older-age survival values beyond the observed age range are extrapolations; individual and temporal variation in several demographic processes was simplified.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/2 -->
Species-wide survival, broader ecology, evolution, distribution, fossils, and conservation status remain unassessed; systematic search and independent expert review are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one age-dependent survival result from a regional case study is partially supported; the study does not establish species-wide survival or population status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The sample is limited to independent bears aged at least two years in western Hudson Bay from 2012–2018, and older-age estimates extend beyond the observed-age range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search and independent expert review have not been completed.
<!-- /evo:text -->
