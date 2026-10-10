---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Huaxiapterus benxiensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Huaxiapterus benxiensis
      en: Huaxiapterus benxiensis
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: materials
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: methods
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: lifeHistory
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: readingPath
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: occurrences
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: timeline
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
      - topic: evidence
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Huaxiapterus benxiensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=153804&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:153804; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:153804
            selectedOccurrenceIds:
              - occ:837538
            selectedCollectionIds:
              - col:92905
            sourceReferenceIds:
              - ref:30686
            originalIdentificationMappings:
              - occurrenceId: occ:837538
                originalIdentifiedName: Huaxiapterus benxiensis n. gen. n. sp.
                acceptedName: Huaxiapterus benxiensis
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=153804&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:153804; ancestry below the documented Pterosauria anchor.
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
          sourceKey: pegas2023HuaxiadracoMaterialRevision
          usage:
            title: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
            url: https://doi.org/10.7717/peerj.14829
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: metadata and source-bounded introduction/methods, statistical results, taxonomic/crest/Nemicolopterus/phylogenetic/systematic discussion and conclusions read in P5-98; entire ZMNH M813, BXGM V0011 and D2525 specimen accounts with textual captions read in P5-99. Other new specimen accounts and detailed anatomical-variation discussion remain unread; no figure pixels, specimens, supplemental measurements or matrix rerun."
            scope:
              zh: ZMNH M813、BXGM V0011 与 D2525 的保存、身体、相对成长及 2023 年归属；旧目录记录保留。
              en: Preservation, anatomy, relative growth and 2023 referral of ZMNH M813, BXGM V0011 and D2525; older catalogue records retained.
            readingTargets:
              - name: Huaxiapterus corollatus
                pbdbTaxonId: txn:153806
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Huaxiapterus/Huaxiapterus_corollatus
              - name: Huaxiapterus benxiensis
                pbdbTaxonId: txn:153804
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Huaxiapterus/Huaxiapterus_benxiensis
              - name: Sinopterus dongi
                pbdbTaxonId: txn:138765
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Sinopterus/Sinopterus_dongi
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
    pbdbTaxonId: txn:153804
    scientificName: Huaxiapterus benxiensis
    commonName: Huaxiapterus benxiensis
    commonNameZh: Huaxiapterus benxiensis
    rank: species
    parentName: Huaxiapterus
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
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: huaxiadraco-material-reader-0
        title:
          zh: BXGM V0011 在修订中成为归入材料
          en: BXGM V0011 becomes referred material in the revision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: huaxiadraco-material-reader-1
        title:
          zh: 身体近完整但躯干与肱骨细节受损
          en: A nearly complete body retains damaged trunk and humeral details
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: huaxiadraco-material-reader-2
        title:
          zh: 下折吻、鼻突与短翼骨支持比较
          en: Rostral deflection, nasal process and short wing elements support comparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: huaxiadraco-material-reader-3
        title:
          zh: 残缺肱骨重评改变原有比例
          en: Reassessment of an incomplete humerus changes the reported proportion
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: huaxiadraco-material-reader-4
        title:
          zh: 更多融合表示相对较成熟
          en: More extensive fusion indicates relative maturity
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: huaxiadraco-material-reader-5
        title:
          zh: 沿两件材料追到异名与保存问题
          en: Follow both specimens into synonymy and preservation
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - pegas2023HuaxiadracoMaterialRevision
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
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
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
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
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
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
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
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
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=153804&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=153804&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: pegas2023HuaxiadracoMaterialRevision
        referenceId: ref-5d4a1ef9-93fe-475f-a41c-308ebbf8e424
        title:
          zh: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
          en: A taxonomic revision of the Sinopterus complex (Pterosauria, Tapejaridae) from the Early Cretaceous Jehol Biota, with the new genus Huaxiadraco
        url: https://doi.org/10.7717/peerj.14829
        scope:
          zh: ZMNH M813、BXGM V0011 与 D2525 的保存、身体、相对成长及 2023 年归属；旧目录记录保留。
          en: Preservation, anatomy, relative growth and 2023 referral of ZMNH M813, BXGM V0011 and D2525; older catalogue records retained.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:138755
        label:
          en: Huaxiapterus
          zh: Huaxiapterus
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:153806
        label:
          en: Huaxiapterus corollatus
          zh: Huaxiapterus corollatus
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:153805
        label:
          en: Huaxiapterus jii
          zh: Huaxiapterus jii
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:138765
        label:
          zh: Sinopterus dongi
          en: Sinopterus dongi
        context:
          zh: 对读 2023 年身体比较和异名方案，保留固定目录身份。
          en: Compare anatomy and synonymy in the 2023 study while retaining fixed catalogue identities.
  atlas-node:
    name: Huaxiapterus benxiensis
    commonName: Huaxiapterus benxiensis
    commonNameZh: Huaxiapterus benxiensis
    rank: species
    taxonId: txn:153804
    firstAppearance: 121.4
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:153804
      rangeKind: global-composite
      taxonomicConcept: Huaxiapterus benxiensis
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
          locator: P5-42 accepted hierarchy oid txn:153804; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Huaxiapterus benxiensis
