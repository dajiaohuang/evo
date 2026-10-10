---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Balaur
    rank: genus
    sourceDatasetId: null
    name:
      zh: Balaur
      en: Balaur
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - csiki2010Balaur
          - cau2015Balaur
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Balaur
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=170642
            locator: Recorded PBDB parent closure beneath the already documented Dinosauria COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:170642
            readingTargets:
              - name: Balaur bondoc
                pbdbTaxonId: txn:170643
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Balaur/Balaur_bondoc
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
        - referenceId: ref-4715ce55-eb3d-403c-bbd6-0ac0847b68e4
          metadataVariant: 0
          sourceKey: csiki2010Balaur
          usage:
            locator: Original abstract, Holotype, Referred specimens, Horizon and locality, Diagnosis and beginning of Description, as available in PMC article.
            accessedAt: 2026-10-03
            scope:
              zh: 直接读到的 2010 年原始描述标本、地点与诊断段；不是全文、补充材料或原标本复查。
              en: Directly read specimen, locality and diagnosis sections of the 2010 description; not a full-text, supplement or physical-specimen rereview.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-ff327178-3c8a-42ad-8e7a-40838e7977b8
          metadataVariant: 0
          sourceKey: cau2015Balaur
          usage:
            locator: Introduction, Materials and Methods, selected hand/foot anatomy subsections, Results, Discussion and Conclusions; Figure 7 caption.
            accessedAt: 2026-10-03
            scope:
              zh: 2015 年原始重新编码与亲缘分析，以及作者的形态和生态解释；不作后续分类共识或直接行为观察。
              en: The 2015 re-scoring and phylogenetic analyses, with the authors’ anatomical/ecological interpretations; not later consensus or direct behavior.
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
---

# Balaur
