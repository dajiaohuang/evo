---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Leptodactylus fuscus
    name:
      en: Leptodactylus fuscus
      zh: Leptodactylus fuscus
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
        sourceRowId: "2249"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2045
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2296"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2090
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2045, 2090, 2928, 3447; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 2045
        values:
          - "2249"
          - Patrice Pottier
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Leptodactylus_fuscus_pop1
          - Leptodactylus_fuscus_pop1_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Leptodactylus fuscus
          - NA
          - LC
          - wild
          - NA
          - "-14.6662"
          - "-39.0718"
          - "7"
          - NA
          - NA
          - NA
          - November_2011
          - January_2012
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
          - "43.6"
          - "0.56"
          - "12"
          - sd
          - NA
      - rowNumber: 2090
        values:
          - "2296"
          - Natalie_Claunch
          - Gutierrez-Pesquera_et_al_2016
          - Testing the climate variability hypothesis in thermal tolerance limits of tropical and temperate tadpoles
          - "2016"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/jbi.12700
          - English
          - Leptodactylus_fuscus_pop1
          - Leptodactylus_fuscus_pop1_LTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Leptodactylus fuscus
          - NA
          - LC
          - wild
          - NA
          - "-14.6662"
          - "-39.0718"
          - "7"
          - NA
          - NA
          - NA
          - November_2011
          - January_2012
          - NA
          - "26.38"
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
          - "8.2"
          - "0.51"
          - "12"
          - sd
          - NA
      - rowNumber: 2928
        values:
          - "3239"
          - Sarah Varon
          - Madalozzo_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2018"
          - "1"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/6
          - not_peer-reviewed
          - NA
          - English
          - Leptodactylus_fuscus_pop2
          - Leptodactylus_fuscus_pop2_LTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Leptodactylus fuscus
          - NA
          - LC
          - wild
          - NA
          - "-14.08945648"
          - "-39.58906439"
          - "156"
          - NA
          - NA
          - NA
          - November_2011
          - Janurary_2012
          - '"tropical" community. Coordinates estimated based on Google Maps'
          - "24.46"
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
          - Acclimated for 3-4 days
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
          - Gosner stage was taken as the mean of the range reported
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
          - "4.81"
          - NA
          - "15"
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 3447
        values:
          - "3772"
          - PPollo
          - Nowakowski_et_al_2018
          - Thermal biology mediates responses of amphibians and reptiles to habitat modification
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/ele.12901
          - English
          - Leptodactylus_fuscus_pop6
          - Leptodactylus_fuscus_pop6_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Leptodactylus fuscus
          - NA
          - LC
          - wild
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - May_2015
          - June_2016
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/28
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
          - Animals were assumed to be field-fresh, as in Nowakowski et al. 2016a
          - adults
          - NA
          - NA
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
          - https://doi.org/10.6084/m9.figshare.5632873
          - NA
          - "40.1"
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
    originalStudyCitations:
      - ref: Gutierrez-Pesquera_et_al_2016
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1111/jbi.12700
        year: "2016"
      - ref: Madalozzo_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2018"
      - ref: Nowakowski_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.1111/ele.12901
        year: "2018"
    selectedEstimateRowNumbers:
      - 2045
      - 2090
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 3TN4S
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Leptodactylus fuscus — AmphiTherm source

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
Variação latitudinal nos limites de tolerância e plasticidade térmica em anfíbios em um cenário de mudanças climáticas: efeito dos micro-habitats, sazonalidade e filogenia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/6 -->
Latitudinal variation of thermal tolerance limits and vulnerability to extreme temperatures in amphibians: the effects of microhabitats, seasonality and phylogeny
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
Error not reported. Sample size was taken as 15 because authors state that they "analyzed a minimum of 15 individuals for all 60 species for each thermal tolerance limit". However, note that this may be an overestimate in some casesbecause they also state that "for some species we study a reduced sample because shortage of field collected tadpoles".
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/28 -->
Geographical coordinates could not be approximated precisely. Animals were collected in forest remnants and adjacent pastures in the Magdalena River Valley in Colombia, which spans hundreds of kilometers.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
Only the data from Colombian species were extracted because the data for Costa Rican amphibans is the same as in Nowakowski et al. 2016a (although not clearly referenced).
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
