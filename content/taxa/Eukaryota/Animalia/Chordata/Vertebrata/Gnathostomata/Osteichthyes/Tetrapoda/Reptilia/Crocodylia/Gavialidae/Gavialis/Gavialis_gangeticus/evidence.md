---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gavialis gangeticus (Gmelin, 1789)
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: 恒河鳄
      en: Gharial
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3FFQ3
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
            locator: ReptTraits dataset v1-2.xlsx; Data row 5009; Species=Gavialis gangeticus; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum total length ("TL", mm): Erickson et al 2012
              Microhabitat: Stark et al. 2018
              Diet: Forsyth 1914
              Active time: Stark et al. 2018
              Foraging mode: Forsyth 1914
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: Whitakerv & Basu 1982
              Smallest clutch size: Whitakerv & Basu 1982
              Largest clutch size: Whitakerv & Basu 1982
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
            locator: Amniote_Database_Aug_2015.csv row 14779; name Gavialis gangeticus; reference table row 14779; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: mean of Werner and Griebeler, 2013 & BC Reptiles - Meyers et al., 2009 from median of 6(BC Reptiles - Erickson et al., 2012, BC Reptiles - Erickson et al., 2012, BC Reptiles - Meyers et al., 2009, BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011, BC Reptiles - Meyers et al., 2009, Werner and Griebeler, 2013)
              female_maturity_d: mean of BC Reptiles - Wilson, 2003 & BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011 from median of 4(BC Reptiles - Meyers et al., 2009, BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011, BC Reptiles - Wilson, 2003, BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011)
              litter_or_clutch_size_n: Werner and Griebeler, 2013 from median of 21(Reptile Incubation book, BC Reptiles - Meyers et al., 2009, Khadka, M., Kafley, H., and B.P. Thapaliya, 2008, Brazaitis, P., Watanabe, M., 2011, Stevenson, C. and R. Whitaker, 2010, BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011, Ballouard et al., 2010, BC Reptiles - Meyers et al., 2009, Hussain, S.A., 1999, Ballouard et al., 2010, Werner and Griebeler, 2013, Brazaitis, P., Watanabe, M., 2011, BC Reptiles - Wilson, 2003, BC Reptiles - Das, A., Basu, D., Converse, L., and S.C. Choudhury, 2012, Brazaitis, P., Watanabe, M., 2011, Stevenson, C. and R. Whitaker, 2010, BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011, BC Reptiles - Meyers et al., 2009, Khadka, M., Kafley, H., and B.P. Thapaliya, 2008, Reptile Incubation book, BC Reptiles - Meyers et al., 2009)
              gestation_d: mean of BC Reptiles - Meyers et al., 2009 and BC Reptiles - Meyers et al., 2009
              birth_or_hatching_weight_g: mean of BC Reptiles - Wilson, 2003 and BC Reptiles - Wilson, 2003
              incubation_d: BC Reptiles - Meyers et al., 2009 from median of 11(Rao, 2006, BC Reptiles - Meyers et al., 2009, BC Reptiles - Wilson, 2003, Rao, 2006, BC Reptiles - Meyers et al., 2009, Brazaitis, P., Watanabe, M., 2011, Brazaitis, P., Watanabe, M., 2011, Brazaitis, P., Watanabe, M., 2011, Birchard, G. and D. Marcellini, 1996, Reptile Incubation book, Reptile Incubation book)
              maximum_longevity_y: Khadka, M., Kafley, H., and B.P. Thapaliya, 2008
            sameNameSourceLabels:
              - Werner and Griebeler, 2013
              - BC Reptiles - Erickson et al., 2012
              - BC Reptiles - Das, A., Das, A.K., Sarma, P.K., and A.K. Singh, 2011
              - BC Reptiles - Meyers et al., 2009
              - BC Reptiles - Wilson, 2003
              - Hussain, S.A., 1999
              - Stevenson, C. and R. Whitaker, 2010
              - Ballouard et al., 2010
              - Khadka, M., Kafley, H., and B.P. Thapaliya, 2008
              - Reptile Incubation book
              - Brazaitis, P., Watanabe, M., 2011
              - BC Reptiles - Das, A., Basu, D., Converse, L., and S.C. Choudhury, 2012
              - Rao, 2006
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
                  gestation_d: "70"
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

# Gavialis gangeticus

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
