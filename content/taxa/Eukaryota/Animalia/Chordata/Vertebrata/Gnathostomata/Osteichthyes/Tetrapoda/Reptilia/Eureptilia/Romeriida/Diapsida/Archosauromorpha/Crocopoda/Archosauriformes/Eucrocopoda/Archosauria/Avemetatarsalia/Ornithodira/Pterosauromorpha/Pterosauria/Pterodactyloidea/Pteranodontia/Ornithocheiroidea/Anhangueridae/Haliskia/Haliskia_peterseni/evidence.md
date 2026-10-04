---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Haliskia peterseni Pentland et al. 2024
    rank: species
    taxonId: txn:492615
    sourceDatasetId: PBDB
    name:
      zh: Haliskia peterseni
      en: Haliskia peterseni
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: specimen
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: geology
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: anatomy
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: size
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: phylogeny
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
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
        - referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
          metadataVariant: 0
          sourceKey: pentlandHaliskia2024
          usage:
            locator: "Systematic palaeontology; Geological setting; Hyoid apparatus; Table 1; Phylogenetic analysis/results; Discussion: Wingspan estimate and Feeding behaviour; Materials and methods"
            accessedAt: 2026-10-02
            sourceFileSha256: 828bfcb25d12958fd1c8dffa7b3baf7bd54cdd0150d57dda1bd64c4567af357e
            sourceFileBytes: 177973
            sourceRetrievalUrl: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11169243/fullTextXML
            scope:
              zh: KK F1426 描述与论文内比较、估计和假说；不扩展为种群或行为实测。
              en: KK F1426 description and the paper’s comparisons, estimates and hypotheses; not population or behavioral observations.
            licenseAssessment: CC BY 4.0 article; original bilingual paraphrases, no figures or third-party reconstructions copied.
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
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:492615; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:492615
            selectedOccurrenceIds:
              - occ:1658035
            selectedCollectionIds:
              - col:235290
            sourceReferenceIds:
              - ref:88687
            originalIdentificationMappings:
              - occurrenceId: occ:1658035
                originalIdentifiedName: Haliskia peterseni n. gen. n. sp.
                acceptedName: Haliskia peterseni
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=492615&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:492615; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:492615
    scientificName: Haliskia peterseni
    commonName: Haliskia peterseni
    commonNameZh: Haliskia peterseni
    rank: species
    parentName: Haliskia
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
      - ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: specimen-1
        title:
          en: A species anchored by a partial skeleton
          zh: 一件部分骨架固定的物种
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: geology-2
        title:
          en: The marine context of the Toolebuc Formation
          zh: Toolebuc 组的海相背景
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: anatomy-3
        title:
          en: Teeth, crests and elongated hyoid bones
          zh: 牙列、头冠和细长舌骨
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: size-4
        title:
          en: How the approximately 4.6 m wingspan was estimated
          zh: 约 4.6 米翼展如何得出
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: phylogeny-5
        title:
          en: Relationships depend on matrices and unstable taxa
          zh: 近缘关系受矩阵和不稳定分类单元影响
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: ecology-6
        title:
          en: Feeding hypotheses derived from anatomy
          zh: 从骨骼提出的摄食假说
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
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
      - id: pentlandHaliskia2024
        referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
        title:
          en: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
          zh: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
        url: https://doi.org/10.1038/s41598-024-60889-8
        scope:
          zh: KK F1426 描述与论文内比较、估计和假说；不扩展为种群或行为实测。
          en: KK F1426 description and the paper’s comparisons, estimates and hypotheses; not population or behavioral observations.
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=492615&show=parent,app,attr
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
      - targetId: txn:492614
        label:
          zh: Haliskia
          en: Haliskia
        context:
          zh: 对读种、属页的保存材料、比较估计和分类用法。
          en: Compare preserved material, comparative estimates and taxonomic usage across species and genus pages.
      - targetId: txn:399804
        label:
          zh: Ferrodraco lentoni
          en: Ferrodraco lentoni
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
    name: Haliskia peterseni
    commonName: Haliskia peterseni
    commonNameZh: Haliskia peterseni
    rank: species
    taxonId: txn:492615
    firstAppearance: 106.3
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - rangeKind: global-composite
      taxonomicConcept: Haliskia peterseni
      geographicScope: PBDB represented occurrence records; not a complete geographic range
      olderMa: 106.3
      youngerMa: 100.5
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence age bracket 106.3–100.5 Ma; last-occurrence bracket 106.3–100.5 Ma. Display uses outer bounds, not direct specimen dates, origin or extinction estimates.
      evidenceBasis: Database-derived outer occurrence-age bounds from the dated raw PBDB response. Broad catalogue ages do not refine the original descriptions’ type-horizon uncertainty.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-e9f69786-79b3-4da7-bdaa-1244e580f3a5
          locator: data/sources/snapshots/pbdb-wing-reader-range-records-2026-10-02.json; response.records oid txn:492615; fea/fla/lea/lla fields
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
      entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Haliskia/Haliskia_peterseni
---

# Haliskia peterseni
