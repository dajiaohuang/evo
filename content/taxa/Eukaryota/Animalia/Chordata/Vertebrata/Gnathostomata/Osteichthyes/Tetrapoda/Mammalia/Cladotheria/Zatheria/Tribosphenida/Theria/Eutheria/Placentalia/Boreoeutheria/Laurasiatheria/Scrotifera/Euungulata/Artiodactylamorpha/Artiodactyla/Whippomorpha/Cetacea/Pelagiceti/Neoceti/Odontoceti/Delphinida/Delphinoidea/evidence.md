---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Delphinoidea
    rank: superfamily
    sourceDatasetId: null
    name:
      zh: Delphinoidea
      en: Delphinoidea
    reviewStatus: source-linked
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
            title: PBDB classification — Delphinoidea
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53268
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
            pbdbTaxonId: txn:53268
            readingTargets:
              - name: Eodelphinus kabatensis
                pbdbTaxonId: txn:136478
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Artiodactylamorpha/Artiodactyla/Whippomorpha/Cetacea/Pelagiceti/Neoceti/Odontoceti/Delphinida/Delphinoidea/Delphinidae/Eodelphinus/Eodelphinus_kabatensis
              - name: Platalearostrum hoekmani
                pbdbTaxonId: txn:182301
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Artiodactylamorpha/Artiodactyla/Whippomorpha/Cetacea/Pelagiceti/Neoceti/Odontoceti/Delphinida/Delphinoidea/Delphinidae/Globicephalinae/Platalearostrum/Platalearostrum_hoekmani
              - name: Astadelphis gastaldii
                pbdbTaxonId: txn:63833
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Artiodactylamorpha/Artiodactyla/Whippomorpha/Cetacea/Pelagiceti/Neoceti/Odontoceti/Delphinida/Delphinoidea/Delphinidae/Globicephalinae/Astadelphis/Astadelphis_gastaldii
              - name: Globicephala uncidens
                pbdbTaxonId: txn:89208
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Artiodactylamorpha/Artiodactyla/Whippomorpha/Cetacea/Pelagiceti/Neoceti/Odontoceti/Delphinida/Delphinoidea/Delphinidae/Globicephalinae/Globicephala/Globicephala_uncidens
              - name: Globicephala etruriae
                pbdbTaxonId: txn:63831
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Artiodactylamorpha/Artiodactyla/Whippomorpha/Cetacea/Pelagiceti/Neoceti/Odontoceti/Delphinida/Delphinoidea/Delphinidae/Globicephalinae/Globicephala/Globicephala_etruriae
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

# Delphinoidea
