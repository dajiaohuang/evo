---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pseudacris regilla
    name:
      en: Pseudacris regilla
      zh: Pseudacris regilla
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
        sourceRowId: "401"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 325
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "482"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 403
      - topic: ecology
        title:
          en: Selected hot lethal-limit assay estimate
          zh: 选列的高温致死限实验估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "797"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 705
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
      - rowNumber: 325
        values:
          - "401"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Pseudacris_regilla_pop1
          - Pseudacris_regilla_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "33.646966"
          - "-117.689218"
          - "305"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "5"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
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
          - SVL was taken as reported in Rohr et al. 2018. Photoperiod was either 24h light, or 24h dark.
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "31.8"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 326
        values:
          - "402"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Pseudacris_regilla_pop1
          - Pseudacris_regilla_pop1_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "33.646966"
          - "-117.689218"
          - "305"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "30"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
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
          - SVL was taken as reported in Rohr et al. 2018. Photoperiod was either 24h light, or 24h dark.
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "36.6"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 327
        values:
          - "403"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Pseudacris_regilla_pop2
          - Pseudacris_regilla_pop2_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "39.326817"
          - "-120.087465"
          - "2743"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "5"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
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
          - SVL was taken as reported in Rohr et al. 2018. Photoperiod was either 24h light, or 24h dark.
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "32.6"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 328
        values:
          - "404"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Pseudacris_regilla_pop2
          - Pseudacris_regilla_pop2_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "39.326817"
          - "-120.087465"
          - "2743"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "30"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
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
          - SVL was taken as reported in Rohr et al. 2018. Photoperiod was either 24h light, or 24h dark.
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "37.7"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 403
        values:
          - "482"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Pseudacris_regilla_pop1
          - Pseudacris_regilla_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "33.646966"
          - "-117.689218"
          - "305"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - California,ElToro
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
          - "23"
          - "1"
          - "17.5"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
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
          - The endpoint and ramping rates were assumed to be the same as for the CTmax experiment
          - NA
          - NA
          - NA
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
          - "-1"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 705
        values:
          - "797"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Pseudacris_regilla_pop6
          - Pseudacris_regilla_pop6_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "9"
          - "0.2"
          - "28"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "2"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/63
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "33.9877193"
          - NA
          - "2"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 706
        values:
          - "798"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Pseudacris_regilla_pop6
          - Pseudacris_regilla_pop6_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "20"
          - "0.2"
          - "14"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "5"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/63
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "34.99473684"
          - NA
          - "5"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 707
        values:
          - "799"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Pseudacris_regilla_pop6
          - Pseudacris_regilla_pop6_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "27.5"
          - "0.2"
          - "14"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "4"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/63
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "36.1"
          - NA
          - "4"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 954
        values:
          - "1076"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Pseudacris_regilla_pop3
          - Pseudacris_regilla_pop3_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "46.769784"
          - "-113.714412"
          - "1167"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "0"
          - NA
          - "8"
          - Acclimation_time was taken as the mean of the range presented (7-9 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
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
          - SVL was taken as reported in Rohr et al. 2018.
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 3
          - NA
          - NA
          - "34.82026"
          - "0.25326795"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/83
      - rowNumber: 955
        values:
          - "1077"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Pseudacris_regilla_pop3
          - Pseudacris_regilla_pop3_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "46.769784"
          - "-113.714412"
          - "1167"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-4 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
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
          - SVL was taken as reported in Rohr et al. 2018.
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 3
          - NA
          - NA
          - "35.13072"
          - "0.1633987"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/83
      - rowNumber: 956
        values:
          - "1078"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Pseudacris_regilla_pop3
          - Pseudacris_regilla_pop3_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
          - NA
          - LC
          - wild
          - NA
          - "46.769784"
          - "-113.714412"
          - "1167"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "20"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-4 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
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
          - SVL was taken as reported in Rohr et al. 2018.
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 3
          - NA
          - NA
          - "35.22876"
          - "0.1633987"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/83
      - rowNumber: 2558
        values:
          - "2792"
          - Jose O. Valdebenito
          - Johnson_1980
          - The effects of five organophosphorus insecticides on thermal stress in tadpoles of the Pacific tree frog, Hyla regilla
          - "1980"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1096-3642.1980.tb01935.x
          - English
          - Pseudacris_regilla_pop8
          - Pseudacris_regilla_pop8_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris regilla
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
          - Geographical coordinates were not provided.
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "18.5"
          - "0.5"
          - embryos_and_larvae
          - NA
          - "18.5"
          - "0.5"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/42
          - larvae
          - NA
          - NA
          - NA
          - "22"
          - unknown
          - CTmax
          - OS
          - water
          - NA
          - "0.3"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/63
          - NA
          - NA
          - NA
          - NA
          - NA
          - control
          - NA
          - "0"
          - mg/L
          - NA
          - NA
          - Parts per billion (ppb) were converted to mg/L
          - Tab 2
          - NA
          - NA
          - "37.5"
          - NA
          - "54"
          - NA
          - NA
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Brown_1969
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.2307/1441703
        year: "1969"
      - ref: Claussen_1973
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1016/0300-9629(73)90377-0
        year: "1973"
      - ref: Johnson_1980
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: https://doi.org/10.1111/j.1096-3642.1980.tb01935.x
        year: "1980"
    selectedEstimateRowNumbers:
      - 325
      - 403
      - 705
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4NH9V
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pseudacris regilla — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 325, 326, 327, 328, 403, 705, 706, 707, 954, 955, 956, 2558; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/42 -->
Acclimation temperature varied between 18 and 19C so it was taken as 18.5 +/- 0.5C. Animals were exposed from the embryonic stage to when larvae reached three weeks of age.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/63 -->
age_tested was the age of the animals before the exposure to insecticides + the duration of exposure to the insecticides.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
