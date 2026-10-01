---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pogona vitticeps (Ahl, 1926)
    rank: species
    sourceDatasetId: "1008"
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
      - id: RP
        scientificName: Reptilia Laurenti, 1768
        authorship: Laurenti, 1768
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: 45C
        scientificName: Squamata Oppel, 1811
        authorship: Oppel, 1811
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: 87BW7
        scientificName: Iguania
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: null
      - id: 64B
        scientificName: Agamidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "1008"
      - id: 87CD5
        scientificName: Amphibolurinae
        authorship: null
        rank: subfamily
        status: accepted
        sourceDatasetId: "1008"
      - id: 63NN8
        scientificName: Pogona
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "1008"
      - id: 4KV6Z
        scientificName: Pogona vitticeps (Ahl, 1926)
        authorship: (Ahl, 1926)
        rank: species
        status: accepted
        sourceDatasetId: "1008"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Captive-bred lizards from two breeders were studied; domesticated population-level variation was not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4KV6Z
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4KV6Z@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4KV6Z. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-bb4e6d33-9bb5-8b2e-aadd-87e377841ad5
          metadataVariant: 0
          sourceKey: denomme2025pogona
          usage:
            licenseEvidenceLocator: The article-level copyright notice links the Creative Commons Attribution License to the canonical CC BY 4.0 URL.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0322682
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
              - denomme2025pogona
            locator: Results, Thermal heterogeneity and enclosure temperatures; Methods, Thermal heterogeneity; Fig. 8.
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

# Pogona vitticeps

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The source supports a captive-enclosure temperature comparison in one Brock University study. It does not show that the enclosure design improves wild adaptation, thermoregulation, or overall welfare.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The temperature comparison used captive-bred animals and laboratory enclosures; wild population responses were not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4KV6Z; exact accepted name, authorship, species rank, sourceDatasetId 1008, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases findings and does not reproduce figures or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Animals and husbandry and Thermal heterogeneity; Results, Thermal heterogeneity and enclosure temperatures; publisher copyright and license notice.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original study of captive-bred Pogona vitticeps in standard and naturalistic enclosure conditions; the cited thermal comparison is limited to the measured enclosures and time points.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Denommé M, Bakker NL, Tattersall GJ (2025). Influence of enclosure design on the behaviour and welfare of Pogona vitticeps. PLOS ONE 20(6):e0322682. https://doi.org/10.1371/journal.pone.0322682. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Thermal images from the study's naturalistic enclosures showed greater substrate-temperature variability than standard enclosures: model estimates for the substrate-temperature standard deviation were 1.86 ± 0.07 and 1.39 ± 0.07, respectively (p < 0.001). The result is an enclosure-level measurement and does not by itself demonstrate improved thermoregulation or welfare.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Brock University laboratory study in St. Catharines, Ontario, Canada. Temperature images were collected in May 2024 around 09:00, 11:00, and 15:00; after removing one enclosure of each style from analysis, 11 enclosures per style were represented at each time point.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Captive-bred Pogona vitticeps in laboratory enclosures; no wild animals or fossil material were represented in this temperature comparison.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The temperature analysis measured enclosures and did not establish the lizards' resulting body temperatures or realized thermoregulation.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The authors describe overall behaviour and welfare effects as equivocal; substrate-temperature heterogeneity alone does not establish improved welfare.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, wild ecology, evolution, distribution, fossils, conservation, and independent review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The enclosure study supports a thermal heterogeneity result but does not establish corresponding thermoregulation or welfare effects.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The evidence is limited to captive-bred animals in one laboratory study and does not represent wild populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets and complete geographic, fossil, conservation, and external review coverage remain unassessed.
<!-- /evo:text -->
