---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Salamandra salamandra
    name:
      en: Salamandra salamandra
      zh: Salamandra salamandra
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
        sourceRowId: "154"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 136
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1486"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1328
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2314"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 2108
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
      order: Caudata
      family: Salamandridae
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
      - rowNumber: 136
        values:
          - "154"
          - Ana Longo
          - Beukema_et_al_2021
          - Microclimate limits thermal behaviour favourable to disease control in a nocturnal amphibian
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/ele.13616
          - English
          - Salamandra_salamandra_pop4
          - Salamandra_salamandra_pop4_PBT_co1
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "50.95"
          - "3.72"
          - "50"
          - NA
          - NA
          - NA
          - September_2016
          - May_2019
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - juveniles
          - NA
          - "50"
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
          - "0"
          - "35"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - published_data
          - https://doi.org/10.5061/dryad.8gtht76ms
          - NA
          - "20.38835"
          - "1.1709842"
          - "10"
          - se
          - The mean preferred temperature was calculated as the weighted mean and se among observations and individuals
      - rowNumber: 137
        values:
          - "155"
          - Ana Longo
          - Beukema_et_al_2021
          - Microclimate limits thermal behaviour favourable to disease control in a nocturnal amphibian
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/ele.13616
          - English
          - Salamandra_salamandra_pop5
          - Salamandra_salamandra_pop5_PBT_co1
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - juveniles
          - NA
          - "15"
          - NA
          - "120"
          - NA
          - juveniles
          - NA
          - "50"
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
          - "0"
          - "35"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "19.41"
          - "3.97"
          - "10"
          - se
          - NA
      - rowNumber: 138
        values:
          - "157"
          - Ana Longo
          - Beukema_et_al_2021
          - Microclimate limits thermal behaviour favourable to disease control in a nocturnal amphibian
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/ele.13616
          - English
          - Salamandra_salamandra_pop5
          - Salamandra_salamandra_pop5_PBT_co3
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - juveniles
          - NA
          - "15"
          - NA
          - "120"
          - NA
          - juveniles
          - NA
          - "50"
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
          - "0"
          - "35"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "18.69"
          - "4.15"
          - "10"
          - se
          - NA
      - rowNumber: 139
        values:
          - "159"
          - Ana Longo
          - Beukema_et_al_2021
          - Microclimate limits thermal behaviour favourable to disease control in a nocturnal amphibian
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/ele.13616
          - English
          - Salamandra_salamandra_pop5
          - Salamandra_salamandra_pop5_PBT_co5
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - juveniles
          - NA
          - "15"
          - NA
          - "120"
          - NA
          - juveniles
          - NA
          - "50"
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
          - "0"
          - "35"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "19.69"
          - "3.56"
          - "5"
          - se
          - NA
      - rowNumber: 1328
        values:
          - "1486"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Salamandra_salamandra_pop1
          - Salamandra_salamandra_pop1_UTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
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
          - "190"
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
          - "36.6"
          - "0.1"
          - "10"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 2063
        values:
          - "2267"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Salamandra_salamandra_pop2
          - Salamandra_salamandra_pop2_UTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "37.9175"
          - "-6.569"
          - "653"
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
          - "35.3"
          - "0.49"
          - "16"
          - sd
          - NA
      - rowNumber: 2108
        values:
          - "2314"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Salamandra_salamandra_pop2
          - Salamandra_salamandra_pop2_LTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "37.9175"
          - "-6.569"
          - "658"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "13.33"
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
          - "-0.9"
          - "0.47"
          - "16"
          - sd
          - NA
      - rowNumber: 3120
        values:
          - "3437"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/6
          - not_peer-reviewed
          - NA
          - English
          - Salamandra_salamandra_pop2
          - Salamandra_salamandra_pop2_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/12
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "37.9175"
          - "-6.569"
          - "653"
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
          - "34.82"
          - "0.37"
          - "20"
          - sd
          - NA
      - rowNumber: 3121
        values:
          - "3438"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/6
          - not_peer-reviewed
          - NA
          - English
          - Salamandra_salamandra_pop2
          - Salamandra_salamandra_pop2_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/12
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "37.9175"
          - "-6.569"
          - "653"
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
          - "36.59"
          - "0.36"
          - "12"
          - sd
          - NA
      - rowNumber: 3546
        values:
          - "3871"
          - Sarah Varon
          - Piasecna_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2015.06.007
          - English
          - Salamandra_salamandra_pop3
          - Salamandra_salamandra_pop3_PBT_co1
          - The same data was presented in two different ways, hence the shared cohort IDs
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "49.628889"
          - "18.223611"
          - "350"
          - NA
          - May
          - "2011"
          - NA
          - NA
          - Subjects collected from pool
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
          - "18"
          - NA
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/42
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
          - "0.5"
          - linear
          - "7"
          - "28"
          - NA
          - NA
          - NA
          - NA
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
          - "22.28"
          - "0.65"
          - "18"
          - se
          - upper boundary
      - rowNumber: 3547
        values:
          - "3872"
          - Sarah Varon
          - Piasecna_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2015.06.007
          - English
          - Salamandra_salamandra_pop3
          - Salamandra_salamandra_pop3_PBT_co1
          - The same data was presented in two different ways, hence the shared cohort IDs
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "49.628889"
          - "18.223611"
          - "350"
          - NA
          - May
          - "2011"
          - NA
          - NA
          - Subjects collected from pool
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
          - "18"
          - NA
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/42
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
          - "0.5"
          - linear
          - "7"
          - "28"
          - NA
          - NA
          - NA
          - NA
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
          - "15.76"
          - "1.57"
          - "18"
          - se
          - lower boundary
      - rowNumber: 3548
        values:
          - "3873"
          - Sarah Varon
          - Piasecna_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2015.06.007
          - English
          - Salamandra_salamandra_pop3
          - Salamandra_salamandra_pop3_PBT_co2
          - The same data was presented in two different ways, hence the shared cohort IDs
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "49.628889"
          - "18.223611"
          - "350"
          - NA
          - May
          - "2011"
          - NA
          - NA
          - Subjects collected from well
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
          - "18"
          - NA
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/42
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
          - "0.5"
          - linear
          - "7"
          - "28"
          - NA
          - NA
          - NA
          - NA
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
          - "22.48"
          - "0.39"
          - "18"
          - se
          - upper boundary
      - rowNumber: 3549
        values:
          - "3874"
          - Sarah Varon
          - Piasecna_et_al_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2015.06.007
          - English
          - Salamandra_salamandra_pop3
          - Salamandra_salamandra_pop3_PBT_co2
          - The same data was presented in two different ways, hence the shared cohort IDs
          - Caudata
          - Salamandridae
          - Salamandra salamandra
          - NA
          - LC
          - wild
          - NA
          - "49.628889"
          - "18.223611"
          - "350"
          - NA
          - May
          - "2011"
          - NA
          - NA
          - Subjects collected from well
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
          - "18"
          - NA
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/42
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10"
          - "0.5"
          - linear
          - "7"
          - "28"
          - NA
          - NA
          - NA
          - NA
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
          - "17.2"
          - "1.76"
          - "18"
          - se
          - lower boundary
    originalStudyCitations:
      - ref: Beukema_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1111/ele.13616
        year: "2021"
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Piasecna_et_al_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
        doi: http://dx.doi.org/10.1016/j.jtherbio.2015.06.007
        year: "2015"
    selectedEstimateRowNumbers:
      - 136
      - 1328
      - 2108
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6XB2G
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Salamandra salamandra — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 136, 137, 138, 139, 1328, 2063, 2108, 3120, 3121, 3546, 3547, 3548, 3549; Metadata_AmphiTherm.xlsx
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

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
Thermoregulatory strategies in an aquatic ectotherm
from thermally-constrained habitats: An evaluation of current
approaches
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/42 -->
Animals were maintained in laboratory conditions for at least one week, but the exact temperature was not specified. It was taken as the room temperature
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Thermoregulatory strategies in an aquatic ectotherm
from thermally-constrained habitats: An evaluation of current
approaches
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/42 -->
Animals were maintained in laboratory conditions for at least one week, but the exact temperature was not specified. It was taken as the room temperature
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/3 -->
Thermoregulatory strategies in an aquatic ectotherm
from thermally-constrained habitats: An evaluation of current
approaches
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/42 -->
Animals were maintained in laboratory conditions for at least one week, but the exact temperature was not specified. It was taken as the room temperature
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
Thermoregulatory strategies in an aquatic ectotherm
from thermally-constrained habitats: An evaluation of current
approaches
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/42 -->
Animals were maintained in laboratory conditions for at least one week, but the exact temperature was not specified. It was taken as the room temperature
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
