---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Haliskia Pentland et al. 2024
    rank: genus
    taxonId: txn:492614
    sourceDatasetId: PBDB
    name:
      zh: Haliskia
      en: Haliskia
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
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
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:492614
            readingTargets:
              - name: Haliskia peterseni
                pbdbTaxonId: txn:492615
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Haliskia/Haliskia_peterseni
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=492614&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:492614; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:492614
    scientificName: Haliskia
    commonName: Haliskia
    commonNameZh: Haliskia
    rank: genus
    parentName: Anhangueridae
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
      - id: overview-1
        title:
          en: Read Haliskia through its type species
          zh: 以正模种认识 Haliskia
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: readingPath-2
        title:
          en: From preservation to functional inference
          zh: 从骨架保存读到功能推断
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=492614&show=parent,app,attr
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
      - targetId: txn:492615
        label:
          zh: Haliskia peterseni
          en: Haliskia peterseni
        context:
          zh: 对读种、属页的保存材料、比较估计和分类用法。
          en: Compare preserved material, comparative estimates and taxonomic usage across species and genus pages.
      - targetId: txn:399803
        label:
          zh: Ferrodraco
          en: Ferrodraco
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
  atlas-node:
    name: Haliskia
    commonName: Haliskia
    commonNameZh: Haliskia
    rank: genus
    taxonId: txn:492614
    firstAppearance: 106.3
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - rangeKind: global-composite
      taxonomicConcept: Haliskia
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
          locator: data/sources/snapshots/pbdb-wing-reader-range-records-2026-10-02.json; response.records oid txn:492614; fea/fla/lea/lla fields
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
      entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Haliskia
---

# Haliskia
