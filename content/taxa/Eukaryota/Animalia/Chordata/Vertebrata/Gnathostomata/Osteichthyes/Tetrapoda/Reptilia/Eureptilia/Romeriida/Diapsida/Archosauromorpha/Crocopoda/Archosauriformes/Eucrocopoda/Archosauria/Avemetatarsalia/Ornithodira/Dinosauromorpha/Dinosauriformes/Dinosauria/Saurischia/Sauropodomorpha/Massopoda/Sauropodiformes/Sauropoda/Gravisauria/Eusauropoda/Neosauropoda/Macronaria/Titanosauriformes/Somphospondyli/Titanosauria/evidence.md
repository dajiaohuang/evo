---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Titanosauria
    rank: unranked clade
    sourceDatasetId: null
    name:
      zh: Titanosauria
      en: Titanosauria
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Titanosauria
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=55585
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
            pbdbTaxonId: txn:55585
            readingTargets:
              - name: Borealosaurus wimani
                pbdbTaxonId: txn:84660
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Somphospondyli/Titanosauria/Borealosaurus/Borealosaurus_wimani
              - name: Aegyptosaurus baharijensis
                pbdbTaxonId: txn:66662
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Somphospondyli/Titanosauria/Aegyptosaurus/Aegyptosaurus_baharijensis
              - name: Notocolossus gonzalezparejasi
                pbdbTaxonId: txn:334674
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Somphospondyli/Titanosauria/Colossosauria/Notocolossus/Notocolossus_gonzalezparejasi
              - name: Austroposeidon magnificus
                pbdbTaxonId: txn:346949
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Somphospondyli/Titanosauria/Colossosauria/Lognkosauria/Austroposeidon/Austroposeidon_magnificus
              - name: Drusilasaura deseadensis
                pbdbTaxonId: txn:184916
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Somphospondyli/Titanosauria/Colossosauria/Lognkosauria/Drusilasaura/Drusilasaura_deseadensis
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

# Titanosauria
