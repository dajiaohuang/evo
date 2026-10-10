---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Desmognathus brimleyorum
    name:
      en: Desmognathus brimleyorum
      zh: Desmognathus brimleyorum
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
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4480"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 4053
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4753"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4280
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 4053, 4054, 4280, 4281; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 4053
        values:
          - "4480"
          - Natalie_Claunch
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Desmognathus_brimleyorum_pop1
          - Desmognathus_brimleyorum_pop1_PBT_co1
          - NA
          - Caudata
          - Plethodontidae
          - Desmognathus brimleyorum
          - NA
          - LC
          - wild
          - NA
          - "34.37505584"
          - "-93.87887653"
          - "305"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - March to October 1968 and 1969 brimleyorum; Camp Albert Pike
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
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - substrate
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "0.5"
          - linear
          - "-2"
          - "53.2"
          - A single measurement was collected after a 2h measurement period, so the rate_measurement was taken as 0.5
          - NA
          - NA
          - NA
          - NA
          - "16"
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
          - "25.48648649"
          - "3.135135135"
          - "20"
          - sd
          - NA
      - rowNumber: 4054
        values:
          - "4481"
          - Natalie_Claunch
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Desmognathus_brimleyorum_pop2
          - Desmognathus_brimleyorum_pop2_PBT_co1
          - NA
          - Caudata
          - Plethodontidae
          - Desmognathus brimleyorum
          - NA
          - LC
          - wild
          - NA
          - "34.69064094"
          - "-94.33766554"
          - "493"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - March to October 1968 and 1969 Rich mountain
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
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - substrate
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "0.5"
          - linear
          - "-2"
          - "53.2"
          - A single measurement was collected after a 2h measurement period, so the rate_measurement was taken as 0.5
          - NA
          - NA
          - NA
          - NA
          - "16"
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
          - "23.64864865"
          - "7.675675676"
          - "18"
          - sd
          - NA
      - rowNumber: 4280
        values:
          - "4753"
          - Yefeng Yang
          - Young_and_Gifford_2013
          - Limited capacity for acclimation of thermal physiology in a salamander, Desmognathus brimleyorum
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - https://10.1007/s00360-012-0717-0
          - English
          - Desmognathus_brimleyorum_pop5
          - Desmognathus_brimleyorum_pop5_UTL_co1
          - NA
          - Caudata
          - Plethodontidae
          - Desmognathus brimleyorum
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2011"
          - May_2011
          - June_2011
          - Geographical coordinates were not provided because animals wre collected in various different sites.
          - "15"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "15"
          - NA
          - "56"
          - NA
          - adults
          - NA
          - "40"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "15"
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
          - SVL was taken as the mean of the range presented (30-50 mm)
          - NA
          - NA
          - NA
          - NA
          - "14"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "33.1"
          - "0.07"
          - "28"
          - se
          - Error type was assumed to be SE as a conservative measure.
      - rowNumber: 4281
        values:
          - "4754"
          - Yefeng Yang
          - Young_and_Gifford_2013
          - Limited capacity for acclimation of thermal physiology in a salamander, Desmognathus brimleyorum
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - https://10.1007/s00360-012-0717-0
          - English
          - Desmognathus_brimleyorum_pop5
          - Desmognathus_brimleyorum_pop5_UTL_co2
          - NA
          - Caudata
          - Plethodontidae
          - Desmognathus brimleyorum
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2011"
          - May_2011
          - June_2011
          - Geographical coordinates were not provided because animals wre collected in various different sites.
          - "15"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "15"
          - "7"
          - "56"
          - The acclimation temperature varied stochastically between 8 and 22C with a mean of 15C; so it was taken as 15C +/- 7C
          - adults
          - NA
          - "40"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "15"
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
          - SVL was taken as the mean of the range presented (30-50 mm)
          - NA
          - NA
          - NA
          - NA
          - "14"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - main text
          - NA
          - NA
          - "33.8"
          - "0.07"
          - "28"
          - se
          - Error type was assumed to be SE as a conservative measure.
    originalStudyCitations:
      - ref: Spotila_1972
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.2307/1942232
        year: "1972"
      - ref: Young_and_Gifford_2013
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://10.1007/s00360-012-0717-0
        year: "2013"
    selectedEstimateRowNumbers:
      - 4053
      - 4280
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 353MD
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Desmognathus brimleyorum — AmphiTherm source

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
