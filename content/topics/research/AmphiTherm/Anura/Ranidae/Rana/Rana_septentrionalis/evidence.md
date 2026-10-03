---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rana septentrionalis
    name:
      en: Rana septentrionalis
      zh: Rana septentrionalis
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
        sourceRowId: "1883"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1700
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4312"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3894
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
      - rowNumber: 1700
        values:
          - "1883"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co1
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.5"
          - NA
          - linear
          - "10"
          - "35"
          - Starved. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "22"
          - "7.7"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1701
        values:
          - "1884"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co10
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - mixed
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "456"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Starved. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "16.6"
          - "3.4"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1702
        values:
          - "1885"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co2
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - mixed
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "456"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Fed. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "17.5"
          - "3.7"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1703
        values:
          - "1886"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co3
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.5"
          - NA
          - linear
          - "10"
          - "35"
          - Fed. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "23"
          - "2.2"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1704
        values:
          - "1887"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co4
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.5"
          - NA
          - linear
          - "10"
          - "35"
          - Starved. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "25.9"
          - "3.4"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1705
        values:
          - "1888"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co5
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2.5"
          - NA
          - linear
          - "10"
          - "35"
          - Fed. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "20.1"
          - "6.2"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1706
        values:
          - "1889"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co6
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "168"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Starved. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "18.3"
          - "4.1"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1707
        values:
          - "1890"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co7
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "168"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Fed. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "22.7"
          - NA
          - NA
          - NA
          - Sample size and error not provided
      - rowNumber: 1708
        values:
          - "1891"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co8
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "168"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Starved. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "17.9"
          - "3"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 1709
        values:
          - "1892"
          - Patrice Pottier
          - Gelinas_1996
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/3
          - "1996"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - French
          - Rana_septentrionalis_pop1
          - Rana_septentrionalis_pop1_PBT_co9
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47"
          - "-73.5"
          - "332"
          - NA
          - NA
          - "1993"
          - May_1993
          - August_1993
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/28
          - "21"
          - NA
          - "22.6"
          - "22.4"
          - Ambient, water, and body temperatures taken from Tab 7
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.9"
          - NA
          - "5"
          - Acclimation time was taken as the mean of the range presented (4-6 days)
          - adults
          - NA
          - "60"
          - "18.5"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "168"
          - "0.083333333"
          - linear
          - "10"
          - "35"
          - Fed. Body mass and SVL were taken as the means of the ranges reported.
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
          - table
          - NA
          - NA
          - "21.5"
          - "2"
          - NA
          - sd
          - Sample size could not be determined
      - rowNumber: 3894
        values:
          - "4312"
          - Pietro Pollo
          - Schmid_1982
          - Survival of Frogs in Low Temperature
          - "1982"
          - NA
          - NA
          - peer-reviewed
          - 10.1126/science.7058335
          - English
          - Rana_septentrionalis_pop2
          - Rana_septentrionalis_pop2_LTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana septentrionalis
          - NA
          - LC
          - wild
          - NA
          - "47.19440414"
          - "-95.1652277"
          - "476"
          - NA
          - October
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
          - "-2.73"
          - "0.25"
          - "3"
          - sd
          - NA
    originalStudyCitations:
      - ref: Gelinas_1996
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "1996"
      - ref: Schmid_1982
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1126/science.7058335
        year: "1982"
    selectedEstimateRowNumbers:
      - 1700
      - 3894
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

# Rana septentrionalis — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 3894; Metadata_AmphiTherm.xlsx
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
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/3 -->
RÔLE DU COMPORTEMENT THERMORÉGULATEUR CHEZ LA GRENOUILLE DU NORD (Rana septentrionalis, Baird) ADULTE ET LE OUAOUARON (Rana catesbeiana, Shaw) JUVÉNILE EN RAPPORT AVEC LE BESOIN ALIMENTAIRE
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/28 -->
Coordinates were converted to decimal degrees. Sampling dates were taken from Tab 7. Elevation was taken from https://www.freemaptools.com/elevation-finder.htm
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
