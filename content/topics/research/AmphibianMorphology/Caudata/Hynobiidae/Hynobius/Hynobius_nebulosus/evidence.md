---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Hynobius nebulosus
    name:
      en: Hynobius nebulosus
      zh: Hynobius nebulosus
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
            locator: Caudata.csv, rows 166; Reference.csv rows 4213
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
      - rowNumber: 166
        values:
          - Hynobiidae
          - Hynobius
          - Hynobius nebulosus
          - NA
          - NA
          - "59.3"
          - "45.3"
          - "30.5"
          - "14"
          - "11.1"
          - "3.6"
          - "3.2"
          - NA
          - "1.7"
          - "3.5"
          - NA
          - "39.5"
          - "6.3"
          - "7.3"
          - NA
          - "2.7"
          - "15.2"
          - "17.7"
          - "2.9"
          - "2.6"
          - "4.5"
          - "1.4"
          - NA
          - NA
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4213
        values:
          - Caudata
          - Hynobius_nebulosus
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
        - 6MQKZ
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
---

# Hynobius nebulosus — morphology source

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
Matsui, M., Okawa, H., Nishikawa, K., Aoki, G., Eto, K., Yoshikawa, N., . . . Tominaga, A. (2019). Systematics of the widely distributed Japanese clouded salamander, Hynobius nebulosus (Amphibia: Caudata: Hynobiidae), and its closest relatives. Current Herpetology, 38(1), 32-90. https://doi.org/10.5358/hsj.38.32
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
