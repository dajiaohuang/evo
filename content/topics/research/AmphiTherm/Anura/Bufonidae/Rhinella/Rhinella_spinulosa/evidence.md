---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rhinella spinulosa
    name:
      en: Rhinella spinulosa
      zh: Rhinella spinulosa
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
        sourceRowId: "14"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 15
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "208"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 168
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "214"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 174
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
      - rowNumber: 15
        values:
          - "14"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.475556"
          - "-71.321944"
          - "1409"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/28
          - "5.9"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/42
          - adults
          - NA
          - "74.94"
          - "53.67"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "23.34"
          - "2.88"
          - "16"
          - sd
          - NA
      - rowNumber: 16
        values:
          - "15"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.475556"
          - "-71.321944"
          - "1409"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/28
          - "5.9"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/42
          - adults
          - NA
          - "74.94"
          - "53.67"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "21.04"
          - "2.39"
          - "16"
          - sd
          - NA
      - rowNumber: 17
        values:
          - "16"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.303889"
          - "2392"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/28
          - "7.5"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/42
          - adults
          - NA
          - "82.65"
          - "76.67"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "23.16"
          - "2.13"
          - "5"
          - sd
          - NA
      - rowNumber: 18
        values:
          - "17"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.303889"
          - "2392"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/28
          - "7.5"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/42
          - adults
          - NA
          - "82.65"
          - "76.67"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "20.78"
          - "3.92"
          - "5"
          - sd
          - NA
      - rowNumber: 19
        values:
          - "18"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.889517"
          - "-68.214925"
          - "2466"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/28
          - "12.7"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/42
          - adults
          - NA
          - "56.63"
          - "27"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "24.02"
          - "2.23"
          - "10"
          - sd
          - NA
      - rowNumber: 20
        values:
          - "19"
          - Nayelli_Rivera
          - Alveal-Riquelme_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_PBT_co1
          - Animals were sequentially acclimated to different temperatures, hence the shared cohort IDs
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.889517"
          - "-68.214925"
          - "2466"
          - NA
          - NA
          - NA
          - September_2012
          - February_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/28
          - "12.7"
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
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/42
          - adults
          - NA
          - "56.63"
          - "27"
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
          - "6"
          - NA
          - linear
          - "9.27"
          - "30.63"
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
          - "18.15"
          - "2.62"
          - "10"
          - sd
          - NA
      - rowNumber: 168
        values:
          - "208"
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
          - Rhinella_spinulosa_pop2
          - Rhinella_spinulosa_pop2_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-40.81708333"
          - "-71.06316667"
          - "783"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "17.5"
          - NA
          - water_temp is the mean water temperature during the two weeks prior to sampling
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "17.5"
          - "7.5"
          - "4"
          - The acclimation temperature varied between 10 and 25C so it was taken as 12.5 +/- 7.5C
          - larvae
          - "34"
          - "25.5"
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
          - Gosner stage was taken as the mean of the range presented (33-35)
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
          - "37.3"
          - "0.11"
          - "10"
          - se
          - NA
      - rowNumber: 174
        values:
          - "214"
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
          - Rhinella_spinulosa_pop2
          - Rhinella_spinulosa_pop2_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-40.817083"
          - "-71.063167000000007"
          - "783"
          - NA
          - NA
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
          - "17.5"
          - NA
          - "14"
          - Acclimation temperature were fluctuating and the mean of the range provided was taken
          - larvae
          - "34"
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
          - "0.59"
          - "0.05"
          - "10"
          - se
          - NA
      - rowNumber: 3377
        values:
          - "3702"
          - Patrice Pottier
          - Navas_et_al_2010
          - Thermal tolerances in tadpoles of three species of Patagonian anurans
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2994/057.005.0203
          - English
          - Rhinella_spinulosa_pop1
          - Rhinella_spinulosa_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - papillosa
          - LC
          - wild
          - NA
          - "-41.181389"
          - "-71.320556"
          - "899"
          - NA
          - November
          - "2001"
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
          - "32.5"
          - "22"
          - "1"
          - "20"
          - Gosner stage was taken as the mean of the range presented (28-37)
          - larvae
          - NA
          - "75"
          - NA
          - NA
          - unknown
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
          - "38.1"
          - "0.11"
          - "10"
          - sd
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3740
        values:
          - "4087"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.47555556"
          - "-71.31944444"
          - "1409"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "74.94"
          - "53.67"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "36.7"
          - "0.77"
          - "8"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=16)
      - rowNumber: 3741
        values:
          - "4088"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.47555556"
          - "-71.31944444"
          - "1409"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "74.94"
          - "53.67"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "36.8"
          - "0.92"
          - "8"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=16)
      - rowNumber: 3742
        values:
          - "4089"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.30388889"
          - "2392"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "82.65"
          - "76.67"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "36.39"
          - "1.04"
          - "2"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=5)
      - rowNumber: 3743
        values:
          - "4090"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.30388889"
          - "2392"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "82.65"
          - "76.67"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "36.27"
          - "0.5"
          - "2"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=5)
      - rowNumber: 3744
        values:
          - "4091"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.88951667"
          - "-68.214925"
          - "2466"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "56.63"
          - "27"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "37.36"
          - "1.32"
          - "5"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=10)
      - rowNumber: 3745
        values:
          - "4092"
          - Patrice Pottier
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.88951667"
          - "-68.214925"
          - "2466"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Animals were collected in spring and summer of 2012 and 2013
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
          - NA
          - NA
          - adults
          - NA
          - "56.63"
          - "27"
          - NA
          - unknown
          - CTmax
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
          - Tab 3
          - NA
          - NA
          - "38.11"
          - "0.99"
          - "5"
          - sd
          - n_trait was taken as the median of the sample size provided for both acclimation treatments (n=10)
      - rowNumber: 3746
        values:
          - "4093"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.475556"
          - "-71.319444"
          - "1416"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects collected from Antuco, Biobío Región (southern location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "74.94"
          - "53.67"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "10"
          - "0.9834"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-0.93"
          - "0.46"
          - "8"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3747
        values:
          - "4094"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop3
          - Rhinella_spinulosa_pop3_LTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-37.475556"
          - "-71.319444"
          - "1416"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects collected from Antuco, Biobío Región (southern location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "74.94"
          - "53.67"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "1.1623000000000001"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-0.89"
          - "0.71"
          - "8"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3748
        values:
          - "4095"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.303889"
          - "2412"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects collected Farellones, Metropolitana Region (central location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "82.65"
          - "76.67"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "10"
          - "0.9834"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-0.89"
          - "0.47"
          - "2"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3749
        values:
          - "4096"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop4
          - Rhinella_spinulosa_pop4_LTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-33.3575"
          - "-70.303889"
          - "2412"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects colleceted from  Farellones, Metropolitana Region (central location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "82.65"
          - "76.67"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "1.1623000000000001"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-1.03"
          - "0.32"
          - "2"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3750
        values:
          - "4097"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.889517"
          - "-68.214928"
          - "2466"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects collected from Katarpe, Antofagasta Region (northern location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "56.63"
          - "27"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "10"
          - "0.9834"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-1.01"
          - "0.52"
          - "5"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3751
        values:
          - "4098"
          - Sarah Varon
          - Riquelme_et_al_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/3
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
          - English
          - Rhinella_spinulosa_pop8
          - Rhinella_spinulosa_pop8_LTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-22.889517"
          - "-68.214928"
          - "2466"
          - NA
          - NA
          - NA
          - "2012"
          - "2013"
          - Subjects collected from Katarpe, Antofagasta Region (northern location)
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
          - NA
          - Acclimation time not reported
          - adults
          - NA
          - "56.63"
          - "27"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "1.1623000000000001"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-1.16"
          - "0.65"
          - "5"
          - sd
          - The sample size was divided equally between acclimation treatments
      - rowNumber: 3768
        values:
          - "4131"
          - Sarah Varon
          - Rodriguez_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - 10.1086/705122
          - English
          - Rhinella_spinulosa_pop5
          - Rhinella_spinulosa_pop5_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1041"
          - NA
          - NA
          - NA
          - August_2023
          - July_2014
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
          - "1"
          - "4"
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
          - "10"
          - "0.016666667"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-1.6"
          - "0.1"
          - "60"
          - se
          - NA
      - rowNumber: 3831
        values:
          - "4236"
          - Yefeng Yang
          - Sanabria_et_al_2015
          - Thermal ecology of th epost–metamorphic Andean toad (Rhinella spinulosa) at elevation in the monte desert, Argentina
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2015.05.006
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "16.4"
          - "12.7"
          - NA
          - "16"
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "25"
          - "1"
          - "2"
          - NA
          - juveniles
          - NA
          - "15"
          - "0.94"
          - NA
          - unknown
          - CTmax
          - OS
          - water
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
          - NA
          - "36.8"
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
          - "36.9"
          - "0.14"
          - "15"
          - se
          - NA
      - rowNumber: 3832
        values:
          - "4237"
          - Yefeng Yang
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "16"
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
          - "0.15"
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - salinity was converted from ppm to ppt.
          - Fig 4
          - NA
          - NA
          - "34.2"
          - "0.69"
          - "15"
          - se
          - Data was digitised from figure 4.
      - rowNumber: 3833
        values:
          - "4238"
          - Yefeng Yang
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "16"
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
          - "0.63"
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - salinity was converted from ppm to ppt.
          - Fig 4
          - NA
          - NA
          - "36.63934426"
          - "0.786885246"
          - "15"
          - se
          - Data was digitised from figure 4.
      - rowNumber: 3834
        values:
          - "4239"
          - Yefeng Yang
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/25/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_UTL_co3
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "16"
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
          - "1.8"
          - NA
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - salinity was converted from ppm to ppt.
          - Fig 4
          - NA
          - NA
          - "37.67"
          - "0.38"
          - "15"
          - se
          - Data was digitised from figure 4.
      - rowNumber: 3835
        values:
          - "4240"
          - Nayelli_Rivera
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/26/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmin
          - SCP
          - body
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
          - "0.226"
          - "0.24473455"
          - "10"
          - sd
          - NA
      - rowNumber: 3836
        values:
          - "4241"
          - Nayelli_Rivera
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/27/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_LTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmin
          - SCP
          - body
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
          - "-0.751"
          - "1.431326308"
          - "10"
          - sd
          - NA
      - rowNumber: 3837
        values:
          - "4242"
          - Nayelli_Rivera
          - Sanabria_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.03.001
          - English
          - Rhinella_spinulosa_pop6
          - Rhinella_spinulosa_pop6_LTL_co3
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.9044"
          - "-68.7098"
          - "1200"
          - NA
          - May
          - "2013"
          - NA
          - NA
          - NA
          - "15.8"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "16"
          - "2"
          - "5"
          - NA
          - juveniles
          - NA
          - NA
          - "0.43"
          - NA
          - unknown
          - CTmin
          - SCP
          - body
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
          - "-0.915"
          - "2.432513104"
          - "10"
          - sd
          - NA
      - rowNumber: 3848
        values:
          - "4253"
          - Yefeng Yang
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Rhinella_spinulosa_pop7
          - Rhinella_spinulosa_pop7_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.350071"
          - "-68.864736"
          - "1804"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - NA
          - "20.26"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - "0.2"
          - "4"
          - Gosner stage was taken as the mean of the range presented (25-38)
          - larvae
          - NA
          - NA
          - NA
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
          - Tab 2
          - NA
          - NA
          - "37.23"
          - "0.19"
          - "15"
          - se
          - NA
      - rowNumber: 3856
        values:
          - "4261"
          - Sarah Varon
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Rhinella_spinulosa_pop7
          - Rhinella_spinulosa_pop7_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Rhinella spinulosa
          - NA
          - LC
          - wild
          - NA
          - "-31.350071"
          - "-68.864736"
          - "1804"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - La Dehesa stream; permanent stream
          - "20.26"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - "0.2"
          - NA
          - "4"
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - "20"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1"
          - "12"
          - linear
          - "13"
          - "30"
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
          - "23.22"
          - "1.03"
          - "15"
          - se
          - NA
    originalStudyCitations:
      - ref: Alveal-Riquelme_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2015"
      - ref: Bonino_et_al_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
        doi: https://doi.org/10.1016/j.jtherbio.2020.102744
        year: "2020"
      - ref: Navas_et_al_2010
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.2994/057.005.0203
        year: "2010"
      - ref: Riquelme_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: http://dx.doi.org/10.1016/j.jtherbio.2016.07.019
        year: "2016"
      - ref: Rodriguez_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
        doi: 10.1086/705122
        year: "2019"
      - ref: Sanabria_et_al_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: http://dx.doi.org/10.1016/j.jtherbio.2015.05.006
        year: "2015"
      - ref: Sanabria_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/6/title
          format: heading
        doi: https://doi.org/10.1016/j.jtherbio.2018.03.001
        year: "2018"
      - ref: Sanabria_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/7/title
          format: heading
        doi: https://doi.org/10.1111/jzo.12850
        year: "2021"
    selectedEstimateRowNumbers:
      - 15
      - 168
      - 174
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4S7PX
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Rhinella spinulosa — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 15, 16, 17, 18, 19, 20, 168, 174, 3377, 3740, 3741, 3742, 3743, 3744, 3745, 3746, 3747, 3748, 3749, 3750, 3751, 3768, 3831, 3832, 3833, 3834, 3835, 3836, 3837, 3848, 3856; Metadata_AmphiTherm.xlsx
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
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Relaciones entre la fisiología térmica y las características bioclimáticas de Rhinella spinulosa (Anura: Bufonidae) en Chile a través del enlace mecanicista de nicho térmico
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/28 -->
Animals were collected between Spring 2012 and Summer 2013 in Chile so the sampling dates were taken as between September 2012 and February 2013
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/42 -->
Acclimation time was not reported but it is indicated that animals were fed every three days, which suggests an extended period of acclimation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/3 -->
Thermal tolerance in the Andean toad Rhinella spinulosa (Anura: Bufonidae) at three sites located along a latitudinal gradient in Chile
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/3 -->
Adaptation of the Andean Toad Rhinella spinulosa (Anura: Bufonidae)
at Low Temperatures: The Role of Glucose as Cryoprotectant
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/25/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/26/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/27/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/3 -->
Effect of salinity on locomotor performance and thermal extremes of metamorphic Andean Toads (Rhinella spinulosa) from Monte Desert, Argentina
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
