---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Aves
    commonName: Birds
    commonNameZh: 鸟类
    rank: class
    taxonId: txn:36616
    firstAppearance: 150
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          pages: 6:e4191
          figure: Figures 1–5; Table 1
          quoteLocator: Geological setting; Systematic palaeontology; specimen and locality catalogue; phylogenetic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves
      rangeKind: global-composite
      taxonomicConcept: Aves avialan-to-living-bird navigation anthology
      geographicScope: Late Jurassic Bavarian lithographic limestones; living global continuation
      olderMa: 150
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          locator: Article e4191; Geological setting; Figures 1–5; Table 1
      evidenceLevel: literature-synthesized
  catalogue-profile:
    scientificName: Aves
    rank: class
    sourceDatasetId: "2144"
    name:
      zh: 鸟类
      en: Birds
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
      - topic: ecology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
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
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraitsSingleField2014
          - eltonTraitsMethods2014
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
            url: https://www.checklistbank.org/dataset/316115/taxon/V2
            locator: Pinned accepted Aves class and local accepted-species descendant closure.
          originalFields:
            - id
            - url
            - locator
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: Figshare v7; AVONET1_BirdLife selected 5,931 directly measured records; Metadata sheet; one-to-one BirdLife/eBird/BirdTree crosswalks.
            licenseAssessment: CC-BY-4.0-attributed-data-summary
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - licenseAssessment
        - referenceId: ref-43f38f21-86d6-45b9-a255-7b157984216b
          metadataVariant: 0
          sourceKey: avonetProtocol2022
          usage:
            locator: Measurement definitions, species averages and taxonomic harmonization protocol.
            licenseAssessment: paraphrase-only
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - licenseAssessment
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 2297 authored same-name records placed under Aves by pinned COL ancestry.
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
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: EltonTraits 1.0; 5515 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 5515
              foraging: 5515
              activity: 0
            readingTargets:
              - name: Struthio camelus
                colId: 6ZYDX
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Struthioniformes/Struthionidae/Struthio/Struthio_camelus
              - name: Rhea americana
                colId: 4S5KY
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Rheiformes/Rheidae/Rhea/Rhea_americana
              - name: Rhea pennata
                colId: 4S5KZ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Rheiformes/Rheidae/Rhea/Rhea_pennata
              - name: Casuarius casuarius
                colId: RQZ2
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Casuariiformes/Casuariidae/Casuarius/Casuarius_casuarius
              - name: Casuarius bennetti
                colId: RQYZ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Casuariiformes/Casuariidae/Casuarius/Casuarius_bennetti
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
            locator: EltonTraits 1.0; 979 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 461
              foraging: 518
              activity: 0
            readingTargets:
              - name: Crypturellus erythropus
                colId: 323MN
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Tinamiformes/Tinamidae/Crypturellus/Crypturellus_erythropus
              - name: Tinamotis ingoufi
                colId: 7CB6Z
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Tinamiformes/Tinamidae/Tinamotis/Tinamotis_ingoufi
              - name: Ortalis garrula
                colId: 6T9H3
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Galliformes/Cracidae/Penelopinae/Ortalis/Ortalis_garrula
              - name: Ortalis erythroptera
                colId: 759H2
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Galliformes/Cracidae/Penelopinae/Ortalis/Ortalis_erythroptera
              - name: Ortalis motmot
                colId: 6SXGT
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Galliformes/Cracidae/Penelopinae/Ortalis/Ortalis_motmot
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
            locator: "AVONET1_BirdLife: 525 authored ecological records under recorded COL ancestry."
            readingTargets:
              - colId: K35D
                name: Aviceda madagascariensis
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Accipitriformes/Accipitridae/Aviceda/Aviceda_madagascariensis
              - colId: 68TTX
                name: Buteo albigula
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Accipitriformes/Accipitridae/Buteo/Buteo_albigula
              - colId: VFS5
                name: Circaetus beaudouini
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Accipitriformes/Accipitridae/Circaetus/Circaetus_beaudouini
              - colId: CV7BM
                name: Henicopernis infuscatus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Accipitriformes/Accipitridae/Henicopernis/Henicopernis_infuscatus
              - colId: 47J2K
                name: Nisaetus bartelsi
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Accipitriformes/Accipitridae/Nisaetus/Nisaetus_bartelsi
            fieldAccountCounts:
              Habitat: 513
              Trophic.Niche: 520
              Primary.Lifestyle: 525
              Migration: 521
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

# Aves

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 150–0 Ma Aves route is an avialan-to-living-bird navigation anthology: referred Archaeopteryx material supplies a Late Jurassic fossil anchor, but Archaeopteryx is outside crown Neornithes and the endpoint is not crown-Aves origination.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The Painten specimen has explicit locality, horizon and anatomical locators. The atlas entity deliberately groups Archaeopteryx and Neornithes for browsing, so the range is labelled as an anthology rather than a single crown definition.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Painten 标本具有明确产地、层位与解剖定位；图谱实体为浏览而同时容纳 Archaeopteryx 与 Neornithes，因此范围明确标作证据选集，而非单一冠群定义。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
150–0 Ma 的鸟类路线是从鸟翼类化石到现生鸟的导航选集：归入 Archaeopteryx 的材料提供晚侏罗世锚点，但 Archaeopteryx 位于现生鸟冠群之外，该端点不是鸟冠群起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
150 Ma is a rounded referred-Archaeopteryx envelope; the route groups a stem avialan with crown birds and therefore is not a crown-Neornithes origin or FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Referred Archaeopteryx material provides the fossil anchor while living birds supply the present endpoint; the two are an explicit browse anthology.
<!-- /evo:text -->
