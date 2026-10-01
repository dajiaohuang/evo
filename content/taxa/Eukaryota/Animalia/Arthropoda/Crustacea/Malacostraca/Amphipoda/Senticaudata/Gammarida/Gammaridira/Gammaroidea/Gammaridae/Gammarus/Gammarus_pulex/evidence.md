---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Gammarus pulex (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "1202"
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
      domesticated: Domestication has not been assessed; laboratory experiments are not treated as domestication.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 27
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3F8JD
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3F8JD@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3F8JD. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-0cffa664-ce12-8f25-ad45-c072f223ec79
          metadataVariant: 0
          sourceKey: fincham2023
          usage:
            licenseAppliesTo: Published article under the stated CC BY 4.0 license. No figures, tables, or deposited datasets are reused.
            stableId: doi:10.1111/fwb.14075
            rightsEvidenceUrl: https://eprints.whiterose.ac.uk/id/eprint/196856/
            accessedAt: 2026-09-24
            locator: Abstract
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
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - fincham2023
            locator: Abstract
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
---

# Gammarus pulex

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, including verbatim scientific name and authorship, rank, status, sourceDatasetId, and higher classification, verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 3F8JD. The biological evidence below concerns one laboratory microcosm comparison and does not establish variation among wild populations or a complete species concept.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The selected paper identifies G. pulex as native in the U.K.; its laboratory microcosms do not measure wild population dynamics or field rates.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1202
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3F8JD; verbatim name and authorship; rank species; status accepted; sourceDatasetId 1202; classification includes Arthropoda, Malacostraca, and Amphipoda
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId, and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary laboratory microcosm comparison of one U.K. native amphipod and two invasive Dikerogammarus species across three temperature treatments and three leaf diets; only the abstract result about relative detrital processing is paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Fincham WNW, Brown LE, Roy HE, Dunn AM (2023). Interactive effects of resource quality and temperature drive differences in detritivory among native and invasive freshwater amphipods. Freshwater Biology 68(6):915-925. https://doi.org/10.1111/fwb.14075. Claim paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In laboratory microcosms, native Gammarus pulex processed leaf detritus faster than the two tested invasive Dikerogammarus species at the lower temperature treatments; the between-species differences decreased as the temperature treatments increased.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Laboratory microcosms compared treatments at 8, 14, and 20 C using oak, sycamore, and alder leaf diets; paper published in 2023. These conditions describe the experiment and not the species' realized field ecology.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Experimental animals in laboratory microcosms; the result is not generalized to wild population rates or to other environmental conditions.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The laboratory comparison does not establish field detrital processing, natural population dynamics, responses across the full environmental range, or variation among G. pulex populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one bounded laboratory comparison of detrital processing has been assessed; six facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The cited study is not a systematic review or complete account of the COL26.8 species concept.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
