---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sinopterus dongi
    rank: species
    sourceDatasetId: null
    name:
      zh: Sinopterus dongi
      en: Sinopterus dongi
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: lifeHistory
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: methods
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: taxonomy
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - pegas2023SinopterusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: readingPath
        sourceIds:
          - pegas2023SinopterusRevision
          - naish2021SinopterusModelIdentification
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: occurrences
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
      - topic: timeline
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
      - topic: evidence
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Sinopterus dongi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=138765&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:138765; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:138765
            selectedOccurrenceIds:
              - occ:837506
              - occ:837511
            selectedCollectionIds:
              - col:92898
              - col:92652
            sourceReferenceIds:
              - ref:31347
              - ref:31355
            originalIdentificationMappings:
              - occurrenceId: occ:837506
                originalIdentifiedName: Sinopterus dongi n. gen. n. sp.
                acceptedName: Sinopterus dongi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=138765&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:138765; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-5d4a1ef9-93fe-475f-a41c-308ebbf8e424
          metadataVariant: 0
          sourceKey: pegas2023SinopterusRevision
          usage:
            title: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
            url: https://doi.org/10.7717/peerj.14829
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: front author group (five authors, editor excluded), date and CC BY 4.0; complete Introduction; Methods through Nomenclatural acts (phylogenetic nomenclature not read); full IVPP V 13363 and BPV-077 accounts; SMA, multivariate and Kruskal-Wallis results; full species-level interpretations with Tables 4–5, crest interpretation and taxonomy, Nemicolopterus comments, phylogenetic results, Systematic Paleontology and Conclusions. Other specimen accounts, detailed anatomical-variation discussion, Eopteranodon comments, figure pixels, supplementary datasets and independent reanalysis not read."
            scope:
              zh: 2023 年修订的正模、成长、形态组合、异名与幼体鉴定边界；固定目录身份单独保留。
              en: Holotypes, growth, anatomical combinations, synonymy and juvenile-identification limits in the 2023 revision; fixed catalogue identity remains separate.
            readingTargets:
              - name: Sinopterus dongi
                pbdbTaxonId: txn:138765
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Sinopterus/Sinopterus_dongi
              - name: Sinopterus gui
                pbdbTaxonId: txn:138766
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Sinopterus/Sinopterus_gui
              - name: Hamipterus tianshanensis
                pbdbTaxonId: txn:304280
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus/Hamipterus_tianshanensis
              - name: Pterodaustro guinazui
                pbdbTaxonId: txn:156857
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Pterodaustro/Pterodaustro_guinazui
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
        - referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
          metadataVariant: 0
          sourceKey: naish2021SinopterusModelIdentification
          usage:
            title: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
            url: https://doi.org/10.1038/s41598-021-92499-z
            accessedAt: 2026-10-03
            locator: Official primary XML all five scientific main sections read in P5-96; taxon sampling reread in P5-97. 2021 identification of IVPP V-14377 as hatchling Sinopterus dongi is interpreted alongside the 2023 revision, not adopted as uncontested identification.
            scope:
              zh: 2021 年将 IVPP V-14377 当作 S. dongi 幼体的建模前提；需与后续鉴定分歧对读。
              en: The 2021 modeling assumption identifying IVPP V-14377 as young S. dongi; compare with later identification differences.
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
    pbdbTaxonId: txn:138765
    scientificName: Sinopterus dongi
    commonName: Sinopterus dongi
    commonNameZh: Sinopterus dongi
    rank: species
    parentName: Sinopterus
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
      - ref-5d4a1ef9-93fe-475f-a41c-308ebbf8e424
      - ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: sinopterus-revision-reader-0
        title:
          zh: 从未成熟正模读身体与种名
          en: Read anatomy and names from an immature holotype
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-1
        title:
          zh: 诊断使用头骨、颈椎与肢骨组合
          en: Diagnosis combines skull, neck and limb features
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-2
        title:
          zh: 骨骼融合提供相对成长顺序
          en: Fusion supplies a relative developmental sequence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-3
        title:
          zh: 先排除成长信号，再比较形态群
          en: Separate growth signals before comparing morphotypes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-4
        title:
          zh: 两组形态支持作者的两种解释
          en: Two morphotypes support the authors’ two-species interpretation
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-5
        title:
          zh: 冠的有无、大小和形状回答不同问题
          en: Crest presence, size and shape answer different questions
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-6
        title:
          zh: 地层重叠尚不能确定同地点共栖
          en: Stratigraphic overlap does not establish shared localities
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - pegas2023SinopterusRevision
      - id: sinopterus-revision-reader-7
        title:
          zh: 幼体模型中的名称需要随研究年份阅读
          en: Read juvenile-model identities with their study date
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - pegas2023SinopterusRevision
          - naish2021SinopterusModelIdentification
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
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
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
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
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
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
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=138765&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=138765&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: pegas2023SinopterusRevision
        referenceId: ref-5d4a1ef9-93fe-475f-a41c-308ebbf8e424
        title:
          zh: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
          en: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
        url: https://doi.org/10.7717/peerj.14829
        scope:
          zh: 2023 年修订的正模、成长、形态组合、异名与幼体鉴定边界；固定目录身份单独保留。
          en: Holotypes, growth, anatomical combinations, synonymy and juvenile-identification limits in the 2023 revision; fixed catalogue identity remains separate.
      - id: naish2021SinopterusModelIdentification
        referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
        title:
          zh: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
          en: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
        url: https://doi.org/10.1038/s41598-021-92499-z
        scope:
          zh: 2021 年将 IVPP V-14377 当作 S. dongi 幼体的建模前提；需与后续鉴定分歧对读。
          en: The 2021 modeling assumption identifying IVPP V-14377 as young S. dongi; compare with later identification differences.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:138747
        label:
          en: Sinopterus
          zh: Sinopterus
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:138766
        label:
          en: Sinopterus gui
          zh: Sinopterus gui
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:156857
        label:
          zh: Pterodaustro guinazui
          en: Pterodaustro guinazui
        context:
          zh: 比较幼体鉴定与模型对象，保留各论文的种级范围。
          en: Compare juvenile identification and model subjects while retaining each study’s species scope.
  atlas-node:
    name: Sinopterus dongi
    commonName: Sinopterus dongi
    commonNameZh: Sinopterus dongi
    rank: species
    taxonId: txn:138765
    firstAppearance: 121.4
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:138765
      rangeKind: global-composite
      taxonomicConcept: Sinopterus dongi
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 121.4
      youngerMa: 113.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 121.4–113.2 Ma and last-occurrence bracket 121.4–113.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:138765; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Sinopterus dongi
