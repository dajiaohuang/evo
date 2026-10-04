---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Crocodylus mindorensis Schmidt, 1935
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 菲律宾鳄
      en: Philippine crocodile
    reviewStatus: source-linked
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
            url: https://www.checklistbank.org/dataset/316115/taxon/ZKNG
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
            locator: ReptTraits dataset v1-2.xlsx; Data row 3018; Species=Crocodylus mindorensis; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum total length ("TL", mm): Erickson et al. 2012
              Microhabitat: Stark et al. 2018
              Diet: Weerd 2023
              Active time: Stark et al. 2018
              Foraging mode: " Weerd 2023"
              Reproductive mode: Zimin et al. 2022
              Mean number of offspring per litter or number of eggs per clutch: Werner and Griebeler 2013
              Number of litters or clutches produced per year: Scharf et al. 2015
              Egg length (mm): Hall and Johnson 1987
              Egg width (mm): Hall and Johnson 1987
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
            locator: Amniote_Database_Aug_2015.csv row 14768; name Crocodylus mindorensis; reference table row 14768; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - gestation_d
              - birth_or_hatching_weight_g
              - incubation_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: mean of Thorbjarnarson,  1996 & Werner and Griebeler, 2013 from median of 4(Thorbjarnarson,  1996, Werner and Griebeler, 2013, Thorbjarnarson,  1996, Werner and Griebeler, 2013)
              female_maturity_d: mean of Alderton, D., 1991 and BC Reptiles - Hinlo, 2010
              litter_or_clutch_size_n: mean of Brazaitis, P., Watanabe, M., 2011 & BC Reptiles - Hinlo, 2010 from median of 52(Alderton, D., 1991, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Wilson, 2003, Reptile Incubation book, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Meyers et al., 2009, Reptile Incubation book, Alderton, D., 1991, BC Reptiles - Wilson, 2003, Brazaitis, P., Watanabe, M., 2011, Hinlo, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, Thorbjarnarson,  1996, Werner and Griebeler, 2013, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, Hall, P.M. and D.R. Johnson, 1987, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, Hinlo, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Hinlo, 2010, Hinlo, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, Reptile Incubation book, Hinlo, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Meyers et al., 2009, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Hinlo, 2010, Thorbjarnarson,  1996, Werner and Griebeler, 2013, Alderton, D., 1991, BC Reptiles - Van Weerd, 2010, BC Reptiles - Van Weerd, 2010, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Hinlo, 2010, Alderton, D., 1991, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Meyers et al., 2009, Reptile Incubation book)
              gestation_d: mean of BC Reptiles - Meyers et al., 2009 and BC Reptiles - Meyers et al., 2009
              birth_or_hatching_weight_g: BC Reptiles - Van Weerd, 2010
              incubation_d: BC Reptiles - Meyers et al., 2009 from median of 19(BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, Brazaitis, P., Watanabe, M., 2011, Hall, P.M. and D.R. Johnson, 1987, Alderton, D., 1991, BC Reptiles - Meyers et al., 2009, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Hinlo, 2010, BC Reptiles - Van Weerd, 2010, BC Reptiles - Hinlo, 2010, Hall, P.M. and D.R. Johnson, 1987, BC Reptiles - Meyers et al., 2009, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book)
              maximum_longevity_y: de Magalhaes and Costa, 2009
            sameNameSourceLabels:
              - Werner and Griebeler, 2013
              - Thorbjarnarson,  1996
              - Alderton, D., 1991
              - BC Reptiles - Hinlo, 2010
              - Hinlo, 2010
              - Hall, P.M. and D.R. Johnson, 1987
              - Reptile Incubation book
              - Brazaitis, P., Watanabe, M., 2011
              - BC Reptiles - Van Weerd, 2010
              - BC Reptiles - Wilson, 2003
              - BC Reptiles - Meyers et al., 2009
              - de Magalhaes and Costa, 2009
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
              - maximum_longevity_y
            readerFieldCautions:
              - fields:
                  - gestation_d
                originalValues:
                  gestation_d: "87"
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

# Crocodylus mindorensis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
对研究发表时认可的 23 种现生鳄类进行的咬合力与牙压实验；83 只性成熟个体来自研究、保育和展示机构，支持表 1 的样本测量及跨种体质量比较，不代表野外捕食力、物种全域变异或现行分类概念。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Bite-force and tooth-pressure experiments on the 23 living crocodilian species recognized when the study was published; 83 sexually mature individuals came from research, conservation and display institutions. Supports Table 1 measurements and cross-species body-mass comparisons, not field performance, range-wide variation or current taxonomic concepts.
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
