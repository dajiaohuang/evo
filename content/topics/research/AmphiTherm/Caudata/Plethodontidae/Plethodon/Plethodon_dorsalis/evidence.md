---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Plethodon dorsalis
    name:
      en: Plethodon dorsalis
      zh: Plethodon dorsalis
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
        sourceRowId: "201"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 162
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4460"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4033
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 162, 4033; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 162
        values:
          - "201"
          - Ana Longo
          - Bliss_and_Cecala_2017
          - Terrestrial salamanders alter antipredator behavior thresholds following tail autotomy
          - "2017"
          - NA
          - NA
          - peer-reviewed
          - 10.1655/Herpetologica-D-16-00059.1
          - English
          - Plethodon_dorsalis_pop1
          - Plethodon_dorsalis_pop1_PBT_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon dorsalis
          - NA
          - LC
          - wild
          - NA
          - "35.20204151"
          - "-85.92135037"
          - "586"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were estimated from Google Maps
          - "11.3"
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
          - NA
          - "2"
          - Animals were kept for a maximum of 2 days
          - adults
          - NA
          - "40.5"
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - linear
          - "2"
          - "27"
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
          - figure
          - NA
          - NA
          - "13.5021097"
          - "1.5822785"
          - "21"
          - se
          - NA
      - rowNumber: 4033
        values:
          - "4460"
          - Patrice Pottier
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_dorsalis_pop3
          - Plethodon_dorsalis_pop3_UTL_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon dorsalis
          - gustaclavius
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/28
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
          - NA
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
          - Fig 3
          - NA
          - NA
          - "32.27884615"
          - "0.596153846"
          - "16"
          - sd
          - Data was dititised from figure 3.
    originalStudyCitations:
      - ref: Bliss_and_Cecala_2017
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1655/Herpetologica-D-16-00059.1
        year: "2017"
      - ref: Spotila_1972
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.2307/1942232
        year: "1972"
    selectedEstimateRowNumbers:
      - 162
      - 4033
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - "78283"
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Plethodon dorsalis — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/28 -->
Animals were collected in March to October 1968 and 1969. Animals were collected in different localities in the Arkansas Ozarks
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
