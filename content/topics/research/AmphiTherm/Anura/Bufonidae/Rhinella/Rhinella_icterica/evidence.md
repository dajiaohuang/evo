---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rhinella icterica
    name:
      en: Rhinella icterica
      zh: Rhinella icterica
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
        sourceRowId: "232"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 192
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "254"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 214
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1387"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 1238
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
      - rowNumber: 192
        values:
          - "232"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop2
          - Rhinella_icterica_pop2_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.3362"
          - "-45.145917"
          - "820"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
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
          - "24.5"
          - "2.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/42
          - adults
          - NA
          - NA
          - "191.23"
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass was taken as the mean of the range presented in Table 1
          - "55"
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
          - Fig 4
          - NA
          - NA
          - "39.27431333"
          - "0.297158155"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 193
        values:
          - "233"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop3
          - Rhinella_icterica_pop3_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.23556"
          - "-45.021944"
          - "1022"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
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
          - "24.5"
          - "2.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/42
          - adults
          - NA
          - NA
          - "191.23"
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass was taken as the mean of the range presented in Table 1
          - "55"
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
          - Fig 4
          - NA
          - NA
          - "38.91149272"
          - "0.340558215"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 194
        values:
          - "234"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop6
          - Rhinella_icterica_pop6_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.947417"
          - "-45.74585"
          - "550"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
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
          - "24.5"
          - "2.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/42
          - adults
          - NA
          - NA
          - "191.23"
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass was taken as the mean of the range presented in Table 1
          - "55"
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
          - Fig 4
          - NA
          - NA
          - "39.00219787"
          - "0.878567809"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 195
        values:
          - "235"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop7
          - Rhinella_icterica_pop7_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.720017"
          - "-44.627133"
          - "1500"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
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
          - "24.5"
          - "2.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/42
          - adults
          - NA
          - NA
          - "191.23"
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass was taken as the mean of the range presented in Table 1
          - "55"
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
          - Fig 4
          - NA
          - NA
          - "38.56882881"
          - "0.349162651"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 196
        values:
          - "236"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop8
          - Rhinella_icterica_pop8_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.508533"
          - "-45.149167"
          - "1600"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
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
          - "24.5"
          - "2.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/42
          - adults
          - NA
          - NA
          - "191.23"
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass was taken as the mean of the range presented in Table 1
          - "55"
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
          - Fig 4
          - NA
          - NA
          - "38.60914221"
          - "0.535921465"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 214
        values:
          - "254"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop2
          - Rhinella_icterica_pop2_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.3362"
          - "-45.145917"
          - "820"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
          - Species sampled between September and February each year
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
          - "5"
          - Acclimation temperature was taken as the mean of the range provided.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "55"
          - NA
          - NA
          - NA
          - NA
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
          - "3.088235294"
          - "2.156862745"
          - NA
          - sd
          - Sample size missing
      - rowNumber: 215
        values:
          - "255"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop3
          - Rhinella_icterica_pop3_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.235556"
          - "-45.021944"
          - "1022"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
          - Species sampled between September and February each year
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
          - "5"
          - Acclimation temperature was taken as the mean of the range provided.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "55"
          - NA
          - NA
          - NA
          - NA
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
          - "2.745098039"
          - "1.421568627"
          - NA
          - sd
          - Sample size missing
      - rowNumber: 216
        values:
          - "256"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop6
          - Rhinella_icterica_pop6_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.947417"
          - "-45.74585"
          - "550"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
          - Species sampled between September and February each year
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
          - "5"
          - Acclimation temperature was taken as the mean of the range provided.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "55"
          - NA
          - NA
          - NA
          - NA
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
          - "3.382352941"
          - "2.058823529"
          - NA
          - sd
          - Sample size missing
      - rowNumber: 217
        values:
          - "257"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop7
          - Rhinella_icterica_pop7_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.720017"
          - "-44.627133"
          - "1500"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
          - Species sampled between September and February each year
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
          - "5"
          - Acclimation temperature was taken as the mean of the range provided.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "55"
          - NA
          - NA
          - NA
          - NA
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
          - "2.058823529"
          - "0.735294118"
          - NA
          - sd
          - Sample size missing
      - rowNumber: 218
        values:
          - "258"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "2"
          - "Climbing The Atlantic Forest Mountains: Do Physiological Traits Of Amphibians Vary Along Elevational Gradients ?"
          - not_peer-reviewed
          - NA
          - English
          - Rhinella_icterica_pop8
          - Rhinella_icterica_pop8_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.508533"
          - "-45.149167"
          - "1600"
          - NA
          - NA
          - NA
          - September_2011
          - February_2014
          - Species sampled between September and February each year
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
          - "5"
          - Acclimation temperature was taken as the mean of the range provided.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "25"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "55"
          - NA
          - NA
          - NA
          - NA
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
          - "2.254901961"
          - "1.911764706"
          - NA
          - sd
          - Sample size missing
      - rowNumber: 1234
        values:
          - "1383"
          - Nayelli Rivera
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.23797222"
          - "-45.02522222"
          - "1077"
          - NA
          - December
          - "2014"
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
          - "23"
          - "2"
          - "4.5"
          - NA
          - adults
          - NA
          - NA
          - "119.3"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "13.5"
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
          - "38.6"
          - "0.6"
          - "14"
          - sd
          - NA
      - rowNumber: 1235
        values:
          - "1384"
          - Nayelli Rivera
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.23797222"
          - "-45.02522222"
          - "1077"
          - NA
          - August
          - "2015"
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
          - "19"
          - "2"
          - "4.5"
          - NA
          - adults
          - NA
          - NA
          - "121.6"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10.5"
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
          - "38.4"
          - "0.8"
          - "9"
          - sd
          - NA
      - rowNumber: 1236
        values:
          - "1385"
          - Natalie_Claunch
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.236117"
          - "-45.0218"
          - "1077"
          - NA
          - August
          - "2015"
          - NA
          - NA
          - NA
          - "15"
          - NA
          - NA
          - "15.4"
          - Ambient temp was taken as the mean of the range provided (14-17)
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "19"
          - "2"
          - "1.5"
          - NA
          - adults
          - NA
          - NA
          - "121.6"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - "23"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10.5"
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
          - "3.6"
          - "1.5"
          - "9"
          - sd
          - NA
      - rowNumber: 1237
        values:
          - "1386"
          - Natalie_Claunch
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_LTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.236117"
          - "-45.0218"
          - "1077"
          - NA
          - December
          - "2014"
          - NA
          - NA
          - NA
          - "22"
          - NA
          - NA
          - "16.2"
          - Ambient temp was taken as the mean of the range provided (21-23)
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "23"
          - "2"
          - "1.5"
          - NA
          - adults
          - NA
          - NA
          - "119.3"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - "23"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "13.5"
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
          - "2.7"
          - "0.8"
          - "14"
          - sd
          - NA
      - rowNumber: 1238
        values:
          - "1387"
          - Natalie_Claunch
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.236117"
          - "-45.0218"
          - "1077"
          - NA
          - August
          - "2015"
          - NA
          - NA
          - NA
          - "15"
          - NA
          - NA
          - "15.4"
          - Ambient temp was taken as the mean of the range provided (14-17)
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "19"
          - "2"
          - "1"
          - NA
          - adults
          - NA
          - NA
          - "121.6"
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
          - "3"
          - "4"
          - linear
          - "12"
          - "40"
          - Circular shape arena, but the temperature was presented in a linear fashion.
          - NA
          - NA
          - NA
          - NA
          - "10.5"
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
          - "21.9"
          - "1.2"
          - "9"
          - sd
          - NA
      - rowNumber: 1239
        values:
          - "1388"
          - Natalie_Claunch
          - De-Oliveria-Anderson_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.011
          - English
          - Rhinella_icterica_pop4
          - Rhinella_icterica_pop4_PBT_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.236117"
          - "-45.0218"
          - "1077"
          - NA
          - December
          - "2014"
          - NA
          - NA
          - NA
          - "22"
          - NA
          - NA
          - "16.2"
          - Ambient temp was taken as the mean of the range provided (21-23)
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "23"
          - "2"
          - "1"
          - NA
          - adults
          - NA
          - NA
          - "119.3"
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
          - "3"
          - "4"
          - linear
          - "12"
          - "40"
          - Circular shape arena, but the temperature was presented in a linear fashion.
          - NA
          - NA
          - NA
          - NA
          - "13.5"
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
          - "24.7"
          - "1.2"
          - "14"
          - sd
          - NA
      - rowNumber: 3360
        values:
          - "3678"
          - Sarah Varon
          - Moretti_et_al_2018
          - |-
            Behavioral fever decreases metabolic response to lipopolysaccharide
            in yellow Cururu toads (Rhinella icterica)
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.physbeh.2018.04.008
          - English
          - Rhinella_icterica_pop5
          - Rhinella_icterica_pop5_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.893892"
          - "-48.502164"
          - "862"
          - NA
          - NA
          - NA
          - July_2014
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
          - NA
          - NA
          - NA
          - Acclimation conditions not reported
          - adults
          - NA
          - NA
          - "43"
          - NA
          - male
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
          - "6"
          - linear
          - "10"
          - "40"
          - Before saline treatment
          - NA
          - NA
          - NA
          - NA
          - NA
          - control
          - NA
          - "0"
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "22.1"
          - "3.1"
          - "7"
          - sd
          - Before saline treatment
      - rowNumber: 3361
        values:
          - "3679"
          - Sarah Varon
          - Moretti_et_al_2018
          - |-
            Behavioral fever decreases metabolic response to lipopolysaccharide
            in yellow Cururu toads (Rhinella icterica)
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.physbeh.2018.04.008
          - English
          - Rhinella_icterica_pop5
          - Rhinella_icterica_pop5_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.893892"
          - "-48.502164"
          - "862"
          - NA
          - NA
          - NA
          - July_2014
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
          - NA
          - NA
          - NA
          - Acclimation conditions not reported
          - adults
          - NA
          - NA
          - "43"
          - NA
          - male
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
          - "6"
          - linear
          - "10"
          - "40"
          - Saline during fever behavior
          - NA
          - NA
          - NA
          - NA
          - NA
          - control
          - NA
          - "0"
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "22.8"
          - "0.6"
          - "7"
          - sd
          - Saline during fever behavior
      - rowNumber: 3362
        values:
          - "3680"
          - Sarah Varon
          - Moretti_et_al_2018
          - |-
            Behavioral fever decreases metabolic response to lipopolysaccharide
            in yellow Cururu toads (Rhinella icterica)
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.physbeh.2018.04.008
          - English
          - Rhinella_icterica_pop5
          - Rhinella_icterica_pop5_PBT_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-22.893892"
          - "-48.502164"
          - "862"
          - NA
          - NA
          - NA
          - July_2014
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
          - NA
          - NA
          - NA
          - Acclimation conditions not reported
          - adults
          - NA
          - NA
          - "43"
          - NA
          - male
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
          - "6"
          - linear
          - "10"
          - "40"
          - Before LPS treatment
          - NA
          - NA
          - NA
          - NA
          - NA
          - control
          - NA
          - "0"
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "23.2"
          - "3.2"
          - "8"
          - sd
          - Before LPS treatment
      - rowNumber: 3978
        values:
          - "4403"
          - PPollo
          - Simon_2010
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/3
          - "2010"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Portuguese
          - Rhinella_icterica_pop1
          - Rhinella_icterica_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.63333333"
          - "-45.86666667"
          - "900"
          - 15/11/2009
          - November
          - "2009"
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/28
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
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/42
          - larvae
          - NA
          - NA
          - NA
          - "7"
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.905"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Ramping was taken as the mean of the range presented (0.88-0.93C/min)
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
          - Fig 31
          - NA
          - NA
          - "41.2"
          - "0.790123457"
          - "24"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/83
      - rowNumber: 4005
        values:
          - "4430"
          - Patrice Pottier
          - Simon_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2014.12.008
          - English
          - Rhinella_icterica_pop1
          - Rhinella_icterica_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.6334"
          - "-45.8667"
          - "936"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Elevation estimated from https://latlongdata.com/elevation/
          - NA
          - NA
          - "20.1"
          - NA
          - NA
          - acclimated
          - "18"
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "3"
          - NA
          - larvae
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.905"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Ramping was taken as the mean of the range presented (0.88-0.93C/min)
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
          - dataset
          - NA
          - NA
          - "42.5"
          - "0.483045892"
          - "16"
          - sd
          - Data was calculated from the raw data, which was obtained from the authors of the original study.
      - rowNumber: 4006
        values:
          - "4431"
          - Patrice Pottier
          - Simon_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2014.12.008
          - English
          - Rhinella_icterica_pop1
          - Rhinella_icterica_pop1_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.6334"
          - "-45.8667"
          - "936"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Elevation estimated from https://latlongdata.com/elevation/
          - NA
          - NA
          - "20.1"
          - NA
          - NA
          - acclimated
          - "18"
          - NA
          - larvae
          - NA
          - "30"
          - NA
          - "3"
          - NA
          - larvae
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "30"
          - "0.905"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Ramping was taken as the mean of the range presented (0.88-0.93C/min)
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
          - dataset
          - NA
          - NA
          - "43.25"
          - "0.845154255"
          - "8"
          - sd
          - Data was calculated from the raw data, which was obtained from the authors of the original study.
      - rowNumber: 4007
        values:
          - "4432"
          - Patrice Pottier
          - Simon_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2014.12.008
          - English
          - Rhinella_icterica_pop1
          - Rhinella_icterica_pop1_UTL_co3
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.6334"
          - "-45.8667"
          - "936"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Elevation estimated from https://latlongdata.com/elevation/
          - NA
          - NA
          - "20.1"
          - NA
          - NA
          - acclimated
          - "18"
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "3"
          - NA
          - larvae
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.905"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Ramping was taken as the mean of the range presented (0.88-0.93C/min)
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
          - dataset
          - NA
          - NA
          - "41.46666667"
          - "0.990430402"
          - "15"
          - sd
          - Data was calculated from the raw data, which was obtained from the authors of the original study.
      - rowNumber: 4008
        values:
          - "4433"
          - Patrice Pottier
          - Simon_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2014.12.008
          - English
          - Rhinella_icterica_pop1
          - Rhinella_icterica_pop1_UTL_co4
          - NA
          - Anura
          - Bufonidae
          - Rhinella icterica
          - NA
          - LC
          - wild
          - NA
          - "-23.6334"
          - "-45.8667"
          - "936"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Elevation estimated from https://latlongdata.com/elevation/
          - NA
          - NA
          - "20.1"
          - NA
          - NA
          - acclimated
          - "18"
          - NA
          - larvae
          - NA
          - "30"
          - NA
          - "3"
          - NA
          - larvae
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "30"
          - "0.905"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Ramping was taken as the mean of the range presented (0.88-0.93C/min)
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
          - dataset
          - NA
          - NA
          - "42.5"
          - "0.518874522"
          - "14"
          - sd
          - Data was calculated from the raw data, which was obtained from the authors of the original study.
    originalStudyCitations:
      - ref: Bovo_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2015"
      - ref: De-Oliveria-Anderson_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1016/j.jtherbio.2018.03.011
        year: "2018"
      - ref: Moretti_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
        doi: https://doi.org/10.1016/j.physbeh.2018.04.008
        year: "2018"
      - ref: Simon_2010
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2010"
      - ref: Simon_et_al_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: 10.1016/j.jtherbio.2014.12.008
        year: "2015"
    selectedEstimateRowNumbers:
      - 192
      - 214
      - 1238
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4S7ND
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Rhinella icterica — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 192, 193, 194, 195, 196, 214, 215, 216, 217, 218, 1234, 1235, 1236, 1237, 1238, 1239, 3360, 3361, 3362, 3978, 4005, 4006, 4007, 4008; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/42 -->
Acclimation time was taken as the mean of the range presented (6-8 days). Acclimation_temp was 22-27C so it was taken as 24.5 +/- 2.5C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
Data was digitised from figure 4. Sample sizes were taken as the total sample size across sites (reported in Table 1) divided by the number of sites for a given species.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/42 -->
Acclimation time was taken as the mean of the range presented (6-8 days). Acclimation_temp was 22-27C so it was taken as 24.5 +/- 2.5C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 4. Sample sizes were taken as the total sample size across sites (reported in Table 1) divided by the number of sites for a given species.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/42 -->
Acclimation time was taken as the mean of the range presented (6-8 days). Acclimation_temp was 22-27C so it was taken as 24.5 +/- 2.5C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data was digitised from figure 4. Sample sizes were taken as the total sample size across sites (reported in Table 1) divided by the number of sites for a given species.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/42 -->
Acclimation time was taken as the mean of the range presented (6-8 days). Acclimation_temp was 22-27C so it was taken as 24.5 +/- 2.5C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Data was digitised from figure 4. Sample sizes were taken as the total sample size across sites (reported in Table 1) divided by the number of sites for a given species.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/42 -->
Acclimation time was taken as the mean of the range presented (6-8 days). Acclimation_temp was 22-27C so it was taken as 24.5 +/- 2.5C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Data was digitised from figure 4. Sample sizes were taken as the total sample size across sites (reported in Table 1) divided by the number of sites for a given species.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/3 -->
Seasonal variation in the thermal biology of a terrestrial toad, Rhinella icterica (Bufonidae), from the Brazilian Atlantic Forest
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/3 -->
Plasticidade fenotípica em relação à temperatura de larvas de Rhinella (Anura:Bufonidae) da caatinga e da floresta atlântica
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/28 -->
There was a typo in the reported latitudes. It seems like the collection site was at a latitude of 23,38"S rather than 28,38"S.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/42 -->
Animals were acclimated for a period of 3 or 6 days. Acclimation time was taken as 3 days because this was the information provided in the figure where the data was collected.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/83 -->
Data was digitised from figure 31. The exact sample size was unclear but it seems like only the data for animals acclimated for 3 days was presented here, with n=24.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/3 -->
Upper thermal tolerance plasticity in tropical amphibian species from contrasting habitats: implications for warming impact prediction
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/3 -->
Upper thermal tolerance plasticity in tropical amphibian species from contrasting habitats: implications for warming impact prediction
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/3 -->
Upper thermal tolerance plasticity in tropical amphibian species from contrasting habitats: implications for warming impact prediction
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/3 -->
Upper thermal tolerance plasticity in tropical amphibian species from contrasting habitats: implications for warming impact prediction
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
