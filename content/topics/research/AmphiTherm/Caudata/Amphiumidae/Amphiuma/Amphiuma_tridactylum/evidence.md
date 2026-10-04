---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Amphiuma tridactylum
    name:
      en: Amphiuma tridactylum
      zh: Amphiuma tridactylum
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
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1851"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1668
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "2482"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 2256
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1668, 2256; Metadata_AmphiTherm.xlsx
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
      family: Amphiumidae
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
      - rowNumber: 1668
        values:
          - "1851"
          - Natalie_Claunch
          - Fontenot_and_Lutterschmidt_2011
          - Thermal selection and temperature preference of the aquatic salamander, Amphiuma tridactylum
          - "2011"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Amphiuma_tridactylum_pop2
          - Amphiuma_tridactylum_pop2_PBT_co1
          - NA
          - Caudata
          - Amphiumidae
          - Amphiuma tridactylum
          - NA
          - LC
          - wild
          - NA
          - "30.4325"
          - "-91.0151"
          - "11"
          - NA
          - NA
          - NA
          - April_1990
          - May_1990
          - Coordinates estimated from Google Maps
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
          - NA
          - "10.5"
          - NA
          - adults
          - NA
          - "542"
          - "435.7"
          - NA
          - unknown
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "7"
          - "2"
          - shuttlebox
          - "22"
          - "35"
          - The gradient type was a hybrid between a shuttlebox and a linear gradient.
          - NA
          - NA
          - NA
          - NA
          - "13.25"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Day length in Baton Rouge in April and May ranges from 12.5 and 14 hours so 13.25 was inputted.
          - text
          - NA
          - NA
          - "26.3"
          - "0.29"
          - "15"
          - se
          - NA
      - rowNumber: 2256
        values:
          - "2482"
          - Patrice Pottier
          - Hutchison_1961
          - Critical Thermal Maxima in Salamanders
          - "1961"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Amphiuma_tridactylum_pop1
          - Amphiuma_tridactylum_pop1_UTL_co1
          - Population from Wauban, Louisiana
          - Caudata
          - Amphiumidae
          - Amphiuma tridactylum
          - NA
          - LC
          - wild
          - NA
          - "29.742663"
          - "-90.819528"
          - "6"
          - NA
          - March
          - "1958"
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
          - "20"
          - "0.2"
          - "30"
          - NA
          - adults
          - NA
          - "334"
          - NA
          - NA
          - mixed
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
          - Fig 18
          - NA
          - NA
          - "37.11385094"
          - NA
          - "3"
          - NA
          - Data was digitised from figure because SD was not reported in Rohr et al. 2018.
    originalStudyCitations:
      - ref: Fontenot_and_Lutterschmidt_2011
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2011"
      - ref: Hutchison_1961
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "1961"
    selectedEstimateRowNumbers:
      - 1668
      - 2256
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 66FG5
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Amphiuma tridactylum — AmphiTherm source

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
