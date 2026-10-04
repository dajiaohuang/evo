---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hamipterus
    commonName: Hami Pterosaur
    commonNameZh: 哈密翼龙
    rank: genus
    taxonId: txn:304279
    firstAppearance: 120
    lastAppearance: 110
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: wang-2017-hamipterus-eggs concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: wang-2017-hamipterus-eggs
          relation: supports
          pages: 1197–1201
          figure: Figures 1–2; Supplementary geological context
          quoteLocator: Locality and stratigraphic levels; egg accumulation; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus
      rangeKind: global-composite
      taxonomicConcept: Hamipterus tianshanensis egg and embryo site occurrence
      geographicScope: Shengjinkou Formation, Turpan-Hami Basin, Xinjiang, China
      olderMa: 115
      youngerMa: 110
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Hamipterus_egg_and_embryo_assemblage/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: wang-2017-hamipterus-eggs
          locator: pp. 1197–1201; Figures 1–2; Supplementary geological context
      reviewStatus: automated-audit-passed
  catalogue-profile:
    scientificName: Hamipterus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Hamipterus
      en: Hamipterus
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - naish2021HamipterusFlightDebate
          - chen2024HamipterusPalate
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - naish2021HamipterusFlightDebate
          - chen2024HamipterusPalate
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
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Hamipterus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=304279
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
            pbdbTaxonId: txn:304279
            readingTargets:
              - name: Hamipterus tianshanensis
                pbdbTaxonId: txn:304280
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus/Hamipterus_tianshanensis
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=304279&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:304279; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-a206324b-f18d-4639-b0a1-48d9e615fd06
          metadataVariant: 0
          sourceKey: unwin2019HamipterusPrenatal
          usage:
            title: Prenatal development in pterosaurs and its implications for their postnatal locomotory ability
            url: https://doi.org/10.1098/rspb.2019.0409
            accessedAt: 2026-10-03
            locator: "Official PMC full HTML: front authors, publication date and rights statement; all four scientific main sections Introduction, Material and methods, Results and Discussion, including textual figure captions. Supplementary tables, figures, original 2014/2017 descriptions and raw specimens not inspected. Public reader use limited to a concise independent summary of developmental inference."
            scope:
              zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
              en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
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
        - referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
          metadataVariant: 0
          sourceKey: naish2021HamipterusFlightDebate
          usage:
            title: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
            url: https://doi.org/10.1038/s41598-021-92499-z
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: metadata; all five scientific main sections Introduction, Methods including taxon sampling, glide and bone-strength assumptions and Table 1, Results including Table 2, complete Discussion and Conclusions. Corrected main text; images, raw specimens, supplemental data and independent model calculations not inspected."
            scope:
              zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
              en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
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
        - referenceId: ref-28e7307b-0c0f-4812-ad43-da82ac52f727
          metadataVariant: 0
          sourceKey: naish2021HatchlingFlightCorrection
          usage:
            title: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
            url: https://doi.org/10.1038/s41598-021-96190-1
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML: entire front and correction body. Two citation-number corrections from reference 12 to 13; no numerical model change stated."
            scope:
              zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
              en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
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
        - referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
          metadataVariant: 0
          sourceKey: chen2024HamipterusPalate
          usage:
            title: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
            url: https://doi.org/10.1038/s42003-024-06132-6
            accessedAt: 2026-10-03
            locator: "Official Europe PMC XML actually read in P5-93: all seven scientific main sections and Table 1, including CT of IVPP V 18943.3 and comparison with V 18943.1. Figure pixels and raw scans not inspected."
            scope:
              zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
              en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
            readingTargets:
              - name: Dsungaripterus weii
                pbdbTaxonId: txn:100403
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Dsungaripteridae/Dsungaripterus/Dsungaripterus_weii
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
    pbdbTaxonId: txn:304279
    scientificName: Hamipterus
    commonName: Hamipterus
    commonNameZh: Hamipterus
    rank: genus
    parentName: Pteranodontoidea
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
      - ref-a206324b-f18d-4639-b0a1-48d9e615fd06
      - ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
      - ref-28e7307b-0c0f-4812-ad43-da82ac52f727
      - ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: hamipterus-reader-0
        title:
          zh: 从繁殖材料进入成长争论
          en: Enter developmental debate through reproductive material
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - naish2021HamipterusFlightDebate
          - chen2024HamipterusPalate
      - id: hamipterus-reader-1
        title:
          zh: 先辨材料阶段，再辨研究对象
          en: Identify developmental stage, then model subject
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - naish2021HamipterusFlightDebate
          - chen2024HamipterusPalate
      - id: pbdb-occurrence-1
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
      - id: pbdb-occurrence-2
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
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=304279
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=304279&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: unwin2019HamipterusPrenatal
        referenceId: ref-a206324b-f18d-4639-b0a1-48d9e615fd06
        title:
          zh: Prenatal development in pterosaurs and its implications for their postnatal locomotory ability
          en: Prenatal development in pterosaurs and its implications for their postnatal locomotory ability
        url: https://doi.org/10.1098/rspb.2019.0409
        scope:
          zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
          en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
      - id: naish2021HamipterusFlightDebate
        referenceId: ref-bd571ca5-15db-43e1-8678-cd07f4dd0b0a
        title:
          zh: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
          en: "Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
        url: https://doi.org/10.1038/s41598-021-92499-z
        scope:
          zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
          en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
      - id: naish2021HatchlingFlightCorrection
        referenceId: ref-28e7307b-0c0f-4812-ad43-da82ac52f727
        title:
          zh: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
          en: "Author Correction: Powered flight in hatchling pterosaurs: evidence from wing form and bone strength"
        url: https://doi.org/10.1038/s41598-021-96190-1
        scope:
          zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
          en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
      - id: chen2024HamipterusPalate
        referenceId: ref-fc799d8a-ffe6-48e8-9b58-ac9ceff2c059
        title:
          zh: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
          en: "New insights into pterosaur cranial anatomy: X-ray imaging reveals palatal structure and evolutionary trends"
        url: https://doi.org/10.1038/s42003-024-06132-6
        scope:
          zh: 胚胎分期与出壳飞行争议、跨类群模型的适用范围，以及本种腭部扫描结果；不等于直接行为观察或完整生活史。
          en: Embryonic staging and hatchling-flight debate, limits of cross-taxon models and species-specific palatal scans; not observed behavior or complete life history.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:96505
        label:
          en: Pteranodontoidea
          zh: Pteranodontoidea
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:304280
        label:
          en: Hamipterus tianshanensis
          zh: Hamipterus tianshanensis
        context:
          zh: 对读该物种的具名采集地、地层区间与原引文；不是完整生态比较。
          en: Compare this species’ named collections, stratigraphic brackets and original reference links; not a complete ecological comparison.
---

# Hamipterus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Hamipterus is represented by eggs and embryos from at least four stratigraphic levels at the Shengjinkou locality; those repeated local horizons do not establish a global genus range or nesting distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The stratigraphic repetition and locality are directly documented. High confidence is restricted to the excavated site and sampled levels.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
地层重复与地点均有直接记录。高置信度仅限已发掘地点和取样层位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
哈密翼龙由胜金口地点至少四个地层层位中的蛋和胚胎表示；这些重复局部层位不建立全球属级范围或筑巢分布。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The display interval is a broad Lower Cretaceous formation-level envelope and not a direct date on individual eggs.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Eggs and embryos are recorded across at least four stratigraphic levels at the documented Hamipterus locality.
<!-- /evo:text -->
