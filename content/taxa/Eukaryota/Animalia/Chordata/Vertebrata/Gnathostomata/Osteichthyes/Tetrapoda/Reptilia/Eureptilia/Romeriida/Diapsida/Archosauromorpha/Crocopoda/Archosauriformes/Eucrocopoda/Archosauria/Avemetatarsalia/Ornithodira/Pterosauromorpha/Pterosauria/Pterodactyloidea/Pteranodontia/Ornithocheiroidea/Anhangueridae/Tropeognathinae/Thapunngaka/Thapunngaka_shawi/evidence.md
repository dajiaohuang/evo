---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thapunngaka shawi Richards et al. 2021
    rank: species
    taxonId: txn:478714
    sourceDatasetId: PBDB
    name:
      zh: Thapunngaka shawi
      en: Thapunngaka shawi
    checkedAt: 2026-10-02
    sections:
      - topic: specimen
        sourceIds:
          - richardsThapunngaka2021
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: geology
        sourceIds:
          - richardsThapunngaka2021
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: size
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: referredMaterial
        sourceIds:
          - richardsThapunngakaSecond2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: referralDispute
        sourceIds:
          - richardsThapunngakaSecond2024
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: phylogeneticHypothesis
        sourceIds:
          - richardsThapunngakaSecond2024
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
        - referenceId: ref-55bd8e53-4910-4b08-8179-e7537a70f186
          metadataVariant: 0
          sourceKey: richardsThapunngaka2021
          usage:
            locator: "Author-uploaded article transcription: title page; Materials and methods; Systematic paleontology: Holotype, Locality and Horizon; Preservation; Figure 2 caption"
            accessedAt: 2026-10-02
            sourceRetrievalUrl: https://www.researchgate.net/publication/353778096_A_new_species_of_crested_pterosaur_Pterodactyloidea_Anhangueridae_from_the_Lower_Cretaceous_upper_Albian_of_Richmond_North_West_Queensland_Australia
            scope:
              zh: 简要正模、保存部位、收藏地点和层位事实；未视觉核对测量表。
              en: Brief holotype, preserved material, repository and horizon facts; measurement tables not visually inspected.
            licenseAssessment: Brief original factual paraphrases only. Copyrighted article text, PDF, figures and reconstructions are not redistributed.
            readerBoundaries:
              - Public author transcription, not a locally retrieved PDF.
              - No expanded measurement-table values.
              - No transfer of later specimen referrals without their full text.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - sourceRetrievalUrl
            - scope
            - licenseAssessment
            - readerBoundaries
        - referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
          metadataVariant: 0
          sourceKey: pentlandHaliskia2024
          usage:
            locator: "Discussion: Wingspan estimate, especially comparison and criticism of Thapunngaka shawi"
            accessedAt: 2026-10-02
            sourceFileSha256: 828bfcb25d12958fd1c8dffa7b3baf7bd54cdd0150d57dda1bd64c4567af357e
            scope:
              zh: 2024 年论文中关于 Thapunngaka 尺度估计的有日期批评；不裁决未读后续材料。
              en: Dated criticism of Thapunngaka size estimation in the 2024 article; does not adjudicate unread later material.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - sourceFileSha256
            - scope
        - referenceId: ref-2388c21a-6033-47f2-bbad-912eeb780ebf
          metadataVariant: 0
          sourceKey: richardsThapunngakaSecond2024
          usage:
            locator: "Pre-proof pp. 11–16: revised diagnosis, referred material and preservation; pp. 24–26: referral comparisons and phylogenetic analysis; PDF page 26 visually inspected"
            accessedAt: 2026-10-02
            sourceRetrievalUrl: https://dinodata.de/bibliothek/pdf_a/2023/1-s2.0-S0195667123002689-main.pdf
            sourceFileSha256: 3c1e81c75f8c30d255352e199a03878431b99f71ad6ea3cc4acac7c2252c64a4
            scope:
              zh: 第二件标本材料、作者归属依据及分析关系；归属争议保留。
              en: Second specimen, author referral argument and analysis relationships; referral dispute retained.
            sourceVersion: Journal pre-proof; selected relevant sections read, not a complete article review
            readerBoundaries:
              - No measurement-table values expanded.
              - No unqualified species traits transferred from contested referred material.
              - No tree reparenting from the study alone.
          originalFields:
            - id
            - title
            - url
            - doi
            - locator
            - accessedAt
            - sourceRetrievalUrl
            - sourceFileSha256
            - scope
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:478714; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:478714
            selectedOccurrenceIds:
              - occ:1638990
              - occ:1669831
            selectedCollectionIds:
              - col:232021
              - col:236854
            sourceReferenceIds:
              - ref:86018
              - ref:89725
            originalIdentificationMappings:
              - occurrenceId: occ:1669831
                originalIdentifiedName: Thapunngaka shawi n. gen. n. sp.
                acceptedName: Thapunngaka shawi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=478714&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:478714; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:478714
    scientificName: Thapunngaka shawi
    commonName: Thapunngaka shawi
    commonNameZh: Thapunngaka shawi
    rank: species
    parentName: Thapunngaka
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
      - ref-55bd8e53-4910-4b08-8179-e7537a70f186
      - ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
      - ref-2388c21a-6033-47f2-bbad-912eeb780ebf
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: specimen-1
        title:
          en: The holotype preserves part of a mandible
          zh: 正模保存的是部分下颌
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - richardsThapunngaka2021
      - id: geology-2
        title:
          en: Formation assignment and exact horizon
          zh: 地层范围与精确层位
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - richardsThapunngaka2021
      - id: size-3
        title:
          en: Why a large span is not a direct measurement
          zh: 为何不把巨大翼展当作直接测量
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: referredMaterial-4
        title:
          en: What the second specimen preserves
          zh: 第二件标本保存了什么
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - richardsThapunngakaSecond2024
      - id: referralDispute-5
        title:
          en: Referral evidence and the later objection
          zh: 归属依据与质疑分别是什么
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - richardsThapunngakaSecond2024
          - pentlandHaliskia2024
      - id: phylogeneticHypothesis-6
        title:
          en: Mythungini as a phylogenetic hypothesis
          zh: Mythungini 是分析提出的关系假说
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - richardsThapunngakaSecond2024
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
      - id: richardsThapunngaka2021
        referenceId: ref-55bd8e53-4910-4b08-8179-e7537a70f186
        title:
          en: A new species of crested pterosaur (Pterodactyloidea, Anhangueridae) from the Lower Cretaceous (upper Albian) of Richmond, North West Queensland, Australia
          zh: A new species of crested pterosaur (Pterodactyloidea, Anhangueridae) from the Lower Cretaceous (upper Albian) of Richmond, North West Queensland, Australia
        url: https://doi.org/10.1080/02724634.2021.1946068
        scope:
          zh: 简要正模、保存部位、收藏地点和层位事实；未视觉核对测量表。
          en: Brief holotype, preserved material, repository and horizon facts; measurement tables not visually inspected.
      - id: pentlandHaliskia2024
        referenceId: ref-675ecf6f-18f8-472d-bfa9-95c17e71b778
        title:
          en: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
          zh: Haliskia peterseni, a new anhanguerian pterosaur from the late Early Cretaceous of Australia
        url: https://doi.org/10.1038/s41598-024-60889-8
        scope:
          zh: 2024 年论文中关于 Thapunngaka 尺度估计的有日期批评；不裁决未读后续材料。
          en: Dated criticism of Thapunngaka size estimation in the 2024 article; does not adjudicate unread later material.
      - id: richardsThapunngakaSecond2024
        referenceId: ref-2388c21a-6033-47f2-bbad-912eeb780ebf
        title:
          en: A second specimen of the pterosaur Thapunngaka shawi from the Lower Cretaceous (upper Albian) Toolebuc Formation of North West Queensland, Australia
          zh: A second specimen of the pterosaur Thapunngaka shawi from the Lower Cretaceous (upper Albian) Toolebuc Formation of North West Queensland, Australia
        url: https://doi.org/10.1016/j.cretres.2023.105740
        scope:
          zh: 第二件标本材料、作者归属依据及分析关系；归属争议保留。
          en: Second specimen, author referral argument and analysis relationships; referral dispute retained.
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=478714&show=parent,app,attr
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
      - targetId: txn:478712
        label:
          zh: Thapunngaka
          en: Thapunngaka
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
      - targetId: txn:148341
        label:
          zh: Mythunga camara
          en: Mythunga camara
        context:
          zh: 比较正模、摘要支持的解释修订和未解析系统关系。
          en: Compare holotype evidence, abstract-supported reinterpretation and unresolved relationships.
  atlas-node:
    name: Thapunngaka shawi
    commonName: Thapunngaka shawi
    commonNameZh: Thapunngaka shawi
    rank: species
    taxonId: txn:478714
    firstAppearance: 113.2
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Thapunngaka/Thapunngaka_shawi
      rangeKind: global-composite
      taxonomicConcept: Thapunngaka shawi
      geographicScope: PBDB represented occurrence records; not a complete geographic range
      olderMa: 113.2
      youngerMa: 100.5
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence age bracket 113.2–100.5 Ma; last-occurrence bracket 106.3–100.5 Ma. Outer bounds are not precise origin, extinction or specimen dates.
      evidenceBasis: Database-derived outer occurrence-age bounds; original specimen-horizon uncertainty remains in reader prose.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-6d435a4c-8c9f-4e08-b9dc-6666ceefd781
          locator: data/sources/snapshots/pbdb-thapunngaka-reader-range-records-2026-10-02.json; response.records oid txn:478714; fea/fla/lea/lla
      evidenceLevel: database-derived
---

# Thapunngaka shawi
