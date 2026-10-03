---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Batrachuperus pinchonii
    name:
      en: Batrachuperus pinchonii
      zh: Batrachuperus pinchonii
    sourceClassification:
      order: Caudata
      family: Hynobiidae
      genus: Batrachuperus
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
            locator: Caudata.csv, rows 27, 28; Reference.csv rows 4120
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
      - rowNumber: 27
        values:
          - Hynobiidae
          - Batrachuperus
          - Batrachuperus pinchonii
          - M
          - "130"
          - "70.5"
          - "53.4"
          - "31.9"
          - "16.9"
          - "12.8"
          - NA
          - "6"
          - NA
          - NA
          - NA
          - "5.6"
          - "59.7"
          - "7.9"
          - NA
          - NA
          - NA
          - "18.6"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 28
        values:
          - Hynobiidae
          - Batrachuperus
          - Batrachuperus pinchonii
          - F
          - "119.4"
          - "66.4"
          - "52.7"
          - "33"
          - "15"
          - "11.7"
          - NA
          - "4.9"
          - NA
          - NA
          - NA
          - "5.2"
          - "53.5"
          - "7"
          - NA
          - NA
          - NA
          - "18.1"
          - NA
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
      - rowNumber: 4120
        values:
          - Caudata
          - Batrachuperus_pinchonii
          - Fei, L., Hu, S,,Q., Ye, C, Y., et al. (2006). Fauna Sinica, Amphibia, Urodela. Science Press, Beijing.
    availableTraitCodes:
      - TOL
      - SVL
      - TRL
      - AGS
      - HL
      - HW
      - ED
      - SL
      - TL
      - TW
      - FLL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - KZSQ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Batrachuperus pinchonii — morphology source

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
