---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Propithecus perrieri Lavauden, 1931
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Perrier's Sifaka
      zh: 佩里耶西法卡
    checkedAt: 2026-10-02
    sections:
      - topic: survey
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - taxonomy
          - mdd_name
          - banks2007
      - topic: overview
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: sources
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6VXQ9
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
        - referenceId: ref-f5761b20-2bbc-8e80-ac60-d15a1f48ea75
          metadataVariant: 0
          sourceKey: mdd_name
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-444c3342-d0c3-8cf2-a17c-1d6f207a80be
          metadataVariant: 0
          sourceKey: banks2007
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - title
            - url
            - scope
            - id
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: MamFuncDat.txt logical TSV row 521; Scientific=Propithecus perrieri; MamFuncDatSources.txt; selected group source labels retained separately.
            accessedAt: 2026-10-02
            sourceVersion: EltonTraits 1.0; metadata latest update August 2013
            sourceFileSha256: 51acbe6215b3c1f742463ff3fb37ef607150c052e0f7a9dc0d97fcaca61d3f76
            selectedFieldGroups:
              diet:
                fields:
                  - Diet-Inv
                  - Diet-Vend
                  - Diet-Vect
                  - Diet-Vfish
                  - Diet-Vunk
                  - Diet-Scav
                  - Diet-Fruit
                  - Diet-Nect
                  - Diet-Seed
                  - Diet-PlantO
                references:
                  - id: Ref_41
                    verbatim: Garbutt, Nick (2007). Mammals of Madagascar, A Complete Guide. p. 189–191.
                certainty: ABC
              foraging:
                fields:
                  - ForStrat-Value
                  - ForStrat-Comment
                references:
                  - id: metadata:Nowak1999
                    verbatim: Nowak, R. M. 1999. Walker's mammals of the world. Sixth edition. The Johns Hopkins University Press, Baltimore, Maryland, USA. Source assigned to all mammal foraging strata by Table 2 metadata.
                certainty: A
              activity:
                fields:
                  - Activity-Nocturnal
                  - Activity-Crepuscular
                  - Activity-Diurnal
                references:
                  - id: Ref_1
                    verbatim: Nowak R.M. (1999). Walker's mammals of the world. Sixth edition edn. The Johns Hopkins University Press, Baltimore, Maryland
                certainty: ABC
            withheldFieldGroups: []
            sourceRecordComment: null
            associationBoundary: Historical exact same-name and same-family record only. Modern species concept equivalence not established. Mammal ABC flags can include inference from a named congener; no primary species-level observation claim.
            scope:
              zh: 历史同名同科的取食生态；相对权重为文献描述估计，ABC 字段可含同属材料。
              en: Historical same-name, same-family foraging ecology; weights are literature-description estimates, and ABC fields can include congeneric material.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - sourceVersion
            - sourceFileSha256
            - selectedFieldGroups
            - withheldFieldGroups
            - sourceRecordComment
            - associationBoundary
            - scope
        - referenceId: ref-23d71769-a573-4f3c-8284-3271a2ef8b53
          metadataVariant: 0
          sourceKey: eltonTraitsMethods2014
          usage:
            locator: Ecological Archives E095-178-D1 metadata.php; Class II B translation/interpolation/limitations; Class IV Tables 1–4.
            accessedAt: 2026-10-02
            scope:
              zh: 文献描述的半定量转换、字段代码、插补与历史分类边界；未读底层文献。
              en: Semiquantitative translation, field codes, interpolation and historical taxonomy; underlying literature not read.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Propithecus perrieri

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Propithecus perrieri Lavauden, 1931
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 中的接受名、作者、等级和分类父链；不提供生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Supports the current English common-name crosswalk used for the page; not evidence of occurrence, ecology or a complete range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
支持本页采用的当前英文普通名交叉表；不作为出现记录、生态或完整分布证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Line-transect surveys conducted in 2003–2004 and remote-sensing comparison of 1994 and 2002 Landsat imagery; abundance estimates are historical and model-dependent.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持 2003—2004 年样线调查及 1994、2002 年 Landsat 影像比较；数量估算具有年代与模型边界。
<!-- /evo:text -->
