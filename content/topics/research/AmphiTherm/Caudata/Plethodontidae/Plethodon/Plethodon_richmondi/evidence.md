---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Plethodon richmondi
    name:
      en: Plethodon richmondi
      zh: Plethodon richmondi
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
        sourceRowId: "3179"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2868
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3526"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3209
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2868, 2869, 3209, 3226; Metadata_AmphiTherm.xlsx
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
      order: Caudata
      family: Plethodontidae
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
      - rowNumber: 2868
        values:
          - "3179"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Plethodon_richmondi_pop1
          - Plethodon_richmondi_pop1_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Plethodontidae
          - Plethodon richmondi
          - NA
          - LC
          - wild
          - NA
          - "35.254964"
          - "-97.351656"
          - "340"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "10"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "78"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Table 1
          - NA
          - NA
          - "31.28"
          - "0.475"
          - "4"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 2869
        values:
          - "3180"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Plethodon_richmondi_pop1
          - Plethodon_richmondi_pop1_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Plethodontidae
          - Plethodon richmondi
          - NA
          - LC
          - wild
          - NA
          - "35.254964"
          - "-97.351656"
          - "340"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were taken from Rohr et al. 2018.
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
          - "10"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "78"
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
          - SVL was reported as in Rohr et al. 2018.
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
          - Table 1
          - NA
          - NA
          - "33.48"
          - "0.125"
          - "4"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3209
        values:
          - "3526"
          - Sarah Varon
          - Markle_2015
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2015"
          - "1"
          - Ecophysiological Analysis of Variation in Geographic Range Size
          - not_peer-reviewed
          - https://doi.org/10.1002%2Fece3.4006
          - English
          - Plethodon_richmondi_pop2
          - Plethodon_richmondi_pop2_LTL_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon richmondi
          - NA
          - LC
          - wild
          - NA
          - "37.87697132"
          - "-80.20447227"
          - "688"
          - NA
          - NA
          - NA
          - "2009"
          - "2011"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/28
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
          - "14"
          - NA
          - "28"
          - Animals were acclimated for at least 4 weeks
          - adults
          - NA
          - NA
          - "1.07"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "13"
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
          - "-1.16"
          - NA
          - "18"
          - NA
          - error not reported
      - rowNumber: 3226
        values:
          - "3543"
          - Patrice Pottier
          - Markle_and_Kozak_2018
          - Low acclimation capacity of narrow-ranging thermal specialists exposes susceptibility to global climate change
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1002/ece3.4006
          - English
          - Plethodon_richmondi_pop5
          - Plethodon_richmondi_pop5_UTL_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon richmondi
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2009"
          - "2012"
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
          - "14"
          - NA
          - NA
          - NA
          - adults
          - NA
          - NA
          - "1.07"
          - NA
          - mixed
          - CTmax
          - LRR
          - water
          - NA
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
          - Tab 1
          - NA
          - NA
          - "32.7"
          - NA
          - "14"
          - NA
          - sd_trait not reported
    originalStudyCitations:
      - ref: Lutterschmidt_and_Hutchison_1997
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1139/z97-782
        year: "1997"
      - ref: Markle_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1002%2Fece3.4006
        year: "2015"
      - ref: Markle_and_Kozak_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1002/ece3.4006
        year: "2018"
    selectedEstimateRowNumbers:
      - 2868
      - 3209
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 77PVY
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Plethodon richmondi — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Ecology and Evolution of Geographic Range Size Variation  in North American Plethodontid Salamanders: Perspectives from Thermal Physiology
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/28 -->
Specific locality not provided (throughout the Appalachian Mountains of eastern North America including the states New York, North Carolina, Pennsylvania, Virginia, and West Virginia). The central location was estimated from Google Maps
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
