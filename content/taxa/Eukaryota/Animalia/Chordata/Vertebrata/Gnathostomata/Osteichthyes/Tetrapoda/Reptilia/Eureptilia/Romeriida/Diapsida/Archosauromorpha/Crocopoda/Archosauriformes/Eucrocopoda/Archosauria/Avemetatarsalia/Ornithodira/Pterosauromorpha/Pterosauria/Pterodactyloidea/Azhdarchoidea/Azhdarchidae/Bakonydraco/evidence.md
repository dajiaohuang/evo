---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bakonydraco
    rank: genus
    sourceDatasetId: null
    name:
      zh: Bakonydraco
      en: Bakonydraco
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: locality
        sourceIds:
          - osi2005BakonydracoDescription
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
            title: PBDB classification — Bakonydraco
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=156754
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
            pbdbTaxonId: txn:156754
            readingTargets:
              - name: Bakonydraco galaczi
                pbdbTaxonId: txn:156755
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Azhdarchidae/Bakonydraco/Bakonydraco_galaczi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=156754&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:156754; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-1f7dcbb6-a6fe-4ef0-8d99-e0ba15d9676e
          metadataVariant: 0
          sourceKey: osi2005BakonydracoDescription
          usage:
            title: First evidence of azhdarchid pterosaurs from the Late Cretaceous of Hungary
            url: https://app.pan.pl/article/item/app50-777.html
            accessedAt: 2026-10-03
            locator: Publisher PDF printed pp. 777–786, including extracted figure captions; images and specimens not inspected. References on p. 787 not comprehensively reviewed.
            scope:
              zh: 2005 年原始描述的产地、类型、下颌、分离骨骼、比较与食性讨论；正文第 777–786 页。
              en: Original-description locality, types, mandible, isolated bones, comparisons and feeding discussion, printed pp. 777–786.
          originalFields:
            - id
            - title
            - authors
            - publishedYear
            - journal
            - volume
            - issue
            - pages
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-4eafb087-8d7d-41f8-8587-d925264469b6
          metadataVariant: 0
          sourceKey: osi2011BakonydracoNewMaterial
          usage:
            title: New pterosaurian remains from the Late Cretaceous (Santonian) of Hungary (Iharkút, Csehbánya Formation)
            url: https://doi.org/10.1016/j.cretres.2011.01.011
            accessedAt: 2026-10-03
            locator: Repository author manuscript pp. 1–14; figures, final journal layout, raw observations and specimens not inspected.
            scope:
              zh: 2011 年作者稿的新增材料、标本号对应、上下颌比较、骨骼归属和讨论；稿件第 1–14 页。
              en: The 2011 manuscript on added material, specimen-number correspondences, jaw comparison, skeletal referrals and discussion, manuscript pp. 1–14.
          originalFields:
            - id
            - title
            - authors
            - publishedYear
            - journal
            - volume
            - issue
            - pages
            - doi
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
  atlas-profile:
    pbdbTaxonId: txn:156754
    scientificName: Bakonydraco
    commonName: Bakonydraco
    commonNameZh: Bakonydraco
    rank: genus
    parentName: Azhdarchidae
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
      - id: bakonydraco-reader-0
        title:
          zh: 从正模下颌读到新增上颌
          en: Read from the type mandible to the added upper jaw
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
      - id: bakonydraco-reader-1
        title:
          zh: 山名、类型产地与搬运后的化石
          en: The mountain name, type locality and transported fossils
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - osi2005BakonydracoDescription
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=156754
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=156754&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: osi2005BakonydracoDescription
        referenceId: ref-1f7dcbb6-a6fe-4ef0-8d99-e0ba15d9676e
        title:
          zh: First evidence of azhdarchid pterosaurs from the Late Cretaceous of Hungary
          en: First evidence of azhdarchid pterosaurs from the Late Cretaceous of Hungary
        url: https://app.pan.pl/article/item/app50-777.html
        scope:
          zh: 2005 年原始描述的产地、类型、下颌、分离骨骼、比较与食性讨论；正文第 777–786 页。
          en: Original-description locality, types, mandible, isolated bones, comparisons and feeding discussion, printed pp. 777–786.
      - id: osi2011BakonydracoNewMaterial
        referenceId: ref-4eafb087-8d7d-41f8-8587-d925264469b6
        title:
          zh: New pterosaurian remains from the Late Cretaceous (Santonian) of Hungary (Iharkút, Csehbánya Formation)
          en: New pterosaurian remains from the Late Cretaceous (Santonian) of Hungary (Iharkút, Csehbánya Formation)
        url: https://doi.org/10.1016/j.cretres.2011.01.011
        scope:
          zh: 2011 年作者稿的新增材料、标本号对应、上下颌比较、骨骼归属和讨论；稿件第 1–14 页。
          en: The 2011 manuscript on added material, specimen-number correspondences, jaw comparison, skeletal referrals and discussion, manuscript pp. 1–14.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:81005
        label:
          en: Azhdarchidae
          zh: Azhdarchidae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:156755
        label:
          en: Bakonydraco galaczi
          zh: Bakonydraco galaczi
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Bakonydraco
    commonName: Bakonydraco
    commonNameZh: Bakonydraco
    rank: genus
    taxonId: txn:156754
    firstAppearance: 85.7
    lastAppearance: 83.6
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:156754
      rangeKind: global-composite
      taxonomicConcept: Bakonydraco
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 85.7
      youngerMa: 83.6
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 85.7–83.6 Ma and last-occurrence bracket 85.7–83.6 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:156754; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Bakonydraco
