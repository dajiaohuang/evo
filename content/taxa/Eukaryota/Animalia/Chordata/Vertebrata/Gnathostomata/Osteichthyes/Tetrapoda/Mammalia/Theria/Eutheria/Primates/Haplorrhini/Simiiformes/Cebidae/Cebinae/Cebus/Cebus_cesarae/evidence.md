---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cebus cesarae Hershkovitz, 1949
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 塞萨尔河白额卷尾猴
      en: Cebus cesarae
    checkedAt: 2026-10-03
    sections:
      - topic: sampleProvenance
        sourceIds:
          - martins2018CebusSampleLinks
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: lineageInterpretation
        sourceIds:
          - martins2018CebusSampleLinks
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: markerScope
        sourceIds:
          - martins2018CebusSampleLinks
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - taxonomy
          - mdd_albifrons
      - topic: classification
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - ruiz2010
          - ruiz2019
      - topic: provisional reassessment
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - boubli2012
      - topic: morphology
        sourceIds:
          - eazaCapuchins2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - eazaCapuchins2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: taxonomy
        sourceIds:
          - garciaMontilla2021ColombiaTypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: taxonomy
        sourceIds:
          - garciaMontilla2021ColombiaTypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/RYZ7
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
        - referenceId: ref-c4be0a43-3f9d-871f-a4c9-3d965ffb2090
          metadataVariant: 1
          sourceKey: ruiz2010
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
            - doi
            - authors
            - publishedYear
            - journal
            - volume
            - issue
            - pages
            - scope
        - referenceId: ref-681fdc19-696f-8d81-aadb-4e0b9880dbf5
          metadataVariant: 0
          sourceKey: ruiz2019
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
        - referenceId: ref-716d7926-fe49-840a-ac92-a30f64d142d1
          metadataVariant: 0
          sourceKey: boubli2012
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
        - referenceId: ref-29d2e79c-adf5-4c14-9750-acdd96546d1c
          metadataVariant: 0
          sourceKey: eazaCapuchins2019
          usage:
            locator: Edition 1, 2019; title and citation pages 1–2, Summary p. 4; species account(s) p. 32. Species-table layout visually inspected.
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
        - referenceId: ref-f26d5ace-e38e-42e3-bf1c-c51cb8110b2f
          metadataVariant: 0
          sourceKey: garciaMontilla2021ColombiaTypes
          usage:
            locator: "Methods on printed pp2–3; Cebus discussion p8; cesarae type account p15. Redalyc PDF adds one cover page: PDF pages 3–4,9,16."
            accessedAt: 2026-10-03
            scope:
              zh: 2021 年文献复核转述的 cesarae 名称正模、模式地点和作者临时亚种提案；未直接检查原标本或 1949 原文，不支持生态、完整分布或遗传身份。
              en: The 2021 literature review’s reported cesarae type/locality and provisional subspecies proposal; original specimen and 1949 text were not directly inspected. No ecology, complete range or genetic identification is inferred.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - sourceKey: martins2018CebusSampleLinks
          referenceId: ref-9f878ef3-8c54-4144-bf3d-fc7327d19b45
          metadataVariant: 0
          usage:
            title: "Phylogenetic relationships among Capuchin (Cebidae, Platyrrhini) lineages: An old event of sympatry explains the current distribution of Cebus and Sapajus"
            url: https://doi.org/10.1590/1678-4685-GMB-2017-0012
            accessedAt: 2026-10-03
            locator: SciELO main paragraphs 10–18, 23–27, 29–30, 33–34, 39, 41–43, 50–54, 61; figure 4 caption; Supplementary Table S1 pp. 10, 12–13. Table pixels pp. 10, 12 examined; no raw-sequence or specimen reanalysis.
            scope:
              zh: 旧名称、指定馆藏与线粒体关联；未裁定当前种界或补齐生态。
              en: Historical names, named vouchers and mitochondrial associations; no current species-delimitation decision or completed ecology.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Cebus cesarae

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
118 只旧分类框架下的 C. albifrons 个体、696 bp mtCOII 序列及北哥伦比亚遗传群；不能直接作为现代 COL 独立种级边界或现生分布图。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Supports mtCOII groups in 118 C. albifrons sensu the older taxonomy; it does not directly establish modern COL species boundaries or present-day ranges.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
支持白额卷尾猴旧名群的线粒体组、线粒体基因和核微卫星分析；作者对分类的解释属于该研究的系统发育主张。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Supports mitogenomic, mitochondrial-gene and nuclear-microsatellite analyses of historically named white-fronted capuchin groups; taxonomic conclusions are the authors' phylogenetic interpretation.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
支持基于 50 个跨分布区样本的线粒体系统发育分析及暂定分类重评；作者明确指出仍需扩大地理采样，不支持生态或种群结论。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Supports a mitochondrial phylogeny and provisional reassessment based on 50 samples across the range; the authors call for broader geographic sampling. It does not support ecological or population claims.
<!-- /evo:text -->
