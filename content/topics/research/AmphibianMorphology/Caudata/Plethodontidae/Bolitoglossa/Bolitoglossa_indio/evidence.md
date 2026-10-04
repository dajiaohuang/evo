---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Bolitoglossa indio
    name:
      en: Bolitoglossa indio
      zh: Bolitoglossa indio
    sourceClassification:
      order: Caudata
      family: Plethodontidae
      genus: Bolitoglossa
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
            locator: Caudata.csv, rows 61; Reference.csv rows 4276
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
      - rowNumber: 61
        values:
          - Plethodontidae
          - Bolitoglossa
          - Bolitoglossa indio
          - F
          - NA
          - "46.8"
          - NA
          - "24.5"
          - "11.3"
          - "7.7"
          - "2.7"
          - "2.5"
          - NA
          - "1.9"
          - "2.6"
          - "3.5"
          - "34.8"
          - "4.3"
          - NA
          - "4.3"
          - NA
          - "10.4"
          - "10.9"
          - NA
          - NA
          - NA
          - NA
          - "13.3"
          - NA
          - "3.5"
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4276
        values:
          - Caudata
          - Bolitoglossa_indio
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - AGS
      - HL
      - HW
      - IOD
      - ED
      - UEW
      - IND
      - SL
      - TL
      - TW
      - TAH
      - FLL
      - HLL
      - SF
      - ELL
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - MDPZ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Bolitoglossa indio — morphology source

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
Sunyer, J., Lotzkat, S., Hertz, A., Wake, D. B., Alemán, B. M., Robleto, S. J., & Köhler, G. (2008). Two new species of salamanders (genus Bolitoglossa) from southern Nicaragua (Amphibia, Caudata, Plethodontidae). Dos especies nuevas de salamandras (género Bolitoglossa) del sur de Nicaragua (Amphibia, Caudata, Plethodontidae). Senckenbergiana Biologica, 88(2), 319-328. 
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
