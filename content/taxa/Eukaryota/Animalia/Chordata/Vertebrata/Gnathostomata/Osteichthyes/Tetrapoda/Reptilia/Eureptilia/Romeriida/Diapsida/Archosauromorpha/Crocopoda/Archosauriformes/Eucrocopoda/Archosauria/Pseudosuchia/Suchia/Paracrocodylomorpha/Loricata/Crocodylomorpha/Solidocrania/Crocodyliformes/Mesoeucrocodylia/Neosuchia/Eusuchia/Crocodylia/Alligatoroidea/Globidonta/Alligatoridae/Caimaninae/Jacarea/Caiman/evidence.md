---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Caiman
    rank: genus
    sourceDatasetId: null
    name:
      zh: Caiman
      en: Caiman
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
            title: PBDB classification — Caiman
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=173279
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
            pbdbTaxonId: txn:173279
            readingTargets:
              - name: Caiman brevirostris
                pbdbTaxonId: txn:268181
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Caimaninae/Jacarea/Caiman/Caiman_brevirostris
              - name: Caiman praecursor
                pbdbTaxonId: txn:267672
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Caimaninae/Jacarea/Caiman/Caiman_praecursor
              - name: Caiman paranensis
                pbdbTaxonId: txn:267662
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Caimaninae/Jacarea/Caiman/Caiman_paranensis
              - name: Caiman australis
                pbdbTaxonId: txn:266432
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Caimaninae/Jacarea/Caiman/Caiman_australis
              - name: Caiman wannlangstoni
                pbdbTaxonId: txn:315622
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Crocodyliformes/Mesoeucrocodylia/Neosuchia/Eusuchia/Crocodylia/Alligatoroidea/Globidonta/Alligatoridae/Caimaninae/Jacarea/Caiman/Caiman_wannlangstoni
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

# Caiman
