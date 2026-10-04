---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dsungaripterus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Dsungaripterus
      en: Dsungaripterus
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - chen2020DsungaripterusPalate
          - chen2024DsungaripterusPalatalReconstruction
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - chen2020DsungaripterusPalate
          - chen2024DsungaripterusPalatalReconstruction
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Dsungaripterus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38481
            locator: Recorded PBDB parent closure beneath the already documented Pterosauria COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:38481
            readingTargets:
              - name: Dsungaripterus weii
                pbdbTaxonId: txn:100403
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Dsungaripteridae/Dsungaripterus/Dsungaripterus_weii
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurTaxonomy20261002
          usage:
            title: Recorded PBDB accepted identity and parent chain
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38481&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:38481; ancestry below the documented Pterosauria anchor.
            accessedAt: 2026-10-02
            scope:
              zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
              en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-a87279f9-199d-4e2d-b45c-7f6024b7b27c
          metadataVariant: 0
          sourceKey: chen2020DsungaripterusPalate
          usage:
            title: New anatomical information on Dsungaripterus weii Young, 1964 with focus on the palatal region
            url: https://doi.org/10.7717/peerj.8741
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: front authors, date and CC BY 4.0 link; all five scientific main sections Introduction, Materials and Methods, complete Results including Description and Table 1, Discussion and Conclusions; textual figure captions. Images, specimens and the cited 1964/1973 descriptions not independently inspected."
            scope:
              zh: 2020 年形态与取食假说、2024 年 CT 腭骨重建和解释修订；不替代原标本、扫描、完整成长或全部分布复核。
              en: 2020 anatomy and feeding hypotheses, with 2024 CT palatal reconstruction and reinterpretation; no independent specimen, scan, complete development or distribution review.
          originalFields:
            - id
            - title
            - authors
            - doi
            - publishedOnline
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
          metadataVariant: 0
          sourceKey: chen2024DsungaripterusPalatalReconstruction
          usage:
            title: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
            url: https://doi.org/10.1038/s42003-024-06132-6
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML already actually read in P5-93: all seven scientific main sections, Table 1 and textual figure captions, including complete methods, results and Dsungaripterus reconstruction. Raw scans, video, models and figure pixels not inspected."
            scope:
              zh: 2020 年形态与取食假说、2024 年 CT 腭骨重建和解释修订；不替代原标本、扫描、完整成长或全部分布复核。
              en: 2020 anatomy and feeding hypotheses, with 2024 CT palatal reconstruction and reinterpretation; no independent specimen, scan, complete development or distribution review.
            readingTargets:
              - name: Caupedactylus ybaka
                pbdbTaxonId: txn:278901
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tapejarinae/Caupedactylus/Caupedactylus_ybaka
          originalFields:
            - id
            - title
            - authors
            - doi
            - publishedOnline
            - url
            - accessedAt
            - locator
            - scope
            - readingTargets
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:38481
    scientificName: Dsungaripterus
    commonName: Dsungaripterus
    commonNameZh: Dsungaripterus
    rank: genus
    parentName: Dsungaripteridae
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/0/text/en
    ecology:
      diet: Not assessed from occurrence counts or depositional setting.
      habitat: Collection environments are not a species-wide habitat assessment.
      locomotion: Not independently assessed.
      bodySize: Not assessed from this occurrence batch.
      guild: Not assessed.
    traits: []
    traitsAssessmentStatus: not-assessed
    evidenceSummary:
      markdown: page.en.md
      field: /records/catalogue-profile/limitations/en
    confidence: low
    referenceIds:
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
      - ref-a87279f9-199d-4e2d-b45c-7f6024b7b27c
      - ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: dsungaripterus-reader-0
        title:
          zh: 从吻部、牙齿和腭部进入本属
          en: Enter through rostrum, teeth and palate
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - chen2020DsungaripterusPalate
          - chen2024DsungaripterusPalatalReconstruction
      - id: dsungaripterus-reader-1
        title:
          zh: 按标本、修订和功能阅读
          en: Read specimens, revisions and function in sequence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - chen2020DsungaripterusPalate
          - chen2024DsungaripterusPalatalReconstruction
      - id: pbdb-occurrence-1
        title:
          en: Organize fossil records by source classification
          zh: 按来源分类组织化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-2
        title:
          en: Compare collections, strata and age brackets
          zh: 从采集地、地层和年代对读
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38481
        scope:
          zh: 仅来源所述材料和数据库记录范围。
          en: Only material and database-record scope described by this source.
      - id: pbdbPterosaurOccurrences20261002
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/occs/list.json?base_id=38461&show=full&ident=latest&order=id&rowcount=yes&limit=all
        scope:
          zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
          en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
      - id: pbdbOccurrenceFields20261002
        referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
        title:
          en: Paleobiology Database Data Service 1.2 — occurrence field documentation
          zh: Paleobiology Database Data Service 1.2 — occurrence field documentation
        url: https://paleobiodb.org/data1.2/occs/list_doc.html
        scope:
          zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
          en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
      - id: pbdbPterosaurTaxonomy20261002
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38481&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: chen2020DsungaripterusPalate
        referenceId: ref-a87279f9-199d-4e2d-b45c-7f6024b7b27c
        title:
          zh: New anatomical information on Dsungaripterus weii Young, 1964 with focus on the palatal region
          en: New anatomical information on Dsungaripterus weii Young, 1964 with focus on the palatal region
        url: https://doi.org/10.7717/peerj.8741
        scope:
          zh: 2020 年形态与取食假说、2024 年 CT 腭骨重建和解释修订；不替代原标本、扫描、完整成长或全部分布复核。
          en: 2020 anatomy and feeding hypotheses, with 2024 CT palatal reconstruction and reinterpretation; no independent specimen, scan, complete development or distribution review.
      - id: chen2024DsungaripterusPalatalReconstruction
        referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
        title:
          zh: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
          en: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
        url: https://doi.org/10.1038/s42003-024-06132-6
        scope:
          zh: 2020 年形态与取食假说、2024 年 CT 腭骨重建和解释修订；不替代原标本、扫描、完整成长或全部分布复核。
          en: 2020 anatomy and feeding hypotheses, with 2024 CT palatal reconstruction and reinterpretation; no independent specimen, scan, complete development or distribution review.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:38480
        label:
          en: Dsungaripteridae
          zh: Dsungaripteridae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:100403
        label:
          en: Dsungaripterus weii
          zh: Dsungaripterus weii
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Dsungaripterus
    commonName: Dsungaripterus
    commonNameZh: Dsungaripterus
    rank: genus
    taxonId: txn:38481
    firstAppearance: 137.05
    lastAppearance: 121.4
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:38481
      rangeKind: global-composite
      taxonomicConcept: Dsungaripterus
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 137.05
      youngerMa: 121.4
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 137.05–132.6 Ma and last-occurrence bracket 137.05–121.4 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:38481; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Dsungaripterus
