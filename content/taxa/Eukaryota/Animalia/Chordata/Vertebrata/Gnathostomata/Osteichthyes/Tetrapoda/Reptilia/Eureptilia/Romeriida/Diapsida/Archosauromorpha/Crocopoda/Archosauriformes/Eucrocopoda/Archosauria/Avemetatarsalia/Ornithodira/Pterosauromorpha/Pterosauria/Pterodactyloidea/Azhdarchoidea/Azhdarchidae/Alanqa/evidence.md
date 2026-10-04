---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Alanqa
    rank: genus
    sourceDatasetId: null
    name:
      zh: Alanqa
      en: Alanqa
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - smith2023KemKemJawRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - ibrahim2010AlanqaTypeMaterial
          - ibrahim2020AlanqaRostrumRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: evidenceScope
        sourceIds:
          - ibrahim2010AlanqaTypeMaterial
          - ibrahim2020AlanqaRostrumRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: readingPath
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Alanqa
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=167134
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
            pbdbTaxonId: txn:167134
            readingTargets:
              - name: Alanqa saharica
                pbdbTaxonId: txn:167135
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Azhdarchidae/Alanqa/Alanqa_saharica
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=167134&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:167134; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-a3f9b631-da8b-4b37-908a-c1549719457c
          metadataVariant: 0
          sourceKey: ibrahim2010AlanqaTypeMaterial
          usage:
            title: "A New Pterosaur (Pterodactyloidea: Azhdarchidae) from the Upper Cretaceous of Morocco"
            url: https://doi.org/10.1371/journal.pone.0010875
            accessedAt: 2026-10-03
            locator: "Official fullTextXML PMC2877115: front citation, Methods, selected Results systematic/type/referred-material/description paragraphs and cervical material account. Discussion nomenclatural notice read; selected historical dimensions, not a full paper/figure audit."
            scope:
              zh: 2010 年正模、归入颌部材料、无齿形态与有条件的颈椎／尺寸解释。
              en: 2010 type and referred jaw material, toothless morphology and conditional cervical/dimension interpretations.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedOnline
            - journal
            - volume
            - issue
            - articleNumber
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
          metadataVariant: 0
          sourceKey: ibrahim2020AlanqaRostrumRevision
          usage:
            title: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
            url: https://doi.org/10.3897/zookeys.928.47517
            accessedAt: 2026-10-03
            locator: "Official fullTextXML PMC7188693: front citation; pterosaur overview concerning Alanqa, entire Alanqa account, associated Figure 98 textual caption and selected Xericeps comparison paragraph. Other 2020 groups, specimens and figures not audited."
            scope:
              zh: 2020 年正模改释为吻部、头后材料归属限制、比较分类与未决异名观点。
              en: 2020 reinterpretation of the type as a rostrum, postcranial attribution limits, comparative classification and unresolved synonymy.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedOnline
            - journal
            - volume
            - pages
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
          metadataVariant: 0
          sourceKey: smith2023KemKemJawRevision
          usage:
            title: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
            url: https://doi.org/10.1007/s12542-022-00642-6
            accessedAt: 2026-10-03
            locator: Published PDF, printed pp. 531–533, 540, selected jaw-comparison passages on p. 558 and classification discussion on p. 559; front matter and licence on p. 563. Not the whole article, figure pixels, supplements, specimens or a phylogenetic rerun.
            scope:
              zh: 2023 年 Alanqa 与 Xericeps 的颌部归属、材料修订及分类讨论选段。
              en: Selected 2023 passages on Alanqa and Xericeps jaw identity, referred material and classification.
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
    pbdbTaxonId: txn:167134
    scientificName: Alanqa
    commonName: Alanqa
    commonNameZh: Alanqa
    rank: genus
    parentName: Azhdarchidae
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/3/text/en
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
      - id: kemkem-revision-reader-0
        title:
          zh: 按年份对读正模与归入材料
          en: Read type interpretations and referrals by year
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - smith2023KemKemJawRevision
      - id: alanqa-material-reader-0
        title:
          zh: 从一个正模进入两种解剖解释
          en: Start with two interpretations of one type
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - ibrahim2010AlanqaTypeMaterial
          - ibrahim2020AlanqaRostrumRevision
      - id: alanqa-material-reader-1
        title:
          zh: 更多颌部材料仍不等于完整生物学
          en: Additional jaw material does not complete the biology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - ibrahim2010AlanqaTypeMaterial
          - ibrahim2020AlanqaRostrumRevision
      - id: pbdb-occurrence-1
        title:
          en: Organize fossil records by source classification
          zh: 按来源分类组织化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
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
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=167134
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=167134&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: ibrahim2010AlanqaTypeMaterial
        referenceId: ref-a3f9b631-da8b-4b37-908a-c1549719457c
        title:
          zh: "A New Pterosaur (Pterodactyloidea: Azhdarchidae) from the Upper Cretaceous of Morocco"
          en: "A New Pterosaur (Pterodactyloidea: Azhdarchidae) from the Upper Cretaceous of Morocco"
        url: https://doi.org/10.1371/journal.pone.0010875
        scope:
          zh: 2010 年正模、归入颌部材料、无齿形态与有条件的颈椎／尺寸解释。
          en: 2010 type and referred jaw material, toothless morphology and conditional cervical/dimension interpretations.
      - id: ibrahim2020AlanqaRostrumRevision
        referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
        title:
          zh: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
          en: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
        url: https://doi.org/10.3897/zookeys.928.47517
        scope:
          zh: 2020 年正模改释为吻部、头后材料归属限制、比较分类与未决异名观点。
          en: 2020 reinterpretation of the type as a rostrum, postcranial attribution limits, comparative classification and unresolved synonymy.
      - id: smith2023KemKemJawRevision
        referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
        title:
          zh: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
          en: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
        url: https://doi.org/10.1007/s12542-022-00642-6
        scope:
          zh: 2023 年 Alanqa 与 Xericeps 的颌部归属、材料修订及分类讨论选段。
          en: Selected 2023 passages on Alanqa and Xericeps jaw identity, referred material and classification.
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
      - targetId: txn:167135
        label:
          en: Alanqa saharica
          zh: Alanqa saharica
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Alanqa
    commonName: Alanqa
    commonNameZh: Alanqa
    rank: genus
    taxonId: txn:167134
    firstAppearance: 100.5
    lastAppearance: 93.9
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:167134
      rangeKind: global-composite
      taxonomicConcept: Alanqa
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
          locator: P5-42 accepted hierarchy oid txn:167134; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Alanqa
