---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Gegeneophis goaensis
    name:
      en: Gegeneophis goaensis
      zh: Gegeneophis goaensis
    sourceClassification:
      order: Gymnophiona
      family: Grandisoniidae
      genus: Gegeneophis
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
            locator: Gymnophiona.csv, rows 52, 53; Reference.csv rows 4330
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
      - rowNumber: 52
        values:
          - Grandisoniidae
          - Gegeneophis
          - Gegeneophis goaensis
          - M
          - "220"
          - NA
          - NA
          - NA
          - "5.8"
          - "6.2"
          - "8.2"
          - "126"
          - NA
          - NA
          - NA
          - NA
          - "4"
          - "3.5"
          - NA
          - "3.8"
          - NA
          - "3.2"
          - "1"
          - NA
          - NA
          - NA
          - "0.5"
          - "3"
          - NA
          - "1"
          - "2"
          - "1.6"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1.2"
          - "1.8"
          - NA
          - NA
      - rowNumber: 53
        values:
          - Grandisoniidae
          - Gegeneophis
          - Gegeneophis goaensis
          - F
          - "185"
          - NA
          - NA
          - NA
          - "4.9"
          - "6.1"
          - "8"
          - "125"
          - NA
          - NA
          - NA
          - NA
          - "3.7"
          - "3.4"
          - NA
          - "3.6"
          - NA
          - "3"
          - "1"
          - NA
          - NA
          - NA
          - "0.4"
          - "2.5"
          - NA
          - "0.8"
          - "2.1"
          - "1.4"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1.2"
          - "2"
          - NA
          - NA
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4330
        values:
          - Gymnophiona
          - Gegeneophis_goaensis
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - STFG
      - STSG
      - STTG
      - TA1
      - HL
      - HW1
      - BW1
      - BW3
      - IND
      - NS
      - ITD
      - TN
      - TLP
      - TS
      - C1
      - C2
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3FGJJ
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

# Gegeneophis goaensis — morphology source

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
Bhatta, G., Dinesh, K. P., Prashanth, P., Kulkarni, N., & Kulkarni, U. (2007). A new species of Gegeneophis Peters(Amphibia : Gymnophiona : Caeciliidae) from Goa, India. Zootaxa, 1409, 51-59. 
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
