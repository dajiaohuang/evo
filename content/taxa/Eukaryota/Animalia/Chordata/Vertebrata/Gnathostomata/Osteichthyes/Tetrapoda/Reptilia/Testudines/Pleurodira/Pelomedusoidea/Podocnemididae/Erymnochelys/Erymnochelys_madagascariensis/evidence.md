---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Erymnochelys madagascariensis
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: Erymnochelys madagascariensis
      en: Erymnochelys madagascariensis
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - taxonomy
        topic: overview
      - text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pelomedusoidNeuroanatomy
        topic: morphology
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsLimitedV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsLimitedV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsLimitedV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: overview
        sourceIds:
          - reptTraitsLimitedV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: interpretation
        sourceIds:
          - reptTraitsLimitedV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Erymnochelys madagascariensis
            url: https://www.checklistbank.org/dataset/316115/taxon/6GQJ9
            locator: Accepted COL26.8 species usage and parent classification.
            scope:
              zh: 固定 COL26.8 接受名称、阶元与父级分类；不推断现生状态或后代覆盖完整性。
              en: Pinned COL26.8 accepted name, rank and parent classification; no inference about living status or complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
        - referenceId: ref-12a1495c-e3a3-4bd2-b122-6f1a95a588f6
          metadataVariant: 0
          sourceKey: pelomedusoidNeuroanatomy
          usage:
            locator: Methods and section 3.2.6; skull MNHN.ZA.AC 1946-71.
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
            scope:
              zh: 单一头骨的 CT 重建与比较描述。
              en: CT reconstruction and comparative description of one skull only.
          originalFields:
            - id
            - title
            - url
            - version
            - publishedAt
            - license
            - licenseEvidenceUrl
            - locator
            - licenseAssessment
            - accessedAt
            - scope
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsLimitedV12
          usage:
            locator: ReptTraits dataset v1-2.xlsx; Data row 4740; Species=Erymnochelys madagascariensis; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Microhabitat: IUCN 2023
              Reproductive mode: Zimin et al. 2022
              Mean number of offspring per litter or number of eggs per clutch: Iverson et al. 1993
            withheldCitationFields: []
            supportedFocalFields:
              - Mean number of offspring per litter or number of eggs per clutch
              - Microhabitat
              - Reproductive mode
            scope:
              zh: 尺寸、活动、取食与繁殖的已引性状资料；不外推体重、幼体长度、毒性、保护或当前分布。
              en: Cited size, activity, feeding and reproductive traits; no mass, juvenile-length, venom, conservation or current-range inference.
            readerMissingFocalFields:
              - Maximum length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Maximum female length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Maximum male length ("SVL", mm)/straight carapace length for turtles ("SCL", mm)
              - Maximum total length ("TL", mm)
              - Smallest clutch size
              - Largest clutch size
              - Number of litters or clutches produced per year
              - Egg length (mm)
              - Egg width (mm)
              - Diet
              - Active time
              - Foraging mode
              - Sex-determining mechanism (GSD or TSD)
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - sourceFileId
            - sourceFileMd5
            - sourceFileSha256
            - sourceClassification
            - sourceCitationByField
            - withheldCitationFields
            - supportedFocalFields
            - scope
            - readerMissingFocalFields
        - referenceId: ref-d075eefb-2767-428c-ae91-9d089b535c8d
          metadataVariant: 0
          sourceKey: reptTraitsProtocol2024
          usage:
            locator: Methods; Data Records (maximum size, source aggregation, length-to-mass estimates); Usage Notes; workbook Trait definitions and Changes sheets.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-paraphrase
            scope:
              zh: 性状定义、汇总方式与资料缺口；不证明历史名称与固定 COL26.8 概念完全等同。
              en: Trait definitions, aggregation and gaps; not proof of concept equivalence between historical names and pinned COL26.8.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Erymnochelys madagascariensis
