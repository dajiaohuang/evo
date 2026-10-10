---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Paramesotriton hongkongensis
    name:
      en: Paramesotriton hongkongensis
      zh: Paramesotriton hongkongensis
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Paramesotriton
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
            locator: Caudata.csv, rows 285, 286; Reference.csv rows 4142
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
      - rowNumber: 285
        values:
          - Salamandridae
          - Paramesotriton
          - Paramesotriton hongkongensis
          - M
          - "111.5"
          - "64.7"
          - NA
          - "24.5"
          - "16.1"
          - "14.3"
          - "5"
          - "5.2"
          - NA
          - NA
          - NA
          - NA
          - "47"
          - "8"
          - "9.4"
          - NA
          - NA
          - "21"
          - "22.2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 286
        values:
          - Salamandridae
          - Paramesotriton
          - Paramesotriton hongkongensis
          - F
          - "126.5"
          - "67.2"
          - NA
          - "29.5"
          - "16.7"
          - "14.5"
          - "5.2"
          - "4.9"
          - NA
          - NA
          - NA
          - NA
          - "59.5"
          - "7.9"
          - "8.5"
          - NA
          - NA
          - "21.3"
          - "20.3"
          - NA
          - NA
          - NA
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
      - rowNumber: 4142
        values:
          - Caudata
          - Paramesotriton_hongkongensis
          - Fei, L., Hu, S,,Q., Ye, C, Y., et al. (2006). Fauna Sinica, Amphibia, Urodela. Science Press, Beijing.
    availableTraitCodes:
      - TOL
      - SVL
      - AGS
      - HL
      - HW
      - IOD
      - ED
      - TL
      - TW
      - TH
      - FLL
      - HLL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4D374
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Paramesotriton hongkongensis — morphology source

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/en -->
Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/zh -->
存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
