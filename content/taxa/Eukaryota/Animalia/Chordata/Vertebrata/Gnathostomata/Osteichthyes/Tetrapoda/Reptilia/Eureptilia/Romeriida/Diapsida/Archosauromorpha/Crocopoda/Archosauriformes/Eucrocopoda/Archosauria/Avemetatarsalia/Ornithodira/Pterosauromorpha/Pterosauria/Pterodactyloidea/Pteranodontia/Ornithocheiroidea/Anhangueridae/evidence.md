---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anhangueridae (Campos and Kellner 1985)
    rank: family
    taxonId: txn:95393
    sourceDatasetId: PBDB
    name:
      zh: Anhangueridae
      en: Anhangueridae
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - kellner2013AnhangueridMaterialRoute
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: evidence
        sourceIds:
          - kellner2013AnhangueridMaterialRoute
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: taxonomy
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - pentlandFerrodraco2019
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
            pbdbTaxonId: txn:95393
            readingTargets:
              - name: Haliskia peterseni
                pbdbTaxonId: txn:492615
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Haliskia/Haliskia_peterseni
              - name: Thapunngaka shawi
                pbdbTaxonId: txn:478714
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Thapunngaka/Thapunngaka_shawi
              - name: Mythunga camara
                pbdbTaxonId: txn:148341
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Mythunga/Mythunga_camara
              - name: Tropeognathus mesembrinus
                pbdbTaxonId: txn:164414
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Tropeognathus/Tropeognathus_mesembrinus
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=95393&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:95393; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-5838f8e6-49eb-4421-b5e8-c0d75e7a08c7
          metadataVariant: 0
          sourceKey: kellner2013AnhangueridMaterialRoute
          usage:
            title: "The largest flying reptile from Gondwana: a new specimen of Tropeognathus cf. T. mesembrinus Wellnhofer, 1987 (Pterodactyloidea, Anhangueridae) and other large pterosaurs from the Romualdo Formation, Lower Cretaceous, Brazil"
            url: https://doi.org/10.1590/S0001-37652013000100009
            accessedAt: 2026-10-03
            locator: Printed pp. 117–118, complete figure captions and pixels for Figures 1–3, newly inspected in P5-109. Taxonomic identification, growth and comparative wingspan context retained from P5-108 selected pp. 115–116, 119–124, 126–132; no all-article, specimen, scan or measurement audit.
            scope:
              zh: 2013 年图 1–3 的保存部位与重建界线，以及先前已读鉴定、组织学和翼展方法的材料阅读路线；不作完整科或亚科综述。
              en: Preservation/reconstruction limits in 2013 Figures 1–3 and a material route through previously read identification, histology and wingspan methods; not a complete family or subfamily synthesis.
            readingTargets:
              - name: Tropeognathus mesembrinus
                pbdbTaxonId: txn:164414
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae/Tropeognathinae/Tropeognathus/Tropeognathus_mesembrinus
          originalFields:
            - id
            - title
            - authors
            - doi
            - publishedYear
            - volume
            - issue
            - pages
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
    pbdbTaxonId: txn:95393
    scientificName: Anhangueridae
    commonName: Anhangueridae
    commonNameZh: Anhangueridae
    rank: family
    parentName: Ornithocheiroidea
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/2/text/en
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
      - ref-5838f8e6-49eb-4421-b5e8-c0d75e7a08c7
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: anhanguerid-material-route-0
        title:
          zh: 从模式标本扩展到比较身体与孤立翼骨
          en: Extend holotype reading to comparative bodies and isolated wing bones
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - kellner2013AnhangueridMaterialRoute
      - id: anhanguerid-material-route-1
        title:
          zh: 重建图、组织切片与翼展回答不同问题
          en: Reconstructions, histology and span estimates answer different questions
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - kellner2013AnhangueridMaterialRoute
      - id: taxonomy-1
        title:
          en: Read taxonomic names with definitions and dates
          zh: 分类名称需要带着定义和日期读
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - pentlandFerrodraco2019
          - pentlandHaliskia2024
      - id: readingPath-2
        title:
          en: A route through two Australian holotypes
          zh: 两件澳大利亚正模的比较路线
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
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
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
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
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=95393&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: kellner2013AnhangueridMaterialRoute
        referenceId: ref-5838f8e6-49eb-4421-b5e8-c0d75e7a08c7
        title:
          zh: "The largest flying reptile from Gondwana: a new specimen of Tropeognathus cf. T. mesembrinus Wellnhofer, 1987 (Pterodactyloidea, Anhangueridae) and other large pterosaurs from the Romualdo Formation, Lower Cretaceous, Brazil"
          en: "The largest flying reptile from Gondwana: a new specimen of Tropeognathus cf. T. mesembrinus Wellnhofer, 1987 (Pterodactyloidea, Anhangueridae) and other large pterosaurs from the Romualdo Formation, Lower Cretaceous, Brazil"
        url: https://doi.org/10.1590/S0001-37652013000100009
        scope:
          zh: 2013 年图 1–3 的保存部位与重建界线，以及先前已读鉴定、组织学和翼展方法的材料阅读路线；不作完整科或亚科综述。
          en: Preservation/reconstruction limits in 2013 Figures 1–3 and a material route through previously read identification, histology and wingspan methods; not a complete family or subfamily synthesis.
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
          zh: 进入该分类单元的来源限定读者页，先比较标本与解释边界。
          en: Open the source-bounded account and compare preserved material with its interpretive limits.
      - targetId: txn:399803
        label:
          zh: Ferrodraco
          en: Ferrodraco
        context:
          zh: 进入该分类单元的来源限定读者页，先比较标本与解释边界。
          en: Open the source-bounded account and compare preserved material with its interpretive limits.
      - targetId: txn:492615
        label:
          zh: Haliskia peterseni
          en: Haliskia peterseni
        context:
          zh: 进入该分类单元的来源限定读者页，先比较标本与解释边界。
          en: Open the source-bounded account and compare preserved material with its interpretive limits.
      - targetId: txn:399804
        label:
          zh: Ferrodraco lentoni
          en: Ferrodraco lentoni
        context:
          zh: 进入该分类单元的来源限定读者页，先比较标本与解释边界。
          en: Open the source-bounded account and compare preserved material with its interpretive limits.
      - targetId: pterosauria
        label:
          zh: Pterosauria
          en: Pterosauria
        context:
          zh: 返回翼龙类的精选证据路径；保留各材料和模型的范围。
          en: Return to the selected pterosaur evidence route, retaining specimen and model scope.
      - targetId: txn:478712
        label:
          zh: Thapunngaka
          en: Thapunngaka
        context:
          zh: 对读保存材料与解释边界；精选导航不替代完整分类索引。
          en: Compare preservation and interpretive limits; selected navigation does not replace a complete taxonomic index.
      - targetId: txn:478714
        label:
          zh: Thapunngaka shawi
          en: Thapunngaka shawi
        context:
          zh: 比较正模、第二件标本归属依据及其争议。
          en: Compare holotype evidence, second-specimen referral and its dispute.
      - targetId: txn:148340
        label:
          zh: Mythunga
          en: Mythunga
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
      - targetId: txn:96501
        label:
          en: Ornithocheiroidea
          zh: Ornithocheiroidea
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:442519
        label:
          en: Tropeognathinae
          zh: Tropeognathinae
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:442512
        label:
          en: Coloborhynchinae
          zh: Coloborhynchinae
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
      - targetId: txn:372108
        label:
          en: Maaradactylus
          zh: Maaradactylus
        context:
          zh: 沿记录分类路径查看后代资料；导读不代表全部后代已有完整专论。
          en: Follow the recorded classification path into descendant material; guides do not imply complete monographs for every descendant.
  atlas-node:
    name: Anhangueridae
    commonName: Anhangueridae
    commonNameZh: Anhangueridae
    rank: family
    taxonId: txn:95393
    firstAppearance: 139.1
    lastAppearance: 89.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - rangeKind: global-composite
      taxonomicConcept: Anhangueridae
      geographicScope: PBDB represented occurrence records; not a complete geographic range
      olderMa: 139.1
      youngerMa: 89.8
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence age bracket 139.1–132.6 Ma; last-occurrence bracket 100.5–89.8 Ma. Display uses outer bounds, not direct specimen dates, origin or extinction estimates.
      evidenceBasis: Database-derived outer occurrence-age bounds from the dated raw PBDB response. Broad catalogue ages do not refine the original descriptions’ type-horizon uncertainty.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-e9f69786-79b3-4da7-bdaa-1244e580f3a5
          locator: data/sources/snapshots/pbdb-wing-reader-range-records-2026-10-02.json; response.records oid txn:95393; fea/fla/lea/lla fields
      evidenceLevel: database-derived
      entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Ornithocheiroidea/Anhangueridae
---

# Anhangueridae
