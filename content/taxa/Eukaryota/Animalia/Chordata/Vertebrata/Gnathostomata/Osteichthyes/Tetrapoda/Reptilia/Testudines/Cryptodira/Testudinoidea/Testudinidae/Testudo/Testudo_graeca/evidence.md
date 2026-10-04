---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Testudo graeca
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: Testudo graeca
      en: Testudo graeca
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
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
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: morphology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Testudo graeca
            url: https://www.checklistbank.org/dataset/316115/taxon/55JSJ
            locator: Pinned accepted name, family and recorded ancestry; historical concept equivalence not assumed.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits dataset v1-2.xlsx; Data row 11048; Species=Testudo graeca; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Feldman & Meiri 2013
              Maximum female length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Meyers et al. 2009
              Maximum male length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Meyers et al. 2009
              Microhabitat: IUCN 2023
              Diet: Harrington et al. 2018
              Active time: Stark et al. 2018
              Foraging mode: Rhodin et al. 2011
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: SniDer and Bowler 1992, Harding 1997, De Magalhaes and Costa 2009, Feldman et al. 2015
              Smallest clutch size: Ernst et al. 1997
              Largest clutch size: Ernst et al. 1997
              Egg length (mm): Greer 1997
              Egg width (mm): Greer 1997
            scope:
              zh: 尺寸、活动、取食与繁殖的已引性状资料；不外推体重、幼体长度、毒性、保护或当前分布。
              en: Cited size, activity, feeding and reproductive traits; no mass, juvenile-length, venom, conservation or current-range inference.
            citationScopeCautions:
              - field: Diet
                sourceCitation: Harrington et al. 2018
                sourceValue: Herbivorous
                reason: Snake study cited for a non-snake taxon; field support unresolved.
            readerFocalFieldsAfterCitationCaution:
              - Maximum length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Maximum female length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Maximum male length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Mean number of offspring per litter or number of eggs per clutch
              - Smallest clutch size
              - Largest clutch size
              - Egg length (mm)
              - Egg width (mm)
              - Microhabitat
              - Active time
              - Foraging mode
              - Reproductive mode
              - Sex-determining mechanism (GSD or TSD)
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
            - citationScopeCautions
            - readerFocalFieldsAfterCitationCaution
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
            locator: Amniote_Database_Aug_2015.csv row 21304; name Testudo graeca; reference table row 21304; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: Iverson, J., Balgooyen, C., Byrd, K. et al., 1993 from median of 3(Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, Werner and Griebeler, 2013, Ricklefs, 2010b)
              female_maturity_d: mean of de Magalhaes and Costa, 2009 and Ricklefs, 2010b
              litter_or_clutch_size_n: Reptile Incubation book from median of 7(Reptile Incubation book, Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 2011, Iverson, J., Balgooyen, C., Byrd, K. et al., 1993, Reptile Incubation book, Werner and Griebeler, 2013, Reptile Incubation book, Reptile Incubation book)
              birth_or_hatching_weight_g: Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 1997
              incubation_d: mean of Reptile Incubation book & Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 1997 from median of 6(Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 1997, Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 1997, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book)
              maximum_longevity_y: de Magalhaes and Costa, 2009
            sameNameSourceLabels:
              - Ricklefs, 2010b
              - Werner and Griebeler, 2013
              - Iverson, J., Balgooyen, C., Byrd, K. et al., 1993
              - de Magalhaes and Costa, 2009
              - Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 2011
              - Reptile Incubation book
              - Diaz-Paniagua, C., Keller, C., and A.C. Andreu, 1997
              - Carey, J.R. and D.S. Judge, 2002
            sourceVersion: August 2015 archive
            sourceFileSha256: ae16377ebe8a172949c2b8c200a50c5d0c7fc04d34bd3c9704635da4a4d51f53
            scope:
              zh: 历史同名、同科的汇编生活史字段；保留中位数、最长记录与分类继承，不保证当前概念同一。
              en: Historical same-name, same-family compilation fields, retaining medians, longest records and taxonomic inheritance; no current concept-equivalence claim.
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

# Testudo graeca
