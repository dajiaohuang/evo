---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Triceratops horridus
    rank: species
    sourceDatasetId: null
    name:
      zh: Triceratops horridus
      en: Triceratops horridus
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
            title: PBDB accepted record — Triceratops horridus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63766&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63766; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:63766
            selectedOccurrenceIds:
              - occ:457968
              - occ:465691
              - occ:465710
              - occ:465719
              - occ:465720
              - occ:465721
              - occ:465722
              - occ:465730
              - occ:475086
              - occ:487602
              - occ:491005
              - occ:496313
              - occ:501688
              - occ:514313
              - occ:518593
              - occ:518594
              - occ:518596
              - occ:518597
              - occ:518598
              - occ:518599
              - occ:518600
              - occ:518601
              - occ:518602
              - occ:518605
              - occ:518606
              - occ:518607
              - occ:518609
              - occ:896239
              - occ:901550
              - occ:1237867
              - occ:1301646
              - occ:1335007
              - occ:1543906
              - occ:1588536
              - occ:1593200
              - occ:1598417
            selectedCollectionIds:
              - col:45123
              - col:46119
              - col:46126
              - col:46130
              - col:46131
              - col:46132
              - col:46133
              - col:46136
              - col:47127
              - col:49016
              - col:49529
              - col:50087
              - col:50931
              - col:52107
              - col:52681
              - col:52682
              - col:52684
              - col:52685
              - col:52686
              - col:52687
              - col:52688
              - col:52691
              - col:52692
              - col:52693
              - col:52695
              - col:99441
              - col:100852
              - col:162141
              - col:173842
              - col:179969
              - col:217183
              - col:224486
              - col:225317
              - col:225924
            sourceReferenceIds:
              - ref:11749
              - ref:10620
              - ref:12304
              - ref:14728
              - ref:12568
              - ref:13079
              - ref:13266
              - ref:55599
              - ref:14177
              - ref:53992
              - ref:12314
              - ref:52782
              - ref:77273
              - ref:75378
              - ref:80625
              - ref:81555
              - ref:81831
            originalIdentificationMappings:
              - occurrenceId: occ:465691
                originalIdentifiedName: Ceratops horridus n. sp.
                acceptedName: Triceratops horridus
                difference: recombined as
              - occurrenceId: occ:465710
                originalIdentifiedName: Triceratops serratus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:465719
                originalIdentifiedName: Triceratops elatus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:465720
                originalIdentifiedName: Triceratops obtusus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:465721
                originalIdentifiedName: Triceratops brevicornus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:465722
                originalIdentifiedName: Diceratops hatcheri n. gen. n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:465730
                originalIdentifiedName: Triceratops flabellatus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:475086
                originalIdentifiedName: Triceratops albertensis n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:487602
                originalIdentifiedName: Triceratops elatus
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:501688
                originalIdentifiedName: Triceratops calicornis n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:514313
                originalIdentifiedName: Triceratops eurycephalus n. sp.
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:518605
                originalIdentifiedName: Triceratops elatus
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:518606
                originalIdentifiedName: Triceratops elatus
                acceptedName: Triceratops horridus
                difference: null
              - occurrenceId: occ:901550
                originalIdentifiedName: Triceratops serratus
                acceptedName: Triceratops horridus
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

# Triceratops horridus
