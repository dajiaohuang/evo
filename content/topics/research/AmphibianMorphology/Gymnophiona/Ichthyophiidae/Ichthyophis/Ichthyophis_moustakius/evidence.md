---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Ichthyophis moustakius
    name:
      en: Ichthyophis moustakius
      zh: Ichthyophis moustakius
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
            locator: Gymnophiona.csv, rows 91, 92; Reference.csv rows 4409
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
      - rowNumber: 91
        values:
          - Ichthyophiidae
          - Ichthyophis
          - Ichthyophis moustakius
          - M
          - "199.5"
          - "3.35"
          - NA
          - "4.9"
          - NA
          - NA
          - NA
          - "277"
          - "282"
          - "5.5"
          - NA
          - NA
          - "10.45"
          - "6.25"
          - "7.05"
          - NA
          - "9.1"
          - "4.55"
          - "1.5"
          - NA
          - "3.85"
          - "4.65"
          - "0.85"
          - "4.85"
          - "1.25"
          - "2.8"
          - NA
          - "3.8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.4"
          - "2.7"
          - NA
          - "4"
      - rowNumber: 92
        values:
          - Ichthyophiidae
          - Ichthyophis
          - Ichthyophis moustakius
          - F
          - "244.5"
          - "3.566666667"
          - NA
          - "5.183333333"
          - NA
          - NA
          - NA
          - "251.8333333"
          - "254.6666667"
          - "4.5"
          - NA
          - NA
          - "11.21666667"
          - "7.05"
          - "8.15"
          - NA
          - "11.51666667"
          - "5.833333333"
          - "1.783333333"
          - NA
          - "4.033333333"
          - "4.88"
          - "0.983333333"
          - "4.966666667"
          - "1.45"
          - "2.9"
          - NA
          - "3.933333333"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.583333333"
          - "2.916666667"
          - NA
          - "4.333333333"
    originalReferenceColumns:
      - Order
      - Species
      - Reference
    originalReferenceRows:
      - rowNumber: 4409
        values:
          - Gymnophiona
          - Ichthyophis_moustakius
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
        - 6N63Y
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

# Ichthyophis moustakius — morphology source

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
