---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ctenochasmatidae
    rank: family
    sourceDatasetId: null
    name:
      zh: Ctenochasmatidae
      en: Ctenochasmatidae
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: cranialComparison
        sourceIds:
          - zhou2017LiaodactylusFilter
          - martill2023BalaenognathusFilter
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - zhou2017LiaodactylusFilter
          - martill2023BalaenognathusFilter
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: filterDiversity
        sourceIds:
          - martill2023BalaenognathusFilter
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - martill2023BalaenognathusFilter
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: readingPath
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Ctenochasmatidae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38484
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
            pbdbTaxonId: txn:38484
            readingTargets:
              - name: Forfexopterus jeholensis
                pbdbTaxonId: txn:384500
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Ctenochasmatoidea/Euctenochasmatia/Ctenochasmatidae/Forfexopterus/Forfexopterus_jeholensis
              - name: Cathayopterus grabaui
                pbdbTaxonId: txn:138760
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Ctenochasmatoidea/Euctenochasmatia/Ctenochasmatidae/Cathayopterus/Cathayopterus_grabaui
              - name: Liaodactylus primus
                pbdbTaxonId: txn:379281
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Ctenochasmatoidea/Euctenochasmatia/Ctenochasmatidae/Liaodactylus/Liaodactylus_primus
              - name: Pterofiltrus qiui
                pbdbTaxonId: txn:322722
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Ctenochasmatoidea/Euctenochasmatia/Ctenochasmatidae/Pterofiltrus/Pterofiltrus_qiui
              - name: Balaenognathus maeuseri
                pbdbTaxonId: txn:477223
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Ctenochasmatoidea/Euctenochasmatia/Ctenochasmatidae/Balaenognathus/Balaenognathus_maeuseri
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38484&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:38484; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-5004374f-cc2f-4a2c-8518-d78923255877
          metadataVariant: 0
          sourceKey: martill2023BalaenognathusFilter
          usage:
            title: A new pterodactyloid pterosaur with a unique filter-feeding apparatus from the Late Jurassic of Germany
            url: https://link.springer.com/article/10.1007/s12542-022-00644-4
            accessedAt: 2026-10-03
            locator: Selected HTML locality/geology/methods/taphonomy/systematics/diagnosis/skull/dentition/soft tissues/phylogeny/palaeoecology/conclusions; captions 7, 17, 21–24. No complete 42-page PDF, postcranial description or supplementary matrix review.
            scope:
              zh: 单件正模的发现、口部形态、过滤解释、保存与层位；三个上级页面为比较／阅读入口。
              en: Discovery, oral morphology, filtering interpretations, preservation and horizon of one holotype; three higher pages provide comparison/reading routes.
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
            - publishedAt
            - printPublicationMonth
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
        - referenceId: ref-c254ba9f-fd23-450c-8b02-7857e0961e41
          metadataVariant: 0
          sourceKey: zhou2017LiaodactylusFilter
          usage:
            title: Earliest filter-feeding pterosaur from the Jurassic of China and ecological evolution of Pterodactyloidea
            url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5367317/
            accessedAt: 2026-10-03
            locator: Main scientific HTML sections 1–4 plus abstract; captions 1–3. No figure-pixel, supplement, specimen or analysis rerun.
            scope:
              zh: 单件正模的头骨、齿列、地层与作者系统／取食形态分析；类群页面为材料比较入口。
              en: Skull, dentition, stratigraphy and authors’ phylogenetic/feeding-morphology analyses from one holotype; higher pages compare material.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - articleNumber
            - publishedYear
            - publishedAt
            - crossrefPublicationMonth
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
  atlas-profile:
    pbdbTaxonId: txn:38484
    scientificName: Ctenochasmatidae
    commonName: Ctenochasmatidae
    commonNameZh: Ctenochasmatidae
    rank: family
    parentName: Euctenochasmatia
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/4/text/en
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
      - id: pbdb-occurrence-1
        title:
          en: Organize fossil records by source classification
          zh: 按来源分类组织化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
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
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38484
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38484&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:164690
        label:
          en: Euctenochasmatia
          zh: Euctenochasmatia
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:384499
        label:
          en: Forfexopterus
          zh: Forfexopterus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:138744
        label:
          en: Cathayopterus
          zh: Cathayopterus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:379280
        label:
          en: Liaodactylus
          zh: Liaodactylus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:322721
        label:
          en: Pterofiltrus
          zh: Pterofiltrus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:477222
        label:
          en: Balaenognathus
          zh: Balaenognathus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:384500
        label:
          en: Forfexopterus jeholensis
          zh: Forfexopterus jeholensis
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:138760
        label:
          en: Cathayopterus grabaui
          zh: Cathayopterus grabaui
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:379281
        label:
          en: Liaodactylus primus
          zh: Liaodactylus primus
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Ctenochasmatidae
    commonName: Ctenochasmatidae
    commonNameZh: Ctenochasmatidae
    rank: family
    taxonId: txn:38484
    firstAppearance: 161.5
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:38484
      rangeKind: global-composite
      taxonomicConcept: Ctenochasmatidae
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 161.5
      youngerMa: 113.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 161.5–154.8 Ma and last-occurrence bracket 121.4–113.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:38484; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Ctenochasmatidae
