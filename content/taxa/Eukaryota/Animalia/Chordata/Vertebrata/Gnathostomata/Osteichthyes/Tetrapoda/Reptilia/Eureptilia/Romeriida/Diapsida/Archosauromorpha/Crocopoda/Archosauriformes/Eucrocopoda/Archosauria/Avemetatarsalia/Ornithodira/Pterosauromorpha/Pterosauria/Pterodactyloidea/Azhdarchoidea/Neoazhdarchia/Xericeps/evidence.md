---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Xericeps
    rank: genus
    sourceDatasetId: null
    name:
      zh: Xericeps
      en: Xericeps
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
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: evidenceScope
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
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
            title: PBDB classification — Xericeps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=363919
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
            pbdbTaxonId: txn:363919
            readingTargets:
              - name: Xericeps curvirostris
                pbdbTaxonId: txn:363920
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Xericeps/Xericeps_curvirostris
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=363919&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:363919; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-382287e7-a809-4c3b-89dc-2645cfc23105
          metadataVariant: 0
          sourceKey: martill2018XericepsJawDescription
          usage:
            title: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
            url: https://doi.org/10.1016/j.cretres.2017.09.006
            accessedAt: 2026-10-03
            locator: University of Portsmouth accepted author manuscript PDF, manuscript pp. 1, 3–8 and 13–18; journal version 84:1–12. Other comparisons, references, tables and figure pixels not fully inspected.
            scope:
              zh: 接受稿中正模颌部、保存、尺寸、分类与生态解释的选段导读。
              en: Selected accepted-manuscript passages on type jaw anatomy, preservation, dimensions, classification and ecological interpretation.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedOnline
            - publishedAt
            - volume
            - pages
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
          metadataVariant: 0
          sourceKey: ibrahim2020XericepsComparison
          usage:
            title: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
            url: https://doi.org/10.3897/zookeys.928.47517
            accessedAt: 2026-10-03
            locator: "Official XML PMC7188693: complete two-paragraph Xericeps account (body paragraph indices 364–365), with Alanqa reinterpretation context read in P5-118. No specimen or phylogenetic rerun."
            scope:
              zh: 2020 年 Xericeps 两段介绍及与 Alanqa 的未决异名比较。
              en: The two 2020 Xericeps account paragraphs and unresolved comparison with Alanqa.
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
    pbdbTaxonId: txn:363919
    scientificName: Xericeps
    commonName: Xericeps
    commonNameZh: Xericeps
    rank: genus
    parentName: Neoazhdarchia
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
          zh: 把新增下颌、产层分歧与亲缘假说分开
          en: Separate a new jaw referral, horizon disagreement and relationships
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - smith2023KemKemJawRevision
      - id: xericeps-material-reader-0
        title:
          zh: 从下颌正模到分类假说
          en: From a lower-jaw type to taxonomic hypotheses
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
      - id: xericeps-material-reader-1
        title:
          zh: 一段无齿颌部的证据范围
          en: The evidence supplied by one toothless jaw
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=363919
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=363919&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: martill2018XericepsJawDescription
        referenceId: ref-382287e7-a809-4c3b-89dc-2645cfc23105
        title:
          zh: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
          en: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
        url: https://doi.org/10.1016/j.cretres.2017.09.006
        scope:
          zh: 接受稿中正模颌部、保存、尺寸、分类与生态解释的选段导读。
          en: Selected accepted-manuscript passages on type jaw anatomy, preservation, dimensions, classification and ecological interpretation.
      - id: ibrahim2020XericepsComparison
        referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
        title:
          zh: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
          en: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
        url: https://doi.org/10.3897/zookeys.928.47517
        scope:
          zh: 2020 年 Xericeps 两段介绍及与 Alanqa 的未决异名比较。
          en: The two 2020 Xericeps account paragraphs and unresolved comparison with Alanqa.
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
      - targetId: txn:149369
        label:
          en: Neoazhdarchia
          zh: Neoazhdarchia
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:363920
        label:
          en: Xericeps curvirostris
          zh: Xericeps curvirostris
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Xericeps
    commonName: Xericeps
    commonNameZh: Xericeps
    rank: genus
    taxonId: txn:363919
    firstAppearance: 100.5
    lastAppearance: 93.9
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:363919
      rangeKind: global-composite
      taxonomicConcept: Xericeps
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
          locator: P5-42 accepted hierarchy oid txn:363919; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Xericeps
