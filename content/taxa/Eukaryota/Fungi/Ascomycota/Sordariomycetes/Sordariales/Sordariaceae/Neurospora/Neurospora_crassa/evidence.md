---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Neurospora crassa Shear & B.O. Dodge
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
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domestication or cultivation history is assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 28
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/47BC7
            stableId: col:47BC7@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 47BC7; name and authorship; rank species; sourceDatasetId 2073; Fungi classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 47BC7. https://doi.org/10.48580/dgywk
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
            - licenseAppliesTo
            - attribution
        - referenceId: ref-889b5c8a-51f1-838f-a6b9-c071b8e8dca9
          metadataVariant: 0
          sourceKey: simpsonSchilling2025
          usage:
            licenseAppliesTo: Article text under CC BY 4.0; no figures or third-party material are reproduced.
            stableId: doi:10.1111/1462-2920.70132
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12186714/
            accessedAt: 2026-09-24
            locator: Abstract; Experimental Procedures, sections 2.1–2.2; Results on mass loss of wood and grass substrates
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
            - rightsEvidenceUrl
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
            - licenseAppliesTo
            - attribution
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: COL26.8 usage 47BC7; DOI 10.1111/1462-2920.70132
      inclusionCriteria: Claims explicitly reported from the N. crassa microcosm assays and their tested substrates.
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
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
              - simpsonSchilling2025
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
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
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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

# Neurospora crassa

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage, verbatim scientific name including authorship, rank, status, sourceDatasetId, and Fungi classification were checked in the pinned registry release.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal accepted usage 47BC7. Biological evidence is limited to one 2025 controlled substrate-decay study and does not describe all natural populations or the complete species concept.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The cited experiment used controlled single-strain microcosms with sterilized plant substrates; it does not establish wild population performance.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, sourceDatasetId, and classification only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original controlled substrate-decay study; only the named N. crassa strain and tested microcosm substrates are described.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Simpson HJ, Schilling JS (2025). Saprotrophic Capabilities of Neurospora crassa on Charred Plant Biomass. Environmental Microbiology 27(6):e70132. https://doi.org/10.1111/1462-2920.70132. Claims paraphrased.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Pinned COL26.8 identity verification and bounded reading of one primary study for substrate-decay evidence.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Matched the exact COL usage in the pinned registry and read the primary article's abstract, methods, and reported substrate-decay results. No comprehensive ecology, morphology, life-history, range, fossil, or conservation review was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Prior literature cited by the article, untested field mechanisms, whole-species physiological generalization, and unassessed facets.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The cited study does not provide a species-level morphological assessment.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The microcosm study does not assess reproduction or a complete developmental life history.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In controlled assays, N. crassa did not show enhanced decay of pyrolyzed wood or grass relative to the tested non-fire-associated fungi; it degraded untreated grass substrates by more than 20% mass loss but struggled to degrade wood, with less than 6% mass loss. These are results for the tested strain and lab microcosms, not measurements of its field performance after fires.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Abstract; Results, decay mass loss for wood and grass substrates; Experimental Procedures, single-strain microcosm design
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Laboratory microcosm assays using untreated and pyrolyzed substrates, including 225°C and 350°C heat treatments; the claim is limited to the study's experimental conditions.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
A controlled cultured strain was assessed; the study does not characterize wild population abundance, seasonal activity, or field colonization.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The article tests substrate decay in controlled microcosms; natural post-fire colonization, population dynamics, broader substrate use, and interactions in field communities remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-level evolutionary or population-genomic analysis is used for this dossier.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The experiment is not a georeferenced distribution survey.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No formal conservation assessment or population-trend review was performed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one bounded substrate-decay result from a controlled primary study has been assessed; morphology, life history, evolution, distribution, fossil, and conservation facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search or complete comparison with the COL26.8 species concept has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
