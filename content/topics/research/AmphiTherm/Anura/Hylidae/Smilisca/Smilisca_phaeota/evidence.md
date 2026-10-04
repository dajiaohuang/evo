---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Smilisca phaeota
    name:
      en: Smilisca phaeota
      zh: Smilisca phaeota
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
        sourceRowId: "495"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 416
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1984"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1791
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
      - rowNumber: 416
        values:
          - "495"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Smilisca_phaeota_pop6
          - Smilisca_phaeota_pop6_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "9.907715235"
          - "-83.67998603"
          - "579"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - CostaRica,Turrialba
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
          - "2.8"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 1791
        values:
          - "1984"
          - Nayelli Rivera
          - Gutierrez-Pesquera_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Smilisca_phaeota_pop5
          - Smilisca_phaeota_pop5_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - unclear
          - NA
          - "1.1653"
          - "-78.7527"
          - "250"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/28
          - NA
          - NA
          - "28.5"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "2.5"
          - Acclimation time was taken as the mean of the range presented (2-3 days).
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
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
          - Tab 1 (appendix)
          - NA
          - NA
          - "42.6"
          - "0.2"
          - "35"
          - se
          - NA
      - rowNumber: 1810
        values:
          - "2004"
          - Nayelli_Rivera
          - Gutierrez-Pesquera_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Smilisca_phaeota_pop3
          - Smilisca_phaeota_pop3_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - unclear
          - NA
          - "1.0419"
          - "-78.6241"
          - "250"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/28
          - NA
          - NA
          - "28.5"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "2.5"
          - Acclimation time was taken as the mean of the range presented (2-3 days).
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
          - NA
          - NA
          - "7.7"
          - "0.1"
          - "57"
          - se
          - NA
      - rowNumber: 1871
        values:
          - "2066"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "3"
          - Altitudinal variation of the critical thermal limits in 20 species of tadpoles in the tropical Andes
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop4
          - Smilisca_phaeota_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.1653"
          - "-78.7527"
          - "24"
          - NA
          - NA
          - NA
          - June_2014
          - April_2015
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
          - "31.5"
          - "20"
          - NA
          - "3.5"
          - Animals were acclimated for 3-4 days
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
          - Gosner stage was taken as the mean of the range presented.
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
          - "7.7"
          - "0.1"
          - "57"
          - se
          - NA
      - rowNumber: 1911
        values:
          - "2109"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co1
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "41.3"
          - "0.2"
          - "6"
          - se
          - NA
      - rowNumber: 1912
        values:
          - "2110"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co2
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "41.5"
          - "0.2"
          - "8"
          - se
          - NA
      - rowNumber: 1913
        values:
          - "2111"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co3
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "41.9"
          - "0.2"
          - "7"
          - se
          - NA
      - rowNumber: 1914
        values:
          - "2112"
          - Jose O. Valdebenito
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co4
          - Population ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location.
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "33.8"
          - "0.3"
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
          - "43.8"
          - "0.1"
          - "7"
          - se
          - NA
      - rowNumber: 1954
        values:
          - "2155"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "6.8"
          - "0.4"
          - "6"
          - se
          - NA
      - rowNumber: 1955
        values:
          - "2156"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "7.3"
          - "0.3"
          - "7"
          - se
          - NA
      - rowNumber: 1956
        values:
          - "2157"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "7.5"
          - "0.2"
          - "8"
          - se
          - NA
      - rowNumber: 1957
        values:
          - "2158"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "4"
          - Acclimation of critical thermal limits in temperate and tropical tadpoles
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co4
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0363"
          - "-78.6196"
          - "20"
          - NA
          - NA
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
          - "33.8"
          - "0.3"
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
          - "8.3"
          - "0.4"
          - "6"
          - se
          - NA
      - rowNumber: 2827
        values:
          - "3136"
          - Jose O. Valdebenito
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
          - NA
          - NA
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
          - "20"
          - NA
          - "3"
          - Note that some individuals were acclimated from the embryonic stage until reaching the designated Gosner stage
          - larvae
          - "33"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - NA
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
          - Gosner stage was taken as the mean of the range presented (30-36)
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab A
          - NA
          - NA
          - "44"
          - "0.4"
          - "8"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 2828
        values:
          - "3137"
          - Jose O. Valdebenito
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
          - NA
          - NA
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
          - "20"
          - NA
          - "3"
          - Note that some individuals were acclimated from the embryonic stage until reaching the designated Gosner stage
          - metamorphs
          - "43.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - NA
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab A
          - NA
          - NA
          - "36.4"
          - "0.4"
          - "12"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/83
      - rowNumber: 2829
        values:
          - "3138"
          - Jose O. Valdebenito
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
          - NA
          - NA
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
          - "20"
          - NA
          - "3"
          - Note that some individuals were acclimated from the embryonic stage until reaching the designated Gosner stage
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - NA
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab A
          - NA
          - NA
          - "36"
          - "0.4"
          - "14"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/14/values/83
      - rowNumber: 2833
        values:
          - "3142"
          - Sarah Varon
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/15/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
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
          - larvae
          - "33"
          - "20"
          - NA
          - "3"
          - NA
          - larvae
          - "33"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - NA
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
          - "8.44"
          - "0.3"
          - "10"
          - se
          - NA
      - rowNumber: 2834
        values:
          - "3143"
          - Sarah Varon
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
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
          - metamorphs
          - "44"
          - "20"
          - NA
          - "3"
          - NA
          - metamorphs
          - "43.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - NA
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
          - "8.42"
          - "0.3"
          - "14"
          - se
          - NA
      - rowNumber: 2835
        values:
          - "3144"
          - Sarah Varon
          - Lopez-Rosero_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop2
          - Smilisca_phaeota_pop2_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.0374"
          - "-78.6221"
          - "120"
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
          - "46"
          - "20"
          - NA
          - "3"
          - NA
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - NA
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
          - "6.9"
          - "0.3"
          - "14"
          - se
          - NA
      - rowNumber: 3006
        values:
          - "3320"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
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
          - "41.29776248"
          - "0.449865627"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/83
      - rowNumber: 3007
        values:
          - "3321"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
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
          - "41.56110155"
          - "0.399880557"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/83
      - rowNumber: 3008
        values:
          - "3322"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
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
          - "41.96385542"
          - "0.274917883"
          - "10"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/83
      - rowNumber: 3009
        values:
          - "3323"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_UTL_co4
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
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
          - "33.8"
          - "0.3"
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
          - "43.76075731"
          - "0.438047203"
          - "12"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/83
      - rowNumber: 3063
        values:
          - "3380"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"tropical" location'
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
          - "7.2"
          - "0.61"
          - "10"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/83
      - rowNumber: 3064
        values:
          - "3381"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"tropical" location'
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
          - "7.54"
          - "0.34"
          - "7"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/83
      - rowNumber: 3065
        values:
          - "3382"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Smilisca_phaeota_pop1
          - Smilisca_phaeota_pop1_LTL_co3
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.036"
          - "-78.6196"
          - "20"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"tropical" location'
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
          - "33.9"
          - "0.3"
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
          - "8.22"
          - "1.23"
          - "7"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/83
      - rowNumber: 3666
        values:
          - "4006"
          - Rachel Oh
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Smilisca_phaeota_pop3
          - Smilisca_phaeota_pop3_UTL_co1
          - population_ID was taken as the same as in Madalozzo (2018) because animals were collected in the same location
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.03"
          - "-78.62"
          - "242"
          - NA
          - NA
          - NA
          - November_2014
          - August_2016
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
          - "25"
          - "20"
          - NA
          - "3"
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
          - Tab S2
          - NA
          - NA
          - "42.5"
          - "0.1"
          - "2"
          - se
          - NA
      - rowNumber: 3682
        values:
          - "4023"
          - Natalie_Claunch
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Smilisca_phaeota_pop3
          - Smilisca_phaeota_pop3_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Smilisca phaeota
          - NA
          - LC
          - wild
          - NA
          - "1.03"
          - "-78.62"
          - "242"
          - NA
          - NA
          - NA
          - November_2014
          - August_2016
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
          - "38"
          - "20"
          - NA
          - "3"
          - Animals were acclimated for at least 3 days
          - larvae
          - "38"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
          - water
          - NA
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
          - "5.14"
          - "0.1"
          - "5"
          - se
          - Data was taken from supplementary tables
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Gutierrez-Pesquera_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2015"
      - ref: Gutierrez-Pesquera_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "2016"
      - ref: Lopez-Rosero_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2015"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Pintanel_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: 10.1111/1365-2656.13516
        year: "2021"
    selectedEstimateRowNumbers:
      - 416
      - 1791
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4XWY7
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Smilisca phaeota — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 416, 1791, 1810, 1871, 1911, 1912, 1913, 1914, 1954, 1955, 1956, 1957, 2827, 2828, 2829, 2833, 2834, 2835, 3006, 3007, 3008, 3009, 3063, 3064, 3065, 3666, 3682; Metadata_AmphiTherm.xlsx
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
Una valoración macrofisiológica de la vulnerabilidad al calentamiento global. Análisis de los límites de tolerancia térmica en comunidades de anfibios en gradientes latitudinales y altitudinales
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/28 -->
It is specified that some species were obtained from a local lab and the rest of the species were sampled in ponds (it does not say which species were from the local lab or ponds).  All species report coordinates from the ponds where they can be found (except one), but I cannot assure whether the origin was from a lab or wild
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Una valoración macrofisiológica de la vulnerabilidad al calentamiento global. Análisis de los límites de tolerancia térmica en comunidades de anfibios en gradientes latitudinales y altitudinales
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/28 -->
It is specified that some species were obtained from a local lab and the rest of the species were sampled in ponds (it does not say which species were from the local lab or ponds).  All species report coordinates from the ponds where they can be found (except one), but I cannot assure whether the origin was from a lab or wild
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
It was unclear whether standard deviations of standard errors were presented. It was assumed to be SD based on visual inspections of the data.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/83 -->
It was unclear whether standard deviations of standard errors were presented. It was assumed to be SD based on visual inspections of the data.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/14/values/83 -->
It was unclear whether standard deviations of standard errors were presented. It was assumed to be SD based on visual inspections of the data.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/15/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/3 -->
Ontogenetic variation of thermal tolerance in two anuran species of Ecuador: Gastrotheca pseustes (Hemiphractidae) and Smilisca phaeota (Hylidae) and their relative vulnerability to environmental temperature change
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
