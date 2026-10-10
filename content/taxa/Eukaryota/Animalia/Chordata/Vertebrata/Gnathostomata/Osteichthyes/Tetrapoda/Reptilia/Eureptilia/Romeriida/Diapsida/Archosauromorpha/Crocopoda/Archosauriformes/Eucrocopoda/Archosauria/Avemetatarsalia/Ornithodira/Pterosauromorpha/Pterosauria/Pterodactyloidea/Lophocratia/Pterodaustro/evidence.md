---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pterodaustro
    rank: genus
    sourceDatasetId: null
    name:
      zh: Pterodaustro
      en: Pterodaustro
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - chinsamy2008PterodaustroGrowth
          - cerda2023PterodaustroPeriodontium
          - naish2021PterodaustroFlightModels
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: samplingScope
        sourceIds:
          - chinsamy2008PterodaustroGrowth
          - cerda2023PterodaustroPeriodontium
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - naish2021PterodaustroFlightModels
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - naish2021PterodaustroFlightModels
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
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Pterodaustro
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38488
            locator: Recorded PBDB parent closure beneath the already documented Pterosauria COL-compatible storage anchor.
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
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:38488
            readingTargets:
              - name: Pterodaustro guinazui
                pbdbTaxonId: txn:156857
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Pterodaustro/Pterodaustro_guinazui
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38488&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:38488; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
          metadataVariant: 0
          sourceKey: naish2021PterodaustroFlightModels
          usage:
            title: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
            url: https://doi.org/10.1038/s41598-021-92499-z
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: five scientific main sections actually read in P5-96; taxon sampling, full remaining methods, Tables 1–2, results, conclusions and final discussion reread in P5-97. No raw sections, figures, supplementary data or independent model rerun."
            scope:
              zh: Pterodaustro 幼体滑翔与肱骨弯曲模型及跨标本输入；成长生态与照料保留推断。
              en: Pterodaustro hatchling gliding and humeral bending models with composite inputs; growth ecology and care remain inferential.
            readingTargets:
              - name: Pterodaustro guinazui
                pbdbTaxonId: txn:156857
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Pterodaustro/Pterodaustro_guinazui
              - name: Hamipterus tianshanensis
                pbdbTaxonId: txn:304280
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus/Hamipterus_tianshanensis
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
        - referenceId: ref-28e7307b-0c0f-4812-ad43-da82ac52f727
          metadataVariant: 0
          sourceKey: naish2021PterodaustroFlightCorrection
          usage:
            title: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
            url: https://doi.org/10.1038/s41598-021-96190-1
            accessedAt: 2026-10-03
            locator: "Complete author correction actually read in P5-96: two reference-number corrections only, not a numerical model correction."
            scope:
              zh: Pterodaustro 幼体滑翔与肱骨弯曲模型及跨标本输入；成长生态与照料保留推断。
              en: Pterodaustro hatchling gliding and humeral bending models with composite inputs; growth ecology and care remain inferential.
            readingTargets:
              - name: Pterodaustro guinazui
                pbdbTaxonId: txn:156857
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Lophocratia/Pterodaustro/Pterodaustro_guinazui
              - name: Hamipterus tianshanensis
                pbdbTaxonId: txn:304280
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus/Hamipterus_tianshanensis
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
        - referenceId: ref-6ea3b965-334d-4f74-955e-4ef75f8781c9
          metadataVariant: 0
          sourceKey: chinsamy2008PterodaustroGrowth
          usage:
            title: Developmental growth patterns of the filter-feeder pterosaur, Pterodaustro guiñazui
            url: https://doi.org/10.1098/rsbl.2008.0004
            accessedAt: 2026-10-03
            locator: "PMC2610039: Introduction, Material and methods, Table 1, Results, Discussion, Conclusions and Figures 1–2 captions. Abstract/conclusion and discussion give different later-growth durations; not independently resolved."
            scope:
              zh: 2008 年生长研究的正文、表 1 与图说：多骨采样、骨组织、年周期假设及成熟推断。
              en: "2008 growth-paper text, Table 1 and captions: multiple-bone sampling, histology, annual-cycle assumptions and maturity inference."
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-c532dbea-4d95-4bf9-a0de-ace922ff56c7
          metadataVariant: 0
          sourceKey: cerda2023PterodaustroPeriodontium
          usage:
            title: Palaeohistology reveals an unusual periodontium and tooth implantation in a filter-feeding pterodactyloid pterosaur, Pterodaustro guinazui, from the Lower Cretaceous of Argentina
            url: https://doi.org/10.1111/joa.13878
            accessedAt: 2026-10-03
            locator: "PMC10485577: Introduction, Materials and methods, Results, Discussion 4.1–4.4, Conclusion and Figures 1–5 captions. No independent inspection of images or physical sections."
            scope:
              zh: 2023 年牙齿研究的正文与图说：MIC-V55 下颌采样、牙槽沟、附着与替换的证据限制。
              en: "2023 tooth-paper text and captions: MIC-V55 jaw sampling, dental groove, attachment and replacement limitations."
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:38488
    scientificName: Pterodaustro
    commonName: Pterodaustro
    commonNameZh: Pterodaustro
    rank: genus
    parentName: Lophocratia
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/2/text/en
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
      - ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
      - ref-28e7307b-0c0f-4812-ad43-da82ac52f727
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: pterodaustro-histology-reader-0
        title:
          zh: 先读过滤牙齿，再读成长与飞行
          en: Read filtering teeth before growth and flight
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - chinsamy2008PterodaustroGrowth
          - cerda2023PterodaustroPeriodontium
          - naish2021PterodaustroFlightModels
      - id: pterodaustro-histology-reader-1
        title:
          zh: 按各研究的材料范围比较
          en: Compare the material scope of each study
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - chinsamy2008PterodaustroGrowth
          - cerda2023PterodaustroPeriodontium
      - id: pterodaustro-flight-reader-0
        title:
          zh: 用一个物种入口分开读幼体与成体
          en: Separate young and adult models through one species entry
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - naish2021PterodaustroFlightModels
      - id: pterodaustro-flight-reader-1
        title:
          zh: 从模型输入追到比较页面
          en: Follow model inputs into a comparison page
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - naish2021PterodaustroFlightModels
      - id: pbdb-occurrence-1
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
      - id: pbdb-occurrence-2
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
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38488
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=38488&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: naish2021PterodaustroFlightModels
        referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
        title:
          zh: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
          en: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
        url: https://doi.org/10.1038/s41598-021-92499-z
        scope:
          zh: Pterodaustro 幼体滑翔与肱骨弯曲模型及跨标本输入；成长生态与照料保留推断。
          en: Pterodaustro hatchling gliding and humeral bending models with composite inputs; growth ecology and care remain inferential.
      - id: naish2021PterodaustroFlightCorrection
        referenceId: ref-28e7307b-0c0f-4812-ad43-da82ac52f727
        title:
          zh: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
          en: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
        url: https://doi.org/10.1038/s41598-021-96190-1
        scope:
          zh: Pterodaustro 幼体滑翔与肱骨弯曲模型及跨标本输入；成长生态与照料保留推断。
          en: Pterodaustro hatchling gliding and humeral bending models with composite inputs; growth ecology and care remain inferential.
      - id: chinsamy2008PterodaustroGrowth
        referenceId: ref-6ea3b965-334d-4f74-955e-4ef75f8781c9
        title:
          zh: Developmental growth patterns of the filter-feeder pterosaur, Pterodaustro guiñazui
          en: Developmental growth patterns of the filter-feeder pterosaur, Pterodaustro guiñazui
        url: https://doi.org/10.1098/rsbl.2008.0004
        scope:
          zh: 2008 年生长研究的正文、表 1 与图说：多骨采样、骨组织、年周期假设及成熟推断。
          en: "2008 growth-paper text, Table 1 and captions: multiple-bone sampling, histology, annual-cycle assumptions and maturity inference."
      - id: cerda2023PterodaustroPeriodontium
        referenceId: ref-c532dbea-4d95-4bf9-a0de-ace922ff56c7
        title:
          zh: Palaeohistology reveals an unusual periodontium and tooth implantation in a filter-feeding pterodactyloid pterosaur, Pterodaustro guinazui, from the Lower Cretaceous of Argentina
          en: Palaeohistology reveals an unusual periodontium and tooth implantation in a filter-feeding pterodactyloid pterosaur, Pterodaustro guinazui, from the Lower Cretaceous of Argentina
        url: https://doi.org/10.1111/joa.13878
        scope:
          zh: 2023 年牙齿研究的正文与图说：MIC-V55 下颌采样、牙槽沟、附着与替换的证据限制。
          en: "2023 tooth-paper text and captions: MIC-V55 jaw sampling, dental groove, attachment and replacement limitations."
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:148350
        label:
          en: Lophocratia
          zh: Lophocratia
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:156857
        label:
          en: Pterodaustro guinazui
          zh: Pterodaustro guinazui
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
      - targetId: txn:304280
        label:
          zh: Hamipterus tianshanensis
          en: Hamipterus tianshanensis
        context:
          zh: 对读胚胎分期与实际建模材料，保留跨物种适用边界。
          en: Compare embryonic staging with actual model subjects, retaining cross-species limits.
  atlas-node:
    name: Pterodaustro
    commonName: Pterodaustro
    commonNameZh: Pterodaustro
    rank: genus
    taxonId: txn:38488
    firstAppearance: 121.4
    lastAppearance: 100.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:38488
      rangeKind: global-composite
      taxonomicConcept: Pterodaustro
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 121.4
      youngerMa: 100.5
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 121.4–113.2 Ma and last-occurrence bracket 113.2–100.5 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:38488; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Pterodaustro
