---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Centrolene condor
    name:
      en: Centrolene condor
      zh: Centrolene condor
    sourceClassification:
      order: Anura
      family: Centrolenidae
      genus: Centrolene
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
            locator: Anura.csv, rows 1033; Reference.csv rows 199
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
      - rowNumber: 1033
        values:
          - Centrolenidae
          - Centrolene
          - Centrolene condor
          - M
          - "27.6"
          - "9.1"
          - "9.5"
          - "2.7"
          - "1"
          - NA
          - "5.2"
          - "2.4"
          - NA
          - "2.2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "12.9"
          - NA
          - "14.9"
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
          - "1.6"
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
      - rowNumber: 199
        values:
          - Anura
          - Centrolene_condor
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - HL
      - HW
      - ED
      - TD
      - IOD
      - IND
      - EN
      - FL
      - TL
      - Fin3DW
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - S9XX
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Centrolene condor — morphology source

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
Cisneros-Heredia, D. F., & Morales-Mite, M. (2008). A new species of glassfrog from elfin forests of the Cordillera del Cóndor, Southeastern Ecuador. Herpetozoa, 21(1/2), 49-56.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
