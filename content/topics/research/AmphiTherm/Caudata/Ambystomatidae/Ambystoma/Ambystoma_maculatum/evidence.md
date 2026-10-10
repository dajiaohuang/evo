---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Ambystoma maculatum
    name:
      en: Ambystoma maculatum
      zh: Ambystoma maculatum
    checkedAt: 2026-10-02
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
        sourceRowId: "1865"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1682
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2879"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2609
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
      family: Ambystomatidae
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
      - rowNumber: 1682
        values:
          - "1865"
          - Patrice Pottier
          - Gatz_1971
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "1971"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop5
          - Ambystoma_maculatum_pop5_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "40.2025"
          - "-77.195"
          - "422"
          - 11/04/1969
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
          - "11"
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
          - "7"
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - mixed
          - CTmax
          - LOE
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Tab 1
          - NA
          - NA
          - "32.34"
          - "0.583095189"
          - "12"
          - sd
          - Data was taken from Tab 1 because Rohr et al. 2018 did not report SD. Variance was converted to SD.
      - rowNumber: 1683
        values:
          - "1866"
          - Patrice Pottier
          - Gatz_1971
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "1971"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop5
          - Ambystoma_maculatum_pop5_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "40.2025"
          - "-77.195"
          - "422"
          - 11/04/1969
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018
          - "11"
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
          - "7"
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - mixed
          - CTmax
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Tab 1
          - NA
          - NA
          - "34.85"
          - "0.574456265"
          - "12"
          - sd
          - Data was taken from Tab 1 because Rohr et al. 2018 did not report SD. Variance was converted to SD.
      - rowNumber: 1684
        values:
          - "1867"
          - Patrice Pottier
          - Gatz_1973
          - Intraspecific variations in critical thermal maxima of Ambystoma maculatum
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop2
          - Ambystoma_maculatum_pop2_UTL_co1
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "36.026302"
          - "-79.10969"
          - "193"
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
          - "13"
          - "1"
          - NA
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - male
          - CTmax
          - other
          - water
          - "13"
          - "0.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. The endpoint was the onset of heat coma.
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
          - Tab 2
          - NA
          - NA
          - "35.8"
          - "0.3"
          - "31"
          - sd
          - Data was taken from Tab 1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 1685
        values:
          - "1868"
          - Patrice Pottier
          - Gatz_1973
          - Intraspecific variations in critical thermal maxima of Ambystoma maculatum
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop3
          - Ambystoma_maculatum_pop3_UTL_co1
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "36.02218"
          - "-78.903128"
          - "111"
          - 12/02/1971
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
          - "13"
          - "1"
          - NA
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - male
          - CTmax
          - other
          - water
          - "13"
          - "0.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. The endpoint was the onset of heat coma.
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
          - Tab 2
          - NA
          - NA
          - "35.4"
          - "0.4"
          - "52"
          - sd
          - Data was taken from Tab 1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 1686
        values:
          - "1869"
          - Patrice Pottier
          - Gatz_1973
          - Intraspecific variations in critical thermal maxima of Ambystoma maculatum
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop5
          - Ambystoma_maculatum_pop5_UTL_co1
          - The individuals tested were considered as originating from the same population as in st27
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "40.2025"
          - "-77.195"
          - "422"
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
          - "13"
          - "1"
          - NA
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - male
          - CTmax
          - other
          - water
          - "13"
          - "0.7"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. The endpoint was the onset of heat coma.
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
          - Tab 2
          - NA
          - NA
          - "35.5"
          - "0.3"
          - "27"
          - sd
          - Data was taken from Tab 1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 2247
        values:
          - "2473"
          - Patrice Pottier
          - Hutchison_1961
          - Critical Thermal Maxima in Salamanders
          - "1961"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop3
          - Ambystoma_maculatum_pop3_UTL_co1
          - Population from Durham, North Carolina
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "35.994033"
          - "-78.898619"
          - "111"
          - NA
          - February
          - "1957"
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
          - "20"
          - "0.2"
          - "30"
          - NA
          - adults
          - NA
          - "154"
          - NA
          - NA
          - mixed
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Fig 18
          - NA
          - NA
          - "37.20943678"
          - NA
          - "4"
          - NA
          - Data was digitised from figure because SD was not reported in Rohr et al. 2018.
      - rowNumber: 2609
        values:
          - "2879"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co1
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
          - NA
          - NA
          - NA
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
          - larvae
          - NA
          - "23.6"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
          - NA
          - NA
          - NA
          - NA
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
          - "23.04049844"
          - "4.585669782"
          - "10"
          - sd
          - NA
      - rowNumber: 2610
        values:
          - "2880"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co10
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "5"
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "26"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "14.66666667"
          - "4.087227414"
          - "10"
          - sd
          - NA
      - rowNumber: 2611
        values:
          - "2881"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co11
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "5"
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "17.3"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "23.23987539"
          - "6.479750779"
          - "10"
          - sd
          - NA
      - rowNumber: 2612
        values:
          - "2882"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co2
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "5"
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "14.3"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "17.85669782"
          - "4.087227414"
          - "10"
          - sd
          - NA
      - rowNumber: 2613
        values:
          - "2883"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co3
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "5"
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "9.8"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "15.56386293"
          - "5.881619938"
          - "10"
          - sd
          - NA
      - rowNumber: 2614
        values:
          - "2884"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co4
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
          - NA
          - NA
          - NA
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
          - larvae
          - NA
          - "13.8"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
          - NA
          - NA
          - NA
          - NA
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
          - "23.04049844"
          - "4.685358255"
          - "10"
          - sd
          - NA
      - rowNumber: 2615
        values:
          - "2885"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co5
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
          - NA
          - NA
          - NA
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
          - larvae
          - NA
          - "10.2"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
          - NA
          - NA
          - NA
          - NA
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
          - "23.04049844"
          - "2.791277259"
          - "10"
          - sd
          - NA
      - rowNumber: 2616
        values:
          - "2886"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co6
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "24.7"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "21.64485981"
          - "5.781931464"
          - "10"
          - sd
          - NA
      - rowNumber: 2617
        values:
          - "2887"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co7
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "18.7"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "24.63551402"
          - "4.485981308"
          - "10"
          - sd
          - NA
      - rowNumber: 2618
        values:
          - "2888"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co8
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "15.8"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "25.8317757"
          - "6.180685358"
          - "10"
          - sd
          - NA
      - rowNumber: 2619
        values:
          - "2889"
          - Natalie_Claunch
          - Keen_and_Schroeder_1975
          - Temperature Selection and Tolerance in Three Species of Ambystoma Larvae
          - "1975"
          - NA
          - NA
          - peer-reviewed
          - https://www.jstor.org/stable/1443653
          - English
          - Ambystoma_maculatum_pop4
          - Ambystoma_maculatum_pop4_PBT_co9
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "37.70669631"
          - "-84.2831249"
          - "296"
          - NA
          - March
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
          - "1"
          - "9"
          - NA
          - larvae
          - NA
          - "10.8"
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
          - "4"
          - "1"
          - linear
          - "3"
          - "36"
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
          - "19.25233645"
          - "3.887850467"
          - "10"
          - sd
          - NA
      - rowNumber: 3304
        values:
          - "3622"
          - PPollo
          - Messerman_2019
          - "Tales of an ‘invisible’ life stage: survival and physiology among terrestrial juvenile ambystomatid salamanders"
          - "2019"
          - "4"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/6
          - not_peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop12
          - Ambystoma_maculatum_pop12_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/12
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
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
          - Geographical coordinates are not reported because animals were colllected in three different counties
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
          - "19"
          - "3"
          - "28"
          - NA
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "28"
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
          - Fig 5
          - NA
          - NA
          - "34.77777778"
          - "0.907407407"
          - "17"
          - sd
          - Data was digitised from figure 5.
      - rowNumber: 3305
        values:
          - "3623"
          - PPollo
          - Messerman_2019
          - "Tales of an ‘invisible’ life stage: survival and physiology among terrestrial juvenile ambystomatid salamanders"
          - "2019"
          - "4"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/6
          - not_peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop12
          - Ambystoma_maculatum_pop12_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/12
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
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
          - Geographical coordinates are not reported because animals were colllected in three different counties
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
          - "27"
          - "3"
          - "42"
          - The acclimation temperature fluctuated between 25 and 29C with an average of 27C
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "28"
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
          - Fig 5
          - NA
          - NA
          - "36.09259259"
          - "0.666666667"
          - "10"
          - sd
          - Data was digitised from figure 5.
      - rowNumber: 3306
        values:
          - "3624"
          - PPollo
          - Messerman_2019
          - "Tales of an ‘invisible’ life stage: survival and physiology among terrestrial juvenile ambystomatid salamanders"
          - "2019"
          - "4"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/6
          - not_peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop12
          - Ambystoma_maculatum_pop12_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/12
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
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
          - Geographical coordinates are not reported because animals were colllected in three different counties
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
          - "30.5"
          - "3"
          - "42"
          - The acclimation temperature fluctuated between 29 and 31C with an average of 30.5C
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "28"
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
          - Fig 5
          - NA
          - NA
          - "36.83333333"
          - "0.722222222"
          - "8"
          - sd
          - Data was digitised from figure 5.
      - rowNumber: 3896
        values:
          - "4314"
          - Yefeng Yang
          - Sealander_and_West_1969
          - Critical Thermal Maxima of Some Arkansas Salamanders in Relation to Thermal Acclimation
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop1
          - Ambystoma_maculatum_pop1_UTL_co1
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "35.5498581"
          - "-91.61800948"
          - "158"
          - 12/02/1966
          - February
          - "1966"
          - NA
          - NA
          - Geographical coordinates were roughly estimated using Google Maps.
          - "5"
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
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - NA
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
          - Tab 1
          - NA
          - NA
          - "38.4"
          - "0.3"
          - "9"
          - sd
          - NA
      - rowNumber: 3897
        values:
          - "4315"
          - Yefeng Yang
          - Sealander_and_West_1969
          - Critical Thermal Maxima of Some Arkansas Salamanders in Relation to Thermal Acclimation
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Ambystoma_maculatum_pop1
          - Ambystoma_maculatum_pop1_UTL_co2
          - NA
          - Caudata
          - Ambystomatidae
          - Ambystoma maculatum
          - NA
          - LC
          - wild
          - NA
          - "35.5498581"
          - "-91.61800948"
          - "158"
          - 12/02/1966
          - February
          - "1966"
          - NA
          - NA
          - Geographical coordinates were roughly estimated using Google Maps.
          - "5"
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
          - "0.5"
          - "14"
          - NA
          - adults
          - NA
          - NA
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
          - Tab 1
          - NA
          - NA
          - "37.6"
          - "0.1"
          - "5"
          - sd
          - NA
    originalStudyCitations:
      - ref: Gatz_1971
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "1971"
      - ref: Gatz_1973
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "1973"
      - ref: Hutchison_1961
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "1961"
      - ref: Keen_and_Schroeder_1975
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: https://www.jstor.org/stable/1443653
        year: "1975"
      - ref: Messerman_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "2019"
      - ref: Sealander_and_West_1969
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: NA
        year: "1969"
    selectedEstimateRowNumbers:
      - 1682
      - 2609
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - CQ4J
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Ambystoma maculatum — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 1682, 1683, 1684, 1685, 1686, 2247, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 3304, 3305, 3306, 3896, 3897; Metadata_AmphiTherm.xlsx
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
Critical Thermal Maxima of Ambystoma maculatum (Shaw) and Ambystoma jeffersonianum (Green) in Relation to Time of Breeding
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Critical Thermal Maxima of Ambystoma maculatum (Shaw) and Ambystoma jeffersonianum (Green) in Relation to Time of Breeding
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/6 -->
Evaluating the contributions of morphology and physiology to survival: a replicated experiment among juvenile salamanders (genus Ambystoma) under semi-natural conditions
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/12 -->
The same individuals were sequentially acclimated to the three acclimation temperatures used in this study, hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/6 -->
Evaluating the contributions of morphology and physiology to survival: a replicated experiment among juvenile salamanders (genus Ambystoma) under semi-natural conditions
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/12 -->
The same individuals were sequentially acclimated to the three acclimation temperatures used in this study, hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/6 -->
Evaluating the contributions of morphology and physiology to survival: a replicated experiment among juvenile salamanders (genus Ambystoma) under semi-natural conditions
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/12 -->
The same individuals were sequentially acclimated to the three acclimation temperatures used in this study, hence why the shared cohort IDs
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/63 -->
Ramping was taken as in Hutchison (1961). Endpoint was considered to be LRR because authors used the onset of disorganized locomotion as the endpoint.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/63 -->
Ramping was taken as in Hutchison (1961). Endpoint was considered to be LRR because authors used the onset of disorganized locomotion as the endpoint.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
