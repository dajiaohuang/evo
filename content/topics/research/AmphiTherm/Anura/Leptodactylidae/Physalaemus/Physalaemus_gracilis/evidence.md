---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Physalaemus gracilis
    name:
      en: Physalaemus gracilis
      zh: Physalaemus gracilis
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
        sourceRowId: "3204"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2893
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3364"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3047
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2893, 2990, 2991, 3047, 3048, 3108, 3109; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 2893
        values:
          - "3204"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2018"
          - "1"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/6
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_UTL_co1
          - Note that data for some species was already presented in Gutiérrez-Pesquera et al 2016
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - November_2014
          - March_2017
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
          - Tab 1A
          - NA
          - NA
          - "41.02"
          - NA
          - "15"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 2990
        values:
          - "3304"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_UTL_co2
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/12
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - November_2014
          - March_2017
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
          - "26"
          - "20.1"
          - "0.1"
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
          - Gosner stage was assumed to be the same as in chapter I of the thesis (25-38)
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
          - Fig 1A
          - NA
          - NA
          - "39.02065404"
          - "0.489751661"
          - "15"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 2991
        values:
          - "3305"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_UTL_co3
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/12
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - November_2014
          - March_2017
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
          - "26"
          - "30.2"
          - "0.3"
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
          - Gosner stage was assumed to be the same as in chapter I of the thesis (25-38)
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
          - Fig 1A
          - NA
          - NA
          - "40.21342513"
          - "0.275485309"
          - "15"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 3047
        values:
          - "3364"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_LTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"subtropical" location'
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
          - "20.1"
          - "0.1"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
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
          - figure
          - NA
          - NA
          - "1.46"
          - "0.2"
          - "16"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 3048
        values:
          - "3365"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2018"
          - "2"
          - "Acclimation of critical thermal limits in amphibian tadpoles: it is enough to face global warming?"
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_LTL_co2
          - NA
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - NA
          - NA
          - '"subtropical" location'
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
          - "30.2"
          - "0.3"
          - "4"
          - NA
          - larvae
          - "31.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
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
          - figure
          - NA
          - NA
          - "1.94"
          - "0.27"
          - "12"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 3108
        values:
          - "3425"
          - Patrice Pottier
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2018"
          - "3"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/6
          - not_peer-reviewed
          - NA
          - English
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_UTL_co4
          - NA
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - November_2014
          - March_2017
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
          - "39.2"
          - "0.24"
          - "50"
          - sd
          - NA
      - rowNumber: 3109
        values:
          - "3426"
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
          - Physalaemus_gracilis_pop1
          - Physalaemus_gracilis_pop1_UTL_co5
          - NA
          - Anura
          - Leptodactylidae
          - Physalaemus gracilis
          - NA
          - LC
          - wild
          - NA
          - "-30.251"
          - "-53.585"
          - "201"
          - NA
          - NA
          - NA
          - November_2014
          - March_2017
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
          - "39.01"
          - "0.44"
          - "15"
          - sd
          - NA
    originalStudyCitations:
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2018"
    selectedEstimateRowNumbers:
      - 2893
      - 3047
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4HF9R
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Physalaemus gracilis — AmphiTherm source

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
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/6 -->
Latitudinal variation of thermal tolerance limits and vulnerability to extreme temperatures in amphibians: the effects of microhabitats, seasonality and phylogeny
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
Geographical coordinates were taken as in Madalozzo 2018 (chapter 2) because animals were likely collected in the same location, and by the same researchers
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
n_trait was taken as 15 because authors state that they "analyzed a minimum of 15 individuals for all 60 species for each thermal tolerance limit". However, note that this may be an overestimate in some casesbecause they also state that "for some species we study a reduced sample because shortage of field collected tadpoles".
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/12 -->
population_ID was taken as the same as in Madalozzo 2018 (chapter 1) because animals were possibly collected in the same location, and by the same researchers
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/12 -->
population_ID was taken as the same as in Madalozzo 2018 (chapter 1) because animals were possibly collected in the same location, and by the same researchers
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Data was digitised from figure 1A. n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure. 95% confidence intervals were converted to sd in with metadigitise.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
n_trait was taken as reported in Table 2 for the lowest and highest acclimation temperatures. For the intermediate acclimation temperatures (i.e. 9/15C, 20C, 20/27C for the temperate, subtropical and tropical populations, respectively), the lowest sample size presented in Table 2 was reported as a conservative measure.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/6 -->
Latitudinal variation in upper thermal limits of amphibians under long realistic ramping assays: implications to their vulnerability to global warming
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
