---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Choerolophodon pentelici
    rank: species
    sourceDatasetId: null
    name:
      zh: Choerolophodon pentelici
      en: Choerolophodon pentelici
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
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Choerolophodon pentelici
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=90205&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
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
            locator: 2026-10-02 occurrence response accepted_no txn:90205; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:90205
            selectedOccurrenceIds:
              - occ:363704
              - occ:541087
              - occ:541088
              - occ:686566
              - occ:687020
              - occ:706253
              - occ:706337
              - occ:706385
              - occ:706668
              - occ:1189502
              - occ:1212773
              - occ:1348586
              - occ:1348598
              - occ:1348605
              - occ:1348613
              - occ:1348644
              - occ:1348667
              - occ:1348708
              - occ:1350691
              - occ:1357394
              - occ:1389655
              - occ:1427667
              - occ:1431994
              - occ:1448672
              - occ:1449243
              - occ:1449514
              - occ:1451394
              - occ:1451402
              - occ:1451404
              - occ:1451405
              - occ:1451406
              - occ:1451407
              - occ:1453444
              - occ:1453554
              - occ:1453556
              - occ:1498756
              - occ:1498784
              - occ:1498812
              - occ:1509059
              - occ:1517498
              - occ:1533756
              - occ:1694633
            selectedCollectionIds:
              - col:34462
              - col:56563
              - col:73869
              - col:73901
              - col:60268
              - col:75797
              - col:36143
              - col:60271
              - col:151910
              - col:157582
              - col:182745
              - col:182746
              - col:182748
              - col:182749
              - col:182750
              - col:32374
              - col:182754
              - col:32189
              - col:184368
              - col:191070
              - col:197446
              - col:199755
              - col:202120
              - col:202222
              - col:202257
              - col:202528
              - col:195490
              - col:195489
              - col:202216
              - col:32375
              - col:32376
              - col:202703
              - col:182751
              - col:202724
              - col:208566
              - col:208567
              - col:208568
              - col:210641
              - col:195562
              - col:215240
            sourceReferenceIds:
              - ref:9080
              - ref:15232
              - ref:24807
              - ref:24838
              - ref:48740
              - ref:51833
              - ref:69398
              - ref:60908
              - ref:69452
              - ref:61128
              - ref:61767
              - ref:67327
              - ref:67928
              - ref:69473
              - ref:69317
              - ref:69395
              - ref:69433
              - ref:72006
              - ref:72688
              - ref:70440
              - ref:31396
              - ref:91770
            originalIdentificationMappings:
              - occurrenceId: occ:541088
                originalIdentifiedName: Synconolophus serridentinoides
                acceptedName: Choerolophodon pentelici
                difference: null
              - occurrenceId: occ:687020
                originalIdentifiedName: Mastodon pentilici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:706253
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:706337
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:706385
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:706668
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1348605
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1348613
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1348644
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1350691
                originalIdentifiedName: Choerolophodon pentelicus
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1449514
                originalIdentifiedName: Mastodon (Choerolophodon) pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1451394
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1517498
                originalIdentifiedName: Choerolophodon pentelicus
                acceptedName: Choerolophodon pentelici
                difference: recombined as
              - occurrenceId: occ:1694633
                originalIdentifiedName: Mastodon pentelici
                acceptedName: Choerolophodon pentelici
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

# Choerolophodon pentelici
