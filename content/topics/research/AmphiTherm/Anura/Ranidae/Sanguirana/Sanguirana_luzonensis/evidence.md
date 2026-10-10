---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Sanguirana luzonensis
    name:
      en: Sanguirana luzonensis
      zh: Sanguirana luzonensis
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
        sourceRowId: "4296"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3880
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3880, 3890; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 3880
        values:
          - "4296"
          - Patrice Pottier
          - Scheffers_et_al_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/btp.12042
          - English
          - Sanguirana_luzonensis_pop1
          - Sanguirana_luzonensis_pop1_UTL_co1
          - Animals were taken as the same population as in st70 because animals were collected in the same site
          - Anura
          - Ranidae
          - Sanguirana luzonensis
          - NA
          - LC
          - wild
          - NA
          - "14.094895"
          - "121.489634"
          - "1100"
          - NA
          - NA
          - "2011"
          - May_2011
          - September_2011
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
          - "22"
          - NA
          - "4"
          - NA
          - larvae
          - "32"
          - "75"
          - "0.31"
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "22"
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/63
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
          - Tab 1
          - NA
          - NA
          - "37.8"
          - "0.8"
          - "23"
          - sd
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3890
        values:
          - "4306"
          - Patrice Pottier
          - Scheffers_et_al_2014
          - Microhabitats reduce animal's exposure to climate extremes
          - "2014"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/gcb.12439
          - English
          - Sanguirana_luzonensis_pop1
          - Sanguirana_luzonensis_pop1_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Sanguirana luzonensis
          - NA
          - LC
          - wild
          - NA
          - "14.094895"
          - "121.489634"
          - "1100"
          - NA
          - NA
          - "2011"
          - May_2011
          - September_2011
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
          - "22"
          - NA
          - "4"
          - NA
          - adults
          - NA
          - "75"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - body
          - "22"
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Fig 2
          - NA
          - NA
          - "34.09338521"
          - NA
          - NA
          - NA
          - Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018.
    originalStudyCitations:
      - ref: Scheffers_et_al_2013
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1111/btp.12042
        year: "2013"
      - ref: Scheffers_et_al_2014
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1111/gcb.12439
        year: "2014"
    selectedEstimateRowNumbers:
      - 3880
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6XHD7
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Sanguirana luzonensis — AmphiTherm source

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
Thermal buffering of microhabitats is a critical factor mediating warming vulnerability of frogs in the Philippine biodiversity hotspot
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/63 -->
SVL was reported as in Rohr et al. 2018. Gosner stage was taken as the mean of the range presentd (26-28). Body_mass was reported in Table 1
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
