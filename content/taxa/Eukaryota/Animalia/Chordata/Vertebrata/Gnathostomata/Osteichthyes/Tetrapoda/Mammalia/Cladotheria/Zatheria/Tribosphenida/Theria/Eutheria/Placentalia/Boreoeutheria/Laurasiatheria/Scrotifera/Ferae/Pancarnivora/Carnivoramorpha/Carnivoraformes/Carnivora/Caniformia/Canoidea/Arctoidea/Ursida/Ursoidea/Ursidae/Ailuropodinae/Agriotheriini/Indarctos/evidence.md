---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Indarctos
    rank: genus
    sourceDatasetId: null
    name:
      zh: Indarctos
      en: Indarctos
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB classification — Indarctos
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=41315
            locator: Recorded PBDB parent closure beneath the already documented Mammalia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:41315
            readingTargets:
              - name: Indarctos atticus
                pbdbTaxonId: txn:90196
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Carnivora/Caniformia/Canoidea/Arctoidea/Ursida/Ursoidea/Ursidae/Ailuropodinae/Agriotheriini/Indarctos/Indarctos_atticus
              - name: Indarctos vireti
                pbdbTaxonId: txn:90202
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Carnivora/Caniformia/Canoidea/Arctoidea/Ursida/Ursoidea/Ursidae/Ailuropodinae/Agriotheriini/Indarctos/Indarctos_vireti
              - name: Indarctos arctoides
                pbdbTaxonId: txn:90201
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Carnivora/Caniformia/Canoidea/Arctoidea/Ursida/Ursoidea/Ursidae/Ailuropodinae/Agriotheriini/Indarctos/Indarctos_arctoides
              - name: Indarctos nevadensis
                pbdbTaxonId: txn:47359
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Carnivora/Caniformia/Canoidea/Arctoidea/Ursida/Ursoidea/Ursidae/Ailuropodinae/Agriotheriini/Indarctos/Indarctos_nevadensis
              - name: Indarctos oregonensis
                pbdbTaxonId: txn:47360
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Carnivora/Caniformia/Canoidea/Arctoidea/Ursida/Ursoidea/Ursidae/Ailuropodinae/Agriotheriini/Indarctos/Indarctos_oregonensis
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

# Indarctos
