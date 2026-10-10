---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Scaphiopus couchii
    name:
      en: Scaphiopus couchii
      zh: Scaphiopus couchii
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
          en: Selected hot lethal-limit assay estimate
          zh: 选列的高温致死限实验估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "800"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 708
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3439"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3122
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 708, 709, 710, 711, 712, 3122, 3123; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 708
        values:
          - "800"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Scaphiopus_couchii_pop1
          - Scaphiopus_couchii_pop1_UTL_co1
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "15"
          - "0.2"
          - "6"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "7"
          - "1"
          - "8"
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
          - Fig 2
          - NA
          - NA
          - "37.48727984"
          - NA
          - "7"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 709
        values:
          - "801"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Scaphiopus_couchii_pop1
          - Scaphiopus_couchii_pop1_UTL_co2
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "18"
          - "0.2"
          - "7"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "4"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/63
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
          - "39.29745597"
          - NA
          - "4"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 710
        values:
          - "802"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Scaphiopus_couchii_pop1
          - Scaphiopus_couchii_pop1_UTL_co3
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "25"
          - "0.2"
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "4"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/63
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
          - "40.2074364"
          - NA
          - "4"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 711
        values:
          - "803"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Scaphiopus_couchii_pop1
          - Scaphiopus_couchii_pop1_UTL_co4
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "30"
          - "0.2"
          - "6"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "4"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/63
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
          - "41.31311155"
          - NA
          - "4"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 712
        values:
          - "804"
          - Patrice Pottier
          - Brown_1969
          - The Heat Resistance of Some Anuran Tadpoles (Hylidae and Pelobatidae)
          - "1969"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1441703
          - English
          - Scaphiopus_couchii_pop1
          - Scaphiopus_couchii_pop1_UTL_co5
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - acclimated
          - "20.5"
          - "2.5"
          - larvae
          - NA
          - "35"
          - "0.2"
          - "3"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "8.333333333"
          - "4"
          - "1"
          - "8"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/63
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
          - "41.1369863"
          - NA
          - "4"
          - NA
          - n_trait was taken as the n_test_temp
      - rowNumber: 3122
        values:
          - "3439"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/6
          - not_peer-reviewed
          - NA
          - English
          - Scaphiopus_couchii_pop2
          - Scaphiopus_couchii_pop2_UTL_co1
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.05"
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
          - "86.4"
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
          - Tab 2
          - NA
          - NA
          - "42.86"
          - "0.49"
          - "15"
          - sd
          - NA
      - rowNumber: 3123
        values:
          - "3440"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/6
          - not_peer-reviewed
          - NA
          - English
          - Scaphiopus_couchii_pop2
          - Scaphiopus_couchii_pop2_UTL_co2
          - NA
          - Anura
          - Scaphiopodidae
          - Scaphiopus couchii
          - NA
          - LC
          - lab
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
          - "86.4"
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
          - Tab 2
          - NA
          - NA
          - "42.66"
          - "0.41"
          - "15"
          - sd
          - NA
    originalStudyCitations:
      - ref: Brown_1969
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.2307/1441703
        year: "1969"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2018"
    selectedEstimateRowNumbers:
      - 708
      - 3122
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 79THW
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Scaphiopus couchii — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/63 -->
n_test_temp was determined based on the number of points in figure 1. The n_replicates_per_temp was taken to be 1 as a conservative measure
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
