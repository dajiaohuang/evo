---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pelodytes ibericus
    name:
      en: Pelodytes ibericus
      zh: Pelodytes ibericus
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
        sourceRowId: "1472"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1314
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2143"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1942
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
      family: Pelodytidae
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
      - rowNumber: 1314
        values:
          - "1472"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Pelodytes_ibericus_pop4
          - Pelodytes_ibericus_pop4_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.378831"
          - "-2.858458"
          - "1756"
          - NA
          - NA
          - "2009"
          - February_2009
          - June_2009
          - Coordinates were taken from Rohr et al. 2018
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
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - NA
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Tab S1
          - NA
          - NA
          - "37"
          - "0.1"
          - "30"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 1900
        values:
          - "2098"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co1
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "8.6"
          - "0.5"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
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
          - Tab S1, annexe 4
          - NA
          - NA
          - "36.7"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1901
        values:
          - "2099"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co2
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "14.9"
          - "0.4"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
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
          - Tab S1, annexe 4
          - NA
          - NA
          - "36.6"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1902
        values:
          - "2100"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co3
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "20.1"
          - "0.1"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
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
          - Tab S1, annexe 4
          - NA
          - NA
          - "36.9"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1903
        values:
          - "2101"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co4
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "27"
          - "0.1"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
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
          - Tab S1, annexe 4
          - NA
          - NA
          - "37.5"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1942
        values:
          - "2143"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "8.6"
          - "0.5"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "-1.4"
          - "0.2"
          - "16"
          - se
          - NA
      - rowNumber: 1943
        values:
          - "2144"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co2
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "14.9"
          - "0.4"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "-0.7"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1944
        values:
          - "2145"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co3
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "20.1"
          - "0.1"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1945
        values:
          - "2146"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co4
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "580"
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
          - "27"
          - "0.1"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0.6"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1963
        values:
          - "2164"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co5
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "555"
          - NA
          - NA
          - NA
          - February_2013
          - May_2013
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
          - "15"
          - "0.2"
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (26-30)
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
          - Fig 5
          - NA
          - NA
          - "36.1"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/83
      - rowNumber: 1964
        values:
          - "2165"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co6
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "555"
          - NA
          - NA
          - NA
          - February_2013
          - May_2013
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
          - "27"
          - "0.2"
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (26-30)
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
          - Fig 5
          - NA
          - NA
          - "36.17"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/83
      - rowNumber: 1965
        values:
          - "2166"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co7
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "555"
          - NA
          - NA
          - NA
          - February_2013
          - May_2013
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
          - "0.2"
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (26-30)
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
          - Fig 5
          - NA
          - NA
          - "37.01"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/83
      - rowNumber: 1966
        values:
          - "2167"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co8
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "555"
          - NA
          - NA
          - NA
          - February_2013
          - May_2013
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
          - "9"
          - "0.5"
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (26-30)
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
          - Fig 5
          - NA
          - NA
          - "37.61"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 1967
        values:
          - "2168"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co9
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "555"
          - NA
          - NA
          - NA
          - February_2013
          - May_2013
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
          - "24"
          - "0.2"
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (26-30)
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
          - Fig 5
          - NA
          - NA
          - "38.11"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/83
      - rowNumber: 1980
        values:
          - "2181"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop9
          - Pelodytes_ibericus_pop9_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "464"
          - NA
          - NA
          - "2013"
          - February_2013
          - May_2013
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
          - "28"
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1981
        values:
          - "2182"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop9
          - Pelodytes_ibericus_pop9_LTL_co2
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "464"
          - NA
          - NA
          - "2013"
          - February_2013
          - May_2013
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
          - "28"
          - "20"
          - "4"
          - "4"
          - fluctuating acclimation temperature treatment between 16.5 and 24C
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "-0.5"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1982
        values:
          - "2183"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop9
          - Pelodytes_ibericus_pop9_LTL_co3
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "464"
          - NA
          - NA
          - "2013"
          - February_2013
          - May_2013
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
          - "28"
          - "23.5"
          - NA
          - "4"
          - NA
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0.2"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1983
        values:
          - "2184"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop9
          - Pelodytes_ibericus_pop9_LTL_co4
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "464"
          - NA
          - NA
          - "2013"
          - February_2013
          - May_2013
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
          - "28"
          - "23.5"
          - "6"
          - "1"
          - fluctuating acclimation temperature treatment between 17.5 and 30C
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0.1"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1984
        values:
          - "2185"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop9
          - Pelodytes_ibericus_pop9_LTL_co5
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "464"
          - NA
          - NA
          - "2013"
          - February_2013
          - May_2013
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
          - "28"
          - "23.5"
          - "6"
          - "1"
          - fluctuating acclimation temperature treatment between 17.5 and 30C
          - larvae
          - "28"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - NA
          - NA
          - "0.1"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 2002
        values:
          - "2203"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop11
          - Pelodytes_ibericus_pop11_UTL_co1
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "4.901389"
          - "560"
          - 17/04/2013
          - April
          - "2013"
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
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tested animals were under Gosner stage 38
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
          - Tab 1
          - NA
          - NA
          - "36.9"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 2003
        values:
          - "2204"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop11
          - Pelodytes_ibericus_pop11_UTL_co2
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "4.901389"
          - "560"
          - 14/04/2013
          - April
          - "2013"
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
          - metamorphs
          - "43.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (43-44)
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
          - Tab 1
          - NA
          - NA
          - "35.4"
          - "0.2"
          - "15"
          - se
          - NA
      - rowNumber: 2004
        values:
          - "2205"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop11
          - Pelodytes_ibericus_pop11_UTL_co3
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "4.901389"
          - "560"
          - 14/04/2013
          - April
          - "2013"
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
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
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
          - Tab 1
          - NA
          - NA
          - "35.1"
          - "0.3"
          - "14"
          - se
          - NA
      - rowNumber: 2020
        values:
          - "2221"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "560"
          - 17-Apr-13
          - April
          - "2013"
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
          - "3.5"
          - Animals were acclimated for 3-4 days
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - tested as larvae
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
          - "0"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 2021
        values:
          - "2222"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co2
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "560"
          - 17-Apr-13
          - April
          - "2013"
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
          - metamorphs
          - "43.5"
          - "20"
          - NA
          - "3.5"
          - Animals were acclimated for 3-4 days
          - metamorphs
          - "43.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - tested as metamorphs
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
          - "0.2"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 2022
        values:
          - "2223"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co3
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.984444"
          - "-4.901389"
          - "560"
          - 17-Apr-13
          - April
          - "2013"
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
          - juveniles
          - "46"
          - "20"
          - NA
          - "3.5"
          - Animals were acclimated for 3-4 days
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - tested as juveniles
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
          - "-0.6"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 2048
        values:
          - "2252"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Pelodytes_ibericus_pop6
          - Pelodytes_ibericus_pop6_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.6692"
          - "-8.2629"
          - "149"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
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
          - "3.5"
          - acclimation_time was taken as the mean of the range presented (3-4 days)
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (25-38)
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
          - Tab S2
          - NA
          - NA
          - "36.8"
          - "0.36"
          - "11"
          - sd
          - NA
      - rowNumber: 2093
        values:
          - "2299"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Pelodytes_ibericus_pop7
          - Pelodytes_ibericus_pop7_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.6692"
          - "-8.2629"
          - "161"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "11.22"
          - NA
          - NA
          - NA
          - Ambient temperature taken from Table S2
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - NA
          - "3.5"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - "20"
          - "0.25"
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
          - table
          - supplement
          - NA
          - "-0.5"
          - "0.53"
          - "12"
          - sd
          - NA
      - rowNumber: 2572
        values:
          - "2839"
          - Jose O. Valdebenito
          - Katzenberger_2009
          - Thermal Tolerance and Sensitivity of Amphibian Larvae from Paleartic and Neotropical Communities
          - "2009"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop8
          - Pelodytes_ibericus_pop8_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.89294722"
          - "-5.490244444"
          - "516.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were collected in two different locations and geographical coordinates were averaged.
          - NA
          - NA
          - "18.11"
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
          - "32"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - NA
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
          - Gosner stage was taken as the mean of the range presented (25-39)
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
          - Tab 3
          - NA
          - NA
          - "36.98"
          - "0.09"
          - "30"
          - se
          - NA
      - rowNumber: 2580
        values:
          - "2847"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop1
          - Pelodytes_ibericus_pop1_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "36.65556389"
          - "-6.168336111"
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "18.5"
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
          - "0.3068"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "36.9"
          - NA
          - "15"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/83
      - rowNumber: 2581
        values:
          - "2848"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/29/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.99441111"
          - "-4.902172222"
          - "585"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "15.9"
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
          - "0.3118"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "36.3"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/29/values/83
      - rowNumber: 2582
        values:
          - "2849"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/30/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop12
          - Pelodytes_ibericus_pop12_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "38.27736111"
          - "-2.946491667"
          - "498"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "17.3"
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
          - "0.4378"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37"
          - "0.1"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/30/values/83
      - rowNumber: 2583
        values:
          - "2850"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/31/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop2
          - Pelodytes_ibericus_pop2_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "36.74095833"
          - "-5.341602778"
          - "808"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "15.5"
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
          - "0.5253"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37.2"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/31/values/83
      - rowNumber: 2584
        values:
          - "2851"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop3
          - Pelodytes_ibericus_pop3_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "36.85884722"
          - "-6.188269444"
          - "14"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "18.5"
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
          - "0.4145"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37.1"
          - NA
          - "15"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/83
      - rowNumber: 2585
        values:
          - "2852"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop5
          - Pelodytes_ibericus_pop5_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.51272778"
          - "-4.361480556"
          - "960"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "11.3"
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
          - "0.2425"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - NA
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37.4"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/83
      - rowNumber: 2984
        values:
          - "3298"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - November_2011
          - January_2012
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
          - "26"
          - "14.9"
          - "0.4"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was assumed to be the same as in chapter I of the thesis (25-38)
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
          - Fig 1A
          - NA
          - NA
          - "36.55765921"
          - "0.442586673"
          - "16"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/83
      - rowNumber: 2985
        values:
          - "3299"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/35/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co2
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - November_2011
          - January_2012
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
          - "26"
          - "20.1"
          - "0.1"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was assumed to be the same as in chapter I of the thesis (25-38)
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
          - Fig 1A
          - NA
          - NA
          - "36.89845095"
          - "0.284520004"
          - "16"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/35/values/83
      - rowNumber: 2986
        values:
          - "3300"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/36/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co3
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - November_2011
          - January_2012
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
          - "26"
          - "27"
          - "0.1"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was assumed to be the same as in chapter I of the thesis (25-38)
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
          - Fig 1A
          - NA
          - NA
          - "37.50258176"
          - "0.347746672"
          - "16"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/36/values/83
      - rowNumber: 3040
        values:
          - "3357"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/37/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"temperate" location'
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "9"
          - NA
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "20"
          - "0.25"
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
          - figure
          - NA
          - NA
          - "-1.47"
          - "0.27"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/37/values/83
      - rowNumber: 3041
        values:
          - "3358"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/38/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co2
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"temperate" location'
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "14.9"
          - "0.4"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "20"
          - "0.25"
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
          - figure
          - NA
          - NA
          - "-0.72"
          - "0.34"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/38/values/83
      - rowNumber: 3042
        values:
          - "3359"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/39/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co3
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"temperate" location'
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20.1"
          - "0.1"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "20"
          - "0.25"
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
          - figure
          - NA
          - NA
          - "-0.04"
          - "0.27"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/39/values/83
      - rowNumber: 3043
        values:
          - "3360"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/40/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_LTL_co4
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"temperate" location'
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "27"
          - "0.1"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "20"
          - "0.25"
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
          - figure
          - NA
          - NA
          - "0.58"
          - "0.34"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/40/values/83
      - rowNumber: 3096
        values:
          - "3413"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/41/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/41/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co4
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - "2011"
          - January_2011
          - May_2011
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
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.05"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (25-38)
          - NA
          - "86.4"
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
          - "35.9"
          - "0.31"
          - "18"
          - sd
          - NA
      - rowNumber: 3097
        values:
          - "3414"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/42/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/42/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_ibericus_pop10
          - Pelodytes_ibericus_pop10_UTL_co5
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes ibericus
          - NA
          - LC
          - wild
          - NA
          - "37.993"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - "2011"
          - January_2011
          - May_2011
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
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (25-38)
          - NA
          - "86.4"
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
          - "37.44"
          - "0.27"
          - "9"
          - sd
          - NA
    originalStudyCitations:
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
      - ref: Gutierrez-Pesquera_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2016"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Katzenberger_2009
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2009"
      - ref: Katzenberger_2014
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "2014"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: NA
        year: "2018"
    selectedEstimateRowNumbers:
      - 1314
      - 1942
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 76D42
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pelodytes ibericus — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 1314, 1900, 1901, 1902, 1903, 1942, 1943, 1944, 1945, 1963, 1964, 1965, 1966, 1967, 1980, 1981, 1982, 1983, 1984, 2002, 2003, 2004, 2020, 2021, 2022, 2048, 2093, 2572, 2580, 2581, 2582, 2583, 2584, 2585, 2984, 2985, 2986, 3040, 3041, 3042, 3043, 3096, 3097; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/29/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/29/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/30/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/30/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/31/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/31/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/35/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/35/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/36/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/36/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/37/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/37/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/38/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/38/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/39/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/39/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/40/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/40/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/41/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/41/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/42/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/42/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
