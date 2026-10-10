---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Ambystoma lermaense
    name:
      en: Ambystoma lermaense
      zh: Ambystoma lermaense
    sourceClassification:
      order: Caudata
      family: Ambystomatidae
      genus: Ambystoma
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
            locator: Caudata.csv, rows 7, 8; Reference.csv rows 4168
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
      - rowNumber: 7
        values:
          - Ambystomatidae
          - Ambystoma
          - Ambystoma lermaense
          - F
          - NA
          - "100.35"
          - NA
          - "55.5"
          - "25.15"
          - "25.75"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "77.65"
          - NA
          - "26.5"
          - NA
          - NA
          - "33.25"
          - "32.25"
          - NA
          - NA
          - NA
          - NA
          - "35"
          - NA
          - NA
          - NA
      - rowNumber: 8
        values:
          - Ambystomatidae
          - Ambystoma
          - Ambystoma lermaense
          - M
          - NA
          - "131"
          - NA
          - "55.83333333"
          - "28.83333333"
          - "30.96666667"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "108"
          - NA
          - "31.33333333"
          - NA
          - NA
          - "34.8"
          - "43.6"
          - NA
          - NA
          - NA
          - NA
          - "45.46666667"
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4168
        values:
          - Caudata
          - Ambystoma_lermaense
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - AGS
      - HL
      - HW
      - TL
      - TH
      - FLL
      - HLL
      - SF
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - CQ4C
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Ambystoma lermaense — morphology source

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
Taylor, E. H. (1940). New salamanders from Mexico, with a discussion of certain known forms. University of Kansas Science Bulletin, 26, 407-439. https://biostor.org/reference/1076
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
