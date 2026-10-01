---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: "Pygoscelis papua (J. R. Forster, 1781)"
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-10-02
    name:
      en: "Gentoo Penguin"
      zh: "巴布亚企鹅"
    reviewStatus: source-linked
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: COL26.8 ChecklistBank accepted species usage 78R2P
            url: https://www.checklistbank.org/dataset/316115/taxon/78R2P
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: xavier2017-gentoo-winter-foraging
          metadataVariant: 0
          sourceKey: gentooWinter2009
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
            license: CC BY 4.0
            licenseEvidenceLocator: "Article copyright and licence statement specifies Creative Commons Attribution 4.0 International."
            licenseAppliesTo: "Article text; no figures or third-party materials are reused."
            licenseUrl: https://creativecommons.org/licenses/by/4.0/
            licenseAssessment: item-level-verified
            attribution: "Xavier, J. C. et al. (2017), Sexual and individual foraging segregation in Gentoo penguins Pygoscelis papua from the Southern Ocean during an abnormal winter, https://doi.org/10.1371/journal.pone.0174850"
          originalFields:
            - id
            - title
            - url
            - scope
            - license
            - licenseAppliesTo
            - attribution
            - licenseEvidenceLocator
            - licenseUrl
            - licenseAssessment
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Pygoscelis papua (J. R. Forster, 1781)

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pins the COL26.8 accepted scientific name, authorship, rank and parent identity for this reader page.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定本页采用的 COL26.8 接受名、作者、等级与父分类身份。
<!-- /evo:text -->

## referenceBindings / usage / scope / en

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Examines winter 2009 diet and stable isotopes at Bird Island, South Georgia, during unusually warm conditions. Stomach contents were obtained from 55 birds; 43 samples with food residue informed diet comparisons. Findings are one colony-season result, not a general species diet or mortality cause.
<!-- /evo:text -->

## referenceBindings / usage / scope / zh

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
研究南乔治亚岛 Bird Island 在 2009 年异常偏暖冬季的食性与稳定同位素。共取得 55 只个体的胃含物，其中 43 份含有可分析食物残留并用于食性比较。结论仅适用于一个繁殖地和一个季节，不代表普遍食谱，也未确定死亡原因。
<!-- /evo:text -->
