---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pleurodema bufoninum
    name:
      en: Pleurodema bufoninum
      zh: Pleurodema bufoninum
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
        sourceRowId: "206"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 166
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "212"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 172
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 166, 172, 3376, 3541, 3544; Metadata_AmphiTherm.xlsx
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
      family: Leptodactylidae
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
      - rowNumber: 166
        values:
          - "206"
          - Nayelli Rivera
          - Bonino_et_al_2020
          - |-
            Does temperature at local scale explain thermal biology patterns of
            temperate tadpoles?
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102744
          - English
          - Pleurodema_bufoninum_pop2
          - Pleurodema_bufoninum_pop2_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema bufoninum
          - NA
          - LC
          - wild
          - NA
          - "-41.16738889"
          - "-71.13269444"
          - "850"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "12.5"
          - NA
          - water_temp is the mean water temperature during the two weeks prior to sampling
          - acclimated
          - NA
          - NA
          - larvae
          - NA
          - "12.5"
          - "7.5"
          - "4"
          - The acclimation temperature varied between 5 and 20C so it was taken as 12.5 +/- 7.5C
          - larvae
          - "31"
          - "23.4"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "15"
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
          - Gosner stage was taken as the mean of the range presented (30-32)
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
          - "38.47"
          - "0.07"
          - "10"
          - se
          - NA
      - rowNumber: 172
        values:
          - "212"
          - Natalie_Claunch
          - Bonino_et_al_2020
          - |-
            Does temperature at local scale explain thermal biology patterns of
            temperate tadpoles?
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102744
          - English
          - Pleurodema_bufoninum_pop2
          - Pleurodema_bufoninum_pop2_LTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema bufoninum
          - NA
          - LC
          - wild
          - NA
          - "-41.167389"
          - "-71.132694"
          - "850"
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
          - larvae
          - NA
          - "12.5"
          - NA
          - "14"
          - Acclimation temperature were fluctuating and the mean of the range provided was taken
          - larvae
          - "31"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - Gosner stage was taken as the mean of the range provided in supplement
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
          - "0.31"
          - "0.03"
          - "10"
          - se
          - NA
      - rowNumber: 3376
        values:
          - "3701"
          - Patrice Pottier
          - Navas_et_al_2010
          - Thermal tolerances in tadpoles of three species of Patagonian anurans
          - "2010"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2994/057.005.0203
          - English
          - Pleurodema_bufoninum_pop1
          - Pleurodema_bufoninum_pop1_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema bufoninum
          - NA
          - LC
          - wild
          - NA
          - "-41.181389"
          - "-71.320556"
          - "899"
          - NA
          - November
          - "2001"
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
          - larvae
          - "32.5"
          - "22"
          - "1"
          - "20"
          - Gosner stage was taken as the mean of the range presented (28-37)
          - larvae
          - NA
          - "20"
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
          - NA
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
          - "38.2"
          - "0.28"
          - "10"
          - sd
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 3541
        values:
          - "3866"
          - Jose O. Valdebenito
          - Perotti_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.zool.2018.01.002
          - English
          - Pleurodema_bufoninum_pop4
          - Pleurodema_bufoninum_pop4_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema bufoninum
          - NA
          - LC
          - wild
          - NA
          - "-41.14237387"
          - "-71.36394372"
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
          - larvae
          - NA
          - "20"
          - NA
          - "4"
          - NA
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
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
          - main text
          - NA
          - NA
          - "38.46"
          - "0.07"
          - NA
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 3544
        values:
          - "3869"
          - Sarah Varon
          - Perotti_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.zool.2018.01.002
          - English
          - Pleurodema_bufoninum_pop3
          - Pleurodema_bufoninum_pop3_LTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema bufoninum
          - NA
          - LC
          - wild
          - NA
          - "-41.14237387"
          - "-71.36394372"
          - "1201"
          - NA
          - NA
          - NA
          - NA
          - NA
          - Coordinates were estimated from Google Maps
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "15"
          - "0.8"
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
          - text
          - NA
          - NA
          - "0.31"
          - "0.03"
          - NA
          - sd
          - It was uncleae whether SD or SE was presented. It was assumed to be SD because SD was presented for other traits
    originalStudyCitations:
      - ref: Bonino_et_al_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
        doi: https://doi.org/10.1016/j.jtherbio.2020.102744
        year: "2020"
      - ref: Navas_et_al_2010
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.2994/057.005.0203
        year: "2010"
      - ref: Perotti_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1016/j.zool.2018.01.002
        year: "2018"
    selectedEstimateRowNumbers:
      - 166
      - 172
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4KBDT
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pleurodema bufoninum — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
How sensitive are temperate tadpoles to climate change? The use of thermal physiology and niche model tools to assess vulnerability
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
It was unclear whether standard deviations of standard errors were presented. It was assumed to be SD because SD was presented for another trait in one of the tables.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
How sensitive are temperate tadpoles to climate change? The use of thermal physiology and niche model tools to assess vulnerability
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
