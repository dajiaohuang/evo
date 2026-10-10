---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Nanorana pleskei
    name:
      en: Nanorana pleskei
      zh: Nanorana pleskei
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
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2376"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2169
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2380"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2173
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 2169
        values:
          - "2376"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_LTL_co1
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "20.5"
          - "0.5"
          - "14"
          - acclimated 20
          - adults
          - NA
          - "36"
          - "3.68"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - NA
          - "0.33"
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
          - text
          - NA
          - NA
          - "2.16"
          - "0.25"
          - "13"
          - se
          - NA
      - rowNumber: 2170
        values:
          - "2377"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_LTL_co2
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "25"
          - "0.5"
          - "14"
          - acclimated 25
          - adults
          - NA
          - "38.7"
          - "3.47"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - NA
          - "0.33"
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
          - text
          - NA
          - NA
          - "1.74"
          - "0.06"
          - "13"
          - se
          - NA
      - rowNumber: 2171
        values:
          - "2378"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_LTL_co3
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "19.3"
          - NA
          - "14"
          - heatwave (fluctuate 15-26.6)
          - adults
          - NA
          - "35.2"
          - "3.83"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - NA
          - "0.33"
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
          - text
          - NA
          - NA
          - "1.47"
          - "0.11"
          - "13"
          - se
          - NA
      - rowNumber: 2172
        values:
          - "2379"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_LTL_co4
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
          - NA
          - NA
          - NA
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
          - field group
          - adults
          - NA
          - "37.5"
          - "3.61"
          - NA
          - mixed
          - CTmin
          - LRR
          - body
          - NA
          - "0.33"
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
          - text
          - NA
          - NA
          - "3.17"
          - "0.34"
          - "13"
          - se
          - NA
      - rowNumber: 2173
        values:
          - "2380"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_PBT_co1
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "20.5"
          - "0.5"
          - "14"
          - acclimated 20
          - adults
          - NA
          - "36"
          - "3.68"
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
          - "1.5"
          - "2"
          - linear
          - "14.6"
          - "39.1"
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
          - text
          - NA
          - NA
          - "23.2"
          - "0.61"
          - "13"
          - se
          - NA
      - rowNumber: 2174
        values:
          - "2381"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_PBT_co2
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "25"
          - "0.5"
          - "14"
          - acclimated 25
          - adults
          - NA
          - "38.7"
          - "3.47"
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
          - "1.5"
          - "2"
          - linear
          - "14.6"
          - "39.1"
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
          - text
          - NA
          - NA
          - "23.57"
          - "0.21"
          - "13"
          - se
          - NA
      - rowNumber: 2175
        values:
          - "2382"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_PBT_co3
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
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
          - adults
          - NA
          - "19.3"
          - NA
          - "14"
          - heatwave (fluctuate 15-26.6)
          - adults
          - NA
          - "35.2"
          - "3.83"
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
          - "1.5"
          - "2"
          - linear
          - "14.6"
          - "39.1"
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
          - "24.77536998"
          - "4.645044906"
          - "13"
          - sd
          - NA
      - rowNumber: 2176
        values:
          - "2383"
          - Natalie_Claunch
          - He_et_al_2021
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fevo.2021.763191
          - English
          - Nanorana_pleskei_pop1
          - Nanorana_pleskei_pop1_PBT_co4
          - The same animals were assesed for CTmin and PBT, hence the shared cohort_IDs
          - Anura
          - Dicroglossidae
          - Nanorana pleskei
          - NA
          - LC
          - wild
          - NA
          - "33.77"
          - "101.74"
          - "3490"
          - NA
          - July
          - "2020"
          - NA
          - NA
          - NA
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
          - field group
          - adults
          - NA
          - "37.5"
          - "3.61"
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
          - "1.5"
          - "2"
          - linear
          - "14.6"
          - "39.1"
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
          - text
          - NA
          - NA
          - "21.73"
          - "0.69"
          - "13"
          - se
          - NA
    originalStudyCitations:
      - ref: He_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.3389/fevo.2021.763191
        year: "2021"
    selectedEstimateRowNumbers:
      - 2169
      - 2173
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 45N7J
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Nanorana pleskei — AmphiTherm source

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
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Influence of high temperatures and heat wave on thermal biology, locomotor performance, and antioxidant system of high-altitude frog Nanorana pleskei endemic to Qinghai-Tibet plateau
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
