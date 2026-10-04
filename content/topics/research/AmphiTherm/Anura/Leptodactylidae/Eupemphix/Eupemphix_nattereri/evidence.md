---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Eupemphix nattereri
    name:
      en: Eupemphix nattereri
      zh: Eupemphix nattereri
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
        sourceRowId: "1"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 2
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 2, 3, 4, 5, 6, 7, 8, 9, 10; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 2
        values:
          - "1"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co1
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "20"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "25"
          - NA
          - "0.0214"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41.8"
          - "0.5"
          - "51"
          - sd
          - NA
      - rowNumber: 3
        values:
          - "2"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co2
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "20"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "25"
          - NA
          - "0.0217"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41.8"
          - "0.7"
          - "53"
          - sd
          - NA
      - rowNumber: 4
        values:
          - "3"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co3
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "20"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "25"
          - NA
          - "0.0219"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "42.1"
          - "0.8"
          - "52"
          - sd
          - NA
      - rowNumber: 5
        values:
          - "4"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co4
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "109"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "38"
          - NA
          - "0.2505"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (35-41)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41.5"
          - "0.5"
          - "15"
          - sd
          - NA
      - rowNumber: 6
        values:
          - "5"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co5
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "109"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "38"
          - NA
          - "0.2548"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (35-41)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41.7"
          - "1"
          - "15"
          - sd
          - NA
      - rowNumber: 7
        values:
          - "6"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co6
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "109"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - larvae
          - "38"
          - NA
          - "0.2626"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (35-41)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41.9"
          - "0.8"
          - "15"
          - sd
          - NA
      - rowNumber: 8
        values:
          - "7"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co7
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "140"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - metamorphs
          - "43"
          - NA
          - "0.2598"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (42-44)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "40.1"
          - "0.9"
          - "10"
          - sd
          - NA
      - rowNumber: 9
        values:
          - "8"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co8
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "140"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - metamorphs
          - "43"
          - NA
          - "0.2624"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (42-44)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "39.8"
          - "2"
          - "10"
          - sd
          - NA
      - rowNumber: 10
        values:
          - "9"
          - Nayelli Rivera
          - Agudelo_Cantero_and_Navas_2019
          - |-
            Interactive effects of experimental heating rates, ontogeny and body mass on
            the upper thermal limits of anuran larvae
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/j.jtherbio.2019.03.010
          - English
          - Eupemphix_nattereri_pop1
          - Eupemphix_nattereri_pop1_UTL_co9
          - NA
          - Anura
          - Leptodactylidae
          - Eupemphix nattereri
          - NA
          - LC
          - wild
          - NA
          - "-20.7"
          - "-49.3"
          - "509"
          - NA
          - NA
          - "2015"
          - January_2015
          - March_2015
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "23"
          - "1"
          - embryos_and_larvae
          - NA
          - "23"
          - "1"
          - "140"
          - Acclimation lasted from the embryonic stage to the gosner_tested reported
          - metamorphs
          - "43"
          - NA
          - "0.2787"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "23"
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
          - Gosner stage was taken as the mean of the range presented (42-44)
          - NA
          - NA
          - NA
          - NA
          - "13"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 1
          - NA
          - NA
          - "41"
          - "1"
          - "11"
          - sd
          - NA
    originalStudyCitations:
      - ref: Agudelo_Cantero_and_Navas_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
        doi: https://doi.org/10.1016/j.jtherbio.2019.03.010
        year: "2019"
    selectedEstimateRowNumbers:
      - 2
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

# Eupemphix nattereri — AmphiTherm source

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
