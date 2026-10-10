---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cebus brunneus Allen, 1914
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 布鲁内乌斯卷尾猴
      en: Cebus brunneus
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
          - mdd_olivaceus
          - iucn_brunneus_2021
      - topic: classification
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - boubli2012
          - rylands2024
      - topic: assessment-reported range and habitat
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - iucn_brunneus_2021
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
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/RYZ2
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
        - referenceId: ref-a08a5074-cbf8-845c-a807-74609cd0630f
          metadataVariant: 1
          sourceKey: mdd_olivaceus
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
        - referenceId: ref-68ab6196-ed95-80c6-a7b4-ec278d7dc1bf
          metadataVariant: 0
          sourceKey: iucn_brunneus_2021
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
        - referenceId: ref-716d7926-fe49-840a-ac92-a30f64d142d1
          metadataVariant: 0
          sourceKey: boubli2012
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
        - referenceId: ref-bf02a03e-5f9a-8c4a-aa97-5d9f937914aa
          metadataVariant: 0
          sourceKey: rylands2024
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
            locator: Edition 1, 2019; title and citation pages 1–2, Summary p. 4; species account(s) p. 31. Species-table layout visually inspected.
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

# Cebus brunneus

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
用于说明 MDD v2.5 将 C. brunneus 作为 C. olivaceus 相关异名的处理；不裁决 COL 与其他来源的分类分歧。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Documents MDD v2.5 treatment of C. brunneus among names associated with C. olivaceus; it does not resolve disagreement among COL and other sources.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
记录 2021 年 IUCN 评估仍以 C. brunneus 为物种级条目的分类处理；其条目本身也讨论名称和样本身份争议。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Records the 2020 IUCN global assessment (published 2021), including its assessment-reported range, elevations, habitat types and field records; the assessment itself discusses the name and sample-identity controversy, so these records are not independently reassigned to the pinned COL concept.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
支持基于线粒体 DNA 样本的初步分类重估；“brunneus”样本身份后来受到模式标本比较质疑。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Supports a preliminary reassessment using mitochondrial DNA samples; the identity of samples labeled brunneus was later questioned through comparison with the type specimen.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
支持作者对 C. brunneus 模式标本、遗传样本身份差异及名称使用的分类评述；不提供本名所指群体的生态调查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Supports the authors' taxonomic review of the C. brunneus type, genetic-sample identity mismatch and name usage; it is not an ecological survey of the population meant by that name.
<!-- /evo:text -->
