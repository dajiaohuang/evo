---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Paroedura bastardi (Mocquard, 1900)
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4DR4J
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4DR4J@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 4DR4J; sourceDatasetId 1008; Reptilia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4DR4J.
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
        - referenceId: ref-fe53ca65-1ead-8f49-abe4-ce5df4e21e6b
          metadataVariant: 0
          sourceKey: itis
          usage:
            licenseAppliesTo: ITIS taxonomic database records.
            stableId: ITIS TSN 819024
            accessedAt: 2026-09-24
            locator: Valid species record, Paroedura bastardi; exact crosswalk from COL usage 4DR4J
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Integrated Taxonomic Information System (ITIS), dataset export 2026-08-26, TSN 819024.
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
            locator: Morphological comparisons, pp. 34-35
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
        status: not-assessed
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
            locator: Abstract; Integrative species delimitation, pp. 35-37
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
            locator: Abstract; lectotype designation and discussion of P. bastardi, pp. 38-43
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Paroedura bastardi

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, sourceDatasetId and Reptilia classification verified against the pinned registry search record; external crosswalk exact-matches the name to valid ITIS TSN 819024.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 4DR4J. Biological evidence is restricted to the populations, samples, loci and publication scope of Miralles et al. (2021); the revision's earlier broad usage of P. bastardi is not treated as equivalent to the current restricted concept without qualification.
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
Abstract; Morphological comparisons, pp. 34-35; Integrative species delimitation, pp. 35-37; lectotype designation and discussion of P. bastardi, pp. 38-43
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
In the sampled adult and subadult comparisons, measured body-size values overlapped among lineages and the authors found that no single reported ratio was unambiguously diagnostic for each species. They caution that the ratios have limited value for reliable field identification.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Morphological comparison in the 2021 study, using its sampled adult and subadult specimens; it is not a complete species-wide diagnosis.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Adult and subadult specimens; juvenile morphology and unmeasured variation are not inferred.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study reports overlapping measurements and limited sampling; it does not provide a complete account of morphology or variation across the accepted species concept.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-cycle, reproductive, growth, survival or longevity evidence was assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The source is an integrative taxonomic revision and does not provide a bounded ecological assessment for the currently restricted accepted species concept.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors recovered multiple distinct P. bastardi lineages from their mitochondrial and nuclear analyses and report syntopic occurrences without genetic admixture or morphological intermediates as evidence supporting reproductive isolation among sampled lineages. The lineage-level result does not imply that all historically assigned P. bastardi populations belong to the currently accepted species concept.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Multilocus analyses and sampled sympatric localities in Madagascar reported in 2021; interpretation is limited to sampled lineages and markers.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild collected specimens; no broader population-wide inference is made.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The authors note that denser phylogenomic study is needed; evolutionary history outside the sampled complex and accepted concept remains unassessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
After designating a lectotype, the authors restrict P. bastardi sensu stricto to the extreme south-east of Madagascar. This is the range conclusion of the 2021 revision and is not presented as a current exhaustive range inventory.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Madagascar records examined for the 2021 taxonomic revision; no post-publication range survey is represented.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild locality records reviewed by the authors.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No current, exhaustive occurrence-data or range-boundary assessment was conducted.
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
The selected revision provides bounded taxonomic, morphological, lineage and distribution evidence; life history, ecology, fossils and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The source's historical P. bastardi usage contains multiple lineages, so its claims require careful restriction to the lectotype-defined concept.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No systematic current literature search or independent expert review has been completed.
<!-- /evo:text -->
