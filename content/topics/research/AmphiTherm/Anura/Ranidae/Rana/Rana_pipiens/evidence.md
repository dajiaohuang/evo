---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rana pipiens
    name:
      en: Rana pipiens
      zh: Rana pipiens
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
        sourceRowId: "419"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 343
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "485"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 406
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
      family: Ranidae
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
      - rowNumber: 343
        values:
          - "419"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop1
          - Rana_pipiens_pop1_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "10.01571"
          - "-83.788399"
          - "1555"
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
          - "113"
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
          - "31"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 344
        values:
          - "420"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop1
          - Rana_pipiens_pop1_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "10.01571"
          - "-83.788399"
          - "1555"
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
          - "26"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "113"
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
          - "35.7"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 345
        values:
          - "421"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop2
          - Rana_pipiens_pop2_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2012"
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
          - "113"
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
          - "30"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 346
        values:
          - "422"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop2
          - Rana_pipiens_pop2_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2012"
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
          - "26"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "113"
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
          - "37"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 347
        values:
          - "423"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop3
          - Rana_pipiens_pop3_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2256"
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
          - "113"
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
          - "30.8"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 348
        values:
          - "424"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop3
          - Rana_pipiens_pop3_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2256"
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
          - "26"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "113"
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
          - "35.2"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
      - rowNumber: 349
        values:
          - "425"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop6
          - Rana_pipiens_pop6_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "45"
          - "-89.646175"
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
          - "113"
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
          - "31.4"
          - NA
          - "100"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/83
      - rowNumber: 350
        values:
          - "426"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop6
          - Rana_pipiens_pop6_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "45"
          - "-89.646175"
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
          - "23"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "113"
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
          - "34.7"
          - NA
          - "100"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
      - rowNumber: 351
        values:
          - "427"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop6
          - Rana_pipiens_pop6_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "45"
          - "-89.646175"
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
          - "113"
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
          - "35.4"
          - NA
          - "100"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/83
      - rowNumber: 406
        values:
          - "485"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop1
          - Rana_pipiens_pop1_LTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "10.01571"
          - "-83.788399"
          - "1555"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - CostaRica,Vol.Turrialba
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
          - "-1.6"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 407
        values:
          - "486"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop2
          - Rana_pipiens_pop2_LTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2012"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - Mexico,Chiapas,E.Casas
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
          - "-1.6"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 408
        values:
          - "487"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rana_pipiens_pop3
          - Rana_pipiens_pop3_LTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "16.747214"
          - "-92.646527"
          - "2256"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - Mexico,Chiapas,W.Casas
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
          - "-1.6"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 654
        values:
          - "746"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.25865"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 655
        values:
          - "747"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co10
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "12"
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
          - "34.48384"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/83
      - rowNumber: 656
        values:
          - "748"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co11
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "29"
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "35.27936"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/83
      - rowNumber: 657
        values:
          - "749"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co12
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "7"
          - NA
          - "3"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.85943"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/83
      - rowNumber: 658
        values:
          - "750"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co13
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "12"
          - NA
          - "3"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "33.76273"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/83
      - rowNumber: 659
        values:
          - "751"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co14
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "3"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "34.46424"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/83
      - rowNumber: 660
        values:
          - "752"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co15
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "3"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "12"
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
          - "34.4981"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/83
      - rowNumber: 661
        values:
          - "753"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co16
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.37443"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/83
      - rowNumber: 662
        values:
          - "754"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co17
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.27527"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/83
      - rowNumber: 663
        values:
          - "755"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co18
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "7"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.91214"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/83
      - rowNumber: 664
        values:
          - "756"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co19
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "12"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "33.80743"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/83
      - rowNumber: 665
        values:
          - "757"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "7"
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.76112"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/83
      - rowNumber: 666
        values:
          - "758"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co20
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "34.53941"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/83
      - rowNumber: 667
        values:
          - "759"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co21
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "29"
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "35.34239"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/25/values/83
      - rowNumber: 668
        values:
          - "760"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co22
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "29.9"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/26/values/83
      - rowNumber: 669
        values:
          - "761"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "12"
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "33.26749"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/27/values/83
      - rowNumber: 670
        values:
          - "762"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co4
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "33.96789"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/83
      - rowNumber: 671
        values:
          - "763"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co5
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "12"
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
          - "33.9849"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/29/values/83
      - rowNumber: 672
        values:
          - "764"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co6
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "29"
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "34.99871"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/30/values/83
      - rowNumber: 673
        values:
          - "765"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co7
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "31.2616"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/31/values/83
      - rowNumber: 674
        values:
          - "766"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co8
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - "12"
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "33.54815"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/83
      - rowNumber: 675
        values:
          - "767"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Rana_pipiens_pop11
          - Rana_pipiens_pop11_UTL_co9
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were not taken here because animals were originating from a supplier.
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
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
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
          - "0"
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
          - "34.47296"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/83
      - rowNumber: 2607
        values:
          - "2877"
          - PPollo
          - Katzenberger_et_al_2021
          - Variation in upper thermal tolerance among 19 species from temperate wetlands
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2021.102856
          - English
          - Rana_pipiens_pop5
          - Rana_pipiens_pop5_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "41.6911"
          - "-80.49918611"
          - "317"
          - NA
          - NA
          - "2010"
          - March_2010
          - May_2010
          - Spring 2010
          - NA
          - NA
          - "18.1"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/33
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
          - "0.1193"
          - NA
          - unknown
          - CTmax
          - OS
          - water
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
          - Tab 1 and 3
          - NA
          - NA
          - "38"
          - "0.387298335"
          - "15"
          - sd
          - Standard error was converted to SD as sqrt(N) * se
      - rowNumber: 3138
        values:
          - "3455"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "36.3"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
          - NA
          - NA
          - NA
          - NA
          - "8"
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
          - "38.0323741"
          - "0.485611511"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3139
        values:
          - "3456"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "32.32"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
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
          - Fig 1
          - NA
          - NA
          - "38.02158273"
          - "0.755395683"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3140
        values:
          - "3457"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "35.53"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
          - NA
          - NA
          - NA
          - NA
          - "16"
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
          - "38.20503597"
          - "0.496402878"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3141
        values:
          - "3458"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co4
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "25"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "30.91"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
          - NA
          - NA
          - NA
          - NA
          - "8"
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
          - "39.21942446"
          - "0.517985612"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3142
        values:
          - "3459"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co5
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "25"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "34.63"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
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
          - Fig 1
          - NA
          - NA
          - "39.12230216"
          - "0.647482014"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3143
        values:
          - "3460"
          - Patrice Pottier
          - Mahoney_and_Hutchison_1969
          - Photoperiod acclimation and 24-hour variations in the critical thermal maxima of a tropical and a temperate frog
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/BF00379157
          - English
          - Rana_pipiens_pop13
          - Rana_pipiens_pop13_UTL_co6
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "25"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "113"
          - "33.09"
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018. Body mass was taken from table 1
          - NA
          - NA
          - NA
          - NA
          - "16"
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
          - "39.41366906"
          - "0.604316547"
          - "144"
          - sd
          - Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3407
        values:
          - "3732"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/41/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.53646677"
          - "0.070502431"
          - "36"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/41/values/83
      - rowNumber: 3408
        values:
          - "3733"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/42/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co10
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "39.27552674"
          - "0.070502431"
          - "25"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/42/values/83
      - rowNumber: 3409
        values:
          - "3734"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/43/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co11
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "39.08103728"
          - "0.053484603"
          - "20"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/43/values/83
      - rowNumber: 3410
        values:
          - "3735"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/44/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co12
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.97893031"
          - "0.046191248"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/44/values/83
      - rowNumber: 3411
        values:
          - "3736"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/45/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.0356564"
          - "0.121555916"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/45/values/83
      - rowNumber: 3412
        values:
          - "3737"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/46/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "37.99675851"
          - "0.024311183"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/46/values/83
      - rowNumber: 3413
        values:
          - "3738"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/47/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co4
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "37.48622366"
          - "0.136142626"
          - "17"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/47/values/83
      - rowNumber: 3414
        values:
          - "3739"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/48/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co5
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.94489465"
          - "0.041329011"
          - "49"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/48/values/83
      - rowNumber: 3415
        values:
          - "3740"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/49/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co6
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.76012966"
          - "0.082658023"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/49/values/83
      - rowNumber: 3416
        values:
          - "3741"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/50/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co7
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.89141005"
          - "0.145867099"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/50/values/83
      - rowNumber: 3417
        values:
          - "3742"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/51/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co8
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "38.85737439"
          - "0.150729335"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/51/values/83
      - rowNumber: 3418
        values:
          - "3743"
          - Patrice Pottier
          - Noland_and_Ultsch_1981
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/52/values/3
          - "1981"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Rana_pipiens_pop4
          - Rana_pipiens_pop4_UTL_co9
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
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
          - "113"
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
          - "39.98541329"
          - "0.072933549"
          - "37"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/52/values/83
      - rowNumber: 3893
        values:
          - "4311"
          - Pietro Pollo
          - Schmid_1982
          - Survival of Frogs in Low Temperature
          - "1982"
          - NA
          - NA
          - peer-reviewed
          - 10.1126/science.7058335
          - English
          - Rana_pipiens_pop7
          - Rana_pipiens_pop7_LTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - wild
          - NA
          - "45.7514972"
          - "-92.92698621"
          - "286"
          - NA
          - September
          - "1980"
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
          - "6"
          - NA
          - "25"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - SCP
          - body
          - "0"
          - "0.6"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-2.55"
          - "0.35"
          - "2"
          - sd
          - NA
      - rowNumber: 3904
        values:
          - "4322"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co1
          - Data for the animals tested immediately after the acclimation period
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "34.6"
          - "0.23"
          - "9"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/54/values/83
      - rowNumber: 3905
        values:
          - "4323"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co2
          - Data for the animals tested immediately after equilibration at 25C for 1 hour
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "34.8"
          - "0.18"
          - "9"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/55/values/83
      - rowNumber: 3906
        values:
          - "4324"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co3
          - Data for the animals tested immediately after the acclimation period
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "30"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "36.5"
          - "0.18"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/56/values/83
      - rowNumber: 3907
        values:
          - "4325"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co4
          - Data for the animals tested immediately after equilibration at 25C for 1 hour
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "30"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "36.3"
          - "0.14"
          - "10"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/57/values/83
      - rowNumber: 3908
        values:
          - "4326"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co5
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "34"
          - "0.2"
          - "11"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/58/values/83
      - rowNumber: 3909
        values:
          - "4327"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co6
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "20"
          - "10"
          - "14"
          - The acclimation temperature was cycled between 10 and 30C so it was taken as 20C +/- 10C
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "35.9"
          - "0.25"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/59/values/83
      - rowNumber: 3910
        values:
          - "4328"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co7
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "30"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962
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
          - Tab 1
          - NA
          - NA
          - "36.3"
          - "0.23"
          - "10"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/60/values/83
      - rowNumber: 3911
        values:
          - "4329"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co8
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - "39.41119026"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/61/values/63
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
          - Fig 2
          - NA
          - NA
          - "32.69543493"
          - "1.051032769"
          - "17"
          - sd
          - Data was digitised from figure 2 because this data was not reported in Rohr et al. 2018
      - rowNumber: 3912
        values:
          - "4330"
          - Patrice Pottier
          - Seibel_1970
          - Variables Affecting the Critical Thermal Maximum of the Leopard Frog, Rana pipiens Schreber
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/3890740
          - English
          - Rana_pipiens_pop16
          - Rana_pipiens_pop16_UTL_co9
          - NA
          - Anura
          - Ranidae
          - Rana pipiens
          - NA
          - LC
          - supplier
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "25"
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - "39.27055027"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "25"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/62/values/63
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
          - Fig 2
          - NA
          - NA
          - "35.42437469"
          - "0.489914647"
          - "23"
          - sd
          - Data was digitised from figure 2 because this data was not reported in Rohr et al. 2018
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Brattstrom_and_Lawrence_1962
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1086/physzool.35.2.30152723
        year: "1962"
      - ref: Katzenberger_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1016/j.jtherbio.2021.102856
        year: "2021"
      - ref: Mahoney_and_Hutchison_1969
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: https://doi.org/10.1007/BF00379157
        year: "1969"
      - ref: Noland_and_Ultsch_1981
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "1981"
      - ref: Schmid_1982
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: 10.1126/science.7058335
        year: "1982"
      - ref: Seibel_1970
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/6/title
          format: heading
        doi: 10.2307/3890740
        year: "1970"
    selectedEstimateRowNumbers:
      - 343
      - 406
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

