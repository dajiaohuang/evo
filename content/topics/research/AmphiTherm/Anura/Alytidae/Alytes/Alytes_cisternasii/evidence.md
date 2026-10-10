---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Alytes cisternasii
    name:
      en: Alytes cisternasii
      zh: Alytes cisternasii
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
        sourceRowId: "1424"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1266
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2274"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2070
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1266, 1267, 1288, 2026, 2070, 2561, 3066, 3067; Metadata_AmphiTherm.xlsx
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
      family: Alytidae
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
      - rowNumber: 1266
        values:
          - "1424"
          - PPollo
          - Duarte_2011
          - A comparative study of the thermal tolerance of larvaes of Iberian anurans
          - "2011"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Alytes_cisternasii_pop2
          - Alytes_cisternasii_pop2_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/12
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.79363333"
          - "-6.078433333"
          - "433"
          - NA
          - NA
          - NA
          - Feburary_2007
          - May_2008
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/28
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
          - "10"
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
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 3
          - NA
          - NA
          - "34.18"
          - "2.559297"
          - "33"
          - sd
          - Standard deviation was calculated as the squared root of the variance presented.
      - rowNumber: 1267
        values:
          - "1425"
          - PPollo
          - Duarte_2011
          - A comparative study of the thermal tolerance of larvaes of Iberian anurans
          - "2011"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Alytes_cisternasii_pop5
          - Alytes_cisternasii_pop5_UTL_co1
          - NA
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "40.49333333"
          - "-4.135833333"
          - "819"
          - NA
          - NA
          - NA
          - Feburary_2007
          - May_2008
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
          - "10"
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
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 3
          - NA
          - NA
          - "35.35"
          - "0.9110434"
          - "12"
          - sd
          - Standard deviation was calculated as the squared root of the variance presented.
      - rowNumber: 1288
        values:
          - "1446"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Alytes_cisternasii_pop1
          - Alytes_cisternasii_pop1_UTL_co1
          - NA
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
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
          - "33"
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
          - "38.2"
          - "0.2"
          - "15"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
      - rowNumber: 2026
        values:
          - "2227"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Alytes_cisternasii_pop2
          - Alytes_cisternasii_pop2_UTL_co1
          - NA
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.7929"
          - "-6.0799"
          - "442"
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
          - "37.8"
          - "0.37"
          - "16"
          - sd
          - NA
      - rowNumber: 2070
        values:
          - "2274"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Alytes_cisternasii_pop3
          - Alytes_cisternasii_pop3_LTL_co1
          - NA
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.7929"
          - "-6.0799"
          - "455"
          - NA
          - NA
          - NA
          - "2011"
          - "2013"
          - NA
          - "13.22"
          - NA
          - NA
          - NA
          - Ambient temperature taken from Table S2
          - acclimated
          - NA
          - NA
          - larvae
          - "31.5"
          - "20"
          - NA
          - "3.5"
          - NA
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
          - "-0.2"
          - "0.54"
          - "16"
          - sd
          - NA
      - rowNumber: 2561
        values:
          - "2828"
          - Jose O. Valdebenito
          - Katzenberger_2009
          - Thermal Tolerance and Sensitivity of Amphibian Larvae from Paleartic and Neotropical Communities
          - "2009"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Alytes_cisternasii_pop4
          - Alytes_cisternasii_pop4_UTL_co1
          - NA
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.99441111"
          - "-4.902172222"
          - "585"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "10.64"
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
          - "32"
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
          - Gosner stage was taken as the mean of the range presented (25-39)
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
          - Tab 3
          - NA
          - NA
          - "38.24"
          - "0.17"
          - "15"
          - se
          - NA
      - rowNumber: 3066
        values:
          - "3383"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/6
          - not_peer-reviewed
          - NA
          - English
          - Alytes_cisternasii_pop2
          - Alytes_cisternasii_pop2_UTL_co1
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/12
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.7929"
          - "-6.0799"
          - "442"
          - NA
          - NA
          - "2011"
          - January_2011
          - May_2011
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
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "20"
          - "0.05"
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
          - "86.4"
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
          - "37.38"
          - "0.28"
          - "12"
          - sd
          - NA
      - rowNumber: 3067
        values:
          - "3384"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/6
          - not_peer-reviewed
          - NA
          - English
          - Alytes_cisternasii_pop2
          - Alytes_cisternasii_pop2_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/12
          - Anura
          - Alytidae
          - Alytes cisternasii
          - NA
          - LC
          - wild
          - NA
          - "37.7929"
          - "-6.0799"
          - "442"
          - NA
          - NA
          - "2011"
          - January_2011
          - May_2011
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
          - "86.4"
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
          - "38.8"
          - "0.26"
          - "12"
          - sd
          - NA
    originalStudyCitations:
      - ref: Duarte_2011
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2011"
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Katzenberger_2009
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "2009"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: NA
        year: "2018"
    selectedEstimateRowNumbers:
      - 1266
      - 2070
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 5TXLQ
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Alytes cisternasii — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/12 -->
Population ID was taken as the same as in Gutiérrez-Pesquera et al. (2016) and Madalozzo (2018) because animals were collected in the same location.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
7 individuals were collected from 38°10'9.12"N / 8°34'29.85"W and 26 from 37°47'37.08"N / 6°04'42.36"W. The coordinates where most animals were collected were taken.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/12 -->
population_ID was taken as the same as in Gutiérrez-Pesquera et al 2016 because animals were collected in the same location
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
