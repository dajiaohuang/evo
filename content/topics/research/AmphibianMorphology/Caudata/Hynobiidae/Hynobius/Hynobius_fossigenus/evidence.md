---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Hynobius fossigenus
    name:
      en: Hynobius fossigenus
      zh: Hynobius fossigenus
    sourceClassification:
      order: Caudata
      family: Hynobiidae
      genus: Hynobius
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
            locator: Caudata.csv, rows 144; Reference.csv rows 4103
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
      - rowNumber: 144
        values:
          - Hynobiidae
          - Hynobius
          - Hynobius fossigenus
          - M
          - NA
          - "69.4"
          - "52.9"
          - "35.9"
          - "17.5"
          - "12.2"
          - "4.4"
          - "2.4"
          - NA
          - "3.8"
          - "4.2"
          - "4.4"
          - "58.4"
          - "8.2"
          - "10"
          - NA
          - "6.3"
          - "17"
          - "20.2"
          - "3.1"
          - "3.2"
          - "4.6"
          - "1.5"
          - NA
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4103
        values:
          - Caudata
          - Hynobius_fossigenus
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - SVL
      - TRL
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
      - TH
      - MTAW
      - FLL
      - HLL
      - F2L
      - F3L
      - T3L
      - T5L
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3NLTF
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Hynobius fossigenus — morphology source

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
Okamiya, H., Sugawara, H., Nagano, M., & Poyarkov, N. (2018). An integrative taxonomic analysis reveals a new species of lotic Hynobius salamander from Japan. PeerJ, 6, e5084. https://doi.org/10.7717/peerj.5084
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
