---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rana longicrus
    name:
      en: Rana longicrus
      zh: Rana longicrus
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
        sourceRowId: "1040"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 926
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4714"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4241
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 926, 927, 4241, 4242; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 926
        values:
          - "1040"
          - Hsien-Yung Lin
          - Cheng_2017
          - A study of warming tolerance and thermal acclimation capacity of tadpoles in Taiwan
          - "2017"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Traditional Chinese
          - Rana_longicrus_pop1
          - Rana_longicrus_pop1_UTL_co2
          - NA
          - Anura
          - Ranidae
          - Rana longicrus
          - NA
          - VU
          - wild
          - NA
          - "25.19112222"
          - "121.5896917"
          - "297"
          - NA
          - NA
          - NA
          - "2013"
          - "2015"
          - only years are provided
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "28"
          - "15"
          - NA
          - "7"
          - Gosner stage was taken as the mean of the range presented (26-30)
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
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
          - Tab 2
          - NA
          - NA
          - "35.5"
          - "0.31"
          - "10"
          - sd
          - NA
      - rowNumber: 927
        values:
          - "1041"
          - Hsien-Yung Lin
          - Cheng_2017
          - A study of warming tolerance and thermal acclimation capacity of tadpoles in Taiwan
          - "2017"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Traditional Chinese
          - Rana_longicrus_pop1
          - Rana_longicrus_pop1_UTL_co3
          - NA
          - Anura
          - Ranidae
          - Rana longicrus
          - NA
          - VU
          - wild
          - NA
          - "25.19112222"
          - "121.5896917"
          - "297"
          - NA
          - NA
          - NA
          - "2013"
          - "2015"
          - only years are provided
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "28"
          - "23"
          - NA
          - "7"
          - Gosner stage was taken as the mean of the range presented (26-30)
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
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
          - Tab 2
          - NA
          - NA
          - "36.4"
          - "0.25"
          - "10"
          - sd
          - NA
      - rowNumber: 4241
        values:
          - "4714"
          - Yefeng Yang
          - Wu_2021
          - Study on the temperature preference and temperature acclimation ability of tadpoles in different microhabitats
          - "2021"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Traditional Chinese
          - Rana_longicrus_pop2
          - Rana_longicrus_pop2_PBT_co1
          - NA
          - Anura
          - Ranidae
          - Rana longicrus
          - NA
          - VU
          - wild
          - NA
          - "25.26956202"
          - "121.5697217"
          - "161"
          - NA
          - NA
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
          - "27.5"
          - "16"
          - NA
          - "7"
          - NA
          - larvae
          - "33.5"
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
          - "3.5"
          - "4"
          - NA
          - "17"
          - "34"
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
          - "21.3964497"
          - "3.313609467"
          - "10"
          - sd
          - NA
      - rowNumber: 4242
        values:
          - "4715"
          - Yefeng Yang
          - Wu_2021
          - Study on the temperature preference and temperature acclimation ability of tadpoles in different microhabitats
          - "2021"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Traditional Chinese
          - Rana_longicrus_pop2
          - Rana_longicrus_pop2_PBT_co1
          - NA
          - Anura
          - Ranidae
          - Rana longicrus
          - NA
          - VU
          - wild
          - NA
          - "25.26956202"
          - "121.5697217"
          - "161"
          - NA
          - NA
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
          - "27.5"
          - "24"
          - NA
          - "7"
          - NA
          - larvae
          - "33.5"
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
          - "3.5"
          - "4"
          - NA
          - "17"
          - "34"
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
          - "25.78698225"
          - "3.396449704"
          - "10"
          - sd
          - NA
    originalStudyCitations:
      - ref: Cheng_2017
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2017"
      - ref: Wu_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2021"
    selectedEstimateRowNumbers:
      - 926
      - 4241
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4RDVS
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Rana longicrus — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
