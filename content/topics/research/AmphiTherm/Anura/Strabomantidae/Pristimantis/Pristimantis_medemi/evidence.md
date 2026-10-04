---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pristimantis medemi
    name:
      en: Pristimantis medemi
      zh: Pristimantis medemi
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
        sourceRowId: "51"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 42
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "119"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 106
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 42, 43, 44, 45, 106, 123; Metadata_AmphiTherm.xlsx
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
      family: Strabomantidae
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
      - rowNumber: 42
        values:
          - "51"
          - Nayelli_Rivera
          - Aponte-Gutierrez_2020
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2020"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Pristimantis_medemi_pop2
          - Pristimantis_medemi_pop2_LTL_co1
          - The same animals were tested at multiple time points, hence the shared cohort IDs
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.06176201"
          - "-73.73824895"
          - "483"
          - NA
          - NA
          - NA
          - July_2018
          - June_2019
          - The sampling started from July 5th-18th  of 2018 and from June 1st – 21st of 2019.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - NA
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
          - CTmin was measured twice, the second measurement was done 24-48h after the first one
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
          - "9.46"
          - "2.17"
          - "17"
          - sd
          - The error type was not clearly reported but it was assumed to be SD based on visual inspections of the data.
      - rowNumber: 43
        values:
          - "52"
          - Nayelli_Rivera
          - Aponte-Gutierrez_2020
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2020"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Pristimantis_medemi_pop2
          - Pristimantis_medemi_pop2_LTL_co1
          - The same animals were tested at multiple time points, hence the shared cohort IDs
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.06176201"
          - "-73.73824895"
          - "483"
          - NA
          - NA
          - NA
          - July_2018
          - June_2019
          - The sampling started from July 5th-18th  of 2018 and from June 1st – 21st of 2019.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - NA
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
          - CTmin was measured twice, the second measurement was done 24-48h after the first one
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
          - "7.76"
          - "2.42"
          - "17"
          - sd
          - The error type was not clearly reported but it was assumed to be SD based on visual inspections of the data.
      - rowNumber: 44
        values:
          - "53"
          - Nayelli_Rivera
          - Aponte-Gutierrez_2020
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2020"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Pristimantis_medemi_pop5
          - Pristimantis_medemi_pop5_LTL_co1
          - The same animals were tested at multiple time points, hence the shared cohort IDs
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.172978"
          - "-73.6309"
          - "1055"
          - NA
          - NA
          - NA
          - July_2018
          - June_2019
          - The sampling started from July 5th-18th  of 2018 and from June 1st – 21st of 2019.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - NA
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
          - CTmin was measured twice, the second measurement was done 24-48h after the first one
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
          - "6.85"
          - "1.89"
          - "17"
          - sd
          - The error type was not clearly reported but it was assumed to be SD based on visual inspections of the data.
      - rowNumber: 45
        values:
          - "54"
          - Nayelli_Rivera
          - Aponte-Gutierrez_2020
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2020"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - Spanish
          - Pristimantis_medemi_pop5
          - Pristimantis_medemi_pop5_LTL_co1
          - The same animals were tested at multiple time points, hence the shared cohort IDs
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.172978"
          - "-73.6309"
          - "1055"
          - NA
          - NA
          - NA
          - July_2018
          - June_2019
          - The sampling started from July 5th-18th  of 2018 and from June 1st – 21st of 2019.
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
          - NA
          - NA
          - NA
          - unknown
          - CTmin
          - LRR
          - body
          - NA
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
          - CTmin was measured twice, the second measurement was done 24-48h after the first one
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
          - "5.38"
          - "2.15"
          - "17"
          - sd
          - The error type was not clearly reported but it was assumed to be SD based on visual inspections of the data.
      - rowNumber: 106
        values:
          - "119"
          - Jose O. Valdebenito
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2019"
          - NA
          - NA
          - not_peer-reviewed
          - NA
          - English
          - Pristimantis_medemi_pop4
          - Pristimantis_medemi_pop4_UTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.215103"
          - "-73.812553"
          - "1150"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - NA
          - "23.285"
          - NA
          - NA
          - NA
          - Ambient_temp obtained from field data loggers was taken as the mean of the range presented.
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
          - Tab 2 & 3
          - NA
          - NA
          - "32.9"
          - NA
          - "14"
          - NA
          - NA
      - rowNumber: 123
        values:
          - "140"
          - Natalie_Claunch
          - Bernal-Castro_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Pristimantis_medemi_pop3
          - Pristimantis_medemi_pop3_LTL_co1
          - NA
          - Anura
          - Strabomantidae
          - Pristimantis medemi
          - NA
          - LC
          - wild
          - NA
          - "4.215103"
          - "-73.812553"
          - "1000.5"
          - NA
          - NA
          - "2017"
          - March_2017
          - July_2017
          - Elevation was taken as the mean of the range provided
          - "23.285"
          - NA
          - NA
          - NA
          - Minimum and maximum ambient temperatures were averaged.
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
          - "6.8"
          - "0.72"
          - "14"
          - sd
          - NA
    originalStudyCitations:
      - ref: Aponte-Gutierrez_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: NA
        year: "2020"
      - ref: Bernal-Castro_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: NA
        year: "2019"
    selectedEstimateRowNumbers:
      - 42
      - 106
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 4MJHQ
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Pristimantis medemi — AmphiTherm source

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
Endurecimiento tÃ©rmico en Pristimantis medemi (Anura: Craugastoridae), en coberturas boscosas del Municipio de Villavicencio (Meta)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Endurecimiento tÃ©rmico en Pristimantis medemi (Anura: Craugastoridae), en coberturas boscosas del Municipio de Villavicencio (Meta)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Endurecimiento tÃ©rmico en Pristimantis medemi (Anura: Craugastoridae), en coberturas boscosas del Municipio de Villavicencio (Meta)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Endurecimiento tÃ©rmico en Pristimantis medemi (Anura: Craugastoridae), en coberturas boscosas del Municipio de Villavicencio (Meta)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Influence of environment on thermal ecology of direct-developing frogs (Anura: craugastoridae: pristimantis) in the eastern Andes of Colombia
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
