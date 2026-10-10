---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Caiuajara
    rank: genus
    sourceDatasetId: null
    name:
      zh: Caiuajara
      en: Caiuajara
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - cruzeiro2019BonebedRoute
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - cruzeiro2019BonebedRoute
          - cruzeiro2020GrowthRoute
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
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
            title: PBDB classification — Caiuajara
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=302537
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
            pbdbTaxonId: txn:302537
            readingTargets:
              - name: Caiuajara dobruskii
                pbdbTaxonId: txn:302538
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tapejarinae/Caiuajara/Caiuajara_dobruskii
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=302537&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:302537; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-db8aa293-8718-4ac4-b577-8f59ba5ceee2
          metadataVariant: 0
          sourceKey: manzig2014CaiuajaraBonebed
          usage:
            title: Discovery of a Rare Pterosaur Bone Bed in a Cretaceous Desert with Insights on Ontogeny and Behavior of Flying Reptiles
            url: https://doi.org/10.1371/journal.pone.0100005
            accessedAt: 2026-10-03
            locator: Selected front metadata; complete Introduction, Materials and Methods, Results (including figure captions) and Discussion and Conclusions. Images, supplementary specimen lists, measurements and character matrices not inspected.
            scope:
              zh: 2014 年原始描述正文中的骨床、诊断、成长与行为推断；未独立检查标本或读齐补充数据。
              en: Main-text bonebed, diagnosis, growth and behavioral inferences in the 2014 original description; no independent specimen inspection or complete supplement reading.
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-6f9da32e-3ebe-41d8-b249-1136a2e5f60f
          metadataVariant: 0
          sourceKey: canejo2022CaiuajaraCranium
          usage:
            title: Novel information on the cranial anatomy of the tapejarine pterosaur Caiuajara dobruskii
            url: https://doi.org/10.1371/journal.pone.0277780
            accessedAt: 2026-10-03
            locator: Selected front metadata and abstract; complete Introduction, Material and methods, Emended diagnosis, Specimens and Conclusion; direct opening Discussion paragraphs and Morphological significance and considerations in Caiuajara dobruskii lower jaw. Full anatomical Description and other Discussion subsections not read.
            scope:
              zh: 2022 年头骨重描述选段，聚焦材料保存、下颌联合诊断与冠饰变异；完整解剖与全部讨论未读齐。
              en: Selected 2022 cranial revision passages on preservation, symphyseal diagnosis and crest variation; full anatomy and all discussion remain unread.
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-fcbdcf32-676e-4bb2-b398-06d345c3a2dd
          metadataVariant: 0
          sourceKey: cruzeiro2019BonebedRoute
          usage:
            title: A new toothless pterosaur (Pterodactyloidea) from Southern Brazil with insights into the paleoecology of a Cretaceous desert
            url: https://doi.org/10.1590/0001-3765201920190768
            accessedAt: 2026-10-03
            locator: Complete main body of official SciELO XML read in P5-90, especially Geological Setting, Description and Comparison, Osteohistology and Discussion; captions only, not figure pixels.
            scope:
              zh: 2019 年地层、描述、组织学与讨论的共同骨床、孤立材料鉴别和生态假说；图像与标本未独立检查。
              en: 2019 stratigraphy, description, histology and discussion of shared bonebeds, isolated-bone diagnosis and ecological hypotheses; no independent image or specimen inspection.
            readingTargets:
              - name: Caiuajara dobruskii
                pbdbTaxonId: txn:302538
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tapejarinae/Caiuajara/Caiuajara_dobruskii
              - name: Keresdrakon vilsoni
                pbdbTaxonId: txn:401469
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Tapejaromorpha/Keresdrakon/Keresdrakon_vilsoni
              - name: Vespersaurus paranaensis
                pbdbTaxonId: txn:388270
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Ceratosauria/Noasauridae/Noasaurinae/Vespersaurus/Vespersaurus_paranaensis
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
            - url
            - accessedAt
            - locator
            - scope
            - readingTargets
        - referenceId: ref-2a70092d-9336-4dd4-98f0-4309b9519aa3
          metadataVariant: 0
          sourceKey: cruzeiro2020GrowthRoute
          usage:
            title: "Osteohistology and growth dynamics of the Brazilian noasaurid Vespersaurus paranaensis Langer et al., 2019 (Theropoda: Abelisauroidea)"
            url: https://doi.org/10.7717/peerj.9771
            accessedAt: 2026-10-03
            locator: Complete main body of official Europe PMC PMC7500327 XML read in P5-91, especially Materials and Methods, Results and Discussion; no Morphobank slide inspection or independent age calculation.
            scope:
              zh: 2020 年五件股骨与六件胫骨研究的取样、成熟差异与年龄反推前提；不能移植为翼龙成长资料。
              en: 2020 sampling of five femora and six tibiae, maturity differences and age-retrocalculation assumptions; not transferable as pterosaur growth data.
            readingTargets:
              - name: Caiuajara dobruskii
                pbdbTaxonId: txn:302538
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tapejarinae/Caiuajara/Caiuajara_dobruskii
              - name: Keresdrakon vilsoni
                pbdbTaxonId: txn:401469
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Tapejaromorpha/Keresdrakon/Keresdrakon_vilsoni
              - name: Vespersaurus paranaensis
                pbdbTaxonId: txn:388270
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Ceratosauria/Noasauridae/Noasaurinae/Vespersaurus/Vespersaurus_paranaensis
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
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
    pbdbTaxonId: txn:302537
    scientificName: Caiuajara
    commonName: Caiuajara
    commonNameZh: Caiuajara
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
      - ref-db8aa293-8718-4ac4-b577-8f59ba5ceee2
      - ref-6f9da32e-3ebe-41d8-b249-1136a2e5f60f
      - ref-fcbdcf32-676e-4bb2-b398-06d345c3a2dd
      - ref-2a70092d-9336-4dd4-98f0-4309b9519aa3
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: cruzeiro-route-0
        title:
          zh: 从本属入口进入共同骨床的比较
          en: Enter shared-bonebed comparisons from this genus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - cruzeiro2019BonebedRoute
      - id: cruzeiro-route-1
        title:
          zh: 先对齐材料，再选成长或生态问题
          en: Align material before choosing growth or ecology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - cruzeiro2019BonebedRoute
          - cruzeiro2020GrowthRoute
      - id: caiuajara-bonebed-0
        title:
          zh: 从骨床读到成长与头骨变异
          en: Read from the bonebed to growth and cranial variation
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
      - id: caiuajara-bonebed-1
        title:
          zh: 数据库行与多标本样本分别计数
          en: Count database rows separately from multi-specimen samples
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=302537
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=302537&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: manzig2014CaiuajaraBonebed
        referenceId: ref-db8aa293-8718-4ac4-b577-8f59ba5ceee2
        title:
          zh: Discovery of a Rare Pterosaur Bone Bed in a Cretaceous Desert with Insights on Ontogeny and Behavior of Flying Reptiles
          en: Discovery of a Rare Pterosaur Bone Bed in a Cretaceous Desert with Insights on Ontogeny and Behavior of Flying Reptiles
        url: https://doi.org/10.1371/journal.pone.0100005
        scope:
          zh: 2014 年原始描述正文中的骨床、诊断、成长与行为推断；未独立检查标本或读齐补充数据。
          en: Main-text bonebed, diagnosis, growth and behavioral inferences in the 2014 original description; no independent specimen inspection or complete supplement reading.
      - id: canejo2022CaiuajaraCranium
        referenceId: ref-6f9da32e-3ebe-41d8-b249-1136a2e5f60f
        title:
          zh: Novel information on the cranial anatomy of the tapejarine pterosaur Caiuajara dobruskii
          en: Novel information on the cranial anatomy of the tapejarine pterosaur Caiuajara dobruskii
        url: https://doi.org/10.1371/journal.pone.0277780
        scope:
          zh: 2022 年头骨重描述选段，聚焦材料保存、下颌联合诊断与冠饰变异；完整解剖与全部讨论未读齐。
          en: Selected 2022 cranial revision passages on preservation, symphyseal diagnosis and crest variation; full anatomy and all discussion remain unread.
      - id: cruzeiro2019BonebedRoute
        referenceId: ref-fcbdcf32-676e-4bb2-b398-06d345c3a2dd
        title:
          zh: A new toothless pterosaur (Pterodactyloidea) from Southern Brazil with insights into the paleoecology of a Cretaceous desert
          en: A new toothless pterosaur (Pterodactyloidea) from Southern Brazil with insights into the paleoecology of a Cretaceous desert
        url: https://doi.org/10.1590/0001-3765201920190768
        scope:
          zh: 2019 年地层、描述、组织学与讨论的共同骨床、孤立材料鉴别和生态假说；图像与标本未独立检查。
          en: 2019 stratigraphy, description, histology and discussion of shared bonebeds, isolated-bone diagnosis and ecological hypotheses; no independent image or specimen inspection.
      - id: cruzeiro2020GrowthRoute
        referenceId: ref-2a70092d-9336-4dd4-98f0-4309b9519aa3
        title:
          zh: "Osteohistology and growth dynamics of the Brazilian noasaurid Vespersaurus paranaensis Langer et al., 2019 (Theropoda: Abelisauroidea)"
          en: "Osteohistology and growth dynamics of the Brazilian noasaurid Vespersaurus paranaensis Langer et al., 2019 (Theropoda: Abelisauroidea)"
        url: https://doi.org/10.7717/peerj.9771
        scope:
          zh: 2020 年五件股骨与六件胫骨研究的取样、成熟差异与年龄反推前提；不能移植为翼龙成长资料。
          en: 2020 sampling of five femora and six tibiae, maturity differences and age-retrocalculation assumptions; not transferable as pterosaur growth data.
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
      - targetId: txn:302538
        label:
          en: Caiuajara dobruskii
          zh: Caiuajara dobruskii
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:401469
        label:
          zh: Keresdrakon vilsoni
          en: Keresdrakon vilsoni
        context:
          zh: 对读共同骨床中的材料、成长证据与生态假说，保留每项来源的取样限制。
          en: Compare shared-bonebed material, growth evidence and ecological hypotheses while retaining each source’s sampling limits.
  atlas-node:
    name: Caiuajara
    commonName: Caiuajara
    commonNameZh: Caiuajara
    rank: genus
    taxonId: txn:302537
    firstAppearance: 121.4
    lastAppearance: 72.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:302537
      rangeKind: global-composite
      taxonomicConcept: Caiuajara
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 121.4
      youngerMa: 72.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 121.4–72.2 Ma and last-occurrence bracket 121.4–72.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:302537; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Caiuajara
