---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Cynops fudingensis
    name:
      en: Cynops fudingensis
      zh: Cynops fudingensis
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Cynops
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
            locator: Caudata.csv, rows 104, 105; Reference.csv rows 4044
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
      - rowNumber: 104
        values:
          - Salamandridae
          - Cynops
          - Cynops fudingensis
          - F
          - "86.8"
          - "44.1"
          - NA
          - "21.6"
          - "13.6"
          - "9"
          - "5.5"
          - NA
          - "3.4"
          - NA
          - "2.4"
          - NA
          - "40.1"
          - NA
          - NA
          - NA
          - NA
          - "14.7"
          - "15.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 105
        values:
          - Salamandridae
          - Cynops
          - Cynops fudingensis
          - M
          - "75.2"
          - "39.8"
          - NA
          - "18.3"
          - "12.8"
          - "8.5"
          - "5.1"
          - NA
          - "3.3"
          - NA
          - "2.5"
          - NA
          - "32.1"
          - NA
          - NA
          - NA
          - NA
          - "14.2"
          - "14.8"
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
      - rowNumber: 4044
        values:
          - Caudata
          - Cynops_fudingensis
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - SVL
      - AGS
      - HL
      - HW
      - IOD
      - EN
      - IND
      - TL
      - FLL
      - HLL
    sourceConceptMapping:
      status: unresolved
      candidateColIds: []
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Cynops fudingensis — morphology source

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
Wu, Y., Wang, Y., Jiang, K., & Hanken, J. (2009). A new newt of the genus Cynops (Caudata: Salamandridae) from Fujian Province, southeastern China. Zootaxa, 2346, 42-52. https://doi.org/10.5281/zenodo.193397
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
