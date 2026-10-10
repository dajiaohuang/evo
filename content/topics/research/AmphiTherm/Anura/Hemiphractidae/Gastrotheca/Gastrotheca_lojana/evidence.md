---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Gastrotheca lojana
    name:
      en: Gastrotheca lojana
      zh: Gastrotheca lojana
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
        sourceRowId: "3908"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3581
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4013"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3673
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3581, 3656, 3673; Metadata_AmphiTherm.xlsx
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
      family: Hemiphractidae
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
      - rowNumber: 3581
        values:
          - "3908"
          - Patrice Pottier
          - Pintanel_2018
          - Thermal adaptation of amphibians in tropical mountains. Consequences of global warming
          - "2018"
          - "2"
          - Are tropical barriers `higher` on the way up or down?
          - not_peer-reviewed
          - NA
          - English
          - Gastrotheca_lojana_pop1
          - Gastrotheca_lojana_pop1_UTL_co1
          - NA
          - Anura
          - Hemiphractidae
          - Gastrotheca lojana
          - NA
          - VU
          - wild
          - NA
          - "-3.61"
          - "-79.23"
          - "2265"
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
          - "39.53"
          - "0.11"
          - "7"
          - se
          - NA
      - rowNumber: 3656
        values:
          - "3996"
          - Rachel Oh
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Gastrotheca_lojana_pop2
          - Gastrotheca_lojana_pop2_UTL_co1
          - NA
          - Anura
          - Hemiphractidae
          - Gastrotheca lojana
          - NA
          - VU
          - wild
          - NA
          - "-2.64"
          - "-78.695"
          - "2265"
          - NA
          - NA
          - NA
          - November_2014
          - August_2016
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
          - "25"
          - "20"
          - NA
          - "3"
          - NA
          - larvae
          - NA
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
          - Tab S2
          - NA
          - NA
          - "39.53"
          - "0.11"
          - "7"
          - se
          - NA
      - rowNumber: 3673
        values:
          - "4013"
          - Natalie_Claunch
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Gastrotheca_lojana_pop2
          - Gastrotheca_lojana_pop2_LTL_co1
          - NA
          - Anura
          - Hemiphractidae
          - Gastrotheca lojana
          - NA
          - VU
          - wild
          - NA
          - "-2.64"
          - "-78.695"
          - "2265"
          - NA
          - NA
          - NA
          - November_2014
          - August_2016
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
          - "38"
          - "20"
          - NA
          - "3"
          - Animals were acclimated for at least 3 days
          - larvae
          - "38"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - prodding
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
          - "12"
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
          - "0.07"
          - "0.09"
          - "6"
          - se
          - Data was taken from supplementary tables
    originalStudyCitations:
      - ref: Pintanel_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Pintanel_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1111/1365-2656.13516
        year: "2021"
    selectedEstimateRowNumbers:
      - 3581
      - 3673
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6K9WF
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Gastrotheca lojana — AmphiTherm source

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
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
