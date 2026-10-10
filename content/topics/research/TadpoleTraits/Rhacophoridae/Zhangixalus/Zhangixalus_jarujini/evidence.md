---
schemaVersion: 1
kind: evidence
records:
  tadpole-traits-reader:
    scientificName: Zhangixalus jarujini
    name:
      en: Zhangixalus jarujini
      zh: Zhangixalus jarujini
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        title:
          en: The source tadpole concept
          zh: 来源中的蝌蚪概念
        sourceIds:
          - tadpoletraits
        text:
          en:
            markdown: page.en.md
            field: /records/tadpole-traits-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/tadpole-traits-reader/sections/0/text/zh
      - topic: morphology
        title:
          en: Developmental material
          zh: 发育阶段材料
        sourceIds:
          - tadpoletraits
        text:
          en:
            markdown: page.en.md
            field: /records/tadpole-traits-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/tadpole-traits-reader/sections/1/text/zh
      - topic: morphology
        title:
          en: Selected image-derived proportions
          zh: 选列的图像比例
        sourceIds:
          - tadpoletraits
        text:
          en:
            markdown: page.en.md
            field: /records/tadpole-traits-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/tadpole-traits-reader/sections/2/text/zh
      - topic: overview
        title:
          en: Unresolved source ratios
          zh: 未解决的来源比例
        sourceIds:
          - tadpoletraits
        text:
          en:
            markdown: page.en.md
            field: /records/tadpole-traits-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/tadpole-traits-reader/sections/3/text/zh
    sources:
      referenceBindings:
        - referenceId: ref-e5d27423-2f5f-44dd-a167-538d5a5e4e0d
          metadataVariant: 0
          sourceKey: tadpoletraits
          usage:
            locator:
              markdown: evidence.md
              field: /records/tadpole-traits-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/tadpole-traits-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/tadpole-traits-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
    sourceClassification:
      family: Rhacophoridae
      genus: Zhangixalus
      authority: Amphibian Species of the World 6.2 (2024), as recorded by dataset authors
    originalLiteratureRows: []
    originalImageRows:
      - rowNumber: 1930
        values:
          - markdown: evidence.md
            field: /records/tadpole-traits-reader/originalImageRows/0/values/0
          - Measurement
          - Hand-drawn picture
          - Rhacophorus jarujini
          - Rhacophoridae
          - Zhangixalus
          - Zhangixalus jarujini
          - 35 (Judging based on the picture)
          - 59.935
          - 21.39
          - 38.587
          - 9.54
          - 12.104
          - 5.394
          - 4.21
          - 2.631
          - null
          - null
          - null
          - 0.356886627179444
          - 0.64381413197638
          - 0.1591724368654
          - 0.2195211479124
          - 0.899974972887295
          - 0.72427629932427
          - 0.438975556853258
          - null
          - null
          - null
          - Yanfang Song
    originalColumns:
      literature:
        - Reference
        - Species
        - Family (ASTW)
        - Genus (ASTW)
        - Species (ASTW)
        - Sample size
        - Stage
        - TL
        - TL.sd
        - BL
        - BL.sd
        - BMH
        - BMH.sd
        - BMW
        - BMW.sd
        - BWN
        - BWN.sd
        - BWE
        - BWE.sd
        - TaL
        - TaL.sd
        - MTH
        - MTH.sd
        - TMH
        - TMH.sd
        - TMW
        - TMW.sd
        - DFH
        - DFH.sd
        - VFH
        - VFH.sd
        - IND.a
        - IND.a.sd
        - IND.b
        - IND.b.sd
        - IND.c
        - IND.c.sd
        - END.a
        - END.a.sd
        - END.b
        - END.b.sd
        - END.c
        - END.c.sd
        - IOD.a
        - IOD.a.sd
        - IOD.b
        - IOD.b.sd
        - IOD.c
        - IOD.c.sd
        - E
        - E.sd
        - SSD.a
        - SSD.sd
        - SSD.b
        - SSD.b.sd
        - SSD.c
        - SSD.c.sd
        - NS.a
        - NS.a.sd
        - NS.b
        - NS.b.sd
        - NS.c
        - NS.c.sd
        - ES.a
        - ES.a.sd
        - ES.b
        - ES.b.sd
        - ES.c
        - ES.c.sd
        - N
        - N.sd
        - OD
        - OD.sd
        - VTL
        - VTL.sd
        - SL
        - SL.sd
      image:
        - Reference
        - Type
        - Image type
        - Species
        - Family (ASTW)
        - Genus (ASTW)
        - Species (ASTW)
        - Stage
        - TL
        - BL
        - TaL
        - BMH
        - MTH
        - TMH
        - DFH
        - VFH
        - BMW
        - TMW
        - OD
        - BL/TL
        - TaL/TL
        - BMH/TL
        - MTH/TL
        - TMH/TL
        - DFH/TL
        - VFH/TL
        - BMW/TL
        - TMW/TL
        - OD/TL
        - Person taking measurements
    ratioDiscrepancies:
      - sheet: Picture measurement data
        row: 1930
        scientificName: Zhangixalus jarujini
        sourceField: MTH/TL
        suppliedRatio: 0.2195211479124
        originalNumerator: 12.104
        originalTotalLength: 59.935
        computedRatio: 0.2019521147910236
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 1930
        scientificName: Zhangixalus jarujini
        sourceField: TMH/TL
        suppliedRatio: 0.899974972887295
        originalNumerator: 5.394
        originalTotalLength: 59.935
        computedRatio: 0.08999749728872945
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 1930
        scientificName: Zhangixalus jarujini
        sourceField: DFH/TL
        suppliedRatio: 0.72427629932427
        originalNumerator: 4.21
        originalTotalLength: 59.935
        computedRatio: 0.07024276299324268
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 1930
        scientificName: Zhangixalus jarujini
        sourceField: VFH/TL
        suppliedRatio: 0.438975556853258
        originalNumerator: 2.631
        originalTotalLength: 59.935
        computedRatio: 0.043897555685325766
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
    selectedSourceRatios:
      - field: BL/TL
        label:
          en: body length / total length
          zh: 躯体长度/全长
        value: 0.356886627179444
        row: 1930
        stage: 35 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
      - field: TaL/TL
        label:
          en: tail length / total length
          zh: 尾长/全长
        value: 0.64381413197638
        row: 1930
        stage: 35 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
      - field: BMH/TL
        label:
          en: maximum body height / total length
          zh: 躯体最大高度/全长
        value: 0.1591724368654
        row: 1930
        stage: 35 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 7GG27
    quantitativeLengthUnits: not-confirmed-from-readme; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/tadpole-traits-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/tadpole-traits-reader/limitations/zh
