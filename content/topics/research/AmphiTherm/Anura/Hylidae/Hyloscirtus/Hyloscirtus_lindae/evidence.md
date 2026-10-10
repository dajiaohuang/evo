---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Hyloscirtus lindae
    name:
      en: Hyloscirtus lindae
      zh: Hyloscirtus lindae
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
        sourceRowId: "1973"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1780
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4016"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3676
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1780, 3659, 3676; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 1780
        values:
          - "1973"
          - Nayelli Rivera
          - Gutierrez-Pesquera_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2015"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Hyloscirtus_lindae_pop2
          - Hyloscirtus_lindae_pop2_UTL_co1
          - population_ID was considered the same as in Pintanel (2018) because animals were collected in the same location
          - Anura
          - Hylidae
          - Hyloscirtus lindae
          - NA
          - LC
          - unclear
          - NA
          - "-0.3877"
          - "-78.0619"
          - "2800"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/28
          - NA
          - NA
          - "12.77"
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "2.5"
          - Acclimation time was taken as the mean of the range presented (2-3 days).
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
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
          - Tab 1 (appendix)
          - NA
          - NA
          - "36.5"
          - "0.1"
          - "17"
          - se
          - NA
      - rowNumber: 3659
        values:
          - "3999"
          - Rachel Oh
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Hyloscirtus_lindae_pop1
          - Hyloscirtus_lindae_pop1_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/12
          - Anura
          - Hylidae
          - Hyloscirtus lindae
          - NA
          - LC
          - wild
          - NA
          - "-0.39"
          - "-78.06"
          - "2650"
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
          - "36.54"
          - "0.08"
          - "18"
          - se
          - NA
      - rowNumber: 3676
        values:
          - "4016"
          - Natalie_Claunch
          - Pintanel_et_al_2021
          - "Predators like it hot: Thermal mismatch in a predatorâ€“prey system across an elevational tropical gradient"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - 10.1111/1365-2656.13516
          - English
          - Hyloscirtus_lindae_pop1
          - Hyloscirtus_lindae_pop1_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyloscirtus lindae
          - NA
          - LC
          - wild
          - NA
          - "-0.39"
          - "-78.06"
          - "2650"
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
          - "1.51"
          - "0.08"
          - "15"
          - se
          - Data was taken from supplementary tables
    originalStudyCitations:
      - ref: Gutierrez-Pesquera_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2015"
      - ref: Pintanel_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1111/1365-2656.13516
        year: "2021"
    selectedEstimateRowNumbers:
      - 1780
      - 3676
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3NGQ8
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Hyloscirtus lindae — AmphiTherm source

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
Una valoración macrofisiológica de la vulnerabilidad al calentamiento global. Análisis de los límites de tolerancia térmica en comunidades de anfibios en gradientes latitudinales y altitudinales
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
It is specified that some species were obtained from a local lab and the rest of the species were sampled in ponds (it does not say which species were from the local lab or ponds).  All species report coordinates from the ponds where they can be found (except one), but I cannot assure whether the origin was from a lab or wild
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/12 -->
population_ID was taken as the same as in Madalozzo 2018 and Pintanel (2018) because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
