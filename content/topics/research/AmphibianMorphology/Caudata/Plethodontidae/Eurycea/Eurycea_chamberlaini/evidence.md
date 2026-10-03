---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Eurycea chamberlaini
    name:
      en: Eurycea chamberlaini
      zh: Eurycea chamberlaini
    sourceClassification:
      order: Caudata
      family: Plethodontidae
      genus: Eurycea
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
            locator: Caudata.csv, rows 121; Reference.csv rows 4056
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
      - rowNumber: 121
        values:
          - Plethodontidae
          - Eurycea
          - Eurycea chamberlaini
          - NA
          - "51.78571429"
          - "26.1"
          - NA
          - NA
          - "5.2722"
          - "3.0537"
          - "1.566"
          - "1.3572"
          - NA
          - NA
          - NA
          - NA
          - "25.68571429"
          - "1.5138"
          - NA
          - "1.9836"
          - NA
          - "6.0813"
          - "7.0992"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1.6965"
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4056
        values:
          - Caudata
          - Eurycea_chamberlaini
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
        - 6HF78
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Eurycea chamberlaini — morphology source

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
Harrison, J. R., & Guttman, S. I. (2003). A new species of Eurycea (Caudata: Plethodontidae) from North and South Carolina. Southeastern Naturalist, 2(2), 159-178. ;  Wray, K. P., Means, D. B., & Steppan, S. J. (2017). Revision of the Eurycea quadridigitata (Holbrook 1842) Complex of dwarf Salamanders (Caudata: Plethodontidae: Hemidactyliinae) with a description of two new species. Herpetological Monographs, 31(1). https://doi.org/10.1655/herpmonographs-d-16-00011
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
