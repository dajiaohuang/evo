---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Batrachyla taeniata
    name:
      en: Batrachyla taeniata
      zh: Batrachyla taeniata
    checkedAt: 2026-10-02
    reviewStatus: source-linked
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
        sourceRowId: "55"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 46
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "59"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 50
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "63"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 54
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
      family: Batrachylidae
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
      - rowNumber: 46
        values:
          - "55"
          - Nayelli Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop5
          - Batrachyla_taeniata_pop5_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.83333333"
          - "-73.08333333"
          - "7"
          - NA
          - NA
          - NA
          - June_2018
          - June_2019
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "10"
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "36.65"
          - "2.48"
          - "12"
          - sd
          - NA
      - rowNumber: 47
        values:
          - "56"
          - Nayelli Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop5
          - Batrachyla_taeniata_pop5_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.83333333"
          - "-73.08333333"
          - "7"
          - NA
          - NA
          - NA
          - June_2018
          - June_2019
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "20"
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "37.58"
          - "2.86"
          - "12"
          - sd
          - NA
      - rowNumber: 48
        values:
          - "57"
          - Nayelli Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.66666667"
          - "165"
          - NA
          - NA
          - NA
          - June_2018
          - June_2019
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "10"
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "34.79"
          - "1.79"
          - "4"
          - sd
          - NA
      - rowNumber: 49
        values:
          - "58"
          - Nayelli Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.66666667"
          - "165"
          - NA
          - NA
          - NA
          - June_2018
          - June_2019
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "20"
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "35.32"
          - "2.09"
          - "4"
          - sd
          - NA
      - rowNumber: 50
        values:
          - "59"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop6
          - Batrachyla_taeniata_pop6_LTL_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.666667"
          - "-73.25"
          - "609"
          - NA
          - June
          - "2018"
          - NA
          - NA
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "2"
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
          - NA
          - NA
          - "10"
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
          - "-2.86"
          - "1.86"
          - NA
          - se
          - NA
      - rowNumber: 51
        values:
          - "60"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop6
          - Batrachyla_taeniata_pop6_LTL_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.666667"
          - "-73.25"
          - "609"
          - NA
          - June
          - "2018"
          - NA
          - NA
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "10"
          - "2"
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
          - NA
          - NA
          - "10"
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
          - "-2.7"
          - "1.47"
          - NA
          - se
          - NA
      - rowNumber: 52
        values:
          - "61"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_LTL_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.666667"
          - "165"
          - NA
          - May
          - "2018"
          - NA
          - NA
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "2"
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
          - NA
          - NA
          - "10"
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
          - "-2.3"
          - "1.72"
          - NA
          - se
          - NA
      - rowNumber: 53
        values:
          - "62"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_LTL_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.666667"
          - "165"
          - NA
          - May
          - "2018"
          - NA
          - NA
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "10"
          - "2"
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
          - NA
          - NA
          - "10"
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
          - "-3.43"
          - "2.7"
          - NA
          - se
          - NA
      - rowNumber: 54
        values:
          - "63"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop6
          - Batrachyla_taeniata_pop6_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.666667"
          - "-73.25"
          - "609"
          - NA
          - June
          - "2018"
          - NA
          - NA
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7"
          - NA
          - linear
          - "15"
          - "45"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
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
          - "19.91"
          - "3.57"
          - "4"
          - se
          - NA
      - rowNumber: 55
        values:
          - "64"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop6
          - Batrachyla_taeniata_pop6_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.666667"
          - "-73.25"
          - "609"
          - NA
          - June
          - "2018"
          - NA
          - NA
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "1.64"
          - "27.78"
          - NA
          - unknown
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7"
          - NA
          - linear
          - "15"
          - "45"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
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
          - "22.07"
          - "4.73"
          - "4"
          - se
          - NA
      - rowNumber: 56
        values:
          - "65"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.666667"
          - "165"
          - NA
          - May
          - "2018"
          - NA
          - NA
          - NA
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7"
          - NA
          - linear
          - "15"
          - "45"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
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
          - "20.4"
          - "2.63"
          - "4"
          - se
          - NA
      - rowNumber: 57
        values:
          - "66"
          - Nayelli_Rivera
          - Arriagada-Garcia_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop7
          - Batrachyla_taeniata_pop7_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-34"
          - "-71.666667"
          - "165"
          - NA
          - May
          - "2018"
          - NA
          - NA
          - NA
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - "2.88"
          - "33.85"
          - NA
          - unknown
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7"
          - NA
          - linear
          - "15"
          - "45"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
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
          - "21.68"
          - "3.78"
          - "4"
          - se
          - NA
      - rowNumber: 164
        values:
          - "204"
          - Nayelli Rivera
          - Bonino_et_al_2020
          - |-
            Does temperature at local scale explain thermal biology patterns of
            temperate tadpoles?
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102744
          - English
          - Batrachyla_taeniata_pop3
          - Batrachyla_taeniata_pop3_UTL_co1
          - NA
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-41.04933333"
          - "-71.56777778"
          - "812"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - water_temp is the mean water temperature during the two weeks prior to sampling
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "10"
          - "5"
          - "4"
          - The acclimation temperature varied between 5 and 15C so it was taken as 10 +/- 5C
          - larvae
          - "32.5"
          - "30.5"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "15"
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
          - Gosner stage was taken as the mean of the range presented (31-34)
          - NA
          - NA
          - NA
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 2
          - NA
          - NA
          - "35.97"
          - "0.22"
          - "10"
          - se
          - NA
      - rowNumber: 170
        values:
          - "210"
          - Natalie_Claunch
          - Bonino_et_al_2020
          - |-
            Does temperature at local scale explain thermal biology patterns of
            temperate tadpoles?
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102744
          - English
          - Batrachyla_taeniata_pop3
          - Batrachyla_taeniata_pop3_LTL_co1
          - NA
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-41.049333"
          - "-71.567778"
          - "812"
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
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "10"
          - NA
          - "14"
          - Acclimation temperature were fluctuating and the mean of the range provided was taken
          - larvae
          - "30"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - NA
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
          - Gosner stage was taken as the mean of the range provided in supplement
          - NA
          - NA
          - NA
          - NA
          - "12"
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
          - "0.79"
          - "0.1"
          - "10"
          - se
          - NA
      - rowNumber: 1024
        values:
          - "1165"
          - Nayelli Rivera
          - Contreras-Onate_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "2016"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop4
          - Batrachyla_taeniata_pop4_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.79611111"
          - "-73.15944444"
          - "15"
          - NA
          - NA
          - "2016"
          - March_2016
          - August_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/28
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
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - NA
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "34.96"
          - "1.634"
          - "12"
          - sd
          - NA
      - rowNumber: 1025
        values:
          - "1166"
          - Nayelli Rivera
          - Contreras-Onate_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/3
          - "2016"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop4
          - Batrachyla_taeniata_pop4_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/12
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.79611111"
          - "-73.15944444"
          - "15"
          - NA
          - NA
          - "2016"
          - March_2016
          - August_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/28
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
          - "20"
          - NA
          - "14"
          - Animals were first acclimated to 10C, and then to 20C
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - NA
          - "2"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Endpoint was considered to be OS because authors followed the methods of Sanabria and Quiroga (2011)
          - NA
          - NA
          - NA
          - NA
          - "10"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "34.93"
          - "1.162"
          - "12"
          - sd
          - NA
      - rowNumber: 1026
        values:
          - "1167"
          - Nayelli_Rivera
          - Contreras-Onate_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/3
          - "2016"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Batrachyla_taeniata_pop4
          - Batrachyla_taeniata_pop4_LTL_co1
          - NA
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-36.796111"
          - "-73.159444"
          - "15"
          - NA
          - NA
          - "2016"
          - March_2016
          - August_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/28
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "20"
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
          - NA
          - NA
          - NA
          - "14"
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
          - "-3.17"
          - "0.64"
          - "36"
          - sd
          - NA
      - rowNumber: 3540
        values:
          - "3865"
          - Jose O. Valdebenito
          - Perotti_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.zool.2018.01.002
          - English
          - Batrachyla_taeniata_pop2
          - Batrachyla_taeniata_pop2_UTL_co1
          - NA
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-41.14237387"
          - "-71.36394372"
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
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "15"
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "35.96"
          - "0.22"
          - NA
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/83
      - rowNumber: 3543
        values:
          - "3868"
          - Sarah Varon
          - Perotti_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.zool.2018.01.002
          - English
          - Batrachyla_taeniata_pop1
          - Batrachyla_taeniata_pop1_LTL_co1
          - NA
          - Anura
          - Batrachylidae
          - Batrachyla taeniata
          - NA
          - LC
          - wild
          - NA
          - "-41.14237387"
          - "-71.36394372"
          - "1201"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were estimated from Google Maps
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "15"
          - "0.8"
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
          - NA
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - text
          - NA
          - NA
          - "1.06"
          - "0.04"
          - NA
          - sd
          - It was uncleae whether SD or SE was presented. It was assumed to be SD because SD was presented for other traits
    originalStudyCitations:
      - ref: Arriagada-Garcia_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2019"
      - ref: Bonino_et_al_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
        doi: https://doi.org/10.1016/j.jtherbio.2020.102744
        year: "2020"
      - ref: Contreras-Onate_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "2016"
      - ref: Perotti_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: https://doi.org/10.1016/j.zool.2018.01.002
        year: "2018"
    selectedEstimateRowNumbers:
      - 46
      - 50
      - 54
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 5WFVH
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Batrachyla taeniata — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 164, 170, 1024, 1025, 1026, 3540, 3543; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
Conducta térmica en dos poblaciones de Batrachyla taeniata provenientes de la localidad de Ucúquer en la región de O’Higgins y de la localidad de Hualpén en la región del Biobío
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
Posible efecto de las temperaturas de aclimatación sobre las respuestas térmicas en Temperaturas Criticas Máximas (TCmáx) y mínimas (TCmín) de una población de Batrachyla taeniata (Girard, 1955)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/28 -->
Animals were collected between Autum and Winter 2016 in Chile so the sampling dates were taken as between March and August 2016
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/3 -->
Posible efecto de las temperaturas de aclimatación sobre las respuestas térmicas en Temperaturas Criticas Máximas (TCmáx) y mínimas (TCmín) de una población de Batrachyla taeniata (Girard, 1955)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/12 -->
The same individuals were first acclimated to 10C, assessed for CTmax, and then acclimated to 20C and assessed once again for CTmax; hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/28 -->
Animals were collected between Autum and Winter 2016 in Chile so the sampling dates were taken as between March and August 2016
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/3 -->
Posible efecto de las temperaturas de aclimatación sobre las respuestas térmicas en Temperaturas Criticas Máximas (TCmáx) y mínimas (TCmín) de una población de Batrachyla taeniata (Girard, 1955)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/28 -->
Animals were collected between Autum and Winter 2016 in Chile so the sampling dates were taken as between March and August 2016
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/3 -->
How sensitive are temperate tadpoles to climate change? The use of thermal physiology and niche model tools to assess vulnerability
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/83 -->
It was unclear whether standard deviations of standard errors were presented. It was assumed to be SD because SD was presented for another trait in one of the tables.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/3 -->
How sensitive are temperate tadpoles to climate change? The use of thermal physiology and niche model tools to assess vulnerability
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
