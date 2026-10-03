---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Phyllomedusa vaillantii
    name:
      en: Phyllomedusa vaillantii
      zh: Phyllomedusa vaillantii
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
        sourceRowId: "3931"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3603
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4890"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4394
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3603, 4360, 4394; Metadata_AmphiTherm.xlsx
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
      family: Hylidae
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
      - rowNumber: 3603
        values:
          - "3931"
          - Patrice Pottier
          - Pintanel_2018
          - Thermal adaptation of amphibians in tropical mountains. Consequences of global warming
          - "2018"
          - "2"
          - Are tropical barriers `higher` on the way up or down?
          - not_peer-reviewed
          - NA
          - English
          - Phyllomedusa_vaillantii_pop3
          - Phyllomedusa_vaillantii_pop3_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Phyllomedusa vaillantii
          - NA
          - LC
          - wild
          - NA
          - "-1.41"
          - "-77.73"
          - "1081"
          - NA
          - NA
          - NA
          - June_2014
          - April_2016
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
          - "3"
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
          - Tab S2.1
          - NA
          - NA
          - "40.12"
          - "0.1"
          - "16"
          - se
          - NA
      - rowNumber: 4360
        values:
          - "4848"
          - Patrice Pottier
          - von-May_et_al_2019
          - "Thermal physiological traits in tropical lowland amphibians: Vulnerability to climate warming and cooling"
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1371/journal.pone.0219759
          - English
          - Phyllomedusa_vaillantii_pop1
          - Phyllomedusa_vaillantii_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Phyllomedusa vaillantii
          - NA
          - LC
          - wild
          - NA
          - "-12.56861111"
          - "-70.09916667"
          - "277"
          - NA
          - NA
          - NA
          - "2012"
          - "2017"
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
          - "25"
          - "1"
          - "2.5"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/42
          - adults
          - NA
          - "30.38333333"
          - "1.683333333"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "24"
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
          - dataset
          - https://figshare.com/articles/dataset/Thermal_physiological_traits_in_tropical_lowland_amphibians_Vulnerability_to_climate_warming_and_cooling/9208199
          - NA
          - "39.43333333"
          - "0.312694384"
          - "6"
          - se
          - Data was taken from the published dataset.
      - rowNumber: 4394
        values:
          - "4890"
          - Rachel Oh
          - von-May_et_al_2019
          - "Thermal physiological traits in tropical lowland amphibians: Vulnerability to climate warming and cooling"
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1371/journal.pone.0219759
          - English
          - Phyllomedusa_vaillantii_pop2
          - Phyllomedusa_vaillantii_pop2_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Phyllomedusa vaillantii
          - NA
          - LC
          - wild
          - NA
          - "-12.56861111"
          - "-70.09916667"
          - "460"
          - NA
          - NA
          - NA
          - "2012"
          - "2017"
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
          - "25"
          - "1"
          - "2.5"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/42
          - adults
          - NA
          - "30.4"
          - "1.7"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "24"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0"
          - "24"
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
          - published_data
          - https://doi.org/10.1371/journal.pone.0219759.s011
          - NA
          - "7.5"
          - "0.6"
          - "6"
          - se
          - NA
    originalStudyCitations:
      - ref: Pintanel_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2018"
      - ref: von-May_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1371/journal.pone.0219759
        year: "2019"
    selectedEstimateRowNumbers:
      - 3603
      - 4394
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

# Phyllomedusa vaillantii — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/42 -->
The acclimation time was taken as the mean of the range presented (2-3 days). The acclimation temperature was 24-26C so it was taken as 25 +/- 1 C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/42 -->
The acclimation time was taken as the mean of the range presented (2-3 days). The acclimation temperature was 24-26C so it was taken as 25 +/- 1 C
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
