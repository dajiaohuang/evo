---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Anaxyrus cognatus
    name:
      en: Anaxyrus cognatus
      zh: Anaxyrus cognatus
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
        sourceRowId: "369"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 293
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "456"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 380
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4383"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 3958
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 293, 294, 295, 380, 3487, 3488, 3489, 3490, 3958; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 293
        values:
          - "369"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_cognatus_pop1
          - Anaxyrus_cognatus_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "31"
          - "-110.330881"
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
          - "87"
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
          - "37.4"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 294
        values:
          - "370"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_cognatus_pop1
          - Anaxyrus_cognatus_pop1_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "31"
          - "-110.330881"
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
          - "23"
          - "1"
          - "17.5"
          - acclimation_time was taken as the mean of the range presented (2-3 weeks)
          - adults
          - NA
          - "87"
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
          - "39.7"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 295
        values:
          - "371"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_cognatus_pop1
          - Anaxyrus_cognatus_pop1_UTL_co3
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "31"
          - "-110.330881"
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
          - "87"
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
          - "41.3"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 380
        values:
          - "456"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Anaxyrus_cognatus_pop1
          - Anaxyrus_cognatus_pop1_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "31"
          - "-110.330881"
          - "305"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - Mexico,Sonora
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
          - "-4"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 3487
        values:
          - "3812"
          - Patrice Pottier
          - Paulson_and_Hutchison_1987
          - Blood changes in Bufo cognatus following acute heat stress
          - "1987"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_cognatus_pop2
          - Anaxyrus_cognatus_pop2_UTL_co1
          - Animals tested in Winter
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "35.222567"
          - "-97.439478"
          - "364"
          - NA
          - NA
          - NA
          - April_1984
          - July_1985
          - Coordinates were taken from Rohr et al. 2018. Animals were collected in April-July 1984-1985
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
          - "14"
          - NA
          - adults
          - NA
          - "87"
          - NA
          - NA
          - mixed
          - CTmax
          - OS
          - body
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
          - "12"
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
          - "38.7"
          - "0.3"
          - "6"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3488
        values:
          - "3813"
          - Patrice Pottier
          - Paulson_and_Hutchison_1987
          - Blood changes in Bufo cognatus following acute heat stress
          - "1987"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_cognatus_pop2
          - Anaxyrus_cognatus_pop2_UTL_co2
          - Animals tested in Spring
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "35.222567"
          - "-97.439478"
          - "364"
          - NA
          - NA
          - NA
          - April_1984
          - July_1985
          - Coordinates were taken from Rohr et al. 2018. Animals were collected in April-July 1984-1985
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
          - "14"
          - NA
          - adults
          - NA
          - "87"
          - NA
          - NA
          - mixed
          - CTmax
          - OS
          - body
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
          - "12"
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
          - "40"
          - "0.2"
          - "19"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3489
        values:
          - "3814"
          - Patrice Pottier
          - Paulson_and_Hutchison_1987
          - Blood changes in Bufo cognatus following acute heat stress
          - "1987"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Anaxyrus_cognatus_pop2
          - Anaxyrus_cognatus_pop2_UTL_co3
          - Animals tested in Fall
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "35.222567"
          - "-97.439478"
          - "364"
          - NA
          - NA
          - NA
          - April_1984
          - July_1985
          - Coordinates were taken from Rohr et al. 2018. Animals were collected in April-July 1984-1985
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
          - "14"
          - NA
          - adults
          - NA
          - "87"
          - NA
          - NA
          - mixed
          - CTmax
          - OS
          - body
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
          - "12"
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
          - "0.2"
          - "23"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3490
        values:
          - "3815"
          - Patrice Pottier
          - Paulson_and_Hutchison_1987b
          - Origin of the stimulus for muscular spasms at the critical thermal maximum in anurans
          - "1987"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1445684
          - English
          - Anaxyrus_cognatus_pop2
          - Anaxyrus_cognatus_pop2_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/12
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "35.222567"
          - "-97.439478"
          - "364"
          - NA
          - NA
          - NA
          - May_1982
          - July_1985
          - Coordinates were taken from Rohr et al. 2018. Animals were collected in May-July 1982-1985
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
          - "14"
          - NA
          - adults
          - NA
          - "87"
          - NA
          - NA
          - mixed
          - CTmax
          - OS
          - body
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
          - "12"
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
          - "41.5"
          - "0.26"
          - "5"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
      - rowNumber: 3958
        values:
          - "4383"
          - Pietro Pollo
          - Sievert_1991
          - THERMOREGULATORY BEHAVIOUR IN THE TOADS BUFO MARINUS AND BUFO COGNATUS
          - "1991"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90023-U
          - English
          - Anaxyrus_cognatus_pop2
          - Anaxyrus_cognatus_pop2_PBT_co1
          - NA
          - Anura
          - Bufonidae
          - Anaxyrus cognatus
          - NA
          - LC
          - wild
          - NA
          - "35.22155466"
          - "-97.43790416"
          - "357"
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
          - "25"
          - NA
          - "5"
          - NA
          - adults
          - NA
          - NA
          - "47"
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
          - "6"
          - linear
          - "10"
          - "40"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/63
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
          - "27.7"
          - "1.57"
          - "8"
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
      - ref: Paulson_and_Hutchison_1987
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "1987"
      - ref: Paulson_and_Hutchison_1987b
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.2307/1445684
        year: "1987"
      - ref: Sievert_1991
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: 10.1016/0306-4565(91)90023-U
        year: "1991"
    selectedEstimateRowNumbers:
      - 293
      - 380
      - 3958
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 66M5T
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Anaxyrus cognatus — AmphiTherm source

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

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/12 -->
Animals were considered the same population as in st60 because parents were collected in the same location and the same researcher performed the experiments.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. Data with operated animals were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/63 -->
fall both ends had light; mass measures given for each species when they were obtained, perhaps not reliable for each group; groups based on when experiments were conducted (season/fall) and treatment (UL: warm end had light and cool end was dark, LH: both ends had light)
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
