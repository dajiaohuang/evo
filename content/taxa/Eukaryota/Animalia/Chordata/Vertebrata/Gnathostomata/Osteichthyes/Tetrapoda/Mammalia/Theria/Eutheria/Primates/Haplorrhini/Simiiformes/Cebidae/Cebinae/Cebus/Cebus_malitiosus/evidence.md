---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cebus malitiosus Elliot, 1909
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 圣玛尔塔白额卷尾猴
      en: Cebus malitiosus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - taxonomy
          - mdd_albifrons
          - atlas_malitiosus
      - topic: classification
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - ruiz2019
          - malitiosus_type_2026
      - topic: distribution
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - atlas_malitiosus
      - topic: historical sample labels
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - ruiz2018mitogenomics
      - topic: morphology
        sourceIds:
          - eazaCapuchins2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - eazaCapuchins2019
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
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/RYZS
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
        - referenceId: ref-3b8581a2-58b8-8805-aa72-5c36df067e9e
          metadataVariant: 1
          sourceKey: mdd_albifrons
          usage:
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
        - referenceId: ref-681fdc19-696f-8d81-aadb-4e0b9880dbf5
          metadataVariant: 0
          sourceKey: ruiz2019
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-f5d5e5d4-f24b-877d-aa60-8dc5a700ff4c
          metadataVariant: 0
          sourceKey: atlas_malitiosus
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-2018cebu-mitogenomics
          metadataVariant: 0
          sourceKey: ruiz2018mitogenomics
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-f4ef8cb5-531a-4d83-9da9-808f2f6d1547
          metadataVariant: 0
          sourceKey: malitiosus_type_2026
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-29d2e79c-adf5-4c14-9750-acdd96546d1c
          metadataVariant: 0
          sourceKey: eazaCapuchins2019
          usage:
            locator: Edition 1, 2019; title and citation pages 1–2, Summary p. 4; species account(s) p. 24. Species-table layout visually inspected.
            accessedAt: 2026-10-02
            sourceFileSha256: c25bd58375481bb637bb2906e08b63e6242f298269ee66bf264d95e7de32afb0
            sourceFileBytes: 10836242
            scope:
              zh: 2019 年手册采用名称下的形态、栖地和明确资料缺口；不作当前分类或生态裁决。
              en: Morphology, habitat and explicit gaps under the 2019 handbook’s names; no current taxonomic or ecological adjudication.
            licenseAssessment: Original factual paraphrases only; all-rights-reserved PDF, maps and drawings are not redistributed.
            readerBoundaries:
              - Source-specific 2019 name concepts, not an independent taxonomic resolution.
              - Compiled size fields do not specify original samples or measurement protocols.
              - Historical status labels and collection-plan policies are omitted; no current conservation or husbandry recommendation.
              - Species gaps are not filled from genus-level diet or zoo-management surveys.
          originalFields:
            - id
            - title
            - url
            - version
            - doi
            - locator
            - accessedAt
            - sourceFileSha256
            - sourceFileBytes
            - scope
            - licenseAssessment
            - readerBoundaries
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Cebus malitiosus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
用于说明 MDD v2.5 对白额卷尾猴及相关名称的分类处理；不替代固定 COL26.8 身份或野外研究证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Documents MDD v2.5 treatment of White-fronted Capuchin and associated names; it does not replace the pinned COL26.8 identity or field evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持白额卷尾猴旧名群的线粒体组、线粒体基因和核微卫星分析；作者对分类的解释属于该研究的系统发育主张。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Supports mitogenomic, mitochondrial-gene and nuclear-microsatellite analyses of historically named white-fronted capuchin groups; taxonomic conclusions are the authors' phylogenetic interpretation.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
支持国家生物多样性图集中的潜在与剩余分布模型图层；不是现场点位、占域普查或生物学研究。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Supports potential and remnant range-model layers in a national biodiversity atlas; not field locations, an occupancy census or a natural-history study.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
支持 2018 年研究表 II 中历史样本标签及其表列数量和地点；该表内 malitosus/malitiosus 拼写不一致，不据此判定当前分类归属或分布。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Supports historical sample labels, counts and locations in Table II of the 2018 study; its malitosus/malitiosus spellings differ, so this table is not used to decide current taxonomy or range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
支持对 AMNH 14620 馆藏皮张和头骨标签的 2026 年复核及正模处理建议；不解决固定名录的分类等级，也不提供野外生态资料。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Supports the 2026 review of AMNH 14620's museum skin and skull labels and the authors' holotype recommendation; it does not settle rank under the pinned catalogue or provide field ecology.
<!-- /evo:text -->
