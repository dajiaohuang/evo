---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Plethodon ouachitae
    name:
      en: Plethodon ouachitae
      zh: Plethodon ouachitae
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
        sourceRowId: "3177"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2866
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4506"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 4079
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2866, 2867, 4045, 4046, 4047, 4079, 4080, 4081; Metadata_AmphiTherm.xlsx
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
      family: Plethodontidae
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
      - rowNumber: 2866
        values:
          - "3177"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Plethodon_ouachitae_pop2
          - Plethodon_ouachitae_pop2_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "35.254964"
          - "-97.351656"
          - "340"
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "115"
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
          - "30.64"
          - "0.251"
          - "9"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 2867
        values:
          - "3178"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Plethodon_ouachitae_pop2
          - Plethodon_ouachitae_pop2_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "35.254964"
          - "-97.351656"
          - "340"
          - NA
          - NA
          - NA
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
          - adults
          - NA
          - "10"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "115"
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
          - Table 1
          - NA
          - NA
          - "33.33"
          - "0.194"
          - "9"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 4045
        values:
          - "4472"
          - Patrice Pottier
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_UTL_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69102943"
          - "-94.33731061"
          - "495"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - Animals were collected in March to October 1968 and 1969. Geographical coordinates were estimated using Google Maps
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
          - "5"
          - "1"
          - "7"
          - Mixed photoperiods were used
          - adults
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 1
          - NA
          - NA
          - "33.38897397"
          - "0.836140888"
          - "21"
          - sd
          - Data was dititised from figure 1.
      - rowNumber: 4046
        values:
          - "4473"
          - Patrice Pottier
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_UTL_co2
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69102943"
          - "-94.33731061"
          - "495"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - Animals were collected in March to October 1968 and 1969. Geographical coordinates were estimated using Google Maps
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
          - "15"
          - "1"
          - "7"
          - Mixed photoperiods were used
          - adults
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 1
          - NA
          - NA
          - "34.28943338"
          - "0.679938744"
          - "19"
          - sd
          - Data was dititised from figure 1.
      - rowNumber: 4047
        values:
          - "4474"
          - Patrice Pottier
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_UTL_co3
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69102943"
          - "-94.33731061"
          - "495"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - Animals were collected in March to October 1968 and 1969. Geographical coordinates were estimated using Google Maps
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
          - "7"
          - Mixed photoperiods were used
          - adults
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 1
          - NA
          - NA
          - "35.49310873"
          - "0.771822358"
          - "19"
          - sd
          - Data was dititised from figure 1.
      - rowNumber: 4079
        values:
          - "4506"
          - Natalie_Claunch
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_PBT_co1
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69064094"
          - "-94.33766554"
          - "493"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - March to October 1968 and 1969 rich mountain, polk co arkansas
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
          - "5"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - substrate
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "0.5"
          - linear
          - "-2"
          - "53.2"
          - A single measurement was collected after a 2h measurement period, so the rate_measurement was taken as 0.5
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
          - figure
          - NA
          - NA
          - "18.72670807"
          - "4.099378882"
          - "42"
          - sd
          - NA
      - rowNumber: 4080
        values:
          - "4507"
          - Natalie_Claunch
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_PBT_co2
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69064094"
          - "-94.33766554"
          - "493"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - March to October 1968 and 1969 rich mountain, polk co arkansas
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
          - "15"
          - "1"
          - "7"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - substrate
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "0.5"
          - linear
          - "-2"
          - "53.2"
          - A single measurement was collected after a 2h measurement period, so the rate_measurement was taken as 0.5
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
          - figure
          - NA
          - NA
          - "20.0931677"
          - "4.099378882"
          - "40"
          - sd
          - NA
      - rowNumber: 4081
        values:
          - "4508"
          - Natalie_Claunch
          - Spotila_1972
          - Role of temperature and water in the ecology of lungless salamanders
          - "1972"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1942232
          - English
          - Plethodon_ouachitae_pop1
          - Plethodon_ouachitae_pop1_PBT_co3
          - NA
          - Caudata
          - Plethodontidae
          - Plethodon ouachitae
          - NA
          - NT
          - wild
          - NA
          - "34.69064094"
          - "-94.33766554"
          - "493"
          - NA
          - NA
          - NA
          - March_1968
          - October_1969
          - March to October 1968 and 1969 rich mountain, polk co arkansas
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
          - "7"
          - NA
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
          - NA
          - substrate
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "2"
          - "0.5"
          - linear
          - "-2"
          - "53.2"
          - A single measurement was collected after a 2h measurement period, so the rate_measurement was taken as 0.5
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
          - figure
          - NA
          - NA
          - "18.22981366"
          - "7.204968944"
          - "40"
          - sd
          - NA
    originalStudyCitations:
      - ref: Lutterschmidt_and_Hutchison_1997
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1139/z97-782
        year: "1997"
      - ref: Spotila_1972
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.2307/1942232
        year: "1972"
    selectedEstimateRowNumbers:
      - 2866
      - 4079
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 77Q7V
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Plethodon ouachitae — AmphiTherm source

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
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete;.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成。
<!-- /evo:text -->
