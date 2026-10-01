---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Paroedura tanjaka Nussbaum & Raxworthy, 2000
    rank: species
    sourceDatasetId: "1008"
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
        - itis
    lifeStatusScope:
      wild: The source article analyzes field-collected specimens and localities; claims retain its sampling and locality limits.
      domesticated: Domestication and captive history have not been assessed.
      fossil: Fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4DR57
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4DR57@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 4DR57; sourceDatasetId 1008; Reptilia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4DR57.
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
        - referenceId: ref-e0ab746b-2e3d-8b5f-ad69-9640a9ee6636
          metadataVariant: 0
          sourceKey: itis
          usage:
            licenseAppliesTo: ITIS taxonomic database records.
            stableId: ITIS TSN 819035
            accessedAt: 2026-09-24
            locator: Valid species record, Paroedura tanjaka; exact crosswalk from COL usage 4DR57
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Integrated Taxonomic Information System (ITIS), dataset export 2026-08-26, TSN 819035.
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
        - referenceId: ref-9b21bf4d-e440-812d-a5da-b1f1d0fc8a73
          metadataVariant: 0
          sourceKey: miralles2021
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.3897/vz.71.e59495
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
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - miralles2021
            locator: Morphological comparisons, p. 34; diagnosis reference to Köhler et al. (2019)
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
            sourceIds:
              - miralles2021
            locator: Integrative species delimitation, sympatry in Bemaraha, pp. 35-36
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - miralles2021
            locator: Abstract; multilocus phylogenetic relationships, pp. 33-34; sympatry in Bemaraha, pp. 35-36
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - miralles2021
            locator: Introduction, p. 28; sympatry in Bemaraha, pp. 35-36
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Paroedura tanjaka

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, sourceDatasetId and Reptilia classification verified against the pinned registry search record; external crosswalk exact-matches the name to valid ITIS TSN 819035.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 accepted usage 4DR57. Article claims are limited to the 2021 revision's sampled populations, markers and localities.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1008
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Independent identity crosswalk only; ITIS taxonomic metadata is not biological evidence in this dossier.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Published article text on pages 27-47; supplementary datasets have separate Open Database License notices and are not reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; species-group scope, p. 28; Morphological comparisons, pp. 34-35; sympatry and integrative species delimitation, pp. 35-37
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Integrative revision of the sampled Paroedura bastardi complex in Madagascar using mitochondrial and nuclear loci and morphological comparisons; the claims here are paraphrased and retain the paper's lineage and sampling qualifications. Figures and separately licensed supplementary datasets are not reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Miralles A, Bruy T, Crottini A, Rakotoarison A, Ratsoavina FM, Scherz MD, Schmidt R, Köhler J, Glaw F, Vences M (2021). Completing a taxonomic puzzle: integrative review of geckos of the Paroedura bastardi species complex (Squamata, Gekkonidae). Vertebrate Zoology 71:27-48. https://doi.org/10.3897/vz.71.e59495. Claims are paraphrased; article CC BY 4.0.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The authors report that P. tanjaka and P. neglecta share the diagnostic state of having the nostril contact the rostral scale, separating the pair from other members of the species group considered. This character does not distinguish P. tanjaka from P. neglecta.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Diagnostic character as reported in the 2021 revision; this is a limited character statement rather than a complete diagnosis.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Morphological character; the claim does not assert variation across all ages or populations.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The article identifies one diagnostic character and does not establish the full range of morphological variation for P. tanjaka.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-cycle, reproductive, growth, survival or longevity evidence was assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The revision reports P. tanjaka and P. neglecta as sympatric at Bemaraha; the two were recovered as distinct mitochondrial lineages and shared no nuclear haplotypes in the study's markers. This documents co-occurrence in the sampled locality, not a complete ecological relationship or range-wide pattern.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Specimens and locality records from Bemaraha analyzed in the 2021 study.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild collected specimens; no captive behavior is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The study does not provide a systematic ecological account or establish the full habitat range and interactions of P. tanjaka.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In the study's mitochondrial and nuclear analyses, P. tanjaka formed a distinct lineage from sympatric P. neglecta, and the authors placed the two as sister species in their phylogenetic hypothesis. They note that relationships in this group need confirmation through more comprehensive phylogenomic study.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Phylogenetic hypothesis based on the paper's sampled loci and specimens; the authors identify the need for further phylogenomic study.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild sampled specimens; no broader evolutionary rate or population inference is made.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No later phylogenomic confirmation or comparative evolutionary synthesis was assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The authors describe P. tanjaka as known only from the karstic Tsingy de Bemaraha in central-west Madagascar in the study's taxonomic background.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Distribution statement in the 2021 paper; it is not a current exhaustive occurrence inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild locality records considered in the revision.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No current exhaustive range survey, boundary assessment or native-versus-introduced analysis was conducted.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or bounded fossil-literature search was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No dated conservation assessment or population-trend analysis was reviewed; no risk category is inferred.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The single selected taxonomic revision provides limited morphology, locality, sympatry and phylogenetic evidence; life history, fossils and conservation remain unassessed, and ecology is partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic current literature search or independent expert review has been completed.
<!-- /evo:text -->
