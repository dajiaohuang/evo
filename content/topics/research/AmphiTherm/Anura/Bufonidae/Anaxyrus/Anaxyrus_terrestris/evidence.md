---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Anaxyrus terrestris
    name:
      en: Anaxyrus terrestris
      zh: Anaxyrus terrestris
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
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1128"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 997
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3720"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3395
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
      family: Bufonidae
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
      - rowNumber: 997
        values:
          - "1128"
          - Natalie_Claunch
          - Cohen_et_al_2017
          - The thermal mismatch hypothesis explains host susceptibility to an emerging infectious disease
          - "2017"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/ele.12720
          - English
          - Anaxyrus_terrestris_pop2
          - Anaxyrus_terrestris_pop2_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.97331811"
          - "-82.42380007"
          - "15"
          - NA
          - NA
          - NA
          - NA
          - NA
          - No sampling dates provided. Coordinates were estimated from Google Maps.
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
          - "21"
          - NA
          - "60"
          - NA
          - adults
          - NA
          - NA
          - NA
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
          - "96"
          - "0.33"
          - linear
          - "9.29"
          - "33.94"
          - NA
          - "85"
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
          - "24.07"
          - "0.19"
          - "24"
          - se
          - NA
      - rowNumber: 3395
        values:
          - "3720"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "22"
          - "1"
          - "5"
          - NA
          - larvae
          - "27"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "22"
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
          - Gosner_tested was taken as the mean of the range presented (25-29). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "39.96838602"
          - "0.077371048"
          - "34"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 3396
        values:
          - "3721"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co10
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "32"
          - "1"
          - "5"
          - NA
          - larvae
          - "32"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "32"
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
          - Gosner_tested was taken as the mean of the range presented (30-34). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "41.70549085"
          - "0.064891847"
          - "21"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 3397
        values:
          - "3722"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co11
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "32"
          - "1"
          - "5"
          - NA
          - larvae
          - "37"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "32"
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
          - Gosner_tested was taken as the mean of the range presented (35-39). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "41.69550749"
          - "0.054908486"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 3398
        values:
          - "3723"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co12
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "32"
          - "1"
          - "5"
          - NA
          - metamorphs
          - "42"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "32"
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
          - Gosner_tested was taken as the mean of the range presented (40-44). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "41.23627288"
          - "0.159733777"
          - "12"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 3399
        values:
          - "3724"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "22"
          - "1"
          - "5"
          - NA
          - larvae
          - "32"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "22"
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
          - Gosner_tested was taken as the mean of the range presented (30-34). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "39.82362729"
          - "0.102329451"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
      - rowNumber: 3400
        values:
          - "3725"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co3
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "22"
          - "1"
          - "5"
          - NA
          - larvae
          - "37"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "22"
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
          - Gosner_tested was taken as the mean of the range presented (35-39). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "39.57404326"
          - "0.09234609"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/83
      - rowNumber: 3401
        values:
          - "3726"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co4
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "22"
          - "1"
          - "5"
          - NA
          - metamorphs
          - "42"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "22"
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
          - Gosner_tested was taken as the mean of the range presented (40-44). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "39.12978369"
          - "0.104825291"
          - "18"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
      - rowNumber: 3402
        values:
          - "3727"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co5
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "1"
          - "5"
          - NA
          - larvae
          - "27"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "27"
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
          - Gosner_tested was taken as the mean of the range presented (25-29). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "40.24792013"
          - "0.107321131"
          - "25"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/83
      - rowNumber: 3403
        values:
          - "3728"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co6
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "1"
          - "5"
          - NA
          - larvae
          - "32"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "27"
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
          - Gosner_tested was taken as the mean of the range presented (30-34). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "40.61730449"
          - "0.077371048"
          - "27"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/83
      - rowNumber: 3404
        values:
          - "3729"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co7
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "1"
          - "5"
          - NA
          - larvae
          - "37"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "27"
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
          - Gosner_tested was taken as the mean of the range presented (35-39). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "40.26289517"
          - "0.099833611"
          - "17"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/83
      - rowNumber: 3405
        values:
          - "3730"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co8
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "1"
          - "5"
          - NA
          - metamorphs
          - "42"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "27"
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
          - Gosner_tested was taken as the mean of the range presented (40-44). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "39.5640599"
          - "0.124792013"
          - "14"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/83
      - rowNumber: 3406
        values:
          - "3731"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop4
          - Anaxyrus_terrestris_pop4_UTL_co9
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "33.322765"
          - "-87.460397"
          - "128"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "32"
          - "1"
          - "5"
          - NA
          - larvae
          - "27"
          - "87"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "32"
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
          - Gosner_tested was taken as the mean of the range presented (25-29). SVL was reported as in Rohr et al. 2018
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
          - Fig 1
          - NA
          - NA
          - "41.76539101"
          - "0.044925125"
          - "17"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 3857
        values:
          - "4262"
          - Nayelli_Rivera
          - Sauer_2018
          - |-
            Behavioral Thermoregulation and Thermal Mismatches Influence
            Disease Dynamics in Amphibians
          - "2018"
          - "2"
          - Behavioral Fever Reduces Ranavirus Infection in Toads
          - not_peer-reviewed
          - NA
          - English
          - Anaxyrus_terrestris_pop7
          - Anaxyrus_terrestris_pop7_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "24.5"
          - "0.5"
          - "14"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/42
          - adults
          - NA
          - NA
          - NA
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
          - "96"
          - "0.25"
          - linear
          - "12"
          - "33"
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
          - "22.99"
          - "0.3"
          - "53"
          - se
          - NA
      - rowNumber: 3860
        values:
          - "4267"
          - Nayelli_Rivera
          - Sauer_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1098/rspb.2018.1111
          - English
          - Anaxyrus_terrestris_pop3
          - Anaxyrus_terrestris_pop3_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.98976205"
          - "-82.30979422"
          - "11"
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
          - juveniles
          - NA
          - "24"
          - "1"
          - "14"
          - The acclimation temperature was 23-25C so it was taken as 24 with 1C fluctuation.
          - adults
          - NA
          - NA
          - NA
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
          - NA
          - NA
          - linear
          - "9"
          - "34"
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
          - "23.5"
          - "0.65"
          - "13"
          - se
          - NA
      - rowNumber: 3863
        values:
          - "4270"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co1
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - adults
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - "17.23785714"
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
          - "192"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "23.02410714"
          - "2.854020293"
          - "14"
          - sd
          - NA
      - rowNumber: 3864
        values:
          - "4271"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co1
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - adults
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - "17.23785714"
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
          - "192"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "22.53392857"
          - "1.864047683"
          - "14"
          - sd
          - NA
      - rowNumber: 3865
        values:
          - "4272"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co1
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - adults
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - "17.23785714"
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
          - "192"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "21.40357143"
          - "3.048862605"
          - "14"
          - sd
          - NA
      - rowNumber: 3866
        values:
          - "4273"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co1
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - adults
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - "17.23785714"
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
          - "192"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "21.98035714"
          - "3.834448844"
          - "14"
          - sd
          - NA
      - rowNumber: 3867
        values:
          - "4274"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co1
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - adults
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - NA
          - "17.01923077"
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
          - "192"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "22.14230769"
          - "3.696879098"
          - "13"
          - sd
          - NA
      - rowNumber: 3868
        values:
          - "4280"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co3
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - juveniles
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - juveniles
          - NA
          - NA
          - "0.5225"
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
          - "432"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "23.64739583"
          - "1.878922901"
          - "12"
          - sd
          - NA
      - rowNumber: 3869
        values:
          - "4281"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co3
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - juveniles
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - juveniles
          - NA
          - NA
          - "0.5225"
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
          - "432"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "22.8860119"
          - "3.414578269"
          - "12"
          - sd
          - NA
      - rowNumber: 3870
        values:
          - "4282"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co3
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - juveniles
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - juveniles
          - NA
          - NA
          - "0.5225"
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
          - "432"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "24.20416667"
          - "3.323535791"
          - "12"
          - sd
          - NA
      - rowNumber: 3871
        values:
          - "4283"
          - Pietro Pollo
          - Sauer_et_al_2019
          - Behavioural fever reduces ranaviral infection in toads
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2435.13427
          - English
          - Anaxyrus_terrestris_pop1
          - Anaxyrus_terrestris_pop1_PBT_co3
          - The same animals were tested at different time points, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus terrestris
          - NA
          - LC
          - wild
          - NA
          - "27.92053443"
          - "-82.20505414"
          - "15"
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
          - juveniles
          - NA
          - "24.5"
          - NA
          - "14"
          - NA
          - juveniles
          - NA
          - NA
          - "0.5225"
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
          - "432"
          - "0.25"
          - linear
          - "12"
          - "33"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/63
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
          - published_data
          - https ://doi.org/10.5061/dryad.gc6p546
          - NA
          - "23.41458333"
          - "3.919886048"
          - "12"
          - sd
          - NA
    originalStudyCitations:
      - ref: Cohen_et_al_2017
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1111/ele.12720
        year: "2017"
      - ref: Noland_and_Ultsch_1981
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "1981"
      - ref: Sauer_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
        doi: NA
        year: "2018"
      - ref: Sauer_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
        doi: http://dx.doi.org/10.1098/rspb.2018.1111
        year: "2018"
      - ref: Sauer_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: 10.1111/1365-2435.13427
        year: "2019"
    selectedEstimateRowNumbers:
      - 997
      - 3395
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 66M7G
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Anaxyrus terrestris — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 997, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3857, 3860, 3863, 3864, 3865, 3866, 3867, 3868, 3869, 3870, 3871; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/42 -->
The acclimation temperature was 24-25C so it was taken as 24.5 with 0.5C fluctuation. The sample contained both metamorphs and adults so it was taken as "adults"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
Variation in individual temperature
preferences, not behavioural fever,
affects susceptibility to chytridiomycosis
in amphibians
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/63 -->
sham/control before treatment; no information on type of temperature gradient, so it was assumed to be linear; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/63 -->
sham/control day 1 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/63 -->
sham/control day 2 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/63 -->
sham/control day 3 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/63 -->
sham/control day 4 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/63 -->
sham/control before treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/63 -->
sham/control day 1 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/63 -->
sham/control day 2 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/63 -->
sham/control day 3 post treatment; no information on type of temperature gradient; experiment lasted 4 days before infection/sham (control) occurred, then another 4 days for adults and 20 days for juveniles; authors only reported the last day prior to infection/sham (i.e. observation = 1), and the first 3 or 4 days after it for juveniles and adults (respectively, observations 2, 3, 4, and 5)
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
