---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Falconinae
    rank: subfamily
    sourceDatasetId: null
    name:
      zh: Falconinae
      en: Falconinae
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
            title: PBDB classification — Falconinae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=99066
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
            pbdbTaxonId: txn:99066
            readingTargets:
              - name: Pediohierax ramenta
                pbdbTaxonId: txn:110891
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Falconiformes/Falconidae/Falconinae/Pediohierax/Pediohierax_ramenta
              - name: Falco duboisi
                pbdbTaxonId: txn:371427
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Falconiformes/Falconidae/Falconinae/Falco/Falco_duboisi
              - name: Falco (Hierofalco) swarthi
                pbdbTaxonId: txn:370427
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Falconiformes/Falconidae/Falconinae/Falco/Falco_(Hierofalco)/Falco_(Hierofalco)_swarthi
              - name: Falco oregonus
                pbdbTaxonId: txn:335675
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Falconiformes/Falconidae/Falconinae/Falco/Falco_oregonus
              - name: Falco medius
                pbdbTaxonId: txn:430346
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Falconiformes/Falconidae/Falconinae/Falco/Falco_medius
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

# Falconinae
