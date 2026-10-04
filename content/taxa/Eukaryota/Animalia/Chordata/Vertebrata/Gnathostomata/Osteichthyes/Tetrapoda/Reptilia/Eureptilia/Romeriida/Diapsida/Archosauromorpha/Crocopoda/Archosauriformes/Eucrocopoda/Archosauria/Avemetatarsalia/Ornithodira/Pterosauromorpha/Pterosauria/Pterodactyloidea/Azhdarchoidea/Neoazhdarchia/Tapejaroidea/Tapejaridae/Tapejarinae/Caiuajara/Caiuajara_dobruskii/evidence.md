---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Caiuajara dobruskii
    rank: species
    sourceDatasetId: null
    name:
      zh: Caiuajara dobruskii
      en: Caiuajara dobruskii
    reviewStatus: source-linked
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
      - topic: evidence
        sourceIds:
          - manzig2014CaiuajaraBonebed
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - manzig2014CaiuajaraBonebed
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: lifeHistory
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: morphology
        sourceIds:
          - manzig2014CaiuajaraBonebed
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: morphology
        sourceIds:
          - canejo2022CaiuajaraCranium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: phylogeny
        sourceIds:
          - manzig2014CaiuajaraBonebed
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: occurrences
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
      - topic: timeline
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
      - topic: evidence
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Caiuajara dobruskii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=302538&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:302538; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:302538
            selectedOccurrenceIds:
              - occ:1221869
            selectedCollectionIds:
              - col:160057
            sourceReferenceIds:
              - ref:52235
            originalIdentificationMappings:
              - occurrenceId: occ:1221869
                originalIdentifiedName: Caiuajara dobruskii n. gen. n. sp.
                acceptedName: Caiuajara dobruskii
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=302538&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:302538; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:302538
    scientificName: Caiuajara dobruskii
    commonName: Caiuajara dobruskii
    commonNameZh: Caiuajara dobruskii
    rank: species
    parentName: Caiuajara
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
          zh: 从多阶段骨床转向另一种翼龙
          en: Move from a growth-series bonebed to another pterosaur
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
          zh: 把形态成长与年龄反推分别比较
          en: Compare morphological development separately from retrocalculated ages
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
          zh: 一处骨床提供多个成长阶段
          en: A bonebed preserves several growth stages
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
          zh: 聚集记录包含多次埋藏与搬运
          en: The accumulation includes repeated burial and transport
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
      - id: caiuajara-bonebed-2
        title:
          zh: 无齿吻部与颅骨鉴别特征
          en: A toothless rostrum and diagnostic cranial features
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
      - id: caiuajara-bonebed-3
        title:
          zh: 冠饰随生长改变，仍有个体差异
          en: Crests change with growth and retain individual variation
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
      - id: caiuajara-bonebed-4
        title:
          zh: 身体比例与骨骼融合共同记录成长
          en: Body proportions and fusion record different aspects of growth
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
      - id: caiuajara-bonebed-5
        title:
          zh: 群居解释与死亡原因各有边界
          en: Social behavior and mortality retain different uncertainties
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
      - id: caiuajara-bonebed-6
        title:
          zh: 后续头骨研究补充下颌联合诊断
          en: Later cranial work adds a symphyseal diagnosis
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - canejo2022CaiuajaraCranium
      - id: caiuajara-bonebed-7
        title:
          zh: 亲缘位置取决于矩阵与取样
          en: Relationships depend on matrix and taxon sampling
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
        sourceIds:
          - manzig2014CaiuajaraBonebed
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
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
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
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
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
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
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - manzig2014CaiuajaraBonebed
          - canejo2022CaiuajaraCranium
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=302538&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=302538&show=parent,app,attr
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
      - targetId: txn:302537
        label:
          en: Caiuajara
          zh: Caiuajara
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:401469
        label:
          zh: Keresdrakon vilsoni
          en: Keresdrakon vilsoni
        context:
          zh: 对读共同骨床中的材料、成长证据与生态假说，保留每项来源的取样限制。
          en: Compare shared-bonebed material, growth evidence and ecological hypotheses while retaining each source’s sampling limits.
      - targetId: txn:388270
        label:
          zh: Vespersaurus paranaensis
          en: Vespersaurus paranaensis
        context:
          zh: 对读共同骨床中的材料、成长证据与生态假说，保留每项来源的取样限制。
          en: Compare shared-bonebed material, growth evidence and ecological hypotheses while retaining each source’s sampling limits.
  atlas-node:
    name: Caiuajara dobruskii
    commonName: Caiuajara dobruskii
    commonNameZh: Caiuajara dobruskii
    rank: species
    taxonId: txn:302538
    firstAppearance: 121.4
    lastAppearance: 72.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:302538
      rangeKind: global-composite
      taxonomicConcept: Caiuajara dobruskii
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
          locator: P5-42 accepted hierarchy oid txn:302538; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Caiuajara dobruskii
