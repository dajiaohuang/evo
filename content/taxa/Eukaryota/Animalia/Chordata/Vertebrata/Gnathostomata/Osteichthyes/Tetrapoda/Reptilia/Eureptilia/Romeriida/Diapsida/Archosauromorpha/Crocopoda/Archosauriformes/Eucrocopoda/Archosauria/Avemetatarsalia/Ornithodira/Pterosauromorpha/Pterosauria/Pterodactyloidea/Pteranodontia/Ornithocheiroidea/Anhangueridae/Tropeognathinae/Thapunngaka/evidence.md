---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thapunngaka Richards et al. 2021
    rank: genus
    taxonId: txn:478712
    sourceDatasetId: PBDB
    name:
      zh: Thapunngaka
      en: Thapunngaka
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: readingPath
        sourceIds:
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: readingPath
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
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
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:478712
            readingTargets:
              - name: Thapunngaka shawi
                pbdbTaxonId: txn:478714
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Thapunngaka/Thapunngaka_shawi
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=478712&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:478712; ancestry below the documented Pterosauria anchor.
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
    pbdbTaxonId: txn:478712
    scientificName: Thapunngaka
    commonName: Thapunngaka
    commonNameZh: Thapunngaka
    rank: genus
    parentName: Tropeognathinae
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
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: readingPath-1
        title:
          en: From preservation to reconstruction disputes
          zh: 从保存材料读到重建争论
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - pentlandHaliskia2024
      - id: pbdb-occurrence-2
        title:
          en: Organize fossil records by source classification
          zh: 按来源分类组织化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-3
        title:
          en: Compare collections, strata and age brackets
          zh: 从采集地、地层和年代对读
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=478712&show=parent,app,attr
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
      - targetId: txn:478714
        label:
          zh: Thapunngaka shawi
          en: Thapunngaka shawi
        context:
          zh: 比较正模、第二件标本归属依据及其争议。
          en: Compare holotype evidence, second-specimen referral and its dispute.
      - targetId: txn:95393
        label:
          zh: Anhangueridae
          en: Anhangueridae
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: pterosauria
        label:
          zh: Pterosauria
          en: Pterosauria
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: txn:442519
        label:
          en: Tropeognathinae
          zh: Tropeognathinae
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Thapunngaka
    commonName: Thapunngaka
    commonNameZh: Thapunngaka
    rank: genus
    taxonId: txn:478712
    firstAppearance: 113.2
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Thapunngaka
      rangeKind: global-composite
      taxonomicConcept: Thapunngaka
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
          locator: data/sources/snapshots/pbdb-thapunngaka-reader-range-records-2026-10-02.json; response.records oid txn:478712; fea/fla/lea/lla
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Thapunngaka
