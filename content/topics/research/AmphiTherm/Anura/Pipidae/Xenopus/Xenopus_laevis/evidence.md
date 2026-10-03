---
schemaVersion: 1
kind: evidence
records:
  amphitherm-source-reader:
    scientificName: Xenopus laevis
    name:
      en: Xenopus laevis
      zh: Xenopus laevis
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
          en: Selected hot lethal-limit assay estimate
          zh: 选列的高温致死限实验估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "1320"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/1/text/zh
        sourceRowNumber: 1171
      - topic: ecology
        title:
          en: Selected critical upper thermal limit estimate
          zh: 选列的临界高温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "3785"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/2/text/zh
        sourceRowNumber: 3460
      - topic: ecology
        title:
          en: Selected critical lower thermal limit estimate
          zh: 选列的临界低温限估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4158"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/3/text/zh
        sourceRowNumber: 3785
      - topic: ecology
        title:
          en: Selected thermal preference estimate
          zh: 选列的温度偏好估计
        sourceIds:
          - amphitherm
        sourceReaderKind: deposited-thermal-estimate
        sourceRowId: "4586"
        text:
          en:
            markdown: page.en.md
            field: /records/amphitherm-source-reader/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphitherm-source-reader/sections/4/text/zh
        sourceRowNumber: 4133
    sources:
      referenceBindings:
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator:
              markdown: evidence.md
              field: /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator
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
      family: Pipidae
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
      - rowNumber: 1171
        values:
          - "1320"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "36"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/63
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
          - "38.77056"
          - "0.1147537"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/0/values/83
      - rowNumber: 1172
        values:
          - "1321"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co10
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - "47"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/63
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
          - "37.4539"
          - "0.08087539"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/1/values/83
      - rowNumber: 1173
        values:
          - "1322"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co11
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
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
          - "37.47561"
          - "0.07669284"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/2/values/83
      - rowNumber: 1174
        values:
          - "1323"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co12
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
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
          - "37.55019"
          - "0.0750785"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/3/values/83
      - rowNumber: 1175
        values:
          - "1324"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co13
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
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
          - "37.85869"
          - "0.06821144"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/4/values/83
      - rowNumber: 1176
        values:
          - "1325"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co14
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - NA
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
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
          - "37.85869"
          - "0.06821144"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/5/values/83
      - rowNumber: 1177
        values:
          - "1326"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co2
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "37"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/63
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
          - "38.25464"
          - "0.07978806"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/6/values/83
      - rowNumber: 1178
        values:
          - "1327"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co3
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "38"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/63
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
          - "37.90529"
          - "0.07696042"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/7/values/83
      - rowNumber: 1179
        values:
          - "1328"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co4
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "39"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/63
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
          - "37.92375"
          - "0.09485481"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/8/values/83
      - rowNumber: 1180
        values:
          - "1329"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co5
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "40"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/63
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
          - "37.78723"
          - "0.07935372"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/9/values/83
      - rowNumber: 1181
        values:
          - "1330"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co6
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - larvae
          - "41"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/63
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
          - "37.53298"
          - "0.1166385"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/10/values/83
      - rowNumber: 1182
        values:
          - "1331"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co7
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - metamorphs
          - "43"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/63
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
          - "37.62458"
          - "0.1122475"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/11/values/83
      - rowNumber: 1183
        values:
          - "1332"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co8
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - metamorphs
          - "44"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/63
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
          - "37.35505"
          - "0.0830735"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/12/values/83
      - rowNumber: 1184
        values:
          - "1333"
          - Patrice Pottier
          - Dainton_1991
          - Heat tolerance and thyroid activity in developing tadpoles and juvenile adults of xenopus laevis daudin
          - "1997"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/0306-4565(91)90016-U
          - English
          - Xenopus_laevis_pop2
          - Xenopus_laevis_pop2_UTL_co9
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "22"
          - NA
          - embryos_and_larvae
          - "1"
          - "22"
          - NA
          - NA
          - Animals were acclimated from the embryonic stage to the larval stage.
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - LT50_hot
          - death
          - water
          - NA
          - NA
          - "0.033333333"
          - "4"
          - "1"
          - "30"
          - NA
          - NA
          - NA
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/63
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
          - "37.22236"
          - "0.07715898"
          - "4"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/13/values/83
      - rowNumber: 3460
        values:
          - "3785"
          - PPollo
          - Orille_et_al_2020
          - Positive effects of acclimation temperature on the critical thermal maxima of Ambystoma mexicanum and Xenopus laevis
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1670/19-080
          - English
          - Xenopus_laevis_pop3
          - Xenopus_laevis_pop3_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - "8"
          - NA
          - "21"
          - NA
          - adults
          - NA
          - NA
          - "72.81"
          - NA
          - mixed
          - CTmax
          - LRR
          - water
          - "17"
          - "0.745"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - The body mass reported is the body mass before trials.
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
          - Tab 1
          - NA
          - NA
          - "33.4"
          - "1.011928851"
          - "10"
          - sd
          - Standard deviation was calculated as SD = SE * sqrt(N)
      - rowNumber: 3461
        values:
          - "3786"
          - PPollo
          - Orille_et_al_2020
          - Positive effects of acclimation temperature on the critical thermal maxima of Ambystoma mexicanum and Xenopus laevis
          - "2020"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1670/19-080
          - English
          - Xenopus_laevis_pop3
          - Xenopus_laevis_pop3_UTL_co2
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - "24"
          - NA
          - "21"
          - NA
          - adults
          - NA
          - NA
          - "56.1"
          - NA
          - mixed
          - CTmax
          - LRR
          - water
          - "17"
          - "0.745"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - The body mass reported is the body mass before trials.
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
          - Tab 1
          - NA
          - NA
          - "37.4"
          - "0.42"
          - "9"
          - sd
          - Standard deviation was calculated as SD = SE * sqrt(N)
      - rowNumber: 3491
        values:
          - "3816"
          - Patrice Pottier
          - Paulson_and_Hutchison_1987b
          - Origin of the stimulus for muscular spasms at the critical thermal maximum in anurans
          - "1987"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.2307/1445684
          - English
          - Xenopus_laevis_pop4
          - Xenopus_laevis_pop4_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - "15"
          - "1"
          - "14"
          - NA
          - adults
          - NA
          - "113"
          - NA
          - NA
          - mixed
          - CTmax
          - OS
          - body
          - "15"
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
          - Tab 1
          - NA
          - NA
          - "35.5"
          - "0.39"
          - "12"
          - sd
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/16/values/83
      - rowNumber: 3780
        values:
          - "4143"
          - Yefeng Yang
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/17/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop6
          - Xenopus_laevis_pop6_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - larvae
          - "25"
          - "16"
          - "0.4"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.7127"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "16"
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
          - "12"
          - control
          - control
          - "0"
          - ?g/L
          - NA
          - NA
          - NA
          - Tab A4
          - NA
          - NA
          - "35.1"
          - "0.8"
          - "40"
          - sd
          - NA
      - rowNumber: 3781
        values:
          - "4144"
          - Yefeng Yang
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/18/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop6
          - Xenopus_laevis_pop6_UTL_co10
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - larvae
          - "25"
          - "25"
          - "0.5"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.15989"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "25"
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
          - "12"
          - control
          - control
          - "0"
          - ?g/L
          - NA
          - NA
          - NA
          - Tab A4
          - NA
          - NA
          - "39.7"
          - "0.2"
          - "44"
          - sd
          - NA
      - rowNumber: 3782
        values:
          - "4147"
          - Yefeng Yang
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/19/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop6
          - Xenopus_laevis_pop6_UTL_co13
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - larvae
          - "25"
          - "28"
          - "0.3"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.4881"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "28"
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
          - "12"
          - control
          - control
          - "0"
          - ?g/L
          - NA
          - NA
          - NA
          - Tab A4
          - NA
          - NA
          - "35.5"
          - "0.5"
          - "43"
          - sd
          - NA
      - rowNumber: 3783
        values:
          - "4152"
          - Yefeng Yang
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/20/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop6
          - Xenopus_laevis_pop6_UTL_co4
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - larvae
          - "25"
          - "19"
          - "0.5"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.44264"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "19"
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
          - "12"
          - control
          - control
          - "0"
          - ?g/L
          - NA
          - NA
          - NA
          - Tab A4
          - NA
          - NA
          - "31.5"
          - "0.5"
          - "39"
          - sd
          - NA
      - rowNumber: 3784
        values:
          - "4155"
          - Yefeng Yang
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/21/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop6
          - Xenopus_laevis_pop6_UTL_co7
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - larvae
          - "25"
          - "22"
          - "0.1"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.24337"
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "22"
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
          - "12"
          - control
          - control
          - "0"
          - ?g/L
          - NA
          - NA
          - NA
          - Tab A4
          - NA
          - NA
          - "31.6"
          - "0.3"
          - "41"
          - sd
          - NA
      - rowNumber: 3785
        values:
          - "4158"
          - Sarah Varon
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/22/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop5
          - Xenopus_laevis_pop5_LTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were obtained from a captive breeding facility
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "25"
          - "16"
          - "0.4"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.07127"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "16"
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
          - "12"
          - control
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "5.5"
          - "0.4"
          - "3"
          - sd
          - NA
      - rowNumber: 3786
        values:
          - "4159"
          - Sarah Varon
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/23/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop5
          - Xenopus_laevis_pop5_LTL_co10
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were obtained from a captive breeding facility
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "25"
          - "19"
          - "0.5"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.44264"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "19"
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
          - "12"
          - control
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "7.3"
          - "0.1"
          - "3"
          - sd
          - NA
      - rowNumber: 3787
        values:
          - "4162"
          - Sarah Varon
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/24/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop5
          - Xenopus_laevis_pop5_LTL_co13
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were obtained from a captive breeding facility
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "25"
          - "22"
          - "0.1"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.24337"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "22"
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
          - "12"
          - control
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "8.4"
          - "0.1"
          - "3"
          - sd
          - NA
      - rowNumber: 3788
        values:
          - "4165"
          - Sarah Varon
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/25/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop5
          - Xenopus_laevis_pop5_LTL_co2
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were obtained from a captive breeding facility
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "25"
          - "25"
          - "0.5"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.15989"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "25"
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
          - "12"
          - control
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "14.2"
          - "0.2"
          - "3"
          - sd
          - NA
      - rowNumber: 3789
        values:
          - "4168"
          - Sarah Varon
          - Ruthsatz_et_al_2018
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/26/values/3
          - "2018"
          - NA
          - NA
          - peer-reviewed
          - http://dx.doi.org/10.1093/conphys/coy059
          - English
          - Xenopus_laevis_pop5
          - Xenopus_laevis_pop5_LTL_co5
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Animals were obtained from a captive breeding facility
          - NA
          - NA
          - NA
          - NA
          - NA
          - acclimated
          - NA
          - NA
          - larvae
          - "25"
          - "28"
          - "0.3"
          - "28"
          - NA
          - metamorphs
          - "42"
          - NA
          - "0.04881"
          - NA
          - unknown
          - CTmin
          - LRR
          - water
          - "28"
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
          - "12"
          - control
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - table
          - NA
          - NA
          - "16.9"
          - "0.1"
          - "3"
          - sd
          - NA
      - rowNumber: 3928
        values:
          - "4348"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - larvae
          - "27"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - Gosner_tested was taken as the mean of the range presented (26-28).
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
          - Fig 2
          - NA
          - NA
          - "37.5971223"
          - "0.201438849"
          - "8"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/27/values/83
      - rowNumber: 3929
        values:
          - "4349"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co2
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - larvae
          - "32"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - Gosner_tested was taken as the mean of the range presented (29-35).
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
          - Fig 2
          - NA
          - NA
          - "37"
          - "0.09352518"
          - "12"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/28/values/83
      - rowNumber: 3930
        values:
          - "4350"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co3
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - larvae
          - "38.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - Gosner_tested was taken as the mean of the range presented (36-41).
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
          - Fig 2
          - NA
          - NA
          - "37.5971223"
          - "0.100719424"
          - "13"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/29/values/83
      - rowNumber: 3931
        values:
          - "4351"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co4
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - metamorphs
          - "42.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - Gosner_tested was taken as the mean of the range presented (42-43).
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
          - Fig 2
          - NA
          - NA
          - "36.50359712"
          - "0.208633094"
          - "9"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/30/values/83
      - rowNumber: 3932
        values:
          - "4352"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co5
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - metamorphs
          - "44.5"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - Gosner_tested was taken as the mean of the range presented (44-45).
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
          - Fig 2
          - NA
          - NA
          - "35.50359712"
          - "0.136690647"
          - "9"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/31/values/83
      - rowNumber: 3933
        values:
          - "4353"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co6
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - larvae
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - juveniles
          - "46"
          - NA
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - SVL was taken as the mean of the range presented (25-40 mm)
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
          - Fig 2
          - NA
          - NA
          - "37.29496403"
          - "0.079136691"
          - "12"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/32/values/83
      - rowNumber: 3934
        values:
          - "4354"
          - Patrice Pottier
          - Sherman_and_Levitis_2003
          - Heat hardening as a function of developmental stage in larval and juvenile Bufo americanus and Xenopus laevis
          - "2003"
          - NA
          - NA
          - peer-reviewed
          - 10.1016/S0306-4565(03)00014-7
          - English
          - Xenopus_laevis_pop7
          - Xenopus_laevis_pop7_UTL_co7
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - supplier
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
          - juveniles
          - NA
          - "21"
          - "1"
          - "11"
          - Acclimation time was taken as the mean of the range presented (8-14 days)
          - juveniles
          - NA
          - "32.5"
          - NA
          - NA
          - unknown
          - CTmax
          - prodding
          - water
          - "21"
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
          - "12"
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - NA
          - Fig 2
          - NA
          - NA
          - "37.1942446"
          - "0.100719424"
          - "7"
          - se
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/33/values/83
      - rowNumber: 4133
        values:
          - "4586"
          - Pietro Pollo
          - Viertel_1993
          - The Reaction of Suspension Feeding Anuran Larvae to Temperature, Hypercarbic and Hyperoxic Waters)
          - "1993"
          - NA
          - NA
          - peer-reviewed
          - NA
          - English
          - Xenopus_laevis_pop8
          - Xenopus_laevis_pop8_PBT_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
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
          - NA
          - NA
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/28
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
          - "22"
          - NA
          - "2"
          - Acclimation conditions unclear
          - larvae
          - NA
          - NA
          - NA
          - NA
          - unknown
          - Tpref
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
          - markdown: evidence.md
            field: /records/amphitherm-source-reader/originalRows/34/values/63
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
          - "23.61"
          - "3.12"
          - "88"
          - sd
          - NA
      - rowNumber: 4162
        values:
          - "4617"
          - Yefeng Yang
          - Wagener_et_al_2021
          - Progeny of Xenopus laevis from altitudinal extremes display adaptive physiological performance
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1242/jeb.233031
          - English
          - Xenopus_laevis_pop9
          - Xenopus_laevis_pop9_UTL_co1
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - NA
          - "20"
          - NA
          - NA
          - Animals were raised from the embryonic stage to Gosner stage 46.
          - juveniles
          - "46"
          - "10.5"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "20"
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
          - SVL was taken as the mean of the range presented (9-12 mm)
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
          - main text
          - NA
          - NA
          - "37.8"
          - "0.8"
          - "48"
          - se
          - Error type was assumed to be SE because standard errors were presented for other traits.
      - rowNumber: 4163
        values:
          - "4618"
          - Yefeng Yang
          - Wagener_et_al_2021
          - Progeny of Xenopus laevis from altitudinal extremes display adaptive physiological performance
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1242/jeb.233031
          - English
          - Xenopus_laevis_pop9
          - Xenopus_laevis_pop9_UTL_co2
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - NA
          - "20"
          - NA
          - NA
          - Animals were raised from the embryonic stage to Gosner stage 46.
          - juveniles
          - "46"
          - "10.5"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "20"
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
          - SVL was taken as the mean of the range presented (9-12 mm)
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
          - main text
          - NA
          - NA
          - "37.1"
          - "0.8"
          - "32"
          - se
          - Error type was assumed to be SE because standard errors were presented for other traits.
      - rowNumber: 4164
        values:
          - "4619"
          - Yefeng Yang
          - Wagener_et_al_2021
          - Progeny of Xenopus laevis from altitudinal extremes display adaptive physiological performance
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1242/jeb.233031
          - English
          - Xenopus_laevis_pop9
          - Xenopus_laevis_pop9_UTL_co3
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - NA
          - "20"
          - NA
          - NA
          - Animals were raised from the embryonic stage to Gosner stage 46.
          - juveniles
          - "46"
          - "10.5"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "20"
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
          - SVL was taken as the mean of the range presented (9-12 mm)
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
          - main text
          - NA
          - NA
          - "37.1"
          - "0.7"
          - "32"
          - se
          - Error type was assumed to be SE because standard errors were presented for other traits.
      - rowNumber: 4165
        values:
          - "4620"
          - Yefeng Yang
          - Wagener_et_al_2021
          - Progeny of Xenopus laevis from altitudinal extremes display adaptive physiological performance
          - "2021"
          - NA
          - NA
          - peer-reviewed
          - https://doi.org/10.1242/jeb.233031
          - English
          - Xenopus_laevis_pop9
          - Xenopus_laevis_pop9_UTL_co4
          - NA
          - Anura
          - Pipidae
          - Xenopus laevis
          - NA
          - LC
          - lab
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
          - acclimated
          - "20"
          - NA
          - embryos_and_larvae
          - NA
          - "20"
          - NA
          - NA
          - Animals were raised from the embryonic stage to Gosner stage 46.
          - juveniles
          - "46"
          - "10.5"
          - NA
          - NA
          - unknown
          - CTmax
          - LRR
          - water
          - "20"
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
          - SVL was taken as the mean of the range presented (9-12 mm)
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
          - main text
          - NA
          - NA
          - "37"
          - "0.8"
          - "48"
          - se
          - Error type was assumed to be SE because standard errors were presented for other traits.
    originalStudyCitations:
      - ref: Dainton_1991
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/0/title
          format: heading
        doi: 10.1016/0306-4565(91)90016-U
        year: "1997"
      - ref: Orille_et_al_2020
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/1/title
          format: heading
        doi: https://doi.org/10.1670/19-080
        year: "2020"
      - ref: Paulson_and_Hutchison_1987b
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/2/title
          format: heading
        doi: https://doi.org/10.2307/1445684
        year: "1987"
      - ref: Ruthsatz_et_al_2018
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/3/title
          format: heading
        doi: http://dx.doi.org/10.1093/conphys/coy059
        year: "2018"
      - ref: Sherman_and_Levitis_2003
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/4/title
          format: heading
        doi: 10.1016/S0306-4565(03)00014-7
        year: "2003"
      - ref: Viertel_1993
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/5/title
          format: heading
        doi: NA
        year: "1993"
      - ref: Wagener_et_al_2021
        title:
          markdown: page.en.md
          field: /records/amphitherm-source-reader/originalStudyCitations/6/title
          format: heading
        doi: https://doi.org/10.1242/jeb.233031
        year: "2021"
    selectedEstimateRowNumbers:
      - 1171
      - 3460
      - 3785
      - 4133
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 5CBC9
    limitations:
      en:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/amphitherm-source-reader/limitations/zh
