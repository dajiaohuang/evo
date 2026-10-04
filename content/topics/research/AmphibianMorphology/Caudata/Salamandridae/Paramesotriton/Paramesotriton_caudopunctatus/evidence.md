---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Paramesotriton caudopunctatus
    name:
      en: Paramesotriton caudopunctatus
      zh: Paramesotriton caudopunctatus
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Paramesotriton
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
            locator: Caudata.csv, rows 279, 280; Reference.csv rows 4139
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
      - rowNumber: 279
        values:
          - Salamandridae
          - Paramesotriton
          - Paramesotriton caudopunctatus
          - M
          - "134.2"
          - "71.5"
          - NA
          - "32.7"
          - "19.3"
          - "14.3"
          - "4.2"
          - "3.5"
          - NA
          - NA
          - "4.5"
          - "7.7"
          - "62.6"
          - "9.1"
          - "10.1"
          - NA
          - NA
          - "22.9"
          - "22.4"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 280
        values:
          - Salamandridae
          - Paramesotriton
          - Paramesotriton caudopunctatus
          - F
          - "144.3"
          - "75.4"
          - NA
          - "36.1"
          - "18.4"
          - "13.4"
          - "4.6"
          - "3.4"
          - NA
          - NA
          - "4.4"
          - "7.1"
          - "68.4"
          - "9"
          - "9.4"
          - NA
          - NA
          - "21.5"
          - "22.5"
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
      - rowNumber: 4139
        values:
          - Caudata
          - Paramesotriton_caudopunctatus
          - Fei, L., Hu, S,,Q., Ye, C, Y., et al. (2006). Fauna Sinica, Amphibia, Urodela. Science Press, Beijing.
    availableTraitCodes:
      - TOL
      - SVL
      - AGS
      - HL
      - HW
      - IOD
      - ED
      - IND
      - SL
      - TL
      - TW
      - TH
      - FLL
      - HLL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4D36V
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Paramesotriton caudopunctatus — morphology source

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
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
