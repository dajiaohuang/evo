---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Parabembras robinsoni Regan, 1921
    rank: species
    sourceDatasetId: "1010"
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4CMB5
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4CMB5@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 4CMB5; sourceDatasetId 1010; Teleostei classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4CMB5. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-140f4e2f-e4b4-80bb-a40f-e13ea6208dc8
          metadataVariant: 0
          sourceKey: kai_fricke_2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.3897/zookeys.740.21729
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5904489/
            accessedAt: 2026-09-24
            locator: Abstract, p. 59; redescription and material for P. robinsoni, pp. 62–65
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - kai_fricke_2018
            locator: Abstract, p. 59; P. robinsoni redescription, pp. 62–65; comparison/key
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
        status: not-assessed
      evolution:
        status: not-assessed
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - kai_fricke_2018
            locator: Abstract, p. 59; P. robinsoni material and remarks, pp. 62–65
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

# Parabembras robinsoni

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Teleostei classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4CMB5. Kai and Fricke's 2018 revision redescribes P. robinsoni in a genus-level comparison; its treatment is not a complete biological account.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The taxonomic revision concerns examined and previously reported fish specimens; it does not report captive biology or behavioral experiments.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1010
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text licensed under CC BY 4.0; separately credited third-party material remains subject to its own notice. No figures or images are reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Peer-reviewed taxonomic revision of Parabembras; this dossier uses only the species-specific diagnosis and published southwestern Indian Ocean range statement for P. robinsoni.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Kai Y, Fricke R (2018). Taxonomic review of the deep water flathead genus Parabembras with description of the new species Parabembras multisquamata from the western Pacific Ocean (Teleostei, Parabembridae). ZooKeys 740: 59–76. https://doi.org/10.3897/zookeys.740.21729. Claims here are paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The revision distinguishes P. robinsoni by eleven first dorsal-fin spines, a distinct symphyseal knob on the lower jaw, two preocular spines and one lachrymal spine.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Taxonomic diagnosis in a genus revision published in 2018; the characters summarize the examined and compared specimens.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Morphological evidence from examined and taxonomically reported fish specimens; developmental and captive effects are not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The revision supplies selected diagnostic characters, not a complete description of anatomy, ontogenetic change, sexual dimorphism or intraspecific variation.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The authors summarize P. robinsoni as occurring in the southwestern Indian Ocean from South Africa to Mozambique.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional summary of records cited in the 2018 revision; no dates, complete locality inventory or abundance estimate are implied.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
The taxonomic revision concerns fish specimens and historical species records; no current occupancy or population trend is inferred.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
This published range summary is not a georeferenced, exhaustive, dated distribution dataset and does not establish current occupancy across the full range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only partial morphology and regional distribution evidence from one taxonomic revision has been assessed; five facets remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search or full comparison with the complete COL26.8 species concept has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
