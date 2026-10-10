---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Fejervarya cancrivora
    name:
      en: Fejervarya cancrivora
      zh: Fejervarya cancrivora
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
        sourceRowId: "1319"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1170
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1170, 1186; Metadata_AmphiTherm.xlsx
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
      family: Dicroglossidae
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
      - rowNumber: 1170
        values:
          - "1319"
          - Patrice Pottier
          - Dabruzzi_et_al_2012
          - "Some Like it Hot: Heat Tolerance of the Crab-Eating Frog, Fejervarya cancrivora"
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Fejervarya_cancrivora_pop1
          - Fejervarya_cancrivora_pop1_UTL_co1
          - NA
          - Anura
          - Dicroglossidae
          - Fejervarya cancrivora
          - NA
          - LC
          - wild
          - NA
          - "-5.466919"
          - "123.759222"
          - "1"
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
          - "25"
          - NA
          - "7"
          - NA
          - adults
          - NA
          - "5.64"
          - "37.715"
          - NA
          - unknown
          - CTmax
          - OS
          - ambient
          - NA
          - "0.3"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL and body_mass were taken as the means of the ranges presented in the main text.
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
          - main text
          - NA
          - NA
          - "42.1"
          - "0.76"
          - "5"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 1186
        values:
          - "1335"
          - Jose O. Valdebenito
          - Daniel_2013
          - IMPACTS OF CLIMATE CHANGE ON SINGAPORE AMPHIBIANS
          - "2013"
          - "4"
          - Are tropical amphibians more vulnerable to climatic warming compared to subtropical or temperate species?
          - not_peer-reviewed
          - NA
          - English
          - Fejervarya_cancrivora_pop2
          - Fejervarya_cancrivora_pop2_UTL_co1
          - NA
          - Anura
          - Dicroglossidae
          - Fejervarya cancrivora
          - NA
          - LC
          - wild
          - NA
          - "1.392388889"
          - "103.9208667"
          - "9"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Geographical coordinates were taken as the ones presented in Chapter 5 (Tab 5.1)
          - NA
          - NA
          - "28.9"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - NA
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
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
          - Fig 4.4
          - NA
          - NA
          - "41.6"
          - "0.204081633"
          - NA
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
    originalStudyCitations:
      - ref: Dabruzzi_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2012"
      - ref: Daniel_2013
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2013"
    selectedEstimateRowNumbers:
      - 1170
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3DXDM
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Fejervarya cancrivora — AmphiTherm source

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
Data was taken from the main text (results section). It was unclear whether the error presented was the standard deviation or standard error. It was assumed to be the SD.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 4.4. 95% confidence intervals were converted to se by dividing them by 1.96. Sample sizes were not reported.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
