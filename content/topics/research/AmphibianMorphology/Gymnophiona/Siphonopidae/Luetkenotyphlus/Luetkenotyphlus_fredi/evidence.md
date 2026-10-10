---
schemaVersion: 1
kind: evidence
records:
  amphibian-morphology-reader:
    scientificName: Luetkenotyphlus fredi
    name:
      en: Luetkenotyphlus fredi
      zh: Luetkenotyphlus fredi
    sourceClassification:
      order: Gymnophiona
      family: Siphonopidae
      genus: Luetkenotyphlus
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
            locator: Gymnophiona.csv, rows 107, 108; Reference.csv rows 4386
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
      - rowNumber: 107
        values:
          - Siphonopidae
          - Luetkenotyphlus
          - Luetkenotyphlus fredi
          - J
          - "206"
          - NA
          - NA
          - NA
          - "6"
          - NA
          - NA
          - "151"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "3.3"
          - "4.1"
          - NA
          - "4.5"
          - "2.1"
          - "1.5"
          - NA
          - "2.2"
          - "3"
          - NA
          - "3.2"
          - "0.6"
          - "1.8"
          - "0.4"
          - NA
          - NA
          - "1.8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
      - rowNumber: 108
        values:
          - Siphonopidae
          - Luetkenotyphlus
          - Luetkenotyphlus fredi
          - M
          - "353"
          - NA
          - NA
          - NA
          - "7.666666667"
          - NA
          - NA
          - "151.3333333"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "3.9"
          - "4.9"
          - NA
          - "5.35"
          - "3.533333333"
          - "1.533333333"
          - NA
          - "3.166666667"
          - "3.466666667"
          - NA
          - "3.9"
          - "0.633333333"
          - "2.533333333"
          - "0.466666667"
          - NA
          - NA
          - "2.5"
          - NA
          - NA
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
      - rowNumber: 4386
        values:
          - Gymnophiona
          - Luetkenotyphlus_fredi
          - markdown: evidence.md
            field: /records/amphibian-morphology-reader/originalReferenceRows/0/values/2
    availableTraitCodes:
      - TOL
      - STFG
      - TA1
      - HW1
      - HW2
      - BW2
      - BW3
      - IND
      - EN
      - IOD
      - ITD
      - TE
      - TN
      - TLP
      - EJ
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - QBSW2
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

# Luetkenotyphlus fredi — morphology source

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
Maciel, A. O., de Castro, T. M., Sturaro, M. J., Costa Silva, I. E., Ferreira, J. G., dos Santos, R., . . . Schneider, H. (2019). Phylogenetic systematics of the Neotropical caecilian amphibian Luetkenotyphlus (Gymnophiona: Siphonopidae) including the description of a new species from the vulnerable Brazilian Atlantic Forest. Zoologischer Anzeiger, 281, 76-83. https://doi.org/10.1016/j.jcz.2019.07.001
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/en -->
The reader describes deposited material. It does not certify complete biological coverage, current identity, absolute measurement units.
<!-- /evo:text -->

## amphibian-morphology-reader / limitations

<!-- evo:text /records/amphibian-morphology-reader/limitations/zh -->
读本描述存档材料；不认证完整生物学覆盖、当前身份、绝对测量单位。
<!-- /evo:text -->
