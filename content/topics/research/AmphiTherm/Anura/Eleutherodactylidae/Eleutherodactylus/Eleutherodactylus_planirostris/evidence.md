---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Eleutherodactylus planirostris
    name:
      en: Eleutherodactylus planirostris
      zh: Eleutherodactylus planirostris
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
        sourceRowId: "4054"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3713
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4059"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3718
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3713, 3714, 3718; Metadata_AmphiTherm.xlsx
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
      family: Eleutherodactylidae
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
      - rowNumber: 3713
        values:
          - "4054"
          - Patrice Pottier
          - Pough_et_al_1977
          - Physiological Basis of Habitat Partitioning in Jamaican Eleutherodactylus
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - 10.1007/BF00345561
          - English
          - Eleutherodactylus_planirostris_pop1
          - Eleutherodactylus_planirostris_pop1_UTL_co1
          - The same individuals were acclimated to both 20C and 30C, hence the shared cohort IDs
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus planirostris
          - NA
          - LC
          - wild
          - NA
          - "18.308113"
          - "-76.981244"
          - "276"
          - NA
          - January
          - "1976"
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
          - "20"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "18.9"
          - "0.57"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - "20"
          - "0.75"
          - NA
          - NA
          - NA
          - NA
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
          - "38.7"
          - "0.38"
          - "10"
          - se
          - Data was taken from table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3714
        values:
          - "4055"
          - Patrice Pottier
          - Pough_et_al_1977
          - Physiological Basis of Habitat Partitioning in Jamaican Eleutherodactylus
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - 10.1007/BF00345561
          - English
          - Eleutherodactylus_planirostris_pop1
          - Eleutherodactylus_planirostris_pop1_UTL_co1
          - The same individuals were acclimated to both 20C and 30C, hence the shared cohort IDs
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus planirostris
          - NA
          - LC
          - wild
          - NA
          - "18.308113"
          - "-76.981244"
          - "276"
          - NA
          - January
          - "1976"
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
          - "30"
          - "1"
          - "3"
          - Acclimation time was taken as the mean of the range presented (2-4 days)
          - adults
          - NA
          - "18.9"
          - "0.57"
          - NA
          - unknown
          - CTmax
          - other
          - water
          - "30"
          - "0.75"
          - NA
          - NA
          - NA
          - NA
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
          - "40.5"
          - "0.35"
          - "10"
          - se
          - Data was taken from table 2 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3718
        values:
          - "4059"
          - Sarah Varon
          - Pough_et_al_1977
          - Physiological Basis of Habitat Partitioning in Jamaican Eleutherodactylus
          - "1977"
          - NA
          - NA
          - peer-reviewed
          - 10.1007/BF00345561
          - English
          - Eleutherodactylus_planirostris_pop2
          - Eleutherodactylus_planirostris_pop2_PBT_co1
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus planirostris
          - NA
          - LC
          - wild
          - NA
          - "18.39441794"
          - "-77.02793599"
          - "105"
          - NA
          - NA
          - NA
          - January_12_1976
          - January_15_1976
          - Coordinates were estimated from Google Maps
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
          - "1"
          - "14"
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
          - "2.25"
          - NA
          - linear
          - "10"
          - "35"
          - NA
          - "100"
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
          - "27.3"
          - "0.66"
          - "41"
          - se
          - The position of the animals was only recorded once after 90 to 180 minutes
    originalStudyCitations:
      - ref: Pough_et_al_1977
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1007/BF00345561
        year: "1977"
    selectedEstimateRowNumbers:
      - 3713
      - 3718
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 399MB
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Eleutherodactylus planirostris — AmphiTherm source

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
SVL and body_mass were reported in table 1. The endpoint was "the absence of muscle tone and failure to respond to being picked up"
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/63 -->
SVL and body_mass were reported in table 1. The endpoint was "the absence of muscle tone and failure to respond to being picked up"
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
