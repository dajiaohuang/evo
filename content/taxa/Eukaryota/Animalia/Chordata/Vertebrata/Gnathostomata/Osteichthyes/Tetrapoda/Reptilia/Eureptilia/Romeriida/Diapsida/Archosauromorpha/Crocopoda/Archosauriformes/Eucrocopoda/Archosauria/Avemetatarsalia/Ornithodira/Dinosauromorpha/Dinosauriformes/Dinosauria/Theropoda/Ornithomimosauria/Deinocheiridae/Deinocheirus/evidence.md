---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Deinocheirus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Deinocheirus
      en: Deinocheirus
    checkedAt: 2026-10-03
    sections:
      - topic: specimenOverview
        sourceIds:
          - lee2014DeinocheirusReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - lee2014DeinocheirusReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Deinocheirus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38551
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
            pbdbTaxonId: txn:38551
            readingTargets:
              - name: Deinocheirus mirificus
                pbdbTaxonId: txn:57246
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Ornithomimosauria/Deinocheiridae/Deinocheirus/Deinocheirus_mirificus
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
        - referenceId: ref-697ce92d-02cb-4141-8419-a66940186442
          metadataVariant: 0
          sourceKey: lee2014DeinocheirusReader
          usage:
            title: Resolving the long-standing enigmas of a giant ornithomimosaur Deinocheirus mirificus
            url: https://biblio.naturalsciences.be/library-1/rbins-staff-publications/pdfs/Lee%20et%20al.-%202014%20-%20Deinocheirus.pdf
            accessedAt: 2026-10-03
            locator: Institutional advance-online PDF pp.1–4 main text; appended Extended Data captions1–7/table1; pixels PDF1,3,11. Crossref final volume515 issue7526 pages257–260. No online Methods, supplementary matrix or raw specimen rerun.
            scope:
              zh: 依据 Deinocheirus 材料组织类群比较；不复制为其他成员的直接证据。
              en: Comparison route through Deinocheirus material, not direct evidence for every member.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - publishedYear
            - publishedAt
            - url
            - sourceVersion
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
---

# Deinocheirus