# Rana pipiens — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 343, 344, 345, 346, 347, 348, 349, 350, 351, 406, 407, 408, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 2607, 3138, 3139, 3140, 3141, 3142, 3143, 3407, 3408, 3409, 3410, 3411, 3412, 3413, 3414, 3415, 3416, 3417, 3418, 3893, 3904, 3905, 3906, 3907, 3908, 3909, 3910, 3911, 3912; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/25/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/26/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/27/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/29/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/30/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/31/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/33 -->
water_temp was from the deepest point in the pond. Animals were collected in Spring 2010 in the USA so it was taken as March - May 2010
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/41/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/41/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/42/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/42/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/43/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/43/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/44/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/44/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/45/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/45/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/46/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/46/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/47/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/47/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/48/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/48/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/49/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/49/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/50/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/50/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/51/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/51/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/52/values/3 -->
The Roles of Temperature and Dissolved Oxygen in Microhabitat Selection by the Tadpoles of a Frog (Rana pipiens) and a Toad (Bufo terrestris)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/52/values/83 -->
Data was digitised from figure 1 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/54/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/55/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/56/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/57/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/58/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/59/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/60/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. The data for animals "fed" and "not fed" were not taken because the acclimation temperature of those experimental groups was unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/61/values/63 -->
SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962. Mean body mass was digitised from figure 2.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/62/values/63 -->
SVL was reported as in Rohr et al. 2018. endpoint and medium_test_temp were taken as in Brattstrom_and_Lawrence_1962. Mean body mass was digitised from figure 2.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
