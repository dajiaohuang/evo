---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Aneides iecanus
    name:
      en: Aneides iecanus
      zh: Aneides iecanus
    sourceClassification:
      order: Caudata
      family: Plethodontidae
      genus: Aneides
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
            locator: Caudata.csv, rows 18, 19; Reference.csv rows 4222
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
      - rowNumber: 18
        values:
          - Plethodontidae
          - Aneides
          - Aneides iecanus
          - F
          - NA
          - "70.1"
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "54.678"
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
      - rowNumber: 19
        values:
          - Plethodontidae
          - Aneides
          - Aneides iecanus
          - M
          - NA
          - "75.8"
          - NA
          - NA
          - NA
          - "12.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "64.43"
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
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4222
        values:
          - Caudata
          - Aneides_iecanus
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - HW
      - TL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 66R29
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Aneides iecanus — morphology source

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
Reilly, S. B., & Wake, D. B. (2019). Taxonomic revision of black salamanders of the Aneides flavipunctatus complex (Caudata: Plethodontidae). PeerJ, 7, e7370. https://doi.org/10.7717/peerj.7370
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