---

# Xenopus laevis — AmphiTherm source

## referenceBindings / usage / locator

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 3460, 3461, 3491, 3780, 3781, 3782, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3928, 3929, 3930, 3931, 3932, 3933, 3934, 4133, 4162, 4163, 4164, 4165; Metadata_AmphiTherm.xlsx
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/amphitherm-source-reader/sources/referenceBindings/0/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/0/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/1/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/2/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/3/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/4/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/5/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/6/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/7/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/8/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/9/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/10/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/11/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/12/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/63 -->
gosner_tested was estimated based on the description of the stages (Nieuwkoop and Faber 1956) described in the paper. The n_animals_per_replicate was 30 at 36 degrees, and 50 animals at the other temperatures.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/13/values/83 -->
LT50 was calculated using survival data digitised from figure 1. I fitted a logistic regression and used the dose.p() function from 'MASS' to calculate LT50. n_trait was taken as the n_test_temp
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/16/values/83 -->
Data was taken from table 1 because SD was not reported in Rohr et al. 2018. Data with operated animals were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/17/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/18/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/19/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/20/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/21/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/22/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/23/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/24/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/25/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/26/values/3 -->
Thyroid hormone levels and temperature during development alter thermal tolerance and energetics of Xenopus laevis larvae
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/27/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/28/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/29/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/30/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/31/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/32/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/33/values/83 -->
Data was digitised from figure 2 because SD was not reported in Rohr et al. 2018. Repeated CTmax exposures were not included.
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/28 -->
Animals were assumed to be wild-caught because they were "collected" in a previous study by the same author (Viertel, 1992)
<!-- /evo:text -->

## amphitherm-source-reader / originalRows / values

<!-- evo:text /records/amphitherm-source-reader/originalRows/34/values/63 -->
Very little information about everything, including the origin of the specimens, experimental design, and everything else; most of the paper focus on other experiments
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/en -->
Partial source-compilation reader. Critical, lethal and preferred-temperature metrics, experimental media, acclimation conditions and life stages are distinct. Study reanalysis, current identity and remaining scientific facets are incomplete; not externally expert-reviewed.
<!-- /evo:text -->

## amphitherm-source-reader / limitations

<!-- evo:text /records/amphitherm-source-reader/limitations/zh -->
部分来源汇编读本。临界、致死与偏好温度指标、实验介质、温度适应条件及发育阶段分别处理。研究重新分析、当前身份与其余科学主题尚未完成；未经过外部领域专家评审。
<!-- /evo:text -->