---

# Zhangixalus jarujini — TadpoleTraits

## referenceBindings / usage / locator

<!-- evo:text /records/tadpole-traits-reader/sources/referenceBindings/0/usage/locator -->
Tadpole data 2025.4.21.xlsx; Data obtained from literature rows none; Picture measurement data rows 1930; Readme rows 6–50
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/tadpole-traits-reader/sources/referenceBindings/0/usage/scope/en -->
The deposited ASTW-2024 source concept, literature/image evidence distinction, supplied developmental labels and non-conflicting source proportions. No adult morphology or range-wide diagnosis is inferred.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/tadpole-traits-reader/sources/referenceBindings/0/usage/scope/zh -->
存档的 ASTW-2024 来源概念、文献与图像证据的区别、所给发育标签及无已发现冲突的来源比例；不推断成体形态或全分布区鉴别特征。
<!-- /evo:text -->

## tadpole-traits-reader / originalImageRows / values

<!-- evo:text /records/tadpole-traits-reader/originalImageRows/0/values/0 -->
Stuart, B. L., Chuaynkern, Y., Chan-ard, T., & Inger, R. F. (2006). Three new species of frogs and a new tadpole from eastern Thailand. Fieldiana Zoology, 2006(111), 1-19.
<!-- /evo:text -->

## tadpole-traits-reader / limitations

<!-- evo:text /records/tadpole-traits-reader/limitations/en -->
A source compilation reader for tadpoles. Source attribution, images, uncertain stages and inconsistent ratios retain their separate scopes. Primary-work review, absolute measurement units, current species identity and the remaining scientific facets are incomplete.
<!-- /evo:text -->

## tadpole-traits-reader / limitations

<!-- evo:text /records/tadpole-traits-reader/limitations/zh -->
本页为蝌蚪来源汇编读本。来源归属、图像、未确定阶段和冲突比例分别保留其范围。原始文献审阅、绝对尺寸单位、当前物种身份及其余科学主题尚未完成。
<!-- /evo:text -->
