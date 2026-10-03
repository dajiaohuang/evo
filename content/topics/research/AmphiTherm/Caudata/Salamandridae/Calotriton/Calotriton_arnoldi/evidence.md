---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Calotriton arnoldi
    name:
      en: Calotriton arnoldi
      zh: Calotriton arnoldi
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
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1141"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1000
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1142"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 1001
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 1000, 1001, 1002, 1003, 1004, 1005, 1006; Metadata_AmphiTherm.xlsx
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
      family: Salamandridae
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
      - rowNumber: 1000
        values:
          - "1141"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop1
          - Calotriton_arnoldi_pop1_LTL_co1
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
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
          - acclimated
          - NA
          - NA
          - adults
          - NA
          - "12.7"
          - NA
          - NA
          - Mixture of adult females (2) and juveniles (3). The life stage was taken as "adults"
          - adults
          - NA
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - OS
          - water
          - "12.7"
          - "0.3"
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
          - text
          - NA
          - NA
          - "1.2"
          - "0.08"
          - "5"
          - se
          - NA
      - rowNumber: 1001
        values:
          - "1142"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop2
          - Calotriton_arnoldi_pop2_PBT_co1
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Western adult males. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - adults
          - NA
          - "5.95"
          - "5.15"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "13.35"
          - "0.5"
          - "6"
          - se
          - NA
      - rowNumber: 1002
        values:
          - "1143"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop2
          - Calotriton_arnoldi_pop2_PBT_co2
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Western adult females. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - adults
          - NA
          - "6.13"
          - "4.73"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "16.45"
          - "0.48"
          - "6"
          - se
          - NA
      - rowNumber: 1003
        values:
          - "1144"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop2
          - Calotriton_arnoldi_pop2_PBT_co3
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Western juveniles. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - juveniles
          - NA
          - "4.48"
          - "2.08"
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
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "17.51"
          - "1.46"
          - "6"
          - se
          - NA
      - rowNumber: 1004
        values:
          - "1145"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop3
          - Calotriton_arnoldi_pop3_PBT_co1
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Eastern adult males. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - adults
          - NA
          - "6.05"
          - "5.63"
          - NA
          - male
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "16.43"
          - "1.58"
          - "6"
          - se
          - NA
      - rowNumber: 1005
        values:
          - "1146"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop3
          - Calotriton_arnoldi_pop3_PBT_co2
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Eastern adult females. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - adults
          - NA
          - "5.61"
          - "3.98"
          - NA
          - female
          - Tpref
          - NA
          - water
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "18.56"
          - "1.13"
          - "6"
          - se
          - NA
      - rowNumber: 1006
        values:
          - "1147"
          - Nayelli_Rivera
          - Contreras-Cisneros_2019
          - Temperatura crítica máxima, tolerancia al frío y termopreferendum del tritón del Montseny (Calotriton arnoldii)
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Calotriton_arnoldi_pop3
          - Calotriton_arnoldi_pop3_PBT_co3
          - NA
          - Caudata
          - Salamandridae
          - Calotriton arnoldi
          - NA
          - CR
          - unclear
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Eastern juveniles. No coordinates provided.
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
          - "12.7"
          - NA
          - NA
          - NA
          - juveniles
          - NA
          - "4.32"
          - "2.2"
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
          - "0.4"
          - NA
          - linear
          - "3.5"
          - "28"
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
          - "18.97"
          - "0.98"
          - "6"
          - se
          - NA
    originalStudyCitations:
      - ref: Contreras-Cisneros_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2019"
    selectedEstimateRowNumbers:
      - 1000
      - 1001
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - Q4DP
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Calotriton arnoldi — AmphiTherm source

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
