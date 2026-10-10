---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Beishanlong
    rank: genus
    sourceDatasetId: null
    name:
      zh: Beishanlong
      en: Beishanlong
    checkedAt: 2026-10-03
    sections:
      - topic: specimenOverview
        sourceIds:
          - makovicky2010BeishanlongReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - makovicky2010BeishanlongReader
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
            title: PBDB classification — Beishanlong
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=146117
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
            pbdbTaxonId: txn:146117
            readingTargets:
              - name: Beishanlong grandis
                pbdbTaxonId: txn:146118
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Ornithomimosauria/Beishanlong/Beishanlong_grandis
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
        - referenceId: ref-e0e1f98a-1f10-4e2f-93a0-014e96e48674
          metadataVariant: 0
          sourceKey: makovicky2010BeishanlongReader
          usage:
            title: A giant ornithomimosaur from the Early Cretaceous of China
            url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2842665/
            accessedAt: 2026-10-03
            locator: Main scientific paragraphs and figure1–5 captions in published PMC HTML. No figure pixels, supplementary tables/matrices or raw histology rerun. Print/online dates checked against Crossref.
            scope:
              zh: Beishanlong 正模／归入材料、颅后形态、限定组织学与估算；类群为比较路线。
              en: Beishanlong holotype/referrals, postcranial anatomy, bounded histology and estimates; group pages offer comparison routes.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - publishedAt
            - onlinePublishedAt
            - url
            - sourceVersion
            - accessedAt
            - locator
            - scope
        - referenceId: ref-697ce92d-02cb-4141-8419-a66940186442
          metadataVariant: 0
          sourceKey: lee2014DeinocheirusReader
          usage:
            title: Resolving the long-standing enigmas of a giant ornithomimosaur Deinocheirus mirificus
            url: https://biblio.naturalsciences.be/library-1/rbins-staff-publications/pdfs/Lee%20et%20al.-%202014%20-%20Deinocheirus.pdf
            accessedAt: 2026-10-03
            locator: Previously read P5-133 main PDF1–4, appended Extended Data captions and selected pixels; comparison of 2014 phylogeny and Deinocheirus stomach contents only. Not new Beishanlong specimen evidence.
            scope:
              zh: 2014 年恐手龙系统树和胃内容物作为比较，不能转成北山龙的直接形态或食性。
              en: The 2014 Deinocheirus tree and stomach contents are comparative, not direct Beishanlong morphology or diet.
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

# Beishanlong
