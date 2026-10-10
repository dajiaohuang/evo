---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stegoceras validum
    rank: species
    sourceDatasetId: null
    name:
      zh: Stegoceras validum
      en: Stegoceras validum
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
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Stegoceras validum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=81379&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
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
            locator: 2026-10-02 occurrence response accepted_no txn:81379; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:81379
            selectedOccurrenceIds:
              - occ:478797
              - occ:483679
              - occ:485973
              - occ:485974
              - occ:488095
              - occ:500520
              - occ:500524
              - occ:501213
              - occ:501216
              - occ:501217
              - occ:528331
              - occ:565497
              - occ:578258
              - occ:584088
              - occ:606142
              - occ:606143
              - occ:606144
              - occ:606148
              - occ:606151
              - occ:606152
              - occ:606153
              - occ:606156
              - occ:606158
              - occ:606159
              - occ:606161
              - occ:668729
              - occ:715462
              - occ:715649
              - occ:1629364
            selectedCollectionIds:
              - col:47629
              - col:14491
              - col:48618
              - col:48619
              - col:14470
              - col:50825
              - col:50826
              - col:50827
              - col:50829
              - col:50830
              - col:53976
              - col:59107
              - col:60876
              - col:61452
              - col:64646
              - col:64647
              - col:64648
              - col:64652
              - col:64656
              - col:64657
              - col:64658
              - col:64660
              - col:64662
              - col:64663
              - col:64665
              - col:72144
              - col:76714
              - col:76752
              - col:230768
            sourceReferenceIds:
              - ref:12772
              - ref:13582
              - ref:24421
              - ref:14453
              - ref:14571
              - ref:12773
              - ref:25127
              - ref:17550
              - ref:25954
              - ref:46742
            originalIdentificationMappings:
              - occurrenceId: occ:478797
                originalIdentifiedName: Ornatotholus browni
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:485973
                originalIdentifiedName: Stegoceras browni n. sp.
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:485974
                originalIdentifiedName: Ornatotholus browni
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:501216
                originalIdentifiedName: Ornatotholus browni
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:501217
                originalIdentifiedName: Hanssuesia sternbergi
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:528331
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:565497
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:578258
                originalIdentifiedName: Stegoceras validus n. gen. n. sp.
                acceptedName: Stegoceras validum
                difference: corrected to
              - occurrenceId: occ:606142
                originalIdentifiedName: Stegoceras validus
                acceptedName: Stegoceras validum
                difference: corrected to
              - occurrenceId: occ:606143
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:606144
                originalIdentifiedName: Troodon sternbergi
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:606148
                originalIdentifiedName: Stegoceras validus
                acceptedName: Stegoceras validum
                difference: corrected to
              - occurrenceId: occ:606151
                originalIdentifiedName: Troodon sternbergi n. sp.
                acceptedName: Stegoceras validum
                difference: null
              - occurrenceId: occ:606152
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:606153
                originalIdentifiedName: Stegoceras validus
                acceptedName: Stegoceras validum
                difference: corrected to
              - occurrenceId: occ:606156
                originalIdentifiedName: Stegoceras validus
                acceptedName: Stegoceras validum
                difference: corrected to
              - occurrenceId: occ:606158
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:606159
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:606161
                originalIdentifiedName: Troodon validus
                acceptedName: Stegoceras validum
                difference: recombined as
              - occurrenceId: occ:668729
                originalIdentifiedName: Gravitholus albertae n. gen. n. sp.
                acceptedName: Stegoceras validum
                difference: null
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

# Stegoceras validum
