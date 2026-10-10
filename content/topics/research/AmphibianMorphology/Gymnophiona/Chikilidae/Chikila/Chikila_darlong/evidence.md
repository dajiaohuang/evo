---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Chikila darlong
    name:
      en: Chikila darlong
      zh: Chikila darlong
    sourceClassification:
      order: Gymnophiona
      family: Chikilidae
      genus: Chikila
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
            locator: Gymnophiona.csv, rows 32, 33; Reference.csv rows 4396
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
      - rowNumber: 32
        values:
          - Chikilidae
          - Chikila
          - Chikila darlong
          - M
          - "162.625"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "89.625"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "4"
          - NA
          - "3.3625"
          - "5.075"
          - "3.925"
          - "1.125"
          - NA
          - NA
          - NA
          - "0.7625"
          - "2.05"
          - NA
          - "0.85"
          - "2.7375"
          - "1.6125"
          - NA
          - NA
          - "3.9375"
          - "4.7"
          - NA
          - "1.2875"
          - "2.2875"
          - NA
          - NA
      - rowNumber: 33
        values:
          - Chikilidae
          - Chikila
          - Chikila darlong
          - F
          - "145.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "89.125"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "3.4875"
          - NA
          - "2.9625"
          - "4.6875"
          - "2.975"
          - "0.975"
          - NA
          - NA
          - NA
          - "0.725"
          - "1.8125"
          - NA
          - "0.8"
          - "2.4"
          - "1.45"
          - NA
          - NA
          - "3.5125"
          - "4.0625"
          - NA
          - "1.3"
          - "2.225"
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4396
        values:
          - Gymnophiona
          - Chikila_darlong
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - TA1
      - HW1
      - BW1
      - BW2
      - BW3
      - IND
      - NS
      - ITD
      - TN
      - TLP
      - TS
      - NJ
      - SJ
      - C1
      - C2
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - TZKM
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

# Chikila darlong — morphology source

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
Kamei, R. G., Gower, D. J., Wilkinson, M., & Biju, S. D. (2013). Systematics of the caecilian family Chikilidae (Amphibia: Gymnophiona) with the description of three new species of Chikila from northeast India. Zootaxa, 3666, 401-435. https://doi.org/10.11646/zootaxa.3666.4.1
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
