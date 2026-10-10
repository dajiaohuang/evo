---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Philoria loveridgei
    name:
      en: Philoria loveridgei
      zh: Philoria loveridgei
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        title:
          en: The deposited thermal-physiology concept
          zh: 存档的热生理来源概念
        sourceIds:
          - amphitherm
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/0/text/zh
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "708"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 616
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1660"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1497
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1666"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 1503
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator:
              markdown: evidence.md
              field: /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - datasetUrl
            - version
            - associatedArchivedReleaseDoi
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
    sourceClassification:
      order: Anura
      family: Myobatrachidae
      authority: Jetz and Pyron (2018), as recorded by deposited metadata
    originalColumns:
      - unique_ID
      - name
      - ref
      - title
      - pub_year
      - thesis_chapter
      - chapter_title
      - peer_reviewed
      - doi
      - language
      - population_ID
      - cohort_ID
      - notes_ID
      - order
      - family
      - species
      - strain
      - IUCN_status
      - origin
      - n_generations_lab
      - latitude
      - longitude
      - elevation
      - date_sampling
      - month_sampling
      - year_sampling
      - start_range_sampling_dates
      - end_range_sampling_dates
      - notes_sampling
      - ambient_temp
      - substrate_temp
      - water_temp
      - field_body_temp
      - notes_env_temp
      - acclimated
      - incubation_temp
      - sd_incubation_temp
      - life_stage_acclimated
      - gosner_acclimated
      - acclimation_temp
      - sd_acclimation_temp
      - acclimation_time
      - notes_acclimation
      - life_stage_tested
      - gosner_tested
      - SVL
      - body_mass
      - age_tested
      - sex
      - metric
      - endpoint
      - medium_test_temp
      - start_temp
      - ramping
      - set_time
      - n_test_temp
      - n_replicates_per_temp
      - n_animals_per_replicate
      - duration_measurement
      - rate_measurement
      - gradient_type
      - gradient_low_temp
      - gradient_high_temp
      - notes_test
      - humidity
      - oxygen
      - salinity
      - pH
      - photoperiod
      - chemical
      - hormone
      - concentration_chemical_hormone
      - unit_chemical_hormone
      - infected
      - pathogen
      - notes_supplements
      - data_source
      - data_url
      - flag
      - mean_trait
      - error_trait
      - n_trait
      - error_type
      - notes_trait
    originalRows:
      - rowNumber: 616
        values:
          - "708"
          - Patrice Pottier
          - Brattstrom_1970
          - Thermal acclimation in Australian amphibians
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(70)90915-1
          - English
          - Philoria_loveridgei_pop2
          - Philoria_loveridgei_pop2_UTL_co1
          - NA
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.241961"
          - "152.996682"
          - "761.9628162"
          - NA
          - NA
          - NA
          - June_1966
          - February_1967
          - Geographical coordinates were taken from Rohr et al. 2018
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "10"
          - "0.5"
          - "10"
          - acclimation time was 10 days or more
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "20"
          - "1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was taken as reported in Rohr et al. 2018.
          - NA
          - NA
          - NA
          - NA
          - "24"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Rohr et al. 2018
          - NA
          - NA
          - "30.5"
          - NA
          - "2"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 617
        values:
          - "709"
          - Patrice Pottier
          - Brattstrom_1970
          - Thermal acclimation in Australian amphibians
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(70)90915-1
          - English
          - Philoria_loveridgei_pop2
          - Philoria_loveridgei_pop2_UTL_co1
          - NA
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.241961"
          - "152.996682"
          - "761.9628162"
          - NA
          - NA
          - NA
          - June_1966
          - February_1967
          - Geographical coordinates were taken from Rohr et al. 2018
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "10"
          - "0.5"
          - "10"
          - acclimation time was 10 days or more
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "20"
          - "1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was taken as reported in Rohr et al. 2018.
          - NA
          - NA
          - NA
          - NA
          - "24"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Rohr et al. 2018
          - NA
          - NA
          - "31.7"
          - NA
          - "2"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 1497
        values:
          - "1660"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop1
          - Philoria_loveridgei_pop1_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.53798"
          - "153.29052"
          - "683"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Mt Nardi" at the national park, Nightcap
          - NA
          - NA
          - NA
          - "17.3"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "6.5"
          - "0.5"
          - "3"
          - sd
          - NA
      - rowNumber: 1498
        values:
          - "1661"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop3
          - Philoria_loveridgei_pop3_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.23011"
          - "153.2872"
          - "848"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bilborough 2" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "15.4"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "7.5"
          - "1"
          - "3"
          - sd
          - NA
      - rowNumber: 1499
        values:
          - "1662"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop3
          - Philoria_loveridgei_pop3_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.23065224"
          - "153.2852909"
          - "815"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bilborough 1" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "13.8"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "5.5"
          - "0.71"
          - "2"
          - sd
          - NA
      - rowNumber: 1500
        values:
          - "1663"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop4
          - Philoria_loveridgei_pop4_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "977"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bar Mt 2" at the national park, Border Ranges
          - NA
          - NA
          - NA
          - "17.9"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "7.1"
          - "1.4"
          - "5"
          - sd
          - NA
      - rowNumber: 1501
        values:
          - "1664"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop4
          - Philoria_loveridgei_pop4_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "986"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Best of all Lookout" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "15"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "6.8"
          - "2.7"
          - "5"
          - sd
          - NA
      - rowNumber: 1502
        values:
          - "1665"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop5
          - Philoria_loveridgei_pop5_LTL_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "1083"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bar Mt 1" at national park, Border Ranges
          - NA
          - NA
          - NA
          - "16.6"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - CTmin
          - LRR
          - water
          - "6.8"
          - "0.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "6.9"
          - "1.1"
          - "5"
          - sd
          - NA
      - rowNumber: 1503
        values:
          - "1666"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop1
          - Philoria_loveridgei_pop1_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.53798"
          - "153.29052"
          - "683"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Mt Nardi" at the national park, Nightcap
          - NA
          - NA
          - NA
          - "17.3"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "60"
          - linear
          - "10"
          - "35"
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "11.14"
          - "5.2"
          - "4"
          - sd
          - NA
      - rowNumber: 1504
        values:
          - "1667"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop3
          - Philoria_loveridgei_pop3_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.23011"
          - "153.2872"
          - "848"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bilborough 2" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "15.4"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "60"
          - linear
          - "10"
          - "35"
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "17.59"
          - "9.5"
          - "2"
          - sd
          - NA
      - rowNumber: 1505
        values:
          - "1668"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop3
          - Philoria_loveridgei_pop3_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.23065224"
          - "153.2852909"
          - "815"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bilborough 1" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "13.8"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "60"
          - linear
          - "10"
          - "35"
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "18.65"
          - "8.9"
          - "3"
          - sd
          - NA
      - rowNumber: 1506
        values:
          - "1669"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop4
          - Philoria_loveridgei_pop4_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "977"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bar Mt 2" at the national park, Border Ranges
          - NA
          - NA
          - NA
          - "17.9"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "60"
          - linear
          - "10"
          - "35"
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "13.39"
          - "3.1"
          - "7"
          - sd
          - NA
      - rowNumber: 1507
        values:
          - "1670"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop4
          - Philoria_loveridgei_pop4_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "986"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Best of all Lookout" at the national park, Springbrook
          - NA
          - NA
          - NA
          - "15"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "60"
          - linear
          - "10"
          - "35"
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "15.71"
          - "7.7"
          - "9"
          - sd
          - NA
      - rowNumber: 1508
        values:
          - "1671"
          - Sarah Varon
          - Familiar-Lopez_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/3
          - "2016"
          - "4"
          - NA
          - not_peer-reviewed
          - https://doi.org/10.25904/1912/2775
          - English
          - Philoria_loveridgei_pop5
          - Philoria_loveridgei_pop5_PBT_co1
          - CTmin and Tpref were measured in the same animals, hence the shared cohort IDs
          - Anura
          - Myobatrachidae
          - Philoria loveridgei
          - NA
          - EN
          - wild
          - NA
          - "-28.24178"
          - "153.26462"
          - "1083"
          - NA
          - NA
          - NA
          - October_2013
          - Janurary_2014
          - Sampling site is "Bar Mt 1" at the national park, Border Ranges
          - NA
          - NA
          - NA
          - "16.6"
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "20.5"
          - "2.5"
          - NA
          - mixed
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Body mass and SVL were taken as the mean of males and females
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "16.72"
          - "4.8"
          - "11"
          - sd
          - NA
    originalStudyCitations:
      - ref: Brattstrom_1970
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(70)90915-1
        year: "1970"
      - ref: Familiar-Lopez_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.25904/1912/2775
        year: "2016"
    selectedEstimateRowNumbers:
      - 616
      - 1497
      - 1503
    sourceConceptMapping:
      status: unresolved
      candidateColIds: []
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Philoria loveridgei — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 616, 617, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508; Metadata_AmphiTherm.xlsx
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/3 -->
Distribution, Ecology, Disease and Physiology of a MountainTop Endemic Frog in the Face of Climate Change: A Study on Philoria loveridgei
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
