---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ferrodraco lentoni Pentland et al. 2019
    rank: species
    taxonId: txn:399804
    sourceDatasetId: PBDB
    name:
      zh: Ferrodraco lentoni
      en: Ferrodraco lentoni
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: specimen
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: geology
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: anatomy
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: size
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: maturity
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: phylogeny
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
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
        - referenceId: ref-7a908c15-1b1b-4b67-97b8-c3a65f787e5a
          metadataVariant: 0
          sourceKey: pentlandFerrodraco2019
          usage:
            locator: "Systematic palaeontology: Etymology, Holotype, Type horizon and locality, Diagnosis; Description and Table 1; Phylogenetic results; Discussion; Methods"
            accessedAt: 2026-10-02
            sourceFileSha256: 585d537b9537d86e2b5a371b73986e4986bc8b06e1876acab880ace12a843b4a
            sourceFileBytes: 119673
            sourceRetrievalUrl: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6776501/fullTextXML
            scope:
              zh: AODF 876 描述、保存和成熟度判断、2019 年系统结果及年龄/尺度估计边界。
              en: AODF 876 description, preservation and maturity interpretation, 2019 phylogenetic results, and limits on age and size estimates.
            licenseAssessment: CC BY 4.0 article; original bilingual paraphrases; no images or skeletal reconstructions copied.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - sourceFileSha256
            - sourceFileBytes
            - sourceRetrievalUrl
            - scope
            - licenseAssessment
        - referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
          metadataVariant: 0
          sourceKey: pentlandHaliskia2024
          usage:
            locator: "Phylogenetic analysis and Discussion: Phylogenetic affinities; Wingspan estimate"
            accessedAt: 2026-10-02
            sourceFileSha256: 828bfcb25d12958fd1c8dffa7b3baf7bd54cdd0150d57dda1bd64c4567af357e
            scope:
              zh: 2024 年 Haliskia 描述中的 Ferrodraco 比较，保留各样本、性状矩阵和重建限制。
              en: Ferrodraco comparisons in the 2024 Haliskia description, retaining specimen, matrix and reconstruction limits.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - sourceFileSha256
            - scope
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:399804; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:399804
            selectedOccurrenceIds:
              - occ:1669830
            selectedCollectionIds:
              - col:236853
            sourceReferenceIds:
              - ref:71099
            originalIdentificationMappings:
              - occurrenceId: occ:1669830
                originalIdentifiedName: Ferrodraco lentoni n. gen. n. sp.
                acceptedName: Ferrodraco lentoni
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=399804&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:399804; ancestry below the documented Pterosauria anchor.
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:399804
    scientificName: Ferrodraco lentoni
    commonName: Ferrodraco lentoni
    commonNameZh: Ferrodraco lentoni
    rank: species
    parentName: Ferrodraco
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/0/text/en
    ecology:
      diet: Not assessed as a complete taxon diet; see specimen-level interpretations.
      habitat: Locality context is described in the reader sections.
      locomotion: Not independently assessed.
      bodySize: Specimen-based estimates are discussed where available.
      guild: Not assessed.
    traits: []
    traitsAssessmentStatus: not-assessed
    evidenceSummary:
      markdown: page.en.md
      field: /records/catalogue-profile/limitations/en
    confidence: low
    referenceIds:
      - ref-7a908c15-1b1b-4b67-97b8-c3a65f787e5a
      - ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: specimen-1
        title:
          en: "AODF 876: a partial skeleton in ironstone"
          zh: AODF 876：铁质岩中的部分骨架
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: geology-2
        title:
          en: The Winton horizon and a possible late survival
          zh: Winton 组层位与晚存续解释
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: anatomy-3
        title:
          en: Tooth-size combinations and incomplete crests
          zh: 牙齿大小组合与保存不全的冠
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: size-4
        title:
          en: The approximately four-metre span is estimated
          zh: 约四米翼展是比较估计
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: maturity-5
        title:
          en: Evidence for skeletal maturity
          zh: 骨骼成熟判断及其边界
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: phylogeny-6
        title:
          en: Two 2019 analyses and later catalogue names
          zh: 2019 年两套分析与后来的目录名
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
      - id: pbdb-occurrence-7
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
      - id: pbdb-occurrence-8
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
      - id: pbdb-occurrence-9
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
      - id: pbdb-occurrence-10
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
      - id: pbdb-occurrence-11
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
      - id: pentlandFerrodraco2019
        referenceId: ref-7a908c15-1b1b-4b67-97b8-c3a65f787e5a
        title:
          en: Ferrodraco lentoni gen. et sp. nov., a new ornithocheirid pterosaur from the Winton Formation (Cenomanian–lower Turonian) of Queensland, Australia
          zh: Ferrodraco lentoni gen. et sp. nov., a new ornithocheirid pterosaur from the Winton Formation (Cenomanian–lower Turonian) of Queensland, Australia
        url: https://doi.org/10.1038/s41598-019-49789-4
        scope:
          zh: AODF 876 描述、保存和成熟度判断、2019 年系统结果及年龄/尺度估计边界。
          en: AODF 876 description, preservation and maturity interpretation, 2019 phylogenetic results, and limits on age and size estimates.
      - id: pentlandHaliskia2024
        referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
        title:
          en: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
          zh: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
        url: https://doi.org/10.1038/s41598-024-60889-8
        scope:
          zh: 2024 年 Haliskia 描述中的 Ferrodraco 比较，保留各样本、性状矩阵和重建限制。
          en: Ferrodraco comparisons in the 2024 Haliskia description, retaining specimen, matrix and reconstruction limits.
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=399804&show=parent,app,attr
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
      - targetId: txn:399803
        label:
          zh: Ferrodraco
          en: Ferrodraco
        context:
          zh: 对读种、属页的保存材料、比较估计和分类用法。
          en: Compare preserved material, comparative estimates and taxonomic usage across species and genus pages.
      - targetId: txn:492615
        label:
          zh: Haliskia peterseni
          en: Haliskia peterseni
        context:
          zh: 对读种、属页的保存材料、比较估计和分类用法。
          en: Compare preserved material, comparative estimates and taxonomic usage across species and genus pages.
      - targetId: txn:95393
        label:
          zh: Anhangueridae
          en: Anhangueridae
        context:
          zh: 查看两个正模研究的科级比较入口；该页不是完整科级索引。
          en: Read the family comparison of two holotype studies; this is a selected route rather than a complete family index.
      - targetId: txn:478714
        label:
          zh: Thapunngaka shawi
          en: Thapunngaka shawi
        context:
          zh: 比较正模、第二件标本归属依据及其争议。
          en: Compare holotype evidence, second-specimen referral and its dispute.
      - targetId: txn:148341
        label:
          zh: Mythunga camara
          en: Mythunga camara
        context:
          zh: 比较正模、摘要支持的解释修订和未解析系统关系。
          en: Compare holotype evidence, abstract-supported reinterpretation and unresolved relationships.
  atlas-node:
    name: Ferrodraco lentoni
    commonName: Ferrodraco lentoni
    commonNameZh: Ferrodraco lentoni
    rank: species
    taxonId: txn:399804
    firstAppearance: 100.5
    lastAppearance: 89.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - rangeKind: global-composite
      taxonomicConcept: Ferrodraco lentoni
      geographicScope: PBDB represented occurrence records; not a complete geographic range
      olderMa: 100.5
      youngerMa: 89.8
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence age bracket 100.5–89.8 Ma; last-occurrence bracket 100.5–89.8 Ma. Display uses outer bounds, not direct specimen dates, origin or extinction estimates.
      evidenceBasis: Database-derived outer occurrence-age bounds from the dated raw PBDB response. Broad catalogue ages do not refine the original descriptions’ type-horizon uncertainty.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-e9f69786-79b3-4da7-bdaa-1244e580f3a5
          locator: data/sources/snapshots/pbdb-wing-reader-range-records-2026-10-02.json; response.records oid txn:399804; fea/fla/lea/lla fields
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
      entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Ferrodraco/Ferrodraco_lentoni
---

# Ferrodraco lentoni
