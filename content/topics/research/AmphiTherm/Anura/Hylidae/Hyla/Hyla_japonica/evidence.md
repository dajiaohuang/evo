---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Hyla japonica
    name:
      en: Hyla japonica
      zh: Hyla japonica
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
        sourceRowId: "98"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 88
      - topic: ecology
        title:
          en: Selected cold lethal-limit assay estimate
          zh: 选列的低温致死限实验估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "99"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 89
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 88, 89; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 88
        values:
          - "98"
          - Ana Longo
          - Berman_et_al_2016
          - The Japanese Tree Frog (Hyla japonica),One of the Most Cold-Resistant Species of Amphibians
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - 10.1134/S0012496616060065
          - English
          - Hyla_japonica_pop1
          - Hyla_japonica_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla japonica
          - NA
          - LC
          - wild
          - NA
          - "49.41666667"
          - "130.0833333"
          - "138"
          - NA
          - September
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
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/42
          - juveniles
          - NA
          - NA
          - "2.83"
          - NA
          - unknown
          - CTmin
          - SCP
          - body
          - NA
          - "0.005"
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
          - table
          - NA
          - NA
          - "-3.5"
          - "0.2"
          - "10"
          - se
          - NA
      - rowNumber: 89
        values:
          - "99"
          - Ana Longo
          - Berman_et_al_2016
          - The Japanese Tree Frog (Hyla japonica),One of the Most Cold-Resistant Species of Amphibians
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - 10.1134/S0012496616060065
          - English
          - Hyla_japonica_pop1
          - Hyla_japonica_pop1_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Hyla japonica
          - NA
          - LC
          - wild
          - NA
          - "49.41666667"
          - "130.0833333"
          - "138"
          - NA
          - September
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
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/42
          - juveniles
          - NA
          - NA
          - "2.83"
          - NA
          - unknown
          - LT50_cold
          - death
          - NA
          - NA
          - NA
          - "48"
          - "12"
          - "1"
          - "3.75"
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
          - table
          - NA
          - NA
          - "-30.11707"
          - "2.017684"
          - "12"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
    originalStudyCitations:
      - ref: Berman_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1134/S0012496616060065
        year: "2016"
    selectedEstimateRowNumbers:
      - 88
      - 89
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

# Hyla japonica — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/42 -->
The sample contained a mix of adults and juveniles. Because two thirds of the sample were juveniles, "juveniles" was used for "life_stage_acclimated" and "life_stage_tested". Acclimation conditions were unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/42 -->
The sample contained a mix of adults and juveniles. Because two thirds of the sample were juveniles, "juveniles" was used for "life_stage_acclimated" and "life_stage_tested". Acclimation conditions were unclear.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Sample size was taken as the number of test temperatures. LT50 was estimated based on survival data presented in Table 3. The cold tolerance value seems extreme, but frogs survived temperatures to -35C
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
