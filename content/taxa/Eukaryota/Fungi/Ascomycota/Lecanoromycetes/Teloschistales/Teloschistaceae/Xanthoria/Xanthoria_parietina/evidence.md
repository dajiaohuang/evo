---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Xanthoria parietina (L.) Th. Fr.
    rank: species
    sourceDatasetId: "2073"
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
      - id: F
        scientificName: Fungi
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: "2073"
      - id: SM
        scientificName: Ascomycota
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "2073"
      - id: DM
        scientificName: Lecanoromycetes
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2073"
      - id: "474"
        scientificName: Teloschistales
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2073"
      - id: GZ3
        scientificName: Teloschistaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2073"
      - id: 88H3
        scientificName: Xanthoria
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "2073"
      - id: 5C86X
        scientificName: Xanthoria parietina (L.) Th. Fr.
        authorship: (L.) Th. Fr.
        rank: species
        status: accepted
        sourceDatasetId: "2073"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated or intentionally cultivated lichen populations have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5C86X
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:5C86X@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5C86X. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-2bb75ab0-e17d-8f56-a364-749080e82022
          metadataVariant: 0
          sourceKey: happacher2026
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/s41467-026-74988-9
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
              - happacher2026
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
            originalLanguage: en
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

# Xanthoria parietina

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to ferrichrome detection in tested lichen material and culture of one Xanthoria parietina mycobiont isolate, plus a growth assay using a separately sourced Trebouxia decolorans strain. It does not establish that the effect is universal across populations or symbiont pairings.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The study includes lichen thalli collected from Austrian field sites and laboratory cultures; the isolate and algal strain used in the experiments were not obtained from the same thallus.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 5C86X; exact accepted name, authorship, species rank, sourceDatasetId 2073, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The publisher Version of Record PDF, page 15, states that the article is licensed under CC BY 4.0; separately credited material remains subject to its credit line.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text except separately credited third-party material; this dossier paraphrases results and does not reproduce figures or supplemental tables.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Results on ferrichrome production and algal growth; Methods describing fungal isolate L2379 and Trebouxia decolorans strain MT603980; Version of Record PDF p. 15 and Supplementary Table S5.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original study of siderophore production by a Xanthoria parietina mycobiont isolate and the response of a tested algal photobiont strain; claims are limited to the reported materials and assays.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Happacher P et al. (2026). Siderophore production by the lichen fungus Xanthoria parietina supports its algal symbiont. Nature Communications 17:8234. https://doi.org/10.1038/s41467-026-74988-9. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The study detected ferrichrome in Xanthoria parietina thalli and in culture of a mycobiont isolate; ferrichrome addition promoted growth of the tested Trebouxia decolorans photobiont strain. This is a strain-level experimental result and does not show that all X. parietina populations or lichen symbioses respond in the same way.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Results on ferrichrome production and algal growth; Methods describing fungal isolate L2379 and Trebouxia decolorans strain MT603980.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Laboratory assays reported in 2026; study thalli include Austrian field samples. The article states the fungal isolate L2379 and the Trebouxia strain were not from the same thallus; L2379 is not linked to a specific Supplementary Table S5 site/date in the audited record.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Lichen thalli and an axenically cultured single-spore mycobiont isolate were studied alongside a separately cultured photobiont strain; no domesticated or fossil material is represented.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One mycobiont isolate and one separately sourced photobiont strain do not establish the prevalence or magnitude of the interaction across the species or natural symbiont pairings.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The isolate is not linked to a unique wild collection site and date in the audited record, and the laboratory assay does not quantify field-level growth effects.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, broader ecology, evolution, complete distribution, fossils, and conservation remain unassessed; systematic search and independent expert review are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Ferrichrome production and a photobiont growth assay are partially supported for the tested materials; they do not establish species-wide interaction patterns.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The fungal isolate is not linked to one exact collection locality/date in the audited record, and the tested partners were not from the same thallus.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Other biological facets and complete geographic, fossil, and conservation coverage remain unassessed; systematic search and external review are incomplete.
<!-- /evo:text -->
