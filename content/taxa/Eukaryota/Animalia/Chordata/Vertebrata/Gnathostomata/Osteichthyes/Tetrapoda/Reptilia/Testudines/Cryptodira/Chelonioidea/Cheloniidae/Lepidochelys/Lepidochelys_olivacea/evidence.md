---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lepidochelys olivacea
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 橄榄脊海龟
      en: Olive ridley sea turtle
    checkedAt: 2026-10-02
    sections:
      - topic: taxonomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - taxonomy
      - topic: morphology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - yoshida2022seaTurtles
      - topic: morphology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - yoshida2022seaTurtles
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: morphology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: sources
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3TB2H
            locator: Accepted COL26.8 species usage and parent genus.
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
            - locator
        - referenceId: ref-08bc898f-6f33-462e-8689-689fc6d94552
          metadataVariant: 0
          sourceKey: yoshida2022seaTurtles
          usage:
            locator: Materials and Methods, NSM-H6187 micro-CT sample and Figure 1/2 captions.
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9353092/
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
            - locator
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits dataset v1-2.xlsx; Data row 6438; Species=Lepidochelys olivacea; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Ernst et al. 1994
              Microhabitat: Stark et al. 2018
              Diet: Ernst et al. 1994
              Active time: Stark et al. 2018
              Foraging mode: Ernst et al. 1994
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: Ernst et al. 1994
              Smallest clutch size: Ernst et al. 1994
              Largest clutch size: Ernst et al. 1994
            scope:
              zh: 尺寸、活动、取食与繁殖的已引性状资料；不外推体重、幼体长度、毒性、保护或当前分布。
              en: Cited size, activity, feeding and reproductive traits; no mass, juvenile-length, venom, conservation or current-range inference.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - sourceFileId
            - sourceFileMd5
            - sourceFileSha256
            - sourceClassification
            - sourceCitationByField
            - scope
        - referenceId: ref-d075eefb-2767-428c-ae91-9d089b535c8d
          metadataVariant: 0
          sourceKey: reptTraitsProtocol2024
          usage:
            locator: Methods; Data Records (maximum size, source aggregation, length-to-mass estimates); Usage Notes; workbook Trait definitions and Changes sheets.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-paraphrase
            scope:
              zh: 性状定义、汇总方式与资料缺口；不证明历史名称与固定 COL26.8 概念完全等同。
              en: Trait definitions, aggregation and gaps; not proof of concept equivalence between historical names and pinned COL26.8.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: Amniote_Database_Aug_2015.csv row 21095; name Lepidochelys olivacea; reference table row 21095; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - gestation_d
              - birth_or_hatching_weight_g
              - incubation_d
            originalReferenceStrings:
              adult_body_mass_g: Seymour, 1979 from median of 7(BC Reptiles - Meyers et al., 2009, BC Reptiles - Wilson, 2003, Seymour, 1979, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, de Magalhaes and Costa, 2009)
              female_maturity_d: BC Reptiles - Wilson, 2003 from median of 3(de Magalhaes and Costa, 2009, BC Reptiles - Wilson, 2003, BC Reptiles - Wilson, 2003)
              litter_or_clutch_size_n: van Buskirk, J., Crowder, L.B., 1994 from median of 53(Stebbins, R.C., 2003, Reptile Incubation book, Reptile Incubation book, Heppell, 1998, Peters, A., Verhoeven, K.J.F., and H. Strijbosch, 1994, van Buskirk, J., Crowder, L.B., 1994, Marquez-M., 1994, IUCN, 2011, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, IUCN, 2011, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Meyers et al., 2009, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, IUCN, 2011, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Seymour, 1979, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, Behler, J.L., King, F.W., 1979, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Reptile Incubation book, Heppell, 1998, Stebbins, R.C., 2003, Reptile Incubation book, de Magalhaes and Costa, 2009)
              gestation_d: de Magalhaes and Costa, 2009
              birth_or_hatching_weight_g: van Buskirk, J., Crowder, L.B., 1994 from median of 8(Silas, Vijayakumaran, and Rajagopalan, 1984, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994)
              incubation_d: van Buskirk, J., Crowder, L.B., 1994 from median of 27(Silas, Vijayakumaran, and Rajagopalan, 1984, BC Reptiles - Meyers et al., 2009, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Behler, J.L., King, F.W., 1979, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Meyers et al., 2009, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, BC Reptiles - Wilson, 2003, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, van Buskirk, J., Crowder, L.B., 1994, Behler, J.L., King, F.W., 1979, van Buskirk, J., Crowder, L.B., 1994, Birchard, G. and D. Marcellini, 1996, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book)
            sameNameSourceLabels:
              - de Magalhaes and Costa, 2009
              - Seymour, 1979
              - Iverson, J., Balgooyen, C., Byrd, K. et al., 1993
              - BC Reptiles - Wilson, 2003
              - BC Reptiles - Meyers et al., 2009
              - Peters, A., Verhoeven, K.J.F., and H. Strijbosch, 1994
              - Marquez-M., 1994
              - Heppell, 1998
              - Reptile Incubation book
              - Behler, J.L., King, F.W., 1979
              - van Buskirk, J., Crowder, L.B., 1994
              - IUCN, 2011
              - Stebbins, R.C., 2003
              - Silas, Vijayakumaran, and Rajagopalan, 1984
              - Birchard, G. and D. Marcellini, 1996
            sourceVersion: August 2015 archive
            sourceFileSha256: ae16377ebe8a172949c2b8c200a50c5d0c7fc04d34bd3c9704635da4a4d51f53
            scope:
              zh: 历史同名、同科的汇编生活史字段；保留中位数、最长记录与分类继承，不保证当前概念同一。
              en: Historical same-name, same-family compilation fields, retaining medians, longest records and taxonomic inheritance; no current concept-equivalence claim.
            readerAvailableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
            readerFieldCautions:
              - fields:
                  - gestation_d
                originalValues:
                  gestation_d: "60"
                reason: Supplemental Table 9 declares gestation/weaning for Mammalia, incubation for Aves/Reptilia, fledging for Aves. Source values outside those class scopes retained but not interpreted as corresponding species events without original-source review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - availableFields
            - originalReferenceStrings
            - sameNameSourceLabels
            - sourceVersion
            - sourceFileSha256
            - scope
            - readerAvailableFields
            - readerFieldCautions
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Lepidochelys olivacea

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Lepidochelys olivacea
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 accepted species identity and parent genus. No living-status or PBDB identity inference.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 的种级接受身份和属级父分类；不推断现生状态或 PBDB 同名记录身份。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Yoshida, Motokawa and Endo (2022): one identified NSM-H6187 specimen, imaging details and paper captions. The single specimen is not a population sample.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
Yoshida、Motokawa 和 Endo（2022）：一份具名 NSM-H6187 标本、成像细节及论文图注。该单个样本不是种群抽样。
<!-- /evo:text -->

