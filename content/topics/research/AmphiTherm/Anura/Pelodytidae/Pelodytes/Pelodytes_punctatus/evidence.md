---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pelodytes punctatus
    name:
      en: Pelodytes punctatus
      zh: Pelodytes punctatus
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
        sourceRowId: "1441"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1283
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2300"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2094
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1283, 2049, 2094, 2586, 2587, 2588, 2589, 2590; Metadata_AmphiTherm.xlsx
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
      family: Pelodytidae
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
      - rowNumber: 1283
        values:
          - "1441"
          - PPollo
          - Duarte_2011
          - A comparative study of the thermal tolerance of larvaes of Iberian anurans
          - "2011"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop5
          - Pelodytes_punctatus_pop5_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.72124722"
          - "-8.770863889"
          - "37"
          - NA
          - NA
          - NA
          - Feburary_2007
          - May_2008
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
          - larvae
          - NA
          - "10"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
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
          - Tab 3
          - NA
          - NA
          - "37.3"
          - "1.367479433"
          - "21"
          - sd
          - Standard deviation was calculated as the squared root of the variance presented.
      - rowNumber: 2049
        values:
          - "2253"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Pelodytes_punctatus_pop7
          - Pelodytes_punctatus_pop7_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "38.4917"
          - "-2.7019"
          - "791"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
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
          - "3.5"
          - acclimation_time was taken as the mean of the range presented (3-4 days)
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
          - Tab S2
          - NA
          - NA
          - "37.6"
          - "0.2"
          - "16"
          - sd
          - NA
      - rowNumber: 2094
        values:
          - "2300"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Pelodytes_punctatus_pop7
          - Pelodytes_punctatus_pop7_LTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "38.4917"
          - "-2.7019"
          - "791"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "10.24"
          - NA
          - NA
          - NA
          - Ambient temperature taken from Table S2
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - NA
          - "3.5"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - table
          - supplement
          - NA
          - "0.3"
          - "0.36"
          - "16"
          - sd
          - NA
      - rowNumber: 2586
        values:
          - "2853"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop1
          - Pelodytes_punctatus_pop1_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.11654722"
          - "-8.892794444"
          - "126"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "16.5"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - "0.251"
          - NA
          - unknown
          - CTmax
          - other
          - water
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "36.9"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 2587
        values:
          - "2854"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop2
          - Pelodytes_punctatus_pop2_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.21916111"
          - "-8.049536111"
          - "175"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "13.3"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - "0.3053"
          - NA
          - unknown
          - CTmax
          - other
          - water
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 2588
        values:
          - "2855"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop3
          - Pelodytes_punctatus_pop3_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.29791111"
          - "-8.841438889"
          - "100"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "15.9"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - "0.3266"
          - NA
          - unknown
          - CTmax
          - other
          - water
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37.1"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
      - rowNumber: 2589
        values:
          - "2856"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop4
          - Pelodytes_punctatus_pop4_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.252225"
          - "-8.085427778"
          - "350"
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
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - "0.3988"
          - NA
          - unknown
          - CTmax
          - other
          - water
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "37.3"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/83
      - rowNumber: 2590
        values:
          - "2857"
          - Jose O. Valdebenito
          - Katzenberger_2014
          - Impact of Global Warming in Holarctic and Neotropical communities of amphibians
          - "2014"
          - "2"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/6
          - not_peer-reviewed
          - NA
          - English
          - Pelodytes_punctatus_pop6
          - Pelodytes_punctatus_pop6_UTL_co1
          - NA
          - Anura
          - Pelodytidae
          - Pelodytes punctatus
          - NA
          - LC
          - wild
          - NA
          - "37.7181"
          - "-8.713263889"
          - "76"
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
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - "0.3029"
          - NA
          - unknown
          - CTmax
          - other
          - water
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
          - Animals tested were under Gosner stage 38. Endpoint was when animals reached complete immobility
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
          - Tab 2.2
          - NA
          - NA
          - "36.8"
          - "0.1"
          - "15"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
    originalStudyCitations:
      - ref: Duarte_2011
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2011"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Katzenberger_2014
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "2014"
    selectedEstimateRowNumbers:
      - 1283
      - 2094
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 76D3R
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pelodytes punctatus — AmphiTherm source

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
6 individuals were collected from 37,17,23.95,N / 8,51,8.33,W and 15 from 37,43,16.49,N / 8,46,15.11,W. The coordinates where most animals were collected were taken.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/6 -->
Thermal physiology variation and vulnerability to thermal stress in Pelodytes spp. populations from the Iberian Peninsula
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/83 -->
Note that a population of hybrids (Pelodytes punctatus x Pelodytes ibericus) was also used in this study. This data was not included.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
