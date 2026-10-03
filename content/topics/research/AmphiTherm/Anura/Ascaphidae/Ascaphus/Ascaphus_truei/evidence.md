---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Ascaphus truei
    name:
      en: Ascaphus truei
      zh: Ascaphus truei
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
        sourceRowId: "1073"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 951
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 951, 952, 953, 4301; Metadata_AmphiTherm.xlsx
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
      family: Ascaphidae
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
      - rowNumber: 951
        values:
          - "1073"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Ascaphus_truei_pop2
          - Ascaphus_truei_pop2_UTL_co1
          - NA
          - Anura
          - Ascaphidae
          - Ascaphus truei
          - NA
          - LC
          - wild
          - NA
          - "46.989271"
          - "-114.014557"
          - "1524"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Geographical coordinates were taken from Rohr et al. 2018
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
          - "0"
          - NA
          - "8"
          - Acclimation_time was taken as the mean of the range presented (7-9 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
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
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Fig 3
          - NA
          - NA
          - "27.54902"
          - "0.1388889"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 952
        values:
          - "1074"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Ascaphus_truei_pop2
          - Ascaphus_truei_pop2_UTL_co2
          - NA
          - Anura
          - Ascaphidae
          - Ascaphus truei
          - NA
          - LC
          - wild
          - NA
          - "46.989271"
          - "-114.014557"
          - "1524"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Geographical coordinates were taken from Rohr et al. 2018
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
          - NA
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-4 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
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
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Fig 3
          - NA
          - NA
          - "29.54248"
          - "0.22058825"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 953
        values:
          - "1075"
          - Patrice Pottier
          - Claussen_1973
          - The thermal relations of the tailed frog, Ascaphus truei, and the pacific treefrog, Hyla regilla
          - "1973"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(73)90377-0
          - English
          - Ascaphus_truei_pop2
          - Ascaphus_truei_pop2_UTL_co3
          - NA
          - Anura
          - Ascaphidae
          - Ascaphus truei
          - NA
          - LC
          - wild
          - NA
          - "46.989271"
          - "-114.014557"
          - "1524"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Geographical coordinates were taken from Rohr et al. 2018
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
          - "4"
          - Acclimation_time was taken as the mean of the range presented (3-4 days)
          - adults
          - NA
          - "33"
          - NA
          - NA
          - mixed
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
          - SVL was taken as reported in Rohr et al. 2018.
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
          - Fig 3
          - NA
          - NA
          - "29.46078"
          - "0.2124183"
          - "6"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 4301
        values:
          - "4777"
          - Patrice Pottier
          - de-Vlaming_and_Bury_1970
          - Thermal selection in tadpoles of the tailed-frog, Ascaphus truei
          - "1970"
          - NA
          - NA
          - peer-reviewed
          - 10.2307/1562892
          - English
          - Ascaphus_truei_pop1
          - Ascaphus_truei_pop1_UTL_co1
          - NA
          - Anura
          - Ascaphidae
          - Ascaphus truei
          - NA
          - LC
          - wild
          - NA
          - "41.82341"
          - "-123.940458"
          - "550"
          - NA
          - NA
          - NA
          - NA
          - NA
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
          - "5"
          - NA
          - "30"
          - NA
          - larvae
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - NA
          - "0.42"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - SVL was reported as in Rohr et al. 2018. Endpoint was the onset of paralysis, which is similar to the onset of spasms
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
          - main text
          - NA
          - NA
          - "29.6"
          - NA
          - "8"
          - NA
          - Data was taken the main text (results section).
    originalStudyCitations:
      - ref: Claussen_1973
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0300-9629(73)90377-0
        year: "1973"
      - ref: de-Vlaming_and_Bury_1970
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.2307/1562892
        year: "1970"
    selectedEstimateRowNumbers:
      - 951
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - H5CV
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Ascaphus truei — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data was digitised from figure 3 because Rohr et al. 2018 do not report standard deviations. Error was divided by two because the figure represent 2SE on each side of the mean
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
