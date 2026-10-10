---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rhipiduridae
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: Rhipiduridae
      en: Rhipiduridae
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
          - eltonTraits2014
          - eltonTraitsMethods2014
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
          - eltonTraitsSingleField2014
          - eltonTraitsMethods2014
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
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: interpretation
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - avonetEcologyOnlyV7
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
            title: Catalogue of Life COL26.8 — Rhipiduridae
            url: https://www.checklistbank.org/dataset/316115/taxon/626VB
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
            locator: AVONET1_BirdLife; the 20 selected measured records placed under Rhipiduridae in pinned COL26.8.
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
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: EltonTraits 1.0; 35 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 35
              foraging: 35
              activity: 0
            readingTargets:
              - name: Rhipidura superciliaris
                colId: 794ZN
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_superciliaris
              - name: Rhipidura cyaniceps
                colId: 4SB9V
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_cyaniceps
              - name: Rhipidura phoenicura
                colId: 78SZM
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_phoenicura
              - name: Rhipidura nigrocinnamomea
                colId: 6X4ZJ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_nigrocinnamomea
              - name: Rhipidura albicollis
                colId: 4SB9L
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_albicollis
            scope:
              zh: 本批资料阅读路线，不是整个类群的生态总结。
              en: Route through this batch, not an ecological summary for the entire group.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - authoredFieldGroupCounts
            - readingTargets
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
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraitsSingleField2014
          usage:
            locator: EltonTraits 1.0; 6 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 6
              foraging: 0
              activity: 0
            readingTargets:
              - name: Rhipidura drownei
                colId: 4SB9Z
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_drownei
              - name: Rhipidura personata
                colId: 6WSZM
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_personata
              - name: Rhipidura dedemi
                colId: 4SB9X
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_dedemi
              - name: Rhipidura dahli
                colId: 4SB9W
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_dahli
              - name: Rhipidura matthiae
                colId: 78SZK
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_matthiae
            scope:
              zh: 本批资料阅读路线，不是整个类群的生态总结。
              en: Route through this batch, not an ecological summary for the entire group.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - authoredFieldGroupCounts
            - readingTargets
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
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetEcologyOnlyV7
          usage:
            locator: "AVONET1_BirdLife: 10 authored ecological records under recorded COL ancestry."
            readingTargets:
              - colId: 4SB9Y
                name: Rhipidura diluta
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_diluta
              - colId: 78SYC
                name: Rhipidura euryura
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_euryura
              - colId: 6WSYF
                name: Rhipidura fuscorufa
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_fuscorufa
              - colId: 6WSZH
                name: Rhipidura kubaryi
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_kubaryi
              - colId: 6X4ZH
                name: Rhipidura lepida
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Passeriformes/Rhipiduridae/Rhipidura/Rhipidura_lepida
            fieldAccountCounts:
              Habitat: 10
              Trophic.Niche: 10
              Primary.Lifestyle: 10
              Migration: 10
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

# Rhipiduridae
