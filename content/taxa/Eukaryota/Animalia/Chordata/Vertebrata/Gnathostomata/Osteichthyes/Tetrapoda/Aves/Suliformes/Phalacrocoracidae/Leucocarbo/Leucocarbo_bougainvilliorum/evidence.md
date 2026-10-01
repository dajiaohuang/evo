---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Leucocarbo bougainvilliorum (R. P. Lesson, 1837)
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
      - id: V2
        scientificName: Aves
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 46J
        scientificName: Suliformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: "62694"
        scientificName: Phalacrocoracidae Reichenbach, 1849
        authorship: Reichenbach, 1849
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 638ZH
        scientificName: Leucocarbo Bonaparte, 1856
        authorship: Bonaparte, 1856
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: DTFQG
        scientificName: Leucocarbo bougainvilliorum (R. P. Lesson, 1837)
        authorship: (R. P. Lesson, 1837)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated or captive populations have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/DTFQG
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:DTFQG@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage DTFQG. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-e60e8c0a-ec5a-8334-ad96-e4f9a20b000d
          metadataVariant: 0
          sourceKey: estrada2025guanay
          usage:
            licenseEvidenceLocator: The publisher article record identifies CC BY 4.0 International as the article license.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.21142/SS-0601-2025-e121
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
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - estrada2025guanay
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: es
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
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

# Leucocarbo bougainvilliorum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The source supports a pellet-based diet observation from one wild colony on Grande Pescadores Island in Peru, sampled before and after the January 2022 Ventanilla oil spill; it does not establish a species-wide diet or a causal spill effect.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Food boluses were collected from a wild guanay cormorant colony on Grande Pescadores Island; individual birds were not tracked or identified.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage DTFQG; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier translates and paraphrases findings and does not reproduce figures, tables, or separately credited material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
SciELO Methods §§2.1-2.3 (lines 120-128); Results and Table 1 (lines 154-172); Discussion (lines 175-177); publisher article record for 2025-05-13 publication date and license; SciELO record for 2025-06-30 ePub date.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original Spanish-language study of regurgitated food boluses collected at one wild colony before and after an oil spill; claims are limited to the sampled colony, collection periods, and values as reported.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Estrada-Grossmann H, Zavalaga C, Diaz-Santibanez I. (2025). Diet of the guanay cormorant Leucocarbo bougainvilliorum (Lesson, 1837) on Pescadores Island after the Ventanilla oil spill in January 2022. South Sustainability 6(1):e121. https://doi.org/10.21142/SS-0601-2025-e121. Findings translated and paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At the wild Grande Pescadores Island colony, the study's pre-spill (2018) and post-spill (2022) food-bolus analysis identified Peruvian anchoveta (Engraulis ringens) as the predominant prey in both periods. Table 1 reports numerical proportions of 99.736% before and 99.168% after the spill, and occurrence proportions of 98.165% and 99.881%, respectively. The post-spill denominator is inconsistent within the article: Methods and Results report 998 boluses, whereas Table 1 reports N = 837; the percentages are transcribed as printed and not recalculated. This comparison does not establish a causal oil-spill effect.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SciELO Methods §§2.3 and 2.6 (lines 126-138); Results (lines 154-159); Table 1 (lines 160-172); Discussion on limits (lines 175-177).
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Grande Pescadores Island, Peru (-11.775277 S, -77.264166 W), about 7 km offshore from the coast near Ancon. The pre-spill sample was collected in November 2018; post-spill collections occurred in 2022 between August and November, 7-11 months after the January 2022 spill.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regurgitated food boluses collected at a wild breeding colony; individual birds and their age or sex were not identified.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The post-spill sample total conflicts within the article: the Methods and Results state 998 boluses, while Table 1 states N = 837; Table 2 monthly counts also do not exactly reconcile with 998.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Only one pre-spill collection month and three post-spill collection months from one colony were compared, and no samples were collected immediately after the spill; the design does not establish causality.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, broader ecology, evolution, distribution, fossils, conservation, systematic search, and independent review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The source supports a colony-level diet observation from limited pre-spill and post-spill sampling periods, with an unresolved post-spill sample denominator.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The design is observational and does not establish an oil-spill cause or a general diet pattern across the species range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets, systematic search, and external expert review remain unassessed.
<!-- /evo:text -->
