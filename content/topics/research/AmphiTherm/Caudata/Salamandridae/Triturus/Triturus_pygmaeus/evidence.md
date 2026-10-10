---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Triturus pygmaeus
    name:
      en: Triturus pygmaeus
      zh: Triturus pygmaeus
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
        sourceRowId: "1492"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1334
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2320"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2114
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2345"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 2139
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1334, 2069, 2114, 2139; Metadata_AmphiTherm.xlsx
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
      family: Salamandridae
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
      - rowNumber: 1334
        values:
          - "1492"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Triturus_pygmaeus_pop1
          - Triturus_pygmaeus_pop1_UTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Triturus pygmaeus
          - NA
          - NT
          - wild
          - NA
          - "37.378831"
          - "-2.858458"
          - "1756"
          - NA
          - NA
          - "2009"
          - February_2009
          - June_2009
          - Coordinates were taken from Rohr et al. 2018
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
          - "115"
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
          - Tab S1
          - NA
          - NA
          - "38.5"
          - "0.1"
          - "10"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 2069
        values:
          - "2273"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Triturus_pygmaeus_pop2
          - Triturus_pygmaeus_pop2_UTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Triturus pygmaeus
          - NA
          - NT
          - wild
          - NA
          - "37.9735"
          - "-4.8482"
          - "464"
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
          - "37.1"
          - "0.47"
          - "14"
          - sd
          - NA
      - rowNumber: 2114
        values:
          - "2320"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Triturus_pygmaeus_pop2
          - Triturus_pygmaeus_pop2_LTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Triturus pygmaeus
          - NA
          - NT
          - wild
          - NA
          - "37.9735"
          - "-4.8482"
          - "464"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "15.69"
          - NA
          - NA
          - NA
          - Ambient temperature taken from Table S2
          - acclimated
          - NA
          - NA
          - larvae
          - "37.5"
          - "20"
          - NA
          - "3.5"
          - NA
          - larvae
          - "37.5"
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
          - "2.6"
          - "0.68"
          - "16"
          - sd
          - NA
      - rowNumber: 2139
        values:
          - "2345"
          - Natalie_Claunch
          - Gvozdik_2015
          - "Mismatch between ectotherm thermal preferenda and optima for swimming: a test of the evolutionary pace hypothesis"
          - "2015"
          - NA
          - NA
          - peer-reviewed
          - DOI 10.1007/s11692-015-9305-z
          - English
          - Triturus_pygmaeus_pop6
          - Triturus_pygmaeus_pop6_PBT_co1
          - NA
          - Caudata
          - Salamandridae
          - Triturus pygmaeus
          - NA
          - NT
          - wild
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
          - adults
          - NA
          - "20"
          - NA
          - "61"
          - Acclimated to 18-22C for at least two months
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "24"
          - "6"
          - linear
          - "5"
          - "32.5"
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
          - "18.5"
          - "0.9"
          - "5"
          - se
          - NA
    originalStudyCitations:
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Gvozdik_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: DOI 10.1007/s11692-015-9305-z
        year: "2015"
    selectedEstimateRowNumbers:
      - 1334
      - 2114
      - 2139
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 595FX
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Triturus pygmaeus — AmphiTherm source

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
