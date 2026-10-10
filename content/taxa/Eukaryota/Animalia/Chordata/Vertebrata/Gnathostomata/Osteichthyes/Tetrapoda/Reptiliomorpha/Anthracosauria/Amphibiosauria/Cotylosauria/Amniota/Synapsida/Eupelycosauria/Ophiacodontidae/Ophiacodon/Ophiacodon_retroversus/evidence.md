---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ophiacodon retroversus
    rank: species
    sourceDatasetId: null
    name:
      zh: Ophiacodon retroversus
      en: Ophiacodon retroversus
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: occurrences
        sourceIds:
          - pbdbOtherSynapsidaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: timeline
        sourceIds:
          - pbdbOtherSynapsidaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbOtherSynapsidaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbOtherSynapsidaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Ophiacodon retroversus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=138048&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:138048; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:138048
            selectedOccurrenceIds:
              - occ:295908
              - occ:295921
              - occ:295956
              - occ:295977
              - occ:790535
              - occ:791563
              - occ:791564
              - occ:791565
              - occ:791566
              - occ:791567
              - occ:791568
              - occ:791569
              - occ:791570
              - occ:791571
              - occ:791574
              - occ:1340042
              - occ:1429169
              - occ:1567379
            selectedCollectionIds:
              - col:28141
              - col:28142
              - col:28145
              - col:28148
              - col:28146
              - col:84716
              - col:79162
              - col:28123
              - col:28150
              - col:11165
              - col:79163
              - col:28238
              - col:180991
              - col:221391
            sourceReferenceIds:
              - ref:5692
              - ref:7693
              - ref:28847
              - ref:28557
              - ref:30068
              - ref:77534
            originalIdentificationMappings:
              - occurrenceId: occ:295921
                originalIdentifiedName: Theropleura retroversa n. sp.
                acceptedName: Ophiacodon retroversus
                difference: recombined as
              - occurrenceId: occ:295956
                originalIdentifiedName: Therosaurus watsoni n. gen. n. sp.
                acceptedName: Ophiacodon retroversus
                difference: null
              - occurrenceId: occ:295977
                originalIdentifiedName: Clepsydrops leptocephalus n. sp.
                acceptedName: Ophiacodon retroversus
                difference: null
              - occurrenceId: occ:790535
                originalIdentifiedName: Theropleura triangulata n. sp.
                acceptedName: Ophiacodon retroversus
                difference: null
              - occurrenceId: occ:1429169
                originalIdentifiedName: Theropleura retroversa
                acceptedName: Ophiacodon retroversus
                difference: recombined as
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
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

# Ophiacodon retroversus
