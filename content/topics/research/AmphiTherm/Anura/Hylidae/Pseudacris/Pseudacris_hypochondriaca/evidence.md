---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Pseudacris hypochondriaca
    name:
      en: Pseudacris hypochondriaca
      zh: Pseudacris hypochondriaca
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
        sourceRowId: "3682"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 3363
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370; Metadata_AmphiTherm.xlsx
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
      - rowNumber: 3363
        values:
          - "3682"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co1
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "10"
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "52"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "38.7135"
          - "1.3029197"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3364
        values:
          - "3683"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co2
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "15"
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "46"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "38.4708"
          - "1.5328467"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3365
        values:
          - "3684"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co3
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - NA
          - "20"
          - NA
          - "40"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "37.39781"
          - "1.0346715"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3366
        values:
          - "3685"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co4
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "25"
          - NA
          - larvae
          - NA
          - "20"
          - NA
          - "31"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "39.46715"
          - "0.4981752"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3367
        values:
          - "3686"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co5
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "10"
          - NA
          - larvae
          - NA
          - "25"
          - NA
          - "53"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "41.08942"
          - "0.5748175"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3368
        values:
          - "3687"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co6
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "15"
          - NA
          - larvae
          - NA
          - "25"
          - NA
          - "34"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "39.81204"
          - "0.8047445"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3369
        values:
          - "3688"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co7
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "20"
          - NA
          - larvae
          - NA
          - "25"
          - NA
          - "27"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "39.72263"
          - "1.1879562"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
      - rowNumber: 3370
        values:
          - "3689"
          - PPollo
          - Mueller_et_al_2019
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/3
          - "2019"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.3389/fphys.2019.00754
          - English
          - Pseudacris_hypochondriaca_pop1
          - Pseudacris_hypochondriaca_pop1_UTL_co8
          - NA
          - Anura
          - Hylidae
          - Pseudacris hypochondriaca
          - NA
          - DD
          - wild
          - NA
          - "33.13288889"
          - "-117.1605556"
          - "200"
          - NA
          - NA
          - NA
          - January_2017
          - March_2018
          - "Two sampling periods: Jan-Feb 2017 and Jan-March 2018"
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - "25"
          - NA
          - embryos_and_larvae
          - NA
          - "25"
          - NA
          - "32"
          - NA
          - larvae
          - "34"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - LOE
          - water
          - NA
          - "0.33"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Gosner stage was taken as the mean of the range presented (32-36)
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
          - Fig 5B
          - NA
          - NA
          - "40.73175"
          - "0.7664234"
          - "9"
          - sd
          - Data digitised from figure 5. The sample sizes were taken as the median of the range presented (5-14) = 9.
    originalStudyCitations:
      - ref: Mueller_et_al_2019
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: https://doi.org/10.3389/fphys.2019.00754
        year: "2019"
    selectedEstimateRowNumbers:
      - 3363
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

# Pseudacris hypochondriaca — AmphiTherm source

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
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/3 -->
Immediate and persistent effects of temperature on oxygen consumption and thermal tolerance in embryos and larvae of the baja california chorus frog, Pseudacris hypochondriaca
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
