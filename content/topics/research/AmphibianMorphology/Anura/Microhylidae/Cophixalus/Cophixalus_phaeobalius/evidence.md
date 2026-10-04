---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Cophixalus phaeobalius
    name:
      en: Cophixalus phaeobalius
      zh: Cophixalus phaeobalius
    sourceClassification:
      order: Anura
      family: Microhylidae
      genus: Cophixalus
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
            locator: Anura.csv, rows 1247, 1248; Reference.csv rows 319
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
      - SVL
      - HL
      - HW
      - ED
      - TD
      - ETD
      - IOD
      - IND
      - UEW
      - EN
      - SL
      - NS
      - HAL
      - FLL
      - LAL
      - FL
      - TFL
      - TL
      - THL
      - TSL
      - HLL
      - IMT
      - Toe1L
      - Toe2L
      - Toe3L
      - Toe4L
      - Toe5L
      - Fin1L
      - Fin2L
      - Fin3L
      - Fin4L
      - Fin1DW
      - Fin2DW
      - Fin3DW
      - Fin4DW
      - Toe1DW
      - Toe2DW
      - Toe3DW
      - Toe4DW
      - Toe5DW
      - UAL
      - SUL
    originalMeasurementRows:
      - rowNumber: 1247
        values:
          - Microhylidae
          - Cophixalus
          - Cophixalus phaeobalius
          - M
          - "14.1"
          - "4.371"
          - "5.076"
          - "1.833"
          - "0.705"
          - NA
          - NA
          - "1.2972"
          - NA
          - "1.1844"
          - "1.692"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7.755"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.7473"
          - NA
          - NA
          - NA
          - NA
          - "0.7473"
          - NA
          - NA
          - NA
      - rowNumber: 1248
        values:
          - Microhylidae
          - Cophixalus
          - Cophixalus phaeobalius
          - F
          - "15.6"
          - "5.148"
          - "5.772"
          - "2.028"
          - "1.1388"
          - NA
          - NA
          - "1.4976"
          - NA
          - "1.326"
          - "2.028"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "8.58"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.8112"
          - NA
          - NA
          - NA
          - NA
          - "0.8736"
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 319
        values:
          - Anura
          - Cophixalus_phaeobalius
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - HL
      - HW
      - ED
      - TD
      - IND
      - EN
      - SL
      - TL
      - Fin3DW
      - Toe4DW
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - Y44Y
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Cophixalus phaeobalius — morphology source

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
Kraus, F., & Allison, A. (2009). New species of Cophixalus (Anura: Microhylidae) from Papua New Guinea. Zootaxa(2128), 1-38.  https://doi.org/10.5281/zenodo.188300
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
