---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Hyla meridionalis
    name:
      en: Hyla meridionalis
      zh: Hyla meridionalis
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
        sourceRowId: "1437"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1279
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2135"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1934
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
      family: Hylidae
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
      - rowNumber: 1279
        values:
          - "1437"
          - PPollo
          - Duarte_2011
          - A comparative study of the thermal tolerance of larvaes of Iberian anurans
          - "2011"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop1
          - Hyla_meridionalis_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
          - NA
          - LC
          - wild
          - NA
          - "36.99138889"
          - "-6.448333333"
          - "7"
          - NA
          - NA
          - NA
          - Feburary_2007
          - May_2008
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
          - Tab 3
          - NA
          - NA
          - "35.55"
          - "1.431782106"
          - "24"
          - sd
          - Standard deviation was calculated as the squared root of the variance presented.
      - rowNumber: 1280
        values:
          - "1438"
          - PPollo
          - Duarte_2011
          - A comparative study of the thermal tolerance of larvaes of Iberian anurans
          - "2011"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop6
          - Hyla_meridionalis_pop6_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
          - NA
          - LC
          - wild
          - NA
          - "38.16954722"
          - "-8.579030556"
          - "96"
          - NA
          - NA
          - NA
          - Feburary_2007
          - May_2008
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
          - Tab 3
          - NA
          - NA
          - "36.12"
          - "1.396424004"
          - "22"
          - sd
          - Standard deviation was calculated as the squared root of the variance presented.
      - rowNumber: 1300
        values:
          - "1458"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Hyla_meridionalis_pop2
          - Hyla_meridionalis_pop2_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.8"
          - "0.1"
          - "15"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 1892
        values:
          - "2090"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.7"
          - "0.1"
          - "11"
          - se
          - NA
      - rowNumber: 1893
        values:
          - "2091"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.7"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1894
        values:
          - "2092"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co3
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.9"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1895
        values:
          - "2093"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co4
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "40.8"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1934
        values:
          - "2135"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.6"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1935
        values:
          - "2136"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.5"
          - "0.2"
          - "14"
          - se
          - NA
      - rowNumber: 1936
        values:
          - "2137"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.8"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1937
        values:
          - "2138"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co4
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "1"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1958
        values:
          - "2159"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co5
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "36.7"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/83
      - rowNumber: 1959
        values:
          - "2160"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co6
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "36.61"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 1960
        values:
          - "2161"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co7
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "36.9"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/83
      - rowNumber: 1961
        values:
          - "2162"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co8
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "37.38"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/83
      - rowNumber: 1962
        values:
          - "2163"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co9
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "37.53"
          - "0.1"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/83
      - rowNumber: 1973
        values:
          - "2174"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.8"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1974
        values:
          - "2175"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.4"
          - "0.1"
          - "14"
          - se
          - NA
      - rowNumber: 1975
        values:
          - "2176"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.5"
          - "0.2"
          - "13"
          - se
          - NA
      - rowNumber: 1976
        values:
          - "2177"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co4
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.6"
          - "0.1"
          - "12"
          - se
          - NA
      - rowNumber: 1977
        values:
          - "2178"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co5
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "25"
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
          - "0.7"
          - "0.2"
          - "13"
          - se
          - NA
      - rowNumber: 1978
        values:
          - "2179"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co6
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "25"
          - "10"
          - "4"
          - fluctuating acclimation temperature treatment between 17.5 and 35C
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
          - "0.3"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 1979
        values:
          - "2180"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "5"
          - The effect of constant vs fluctuating acclimation on critical thermal limits in three temperate tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop3
          - Hyla_meridionalis_pop3_LTL_co7
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "25"
          - "10"
          - "4"
          - fluctuating acclimation temperature treatment between 17.5 and 35C
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
          - "0.7"
          - "0.2"
          - "14"
          - se
          - NA
      - rowNumber: 1996
        values:
          - "2197"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop5
          - Hyla_meridionalis_pop5_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "40.1"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 1997
        values:
          - "2198"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop5
          - Hyla_meridionalis_pop5_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "37.5"
          - "0.3"
          - "18"
          - se
          - NA
      - rowNumber: 1998
        values:
          - "2199"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/25/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop5
          - Hyla_meridionalis_pop5_UTL_co3
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/25/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "37.5"
          - "0.3"
          - "11"
          - se
          - NA
      - rowNumber: 2014
        values:
          - "2215"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/26/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.6"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 2015
        values:
          - "2216"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/27/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.8"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 2016
        values:
          - "2217"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "6"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "-0.1"
          - "0.2"
          - "15"
          - se
          - NA
      - rowNumber: 2041
        values:
          - "2245"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
          - NA
          - LC
          - wild
          - NA
          - "37.9939"
          - "-4.9014"
          - "580"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/29/values/28
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
          - "39.4"
          - "0.37"
          - "16"
          - sd
          - NA
      - rowNumber: 2086
        values:
          - "2292"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
          - NA
          - LC
          - wild
          - NA
          - "37.9938"
          - "-4.9014"
          - "598"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "16.75"
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
          - "0.3"
          - "0.5"
          - "16"
          - sd
          - NA
      - rowNumber: 2566
        values:
          - "2833"
          - Jose O. Valdebenito
          - Katzenberger_2009
          - Thermal Tolerance and Sensitivity of Amphibian Larvae from Paleartic and Neotropical Communities
          - "2009"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.83"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 2973
        values:
          - "3287"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.73321859"
          - "0.236572528"
          - "14"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/83
      - rowNumber: 2974
        values:
          - "3288"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.85714286"
          - "0.414001924"
          - "14"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/83
      - rowNumber: 2975
        values:
          - "3289"
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
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co3
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "40.7555938"
          - "0.325287226"
          - "14"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/83
      - rowNumber: 3028
        values:
          - "3345"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/35/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.99"
          - "0.34"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/35/values/83
      - rowNumber: 3029
        values:
          - "3346"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/36/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "0.71"
          - NA
          - "14"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/36/values/83
      - rowNumber: 3030
        values:
          - "3347"
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
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "1.05"
          - "0.43"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/37/values/83
      - rowNumber: 3076
        values:
          - "3393"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/38/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/38/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co4
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/38/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.5"
          - "0.3"
          - "9"
          - sd
          - NA
      - rowNumber: 3077
        values:
          - "3394"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/39/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/39/values/6
          - not_peer-reviewed
          - NA
          - English
          - Hyla_meridionalis_pop4
          - Hyla_meridionalis_pop4_UTL_co5
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/39/values/12
          - Anura
          - Hylidae
          - Hyla meridionalis
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
          - "39.84"
          - "0.44"
          - "13"
          - sd
          - NA
    originalStudyCitations:
      - ref: Duarte_2011
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2011"
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
      - ref: Gutierrez-Pesquera_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "2016"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Katzenberger_2009
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "2009"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: NA
        year: "2018"
    selectedEstimateRowNumbers:
      - 1279
      - 1934
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3ND2Y
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Hyla meridionalis — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 1279, 1280, 1300, 1892, 1893, 1894, 1895, 1934, 1935, 1936, 1937, 1958, 1959, 1960, 1961, 1962, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1996, 1997, 1998, 2014, 2015, 2016, 2041, 2086, 2566, 2973, 2974, 2975, 3028, 3029, 3030, 3076, 3077; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/83 -->
Data was digitised from figure 5. Sample sizes were not provided. n_trait was taken as the mean of the range presented (12-16)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/25/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/25/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/26/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/27/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/6 -->
Ontogenetic shifts in thermal tolerances in temperate anurans. Does metamorphosis impose a thermal constraint that may affect vulnerability to global warming?
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/29/values/28 -->
Elevation was taken from Madalozzo 2018 (chapter 2) because animals were collected in the same location, by the same researchers
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
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
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/36/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/36/values/83 -->
Error not visible on figure. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/38/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/38/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/39/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/39/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/39/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
