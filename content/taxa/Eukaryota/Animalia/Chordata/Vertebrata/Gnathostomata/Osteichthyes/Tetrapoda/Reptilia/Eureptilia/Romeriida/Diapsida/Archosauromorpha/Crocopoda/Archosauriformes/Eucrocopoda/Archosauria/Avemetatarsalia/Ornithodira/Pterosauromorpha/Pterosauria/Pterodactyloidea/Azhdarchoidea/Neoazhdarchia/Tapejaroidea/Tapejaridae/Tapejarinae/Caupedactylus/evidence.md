---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Caupedactylus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Caupedactylus
      en: Caupedactylus
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - chen2024PterosaurPalate
          - pinheiro2025AraripeCaupedactylus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - chen2024PterosaurPalate
          - pinheiro2025AraripeCaupedactylus
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
            title: PBDB classification — Caupedactylus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=278899
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
            pbdbTaxonId: txn:278899
            readingTargets:
              - name: Caupedactylus ybaka
                pbdbTaxonId: txn:278901
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tapejarinae/Caupedactylus/Caupedactylus_ybaka
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=278899&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:278899; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
          metadataVariant: 0
          sourceKey: chen2024PterosaurPalate
          usage:
            title: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
            url: https://doi.org/10.1038/s42003-024-06132-6
            accessedAt: 2026-10-03
            locator: All seven scientific main body sections, Table 1 and textual figure captions; no figure pixels, scans, supplementary models or independent specimen inspection.
            scope:
              zh: 腭部比较及 2025 年综述中本种标本、诊断、亲缘和食性解释；原始描述全文、图像与标本未独立复核。
              en: Palatal comparison and the 2025 review’s species material, diagnosis, relationships and dietary interpretation; original description in full, images and specimens not independently inspected.
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
        - referenceId: ref-2414cf1c-f954-4eae-a773-7e79283097e3
          metadataVariant: 0
          sourceKey: pinheiro2025AraripeCaupedactylus
          usage:
            title: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
            url: https://doi.org/10.1590/0001-3765202520250622
            accessedAt: 2026-10-03
            locator: Front metadata; complete Caupedactylus genus/species account including holotype, horizon, referrals, diagnosis and remarks; all paragraphs naming Caupedactylus including Aymberedactylus comparison, Tupuxuara deliradamus discussion and dietary synthesis. Rest of review not fully read.
            scope:
              zh: 腭部比较及 2025 年综述中本种标本、诊断、亲缘和食性解释；原始描述全文、图像与标本未独立复核。
              en: Palatal comparison and the 2025 review’s species material, diagnosis, relationships and dietary interpretation; original description in full, images and specimens not independently inspected.
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:278899
    scientificName: Caupedactylus
    commonName: Caupedactylus
    commonNameZh: Caupedactylus
    rank: genus
    parentName: Tapejarinae
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
      - ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
      - ref-2414cf1c-f954-4eae-a773-7e79283097e3
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: caupedactylus-reader-0
        title:
          zh: 从本属的模式种进入头骨比较
          en: Enter skull comparisons through the type species
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - chen2024PterosaurPalate
          - pinheiro2025AraripeCaupedactylus
      - id: caupedactylus-reader-1
        title:
          zh: 按材料、功能和层位分三步阅读
          en: Read material, function and horizon in three steps
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - chen2024PterosaurPalate
          - pinheiro2025AraripeCaupedactylus
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=278899
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=278899&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: chen2024PterosaurPalate
        referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
        title:
          zh: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
          en: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
        url: https://doi.org/10.1038/s42003-024-06132-6
        scope:
          zh: 腭部比较及 2025 年综述中本种标本、诊断、亲缘和食性解释；原始描述全文、图像与标本未独立复核。
          en: Palatal comparison and the 2025 review’s species material, diagnosis, relationships and dietary interpretation; original description in full, images and specimens not independently inspected.
      - id: pinheiro2025AraripeCaupedactylus
        referenceId: ref-2414cf1c-f954-4eae-a773-7e79283097e3
        title:
          zh: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
          en: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
        url: https://doi.org/10.1590/0001-3765202520250622
        scope:
          zh: 腭部比较及 2025 年综述中本种标本、诊断、亲缘和食性解释；原始描述全文、图像与标本未独立复核。
          en: Palatal comparison and the 2025 review’s species material, diagnosis, relationships and dietary interpretation; original description in full, images and specimens not independently inspected.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:163701
        label:
          en: Tapejarinae
          zh: Tapejarinae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:278901
        label:
          en: Caupedactylus ybaka
          zh: Caupedactylus ybaka
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Caupedactylus
    commonName: Caupedactylus
    commonNameZh: Caupedactylus
    rank: genus
    taxonId: txn:278899
    firstAppearance: 119.57
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:278899
      rangeKind: global-composite
      taxonomicConcept: Caupedactylus
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 119.57
      youngerMa: 113.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 119.57–113.2 Ma and last-occurrence bracket 119.57–113.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:278899; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Caupedactylus
