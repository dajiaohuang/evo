---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Scinax ruber
    name:
      en: Scinax ruber
      zh: Scinax ruber
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
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2065"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1870
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3940"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3612
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1870, 2480, 3612, 3771, 3772, 3775, 3776, 4371; Metadata_AmphiTherm.xlsx
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
      family: Hylidae
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
      - rowNumber: 1870
        values:
          - "2065"
          - Natalie_Claunch
          - Gutierrez-Pesquera_2016
          - Thermal tolerance across latitudinal and altitudinal gradients in tadpoles
          - "2016"
          - "3"
          - Altitudinal variation of the critical thermal limits in 20 species of tadpoles in the tropical Andes
          - not_peer-reviewed
          - NA
          - English
          - Scinax_ruber_pop2
          - Scinax_ruber_pop2_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-1.3954"
          - "-78.3027"
          - "1532"
          - NA
          - NA
          - NA
          - June_2014
          - April_2015
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
          - "31.5"
          - "20"
          - NA
          - "3.5"
          - Animals were acclimated for 3-4 days
          - larvae
          - "31.5"
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
          - Gosner stage was taken as the mean of the range presented.
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
          - "5.2"
          - "0.1"
          - "5"
          - se
          - NA
      - rowNumber: 2480
        values:
          - "2707"
          - Natalie_Claunch
          - John-Alder_et_al_1988
          - Thermal Physiology, Phenology, and Distribution of Tree Frogs
          - "1988"
          - NA
          - NA
          - peer-reviewed
          - 10.1086/284868
          - English
          - Scinax_ruber_pop7
          - Scinax_ruber_pop7_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - July
          - "1986"
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
          - "21.5"
          - "1.5"
          - "9.33"
          - Acclimation temperature between 20 and 23 C. Acclimation time was between 1 and 3 weeks.
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - "15"
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
          - "10.8"
          - "0.15"
          - "3"
          - sd
          - NA
      - rowNumber: 3612
        values:
          - "3940"
          - Patrice Pottier
          - Pintanel_2018
          - Thermal adaptation of amphibians in tropical mountains. Consequences of global warming
          - "2018"
          - "2"
          - Are tropical barriers `higher` on the way up or down?
          - not_peer-reviewed
          - NA
          - English
          - Scinax_ruber_pop3
          - Scinax_ruber_pop3_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-0.93"
          - "-77.74"
          - "672"
          - NA
          - NA
          - NA
          - June_2014
          - April_2016
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
          - "3"
          - NA
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
          - Tab S2.1
          - NA
          - NA
          - "41.96"
          - "0.08"
          - "18"
          - se
          - NA
      - rowNumber: 3771
        values:
          - "4134"
          - Nayelli Rivera
          - Romero-Barreto_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2013"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Scinax_ruber_pop5
          - Scinax_ruber_pop5_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-0.671306"
          - "-76.4005"
          - "251"
          - NA
          - October
          - "2012"
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
          - "3"
          - NA
          - adults
          - NA
          - "36.41"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "25.62"
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 7
          - NA
          - NA
          - "35.66"
          - "3.91"
          - "10"
          - sd
          - NA
      - rowNumber: 3772
        values:
          - "4135"
          - Nayelli Rivera
          - Romero-Barreto_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2013"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Scinax_ruber_pop5
          - Scinax_ruber_pop5_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-0.671306"
          - "-76.4005"
          - "251"
          - NA
          - March
          - "2013"
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
          - "3"
          - NA
          - adults
          - NA
          - "35.9"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "24.38"
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 7
          - NA
          - NA
          - "38.11"
          - "1.08"
          - "10"
          - sd
          - NA
      - rowNumber: 3775
        values:
          - "4138"
          - Nayelli_Rivera
          - Romero-Barreto_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2013"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Scinax_ruber_pop4
          - Scinax_ruber_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-0.671306"
          - "-76.4005"
          - "218"
          - NA
          - October
          - "2012"
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
          - "3"
          - NA
          - adults
          - NA
          - "36.41"
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
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
          - NA
          - NA
          - table
          - NA
          - NA
          - "13.94"
          - "1.76"
          - "10"
          - sd
          - NA
      - rowNumber: 3776
        values:
          - "4139"
          - Nayelli_Rivera
          - Romero-Barreto_2013
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2013"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Scinax_ruber_pop4
          - Scinax_ruber_pop4_LTL_co2
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-0.671306"
          - "-76.4005"
          - "218"
          - NA
          - March
          - "2013"
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
          - "3"
          - NA
          - adults
          - NA
          - "35.9"
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - water
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
          - NA
          - NA
          - table
          - NA
          - NA
          - "10.35"
          - "1.22"
          - "10"
          - sd
          - NA
      - rowNumber: 4371
        values:
          - "4860"
          - Patrice Pottier
          - von-May_et_al_2019
          - "Thermal physiological traits in tropical lowland amphibians: Vulnerability to climate warming and cooling"
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1371/journal.pone.0219759
          - English
          - Scinax_ruber_pop1
          - Scinax_ruber_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Scinax ruber
          - NA
          - LC
          - wild
          - NA
          - "-12.56861111"
          - "-70.09916667"
          - "277"
          - NA
          - NA
          - NA
          - "2012"
          - "2017"
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
          - "25"
          - "1"
          - "2.5"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/42
          - adults
          - NA
          - "35.6"
          - "3.15"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "24"
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - dataset
          - https://figshare.com/articles/dataset/Thermal_physiological_traits_in_tropical_lowland_amphibians_Vulnerability_to_climate_warming_and_cooling/9208199
          - NA
          - "40.25"
          - "0.15"
          - "3"
          - se
          - Data was taken from the published dataset.
    originalStudyCitations:
      - ref: Gutierrez-Pesquera_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2016"
      - ref: John-Alder_et_al_1988
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1086/284868
        year: "1988"
      - ref: Pintanel_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Romero-Barreto_2013
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2013"
      - ref: von-May_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: https://doi.org/10.1371/journal.pone.0219759
        year: "2019"
    selectedEstimateRowNumbers:
      - 1870
      - 3612
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4VJYX
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Scinax ruber — AmphiTherm source

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
Requerimientos fisiológicos y microambientales de dos especies de anfibios (Scinax ruber e Hyloxalus yasuni) del bosque tropical de Yasuní y sus implicaciones ante el cambio climático
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Requerimientos fisiológicos y microambientales de dos especies de anfibios (Scinax ruber e Hyloxalus yasuni) del bosque tropical de Yasuní y sus implicaciones ante el cambio climático
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Requerimientos fisiológicos y microambientales de dos especies de anfibios (Scinax ruber e Hyloxalus yasuni) del bosque tropical de Yasuní y sus implicaciones ante el cambio climático
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Requerimientos fisiológicos y microambientales de dos especies de anfibios (Scinax ruber e Hyloxalus yasuni) del bosque tropical de Yasuní y sus implicaciones ante el cambio climático
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/42 -->
The acclimation time was taken as the mean of the range presented (2-3 days). The acclimation temperature was 24-26C so it was taken as 25 +/- 1 C
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
