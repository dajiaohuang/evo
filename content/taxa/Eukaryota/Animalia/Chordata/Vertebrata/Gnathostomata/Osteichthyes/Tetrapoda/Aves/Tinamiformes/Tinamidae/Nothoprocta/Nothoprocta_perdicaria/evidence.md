---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nothoprocta perdicaria
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Nothoprocta perdicaria
      en: Nothoprocta perdicaria
    checkedAt: 2026-10-03
    sections:
      - topic: genomeMaterial
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
          - ncbi2019PalaeognathWgsReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: phylogeneticComparison
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
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
            title: Catalogue of Life COL26.8 — Nothoprocta perdicaria
            url: https://www.checklistbank.org/dataset/316115/taxon/47TPJ
            locator: Pinned accepted name, rank and ancestor closure; matching names do not establish concept equivalence.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: AVONET Supplementary dataset 1.xlsx; AVONET1_BirdLife; Species1=Nothoprocta perdicaria; Sequence=40; Metadata field definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 34480856
            sourceFileMd5: 1445afdcfb6df784010c2ca034544bc8
            sourceFileSha256: eb645e83dddb40f1654a3e8d721998dbca76eff540231b7b809267c1e96f8d3e
            sourceTaxonomy: HBW–BirdLife version 5.0 (December 2020)
            externalConceptId: AVIBASE-F900EE88
            scope:
              zh: 历史同名记录的数据导读；仅使用 Inference=NO 且至少一套完整形态测量的记录。保留体重来源和繁殖/留居地理范围限定，不推断当前分类概念等同。
              en: Historical same-name data account, using Inference=NO records with at least one complete morphological set. Mass provenance and breeding/resident geography retained; no current taxonomic concept equivalence inferred.
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
            - sourceTaxonomy
            - externalConceptId
            - scope
        - referenceId: ref-43f38f21-86d6-45b9-a255-7b157984216b
          metadataVariant: 0
          sourceKey: avonetProtocol2022
          usage:
            locator: Measurement protocol, taxonomic harmonization and species-average data; workbook Metadata sheet defines field meanings.
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 支持测量定义、取样与物种均值的解释；不证明 2020 历史分类概念与 COL26.8 完全等同。
              en: Measurement definitions, sampling and species-average interpretation; not proof that historical 2020 species concepts equal COL26.8 concepts.
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
        - sourceKey: sackton2019FlightLossReader
          referenceId: ref-5bd64bcf-d144-4042-85d0-7698b80a8c94
          metadataVariant: 0
          usage:
            title: Convergent regulatory evolution and loss of flight in paleognathous birds
            url: https://doi.org/10.1126/science.aat7244
            accessedAt: 2026-10-03
            locator: Published main Science PDF, all main scientific text and captions; figure 1 pixels only; no supplements or rerun
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
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
        - sourceKey: cloutier2019PalaeognathReader
          referenceId: ref-21d5a78e-cddb-4430-8d22-79f8a455bf0b
          metadataVariant: 0
          usage:
            title: Whole-Genome Analyses Resolve the Phylogeny of Flightless Birds (Palaeognathae) in the Presence of an Empirical Anomaly Zone
            url: https://doi.org/10.1093/sysbio/syz019
            accessedAt: 2026-10-03
            locator: "PMC6857515: sampling, selected marker extraction and species-tree methods, selected results, discussion paragraphs 100–109; not whole-paper review"
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
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
        - sourceKey: ncbi2019PalaeognathWgsReader
          referenceId: ref-6337e69a-f577-45e0-a7d8-aa22aed8fb47
          metadataVariant: 0
          usage:
            title: NCBI GenBank WGS master records for ten extant palaeognath genomes in BioProject PRJNA433110
            url: https://www.ncbi.nlm.nih.gov/bioproject/PRJNA433110
            accessedAt: 2026-10-03
            locator: "Ten GenBank WGS master records: specimen fields only; no raw sequence reanalysis"
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
          originalFields:
            - id
            - title
            - authors
            - url
            - sourceVersion
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

# Nothoprocta perdicaria
