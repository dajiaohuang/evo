---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Dermatonotus muelleri
    name:
      en: Dermatonotus muelleri
      zh: Dermatonotus muelleri
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
        sourceRowId: "259"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 219
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "260"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 220
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 219, 220, 1295; Metadata_AmphiTherm.xlsx
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
      family: Microhylidae
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
      - rowNumber: 219
        values:
          - "259"
          - Patrice Pottier
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "4"
          - Is The Diurnal Activity Of Dispersing Juvenile Burrowing Frogs Correlated With Changes In Physiological Traits ?
          - not_peer-reviewed
          - NA
          - English
          - Dermatonotus_muelleri_pop2
          - Dermatonotus_muelleri_pop2_UTL_co1
          - NA
          - Anura
          - Microhylidae
          - Dermatonotus muelleri
          - NA
          - LC
          - wild
          - NA
          - "-21.25048"
          - "-49.92132"
          - "371"
          - NA
          - February
          - "2013"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "21"
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "23"
          - "2"
          - "2"
          - NA
          - juveniles
          - NA
          - "16.17"
          - "0.53"
          - NA
          - unknown
          - CTmax
          - LRR
          - body
          - "20"
          - "0.1"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - body_mass and SVL were taken from table 1
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
          - Table 1
          - NA
          - NA
          - "37.2"
          - "0.84"
          - "8"
          - sd
          - NA
      - rowNumber: 220
        values:
          - "260"
          - Natalie_Claunch
          - Bovo_2015
          - Fisiologia térmica e balanço hídrico em anfíbios anuros
          - "2015"
          - "4"
          - Is The Diurnal Activity Of Dispersing Juvenile Burrowing Frogs Correlated With Changes In Physiological Traits ?
          - not_peer-reviewed
          - NA
          - English
          - Dermatonotus_muelleri_pop2
          - Dermatonotus_muelleri_pop2_LTL_co1
          - NA
          - Anura
          - Microhylidae
          - Dermatonotus muelleri
          - NA
          - LC
          - wild
          - NA
          - "-21.25048"
          - "-49.92132"
          - "371"
          - NA
          - February
          - "2013"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "21"
          - NA
          - acclimated
          - NA
          - NA
          - juveniles
          - NA
          - "23"
          - "2"
          - "2"
          - NA
          - juveniles
          - NA
          - "16.17"
          - "0.53"
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - "20"
          - "0.1"
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
          - "10.62"
          - "1.21"
          - "8"
          - sd
          - NA
      - rowNumber: 1295
        values:
          - "1453"
          - Patrice Pottier
          - Duarte_et_al_2012
          - Can amphibians take the heat? Vulnerability to climate warming in subtropical and temperate larval amphibian communities
          - "2012"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1111/j.1365-2486.2011.02518.x
          - English
          - Dermatonotus_muelleri_pop1
          - Dermatonotus_muelleri_pop1_UTL_co1
          - NA
          - Anura
          - Microhylidae
          - Dermatonotus muelleri
          - NA
          - LC
          - wild
          - NA
          - "-25.316761"
          - "-59.695506"
          - "102"
          - NA
          - NA
          - NA
          - November_2008
          - February_2009
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
          - "75"
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
          - "43.6"
          - "0.3"
          - "14"
          - se
          - Data was taken from Tab S1 because Rohr et al. 2018 did not report SD.
    originalStudyCitations:
      - ref: Bovo_2015
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2015"
      - ref: Duarte_et_al_2012
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1111/j.1365-2486.2011.02518.x
        year: "2012"
    selectedEstimateRowNumbers:
      - 219
      - 220
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 34X5H
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Dermatonotus muelleri — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
