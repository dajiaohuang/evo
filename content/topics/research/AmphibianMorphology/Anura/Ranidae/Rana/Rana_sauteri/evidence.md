---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Rana sauteri
    name:
      en: Rana sauteri
      zh: Rana sauteri
    sourceClassification:
      order: Anura
      family: Ranidae
      genus: Rana
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
            locator: Anura.csv, rows 5198, 5199; Reference.csv rows 4009
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
      - rowNumber: 5198
        values:
          - Ranidae
          - Rana
          - Rana sauteri
          - M
          - "39.9"
          - "15.1"
          - "13"
          - "5.9"
          - "3.5"
          - "1.2"
          - "3.4"
          - "4.1"
          - "3.1"
          - "3.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "21.5"
          - NA
          - "23.6"
          - "20.9"
          - NA
          - NA
          - "1.8"
          - NA
          - NA
          - NA
          - "13.2"
          - NA
          - NA
          - NA
          - "5.6"
          - NA
          - NA
          - NA
          - NA
          - "2.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 5199
        values:
          - Ranidae
          - Rana
          - Rana sauteri
          - F
          - "50.6"
          - "19.1"
          - "17.1"
          - "6.7"
          - "4"
          - "1.7"
          - "4.4"
          - "4.9"
          - "3.7"
          - "4.3"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "26.7"
          - NA
          - "29.8"
          - "26.2"
          - NA
          - NA
          - "2.1"
          - NA
          - NA
          - NA
          - "16.2"
          - NA
          - NA
          - NA
          - "7.2"
          - NA
          - NA
          - NA
          - NA
          - "3.1"
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
      - rowNumber: 4009
        values:
          - Anura
          - Rana_sauteri
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
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
      - FL
      - TL
      - THL
      - IMT
      - Toe4L
      - Fin3L
      - Fin4DW
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - "79393"
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Rana sauteri — morphology source

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
Chou, W. H., & Lin, J. Y. (1997). Description of a new species, Rana multidenticulata (Anura: Ranidae), from Taiwan. Zoological Studies, 36(3), 222-229.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
