---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Alligator
    rank: genus
    sourceDatasetId: null
    name:
      zh: Alligator
      en: Alligator
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbCrocodylomorphTaxonomy20261002
          - pbdbCrocodylomorphOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - pbdbCrocodylomorphOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
    sources:
      referenceBindings:
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphTaxonomy20261002
          usage:
            title: PBDB classification — Alligator
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38423
            locator: Recorded PBDB parent closure beneath the already documented Crocodylomorpha COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:38423
            readingTargets:
              - name: Alligator hantoniensis
                pbdbTaxonId: txn:317007
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Alligatorinae/Alligator/Alligator_hantoniensis
              - name: Alligator thomsoni
                pbdbTaxonId: txn:96548
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Alligatorinae/Alligator/Alligator_thomsoni
              - name: Alligator mefferdi
                pbdbTaxonId: txn:96549
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Alligatorinae/Alligator/Alligator_mefferdi
              - name: Alligator hailensis
                pbdbTaxonId: txn:427868
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Alligatorinae/Alligator/Alligator_hailensis
              - name: Alligator gaudryi
                pbdbTaxonId: txn:317091
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Alligatorinae/Alligator/Alligator_gaudryi
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Alligator
