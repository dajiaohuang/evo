---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Rana sphenocephala
    name:
      en: Rana sphenocephala
      zh: Rana sphenocephala
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
        sourceRowId: "2867"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2597
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2597, 2874, 2875; Metadata_AmphiTherm.xlsx
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
      family: Ranidae
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
      - rowNumber: 2597
        values:
          - "2867"
          - Patrice Pottier
          - Katzenberger_et_al_2018
          - Source of environmental data and warming tolerance estimation in six species of North American larval anurans
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2018.07.005
          - English
          - Rana_sphenocephala_pop1
          - Rana_sphenocephala_pop1_UTL_co1
          - NA
          - Anura
          - Ranidae
          - Rana sphenocephala
          - NA
          - LC
          - wild
          - NA
          - "34.91055556"
          - "-76.9875"
          - "10"
          - NA
          - NA
          - "2011"
          - NA
          - NA
          - Spring 2011
          - "18.63"
          - NA
          - "20.9"
          - NA
          - NA
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - "25"
          - "20"
          - NA
          - "4.5"
          - acclimation_time was taken as the mean of the range presented (4-5 days)
          - larvae
          - "26"
          - NA
          - "0.2344"
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
          - "40.1"
          - "0.1"
          - "15"
          - se
          - NA
      - rowNumber: 2874
        values:
          - "3185"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Rana_sphenocephala_pop2
          - Rana_sphenocephala_pop2_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Anura
          - Ranidae
          - Rana sphenocephala
          - NA
          - LC
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
          - "113"
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
          - "36.06"
          - "0.118"
          - "20"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
      - rowNumber: 2875
        values:
          - "3186"
          - Patrice Pottier
          - Lutterschmidt_and_Hutchison_1997
          - "The critical thermal maximum: data to support the onset of spasms as the definitive end point"
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1139/z97-782
          - English
          - Rana_sphenocephala_pop2
          - Rana_sphenocephala_pop2_UTL_co1
          - The same individuals were used for measuring LRR and OS, hence the shared cohort IDs.
          - Anura
          - Ranidae
          - Rana sphenocephala
          - NA
          - LC
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
          - "113"
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
          - "37.08"
          - "0.099"
          - "20"
          - se
          - Data was taken from table 1 because SD was not reported in Rohr et al. 2018.
    originalStudyCitations:
      - ref: Katzenberger_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/j.jtherbio.2018.07.005
        year: "2018"
      - ref: Lutterschmidt_and_Hutchison_1997
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: 10.1139/z97-782
        year: "1997"
    selectedEstimateRowNumbers:
      - 2597
    sourceConceptMapping:
      status: unresolved
      candidateColIds: []
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Rana sphenocephala — AmphiTherm source

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
