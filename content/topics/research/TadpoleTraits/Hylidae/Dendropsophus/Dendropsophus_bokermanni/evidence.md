---
schemaVersion: 1
kind: evidence
records:
  tadpole-traits-reader:
    scientificName: Dendropsophus bokermanni
    name:
      en: Dendropsophus bokermanni
      zh: Dendropsophus bokermanni
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
      family: Hylidae
      genus: Dendropsophus
      authority: Amphibian Species of the World 6.2 (2024), as recorded by dataset authors
    originalLiteratureRows: []
    originalImageRows:
      - rowNumber: 363
        values:
          - markdown: evidence.md
            field: /records/tadpole-traits-reader/originalImageRows/0/values/0
          - Measurement
          - Hand-drawn picture
          - Dendropsophus bokermanni
          - Hylidae
          - Dendropsophus
          - Dendropsophus bokermanni
          - 32 (Judging based on the picture)
          - 30
          - 10.899
          - 19.5
          - 6.002
          - 8.401
          - 2.602
          - 3.505
          - 2.9
          - 7.1
          - 2.3
          - null
          - 0.3633
          - 0.65
          - 0.266666666667
          - 0.2833333333333
          - 0.867333333333333
          - 0.116833333333333
          - 0.966666666666667
          - 0.236666666666667
          - 0.766666666666667
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
        row: 363
        scientificName: Dendropsophus bokermanni
        sourceField: BMH/TL
        suppliedRatio: 0.266666666667
        originalNumerator: 6.002
        originalTotalLength: 30
        computedRatio: 0.20006666666666667
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 363
        scientificName: Dendropsophus bokermanni
        sourceField: MTH/TL
        suppliedRatio: 0.2833333333333
        originalNumerator: 8.401
        originalTotalLength: 30
        computedRatio: 0.2800333333333333
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 363
        scientificName: Dendropsophus bokermanni
        sourceField: TMH/TL
        suppliedRatio: 0.867333333333333
        originalNumerator: 2.602
        originalTotalLength: 30
        computedRatio: 0.08673333333333333
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 363
        scientificName: Dendropsophus bokermanni
        sourceField: VFH/TL
        suppliedRatio: 0.966666666666667
        originalNumerator: 2.9
        originalTotalLength: 30
        computedRatio: 0.09666666666666666
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
      - sheet: Picture measurement data
        row: 363
        scientificName: Dendropsophus bokermanni
        sourceField: TMW/TL
        suppliedRatio: 0.766666666666667
        originalNumerator: 2.3
        originalTotalLength: 30
        computedRatio: 0.07666666666666666
        disposition: Preserve original cells; do not use the inconsistent ratio as a reader claim without source review.
    selectedSourceRatios:
      - field: BL/TL
        label:
          en: body length / total length
          zh: 躯体长度/全长
        value: 0.3633
        row: 363
        stage: 32 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
      - field: TaL/TL
        label:
          en: tail length / total length
          zh: 尾长/全长
        value: 0.65
        row: 363
        stage: 32 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
      - field: DFH/TL
        label:
          en: dorsal fin height / total length
          zh: 背鳍高度/全长
        value: 0.116833333333333
        row: 363
        stage: 32 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
      - field: BMW/TL
        label:
          en: maximum body width / total length
          zh: 躯体最大宽度/全长
        value: 0.236666666666667
        row: 363
        stage: 32 (Judging based on the picture)
        type: Measurement
        imageType: Hand-drawn picture
    sourceConceptMapping:
      status: unresolved
      candidateColIds:
        - 34S4P
    quantitativeLengthUnits: not-confirmed-from-readme; absolute dimensions omitted from reader claims
    limitations:
      en:
        markdown: evidence.md
        field: /records/tadpole-traits-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/tadpole-traits-reader/limitations/zh
---

# Dendropsophus bokermanni — TadpoleTraits

## referenceBindings / usage / locator

<!-- evo:text /records/tadpole-traits-reader/sources/referenceBindings/0/usage/locator -->
Tadpole data 2025.4.21.xlsx; Data obtained from literature rows none; Picture measurement data rows 363; Readme rows 6–50
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
Lynch, J., & Suárez-Mayorga, A. (2011). An illustrated key to the tadpoles in the eastern lowlands of Colombia, with emphasis on the Hylidae. Caldasia, 33(1), 235-270.
<!-- /evo:text -->

## tadpole-traits-reader / limitations

<!-- evo:text /records/tadpole-traits-reader/limitations/en -->
A source compilation reader for tadpoles. Source attribution, images, uncertain stages and inconsistent ratios retain their separate scopes. Primary-work review, absolute measurement units, current species identity and the remaining scientific facets are incomplete.
<!-- /evo:text -->

## tadpole-traits-reader / limitations

<!-- evo:text /records/tadpole-traits-reader/limitations/zh -->
本页为蝌蚪来源汇编读本。来源归属、图像、未确定阶段和冲突比例分别保留其范围。原始文献审阅、绝对尺寸单位、当前物种身份及其余科学主题尚未完成。
<!-- /evo:text -->
