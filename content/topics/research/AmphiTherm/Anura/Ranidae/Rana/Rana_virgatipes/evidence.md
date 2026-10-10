---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rana virgatipes
    name:
      en: Rana virgatipes
      zh: Rana virgatipes
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
        sourceRowId: "2412"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2205
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2205, 2206, 2207; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 2205
        values:
          - "2412"
          - Patrice Pottier
          - Holzman_and_McManus_1973
          - Effects of acclimation on metabolic rate and thermal tolerance in the carpenter frog, Rana vergatipes
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90086-8
          - English
          - Rana_virgatipes_pop1
          - Rana_virgatipes_pop1_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana virgatipes
          - NA
          - LC
          - wild
          - NA
          - "39.855849"
          - "-74.686882"
          - "32"
          - NA
          - July
          - "1972"
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
          - "5"
          - "1"
          - "6"
          - The authors indicate that most frogs were "acclimated for 6 days", although the acclimation time varied.
          - adults
          - NA
          - "55"
          - "7"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "25"
          - "0.54"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Body mass was taken as the mean of the range presented (2-12g)
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
          - Fig 2
          - NA
          - NA
          - "35.7637051"
          - "0.035506561"
          - "20"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 2206
        values:
          - "2413"
          - Patrice Pottier
          - Holzman_and_McManus_1973
          - Effects of acclimation on metabolic rate and thermal tolerance in the carpenter frog, Rana vergatipes
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90086-8
          - English
          - Rana_virgatipes_pop1
          - Rana_virgatipes_pop1_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana virgatipes
          - NA
          - LC
          - wild
          - NA
          - "39.855849"
          - "-74.686882"
          - "32"
          - NA
          - July
          - "1972"
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
          - "15"
          - "1"
          - "6"
          - The authors indicate that most frogs were "acclimated for 6 days", although the acclimation time varied.
          - adults
          - NA
          - "55"
          - "7"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "25"
          - "0.54"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Body mass was taken as the mean of the range presented (2-12g)
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
          - Fig 2
          - NA
          - NA
          - "37.42722117"
          - "0.024181556"
          - "22"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 2207
        values:
          - "2414"
          - Patrice Pottier
          - Holzman_and_McManus_1973
          - Effects of acclimation on metabolic rate and thermal tolerance in the carpenter frog, Rana vergatipes
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90086-8
          - English
          - Rana_virgatipes_pop1
          - Rana_virgatipes_pop1_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana virgatipes
          - NA
          - LC
          - wild
          - NA
          - "39.855849"
          - "-74.686882"
          - "32"
          - NA
          - July
          - "1972"
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
          - "25"
          - "1"
          - "6"
          - The authors indicate that most frogs were "acclimated for 6 days", although the acclimation time varied.
          - adults
          - NA
          - "55"
          - "7"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "25"
          - "0.54"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Body mass was taken as the mean of the range presented (2-12g)
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
          - Fig 2
          - NA
          - NA
          - "38.03213611"
          - "0.020836869"
          - "24"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
    originalStudyCitations:
      - ref: Holzman_and_McManus_1973
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0300-9629(73)90086-8
        year: "1973"
    selectedEstimateRowNumbers:
      - 2205
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

# Rana virgatipes — AmphiTherm source

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
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
