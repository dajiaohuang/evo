---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thalassodromeus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Thalassodromeus
      en: Thalassodromeus
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: datedClassification
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
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
            title: PBDB classification — Thalassodromeus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134889
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
            pbdbTaxonId: txn:134889
            readingTargets:
              - name: Thalassodromeus sethi
                pbdbTaxonId: txn:134890
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Thalassodromidae/Thalassodromeus/Thalassodromeus_sethi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134889&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:134889; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-b2435379-b763-40dc-b485-57d769ab5547
          metadataVariant: 0
          sourceKey: kellner2002ThalassodromeusDescription
          usage:
            title: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
            url: https://doi.org/10.1126/science.1073186
            accessedAt: 2026-10-03
            locator: Published PDF pp. 389–392, text and captions read via https://doc.rero.ch/record/14841/files/PAL_E1978.pdf/; images and supplements not inspected.
            scope:
              zh: 2002 年命名论文的正文第 389–392 页：类型、保存、头冠、取食假说与比较尺寸。
              en: "Original 2002 naming-paper text, pp. 389–392: type, preservation, crest, feeding hypothesis and comparative size."
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-fce98715-9b8f-4ece-ac6d-97bc2f960c4e
          metadataVariant: 0
          sourceKey: humphries2007SkimmingModels
          usage:
            title: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
            url: https://doi.org/10.1371/journal.pbio.0050204
            accessedAt: 2026-10-03
            locator: "Publisher XML: Introduction model material; Results drag and flight-cost estimates; Discussion Pterosaur Biomechanics and Anatomical Considerations; Materials and Methods physical models, immersion, dimensions and regression assumptions. Not an independent rerun or raw-data audit."
            scope:
              zh: 2007 年掠水模型论文中材料、阻力实验、能量估计、解剖比较与模型限制选段。
              en: Selected 2007 model-paper passages on material, drag trials, energy estimates, anatomy and modelling limitations.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-16d37c25-93a9-4635-9e7b-17e81a598ece
          metadataVariant: 0
          sourceKey: pegas2018ThalassodromeusRevision
          usage:
            title: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
            url: https://doi.org/10.1080/02724634.2018.1443273
            accessedAt: 2026-10-03
            locator: Published article text on the author ResearchGate page, systematic/type and skull pp. e1443273-2–5, crest discussion pp. 12–13, mandibular taxonomic discussion pp. 13–14 and conclusion p. 15. Not all osteology, images, supplemental matrices or subsequent revisions.
            scope:
              zh: 2018 年作者上传论文的类型与头骨选段、头冠功能讨论、颌骨归属与结论。
              en: Selected author-uploaded 2018 article passages on type and skull, crest functions, jaw referral and conclusions.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
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
    pbdbTaxonId: txn:134889
    scientificName: Thalassodromeus
    commonName: Thalassodromeus
    commonNameZh: Thalassodromeus
    rank: genus
    parentName: Thalassodromidae
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
      - id: thalassodromeus-reader-0
        title:
          zh: 头冠、取食与标本归属依次阅读
          en: Read crest, feeding and specimen referrals in sequence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-1
        title:
          zh: 地层名称与亲缘框架各有年代
          en: Stratigraphic names and relationships have dated frameworks
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=134889
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=134889&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: kellner2002ThalassodromeusDescription
        referenceId: ref-b2435379-b763-40dc-b485-57d769ab5547
        title:
          zh: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
          en: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
        url: https://doi.org/10.1126/science.1073186
        scope:
          zh: 2002 年命名论文的正文第 389–392 页：类型、保存、头冠、取食假说与比较尺寸。
          en: "Original 2002 naming-paper text, pp. 389–392: type, preservation, crest, feeding hypothesis and comparative size."
      - id: humphries2007SkimmingModels
        referenceId: ref-fce98715-9b8f-4ece-ac6d-97bc2f960c4e
        title:
          zh: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
          en: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
        url: https://doi.org/10.1371/journal.pbio.0050204
        scope:
          zh: 2007 年掠水模型论文中材料、阻力实验、能量估计、解剖比较与模型限制选段。
          en: Selected 2007 model-paper passages on material, drag trials, energy estimates, anatomy and modelling limitations.
      - id: pegas2018ThalassodromeusRevision
        referenceId: ref-16d37c25-93a9-4635-9e7b-17e81a598ece
        title:
          zh: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
          en: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
        url: https://doi.org/10.1080/02724634.2018.1443273
        scope:
          zh: 2018 年作者上传论文的类型与头骨选段、头冠功能讨论、颌骨归属与结论。
          en: Selected author-uploaded 2018 article passages on type and skull, crest functions, jaw referral and conclusions.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:164543
        label:
          en: Thalassodromidae
          zh: Thalassodromidae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:134890
        label:
          en: Thalassodromeus sethi
          zh: Thalassodromeus sethi
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
  atlas-node:
    name: Thalassodromeus
    commonName: Thalassodromeus
    commonNameZh: Thalassodromeus
    rank: genus
    taxonId: txn:134889
    firstAppearance: 119.57
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:134889
      rangeKind: global-composite
      taxonomicConcept: Thalassodromeus
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
          locator: P5-42 accepted hierarchy oid txn:134889; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Thalassodromeus
