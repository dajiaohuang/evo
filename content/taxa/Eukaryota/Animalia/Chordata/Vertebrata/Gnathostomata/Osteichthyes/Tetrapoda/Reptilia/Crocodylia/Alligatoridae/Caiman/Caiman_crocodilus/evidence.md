---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Caiman crocodilus (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 眼镜凯门鳄
      en: Spectacled caiman
    checkedAt: 2026-10-03
    sections:
      - topic: sensoryMaterial
        sourceIds:
          - diPoi2013SensoryReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: multisensoryPhysiology
        sourceIds:
          - diPoi2013SensoryReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: salinityBoundary
        sourceIds:
          - diPoi2013SensoryReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: feedingBiomechanics
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - erickson2012
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
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
      - topic: ecology
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
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: morphology
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
      - topic: ecology
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
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
      - topic: sources
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
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
            url: https://www.checklistbank.org/dataset/316115/taxon/PBBP
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
            locator: ReptTraits dataset v1-2.xlsx; Data row 2102; Species=Caiman crocodilus; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum total length ("TL", mm): Conant and Collins 1998
              Microhabitat: Stark et al. 2018
              Diet: Thorbjarnarson 1993
              Active time: Stark et al. 2018
              Foraging mode: Thorbjarnarson 1993
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: Campos et al. 2008
              Smallest clutch size: Campos et al. 2008
              Largest clutch size: Campos et al. 2008
              Number of litters or clutches produced per year: Scharf et al. 2015
              Egg length (mm): Behler and King 1979
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
            locator: Amniote_Database_Aug_2015.csv row 14759; name Caiman crocodilus; reference table row 14759; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: Thorbjarnarson,  1996 from median of 5(BC Reptiles - Meyers et al., 2009, BC Reptiles - Meyers et al., 2009, BC Reptiles - Meyers et al., 2009, Thorbjarnarson,  1996, Werner and Griebeler, 2013)
              female_maturity_d: BC Reptiles - Meyers et al., 2009 from median of 3(BC Reptiles - Meyers et al., 2009, BC Reptiles - Meyers et al., 2009, BC Reptiles - Meyers et al., 2009)
              litter_or_clutch_size_n: mean of Reptile Incubation book & Thorbjarnarson,  1996 from median of 26(Reptile Incubation book, BC Reptiles - Meyers et al., 2009, Reptile Incubation book, Reptile Incubation book, Brazaitis, P., Watanabe, M., 2011, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, BC Reptiles - Meyers et al., 2009, Thorbjarnarson, 1994, Brazaitis, P., Watanabe, M., 2011, Reptile Incubation book, Reptile Incubation book, Thorbjarnarson,  1996, Werner and Griebeler, 2013, Behler, J.L., King, F.W., 1979, Velasco and Ayarzaguena, 2010, IUCN, 1989, Brazaitis, P., Watanabe, M., 2011, Velasco and Ayarzaguena, 2010, Reptile Incubation book, Alderton, D., 1991, BC Reptiles - Meyers et al., 2009, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book)
              gestation_d: mean of BC Reptiles - Meyers et al., 2009 and BC Reptiles - Meyers et al., 2009
              birth_or_hatching_weight_g: Perez, 2001
              incubation_d: Reptile Incubation book from median of 15(IUCN, 1989, Brazaitis, P., Watanabe, M., 2011, Brazaitis, P., Watanabe, M., 2011, Brazaitis, P., Watanabe, M., 2011, IUCN, 1989, Birchard, G. and D. Marcellini, 1996, Birchard, G. and D. Marcellini, 1996, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book, Reptile Incubation book)
              maximum_longevity_y: BC Reptiles - Meyers et al., 2009
            sameNameSourceLabels:
              - Werner and Griebeler, 2013
              - Thorbjarnarson,  1996
              - BC Reptiles - Meyers et al., 2009
              - Thorbjarnarson, 1994
              - Velasco and Ayarzaguena, 2010
              - IUCN, 1989
              - Reptile Incubation book
              - Brazaitis, P., Watanabe, M., 2011
              - Alderton, D., 1991
              - Behler, J.L., King, F.W., 1979
              - Perez, 2001
              - Birchard, G. and D. Marcellini, 1996
              - de Magalhaes and Costa, 2009
              - Carey, J.R. and D.S. Judge, 2002
              - BC Reptiles - Tacutu, R., T. Craig, A. Budovsky et al. 2013
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
                  gestation_d: "84.5"
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
        - referenceId: ref-dec4bb4e-e238-417f-9afc-ec1fc7c1f52f
          metadataVariant: 0
          sourceKey: diPoi2013SensoryReader
          usage:
            title: Crocodylians evolved scattered multi-sensory micro-organs
            url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3711810/
            accessedAt: 2026-10-03
            locator: Selected incubation, RT-PCR and electrophysiological methods; distribution, tongue, embryogenesis, channel and stimulus results; selected discussion; Figs.3 and 5 captions. Images and raw recordings not inspected.
            scope:
              zh: 具名研究物种的限定材料与实验；类群入口为比较路线，不向未取样种外推。
              en: Bounded material and experiments for named study species; group routes do not extrapolate to unsampled species.
          originalFields:
            - id
            - type
            - title
            - authors
            - doi
            - journal
            - volume
            - pages
            - publishedYear
            - publishedAt
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Caiman crocodilus

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
