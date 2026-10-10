---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Triturus ivanbureschi
    name:
      en: Triturus ivanbureschi
      zh: Triturus ivanbureschi
    sourceClassification:
      order: Caudata
      family: Salamandridae
      genus: Triturus
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
            locator: Caudata.csv, rows 364, 365; Reference.csv rows 4098
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
      - rowNumber: 364
        values:
          - Salamandridae
          - Triturus
          - Triturus ivanbureschi
          - M
          - "102.875"
          - "60.75"
          - NA
          - NA
          - "15.1"
          - "10.95"
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
          - "21.75"
          - "22.3"
          - NA
          - "8.225"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 365
        values:
          - Salamandridae
          - Triturus
          - Triturus ivanbureschi
          - F
          - "111.9"
          - "60.43333333"
          - NA
          - NA
          - "15.16"
          - "11.02666667"
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
          - "20.40666667"
          - "20.19333333"
          - NA
          - "7.013333333"
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
      - rowNumber: 4098
        values:
          - Caudata
          - Triturus_ivanbureschi
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - SVL
      - HL
      - HW
      - FLL
      - HLL
      - F3L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 7D7VY
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Triturus ivanbureschi — morphology source

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
Wielstra, B., Litvinchuk, S. N., Naumov, B., Tzankov, N., & Arntzen, J. W. (2013). A revised taxonomy of crested newts in the Triturus karelinii group (Amphibia: Caudata: Salamandridae), with the description of a new species. Zootaxa, 3682(3), 441-453. https://doi.org/10.11646/zootaxa.3682.3.5
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
