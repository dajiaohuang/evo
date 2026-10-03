---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pleurodema nebulosum
    name:
      en: Pleurodema nebulosum
      zh: Pleurodema nebulosum
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
        sourceRowId: "4232"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3827
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4233"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3828
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3827, 3828, 3838, 3839, 3843, 3851; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 3827
        values:
          - "4232"
          - Patrice Pottier
          - Sanabria_et_al_2013b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2013.05.005
          - English
          - Pleurodema_nebulosum_pop1
          - Pleurodema_nebulosum_pop1_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-32.13664"
          - "-68.47587"
          - "537"
          - NA
          - December
          - "2012"
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
          - juveniles
          - NA
          - "25"
          - "2"
          - "2"
          - NA
          - juveniles
          - NA
          - "15"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "25"
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
          - main text
          - NA
          - NA
          - "42.8"
          - "0.43"
          - "10"
          - se
          - Data was taken from the main text (results section) because Rohr et al. 2018 did not report SD.
      - rowNumber: 3828
        values:
          - "4233"
          - Nayelli_Rivera
          - Sanabria_et_al_2013b
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2013"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1016/j.jtherbio.2013.05.005
          - English
          - Pleurodema_nebulosum_pop1
          - Pleurodema_nebulosum_pop1_PBT_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-32.13664"
          - "-68.47587"
          - "537"
          - NA
          - December
          - "2012"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - juveniles
          - NA
          - NA
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
          - "9"
          - NA
          - linear
          - "1"
          - "50"
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
          - text
          - NA
          - NA
          - "30.2"
          - "1.98"
          - "10"
          - se
          - Sample size was taken as the same as for Ctmax
      - rowNumber: 3838
        values:
          - "4243"
          - Nayelli_Rivera
          - Sanabria_et_al_2020
          - |-
            Thermophilic response post feeding in Pleurodema nebulosum (Anura:
            Leptodactylidae) from Monte desert, Argentina.
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102605
          - English
          - Pleurodema_nebulosum_pop3
          - Pleurodema_nebulosum_pop3_PBT_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-31.1128"
          - "-68.6344"
          - "945"
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
          - "21"
          - "1"
          - "4"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - male
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "6"
          - "0.5"
          - linear
          - "10"
          - "45"
          - fed
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
          - text
          - NA
          - NA
          - "24.5"
          - "0.4"
          - "15"
          - se
          - NA
      - rowNumber: 3839
        values:
          - "4244"
          - Nayelli_Rivera
          - Sanabria_et_al_2020
          - |-
            Thermophilic response post feeding in Pleurodema nebulosum (Anura:
            Leptodactylidae) from Monte desert, Argentina.
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2020.102605
          - English
          - Pleurodema_nebulosum_pop3
          - Pleurodema_nebulosum_pop3_PBT_co2
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-31.1128"
          - "-68.6344"
          - "945"
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
          - "21"
          - "1"
          - "4"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - male
          - Tpref
          - NA
          - body
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "6"
          - "0.5"
          - linear
          - "10"
          - "45"
          - fasted for one day
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
          - text
          - NA
          - NA
          - "22.1"
          - "0.33"
          - "15"
          - se
          - NA
      - rowNumber: 3843
        values:
          - "4248"
          - Yefeng Yang
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Pleurodema_nebulosum_pop2
          - Pleurodema_nebulosum_pop2_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-31.888095"
          - "-68.544677"
          - "609"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - NA
          - "25.82"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - "0.2"
          - "4"
          - Gosner stage was taken as the mean of the range presented (25-38)
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "20"
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
          - Tab 2
          - NA
          - NA
          - "41.79"
          - "0.58"
          - "15"
          - se
          - NA
      - rowNumber: 3851
        values:
          - "4256"
          - Sarah Varon
          - Sanabria_et_al_2021
          - "Vulnerability to warming in a desert amphibian tadpole community: the role of interpopulational variation"
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jzo.12850
          - English
          - Pleurodema_nebulosum_pop2
          - Pleurodema_nebulosum_pop2_PBT_co1
          - NA
          - Anura
          - Leptodactylidae
          - Pleurodema nebulosum
          - NA
          - LC
          - wild
          - NA
          - "-31.888095"
          - "-68.544677"
          - "609"
          - NA
          - NA
          - NA
          - October_2013
          - February_2014
          - Cerrillo Barboza pond; temporary pomd
          - "25.82"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - "0.2"
          - NA
          - "4"
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - "20"
          - NA
          - NA
          - NA
          - NA
          - NA
          - "1"
          - "12"
          - linear
          - "13"
          - "30"
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
          - "24.48"
          - "1.27"
          - "15"
          - se
          - NA
    originalStudyCitations:
      - ref: Sanabria_et_al_2013b
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: http://dx.doi.org/10.1016/j.jtherbio.2013.05.005
        year: "2013"
      - ref: Sanabria_et_al_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
        doi: https://doi.org/10.1016/j.jtherbio.2020.102605
        year: "2020"
      - ref: Sanabria_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1111/jzo.12850
        year: "2021"
    selectedEstimateRowNumbers:
      - 3827
      - 3828
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 6W42J
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pleurodema nebulosum — AmphiTherm source

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
Thermal parameters and locomotor performance in juvenile of Pleurodema nebulosum (Anura: Leptodactylidae) from the Monte Desert
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Thermal parameters and locomotor performance in juvenile of Pleurodema nebulosum (Anura: Leptodactylidae) from the Monte Desert
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
