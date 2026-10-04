---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Hyla cinerea
    name:
      en: Hyla cinerea
      zh: Hyla cinerea
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
        sourceRowId: "200"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 161
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "467"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 389
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 161, 389, 2470, 2793, 2794; Metadata_AmphiTherm.xlsx
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
      family: Hylidae
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
      - rowNumber: 161
        values:
          - "200"
          - Patrice Pottier
          - Blem_et_al_1986
          - The thermal physiology of two sympatric treefrogs Hyla cinerea and Hyla chrysoscelis (Anura; Hylidae)
          - "1986"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0300-9629(86)90447-0
          - English
          - Hyla_cinerea_pop5
          - Hyla_cinerea_pop5_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla cinerea
          - NA
          - LC
          - wild
          - NA
          - "37.34249869"
          - "-77.18631412"
          - "9"
          - NA
          - NA
          - NA
          - "1978"
          - "1982"
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
          - adults
          - NA
          - "23"
          - NA
          - NA
          - The acclimation temperature is approximate and there are no indication of the acclimation time.
          - adults
          - NA
          - NA
          - NA
          - NA
          - males
          - CTmax
          - death
          - ambient
          - "23"
          - "6.94444e-4"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - The ramping rate was 1C/day
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
          - main text
          - NA
          - NA
          - "43.7"
          - "0.9"
          - "10"
          - se
          - NA
      - rowNumber: 389
        values:
          - "467"
          - Ana Longo
          - Brattstrom_1968
          - Thermal acclimation in anuran amphibians as a function of latitude and altitude
          - "1968"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1016/0010-406X(68)90961-4
          - English
          - Hyla_cinerea_pop2
          - Hyla_cinerea_pop2_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla cinerea
          - NA
          - LC
          - wild
          - NA
          - "30.03932398"
          - "-91.42709404"
          - "305"
          - NA
          - NA
          - NA
          - "1964"
          - "1965"
          - Louisiana,USA
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
          - "23"
          - "1"
          - "17.5"
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
          - The endpoint and ramping rates were assumed to be the same as for the CTmax experiment
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
          - "-1"
          - NA
          - "5"
          - NA
          - Sample size was taken as 5 because it is stated that, "in most cases the number of animals used per point was 5-10"
      - rowNumber: 2470
        values:
          - "2697"
          - Patrice Pottier
          - John-Alder_et_al_1988
          - Thermal Physiology, Phenology, and Distribution of Tree Frogs
          - "1988"
          - NA
          - NA
          - peer-reviewed
          - 10.1086/284868
          - English
          - Hyla_cinerea_pop1
          - Hyla_cinerea_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla cinerea
          - NA
          - LC
          - wild
          - NA
          - "28.538335"
          - "-81.379236"
          - "35"
          - NA
          - March
          - "1986"
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
          - "21.5"
          - "1.5"
          - "7"
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/42
          - adults
          - NA
          - "55"
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
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Tab 4
          - NA
          - NA
          - "36.6"
          - "0.14"
          - "4"
          - sd
          - NA
      - rowNumber: 2793
        values:
          - "3083"
          - Natalie_Claunch
          - Layne_and_Romano_1985
          - Critical thermal minima of Hyla chrysoscelis, H. cinerea, H. gratiosa, and natural hybrids (H. cinerea x H. gratiosa)
          - "1985"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Hyla_cinerea_pop3
          - Hyla_cinerea_pop3_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla cinerea
          - NA
          - LC
          - wild
          - NA
          - "30.40538289"
          - "-89.49049312"
          - "4"
          - NA
          - NA
          - NA
          - May_1983
          - June_1984
          - Collected in May and June of 1983 and 1984. Coordinates were estimated from Google Maps
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
          - CTmin
          - LRR
          - water
          - NA
          - "0.75"
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
          - "4.6"
          - "0.385714286"
          - "7"
          - sd
          - Data on hybrid species from this study were not included
      - rowNumber: 2794
        values:
          - "3084"
          - Natalie_Claunch
          - Layne_and_Romano_1985
          - Critical thermal minima of Hyla chrysoscelis, H. cinerea, H. gratiosa, and natural hybrids (H. cinerea x H. gratiosa)
          - "1985"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Hyla_cinerea_pop4
          - Hyla_cinerea_pop4_LTL_co1
          - NA
          - Anura
          - Hylidae
          - Hyla cinerea
          - NA
          - LC
          - wild
          - NA
          - "32.63096942"
          - "-85.36553194"
          - "247"
          - NA
          - NA
          - NA
          - May_1983
          - June_1984
          - Collected in May and June of 1983 and 1984. Coordinates were estimated from Google Maps
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
          - CTmin
          - LRR
          - water
          - NA
          - "0.75"
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
          - "3.592857143"
          - "0.514285714"
          - "11"
          - sd
          - Data on hybrid species from this study were not included
    originalStudyCitations:
      - ref: Blem_et_al_1986
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.1016/0300-9629(86)90447-0
        year: "1986"
      - ref: Brattstrom_1968
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1016/0010-406X(68)90961-4
        year: "1968"
      - ref: John-Alder_et_al_1988
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: 10.1086/284868
        year: "1988"
      - ref: Layne_and_Romano_1985
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: NA
        year: "1985"
    selectedEstimateRowNumbers:
      - 161
      - 389
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

# Hyla cinerea — AmphiTherm source

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/28 -->
The animals were taken from a site with outdoor man-made ponds, which simulate wild conditions. Geographical coordinates were approximated using google maps. Animals were collected in the summers of 1978, 1981, and 1982 on warm, raining nights in the breeding season.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/42 -->
Acclimation temperature was 20-23C so it was taken as 21.5 +/- 1.5. Animals were acclimated for 1-3 weeks so it was taken as 1 week.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
