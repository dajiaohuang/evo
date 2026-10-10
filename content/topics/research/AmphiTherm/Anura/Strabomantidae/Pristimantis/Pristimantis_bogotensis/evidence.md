---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pristimantis bogotensis
    name:
      en: Pristimantis bogotensis
      zh: Pristimantis bogotensis
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
        sourceRowId: "106"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 95
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "127"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 112
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 95, 96, 97, 98, 112, 113, 114, 115, 736; Metadata_AmphiTherm.xlsx
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
      family: Strabomantidae
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
      - rowNumber: 95
        values:
          - "106"
          - Jose O. Valdebenito
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop1
          - Pristimantis_bogotensis_pop1_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.311989"
          - "-74.262789"
          - "2573.5"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range presented (2543 - 2604 m).
          - "13.215"
          - NA
          - NA
          - NA
          - Ambient_temp obtained from field data loggers was taken as the mean of the range presented.
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 2 & 3
          - NA
          - NA
          - "30.2"
          - NA
          - "5"
          - NA
          - NA
      - rowNumber: 96
        values:
          - "107"
          - Jose O. Valdebenito
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop2
          - Pristimantis_bogotensis_pop2_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.479669"
          - "-73.702064"
          - "2377"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - NA
          - "20.045"
          - NA
          - NA
          - NA
          - Ambient_temp obtained from field data loggers was taken as the mean of the range presented.
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 2 & 3
          - NA
          - NA
          - "32.9"
          - NA
          - "2"
          - NA
          - NA
      - rowNumber: 97
        values:
          - "108"
          - Jose O. Valdebenito
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop3
          - Pristimantis_bogotensis_pop3_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.461278"
          - "-73.715461"
          - "2927"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - NA
          - "12.705"
          - NA
          - NA
          - NA
          - Ambient_temp obtained from field data loggers was taken as the mean of the range presented.
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 2 & 3
          - NA
          - NA
          - "31.3"
          - NA
          - "2"
          - NA
          - NA
      - rowNumber: 98
        values:
          - "109"
          - Jose O. Valdebenito
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop5
          - Pristimantis_bogotensis_pop5_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.477467"
          - "-73.731081"
          - "3355"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range presented (3286 - 3424 m).
          - "12.395"
          - NA
          - NA
          - NA
          - Ambient_temp obtained from field data loggers was taken as the mean of the range presented.
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 2 & 3
          - NA
          - NA
          - "33.1"
          - NA
          - "2"
          - NA
          - NA
      - rowNumber: 112
        values:
          - "127"
          - Natalie_Claunch
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop1
          - Pristimantis_bogotensis_pop1_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.311989"
          - "-74.262789"
          - "2550"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range provided
          - "13.21"
          - NA
          - NA
          - NA
          - Minimum and maximum ambient temperatures were averaged.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - NA
          - NA
          - NA
          - NA
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
          - "5.8"
          - "0.71"
          - "5"
          - sd
          - NA
      - rowNumber: 113
        values:
          - "128"
          - Natalie_Claunch
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop2
          - Pristimantis_bogotensis_pop2_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.479669"
          - "-73.702064"
          - "2364.5"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range provided
          - "20.325"
          - NA
          - NA
          - NA
          - Minimum and maximum ambient temperatures were averaged.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - NA
          - NA
          - NA
          - NA
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
          - "2.7"
          - "5.09"
          - "2"
          - sd
          - NA
      - rowNumber: 114
        values:
          - "129"
          - Natalie_Claunch
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop3
          - Pristimantis_bogotensis_pop3_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.461278"
          - "-73.715461"
          - "2924.5"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range provided
          - "12.7"
          - NA
          - NA
          - NA
          - Minimum and maximum ambient temperatures were averaged.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - NA
          - NA
          - NA
          - NA
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
          - "2.2"
          - "3"
          - "2"
          - sd
          - NA
      - rowNumber: 115
        values:
          - "130"
          - Natalie_Claunch
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Pristimantis_bogotensis_pop4
          - Pristimantis_bogotensis_pop4_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.477467"
          - "-73.731081"
          - "3320"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range provided
          - "12.395"
          - NA
          - NA
          - NA
          - Minimum and maximum ambient temperatures were averaged.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - NA
          - NA
          - NA
          - NA
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
          - "1.3"
          - "1.6"
          - "2"
          - sd
          - NA
      - rowNumber: 736
        values:
          - "833"
          - Natalie_Claunch
          - Carvajalino-Fernandez_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1017/S026646742100016X
          - English
          - Pristimantis_bogotensis_pop6
          - Pristimantis_bogotensis_pop6_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis bogotensis
          - NA
          - LC
          - wild
          - NA
          - "4.743889"
          - "-73.836389"
          - "3550"
          - NA
          - NA
          - NA
          - December_2009
          - January_2010
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
          - "12.5"
          - "4.5"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/42
          - adults
          - NA
          - NA
          - "1.11"
          - NA
          - male
          - CTmin
          - SCP
          - body
          - "6.5"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "-3.22"
          - "0.2"
          - "8"
          - se
          - Error_type was assumed to be SE
    originalStudyCitations:
      - ref: Bernal-Castro_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2019"
      - ref: Carvajalino-Fernandez_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1017/S026646742100016X
        year: "2021"
    selectedEstimateRowNumbers:
      - 95
      - 112
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6VWHF
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pristimantis bogotensis — AmphiTherm source

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
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/3 -->
Freeze tolerance in neotropical frogs: an intrageneric comparison using Pristimantis species of high elevation and medium elevation
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/42 -->
Fluctuating acclimation temps from 8 to 17. Experiments started up to three days after capture, and frogs were not used in experiments after 10 days in the lab.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
