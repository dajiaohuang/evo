---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Eleutherodactylus portoricensis
    name:
      en: Eleutherodactylus portoricensis
      zh: Eleutherodactylus portoricensis
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
        sourceRowId: "1067"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 949
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1391"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1242
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 949, 950, 1242, 2190, 2191, 2192; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 949
        values:
          - "1067"
          - Patrice Pottier
          - Christian_et_al_1988
          - Thermal Relations of Some Tropical Frogs Along an Altitudinal Gradient
          - "1988"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/2388239
          - English
          - Eleutherodactylus_portoricensis_pop1
          - Eleutherodactylus_portoricensis_pop1_UTL_co1
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.295135"
          - "-65.800033"
          - "500"
          - NA
          - October
          - NA
          - NA
          - NA
          - Geographical coordinates were taken from Rohr et al. 2018
          - "21"
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
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "25"
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
          - Tab 1; Rohr et al. 2018
          - NA
          - NA
          - "36.2"
          - "0.47"
          - "14"
          - sd
          - Data taken from Rohr et al. 2018; sd_ht taken from the Tab 1
      - rowNumber: 950
        values:
          - "1068"
          - Patrice Pottier
          - Christian_et_al_1988
          - Thermal Relations of Some Tropical Frogs Along an Altitudinal Gradient
          - "1988"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/2388239
          - English
          - Eleutherodactylus_portoricensis_pop1
          - Eleutherodactylus_portoricensis_pop1_UTL_co2
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.295135"
          - "-65.800033"
          - "500"
          - NA
          - April
          - NA
          - NA
          - NA
          - Geographical coordinates were taken from Rohr et al. 2018
          - "19.5"
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
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "25"
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
          - Tab 1; Rohr et al. 2018
          - NA
          - NA
          - "36.3"
          - "0.72"
          - "13"
          - sd
          - Data taken from Rohr et al. 2018; sd_ht taken from the Tab 1
      - rowNumber: 1242
        values:
          - "1391"
          - Natalie_Claunch
          - Delgado-Suazo_and_Burrowes_2022
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2022"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2021.103148
          - English
          - Eleutherodactylus_portoricensis_pop2
          - Eleutherodactylus_portoricensis_pop2_LTL_co1
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.301942"
          - "-65.794685"
          - "875"
          - NA
          - NA
          - "2017"
          - May_2017
          - Nov_2017
          - Collected during warm-wet season in Puerto Rico, which is generally between May and November.
          - "20.99"
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "22.13"
          - "0.96"
          - "4"
          - NA
          - adults
          - NA
          - "36.3"
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "22"
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
          - "6.52"
          - "1.25"
          - "20"
          - sd
          - NA
      - rowNumber: 2190
        values:
          - "2397"
          - Patrice Pottier
          - Heatwole_et_al_1965
          - Comparison of Critical Thermal Maxima of Two Species of Puerto Rican Frogs of the Genus Eleutherodactylus
          - "1965"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.38.1.30152341
          - English
          - Eleutherodactylus_portoricensis_pop1
          - Eleutherodactylus_portoricensis_pop1_UTL_co1
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.295135"
          - "-65.800033"
          - "472"
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
          - adults
          - NA
          - "22"
          - "1"
          - "7"
          - The acclimation_temp was 21-23C so it was taken as 22 +/- 1
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "30"
          - "1.75"
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
          - "0"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "36.31028939"
          - "0.13022508"
          - "25"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 2191
        values:
          - "2398"
          - Patrice Pottier
          - Heatwole_et_al_1965
          - Comparison of Critical Thermal Maxima of Two Species of Puerto Rican Frogs of the Genus Eleutherodactylus
          - "1965"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.38.1.30152341
          - English
          - Eleutherodactylus_portoricensis_pop3
          - Eleutherodactylus_portoricensis_pop3_UTL_co1
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.402807"
          - "-66.050137"
          - "15"
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
          - adults
          - NA
          - "22"
          - "1"
          - "7"
          - The acclimation_temp was 21-23C so it was taken as 22 +/- 1
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "30"
          - "1.75"
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
          - "0"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "37.12057878"
          - "0.094051447"
          - "26"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 2192
        values:
          - "2399"
          - Patrice Pottier
          - Heatwole_et_al_1965
          - Comparison of Critical Thermal Maxima of Two Species of Puerto Rican Frogs of the Genus Eleutherodactylus
          - "1965"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1086/physzool.38.1.30152341
          - English
          - Eleutherodactylus_portoricensis_pop3
          - Eleutherodactylus_portoricensis_pop3_UTL_co2
          - NA
          - Anura
          - Eleutherodactylidae
          - Eleutherodactylus portoricensis
          - NA
          - EN
          - wild
          - NA
          - "18.402807"
          - "-66.050137"
          - "15"
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
          - field-fresh
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - adults
          - NA
          - "33"
          - NA
          - NA
          - unknown
          - CTmax
          - OS
          - water
          - "30"
          - "1.75"
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
          - Fig 2
          - NA
          - NA
          - "37.19292605"
          - "0.101286174"
          - "18"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
    originalStudyCitations:
      - ref: Christian_et_al_1988
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.2307/2388239
        year: "1988"
      - ref: Delgado-Suazo_and_Burrowes_2022
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1016/j.jtherbio.2021.103148
        year: "2022"
      - ref: Heatwole_et_al_1965
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1086/physzool.38.1.30152341
        year: "1965"
    selectedEstimateRowNumbers:
      - 949
      - 1242
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 399MS
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Eleutherodactylus portoricensis — AmphiTherm source

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
Response to thermal and hydric regimes point to differential inter- and intraspecific vulnerability of tropical amphibians to climate warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Error was divided by two because the figure represent 2SE on each side of the mean.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
