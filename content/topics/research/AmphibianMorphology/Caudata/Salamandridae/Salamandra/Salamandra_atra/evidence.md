---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Salamandra atra
    name:
      en: Salamandra atra
      zh: Salamandra atra
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Salamandra
    checkedAt: 2026-10-02
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
            locator: Caudata.csv, rows 341, 342; Reference.csv rows 4244
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
      - rowNumber: 341
        values:
          - Salamandridae
          - Salamandra
          - Salamandra atra
          - M
          - "107.7"
          - "58.2"
          - NA
          - "30.1"
          - "14.7"
          - NA
          - NA
          - "3.6"
          - NA
          - NA
          - "4.6"
          - NA
          - "49.9"
          - NA
          - NA
          - NA
          - NA
          - "20.2"
          - "22.2"
          - NA
          - NA
          - "9.9"
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 342
        values:
          - Salamandridae
          - Salamandra
          - Salamandra atra
          - F
          - "107.9"
          - "59.6"
          - NA
          - "31.8"
          - "14.8"
          - NA
          - NA
          - "3.6"
          - NA
          - NA
          - "4.7"
          - NA
          - "48.5"
          - NA
          - NA
          - NA
          - NA
          - "18.2"
          - "20.9"
          - NA
          - NA
          - "9.4"
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
      - rowNumber: 4244
        values:
          - Caudata
          - Salamandra_atra
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - SVL
      - AGS
      - HL
      - ED
      - IND
      - TL
      - FLL
      - HLL
      - T3L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6WZN4
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Salamandra atra — morphology source

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
Bonato, L., & Steinfartz, S. (2005). Evolution of the melanistic colour in the Alpine salamander Salamandra atra as revealed by a new subspecies from the Venetian Prealps. Italian Journal of Zoology, 72(3), 253-260. https://doi.org/10.1080/11250000509356680
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
