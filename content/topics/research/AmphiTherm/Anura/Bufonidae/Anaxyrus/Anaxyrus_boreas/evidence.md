---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Anaxyrus boreas
    name:
      en: Anaxyrus boreas
      zh: Anaxyrus boreas
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
        sourceRowId: "355"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 279
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "828"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 733
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
      - rowNumber: 279
        values:
          - "355"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
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
          - "35"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 280
        values:
          - "356"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "33.619164"
          - "-117.692721"
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
          - "34.9"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 281
        values:
          - "357"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co3
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
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
          - "15"
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
          - "36"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 282
        values:
          - "358"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co4
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "33.619164"
          - "-117.692721"
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
          - "15"
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
          - "36"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 283
        values:
          - "359"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co5
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
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
          - "37.8"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 284
        values:
          - "360"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop1
          - Anaxyrus_boreas_pop1_UTL_co6
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "33.619164"
          - "-117.692721"
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
          - "38.1"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
      - rowNumber: 285
        values:
          - "361"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop2
          - Anaxyrus_boreas_pop2_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "33.979179"
          - "-118.032844"
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
          - "35.2"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/83
      - rowNumber: 286
        values:
          - "362"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop4
          - Anaxyrus_boreas_pop4_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
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
          - "34.1"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
      - rowNumber: 287
        values:
          - "363"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop4
          - Anaxyrus_boreas_pop4_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
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
          - "36.5"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/83
      - rowNumber: 288
        values:
          - "364"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop5
          - Anaxyrus_boreas_pop5_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "51.091389"
          - "-121.586667"
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
          - "34"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/83
      - rowNumber: 289
        values:
          - "365"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_boreas_pop5
          - Anaxyrus_boreas_pop5_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "51.091389"
          - "-121.586667"
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
          - "35.5"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/83
      - rowNumber: 733
        values:
          - "828"
          - Natalie_Claunch
          - Carey_1978
          - Factors Affecting Body Temperatures of Toads
          - "1978"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_boreas_pop3
          - Anaxyrus_boreas_pop3_PBT_co1
          - The same animals were tested fed and starved, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "38.95852198"
          - "-106.9880368"
          - "3177.5"
          - NA
          - NA
          - NA
          - June_1971
          - June_1974
          - Coordinates were estimated from Google Maps. Elevation was taken as the mean of the values provided
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
          - NA
          - NA
          - NA
          - Acclimation conditions not reported
          - adults
          - NA
          - NA
          - "32.8"
          - NA
          - mixed
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "24"
          - "120"
          - linear
          - "10"
          - "43"
          - natural, fed
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
          - "24.2"
          - "0.18"
          - "8"
          - se
          - NA
      - rowNumber: 734
        values:
          - "830"
          - Natalie_Claunch
          - Carey_1978
          - Factors Affecting Body Temperatures of Toads
          - "1978"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_boreas_pop3
          - Anaxyrus_boreas_pop3_PBT_co2
          - The same animals were tested fed and starved, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - "38.95852198"
          - "-106.9880368"
          - "3177.5"
          - NA
          - NA
          - NA
          - June_1971
          - June_1974
          - Coordinates were estimated from Google Maps. Elevation was taken as the mean of the values provided
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
          - "30"
          - NA
          - adults
          - NA
          - NA
          - "34.5"
          - NA
          - mixed
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "24"
          - "120"
          - linear
          - "10"
          - "43"
          - 20C acclimation, fed
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
          - "29.3"
          - "0.36"
          - "6"
          - se
          - NA
      - rowNumber: 2559
        values:
          - "2807"
          - Jose O. Valdebenito
          - Johnson_and_Prine_1976
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/3
          - "1976"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/S0300-9629(76)80045-X
          - English
          - Anaxyrus_boreas_pop8
          - Anaxyrus_boreas_pop8_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - July
          - "1973"
          - NA
          - NA
          - Geographical coordinates were not provided.
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
          - "23.5"
          - "0.5"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/42
          - juveniles
          - NA
          - NA
          - NA
          - NA
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
          - NA
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
          - Fig 1
          - NA
          - NA
          - "35.65517241"
          - "0.172413793"
          - "47"
          - se
          - Data was digitised from figure 1.
      - rowNumber: 2560
        values:
          - "2818"
          - Jose O. Valdebenito
          - Johnson_and_Prine_1976
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "1976"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/S0300-9629(76)80045-X
          - English
          - Anaxyrus_boreas_pop8
          - Anaxyrus_boreas_pop8_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus boreas
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - July
          - "1973"
          - NA
          - NA
          - Geographical coordinates were not provided.
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
          - "23.5"
          - "0.5"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/42
          - juveniles
          - NA
          - NA
          - NA
          - NA
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
          - NA
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
          - Fig 1
          - NA
          - NA
          - "35.57471264"
          - "0.41954023"
          - "18"
          - se
          - Data was digitised from figure 1.
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Carey_1978
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "1978"
      - ref: Johnson_and_Prine_1976
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1016/S0300-9629(76)80045-X
        year: "1976"
    selectedEstimateRowNumbers:
      - 279
      - 733
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - DK9W
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Anaxyrus boreas — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 733, 734, 2559, 2560; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/3 -->
The effects of sublethal concentrations of organophosphorus insecticides and an insect growth regulator on temperature tolerance in hydrated and dehydrated juvenile western toads, Bufo boreas
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/42 -->
Acclimation temperature varied between 23 and 24C so it was taken as 23.5 +/- 0.5. The duration of acclimatin was 24h + 24h of exposure to the chemicals.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
The effects of sublethal concentrations of organophosphorus insecticides and an insect growth regulator on temperature tolerance in hydrated and dehydrated juvenile western toads, Bufo boreas
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/42 -->
Acclimation temperature varied between 23 and 24C so it was taken as 23.5 +/- 0.5. The duration of acclimatin was 24h + 24h of exposure to the chemicals.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
