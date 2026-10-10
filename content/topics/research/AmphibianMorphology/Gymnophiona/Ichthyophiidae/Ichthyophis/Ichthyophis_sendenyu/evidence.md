---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Ichthyophis sendenyu
    name:
      en: Ichthyophis sendenyu
      zh: Ichthyophis sendenyu
    sourceClassification:
      order: Gymnophiona
      family: Ichthyophiidae
      genus: Ichthyophis
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
      - topic: morphology
        sourceReaderKind: deposited-annulus-counts
        title:
          en: Deposited annulus counts
          zh: 存档的环褶计数
        sourceIds:
          - amphibian-morphology
          - huang-2023-methods
        text:
          en:
            markdown: page.en.md
            field: /records/amphibian-morphology-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibian-morphology-reader/sections/2/text/zh
    sources:
      referenceBindings:
        - referenceId: ref-fd9084a2-752b-4a3e-b904-e62d665705df
          metadataVariant: 0
          sourceKey: amphibian-morphology
          usage:
            locator: Gymnophiona.csv, rows 97, 98; Reference.csv rows 4410
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
        - referenceId: ref-d4c49f33-d905-46a0-8a88-cff8d472232d
          metadataVariant: 0
          sourceKey: huang-2023-methods
          usage:
            locator: "Table 3, page 638: TA1, TA2, PVA and VA definitions"
            scope:
              en:
                markdown: evidence.md
                field: /records/amphibian-morphology-reader/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/amphibian-morphology-reader/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - licenseAssessment
            - licenseAppliesTo
            - locator
            - scope
    originalColumns:
      - Family
      - Genus
      - Species
      - Sex
      - TOL
      - TL
      - TAW
      - SL
      - STFG
      - STSG
      - STTG
      - TA1
      - TA2
      - PVA
      - TRL
      - SVL
      - HL
      - HW1
      - HW2
      - BW1
      - BW2
      - BW3
      - IND
      - ED
      - EN
      - IOD
      - NS
      - ITD
      - TE
      - TN
      - TLP
      - TS
      - TJ
      - EJ
      - NJ
      - SJ
      - LJL
      - C1
      - C2
      - VL
      - VA
    originalMeasurementRows:
      - rowNumber: 97
        values:
          - Ichthyophiidae
          - Ichthyophis
          - Ichthyophis sendenyu
          - M
          - "305"
          - "5.3"
          - NA
          - "6.5"
          - NA
          - NA
          - NA
          - "304"
          - "308"
          - "6"
          - NA
          - NA
          - "14"
          - "9"
          - "9.4"
          - NA
          - "12"
          - "6"
          - "2.4"
          - NA
          - "4.9"
          - "6"
          - "1.3"
          - "6.7"
          - "2"
          - "3.5"
          - NA
          - "4.9"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "3.8"
          - "3.6"
          - NA
          - "5"
      - rowNumber: 98
        values:
          - Ichthyophiidae
          - Ichthyophis
          - Ichthyophis sendenyu
          - F
          - "285.25"
          - "4.575"
          - NA
          - "5.95"
          - NA
          - NA
          - NA
          - "292.25"
          - "295"
          - "5.5"
          - NA
          - NA
          - "12.55"
          - "8.7"
          - "9.225"
          - NA
          - "12.225"
          - "6.425"
          - "2.125"
          - NA
          - "4.575"
          - "5.775"
          - "1.2"
          - "6.5"
          - "1.775"
          - "3.225"
          - NA
          - "4.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "3.325"
          - "3.525"
          - NA
          - "7"
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4410
        values:
          - Gymnophiona
          - Ichthyophis_sendenyu
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - TL
      - SL
      - TA1
      - TA2
      - PVA
      - HL
      - HW1
      - HW2
      - BW2
      - BW3
      - IND
      - EN
      - IOD
      - NS
      - ITD
      - TE
      - TN
      - TS
      - C1
      - C2
      - VA
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6N5RX
    quantitativeLengthUnits: not-confirmed; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphibian-morphology-reader/limitations/zh
    verifiedCountDefinitions:
      doi: 10.1111/geb.13656
      locator: Table 3, printed page 638
      fields:
        - code: TA1
          meaning: annuli counted dorsally
        - code: TA2
          meaning: annuli counted ventrally
        - code: PVA
          meaning: annuli behind the vent
        - code: VA
          meaning: annuli interrupted by the vent
      absoluteLengthUnitsVerified: false
---

# Ichthyophis sendenyu — morphology source

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/en -->
Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/0/usage/scope/zh -->
存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/1/usage/scope/en -->
Anatomical count meanings only; absolute length units remain unconfirmed.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphibian-morphology-reader/sources/referenceBindings/1/usage/scope/zh -->
仅核对解剖计数含义；绝对长度单位仍未确认。
<!-- /evo:text -->

## amphibian-morphology-reader / originalReferenceRows / values

<!-- evo:text /records/amphibian-morphology-reader/originalReferenceRows/0/values/2 -->
Kamei, R. G., Wilkinson, M., Gower, D. J., & Biju, S. D. (2009). Three new species of striped Ichthyophis (Amphibia: Gymnophiona: Ichthyophiidae) from the northeast Indian states of Manipur and Nagaland. Zootaxa, 2267, 26-42. https://doi.org/10.11646/zootaxa.2267.1.2
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
