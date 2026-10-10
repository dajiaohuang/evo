---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rhaebo haematiticus
    name:
      en: Rhaebo haematiticus
      zh: Rhaebo haematiticus
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
        sourceRowId: "435"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 359
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "490"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 411
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 359, 360, 411, 3441; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 359
        values:
          - "435"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rhaebo_haematiticus_pop1
          - Rhaebo_haematiticus_pop1_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhaebo haematiticus
          - NA
          - LC
          - wild
          - NA
          - "9.913056"
          - "-83.682778"
          - "579"
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
          - "26"
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
          - "36.5"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 360
        values:
          - "436"
          - Patrice Pottier
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rhaebo_haematiticus_pop1
          - Rhaebo_haematiticus_pop1_UTL_co2
          - NA
          - Anura
          - Bufonidae
          - Rhaebo haematiticus
          - NA
          - LC
          - wild
          - NA
          - "9.913056"
          - "-83.682778"
          - "579"
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
          - "37.5"
          - NA
          - "10"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 411
        values:
          - "490"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Rhaebo_haematiticus_pop1
          - Rhaebo_haematiticus_pop1_LTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhaebo haematiticus
          - NA
          - LC
          - wild
          - NA
          - "9.913056"
          - "-83.682778"
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
          - "9.5"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 3441
        values:
          - "3766"
          - PPollo
          - Nowakowski_et_al_2016a
          - Tropical amphibians in shifting thermal landscapes under land-use and climate change
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/cobi.12769
          - English
          - Rhaebo_haematiticus_pop2
          - Rhaebo_haematiticus_pop2_UTL_co1
          - NA
          - Anura
          - Bufonidae
          - Rhaebo haematiticus
          - NA
          - LC
          - wild
          - NA
          - "10.43087623"
          - "-84.00658476"
          - "54"
          - NA
          - NA
          - "2011"
          - NA
          - NA
          - Geographical coordinates were roughly estimated using Google Maps
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
          - Animals were tested within 2-24 hours of collection and maintained in boxes at ambient temperature prior to testing.
          - adults
          - NA
          - NA
          - "19.69"
          - NA
          - unknown
          - CTmax
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Appendix S2
          - NA
          - NA
          - "33.37"
          - NA
          - "40"
          - NA
          - NA
    originalStudyCitations:
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: Nowakowski_et_al_2016a
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/cobi.12769
        year: "2016"
    selectedEstimateRowNumbers:
      - 359
      - 411
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4RY94
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Rhaebo haematiticus — AmphiTherm source

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

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
