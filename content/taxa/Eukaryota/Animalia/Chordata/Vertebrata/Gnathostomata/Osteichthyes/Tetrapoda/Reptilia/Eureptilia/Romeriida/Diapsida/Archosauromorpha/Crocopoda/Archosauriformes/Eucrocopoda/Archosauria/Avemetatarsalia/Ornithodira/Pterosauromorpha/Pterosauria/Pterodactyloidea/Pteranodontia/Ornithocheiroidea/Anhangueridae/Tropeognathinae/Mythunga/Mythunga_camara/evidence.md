---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mythunga camara Molnar and Thulborn 2007
    rank: species
    taxonId: txn:148341
    sourceDatasetId: PBDB
    name:
      zh: Mythunga camara
      en: Mythunga camara
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: specimen
        sourceIds:
          - molnarMythunga2007
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: preservation
        sourceIds:
          - molnarMythunga2007
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: reappraisal
        sourceIds:
          - pentlandMythunga2019
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: relationships
        sourceIds:
          - pentlandMythunga2019
          - richardsThapunngakaSecond2024
          - pentlandHaliskia2024
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
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: evidence
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-7415d1a7-3fde-444d-83f9-6c59549eb0e3
          metadataVariant: 0
          sourceKey: molnarMythunga2007
          usage:
            locator: "Printed pp. 461–462: introduction, holotype, locality and preservation; p. 467: internal structure; scanned PDF pp. 83–92, visual inspection pp. 83–84"
            accessedAt: 2026-10-02
            scope:
              zh: 简要正模、发现与产地事实、保存限制与内部结构；不扩写测量表。
              en: Brief holotype, discovery, locality, preservation limits and internal structure; measurement tables not expanded.
            sourceRetrievalUrl: https://upload.wikimedia.org/wikipedia/commons/b/b8/Archivos_do_Museu_Nacional_do_Rio_de_Janeiro_%28IA_archivosdomuseu65museb%29.pdf
            sourceFileSha256: 325b5e740a46414cb255b840ac015024b1444cee1b0ecbfa7570e055b7798304
            sourceVersion: Scanned original journal issue, 2007
            readerBoundaries:
              - Original taxonomic assessment is historical, not the current accepted placement.
              - No measurement-table values expanded.
              - No specimen diet or age certainty inferred.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceFileSha256
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-a55d008e-7ed3-4b9a-9073-a951342d43a1
          metadataVariant: 0
          sourceKey: pentlandMythunga2019
          usage:
            locator: "Public abstract: reinterpretation of anterior teeth and fenestra bone; phylogenetic analysis summary"
            accessedAt: 2026-10-02
            scope:
              zh: 仅摘要支持的解释修订与分析结果；完整重描述缺失。
              en: Abstract-supported revisions and analysis summary only; complete redescription missing.
            sourceRetrievalUrl: https://www.researchgate.net/publication/327820122_Reappraisal_of_Mythunga_camara_Molnar_Thulborn_2007_Pterosauria_Pterodactyloidea_Anhangueria_from_the_upper_Albian_Toolebuc_Formation_of_Queensland_Australia
            sourceReadMode: Public author-profile abstract; bibliographic metadata verified against Crossref
            readerBoundaries:
              - Full article not obtained or read.
              - No full revised diagnosis inferred from abstract.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceReadMode
            - readerBoundaries
        - referenceId: ref-2388c21a-6033-47f2-bbad-912eeb780ebf
          metadataVariant: 0
          sourceKey: richardsThapunngakaSecond2024
          usage:
            locator: "Accepted pre-proof pp. 25–26: phylogenetic analysis"
            accessedAt: 2026-10-02
            scope:
              zh: 该研究的 Mythungini 未解析三分支，不代表一致系统关系。
              en: The study’s unresolved Mythungini trichotomy, not an agreed phylogeny.
            sourceFileSha256: 3c1e81c75f8c30d255352e199a03878431b99f71ad6ea3cc4acac7c2252c64a4
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - scope
            - sourceFileSha256
        - referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
          metadataVariant: 0
          sourceKey: pentlandHaliskia2024
          usage:
            locator: "Results: Phylogenetic analysis, especially unstable taxa excluded a posteriori from one dataset"
            accessedAt: 2026-10-02
            scope:
              zh: 一套分析中的不稳定单元与分析后排除，保留矩阵范围。
              en: Unstable taxa and a posteriori exclusion in one analysis; matrix scope retained.
            sourceFileSha256: 828bfcb25d12958fd1c8dffa7b3baf7bd54cdd0150d57dda1bd64c4567af357e
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - scope
            - sourceFileSha256
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:148341; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:148341
            selectedOccurrenceIds:
              - occ:818232
            selectedCollectionIds:
              - col:89950
            sourceReferenceIds:
              - ref:30122
            originalIdentificationMappings:
              - occurrenceId: occ:818232
                originalIdentifiedName: Mythunga camara n. gen. n. sp.
                acceptedName: Mythunga camara
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=148341&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:148341; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:148341
    scientificName: Mythunga camara
    commonName: Mythunga camara
    commonNameZh: Mythunga camara
    rank: species
    parentName: Mythunga
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/0/text/en
    ecology:
      diet: Not assessed as a complete taxon diet.
      habitat: Locality evidence is described in reader sections.
      locomotion: Not independently assessed.
      bodySize: Size estimates and their limitations are discussed in reader sections.
      guild: Not assessed.
    traits: []
    traitsAssessmentStatus: not-assessed
    evidenceSummary:
      markdown: page.en.md
      field: /records/catalogue-profile/limitations/en
    confidence: low
    referenceIds:
      - ref-7415d1a7-3fde-444d-83f9-6c59549eb0e3
      - ref-a55d008e-7ed3-4b9a-9073-a951342d43a1
      - ref-2388c21a-6033-47f2-bbad-912eeb780ebf
      - ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: specimen-1
        title:
          en: Start with the holotype and locality
          zh: 从正模与产地开始
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - molnarMythunga2007
      - id: preservation-2
        title:
          en: Internal chambers do not supply a complete head
          zh: 空腔结构不等于完整头部
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - molnarMythunga2007
      - id: reappraisal-3
        title:
          en: The preserved anterior teeth were reinterpreted
          zh: 前部牙齿的解释后来改变
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pentlandMythunga2019
      - id: relationships-4
        title:
          en: Relationships depend on material and matrices
          zh: 关系假说随材料与矩阵变化
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pentlandMythunga2019
          - richardsThapunngakaSecond2024
          - pentlandHaliskia2024
      - id: pbdb-occurrence-5
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
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
      - id: pbdb-occurrence-6
        title:
          en: Begin with named collections and strata
          zh: 从具名采集地和地层开始
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
      - id: pbdb-occurrence-7
        title:
          en: Age bounds of these records
          zh: 这些记录的年代边界
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-8
        title:
          en: Read preservation setting separately from living habitat
          zh: 保存环境与生活环境分开阅读
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
          en: Follow collection records back to references
          zh: 沿采集记录追到文献
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
    readerSources:
      - id: molnarMythunga2007
        referenceId: ref-7415d1a7-3fde-444d-83f9-6c59549eb0e3
        title:
          en: An incomplete pterosaur skull from the Cretaceous of North-Central Queensland, Australia
          zh: An incomplete pterosaur skull from the Cretaceous of North-Central Queensland, Australia
        url: https://upload.wikimedia.org/wikipedia/commons/b/b8/Archivos_do_Museu_Nacional_do_Rio_de_Janeiro_%28IA_archivosdomuseu65museb%29.pdf
        scope:
          zh: 简要正模、发现与产地事实、保存限制与内部结构；不扩写测量表。
          en: Brief holotype, discovery, locality, preservation limits and internal structure; measurement tables not expanded.
      - id: pentlandMythunga2019
        referenceId: ref-a55d008e-7ed3-4b9a-9073-a951342d43a1
        title:
          en: Reappraisal of Mythunga camara Molnar & Thulborn, 2007 (Pterosauria, Pterodactyloidea, Anhangueria) from the upper Albian Toolebuc Formation of Queensland, Australia
          zh: Reappraisal of Mythunga camara Molnar & Thulborn, 2007 (Pterosauria, Pterodactyloidea, Anhangueria) from the upper Albian Toolebuc Formation of Queensland, Australia
        url: https://doi.org/10.1016/j.cretres.2018.09.011
        scope:
          zh: 仅摘要支持的解释修订与分析结果；完整重描述缺失。
          en: Abstract-supported revisions and analysis summary only; complete redescription missing.
      - id: richardsThapunngakaSecond2024
        referenceId: ref-2388c21a-6033-47f2-bbad-912eeb780ebf
        title:
          en: A second specimen of the pterosaur Thapunngaka shawi from the Lower Cretaceous (upper Albian) Toolebuc Formation of North West Queensland, Australia
          zh: A second specimen of the pterosaur Thapunngaka shawi from the Lower Cretaceous (upper Albian) Toolebuc Formation of North West Queensland, Australia
        url: https://doi.org/10.1016/j.cretres.2023.105740
        scope:
          zh: 该研究的 Mythungini 未解析三分支，不代表一致系统关系。
          en: The study’s unresolved Mythungini trichotomy, not an agreed phylogeny.
      - id: pentlandHaliskia2024
        referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
        title:
          en: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
          zh: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
        url: https://doi.org/10.1038/s41598-024-60889-8
        scope:
          zh: 一套分析中的不稳定单元与分析后排除，保留矩阵范围。
          en: Unstable taxa and a posteriori exclusion in one analysis; matrix scope retained.
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=148341&show=parent,app,attr
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
      - targetId: txn:148340
        label:
          zh: Mythunga
          en: Mythunga
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: txn:492615
        label:
          zh: Haliskia peterseni
          en: Haliskia peterseni
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: txn:399804
        label:
          zh: Ferrodraco lentoni
          en: Ferrodraco lentoni
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: txn:95393
        label:
          zh: Anhangueridae
          en: Anhangueridae
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
  atlas-node:
    name: Mythunga camara
    commonName: Mythunga camara
    commonNameZh: Mythunga camara
    rank: species
    taxonId: txn:148341
    firstAppearance: 106.3
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Mythunga/Mythunga_camara
      rangeKind: global-composite
      taxonomicConcept: Mythunga camara
      geographicScope: PBDB represented occurrence records; not a complete geographic range
      olderMa: 106.3
      youngerMa: 100.5
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence age bracket 106.3–100.5 Ma; last-occurrence bracket 106.3–100.5 Ma. Outer bounds are not precise origin, extinction or specimen dates.
      evidenceBasis: Database-derived outer occurrence-age bounds; original specimen-horizon uncertainty remains in reader prose.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-e25c3893-3cea-4dc2-99c5-60cc31c9dc40
          locator: data/sources/snapshots/pbdb-mythunga-reader-range-records-2026-10-02.json; response.records oid txn:148341; fea/fla/lea/lla
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Mythunga camara
