---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Bombus terrestris (Linnaeus, 1758)
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
      - id: RT
        scientificName: Arthropoda
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: L2655
        scientificName: Hexapoda
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: H6
        scientificName: Insecta
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: HYM
        scientificName: Hymenoptera
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: KZPW7
        scientificName: Apocrita
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: null
      - id: KZMNP
        scientificName: Aculeata
        authorship: null
        rank: infraorder
        status: accepted
        sourceDatasetId: null
      - id: 625GP
        scientificName: Apoidea
        authorship: null
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 6KD
        scientificName: Apidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: J5V
        scientificName: Apinae
        authorship: null
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: KN5
        scientificName: Bombini
        authorship: null
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: 62H8K
        scientificName: Bombus Latreille, 1802
        authorship: Latreille, 1802
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: MFWK
        scientificName: Bombus terrestris (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
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
            url: https://www.checklistbank.org/dataset/316115/taxon/MFWK
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:MFWK@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage MFWK. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-b1d6558e-0e91-8339-a221-779070e6ff2c
          metadataVariant: 0
          sourceKey: stelzer2010
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0009559
            accessedAt: 2026-09-28
            locator: Methods, Transect Walks; Results, Transect Walks; Discussion, limits on evidence for a winter generation.
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
              - stelzer2010
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
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

# Bombus terrestris

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by the pinned COL26.8 accepted usage. The evidence here is limited to free-flying B. terrestris observed during one winter at Kew Gardens, London; the article's separate commercial-colony foraging experiments are excluded.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The claim uses transect observations of free-flying bees at Kew Gardens, London. It does not use the paper's separately described commercial colonies.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Domestication has not been assessed. The article's commercial colonies were B. terrestris dalmatinus and are not used as evidence for this claim.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage MFWK; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright notice states Creative Commons Attribution; the PLOS license policy identifies CC BY 4.0 International for article content.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text. Separately credited third-party content is excluded; the claim paraphrases field observations and does not reproduce figures.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original field transect observations of free-flying B. terrestris at Kew Gardens in winter 2007/08. The separate foraging experiments with commercial B. terrestris dalmatinus are not used in this dossier.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Stelzer RJ, Chittka L, Carlton M, Ings TC (2010). Winter Active Bumblebees (Bombus terrestris) Achieve High Foraging Rates in Urban Britain. PLOS ONE 5(3):e9559. https://doi.org/10.1371/journal.pone.0009559. Findings paraphrased.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
During 27 transect walks at Kew Gardens from October 2007 through March 2008, queens and workers of Bombus terrestris were observed throughout the winter. Worker observations rose in early December, peaked in January, and declined in late February or early March; males were observed only through early November. The observations establish winter activity at this site, but do not demonstrate successful reproduction or a second generation.
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Methods, Transect Walks; Results, Transect Walks and Fig. 4 caption; Discussion, limits on inferring a successful winter generation.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Royal Botanic Gardens, Kew, Surrey, London, United Kingdom; 27 fixed-transect walks from 2007-10-01 through 2008-03-28. The version of record was published 2010-03-05.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-flying bees observed in the field. This claim excludes separately tested commercial B. terrestris dalmatinus colonies and does not describe captive or domesticated populations.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The evidence is a single-site, single-winter transect series and cannot establish species-wide phenology or population trends.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The authors caution that the observations do not establish whether winter activity produced new queens or males; reproductive success remains unassessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/2 -->
The article's foraging-rate experiments used commercial B. terrestris dalmatinus and are excluded from this species-specific claim.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One field-observation study partially supports winter activity at Kew Gardens; morphology, broader ecology, evolution, full distribution, fossils, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The cited transect series covers one site and one winter and does not establish successful reproduction or species-wide phenology.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search and independent expert review have not been completed.
<!-- /evo:text -->
