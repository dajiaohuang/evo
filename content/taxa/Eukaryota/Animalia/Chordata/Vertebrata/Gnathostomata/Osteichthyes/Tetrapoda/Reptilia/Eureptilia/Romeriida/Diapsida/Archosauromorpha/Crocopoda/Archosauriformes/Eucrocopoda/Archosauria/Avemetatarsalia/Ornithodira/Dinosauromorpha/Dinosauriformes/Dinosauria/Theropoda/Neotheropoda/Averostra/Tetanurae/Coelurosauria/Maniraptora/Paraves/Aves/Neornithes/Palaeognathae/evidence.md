---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeognathae
    rank: superorder
    sourceDatasetId: null
    name:
      zh: Palaeognathae
      en: Palaeognathae
    checkedAt: 2026-10-03
    sections:
      - topic: palaeognathGenomics
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
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
            title: PBDB classification — Palaeognathae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=39261
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
            pbdbTaxonId: txn:39261
            readingTargets:
              - name: Megalapteryx didinus
                pbdbTaxonId: txn:369701
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Neornithes/Palaeognathae/Ratitae/Apterygimorphae/Dinornithiformes/Megalapterygidae/Megalapteryx/Megalapteryx_didinus
              - name: Pachyornis australis
                pbdbTaxonId: txn:401554
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Neornithes/Palaeognathae/Ratitae/Apterygimorphae/Dinornithiformes/Emeidae/Pachyornis/Pachyornis_australis
              - name: Pachyornis elephantopus
                pbdbTaxonId: txn:143730
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Neornithes/Palaeognathae/Ratitae/Apterygimorphae/Dinornithiformes/Emeidae/Pachyornis/Pachyornis_elephantopus
              - name: Euryapteryx geranoides
                pbdbTaxonId: txn:143733
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Neornithes/Palaeognathae/Ratitae/Apterygimorphae/Dinornithiformes/Emeidae/Euryapteryx/Euryapteryx_geranoides
              - name: Anomalopteryx didiformis
                pbdbTaxonId: txn:335241
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Aves/Neornithes/Palaeognathae/Ratitae/Apterygimorphae/Dinornithiformes/Emeidae/Anomalopteryx/Anomalopteryx_didiformis
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
        - sourceKey: sackton2019FlightLossReader
          referenceId: ref-5bd64bcf-d144-4042-85d0-7698b80a8c94
          metadataVariant: 0
          usage:
            title: Convergent regulatory evolution and loss of flight in paleognathous birds
            url: https://doi.org/10.1126/science.aat7244
            accessedAt: 2026-10-03
            locator: Published main Science PDF, all main scientific text and captions; figure 1 pixels only; no supplements or rerun
            scope:
              zh: 明确列出的研究样本导读；不外推全类群。
              en: Route through explicit study samples, not extrapolation to the whole group.
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
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - sourceKey: cloutier2019PalaeognathReader
          referenceId: ref-21d5a78e-cddb-4430-8d22-79f8a455bf0b
          metadataVariant: 0
          usage:
            title: Whole-Genome Analyses Resolve the Phylogeny of Flightless Birds (Palaeognathae) in the Presence of an Empirical Anomaly Zone
            url: https://doi.org/10.1093/sysbio/syz019
            accessedAt: 2026-10-03
            locator: "PMC6857515: sampling, selected marker extraction and species-tree methods, selected results, discussion paragraphs 100–109; not whole-paper review"
            scope:
              zh: 明确列出的研究样本导读；不外推全类群。
              en: Route through explicit study samples, not extrapolation to the whole group.
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
---

# Palaeognathae
