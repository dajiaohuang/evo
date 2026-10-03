---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Salamandra lanzai
    name:
      en: Salamandra lanzai
      zh: Salamandra lanzai
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Salamandra
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
            locator: Caudata.csv, rows 345, 346; Reference.csv rows 4049
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
      - rowNumber: 345
        values:
          - Salamandridae
          - Salamandra
          - Salamandra lanzai
          - F
          - "137.5"
          - "74"
          - NA
          - "37.6"
          - "19.1"
          - NA
          - NA
          - "4.7"
          - NA
          - NA
          - "6.1"
          - NA
          - "63"
          - NA
          - NA
          - NA
          - NA
          - "22.5"
          - "26.1"
          - NA
          - NA
          - "10.8"
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 346
        values:
          - Salamandridae
          - Salamandra
          - Salamandra lanzai
          - M
          - "138.3"
          - "74.2"
          - NA
          - "37.3"
          - "18.4"
          - NA
          - "4.4"
          - "4.7"
          - NA
          - NA
          - "5.9"
          - NA
          - "64.6"
          - NA
          - NA
          - NA
          - NA
          - "25.7"
          - "27.7"
          - NA
          - NA
          - "11.5"
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
      - rowNumber: 4049
        values:
          - Caudata
          - Salamandra_lanzai
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - SVL
      - AGS
      - HL
      - IOD
      - ED
      - IND
      - TL
      - FLL
      - HLL
      - T3L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6WZLG
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Salamandra lanzai — morphology source

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
Nascetti, G., Andreone, F., Capula, M., & Bullini, L. (1988). A new Salamandra species from southwestern Alps (Amphibia, Urodela, Salamandridae). Bollettino del Museo Regionale di Scienza naturali di Torino, 6, 617-638. 
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
