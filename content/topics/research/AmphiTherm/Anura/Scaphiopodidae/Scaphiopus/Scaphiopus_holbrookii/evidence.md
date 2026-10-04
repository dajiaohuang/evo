---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Scaphiopus holbrookii
    name:
      en: Scaphiopus holbrookii
      zh: Scaphiopus holbrookii
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
        sourceRowId: "440"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 364
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 364, 365, 681, 682, 683; Metadata_AmphiTherm.xlsx
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
      family: Scaphiopodidae
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
      - rowNumber: 364
        values:
          - "440"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Scaphiopus_holbrookii_pop1
          - Scaphiopus_holbrookii_pop1_UTL_co1
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus holbrookii
          - NA
          - LC
          - wild
          - NA
          - "42"
          - "-73.13496"
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
          - "55"
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
          - "28.1"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 365
        values:
          - "441"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Scaphiopus_holbrookii_pop1
          - Scaphiopus_holbrookii_pop1_UTL_co2
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus holbrookii
          - NA
          - LC
          - wild
          - NA
          - "42"
          - "-73.13496"
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
          - "55"
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
          - "34"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 681
        values:
          - "773"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Scaphiopus_holbrookii_pop2
          - Scaphiopus_holbrookii_pop2_UTL_co1
          - The population_ID was taken as the same as in study st9 because animals were collected in the same location
          - Anura
          - Scaphiopodidae
          - Scaphiopus holbrookii
          - NA
          - LC
          - wild
          - NA
          - "42"
          - "-73.13496"
          - "422"
          - NA
          - NA
          - NA
          - "1959"
          - "1960"
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
          - NA
          - "1"
          - NA
          - adults
          - NA
          - "55"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Rohr et al. 2018
          - NA
          - NA
          - "32.77874"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 682
        values:
          - "774"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Scaphiopus_holbrookii_pop2
          - Scaphiopus_holbrookii_pop2_UTL_co2
          - The population_ID was taken as the same as in study st9 because animals were collected in the same location
          - Anura
          - Scaphiopodidae
          - Scaphiopus holbrookii
          - NA
          - LC
          - wild
          - NA
          - "42"
          - "-73.13496"
          - "422"
          - NA
          - NA
          - NA
          - "1959"
          - "1960"
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
          - NA
          - "2"
          - NA
          - adults
          - NA
          - "55"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Rohr et al. 2018
          - NA
          - NA
          - "33.98619"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 683
        values:
          - "775"
          - Patrice Pottier
          - Brattstrom_and_Lawrence_1962
          - The Rate of Thermal Acclimation in Anuran Amphibians
          - "1962"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.35.2.30152723
          - English
          - Scaphiopus_holbrookii_pop2
          - Scaphiopus_holbrookii_pop2_UTL_co3
          - The population_ID was taken as the same as in study st9 because animals were collected in the same location
          - Anura
          - Scaphiopodidae
          - Scaphiopus holbrookii
          - NA
          - LC
          - wild
          - NA
          - "42"
          - "-73.13496"
          - "422"
          - NA
          - NA
          - NA
          - "1959"
          - "1960"
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
          - NA
          - "14"
          - NA
          - adults
          - NA
          - "55"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "23"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Rohr et al. 2018
          - NA
          - NA
          - "28.10595"
          - NA
          - "3"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Brattstrom_and_Lawrence_1962
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1086/physzool.35.2.30152723
        year: "1962"
    selectedEstimateRowNumbers:
      - 364
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 79THZ
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Scaphiopus holbrookii — AmphiTherm source

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

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Data taken from Rohr et al. 2018; n_trait corresponds to the lower end of the range of sample sizes presented in the original study.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
