---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pristimantis ockendeni
    name:
      en: Pristimantis ockendeni
      zh: Pristimantis ockendeni
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
        sourceRowId: "4791"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 4314
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4807"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4328
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 4314, 4328, 4364, 4397; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 4314
        values:
          - "4791"
          - Patrice Pottier
          - von-May_et_al_2017
          - Divergence of thermal physiological traits in terrestrial breeding frogs along a tropical elevational gradient
          - "2017"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1002/ece3.2929
          - English
          - Pristimantis_ockendeni_pop3
          - Pristimantis_ockendeni_pop3_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis ockendeni
          - NA
          - LC
          - wild
          - NA
          - "-11.1833"
          - "-71.1667"
          - "735"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/28
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
          - "18.5"
          - "2.5"
          - "2.5"
          - acclimation_time was taken as the mean of the range presented (2-3 days)
          - adults
          - NA
          - "21"
          - "0.8"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "18"
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
          - Tab S3
          - NA
          - NA
          - "29.9"
          - "0.2"
          - "34"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 4328
        values:
          - "4807"
          - Rachel Oh
          - von-May_et_al_2017
          - Divergence of thermal physiological traits in terrestrial breeding frogs along a tropical elevational gradient
          - "2017"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1002/ece3.2929
          - English
          - Pristimantis_ockendeni_pop3
          - Pristimantis_ockendeni_pop3_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis ockendeni
          - NA
          - LC
          - wild
          - NA
          - "-11.1833"
          - "-71.1667"
          - "735"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/28
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
          - "18.5"
          - "2.5"
          - "2.5"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/42
          - adults
          - NA
          - "21"
          - "0.8"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "18"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0"
          - "18"
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
          - Supplement
          - NA
          - "7.9"
          - "0.2"
          - "14"
          - se
          - The total sample size (196) was divided equally between the 14 species assessed
      - rowNumber: 4364
        values:
          - "4852"
          - Patrice Pottier
          - von-May_et_al_2019
          - "Thermal physiological traits in tropical lowland amphibians: Vulnerability to climate warming and cooling"
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1371/journal.pone.0219759
          - English
          - Pristimantis_ockendeni_pop1
          - Pristimantis_ockendeni_pop1_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis ockendeni
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
            field: /records/amphitherm-source-reader/originalRows/2/values/42
          - adults
          - NA
          - "24.025"
          - "1.0375"
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
          - "29.9875"
          - "0.349712892"
          - "8"
          - se
          - Data was taken from the published dataset.
      - rowNumber: 4397
        values:
          - "4893"
          - Rachel Oh
          - von-May_et_al_2019
          - "Thermal physiological traits in tropical lowland amphibians: Vulnerability to climate warming and cooling"
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1371/journal.pone.0219759
          - English
          - Pristimantis_ockendeni_pop2
          - Pristimantis_ockendeni_pop2_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis ockendeni
          - NA
          - LC
          - wild
          - NA
          - "-12.56861111"
          - "-70.09916667"
          - "700"
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
            field: /records/amphitherm-source-reader/originalRows/3/values/42
          - adults
          - NA
          - "24"
          - "1"
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
          - "8.3"
          - "0.1"
          - "8"
          - se
          - NA
    originalStudyCitations:
      - ref: von-May_et_al_2017
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1002/ece3.2929
        year: "2017"
      - ref: von-May_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1371/journal.pone.0219759
        year: "2019"
    selectedEstimateRowNumbers:
      - 4314
      - 4328
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4MJJY
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pristimantis ockendeni — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
Geographical coordinates were not clearly reported. Only the location of some key Peruvian study sites were presented, but it was impossible to assign each site to a particular species. However, geographical coordinates are provided for the same species (and most likely for the same population in Rohr et al. 2018 (data from Catenazzi et al. 2014). The midpoint elevation was taken from Tab S3.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
n_trait was approximated as the total number of individuals tested (768) divided by the number of species tested (22) and rounded down.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/28 -->
Geographical coordinates were not clearly reported. Only the location of some key Peruvian study sites were presented, but it was impossible to assign each site to a particular species. However, geographical coordinates are provided for the same species (and most likely for the same population in Rohr et al. 2018 (data from Catenazzi et al. 2014). The midpoint elevation was taken from Tab S3.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/42 -->
acclimation_time was taken as the mean of the range presented (2-3 days). Acclimation temperature was 16-21C so we taken the mean acclimation temperature and used SD_acclimation_temp was the variation around that mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/42 -->
The acclimation time was taken as the mean of the range presented (2-3 days). The acclimation temperature was 24-26C so it was taken as 25 +/- 1 C
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/42 -->
The acclimation time was taken as the mean of the range presented (2-3 days). The acclimation temperature was 24-26C so it was taken as 25 +/- 1 C
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
