---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Odontophrynus americanus
    name:
      en: Odontophrynus americanus
      zh: Odontophrynus americanus
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
        sourceRowId: "3199"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2888
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4214"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3809
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4217"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 3812
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
      family: Odontophrynidae
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
      - rowNumber: 2888
        values:
          - "3199"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2018"
          - "1"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/6
          - not_peer-reviewed
          - NA
          - English
          - Odontophrynus_americanus_pop6
          - Odontophrynus_americanus_pop6_UTL_co1
          - Note that data for some species was already presented in Gutiérrez-Pesquera et al 2016
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
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
          - November_2014
          - March_2017
          - Geographical coordinates were not reported because too approximate (i.e. "Rio Grande do Sul state, 28-32°S")
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
          - Tab 1A
          - NA
          - NA
          - "43.58"
          - NA
          - "15"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 3092
        values:
          - "3409"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/6
          - not_peer-reviewed
          - NA
          - English
          - Odontophrynus_americanus_pop6
          - Odontophrynus_americanus_pop6_UTL_co2
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
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
          - November_2014
          - March_2017
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
          - "38.34"
          - "0.45"
          - "21"
          - sd
          - NA
      - rowNumber: 3093
        values:
          - "3410"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/6
          - not_peer-reviewed
          - NA
          - English
          - Odontophrynus_americanus_pop6
          - Odontophrynus_americanus_pop6_UTL_co3
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
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
          - November_2014
          - March_2017
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
          - "38.17"
          - "0.27"
          - "21"
          - sd
          - NA
      - rowNumber: 3809
        values:
          - "4214"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_LTL_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - OS
          - water
          - "15"
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
          - Complete darkness
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
          - text
          - NA
          - NA
          - "2.09"
          - "0.11"
          - "20"
          - se
          - NA
      - rowNumber: 3810
        values:
          - "4215"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_LTL_co2
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - OS
          - water
          - "15"
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
          - Light/dark
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
          - "2.36"
          - "0.12"
          - "20"
          - se
          - NA
      - rowNumber: 3811
        values:
          - "4216"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_LTL_co3
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - OS
          - water
          - "15"
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
          - Complete light
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
          - text
          - NA
          - NA
          - "2.62"
          - "0.12"
          - "20"
          - se
          - NA
      - rowNumber: 3812
        values:
          - "4217"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_PBT_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
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
          - "2"
          - "12"
          - linear
          - "13"
          - "30"
          - Complete darkness
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
          - text
          - NA
          - NA
          - "16.2"
          - "0.9"
          - "10"
          - se
          - NA
      - rowNumber: 3813
        values:
          - "4218"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_PBT_co2
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
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
          - "2"
          - "12"
          - linear
          - "13"
          - "30"
          - Light/dark
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
          - "21.8"
          - "0.45"
          - "10"
          - se
          - NA
      - rowNumber: 3814
        values:
          - "4219"
          - Sarah Varon
          - Sanabria_and_Quiroga_2011b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/j.jtherbio.2011.04.002
          - English
          - Odontophrynus_americanus_pop2
          - Odontophrynus_americanus_pop2_PBT_co3
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.527273"
          - "-68.521408"
          - "800"
          - NA
          - NA
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
          - "15"
          - "2"
          - "15"
          - NA
          - larvae
          - "37.5"
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
          - "2"
          - "12"
          - linear
          - "13"
          - "30"
          - complete light
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
          - text
          - NA
          - NA
          - "23.08"
          - "0.59"
          - "10"
          - se
          - NA
      - rowNumber: 3821
        values:
          - "4226"
          - Nayelli_Rivera
          - Sanabria_et_al_2012b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - 10.1002/jez.1712
          - English
          - Odontophrynus_americanus_pop3
          - Odontophrynus_americanus_pop3_PBT_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.516667"
          - "-67.85"
          - "800"
          - NA
          - NA
          - NA
          - December_2008
          - March_2009
          - The sampling range corresponds to the wet season
          - NA
          - NA
          - NA
          - "20.9"
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
          - adults
          - NA
          - "5.79"
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
          - "9"
          - "1"
          - linear
          - "8"
          - "50"
          - NA
          - NA
          - NA
          - NA
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
          - "25.73"
          - "0.68"
          - NA
          - se
          - Sample sizes were not reported
      - rowNumber: 3822
        values:
          - "4227"
          - Nayelli_Rivera
          - Sanabria_et_al_2012b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/3
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - 10.1002/jez.1712
          - English
          - Odontophrynus_americanus_pop3
          - Odontophrynus_americanus_pop3_PBT_co2
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.516667"
          - "-67.85"
          - "800"
          - NA
          - NA
          - "2009"
          - April_2009
          - November_2009
          - The sampling range corresponds to the dry season
          - NA
          - NA
          - NA
          - "15.7"
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
          - adults
          - NA
          - "5.79"
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
          - "9"
          - "1"
          - linear
          - "8"
          - "50"
          - NA
          - NA
          - NA
          - NA
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
          - "21"
          - "0.68"
          - NA
          - se
          - Sample sizes were not reported
      - rowNumber: 3825
        values:
          - "4230"
          - Natalie_Claunch
          - Sanabria_et_al_2013a
          - "Seasonal Changes in the Thermal Tolerances of Odontophrynus occidentalis (Berg, 1896) (Anura: Cycloramphidae)"
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Odontophrynus_americanus_pop1
          - Odontophrynus_americanus_pop1_LTL_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.70079"
          - "-68.09506"
          - "587"
          - NA
          - NA
          - NA
          - December_2008
          - March_2009
          - wet season
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
          - NA
          - "5"
          - 2 days of acclimation before CTmax + 3 days after Ctmax
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
          - CTmin was measured 72h after Ctmax
          - NA
          - NA
          - NA
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
          - "4.9"
          - "0.1"
          - "16"
          - se
          - CTmin was measured 72h after Ctmax
      - rowNumber: 3826
        values:
          - "4231"
          - Natalie_Claunch
          - Sanabria_et_al_2013a
          - "Seasonal Changes in the Thermal Tolerances of Odontophrynus occidentalis (Berg, 1896) (Anura: Cycloramphidae)"
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Odontophrynus_americanus_pop1
          - Odontophrynus_americanus_pop1_LTL_co2
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.70079"
          - "-68.09506"
          - "587"
          - NA
          - NA
          - NA
          - April_2009
          - October_2009
          - dry season
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
          - NA
          - "5"
          - 2 days of acclimation before CTmax + 3 days after Ctmax
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
          - CTmin was measured 72h after Ctmax
          - NA
          - NA
          - NA
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
          - "4.1"
          - "0.4"
          - "9"
          - se
          - CTmin was measured 72h after Ctmax
      - rowNumber: 3849
        values:
          - "4254"
          - Sarah Varon
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Odontophrynus_americanus_pop4
          - Odontophrynus_americanus_pop4_PBT_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-31.02266"
          - "-67.297537"
          - "875"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - La Mesada river; permanent stream
          - "22.02"
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
          - "17.74"
          - "0.73"
          - "15"
          - se
          - NA
      - rowNumber: 3850
        values:
          - "4255"
          - Sarah Varon
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Odontophrynus_americanus_pop5
          - Odontophrynus_americanus_pop5_PBT_co1
          - NA
          - Anura
          - Odontophrynidae
          - Odontophrynus americanus
          - NA
          - LC
          - wild
          - NA
          - "-30.012215"
          - "-68.752389"
          - "1497"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - Huerta de Huachi stream; permanent stream
          - "22.17"
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
          - "21.13"
          - "0.65"
          - "15"
          - se
          - NA
    originalStudyCitations:
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Sanabria_and_Quiroga_2011b
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1016/j.jtherbio.2011.04.002
        year: "2011"
      - ref: Sanabria_et_al_2012b
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: 10.1002/jez.1712
        year: "2012"
      - ref: Sanabria_et_al_2013a
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2013"
      - ref: Sanabria_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: https://doi.org/10.1111/jzo.12850
        year: "2021"
    selectedEstimateRowNumbers:
      - 2888
      - 3809
      - 3812
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 48R2W
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Odontophrynus americanus — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 2888, 3092, 3093, 3809, 3810, 3811, 3812, 3813, 3814, 3821, 3822, 3825, 3826, 3849, 3850; Metadata_AmphiTherm.xlsx
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
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/6 -->
Latitudinal variation of thermal tolerance limits and vulnerability to extreme temperatures in amphibians: the effects of microhabitats, seasonality and phylogeny
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
n_trait was taken as 15 because authors state that they "analyzed a minimum of 15 individuals for all 60 species for each thermal tolerance limit". However, note that this may be an overestimate in some casesbecause they also state that "for some species we study a reduced sample because shortage of field collected tadpoles".
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
Change in the thermal biology of tadpoles of Odontophrynus occidentalis from the Monte desert, Argentina: Responses to photoperiod
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
Variation in the thermal parameters of Odontophrynus occidentalis in the Monte Desert, Argentina: Response to the Environmental Constraints
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/3 -->
Variation in the thermal parameters of Odontophrynus occidentalis in the Monte Desert, Argentina: Response to the Environmental Constraints
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
