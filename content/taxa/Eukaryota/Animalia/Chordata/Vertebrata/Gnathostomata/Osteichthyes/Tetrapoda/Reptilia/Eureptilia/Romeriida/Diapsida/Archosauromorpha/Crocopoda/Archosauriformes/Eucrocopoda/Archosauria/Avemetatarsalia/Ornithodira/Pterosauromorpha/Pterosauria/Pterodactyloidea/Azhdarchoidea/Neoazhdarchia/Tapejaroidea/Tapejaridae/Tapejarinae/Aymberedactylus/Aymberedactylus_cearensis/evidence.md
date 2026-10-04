---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aymberedactylus cearensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Aymberedactylus cearensis
      en: Aymberedactylus cearensis
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - pegas2016AymberedactylusDescription
          - pinheiro2025AymberedactylusReview
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: lifeHistory
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: phylogeny
        sourceIds:
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: readingPath
        sourceIds:
          - pinheiro2025AymberedactylusReview
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: timeline
        sourceIds:
          - pegas2016AymberedactylusDescription
          - pinheiro2025AymberedactylusReview
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: occurrences
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: timeline
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
      - topic: evidence
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - pegas2016AymberedactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Aymberedactylus cearensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=376125&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
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
            locator: 2026-10-02 occurrence response accepted_no txn:376125; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:376125
            selectedOccurrenceIds:
              - occ:1384099
            selectedCollectionIds:
              - col:77891
            sourceReferenceIds:
              - ref:63770
            originalIdentificationMappings:
              - occurrenceId: occ:1384099
                originalIdentifiedName: Aymberedactylus cearensis n. gen. n. sp.
                acceptedName: Aymberedactylus cearensis
                difference: null
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=376125&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:376125; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-080976af-cd77-4c50-8ea9-f59ace885e4f
          metadataVariant: 0
          sourceKey: pegas2016AymberedactylusDescription
          usage:
            title: A Basal Tapejarine (Pterosauria; Pterodactyloidea; Tapejaridae) from the Crato Formation, Early Cretaceous of Brazil
            url: https://doi.org/10.1371/journal.pone.0162692
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: front metadata and abstract; all five scientific main body sections (Introduction, Geological Setting, Materials and Methods, complete Results including Table 1 and Description and Comparisons, Discussion); textual figure captions. Supplementary matrix, figure pixels, physical specimen and later primary matrices not independently inspected."
            scope:
              zh: 原始下颌描述与功能、成长、亲缘假说；后续综述的本种条目，不替代标本或矩阵复核。
              en: Original mandibular description and functional, maturity and relationship hypotheses; later species account without independent specimen or matrix review.
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
          sourceKey: pinheiro2025AymberedactylusReview
          usage:
            title: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
            url: https://doi.org/10.1590/0001-3765202520250622
            accessedAt: 2026-10-03
            locator: "Official SciELO XML: complete Aymberedactylus genus/species account including holotype, horizon, no referrals, diagnosis, synonymy discussion and later Caupedactylia relationship; adjacent Caupedactylus account already read in P5-93. Rest of review not fully read."
            scope:
              zh: 原始下颌描述与功能、成长、亲缘假说；后续综述的本种条目，不替代标本或矩阵复核。
              en: Original mandibular description and functional, maturity and relationship hypotheses; later species account without independent specimen or matrix review.
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
    pbdbTaxonId: txn:376125
    scientificName: Aymberedactylus cearensis
    commonName: Aymberedactylus cearensis
    commonNameZh: Aymberedactylus cearensis
    rank: species
    parentName: Aymberedactylus
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
      - ref-080976af-cd77-4c50-8ea9-f59ace885e4f
      - ref-2414cf1c-f954-4eae-a773-7e79283097e3
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: aymberedactylus-reader-0
        title:
          zh: 近完整下颌是已知身体的起点
          en: A nearly complete mandible anchors the known anatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
          - pinheiro2025AymberedactylusReview
      - id: aymberedactylus-reader-1
        title:
          zh: 无齿、较宽而呈 Y 形的下颌
          en: A toothless, relatively broad Y-shaped mandible
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-2
        title:
          zh: 长关节后突与夹骨上的粗糙凹窝
          en: An elongated retroarticular process and a rugose splenial fossa
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-3
        title:
          zh: 浅冠与角质喙都有推断边界
          en: A shallow crest and horny covering have inferential limits
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-4
        title:
          zh: 骨缝支持亚成体，翼展来自比较
          en: Sutures support a subadult; wingspan comes from comparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-5
        title:
          zh: 开口控制与弱咬合是功能假说
          en: Jaw-opening control and weak biting are functional hypotheses
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-6
        title:
          zh: 原始位置对矩阵修改有依赖
          en: The original placement depends on matrix changes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-7
        title:
          zh: 与 Caupedactylus 对读后续分类
          en: Compare later classification with Caupedactylus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - pinheiro2025AymberedactylusReview
          - pegas2016AymberedactylusDescription
      - id: aymberedactylus-reader-8
        title:
          zh: 近采石场的来源与未给出的坐标
          en: Quarry-area provenance without precise coordinates
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - pegas2016AymberedactylusDescription
          - pinheiro2025AymberedactylusReview
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-2
        title:
          en: Begin with named collections and strata
          zh: 从具名采集地和地层开始
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-3
        title:
          en: Age bounds of these records
          zh: 这些记录的年代边界
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-4
        title:
          en: Read preservation setting separately from living habitat
          zh: 保存环境与生活环境分开阅读
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-5
        title:
          en: Follow collection records back to references
          zh: 沿采集记录追到文献
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - pegas2016AymberedactylusDescription
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=376125&show=parent,app,attr
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
          zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
          en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=376125&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: pegas2016AymberedactylusDescription
        referenceId: ref-080976af-cd77-4c50-8ea9-f59ace885e4f
        title:
          zh: A Basal Tapejarine (Pterosauria; Pterodactyloidea; Tapejaridae) from the Crato Formation, Early Cretaceous of Brazil
          en: A Basal Tapejarine (Pterosauria; Pterodactyloidea; Tapejaridae) from the Crato Formation, Early Cretaceous of Brazil
        url: https://doi.org/10.1371/journal.pone.0162692
        scope:
          zh: 原始下颌描述与功能、成长、亲缘假说；后续综述的本种条目，不替代标本或矩阵复核。
          en: Original mandibular description and functional, maturity and relationship hypotheses; later species account without independent specimen or matrix review.
      - id: pinheiro2025AymberedactylusReview
        referenceId: ref-2414cf1c-f954-4eae-a773-7e79283097e3
        title:
          zh: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
          en: "Cretaceous Pterosaurs of the Araripe Basin: A Comprehensive Taxonomic Update and Paleobiological Insights"
        url: https://doi.org/10.1590/0001-3765202520250622
        scope:
          zh: 原始下颌描述与功能、成长、亲缘假说；后续综述的本种条目，不替代标本或矩阵复核。
          en: Original mandibular description and functional, maturity and relationship hypotheses; later species account without independent specimen or matrix review.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:376124
        label:
          en: Aymberedactylus
          zh: Aymberedactylus
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Aymberedactylus cearensis
    commonName: Aymberedactylus cearensis
    commonNameZh: Aymberedactylus cearensis
    rank: species
    taxonId: txn:376125
    firstAppearance: 119.57
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:376125
      rangeKind: global-composite
      taxonomicConcept: Aymberedactylus cearensis
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
          locator: P5-42 accepted hierarchy oid txn:376125; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Aymberedactylus cearensis
