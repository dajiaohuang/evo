---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Cophixalus hosmeri
    name:
      en: Cophixalus hosmeri
      zh: Cophixalus hosmeri
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
        sourceRowId: "3594"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3277
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3605"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3287
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3616"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 3298
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3277, 3287, 3298; Metadata_AmphiTherm.xlsx
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
      family: Microhylidae
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
      - rowNumber: 3277
        values:
          - "3594"
          - PPollo
          - Merino-Viteri_2018
          - The vulnerability of microhylid frogs, Cophixalus spp., to climate change in the Australian Wet Tropics
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/6
          - not_peer-reviewed
          - https://doi.org/10.4225/28/5b0c8d84e69b2
          - English
          - Cophixalus_hosmeri_pop1
          - Cophixalus_hosmeri_pop1_UTL_co1
          - NA
          - Anura
          - Microhylidae
          - Cophixalus hosmeri
          - NA
          - LC
          - wild
          - NA
          - "-16.46504"
          - "145.11174"
          - "1200"
          - NA
          - NA
          - NA
          - January_2009
          - November_2010
          - Geographical coordinates could not be approximated precisely
          - "16.1"
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
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - ambient
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 3.3
          - NA
          - NA
          - "31.7"
          - "0.4"
          - "4"
          - sd
          - NA
      - rowNumber: 3287
        values:
          - "3605"
          - Sarah Varon
          - Merino-Viteri_2018
          - The vulnerability of microhylid frogs, Cophixalus spp., to climate change in the Australian Wet Tropics
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/6
          - not_peer-reviewed
          - https://doi.org/10.4225/28/5b0c8d84e69b2
          - English
          - Cophixalus_hosmeri_pop2
          - Cophixalus_hosmeri_pop2_LTL_co1
          - NA
          - Anura
          - Microhylidae
          - Cophixalus hosmeri
          - NA
          - LC
          - wild
          - NA
          - "-16.39653329"
          - "145.2438325"
          - "1200"
          - NA
          - NA
          - NA
          - Janurary_2009
          - November_2010
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
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - ambient
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
          - "12"
          - "5.4"
          - "5"
          - sd
          - NA
      - rowNumber: 3298
        values:
          - "3616"
          - Sarah Varon
          - Merino-Viteri_2018
          - The vulnerability of microhylid frogs, Cophixalus spp., to climate change in the Australian Wet Tropics
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/6
          - not_peer-reviewed
          - https://doi.org/10.4225/28/5b0c8d84e69b2
          - English
          - Cophixalus_hosmeri_pop2
          - Cophixalus_hosmeri_pop2_PBT_co1
          - NA
          - Anura
          - Microhylidae
          - Cophixalus hosmeri
          - NA
          - LC
          - wild
          - NA
          - "-16.39653329"
          - "145.2438325"
          - "1200"
          - NA
          - NA
          - NA
          - Janurary_2009
          - November_2010
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
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - ambient
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "120"
          - linear
          - "8"
          - "40"
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
          - "22.2"
          - "2.6"
          - "6"
          - sd
          - NA
    originalStudyCitations:
      - ref: Merino-Viteri_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.4225/28/5b0c8d84e69b2
        year: "2018"
    selectedEstimateRowNumbers:
      - 3277
      - 3287
      - 3298
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - Y447
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Cophixalus hosmeri — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/6 -->
Thermal physiology of geographically restricted mountain frogs (Microhylidae: Cophixalus): current environment vs. phylogenetic history
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/6 -->
Thermal physiology of geographically restricted mountain frogs (Microhylidae: Cophixalus): current environment vs. phylogenetic history
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/6 -->
Thermal physiology of geographically restricted mountain frogs (Microhylidae: Cophixalus): current environment vs. phylogenetic history
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
