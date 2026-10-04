---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Odorrana narina
    name:
      en: Odorrana narina
      zh: Odorrana narina
    sourceClassification:
      order: Anura
      family: Ranidae
      genus: Odorrana
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
            locator: Anura.csv, rows 3788; Reference.csv rows 3925
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
      - rowNumber: 3788
        values:
          - Ranidae
          - Odorrana
          - Odorrana narina
          - NA
          - "49.4"
          - "19.266"
          - "15.561"
          - "7.5582"
          - "4.1002"
          - "1.235"
          - "3.3592"
          - "4.7918"
          - "5.2858"
          - "3.9026"
          - "7.8052"
          - "3.5568"
          - "12.5476"
          - "32.5546"
          - NA
          - "26.923"
          - NA
          - "28.6026"
          - "26.0832"
          - NA
          - "89.5128"
          - "2.3218"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7.7064"
          - NA
          - NA
          - NA
          - "1.51658"
          - NA
          - NA
          - NA
          - NA
          - "1.46718"
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 3925
        values:
          - Anura
          - Odorrana_narina
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
      - SL
      - NS
      - HAL
      - FLL
      - FL
      - TL
      - THL
      - HLL
      - IMT
      - Fin3L
      - Fin3DW
      - Toe4DW
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 48SGJ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Odorrana narina — morphology source

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
Matsui, M. (2008). A taxonomic study of the Rana narina complex, with description of three new species (Amphibia: Ranidae). Zoological Journal of the Linnean Society, 111, 385-415. https://doi.org/10.1111/j.1096-3642.1994.tb01489.x
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
