---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Alligator sinensis Fauvel, 1879
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 扬子鳄
      en: Chinese alligator
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
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
      - topic: ecology
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
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: morphology
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
      - topic: ecology
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d26f7dc5-d18c-8991-a4cc-efad0f7a40f5
          metadataVariant: 0
          sourceKey: erickson2012
          usage:
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/BTRF
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
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits dataset v1-2.xlsx; Data row 406; Species=Alligator sinensis; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum total length ("TL", mm): Perry 2012
              Microhabitat: Stark et al. 2018
              Diet: Perry 2012
              Active time: Stark et al. 2018
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: "Thorbjarnarson et al. 2001 "
              Smallest clutch size: IUCN 1989
              Largest clutch size: IUCN 1989
              Number of litters or clutches produced per year: Scharf et al. 2015
              Egg length (mm): Thorbjarnarson et al. 2001
              Egg width (mm): Thorbjarnarson et al. 2001
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
            locator: Amniote_Database_Aug_2015.csv row 14758; name Alligator sinensis; reference table row 14758; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: Thorbjarnarson,  1996 from median of 3(Werner and Griebeler, 2013, Thorbjarnarson,  1996, Ricklefs, 2010b)
              female_maturity_d: Thorbjarnarson, J.B., Wang, X. and L. He, 2001 from median of 3(Ricklefs, 2010b, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001)
              litter_or_clutch_size_n: Thorbjarnarson, J.B., Wang, X. and L. He, 2001 from median of 28(Reptile Incubation book, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Alderton, D., 1991, Brazaitis, P., Watanabe, M., 2011, Jiang, H.X., 2010, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Brazaitis, P., Watanabe, M., 2011, Werner and Griebeler, 2013, Thorbjarnarson,  1996, Meng, W.Z., Wu, X.B., and L.S. Wu, 2008, Brazaitis, P., Watanabe, M., 2011, Jiang, H.X., 2010, Reptile Incubation book, Alderton, D., 1991)
              birth_or_hatching_weight_g: Thorbjarnarson, J.B., Wang, X. and L. He, 2001 from median of 5(Thorbjarnarson and Wang, 2010, Thorbjarnarson and Wang, 2010, Alderton, D., 1991, Thorbjarnarson and Wang, 2010, Thorbjarnarson, J.B., Wang, X. and L. He, 2001)
              incubation_d: Thorbjarnarson, J.B., Wang, X. and L. He, 2001 from median of 9(Brazaitis, P., Watanabe, M., 2011, Brazaitis, P., Watanabe, M., 2011, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Alderton, D., 1991, Brazaitis, P., Watanabe, M., 2011, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Thorbjarnarson, J.B., Wang, X. and L. He, 2001, Reptile Incubation book, Reptile Incubation book)
              maximum_longevity_y: Thorbjarnarson and Wang, 2010
            sameNameSourceLabels:
              - Ricklefs, 2010b
              - Werner and Griebeler, 2013
              - Thorbjarnarson,  1996
              - Thorbjarnarson, J.B., Wang, X. and L. He, 2001
              - Meng, W.Z., Wu, X.B., and L.S. Wu, 2008
              - Reptile Incubation book
              - Brazaitis, P., Watanabe, M., 2011
              - Alderton, D., 1991
              - Jiang, H.X., 2010
              - Thorbjarnarson and Wang, 2010
              - de Magalhaes and Costa, 2009
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

# Alligator sinensis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
83 只成体、23 个现生鳄类种的比较实验；吻部形态、体质量、咬力和牙齿压力。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Comparative experiment on 83 adults from 23 living crocodilian species; rostral form, body mass, bite force and tooth pressure.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 1008
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->
