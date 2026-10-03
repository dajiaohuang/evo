---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Quasipaa spinosa
    name:
      en: Quasipaa spinosa
      zh: Quasipaa spinosa
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
        sourceRowId: "4757"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 4284
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 4284, 4285, 4286, 4287, 4288, 4289; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 4284
        values:
          - "4757"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop1
          - Quasipaa_spinosa_pop1_UTL_co1
          - Yangshan (YS) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "24.48"
          - "112.63"
          - "225"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "42.1"
          - "1.9"
          - "8"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4285
        values:
          - "4758"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop2
          - Quasipaa_spinosa_pop2_UTL_co1
          - Longsheng (GLS) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "25.82"
          - "109.98"
          - "478"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "43.4"
          - "2"
          - "8"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4286
        values:
          - "4759"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop3
          - Quasipaa_spinosa_pop3_UTL_co1
          - Jinggangshan (JGS) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "26.34"
          - "114.1"
          - "809"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "42.5"
          - "1.3"
          - "7"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4287
        values:
          - "4760"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop4
          - Quasipaa_spinosa_pop4_UTL_co1
          - Wuyishan (WYS) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "27.27"
          - "118.01"
          - "302"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "43"
          - "2.6"
          - "10"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4288
        values:
          - "4761"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop5
          - Quasipaa_spinosa_pop5_UTL_co1
          - Lishui (LS) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "28.27"
          - "119.54"
          - "749"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "43.7"
          - "1"
          - "7"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4289
        values:
          - "4762"
          - Patrice Pottier
          - Zhang_and_Liu_2010
          - Giant spiny-frog (Paa spinosa) from different populations differ in thermal preference but not in thermal tolerance
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1007/s10452-009-9310-3
          - English
          - Quasipaa_spinosa_pop6
          - Quasipaa_spinosa_pop6_UTL_co1
          - Pingjiang (PJ) population
          - Anura
          - Dicroglossidae
          - Quasipaa spinosa
          - NA
          - VU
          - wild
          - NA
          - "28.72"
          - "113.58"
          - "132"
          - NA
          - NA
          - "2008"
          - June_2008
          - July_2008
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
          - "19"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - "109"
          - NA
          - NA
          - mixed
          - CTmax
          - LRR
          - body
          - "28"
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
          - SVL was taken as the mean of the range presented (90-128 mm)
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
          - Table 2
          - NA
          - NA
          - "41.6"
          - "3.4"
          - "7"
          - sd
          - Data was taken from from Table 2 because SD was not reported in Rohr et al. 2018.
    originalStudyCitations:
      - ref: Zhang_and_Liu_2010
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1007/s10452-009-9310-3
        year: "2010"
    selectedEstimateRowNumbers:
      - 4284
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4R28R
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Quasipaa spinosa — AmphiTherm source

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
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
