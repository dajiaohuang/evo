---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptostomia
    rank: genus
    sourceDatasetId: null
    name:
      zh: Leptostomia
      en: Leptostomia
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - smith2021LeptostomiaDescription
          - smith2023LeptostomiaJawComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: localityScope
        sourceIds:
          - smith2021LeptostomiaDescription
          - smith2023LeptostomiaJawComparison
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
            title: PBDB classification — Leptostomia
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=426085
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
            pbdbTaxonId: txn:426085
            readingTargets:
              - name: Leptostomia begaaensis
                pbdbTaxonId: txn:426086
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Leptostomia/Leptostomia_begaaensis
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=426085&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:426085; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-a7108dda-2f32-4f7e-b5c4-fff696c9bd3f
          metadataVariant: 0
          sourceKey: smith2021LeptostomiaDescription
          usage:
            title: "A long-billed, possible probe-feeding pterosaur (Pterodactyloidea: ?Azhdarchoidea) from the mid-Cretaceous of Morocco, North Africa"
            url: https://doi.org/10.1016/j.cretres.2020.104643
            accessedAt: 2026-10-03
            locator: "Portsmouth repository author manuscript: pp. 1, 3–19, figure captions pp. 30–33, figures 2 and 7 (PDF pp. 37 and 42), table 1 (PDF p. 47). Not final journal pagination; other figures, supplemental matrices and raw XCT data not inspected."
            scope:
              zh: 原始描述作者稿的产地、材料、颌部、XCT 内部结构、亲缘和取食假说选段；核对图 2、7 与表 1。
              en: Selected original-description author-manuscript passages on locality, material, jaws, XCT structure, relationships and feeding hypotheses; figures 2 and 7 and table 1 inspected.
          originalFields:
            - id
            - doi
            - title
            - authors
            - volume
            - articleNumber
            - publishedAt
            - repositoryManuscriptTitle
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
          metadataVariant: 0
          sourceKey: smith2023LeptostomiaJawComparison
          usage:
            title: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
            url: https://doi.org/10.1007/s12542-022-00642-6
            accessedAt: 2026-10-03
            locator: Published PDF, printed pp. 539–540 and Leptostomia heading on p. 538; no figure-13 pixel inspection or specimen reidentification.
            scope:
              zh: 2023 年 Leptostomia 介绍与上下颌区分段落。
              en: The 2023 Leptostomia account and upper/lower-jaw distinction.
          originalFields:
            - id
            - title
            - doi
            - authors
            - publishedOnline
            - volume
            - pages
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
    pbdbTaxonId: txn:426085
    scientificName: Leptostomia
    commonName: Leptostomia
    commonNameZh: Leptostomia
    rank: genus
    parentName: Azhdarchoidea
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/2/text/en
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
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: leptostomia-reader-0
        title:
          zh: 从两段颌骨读到探食假说
          en: Read from two jaws to the probing hypothesis
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - smith2021LeptostomiaDescription
          - smith2023LeptostomiaJawComparison
      - id: leptostomia-reader-1
        title:
          zh: 产层、假说与数据库计数分别阅读
          en: Read horizons, hypotheses and database counts separately
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - smith2021LeptostomiaDescription
          - smith2023LeptostomiaJawComparison
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=426085
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=426085&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: smith2021LeptostomiaDescription
        referenceId: ref-a7108dda-2f32-4f7e-b5c4-fff696c9bd3f
        title:
          zh: "A long-billed, possible probe-feeding pterosaur (Pterodactyloidea: ?Azhdarchoidea) from the mid-Cretaceous of Morocco, North Africa"
          en: "A long-billed, possible probe-feeding pterosaur (Pterodactyloidea: ?Azhdarchoidea) from the mid-Cretaceous of Morocco, North Africa"
        url: https://doi.org/10.1016/j.cretres.2020.104643
        scope:
          zh: 原始描述作者稿的产地、材料、颌部、XCT 内部结构、亲缘和取食假说选段；核对图 2、7 与表 1。
          en: Selected original-description author-manuscript passages on locality, material, jaws, XCT structure, relationships and feeding hypotheses; figures 2 and 7 and table 1 inspected.
      - id: smith2023LeptostomiaJawComparison
        referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
        title:
          zh: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
          en: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
        url: https://doi.org/10.1007/s12542-022-00642-6
        scope:
          zh: 2023 年 Leptostomia 介绍与上下颌区分段落。
          en: The 2023 Leptostomia account and upper/lower-jaw distinction.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:96510
        label:
          en: Azhdarchoidea
          zh: Azhdarchoidea
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:426086
        label:
          en: Leptostomia begaaensis
          zh: Leptostomia begaaensis
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Leptostomia
    commonName: Leptostomia
    commonNameZh: Leptostomia
    rank: genus
    taxonId: txn:426085
    firstAppearance: 100.5
    lastAppearance: 93.9
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:426085
      rangeKind: global-composite
      taxonomicConcept: Leptostomia
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 100.5
      youngerMa: 93.9
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 100.5–93.9 Ma and last-occurrence bracket 100.5–93.9 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:426085; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Leptostomia
