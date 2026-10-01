---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nomascus nasutus (Kunkel d'Herculais, 1884)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 高北白颊长臂猿
      en: Cao Vit gibbon
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-a3c63269-0cd3-86ab-a236-a3fba0a7de6a
          metadataVariant: 0
          sourceKey: wearn2024caovitgibbon
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/47NQQ
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Nomascus nasutus (Kunkel d'Herculais, 1884)
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
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: 3W7
        scientificName: Primates Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4DT
        scientificName: Haplorrhini Pocock, 1918
        authorship: Pocock, 1918
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4PM
        scientificName: Simiiformes Haeckel, 1866
        authorship: Haeckel, 1866
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 58L
        scientificName: Hominoidea Gray, 1825
        authorship: Gray, 1825
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: B9K
        scientificName: Hylobatidae Gray, 1871
        authorship: Gray, 1871
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 64QQ
        scientificName: Nomascus Miller, 1933
        authorship: Miller, 1933
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 47NQQ
        scientificName: Nomascus nasutus (Kunkel d'Herculais, 1884)
        authorship: (Kunkel d'Herculais, 1884)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild: Free-ranging Cao Vit gibbons detected or estimated from survey and monitoring in protected forest habitat.
      domesticated: Captive populations were not assessed.
      fossil: Fossil occurrence and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/47NQQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:47NQQ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 47NQQ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-a66c2e9f-0c0b-8353-adb2-85fe0e8e9250
          metadataVariant: 0
          sourceKey: wearn2024caovitgibbon
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo: Published article text; this dossier paraphrases the survey estimate and does not reproduce figures or tables.
            stableId: doi:10.1038/s41598-023-50838-2
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
              - wearn2024caovitgibbon
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

# Nomascus nasutus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
越南与中国相邻保护区内一片跨境残存森林的调查；声学资料于 2021 年 9–10 月采集，结果限于该林区。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Survey of one transboundary remnant forest block in adjacent Vietnamese and Chinese reserves; acoustic data were collected in September–October 2021 and results are limited to that block.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to a 2021 field estimate for the sole remaining transboundary Cao Vit-Trung Khanh forest block along the Vietnam-China border; the reported total excludes an unknown number of difficult-to-detect solitary dispersers.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 47NQQ; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Europe PMC JATS article-meta > permissions > license > license-p explicitly states CC BY 4.0 and links to the Creative Commons deed.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and methods, Study sites (Par7) and Observational survey (Par8); Table 2 caption and Results, Population size estimation (Par32); Discussion (Par34 and Par39); article-meta permissions/license-p in the PMC/Europe PMC JATS full text.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary field survey combining vocal fingerprinting, listening points, and monitoring records for a single transboundary remnant forest block; results do not establish the state of all former or possible populations.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Wearn OR, Trinh-Dinh H, Ma C-Y, Le QK, Nguyen P, Hoang TV, Luong CV, Hua TV, Hoang QV, Fan PF, Nguyen TD. (2024). Vocal fingerprinting reveals a substantially smaller global population of the Critically Endangered cao vit gibbon (Nomascus nasutus) than previously thought. Scientific Reports 14:416. https://doi.org/10.1038/s41598-023-50838-2. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
A 2021 survey of the Cao Vit-Trung Khanh transboundary forest block combined vocal fingerprinting, field observations, and long-term monitoring records to estimate 74 individuals in 11 identified family groups of Nomascus nasutus. The authors attributed a 38% difference from an older estimate mainly to duplicate group counts in the earlier triangulation survey and reported no evidence of population decline. This is a site-specific estimate that excludes an unknown number of solitary dispersers and is not a census of the species across its former range.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Table 2 caption (2021 September-October acoustic sampling and exclusion of solitary dispersers); Results, Population size estimation (Par32, 11 groups and 74 individuals); Discussion (Par34, 38% difference and no evidence of decline); limitations on solitary dispersers (Par39).
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Cao Vit Gibbon Species and Habitat Conservation Area, Vietnam, and Bangliang Nature Reserve, China, within the Cao Vit-Trung Khanh forest block; acoustic data collected September-October 2021 at 29 listening points, interpreted alongside field observations and longer-term monitoring.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging wild gibbons in protected transboundary forest; the estimate is based on identified family groups and does not include an unknown number of solitary dispersers.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The estimate covers the single known transboundary remnant forest block and omits an unknown number of solitary dispersers.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
A 2021 estimate and comparison with older methods do not establish abundance across former range or long-term global trend.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, other ecology, evolution, distribution beyond this survey block, fossils, conservation status beyond the cited study, systematic search, and expert review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One local survey and monitoring estimate supports a bounded population claim for the Cao Vit-Trung Khanh remnant forest block.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The result excludes solitary dispersers and does not establish a global census or trend.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets, systematic evidence search, and external expert review remain unassessed.
<!-- /evo:text -->
