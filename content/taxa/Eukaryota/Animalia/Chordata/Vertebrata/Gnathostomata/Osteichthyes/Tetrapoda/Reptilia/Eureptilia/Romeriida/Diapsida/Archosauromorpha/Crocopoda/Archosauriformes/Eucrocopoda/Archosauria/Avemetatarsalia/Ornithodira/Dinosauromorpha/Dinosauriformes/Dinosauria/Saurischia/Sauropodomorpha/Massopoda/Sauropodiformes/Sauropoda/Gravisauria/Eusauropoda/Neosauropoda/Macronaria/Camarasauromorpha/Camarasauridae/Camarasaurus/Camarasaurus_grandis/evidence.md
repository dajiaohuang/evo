---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Camarasaurus grandis
    rank: species
    sourceDatasetId: null
    name:
      zh: Camarasaurus grandis
      en: Camarasaurus grandis
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
            title: PBDB accepted record — Camarasaurus grandis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52961&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52961; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52961
            selectedOccurrenceIds:
              - occ:139307
              - occ:149600
              - occ:408396
              - occ:408398
              - occ:408399
              - occ:408400
              - occ:408740
              - occ:474519
              - occ:481991
              - occ:540202
              - occ:632803
              - occ:632849
            selectedCollectionIds:
              - col:11924
              - col:13214
              - col:13212
              - col:39340
              - col:47065
              - col:48162
              - col:48161
              - col:55329
              - col:68099
            sourceReferenceIds:
              - ref:63746
              - ref:52556
              - ref:14074
              - ref:7813
              - ref:7803
              - ref:7811
              - ref:10618
              - ref:12534
              - ref:12893
              - ref:54842
              - ref:19565
              - ref:19566
            originalIdentificationMappings:
              - occurrenceId: occ:149600
                originalIdentifiedName: Morosaurus grandis
                acceptedName: Camarasaurus grandis
                difference: recombined as
              - occurrenceId: occ:408396
                originalIdentifiedName: Pleurocoelus montanus n. sp.
                acceptedName: Camarasaurus grandis
                difference: null
              - occurrenceId: occ:408398
                originalIdentifiedName: Morosaurus impar n. gen. n. sp.
                acceptedName: Camarasaurus grandis
                difference: null
              - occurrenceId: occ:408399
                originalIdentifiedName: Morosaurus robustus n. sp.
                acceptedName: Camarasaurus grandis
                difference: null
              - occurrenceId: occ:408400
                originalIdentifiedName: Apatosaurus grandis n. sp.
                acceptedName: Camarasaurus grandis
                difference: recombined as
              - occurrenceId: occ:408740
                originalIdentifiedName: Morosaurus grandis
                acceptedName: Camarasaurus grandis
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

# Camarasaurus grandis
