---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Myophonus
    rank: genus
    sourceDatasetId: "2144"
    name:
      zh: Myophonus
      en: Myophonus
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: interpretation
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: overview
        sourceIds:
          - avonetEcologyOnlyV7
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
            title: Catalogue of Life COL26.8 — Myophonus
            url: https://www.checklistbank.org/dataset/316115/taxon/63CRL
            locator: Pinned name, rank and ancestor closure.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: AVONET1_BirdLife; the 3 selected measured records placed under Myophonus in pinned COL26.8.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            scope:
              zh: 仅概括本批已写入的历史数据记录，不推断完整后代覆盖。
              en: Only this batch’s authored historical records; no complete descendant coverage inferred.
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
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 1 authored same-name records placed under Myophonus by pinned COL ancestry.
            accessedAt: 2026-10-02
            scope:
              zh: 仅本批已写入资料条目的阅读路线，不代表完整后代覆盖。
              en: Route through this batch’s authored records only; no complete descendant coverage.
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
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
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
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetEcologyOnlyV7
          usage:
            locator: "AVONET1_BirdLife: 6 authored ecological records under recorded COL ancestry."
            readingTargets:
              - colId: 4555G
                name: Myophonus blighi
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Muscicapidae/Myophonus/Myophonus_blighi
              - colId: 4555H
                name: Myophonus borneensis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Muscicapidae/Myophonus/Myophonus_borneensis
              - colId: 4555K
                name: Myophonus castaneus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Muscicapidae/Myophonus/Myophonus_castaneus
              - colId: 4555L
                name: Myophonus glaucinus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Muscicapidae/Myophonus/Myophonus_glaucinus
              - colId: 4555N
                name: Myophonus insularis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Muscicapidae/Myophonus/Myophonus_insularis
            fieldAccountCounts:
              Habitat: 6
              Trophic.Niche: 6
              Primary.Lifestyle: 6
              Migration: 6
            withheldBiometricFields:
              - Beak.Length_Culmen
              - Beak.Length_Nares
              - Beak.Width
              - Beak.Depth
              - Tarsus.Length
              - Wing.Length
              - Kipps.Distance
              - Secondary1
              - Hand-Wing.Index
              - Tail.Length
              - Mass
            accessedAt: 2026-10-03
            scope:
              zh: 仅本批已写生态与地理条目；完整后代内容未完成。
              en: This batch’s ecology and geography records only; complete descendant content remains unfinished.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - readingTargets
            - fieldAccountCounts
            - withheldBiometricFields
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Myophonus
