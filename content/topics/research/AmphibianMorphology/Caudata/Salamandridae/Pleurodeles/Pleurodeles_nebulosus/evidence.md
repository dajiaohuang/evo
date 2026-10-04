---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Pleurodeles nebulosus
    name:
      en: Pleurodeles nebulosus
      zh: Pleurodeles nebulosus
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Pleurodeles
    checkedAt: 2026-10-02
    reviewStatus: source-linked
    sections:
      - topic: overview
        title:
          en: The deposited morphology record
          zh: 存档的形态记录
        sourceIds:
          - amphibian-morphology
        text:
          en:
            markdown: page.en.md
            field: /records/amphibian-morphology-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibian-morphology-reader/sections/0/text/zh
      - topic: morphology
        title:
          en: Sex-specific measurement material
          zh: 按性别保留的测量材料
        sourceIds:
          - amphibian-morphology
        text:
          en:
            markdown: page.en.md
            field: /records/amphibian-morphology-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibian-morphology-reader/sections/1/text/zh
    sources:
      referenceBindings:
        - referenceId: ref-fd9084a2-752b-4a3e-b904-e62d665705df
          metadataVariant: 0
          sourceKey: amphibian-morphology
          usage:
            locator: Caudata.csv, rows 308, 309; Reference.csv rows 4219
            scope:
              en:
                markdown: evidence.md
                field: /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseUrl
            - rightsEvidenceUrl
            - licenseAssessment
            - licenseAppliesTo
            - attribution
            - locator
            - scope
    originalColumns:
      - Family
      - Genus
      - Species
      - Sex
      - TOL
      - SVL
      - TRL
      - AGS
      - HL
      - HW
      - IOD
      - ED
      - EN
      - UEW
      - IND
      - SL
      - TL
      - TW
      - TH
      - TAH
      - MTAW
      - FLL
      - HLL
      - F2L
      - F3L
      - T3L
      - T5L
      - SF
      - VL
      - ELL
      - SG
    originalMeasurementRows:
      - rowNumber: 308
        values:
          - Salamandridae
          - Pleurodeles
          - Pleurodeles nebulosus
          - F
          - NA
          - "59.336"
          - NA
          - NA
          - "14.342"
          - "11.391"
          - "4.966"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "64.654"
          - NA
          - NA
          - NA
          - NA
          - "16.127"
          - NA
          - NA
          - NA
          - "5.572"
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 309
        values:
          - Salamandridae
          - Pleurodeles
          - Pleurodeles nebulosus
          - M
          - NA
          - "60.575"
          - NA
          - NA
          - "15.138"
          - "12.045"
          - "5.055"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "79.425"
          - NA
          - NA
          - NA
          - NA
          - "19.725"
          - NA
          - NA
          - NA
          - "6.316"
          - NA
          - NA
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4219
        values:
          - Caudata
          - Pleurodeles_nebulosus
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - HL
      - HW
      - IOD
      - TL
      - FLL
      - T3L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4KBD8
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Pleurodeles nebulosus — morphology source

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/en -->
Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/zh -->
存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。
<!-- /evo:text -->

## amphibian-morphology-reader / originalReferenceRows / values

<!-- evo:text /records/amphibian-morphology-reader/originalReferenceRows/0/values/2 -->
Carranza, S., & Wade, E. (2004). Taxonomic revision of Algero-Tunisian Pleurodeles (Caudata : Salamandridae) using molecular and morphological data. Revalidation of the taxon Pleurodeles nebulosus (Guichenot, 1850). Zootaxa, 488, 1-24. https://doi.org/10.11646/ZOOTAXA.488.1.1
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
