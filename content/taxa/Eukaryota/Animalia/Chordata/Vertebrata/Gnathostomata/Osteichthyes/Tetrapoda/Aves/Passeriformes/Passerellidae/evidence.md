---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Passerellidae
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: Passerellidae
      en: Passerellidae
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetPeucaeaHistoricalV7
          - avonetV7
          - avonetEcologyOnlyV7
          - avonetAmmospizaOneToOneV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - avonetPeucaeaHistoricalV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: historicalComparison
        sourceIds:
          - avonetAmmospizaOneToOneV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - avonetAmmospizaOneToOneV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
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
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: interpretation
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Passerellidae
            url: https://www.checklistbank.org/dataset/316115/taxon/9G6YK
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
            locator: AVONET1_BirdLife; the 73 selected measured records placed under Passerellidae in pinned COL26.8.
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
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetEcologyOnlyV7
          usage:
            locator: "AVONET1_BirdLife: 5 authored ecological records under recorded COL ancestry."
            readingTargets:
              - colId: 5VT7T
                name: Arremonops tocuyensis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Passerellidae/Arremonops/Arremonops_tocuyensis
              - colId: JH63
                name: Atlapetes flaviceps
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Passerellidae/Atlapetes/Atlapetes_flaviceps
              - colId: JH64
                name: Atlapetes forbesi
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Passerellidae/Atlapetes/Atlapetes_forbesi
              - colId: JH6M
                name: Atlapetes rufigenis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Passerellidae/Atlapetes/Atlapetes_rufigenis
              - colId: 3QTCF
                name: Junco insularis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Passerellidae/Junco/Junco_insularis
            fieldAccountCounts:
              Habitat: 5
              Trophic.Niche: 5
              Primary.Lifestyle: 5
              Migration: 5
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
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetAmmospizaOneToOneV7
          usage:
            title: AVONET dataset version 7 — four Ammospiza historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: AVONET1_BirdLife rows6373–6376; Metadata definitions; BirdLife–eBird rows504–507; BirdLife–BirdTree rows507–510.
            scope:
              zh: 四个同名 BirdLife 2020／eBird 2021 数据行与原表旧属名一对一映射；不证明各年代分类概念完全相同。
              en: Four same-name BirdLife 2020/eBird 2021 rows and the workbook’s one-to-one older-genus crosswalk; not proof of identical concepts across dates.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - accessedAt
            - locator
            - scope
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetPeucaeaHistoricalV7
          usage:
            title: AVONET v7 — selected Peucaea historical records
            url: https://figshare.com/articles/dataset/16586228/7
            accessedAt: 2026-10-03
            locator: 8 selected AVONET1_BirdLife rows within 6481–6488; each eBird and BirdTree crosswalk, pe/ai COL name shards and relevant Metadata definitions retained in receipt.
            scope:
              zh: 八条历史行：旧 Aimophila 组合、形态样本、独立文献体重与生态类别分开。
              en: "Eight historical rows: retain older Aimophila combinations, morphology samples, separately compiled mass and ecological categories."
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
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

# Passerellidae
