---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Elasmotheriina
    rank: subtribe
    sourceDatasetId: null
    name:
      zh: Elasmotheriina
      en: Elasmotheriina
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
            title: PBDB classification — Elasmotheriina
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=96783
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
            pbdbTaxonId: txn:96783
            readingTargets:
              - name: Iranotherium morgani
                pbdbTaxonId: txn:432615
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Panperissodactyla/Perissodactylamorpha/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea/Rhinocerotidae/Elasmotheriina/Iranotherium/Iranotherium_morgani
              - name: Procoelodonta (Pasalarhinus) tekkayai
                pbdbTaxonId: txn:97737
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Panperissodactyla/Perissodactylamorpha/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea/Rhinocerotidae/Elasmotheriina/Procoelodonta/Procoelodonta_(Pasalarhinus)/Procoelodonta_(Pasalarhinus)_tekkayai
              - name: Bugtirhinus praecursor
                pbdbTaxonId: txn:100752
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Panperissodactyla/Perissodactylamorpha/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea/Rhinocerotidae/Elasmotheriina/Bugtirhinus/Bugtirhinus_praecursor
              - name: Elasmotherium caucasicum
                pbdbTaxonId: txn:432616
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Panperissodactyla/Perissodactylamorpha/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea/Rhinocerotidae/Elasmotheriina/Elasmotheriini/Elasmotherium/Elasmotherium_caucasicum
              - name: Elasmotherium sibiricum
                pbdbTaxonId: txn:432614
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Euungulata/Panperissodactyla/Perissodactylamorpha/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea/Rhinocerotidae/Elasmotheriina/Elasmotheriini/Elasmotherium/Elasmotherium_sibiricum
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

# Elasmotheriina
