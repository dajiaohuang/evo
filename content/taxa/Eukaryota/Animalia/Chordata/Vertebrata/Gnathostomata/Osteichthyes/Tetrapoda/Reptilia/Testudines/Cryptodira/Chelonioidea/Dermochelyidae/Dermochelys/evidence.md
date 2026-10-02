---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: "Dermochelys"
    rank: genus
    sourceDatasetId: "1008"
    name:
      zh: "Dermochelys 属"
      en: "Dermochelys"
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/62PMJ
            locator: Accepted usage, full accepted parent chain, and exhaustive descendant traversal in the local COL26.8 hierarchy.
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
            - locator
        - referenceId: joyce-2007-mesozoic-turtle-phylogeny
          metadataVariant: 0
          sourceKey: joyce2007
          usage:
            locator: Appendix 1, p. 77, Dermochelys coriacea specimen list; character 60, p. 28; character 89, pp. 39–40; Appendix 3 legend, p. 80.
            rightsEvidenceUrl: https://doc.rero.ch/record/16104/files/PAL_E960.pdf
            licenseAssessment: paraphrase-only
            accessedAt: 2026-10-02
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
            - locator
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Dermochelys

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Dermochelys
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 identity, rank, accepted parent chain and complete strict accepted-species descendants. No extant flag; no identity inference from matching PBDB names.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 的身份、等级、接受父链和全部严格接受种后代；没有现生标志，也不从同名 PBDB 记录推导身份。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Species-specific morphology and coding methods in Joyce (2007), not geographic, demographic or conservation evidence. Paraphrase only; no figures or matrix reproduced.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
Joyce（2007）中直接对应本种的形态及编码方法，不是地理、种群或保护证据。仅转述，不复制图版或矩阵。
<!-- /evo:text -->
