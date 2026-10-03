---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Acris crepitans
    name:
      en: Acris crepitans
      zh: Acris crepitans
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
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "454"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 378
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1494"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1336
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4265"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 3858
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
      - rowNumber: 378
        values:
          - "454"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Acris_crepitans_pop1
          - Acris_crepitans_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "30.03932398"
          - "-91.42709404"
          - "305"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - Louisiana,USA
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
      - rowNumber: 1336
        values:
          - "1494"
          - Patrice Pottier
          - Dunlap_1968
          - Critical Thermal Maximum as a Function of Temperature of Acclimation in Two Species of Hylid Frogs
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.41.4.30155478\
          - English
          - Acris_crepitans_pop5
          - Acris_crepitans_pop5_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.779442"
          - "-96.92921"
          - "372"
          - NA
          - August
          - "1966"
          - NA
          - NA
          - Sampling dates were between August 11 and August 23. Coordinates were taken from Rohr et al. 2018
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
          - "4"
          - "1"
          - "5"
          - Animals were acclimated for periods of 3 to 7 days, with most animals having 5-day acclimation periods.
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
          - water
          - "23"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/63
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
          - Tab 4
          - NA
          - NA
          - "40.52"
          - "0.408656335"
          - "12"
          - sd
          - Data was taken from Tab 4 because Rohr et al. 2018 did not report SD. Variance was converted to standard deviation.
      - rowNumber: 1337
        values:
          - "1495"
          - Patrice Pottier
          - Dunlap_1968
          - Critical Thermal Maximum as a Function of Temperature of Acclimation in Two Species of Hylid Frogs
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.41.4.30155478\
          - English
          - Acris_crepitans_pop5
          - Acris_crepitans_pop5_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.779442"
          - "-96.92921"
          - "372"
          - NA
          - August
          - "1966"
          - NA
          - NA
          - Sampling dates were between August 11 and August 23. Coordinates were taken from Rohr et al. 2018
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
          - "14"
          - "1"
          - "5"
          - Animals were acclimated for periods of 3 to 7 days, with most animals having 5-day acclimation periods.
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
          - water
          - "23"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/63
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
          - Tab 4
          - NA
          - NA
          - "40.53"
          - "0.497995984"
          - "15"
          - sd
          - Data was taken from Tab 4 because Rohr et al. 2018 did not report SD. Variance was converted to standard deviation.
      - rowNumber: 1338
        values:
          - "1496"
          - Patrice Pottier
          - Dunlap_1968
          - Critical Thermal Maximum as a Function of Temperature of Acclimation in Two Species of Hylid Frogs
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.41.4.30155478\
          - English
          - Acris_crepitans_pop5
          - Acris_crepitans_pop5_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.779442"
          - "-96.92921"
          - "372"
          - NA
          - August
          - "1966"
          - NA
          - NA
          - Sampling dates were between August 11 and August 23. Coordinates were taken from Rohr et al. 2018
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
          - "5"
          - Animals were acclimated for periods of 3 to 7 days, with most animals having 5-day acclimation periods.
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
          - water
          - "25"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/63
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
          - Tab 4
          - NA
          - NA
          - "41.1"
          - "0.376828874"
          - "10"
          - sd
          - Data was taken from Tab 4 because Rohr et al. 2018 did not report SD. Variance was converted to standard deviation.
      - rowNumber: 1339
        values:
          - "1497"
          - Patrice Pottier
          - Dunlap_1968
          - Critical Thermal Maximum as a Function of Temperature of Acclimation in Two Species of Hylid Frogs
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.41.4.30155478\
          - English
          - Acris_crepitans_pop5
          - Acris_crepitans_pop5_UTL_co4
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.779442"
          - "-96.92921"
          - "372"
          - NA
          - August
          - "1966"
          - NA
          - NA
          - Sampling dates were between August 11 and August 23. Coordinates were taken from Rohr et al. 2018
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
          - "35"
          - "1"
          - "5"
          - Animals were acclimated for periods of 3 to 7 days, with most animals having 5-day acclimation periods.
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
          - water
          - "35"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/63
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
          - Tab 4
          - NA
          - NA
          - "43.24"
          - "0.350713558"
          - "11"
          - sd
          - Data was taken from Tab 4 because Rohr et al. 2018 did not report SD. Variance was converted to standard deviation.
      - rowNumber: 1350
        values:
          - "1508"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co1
          - Data for animals tested at 0130hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.45200698"
          - "0.345478506"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1351
        values:
          - "1509"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co10
          - Data for animals tested at 1730hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.98429319"
          - "0.170958436"
          - "7"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1352
        values:
          - "1510"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co11
          - Data for animals tested at 2030hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.29842932"
          - "0.17452007"
          - "10"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1353
        values:
          - "1511"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co12
          - Data for animals tested at 2130hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.71204188"
          - "0.146026997"
          - "17"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1354
        values:
          - "1512"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co13
          - Data for animals tested at 0130hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/28
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/63
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
          - Fig 1
          - NA
          - NA
          - "42.59685864"
          - "0.178081704"
          - "7"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1355
        values:
          - "1513"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co14
          - Data for animals tested at 0530hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/28
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/63
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
          - Fig 1
          - NA
          - NA
          - "42.52006981"
          - "0.117533925"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1356
        values:
          - "1514"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co15
          - Data for animals tested at 0930hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/28
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/63
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
          - Fig 1
          - NA
          - NA
          - "43.21815009"
          - "0.309862165"
          - "7"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1357
        values:
          - "1515"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co16
          - Data for animals tested at 1300hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/28
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.43804538"
          - "0.284930726"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1358
        values:
          - "1516"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co17
          - Data for animals tested at 1530hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/28
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/63
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
          - Fig 1
          - NA
          - NA
          - "42.05235602"
          - "0.274245824"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1359
        values:
          - "1517"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co18
          - Data for animals tested at 1930hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
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
          - "30"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.7521815"
          - "0.135342095"
          - "6"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1360
        values:
          - "1518"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co19
          - Data for animals tested at 2200hr and acclimated to 30C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
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
          - "30"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/63
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
          - Fig 1
          - NA
          - NA
          - "42.56893543"
          - "0.195889874"
          - "7"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1361
        values:
          - "1519"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co2
          - Data for animals tested at 0530hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.95636998"
          - "0.181643338"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1362
        values:
          - "1520"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co3
          - Data for animals tested at 0930hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.26352531"
          - "0.135342095"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1363
        values:
          - "1521"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co4
          - Data for animals tested at 1300hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.04013962"
          - "0.267122556"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1364
        values:
          - "1522"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co5
          - Data for animals tested at 1700hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
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
          - adults
          - NA
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.54450262"
          - "0.25287602"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1365
        values:
          - "1523"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co6
          - Data for animals tested at 2200hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.94240838"
          - "0.370409944"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1366
        values:
          - "1524"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co7
          - Data for animals tested at 0630hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.65619546"
          - "0.181643338"
          - "8"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1367
        values:
          - "1525"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co8
          - Data for animals tested at 0830hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/63
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
          - Fig 1
          - NA
          - NA
          - "41.03315881"
          - "0.128218827"
          - "10"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1368
        values:
          - "1526"
          - Patrice Pottier
          - Dunlap_1969
          - Evidence for a Daily Rhythm of Heat Resistance in the Cricket Frog, Acris crepitans
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop6
          - Acris_crepitans_pop6_UTL_co9
          - Data for animals tested at 1630hr and acclimated to 4C
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "42.95730789"
          - "-97.10664338"
          - "402"
          - NA
          - NA
          - "1966"
          - August_1966
          - September_1966
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/28
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
          - "4"
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-5 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
          - CTmax
          - other
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/63
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
          - Fig 1
          - NA
          - NA
          - "40.31413613"
          - "0.09616412"
          - "20"
          - se
          - Data was digitised from figure 1. 95% confidence intervals were converted to se by dividing them by 1.96
      - rowNumber: 1743
        values:
          - "1928"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop2
          - Acris_crepitans_pop2_UTL_co1
          - Red morph from Pine Hills
          - Anura
          - Hylidae
          - Acris crepitans
          - red_morph
          - LC
          - wild
          - NA
          - "37.626439"
          - "-89.497874"
          - "117"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "39"
          - "1"
          - "10"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 1744
        values:
          - "1929"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop2
          - Acris_crepitans_pop2_UTL_co2
          - Gray morph from Pine Hills
          - Anura
          - Hylidae
          - Acris crepitans
          - gray_morph
          - LC
          - wild
          - NA
          - "37.626439"
          - "-89.497874"
          - "117"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "39"
          - "0.8"
          - "10"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 1745
        values:
          - "1930"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop2
          - Acris_crepitans_pop2_UTL_co3
          - Green morph from Pine Hills
          - Anura
          - Hylidae
          - Acris crepitans
          - green_morph
          - LC
          - wild
          - NA
          - "37.626439"
          - "-89.497874"
          - "117"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "39.1"
          - "0.9"
          - "10"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 1746
        values:
          - "1931"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop4
          - Acris_crepitans_pop4_UTL_co1
          - Red morph from the Mackinaw River
          - Anura
          - Hylidae
          - Acris crepitans
          - red_morph
          - LC
          - wild
          - NA
          - "40.514203"
          - "-88.990631"
          - "253"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "38.8"
          - "1.2"
          - "20"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 1747
        values:
          - "1932"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop4
          - Acris_crepitans_pop4_UTL_co2
          - Gray morph from the Mackinaw River
          - Anura
          - Hylidae
          - Acris crepitans
          - gray_morph
          - LC
          - wild
          - NA
          - "40.514203"
          - "-88.990631"
          - "253"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "38.8"
          - "1.2"
          - "20"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 1748
        values:
          - "1933"
          - Patrice Pottier
          - Gray_1977
          - Lack of physiological differentiation in three color morphs of the cricket frog Acris crepitans in Illinois
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Acris_crepitans_pop4
          - Acris_crepitans_pop4_UTL_co3
          - Green morph from the Mackinaw River
          - Anura
          - Hylidae
          - Acris crepitans
          - green_morph
          - LC
          - wild
          - NA
          - "40.514203"
          - "-88.990631"
          - "253"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
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
          - "22.5"
          - "0.5"
          - "7"
          - The acclimation_temp was 22-23C so it was taken as 22.5 +/- 0.5
          - adults
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
          - NA
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
          - "39.5"
          - "1.2"
          - "10"
          - sd
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 3858
        values:
          - "4265"
          - Nayelli_Rivera
          - Sauer_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/30/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1098/rspb.2018.1111
          - English
          - Acris_crepitans_pop3
          - Acris_crepitans_pop3_PBT_co1
          - NA
          - Anura
          - Hylidae
          - Acris crepitans
          - NA
          - LC
          - wild
          - NA
          - "40.21243719"
          - "-88.2464625"
          - "221"
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
          - "19.5"
          - NA
          - "14"
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
          - "23.4"
          - "0.43"
          - "18"
          - se
          - NA
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Dunlap_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1086/physzool.41.4.30155478\
        year: "1968"
      - ref: Dunlap_1969
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "1969"
      - ref: Gray_1977
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "1977"
      - ref: Sauer_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
        doi: http://dx.doi.org/10.1098/rspb.2018.1111
        year: "2018"
    selectedEstimateRowNumbers:
      - 378
      - 1336
      - 3858
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 9KKJ
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Acris crepitans — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 378, 1336, 1337, 1338, 1339, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1743, 1744, 1745, 1746, 1747, 1748, 3858; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/63 -->
The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/63 -->
The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/63 -->
The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/63 -->
The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/28 -->
Geographical coordinates were estimated using Google maps, by measuring a point 12 miles North and 9 miles W of Vermillion, Clay County, South Dakota. Elevation was estimated using https://latlongdata.com/elevation/
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/63 -->
SVL was reported as in Rohr et al. 2018 for this species. The endpoint was "the temperature at which no further movements of throat, abdomen, or limbs could be elicited by tapping the container against the wall of the beaker for 10 sec"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/30/values/3 -->
Variation in individual temperature
preferences, not behavioural fever,
affects susceptibility to chytridiomycosis
in amphibians
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
