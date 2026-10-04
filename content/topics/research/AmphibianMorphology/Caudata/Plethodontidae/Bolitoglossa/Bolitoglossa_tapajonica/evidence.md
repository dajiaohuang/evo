---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Bolitoglossa tapajonica
    name:
      en: Bolitoglossa tapajonica
      zh: Bolitoglossa tapajonica
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
            locator: Caudata.csv, rows 89, 90; Reference.csv rows 4242
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
      - rowNumber: 89
        values:
          - Plethodontidae
          - Bolitoglossa
          - Bolitoglossa tapajonica
          - F
          - NA
          - "41.5"
          - NA
          - NA
          - "5.5"
          - "5.5"
          - NA
          - "1.9"
          - NA
          - NA
          - NA
          - "2.2"
          - "33.4"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.4"
          - "2.7"
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 90
        values:
          - Plethodontidae
          - Bolitoglossa
          - Bolitoglossa tapajonica
          - M
          - NA
          - "41.4"
          - NA
          - NA
          - "6.2"
          - "5.7"
          - NA
          - "2.3"
          - NA
          - NA
          - NA
          - "2.1"
          - "31.9"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.7"
          - "3.2"
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
      - rowNumber: 4242
        values:
          - Caudata
          - Bolitoglossa_tapajonica
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - HL
      - HW
      - ED
      - SL
      - TL
      - F3L
      - T3L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - MDSJ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Bolitoglossa tapajonica — morphology source

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
Brcko, I. C., Hoogmoed, M. S., & Neckel-Oliverira, S. (2013). Taxonomy and distribution of the salamander genus Bolitoglossa Dumeril, Bibron & Dumeril, 1854 (Amphibia, Caudata, Plethodontidae) in Brazilian Amazonia. Zootaxa, 3686, 401-431. https://doi.org/10.11646/zootaxa.3686.4.1 ;    García-Gutiérrez, J., Escalona, M., Mora, A., Díaz De Pascual, A., & Fermin, G. (2013). A new species of salamander (Caudata: Plethodontidae, Bolitoglossa) from Sierra Nevada de Mérida, Venezuela. Zootaxa, 3620, 179-191. https://doi.org/10.11646/zootaxa.3620.1.9
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units or external expert review.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位或外部专家审评。
<!-- /evo:text -->
