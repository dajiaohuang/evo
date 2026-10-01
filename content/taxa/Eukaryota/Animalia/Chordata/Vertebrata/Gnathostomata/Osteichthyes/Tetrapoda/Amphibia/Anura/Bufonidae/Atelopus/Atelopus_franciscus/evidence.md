---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Atelopus franciscus Lescure, 1974
    rank: species
    sourceDatasetId: "2144"
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
      wild: The source reports field observations and experiments in natural habitat; claims retain that study context.
      domesticated: Domestication and captive history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/J8YL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:J8YL@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage J8YL; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage J8YL. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-0f64910d-093f-8f5d-a082-37fcce744782
          metadataVariant: 0
          sourceKey: boistel2011
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0022080
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: Call analysis, Call intensity and Ambient noise measurements"
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
              - boistel2011
            locator: "Abstract, paragraphs 1–3; Methods: Middle ear biomechanics"
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
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - boistel2011
            locator: "Abstract, paragraphs 1–4; Results: Ambient noise and Call attenuation"
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

# Atelopus franciscus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage J8YL. The paper examines male calling, anatomy and sound transmission in its study context; it is not a complete species account.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text and other content included under the article license; third-party items credited otherwise are excluded. Only article text is paraphrased here.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Anatomical, acoustic, habitat-transmission and playback study focused on A. franciscus; acoustic environment measurements are explicitly described by the authors as spatial and temporal snapshots.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Boistel R, Aubin T, Cloetens P, Langer M, Gillet B, Josset P, et al. (2011). Whispering to the Deaf: Communication by a Frog without External Vocal Sac or Tympanum in Noisy Environments. PLOS ONE 6(7): e22080. https://doi.org/10.1371/journal.pone.0022080. Claims here are paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The study reports that A. franciscus lacks an external vocal sac and external tympanum; its anatomical and acoustic measurements are specific to the examined material.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Material and experiments reported in the 2011 species-focused study; no population-wide morphological survey is claimed.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Study material is not presented as a representative survey across all wild, captive or developmental states.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study's anatomical observations do not describe all external or internal morphology, variation among populations, or developmental stages.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors report field responses by males to conspecific calls in a noisy riverbank environment and measure call propagation at less than 8 m under the study conditions.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Natural-habitat and playback measurements reported in the 2011 study; the authors characterize sound-environment measurements as temporal and spatial snapshots.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Field observations concern calling males; they do not establish behaviour across life stages or seasons.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The acoustic results are limited to the measured settings and do not establish year-round or range-wide behaviour, habitat selection, or population differences.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only bounded anatomical and acoustic evidence has been assessed; five facets remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The measurements do not constitute a complete biological literature search or a species-wide account.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
