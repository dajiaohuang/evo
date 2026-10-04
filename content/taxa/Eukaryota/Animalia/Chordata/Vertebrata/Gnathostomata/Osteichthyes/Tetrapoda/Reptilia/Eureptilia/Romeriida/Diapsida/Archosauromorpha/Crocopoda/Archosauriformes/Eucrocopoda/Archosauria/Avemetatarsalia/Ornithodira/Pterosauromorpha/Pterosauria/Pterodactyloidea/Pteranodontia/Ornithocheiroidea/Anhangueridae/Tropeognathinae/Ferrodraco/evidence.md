---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ferrodraco Pentland et al. 2019
    rank: genus
    taxonId: txn:399803
    sourceDatasetId: PBDB
    name:
      zh: Ferrodraco
      en: Ferrodraco
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pentlandFerrodraco2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
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
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:399803
            readingTargets:
              - name: Ferrodraco lentoni
                pbdbTaxonId: txn:399804
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Ferrodraco/Ferrodraco_lentoni
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=399803&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:399803; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:399803
    scientificName: Ferrodraco
    commonName: Ferrodraco
    commonNameZh: Ferrodraco
    rank: genus
    parentName: Tropeognathinae
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
      - id: overview-1
        title:
          en: Read Ferrodraco through its type species
          zh: 从模式种读 Ferrodraco
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pentlandFerrodraco2019
      - id: readingPath-2
        title:
          en: Compare preserved material before Haliskia estimates
          zh: 与 Haliskia 对读时先比较材料
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
      - id: pbdb-occurrence-3
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
      - id: pbdb-occurrence-4
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=399803&show=parent,app,attr
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
      - targetId: txn:399804
        label:
          zh: Ferrodraco lentoni
          en: Ferrodraco lentoni
        context:
          zh: 对读种、属页的保存材料、比较估计和分类用法。
          en: Compare preserved material, comparative estimates and taxonomic usage across species and genus pages.
      - targetId: txn:492614
        label:
          zh: Haliskia
          en: Haliskia
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
      - targetId: pterosauria
        label:
          zh: Pterosauria
          en: Pterosauria
        context:
          zh: 返回翼龙类的精选证据路径；保留各材料和模型的范围。
          en: Return to the selected pterosaur evidence route, retaining specimen and model scope.
      - targetId: txn:442519
        label:
          en: Tropeognathinae
          zh: Tropeognathinae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Ferrodraco
    commonName: Ferrodraco
    commonNameZh: Ferrodraco
    rank: genus
    taxonId: txn:399803
    firstAppearance: 100.5
    lastAppearance: 89.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - rangeKind: global-composite
      taxonomicConcept: Ferrodraco
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
          locator: data/sources/snapshots/pbdb-wing-reader-range-records-2026-10-02.json; response.records oid txn:399803; fea/fla/lea/lla fields
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
      entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Ferrodraco
---

# Ferrodraco
