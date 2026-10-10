---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Eurycea hillisi
    name:
      en: Eurycea hillisi
      zh: Eurycea hillisi
    sourceClassification:
      order: Caudata
      family: Plethodontidae
      genus: Eurycea
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
            locator: Caudata.csv, rows 123; Reference.csv rows 4194
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
      - rowNumber: 123
        values:
          - Plethodontidae
          - Eurycea
          - Eurycea hillisi
          - NA
          - "51.07296137"
          - "23.8"
          - NA
          - NA
          - "5.117"
          - "3.0702"
          - "1.547"
          - "1.3566"
          - NA
          - NA
          - NA
          - NA
          - "27.27296137"
          - "1.666"
          - NA
          - "2.1658"
          - NA
          - "5.6168"
          - "6.6402"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1.4756"
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4194
        values:
          - Caudata
          - Eurycea_hillisi
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - SVL
      - HL
      - HW
      - IOD
      - ED
      - TL
      - TW
      - TAH
      - FLL
      - HLL
      - ELL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3D3GZ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Eurycea hillisi — morphology source

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
Wray, K. P., Means, D. B., & Steppan, S. J. (2017). Revision of the Eurycea quadridigitata (Holbrook 1842) complex of Dwarf Salamanders (Caudata: Plethodontidae: Hemidactyliinae) with a description of two new species. Herpetological Monographs, 31, 18–46. https://doi.org/10.1655/herpmonographs-d-16-00011
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
