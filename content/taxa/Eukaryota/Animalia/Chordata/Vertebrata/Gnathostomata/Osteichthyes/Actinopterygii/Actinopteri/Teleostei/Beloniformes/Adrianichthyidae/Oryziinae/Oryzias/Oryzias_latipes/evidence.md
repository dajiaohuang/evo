---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Oryzias latipes (Temminck & Schlegel, 1846)
    rank: species
    sourceDatasetId: "1010"
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
      - id: 8VR36
        scientificName: Actinopterygii
        authorship: null
        rank: gigaclass
        status: accepted
        sourceDatasetId: "1010"
      - id: KTWM8
        scientificName: Actinopteri
        authorship: null
        rank: superclass
        status: accepted
        sourceDatasetId: "1010"
      - id: 8V4VD
        scientificName: Teleostei
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "1010"
      - id: T6
        scientificName: Beloniformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1010"
      - id: KTWPF
        scientificName: Adrianichthyidae Weber, 1913
        authorship: Weber, 1913
        rank: family
        status: accepted
        sourceDatasetId: "1010"
      - id: KVL2X
        scientificName: Oryziinae Myers, 1938
        authorship: Myers, 1938
        rank: subfamily
        status: accepted
        sourceDatasetId: "1010"
      - id: KVL2W
        scientificName: Oryzias Jordan & Snyder, 1906
        authorship: Jordan & Snyder, 1906
        rank: genus
        status: accepted
        sourceDatasetId: "1010"
      - id: 6SZHL
        scientificName: Oryzias latipes (Temminck & Schlegel, 1846)
        authorship: (Temminck & Schlegel, 1846)
        rank: species
        status: accepted
        sourceDatasetId: "1010"
    lifeStatusScope:
      wild: Wild-population responses were not assessed; the study used a laboratory colony.
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6SZHL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:6SZHL@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6SZHL. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-56672560-5ff2-84c4-a969-d37ebd2b7ce3
          metadataVariant: 0
          sourceKey: hu2020medaka
          usage:
            licenseEvidenceLocator: The article-level copyright notice links the Creative Commons Attribution License to the canonical CC BY 4.0 URL.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0229962
            accessedAt: 2026-09-28
            locator: Methods §§2.3–2.6; Results §3.4 and Fig. 4; item-level copyright and license notice.
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
              - hu2020medaka
            locator: Methods §§2.3–2.6; Results §3.4 and Fig. 4, including the control comparison and histology sample description.
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

# Oryzias latipes

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The source supports a controlled microfiber-exposure observation in adult laboratory-colony Japanese medaka; it does not establish a wild-population effect, environmental threshold, or species-wide response.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
The article describes laboratory-colony adults and does not establish domestication status or assess domesticated populations.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 6SZHL; exact accepted name, authorship, species rank, sourceDatasetId 1010, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases findings and does not reproduce figures or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original laboratory study of adult Oryzias latipes exposed to polyester or polypropylene microfibers; claims are limited to the reported colony, exposure concentration and duration, and histology sample.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Hu L, Chernick M, Lewis AM, Ferguson PL, Hinton DE (2020). Chronic microfiber exposure in adult Japanese medaka (Oryzias latipes). PLOS ONE 15(3):e0229962. https://doi.org/10.1371/journal.pone.0229962. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In this controlled exposure experiment, fusion of secondary gill lamellae was reported in 33% of adult medaka exposed to polyester microfibers and 67% exposed to polypropylene microfibers at 10,000 fibers/L for 21 days; no fusion was observed in controls. Histology used six fish per treatment. The authors also noted minor petechiae and epithelial lifting in some control gills.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Adults from a laboratory colony were exposed in a dedicated room at 24°C under a 14:10 light:dark cycle for 21 days. The article does not report calendar dates or a wild collection locality for the experimental fish.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Captive laboratory-colony adults; no wild fish or fossil material was assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The histology sample was six fish per treatment from one laboratory colony, and the reported concentration is not an environmental threshold.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The study does not establish responses in wild populations, across strains, or at lower environmental exposure levels.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology outside this exposure response, life history, other ecology, evolution, distribution, fossils, conservation, and independent review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One controlled microfiber experiment supports only the reported adult laboratory-colony histology outcome.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The colony, exposure level, duration, and small histology sample do not establish broader population responses or environmental thresholds.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets and complete geographic, fossil, conservation, and external review coverage remain unassessed.
<!-- /evo:text -->
