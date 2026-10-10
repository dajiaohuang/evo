---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bakonydraco galaczi
    rank: species
    sourceDatasetId: null
    name:
      zh: Bakonydraco galaczi
      en: Bakonydraco galaczi
    checkedAt: 2026-10-03
    sections:
      - topic: typeMaterial
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
      - topic: mandible
        sourceIds:
          - osi2005BakonydracoDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: newRostrum
        sourceIds:
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: jawFunction
        sourceIds:
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: skeletalReferral
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: sizeEstimate
        sourceIds:
          - osi2005BakonydracoDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: feedingHypotheses
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: occurrences
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: timeline
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: evidence
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
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Bakonydraco galaczi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=156755&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:156755; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:156755
            selectedOccurrenceIds:
              - occ:832347
            selectedCollectionIds:
              - col:48722
            sourceReferenceIds:
              - ref:31045
            originalIdentificationMappings:
              - occurrenceId: occ:832347
                originalIdentifiedName: Bakonydraco galaczi n. gen. n. sp.
                acceptedName: Bakonydraco galaczi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=156755&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:156755; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:156755
    scientificName: Bakonydraco galaczi
    commonName: Bakonydraco galaczi
    commonNameZh: Bakonydraco galaczi
    rank: species
    parentName: Bakonydraco
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/7/text/en
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
          zh: 正模下颌与后来更新的馆藏号
          en: The type mandible and its updated collection number
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
          zh: 约 29 厘米的下颌保留哪些形状
          en: What the approximately 29 cm mandible preserves
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - osi2005BakonydracoDescription
      - id: bakonydraco-reader-2
        title:
          zh: 2011 年补入的上颌吻部
          en: The upper-jaw rostrum added in 2011
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - osi2011BakonydracoNewMaterial
      - id: bakonydraco-reader-3
        title:
          zh: 骨质上下颌之间的空隙与未知的角质喙鞘
          en: Bony jaw gaps and the unknown keratinous covering
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - osi2011BakonydracoNewMaterial
      - id: bakonydraco-reader-4
        title:
          zh: 同地颈椎和翼骨保留未定种归属
          en: Local neck and wing bones retain indeterminate species referrals
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
      - id: bakonydraco-reader-5
        title:
          zh: 3.5–4 米翼展来自颌长比较
          en: The 3.5–4 m wingspan comes from jaw-length comparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - osi2005BakonydracoDescription
      - id: bakonydraco-reader-6
        title:
          zh: 鱼、果实与小动物都是讨论中的可能食物
          en: Fish, fruit and small animals remain possible foods
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
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
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
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
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
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
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - osi2005BakonydracoDescription
          - osi2011BakonydracoNewMaterial
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=156755&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=156755&show=parent,app,attr
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
      - targetId: txn:156754
        label:
          en: Bakonydraco
          zh: Bakonydraco
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Bakonydraco galaczi
    commonName: Bakonydraco galaczi
    commonNameZh: Bakonydraco galaczi
    rank: species
    taxonId: txn:156755
    firstAppearance: 85.7
    lastAppearance: 83.6
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:156755
      rangeKind: global-composite
      taxonomicConcept: Bakonydraco galaczi
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
          locator: P5-42 accepted hierarchy oid txn:156755; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Bakonydraco galaczi
